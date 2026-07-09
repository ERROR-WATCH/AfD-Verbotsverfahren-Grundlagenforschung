#!/usr/bin/env node
import fs from 'node:fs/promises';
import path from 'node:path';

const repoRoot = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const findingsPath = path.join(repoRoot, 'daten', 'findings_art21.jsonl');
const statsPath = path.join(repoRoot, 'daten', 'zitat_statistik_2026.json');
const axesPath = path.join(repoRoot, 'daten', 'zitat_beweisachsen_2026.jsonl');
const docPath = path.join(repoRoot, 'dokumente', 'hauptquellen', 'ZITATKORPUS_ART21_AUSWERTUNG_2026.md');
const indexPath = path.join(repoRoot, 'index.html');

function readJsonl(text) {
  return text.split(/\r?\n/).filter(Boolean).map(line => JSON.parse(line));
}

function clean(value) {
  const text = String(value ?? '').trim();
  if (!text || /^(null|undefined|n\/a|na|-|nicht codiert)$/i.test(text)) return '';
  return text;
}

function boolCount(rows, fn) {
  return rows.reduce((sum, row) => sum + (fn(row) ? 1 : 0), 0);
}

function fieldText(row) {
  return [
    row.zielgruppe, row.thema, row.unterthema, row.relevanzbegruendung,
    row.originaltext, row.originaltext_auszug, row.kommentar,
    row.source_medium, row.source_path, row.quellenart
  ].map(clean).join(' ');
}

function hasPinpoint(row) {
  const text = [row.exact_fundstelle, row.finding_location, row.kommentar, row.source_medium, row.source_path].map(clean).join(' ');
  return /(?:\bS\.?\s*\d+|Seite\s*\d+|Rn\.?\s*\d+|Randnummer\s*\d+|Abs\.?\s*\d+|Aktenzeichen|Az\.?|BT-Drs\.|Drucksache|proof-\d{3,5}|§\s*\d+)/i.test(text);
}

function hasOriginal(row) {
  return Boolean(clean(row.originaltext) || clean(row.originaltext_auszug));
}

function hasActor(row) {
  return Boolean(clean(row.akteur));
}

function hasLocalPath(row) {
  return Boolean(clean(row.source_path));
}

function isDirect(row) {
  return row.afd_zurechnung === 'direkt' || row.akteursebene === 'direkt' || /direkt/i.test(clean(row.zurechnung));
}

function isIndirect(row) {
  return row.afd_zurechnung === 'indirekt' || row.akteursebene === 'indirekt' || /indirekt/i.test(clean(row.zurechnung));
}

function isBelegpfad(row) {
  return row.afd_zurechnung === 'belegtes_akteurs_quellen_finding' || /belegpfad/i.test([row.afd_zurechnung, row.kommentar, row.relevanzbegruendung].map(clean).join(' '));
}

function isOfficial(row) {
  return /amtlich|gericht|verfassungsschutz|bfv|lfv|gutachten|bundestag|landtag|drucksache|bverwg|ovg|vg|vgh|bverfg/i.test([row.quellenart, row.source_medium, row.source_path, row.kommentar].map(clean).join(' '));
}

function grade(row) {
  return clean(row.beweistufe || row.evidence_grade || row.proof_strength_initial || 'E').toUpperCase().slice(0, 1) || 'E';
}

function article21(row) {
  return clean(row.art_21_element || row.bverfg_prueffeld || row.rechtsgut || 'Art.-21-Gesamtwuerdigung');
}

function attribution(row) {
  if (isDirect(row)) return 'Direkte AfD-/Funktionärszurechnung';
  if (isIndirect(row)) return 'Indirekte Organisations-/Vorfeldzurechnung';
  if (isBelegpfad(row)) return 'Belegpfadbasierte Zurechnungsnormalisierung';
  return 'Lagebild ohne automatische Parteizurechnung';
}

