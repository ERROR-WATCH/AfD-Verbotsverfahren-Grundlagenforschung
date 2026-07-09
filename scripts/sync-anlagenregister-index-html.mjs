import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const reportPath = path.join(ROOT, 'reports/anlagenregister-audit-2026-07-09.md');
const indexPath = path.join(ROOT, 'index.html');

function readStats() {
  const report = fs.readFileSync(reportPath, 'utf8');
  const match = report.match(/\{[\s\S]*?\}/);
  if (!match) throw new Error(`No JSON stats block found in ${reportPath}`);
  return JSON.parse(match[0]);
}

function replaceCard(html, label, value) {
  const escaped = label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const re = new RegExp(`(<span class="block text-2xl font-extrabold text-brand-blue">)\\d+(</span>\\s*<span class="text-xs text-slate-500">${escaped}</span>)`);
  return html.replace(re, `$1${value}$2`);
}

const stats = readStats();
let html = fs.readFileSync(indexPath, 'utf8');

html = html.replace(
  /<div class="grid grid-cols-1 md:grid-cols-3 gap-3">([\s\S]*?<span class="text-xs text-slate-500">Split-\/OCR-Gegenlesen<\/span>\s*<\/div>\s*)<\/div>/,
  `<div class="grid grid-cols-1 md:grid-cols-4 gap-3">
                        <div class="rounded-lg border border-slate-100 bg-slate-50 p-3">
                            <span class="block text-2xl font-extrabold text-brand-blue">${stats.hashAnchors}</span>
                            <span class="text-xs text-slate-500">hashgesicherte Amts-/Gerichtsanker</span>
                        </div>
                        <div class="rounded-lg border border-slate-100 bg-slate-50 p-3">
                            <span class="block text-2xl font-extrabold text-brand-blue">${stats.formalPinpoints}</span>
                            <span class="text-xs text-slate-500">formal zu finalisierende Pinpoints</span>
                        </div>
                        <div class="rounded-lg border border-slate-100 bg-slate-50 p-3">
                            <span class="block text-2xl font-extrabold text-brand-blue">${stats.localLineAnchors}</span>
                            <span class="text-xs text-slate-500">lokale Datei-/Zeilenanker</span>
                        </div>
                        <div class="rounded-lg border border-slate-100 bg-slate-50 p-3">
                            <span class="block text-2xl font-extrabold text-brand-blue">${stats.splitCounterread}</span>
                            <span class="text-xs text-slate-500">Split-/OCR-Gegenlesen</span>
                        </div>
                    </div>`,
);

html = replaceCard(html, 'hashgesicherte Amts-/Gerichtsanker', stats.hashAnchors);
html = replaceCard(html, 'formal zu finalisierende Pinpoints', stats.formalPinpoints);
html = replaceCard(html, 'lokale Datei-/Zeilenanker', stats.localLineAnchors);
html = replaceCard(html, 'Split-/OCR-Gegenlesen', stats.splitCounterread);

html = html.replace(
  /der Rest ist als \d+ finale Seiten-\/Randnummern, \d+ Originalgegenlesen(?:, \d+ lokale Zeilenanker)? und Status-\/Gegenargumenttrennung (?:geführt|gefuehrt)\./,
  `der Rest ist als ${stats.formalPinpoints} finale Seiten-/Randnummern, ${stats.splitCounterread} Originalgegenlesen, ${stats.localLineAnchors} lokale Zeilenanker und Status-/Gegenargumenttrennung gefuehrt.`,
);

fs.writeFileSync(indexPath, html);
console.log(`Statistik-HTML synchronisiert: ${stats.hashAnchors}/${stats.formalPinpoints}/${stats.localLineAnchors}/${stats.splitCounterread}.`);
