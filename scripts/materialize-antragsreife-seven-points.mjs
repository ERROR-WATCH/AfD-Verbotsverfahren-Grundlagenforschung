#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const ROOT = process.cwd();
const rel = (...parts) => path.join(ROOT, ...parts);

function readJsonl(file) {
  if (!fs.existsSync(file)) return [];
  return fs.readFileSync(file, 'utf8').split(/\r?\n/).filter(Boolean).map((line, index) => {
    try {
      return JSON.parse(line);
    } catch (error) {
      throw new Error(`${file}:${index + 1}: ${error.message}`);
    }
  });
}

function readJson(file, fallback) {
  if (!fs.existsSync(file)) return fallback;
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}

function readText(file, fallback = '') {
  return fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : fallback;
}

function writeJsonl(file, rows) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, rows.map((row) => JSON.stringify(row)).join('\n') + '\n');
}

function writeJson(file, value) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, JSON.stringify(value, null, 2) + '\n');
}

function writeText(file, text) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, text);
}

function clean(value) {
  return String(value ?? '').replace(/\s+/g, ' ').trim();
}

function hashId(prefix, value) {
  return `${prefix}-${crypto.createHash('sha1').update(String(value)).digest('hex').slice(0, 12).toUpperCase()}`;
}

function proofExcerpt(sourcePath) {
  if (!sourcePath) return '';
  const abs = rel(sourcePath);
  if (!fs.existsSync(abs)) return '';
  const text = fs.readFileSync(abs, 'utf8');
  const match = text.match(/Beweisst(?:u|ü)ck\s+([\s\S]*?)\n\s*Quelle:/i);
  if (!match) return '';
  return clean(match[1].replace(/\f/g, ' ').replace(/[„”]/g, '"')).slice(0, 500);
}

function sourceRank(row) {
  let score = 0;
  const text = JSON.stringify(row);
  if (row.granularity === 'quote') score += 100;
  if (/A\b|"A"/.test(`${row.beweisstufe || row.beweistufe || ''}`)) score += 80;
  if (/direkt|Bundesvorstand|MdB|Landtag|Funktion|JA|Generation/i.test(text)) score += 45;
  if (/amtlich|gericht|BfV|LfV|GFF|DIMR|Bundestag|Parlament/i.test(text)) score += 35;
  if (row.originaltext || row.originaltext_auszug || row.excerpt || row.quote) score += 20;
  if (row.exact_fundstelle || row.pinpoint || row.proof_id) score += 20;
  if (/Menschenw|Demokratie|Rechtsstaat|Zurechnung|Potential/i.test(text)) score += 15;
  return score;
}

function flattenStatusMatrix(status, laender, security) {
  const rows = [];
  if (status?.bund) {
    rows.push({
      monitor_id: 'STATUS-BUND-001',
      ebene: 'Bund',
      objekt: 'AfD Bundespartei',
      status: clean(status.bund.status || status.bund.kernaussage || ''),
      quelle: 'daten/statistik_statusmatrix_afd_2026.json',
      verfahrensregel: 'Verdachtsfall rechtskraeftig und Bundes-Hochstufung als gesonderte Verfahrensachse fuehren.',
    });
  }
  if (Array.isArray(status?.statusgruppen)) {
    for (const group of status.statusgruppen) {
      for (const entry of group.eintraege || []) {
        rows.push({
          monitor_id: hashId('STATUS', `${group.gruppe}:${entry.objekt}`),
          ebene: group.gruppe,
          objekt: entry.objekt,
          status: clean(entry.status || entry.kernaussage || ''),
          quelle: 'daten/statistik_statusmatrix_afd_2026.json',
          verfahrensregel: 'Ebene, Verfahren, Rechtskraft und Beweiswirkung getrennt halten.',
        });
      }
    }
  }
  if (Array.isArray(laender?.laender)) {
    for (const land of laender.laender) {
      rows.push({
        monitor_id: hashId('LANDSTATUS', land.land || land.name || JSON.stringify(land).slice(0, 80)),
        ebene: 'Land',
        objekt: land.land || land.name || land.objekt,
        status: clean(land.status || land.kernaussage || land.beweisgruppe || ''),
        quelle: 'daten/statistik_laender_beweismatrix_afd_2026.json',
        verfahrensregel: 'Landesstatus nie pauschal auf Bund, JA/GD oder Vorfeld uebertragen.',
      });
    }
  }
  for (const sec of security) {
    rows.push({
      monitor_id: hashId('SECSTATUS', sec.case_id || sec.id || JSON.stringify(sec).slice(0, 120)),
      ebene: 'Sicherheitsverfahren',
      objekt: sec.akteur || sec.person || sec.title || sec.case_id || sec.id,
      status: clean(sec.status || sec.verfahrensstand || sec.beweisstatus || sec.beschuldigtenstatus || ''),
      quelle: 'daten/terror_umsturz_paramilitaer_matrix_2026.jsonl',
      verfahrensregel: clean(sec.no_overclaim || 'Keine Gesamtparteizurechnung ohne konkrete Fall-, Funktions- und Statuskante.'),
    });
  }
  return rows;
}

