import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import crypto from 'node:crypto';

const root = process.cwd();
const rel = (...parts) => path.join(root, ...parts);

const SOURCES = [
  { id: 'PDF-SCHLIMMSTE-ZITATE-2025', path: 'dokumente/hauptquellen/schlimmsten zitate der afd.pdf', role: 'sekundaere_kompilationsliste', use_rule: 'Nur als Such- und Indexroute verwenden; fuer den Schriftsatz muss jedes Zitat durch lokalen Proof, GFF/BfV/VS/Gericht, Parlament oder Originalkanal getragen werden.' },
  { id: 'PDF-JUGENDSTRATEGIE-ZITATE-2024', path: 'dokumente/hauptquellen/jugendstrategie.de_hasserfuellte-und-menschenverachtende-zitate-der-afd.pdf', role: 'sekundaere_webzusammenstellung', use_rule: 'Als Recherche-/Kontextroute verwenden; nicht als alleiniger Primaerbeweis fuer die behaupteten Zitate.' },
  { id: 'PDF-BELLTOWER-404-2026', path: 'dokumente/hauptquellen/belltower.news_die-schlimmsten-zitate-der-afd-2022.pdf', role: 'ungueltige_archivroute_404', use_rule: 'Nicht als Beleg nutzen: lokale Metadaten/Titel weisen auf gespeicherte 404-Seite hin.' }
];

