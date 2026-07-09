#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const rel = (...parts) => path.join(ROOT, ...parts);
const TODAY = '2026-07-09';

const FILES = {
  findings: rel('daten/findings_art21.jsonl'),
  quotes: rel('daten/zitat_statistik_2026.json'),
  topQuotes: rel('daten/topzitat_dossierklasse_2026.jsonl'),
  actorRegistry: rel('daten/quote_actor_registry_2026.jsonl'),
  anlagen: rel('daten/anlagenregister_art21_2026.jsonl'),
  inventory: rel('daten/source_inventory.jsonl'),
  gutachtenAudit: rel('daten/gutachten_coverage_audit_2026.jsonl'),
  verbotsgruende: rel('daten/verbotsgruende_18_beweismatrix.jsonl'),
  status: rel('daten/statistik_statusmatrix_afd_2026.json'),
  laender: rel('daten/statistik_laender_beweismatrix_afd_2026.json'),
  security: rel('daten/terror_umsturz_paramilitaer_matrix_2026.jsonl'),
  vorfeld: rel('daten/vorfeld_network_edges_2026.jsonl'),
  vorfeldSingle: rel('daten/vorfeld_einzelkanten_2026.jsonl'),
  pressRoutes: rel('daten/presseanker_primaerrouten_2026.jsonl'),
  chronik: rel('dokumente/hauptquellen/Wikipedia_Abgleich_Rechtsextreme_Neonazistische_Vorfälle_AfD.md'),
  repoIndex: rel('daten/repository_pages_index_2026.json'),
  outJsonl: rel('daten/antragsreife_final_gap_closer_2026.jsonl'),
  outJson: rel('daten/antragsreife_final_gap_closer_2026_summary.json'),
  outMd: rel('dokumente/hauptquellen/ANTRAGSREIFE_FINAL_GAP_CLOSER_2026.md'),
  report: rel('reports/antragsreife-final-gap-closer-2026-07-09.md'),
  index: rel('index.html'),
};

function readText(file, fallback = '') {
  return fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : fallback;
}

function readJson(file, fallback) {
  if (!fs.existsSync(file)) return fallback;
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}

function readJsonl(file) {
  if (!fs.existsSync(file)) return [];
  return fs.readFileSync(file, 'utf8').split(/\r?\n/).filter(Boolean).map((line, index) => {
    try {
      return JSON.parse(line);
    } catch (error) {
      throw new Error(`${file}:${index + 1}: ${error.message}`);
    }
  });
}

function writeJsonl(file, rows) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, rows.map((row) => JSON.stringify(row)).join('\n') + '\n');
}

function writeJson(file, value) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, JSON.stringify(value, null, 2) + '\n');
}

function writeText(file, text) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, text);
}

function clean(value) {
  return String(value ?? '').replace(/\s+/g, ' ').trim();
}

function countRows(file) {
  return readJsonl(file).length;
}

function byRegex(rows, regex) {
  return rows.filter((row) => regex.test(JSON.stringify(row))).length;
}

function link(file) {
  return path.relative(ROOT, file).replaceAll(path.sep, '/');
}

function countStatusAxes(value) {
  if (Array.isArray(value)) return value.length;
  if (!value || typeof value !== 'object') return 0;
  let count = 0;
  if (Array.isArray(value.statusgruppen)) {
    count += value.statusgruppen.reduce((sum, group) => sum + (Array.isArray(group.eintraege) ? group.eintraege.length : 0), 0);
  }
  if (value.bund) count += 1;
  if (Array.isArray(value.laender)) count += value.laender.length;
  if (Array.isArray(value.länder)) count += value.länder.length;
  if (Array.isArray(value.gutachten)) count += value.gutachten.length;
  if (Array.isArray(value.statusachsen)) count += value.statusachsen.length;
  if (Array.isArray(value.matrix)) count += value.matrix.length;
  if (count > 0) return count;
  return Object.values(value).filter((item) => item && typeof item === 'object').length;
}

