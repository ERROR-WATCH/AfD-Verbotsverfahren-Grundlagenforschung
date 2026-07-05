#!/usr/bin/env node
import fs from 'node:fs/promises';
import path from 'node:path';

const repoRoot = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const manifestPath = path.join(repoRoot, 'daten', 'statistik_manifest.json');
const inventoryPath = path.join(repoRoot, 'daten', 'source_inventory.jsonl');
const findingsPath = path.join(repoRoot, 'daten', 'findings_art21.jsonl');
const activeFiles = [
  path.join(repoRoot, 'index.html'),
  path.join(repoRoot, 'README.md'),
  path.join(repoRoot, 'statistikquellen.md'),
  path.join(repoRoot, 'STATISTIKMODUL.md'),
  path.join(repoRoot, 'STATISTIK_METHODIK.md'),
  path.join(repoRoot, 'daten', 'statistik_manifest.json'),
  path.join(repoRoot, 'daten', 'source_inventory.jsonl'),
  path.join(repoRoot, 'daten', 'findings_art21.jsonl'),
  path.join(repoRoot, 'scripts', 'build-statistics.mjs'),
];

const requiredManifestFields = ['id', 'title', 'value', 'unit', 'theme', 'subtheme', 'source', 'source_type', 'source_path', 'finding_location', 'method', 'legal_relevance', 'article_21_field', 'evidence_grade', 'status', 'limitations'];
const requiredInventoryFields = ['source_id', 'title', 'repo_path', 'source_exists', 'quellentyp', 'herausgeber', 'primärquelle', 'beweisstärke', 'statistik_nutzbar', 'nur_recherchehinweis'];
const requiredFindingFields = ['finding_id', 'source_id', 'finding_level', 'exact_fundstelle', 'thema', 'bverfg_prueffeld', 'art_21_element', 'beweistufe', 'pruefstatus', 'granularity'];
const allowedEvidence = new Set(['A', 'B', 'C', 'D', 'E', 'F']);
const allowedStatus = new Set(['geprueft', 'ungeprueft', 'veraltet', 'widerspruechlich', 'offen']);

function fail(msg) {
  console.error(msg);
  process.exitCode = 1;
}

function parseJsonl(text) {
  return text.split(/\r?\n/).filter(Boolean).map((line, idx) => {
    try { return JSON.parse(line); } catch (err) { throw new Error(`JSONL parse error line ${idx + 1}: ${err.message}`); }
  });
}

const manifest = JSON.parse(await fs.readFile(manifestPath, 'utf8'));
const inventory = parseJsonl(await fs.readFile(inventoryPath, 'utf8'));
const findings = parseJsonl(await fs.readFile(findingsPath, 'utf8'));

if (!Array.isArray(manifest)) fail('Manifest muss ein Array sein.');
for (const [i, entry] of manifest.entries()) {
  if (!entry || typeof entry !== 'object' || Array.isArray(entry)) { fail(`Manifest-Eintrag ${i} ist kein Objekt.`); continue; }
  for (const field of requiredManifestFields) if (!(field in entry) || entry[field] === '' || entry[field] === null || entry[field] === undefined) fail(`Manifest-Eintrag ${entry.id || i} fehlt: ${field}`);
  if (!allowedEvidence.has(entry.evidence_grade)) fail(`Manifest-Eintrag ${entry.id} hat ungueltige Beweisstufe: ${entry.evidence_grade}`);
  if (!allowedStatus.has(entry.status)) fail(`Manifest-Eintrag ${entry.id} hat ungueltigen Status: ${entry.status}`);
  if (entry.status === 'geprueft' && (!entry.source || !entry.source_type || !entry.method)) fail(`Manifest-Eintrag ${entry.id} ist geprueft, aber Quelle/Typ/Methodik fehlen.`);
}

for (const [i, entry] of inventory.entries()) {
  if (!entry || typeof entry !== 'object' || Array.isArray(entry)) { fail(`Inventory-Eintrag ${i} ist kein Objekt.`); continue; }
  for (const field of requiredInventoryFields) if (!(field in entry) || entry[field] === '' || entry[field] === null || entry[field] === undefined) fail(`Inventory-Eintrag ${entry.source_id || i} fehlt: ${field}`);
  if (!allowedEvidence.has(entry.beweisstärke)) fail(`Inventory-Eintrag ${entry.source_id} hat ungueltige Beweisstufe: ${entry.beweisstärke}`);
  if (!entry.repo_path) fail(`Inventory-Eintrag ${entry.source_id} hat keinen repo_path.`);
}

for (const [i, entry] of findings.entries()) {
  if (!entry || typeof entry !== 'object' || Array.isArray(entry)) { fail(`Finding ${i} ist kein Objekt.`); continue; }
  for (const field of requiredFindingFields) if (!(field in entry) || entry[field] === '' || entry[field] === null || entry[field] === undefined) fail(`Finding ${entry.finding_id || i} fehlt: ${field}`);
  if (!allowedEvidence.has(entry.beweistufe || entry.evidence_grade)) fail(`Finding ${entry.finding_id} hat ungueltige Beweisstufe.`);
  if (!allowedStatus.has(entry.pruefstatus)) fail(`Finding ${entry.finding_id} hat ungueltigen Status: ${entry.pruefstatus}`);
}

const inventoryIds = new Set(inventory.map(row => row.source_id));
for (const entry of findings) {
  if (!inventoryIds.has(entry.source_id)) fail(`Finding ${entry.finding_id} verweist auf unbekannte source_id ${entry.source_id}`);
}

const forbiddenPatterns = [
  /80\s+Gerichtsf[aä]lle/i,
  /80\s+F[aä]lle/i,
  /15\s+Verbotsgr[uü]nde/i,
];
for (const file of activeFiles) {
  const text = await fs.readFile(file, 'utf8');
  for (const pattern of forbiddenPatterns) {
    if (pattern.test(text) && !/historisch|veraltet|zwischenstand/i.test(text)) {
      fail(`Veralteter aktueller Wert in ${path.relative(repoRoot, file)}`);
    }
  }
}

console.log(`Validiert: ${manifest.length} Statistiken, ${inventory.length} Quellen, ${findings.length} Findings.`);
if (process.exitCode && process.exitCode !== 0) process.exit(process.exitCode);
