#!/usr/bin/env node
import fs from 'node:fs/promises';
import { createReadStream } from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const TODAY = '2026-07-30';

const readJsonl = async file => (await fs.readFile(file, 'utf8')).split(/\r?\n/).filter(Boolean).map(JSON.parse);
const writeJsonl = async (file, rows) => fs.writeFile(file, rows.map(row => JSON.stringify(row)).join('\n') + '\n');
const exists = file => fs.access(file).then(() => true).catch(() => false);
const sha256File = file => new Promise((resolve, reject) => {
  const hash = crypto.createHash('sha256');
  const input = createReadStream(file);
  input.on('error', reject);
  input.on('data', chunk => hash.update(chunk));
  input.on('end', () => resolve(hash.digest('hex')));
});
const stableId = (prefix, value) => `${prefix}-${crypto.createHash('sha256').update(String(value)).digest('hex').slice(0, 12).toUpperCase()}`;

function extractArray(source, name) {
  const marker = source.indexOf(`const ${name} =`);
  if (marker < 0) throw new Error(`Missing ${name}`);
  const start = source.indexOf('[', marker);
  let depth = 0;
  let quote = null;
  let escaped = false;
  for (let i = start; i < source.length; i += 1) {
    const char = source[i];
    if (quote) {
      if (escaped) escaped = false;
      else if (char === '\\') escaped = true;
      else if (char === quote) quote = null;
      continue;
    }
    if (char === '"' || char === "'" || char === '`') quote = char;
    else if (char === '[') depth += 1;
    else if (char === ']' && --depth === 0) return JSON.parse(source.slice(start, i + 1));
  }
  throw new Error(`Unterminated ${name}`);
}

const monthMap = {
  januar: '01', februar: '02', märz: '03', maerz: '03', april: '04', mai: '05', juni: '06',
  juli: '07', august: '08', september: '09', oktober: '10', november: '11', dezember: '12'
};

function extractDates(text) {
  const dates = [];
  for (const match of text.matchAll(/\b(0?[1-9]|[12]\d|3[01])\.(0?[1-9]|1[0-2])\.((?:19|20)\d{2})\b/g)) {
    dates.push(`${match[3]}-${String(match[2]).padStart(2, '0')}-${String(match[1]).padStart(2, '0')}`);
  }
  for (const match of text.matchAll(/\b(0?[1-9]|[12]\d|3[01])\.\s*(Januar|Februar|März|Maerz|April|Mai|Juni|Juli|August|September|Oktober|November|Dezember)\s+((?:19|20)\d{2})\b/gi)) {
    dates.push(`${match[3]}-${monthMap[match[2].toLowerCase()]}-${String(match[1]).padStart(2, '0')}`);
  }
  return [...new Set(dates)].sort();
}

function extractCaseNumbers(text) {
  const results = [];
  const patterns = [
    /(?:Aktenzeichen|Az\.?)\s*:?\s*([0-9A-Za-z. -]{0,18}\/\d{2,4})/gi,
    /\b(\d+\s+Bv(?:E|R|F|L|B)\s+\d+\/\d{2,4})\b/gi,
    /\b(\d+\s+(?:StR|Ks|KLs|Kls|Cs|OWi|Js|O|K|C|A|B|L|S|U|W)\s+\d+(?:[.\s-]\d+)*\/\d{2,4})\b/g,
  ];
  for (const pattern of patterns) for (const match of text.matchAll(pattern)) results.push(match[1].replace(/\s+/g, ' ').trim());
  return [...new Set(results)];
}

function normalizeDecisionType(value) {
  const text = String(value || '');
  if (/Ermittlung|Immunit[aä]t|Anklage|Haft/i.test(text)) return 'Ermittlungs-/Anklage-/Haftverfahren';
  if (/Organstreit|Verfassungsgericht/i.test(text)) return 'Verfassungsgerichtliche Entscheidung';
  if (/Verwaltungsgericht|Parteienrecht|Verfassungsschutz/i.test(text)) return 'Verwaltungsgerichtliche Entscheidung';
  if (/Straf|Geldstrafe|Freiheitsstrafe|Volksverhetzung|Kennzeichen/i.test(text)) return 'Strafgerichtliche Entscheidung';
  if (/Zivil|Unterlassung|Persönlichkeitsrecht/i.test(text)) return 'Zivilgerichtliche Entscheidung';
  return 'Nicht normalisiert';
}