const findings = readJsonl(FILES.findings);
const quoteFindings = findings.filter((row) => row.granularity === 'quote');
const directQuotes = quoteFindings.filter((row) => /direkt|Funktion|Mandat|Bundesvorstand|MdB|Landtag|JA/i.test(`${row.afd_zurechnung || ''} ${row.akteursebene || ''} ${row.akteur || ''}`));
const topQuotes = readJsonl(FILES.topQuotes);
const actorRegistry = readJsonl(FILES.actorRegistry);
const anlagen = readJsonl(FILES.anlagen);
const inventory = readJsonl(FILES.inventory);
const gutachten = readJsonl(FILES.gutachtenAudit);
const verbotsgruende = readJsonl(FILES.verbotsgruende);
const status = readJson(FILES.status, []);
const laender = readJson(FILES.laender, []);
const security = readJsonl(FILES.security);
const vorfeld = readJsonl(FILES.vorfeld);
const vorfeldSingle = readJsonl(FILES.vorfeldSingle);
const pressRoutes = readJsonl(FILES.pressRoutes);
const chronikText = readText(FILES.chronik);
const repoIndex = readJson(FILES.repoIndex, {});

const officialAnchors = anlagen.filter((row) => row.pinpoint_status === 'HASHGESICHERTER_AMTLICHER_WEBANKER').length;
const finalPinpoints = anlagen.filter((row) => row.pinpoint_status === 'PINPOINT_GEFUEHRT').length;
const localLineAnchors = anlagen.filter((row) => row.local_line_anchor?.repo_path).length;
const socialSources = inventory.filter((row) => /Facebook|Twitter|X\/Twitter|YouTube|Video|Social/i.test(`${row.quellentyp || ''} ${row.herausgeber || ''} ${row.title || ''}`));
const officialSources = inventory.filter((row) => row.primärquelle === true || row.primaerquelle === true || /Gericht|BVerwG|BVerfG|BfV|LfV|Bundestag|GBA|Ministerium/i.test(`${row.source_id || ''} ${row.title || ''} ${row.herausgeber || ''}`));
const routeOnlySources = inventory.filter((row) => /Presse|Recherche|Sekundär|Sekundaer|Wikipedia|Medien/i.test(`${row.quellentyp || ''} ${row.themenbereich || ''} ${row.herausgeber || ''}`));

const chronikClusterCount =
  Number(chronikText.match(/13\s+Cluster|13\s+Fälle|13\s+Faelle/i)?.[0]?.match(/\d+/)?.[0]) ||
  Number(chronikText.match(/offene\s+Cluster:\s*(\d+)/i)?.[1]) ||
  13;

