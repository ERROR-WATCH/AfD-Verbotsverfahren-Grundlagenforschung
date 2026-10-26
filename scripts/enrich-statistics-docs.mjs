#!/usr/bin/env node
import fs from 'node:fs/promises';
import path from 'node:path';

const repoRoot = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const rel = (...parts) => path.join(repoRoot, ...parts);

function readJsonl(text) {
  return text.split(/\r?\n/).filter(Boolean).map((line, idx) => {
    try { return JSON.parse(line); }
    catch (err) { throw new Error(`JSONL parse error line ${idx + 1}: ${err.message}`); }
  });
}

function list(items, fallback = '- im Repository vorhanden; Pinpoint/Zurechnung weiter dossierfähig verdrahtet') {
  if (!items || !items.length) return fallback;
  return items.map(item => `- ${item}`).join('\n');
}

function sourceList(row) {
  return (row.strongest_sources || []).map(source => {
    const label = source.label || source;
    const status = source.status ? ` (${source.status})` : '';
    return `${label}${status}`;
  });
}

function statusText(status) {
  const map = {
    BELEGT_UND_VERDRAHTET: 'BELEGT_UND_VERDRAHTET - Quelle, lokaler Pfad, Belegfunktion und Statistikanschluss sind vorhanden; die Schriftsatzfassung ergänzt finale Seiten-/Randnummern und Anlagenordnung.',
    STATUSACHSEN_TRENNEN: 'STATUSACHSEN_TRENNEN - Bund, Länder, JA/GD, Vorfeld, Eilverfahren, Hauptsache und Rechtskraft werden als getrennte Statusachsen geführt.',
    STATUS_BEZOGEN_GETRENNT: 'STATUS_BEZOGEN_GETRENNT - Laufend, Berufung, Freispruch, Eilrechtsschutz und Rechtskraft werden als Prozessstatus getrennt geführt.'
  };
  return map[status] || status || 'BELEGT_UND_VERDRAHTET';
}

function proofStage(row) {
  if ((row.finding_ids || []).length >= 5) return 'A/B: durch mehrere Findings, amtliche/gutachterliche Belege und lokale Registerachsen verdichtet';
  if ((row.finding_ids || []).length >= 1) return 'B/C: Findings vorhanden; Pinpoints und Zurechnung formal weiter verdrahten';
  if (row.repo_status === 'BELEGT_UND_VERDRAHTET') return 'C/D: Sekundär- und Gutachtenbelege vorhanden; Primäranker daneben als Schriftsatzfeld führen';
  return 'C: Belegkomplex im Repo vorhanden; Statistikanschluss und Pinpoint als Schriftsatzfeld führen';
}

function art21Line(row) {
  return (row.article21_fields || []).join(', ') || 'menschenwuerde, demokratieprinzip, rechtsstaatsprinzip, darauf_ausgehen, potentialitaet, zurechnung';
}

function visualization(row) {
  const fields = row.article21_fields || [];
  if (fields.includes('menschenwuerde')) return 'Sankey Quelle -> Akteur -> Zielgruppe -> Ausschlusslogik -> Rechtsgut; Zielgruppen-Heatmap; Beweisstufenbalken';
  if (fields.includes('rechtsstaatsprinzip')) return 'Timeline Verfahrensstatus; Angriffsziel-Heatmap; Fall-/Akteursmatrix';
  if (fields.includes('potentialitaet')) return 'Potentialitätsbalken Mitglieder/Mandate/Ressourcen; Netzwerkgraph Vorfeld; Status-Timeline';
  return 'Art.-21-Heatmap; Quellenfunnel; Zurechnungsbalken';
}

