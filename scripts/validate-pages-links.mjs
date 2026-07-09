import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const markdownFiles = ['README.md', 'dokumente/hauptquellen/VOLLSTAENDIGER_REPOSITORY_PAGES_INDEX_2026_07_09.md'];
const htmlFiles = ['index.html', 'dashboard/statistik.html'];

function exists(rel) { return fs.existsSync(path.join(ROOT, rel)); }
function stripFragmentAndQuery(link) { return String(link || '').split('#')[0].split('?')[0]; }
function isExternal(link) { return /^(?:[a-z][a-z0-9+.-]*:|mailto:|tel:)/i.test(link || ''); }

function checkMarkdown(file, missing) {
  if (!exists(file)) return missing.push({ file, link: '', target: file, reason: 'checked file missing' });
  const text = fs.readFileSync(path.join(ROOT, file), 'utf8');
  const re = /\[[^\]]*\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g;
  let match;
  while ((match = re.exec(text))) {
    const original = match[1].trim();
    if (!original || original.startsWith('#') || isExternal(original)) continue;
    const clean = stripFragmentAndQuery(original);
    if (!clean) continue;
    const decoded = decodeURIComponent(clean);
    const target = path.normalize(path.join(path.dirname(file), decoded));
    if (!fs.existsSync(path.join(ROOT, target))) missing.push({ file, link: original, target, reason: 'missing markdown target' });
  }
}

function checkHtml(file, missing) {
  if (!exists(file)) return missing.push({ file, link: '', target: file, reason: 'checked file missing' });
  const text = fs.readFileSync(path.join(ROOT, file), 'utf8')
    .replace(/<script\b[\s\S]*?<\/script>/gi, '');
  const re = /href=["']([^"']+)["']/g;
  let match;
  while ((match = re.exec(text))) {
    const original = match[1].trim();
    if (!original || original.startsWith('#') || original.includes('$' + '{') || isExternal(original)) continue;
    const clean = stripFragmentAndQuery(original);
    if (!clean) continue;
    const decoded = decodeURIComponent(clean.replace(/^\.\//, ''));
    const target = path.normalize(path.join(path.dirname(file), decoded));
    if (!fs.existsSync(path.join(ROOT, target))) missing.push({ file, link: original, target, reason: 'missing html target' });
  }
}

const missing = [];
for (const file of markdownFiles) checkMarkdown(file, missing);
for (const file of htmlFiles) checkHtml(file, missing);

const report = { checked_at: new Date().toISOString(), markdown_files: markdownFiles, html_files: htmlFiles, missing_links: missing.length, missing };
fs.mkdirSync(path.join(ROOT, 'reports'), { recursive: true });
fs.writeFileSync(path.join(ROOT, 'reports', 'pages-link-validation.json'), JSON.stringify(report, null, 2) + '\n');

if (missing.length) {
  console.error('Pages link validation failed: ' + missing.length + ' missing links. See reports/pages-link-validation.json');
  for (const row of missing.slice(0, 20)) console.error(row.file + ': ' + row.link + ' -> ' + row.target);
  process.exit(1);
}
console.log('Pages link validation OK: ' + (markdownFiles.length + htmlFiles.length) + ' files, 0 missing links.');
