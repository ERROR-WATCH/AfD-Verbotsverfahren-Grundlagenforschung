#!/usr/bin/env node
import fs from 'node:fs/promises';
import path from 'node:path';

const repoRoot = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const findingsPath = path.join(repoRoot, 'daten', 'findings_art21.jsonl');
const outPath = path.join(repoRoot, 'daten', 'statistik_manifest.json');

function readJsonl(text) {
  return text.split(/\r?\n/).filter(Boolean).map(line => JSON.parse(line));
}

function countBy(rows, keyFn) {
  const map = new Map();
  for (const row of rows) {
    const key = keyFn(row);
    if (!key) continue;
    map.set(key, (map.get(key) || 0) + 1);
  }
  return [...map.entries()].sort((a, b) => b[1] - a[1]);
}

function manifestEntry({ id, title, value, unit, theme, subtheme, source, source_type, source_path, finding_location, method, legal_relevance, article_21_field, evidence_grade, status, limitations }) {
  return { id, title, value, unit, theme, subtheme, source, source_type, source_path, finding_location, method, legal_relevance, article_21_field, evidence_grade, status, limitations };
}

async function main() {
  const findings = readJsonl(await fs.readFile(findingsPath, 'utf8'));
  const aggregate = findings.filter(f => f.granularity === 'aggregate');
  const quote = findings.filter(f => f.granularity === 'quote');
  const caseRegisterText = await fs.readFile(path.join(repoRoot, 'dokumente', 'hauptquellen', 'urteilsbelege', 'QUELLEN_URTEILSDB.md'), 'utf8');
  const vbText = await fs.readFile(path.join(repoRoot, 'README.md'), 'utf8');
  const caseTotal = (caseRegisterText.match(/^\d+\.\s/mg) || []).length;
  const verbotsTotal = (vbText.match(/^>\s+\*\*\d+\.\s/gm) || []).length;

  const manifest = [
    manifestEntry({
      id: 'STAT-CASE-TOTAL-001',
      title: 'Gerichtsregister: dokumentierte Faelle',
      value: caseTotal,
      unit: 'Faelle',
      theme: 'Gerichtsregister',
      subtheme: 'Gesamtbestand',
      source: 'dokumente/hauptquellen/urteilsbelege/QUELLEN_URTEILSDB.md',
      source_type: 'Repo-Register / Provenienzregister',
      source_path: 'dokumente/hauptquellen/urteilsbelege/QUELLEN_URTEILSDB.md',
      finding_location: 'Verifiziertes Quellen- und Provenienzregister (Faelle 1 bis 239)',
      method: 'Zaehlung der nummerierten Registerfaelle im Provenienzregister.',
      legal_relevance: 'Belegdichte, Zurechnung, Wiederholungsmuster',
      article_21_field: 'Potentialitaet / Verhalten von Anhaengern / Belegdichte',
      evidence_grade: 'B',
      status: 'geprueft',
      limitations: 'Die Zahl 239 bezeichnet dokumentierte Faelle im Register, nicht automatisch rechtskraeftige Verurteilungen.'
    }),
    manifestEntry({
      id: 'STAT-VB-TOTAL-001',
      title: 'Verbotsgruende: konsolidierte Hauptzahl',
      value: verbotsTotal,
      unit: 'Verbotsgruende',
      theme: 'Verbotsgruende',
      subtheme: 'Gesamtbestand',
      source: 'README.md / STATISTIKMODUL.md',
      source_type: 'Repo-Register / Methodik',
      source_path: 'README.md',
      finding_location: 'Die 18 juristischen Verbotsgruende (Abschnitt im README)',
      method: 'Zaehlung der nummerierten Hauptpunkte im README-Verbotsgruende-Block.',
      legal_relevance: 'Prueffeldbreite, Argumentdichte, Vollstaendigkeit der Beleglandkarte',
      article_21_field: 'Verfassungsfeindliche Zielrichtung / Planmaessigkeit / Belegdichte',
      evidence_grade: 'B',
      status: 'geprueft',
      limitations: 'Die Zahl 18 ist der im Repo konsistent gefuehrte aktuelle Block der Verbotsgruende.'
    }),
    manifestEntry({
      id: 'STAT-QUOTES-TOTAL-001',
      title: 'Belegzitate im lokalen Korpus',
      value: quote.length,
      unit: 'Zitate',
      theme: 'Zitatkorpus',
      subtheme: 'Quote findings',
      source: 'daten/findings_art21.jsonl / zitate/*.md',
      source_type: 'Extraktionsdatensatz / Zitatkorpus',
      source_path: 'daten/findings_art21.jsonl',
      finding_location: 'Quote findings (granularity=quote)',
      method: 'Zaehlung aller validierten Quote-Findings aus dem lokalen Zitatkorpus.',
      legal_relevance: 'Belegdichte, Narrativverdichtung, Zurechnung',
      article_21_field: 'Belegdichte / Zurechnung / Planmaessigkeit',
      evidence_grade: 'B',
      status: 'geprueft',
      limitations: 'Quote findings sind Befunde, nicht automatisch gerichtliche Feststellungen.'
    }),
    manifestEntry({
      id: 'STAT-AGGREGATE-TOTAL-001',
      title: 'Aggregierte Statistik- und Registerbefunde',
      value: aggregate.length,
      unit: 'Befunde',
      theme: 'Aggregierte Statistik',
      subtheme: 'CSV-Bestaende',
      source: 'daten/statistik_*.csv',
      source_type: 'Aggregierter Statistikdatensatz',
      source_path: 'daten/findings_art21.jsonl',
      finding_location: 'Aggregate findings (granularity=aggregate)',
      method: 'Zaehlung aller aus den internen Statistik-CSV-Datensaetzen uebernommenen Befunde.',
      legal_relevance: 'Methodische und inhaltliche Verdichtung',
      article_21_field: 'Potentialitaet / Zurechnung / Verfassungsfeindliche Zielrichtung',
      evidence_grade: 'B',
      status: 'geprueft',
      limitations: 'Aggregierte Befunde muessen getrennt von Primärquellen gelesen werden.'
    }),
    manifestEntry({
      id: 'STAT-SOURCE-TYPE-A-001',
      title: 'Quellen mit Beweisstufe A',
      value: findings.filter(row => (row.beweistufe || row.beweisstufe) === 'A').length,
      unit: 'Befunde',
      theme: 'Beweisstärke',
      subtheme: 'A',
      source: 'daten/findings_art21.jsonl',
      source_type: 'Abgeleiteter Kennwert',
      source_path: 'daten/findings_art21.jsonl',
      finding_location: 'Alle Findings mit Beweisstufe A',
      method: 'Zaehlung aller Findings mit Beweisstufe A.',
      legal_relevance: 'Primär- und Amtlichkeit',
      article_21_field: 'Zielrichtung / Zurechnung / Potentialitaet',
      evidence_grade: 'B',
      status: 'geprueft',
      limitations: 'Der Wert ist eine Kennzahl zur Quellenverteilung, keine Aussage ueber materielle Schwere.'
    }),
  ];

  const topThemes = countBy(findings, row => row.thema).slice(0, 8);
  topThemes.forEach(([theme, value], i) => {
    manifest.push(manifestEntry({
      id: `STAT-THEME-${String(i + 1).padStart(3, '0')}`,
      title: `Top-Thema: ${theme}`,
      value,
      unit: 'Befunde',
      theme: 'Themencluster',
      subtheme: theme,
      source: 'daten/findings_art21.jsonl',
      source_type: 'Abgeleiteter Kennwert',
      source_path: 'daten/findings_art21.jsonl',
      finding_location: 'Top themes derived from findings_art21.jsonl',
      method: 'Zaehlung der Findings pro Themencluster.',
      legal_relevance: 'Narrativverdichtung und Wiederholungsmuster',
      article_21_field: 'Verfassungsfeindliche Zielrichtung / Planmaessigkeit / Menschenwuerde',
      evidence_grade: 'B',
      status: 'geprueft',
      limitations: 'Top-Themen sind aggregierte Kennzahlen und ersetzen keine Einzelfallpruefung.'
    }));
  });

  await fs.writeFile(outPath, JSON.stringify(manifest, null, 2) + '\n', 'utf8');
  console.log(`Wrote ${manifest.length} statistics to ${path.relative(repoRoot, outPath)}`);
}

await main();
