#!/usr/bin/env node
import fs from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const rel = (...parts) => path.join(root, ...parts);

const rows = [
  {
    family: 'GFF-Gutachten',
    files: 86,
    local_anchor: 'dokumente/splits/GFF_AfD-Gutachten_Teil_01_Inhaltsueberblick_Zusammenfassung.pdf bis Teil_10_Anhang_C_E_Weitere_Belege.pdf',
    online_route: 'GFF-Veröffentlichung und Presse-/Volltextseite als öffentliche Gutachtenroute; lokale Splits bleiben maßgeblich fuer die Pinpoint-Arbeit.',
    status: 'BELEGT_UND_VERDRAHTET',
    evidence_role: 'Kernbeweis fuer Menschenwuerde, Demokratieprinzip, Vorfeldintegration, Darauf-Ausgehen und Potentialitaet.',
    art21_fields: ['menschenwuerde', 'demokratieprinzip', 'rechtsstaatsprinzip', 'darauf_ausgehen', 'potentialitaet', 'zurechnung'],
    court_use: 'Als Tatsachen- und Rechtsgutachten nutzen, aber Rechtsstaats- und NS-Achse nicht staerker formulieren als das Gutachten selbst.',
    remaining: 'Top-100-Belege mit Originalpost/Rede/Programmstelle und GFF-Seite/Randstelle als Anlagenregister ausspielen.'
  },
  {
    family: 'BfV-Folgegutachten 2021',
    files: 138,
    local_anchor: 'geheimgutachten/BfV-AfD-Folgegutachten_2021_01_A_Einfuehrung.md bis 13_Anhang_Glossar_Fussnoten.md',
    online_route: 'Amtliche/gerichtliche Verdachtsfallroute ueber VG Koeln, OVG Muenster, BVerwG und BfV-Mitteilungen; lokale OCR-Splits als Arbeitskopien.',
    status: 'BELEGT_UND_VERDRAHTET',
    evidence_role: 'Amtliche Tatsachenbasis fuer Verdachtsfall, Volksbegriff, Fluegel-Fortwirkung, Islam-/Migrationsfeindlichkeit und Institutionenangriffe.',
    art21_fields: ['menschenwuerde', 'demokratieprinzip', 'rechtsstaatsprinzip', 'zurechnung'],
    court_use: 'Verdachtsfallstandard und Verbotsstandard getrennt halten; als harte Tatsachenbasis, nicht als automatische Verbotsentscheidung.',
    remaining: 'Seiten-/Rn.-Pinpoints gegen Originalfassung und Gerichtsentscheidungen fuer Antragsschrift priorisieren.'
  },
  {
    family: 'BfV-Geheimgutachten Teil A/B',
    files: 103,
    local_anchor: 'dokumente/ki_markdown/geheimgutachten/Geheimgutachten_Teil A/B_pages_*.md und lokale Textfassungen',
    online_route: 'Online nur als Veröffentlichungs-/Recherchekontext; fuer Verfahren Beiziehung/amtliche Fassung oder gerichtliche Bezugnahme sichern.',
    status: 'BELEGT_UND_VERDRAHTET',
    evidence_role: 'Dossierstarker Fundstellenpool fuer 2023/2024-Entwicklung, Remigration, Pushbacks, Demokratie-/Rechtsstaatsangriffe und Akteursrang.',
    art21_fields: ['menschenwuerde', 'demokratieprinzip', 'rechtsstaatsprinzip', 'potentialitaet', 'zurechnung'],
    court_use: 'Nicht als amtlich veröffentlichter Volltext ueberzeichnen; Fundstellen nur mit Beiziehungs-, Gerichts- oder Originalanker verwenden.',
    remaining: 'OCR-Artefakte bereinigen und pro Top-Fundstelle Quelle, Seite, Akteur, Datum, Kanal, Gegenlese und Originalanker sichern.'
  },
  {
    family: 'BfV/Bundes-VSB 2024/2025 und Lagezahlen',
    files: 83,
    local_anchor: 'dokumente/vfs_berichte_bundeslaender/2026-06-30-verfassungsschutzbericht-2025.pdf; daten/statistik_manifest.json',
    online_route: 'BfV/BMI-Verfassungsschutzberichte und PMK/BKA-Lagebilder als amtliche Online-Primärroute.',
    status: 'BELEGT_UND_VERDRAHTET',
    evidence_role: 'Amtliche Potentialitaets- und Lagebildzahlen: 70.000 Mitglieder, 28.000 AfD-Kontextwert, PMK-/Rechtsextremismuslage.',
    art21_fields: ['potentialitaet', 'zurechnung', 'lagebild_ohne_automatische_tatzurechnung'],
    court_use: 'PMK und allgemeines Rechtsextremismuslagebild nie als AfD-Taten zaehlen; nur Struktur-/Potentialitaetsbeweis.',
    remaining: 'Mandate, Fraktionsmittel, Mitarbeiterstellen, Parteienfinanzierung und Reichweitenquellen als Jahreszeitreihe danebenlegen.'
  },
  {
    family: 'DIMR / Hendrik Cremer',
    files: 10,
    local_anchor: 'dokumente/hauptquellen/DIMR_Analyse_Warum_die_AfD_verboten_werden_koennte_Official_2023.pdf; dokumente/ki_markdown/dokumente/hauptquellen/DIMR_Analyse_Warum_die_AfD_verboten_werden_koennte.md',
    online_route: 'https://www.institut-fuer-menschenrechte.de/fileadmin/Redaktion/Publikationen/Analyse_Studie/Analyse_Warum_die_AfD_verboten_werden_koennte.pdf',
    status: 'BELEGT_UND_VERDRAHTET',
    evidence_role: 'Normbruecke Menschenwuerde -> Art. 21: rassistisch-nationalvoelkische Ausrichtung, gleiche Rechtssubjektivitaet, Verbot als moegliche Rechtsfolge.',
    art21_fields: ['menschenwuerde', 'demokratieprinzip', 'potentialitaet', 'zurechnung'],
    court_use: 'Als juristische Analyse und Antragsargument verwenden, nicht als eigenstaendige Tatsachenfeststellung fuer Einzelzitate.',
    remaining: 'DIMR-These je mit BfV/GFF/LfV/Programm-/Zitat-Fundstelle verbinden und als Normbruecken-Karte im Statistik-Tab fuehren.'
  },
  {
    family: 'BfV-Metagutachten / Untersuchung',
    files: 16,
    local_anchor: 'dokumente/hauptquellen/untersuchung-bfv-gutachten-und-afd-parteiverbot.pdf; dokumente/splits/untersuchung_bfv_gutachten_split_1-6.pdf',
    online_route: 'Lokale PDF-/Splitfassung; externe Provenienz als Repo-Route ueber source_inventory und lokale PDF-Metadaten gefuehrt; fuer den Schriftsatz als Methodik-/Red-Team-Anlage, nicht als Tatsachenendbeweis.',
    status: 'BELEGT_UND_VERDRAHTET',
    evidence_role: 'Methoden- und Gegenargumentachse: FDGO-Begriff, NPD-II, Menschenwuerde, BfV-Gutachtenverstaendnis, Verbotsmaßstab.',
    art21_fields: ['beweisqualitaet', 'rechtsmassstab', 'menschenwuerde', 'potentialitaet'],
    court_use: 'Als Red-Team- und Methodikmodul einbauen: Was traegt aus BfV-Material verbotsrechtlich, was nur Verdachtsfall?',
    remaining: 'Gegenargumente sind als Methodik-/Red-Team-Anlage codiert; konkrete Tatsachenbeweise bleiben BfV/LfV/GFF/Gericht/Programm/Proof vorbehalten.'
  },
  {
    family: 'Rechtliche Stellungnahme AfD-Parteiverbot',
    files: 2,
    local_anchor: 'dokumente/hauptquellen/44Rechtliche_Stellungnahme_AfD-Parteiverbot.pdf; dokumente/ki_markdown/dokumente/hauptquellen/44Rechtliche_Stellungnahme_AfD-Parteiverbot.md',
    online_route: 'Lokale PDF- und Markdown-Fassung als Provenienzroute gefuehrt; externe Publikationsprovenienz wird als Norm-/Methodikanker behandelt und nicht als Tatsachenendbeweis gewichtet.',
    status: 'BELEGT_UND_VERDRAHTET',
    evidence_role: 'Zusaetzliche rechtswissenschaftliche Verbotspruefung, Antragserfolg, Maßstab, Potentialitaet und Verfahrensrisiken.',
    art21_fields: ['rechtsmassstab', 'darauf_ausgehen', 'potentialitaet', 'beweisqualitaet'],
    court_use: 'Nicht als Tatsachenbeweis, sondern als juristische Plausibilisierung und Gegenargument-Check verwenden.',
    remaining: 'Autor-/Datums-/Kontextfelder werden im Gutachten-Provenienzregister gefuehrt; Kernaussagen dienen als Norm-/Methodik-Findings, nicht als Tatsachenanker.'
  },
  {
    family: 'Verfassungsblog-Art.21-Analysen',
    files: 6,
    local_anchor: 'dokumente/hauptquellen/verfassungsblog.de_afd-parteiverbot*.pdf; dokumente/hauptquellen/verfassungsblog.de_partGeltungsbereich-art21gg.pdf',
    online_route: 'https://verfassungsblog.de/afd-parteiverbot/ und zugehoerige Art.-21-/Parteiverbotsbeitraege als Online-Primaerroute.',
    status: 'BELEGT_UND_VERDRAHTET',
    evidence_role: 'Rechtsdogmatik, Verfahrensgrenzen, Parteienprivileg, Teilverbote, Mandatsfolgen und Gegenargumente gegen Ueberzeichnung.',
    art21_fields: ['rechtsmassstab', 'statusachsen_trennen', 'beweisqualitaet', 'verfahren'],
    court_use: 'Als Gegenlese und juristische Praezisierung verwenden; nicht als Tatsachenkorpus zaehlen.',
    remaining: 'Kerngedanken in Statistik-Tab als Red-Team-Spalte: Verbot, Finanzierungsausschluss, Teilverbot, Staatsferne, V-Leute, Mandatsfolgen.'
  },
  {
    family: 'Behindertenfeindlichkeit-Analyse',
    files: 2,
    local_anchor: 'dokumente/hauptquellen/Analyse_Die_AfD_eine_Gefahr_fuer_Menschen_mit_Behinderungen.pdf; dokumente/ki_markdown/dokumente/hauptquellen/Analyse_Die_AfD_eine_Gefahr_fuer_Menschen_mit_Behinderungen.md',
    online_route: 'Lokale PDF-/Markdown-Fassung als Zielgruppenanalyse gefuehrt; belastbare Verwendung nur gekoppelt mit AfD-Programm, Antrag, Rede, Kampagne oder parlamentarischer Quelle.',
    status: 'BELEGT_UND_VERDRAHTET',
    evidence_role: 'Zielgruppen- und Menschenwuerdeachse fuer Menschen mit Behinderungen; ergaenzt Queer-/Migrations-/Muslimfeindlichkeit.',
    art21_fields: ['menschenwuerde', 'zielgruppe', 'gleichheit', 'programmatische_entwertung'],
    court_use: 'Nur stark, wenn Aussagen mit AfD-Programm, Antrag, Rede oder offizieller Kampagne verbunden werden.',
    remaining: 'Als Zielgruppen-Index codiert; konkrete Antragsnutzung nur ueber bereits vorhandene Programm-, Parlaments-, Rede- oder Zitat-Findings.'
  },
  {
    family: 'Presseberichte zu Gutachten',
    files: 21,
    local_anchor: 'ZDFheute_Bericht_VS_Gutachten_AfD.pdf; LTO-/Stern-/WELT-/Tagesschau-Archivkopien im Hauptquellenbestand',
    online_route: 'Presse-Webseiten als Recherche- und Primärankerroute zu Gutachten, Gerichten und amtlichen Dokumenten.',
    status: 'BELEGT_UND_VERDRAHTET',
    evidence_role: 'Recherche- und Kontextanker; nuetzlich fuer Auffindbarkeit, aber in der Beweisgewichtung unter Gericht, Behörde, Parteiquelle, Gutachten.',
    art21_fields: ['quellenroute', 'beweisqualitaet', 'verfahren'],
    court_use: 'Nicht als Endbeweis fuer Tatsachen; nur als Route, wenn amtliche/gerichtliche/parteieigene Quelle fehlt oder zitiert wird.',
    remaining: 'Presseanker sind als Recherche-/Kontextrouten klassifiziert; in der Antragsspitze zaehlen nur danebenliegende Gutachten-, Gerichts-, Amts-, Drucksachen- oder Parteiquellen.'
  },
  {
    family: 'KI-generierte Analysen',
    files: 21,
    local_anchor: 'dokumente/hauptquellen/ChatGPT*.pdf; Claude*.pdf; interne KI-Analysen',
    online_route: 'Keine externe Beweisroute; interne Arbeitsprodukte.',
    status: 'NICHT_BEWEISMITTEL',
    evidence_role: 'Arbeits- und Strukturierungshilfe, nicht Beweis, nicht Gutachten, nicht gerichtsfertige Quelle.',
    art21_fields: ['methodik', 'nicht_beweismittel'],
    court_use: 'Aus Antragsbeweisfuehrung strikt ausblenden oder als internes Arbeitsprodukt kennzeichnen.',
    remaining: 'Im Dashboard als interne KI-Notiz klassifizieren; nie in Beweisstufe A/B und nie als Gutachten zaehlen.'
  }
];

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function jsString(value) {
  return JSON.stringify(String(value ?? ''));
}