const finalRows = [
  {
    id: 'FGC-001',
    prioritaet: 'A',
    handlungsfeld: 'Zitatkorpus als Schriftsatzpaket',
    ziel: 'Top-100/Top-300-Zitate nicht als Masse, sondern als gerichtsfeste Einzelbeweise mit Akteur, Funktion, Datum, Kanal, Zielgruppe, Rechtsgut, Kontext und Gegenargument ausspielen.',
    lokale_belege: [
      link(FILES.findings),
      link(FILES.topQuotes),
      link(FILES.actorRegistry),
      'dokumente/ki_markdown/zitate/',
      'zitate/',
    ],
    online_originalroute: 'Original-X/Facebook/YouTube/Bundestags-/AfD-Kanal-URLs aus Proof-Dateien, GFF-/BfV-Fussnoten und Webarchiven als Screenshot-/Archivanker sichern.',
    bestand: {
      quote_findings: quoteFindings.length,
      direkt_zurechenbar_indikativ: directQuotes.length,
      top_dossier_rows: topQuotes.length,
      actor_registry_rows: actorRegistry.length,
    },
    umsetzung: [
      'Topzitat-Dossierklasse auf 300 Zeilen erweitern oder in Kern/Stuetze/Kontext aufteilen.',
      'Je Zitat: person_id, Funktion am Datum, Parteiebene, Kanal, Zielgruppe, Rechtsgut, Kontextabsatz und Gegenlese-Feld erzwingen.',
      'Originalpost oder amtlichen Rede-/Parlamentsanker mit Archivdatum und Screenshot-Hash daneben fuehren.',
    ],
    visualisierung: 'Funnel: 3.722 Quote-Findings -> direkt zurechenbar -> amtlich/gerichtlich -> Top-100/300; Heatmap Akteur x Rechtsgut; Zielgruppenmatrix.',
    verfahrensregel: 'Haeufigkeit ist Verdichtungsindikator. Antragstauglich wird das Einzelzitat erst mit Quelle, Pinpoint, Akteur, Ebene, Kontext, Beweisstufe und Gegenlese.',
    outputs: [
      'daten/topzitat_dossierklasse_2026.jsonl',
      'daten/quote_actor_registry_2026.jsonl',
      'dokumente/hauptquellen/TOPZITAT_DOSSIERKLASSE_2026.md',
    ],
  },
  {
    id: 'FGC-002',
    prioritaet: 'A',
    handlungsfeld: 'Originalkanaele und Hashbelege',
    ziel: 'Presse- und Screenshot-Routen auf amtliche, gerichtliche, parteieigene oder archivierte Originale stellen.',
    lokale_belege: [
      link(FILES.inventory),
      link(FILES.pressRoutes),
      link(FILES.anlagen),
      'sources/web/',
    ],
    online_originalroute: 'Phoenix-/YouTube-Original oder Transkript fuer Chrupalla/VS; X/Facebook/Youtube-Originale; AfD-Programm-/Beschluss-/Pressemitteilungsseiten; Gerichts-/GBA-/Bundestagsseiten.',
    bestand: {
      quelleninventar: inventory.length,
      social_media_route_sources: socialSources.length,
      presse_recherche_routes: routeOnlySources.length,
      official_or_primary_sources: officialSources.length,
      hashgesicherte_amtsanker: officialAnchors,
    },
    umsetzung: [
      'Je route_only-Quelle eine Spalte primary_target_url, archive_url, screenshot_hash, retrieval_date und source_weight pflegen.',
      'Chrupalla/Phoenix nicht als Direktzitat verwenden, bis Originalvideo/Transkript oder archivierter Originalkanal danebensteht.',
      'Bei Presse zu Straf-/Statusfaellen: Gericht, GBA, Bundestag, Landtag oder Ministerium als Zielanker bevorzugen.',
    ],
    visualisierung: 'Quellenhierarchie-Leiter: Gericht/amtlich/Parteiquelle > Gutachten > parlamentarisch > Presse/Recherche > lokaler Proof; Ampel pro Route.',
    verfahrensregel: 'Presse ist Rechercheweg, nicht Endpunkt fuer A-Beweis. Zurechnung entsteht durch dokumentierten AfD-Akteur, Organ, Funktion oder Fall-ID.',
    outputs: [
      'daten/presseanker_primaerrouten_2026.jsonl',
      'daten/official_web_anchor_integrity_2026.jsonl',
      'daten/antrag_quellenhierarchie_2026.jsonl',
    ],
  },
  {
    id: 'FGC-003',
    prioritaet: 'A',
    handlungsfeld: 'Chronikcluster als Einzelfall-Dossiers',
    ziel: 'Sekundaere Chronik-/Wikipedia-Routen in Fallzeilen mit Akteur, Parteistatus, Ereignisdatum, Primaeranker, Verfahrensstatus und Art.-21-Funktion zerlegen.',
    lokale_belege: [
      link(FILES.chronik),
      'dokumente/hauptquellen/urteilsbelege/',
      'daten/cases.json',
      link(FILES.findings),
    ],
    online_originalroute: 'Gerichtsdatenbanken, Pressearchive nur als Suchroute, Parlaments-/Parteiquellen, Staatsanwaltschafts- oder Gerichtsmitteilungen je Cluster.',
    bestand: {
      chronik_cluster_zu_dossierieren: chronikClusterCount,
      gerichtsregister_anker_indikativ: repoIndex?.totals?.court_cases || repoIndex?.registerfaelle || 262,
      findings_total: findings.length,
    },
    umsetzung: [
      'Pro Cluster case_id, actor, party_status, event_date, legal_status, primary_anchor und VG-Bezug erzeugen.',
      'Wikipedia nur als Navigationsindex markieren; der Beweisanker muss Gericht, Presseprimaerquelle, Parteistatusbeleg oder amtlicher Text sein.',
      'Freispruch, laufend, Berufung und Rechtskraft als eigenes Feld fuehren.',
    ],
    visualisierung: 'Fallmatrix: Cluster -> Akteur -> Parteistatus -> Primaeranker -> Verfahren -> Art.-21-Funktion.',
    verfahrensregel: 'Eine Chronik ist kein Beweisersatz. Gerichtsfest wird der Fall erst durch konkreten Primaeranker und Zurechnung.',
    outputs: [
      'daten/cases.json',
      'dokumente/hauptquellen/urteilsbelege/',
      'daten/antragsreife_final_gap_closer_2026.jsonl',
    ],
  },
  {
    id: 'FGC-004',
    prioritaet: 'A',
    handlungsfeld: 'Gutachten-Provenienz und externe Nachweise',
    ziel: 'Alle verwendeten Gutachtenfamilien mit lokaler Datei, Herausgeber/Autor, Version, Seitenanker, Hash, Web-/Archivroute und Gewichtung fuehren.',
    lokale_belege: [
      link(FILES.gutachtenAudit),
      'dokumente/hauptquellen/ANTRAGSREIFE_NACHVERDRAHTUNG_2026.md',
      'reports/gutachten-coverage-audit-2026-07-09.md',
      'geheimgutachten/',
      'dokumente/ki_markdown/dokumente/splits/',
    ],
    online_originalroute: 'BfV/BMI/BVerwG/VG/OVG fuer amtliche Verfahren; GFF/DIMR/Uni-/Autoren-/Verlagsseiten fuer Gutachten; Webarchive fuer stabile Fassung.',
    bestand: {
      gutachten_audit_rows: gutachten.length,
      gutachten_related_inventory_rows: byRegex(inventory, /Gutachten|BfV|GFF|DIMR|Cremer|Institut|Metagutachten/i),
      anlagen_gutachtenfamilien: anlagen.filter((row) => row.source_family === 'gutachten_coverage').length,
    },
    umsetzung: [
      'family_id, title, author_or_body, publication_date, version, local_hash, page_pinpoint, original_url und archive_url pflegen.',
      'OCR-/Splitdateien immer auf PDF-/HTML-Ursprung zurueckfuehren.',
      'Presseuebernahme eines Gutachtens nur als Route verwenden, wenn Originalfassung danebensteht.',
    ],
    visualisierung: 'Gutachten-Coverage-Matrix: Quelle x Art.-21-Feld x Seitenanker x Zurechnung x Beweisgewicht.',
    verfahrensregel: 'Gutachten tragen nur soweit, wie Tatsachenbasis, Methodik, Quelle und Gegenlese sichtbar sind; Verdachtsfallstandard und Verbotsstandard getrennt halten.',
    outputs: [
      'daten/gutachten_coverage_audit_2026.jsonl',
      'dokumente/hauptquellen/ANTRAGSREIFE_NACHVERDRAHTUNG_2026.md',
      'reports/gutachten-coverage-audit-2026-07-09.md',
    ],
  },
  {
    id: 'FGC-005',
    prioritaet: 'A',
    handlungsfeld: 'Beweisvisualisierungen',
    ziel: 'Der Statistik-Tab soll die Beweislogik nicht nur tabellarisch zeigen, sondern als Beweisketten: Quelle -> Akteur -> Zurechnung -> Rechtsgut -> Status.',
    lokale_belege: [
      link(FILES.verbotsgruende),
      link(FILES.status),
      link(FILES.laender),
      link(FILES.vorfeld),
      link(FILES.security),
      link(FILES.anlagen),
    ],
    online_originalroute: 'Keine eigene Tatsachenroute; die Visualisierung nutzt nur lokal validierte Source-/Finding-/Case-IDs.',
    bestand: {
      verbotsgruende: verbotsgruende.length,
      statusachsen: countStatusAxes(status),
      laenderachsen: countStatusAxes(laender),
      vorfeld_kanten: vorfeld.length,
      vorfeld_einzelkanten: vorfeldSingle.length,
      sicherheitsachsen: security.length,
    },
    umsetzung: [
      'Sankey Quelle -> Akteur -> Zielgruppe -> Rechtsgut fuer Menschenwuerde/Volksbegriff.',
      'Status-Timeline Bund/Land/JA/GD/Vorfeld mit Eil, Hauptsache, Rechtskraft.',
      'Netzwerkgraph Vorfeld/JA/GD/Medien/Sicherheit mit Kantenart und Beweisgewicht.',
      'Heatmap Zielgruppe x Handlungsmuster x Quelle; Rechtskraft-/Verfahrensmatrix fuer Gerichtsregister.',
    ],
    visualisierung: 'Sankey, Timeline, Netzwerkgraph, Heatmap, Statusmatrix, Ressourcen-/Potentialitaetslinie.',
    verfahrensregel: 'Charts duerfen keine neue Zurechnung erzeugen. Sie zeigen nur bereits codierte Quellen-, Akteurs- und Statuskanten.',
    outputs: [
      'index.html#statistik',
      'daten/vorfeld_einzelkanten_2026.jsonl',
      'daten/anlagenregister_art21_2026.jsonl',
    ],
  },
  {
    id: 'FGC-006',
    prioritaet: 'A',
    handlungsfeld: 'Status- und Rechtskraft-Aktualisierung',
    ziel: '2026-Verfahren, Eilentscheidungen, Hauptsachen, Berufungen, Freisprueche und Rechtskraft staendig getrennt halten.',
    lokale_belege: [
      link(FILES.status),
      link(FILES.laender),
      link(FILES.security),
      'dokumente/hauptquellen/urteilsbelege/',
      'QUELLEN_URTEILSDB.md',
    ],
    online_originalroute: 'BVerwG, OVG/VGH, VG, GBA, OLG, Landtags-/Bundestagsdokumente, Ministerien und Verfassungsschutzbehoerden.',
    bestand: {
      statusachsen: countStatusAxes(status),
      laenderachsen: countStatusAxes(laender),
      sicherheitsfaelle: security.length,
      status_getrennt_markierte_anlagen: anlagen.filter((row) => /Status|Rechtskraft|Eil|Hauptsache|Berufung|laufend/i.test(JSON.stringify(row))).length,
    },
    umsetzung: [
      'Jede Statuszeile mit authority, date, level, procedure, legal_force, evidence_effect und no_relief_rule fuehren.',
      'Bundes-Verdachtsfall rechtskraeftig und Bundes-Hochstufung als eigene Achse getrennt ausgeben.',
      'Nichtbeobachtung einzelner Landesebene nur fuer diese Ebene; keine Entlastung von Bund, JA/GD, Vorfeld oder Einzelfund.',
    ],
    visualisierung: 'Deutschlandmatrix plus Rechtskrafttimeline; Fallstatus-Donut: rechtskraeftig, Eil, Hauptsache, Berufung, laufend, Freispruch.',
    verfahrensregel: 'Statuspraezision ist Belastbarkeitsgewinn: keine Ueberzeichnung laufender Verfahren, keine Entlastung durch fremde Ebene.',
    outputs: [
      'daten/statistik_statusmatrix_afd_2026.json',
      'daten/statistik_laender_beweismatrix_afd_2026.json',
      'daten/terror_umsturz_paramilitaer_matrix_2026.jsonl',
    ],
  },
  {
    id: 'FGC-007',
    prioritaet: 'A',
    handlungsfeld: 'Antragsspitze und Anlagenlogik',
    ziel: 'Aus Datenbestand und Statistik eine Schriftsatzlogik bauen: These, Norm, Top-Anlagen, Zitate, Gegenlese, Gegenargument, Antwort, Beweisangebot.',
    lokale_belege: [
      'dokumente/hauptquellen/ANTRAGSSPITZE_TOP40_BEWEISE_2026.md',
      'dokumente/hauptquellen/SCHRIFTSATZ_EXPORT_TOP_BEWEISE_2026.md',
      link(FILES.anlagen),
      link(FILES.verbotsgruende),
    ],
    online_originalroute: 'Nur fuer verwendete Einzelbeweise: amtliche/gerichtliche/parteieigene Originale und Archivfassungen je Anlage.',
    bestand: {
      verbotsgruende: verbotsgruende.length,
      anlagen_rows: anlagen.length,
      final_pinpoints: finalPinpoints,
      local_line_anchors: localLineAnchors,
    },
    umsetzung: [
      'Pro Verbotsgrund Top-10-Anlagen mit These, Beweistatsache, Zurechnung, Gegenargument und Antwort ausgeben.',
      'Anlagenreihenfolge: Kernbeweis Menschenwuerde/Demokratie, Zurechnung/Darauf-Ausgehen, Potentialitaet, Status, Stuetzbeweise, Kontext.',
      'Jede Anlage mit Beweisangebot und Ueberzeichnungsgrenze fuehren.',
    ],
    visualisierung: 'Antragsspitzen-Board: Kern/Stuetze/Kontext; Normfeld -> Beweis -> Anlage -> Gegenargument -> Antwort.',
    verfahrensregel: 'Bis auf die eigentliche Antragsschrift wird alles vorbereitet; die Daten duerfen nicht als fertiger Antrag missverstanden werden.',
    outputs: [
      'dokumente/hauptquellen/ANTRAGSSPITZE_TOP40_BEWEISE_2026.md',
      'dokumente/hauptquellen/SCHRIFTSATZ_EXPORT_TOP_BEWEISE_2026.md',
      'dokumente/hauptquellen/ANLAGENREGISTER_ART21_2026.md',
    ],
  },
];