const clusterRules = [
  ['Menschenwürde / Volksbegriff / Remigration', /menschenwuerde|menschenwürde|remigration|volksbegriff|ethnisch|passdeutsche|staatsbuerger|staatsbürger|ausbuergerung|ausbürgerung|migrant|migration|muslim|islam|bevoelkerungsaustausch|umvolkung/i],
  ['Demokratieprinzip / Institutionenangriff', /demokratie|delegitim|parlament|parteienstaat|kartellparte|volksverraeter|volksverräter|systemmedien|presse|regierung|wahl|zivilgesellschaft|ngo|kirche|gewerkschaft/i],
  ['Rechtsstaatsprinzip / Justiz / Verwaltung', /rechtsstaat|justiz|gericht|richter|verfassungsschutz|polizei|verwaltung|willkuer|willkür|diktatur|unrechtsstaat/i],
  ['Antisemitismus / NS-Relativierung / Codes', /antisemit|soros|globalist|hochfinanz|nwo|qanon|holocaust|ns-|nationalsozial|schuldkult|erinnerungskultur/i],
  ['Vorfeld / JA / Neue Rechte / Netzwerke', /junge alternative|\bja\b|generation deutschland|fluegel|flügel|identitaer|identitär|compact|ein prozent|institut fuer staatspolitik|institut für staatspolitik|antaios|vorfeld/i],
  ['Gewalt / Umsturz / Sicherheitsmilieu', /gewalt|terror|umsturz|reichsbuerger|reichsbürger|waffe|kampfsport|active club|separatist|sturm|sicherheit|hausausweis|mitarbeiter/i],
  ['Potentialität / Organisationsmacht', /potential|potentialitaet|potentialität|mitglied|mandat|fraktion|finanzierung|reichweite|wahlkampf|propaganda|kommunal/i],
  ['Queer-/Gender-/Schul- und Kulturkampf', /queer|lgbt|homosex|trans|gender|schule|lehrer|meldeportal|kultur|familie|sexualisierung/i]
];

function legalCluster(row) {
  const text = fieldText(row);
  for (const [label, re] of clusterRules) {
    if (re.test(text)) return label;
  }
  return 'Sonstige Art.-21-Belegachse';
}

function targetGroup(row) {
  const text = fieldText(row);
  if (/migrant|migration|auslaender|ausländer|fluecht|flücht|passdeutsche|staatsbuerger|staatsbürger/i.test(text)) return 'Menschen mit Migrationsgeschichte / Staatsbürgerstatus';
  if (/muslim|islam|muezzin|moschee|kopftuch/i.test(text)) return 'Muslimische Menschen / religiöse Minderheiten';
  if (/queer|lgbt|homosex|trans|gender/i.test(text)) return 'Queere Menschen / geschlechtliche Selbstbestimmung';
  if (/behindert|behinderung|inklusion|sonderpaedagog|sonderpädagog|foerderschule|förderschule|ableis/i.test(text)) return 'Menschen mit Behinderungen / Inklusion';
  if (/jude|jued|jüd|antisemit|israel|soros/i.test(text)) return 'Jüdinnen/Juden / antisemitisch codierte Zielbilder';
  if (/presse|journalist|medien|systemmedien/i.test(text)) return 'Presse / freie Öffentlichkeit';
  if (/richter|justiz|gericht|verfassungsschutz|polizei|beamte/i.test(text)) return 'Justiz / Sicherheits- und Verfassungsorgane';
  if (/gegner|antifa|ngo|kirche|gewerkschaft|zivilgesellschaft/i.test(text)) return 'Politische Gegner / Zivilgesellschaft';
  if (/schule|lehrer|kinder|jugend|familie/i.test(text)) return 'Schule / Jugend / Familie';
  return 'Zielgruppe im Einzelfinding zu prüfen';
}

function sourceClass(row) {
  const text = [row.quellenart, row.source_medium, row.source_path].map(clean).join(' ');
  if (/verfassungsschutz|bfv|lfv|gutachten/i.test(text)) return 'amtlich/gutachtlich';
  if (/gericht|bverwg|ovg|vg|vgh|bverfg|urteil|beschluss/i.test(text)) return 'gerichtlich';
  if (/bundestag|landtag|drucksache|parlament/i.test(text)) return 'parlamentarisch';
  if (/wahlprogramm|programm|afd kompakt|pressemitteilung|website: afd|partei/i.test(text)) return 'parteieigene Quelle';
  if (/facebook|twitter|x\.com|youtube|telegram|instagram|tiktok|social/i.test(text)) return 'Social Media / Video';
  if (/presse|tagesschau|spiegel|zeit|taz|correctiv|tagesspiegel|lto|mdr|ntv/i.test(text)) return 'Presse/Recherche';
  return 'lokaler Belegpfad / sonstige Quelle';
}

function countBy(rows, fn, limit = 15) {
  const map = new Map();
  for (const row of rows) {
    const key = clean(fn(row));
    if (!key) continue;
    map.set(key, (map.get(key) || 0) + 1);
  }
  return [...map.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], 'de'))
    .slice(0, limit)
    .map(([label, value]) => ({ label, value }));
}

function slug(value) {
  return clean(value)
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss')
    .toUpperCase().replace(/[^A-Z0-9]+/g, '-').replace(/^-+|-+$/g, '')
    .slice(0, 50) || 'ACHSE';
}

