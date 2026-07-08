#!/usr/bin/env node
import fs from 'node:fs/promises';
import path from 'node:path';

const repoRoot = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const findingsPath = path.join(repoRoot, 'daten', 'findings_art21.jsonl');
const inventoryPath = path.join(repoRoot, 'daten', 'source_inventory.jsonl');
const outPath = path.join(repoRoot, 'daten', 'statistik_manifest.json');

function readJsonl(text) {
  return text.split(/\r?\n/).filter(Boolean).map(line => JSON.parse(line));
}

function cleanValue(value) {
  const text = String(value ?? '').trim();
  if (!text || ['null', 'undefined', 'n/a', 'na', '-'].includes(text.toLowerCase())) return '';
  return text;
}

function slug(value, max = 48) {
  const ascii = cleanValue(value)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss')
    .replace(/Ä/g, 'AE').replace(/Ö/g, 'OE').replace(/Ü/g, 'UE')
    .toUpperCase()
    .replace(/[^A-Z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, max)
    .replace(/-+$/g, '');
  return ascii || 'UNBEKANNT';
}

function countBy(rows, keyFn) {
  const map = new Map();
  for (const row of rows) {
    const key = cleanValue(keyFn(row));
    if (!key) continue;
    map.set(key, (map.get(key) || 0) + 1);
  }
  return [...map.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], 'de'));
}

function countBool(rows, predicate) {
  return rows.reduce((sum, row) => sum + (predicate(row) ? 1 : 0), 0);
}

function manifestEntry({ id, title, value, unit, theme, subtheme, source, source_type, source_path, finding_location, method, legal_relevance, article_21_field, evidence_grade = 'B', status = 'geprueft', limitations }) {
  return { id, title, value, unit, theme, subtheme, source, source_type, source_path, finding_location, method, legal_relevance, article_21_field, evidence_grade, status, limitations };
}

function pushDistribution(manifest, rows, cfg) {
  countBy(rows, cfg.key).slice(0, cfg.limit ?? 12).forEach(([label, value], i) => {
    manifest.push(manifestEntry({
      id: `${cfg.idPrefix}-${String(i + 1).padStart(3, '0')}-${slug(label, 36)}`,
      title: `${cfg.titlePrefix}: ${label}`,
      value,
      unit: cfg.unit,
      theme: cfg.theme,
      subtheme: label,
      source: cfg.source,
      source_type: cfg.sourceType,
      source_path: cfg.sourcePath,
      finding_location: cfg.findingLocation,
      method: cfg.method,
      legal_relevance: cfg.legalRelevance,
      article_21_field: cfg.article21Field,
      evidence_grade: cfg.evidenceGrade ?? 'B',
      status: cfg.status ?? 'geprueft',
      limitations: cfg.limitations,
    }));
  });
}

async function safeRead(file) {
  try { return await fs.readFile(file, 'utf8'); } catch { return ''; }
}