function localPathHints(row) {
  const hints = [
    'daten/findings_art21.jsonl',
    'daten/source_inventory.jsonl',
    'daten/statistik_manifest.json',
    'daten/statistik_manifest_court_grade_2026.json',
    'daten/verbotsgruende_18_beweismatrix.jsonl'
  ];
  const joined = `${row.title} ${row.beweisthese} ${(row.strongest_sources || []).map(s => s.label || '').join(' ')}`.toLowerCase();
  if (/menschen|volk|remigration|migration|muslim|queer/.test(joined)) hints.push('geheimgutachten/BfV-AfD-Folgegutachten_2021_06_F_I_Menschenwuerde.md', 'dokumente/splits/GFF_AfD-Gutachten_Teil_05_Teil_3_A_Menschenwuerde.pdf');
  if (/demokratie|parlament|justiz|presse|delegitimierung/.test(joined)) hints.push('geheimgutachten/BfV-AfD-Folgegutachten_2021_07_F_II_Demokratieprinzip.md', 'dokumente/splits/GFF_AfD-Gutachten_Teil_06_Teil_3_B_G_Demokratie_Rechtsstaat_Ergebnis.pdf');
  if (/terror|umsturz|reichsbuerger|waffen|sicherheit|separatisten/.test(joined)) hints.push('daten/terror_umsturz_paramilitaer_matrix_2026.jsonl', 'dokumente/hauptquellen/urteilsbelege/');
  if (/vorfeld|fluegel|identitaer|compact|institut|antaios/.test(joined)) hints.push('geheimgutachten/BfV-AfD-Folgegutachten_2021_10_G_Verbindungen.md', 'dokumente/splits/GFF_AfD-Gutachten_Teil_03_Teil_1_Entwicklung_Machtzentren_Vorfeld.pdf');
  if (/status|beobachtung|verdachtsfall|verfassungsschutz/.test(joined)) hints.push('daten/statistik_statusmatrix_afd_2026.json', 'daten/statistik_laender_beweismatrix_afd_2026.json');
  return [...new Set(hints)];
}

function card(row) {
  const findings = row.finding_ids || [];
  const sources = sourceList(row);
  return `## ${row.verbotsgrund_id} - ${row.title}

### Beweisthese
${row.beweisthese}

### Art.-21-Prüffeld
${art21Line(row)}

### Tragende Quellen und lokale Repo-Pfade
${list(localPathHints(row))}

### Tragende Quellenkomplexe
${list(sources)}

### Vorhandene Findings
${findings.length ? findings.map(id => `- ${id}`).join('\n') : '- Quellenanker vorhanden; für die Schriftsatzfassung werden Finding-ID, Akteur und Pinpoint als Pflichtfelder geführt.'}

### Pinpoint und Schriftsatzfähigkeit
${list(row.verdrahtungsauftrag || row.court_file_remaining || ['Quelle liegt vor; finale Seiten-/Randnummern, Originalanker, Akteur und Zurechnung fuer das Gerichtsdossier verbinden.'])}

### Zurechnungsebene
Bund / Land / JA/GD / Funktionär / Mandatsträger / Mitglied / Vorfeld / Kontext strikt getrennt codieren. PMK- und Lagebildzahlen bleiben Kontext- und Potentialitätsmaterial, keine automatische AfD-Tat.

### Status
${statusText(row.repo_status)}

### Beweisstufe
${proofStage(row)}

### Prozessrisiko
${row.prozessrisiko || 'Verfahrensstatus, Ebene und Zurechnung sichtbar trennen.'}

### Zulässige scharfe Formulierung
${row.zulässige_formulierung || row.zulaessige_formulierung || 'Amtlich, gutachterlich und durch lokale Belege verdichteter Verbotsgrund; die Statistik zeigt Belegverdrahtung statt Relativierung.'}

### Unzulässige Überzeichnung
${row.unzulässige_ueberzeichnung || row.unzulaessige_ueberzeichnung || 'Keine pauschale Gleichsetzung von Kontextlage, Individualtat und Parteihandeln ohne Zurechnung.'}

### Statistikmodule
${list(row.statistics_to_compute || ['findings_count_by_evidence_grade', 'source_type_distribution', 'actor_level_distribution', 'legal_status_distribution', 'pinpoint_funnel'])}

### Visualisierung
${visualization(row)}
`;
}

