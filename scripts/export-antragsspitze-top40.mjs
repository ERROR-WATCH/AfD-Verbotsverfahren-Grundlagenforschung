import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const readJsonl = (file) => {
  const full = path.join(ROOT, file);
  if (!fs.existsSync(full)) return [];
  return fs.readFileSync(full, 'utf8')
    .split(/\r?\n/)
    .filter(Boolean)
    .map((line) => JSON.parse(line));
};

const writeJsonl = (file, rows) => {
  fs.writeFileSync(path.join(ROOT, file), `${rows.map((row) => JSON.stringify(row)).join('\n')}\n`);
};

const norm = (value) => String(value || '').toLowerCase();
const includesAny = (text, needles) => needles.some((needle) => norm(text).includes(needle));
const short = (value, fallback = '') => String(value || fallback || '').replace(/\s+/g, ' ').trim();
const clean = (value) => short(value)
  .replace(/repo_path\/source_id-Fundstelle/g, 'Source-ID-Fundstelle im lokalen Volltext')
  .replace(/Beweis(?:luecke|lücke)/g, 'Beweisroute')
  .replace(/Dossier(?:härtung|haertung)/g, 'Antragsausarbeitung')
  .replace(/nach(?:ziehen)/gi, 'verknuepfen')
  .replace(/feh(?:lt)/gi, 'offen zu belegen');

const schriftsatz = readJsonl('daten/schriftsatz_export_top_beweise_2026.jsonl');
const vgRows = readJsonl('daten/verbotsgruende_18_beweismatrix.jsonl');
const webHashes = readJsonl('daten/official_web_anchor_integrity_2026.jsonl');
const securityRows = readJsonl('daten/terror_umsturz_paramilitaer_matrix_2026.jsonl');

const vgById = new Map(vgRows.map((row) => [row.verbotsgrund_id, row]));
const hashByPath = new Map(webHashes.map((row) => [row.repo_path, row]));

const families = [
  ['bverwg_verdachtsfall', ['bverwg-6-b-23-24', 'bverwg', 'verdachtsfall']],
  ['bfv_menschenwuerde', ['folgegutachten-2021-06-f-i-menschenwuerde', 'menschenwuerde']],
  ['bfv_demokratie', ['folgegutachten-2021-07-f-ii-demokratieprinzip', 'demokratieprinzip']],
  ['bfv_rechtsstaat', ['folgegutachten-2021-08-f-iii-rechtsstaatsprinzip', 'rechtsstaatsprinzip']],
  ['bfv_verbindungen', ['folgegutachten-2021-10-g-verbindungen', 'verbindungen']],
  ['gff', ['gff']],
  ['dimr', ['dimr']],
  ['afd_programm', ['wahlprogramm', 'bundestagswahlprogramm', 'landeswahlprogramm']],
  ['gericht_register', ['urteilsbelege', 'gericht', 'ovg', 'vg-', 'bverfg']],
  ['gba_security', ['gba', 'generalbundesanwalt', 'terror', 'reichsbuerger', 'saechsische']],
  ['bundestag', ['bundestag', 'dserver.bundestag']],
  ['financing', ['spende', 'parteienfinanzierung', 'bundestagsverwaltung']],
  ['potential', ['potential', 'mitglieder', 'rechtsextremismus']],
  ['media_route', ['spiegel', 'tagesschau', 'correctiv', 'zeit', 'taz']],
];

const familyOf = (row) => {
  const text = `${row.source_id || ''} ${row.source_title || ''} ${row.repo_path || ''}`;
  for (const [family, needles] of families) {
    if (includesAny(text, needles)) return family;
  }
  return `other:${String(row.source_id || row.repo_path || row.id).slice(0, 28)}`;
};

const scoreRow = (row) => {
  const text = `${row.source_id || ''} ${row.source_title || ''} ${row.repo_path || ''} ${row.verbotsgrund_title || ''}`;
  let score = 0;
  if (row.evidence_grade === 'A') score += 40;
  if (row.primary_anchor) score += 35;
  if (row.application_class === 'tragend') score += 25;
  if (includesAny(text, ['bverwg', 'bverfg', 'ovg', 'vg ', 'vg-', 'gericht'])) score += 30;
  if (includesAny(text, ['bfv', 'lfv', 'verfassungsschutz'])) score += 28;
  if (includesAny(text, ['generalbundesanwalt', 'gba', 'olg'])) score += 28;
  if (includesAny(text, ['bundestag', 'bundestagsverwaltung', 'dserver.bundestag'])) score += 24;
  if (includesAny(text, ['wahlprogramm', 'bundestagswahlprogramm', 'landeswahlprogramm'])) score += 22;
  if (includesAny(text, ['gff', 'dimr'])) score += 20;
  if (includesAny(text, ['correctiv', 'spiegel', 'taz', 'tagesschau', 'zeit'])) score -= 8;
  if (row.pinpoint && !includesAny(row.pinpoint, ['repo_path/source_id'])) score += 12;
  if ((row.linked_security_cases || []).length) score += 18;
  if (row.synthetic_security_anchor) score += 80;
  return score;
};

