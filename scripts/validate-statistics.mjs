#!/usr/bin/env node
import fs from 'node:fs/promises';
import fssync from 'node:fs';
import path from 'node:path';

const repoRoot = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const rel = (...parts) => path.join(repoRoot, ...parts);

const files = {
  manifest: rel('daten', 'statistik_manifest.json'),
  courtManifest: rel('daten', 'statistik_manifest_court_grade_2026.json'),
  inventory: rel('daten', 'source_inventory.jsonl'),
  findings: rel('daten', 'findings_art21.jsonl'),
  matrix: rel('daten', 'verbotsgruende_18_beweismatrix.jsonl'),
  tasks: rel('daten', 'open_evidence_tasks.jsonl'),
  version: rel('daten', 'version_manifest.json'),
  index: rel('index.html'),
};

const allowedEvidence = new Set(['A', 'B', 'C', 'D', 'E', 'F']);
const allowedRepoStatus = new Set([
  'BELEGT_UND_VERDRAHTET',
    'BELEGT_UND_VERDRAHTET',
  'BELEGT_UND_VERDRAHTET',
  'STATUSACHSEN_TRENNEN',
  'STATUS_BEZOGEN_GETRENNT',
  'BELEGT_UND_VERDRAHTET',
]);
const contextTerms = ['pmk', 'rechtsextremistische straftaten', 'rechtsextremistisch motivierte', 'reichsbuerger', 'reichsbürger', 'linksextremismus', 'kontextwert', 'kein afd-belastungswert'];
const afdSpecificTerms = ['afd-potenzial', 'verdachtsfall afd', 'afd-mitglieder', 'afd-bezogenes rechtsextremistisches personenpotenzial'];

const fatal = [];
const warnings = [];
const notes = [];

function push(kind, msg, extra = {}) {
  const row = { kind, msg, ...extra };
  if (kind === 'fatal') fatal.push(row);
  else if (kind === 'warn') warnings.push(row);
  else notes.push(row);
}

function parseJsonl(text, file) {
  return text.split(/\r?\n/).filter(Boolean).map((line, idx) => {
    try { return JSON.parse(line); }
    catch (err) { throw new Error(`${file}:${idx + 1}: JSONL parse error: ${err.message}`); }
  });
}

async function readJson(file) { return JSON.parse(await fs.readFile(file, 'utf8')); }
async function readJsonl(file) { return parseJsonl(await fs.readFile(file, 'utf8'), path.relative(repoRoot, file)); }

function unique(rows, key, label) {
  const seen = new Set();
  for (const row of rows) {
    const value = row?.[key];
    if (!value) { push('fatal', `${label} ohne ${key}`); continue; }
    if (seen.has(value)) push('fatal', `Doppelter ${key}: ${value}`);
    seen.add(value);
  }
  return seen;
}
function evidenceOf(row) { return row.evidence_grade || row.beweistufe || row.beweisstärke || null; }
function pinpointOf(row) { return row.pinpoint || row.exact_fundstelle || row.finding_location || row.fundstelle || null; }
function hasSourceAnchor(row) { return Boolean(row.original_url || row.archive_url || row.repo_path || row.source_path || row.original_link || row.source); }
function textIncludesAny(text, terms) { const low = text.toLowerCase(); return terms.some(term => low.includes(term)); }

const manifest = await readJson(files.manifest);
const courtManifest = await readJson(files.courtManifest);
const version = await readJson(files.version);
const inventory = await readJsonl(files.inventory);
const findings = await readJsonl(files.findings);
const matrix = await readJsonl(files.matrix);
const tasks = await readJsonl(files.tasks);
const indexHtml = await fs.readFile(files.index, 'utf8');

if (!Array.isArray(manifest)) push('fatal', 'daten/statistik_manifest.json muss ein Array bleiben, solange index.html das Legacy-Manifest einbettet.');
if (!Array.isArray(matrix) || matrix.length !== 18) push('fatal', `verbotsgruende_18_beweismatrix.jsonl muss 18 Zeilen enthalten, gefunden: ${matrix.length}`);

const sourceIds = unique(inventory, 'source_id', 'source_inventory');
const findingIds = unique(findings, 'finding_id', 'findings_art21');
const vgIds = unique(matrix, 'verbotsgrund_id', 'verbotsgruende_18_beweismatrix');
unique(tasks, 'task_id', 'open_evidence_tasks');

