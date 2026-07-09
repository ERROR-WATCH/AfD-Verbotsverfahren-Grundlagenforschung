#!/usr/bin/env node
import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';

const repoRoot = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const outPath = path.join(repoRoot, 'daten', 'source_inventory.jsonl');
const originalSourcesPath = path.join(repoRoot, 'ORIGINAL_SOURCES.md');

const includeRoots = [
  'README.md', 'ORIGINAL_SOURCES.md', 'PUBLIC_SOURCES.md', 'PUBLIC_EXTENDED_SOURCES.md',
  'full-sources.md', 'Literaturverzeichnis.md', 'STATISTIKMODUL.md', 'STATISTIK_METHODIK.md',
  'URTEILE_DEEPRESEARCH.md', 'afd-verbot-deepresearch-ausgangspunkt.md', 'afd-verbot-deepresearch-ausgangspunkt.txt',
  'methodik', 'daten', 'dataset', 'dokumente', 'geheimgutachten', 'geheimgutachten_netzpolitik', 'zitate', 'skripte'
];
const excludePrefixes = ['.git', 'assets', 'visualisierungen', 'dashboard', 'node_modules'];

const today = '2026-07-05';

function slugify(value) {
  return String(value || '')
    .normalize('NFKD')
    .replace(/[^A-Za-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .toUpperCase();
}

function sha8(value) {
  return crypto.createHash('sha256').update(String(value)).digest('hex').slice(0, 10);
}

function makeId(prefix, key) {
  const slug = slugify(path.basename(key).replace(/\.[^.]+$/, '')) || 'SOURCE';
  return `${prefix}-${slug}-${sha8(key)}`;
}

function classify(rel) {
  const lower = rel.toLowerCase();
  const ext = path.extname(rel).toLowerCase();
  const format = ext ? ext.slice(1).toUpperCase() : 'DIR';
  let category = 'Intern';
  let sourceType = 'Interne Dokumentation';
  let publisher = 'Repository';
  let primary = false;
  let evidence = 'F';
  let use = 'navigational';
  let risks = 'Sekundaer- oder Arbeitsdokument';
  let allow = false;

  if (lower.startsWith('zitate/')) {
    category = 'Zitate und Belege';
    sourceType = 'Zitatkorpus / Belegsammlung';
    publisher = 'afd-verbot.de / lokale Archivkopien';
    primary = true;
    evidence = 'B';
    use = 'tragend';
    risks = 'Geprüfte Belegpassage; fuer Zitate Originalquelle bzw. Kontext gegenlesen';
    allow = true;
  } else if (lower.startsWith('geheimgutachten_netzpolitik/') || lower.startsWith('geheimgutachten/')) {
    category = 'Verfassungsschutz / Gutachten';
    sourceType = 'BfV-Gutachten / OCR- oder Split-Fassung';
    publisher = 'Bundesamt fuer Verfassungsschutz';
    primary = true;
    evidence = 'A';
    use = 'tragend';
    risks = 'OCR-Fehler und Split-Luecken moeglich';
    allow = true;
  } else if (lower.startsWith('dokumente/vfs_berichte_bundeslaender/')) {
    category = 'Verfassungsschutz / Landes- und Bundesberichte';
    sourceType = 'Verfassungsschutzbericht';
    publisher = 'Bundesamt fuer Verfassungsschutz / Landesbehoerden';
    primary = true;
    evidence = 'A';
    use = 'tragend';
    risks = 'Lokale PDF-Kopie kann von Originalseite abweichen';
    allow = true;
  } else if (lower.startsWith('dokumente/vfs_rechtsextremismus/')) {
    category = 'Verfassungsschutz / Sonderberichte';
    sourceType = 'BfV-Sonderbericht';
    publisher = 'Bundesamt fuer Verfassungsschutz';
    primary = true;
    evidence = 'A';
    use = 'tragend';
    risks = 'Lokale PDF-Kopie kann von Originalseite abweichen';
    allow = true;
  } else if (lower.includes('urteilsbelege') || lower.includes('urteilsregister') || lower.includes('afg_gerichts') || lower.includes('urteil')) {
    category = 'Gerichte und Rechtsprechung';
    sourceType = 'Gerichtsregister / Urteilsbeleg';
    publisher = 'Gericht / lokale Archivkopie';
    primary = true;
    evidence = 'A';
    use = 'tragend';
    risks = 'Fall- und Instanzstatus getrennt pruefen';
    allow = true;
  } else if (lower.includes('landeswahlprogramme') || lower.includes('bundestagswahlprogramm')) {
    category = 'Partei und Programmatik';
    sourceType = 'Parteiprogramm';
    publisher = 'AfD';
    primary = true;
    evidence = 'A';
    use = 'tragend';
    risks = 'Fassung und Wahljahr muessen konsistent bleiben';
    allow = true;
  } else if (lower.startsWith('dokumente/hauptquellen/')) {
    const quoteCompilation = /schlimmsten[ _-]?zitate|hasserfuellte.*menschenverachtende.*zitate|hasserfüllte.*menschenverachtende.*zitate|jugendstrategie.*zitate/i.test(lower);
    const official = !quoteCompilation && /bundestag|bmi|bka|bundesregierung|generalbundesanwalt|gericht|justiz|bverfg|bgh|vg_|ovg|verwaltungsgericht|verfassungsschutz|bfv|lfv|minister/i.test(lower);
    const expert = !quoteCompilation && /gutachten|stellungnahme|dimr|gff|institut|universitaet|university|cremer|ogorek|rechtswissenschaft/i.test(lower);
    const press = quoteCompilation || /tagesschau|spiegel|taz|zeit|faz|ndr|wdr|swr|br24|mdr|correctiv|netzpolitik|stern|zdf|deutschlandfunk|dw|belltower|volksverpetzer|politico/i.test(lower);
    category = official ? 'Amtliche Quellen und Rechtsprechung' : expert ? 'Gepruefte Gutachten und Fachanalysen' : press ? 'Presse- und Recherchequellen' : 'Archivierte Hauptquelle';
    sourceType = quoteCompilation ? 'Recherche-/Sekundaerliste' : official ? 'Amtliche Quelle / Gerichts- oder Behoerdendokument' : expert ? 'Geprueftes Gutachten / Fachanalyse' : press ? 'Presse- oder Recherchequelle' : 'Archivierte Hauptquelle';
    publisher = official ? 'Amtliche Stelle / Gericht / Behoerde' : expert ? 'Gutachtengeber / wissenschaftliche Institution' : press ? 'Presse / Recherchemedium' : 'Lokale Archivquelle';
    primary = official || expert || (!press && !quoteCompilation);
    evidence = official ? 'A' : expert ? 'A' : press ? 'C' : 'B';
    use = official || expert ? 'tragend' : press ? 'kontext' : 'sekundaer';
    risks = quoteCompilation ? 'Kompilierte Zitatliste: jedes Zitat gegen Original, Proof, Gutachten, Parlament oder Gericht pruefen; nicht als Endbeweis nutzen' : press ? 'Pressequelle: Aussagen bei Bedarf gegen Primaerquelle pruefen' : 'Lokale Archivkopie; Fassung und Kontext pruefen';
    allow = true;
  } else if (lower.endsWith('.csv')) {
    category = 'Interne Statistik';
    sourceType = 'Aggregierter Statistikdatensatz';
    publisher = 'Repository';
    primary = false;
    evidence = 'B';
    use = 'sekundaer';
    risks = 'Bereits aggregiert, nicht primae res';
    allow = true;
  } else if (lower.endsWith('.jsonl')) {
    category = 'Interne Extraktion';
    sourceType = 'Extraktions- oder Shard-Datei';
    publisher = 'Repository';
    primary = false;
    evidence = 'B';
    use = 'sekundaer';
    risks = 'Derived data; must remain linked to source rows';
    allow = true;
  } else if (lower.endsWith('.md') || lower.endsWith('.txt')) {
    category = 'Dokumentation / Analyse';
    sourceType = 'Methodik- oder Analysedokument';
    publisher = 'Repository';
    primary = false;
    evidence = 'B';
    use = 'sekundaer';
    risks = 'Arbeitsdokument, nicht Primärbeweis';
    allow = true;
  }

  if (lower.includes('ki_markdown/')) {
    const isOfficialVsCopy = lower.includes('verfassungsschutzbericht')
      || lower.includes('vfs_berichte_bundeslaender')
      || lower.includes('vfs_rechtsextremismus')
      || lower.includes('geheimgutachten_netzpolitik')
      || lower.includes('bfv-afd-folgegutachten')
      || lower.includes('untersuchung_bfv_gutachten');
    if (isOfficialVsCopy) {
      category = lower.includes('untersuchung_bfv_gutachten')
        ? 'Meta-Gutachten / Rechtswissenschaft'
        : 'Verfassungsschutz / amtliche Berichte und Gutachten';
      sourceType = lower.includes('untersuchung_bfv_gutachten')
        ? 'Rechtswissenschaftliches Gutachten / Markdown-Kopie'
        : 'Amtlicher Verfassungsschutzbericht oder BfV-Gutachten / Markdown-Kopie';
      publisher = lower.includes('untersuchung_bfv_gutachten')
        ? 'Universitaet zu Koeln / Markus Ogorek'
        : 'Bundesamt fuer Verfassungsschutz / Landesbehoerden';
      primary = !lower.includes('untersuchung_bfv_gutachten');
      evidence = lower.includes('untersuchung_bfv_gutachten') ? 'B' : 'A';
      use = lower.includes('untersuchung_bfv_gutachten') ? 'sekundaer' : 'tragend';
      risks = 'Generierte Markdown-Kopie einer geprueften amtlichen bzw. fachgutachtlichen Quelle; bei Zitaten PDF/Original gegenlesen.';
      allow = true;
    } else {
      category = 'Generierte Kopie';
      sourceType = 'Automatisch erzeugte Markdown-Kopie';
      publisher = 'Repository';
      primary = false;
      evidence = 'C';
      use = 'navigation';
      risks = 'Generierte Arbeitskopie einer lokalen Quelle; fuer Zitate Originaldatei gegenlesen';
      allow = true;
    }
  }

  return { category, sourceType, publisher, primary, evidence, use, risks, allow, format };
}

function parseOriginalSources(text) {
  const map = new Map();
  const lines = text.split(/\r?\n/);
  for (const line of lines) {
    const m = line.match(/^\| \[`([^`]+)`\].*\| \[(https?:\/\/[^\]]+)\]/);
    if (m) map.set(path.basename(m[1]).toLowerCase(), m[2]);
  }
  return map;
}

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const out = [];
  for (const ent of entries) {
    if (excludePrefixes.some(prefix => ent.name === prefix)) continue;
    const full = path.join(dir, ent.name);
    const rel = path.relative(repoRoot, full).replace(/\\/g, '/');
    if (ent.isDirectory()) {
      out.push(...await walk(full));
      continue;
    }
    out.push(rel);
  }
  return out;
}

function parseDateFromName(rel) {
  const name = path.basename(rel);
  const m = name.match(/(20\d{2})[-_.](\d{2})[-_.](\d{2})/);
  if (m) return `${m[1]}-${m[2]}-${m[3]}`;
  return null;
}

const originalMap = parseOriginalSources(await fs.readFile(originalSourcesPath, 'utf8'));
const fileSet = new Set();
for (const root of includeRoots) {
  const full = path.join(repoRoot, root);
  try {
    const st = await fs.stat(full);
    if (st.isDirectory()) {
      for (const rel of await walk(full)) fileSet.add(rel);
    } else {
      fileSet.add(root.replace(/\\/g, '/'));
    }
  } catch {
    // ignore missing optional roots
  }
}

// Add external references from datasets as inventory items too.
for (const shard of ['dataset/A__aktuelle_gefahr__0000.jsonl', 'dataset/A__potenzial__0000.jsonl', 'dataset/A__zielrichtung__0000.jsonl']) {
  fileSet.add(shard);
}

const rows = [];
for (const rel of [...fileSet].sort()) {
  const abs = path.join(repoRoot, rel);
  const exists = await fs.access(abs).then(() => true).catch(() => false);
  const stat = exists ? await fs.stat(abs) : null;
  const { category, sourceType, publisher, primary, evidence, use, risks, allow, format } = classify(rel);
  const ext = path.extname(rel).toLowerCase();
  const basename = path.basename(rel);
  const baseKey = basename.toLowerCase().replace(/\.pdf$|\.txt$|\.md$|\.csv$|\.jsonl$/i, '') + ext;
  const originalUrl = originalMap.get(basename.toLowerCase()) || originalMap.get(baseKey) || null;
  const sourceId = makeId('SRC', rel);
  const title = basename.replace(/\.[^.]+$/, '').replace(/_/g, ' ').replace(/-/g, ' ');
  rows.push({
    source_id: sourceId,
    title,
    repo_path: rel,
    original_url: originalUrl,
    archive_url: exists ? rel : null,
    source_exists: exists,
    source_kind: exists ? 'repo_file' : 'external_reference',
    quellentyp: sourceType,
    herausgeber: publisher,
    datum: parseDateFromName(rel),
    abrufdatum: today,
    seiten_oder_umfang: rel.endsWith('.jsonl') ? (exists ? `${stat?.size || 0} bytes` : null) : null,
    format,
    primärquelle: primary,
    beweisstärke: evidence,
    juristischer_nutzwert: use,
    risiken: risks,
    statistik_nutzbar: allow,
    nur_recherchehinweis: !allow,
    themenbereich: category,
    notiz: exists ? '' : 'Nur Referenz aus Datenbestand; lokale Datei fehlt.',
    sha256: exists && stat ? null : null,
  });
}

await fs.mkdir(path.dirname(outPath), { recursive: true });
await fs.writeFile(outPath, rows.map(r => JSON.stringify(r)).join('\n') + '\n', 'utf8');
console.log(`Wrote ${rows.length} inventory rows to ${path.relative(repoRoot, outPath)}`);