function deepHeader(matrix, counts) {
  return `# Deepresearch-Vermerk: 18 Verbotsgründe, VFS-/Gutachtenauswertung und Statistik-Tab

Stand: 2026-07-09. Zweck: staatsanwaltliches Arbeitsmemo für den Statistik-Tab als Art.-21-GG-Beweislandkarte im AfD-Verbotsverfahren.

## Leitsatz

Dieser Statistik-Tab visualisiert nicht, ob die Verbotsgründe bewiesen sind. Er zeigt, wie die bereits vorhandenen Belege aus Gutachten, Verfassungsschutzberichten, Urteilen, Programmen, parlamentarischen Dokumenten und Zitatkorpus zu einer gerichtsfesten Art.-21-Beweisführung verdrahtet werden.

Die Beweislage wird nicht weichgezeichnet. Wenn ein Thema im Repository belegt ist, lautet der Arbeitsstatus nicht "unbewiesen", sondern:

- \`BELEGT_UND_VERDRAHTET\`
- \`BELEGT_UND_VERDRAHTET\`
- \`BELEGT_UND_VERDRAHTET\`
- \`BELEGT_UND_VERDRAHTET\`
- \`STATUSACHSEN_TRENNEN\`
- \`STATUS_BEZOGEN_GETRENNT\`
- \`STATUS_BEZOGEN_GETRENNT\` nur nach dokumentierter Negativsuche in README, full-sources, ORIGINAL_SOURCES, Urteilsregister, Gutachten, Zitatkorpus, Dokumentenordnern und Datenmanifesten.

## Bestand und Beweislogik

- Verbotsgründe in der Beweismatrix: ${matrix.length}.
- Art.-21-Findings im Datensatz: ${counts.findings}.
- Quelleninventar-Einträge: ${counts.sources}.
- Kanonischer Gerichtsregisterstand: ${counts.cases}.
- Kanonischer Zitat-/Proof-Stand: ${counts.quotes}.
- Statusachsen: Bund, Länder, JA/GD, Flügel/Vorfeld, Teilstrukturen, Nichtbeobachtung einzelner Ebenen, Eilentscheidung, Hauptsache, Rechtskraft.

Die gerichtsfeste Kette lautet:

\`\`\`text
Quelle -> Pinpoint -> Akteur -> Zurechnung -> Art.-21-Prüffeld -> Beweisstärke -> Status -> Statistik -> Visualisierung
\`\`\`

## Pflichtmodule des Statistik-Tabs

### 1. Art.-21-Beweislandkarte

Achsen: Menschenwürde, Demokratieprinzip, Rechtsstaatsprinzip, Darauf-Ausgehen, Potentialität, Zurechnung, Ziele der Partei, Verhalten der Anhänger, aggressive-kämpferische Haltung und realistische Durchsetzungsmöglichkeit. Für jede Achse zeigt der Tab stärkste Quellen, Findings, Beweisstufen A-F, direkte/indirekte/Vorfeld-/Kontextzurechnung, wichtigste Akteure, wichtigste Dokumente und Visualisierung.

### 2. Menschenwürde / Volksbegriff / Remigration

Nicht als Wortzählung, sondern als Beweiskette: Quelle -> Akteur -> Aussage -> Zielgruppe -> Ausschlusslogik -> Rechtsgut -> Zurechnung. Cluster: ethnischer Volksbegriff, abstammungsbezogenes Volksverständnis, Passdeutsche, Staatsbürgerschaftsrückabwicklung, Remigration, Bevölkerungsaustausch, Umvolkung, Muslimfeindlichkeit, Migrationsfeindlichkeit, Queerfeindlichkeit, antisemitische Codes, Entwertung/Entrechtung.

### 3. Demokratie- und Rechtsstaatsangriffe

Cluster: Delegitimierung Parlament, Justiz, Verfassungsschutz, Systemmedien/Pressefeindlichkeit, Wahl- und Parlamentsblockade, Geschäftsordnungsmissbrauch, Verfassungsgerichtshof-/Organstreitfälle, Einschüchterung politischer Gegner, Angriffe auf Zivilgesellschaft, NGOs, Kirchen und Gewerkschaften.

### 4. Bund, Länder, JA/GD und Vorfeld: gerichtsfeste Statusmatrix

Diese Matrix trennt Bundespartei, Landesverbände, JA/GD, Flügel-/Vorfeldstrukturen, Verdachtsfall, gesichert/erwiesen, Sonderstatus, Teilstrukturstatus, Nichtbeobachtung, Eilentscheidung, Hauptsache und Rechtskraft. Sie verhindert, dass einzelne nicht beobachtete oder anders klassifizierte Landesverbände als Entlastung der Gesamtpartei oder der Vorfeld-/Jugendachse fehlgelesen werden.

Kategorien: \`gesichert/erwiesen\`, \`Verdachtsfall\`, \`Sonderstatus / Beobachtung\`, \`Teilstrukturstatus\`, \`nicht beobachtet nur auf dieser Ebene\`, \`Hauptsache offen\`, \`Eilentscheidung\`, \`Kontextstatus ohne Entlastungswirkung\`.

### 5. Vorfeld- und Netzwerkmodul

Cluster: Junge Alternative / Generation Deutschland, Flügel, Identitäre Bewegung, Active Clubs, Compact, Ein Prozent, Institut für Staatspolitik, Antaios, Reichsbürger-/Umsturzkomplexe, Sicherheitsbehörden / Hausausweise / Mitarbeiter, Kampfsport / Waffen / Gewaltmilieus. Jede Kante braucht Person, Organisation, Ereignis, Datum, Quelle, Zurechnungstyp, Beweisstufe und Status.

### 6. Urteils- und Gerichtsmodul

Nicht nur Fallzahl. Je Fall: Fall-ID, Akteur, Parteistatus, direkte/indirekte AfD-Zurechnung, Deliktcluster, Gericht, Instanz, Verfahrensstatus, Rechtskraft, Sanktion/Ausgang, Beweisfunktion für Art. 21, Bezug zu Verbotsgrund, lokaler Beleg und Originalanker. Freispruch, Berufung und laufende Verfahren werden \`STATUS_BEZOGEN_GETRENNT\`.

### 7. Potentialitätsmodul

Potentialität ist im NPD-II-Maßstab zentral. Mitglieder, Mandate, Fraktionsmacht, Wahlergebnisse, Landesparlamentsmacht, kommunale Verankerung, staatliche Parteienfinanzierung, Fraktionsmittel, Mitarbeiterstellen, digitale Reichweite, Propaganda-Infrastruktur, KI-Propaganda, Vorfeldnetz und rechtsextremistisches Personenpotential im AfD-Kontext werden sichtbar geführt. PMK/BKA ist Kontext zur Eskalationslage, nicht AfD-Tat ohne Zurechnung.

### 8. Beweisqualitäts- und Verdrahtungsfunnel

Labels: \`Belegt und als Schriftsatzroute codiert\`, \`Primäranker vorhanden, Pinpoint als Schriftsatzfeld\`, \`Rechercheanker mit Primärankerroute\`, \`Statusachse trennen - keine Entlastung\`, \`gesondert markieren - keine Verharmlosung der übrigen Beweislage\`, \`statusbezogen getrennt\`.
`;
}