function normalizeOutcome(text) {
  if (/freigesprochen|Freispruch/i.test(text)) return 'Freispruch';
  if (/unzul[aä]ssig|verworfen/i.test(text)) return 'Unzulässig/verworfen';
  if (/unbegr[uü]ndet|abgewiesen|zur[uü]ckgewiesen/i.test(text)) return 'Abgewiesen/unbegründet';
  if (/aufgehoben|Zur[uü]ckverweisung/i.test(text)) return 'Aufgehoben/zurückverwiesen';
  if (/verurteilt|Geldstrafe|Freiheitsstrafe|Tagess[aä]tze/i.test(text)) return 'Verurteilung/Sanktion';
  if (/laufend|anh[aä]ngig|Ermittlung|Anklage|Untersuchungshaft/i.test(text)) return 'Laufend/offen';
  return 'Nicht normalisiert';
}

const html = await fs.readFile(path.join(root, 'index.html'), 'utf8');
const cases = extractArray(html, 'cases');
const courtRows = cases.map(item => {
  const text = [item.title, item.description, item.text, item.category, item.urteilsart].filter(Boolean).join(' ');
  const dates = extractDates(text);
  const years = [...new Set([...text.matchAll(/\b((?:19|20)\d{2})\b/g)].map(match => match[1]))].sort();
  const caseNumbers = extractCaseNumbers(text);
  const official = /bundesverfassungsgericht\.de|bverfg\.de|bverwg\.de|bundesgerichtshof|justiz\.|gerichte|generalbundesanwalt|bundestag\.de/i.test(`${item.online || ''} ${item.beleg || ''}`);
  const finality = /rechtskr[aä]ftig/i.test(text) ? 'rechtskräftig_markiert'
    : /Berufung|Revision|Beschwerde|nicht rechtskr[aä]ftig/i.test(text) ? 'rechtsmittel_offen_oder_nicht_rechtskraeftig'
    : 'nicht_ausgewiesen';
  return {
    case_id: `GER-${String(item.number).padStart(3, '0')}`,
    register_number: item.number,
    title: item.title,
    category: item.category || null,
    decision_date: dates[0] || null,
    additional_dates: dates.slice(1),
    date_precision: dates.length ? 'day' : years.length ? 'year_only' : 'unknown',
    years_mentioned: years,
    case_numbers: caseNumbers,
    court: (text.match(/(?:Gericht|court)\s*:?\s*([^.;\n]{3,90})/i) || [])[1]?.trim() || null,
    instance: /BVerfG|Bundesverfassungsgericht/i.test(text) ? 'Bundesverfassungsgericht'
      : /BVerwG|Bundesverwaltungsgericht/i.test(text) ? 'Bundesverwaltungsgericht'
      : /BGH|Bundesgerichtshof/i.test(text) ? 'Bundesgerichtshof'
      : /Oberlandesgericht|OLG/i.test(text) ? 'Oberlandesgericht'
      : /Oberverwaltungsgericht|OVG|VGH/i.test(text) ? 'Oberverwaltungsgericht/Verwaltungsgerichtshof'
      : /Landgericht|LG /i.test(text) ? 'Landgericht'
      : /Verwaltungsgericht|VG /i.test(text) ? 'Verwaltungsgericht'
      : /Amtsgericht|AG /i.test(text) ? 'Amtsgericht'
      : null,
    decision_type: normalizeDecisionType(`${item.urteilsart || ''} ${text}`),
    outcome: normalizeOutcome(text),
    finality,
    proceeding_status: /laufend|anh[aä]ngig|Ermittlung|Anklage|Untersuchungshaft/i.test(text) ? 'laufend_oder_offen' : 'aus_registertext_nicht_eindeutig',
    party_relation: item.status || null,
    local_evidence: item.beleg || null,
    online_source: item.online || null,
    official_source_route: official,
    metadata_status: dates.length && caseNumbers.length && official ? 'A_METADATEN_KERN_VORHANDEN'
      : dates.length || caseNumbers.length ? 'B_TEILWEISE'
      : 'C_NACHRECHERCHE',
    last_verified: TODAY,
    no_overclaim: 'Registeraufnahme ist nicht automatisch ein rechtskräftiges Urteil; Entscheidungsart, Ausgang und Rechtskraft anhand der Primärquelle prüfen.'
  };
});
await writeJsonl(path.join(root, 'daten', 'court_case_master.jsonl'), courtRows);