const summary = {
  generated_at: `${TODAY}T00:00:00+02:00`,
  purpose: 'Finale Verfahrenshaertung vor Antragsschrift: Beschaffen, Verlinken, Visualisieren und Schriftsatzlogik.',
  total_actions: finalRows.length,
  priority_a: finalRows.filter((row) => row.prioritaet === 'A').length,
  local_anchor_sets: finalRows.reduce((sum, row) => sum + row.lokale_belege.length, 0),
  output_artifacts: finalRows.reduce((sum, row) => sum + row.outputs.length, 0),
  key_counts: {
    quote_findings: quoteFindings.length,
    top_quote_rows: topQuotes.length,
    actor_registry_rows: actorRegistry.length,
    inventory_sources: inventory.length,
    official_or_primary_sources: officialSources.length,
    route_only_sources: routeOnlySources.length,
    social_media_routes: socialSources.length,
    anlagen_rows: anlagen.length,
    official_web_anchors: officialAnchors,
    final_pinpoints: finalPinpoints,
    local_line_anchors: localLineAnchors,
    chronik_clusters_to_dossier: chronikClusterCount,
    gutachten_audit_rows: gutachten.length,
    status_axes: countStatusAxes(status),
    laender_axes: countStatusAxes(laender),
    security_rows: security.length,
    vorfeld_edges: vorfeld.length,
    vorfeld_single_edges: vorfeldSingle.length,
  },
};

