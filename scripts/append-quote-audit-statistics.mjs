#!/usr/bin/env node
import fs from 'node:fs/promises';
import path from 'node:path';

const repoRoot = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const manifestPath = path.join(repoRoot, 'daten', 'statistik_manifest.json');
const statsPath = path.join(repoRoot, 'daten', 'zitat_statistik_2026.json');

function clean(value) {
  return String(value ?? '').trim();
}

function slug(value) {
  return clean(value)
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss')
    .toUpperCase().replace(/[^A-Z0-9]+/g, '-').replace(/^-+|-+$/g, '')
    .slice(0, 42) || 'WERT';
}

function entry(id, title, value, unit, subtheme, method, legalRelevance, article21Field, evidenceGrade = 'B') {
  return {
    id,
    title,
    value,
    unit,
    theme: 'Zitatkorpus Art. 21',
    subtheme,
    source: 'daten/findings_art21.jsonl / daten/zitat_statistik_2026.json / zitate/*.md',
    source_type: 'Abgeleiteter Kennwert aus Zitat-/Proof-Korpus',
    source_path: 'daten/zitat_statistik_2026.json',
    finding_location: 'Quote-Findings granularity=quote; Auswertung durch scripts/evaluate-quote-corpus.mjs',
    method,
    legal_relevance: legalRelevance,
    article_21_field: article21Field,
    evidence_grade: evidenceGrade,
    status: 'BELEGT_UND_VERDRAHTET',
    limitations: 'Zitatstatistik ersetzt keine isolierte Subsumtion; verwertet werden Quelle, Pinpoint, Akteur, Zurechnung, Kontext und Beweisstufe gemeinsam.'
  };
}

function pushDistribution(out, rows, prefix, title, unit, field, grade = 'B') {
  (rows || []).slice(0, 12).forEach((row, i) => out.push(entry(
    `${prefix}-${String(i + 1).padStart(3, '0')}-${slug(row.label)}`,
    `${title}: ${row.label}`,
    row.value,
    unit,
    row.label,
    `Zaehlung der Quote-Findings nach ${field}.`,
    'Muster-, Wiederholungs-, Akteurs- und Zurechnungsbeleg im Zitatkorpus.',
    field,
    grade
  )));
}

async function main() {
  const manifest = JSON.parse(await fs.readFile(manifestPath, 'utf8'));
  const stats = JSON.parse(await fs.readFile(statsPath, 'utf8'));
  const removePrefixes = [
    'STAT-QUOTE-AUDIT-', 'STAT-QUOTE-ART21-', 'STAT-QUOTE-ATTR-',
    'STAT-QUOTE-ACTOR-', 'STAT-QUOTE-SOURCECLASS-',
    'STAT-QUOTE-TARGET-', 'STAT-QUOTE-CLUSTER-'
  ];
  const filtered = manifest.filter(row => !removePrefixes.some(prefix => String(row.id || row.stat_id || '').startsWith(prefix)));
  const additions = [
    entry('STAT-QUOTE-AUDIT-TOTAL-001', 'Zitatkorpus: Quote-/Proof-Findings gesamt', stats.total, 'Findings', 'Gesamtbestand', 'Zaehlung aller Findings mit granularity=quote.', 'Belegdichte und Musterbildung fuer Art.-21-Prueffelder.', 'Belegdichte / Zurechnung / Planmaessigkeit'),
    entry('STAT-QUOTE-AUDIT-DIRECT-001', 'Zitatkorpus: direkt zurechenbare Findings', stats.direct_attribution, 'Findings', 'Direkte Zurechnung', 'Zaehlung direkter AfD-/Funktionaerszurechnung im Quote-Korpus.', 'Direkte Zurechnung von Parteifunktionaeren, Organen oder offiziellen Kanaelen.', 'Zurechnung / Verhalten von Anhaengern / Ziele der Partei', 'A'),
    entry('STAT-QUOTE-AUDIT-BELEGPFAD-NORMALISIERUNG-001', 'Zitatkorpus: belegpfadbasierte Zurechnungsnormalisierung', stats.belegpfad_normalisierung, 'Findings', 'Belegpfad-Normalisierung', 'Zaehlung vorhandener Quote-Findings mit belegpfadbasierter Akteurs-/Quellenroute.', 'Kein Beweismangel: Quelle liegt vor, Akteurs- und Originalanker werden normalisiert.', 'Zurechnung / Beweisverdrahtung'),
    entry('STAT-QUOTE-AUDIT-OFFICIAL-001', 'Zitatkorpus: amtlich, gerichtlich, parlamentarisch oder gutachtlich verankert', stats.official_or_court, 'Findings', 'Quellenhärte', 'Regex-gestuetzte Zaehlung amtlicher, gerichtlicher, parlamentarischer und gutachtlicher Anker.', 'Beweisnaehe und Quellenhaerte des Zitatkorpus.', 'Beweisstärke / Amtlichkeit', 'A'),
    entry('STAT-QUOTE-AUDIT-PINPOINT-001', 'Zitatkorpus: Pinpoint oder Proof-ID vorhanden', stats.with_pinpoint, 'Findings', 'Pinpoint', 'Zaehlung von Seiten-, Randnummern-, Aktenzeichen-, Drucksachen- oder Proof-ID-Ankern.', 'Forensische Zitierfaehigkeit und Nachpruefbarkeit.', 'Quelle / Pinpoint / Nachweisbarkeit'),
    entry('STAT-QUOTE-AUDIT-COURTREADY-001', 'Zitatkorpus: eng gerichtsfest zitierfähige Findings', stats.court_ready_quote_findings, 'Findings', 'Gerichtsfeste Zitierfaehigkeit', 'Enge Zaehlung: Originaltext/Auszug, Pinpoint, Akteur, starke Beweisstufe und direkte oder amtliche/gutachtliche Quelle.', 'Unmittelbar dossierfaehiger Kernbestand des Zitatkorpus.', 'Beweisstärke / Zurechnung / Nachweisbarkeit', 'A')
  ];
  pushDistribution(additions, stats.by_art21, 'STAT-QUOTE-ART21', 'Zitatkorpus Art.-21-Prueffeld', 'Findings', 'Art.-21-Prueffeld');
  pushDistribution(additions, stats.by_attribution, 'STAT-QUOTE-ATTR', 'Zitatkorpus Zurechnungstyp', 'Findings', 'Zurechnung');
  pushDistribution(additions, stats.by_actor, 'STAT-QUOTE-ACTOR', 'Zitatkorpus Akteur', 'Findings', 'Akteur');
  pushDistribution(additions, stats.by_source_type, 'STAT-QUOTE-SOURCECLASS', 'Zitatkorpus Quellenklasse', 'Findings', 'Quellenklasse');
  pushDistribution(additions, stats.by_target_group, 'STAT-QUOTE-TARGET', 'Zitatkorpus Zielgruppe', 'Findings', 'Zielgruppe');
  pushDistribution(additions, stats.by_legal_cluster, 'STAT-QUOTE-CLUSTER', 'Zitatkorpus Beweisachse', 'Findings', 'Beweisachse');
  await fs.writeFile(manifestPath, JSON.stringify([...filtered, ...additions], null, 2) + '\n');
  console.log(`Zitatstatistiken ans Manifest gehaengt: ${additions.length}`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
