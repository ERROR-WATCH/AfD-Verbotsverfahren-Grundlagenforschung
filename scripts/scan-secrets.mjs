#!/usr/bin/env node
import fs from 'node:fs';
import { execFileSync } from 'node:child_process';

const patterns = [
  ['Google API Key', /AIza[0-9A-Za-z_-]{30,}/g],
  ['GitHub token', /github_pat_[0-9A-Za-z_]{40,}|gh[pousr]_[0-9A-Za-z]{30,}/g],
  ['AWS access key', /\b(?:AKIA|ASIA)[0-9A-Z]{16}\b/g],
  ['Slack token', /xox[baprs]-[0-9A-Za-z-]{20,}/g],
  ['Private key', /-----BEGIN (?:RSA |EC |OPENSSH |DSA )?PRIVATE KEY-----/g],
];

const files = execFileSync('git', ['ls-files', '-z'], { encoding: 'utf8' })
  .split('\0')
  .filter(Boolean);
const findings = [];

for (const file of files) {
  let stat;
  try {
    stat = fs.statSync(file);
  } catch {
    continue;
  }
  if (!stat.isFile()) continue;
  const content = fs.readFileSync(file);
  if (content.includes(0)) continue;
  const text = content.toString('utf8');
  for (const [type, pattern] of patterns) {
    pattern.lastIndex = 0;
    if (pattern.test(text)) findings.push({ file, type });
  }
}

if (findings.length) {
  console.error('Secret scan failed. Betroffene Dateien (Werte werden nicht ausgegeben):');
  for (const finding of findings) console.error(`- ${finding.file}: ${finding.type}`);
  process.exit(1);
}

console.log(`Secret scan OK: ${files.length} versionierte Pfade, 0 Treffer.`);