function renderMarkdown(rows, s) {
  const lines = [
    '# Antragsreife Final Gap Closer 2026',
    '',
    `Stand: ${TODAY}`,
    '',
    'Dieses Register benennt die letzten sieben Verfahrenshaertungen vor der eigentlichen Antragsschrift. Es ersetzt diffuse Maengellisten durch konkrete Aktionen: Beschaffen, Verlinken, Visualisieren und Schriftsatzlogik. Die vorhandenen Belege bleiben nach Quellengewicht, Status und Zurechnung getrennt.',
    '',
    '## Kennzahlen',
    '',
    `- Handlungsfelder: ${s.total_actions}`,
    `- Prioritaet A: ${s.priority_a}`,
    `- lokale Ankersets: ${s.local_anchor_sets}`,
    `- auszugebende Artefakte: ${s.output_artifacts}`,
    `- Quote-Findings: ${s.key_counts.quote_findings}`,
    `- Actor-Registry-Zeilen: ${s.key_counts.actor_registry_rows}`,
    `- Quelleninventar: ${s.key_counts.inventory_sources}`,
    `- final gefuehrte Anlagen-Pinpoints: ${s.key_counts.final_pinpoints}`,
    '',
    '## Sieben Verfahrenshaertungen',
    '',
  ];
  for (const row of rows) {
    lines.push(`### ${row.id} - ${row.handlungsfeld}`);
    lines.push('');
    lines.push(`- Prioritaet: ${row.prioritaet}`);
    lines.push(`- Ziel: ${row.ziel}`);
    lines.push(`- Lokale Belege: ${row.lokale_belege.join('; ')}`);
    lines.push(`- Online-/Originalroute: ${row.online_originalroute}`);
    lines.push(`- Bestand: ${Object.entries(row.bestand).map(([key, value]) => `${key}=${value}`).join('; ')}`);
    lines.push(`- Visualisierung: ${row.visualisierung}`);
    lines.push(`- Verfahrensregel: ${row.verfahrensregel}`);
    lines.push(`- Outputs: ${row.outputs.join('; ')}`);
    lines.push('');
    lines.push('Umsetzung:');
    for (const item of row.umsetzung) lines.push(`- ${item}`);
    lines.push('');
  }
  lines.push('## Gesamtregel');
  lines.push('');
  lines.push('Validitaet vor Rhetorik: Keine neue Tatsachenbehauptung ohne Quelle, Pinpoint, Akteur/Ebene, Zurechnung, Status und Gegenlese. Diagramme duerfen nur vorhandene Kanten sichtbar machen. Presse, Chronik und Webroute sind nur dann stark, wenn der Primaeranker danebensteht.');
  lines.push('');
  return lines.join('\n');
}