const statusMatrix = JSON.parse(await fs.readFile(path.join(root, 'daten', 'statistik_statusmatrix_afd_2026.json'), 'utf8'));
const statusRows = [];
for (const group of statusMatrix.statusgruppen || []) {
  for (const entry of group.eintraege || []) {
    statusRows.push({
      status_id: stableId('STATUS', `${group.gruppe}:${entry.objekt}:${entry.status}`),
      level: group.gruppe,
      object: entry.objekt,
      valid_from: null,
      valid_to: null,
      as_of: TODAY,
      status: entry.status,
      procedure_type: /Eil/i.test(entry.status) ? 'Eil-/Hauptsacheachse' : 'Statusfeststellung',
      legal_finality: /rechtskr[aä]ftig/i.test(entry.status) ? 'teilweise_oder_ausdruecklich_rechtskraeftig' : 'gesondert_pruefen',
      evidence_value: entry.beweiswert || null,
      statement: entry.kernaussage || null,
      local_sources: entry.quellen_lokal || [],
      primary_source_needed: entry.primaerbedarf || null,
      numbers: entry.zahlen || null,
      last_verified: TODAY,
      no_overclaim: 'Bund, Land, Jugend-/Nachfolgeorganisation und Vorfeld sowie Eil-, Hauptsache- und Rechtskraftstatus getrennt lesen.'
    });
  }
}
statusRows.unshift({
  status_id: 'STATUS-BUND-VG-KOELN-2026-02-26',
  level: 'Bund',
  object: 'AfD Bundespartei',
  valid_from: '2026-02-26',
  valid_to: null,
  as_of: TODAY,
  status: 'Verdachtsfall praktisch maßgeblich; öffentliche Behandlung als gesichert rechtsextremistische Bestrebung bis zum Abschluss der erstinstanzlichen Hauptsache untersagt',
  procedure_type: 'Eilbeschluss / Hauptsache anhängig',
  legal_finality: 'Eilrechtsschutz; keine rechtskräftige Hauptsachefeststellung gesichert-Bund',
  evidence_value: 'hoch für Statusabgrenzung',
  statement: 'Die 2025 ausgesprochene Hochstufung darf vorläufig nicht verwendet werden; das Hauptsacheverfahren beim VG Köln läuft.',
  local_sources: ['dokumente/hauptquellen/Deepresearch_BfV_AfD_Rechtsextremismus_Belege_2025_2026.md'],
  online_sources: ['https://www.tagesschau.de/inland/innenpolitik/afd-verfahren-verfassungsschutz-100.html'],
  last_verified: TODAY,
  no_overclaim: 'Nicht behaupten, die Bundes-AfD sei rechtskräftig als gesichert rechtsextremistisch festgestellt.'
});
await writeJsonl(path.join(root, 'daten', 'status_timeline.jsonl'), statusRows);