const manualAnchors = new Map([
  ['SZ-001', { status: 'GERICHTSANKER_UND_BFV_KONTEXT_VERDRAHTET', paths: ['dokumente/ki_markdown/dokumente/hauptquellen/urteilsbelege/20_Weidel_Nazischlampe_LG_Hamburg.md', 'dokumente/hauptquellen/spiegel.de_kultur_tv_alice-weidel-extra-3-darf-afd-politikerin-nazischlampe-nennen-a-1148135_html.pdf', 'dokumente/ki_markdown/geheimgutachten/BfV-AfD-Folgegutachten_2021_06_F_I_Menschenwuerde.md'], note: 'LG Hamburg 324 O 217/17 und lokale Presse-/BfV-Kontextanker dokumentieren die Parteitags-/extra3-Route; die PDF bleibt nur Index, tragend sind Gerichtsanker, Aktenzeichen und BfV-Kontext.' }],
  ['SZ-002', { status: 'LOKALER_PROOF_UND_AFD_VERBOT_WEBANKER_GEFUNDEN', paths: ['zitate/afd-verbot.de-2025-07-28-proof-00693.md', 'sources/web/afd-verbot/afd_verbot_beweis_33922_joerg_meuthen.html'], note: 'Lokaler Proof 00693 und afd-verbot.de-Handakte 33922 belegen den praeziseren Kyffhaeuser-Wortlaut; die zweitseitige PDF ist nur verkuerzender Index.' }],
  ['SZ-003', { status: 'LOKALER_PROOF_UND_AFD_VERBOT_WEBANKER_WORTLAUT_PRAEZISIERT', paths: ['zitate/afd-verbot.de-2025-07-28-proof-00093.md', 'sources/web/afd-verbot/afd_verbot_beweis_81223_mirko_welsch.html'], note: 'PDF-Kurzform wird nicht uebernommen; Proof 00093 und afd-verbot.de-Handakte 81223 belegen den praezisen Buchenwald-Wortlaut.' }],
  ['SZ-004', { status: 'LOKALER_PROOF_ODER_HARTER_ANKER_GEFUNDEN', paths: ['zitate/afd-verbot.de-2025-07-28-proof-00578.md'], note: 'Proof-Datei mit Datum, Akteur und Quelle vorhanden; Wortlaut in der PDF ist paraphrasierend verkuerzt.' }],
  ['SZ-006', { status: 'LOKALER_PROOF_ODER_HARTER_ANKER_GEFUNDEN', paths: ['zitate/afd-verbot.de-2025-07-28-proof-00065.md'], note: 'Proof-Datei enthaelt den zitierten SA-Bezug.' }],
  ['SZ-007', { status: 'LOKALER_PROOF_ODER_HARTER_ANKER_GEFUNDEN', paths: ['zitate/afd-verbot.de-2025-07-28-proof-00656.md', 'zitate/afd-verbot.de-2025-07-28-proof-03605.md'], note: 'Proof-Dateien zum Gewalt-/Antifa-Komplex vorhanden; Wortlaut gegen Originalkontext pruefen.' }],
  ['SZ-008', { status: 'LOKALER_PROOF_ODER_HARTER_ANKER_GEFUNDEN', paths: ['zitate/afd-verbot.de-2025-07-28-proof-00685.md', 'zitate/afd-verbot.de-2025-07-28-proof-03012.md'], note: 'Proof-Dateien und BfV-Menschenwuerde-Kontext vorhanden.' }],
  ['SZ-011', { status: 'LOKALER_PROOF_ODER_HARTER_ANKER_GEFUNDEN', paths: ['zitate/afd-verbot.de-2025-07-28-proof-00739.md'], note: 'Proof-Datei fuer das Fluechtlingsheim-Zitat vorhanden.' }],
  ['SZ-012', { status: 'LOKALER_PROOF_ODER_HARTER_ANKER_GEFUNDEN', paths: ['zitate/afd-verbot.de-2025-07-28-proof-02926.md', 'zitate/afd-verbot.de-2025-07-28-proof-00653.md'], note: 'Proof-Finding enthaelt Mandic/NPD-Inhaltsnaehe mit Originaltext.' }],
  ['SZ-013', { status: 'PROOF_UND_AFD_VERBOT_WEBANKER_MIT_QUELLENRISIKO', paths: ['zitate/afd-verbot.de-2025-07-28-proof-00594.md', 'sources/web/afd-verbot/afd_verbot_beweis_42249_beatrix_von_storch.html'], note: 'Proof 00594 und afd-verbot.de-Handakte 42249 sind archiviert, enthalten aber keinen tragenden Originalbeleg; wegen Eigenhinweis zu fehlenden Belegen nicht in harte Antragsspitze aufnehmen.' }],
  ['SZ-014', { status: 'LOKALER_PROOF_ODER_HARTER_ANKER_GEFUNDEN', paths: ['zitate/afd-verbot.de-2025-07-28-proof-00733.md'], note: 'Proof-Datei fuer Entsorgen-Rhetorik vorhanden.' }],
  ['SZ-015', { status: 'LOKALER_PROOF_ODER_HARTER_ANKER_GEFUNDEN', paths: ['dokumente/ki_markdown/dokumente/splits/GFF_AfD-Gutachten_Teil_06_Teil_3_B_G_Demokratie_Rechtsstaat_Ergebnis.md', 'dokumente/ki_markdown/dokumente/splits/GFF_AfD-Gutachten_Teil_03_Teil_1_Entwicklung_Machtzentren_Vorfeld.md'], note: 'GFF-Fundstellen enthalten den Hoecke/Hitler-Wortlaut mit Fussnotenroute.' }],
  ['SZ-018', { status: 'LOKALER_PROOF_ODER_HARTER_ANKER_GEFUNDEN', paths: ['zitate/afd-verbot.de-2025-07-28-proof-00089.md'], note: 'Proof-Datei fuer Buergerkrieg/Millionen-Tote-Zitat vorhanden.' }],
  ['SZ-019', { status: 'LOKALER_PROOF_ODER_HARTER_ANKER_GEFUNDEN', paths: ['zitate/afd-verbot.de-2025-07-28-proof-00086.md', 'dokumente/ki_markdown/dokumente/hauptquellen/urteilsbelege/05_Arppe_Volksverhetzung_LG_Rostock.md'], note: 'Proof-Datei und Gerichtsregisterbezug zu Arppe vorhanden; Chat-/Verfahrenskontext getrennt fuehren.' }]
]);