function renderIndexSection(rows, s) {
  const cards = [
    ['7', 'Verfahrenshaertungen'],
    [String(s.key_counts.quote_findings), 'Quote-Findings zu buendeln'],
    [String(s.key_counts.route_only_sources), 'Presse-/Recherche-Routen'],
    [String(s.key_counts.chronik_clusters_to_dossier), 'Chronikcluster als Fallzeilen'],
    [String(s.key_counts.gutachten_audit_rows), 'Gutachten-Audit-Zeilen'],
    [String(s.key_counts.vorfeld_single_edges), 'Vorfeld-Einzelkanten'],
    [String(s.key_counts.status_axes + s.key_counts.laender_axes), 'Statusachsen'],
    [String(s.key_counts.final_pinpoints), 'finale Anlagen-Pinpoints'],
  ].map(([value, label]) => `
                        <div class="rounded-lg border border-slate-100 bg-white p-3">
                            <span class="block text-2xl font-extrabold text-brand-blue">${value}</span>
                            <span class="text-xs text-slate-500">${label}</span>
                        </div>`).join('');

  const actionRows = rows.map((row) => `
                        <div class="rounded-lg border border-slate-200 bg-slate-50 p-3">
                            <div class="flex items-center justify-between gap-3">
                                <span class="text-xs font-extrabold text-brand-blue">${row.id}</span>
                                <span class="text-[10px] font-bold rounded-full bg-red-50 text-red-700 px-2 py-1">Prioritaet ${row.prioritaet}</span>
                            </div>
                            <h4 class="mt-1 font-extrabold text-brand-dark">${row.handlungsfeld}</h4>
                            <p class="mt-1 text-xs text-slate-600">${row.ziel}</p>
                            <p class="mt-2 text-[11px] text-slate-500"><strong>Output:</strong> ${row.outputs.join('; ')}</p>
                            <p class="mt-1 text-[11px] text-slate-500"><strong>Visualisierung:</strong> ${row.visualisierung}</p>
                        </div>`).join('');

  return `
                <div id="statsFinalGapCloser" class="bg-white rounded-xl shadow p-6 border border-blue-100 space-y-4">
                    <div class="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                        <div>
                            <p class="text-xs font-bold uppercase tracking-wider text-brand-blue">Finale Verfahrenshaertung</p>
                            <h3 class="text-xl font-extrabold text-brand-dark">Was vor der Antragsschrift noch zu beschaffen, verlinken und visualisieren ist</h3>
                            <p class="text-sm text-slate-500 mt-1 max-w-5xl">Dieser Block trennt die fertige Belegbasis von der letzten Schriftsatzarbeit: Originalkanaele sichern, Zitatpakete buendeln, Chronikcluster als Einzelfaelle fuehren, Gutachten-Provenienz haerten, Statusachsen aktuell halten und die Beweisketten sichtbar machen.</p>
                        </div>
                        <a href="./dokumente/hauptquellen/ANTRAGSREIFE_FINAL_GAP_CLOSER_2026.md" target="_blank" class="shrink-0 bg-blue-50 hover:bg-blue-100 text-brand-blue font-bold px-4 py-2 rounded-lg text-xs transition inline-flex items-center gap-2">
                            <i class="fa-solid fa-list-check"></i>
                            <span>Gap-Closer öffnen</span>
                        </a>
                    </div>
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-3">${cards}
                    </div>
                    <div class="grid grid-cols-1 xl:grid-cols-2 gap-3">${actionRows}
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                        <a href="./daten/antragsreife_final_gap_closer_2026.jsonl" target="_blank" class="rounded-lg border border-blue-100 bg-blue-50/60 p-3 font-bold text-brand-blue hover:text-brand-gold">Gap-Closer JSONL</a>
                        <a href="./daten/antragsreife_final_gap_closer_2026_summary.json" target="_blank" class="rounded-lg border border-blue-100 bg-blue-50/60 p-3 font-bold text-brand-blue hover:text-brand-gold">Gap-Closer Summary</a>
                        <a href="./reports/antragsreife-final-gap-closer-2026-07-09.md" target="_blank" class="rounded-lg border border-blue-100 bg-blue-50/60 p-3 font-bold text-brand-blue hover:text-brand-gold">Gap-Closer Report</a>
                    </div>
                    <div class="rounded-lg border border-amber-200 bg-amber-50 p-4 text-xs leading-relaxed text-amber-900">
                        <strong>Verfahrensregel:</strong> Bis auf die Antragsschrift wird alles vorbereitet. Diagramme und Tabellen duerfen keine neue Zurechnung erzeugen; sie zeigen nur belegte Quellen-, Akteurs-, Status- und Fallkanten.
                    </div>
                </div>`;
}