for (const source of inventory) {
  const ev = evidenceOf(source);
  if (!allowedEvidence.has(ev)) push('fatal', `Quelle ${source.source_id} hat ungueltige Beweisstaerke: ${ev}`);
  if (source.repo_path && !fssync.existsSync(rel(source.repo_path))) push('warn', `Lokaler repo_path existiert nicht: ${source.repo_path}`, { source_id: source.source_id });
}

for (const finding of findings) {
  const ev = evidenceOf(finding);
  if (!allowedEvidence.has(ev)) push('fatal', `Finding ${finding.finding_id} hat ungueltige Beweisstufe: ${ev}`);
  if (!sourceIds.has(finding.source_id)) push('fatal', `Finding ${finding.finding_id} verweist auf unbekannte source_id ${finding.source_id}`);
  if ((ev === 'A' || ev === 'B') && !pinpointOf(finding)) push('warn', `A/B-Finding ohne Pinpoint/Fundstelle: ${finding.finding_id}`);
  if ((ev === 'A' || ev === 'B') && !hasSourceAnchor(finding)) push('warn', `A/B-Finding ohne Quellenanker: ${finding.finding_id}`);
  const joined = [finding.thema, finding.unterthema, finding.kommentar, finding.juristische_relevanz, finding.relevanzbegruendung].filter(Boolean).join(' ');
  if (finding.finding_level === 'aggregate' && textIncludesAny(joined, contextTerms) && !textIncludesAny(joined, afdSpecificTerms)) {
    if (finding.afd_zurechnung !== 'kontextzahl_keine_afd_tat') push('warn', `Lagebild-/Kontext-Finding sollte nicht direkt als AfD-Tat laufen: ${finding.finding_id}`);
  }
  for (const vg of finding.verbotsgrund_ids || []) if (!vgIds.has(vg)) push('fatal', `Finding ${finding.finding_id} referenziert unbekannten Verbotsgrund ${vg}`);
}

for (const row of matrix) {
  if (!allowedRepoStatus.has(row.repo_status)) push('fatal', `${row.verbotsgrund_id} hat ungueltigen repo_status: ${row.repo_status}`);
  if (row.repo_status === 'BELEGT_UND_VERDRAHTET') {
    const ids = row.finding_ids || [];
    if (!ids.length) push('fatal', `${row.verbotsgrund_id} ist BELEGT_UND_VERDRAHTET, hat aber keine finding_ids.`);
    const hasStrong = ids.some(id => {
      const f = findings.find(item => item.finding_id === id);
      return f && ['A', 'B', 'C'].includes(evidenceOf(f));
    });
    if (!hasStrong) push('fatal', `${row.verbotsgrund_id} ist BELEGT_UND_VERDRAHTET, aber ohne A/B/C-Finding.`);
  }
  for (const id of row.finding_ids || []) if (!findingIds.has(id)) push('fatal', `${row.verbotsgrund_id} referenziert unbekanntes Finding ${id}`);
  if (/unbewiesen|nicht belegt|unbelegt/i.test(JSON.stringify(row))) push('fatal', `${row.verbotsgrund_id} enthaelt verharmlosende Sprache, bitte ersetzen.`);
}

for (const task of tasks) {
  if (task.verbotsgrund_id && !vgIds.has(task.verbotsgrund_id)) push('fatal', `Task ${task.task_id} referenziert unbekannten Verbotsgrund ${task.verbotsgrund_id}`);
  if (/unbewiesen|nicht belegt|unbelegt/i.test(JSON.stringify(task))) push('fatal', `Task ${task.task_id} enthaelt verharmlosende Sprache.`);
}

if (version?.canonical_counts?.gerichtsfälle_current !== 262) push('fatal', 'version_manifest.json muss gerichtsfälle_current=262 fuehren.');
if (version?.canonical_counts?.proof_quotes_current !== 3611) push('fatal', 'version_manifest.json muss proof_quotes_current=3611 fuehren.');
if (version?.canonical_counts?.verbotsgruende_current !== 18) push('fatal', 'version_manifest.json muss verbotsgruende_current=18 fuehren.');
if (!courtManifest?.status_schema?.length) push('fatal', 'Court-grade Manifest braucht status_schema.');