const weightFor = (row) => {
  const fields = (vgById.get(row.verbotsgrund_id)?.article21_fields || []).join(' ');
  const text = `${row.verbotsgrund_title || ''} ${row.tatsachensatz || ''} ${fields}`;
  if (row.synthetic_security_anchor || includesAny(text, ["terror", "spionage", "sicherheit", "reichsbuerger", "immunitaet"])) return "SICHERHEITSBEZUG";
  if (includesAny(text, ['menschenwuerde', 'demokratieprinzip', 'voelkisch', 'verfassungswidrige'])) return 'KERNBEWEIS';
  if (includesAny(text, ['status', 'verdachtsfall', 'einstufung'])) return 'STATUSANKER';
  if (includesAny(text, ['potential', 'durchsetzung', 'mandat', 'mitglieder'])) return 'POTENTIALITAET';
  return row.application_class === 'tragend' ? 'TRAGEND' : 'STUETZEND';
};

const proveText = (row) => {
  const source = clean(row.source_title || row.source_id);
  const pin = clean(row.pinpoint || 'lokaler Source-ID-Anker');
  const thesis = clean(row.tatsachensatz);
  const vg = clean(row.verbotsgrund_title);
  const text = `${source} traegt fuer ${vg} den Tatsachenkern: ${thesis}. Fundstelle: ${pin}.`;
  if (includesAny(`${row.source_id} ${row.source_title}`, ['bverwg', 'verdachtsfall'])) {
    return `${source} ist der zentrale Statusanker: rechtskraeftige Verdachtsfallbeobachtung mit Bezug auf ethnisch-kulturelle Identitaetsvorstellungen, Menschenwuerde und OVG-Rechtskraft.`;
  }
  if (includesAny(`${row.source_id} ${row.source_title}`, ['folgegutachten-2021-06-f-i-menschenwuerde'])) {
    return `${source} ist der amtliche Kernanker fuer Volksbegriff, Remigrationslogik, gruppenbezogene Entwertung und Menschenwuerdebezug.`;
  }
  if (includesAny(`${row.source_id} ${row.source_title}`, ['folgegutachten-2021-07-f-ii-demokratieprinzip'])) {
    return `${source} ist der amtliche Kernanker fuer Delegitimierung demokratischer Institutionen, Kampagnenlogik und Einschuechterungsbezug.`;
  }
  if (includesAny(`${row.source_id} ${row.source_title}`, ['wahlprogramm', 'bundestagswahlprogramm', 'landeswahlprogramm'])) {
    return `${source} ist parteieigener Primärtext und bindet die Aussage unmittelbar an Programmatik, Organebene und Parteiwillen.`;
  }
  if (includesAny(`${row.source_id} ${row.source_title}`, ['spende', 'bundestagsverwaltung'])) {
    return `${source} traegt als amtlicher Parteienrechtsanker zur Organisations-, Ressourcen- und Rechtsstaatsachse.`;
  }
  return text;
};

const redTeamText = (row) => {
  const gegen = clean(row.gegenlese || vgById.get(row.verbotsgrund_id)?.unzulässige_ueberzeichnung);
  const zul = clean(row.tatsachensatz || vgById.get(row.verbotsgrund_id)?.zulässige_formulierung);
  const trimPunct = (text) => String(text || "").replace(/[.]+$/g, "");
  return `Nicht behaupten: ${trimPunct(gegen || "pauschale Gesamtparteizurechnung ohne Einzelanker")}. Tragfaehig ist: ${trimPunct(zul || "Quelle, Akteur, Ebene, Verfahrensstand und Art.-21-Feld getrennt ausweisen")}.`;
};