function toJsonl(items) {
  return items.map(row => JSON.stringify(row)).join('\n') + '\n';
}

function mdReport(items) {
  const evidenceRows = items.filter(row => row.status !== 'NICHT_BEWEISMITTEL');
  const weakRows = items.filter(row => /DIMR|Verfassungsblog|Rechtliche Stellungnahme|Behindertenfeindlichkeit|Presseberichte|KI-generierte/.test(row.family));
  return `# Gutachten-Coverage-Audit 2026-07-09

Dieses Audit trennt echte Gutachten, amtliche Verfassungsschutzgrundlagen, rechtswissenschaftliche Analysen, Presse-Routen und interne KI-Arbeitsprodukte. Maßstab ist ein Antrag nach Art. 21 GG: Tatsachenbeweis, Normbrücke, Verfahrens-/Gegenargument, Zielgruppenachse und Nicht-Beweismittel dürfen nicht vermischt werden.

## Befund

- Gutachten-/Analysefamilien geprüft: ${items.length}
- Als antragsrelevante Beweis-/Norm-/Methodenroute nutzbar: ${evidenceRows.length}
- Strikt nicht als Beweismittel zu behandeln: ${items.length - evidenceRows.length}
- Bisher nur inventarisierte oder untergewichtete Familien: ${weakRows.map(row => row.family).join(', ')}

## Harte Prozessregel

Presse und KI-Ausgaben ersetzen keine Primärquelle. Rechtswissenschaftliche Analysen tragen den Antrag als Norm- und Gegenargumentachse; Tatsachenbehauptungen muessen mit BfV/LfV, Gericht, Parteiquelle, Programm, Rede, Drucksache, Originalpost oder Zitat-Finding verbunden werden.

${items.map(row => `## ${row.family}

- Status: \`${row.status}\`
- Dateien: ${row.files}
- Lokaler Anker: ${row.local_anchor}
- Online-/Originalroute: ${row.online_route}
- Beweisrolle: ${row.evidence_role}
- Art.-21-Felder: ${row.art21_fields.join(', ')}
- Gerichtliche Nutzung: ${row.court_use}
- Schriftsatzregel: ${row.remaining}
`).join('\n')}
`;
}

function gutachtenRowsJs(items) {
  return `const gutachtenEvidenceRows = [
${items.map(row => `            { name: ${jsString(row.family)}, weight: ${jsString(row.status === 'NICHT_BEWEISMITTEL' ? 'nicht als Beweismittel zaehlen' : row.evidence_role)}, says: ${jsString(row.local_anchor)}, stats: ${jsString(row.art21_fields.join(', ') + ' | Dateien: ' + row.files)}, risk: ${jsString(row.court_use + ' Schriftsatzregel: ' + row.remaining)} }`).join(',\n')}
        ];`;
}

function normalizeIndex(text) {
  let out = text;
  out = out.replace(/zurechnungitaet/g, 'potentialitaet');
  out = out.replace(/ - keine Beweislücke(?: - keine Beweislücke)+/g, ' - keine Beweislücke');
  out = out.replace(/verhindern verhindern/g, 'verhindern');
  out = out.replace(/ist als Pinpoint-\/Statusfeld gefuehrt nur/g, 'ist als Pinpoint-/Statusfeld zu führen:');
  out = out.replace(
    /const gutachtenEvidenceRows = \[[\s\S]*?\n\s*];\n\n\s*function getNumberEvidenceRows/,
    `${gutachtenRowsJs(rows)}\n\n        function getNumberEvidenceRows`
  );
  return out;
}

function appendReadme(text) {
  const marker = '### Gutachten-Coverage-Audit 2026-07-09';
  if (text.includes(marker)) return text;
  return `${text.trimEnd()}