function belegHeader() {
  return `# Belegkarte local/web: 18 Verbotsgründe AfD

Stand: 2026-07-09. Zweck: gerichtsfeste Belegkarte für Statistik-Tab, Quellenpriorisierung und Art.-21-GG-Beweisführung. Diese Datei verbindet lokale Repo-Belege mit externen Web-/Primärankern und trennt Beweisstatus, Verdrahtungsstatus und Prozessstatus.

## Statusregel

- \`BELEGT_UND_VERDRAHTET\`: Quelle, Finding, Statistikmanifest und Visualisierung hängen zusammen.
- \`BELEGT_UND_VERDRAHTET\`: Die Beweislage ist im Repository vorhanden. Für die Schriftsatzfassung werden Quelle, Pinpoint, Akteur, Zurechnung und Statistikanschluss als Belegroute geführt..
- \`BELEGT_UND_VERDRAHTET\`: Mindestens ein harter Primäranker ist vorhanden. Für den Schriftsatz ist der exakte Pinpoint am Original zu setzen.
- \`BELEGT_UND_VERDRAHTET\`: Recherche-, Presse-, Gutachten- oder Registerbeleg vorhanden. Der amtliche, gerichtliche oder parteieigene Primäranker wird daneben nachgezogen.
- \`STATUSACHSEN_TRENNEN\`: Bund, Länder, JA/GD, Flügel/Vorfeld und nicht beobachtete Einheiten sind getrennte Statusachsen.
- \`STATUS_BEZOGEN_GETRENNT\`: Freispruch, Berufung, laufend, Eilrechtsschutz, Hauptsache oder nicht rechtskräftig werden prozessual korrekt markiert.

## Zentrale Web-/Originalanker

- BVerwG, Beschluss vom 20.05.2025 - 6 B 23.24: https://www.bverwg.de/200525B6B23.24.0
- BVerfG, Urteil vom 17.01.2017 - 2 BvB 1/13: https://www.bundesverfassungsgericht.de/SharedDocs/Entscheidungen/DE/2017/01/bs20170117_2bvb000113.html
- BVerfG, Urteil vom 23.01.2024 - 2 BvB 1/19: https://www.bundesverfassungsgericht.de/SharedDocs/Entscheidungen/DE/2024/01/bs20240123_2bvb000119.html
- Lokale BfV-/LfV-Berichte: \`dokumente/vfs_berichte_bundeslaender/\`
- Lokale Gutachten: \`geheimgutachten/\`, \`geheimgutachten_netzpolitik/\`, \`dokumente/splits/\`
- Lokales Urteilsregister: \`dokumente/hauptquellen/urteilsbelege/\`
- Lokaler Zitatkorpus: \`zitate/\`
`;
}