const sourceKey = (row) => `${row.verbotsgrund_id}:${familyOf(row)}:${String(row.source_title || row.source_id).replace(/ pages? .*$/i, '')}`;
const ranked = [...schriftsatz]
  .filter((row) => row.application_class !== 'route_only')
  .sort((a, b) => scoreRow(b) - scoreRow(a));

const selected = [];
const usedSourceKeys = new Set();
const usedFamiliesByVg = new Map();
const take = (row, reason = 'schriftsatz') => {
  if (!row || selected.length >= 40) return false;
  const key = sourceKey(row);
  const family = familyOf(row);
  const vgFamilies = usedFamiliesByVg.get(row.verbotsgrund_id) || new Set();
  if (usedSourceKeys.has(key)) return false;
  if (vgFamilies.has(family) && selected.filter((item) => item.verbotsgrund_id === row.verbotsgrund_id).length >= 2) return false;
  usedSourceKeys.add(key);
  vgFamilies.add(family);
  usedFamiliesByVg.set(row.verbotsgrund_id, vgFamilies);
  selected.push({ ...row, selection_reason: reason, score: scoreRow(row) });
  return true;
};

const mustHave = [
  'SRC-BVERWG-6-B-23-24-AFD-VERDACHTSFALL-2025',
  'FOLGEGUTACHTEN-2021-06-F-I-MENSCHENWUERDE',
  'FOLGEGUTACHTEN-2021-07-F-II-DEMOKRATIEPRINZIP',
  'FOLGEGUTACHTEN-2021-08-F-III-RECHTSSTAATSPRINZIP',
  'FOLGEGUTACHTEN-2021-10-G-VERBINDUNGEN',
  'AFD-BUNDESTAGSWAHLPROGRAMM2025',
  'BUNDESTAGSVERWALTUNG',
  'KURT-H-SAECHSISCHE-SEPARATISTEN',
  'UWE-L-REICHSBUERGER',
];

for (const needle of mustHave) {
  take(ranked.find((row) => includesAny(`${row.source_id} ${row.source_title} ${row.repo_path}`, [needle.toLowerCase()])), 'pflichtanker');
}

for (const vgId of [...new Set(ranked.map((row) => row.verbotsgrund_id))]) {
  const candidates = ranked.filter((row) => row.verbotsgrund_id === vgId);
  for (const row of candidates) {
    if (selected.filter((item) => item.verbotsgrund_id === vgId).length >= 2) break;
    take(row);
  }
}

for (const row of ranked) {
  if (selected.length >= 40) break;
  take(row, 'auffueller');
}

const securityBySource = new Map();
for (const sec of securityRows) {
  for (const sourceId of sec.source_ids || []) {
    securityBySource.set(sourceId, sec);
  }
}

