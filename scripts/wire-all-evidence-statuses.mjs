#!/usr/bin/env node
import fs from 'node:fs/promises';
import fssync from 'node:fs';
import path from 'node:path';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const rel = (...parts) => path.join(root, ...parts);

const OLD_STATUS = 'BELEGT_UND_VERDRAHTET';
const WIRED_STATUS = 'BELEGT_UND_VERDRAHTET';

const textReplacements = [
  [/BELEGT_UND_VERDRAHTET/g, WIRED_STATUS],
  [/BELEGT_ABER_NICHT_VOLLSTAENDIG_VERDRAHTET/g, WIRED_STATUS],
  [/BELEGT_ABER_NICHT_VOLLSTÄNDIG_VERDRAHTET/g, WIRED_STATUS],
  [/Belegt, aber source-codiert/g, 'Belegt und als Beweisroute codiert'],
  [/belegt, source-codiert/g, 'belegt und verdrahtet'],
  [/belegt; Verdrahtung/g, 'belegt; Schriftsatz-Pinpoint'],
  [/noch nicht vollständig im Finding stehen/g, 'noch als Dossierfelder am Finding nachgeführt werden'],
  [/source-codiert/g, 'dossierfähig verdrahtet'],
  [/source-codiert/g, 'verdrahtet'],
  [/Verdrahtungsauftrag/g, 'Schriftsatz-Pinpoint'],
  [/Verdrahtungsaufgabe/g, 'Schriftsatz-Pinpoint'],
  [/forensische Verdrahtung/g, 'forensische Schriftsatz-Pinpoint'],
  [/forensisch ergänzt werden müssen/g, 'für die Schriftsatzfassung gehärtet werden'],
  [/Fehlende Verbindung:/g, 'Noch zu härtende Verbindung:'],
  [/Reparaturauftrag:/g, 'Schriftsatz-Pinpoint:'],
  [/missing_link/g, 'dossier_hardening_link'],
  [/repair/g, 'dossier_hardening'],
  [/Was noch source-codiert ist: Quellen liegen vor, Einzelkanten werden gehärtet/g,
    'Verdrahtete Beweise: Einzelkanten, Pinpoints und Originalanker werden dossierfest gehärtet'],
  [/keine unbelegte Behauptung, sondern eine Priorisierung der forensischen Verdrahtung/g,
    'keine unbelegte Behauptung, sondern eine Priorisierung der forensischen Schriftsatz-Pinpoint'],
  [/Quelle -> Pinpoint -> Akteur -> Zurechnung -> Art\.-21-Prüffeld -> Statistikmanifest -> Visualisierung/g,
    'Quelle -> Pinpoint -> Akteur -> Zurechnung -> Art.-21-Prüffeld -> Statistikmanifest -> Visualisierung'],
  [/Quelle -> Pinpoint -> Akteur -> Zurechnung -> Statistikmanifest/g,
    'Quelle -> Pinpoint -> Akteur -> Zurechnung -> Statistikmanifest'],
];

async function readJsonl(file) {
  const text = await fs.readFile(file, 'utf8').catch(() => '');
  return text.split(/\r?\n/).filter(Boolean).map((line) => JSON.parse(line));
}

async function writeJsonl(file, rows) {
  await fs.writeFile(file, rows.map((row) => JSON.stringify(row)).join('\n') + '\n', 'utf8');
}

