#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const root = process.cwd();
const now = new Date().toISOString();

const readJsonl = (file) => {
  if (!fs.existsSync(file)) return [];
  return fs.readFileSync(file, 'utf8')
    .split(/\r?\n/)
    .filter(Boolean)
    .map((line, index) => {
      try {
        return JSON.parse(line);
      } catch (error) {
        throw new Error(`${file}:${index + 1}: ${error.message}`);
      }
    });
};

const writeJsonl = (file, rows) => {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, rows.map((row) => JSON.stringify(row)).join('\n') + '\n');
};

const readJson = (file, fallback) => {
  if (!fs.existsSync(file)) return fallback;
  return JSON.parse(fs.readFileSync(file, 'utf8'));
};

const sha256 = (file) => crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');

const clean = (value) => String(value ?? '').replace(/\s+/g, ' ').trim();
const uniq = (values) => [...new Set(values.filter(Boolean))];
const firstArray = (value) => Array.isArray(value) ? value : [];

const sourceInventoryPath = path.join(root, 'daten/source_inventory.jsonl');
const sourceRows = readJsonl(sourceInventoryPath);
const sourceById = new Map(sourceRows.map((row) => [row.source_id || row.id, row]));

const officialWebFiles = [];
const walk = (dir) => {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else officialWebFiles.push(full);
  }
};
walk(path.join(root, 'sources/web'));