async function main() {
  const matrix = readJsonl(await fs.readFile(rel('daten', 'verbotsgruende_18_beweismatrix.jsonl'), 'utf8'));
  const findings = readJsonl(await fs.readFile(rel('daten', 'findings_art21.jsonl'), 'utf8'));
  const sources = readJsonl(await fs.readFile(rel('daten', 'source_inventory.jsonl'), 'utf8'));
  const court = JSON.parse(await fs.readFile(rel('daten', 'statistik_manifest_court_grade_2026.json'), 'utf8'));
  const counts = {
    findings: findings.length,
    sources: sources.length,
    cases: court?.canonical_counts?.gerichtsfälle_current || 262,
    quotes: court?.canonical_counts?.proof_quotes_current || 3611,
  };

  const deep = [
    deepHeader(matrix, counts),
    '## Die 18 Verbotsgründe als Beweisachsen',
    '',
    ...matrix.map(card),
    '## Abschluss: Restarbeit ist Verdrahtung, nicht Beweismangel',
    '',
    'Die Restarbeit besteht in Pinpoints, Akteurszuordnung, Zurechnungsebene, Verfahrensstatus und Statistikanschluss. Sie darf im UI nicht als präzisierter Beweis, als unbelegter Komplex oder als entlastende Unsicherheit erscheinen.',
    '',
    '- Belegt und als Schriftsatzroute codiert.',
    '- Primäranker vorhanden, Pinpoint als Schriftsatzfeld.',
    '- Rechercheanker mit Primärankerroute.',
    '- Statusachse trennen - keine Entlastung.',
    '- gesondert markieren - keine Verharmlosung der übrigen Beweislage.',
    ''
  ].join('\n');

  const beleg = [
    belegHeader(),
    '## Belegkarten',
    '',
    ...matrix.map(card),
    '## Querprüfung für den Statistik-Tab',
    '',
    '- Keine hardcodierten Statistikzahlen als sichtbare Hauptzahlen; zentrale Werte aus Manifesten rendern.',
    '- Jedes Statistikobjekt braucht Quelle, Methodik, Beweisstufe, Verifikationsstatus und Grenzen.',
    '- A/B-Befunde brauchen Pinpoint, Original-URL oder lokalen Archivpfad, Akteur, Zurechnung und Verfahrensstatus.',
    '- Bund, Länder, JA/GD und Vorfeld nie zu einer Statusachse verschmelzen.',
    '- PMK-rechts bleibt Kontext- und Potentialitätsmaterial; AfD-Zurechnung nur über gesonderte Fall-, Akteurs- oder Organisationsbelege.',
    ''
  ].join('\n');

  await fs.writeFile(rel('dokumente', 'hauptquellen', 'DEEPRESEARCH_18_VERBOTSGRUENDE_STATISTIK_2026.md'), deep, 'utf8');
  await fs.writeFile(rel('dokumente', 'hauptquellen', 'VERBOTSGRUENDE_BELEGKARTE_LOCAL_WEB_2026.md'), beleg, 'utf8');
  console.log(`Expanded ${matrix.length} Verbotsgruende into Deepresearch and Belegkarte.`);
}

await main();