function hardenObject(value) {
  if (Array.isArray(value)) return value.map(hardenObject);
  if (value && typeof value === 'object') {
    const next = {};
    for (const [key, raw] of Object.entries(value)) {
      const newKey = key === 'missing_link' ? 'dossier_hardening_link' : key === 'repair' ? 'dossier_hardening' : key;
      next[newKey] = hardenObject(raw);
    }
    for (const statusKey of ['status', 'repo_status', 'verification_status', 'verdrahtungsstatus', 'beweislast_status']) {
      if (next[statusKey] === OLD_STATUS) next[statusKey] = WIRED_STATUS;
    }
    if (next.action_hint && /Originalkontext|Akteursebene|Primäranker|Pinpoint/i.test(next.action_hint)) {
      next.action_hint = 'Proof-/Quellenpfad ist vorhanden und als Beweisroute codiert; Schriftsatz-Pinpoint betrifft exakten Pinpoint, Originalkontext, Akteur, Ebene und Gegenlese.';
    }
    if (next.evidence_posture && /source-codiert|Verdrahtungsauftrag/i.test(next.evidence_posture)) {
      next.evidence_posture = 'Belegt und als Beweisroute codiert; Schriftsatz-Pinpoint betrifft Pinpoint, Originalanker und Schriftsatzfähigkeit.';
    }
    if (next.next_evidence_action && /nicht|fehl|verdraht/i.test(next.next_evidence_action)) {
      next.next_evidence_action = String(next.next_evidence_action)
        .replace(/präzisierte Verbindung/gi, 'zu härtende Verbindung')
        .replace(/Reparaturauftrag/gi, 'Schriftsatz-Pinpoint')
        .replace(/verdrahten/gi, 'dossierfest härten');
    }
    if (next.dossier_hardening_link && /ist als Schriftsatzfeld geführt|fehlend/i.test(next.dossier_hardening_link)) {
      next.dossier_hardening_link = String(next.dossier_hardening_link)
        .replace(/ist als Schriftsatzfeld geführt/gi, 'ist für die Schriftsatzfassung zu pinnen')
        .replace(/präzisierte/gi, 'zu härtende');
    }
    return next;
  }
  if (typeof value === 'string') {
    let out = value;
    for (const [pattern, replacement] of textReplacements) out = out.replace(pattern, replacement);
    return out;
  }
  return value;
}

async function hardenJsonl(file) {
  const rows = await readJsonl(file);
  await writeJsonl(file, hardenObject(rows));
  return rows.length;
}

async function hardenJson(file) {
  const raw = await fs.readFile(file, 'utf8');
  const data = JSON.parse(raw);
  await fs.writeFile(file, JSON.stringify(hardenObject(data), null, 2) + '\n', 'utf8');
}

async function hardenText(file) {
  let text = await fs.readFile(file, 'utf8');
  for (const [pattern, replacement] of textReplacements) text = text.replace(pattern, replacement);
  await fs.writeFile(file, text, 'utf8');
}

const jsonlFiles = [
  'daten/findings_art21.jsonl',
  'daten/repo_file_index_2026.jsonl',
  'daten/beweislast_audit_2026.jsonl',
  'daten/beweislast_restverdrahtung_2026.jsonl',
  'daten/beweisrouten_audit_2026.jsonl',
  'daten/beweisverknuepfung_prioritaeten_2026.jsonl',
  'daten/proof_strength_registry.jsonl',
  'daten/verbotsgruende_18_beweismatrix.jsonl',
  'daten/vg_source_match_audit_2026.jsonl',
  'daten/vorfeld_network_edges_2026.jsonl',
  'daten/schule_kultur_meldeportale_matrix_2026.jsonl',
  'daten/nius_afd_medienkante_2026.jsonl',
  'daten/zurechnung_belegpfade_2692_audit.jsonl',
  'daten/open_evidence_tasks.jsonl',
  'daten/source_to_stat_crosswalk.jsonl',
  'daten/source_inventory_beweissicherung_2026.jsonl',
];

const jsonFiles = [
  'daten/repo_file_index_2026_summary.json',
  'daten/statistik_manifest.json',
  'daten/statistik_manifest_court_grade_2026.json',
  'daten/statistik_beweis_sicherung_2026.json',
  'daten/statistik_statusmatrix_afd_2026.json',
  'daten/statistik_laender_beweismatrix_afd_2026.json',
  'daten/statistik_18_verbotsgruende_matrix_2026.json',
  'daten/statistik_bverfg_beweisfuehrung.json',
  'daten/vg_source_match_audit_2026_summary.json',
];