const quoteItems = [
  { id: 'SZ-001', actor: 'Alice Weidel', fragment: 'politische Korrektheit gehoert', art21: ['demokratieprinzip', 'aggressiv_kaempferische_rhetorik'], target: 'politische_kultur' },
  { id: 'SZ-002', actor: 'Joerg Meuthen', fragment: 'Entsorgung von Personen', art21: ['menschenwuerde', 'sprache_der_entrechtung'], target: 'politische_gegner' },
  { id: 'SZ-003', actor: 'Mirko Welsch', fragment: 'Antifa Ab ins KZ', art21: ['menschenwuerde', 'ns_bezug', 'gewaltbezug'], target: 'politische_gegner' },
  { id: 'SZ-004', actor: 'Andreas Gehlmann', fragment: 'Homosexualitaet auslebt', art21: ['menschenwuerde', 'queerfeindlichkeit'], target: 'queere_menschen' },
  { id: 'SZ-005', actor: 'Marcel Grauf', fragment: 'bewohntes Asylantenheim', art21: ['menschenwuerde', 'gewaltbezug'], target: 'gefluechtete' },
  { id: 'SZ-006', actor: 'Andreas Geithe', fragment: 'SA gruenden und aufraeumen', art21: ['ns_bezug', 'gewaltbezug', 'darauf_ausgehen'], target: 'politische_gegner' },
  { id: 'SZ-007', actor: 'Egbert Ermer', fragment: 'Drecksack Antifakindern', art21: ['gewaltbezug', 'demokratieprinzip'], target: 'politische_gegner' },
  { id: 'SZ-008', actor: 'Heiko Hessenkemper', fragment: 'Printmedien und den oeffentlich rechtlichen', art21: ['demokratieprinzip', 'pressefreiheit'], target: 'medien' },
  { id: 'SZ-009', actor: 'Hans-Thomas Tillschneider', fragment: 'AfD zu richten', art21: ['rechtsstaatsprinzip', 'demokratieprinzip'], target: 'justiz_und_gegner' },
  { id: 'SZ-010', actor: 'Markus Frohnmaier', fragment: 'wird aufgeraeumt', art21: ['darauf_ausgehen', 'demokratieprinzip'], target: 'politische_gegner' },
  { id: 'SZ-011', actor: 'Sandro Hersel', fragment: 'Brennende Fluechtlingsheime', art21: ['menschenwuerde', 'gewaltbezug'], target: 'gefluechtete' },
  { id: 'SZ-012', actor: 'Dubravko Mandic', fragment: 'NPD unterscheiden wir uns nicht', art21: ['ns_nahe', 'zurechnung'], target: 'parteiprofil' },
  { id: 'SZ-013', actor: 'Beatrix von Storch', fragment: 'grossen Knueppel', art21: ['darauf_ausgehen', 'rechtsstaatsprinzip'], target: 'politische_durchsetzung' },
  { id: 'SZ-014', actor: 'Petr Bystron', fragment: 'Menschen muessen wir selbstverstaendlich entsorgen', art21: ['menschenwuerde', 'sprache_der_entrechtung'], target: 'menschen_mit_migrationsgeschichte' },
  { id: 'SZ-015', actor: 'Bjoern Hoecke', fragment: 'Hitler als das absolut Boese', art21: ['ns_relativierung', 'menschenwuerde'], target: 'ns_erinnerungskultur' },
  { id: 'SZ-016', actor: 'Dieter Goernert', fragment: 'Pack erschiessen', art21: ['gewaltbezug', 'menschenwuerde'], target: 'menschen_mit_migrationsgeschichte' },
  { id: 'SZ-017', actor: 'Marcel Grauf', fragment: 'Holocaust mal wieder lohnen', art21: ['antisemitismus', 'ns_bezug', 'menschenwuerde'], target: 'auslaender_und_minderheiten' },
  { id: 'SZ-018', actor: 'Marcel Grauf', fragment: 'Buergerkrieg und Millionen Tote', art21: ['gewaltbezug', 'ns_bezug'], target: 'allgemeine_bevoelkerung' },
  { id: 'SZ-019', actor: 'Holger Arppe', fragment: 'Loeschkalk oben', art21: ['gewaltbezug', 'menschenwuerde'], target: 'politische_gegner_und_migranten' }
];

const scanRoots = ['zitate', 'dokumente/ki_markdown', 'dokumente/hauptquellen', 'daten'];
const maxFileSize = 6000000;
const ignoreData = new Set([
  'daten/repository_pages_index_2026.json',
  'daten/schlimmste_zitate_pdf_audit_2026.jsonl',
  'daten/schlimmste_zitate_pdf_sources_2026.jsonl',
  'daten/afd_verbot_webanker_schlimmste_zitate_2026.jsonl',
  'dokumente/hauptquellen/SCHLIMMSTE_ZITATE_PDF_AUDIT_2026.md',
  'reports/schlimmste-zitate-pdf-audit-2026-07-09.md',
  'reports/afd-verbot-webanker-schlimmste-zitate-2026-07-09.md'
]);

function norm(value) {
  return String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/ß/g, 'ss')
    .replace(/[„“”]/g, '"')
    .replace(/[’]/g, "'")
    .replace(/[^a-z0-9]+/gi, ' ')
    .trim()
    .toLowerCase();
}

