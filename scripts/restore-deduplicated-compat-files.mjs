#!/usr/bin/env node
import fs from 'node:fs/promises';
import path from 'node:path';

const repoRoot = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const manifestPath = path.join(repoRoot, 'daten', 'deduplication_manifest.json');

const manifest = JSON.parse(await fs.readFile(manifestPath, 'utf8'));
const entries = Array.isArray(manifest)
  ? manifest
  : manifest.removed_files || manifest.entries || manifest.removed || [];

let restored = 0;
let alreadyPresent = 0;
const missingRetained = [];

for (const entry of entries) {
  const removed = entry.removed;
  const retained = entry.retained;
  if (!removed || !retained) continue;

  const removedPath = path.join(repoRoot, removed);
  const retainedPath = path.join(repoRoot, retained);

  try {
    await fs.access(removedPath);
    alreadyPresent += 1;
    continue;
  } catch {
    // File is absent and should be restored below.
  }

  try {
    await fs.access(retainedPath);
  } catch {
    missingRetained.push({ removed, retained });
    continue;
  }

  await fs.mkdir(path.dirname(removedPath), { recursive: true });
  await fs.copyFile(retainedPath, removedPath);
  restored += 1;
}

console.log(`Restored compatibility files: ${restored}`);
console.log(`Already present: ${alreadyPresent}`);

if (missingRetained.length > 0) {
  console.error('Missing retained files:');
  for (const item of missingRetained) {
    console.error(`- ${item.removed} <- ${item.retained}`);
  }
  process.exitCode = 1;
}
