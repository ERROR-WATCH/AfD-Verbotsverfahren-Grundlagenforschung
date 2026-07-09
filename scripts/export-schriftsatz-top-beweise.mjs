#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

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

const clean = (value) => String(value ?? '').replace(/\s+/g, ' ').trim();
const isBearing = (row, hierarchy) => {
  const h = hierarchy.get(row.source_id);
  const grade = row.evidence_grade || h?.evidence_grade || '';
  if (!['A', 'B'].includes(grade)) return false;
  if (h?.application_class === 'route_only') return false;
  return row.primary_anchor === true || h?.application_class === 'tragend' || h?.application_class === 'stuetzend';
};

const topRows = readJsonl(path.join(root, 'daten/schriftsatz_top10_verbotsgruende_2026.jsonl'));
const hierarchyRows = readJsonl(path.join(root, 'daten/antrag_quellenhierarchie_2026.jsonl'));
const securityRows = readJsonl(path.join(root, 'daten/terror_umsturz_paramilitaer_matrix_2026.jsonl'));
const quoteRows = readJsonl(path.join(root, 'daten/quote_actor_registry_2026.jsonl'));
const webRows = readJsonl(path.join(root, 'daten/official_web_anchor_integrity_2026.jsonl'));
const vgRows = readJsonl(path.join(root, 'daten/verbotsgruende_18_beweismatrix.jsonl'));

const hierarchy = new Map(hierarchyRows.map((row) => [row.source_id, row]));
const quotesBySource = new Map();
for (const quote of quoteRows) {
  if (!quote.source_id) continue;
  const list = quotesBySource.get(quote.source_id) || [];
  if (list.length < 3) list.push(quote);
  quotesBySource.set(quote.source_id, list);
}

const webBySourcePath = new Map(webRows.map((row) => [row.repo_path, row]));
const exportRows = [];

for (const vg of vgRows) {
  const candidates = topRows
    .filter((row) => row.verbotsgrund_id === vg.verbotsgrund_id)
    .filter((row) => isBearing(row, hierarchy))
    .slice(0, 8);
  for (const row of candidates) {
    const sourceUse = clean(row.permissible_use || vg.zulässige_formulierung || vg.zulaessige_formulierung || vg.beweisthese || '');
    const securityHits = securityRows.filter((sec) => JSON.stringify(sec.source_ids || []).includes(row.source_id)).slice(0, 2);
    const quoteHits = quotesBySource.get(row.source_id) || [];
    const web = webBySourcePath.get(row.repo_path);
    exportRows.push({
      id: `ANTRAG-${row.id}`,
      verbotsgrund_id: row.verbotsgrund_id,
      verbotsgrund_title: row.title,
      source_id: row.source_id,
      source_title: row.source_title,
      repo_path: row.repo_path,
      evidence_grade: row.evidence_grade,
      primary_anchor: row.primary_anchor,
      application_class: hierarchy.get(row.source_id)?.application_class || 'tragend',
      pinpoint: row.pinpoint,
      tatsachensatz: sourceUse || `Die Quelle ${row.source_title} wird als tragender Beleg fuer ${row.title} gefuehrt.`,
      zurechnungssatz: row.actor_or_level,
      beweisangebot: `${row.source_title}; ${row.repo_path || row.source_id}; ${row.pinpoint}`,
      rechtliche_wuerdigung: `${row.title}: verwertbar ueber Quelle, Pinpoint, Akteur/Ebene, Zurechnung und Art.-21-Prueffeld.`,
      gegenlese: row.counter_read,
      route_only_excluded: true,
      linked_quote_findings: quoteHits.map((quote) => quote.finding_id).filter(Boolean),
      linked_security_cases: securityHits.map((sec) => sec.id).filter(Boolean),
      archive_integrity: web ? { sha256: web.sha256, bytes: web.bytes, archived_at: web.archived_at } : null
    });
  }
}

writeJsonl(path.join(root, 'daten/schriftsatz_export_top_beweise_2026.jsonl'), exportRows);

const byVg = new Map();
for (const row of exportRows) {
  const list = byVg.get(row.verbotsgrund_id) || [];
  list.push(row);
  byVg.set(row.verbotsgrund_id, list);
}

const md = [];
md.push('# Schriftsatz-Export Top-Beweise 2026');
md.push('');
md.push(`Stand: ${now}`);
md.push('');
md.push('Dieser Export fuehrt nur A/B-Anker im Haupttext. Route-only-, Arbeitskopie- und reine Kontextquellen bleiben aus der Beweislinie heraus und dienen nur als Archiv- oder Suchroute.');
md.push('');
md.push(`Exportierte Beweisbausteine: ${exportRows.length}`);
md.push('');

for (const vg of vgRows) {
  const rows = byVg.get(vg.verbotsgrund_id) || [];
  md.push(`## ${vg.verbotsgrund_id} ${vg.title}`);
  md.push('');
  if (!rows.length) {
    md.push('Kein Haupttextanker ausgegeben; dieser Punkt wird nur ueber andere tragende Achsen oder Kontextregister gefuehrt.');
    md.push('');
    continue;
  }
  rows.slice(0, 6).forEach((row, index) => {
    md.push(`### Beweisbaustein ${index + 1}`);
    md.push('');
    md.push(`Tatsachenkern: ${row.tatsachensatz}`);
    md.push('');
    md.push(`Beweisangebot: ${row.beweisangebot}`);
    md.push('');
    md.push(`Zurechnung: ${row.zurechnungssatz}`);
    md.push('');
    md.push(`Rechtliche Einordnung: ${row.rechtliche_wuerdigung}`);
    md.push('');
    md.push(`Nicht behaupten: `);
    md.push('');
  });
}

fs.writeFileSync(path.join(root, 'dokumente/hauptquellen/SCHRIFTSATZ_EXPORT_TOP_BEWEISE_2026.md'), md.join('\n'));

const packagePath = path.join(root, 'package.json');
if (fs.existsSync(packagePath)) {
  const pkg = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
  pkg.scripts = pkg.scripts || {};
  if (!pkg.scripts['export:schriftsatz']) {
    pkg.scripts['export:schriftsatz'] = 'node scripts/export-schriftsatz-top-beweise.mjs';
  }
  if (pkg.scripts['build:statistics'] && !pkg.scripts['build:statistics'].includes('export-schriftsatz-top-beweise.mjs')) {
    pkg.scripts['build:statistics'] += ' && node scripts/export-schriftsatz-top-beweise.mjs';
  }
  fs.writeFileSync(packagePath, JSON.stringify(pkg, null, 2) + '\n');
}

console.log(`Schriftsatz export written: ${exportRows.length} bearing evidence blocks.`);