${marker}

Ergänzender Index für die antragsrelevante Gutachtenabdeckung: [Gutachten-Coverage-Audit](./reports/gutachten-coverage-audit-2026-07-09.md) und [maschinenlesbare Matrix](./daten/gutachten_coverage_audit_2026.jsonl). Der Audit trennt GFF/BfV/DIMR/rechtswissenschaftliche Analysen, Presse-Routen und KI-Arbeitsprodukte nach Beweisrolle, Art.-21-Feld, lokaler Fundstelle, Online-/Originalroute und verbleibender Schriftsatzarbeit.
`;
}

await fs.writeFile(rel('daten', 'gutachten_coverage_audit_2026.jsonl'), toJsonl(rows), 'utf8');
await fs.mkdir(rel('reports'), { recursive: true });
await fs.writeFile(rel('reports', 'gutachten-coverage-audit-2026-07-09.md'), mdReport(rows), 'utf8');

const indexPath = rel('index.html');
const indexHtml = await fs.readFile(indexPath, 'utf8');
await fs.writeFile(indexPath, normalizeIndex(indexHtml), 'utf8');

const readmePath = rel('README.md');
const readme = await fs.readFile(readmePath, 'utf8');
await fs.writeFile(readmePath, appendReadme(readme), 'utf8');

console.log(`Gutachten-Coverage-Audit verdrahtet: ${rows.length} Familien, ${rows.filter(row => row.status !== 'NICHT_BEWEISMITTEL').length} antragsrelevante Routen.`);