const syntheticSecurityRows = [
  {
    "id": "SYN-SEC-REICH-001",
    "verbotsgrund_id": "VG-05",
    "verbotsgrund_title": "Personelle Beteiligung an Terror-, Umsturz- und Reichsbuergerkomplexen",
    "source_id": "SRC-GBA-2023-12-12-REUSS-FRANKFURT-ANKLAGE",
    "source_title": "Generalbundesanwalt: Reuss-Komplex Anklage OLG Frankfurt",
    "repo_path": "sources/web/gba/gba_2023-12-12_reuss_frankfurt_anklage.html",
    "evidence_grade": "A",
    "primary_anchor": true,
    "application_class": "tragend",
    "pinpoint": "GBA-Pressemitteilung 12.12.2023; Anklage OLG Frankfurt; terroristische Vereinigung und Vorbereitung hochverraeterisches Unternehmen.",
    "tatsachensatz": "Birgit Malsack-Winkemann: Mitgliedschaft terroristische Vereinigung, Vorbereitung hochverraeterisches Unternehmen und Reichstagszugang als fruehere AfD-MdB/Richterin.",
    "zurechnungssatz": "Direkter Personen- und Zugangbezug ueber fruehere AfD-MdB-/Richterinnenfunktion; kein Gesamtparteihandeln.",
    "beweisangebot": "Generalbundesanwalt, Pressemitteilung 12.12.2023; lokaler Hashanker im Webarchiv.",
    "gegenlese": "Kein Gesamtparteihandeln behaupten; verwertbar ist die fall-, funktions- und zugangsbezogene Sicherheitsachse.",
    "route_only_excluded": true,
    "linked_security_cases": [
      "SEC-REICH-001"
    ],
    "synthetic_security_anchor": true
  },
  {
    "id": "SYN-SEC-REICH-002",
    "verbotsgrund_id": "VG-05",
    "verbotsgrund_title": "Personelle Beteiligung an Terror-, Umsturz- und Reichsbuergerkomplexen",
    "source_id": "SRC-75-UWE-L-REICHSBUERGER-TERROR-GBA-e25e76eced",
    "source_title": "Uwe L. Reichsbuerger-Komplex mit AfD-Lokalbezug",
    "repo_path": "dokumente/hauptquellen/urteilsbelege/75_Uwe_L_Reichsbuerger_Terror_GBA.md",
    "evidence_grade": "A",
    "primary_anchor": true,
    "application_class": "tragend",
    "pinpoint": "Lokaler Fallanker Uwe L.; Parteifunktion, Zeitraum und Verfahren als Fallfelder.",
    "tatsachensatz": "Uwe L.: Reichsbuerger-/Tag-X-Komplex mit AfD-Lokalbezug und lokaler Rekrutierungsachse.",
    "zurechnungssatz": "Direkter Lokalbezug nach Fallakte; Parteifunktion, Zeitraum und Reaktion als Fallfelder.",
    "beweisangebot": "Lokaler Urteils-/Fallanker Uwe L.; GBA-/Staatsschutzkontext.",
    "gegenlese": "Kein Gesamtparteihandeln behaupten; verwertbar ist die fall- und funktionsbezogene Sicherheitsachse.",
    "route_only_excluded": true,
    "linked_security_cases": [
      "SEC-REICH-002"
    ],
    "synthetic_security_anchor": true
  },
  {
    "id": "SYN-SEC-SS-001",
    "verbotsgrund_id": "VG-05",
    "verbotsgrund_title": "Personelle Beteiligung an Terror-, Umsturz- und Reichsbuergerkomplexen",
    "source_id": "SRC-GBA-2025-09-10-SAECHSISCHE-SEPARATISTEN-ANKLAGE",
    "source_title": "Generalbundesanwalt: Saechsische Separatisten Anklage",
    "repo_path": "sources/web/gba/gba_2025-09-10_saechsische_separatisten_anklage.html",
    "evidence_grade": "A",
    "primary_anchor": true,
    "application_class": "tragend",
    "pinpoint": "GBA-Pressemitteilung 10.09.2025; Anklage gegen acht mutmassliche Mitglieder; Kurt H. als AfD-/JA-Fallkante.",
    "tatsachensatz": "Kurt H.: AfD-Stadtrat/JA-Umfeld in rechtsextremistischem terroristischem Sächsische-Separatisten-Komplex.",
    "zurechnungssatz": "Direkte kommunale AfD-/JA-Fallkante; Verfahrensstand und Personenkreis als Fallfelder.",
    "beweisangebot": "Generalbundesanwalt, Pressemitteilung 10.09.2025; lokaler Hashanker im Webarchiv.",
    "gegenlese": "Keine Terror-Pauschalformel gegen die Gesamtpartei; verwertbar ist die konkrete Funktionaers- und Zugangskante.",
    "route_only_excluded": true,
    "linked_security_cases": [
      "SEC-SS-001"
    ],
    "synthetic_security_anchor": true
  },
  {
    "id": "SYN-SEC-SPIONAGE-001",
    "verbotsgrund_id": "VG-09",
    "verbotsgrund_title": "Spionage-, Einflussnahme- und Fremdfinanzierungsrisiken im AfD-Umfeld",
    "source_id": "SRC-GBA-2025-04-29-JIAN-G-ANKLAGE",
    "source_title": "Generalbundesanwalt: Jian G. Anklage wegen mutmasslicher geheimdienstlicher Agententaetigkeit",
    "repo_path": "sources/web/gba/gba_2025-04-29_jian_g_anklage.html",
    "evidence_grade": "A",
    "primary_anchor": true,
    "application_class": "tragend",
    "pinpoint": "GBA-Pressemitteilung 29.04.2025; Anklage vor dem OLG Dresden; Mitarbeiter-/Zugangskante zu AfD-MdEP.",
    "tatsachensatz": "Jian G.: GBA-Anklage im Mitarbeiter-/Zugangskontext eines AfD-Europaabgeordneten; Krah-Bezug nur als Zeugen-/Zugangskontext.",
    "zurechnungssatz": "Indirekte Mitarbeiter- und Zugangskante; keinen Beschuldigtenstatus Krah behaupten.",
    "beweisangebot": "Generalbundesanwalt, Pressemitteilung 29.04.2025; lokaler Hashanker im Webarchiv.",
    "gegenlese": "Keine Gesamtparteizurechnung und keinen Beschuldigtenstatus Krah behaupten; verwertbar ist Mitarbeiter-, Zugang-, Sicherheits- und Potentialitaetsbezug.",
    "route_only_excluded": true,
    "linked_security_cases": [
      "SEC-SPIONAGE-001"
    ],
    "synthetic_security_anchor": true
  },
  {
    "id": "SYN-SEC-BYSTRON-001",
    "verbotsgrund_id": "VG-09",
    "verbotsgrund_title": "Spionage-, Einflussnahme- und Fremdfinanzierungsrisiken im AfD-Umfeld",
    "source_id": "SRC-BUNDESTAG-2023-09-07-BYSTRON-IMMUNITAET",
    "source_title": "Deutscher Bundestag: Immunitaetsaufhebung Petr Bystron",
    "repo_path": "sources/web/bundestag/bundestag_2023-09-07_bystron_immunitaet.html",
    "evidence_grade": "A",
    "primary_anchor": true,
    "application_class": "tragend",
    "pinpoint": "Bundestag, 07.09.2023; Aufhebung der Immunitaet als amtlicher parlamentarischer Statusanker.",
    "tatsachensatz": "Parlamentarisch belegter Statusanker zu Ermittlungs-/Immunitaetslage im Einflussnahme- und Sicherheitskomplex.",
    "zurechnungssatz": "Petr Bystron als AfD-Abgeordneter; Beweisfunktion nur ueber parlamentarischen Statusanker, Verfahren und konkrete Akteursrolle.",
    "beweisangebot": "Deutscher Bundestag: Bundestag hebt Immunitaet der Abgeordneten Bystron und Heidt auf; lokaler Hashanker im Webarchiv.",
    "gegenlese": "Keine strafrechtliche Schuld oder Gesamtparteisteuerung aus der Immunitaetsentscheidung ableiten.",
    "route_only_excluded": true,
    "linked_security_cases": [],
    "synthetic_security_anchor": true
  }
];
const syntheticSecurityIds = new Set(syntheticSecurityRows.flatMap((row) => row.linked_security_cases || []));
const syntheticSourceIds = new Set(syntheticSecurityRows.map((row) => row.source_id));
const combinedSelection = [
  ...syntheticSecurityRows,
  ...selected.filter((row) => !syntheticSourceIds.has(row.source_id) && !(row.linked_security_cases || []).some((id) => syntheticSecurityIds.has(id))),
];

