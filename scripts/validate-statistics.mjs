#!/usr/bin/env node
import fs from 'node:fs/promises';
import path from 'node:path';

const repoRoot = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const manifestPath = path.join(repoRoot, 'daten', 'statistik_manifest.json');
const activeFiles = [
  path.join(repoRoot, 'index.html'),
  path.join(repoRoot, 'README.md'),
  path.join(repoRoot, 'statistikquellen.md'),
  path.join(repoRoot, 'STATISTIKMODUL.md'),
  path.join(repoRoot, 'daten', 'statistik_manifest.json'),
];

const requiredFields = [
  'id', 'title', 'value', 'unit', 'theme', 'subtheme', 'source', 'source_type',
  'source_path', 'finding_location', 'method', 'legal_relevance', 'article_21_field',
  'evidence_grade', 'status', 'limitations'
];
const allowedEvidence = new Set(['A', 'B', 'C', 'D', 'E', 'F']);
const allowedStatus = new Set(['geprueft', 'ungeprueft', 'veraltet', 'widerspruechlich']);

function fail(msg) {
  console.error(msg);
  process.exitCode = 1;
}

const textContainsForbiddenCurrentValue = (text, pattern) => pattern.test(text) && !/historisch|veraltet|Zwischenstand/i.test(text);

const manifestRaw = await fs.readFile(manifestPath, 'utf8');
let manifest;
try {
  manifest = JSON.parse(manifestRaw);
} catch (err) {
  fail(`Manifest ist kein gueltiges JSON: ${err.message}`);
  process.exit(1);
}

if (!Array.isArray(manifest)) {
  fail('Manifest muss ein Array sein.');
}

const seenIds = new Set();
for (const [index, entry] of manifest.entries()) {
  if (!entry || typeof entry !== 'object' || Array.isArray(entry)) {
    fail(`Eintrag ${index} ist kein Objekt.`);
    continue;
  }
  for (const field of requiredFields) {
    if (!(field in entry) || entry[field] === '' || entry[field] === null || entry[field] === undefined) {
      fail(`Eintrag ${entry.id || index} hat fehlendes Pflichtfeld: ${field}`);
    }
  }
  if (seenIds.has(entry.id)) fail(`Doppelte Statistik-ID: ${entry.id}`);
  seenIds.add(entry.id);
  if (typeof entry.value !== 'number' || Number.isNaN(entry.value)) fail(`Eintrag ${entry.id} hat keinen numerischen Wert.`);
  if (!allowedEvidence.has(entry.evidence_grade)) fail(`Eintrag ${entry.id} hat ungueltige Beweisstärke: ${entry.evidence_grade}`);
  if (!allowedStatus.has(entry.status)) fail(`Eintrag ${entry.id} hat ungueltigen Status: ${entry.status}`);
  if (entry.status === 'geprueft') {
    if (!entry.source || !entry.source_type || !entry.method) {
      fail(`Eintrag ${entry.id} ist als geprueft markiert, aber Quelle oder Methodik fehlen.`);
    }
  }
  if (entry.source_type.toLowerCase().includes('datei') && /faelle|zitate|verbotsgruende/i.test(entry.title || '')) {
    fail(`Eintrag ${entry.id} wirkt wie eine Dateianzahl statt inhaltlicher Statistik.`);
  }
}

for (const file of activeFiles) {
  const text = await fs.readFile(file, 'utf8');
  const oldCaseValue = /80\s+Gerichtsf[aä]lle|80\s+F[aä]lle/;
  const oldGroundsValue = /15\s+Verbotsgr[uü]nde/;
  if (textContainsForbiddenCurrentValue(text, oldCaseValue)) {
    fail(`Veralteter aktueller Wert in ${path.relative(repoRoot, file)}`);
  }
  if (textContainsForbiddenCurrentValue(text, oldGroundsValue)) {
    fail(`Veralteter aktueller Wert in ${path.relative(repoRoot, file)}`);
  }
}

console.log(`Validiert: ${manifest.length} Statistik-Eintraege, ${seenIds.size} eindeutige IDs.`);
if (process.exitCode && process.exitCode !== 0) process.exit(process.exitCode);
