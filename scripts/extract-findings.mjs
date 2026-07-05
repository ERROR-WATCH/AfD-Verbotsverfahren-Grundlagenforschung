#!/usr/bin/env node
import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';

const repoRoot = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const inventoryPath = path.join(repoRoot, 'daten', 'source_inventory.jsonl');
const outPath = path.join(repoRoot, 'daten', 'findings_art21.jsonl');
const sourceInventory = new Map();

function sha8(value) {
  return crypto.createHash('sha256').update(String(value)).digest('hex').slice(0, 10);
}

function normalizeKey(value) {
  return String(value || '').trim().toLowerCase().replace(/\\/g, '/');
}

function makeId(prefix, key) {
  return `${prefix}-${sha8(key)}`;
}

function readJsonl(text) {
  return text.split(/\r?\n/).filter(Boolean).map(line => JSON.parse(line));
}

function parseCsv(text) {
  const lines = text.trim().split(/\r?\n/).filter(Boolean);
  const headers = lines.shift().split(',');
  return lines.map(line => {
    const cells = [];
    let cur = '';
    let inQuotes = false;
    for (let i = 0; i < line.length; i += 1) {
      const ch = line[i];
      if (ch === '"') {
        if (inQuotes && line[i + 1] === '"') {
          cur += '"';
          i += 1;
        } else {
          inQuotes = !inQuotes;
        }
      } else if (ch === ',' && !inQuotes) {
        cells.push(cur);
        cur = '';
      } else {
        cur += ch;
      }
    }
    cells.push(cur);
    const obj = {};
    headers.forEach((h, i) => { obj[h] = cells[i] ?? ''; });
    return obj;
  });
}

function loadInventoryKeyMap(rows) {
  const map = new Map();
  for (const row of rows) {
    map.set(normalizeKey(row.repo_path), row.source_id);
    map.set(normalizeKey(path.basename(row.repo_path)), row.source_id);
    if (row.original_url) map.set(normalizeKey(row.original_url), row.source_id);
  }
  return map;
}

function classifyArt21(text) {
  const t = String(text || '').toLowerCase();
  if (t.includes('menschenwürde') || t.includes('menschenwuerde') || t.includes('diskriminierungsverbot')) return 'Menschenwürde';
  if (t.includes('remigration') || t.includes('umvolkung') || t.includes('bevölkerungsaustausch') || t.includes('bevoelkerungsaustausch')) return 'Ethnischer Volksbegriff / Remigration';
  if (t.includes('parteienstaat') || t.includes('systemmedien') || t.includes('luegenpresse') || t.includes('lügenpresse') || t.includes('kartell')) return 'Demokratieprinzip';
  if (t.includes('verfassung') || t.includes('gerichte') || t.includes('gericht') || t.includes('polizei') || t.includes('verwaltung')) return 'Rechtsstaatsprinzip';
  if (t.includes('gewalt') || t.includes('kampf') || t.includes('buergerkrieg') || t.includes('bürgerkrieg') || t.includes('waffe')) return 'aktiv-kaempferisches Vorgehen';
  if (t.includes('migration') || t.includes('islam') || t.includes('jude') || t.includes('jüdisch') || t.includes('lgbt') || t.includes('queer') || t.includes('behindert')) return 'Menschenwürde / Minderheitenfeindlichkeit';
  if (t.includes('wahl') || t.includes('mandat') || t.includes('mitglied') || t.includes('fraktion') || t.includes('reichweite')) return 'Potentialitaet';
  return 'Verfassungsfeindliche Zielrichtung';
}

function classifyZurechnung(actor, source) {
  const text = `${actor || ''} ${source || ''}`.toLowerCase();
  if (/(bundesvorstand|landesvorstand|landesverband|kreisverband|fraktion|m d b|mdb|mdl|afd)/i.test(text)) return 'direkt';
  if (/(junge alternative|ja\b|identit|compact|götz kubitschek|goetz kubitschek|martin sellner|vorfeld)/i.test(text)) return 'indirekt';
  return 'unklar';
}