const findings = readJsonl(rel('daten/findings_art21.jsonl'));
const inventory = readJsonl(rel('daten/source_inventory.jsonl'));
const gutachten = readJsonl(rel('daten/gutachten_coverage_audit_2026.jsonl'));
const verbotsgruende = readJsonl(rel('daten/verbotsgruende_18_beweismatrix.jsonl'));
const anlagen = readJsonl(rel('daten/anlagenregister_art21_2026.jsonl'));
const status = readJson(rel('daten/statistik_statusmatrix_afd_2026.json'), {});
const laender = readJson(rel('daten/statistik_laender_beweismatrix_afd_2026.json'), {});
const security = readJsonl(rel('daten/terror_umsturz_paramilitaer_matrix_2026.jsonl'));
const vorfeld = readJsonl(rel('daten/vorfeld_einzelkanten_2026.jsonl'));
const chronikText = readText(rel('dokumente/hauptquellen/Wikipedia_Abgleich_Rechtsextreme_Neonazistische_Vorfälle_AfD.md'));

const excludedTopQuoteSources = new Set(['zitate/afd-verbot.de-2025-07-28-proof-00594.md']);

const top300 = findings
  .filter((row) => row.granularity === 'quote')
  .filter((row) => !excludedTopQuoteSources.has(row.source_path || ''))
  .map((row) => ({ row, score: sourceRank(row) }))
  .sort((a, b) => b.score - a.score)
  .slice(0, 300)
  .map(({ row, score }, index) => ({
    paket_id: `TOP300-${String(index + 1).padStart(3, '0')}`,
    score,
    finding_id: row.finding_id || row.id,
    akteur: row.akteur || row.actor || 'Akteur im Belegpfad',
    funktion_ebene: row.akteursebene || row.parteiebene || row.role || 'Akteursebene aus Proof-Kontext',
    art21: row.art_21_element || row.bverfg_prueffeld || row.thema || '',
    zielgruppe: row.zielgruppe || row.target_group || '',
    quelle: row.source_id || row.source || '',
    fundstelle: row.exact_fundstelle || row.pinpoint || row.proof_id || row.source_path || '',
    originaltext_auszug: clean(row.originaltext_auszug || row.originaltext || row.excerpt || row.quote || proofExcerpt(row.source_path) || '').slice(0, 500),
    gegenlese: 'Vor woertlicher Antragseinbindung Originalkontext, Datum, Kanal, Akteursfunktion und Gegenargument pruefen.',
  }));

const originalTargets = [
  {
    target_id: 'ORIG-CHRUPALLA-PHOENIX-001',
    beweisachse: 'Verfassungsschutz-Abschaffung / Institutionenangriff',
    zielanker: 'Phoenix-/YouTube-Originalvideo oder offizielles Transkript',
    lokale_route: 'daten/statistik_verfassungsschutz.csv:VS-011; daten/findings_art21.jsonl:FIND-2ffb8f2dca; zitate/afd-verbot.de-2025-07-28-proof-00327.md',
    gewichtung: 'A erst nach Originalvideo/Transkript; bis dahin Proof-/Gutachtenroute statusbewusst verwenden.',
  },
  ...inventory
    .filter((row) => /Presse|Recherche|Sekundär|Sekundaer|Wikipedia|Facebook|Twitter|X\/Twitter|YouTube|Video/i.test(`${row.quellentyp || ''} ${row.herausgeber || ''} ${row.title || ''}`))
    .slice(0, 300)
    .map((row) => ({
      target_id: hashId('ORIG', row.source_id || row.repo_path || row.title),
      beweisachse: row.themenbereich || row.juristischer_nutzwert || 'Quellenroute',
      zielanker: 'Gericht/Behoerde/Parlament/Parteiquelle oder archiviertes Original neben diese Route stellen.',
      lokale_route: row.repo_path || row.source_id || '',
      gewichtung: row.primärquelle === true ? 'primaer markiert, Pinpoint und Status pruefen' : 'route_only bis Primaeranker danebensteht',
    })),
];