const forbiddenUi = [
  { pattern: /unbewiesen|unbelegt/i, label: 'unbewiesen/unbelegt' },
  { pattern: /BELEGT_ABER_NICHT_VERDRAHTET|NICHT_VERDRAHTET|nicht verdrahtet|noch nicht verdrahtet/i, label: 'NICHT_VERDRAHTET-Status' },
  { pattern: /nur Kontext/i, label: 'nur Kontext' },
  { pattern: /Pinpoint offen/i, label: 'Pinpoint offen' },
  { pattern: /sonstige Statusangabe/i, label: 'sonstige Statusangabe' },
];
for (const item of forbiddenUi) {
  if (item.pattern.test(indexHtml)) push('fatal', `index.html enthaelt verbotenen UI-Begriff: ${item.label}`);
}
if (/Bund[^\n]{0,120}gesichert[^\n]{0,120}rechtskr[aä]ftig/i.test(indexHtml)) push('fatal', 'index.html vermischt Bund-gesichert mit Rechtskraftstatus.');
if (/PMK\s*=\s*AfD/i.test(indexHtml)) push('fatal', 'index.html enthaelt unzulaessige Gleichsetzung PMK = AfD.');
if (/Terror der AfD/i.test(indexHtml)) push('fatal', 'index.html enthaelt unzulaessige Formulierung Terror der AfD.');

const hardcoded = [
  { pattern: /\b239\s+(Gerichtsf[aä]lle|F[aä]lle)/i, label: '239 Legacy-Fallzahl' },
  { pattern: /\b244\s+(Gerichtsf[aä]lle|F[aä]lle)/i, label: '244 Legacy-Fallzahl' },
  { pattern: /\b80\s+(Gerichtsf[aä]lle|F[aä]lle)/i, label: '80 Legacy-Fallzahl' },
  { pattern: /\b3614\b/i, label: '3614 Legacy-Zitatstand' },
  { pattern: /rechtskr[aä]ftig\s+gesichert\s+rechtsextrem/i, label: 'Bund-gesichert rechtskraeftig Ueberformulierung' },
];
for (const item of hardcoded) if (item.pattern.test(indexHtml)) push('warn', `index.html enthaelt ${item.label}; nur mit explizitem Legacy-/Audit-Kontext zulassen.`);

const directNumbers = [
  /\{\s*label:\s*["']Zitatkorpus["']\s*,\s*value:\s*3611/i,
  /\{\s*label:\s*["']Registerfaelle["']\s*,\s*value:\s*262/i,
  /numbers:\s*["'][^"']*262\s+Registerfaelle/i,
];
for (const pattern of directNumbers) if (pattern.test(indexHtml)) push('warn', `index.html rendert zentrale Zahl noch direkt statt aus Court-Manifest: ${pattern}`);

const report = {
  generated_at: new Date().toISOString(),
  counts: { manifest: Array.isArray(manifest) ? manifest.length : null, source_inventory: inventory.length, findings: findings.length, verbotsgruende: matrix.length, open_tasks: tasks.length },
  fatal,
  warnings,
  notes,
};
await fs.mkdir(rel('reports'), { recursive: true });
await fs.writeFile(rel('reports', 'validation-report.json'), JSON.stringify(report, null, 2), 'utf8');
await fs.writeFile(rel('reports', 'validation-report.md'), [
  '# Validation Report', '', `Generated: ${report.generated_at}`, '', `Fatal: ${fatal.length}`, `Warnings: ${warnings.length}`, '',
  '## Fatal', ...fatal.map(item => `- ${item.msg}`), '', '## Warnings', ...warnings.slice(0, 200).map(item => `- ${item.msg}`), warnings.length > 200 ? `- ... ${warnings.length - 200} weitere Warnungen in validation-report.json` : '', ''
].join('\n'), 'utf8');
console.log(`Validated: ${inventory.length} Quellen, ${findings.length} Findings, ${matrix.length} Verbotsgruende, ${Array.isArray(manifest) ? manifest.length : 0} Statistikobjekte.`);
console.log(`Fatal: ${fatal.length}; Warnings: ${warnings.length}. Report: reports/validation-report.md`);
if (fatal.length) process.exit(1);