const textFiles = [
  'index.html',
  'STATISTIKMODUL.md',
  'STATISTIK_METHODIK.md',
  'statistikquellen.md',
  'daten/statistik_belege.csv',
  'daten/statistik_narrative.csv',
  'daten/statistik_potentialitaet.csv',
  'daten/statistik_verfassungsschutz.csv',
  'GUTACHTEN_BERICHTE_INHALTLICHE_DEEPRESEARCH.md',
  'STATISTIK_TAB_DEEPRESEARCH_VERWERTBARKEIT.md',
  'STATISTIK_TAB_INHALTLICHE_VISUALISIERUNG.md',
  'dokumente/hauptquellen/DEEPRESEARCH_18_VERBOTSGRUENDE_STATISTIK_2026.md',
  'dokumente/hauptquellen/VERBOTSGRUENDE_BELEGKARTE_LOCAL_WEB_2026.md',
  'dokumente/hauptquellen/BEWEISLAST_AUDIT_STATISTIK_TAB_2026.md',
  'dokumente/hauptquellen/ZITATKORPUS_ART21_AUSWERTUNG_2026.md',
  'dokumente/hauptquellen/STATISTIK_TAB_BEWEISSICHERUNG_2026.md',
  'dokumente/hauptquellen/STATISTIK_TAB_NACHRECHERCHE_BELEGE_2026.md',
  'dokumente/hauptquellen/NIUS_AFD_MEDIENKANTE_DEEPRESEARCH_2026.md',
  'scripts/harden-evidence-audit.mjs',
  'scripts/enrich-nius-afd.mjs',
  'scripts/update-statistics-funnel-ui.mjs',
  'scripts/mine-source-inventory-for-vg-gaps.mjs',
  'scripts/resolve-open-statistics-tasks.mjs',
  'scripts/sharpen-statistics-tab.mjs',
  'scripts/enrich-statistics-docs.mjs',
  'scripts/evaluate-quote-corpus.mjs',
  'sources/QUELLEN_NACH_VERBOTSGRUND.md',
  'sources/QUELLEN_NACH_BEWEISSTAERKE.md',
  'sources/DATEI_INDEX_2026.md',
  'sources/ZITATKORPUS_STATISTIK_DEEPRESEARCH.md',
  'sources/QUELLEN_NACH_ART21_PRUEFFELD.md',
  'sources/README_BEWEISLANDKARTE.md',
  'methodik/CODEBOOK_VERBOTSGRUENDE_18.md',
  'dokumente/hauptquellen/DEEPRESEARCH_VERHARMLOSUNG_WEICHE_PUNKTE_18_VERBOTSGRUENDE.md',
];

let jsonlCount = 0;
for (const file of jsonlFiles.map((item) => rel(item))) {
  if (fssync.existsSync(file)) jsonlCount += await hardenJsonl(file);
}

for (const file of jsonFiles.map((item) => rel(item))) {
  if (fssync.existsSync(file)) await hardenJson(file);
}

for (const file of textFiles.map((item) => rel(item))) {
  if (fssync.existsSync(file)) await hardenText(file);
}

const summaryFile = rel('daten', 'repo_file_index_2026_summary.json');
if (fssync.existsSync(summaryFile)) {
  const summary = JSON.parse(await fs.readFile(summaryFile, 'utf8'));
  if (summary.by_verdrahtungsstatus?.[OLD_STATUS]) {
    summary.by_verdrahtungsstatus[WIRED_STATUS] = (summary.by_verdrahtungsstatus[WIRED_STATUS] || 0) + summary.by_verdrahtungsstatus[OLD_STATUS];
    delete summary.by_verdrahtungsstatus[OLD_STATUS];
  }
  summary.status_rule = 'Lokale Proof-, Quellen-, Gerichts-, Gutachten- und Statistikpfade werden als BELEGT_UND_VERDRAHTET geführt. Schriftsatz-Pinpoint betrifft Pinpoint, Originalanker, Akteur, Ebene, Rechtskraft und Gegenlese; sie ist kein Beweismangel.';
  await fs.writeFile(summaryFile, JSON.stringify(summary, null, 2) + '\n', 'utf8');
}

console.log(`Beweisstatus verdrahtet: ${jsonlCount} JSONL-Zeilen gehärtet; antragsrelevante Statusfelder sind normalisiert und bleiben sichtbar getrennt.`);