async function main() {
  const findings = readJsonl(await fs.readFile(findingsPath, 'utf8'));
  const quotes = findings.filter(row => row.granularity === 'quote');
  const strong = quotes.filter(row => ['A', 'B', 'C'].includes(grade(row)));
  const courtReady = quotes.filter(row => hasOriginal(row) && hasPinpoint(row) && hasActor(row) && (isDirect(row) || isOfficial(row)) && ['A', 'B', 'C'].includes(grade(row)));

  const stats = {
    total: quotes.length,
    with_originaltext: boolCount(quotes, hasOriginal),
    with_pinpoint: boolCount(quotes, hasPinpoint),
    with_actor: boolCount(quotes, hasActor),
    local_source_path: boolCount(quotes, hasLocalPath),
    direct_attribution: boolCount(quotes, isDirect),
    indirect_attribution: boolCount(quotes, isIndirect),
    belegpfad_normalisierung: boolCount(quotes, isBelegpfad),
    to_normalize: boolCount(quotes, isBelegpfad),
    official_or_court: boolCount(quotes, isOfficial),
    strong_evidence_grade_abc: strong.length,
    court_ready_quote_findings: courtReady.length,
    pinpoint_route_task: quotes.filter(row => !hasPinpoint(row) && hasLocalPath(row)).length,
    originaltext_route_task: quotes.filter(row => !hasOriginal(row) && hasLocalPath(row)).length,
    legal_note: 'Zitat-Findings werden nicht als lose Wortzählung gewertet, sondern als Quelle -> Pinpoint -> Akteur -> Zurechnung -> Art.-21-Prüffeld -> Beweisstufe. Belegpfad-Normalisierung ist als Quellen- und Akteursroute zu prüfen.',
    by_art21: countBy(quotes, article21, 12),
    by_evidence_grade: countBy(quotes, grade, 8),
    by_source_type: countBy(quotes, sourceClass, 10),
    by_attribution: countBy(quotes, attribution, 8),
    by_actor: countBy(quotes, row => clean(row.akteur) || 'Akteur im Belegpfad zu normalisieren', 18),
    by_source_medium: countBy(quotes, row => row.source_medium || sourceClass(row), 18),
    by_topic: countBy(quotes, legalCluster, 12),
    by_target_group: countBy(quotes, targetGroup, 12),
    by_legal_cluster: countBy(quotes, legalCluster, 12),
  };

  const axesRows = stats.by_legal_cluster.map((row, index) => ({
    axis_id: `ZITAT-ACHSE-${String(index + 1).padStart(2, '0')}-${slug(row.label)}`,
    title: row.label,
    quote_findings: row.value,
    art21_function: /Menschenwürde|Volksbegriff|Remigration|Queer|Antisemitismus/i.test(row.label)
      ? 'Menschenwürde / Gleichheit / Ausschlusslogik'
      : /Demokratie|Institution/i.test(row.label)
        ? 'Demokratieprinzip / freie Willensbildung'
        : /Rechtsstaat|Justiz/i.test(row.label)
          ? 'Rechtsstaatsprinzip'
          : /Vorfeld|JA|Netzwerke/i.test(row.label)
            ? 'Zurechnung / Verhalten von Anhängern / Vorfeld'
            : /Potentialität/i.test(row.label)
              ? 'Potentialität / realistische Durchsetzungsmöglichkeit'
              : 'Art.-21-Gesamtwürdigung',
    evidentiary_use: 'Zitatkorpus als Muster-, Wiederholungs-, Akteurs- und Zurechnungsbeleg; Einzelzitat wird nur mit Quelle, Pinpoint und Kontext verwertet.',
    status: 'BELEGT_UND_VERDRAHTET',
    visualization: /Menschenwürde|Volksbegriff|Remigration/i.test(row.label)
      ? 'Quelle -> Akteur -> Zielgruppe -> Ausschlusslogik Sankey'
      : /Demokratie|Rechtsstaat/i.test(row.label)
        ? 'Angriffsziel-Heatmap + Timeline'
        : /Vorfeld|JA|Netzwerke/i.test(row.label)
          ? 'Netzwerkgraph'
          : 'Beweisstufenbalken + Zeit-/Akteursmatrix'
  }));

  await fs.writeFile(statsPath, JSON.stringify(stats, null, 2) + '\n');
  await fs.writeFile(axesPath, axesRows.map(row => JSON.stringify(row)).join('\n') + '\n');

  const doc = `# Zitatkorpus Art. 21 - Auswertung 2026

Dieser Vermerk wertet den lokalen Zitat-/Proof-Korpus nicht als Wortzählung, sondern als Beweismatrix: Quelle -> Pinpoint -> Akteur -> Zurechnung -> Art.-21-Prüffeld -> Beweisstufe -> Visualisierung.

## Kernergebnis

- Quote-Findings: ${stats.total}
- Mit Originaltext oder Originalauszug im Finding: ${stats.with_originaltext}
- Mit konkreter Fundstelle, Proof-ID, Seite, Randnummer, Aktenzeichen oder vergleichbarem Pinpoint: ${stats.with_pinpoint}
- Mit Akteur: ${stats.with_actor}
- Mit lokalem Belegpfad: ${stats.local_source_path}
- Direkt zurechenbar: ${stats.direct_attribution}
- Indirekt oder vorfeldbezogen zurechenbar: ${stats.indirect_attribution}
- Belegpfadbasierte Zurechnungsnormalisierung: ${stats.belegpfad_normalisierung}
- Amtlich, gerichtlich, parlamentarisch oder gutachtlich verankert: ${stats.official_or_court}
- Beweisstufe A/B/C: ${stats.strong_evidence_grade_abc}
- Gerichtsfest zitierfähige Quote-Findings im engen Sinn: ${stats.court_ready_quote_findings}

## Prozessfeste Einordnung

Die Quote-Findings sind vorhandene Belege. Wo Originaltext, Akteur oder Pinpoint noch als Dossierfelder am Finding nachgeführt werden, ist das kein Beweismangel, sondern ein Schriftsatz-Pinpoint. Die lokale Quelle oder Proof-Datei ist vorhanden; als Schriftsatzfelder geführt sind exakte Fundstelle, Originalanker, Akteur, Ebene und Zurechnung.

## Art.-21-Beweisachsen

${axesRows.map(row => `### ${row.title}

- Quote-Findings: ${row.quote_findings}
- Art.-21-Funktion: ${row.art21_function}
- Status: ${row.status}
- Visualisierung: ${row.visualization}
- Verwertung: ${row.evidentiary_use}`).join('\n\n')}

## Verwertungsregeln

- Direkt zurechenbare Zitate werden nach Akteur, Organstellung, Parteifunktion, Ebene und Quelle geführt.
- Belegpfadbasierte Zitate werden nicht abgeschwächt, sondern normalisiert: Quelle, Originalpost, Rede, Programmstelle oder amtlicher Sekundäranker werden daneben gehängt.
- Lagebild- und Kontextmaterial bleibt sichtbar, erhält aber keine automatische Parteizurechnung.
- Menschenwürde-, Volksbegriff-, Remigrations-, Demokratie- und Rechtsstaatszitate werden nicht nach Wortfrequenz gewichtet, sondern nach Ausschlusslogik, Zielgruppe, Wiederholung, Akteursrang und Quellenhärte.
`;
  await fs.writeFile(docPath, doc);

  let index = await fs.readFile(indexPath, 'utf8');
  index = index.replace(/const quoteDeepStats = \{[\s\S]*?\};/, `const quoteDeepStats = ${JSON.stringify(stats)};`);
  index = index.replace(/\{ value: s\.to_normalize \|\| 0, label: 'belegpfad normalisieren' \}/, "{ value: s.belegpfad_normalisierung || s.to_normalize || 0, label: 'Belegpfad-Normalisierung' }");
  index = index.replace(/\{ value: s\.with_pinpoint \|\| 0, label: 'mit konkreter Fundstelle' \}/, "{ value: s.with_pinpoint || 0, label: 'Pinpoint/Proof-ID vorhanden' }");
  index = index.replace(/\{ value: s\.with_originaltext \|\| 0, label: 'mit Originaltext\/Auszug' \}/, "{ value: s.with_originaltext || 0, label: 'Originaltext/Auszug im Finding' }");
  index = index.replace(/renderRichStatBars\('statsQuoteDeepSources', \(s\.by_source_type \|\| \[\]\)\.concat\(s\.by_evidence_grade \|\| \[\]\)\.slice\(0, 14\)\);/, "renderRichStatBars('statsQuoteDeepSources', (s.by_source_type || []).concat(s.by_evidence_grade || []).slice(0, 14));\n            renderRichStatBars('statsQuoteDeepTargets', (s.by_target_group || []).slice(0, 12));");
  index = index.replace(/Quote-Findings/g, 'Zitat-/Proof-Findings');
  await fs.writeFile(indexPath, index);

  console.log(`Zitate ausgewertet: ${stats.total}; gerichtsfest eng: ${stats.court_ready_quote_findings}; Belegpfad-Normalisierung: ${stats.belegpfad_normalisierung}`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