function parseQuoteFinding(fileText, relPath) {
  const handakte = (fileText.match(/^Handakte\s+(.+)$/m) || [])[1] || null;
  const actor = (fileText.match(/In der Sache gegen (.+?) wird in diesem Zusammenhang/i) || [])[1] || null;
  const reason = (fileText.match(/nachgegangen zu sein:\s*([\s\S]*?)\n\n\s*\/\/|nachgegangen zu sein:\s*([\s\S]*?)\n\n\s*Beweisstück/i) || [])[1] || (fileText.match(/nachgegangen zu sein:\s*([\s\S]*?)\n\n\s*Beweisstück/i) || [])[1] || null;
  const quoteMatch = fileText.match(/Beweisstück\s*[\r\n]+\s*[„"]([\s\S]*?)["”]\s*[\r\n]+\s*Quelle:/i);
  const sourceMatch = fileText.match(/Quelle:\s*([\s\S]*?)(?:\n\s*Jetzt als Wahlkampf-|\n\s*Für die Zukunft der Demokratie|$)/i);
  const quote = quoteMatch ? quoteMatch[1].replace(/\s+/g, ' ').trim() : null;
  const source = sourceMatch ? sourceMatch[1].split(/\r?\n/)[0].trim() : null;
  const page = source && /S\.\s*([0-9]+)/i.test(source) ? (source.match(/S\.\s*([0-9]+)/i) || [])[1] : null;
  const sourceKey = normalizeKey(relPath);
  const sourceId = sourceInventory.get(sourceKey) || makeId('SRC', relPath);
  const text = `${reason || ''} ${quote || ''} ${source || ''}`;
  const finding = {
    finding_id: makeId('FIND', relPath),
    source_id: sourceId,
    source_path: relPath,
    finding_level: 'quote',
    exact_fundstelle: page ? `Quelle / S. ${page}` : 'Quelle / lokaler Quote-Block',
    originaltext: quote,
    originaltext_auszug: quote,
    akteur: actor,
    akteursebene: classifyZurechnung(actor, source),
    afd_zurechnung: classifyZurechnung(actor, source),
    zielgruppe: null,
    thema: classifyArt21(text),
    unterthema: reason ? reason.replace(/\s+/g, ' ').trim() : null,
    rechtsstatus: null,
    zeitraum: null,
    bundesland: null,
    bverfg_prueffeld: classifyArt21(text),
    art_21_element: classifyArt21(text),
    relevanzbegruendung: reason ? reason.replace(/\s+/g, ' ').trim() : 'Aus dem Quote-Korpus extrahierter Einzelfund.',
    beweistufe: source && /verfassungsschutz|bka|bundestag|landtag|gericht|amtlich|minister/i.test(source.toLowerCase()) ? 'A' : 'E',
    unsicherheit: source ? 'niedrig' : 'mittel',
    pruefstatus: 'geprueft',
    quellenart: source ? (source.match(/X|Facebook|Twitter|Instagram|TikTok/i) ? 'Social-Media' : (source.match(/Verfassungsschutz|BfV|BKA|Bundestag|Landtag|Gericht|OVG|VG|LG|BGH/i) ? 'amtlich / gerichtlich' : 'sonstig')) : 'unbekannt',
    source_medium: source,
    handakte,
    kommentar: 'Aus dem lokalen Zitate-Korpus extrahierter Befund.',
    granularity: 'quote'
  };
  return finding;
}

function parseAggregateFinding(row, fileName) {
  const finding = { ...row };
  finding.finding_id = makeId('FIND', `${fileName}:${row.statistik_id}`);
  finding.source_id = sourceInventory.get(normalizeKey(row.original_link)) || sourceInventory.get(normalizeKey(row.quelle)) || sourceInventory.get(normalizeKey(row.fundstelle)) || makeId('SRC', row.quelle || fileName);
  finding.source_path = row.original_link || row.quelle || fileName;
  finding.finding_level = 'aggregate';
  finding.exact_fundstelle = row.fundstelle || row.quelle;
  finding.originaltext = null;
  finding.originaltext_auszug = null;
  finding.akteur = row.akteur || row.berater || null;
  finding.akteursebene = row.ebene || row.kategorie || row.bereich || null;
  finding.afd_zurechnung = row.kategorie?.toLowerCase().includes('vorfeld') ? 'indirekt' : 'direkt';
  finding.zielgruppe = null;
  finding.thema = row.thema || row.bereich || row.delikt || row.narrativ || row.kategorie || null;
  finding.unterthema = row.unterthema || row.unterkategorie || row.cluster || null;
  finding.rechtsstatus = row.status || null;
  finding.zeitraum = row.zeitraum || null;
  finding.bundesland = row.ebene && row.ebene !== 'Bund' ? row.ebene : null;
  finding.bverfg_prueffeld = row.prueffeld || null;
  finding.art_21_element = row.prueffeld || row.prueffeld_art21 || null;
  finding.relevanzbegruendung = row.juristische_relevanz || row.kommentar || null;
  finding.beweistufe = row.beweisstufe || null;
  finding.unsicherheit = row.unsicherheitsgrad || null;
  finding.pruefstatus = row.status || 'geprueft';
  if (!finding.thema) finding.thema = row.kategorie || row.bereich || row.delikt || row.narrativ || 'unbekannt';
  finding.quellenart = row.quellenart || 'aggregiert';
  finding.source_medium = row.original_link || row.quelle || null;
  finding.kommentar = row.kommentar || null;
  finding.granularity = 'aggregate';
  return finding;
}

async function main() {
  const invText = await fs.readFile(inventoryPath, 'utf8');
  const inventoryRows = readJsonl(invText);
  for (const row of inventoryRows) {
    sourceInventory.set(normalizeKey(row.repo_path), row.source_id);
    sourceInventory.set(normalizeKey(path.basename(row.repo_path)), row.source_id);
    if (row.original_url) sourceInventory.set(normalizeKey(row.original_url), row.source_id);
    if (row.archive_url) sourceInventory.set(normalizeKey(row.archive_url), row.source_id);
  }

  const findings = [];

  // Quote corpus
  const quoteDir = path.join(repoRoot, 'zitate');
  const quoteFiles = (await fs.readdir(quoteDir)).filter(name => name.endsWith('.md')).sort();
  for (const name of quoteFiles) {
    const relPath = path.join('zitate', name).replace(/\\/g, '/');
    const text = await fs.readFile(path.join(repoRoot, relPath), 'utf8');
    findings.push(parseQuoteFinding(text, relPath));
  }

  // Aggregated CSV-based findings
  const csvFiles = [
    'daten/statistik_akteure.csv',
    'daten/statistik_belege.csv',
    'daten/statistik_gerichtsfälle.csv',
    'daten/statistik_narrative.csv',
    'daten/statistik_potentialitaet.csv',
    'daten/statistik_verfassungsschutz.csv'
  ];
  for (const rel of csvFiles) {
    const text = await fs.readFile(path.join(repoRoot, rel), 'utf8');
    const rows = parseCsv(text);
    for (const row of rows) findings.push(parseAggregateFinding(row, rel));
  }

  await fs.writeFile(outPath, findings.map(f => JSON.stringify(f)).join('\n') + '\n', 'utf8');
  console.log(`Wrote ${findings.length} findings to ${path.relative(repoRoot, outPath)}`);
}

await main();