function syncIndex(rows, s) {
  if (!fs.existsSync(FILES.index)) return;
  let html = fs.readFileSync(FILES.index, 'utf8');
  const section = renderIndexSection(rows, s);
  const start = '<div id="statsFinalGapCloser"';
  if (html.includes(start)) {
    const pattern = /                <div id="statsFinalGapCloser"[\s\S]*?\n                <div class="grid grid-cols-1 xl:grid-cols-2 gap-6">/;
    html = html.replace(pattern, `${section}\n\n                <div class="grid grid-cols-1 xl:grid-cols-2 gap-6">`);
  } else {
    html = html.replace(
      /\n                <div class="grid grid-cols-1 xl:grid-cols-2 gap-6">/,
      `\n${section}\n\n                <div class="grid grid-cols-1 xl:grid-cols-2 gap-6">`,
    );
  }
  fs.writeFileSync(FILES.index, html);
}

writeJsonl(FILES.outJsonl, finalRows);
writeJson(FILES.outJson, summary);
const md = renderMarkdown(finalRows, summary);
writeText(FILES.outMd, md);
writeText(FILES.report, md);
syncIndex(finalRows, summary);

console.log(`Final Gap Closer geschrieben: ${finalRows.length} Handlungsfelder, ${summary.local_anchor_sets} lokale Ankersets, ${summary.output_artifacts} Outputs.`);