const powerRows = [
  ['POWER-BTW-2025-ZWEITSTIMMEN', 'election', 'Bundestagswahl', '2025-02-23', 'AfD-Zweitstimmen', 10328780, 'Stimmen', 'amtlich_endgueltig', 'https://www.bundeswahlleiterin.de/bundestagswahlen/2025/ergebnisse/bund-99.html'],
  ['POWER-BTW-2025-ZWEITSTIMMENANTEIL', 'election', 'Bundestagswahl', '2025-02-23', 'AfD-Zweitstimmenanteil', 20.8, 'Prozent', 'amtlich_endgueltig', 'https://www.bundeswahlleiterin.de/bundestagswahlen/2025/ergebnisse/bund-99.html'],
  ['POWER-BTW-2025-SITZE-WAHLERGEBNIS', 'mandates', 'Bundestag', '2025-02-23', 'AfD-Sitze nach Wahlergebnis', 152, 'Sitze', 'amtlich_endgueltig', 'https://www.bundeswahlleiterin.de/bundestagswahlen/2025/ergebnisse/bund-99.html'],
  ['POWER-BT-2026-FRAKTIONSMITGLIEDER', 'mandates', 'Bundestag', '2026-07-30', 'AfD-Fraktionsmitglieder', 151, 'Mitglieder', 'amtlicher_aktueller_stand', 'https://www.bundestag.de/parlament/fraktionen/afd/afd-inhalt-527374'],
  ['POWER-BTW-2025-DIREKTMANDATE', 'mandates', 'Bundestag', '2025-02-23', 'AfD-Wahlkreismandate', 42, 'Mandate', 'amtlich_endgueltig', 'https://www.bundestag.de/dokumente/textarchiv/2025/kw09-wahlergebnis-1049580'],
  ['POWER-AFD-MEMBERS-2024-OFFICIAL', 'membership', 'Gesamtpartei', '2024-12-31', 'AfD-Mitglieder laut Rechenschaftsbericht', 51319, 'Mitglieder', 'amtlicher_rechenschaftsbericht', 'https://www.bundestag.de/presse/hib/kurzmeldungen-1148998'],
  ['POWER-AFD-MEMBERS-2025-ESTIMATE', 'membership', 'Gesamtpartei', '2025-12-31', 'AfD-Mitglieder 2025/2026 Näherungswert', 70000, 'Mitglieder', 'sekundaer_oder_parteibezogener_naerungswert', null],
  ['POWER-AFD-EXTREMIST-POTENTIAL-2023', 'classification', 'BfV', '2023-12-31', 'AfD-Personenpotenzial', 11300, 'Personen', 'bfv_bericht', null],
  ['POWER-AFD-EXTREMIST-POTENTIAL-2024', 'classification', 'BfV', '2024-12-31', 'AfD-Personenpotenzial', 20000, 'Personen', 'bfv_bericht', null],
  ['POWER-AFD-EXTREMIST-POTENTIAL-2025', 'classification', 'BfV', '2025-12-31', 'AfD-Personenpotenzial', 28000, 'Personen', 'bfv_bericht', null],
  ['POWER-AFD-FINANCE-2024-INCOME', 'finance', 'Gesamtpartei', '2024-12-31', 'Einnahmen', 36342978.06, 'EUR', 'amtlicher_rechenschaftsbericht', 'https://www.bundestag.de/presse/hib/kurzmeldungen-1148998'],
  ['POWER-AFD-FINANCE-2024-EXPENSES', 'finance', 'Gesamtpartei', '2024-12-31', 'Ausgaben', 33748423.92, 'EUR', 'amtlicher_rechenschaftsbericht', 'https://www.bundestag.de/presse/hib/kurzmeldungen-1148998'],
  ['POWER-AFD-FINANCE-2024-SURPLUS', 'finance', 'Gesamtpartei', '2024-12-31', 'Überschuss', 2594554.14, 'EUR', 'amtlicher_rechenschaftsbericht', 'https://www.bundestag.de/presse/hib/kurzmeldungen-1148998'],
  ['POWER-AFD-FINANCE-2024-NET-ASSETS', 'finance', 'Gesamtpartei', '2024-12-31', 'Reinvermögen', 40871437.27, 'EUR', 'amtlicher_rechenschaftsbericht', 'https://www.bundestag.de/presse/hib/kurzmeldungen-1148998'],
  ['POWER-AFD-FINANCE-2024-STATE-FUNDS', 'finance', 'Gesamtpartei', '2024-12-31', 'Staatliche Mittel', 12784556.82, 'EUR', 'amtlicher_rechenschaftsbericht', 'https://www.bundestag.de/presse/hib/kurzmeldungen-1148998']
].map(([metric_id, dimension, level, reference_date, metric, value, unit, source_status, original_url]) => ({
  metric_id, dimension, level, reference_date, metric, value, unit, source_status, original_url,
  local_source: original_url?.includes('bundeswahlleiterin') ? 'sources/web/afd-organisationsmacht-20260730/bundeswahlleiterin-btw2025-ergebnis.html'
    : original_url?.includes('kurzmeldungen') ? 'sources/web/afd-organisationsmacht-20260730/bundestag-afd-rechenschaftsbericht-2024.html'
    : original_url?.includes('/parlament/fraktionen/afd/') ? 'sources/web/afd-organisationsmacht-20260730/bundestag-afd-fraktion-2026.html'
    : original_url?.includes('wahlergebnis') ? 'sources/web/afd-organisationsmacht-20260730/bundestag-wahlergebnis-afd-mandate-2025.html'
    : null,
  last_verified: TODAY,
  limitations: metric_id.includes('ESTIMATE') ? 'Nicht mit dem amtlichen Stichtagswert 31.12.2024 vermischen.' : null
}));
await writeJsonl(path.join(root, 'daten', 'organisation_power_timeseries.jsonl'), powerRows);