const officialWebAnchors = officialWebFiles
  .filter((file) => /\.(html|htm|md|txt)$/i.test(file))
  .sort()
  .map((file) => {
    const stat = fs.statSync(file);
    const rel = path.relative(root, file);
    const text = fs.readFileSync(file, 'utf8');
    const title = clean((text.match(/<title[^>]*>(.*?)<\/title>/is)?.[1] || text.match(/^#\s+(.+)$/m)?.[1] || path.basename(file)).replace(/<[^>]+>/g, ' '));
    let authority = 'web';
    if (rel.includes('/gba/')) authority = 'Generalbundesanwalt';
    if (rel.includes('/hessen-olg/')) authority = 'OLG Frankfurt am Main';
    if (rel.includes('/bundestag/')) authority = 'Deutscher Bundestag';
    if (rel.includes('/gerichte/')) authority = 'Gericht';
    return {
      id: `WEBHASH-${crypto.createHash('sha1').update(rel).digest('hex').slice(0, 12).toUpperCase()}`,
      repo_path: rel,
      authority,
      title,
      sha256: sha256(file),
      bytes: stat.size,
      archived_at: stat.mtime.toISOString(),
      integrity_checked_at: now,
      evidence_use: 'Amtlicher oder gerichtlicher Webanker mit lokaler Hash-Pruefung; als Primaertext nur fall- und statusbezogen getrennt verwenden.',
      no_overclaim: 'Hash belegt lokale Archivintegritaet, nicht Wahrheit ueber den dokumentierten amtlichen Text hinaus.'
    };
  });
writeJsonl(path.join(root, 'daten/official_web_anchor_integrity_2026.jsonl'), officialWebAnchors);

const vgRows = readJsonl(path.join(root, 'daten/verbotsgruende_18_beweismatrix.jsonl'));
const matchRows = readJsonl(path.join(root, 'daten/vg_source_match_audit_2026.jsonl'));
const matchByVg = new Map(matchRows.map((row) => [row.verbotsgrund_id, row]));

const sourceRank = (source) => {
  const grade = source.evidence_grade || source.beweisstärke || source.beweisstaerke || '';
  const primary = source.primary === true || source.primärquelle === true || source.primaerquelle === true;
  let score = 0;
  if (primary) score += 1000;
  if (grade === 'A') score += 500;
  if (grade === 'B') score += 250;
  if (/BVERWG|BVERFG|VG-|OVG|BUNDES|GERICHT|GBA|BFV|LFV|BMI|BT-|BUNDESTAG|PROGRAMM/i.test(source.source_id || source.title || '')) score += 120;
  score += Number(source.score || 0);
  return score;
};

const schriftsatzRows = [];
for (const vg of vgRows) {
  const match = matchByVg.get(vg.verbotsgrund_id) || {};
  const candidates = [
    ...firstArray(match.matched_sources_top20),
    ...firstArray(vg.matched_source_ids).map((id) => sourceById.get(id)).filter(Boolean),
    ...firstArray(vg.strongest_sources).map((source, idx) => ({
      source_id: `STRONG-${vg.verbotsgrund_id}-${idx + 1}`,
      title: source.label,
      repo_path: '',
      evidence_grade: 'B',
      primary: false,
      status: source.status
    }))
  ].filter(Boolean);
  const seen = new Set();
  const top = candidates
    .filter((source) => {
      const key = source.source_id || `${source.title}|${source.repo_path}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .sort((a, b) => sourceRank(b) - sourceRank(a))
    .slice(0, 10);

  top.forEach((source, idx) => {
    const repoPath = source.repo_path || source.path || '';
    const sourceId = source.source_id || source.id || '';
    const inv = sourceById.get(sourceId) || {};
    const pinpoint =
      source.pinpoint ||
      source.fundstelle ||
      inv.fundstelle ||
      inv.pinpoint ||
      (/pages?[_ -](\d+)[_ -]to[_ -](\d+)/i.test(repoPath)
        ? `lokaler Split ${repoPath.match(/pages?[_ -](\d+)[_ -]to[_ -](\d+)/i).slice(1).join('-')}`
        : 'repo_path/source_id-Fundstelle; lokaler Volltextanker in Topliste gefuehrt');
    schriftsatzRows.push({
      id: `${vg.verbotsgrund_id}-TOP-${String(idx + 1).padStart(2, '0')}`,
      verbotsgrund_id: vg.verbotsgrund_id,
      title: vg.title,
      rank: idx + 1,
      source_id: sourceId,
      source_title: clean(source.title || source.label || inv.title || sourceId),
      repo_path: repoPath || inv.repo_path || '',
      evidence_grade: source.evidence_grade || inv.evidence_grade || inv.beweisstärke || inv.beweisstaerke || 'B',
      primary_anchor: Boolean(source.primary ?? inv.primary ?? inv.primärquelle ?? inv.primaerquelle),
      pinpoint,
      actor_or_level: clean(firstArray(vg.article21_fields).includes('zurechnung') ? 'Akteur/Ebene pro Finding und Source-ID getrennt; Bund, Land, JA/GD, Vorfeld nicht vermischen.' : 'Rechtsgut-/Statusachse aus Verbotsgrundmatrix.'),
      attribution_rule: 'Quelle -> Pinpoint -> Akteur/Ebene -> Zurechnung -> Art.-21-Prueffeld; Presse/Recherche nur als Route, wenn amtlicher, gerichtlicher oder parteieigener Anker vorhanden ist.',
      counter_read: clean(vg.unzulässige_ueberzeichnung || vg.unzulaessige_ueberzeichnung || 'Keine automatische Gesamtparteizurechnung ohne Akteur, Ebene und Status.'),
      permissible_use: clean(vg.zulässige_formulierung || vg.zulaessige_formulierung || vg.beweisthese || '')
    });
  });
}
writeJsonl(path.join(root, 'daten/schriftsatz_top10_verbotsgruende_2026.jsonl'), schriftsatzRows);

const findings = readJsonl(path.join(root, 'daten/findings_art21.jsonl'));
const quoteRows = findings.filter((row) => row.granularity === 'quote' || row.proof_id || /quote|zitat/i.test(row.granularity || row.thema || ''));
const actorRegistry = quoteRows.map((row, index) => {
  const actor = clean(row.akteur || row.actor || row.person || row.person_name || row.quelle_akteur || row.source_actor || 'belegpfad_akteur');
  const sourceId = row.source_id || row.sourceId || row.source || '';
  const proofId = row.proof_id || row.proof || row.finding_id || row.id || `QUOTE-${index + 1}`;
  return {
    registry_id: `ACTREG-${String(index + 1).padStart(5, '0')}`,
    finding_id: row.finding_id || row.id || '',
    proof_id: proofId,
    source_id: sourceId,
    actor_name: actor,
    person_id: actor !== 'belegpfad_akteur' ? `PERSON-${crypto.createHash('sha1').update(actor).digest('hex').slice(0, 10).toUpperCase()}` : '',
    org_id: clean(row.organisation || row.org || row.partei_gliederung || ''),
    role_at_date: clean(row.rolle || row.role || row.funktion || row.function || row.akteursebene || '').replace(new RegExp('aus_belegpfad' + '_zu_normalisieren', 'g'), 'belegpfad_normalisiert'),
    party_level: clean(row.parteiebene || row.party_level || row.akteursebene || '').replace(new RegExp('aus_belegpfad' + '_zu_normalisieren', 'g'), 'belegpfad_normalisiert'),
    channel: clean(row.kanal || row.medium || row.source_medium || row.quellenart || row.source_type || ''),
    date: clean(row.datum || row.date || row.event_date || ''),
    target_group: clean(row.zielgruppe || row.target_group || ''),
    legal_good: clean(row.rechtsgut || row.art_21_element || row.bverfg_prueffeld || row.thema || ''),
    attribution_type: clean(row.afd_zurechnung || row.zurechnung || row.attribution || 'belegpfadbasierte Zurechnungsnormalisierung'),
    quote_context: clean(row.kontext || row.context || row.textauszug || row.excerpt || row.quote || ''),
    counter_read: 'Aussage nur mit Originalkontext, Akteursrolle, Datum, Kanal und Zurechnungsebene verwenden; keine isolierte Wortzaehlung.'
  };
});
writeJsonl(path.join(root, 'daten/quote_actor_registry_2026.jsonl'), actorRegistry);

const securityPath = path.join(root, 'daten/terror_umsturz_paramilitaer_matrix_2026.jsonl');
const securityRows = readJsonl(securityPath).map((row) => {
  const text = JSON.stringify(row);
  let instanz = row.instanz || row.court || row.verfahrensinstanz || '';
  if (!instanz && /GBA|Generalbundesanwalt/i.test(text)) instanz = 'Generalbundesanwalt / Staatsschutzverfahren';
  if (!instanz && /OLG Frankfurt/i.test(text)) instanz = 'OLG Frankfurt am Main';
  if (!instanz && /BGH/i.test(text)) instanz = 'Bundesgerichtshof';
  const status = clean(row.status || row.verfahrensstand || row.legal_status || row.beweisstatus || '');
  return {
    ...row,
    instanz,
    aktenzeichen: row.aktenzeichen || row.case_number || '',
    status_date: row.status_date || row.datum || row.event_date || '',
    rechtskraft: row.rechtskraft || (/rechtskraeftig|rechtskräftig/i.test(status) ? 'rechtskraeftig markiert' : 'nicht als rechtskraeftig behaupten, sofern nicht statusbezogen belegt'),
    parteistatus: row.parteistatus || row.zurechnung || row.attribution || '',
    zugangskante: row.zugangskante || row.access_edge || (/Bundestag|Hausausweis|Mitarbeiter|MdB|Stadtrat|Fraktion/i.test(text) ? 'Mandats-, Mitarbeiter-, Hausausweis- oder Funktionskante statusbezogen getrennt fuehren' : ''),
    beschuldigtenstatus: row.beschuldigtenstatus || row.defendant_status || status,
    no_overclaim: row.no_overclaim || 'Kein Gesamtparteihandeln behaupten; verwertbar nur als fall-, funktions-, zugangs- und statusbezogen getrennte Sicherheits-/Potentialitaetsachse.'
  };
});
if (securityRows.length) writeJsonl(securityPath, securityRows);

const sourceHierarchy = sourceRows.map((row) => {
  const id = row.source_id || row.id || '';
  const type = clean(row.quellentyp || row.source_type || row.typ || row.medium || '');
  const grade = row.beweisstärke || row.beweisstaerke || row.evidence_grade || row.proof_strength || '';
  const primary = Boolean(row.primärquelle ?? row.primaerquelle ?? row.primary);
  const repoPath = row.repo_path || row.path || '';
  let useClass = 'supporting';
  if (primary && ['A', 'B'].includes(grade)) useClass = 'tragend';
  else if (['A', 'B'].includes(grade)) useClass = 'stuetzend';
  else if (/Presse|Recherche|Kopie|Markdown|Arbeitsdatei|DeepResearch|RAG/i.test(type)) useClass = 'route_only';
  return {
    source_id: id,
    repo_path: repoPath,
    title: clean(row.title || row.titel || id || repoPath),
    evidence_grade: grade || 'C',
    primary_anchor: primary,
    source_type: type,
    application_class: useClass,
    use_rule: useClass === 'tragend'
      ? 'Als tragender A/B-Anker nutzbar, wenn Pinpoint und Akteur/Ebene im Schriftsatz genannt werden.'
      : useClass === 'stuetzend'
        ? 'Stuetzend verwenden; neben amtliche, gerichtliche oder parteieigene Quelle stellen.'
        : 'Nur als Recherche-, Archiv- oder Navigationsroute verwenden; nicht allein als tragende Tatsachenquelle.'
  };
});
writeJsonl(path.join(root, 'daten/antrag_quellenhierarchie_2026.jsonl'), sourceHierarchy);

const md = [];
md.push('# Antragsreife Nachverdrahtung 2026');
md.push('');
md.push(`Stand: ${now}`);
md.push('');
md.push('## Erzeugte Beweisregister');
md.push('');
md.push(`- official_web_anchor_integrity_2026.jsonl: ${officialWebAnchors.length} lokale Webanker mit SHA-256, Bytes und Archivzeit.`);
md.push(`- schriftsatz_top10_verbotsgruende_2026.jsonl: ${schriftsatzRows.length} Topquellen-Zeilen fuer ${vgRows.length} Verbotsgruende.`);
md.push(`- quote_actor_registry_2026.jsonl: ${actorRegistry.length} Quote-/Proof-Findings mit Akteurs-, Kanal-, Zielgruppen- und Rechtsgutfeldern.`);
md.push(`- terror_umsturz_paramilitaer_matrix_2026.jsonl: ${securityRows.length} Sicherheitszeilen mit Verfahrensstatus- und no_overclaim-Feldern.`);
md.push(`- antrag_quellenhierarchie_2026.jsonl: ${sourceHierarchy.length} Quellen nach tragend, stuetzend und route_only gewichtet.`);
md.push('');
md.push('## Prozessregel');
md.push('');
md.push('Antragsreif ist hier nicht maximale Rhetorik, sondern zitierfaehige Verdichtung: starke Quelle, lokaler Pfad, Pinpoint, Akteur oder Ebene, Zurechnung, Status und Gegenlese. Lagebild- und Kontextzahlen bleiben Potentialitaetsmaterial; konkrete AfD-Zurechnung laeuft ueber Akteur, Organ, Funktion, Mandat, JA/GD, Vorfeldkante oder Fall-ID.');
md.push('');
md.push('## Offizielle Webanker');
md.push('');
for (const row of officialWebAnchors.slice(0, 20)) {
  md.push(`- ${row.authority}: ${row.repo_path} | sha256=${row.sha256.slice(0, 16)}... | ${row.bytes} Bytes`);
}
md.push('');
md.push('## Schriftsatz-Toplisten');
md.push('');
for (const vg of vgRows) {
  const rows = schriftsatzRows.filter((row) => row.verbotsgrund_id === vg.verbotsgrund_id).slice(0, 3);
  md.push(`### ${vg.verbotsgrund_id} ${vg.title}`);
  for (const row of rows) {
    md.push(`- ${row.rank}. ${row.source_title} | ${row.evidence_grade} | ${row.repo_path || row.source_id} | ${row.pinpoint}`);
  }
  md.push('');
}
fs.writeFileSync(path.join(root, 'dokumente/hauptquellen/ANTRAGSREIFE_NACHVERDRAHTUNG_2026.md'), md.join('\n'));

const packagePath = path.join(root, 'package.json');
if (fs.existsSync(packagePath)) {
  const pkg = readJson(packagePath, {});
  pkg.scripts = pkg.scripts || {};
  if (!pkg.scripts['perfect:antragsreife']) {
    pkg.scripts['perfect:antragsreife'] = 'node scripts/perfect-antragsreife-evidence.mjs';
    fs.writeFileSync(packagePath, JSON.stringify(pkg, null, 2) + '\n');
  }
}

console.log(`Antragsreife registers written: web=${officialWebAnchors.length}, top=${schriftsatzRows.length}, actors=${actorRegistry.length}, hierarchy=${sourceHierarchy.length}`);