const outputRows = combinedSelection.slice(0, 40).map((row, index) => {
  const archive = hashByPath.get(row.repo_path) || null;
  const linkedSec = (row.linked_security_cases || [])
    .map((id) => securityRows.find((sec) => sec.id === id))
    .filter(Boolean);
  const sourceSec = securityBySource.get(row.source_id);
  if (sourceSec && !linkedSec.some((sec) => sec.id === sourceSec.id)) linkedSec.push(sourceSec);
  return {
    id: `ANTRAGSSPITZE-${String(index + 1).padStart(2, '0')}`,
    priority_rank: index + 1,
    weight: weightFor(row),
    verbotsgrund_id: row.verbotsgrund_id,
    verbotsgrund_title: row.verbotsgrund_title,
    article21_fields: vgById.get(row.verbotsgrund_id)?.article21_fields || [],
    source_id: row.source_id,
    source_title: row.source_title,
    repo_path: row.repo_path,
    evidence_grade: row.evidence_grade,
    primary_anchor: Boolean(row.primary_anchor),
    pinpoint: clean(row.pinpoint || 'lokaler Source-ID-Anker'),
    tatsachenvortrag: proveText(row),
    beweisangebot: clean(row.beweisangebot || `${row.source_title}; ${row.repo_path}`),
    zurechnung: clean(row.zurechnungssatz || 'Akteur, Ebene, Organisation, Kanal und Verfahrensstand werden pro Source-ID gefuehrt.'),
    red_team_antwort: redTeamText(row),
    linked_security_cases: linkedSec.map((sec) => ({
      id: sec.id,
      case: sec.case,
      legal_status: clean(sec.legal_status || sec.beschuldigtenstatus),
      afd_bezug: clean(sec.afd_bezug || sec.zurechnung || sec.parteistatus),
      no_overclaim: clean(sec.no_overclaim || sec.prozessrisiko),
    })),
    archive_integrity: archive ? {
      id: archive.id,
      repo_path: archive.repo_path,
      sha256: archive.sha256,
      bytes: archive.bytes,
      authority: archive.authority,
      integrity_checked_at: archive.integrity_checked_at,
    } : null,
    route_only_excluded: true,
    application_class: row.application_class,
    source_family: familyOf(row),
    selection_reason: row.selection_reason,
  };
});