const legacySources = await readJsonl(path.join(root, 'daten', 'source_inventory.jsonl'));
const webSources = await readJsonl(path.join(root, 'daten', 'web_source_inventory_2026.jsonl'));
const sourceMap = new Map();
for (const row of legacySources) {
  sourceMap.set(row.repo_path, {
    source_id: row.source_id,
    title: row.title,
    repo_path: row.repo_path,
    original_url: row.original_url || null,
    publication_date: row.datum || null,
    access_date: TODAY,
    publisher: row.herausgeber || null,
    source_type: row.quellentyp || null,
    primary_source: row.primärquelle === true,
    evidence_grade: row.beweisstärke || null,
    pinpoint: row.seiten_oder_umfang || null,
    legal_status: null,
    sha256: row.sha256 || null,
    bytes: null,
    validation_status: row.source_exists ? 'LOCAL_PRESENT' : 'EXTERNAL_ONLY',
    last_verified: TODAY
  });
}
for (const row of webSources) {
  const previous = sourceMap.get(row.source_path) || {};
  sourceMap.set(row.source_path, {
    source_id: previous.source_id || stableId('SRC-WEB', row.source_path),
    title: previous.title || row.filename,
    repo_path: row.source_path,
    original_url: previous.original_url || null,
    publication_date: previous.publication_date || null,
    access_date: TODAY,
    publisher: previous.publisher || null,
    source_type: previous.source_type || 'Lokaler Websnapshot',
    primary_source: previous.primary_source || false,
    evidence_grade: previous.evidence_grade || 'B',
    pinpoint: previous.pinpoint || null,
    legal_status: previous.legal_status || null,
    sha256: row.sha256,
    bytes: row.bytes,
    validation_status: 'LOCAL_HASHED',
    last_verified: TODAY
  });
}
const sourceRows = [...sourceMap.values()].sort((a, b) =>
  String(a.repo_path || '').localeCompare(String(b.repo_path || ''), 'de')
);
for (const row of sourceRows) {
  if (!row.repo_path || row.sha256) continue;
  const abs = path.join(root, row.repo_path);
  if (!await exists(abs)) continue;
  const stat = await fs.stat(abs);
  if (!stat.isFile()) continue;
  row.bytes = stat.size;
  row.sha256 = await sha256File(abs);
  row.validation_status = 'LOCAL_HASHED';
}
await writeJsonl(path.join(root, 'daten', 'source_master.jsonl'), sourceRows);

const quality = {
  generated_at: TODAY,
  court_cases: courtRows.length,
  court_exact_date: courtRows.filter(row => row.date_precision === 'day').length,
  court_year_only: courtRows.filter(row => row.date_precision === 'year_only').length,
  court_date_unknown: courtRows.filter(row => row.date_precision === 'unknown').length,
  court_with_case_number: courtRows.filter(row => row.case_numbers.length).length,
  court_with_official_route: courtRows.filter(row => row.official_source_route).length,
  status_events: statusRows.length,
  power_metrics: powerRows.length,
  source_master: sourceRows.length,
  source_with_hash: sourceRows.filter(row => row.sha256).length,
  source_with_original_url: sourceRows.filter(row => row.original_url).length,
  source_with_publication_date: sourceRows.filter(row => row.publication_date).length
};
await fs.writeFile(path.join(root, 'daten', 'master_register_quality_2026.json'), JSON.stringify(quality, null, 2) + '\n');
console.log(quality);