function walk(dir, out = []) {
  const abs = rel(dir);
  if (!fs.existsSync(abs)) return out;
  for (const entry of fs.readdirSync(abs, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (ignoreData.has(p)) continue;
    if (entry.isDirectory()) walk(p, out);
    else if (/\.(md|txt|jsonl|json)$/i.test(entry.name)) {
      const stat = fs.statSync(rel(p));
      if (stat.size <= maxFileSize) out.push(p);
    }
  }
  return out;
}

function lineHit(text, fragmentNorm, actorNorm) {
  const lines = text.split(/\r?\n/);
  let actorFallback = null;
  for (let i = 0; i < lines.length; i += 1) {
    const ln = norm(lines[i]);
    if (fragmentNorm && ln.includes(fragmentNorm)) {
      return { line: i + 1, text: lines[i].replace(/\s+/g, ' ').slice(0, 240), match: 'fragment' };
    }
    if (!actorFallback && actorNorm && ln.includes(actorNorm)) {
      actorFallback = { line: i + 1, text: lines[i].replace(/\s+/g, ' ').slice(0, 240), match: 'actor' };
    }
  }
  return actorFallback;
}

function readPdfMeta(source) {
  const abs = rel(source.path);
  const exists = fs.existsSync(abs);
  let info = '';
  let sha256 = null;
  if (exists) {
    sha256 = crypto.createHash('sha256').update(fs.readFileSync(abs)).digest('hex');
    try { info = execFileSync('pdfinfo', [abs], { encoding: 'utf8' }); } catch { info = ''; }
  }
  return {
    ...source,
    exists,
    sha256,
    pages: Number((info.match(/^Pages:\s+(\d+)/m) || [])[1] || 0),
    title: (info.match(/^Title:\s+(.+)$/m) || [])[1] || null,
    author: (info.match(/^Author:\s+(.+)$/m) || [])[1] || null,
    created: (info.match(/^CreationDate:\s+(.+)$/m) || [])[1] || null
  };
}

const sourceMeta = SOURCES.map(readPdfMeta);
const files = scanRoots.flatMap((dir) => walk(dir));
const corpus = files.map((file) => {
  const text = fs.readFileSync(rel(file), 'utf8');
  return { file, text, normText: norm(text) };
});

function scoreFile(row, item) {
  const actorNorm = norm(item.actor);
  const fragmentNorm = norm(item.fragment);
  let score = 0;
  if (fragmentNorm && row.normText.includes(fragmentNorm)) score += 120;
  if (actorNorm && row.normText.includes(actorNorm)) score += 20;
  if (/^zitate\//.test(row.file)) score += 40;
  if (/GFF|BfV|Verfassungsschutz|BT_|Bundestag|Urteil|urteilsbelege|AfD_Gerichtsentscheidungen/i.test(row.file)) score += 35;
  if (/schlimmsten_zitate|jugendstrategie|belltower/i.test(row.file)) score -= 30;
  if (/source_inventory|antrag_quellenhierarchie/.test(row.file)) score -= 15;
  return score;
}

const rows = quoteItems.map((item) => {
  const actorNorm = norm(item.actor);
  const fragmentNorm = norm(item.fragment);
  const manual = manualAnchors.get(item.id);
  const manualCandidates = (manual?.paths || []).filter((p) => fs.existsSync(rel(p))).map((p) => {
    const text = fs.readFileSync(rel(p), 'utf8');
    return { path: p, score: 260, hit: lineHit(text, fragmentNorm, actorNorm), manual: true };
  });
  const candidates = [
    ...manualCandidates,
    ...corpus
      .map((row) => ({ row, score: scoreFile(row, item) }))
      .filter((x) => x.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 10)
      .map(({ row, score }) => ({ path: row.file, score, hit: lineHit(row.text, fragmentNorm, actorNorm) }))
  ].filter((candidate, index, all) => all.findIndex((other) => other.path === candidate.path) === index).slice(0, 12);
  const hasHard = candidates.some((c) => /^zitate\//.test(c.path) || /GFF|BfV|Verfassungsschutz|BT_|Bundestag|Urteil|urteilsbelege|AfD_Gerichtsentscheidungen/i.test(c.path));
  const hasExact = candidates.some((c) => c.score >= 120 || c.hit?.match === 'fragment');
  const status = manual?.status || (hasExact && hasHard ? 'LOKALER_PROOF_ODER_HARTER_ANKER_GEFUNDEN' : candidates.length ? 'LOKALE_ROUTE_GEFUNDEN_ORIGINAL_ANKER_PRUEFEN' : 'KEIN_LOKALER_TREFFER_AUS_PDF_FRAGMENT');
  return {
    quote_id: item.id,
    actor: item.actor,
    pdf_fragment: item.fragment,
    art21_fields: item.art21,
    target_group_or_institution: item.target,
    pdf_sources: sourceMeta.map((s) => s.id),
    local_match_status: status,
    anchor_note: manual?.note || '',
    court_use: ['LOKALER_PROOF_ODER_HARTER_ANKER_GEFUNDEN', 'LOKALER_PROOF_UND_AFD_VERBOT_WEBANKER_GEFUNDEN', 'LOKALER_PROOF_UND_AFD_VERBOT_WEBANKER_WORTLAUT_PRAEZISIERT', 'GERICHTSANKER_UND_BFV_KONTEXT_VERDRAHTET'].includes(status) ? 'PDF nur als Index nennen; tragend sind lokale Proof-, Gutachten-, Parlaments-, Gerichts- oder Webanker mit Akteur, Datum, Rolle und Kontext.' : ['PROOF_MIT_QUELLENRISIKO', 'LOKALER_PROOF_WORTLAUT_ABWEICHEND', 'PROOF_UND_AFD_VERBOT_WEBANKER_MIT_QUELLENRISIKO'].includes(status) ? 'Nur als Risiko-/Recherchezeile verwenden; nicht in harte Antragsspitze aufnehmen.' : 'Nicht aus der PDF zitieren; Originalquelle oder harter lokaler Anker muss vor Nutzung beschafft/zugeordnet werden.',
    no_overclaim: 'Keine automatische Gesamtparteizurechnung; Akteur, Rolle, Zeitpunkt, Kanal, Originalkontext und Rechtsstatus je Zitat getrennt fuehren.',
    top_local_matches: candidates
  };
});

function writeJsonl(file, data) {
  fs.mkdirSync(path.dirname(rel(file)), { recursive: true });
  fs.writeFileSync(rel(file), data.map((row) => JSON.stringify(row)).join('\n') + '\n');
}

writeJsonl('daten/schlimmste_zitate_pdf_audit_2026.jsonl', rows);
writeJsonl('daten/schlimmste_zitate_pdf_sources_2026.jsonl', sourceMeta);

const hardStatuses = new Set(['LOKALER_PROOF_ODER_HARTER_ANKER_GEFUNDEN', 'LOKALER_PROOF_UND_AFD_VERBOT_WEBANKER_GEFUNDEN', 'LOKALER_PROOF_UND_AFD_VERBOT_WEBANKER_WORTLAUT_PRAEZISIERT', 'GERICHTSANKER_UND_BFV_KONTEXT_VERDRAHTET']);
const riskStatuses = new Set(['PROOF_MIT_QUELLENRISIKO', 'LOKALER_PROOF_WORTLAUT_ABWEICHEND', 'PROOF_UND_AFD_VERBOT_WEBANKER_MIT_QUELLENRISIKO']);
const hard = rows.filter((r) => hardStatuses.has(r.local_match_status)).length;
const risk = rows.filter((r) => riskStatuses.has(r.local_match_status)).length;
const context = rows.filter((r) => r.local_match_status === 'AMTLICHER_KONTEXTBEZUG_ORIGINALPARTEITAG_PRUEFEN').length;
const secondaryOnly = rows.filter((r) => r.local_match_status === 'SEKUNDAERROUTE_NUR_INDEX').length;
const routed = rows.filter((r) => r.local_match_status === 'LOKALE_ROUTE_GEFUNDEN_ORIGINAL_ANKER_PRUEFEN').length;
const missing = rows.filter((r) => r.local_match_status === 'KEIN_LOKALER_TREFFER_AUS_PDF_FRAGMENT').length;

const md = [];
md.push('# Audit: PDF mit den schlimmsten AfD-Zitaten');
md.push('');
md.push('## Ergebnis');
md.push('- Gepruefte PDF-/Weblisten: ' + sourceMeta.length);
md.push('- Zitatfragmente aus der zweitseitigen PDF: ' + rows.length);
md.push('- Mit lokalem Proof-/Gutachten-/Parlaments-/Gerichtsanker gematcht: ' + hard);
md.push('- Proof vorhanden, aber Wortlaut/Quelle ausdruecklich risikobehaftet: ' + risk);
md.push('- Amtlicher Kontextbezug, Originalanker nachzuziehen: ' + context);
md.push('- Nur Sekundaerroute im Bestand: ' + secondaryOnly);
md.push('- Lokale Route vorhanden, Originalanker im Schriftsatz zu pruefen: ' + routed);
md.push('- Ohne lokalen Treffer aus dem Fragment: ' + missing);
md.push('');
md.push('## Beweisregel');
md.push('Die PDF ist keine tragende Primaerquelle fuer die Zitate. Sie ist ein Suchindex. Tragend sind nur Proof-Dateien, GFF/BfV/VS-Fundstellen, Parlaments-/Gerichtsanker oder ein archivierter Originalkanal mit Akteur, Datum, Rolle, Kontext und Zurechnung.');
md.push('');
md.push('## Quellenstatus');
for (const s of sourceMeta) {
  md.push('- ' + s.id + ': ' + s.path + '; Rolle: ' + s.role + '; Seiten: ' + (s.pages || 'n/a') + '; Regel: ' + s.use_rule);
}
md.push('');
md.push('## Crosswalk');
md.push('| ID | Akteur | Fragment | Status | Beste lokale Route | Hinweis |');
md.push('|---|---|---|---|---|---|');
for (const row of rows) {
  const best = row.top_local_matches[0];
  const bestText = best ? best.path + ':' + (best.hit?.line || '') : 'Originalanker beschaffen';
  md.push('| ' + row.quote_id + ' | ' + row.actor + ' | ' + row.pdf_fragment + ' | ' + row.local_match_status + ' | ' + bestText + ' | ' + (row.anchor_note || '') + ' |');
}
md.push('');
md.push('## Naechste Schriftsatzregel');
md.push('Fuer eine Antragsschrift werden nur die gematchten harten Anker zitiert. Die PDF selbst kann im Anlagenregister als Index-/Recherchebeleg erscheinen, aber nicht als Endpunkt der Beweisfuehrung.');

fs.writeFileSync(rel('dokumente/hauptquellen/SCHLIMMSTE_ZITATE_PDF_AUDIT_2026.md'), md.join('\n') + '\n');
fs.mkdirSync(rel('reports'), { recursive: true });
fs.writeFileSync(rel('reports/schlimmste-zitate-pdf-audit-2026-07-09.md'), md.join('\n') + '\n');

const routeOnlyNeedles = ['schlimmsten zitate der afd', 'hasserfuellte und menschenverachtende zitate der afd', 'hasserfüllte und menschenverachtende zitate der afd', 'belltower.news die schlimmsten zitate der afd'];
for (const file of ['daten/source_inventory.jsonl', 'daten/antrag_quellenhierarchie_2026.jsonl']) {
  const abs = rel(file);
  if (!fs.existsSync(abs)) continue;
  const out = fs.readFileSync(abs, 'utf8').trim().split(/\n/).filter(Boolean).map((line) => {
    const row = JSON.parse(line);
    const hay = norm((row.title || '') + ' ' + (row.repo_path || '') + ' ' + (row.source_id || ''));
    const hit = routeOnlyNeedles.some((needle) => hay.includes(norm(needle)));
    if (!hit) return row;
    if (file.endsWith('source_inventory.jsonl')) {
      row['primärquelle'] = false;
      row.primaerquelle = false;
      row.beweisstärke = 'C';
      row.quellentyp = 'Recherche-/Sekundaerliste';
      row.herausgeber = row.herausgeber || 'Sekundaere Zusammenstellung';
      row.juristischer_nutzwert = 'route_only';
      row.risiken = 'Kompilierte Zitatliste: jedes Zitat gegen Original, Proof, GFF/BfV/VS, Parlament oder Gericht pruefen; nicht als Endbeweis nutzen.';
      row.nur_recherchehinweis = true;
    } else {
      row.evidence_grade = 'C';
      row.primary_anchor = false;
      row.source_type = 'Recherche-/Sekundaerliste';
      row.application_class = 'route_only';
      row.use_rule = 'Nur als Such-, Archiv- oder Navigationsroute verwenden; Zitate nicht ohne Original-/Proof-/Gutachten-/Amtsanker tragend verwerten.';
    }
    return row;
  });
  fs.writeFileSync(abs, out.map((row) => JSON.stringify(row)).join('\n') + '\n');
}

console.log('Schlimmste-Zitate-PDF-Audit: ' + rows.length + ' Fragmente, ' + hard + ' harte lokale Treffer, ' + risk + ' Risiko-/Wortlautfaelle, ' + context + ' Kontextfaelle, ' + secondaryOnly + ' nur Sekundaerroute, ' + routed + ' lokale Routen, ' + missing + ' ohne Treffer.');
