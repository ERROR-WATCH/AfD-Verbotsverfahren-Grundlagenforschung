#!/usr/bin/env node
import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const webRoot = path.join(root, 'sources', 'web');
const dataOut = path.join(root, 'daten', 'web_source_inventory_2026.jsonl');
const mdOut = path.join(root, 'sources', 'WEB_SOURCE_INDEX_2026.md');

const dirs = (await fs.readdir(webRoot, { withFileTypes: true }))
  .filter(entry => entry.isDirectory())
  .map(entry => entry.name)
  .sort((a, b) => a.localeCompare(b, 'de'));

const rows = [];
const summaries = [];
for (const dir of dirs) {
  const absDir = path.join(webRoot, dir);
  const files = (await fs.readdir(absDir, { withFileTypes: true }))
    .filter(entry => entry.isFile())
    .map(entry => entry.name)
    .sort((a, b) => a.localeCompare(b, 'de'));
  for (const file of files) {
    const abs = path.join(absDir, file);
    const content = await fs.readFile(abs);
    rows.push({
      source_path: `sources/web/${dir}/${file}`,
      directory: dir,
      filename: file,
      bytes: content.length,
      sha256: crypto.createHash('sha256').update(content).digest('hex'),
      has_directory_readme: files.includes('README.md'),
      listed_in_directory_manifest: file === 'SHA256SUMS.txt'
        ? null
        : files.includes('SHA256SUMS.txt') && (await fs.readFile(path.join(absDir, 'SHA256SUMS.txt'), 'utf8')).includes(`  ${file}`)
    });
  }
  summaries.push({
    dir,
    files: files.length,
    readme: files.includes('README.md'),
    manifest: files.includes('SHA256SUMS.txt')
  });
}

await fs.writeFile(dataOut, rows.map(row => JSON.stringify(row)).join('\n') + '\n');
const totalBytes = rows.reduce((sum, row) => sum + row.bytes, 0);
const md = `# Vollständiger Index der lokalen Webquellen

Stand: 30.07.2026  
Generiert mit \`scripts/build-web-source-index.mjs\`.

Der maschinenlesbare Vollindex unter \`daten/web_source_inventory_2026.jsonl\` enthält für jede lokale Datei Pfad, Ordner, Dateiname, Byteumfang, SHA-256, README-Status und Manifestabdeckung. Erfasst sind **${summaries.length} Quellenordner**, **${rows.length} Dateien** und **${totalBytes.toLocaleString('de-DE')} Bytes**.

| Quellenordner | Dateien | README | SHA-Manifest |
|---|---:|:---:|:---:|
${summaries.map(row => `| \`${row.dir}\` | ${row.files} | ${row.readme ? 'ja' : 'nein'} | ${row.manifest ? 'ja' : 'nein'} |`).join('\n')}

## Leseregel

Ein lokaler Snapshot belegt den archivierten Abrufstand, nicht automatisch die Richtigkeit jeder darin enthaltenen Aussage. Fehlende Ordner-READMEs werden durch diesen zentralen Vollindex auffindbar gemacht; beweistragende Dossiers müssen dennoch Original-URL, Datum, Pinpoint, Akteur, Status und Zurechnungsgrenze einzeln ausweisen. Leere Reserveordner werden nicht als Quellenbestand gezählt.
`;
await fs.writeFile(mdOut, md);
console.log(`Indexed ${rows.length} files in ${summaries.length} directories.`);