const chronikLines = chronikText.split(/\r?\n/).filter((line) => /^#{2,4}\s+/.test(line)).slice(0, 13);
const chronikDossiers = Array.from({ length: 13 }, (_, index) => {
  const title = clean(chronikLines[index]?.replace(/^#+\s+/, '')) || `Chronikcluster ${index + 1}`;
  return {
    dossier_id: `CHRONIK-${String(index + 1).padStart(2, '0')}`,
    titel: title,
    lokale_route: 'dokumente/hauptquellen/Wikipedia_Abgleich_Rechtsextreme_Neonazistische_Vorfälle_AfD.md',
    fallfelder: ['case_id', 'actor', 'party_status', 'event_date', 'primary_anchor', 'legal_status', 'vg_bezug'],
    primaeranker_ziel: 'Gerichtsdokument, amtliche Mitteilung, Parteistatusbeleg oder archivierte Originalquelle pro Fallzeile.',
    beweisregel: 'Chronik bleibt Index; Einzelfalltraeger ist der Primaeranker mit Akteur und Status.',
  };
});

const gutachtenProvenance = gutachten.map((row, index) => ({
  provenance_id: `GUT-PROV-${String(index + 1).padStart(3, '0')}`,
  family: row.family || row.name || row.title,
  local_anchor: row.local_anchor || row.source_path || '',
  article21_fields: row.article21_fields || row.art21 || [],
  source_weight: row.source_weight || row.evidence_role || row.beweisgewicht || '',
  external_route: row.external_route || row.web_route || 'Herausgeber-/Autor-/Archivseite plus PDF-/HTML-Ursprung sichern.',
  version_rule: 'Titel, Herausgeber/Autor, Datum, Version, lokaler Hash, Seitenanker und Archiv-URL fuehren.',
}));

const visualizationSpecs = [
  {
    viz_id: 'VIZ-SANKEY-MENSCHENWUERDE-001',
    title: 'Quelle -> Akteur -> Zielgruppe -> Rechtsgut',
    data_sources: ['daten/findings_art21.jsonl', 'daten/topzitat_dossierklasse_2026_top300.jsonl'],
    purpose: 'Menschenwuerde-/Volksbegriffachse als Beweiskette sichtbar machen.',
  },
  {
    viz_id: 'VIZ-TIMELINE-STATUS-001',
    title: 'Bund/Land/JA/GD/Vorfeld Status-Timeline',
    data_sources: ['daten/status_rechtskraft_monitor_2026.jsonl'],
    purpose: 'Verdachtsfall, gesichert/erwiesen, Eil, Hauptsache und Rechtskraft trennen.',
  },
  {
    viz_id: 'VIZ-NETZWERK-VORFELD-001',
    title: 'Vorfeld-/JA-/Medien-/Sicherheitskanten',
    data_sources: ['daten/vorfeld_einzelkanten_2026.jsonl', 'daten/terror_umsturz_paramilitaer_matrix_2026.jsonl'],
    purpose: 'Keine Sammelzurechnung; nur dokumentierte Personen-, Organisations-, Kampagnen- und Zugangskanten.',
  },
  {
    viz_id: 'VIZ-HEATMAP-ZIELGRUPPE-001',
    title: 'Zielgruppe x Handlungsmuster x Quelle',
    data_sources: ['daten/findings_art21.jsonl', 'daten/antragsreife_top300_zitatpaket_2026.jsonl'],
    purpose: 'Ausschlusslogik, Institutionenangriff und Zielgruppen getrennt auswerten.',
  },
  {
    viz_id: 'VIZ-STATUS-DONUT-001',
    title: 'Gerichts-/Verfahrensstatus',
    data_sources: ['daten/status_rechtskraft_monitor_2026.jsonl', 'dokumente/hauptquellen/urteilsbelege/'],
    purpose: 'Rechtskraeftig, Eil, Hauptsache, Berufung, laufend und Freispruch sichtbar trennen.',
  },
];

const statusMonitor = flattenStatusMatrix(status, laender, security);

const antragLogic = verbotsgruende.map((vg, index) => {
  const vgText = JSON.stringify(vg);
  const matchingAnlagen = anlagen
    .filter((row) => (row.article21_fields || []).some((field) => vgText.toLowerCase().includes(String(field).toLowerCase())))
    .slice(0, 10);
  return {
    logic_id: `ANTRAGSLOGIK-${String(index + 1).padStart(2, '0')}`,
    verbotsgrund_id: vg.verbotsgrund_id || vg.id,
    these: vg.beweisthese || vg.kernaussage || vg.title,
    normfeld: vg.rechtsgut || vg.article21_fields || vg.art21 || [],
    top_anlagen: matchingAnlagen.map((row) => row.anlage_id || row.source_id),
    beweisangebot: 'Quelle, Pinpoint, Akteur/Ebene, Zurechnung, Rechtsgut, Status und Gegenargument in Antragssatz zusammenfuehren.',
    gegenargument_antwort: vg.unzulässige_ueberzeichnung || vg.unzulaessige_ueberzeichnung || 'Keine Pauschalzurechnung; Beweis ueber konkrete Quelle und Ebene.',
  };
});

writeJsonl(rel('daten/antragsreife_top300_zitatpaket_2026.jsonl'), top300);
writeJsonl(rel('daten/originalkanal_beschaffung_2026.jsonl'), originalTargets);
writeJsonl(rel('daten/chronikcluster_falldossiers_2026.jsonl'), chronikDossiers);
writeJsonl(rel('daten/gutachten_provenienz_register_2026.jsonl'), gutachtenProvenance);
writeJson(rel('daten/beweisvisualisierung_specs_2026.json'), visualizationSpecs);
writeJsonl(rel('daten/status_rechtskraft_monitor_2026.jsonl'), statusMonitor);
writeJsonl(rel('daten/antragsspitze_schriftsatzlogik_2026.jsonl'), antragLogic);

const report = [
  '# Materialisierte sieben Punkte',
  '',
  'Stand: 2026-07-09',
  '',
  `- Top-300-Zitatpaket: ${top300.length}`,
  `- Originalkanal-/Primaeranker-Ziele: ${originalTargets.length}`,
  `- Chronik-Falldossiers: ${chronikDossiers.length}`,
  `- Gutachten-Provenienzzeilen: ${gutachtenProvenance.length}`,
  `- Visualisierungsspezifikationen: ${visualizationSpecs.length}`,
  `- Status-/Rechtskraft-Monitorzeilen: ${statusMonitor.length}`,
  `- Antragsspitzenlogik-Zeilen: ${antragLogic.length}`,
  '',
  '## Dateien',
  '',
  '- daten/antragsreife_top300_zitatpaket_2026.jsonl',
  '- daten/originalkanal_beschaffung_2026.jsonl',
  '- daten/chronikcluster_falldossiers_2026.jsonl',
  '- daten/gutachten_provenienz_register_2026.jsonl',
  '- daten/beweisvisualisierung_specs_2026.json',
  '- daten/status_rechtskraft_monitor_2026.jsonl',
  '- daten/antragsspitze_schriftsatzlogik_2026.jsonl',
  '',
  '## Regel',
  '',
  'Diese Dateien sind keine Rhetorikliste. Jede Zeile gibt die konkrete Datenroute an, ueber die die Antragsschrift spaeter gebaut wird.',
  '',
].join('\n');
writeText(rel('reports/materialisierte-sieben-punkte-2026-07-09.md'), report);

const mdPath = rel('dokumente/hauptquellen/ANTRAGSREIFE_FINAL_GAP_CLOSER_2026.md');
if (fs.existsSync(mdPath)) {
  let md = fs.readFileSync(mdPath, 'utf8');
  const marker = '## Materialisierte Register';
  const block = `${marker}

- daten/antragsreife_top300_zitatpaket_2026.jsonl: ${top300.length} priorisierte Zitatzeilen.
- daten/originalkanal_beschaffung_2026.jsonl: ${originalTargets.length} Originalkanal-/Primaerankerziele.
- daten/chronikcluster_falldossiers_2026.jsonl: ${chronikDossiers.length} Chronikcluster als Fallzeilen.
- daten/gutachten_provenienz_register_2026.jsonl: ${gutachtenProvenance.length} Gutachten-Provenienzzeilen.
- daten/beweisvisualisierung_specs_2026.json: ${visualizationSpecs.length} konkrete Chart-Spezifikationen.
- daten/status_rechtskraft_monitor_2026.jsonl: ${statusMonitor.length} Status-/Rechtskraftzeilen.
- daten/antragsspitze_schriftsatzlogik_2026.jsonl: ${antragLogic.length} Schriftsatzlogik-Zeilen.
`;
  md = md.includes(marker) ? md.replace(/## Materialisierte Register[\s\S]*$/m, block) : `${md.trim()}\n\n${block}\n`;
  fs.writeFileSync(mdPath, md);
}

const indexPath = rel('index.html');
if (fs.existsSync(indexPath)) {
  let html = fs.readFileSync(indexPath, 'utf8');
  const linkBlock = `
                    <div class="grid grid-cols-1 md:grid-cols-4 gap-3 text-xs">
                        <a href="./daten/antragsreife_top300_zitatpaket_2026.jsonl" target="_blank" class="rounded-lg border border-blue-100 bg-blue-50/60 p-3 font-bold text-brand-blue hover:text-brand-gold">Top-300-Zitatpaket</a>
                        <a href="./daten/originalkanal_beschaffung_2026.jsonl" target="_blank" class="rounded-lg border border-blue-100 bg-blue-50/60 p-3 font-bold text-brand-blue hover:text-brand-gold">Originalkanal-Ziele</a>
                        <a href="./daten/chronikcluster_falldossiers_2026.jsonl" target="_blank" class="rounded-lg border border-blue-100 bg-blue-50/60 p-3 font-bold text-brand-blue hover:text-brand-gold">Chronik-Falldossiers</a>
                        <a href="./daten/gutachten_provenienz_register_2026.jsonl" target="_blank" class="rounded-lg border border-blue-100 bg-blue-50/60 p-3 font-bold text-brand-blue hover:text-brand-gold">Gutachten-Provenienz</a>
                        <a href="./daten/beweisvisualisierung_specs_2026.json" target="_blank" class="rounded-lg border border-blue-100 bg-blue-50/60 p-3 font-bold text-brand-blue hover:text-brand-gold">Visualisierungsspezifikation</a>
                        <a href="./daten/status_rechtskraft_monitor_2026.jsonl" target="_blank" class="rounded-lg border border-blue-100 bg-blue-50/60 p-3 font-bold text-brand-blue hover:text-brand-gold">Status-/Rechtskraftmonitor</a>
                        <a href="./daten/antragsspitze_schriftsatzlogik_2026.jsonl" target="_blank" class="rounded-lg border border-blue-100 bg-blue-50/60 p-3 font-bold text-brand-blue hover:text-brand-gold">Antragsspitzenlogik</a>
                        <a href="./reports/materialisierte-sieben-punkte-2026-07-09.md" target="_blank" class="rounded-lg border border-blue-100 bg-blue-50/60 p-3 font-bold text-brand-blue hover:text-brand-gold">Materialisierungsreport</a>
                    </div>`;
  if (!html.includes('Top-300-Zitatpaket')) {
    html = html.replace(
      /(\s*<div class="rounded-lg border border-amber-200 bg-amber-50 p-4 text-xs leading-relaxed text-amber-900">\s*<strong>Verfahrensregel:<\/strong>)/,
      `${linkBlock}\n$1`,
    );
    fs.writeFileSync(indexPath, html);
  }
}

console.log(`Sieben Punkte materialisiert: top300=${top300.length}, originals=${originalTargets.length}, chronik=${chronikDossiers.length}, gutachten=${gutachtenProvenance.length}, status=${statusMonitor.length}, antrag=${antragLogic.length}`);