async function main() {
  const findings = readJsonl(await fs.readFile(findingsPath, 'utf8'));
  const inventory = readJsonl(await fs.readFile(inventoryPath, 'utf8'));
  const validatedFindings = findings.filter(f => f.pruefstatus === 'geprueft');
  const aggregate = validatedFindings.filter(f => f.granularity === 'aggregate');
  const quote = validatedFindings.filter(f => f.granularity === 'quote');
  const usableSources = inventory.filter(row => row.statistik_nutzbar === true && row.nur_recherchehinweis !== true);
  const existingSources = inventory.filter(row => row.source_exists === true);
  const primarySources = inventory.filter(row => row.primärquelle === true);
  const officialFindings = validatedFindings.filter(row => /amtlich|gericht|verfassungsschutz|bfv|lfv/i.test(`${row.quellenart || ''} ${row.source_medium || ''}`));
  const directFindings = validatedFindings.filter(row => row.afd_zurechnung === 'direkt' || row.akteursebene === 'direkt');
  const caseRegisterText = await safeRead(path.join(repoRoot, 'dokumente', 'hauptquellen', 'urteilsbelege', 'QUELLEN_URTEILSDB.md'));
  const vbText = await safeRead(path.join(repoRoot, 'README.md'));
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
      finding_location: 'Verifiziertes Quellen- und Provenienzregister',
      method: 'Zaehlung der nummerierten Registerfaelle im Provenienzregister.',
      legal_relevance: 'Belegdichte, Zurechnung, Wiederholungsmuster',
      article_21_field: 'Potentialitaet / Verhalten von Anhaengern / Belegdichte',
      limitations: 'Die Zahl bezeichnet dokumentierte Faelle im Register, nicht automatisch rechtskraeftige Verurteilungen.'
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
      finding_location: 'Die juristischen Verbotsgruende im README-Block',
      method: 'Zaehlung der nummerierten Hauptpunkte im README-Verbotsgruende-Block.',
      legal_relevance: 'Prueffeldbreite, Argumentdichte, Vollstaendigkeit der Beleglandkarte',
      article_21_field: 'Verfassungsfeindliche Zielrichtung / Planmaessigkeit / Belegdichte',
      limitations: 'Die Zahl ist der im Repo konsistent gefuehrte aktuelle Block der Verbotsgruende.'
    }),
    manifestEntry({
      id: 'STAT-FINDINGS-TOTAL-001',
      title: 'Gepruefte Findings im Art.-21-Datensatz',
      value: validatedFindings.length,
      unit: 'Findings',
      theme: 'Finding-Korpus',
      subtheme: 'Gesamtbestand geprueft',
      source: 'daten/findings_art21.jsonl',
      source_type: 'Extraktionsdatensatz / Findings',
      source_path: 'daten/findings_art21.jsonl',
      finding_location: 'Alle Findings mit pruefstatus=geprueft',
      method: 'Zaehlung aller validierten Findings im Art.-21-Datensatz.',
      legal_relevance: 'Belegdichte, Nachvollziehbarkeit, Wiederholungsmuster',
      article_21_field: 'Belegdichte / Zurechnung / Planmaessigkeit',
      limitations: 'Findings sind strukturierte Befunde und muessen fuer Subsumtion mit Quelle und Kontext gelesen werden.'
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
      limitations: 'Aggregierte Befunde muessen getrennt von Primärquellen gelesen werden.'
    }),
    manifestEntry({
      id: 'STAT-SOURCES-TOTAL-001',
      title: 'Quelleninventar: erfasste Quellen',
      value: inventory.length,
      unit: 'Quellen',
      theme: 'Quelleninventar',
      subtheme: 'Gesamtbestand',
      source: 'daten/source_inventory.jsonl',
      source_type: 'Quelleninventar',
      source_path: 'daten/source_inventory.jsonl',
      finding_location: 'Alle Eintraege im Quelleninventar',
      method: 'Zaehlung aller Quelleninventar-Eintraege.',
      legal_relevance: 'Quellenbasis, Provenienz, Nachvollziehbarkeit',
      article_21_field: 'Belegdichte / Nachweisbarkeit',
      limitations: 'Das Inventar enthaelt auch Arbeits- und Methodikdateien; Beweiswert ergibt sich aus Quellentyp und Beweisstufe.'
    }),
    manifestEntry({
      id: 'STAT-SOURCES-USABLE-001',
      title: 'Quelleninventar: statistiknutzbare Quellen',
      value: usableSources.length,
      unit: 'Quellen',
      theme: 'Quelleninventar',
      subtheme: 'Statistiknutzbar',
      source: 'daten/source_inventory.jsonl',
      source_type: 'Quelleninventar',
      source_path: 'daten/source_inventory.jsonl',
      finding_location: 'statistik_nutzbar=true und nur_recherchehinweis!=true',
      method: 'Zaehlung der fuer Statistik nutzbaren Quellen ohne reine Recherchehinweise.',
      legal_relevance: 'Methodische Belastbarkeit der Kennzahlen',
      article_21_field: 'Belegdichte / Nachweisbarkeit',
      limitations: 'Statistiknutzbarkeit ersetzt nicht die materielle Einzelfallpruefung.'
    }),
    manifestEntry({
      id: 'STAT-SOURCES-PRIMARY-001',
      title: 'Quelleninventar: Primaerquellen',
      value: primarySources.length,
      unit: 'Quellen',
      theme: 'Quelleninventar',
      subtheme: 'Primaerquellen',
      source: 'daten/source_inventory.jsonl',
      source_type: 'Quelleninventar',
      source_path: 'daten/source_inventory.jsonl',
      finding_location: 'primärquelle=true',
      method: 'Zaehlung aller als Primaerquelle markierten Quellen.',
      legal_relevance: 'Beweisnaehe und Zurechnungsqualitaet',
      article_21_field: 'Zurechnung / Belegdichte / Potentialitaet',
      limitations: 'Primaerquelle beschreibt Quellennaehe, nicht automatisch juristische Durchschlagskraft.'
    }),
    manifestEntry({
      id: 'STAT-FINDINGS-OFFICIAL-001',
      title: 'Findings aus amtlichen, gerichtlichen oder VFS/BfV-Kontexten',
      value: officialFindings.length,
      unit: 'Findings',
      theme: 'Finding-Korpus',
      subtheme: 'Amtliche / gerichtliche Kontexte',
      source: 'daten/findings_art21.jsonl',
      source_type: 'Extraktionsdatensatz / Findings',
      source_path: 'daten/findings_art21.jsonl',
      finding_location: 'quellenart/source_medium enthaelt amtlich, gericht, Verfassungsschutz, BfV oder LfV',
      method: 'Regex-basierte Zaehlung amtlicher, gerichtlicher und Verfassungsschutz-Kontexte im validierten Finding-Korpus.',
      legal_relevance: 'Beweisnaehe, Amtlichkeit, Quellengewicht',
      article_21_field: 'Zurechnung / Belegdichte / Potentialitaet',
      evidence_grade: 'A',
      limitations: 'Regex-Klassifikation ist eine belastbare Orientierung, aber keine abschliessende rechtliche Quellenbewertung.'
    }),
    manifestEntry({
      id: 'STAT-FINDINGS-DIRECT-001',
      title: 'Findings mit direkter AfD- oder Akteurszurechnung',
      value: directFindings.length,
      unit: 'Findings',
      theme: 'Zurechnung',
      subtheme: 'Direkte Zurechnung',
      source: 'daten/findings_art21.jsonl',
      source_type: 'Extraktionsdatensatz / Findings',
      source_path: 'daten/findings_art21.jsonl',
      finding_location: 'afd_zurechnung=direkt oder akteursebene=direkt',
      method: 'Zaehlung validierter Findings mit direkter AfD-Zurechnung oder direkter Akteursebene.',
      legal_relevance: 'Zurechnung, Parteibezug, Verhalten von Anhaengern und Funktionstraegern',
      article_21_field: 'Zurechnung / Verhalten von Anhaengern / Planmaessigkeit',
      limitations: 'Direkt markierte Findings muessen fuer gerichtsfeste Zurechnung im Kontext der Originalquelle gelesen werden.'
    }),
  ];


  const fixedOfficialStats = [
    ['STAT-PMK-2023-RIGHT-TOTAL', 'PMK-rechts 2023: Straftaten insgesamt', 28945, 'Straftaten', 'PMK / BKA', 'PMK-rechts 2023', 'dokumente/hauptquellen/BKA_Fallzahlen_PMK_2023.md', 'BKA-PMK-Fallzahlen 2023, Tabelle 1', 'Amtliche BKA-PMK-Zahl aus lokal archiviertem Fact Sheet.', 'Kontextdaten Rechtsextremismus / Lagebild', 'PMK-Daten sind Kontextdaten und keine automatische AfD-Zurechnung.'],
    ['STAT-PMK-2023-RIGHT-VIOLENCE', 'PMK-rechts 2023: Gewalttaten', 1270, 'Gewalttaten', 'PMK / BKA', 'Gewalttaten 2023', 'dokumente/hauptquellen/BKA_Fallzahlen_PMK_2023.md', 'BKA-PMK-Fallzahlen 2023, Tabelle 9', 'Amtliche BKA-PMK-Gewalttatenzahl aus lokal archiviertem Fact Sheet.', 'Kontextdaten Rechtsextremismus / Gewaltlage', 'PMK-Daten sind Kontextdaten und keine automatische AfD-Zurechnung.'],
    ['STAT-PMK-2023-RIGHT-PROPAGANDA', 'PMK-rechts 2023: Propagandadelikte', 16698, 'Delikte', 'PMK / BKA', 'Propagandadelikte 2023', 'dokumente/hauptquellen/BKA_Fallzahlen_PMK_2023.md', 'BKA-PMK-Fallzahlen 2023, Tabelle 2', 'Amtliche BKA-PMK-Propagandadelikte aus lokal archiviertem Fact Sheet.', 'Kontextdaten Rechtsextremismus / NS-Bezug', 'PMK-Daten sind Kontextdaten und keine automatische AfD-Zurechnung.'],
    ['STAT-PMK-2024-RIGHT-TOTAL', 'PMK-rechts 2024: Straftaten insgesamt', 25660, 'Straftaten', 'PMK / BKA', 'PMK-rechts 2024', 'dokumente/hauptquellen/BKA_Fallzahlen_PMK_2024.md', 'BKA-PMK-Fallzahlen 2024, statistischer Überblick', 'Amtliche BKA-PMK-Zahl aus lokaler Textfassung.', 'Kontextdaten Rechtsextremismus / Lagebild', 'PMK-Daten sind Kontextdaten und keine automatische AfD-Zurechnung.'],
    ['STAT-PMK-2024-RIGHT-VIOLENCE', 'PMK-rechts 2024: Gewalttaten', 1280, 'Gewalttaten', 'PMK / BKA', 'Gewalttaten 2024', 'dokumente/hauptquellen/BKA_Fallzahlen_PMK_2024.md', 'BKA-PMK-Fallzahlen 2024, statistischer Überblick', 'Amtliche BKA-PMK-Gewalttatenzahl aus lokaler Textfassung.', 'Kontextdaten Rechtsextremismus / Gewaltlage', 'PMK-Daten sind Kontextdaten und keine automatische AfD-Zurechnung.'],
    ['STAT-PMK-2024-RIGHT-PROPAGANDA', 'PMK-rechts 2024: Propagandadelikte', 15200, 'Delikte', 'PMK / BKA', 'Propagandadelikte 2024', 'dokumente/hauptquellen/BKA_Fallzahlen_PMK_2024.md', 'BKA-PMK-Fallzahlen 2024, statistischer Überblick', 'Amtliche BKA-PMK-Propagandadelikte aus lokaler Textfassung.', 'Kontextdaten Rechtsextremismus / NS-Bezug', 'PMK-Daten sind Kontextdaten und keine automatische AfD-Zurechnung.'],
    ['STAT-PMK-2025-RIGHT-TOTAL', 'PMK-rechts 2025: Straftaten insgesamt', 42544, 'Straftaten', 'PMK / BKA', 'PMK-rechts 2025', 'dokumente/vfs_berichte_bundeslaender/2026-06-30-verfassungsschutzbericht-2025.pdf', 'BfV-Verfassungsschutzbericht 2025, PMK-Gesamtüberblick', 'Amtliche BKA-PMK-Zahl im BfV-Bericht 2025.', 'Kontextdaten Rechtsextremismus / Lagebild', 'PMK-Daten sind Kontextdaten und keine automatische AfD-Zurechnung.'],
    ['STAT-PMK-2025-EXTREMIST-RIGHT-TOTAL', 'Rechtsextremistisch motivierte Straftaten 2025', 36951, 'Straftaten', 'PMK / BKA', 'Extremistisch rechts 2025', 'dokumente/vfs_berichte_bundeslaender/2026-06-30-verfassungsschutzbericht-2025.pdf', 'BfV-Verfassungsschutzbericht 2025, Rechtsextremistisch motivierte Straftaten', 'Amtliche BKA-Zahl mit extremistischem Hintergrund im BfV-Bericht 2025.', 'Kontextdaten Rechtsextremismus / Lagebild', 'Extremistische PMK-Daten sind Kontextdaten und keine automatische AfD-Zurechnung.'],
    ['STAT-PMK-2025-RIGHT-VIOLENCE', 'Rechtsextremistisch motivierte Gewalttaten 2025', 1395, 'Gewalttaten', 'PMK / BKA', 'Gewalttaten 2025', 'dokumente/vfs_berichte_bundeslaender/2026-06-30-verfassungsschutzbericht-2025.pdf', 'BfV-Verfassungsschutzbericht 2025, Rechtsextremistisch motivierte Straftaten', 'Amtliche BKA-Gewaltdelikte mit rechtsextremistischem Hintergrund.', 'Kontextdaten Rechtsextremismus / Gewaltlage', 'PMK-Daten sind Kontextdaten und keine automatische AfD-Zurechnung.'],
    ['STAT-PMK-2025-RIGHT-PROPAGANDA', 'Rechtsextremistisch motivierte Propagandadelikte 2025', 23122, 'Delikte', 'PMK / BKA', 'Propagandadelikte 2025', 'dokumente/vfs_berichte_bundeslaender/2026-06-30-verfassungsschutzbericht-2025.pdf', 'BfV-Verfassungsschutzbericht 2025, Rechtsextremistisch motivierte Straftaten', 'Amtliche BKA-Propagandadelikte mit rechtsextremistischem Hintergrund.', 'Kontextdaten Rechtsextremismus / NS-Bezug', 'PMK-Daten sind Kontextdaten und keine automatische AfD-Zurechnung.'],
    ['STAT-BFV2025-PMK-TOTAL', 'BfV 2025: Politisch motivierte Straftaten insgesamt', 85837, 'Straftaten', 'BfV 2025 Lagezahlen', 'PMK gesamt', 'dokumente/vfs_berichte_bundeslaender/2026-06-30-verfassungsschutzbericht-2025.pdf', 'BfV-Verfassungsschutzbericht 2025, Gesamtüberblick PMK', 'Amtliche PMK-Gesamtzahl im BfV-Bericht 2025.', 'Kontextdaten Extremismus / Gesamtbild', 'Gesamt-PMK ist Kontext, keine AfD-Zurechnung.'],
    ['STAT-BFV2025-EXTREMIST-TOTAL', 'BfV 2025: extremistische Straftaten insgesamt', 58851, 'Straftaten', 'BfV 2025 Lagezahlen', 'Extremistische Straftaten', 'dokumente/vfs_berichte_bundeslaender/2026-06-30-verfassungsschutzbericht-2025.pdf', 'BfV-Verfassungsschutzbericht 2025, Extremistisch motivierte Straftaten', 'Amtliche Zahl extremistischer Straftaten im BfV-Bericht 2025.', 'Kontextdaten Extremismus / Gesamtbild', 'Extremistische Straftaten sind Kontextdaten.'],
    ['STAT-AFD-MEMBERS-2025-001', 'AfD-Mitglieder 2025/2026: Gesamtzahl', 70000, 'Mitglieder', 'AfD / BfV 2025 Lagezahlen', 'AfD-Mitglieder gesamt', 'dokumente/hauptquellen/Deepresearch_BfV_AfD_Rechtsextremismus_Belege_2025_2026.md', 'Deepresearch-Dossier: WELT/dpa zu Verfassungsschutzbericht 2025 und AfD-Mitgliederzahl', 'Uebernahme der berichteten AfD-Mitgliederzahl als Ausgangsgroesse fuer Potenzialanteile.', 'Potentialitaet / Mitgliederbasis / Zurechnung', 'Mitgliederzahl laut Berichterstattung/Parteiangabe; nicht mit rechtsextremistischem Potenzial gleichsetzen.'],
    ['STAT-AFD-EXTREMIST-POTENTIAL-2025-001', 'AfD-Mitglieder: rechtsextremistisches Potenzial 2025/2026', 28000, 'Personen', 'AfD / BfV 2025 Lagezahlen', 'Rechtsextremistisches AfD-Potenzial', 'dokumente/hauptquellen/Deepresearch_BfV_AfD_Rechtsextremismus_Belege_2025_2026.md', 'Deepresearch-Dossier: BfV-Schaetzung ca. 28.000 von ca. 70.000 AfD-Mitgliedern', 'Uebernahme der berichteten BfV-Schaetzung zum AfD-bezogenen rechtsextremistischen Personenpotenzial.', 'Zurechnung rechtsextremistischer Potentiale zur Partei', 'Behoerdenbewertung/Schaetzung; keine strafrechtliche Individualfeststellung.'],
    ['STAT-AFD-EXTREMIST-SHARE-2025-001', 'AfD-Mitglieder: Anteil rechtsextremistisches Potenzial 2025/2026', 40, 'Prozent', 'AfD / BfV 2025 Lagezahlen', 'Anteil Rechtsextremismuspotenzial', 'dokumente/hauptquellen/Deepresearch_BfV_AfD_Rechtsextremismus_Belege_2025_2026.md', 'Deepresearch-Dossier: 28.000 / 70.000 = ca. 40 Prozent', 'Quotientenbildung aus berichteten Werten 28.000 und 70.000.', 'Quantitative Verdichtung von Zurechnung und Potentialitaet', 'Gerundeter Anteil; belastbar ist derzeit ca. 40 Prozent, nicht 50 Prozent.'],
    ['STAT-AFD-BT-STAFF-EXTREMIST-2024-001', 'AfD-Bundestagsumfeld: mehr als 100 Personen aus rechtsextremem Spektrum', 100, 'mehr-als-Personen', 'AfD / Bundestagsumfeld', 'Mitarbeiterumfeld rechtsextremes Spektrum', 'dokumente/hauptquellen/Deepresearch_BfV_AfD_Rechtsextremismus_Belege_2025_2026.md', 'Deepresearch-Dossier: Tagesspiegel/BR-Recherche 2024', 'Presseauswertung nach BR/Tagesspiegel: mehr als 100 Personen aus rechtsextremem Spektrum im AfD-Bundestagsumfeld.', 'Institutionelle Durchdringung und Nutzung parlamentarischer Ressourcen', 'Presse-/Recherchebefund; AfD weist Bericht zurueck; nicht als gerichtliche Feststellung zaehlen.'],
    ['STAT-BFV2025-RIGHT-POTENTIAL-TOTAL', 'BfV 2025: Rechtsextremismuspotenzial gesamt', 58700, 'Personen', 'BfV 2025 Lagezahlen', 'Rechtsextremismuspotenzial gesamt', 'dokumente/hauptquellen/Analyse_Verfassungsschutzbericht_2025_Statistiken_AfD_Rechtsextremismus.md', 'Vollbericht 2025, Rechtsextremismuspotenzial nach Mehrfachabzug', 'Direkter Tabellenwert aus Vollbericht/OCR-Analyse.', 'Gesamtlage Rechtsextremismus / Potentialitaet', 'Gesamtwert, keine automatische AfD-Zurechnung.'],
    ['STAT-BFV2025-RIGHT-PARTY-POTENTIAL', 'BfV 2025: Rechtsextremismuspotenzial in Parteien', 32850, 'Personen', 'BfV 2025 Lagezahlen', 'Rechtsextremismuspotenzial in Parteien', 'dokumente/hauptquellen/Analyse_Verfassungsschutzbericht_2025_Statistiken_AfD_Rechtsextremismus.md', 'Vollbericht 2025, Tabelle Rechtsextremismuspotenzial in Parteien', 'Direkter Tabellenwert aus Vollbericht/OCR-Analyse.', 'Parteienfoermige Verdichtung rechtsextremistischer Potentiale', 'Umfasst AfD-Potenzial und weitere rechtsextremistische Parteien.'],
    ['STAT-BFV2025-AFD-POTENTIAL-2023', 'BfV: AfD-Potenzial 2023', 11300, 'Personen', 'AfD / BfV Potenzialreihe', 'Verdachtsfall AfD 2023', 'dokumente/hauptquellen/Analyse_Verfassungsschutzbericht_2025_Statistiken_AfD_Rechtsextremismus.md', 'Vollbericht 2025, Tabelle Rechtsextremismuspotenzial / Verdachtsfall AfD', 'Direkter Tabellenwert aus Vollbericht/OCR-Analyse.', 'Zeitreihe AfD-bezogenes Rechtsextremismuspotenzial', 'BfV-Schaetzung, keine Individualfeststellung.'],
    ['STAT-BFV2025-AFD-POTENTIAL-2024', 'BfV: AfD-Potenzial 2024', 20000, 'Personen', 'AfD / BfV Potenzialreihe', 'Verdachtsfall AfD 2024', 'dokumente/hauptquellen/Analyse_Verfassungsschutzbericht_2025_Statistiken_AfD_Rechtsextremismus.md', 'Vollbericht 2025, Tabelle Rechtsextremismuspotenzial / Verdachtsfall AfD', 'Direkter Tabellenwert aus Vollbericht/OCR-Analyse.', 'Zeitreihe AfD-bezogenes Rechtsextremismuspotenzial', 'BfV-Schaetzung, keine Individualfeststellung.'],
    ['STAT-BFV2025-AFD-POTENTIAL-2025', 'BfV: AfD-Potenzial 2025', 28000, 'Personen', 'AfD / BfV Potenzialreihe', 'Verdachtsfall AfD 2025', 'dokumente/hauptquellen/Analyse_Verfassungsschutzbericht_2025_Statistiken_AfD_Rechtsextremismus.md', 'Vollbericht 2025, Tabelle Rechtsextremismuspotenzial / Verdachtsfall AfD', 'Direkter Tabellenwert aus Vollbericht/OCR-Analyse.', 'Zeitreihe AfD-bezogenes Rechtsextremismuspotenzial', 'BfV-Schaetzung, keine Individualfeststellung.'],
    ['STAT-BFV2025-RIGHT-VIOLENCE-ORIENTED', 'BfV 2025: gewaltorientierte Rechtsextremisten', 15600, 'Personen', 'BfV 2025 Lagezahlen', 'Gewaltorientiertes Rechtsextremismuspotenzial', 'dokumente/hauptquellen/Analyse_Verfassungsschutzbericht_2025_Statistiken_AfD_Rechtsextremismus.md', 'Vollbericht 2025, Tabelle Rechtsextremismuspotenzial', 'Direkter Tabellenwert aus Vollbericht/OCR-Analyse.', 'Gewaltorientierung im rechtsextremistischen Spektrum', 'Gesamtwert, keine automatische AfD-Zurechnung.'],
    ['STAT-BFV2025-XENOPHOBIC-VIOLENCE', 'BfV 2025: fremdenfeindliche rechtsextremistische Gewalttaten', 1046, 'Gewalttaten', 'BfV 2025 Lagezahlen', 'Fremdenfeindliche Gewalttaten', 'dokumente/hauptquellen/Analyse_Verfassungsschutzbericht_2025_Statistiken_AfD_Rechtsextremismus.md', 'Vollbericht 2025, Zielrichtungen rechtsextremistischer Gewalttaten', 'Direkter Berichtswert aus Vollbericht/OCR-Analyse.', 'Gewalt gegen migrantisch markierte Gruppen / Menschenwuerde', 'Kontextwert, keine automatische AfD-Zurechnung.'],
    ['STAT-BFV2025-ANTISEMITIC-RIGHT-CRIMES', 'BfV 2025: antisemitische rechtsextremistische Straftaten', 2821, 'Straftaten', 'BfV 2025 Lagezahlen', 'Antisemitische rechtsextremistische Straftaten', 'dokumente/hauptquellen/Analyse_Verfassungsschutzbericht_2025_Statistiken_AfD_Rechtsextremismus.md', 'Vollbericht 2025, Zielrichtungen rechtsextremistischer Straftaten', 'Direkter Berichtswert aus Vollbericht/OCR-Analyse.', 'Antisemitismus / Menschenwuerde', 'Kontextwert, keine automatische AfD-Zurechnung.'],
    ['STAT-BFV2025-RUS-POTENTIAL', 'BfV 2025: Reichsbuerger/Selbstverwalter Personenpotenzial', 26000, 'Personen', 'BfV 2025 Lagezahlen', 'Reichsbuerger und Selbstverwalter', 'dokumente/hauptquellen/Analyse_Verfassungsschutzbericht_2025_Statistiken_AfD_Rechtsextremismus.md', 'Vollbericht 2025, Reichsbuerger/Selbstverwalter Personenpotenzial', 'Direkter Berichtswert aus Vollbericht/OCR-Analyse.', 'Delegitimierung / Waffenaffinitaet / Kontextpotential', 'Kontextwert.'],
    ['STAT-BFV2025-RUS-VIOLENCE-ORIENTED', 'BfV 2025: gewaltorientierte Reichsbuerger/Selbstverwalter', 2600, 'Personen', 'BfV 2025 Lagezahlen', 'Gewaltorientierte Reichsbuerger und Selbstverwalter', 'dokumente/hauptquellen/Analyse_Verfassungsschutzbericht_2025_Statistiken_AfD_Rechtsextremismus.md', 'Vollbericht 2025, Reichsbuerger/Selbstverwalter Personenpotenzial', 'Direkter Berichtswert aus Vollbericht/OCR-Analyse.', 'Gewaltorientierung / Waffenaffinitaet', 'Kontextwert.'],
    ['STAT-BFV2025-LEFT-POTENTIAL', 'BfV 2025: Linksextremismuspotenzial gesamt', 42200, 'Personen', 'BfV 2025 Lagezahlen', 'Linksextremismuspotenzial', 'dokumente/hauptquellen/Analyse_Verfassungsschutzbericht_2025_Statistiken_AfD_Rechtsextremismus.md', 'Vollbericht 2025, Linksextremismuspotenzial nach Mehrfachabzug', 'Direkter Tabellenwert aus Vollbericht/OCR-Analyse.', 'Kontext politischer Gewalt und AfD als Angriffsziel', 'Kein AfD-Belastungswert.'],
    ['STAT-BFV2025-LEFT-VIOLENCE', 'BfV 2025: linksextremistische Gewalttaten', 856, 'Gewalttaten', 'BfV 2025 Lagezahlen', 'Linksextremistische Gewalttaten', 'dokumente/hauptquellen/Analyse_Verfassungsschutzbericht_2025_Statistiken_AfD_Rechtsextremismus.md', 'Vollbericht 2025, Linksextremistische Straf- und Gewalttaten', 'Direkter Berichtswert aus Vollbericht/OCR-Analyse.', 'Kontext Gewaltspirale / Angriffe auf politische Gegner', 'Kein AfD-Belastungswert.'],
    ['STAT-SECURITY-2025-CASES-TOTAL', 'Sicherheitsbehörden-Lagebericht 2025: verarbeitete Fälle', 411, 'Faelle', 'Sicherheitsbehörden / BfV', 'Gesamtfälle 2025', 'dokumente/vfs_rechtsextremismus/BfV_Lagebericht_Rechtsextremisten_in_Sicherheitsbehoerden_2025.pdf', 'BfV-Lagebericht Rechtsextremisten in Sicherheitsbehörden 2025, Kapitel 4', 'Amtliche Fallzahl aus dem BfV-Lagebericht 2025.', 'Kontextdaten Sicherheitsbehoerden / Rechtsextremismus', 'Erfasst Beschäftigte in Sicherheitsbehörden, keine automatische AfD-Zurechnung.'],
    ['STAT-SECURITY-2025-FEDERAL-INCREASE', 'Sicherheitsbehörden-Lagebericht 2025: Anstieg Bundessicherheitsbehörden', 6.9, 'Prozent', 'Sicherheitsbehörden / BfV', 'Bundesbehörden Veränderung', 'dokumente/vfs_rechtsextremismus/BfV_Lagebericht_Rechtsextremisten_in_Sicherheitsbehoerden_2025.pdf', 'BfV-Lagebericht Rechtsextremisten in Sicherheitsbehörden 2025, Kapitel 4', 'Amtliche Veränderungsangabe aus dem BfV-Lagebericht 2025.', 'Kontextdaten Sicherheitsbehoerden / Rechtsextremismus', 'Prozentwert ist Kontextdatenpunkt, keine AfD-Zurechnung.'],
    ['STAT-SECURITY-2025-STATE-INCREASE', 'Sicherheitsbehörden-Lagebericht 2025: Anstieg Landessicherheitsbehörden', 18.5, 'Prozent', 'Sicherheitsbehörden / BfV', 'Landesbehörden Veränderung', 'dokumente/vfs_rechtsextremismus/BfV_Lagebericht_Rechtsextremisten_in_Sicherheitsbehoerden_2025.pdf', 'BfV-Lagebericht Rechtsextremisten in Sicherheitsbehörden 2025, Kapitel 4', 'Amtliche Veränderungsangabe aus dem BfV-Lagebericht 2025.', 'Kontextdaten Sicherheitsbehoerden / Rechtsextremismus', 'Prozentwert ist Kontextdatenpunkt, keine AfD-Zurechnung.'],
  ];
  for (const [id, title, value, unit, theme, subtheme, source_path, finding_location, method, legal_relevance, limitations] of fixedOfficialStats) {
    manifest.push(manifestEntry({
      id, title, value, unit, theme, subtheme,
      source: source_path,
      source_type: 'Amtliche Statistik / lokale Primärquelle',
      source_path,
      finding_location,
      method,
      legal_relevance,
      article_21_field: 'Kontextdaten / Belegdichte / Potentialitaet',
      evidence_grade: 'A',
      status: 'geprueft',
      limitations,
    }));
  }

  for (const grade of ['A', 'B', 'C', 'D', 'E', 'F']) {
    manifest.push(manifestEntry({
      id: `STAT-FINDING-EVIDENCE-${grade}-001`,
      title: `Findings mit Beweisstufe ${grade}`,
      value: countBool(validatedFindings, row => row.beweistufe === grade),
      unit: 'Findings',
      theme: 'Beweisstärke',
      subtheme: `Finding-Stufe ${grade}`,
      source: 'daten/findings_art21.jsonl',
      source_type: 'Abgeleiteter Kennwert',
      source_path: 'daten/findings_art21.jsonl',
      finding_location: `Alle geprueften Findings mit beweisstufe=${grade}`,
      method: `Zaehlung aller validierten Findings mit Beweisstufe ${grade}.`,
      legal_relevance: 'Quellengewichtung, Beweisnaehe, Priorisierung der Subsumtion',
      article_21_field: 'Belegdichte / Zurechnung / Potentialitaet',
      limitations: 'Die Beweisstufe ist eine Quellen- und Befundgewichtung; sie ersetzt keine materielle Subsumtion.'
    }));
  }

  for (const grade of ['A', 'B', 'C', 'D', 'E', 'F']) {
    manifest.push(manifestEntry({
      id: `STAT-SOURCE-EVIDENCE-${grade}-001`,
      title: `Quellen mit Beweisstufe ${grade}`,
      value: countBool(inventory, row => row.beweisstärke === grade),
      unit: 'Quellen',
      theme: 'Quelleninventar',
      subtheme: `Quellen-Stufe ${grade}`,
      source: 'daten/source_inventory.jsonl',
      source_type: 'Quelleninventar / abgeleiteter Kennwert',
      source_path: 'daten/source_inventory.jsonl',
      finding_location: `Alle Quellen mit beweisstärke=${grade}`,
      method: `Zaehlung aller Quelleninventar-Eintraege mit Beweisstufe ${grade}.`,
      legal_relevance: 'Quellengewichtung, Beweisnaehe, Priorisierung der Quellenpruefung',
      article_21_field: 'Belegdichte / Nachweisbarkeit',
      limitations: 'Quellen-Beweisstufe beschreibt Belegnaehe und Nutzwert, nicht automatisch die materielle Schwere.'
    }));
  }

  const commonFindingSource = {
    source: 'daten/findings_art21.jsonl',
    sourceType: 'Abgeleiteter Kennwert aus Findings',
    sourcePath: 'daten/findings_art21.jsonl',
    status: 'geprueft',
    evidenceGrade: 'B',
  };
  pushDistribution(manifest, validatedFindings, {
    idPrefix: 'STAT-THEME', titlePrefix: 'Top-Thema', unit: 'Findings', theme: 'Themencluster',
    key: row => row.thema, limit: 12, findingLocation: 'Top-Auswertung Feld thema',
    method: 'Zaehlung validierter Findings pro Themencluster.', legalRelevance: 'Narrativverdichtung und Wiederholungsmuster',
    article21Field: 'Verfassungsfeindliche Zielrichtung / Planmaessigkeit / Menschenwuerde',
    limitations: 'Top-Themen sind aggregierte Kennzahlen und ersetzen keine Einzelfallpruefung.', ...commonFindingSource,
  });
  pushDistribution(manifest, validatedFindings, {
    idPrefix: 'STAT-BVERFG-FIELD', titlePrefix: 'BVerfG-Prueffeld', unit: 'Findings', theme: 'Art.-21-Prueffelder',
    key: row => row.bverfg_prueffeld, limit: 12, findingLocation: 'Top-Auswertung Feld bverfg_prueffeld',
    method: 'Zaehlung validierter Findings pro BVerfG-Prueffeld.', legalRelevance: 'Subsumtionsstruktur und Prueffelddichte',
    article21Field: 'Art. 21 Abs. 2 GG / BVerfG-Prueffelder',
    limitations: 'Die Feldzuordnung ist eine strukturierte Arbeitsklassifikation und muss mit Einzelfundstellen geprueft werden.', ...commonFindingSource,
  });
  pushDistribution(manifest, validatedFindings, {
    idPrefix: 'STAT-ART21-ELEMENT', titlePrefix: 'Art.-21-Element', unit: 'Findings', theme: 'Art.-21-Elemente',
    key: row => row.art_21_element, limit: 12, findingLocation: 'Top-Auswertung Feld art_21_element',
    method: 'Zaehlung validierter Findings pro Art.-21-Element.', legalRelevance: 'Subsumtionsstruktur und Tatbestandsnaehe',
    article21Field: 'Art. 21 Abs. 2 GG / Tatbestandselemente',
    limitations: 'Die Zuordnung verdichtet Befunde, ersetzt aber keine juristische Einzelpruefung.', ...commonFindingSource,
  });
  pushDistribution(manifest, validatedFindings, {
    idPrefix: 'STAT-QUELLENART', titlePrefix: 'Quellenart', unit: 'Findings', theme: 'Quellenarten',
    key: row => row.quellenart, limit: 12, findingLocation: 'Top-Auswertung Feld quellenart',
    method: 'Zaehlung validierter Findings pro Quellenart.', legalRelevance: 'Quellengewichtung und Beweisnaehe',
    article21Field: 'Belegdichte / Nachweisbarkeit / Zurechnung',
    limitations: 'Quellenart ist eine Klassifikation des Befunddatensatzes; die Originalquelle bleibt massgeblich.', ...commonFindingSource,
  });
  pushDistribution(manifest, validatedFindings, {
    idPrefix: 'STAT-AKTEUR', titlePrefix: 'Top-Akteur', unit: 'Findings', theme: 'Akteure',
    key: row => row.akteur, limit: 15, findingLocation: 'Top-Auswertung Feld akteur',
    method: 'Zaehlung validierter Findings pro Akteur.', legalRelevance: 'Zurechnung, Wiederholungsmuster, Funktions- und Anhaengerverhalten',
    article21Field: 'Zurechnung / Verhalten von Anhaengern / Planmaessigkeit',
    limitations: 'Namensvarianten und gleichnamige Personen koennen Aggregationen beeinflussen; Einzelfundstellen pruefen.', ...commonFindingSource,
  });
  pushDistribution(manifest, validatedFindings, {
    idPrefix: 'STAT-AFD-ZURECHNUNG', titlePrefix: 'AfD-Zurechnung', unit: 'Findings', theme: 'Zurechnung',
    key: row => row.afd_zurechnung, limit: 8, findingLocation: 'Auswertung Feld afd_zurechnung',
    method: 'Zaehlung validierter Findings nach Zurechnungskategorie.', legalRelevance: 'Parteizurechnung und Verhalten von Anhaengern',
    article21Field: 'Zurechnung / Verhalten von Anhaengern',
    limitations: 'Zurechnungskategorien sind Arbeitsklassifikationen und muessen mit Kontext belegt werden.', ...commonFindingSource,
  });
  pushDistribution(manifest, validatedFindings, {
    idPrefix: 'STAT-AKTEURSEBENE', titlePrefix: 'Akteursebene', unit: 'Findings', theme: 'Zurechnung',
    key: row => row.akteursebene, limit: 8, findingLocation: 'Auswertung Feld akteursebene',
    method: 'Zaehlung validierter Findings nach Akteursebene.', legalRelevance: 'Funktionstraeger-, Mitglieder- und Umfeldzurechnung',
    article21Field: 'Zurechnung / Planmaessigkeit',
    limitations: 'Akteursebene ist eine Strukturklassifikation; die Originalquelle entscheidet ueber Belastbarkeit.', ...commonFindingSource,
  });
  pushDistribution(manifest, validatedFindings, {
    idPrefix: 'STAT-BUNDESLAND', titlePrefix: 'Bundesland', unit: 'Findings', theme: 'Bundeslaender',
    key: row => row.bundesland, limit: 16, findingLocation: 'Auswertung Feld bundesland',
    method: 'Zaehlung validierter Findings nach Bundesland.', legalRelevance: 'Regionale Verdichtung, Landesverbandmuster, Potentialitaet',
    article21Field: 'Potentialitaet / Zurechnung / Planmaessigkeit',
    limitations: 'Viele Findings enthalten kein Bundesland; Werte zeigen nur explizit codierte Regionalbezuege.', ...commonFindingSource,
  });
  pushDistribution(manifest, validatedFindings, {
    idPrefix: 'STAT-GRANULARITY', titlePrefix: 'Granularitaet', unit: 'Findings', theme: 'Datenstruktur',
    key: row => row.granularity, limit: 8, findingLocation: 'Auswertung Feld granularity',
    method: 'Zaehlung validierter Findings nach Granularitaet.', legalRelevance: 'Trennung von Einzelzitaten, Aggregaten und Registerbefunden',
    article21Field: 'Belegdichte / Methodik',
    limitations: 'Granularitaet beschreibt die Datenform, nicht den materiellen Beweiswert.', ...commonFindingSource,
  });
  pushDistribution(manifest, validatedFindings, {
    idPrefix: 'STAT-UNSICHERHEIT', titlePrefix: 'Unsicherheit', unit: 'Findings', theme: 'Datenqualitaet',
    key: row => row.unsicherheit, limit: 8, findingLocation: 'Auswertung Feld unsicherheit',
    method: 'Zaehlung validierter Findings nach Unsicherheitsmarkierung.', legalRelevance: 'Pruefbedarf und Belastbarkeit',
    article21Field: 'Belegdichte / Methodik',
    limitations: 'Unsicherheitsmarkierungen sind Hilfen zur Priorisierung weiterer Pruefung.', ...commonFindingSource,
  });

  const commonInventorySource = {
    source: 'daten/source_inventory.jsonl',
    sourceType: 'Abgeleiteter Kennwert aus Quelleninventar',
    sourcePath: 'daten/source_inventory.jsonl',
    status: 'geprueft',
    evidenceGrade: 'B',
  };
  pushDistribution(manifest, inventory, {
    idPrefix: 'STAT-SOURCE-TYPE', titlePrefix: 'Quellentyp', unit: 'Quellen', theme: 'Quelleninventar',
    key: row => row.quellentyp, limit: 14, findingLocation: 'Auswertung Feld quellentyp',
    method: 'Zaehlung aller Quelleninventar-Eintraege nach Quellentyp.', legalRelevance: 'Quellenstruktur und Belegnaehe',
    article21Field: 'Belegdichte / Nachweisbarkeit',
    limitations: 'Quellentypen sind Inventarkategorien; Beweiswert folgt aus Originalquelle und Kontext.', ...commonInventorySource,
  });
  pushDistribution(manifest, existingSources, {
    idPrefix: 'STAT-SOURCE-PUBLISHER', titlePrefix: 'Herausgeber', unit: 'Quellen', theme: 'Quelleninventar',
    key: row => row.herausgeber, limit: 14, findingLocation: 'Auswertung Feld herausgeber fuer vorhandene Quellen',
    method: 'Zaehlung vorhandener Quellen nach Herausgeber.', legalRelevance: 'Provenienz, Amtlichkeit, Quellennaehe',
    article21Field: 'Belegdichte / Nachweisbarkeit / Zurechnung',
    limitations: 'Herausgeberangaben sind Inventardaten und koennen normalisierte Sammelkategorien enthalten.', ...commonInventorySource,
  });
  pushDistribution(manifest, inventory, {
    idPrefix: 'STAT-SOURCE-FORMAT', titlePrefix: 'Quellenformat', unit: 'Quellen', theme: 'Quelleninventar',
    key: row => row.format, limit: 10, findingLocation: 'Auswertung Feld format',
    method: 'Zaehlung aller Quelleninventar-Eintraege nach Dateiformat.', legalRelevance: 'Archivstruktur und technische Nachpruefbarkeit',
    article21Field: 'Belegdichte / Nachweisbarkeit',
    limitations: 'Formatzahlen sagen nichts ueber materiellen Beweiswert aus.', ...commonInventorySource,
  });
  pushDistribution(manifest, inventory, {
    idPrefix: 'STAT-SOURCE-THEME', titlePrefix: 'Quellenthemenbereich', unit: 'Quellen', theme: 'Quelleninventar',
    key: row => row.themenbereich, limit: 14, findingLocation: 'Auswertung Feld themenbereich',
    method: 'Zaehlung aller Quelleninventar-Eintraege nach Themenbereich.', legalRelevance: 'Beleglandkarte und thematische Quellenabdeckung',
    article21Field: 'Belegdichte / Nachweisbarkeit / Prueffeldbreite',
    limitations: 'Themenbereiche sind Inventarkategorien und koennen breite Sammelklassen enthalten.', ...commonInventorySource,
  });

  const ids = new Set();
  for (const entry of manifest) {
    if (ids.has(entry.id)) throw new Error(`Duplicate statistic id: ${entry.id}`);
    ids.add(entry.id);
  }

  await fs.writeFile(outPath, JSON.stringify(manifest, null, 2) + '\n', 'utf8');
  console.log(`Wrote ${manifest.length} statistics to ${path.relative(repoRoot, outPath)}`);
}

await main();