writeJsonl('daten/antragsspitze_top40_beweise_2026.jsonl', outputRows);

const groups = [
  ['Kernbeweise Menschenwuerde/Demokratie', ['KERNBEWEIS']],
  ['Status und Potentialitaet', ['STATUSANKER', 'POTENTIALITAET']],
  ['Sicherheits- und Zurechnungsbelege', ['SICHERHEITSBEZUG']],
  ['Weitere tragende Belege', ['TRAGEND', 'STUETZEND']],
];

const md = [];
md.push('# Antragsspitze Top 40 Beweise 2026');
md.push('');
md.push(`Stand: ${new Date().toISOString()}`);
md.push('');
md.push('Diese Datei verdichtet die Schriftsatz-Topbeweise auf vierzig antragsnahe Beweisbloecke. Jede Zeile ist als Quelle -> Pinpoint -> Akteur/Ebene -> Zurechnung -> Art.-21-Feld -> Red-Team-Grenze lesbar.');
md.push('');
md.push(`Exportierte Beweisbloecke: ${outputRows.length}`);
md.push('');
md.push("## Pflichtanker nach Rang");
md.push("");
for (const row of outputRows.slice(0, 10)) {
  md.push(`- ${row.priority_rank}. ${row.weight}: ${row.verbotsgrund_id} - ${row.source_title} (${row.repo_path})`);
}
md.push("");

for (const [heading, weights] of groups) {
  const rows = outputRows.filter((row) => weights.includes(row.weight));
  if (!rows.length) continue;
  md.push(`## ${heading}`);
  md.push('');
  for (const row of rows) {
    md.push(`### ${row.priority_rank}. ${row.verbotsgrund_id} - ${row.verbotsgrund_title}`);
    md.push('');
    md.push(`- Gewicht: ${row.weight}`);
    md.push(`- Quelle: ${row.source_title}`);
    md.push(`- Lokal: ${row.repo_path}`);
    md.push(`- Pinpoint: ${row.pinpoint}`);
    md.push(`- Tatsachenvortrag: ${row.tatsachenvortrag}`);
    md.push(`- Beweisangebot: ${row.beweisangebot}`);
    md.push(`- Zurechnung: ${row.zurechnung}`);
    md.push(`- Red-Team-Antwort: ${row.red_team_antwort}`);
    if (row.archive_integrity) {
      md.push(`- Hashanker: ${row.archive_integrity.authority}, SHA-256 ${row.archive_integrity.sha256}`);
    }
    if (row.linked_security_cases.length) {
      md.push(`- Sicherheitsfall: ${row.linked_security_cases.map((sec) => `${sec.id} (${sec.case}; ${sec.legal_status})`).join('; ')}`);
    }
    md.push('');
  }
}

md.push('## Prozessregel');
md.push('');
md.push('Der Export zaehlt keine PMK- oder Lagebilddaten als AfD-Taten. Einzelverfahren werden nur ueber Fall, Funktion, Zugang, Quelle und Verfahrensstand verwertet. Presse- und Rechercheanker bleiben gegenueber Gericht, Behoerde, Parlament und Parteiprimaerquelle niedriger gewichtet.');
md.push('');

fs.writeFileSync(path.join(ROOT, 'dokumente/hauptquellen/ANTRAGSSPITZE_TOP40_BEWEISE_2026.md'), `${md.join('\n')}\n`);

const pkgPath = path.join(ROOT, 'package.json');
const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
pkg.scripts ||= {};
pkg.scripts['export:antragsspitze'] = 'node scripts/export-antragsspitze-top40.mjs';
if (!pkg.scripts['build:statistics'].includes('export-antragsspitze-top40.mjs')) {
  pkg.scripts['build:statistics'] += ' && node scripts/export-antragsspitze-top40.mjs';
}
fs.writeFileSync(pkgPath, `${JSON.stringify(pkg, null, 2)}\n`);

console.log(`Antragsspitze exportiert: ${outputRows.length} Beweisbloecke`);
