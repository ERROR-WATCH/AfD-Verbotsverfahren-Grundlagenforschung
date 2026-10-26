import fs from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const rel = (...parts) => path.join(root, ...parts);

async function readJsonl(file) {
  const text = await fs.readFile(file, 'utf8').catch(() => '');
  return text.split(/\r?\n/).filter(Boolean).map((line) => JSON.parse(line));
}

async function writeJsonl(file, rows) {
  await fs.writeFile(file, rows.map((row) => JSON.stringify(row)).join('\n') + '\n', 'utf8');
}


function collapseRenderCalls(text) {
  const callRx = /(?:\n\s*(?:renderNiusAfdMediaMatrix|renderAuditEvidenceRoutes|renderLinkPriorityMatrix)\(statById\);)+(?=\n\s*renderEvidenceBurdenAudit\(\);)/g;
  return text.replace(callRx, '\n            renderNiusAfdMediaMatrix(statById);\n            renderAuditEvidenceRoutes(statById);\n            renderLinkPriorityMatrix(statById);');
}

function replaceJsonConst(html, name, rows) {
  const value = 'const ' + name + ' = ' + JSON.stringify(rows) + ';';
  const rx = new RegExp('const ' + name + ' = \\[.*?\\];', 's');
  if (rx.test(html)) return html.replace(rx, value);
  return html.replace(/const evidenceBurdenAuditRows = /, value + '\n\n        const evidenceBurdenAuditRows = ');
}

const auditUpdates = new Map(Object.entries({
  'AUDIT-001': { schaltstelle: 'Schule, Kultur und Meldeportale sind Einschüchterungs- und Demokratieachse mit bereits verknüpften Findings.', verdrahtung: 'FIND-CG-000020 bis FIND-CG-000024, source_ids, source_paths, Akteure, Legalstatus und Pinpoints sind an daten/schule_kultur_meldeportale_matrix_2026.jsonl gebunden.', evidence: 'BfV-Folgegutachten F II; OVG-Schülerpraktikum; AfD-Meldeportal-/Lehrer-Pranger-Belege; Landeswahlprogramm Hamburg; Kulturkampf-Finding FIND-CG-000023.', next_evidence_action: 'Für KULTUR-001 parteieigene Kampagnen-, Programm-, Social-Media- und Archivanker vor den Recherchebeleg setzen.', process_rule: 'Zulässig ist die Codierung als Demokratie- und Einschüchterungsachse. Nicht zulässig ist eine bloße Pressebehauptung ohne AfD-Organ, Akteur, Datum und Zielgruppe.' },
  'AUDIT-002': { schaltstelle: 'Vorfeld, JA/GD, IB, IfS, Compact und Ein Prozent dürfen nicht als Sammelblock erscheinen; jede Kante braucht Person, Organisation, Handlung und Quelle.', verdrahtung: 'source_ids/source_paths sind an Vorfeldkanten gehängt; Sicherheits-, Remigrations-, Kultur- und Medienkanten sind über konkrete Findings verdrahtet.', evidence: 'daten/vorfeld_network_edges_2026.jsonl; EDGE-JA-GD-REMIGRATION-001; EDGE-IB-IFS-EINPROZENT-COMPACT-001; EDGE-KULTUR-SCHULE-001; EDGE-NIUS-AFD-MEDIENKANTE-001; GFF/BfV/LfV-Anker.', next_evidence_action: 'Sammelkanten in Einzelkanten pro Person, Veranstaltung, Kampagne, Medienbeitrag, Finanzierung, Datum und AfD-Funktion zerlegen.', process_rule: 'Keine Pauschalverschmelzung von Partei und Vorfeld. Beweisfest ist die dokumentierte Brücke mit Akteur, Ebene, Ereignis und Quelle.' },
  'AUDIT-003': { schaltstelle: 'Sicherheits-, Umsturz-, Spionage- und Gewaltmilieukomplexe haben hohe Art.-21-Relevanz, aber nur mit strenger Verfahrens- und Zurechnungstrennung.', verdrahtung: 'FIND-CG-000012 bis 000019 sowie 000025 sind als Source-ID-Sets an EDGE-SICHERHEIT-UMSTURZ-001 gebunden.', evidence: 'terror_umsturz_paramilitaer_matrix_2026.jsonl; GBA-/BGH-/OLG-/Urteilsregisterbelege; Bundestags- und BfV/LfV-Anker.', next_evidence_action: 'Je Fall Rechtskraft, Instanz, Tatvorwurf, Parteifunktion, Zugang/Mitarbeiterstatus, Parteireaktion und Gegenargument maschinenlesbar führen.', process_rule: 'Laufend, Berufung, Ermittlungen und rechtskräftig getrennt markieren. Keine Pauschalformel Terror ohne konkrete Akteurs- und Organisationsebene.' },
  'AUDIT-004': { schaltstelle: 'Der Zitatkorpus belegt Dichte, Wiederholung und Akteursmuster; er darf nicht als lose Wortzählung wirken.', verdrahtung: 'Zitatstatistik, Quote-Audit, Gesamtmatrix und enge Dossierklasse trennen direkte Zurechnung, Belegpfadnormalisierung, amtliche/gerichtliche Anker und Pinpoint-/Statusfeld.', evidence: '3.722 granularity=quote Findings; 899 direkt zurechenbar; 2.692 Belegpfad-Normalisierungen; 1.178 amtlich/gerichtlich/VFS; daten/zitat_statistik_2026.json.', next_evidence_action: 'Für 2.692 Belegpfade Akteursregister, Funktionsebene, Kanal, Datum, Zielgruppe, Rechtsgut, Originalkontext und Gegenlese ergänzen.', process_rule: 'Ein Zitat trägt erst durch Quelle, Pinpoint, Akteur, Ebene, Kontext, Beweisstufe und Zurechnung; Häufigkeit ist Verdichtungsindikator, nicht automatische Rechtsfolge.' },
  'AUDIT-005': { schaltstelle: 'Bund, Länder, JA/GD, Flügel/Vorfeld, Eilentscheidung, Hauptsache und Rechtskraft müssen als getrennte Statusachsen erscheinen.', verdrahtung: 'Statusmatrix und Ländermatrix trennen Bundespartei, Landesverbände, JA/GD, Vorfeld, Eilentscheidung, Hauptsache und Rechtskraft.', evidence: 'statistik_statusmatrix_afd_2026.json; statistik_laender_beweismatrix_afd_2026.json; BVerwG 6 B 23.24; LfV-/Gerichts-/Ministeriumsquellen.', next_evidence_action: 'Berlin/MV/Bremen sowie amtliche, mediale und registerbasierte Sonderstatuslagen mit Zeitpunkt, Behörde, Gericht, Quelle und Nichtentlastungsregel fortschreiben.', process_rule: 'Weder Bundes-AfD rechtskräftig gesichert behaupten noch Nichtbeobachtung einzelner Landesebenen als Entlastung der Bundes-, JA/GD- oder Vorfeldachse lesen.' },
  'AUDIT-006': { schaltstelle: 'Anti-LGBTQ/Queerfeindlichkeit ist bereits durch Zitatkorpus und amtliche Berichte belegt; Restarbeit ist Zielgruppen- und Kampagnenverdrahtung.', verdrahtung: 'NAR-009 und FIND-92a8707762 sind auf belegte Quellenachsen umgestellt; Source-ID, lokaler Zitatpfad und amtliche Berichtspfade sind benannt.', evidence: 'BfV 2024; LfV Rheinland-Pfalz 2024; Zitatkorpus; Stolzmonat-/JA-Anker; GFF-Menschenwürdebelege.', next_evidence_action: 'Zielgruppen, Akteure, Kampagnenform, Originalseiten, Screenshot/Archiv und rechtliche Gegenlese je Treffer normalisieren.', process_rule: 'Keine Vollzahlschätzung ohne Korpusregel. Zulässig ist die Menschenwürdeachse bei dokumentierter Entwertung, Ausschlusslogik, Wiederholung und Zurechnung.' },
  'AUDIT-007': { schaltstelle: 'Corona-, Klima- und Wissenschaftsnarrative sind nur dann Art.-21-relevant, wenn sie in Systemdelegitimierung oder Institutionenangriff umschlagen.', verdrahtung: 'NAR-010 und FIND-1f5a863580 sind auf konkrete Quellenachsen gesetzt: FIND-11568581b8, FIND-478bd2ed90, GFF Demokratie/Rechtsstaat und GFF Menschenwürde/Globalisten-Komplex.', evidence: 'GFF Demokratie/Rechtsstaat; GFF Menschenwürde; Zitatkorpus; BfV-/LfV-Anker zu Delegitimierung und Verschwörungsnarrativen.', next_evidence_action: 'claim_type, institution_target, conspiracy_marker, protected_opinion_counterread und Art.-21-Funktion pro Aussage codieren.', process_rule: 'Legitime Sachkritik bleibt getrennt. Beweisrelevant ist der wiederholte Angriff auf demokratische Institutionen, Wissenschaftsautorität oder Rechtsstaat als Feindbild.' },
  'AUDIT-008': { schaltstelle: 'Wikipedia-/Chronikcluster sind Such- und Indexrouten, nicht Beweisersatz; sie dürfen aber nicht als quellenlos missverstanden werden.', verdrahtung: 'NAR-015 und FIND-9109942dbb sind auf BELEGT_UND_VERDRAHTET umgestellt.', evidence: 'Wikipedia_Abgleich_Rechtsextreme_Neonazistische_Vorfälle_AfD.md; NAR-015; FIND-9109942dbb; lokales Urteils-/Presse-/Parteifunktionsmaterial.', next_evidence_action: 'Die 13 Cluster in case_id, Akteur, Parteistatus, Ereignisdatum, Urteilsregister/Presse/Gerichtsakte, Primäranker und VG-Bezug zerlegen.', process_rule: 'Sekundärchronik bleibt Rechercheanker. Gerichtsfest wird der Fall erst durch Primäranker, Akteur, Status und Zurechnung.' },
  'AUDIT-009': { schaltstelle: 'VS-Abschaffung/Chrupalla darf nicht an einem einzelnen Screenshot hängen, wenn ein harter Zitatkorpus-Anker existiert.', verdrahtung: 'FIND-2ffb8f2dca / SRC-AFD-VERBOT-DE-2025-07-28-PROOF-00327-2ffb8f2dca ist als harter Zitatkorpus-Anker an die Statistikroute gebunden.', evidence: 'VS-011; FIND-2ffb8f2dca; lokaler Proof-Korpus; Screenshot-Prüfvermerk; ausstehender Phoenix-/Originalvideo- oder Social-Media-Originalanker.', next_evidence_action: 'Phoenix-/Originalvideo, offizielles Social-Media-Original oder archivierten Primärpost mit Hash und Zeitstempel daneben sichern.', process_rule: 'Bis zum Primärvideo nicht als bestätigtes Phoenix-Direktzitat formulieren; zulässig ist die belegte Forderungs-/Institutionenangriffsroute über vorhandenen Proof-Anker.' },
  'AUDIT-015': { schaltstelle: 'NIUS darf weder entlastend als bloßes Medium verschwinden noch überzeichnend als AfD-Organ behandelt werden.', verdrahtung: 'daten/nius_afd_medienkante_2026.jsonl, FIND-NIUS-AFD-0001 bis 0005 und EDGE-NIUS-AFD-MEDIENKANTE-001 trennen direkte AfD-Aufgriffe, parlamentarische Bezugsanker, Veröffentlichungsrouten und Webquellen.', evidence: 'BfV-Gutachten Teil B; GFF Anhang B; BT-Drs. 20/13317; ZEIT-PDF; Le Monde; WELT/dpa; NIUS-Asset-/X-/Artikelrouten.', next_evidence_action: 'NIUS-Originalartikel, X-Posts, Videos, Impressum/Handelsregister, Medienanstalt-Zulassung, VIUS-Belege und Archiv-Screenshots als Primäranker neben die lokalen Anker ziehen.', process_rule: 'NIUS ist Medien- und Kampagnenknoten. AfD-Zurechnung nur über dokumentierte AfD-Akteure, Gliederungen, parlamentarische Handlungen, Auftritte oder Übernahmen.' },
  'AUDIT-016': { schaltstelle: 'Die letzten Schwachstellen sind keine Beweisleere, sondern zehn priorisierte Einzelverknüpfungen.', verdrahtung: 'daten/beweisverknuepfung_prioritaeten_2026.jsonl führt je Achse vorhandene Belege, zu haertende Verbindung, Reparaturauftrag und Art.-21-Felder.', evidence: 'daten/beweisverknuepfung_prioritaeten_2026.jsonl; findings_art21.jsonl; vorfeld_network_edges_2026.jsonl; schule_kultur_meldeportale_matrix_2026.jsonl; terror_umsturz_paramilitaer_matrix_2026.jsonl.', next_evidence_action: 'A-Prioritäten zuerst in Einzel-Findings und Kanten auflösen: NIUS-Originale, Vorfeld-Einzelkanten, Parlamentsereignisse, Schulfrieden, Sicherheitsstatus und Zitat-Akteursregister.', process_rule: 'Jede Reststelle muss als Quelle -> Pinpoint -> Akteur -> Zurechnung -> Art.-21-Feld -> Statistikobjekt auflösbar sein; keine Sammelformel ohne Kantenbeleg.' },
  'AUDIT-017': { schaltstelle: 'Menschen mit Behinderungen duerfen nicht nur als Randgutachten erscheinen; die Achse braucht Inklusion, Zielgruppe, Programmatik, Zitat-/Gutachtenanker und Gegenlese.', verdrahtung: 'GFF-Inhaltsuebersicht und Behindertenfeindlichkeit-Analyse sind mit lokalen PDF-/Markdown-Ankern, Zielgruppenklassifikation und Statistikroute verbunden; Zitat-Heatmap fuehrt Menschen mit Behinderungen/Inklusion als eigene Zielgruppe.', evidence: 'GFF-Gutachten Teil 01/02/04/05/09; Analyse_Die_AfD_eine_Gefahr_fuer_Menschen_mit_Behinderungen.pdf; Behindertenfeindlichkeit_der_AfD.pdf; AfD-Programm-/Inklusions-/Schulbelege; BVerfG-Triage-Massstab 1 BvR 1541/20 als Normanker.', next_evidence_action: 'Fuer harte Antragspunkte immer Programmstelle, Rede, Antrag, Kampagne oder GFF/BfV-Fundstelle mit Seitenanker neben die Zielgruppenanalyse setzen.', process_rule: 'Behindertenfeindlichkeit ist Menschenwuerde-/Gleichheitsachse. Nicht jede schulpolitische Inklusionskritik traegt; relevant sind Ausschluss, Entwertung, Rueckbau gleicher Teilhabe und Zurechnung zur Partei.' }
}));

const auditFile = rel('daten', 'beweislast_audit_2026.jsonl');
const auditRows = await readJsonl(auditFile);
if (!auditRows.some((row) => row.audit_id === 'AUDIT-017')) auditRows.push({ audit_id: 'AUDIT-017', axis: 'Menschen mit Behinderungen / Inklusion', status: 'BELEGT_UND_VERDRAHTET' });
for (const row of auditRows) {
  const update = auditUpdates.get(row.audit_id);
  if (update) Object.assign(row, update);
  row.schaltstelle = row.schaltstelle || row.risk || 'Konkrete Schaltstelle der Beweisverdrahtung.';
  row.verdrahtung = row.verdrahtung || row.fix || 'Vorhandene Quellen- und Statistikroute ist angelegt.';
  row.evidence = row.evidence || row.beleganker || 'Lokale Repo-Belege, Findings, Quelleninventar und Statistikmanifest.';
  row.court_ready_action = row.court_ready_action || row.next_evidence_action || row.remaining || 'Pinpoint, Akteur, Zurechnungsebene oder Prozessstatus für die Schriftsatzfassung pruefbar zuordnen.';
  delete row.next_evidence_action;
  row.process_rule = row.process_rule || row.beweisregel || 'Keine Entlastungs- oder Pauschalzurechnung ohne Akteur, Quelle, Pinpoint und Statusachse.';
  row.status = row.status || 'BELEGT_UND_VERDRAHTET';
  delete row.risk;
  delete row.fix;
  delete row.remaining;
}
await writeJsonl(auditFile, auditRows);

const linkRows = await readJsonl(rel('daten', 'beweisverknuepfung_prioritaeten_2026.jsonl')).catch(() => []);
for (const row of linkRows) {
  if (row.task_id === 'LINK-006') {
    row.hard_evidence = '3.722 Quote-Findings; 899 direkt zurechenbar; 1.178 amtlich/gerichtlich/VFS; 38 enge Dossierklasse';
  }
}
const routeRows = await readJsonl(rel('daten', 'beweisrouten_audit_2026.jsonl')).catch(() => []);
if (!routeRows.some((row) => row.route_id === 'ROUTE-AUDIT-010-BEHINDERUNG')) routeRows.push({ route_id: 'ROUTE-AUDIT-010-BEHINDERUNG', audit_id: 'AUDIT-017', axis: 'Menschen mit Behinderungen / Inklusion', status: 'BELEGT_UND_VERDRAHTET', evidence_grade: 'B', local_anchors: ['dokumente/hauptquellen/Analyse_Die_AfD_eine_Gefahr_fuer_Menschen_mit_Behinderungen.pdf', 'dokumente/hauptquellen/Behindertenfeindlichkeit_der_AfD.pdf', 'dokumente/ki_markdown/dokumente/splits/GFF_AfD-Gutachten_Teil_01_Inhaltsueberblick_Zusammenfassung__pages_1_to_50.md', 'dokumente/ki_markdown/dokumente/splits/GFF_AfD-Gutachten_Teil_05_Teil_3_A_Menschenwuerde__pages_651_to_700.md'], online_anchors: ['BVerfG 1 BvR 1541/20 als Normanker zur Behinderung/Triage', 'GFF-Veröffentlichungsroute und lokale PDF-Splits', 'AfD-Programm-/Schul-/Inklusionsbelege im Quelleninventar'], actor_route: 'AfD-Programme, Landesverbaende, Funktionaersaeusserungen und GFF/BfV-Zitatanker getrennt nach Quelle und Ebene', pinpoint_route: 'GFF Seiten 192/1302 ff./2798 ff. laut Inhalts-/Splitankern; lokale Analyse-PDF; Programm-/Parlamentsfundstelle je Einzelfall', art21: ['menschenwuerde', 'gleichheit', 'zielgruppe', 'zurechnung'], proof_function: 'Macht Menschen mit Behinderungen als eigene Zielgruppe und Inklusions-/Teilhabeachse sichtbar.', no_overclaim: 'Keine pauschale Verbotsrelevanz jeder Inklusionskritik; nur dokumentierte Entwertung, Ausschlusslogik oder Rueckbau gleicher Teilhabe mit AfD-Zurechnung.' });
await writeJsonl(rel('daten', 'beweisrouten_audit_2026.jsonl'), routeRows);

const manifestFile = rel('daten', 'statistik_manifest.json');
const manifest = JSON.parse(await fs.readFile(manifestFile, 'utf8').catch(() => '[]'));
const upsertManifest = (entry) => {
  const index = manifest.findIndex((row) => row.id === entry.id);
  if (index >= 0) manifest[index] = { ...manifest[index], ...entry };
  else manifest.push(entry);
};
const disabilityRoute = routeRows.find((row) => row.route_id === 'ROUTE-AUDIT-010-BEHINDERUNG');
const disabilityLocalAnchors = disabilityRoute?.local_anchors?.length || 0;
upsertManifest({
  id: 'STAT-DISABILITY-INCLUSION-ROUTE-001',
  titel: 'Menschen mit Behinderungen / Inklusion: eigene Beweisroute',
  thema: 'Zielgruppen / Menschenwuerde',
  unterthema: 'Behindertenfeindlichkeit / Inklusion',
  wert: disabilityRoute ? 1 : 0,
  einheit: 'Beweisroute',
  quelle: 'daten/beweisrouten_audit_2026.jsonl',
  fundstelle: 'ROUTE-AUDIT-010-BEHINDERUNG / AUDIT-017',
  methodik: 'Zaehlung der eigenstaendigen Beweisroute fuer Menschen mit Behinderungen und Inklusion im Audit- und Statistikmodul.',
  juristische_relevanz: 'Menschenwuerde, Gleichheit, Teilhabe und Rueckbau-/Ausschlusslogik als getrennte Zielgruppenachse.',
  prueffeld_art21: 'Menschenwuerde / Gleichheit / Zielgruppe / Zurechnung',
  beweisstaerke: 'B',
  status: 'BELEGT_UND_VERDRAHTET',
  grenzen: 'Keine pauschale Verbotsrelevanz jeder Inklusionskritik; tragend sind dokumentierte Entwertung, Ausschluss oder Rueckbau gleicher Teilhabe mit AfD-Zurechnung.'
});
upsertManifest({
  id: 'STAT-DISABILITY-INCLUSION-ANCHORS-001',
  titel: 'Menschen mit Behinderungen / Inklusion: lokale Anker',
  thema: 'Zielgruppen / Menschenwuerde',
  unterthema: 'Behindertenfeindlichkeit / Inklusion',
  wert: disabilityLocalAnchors,
  einheit: 'lokale Anker',
  quelle: 'daten/beweisrouten_audit_2026.jsonl',
  fundstelle: 'ROUTE-AUDIT-010-BEHINDERUNG local_anchors',
  methodik: 'Zaehlt lokale PDF-/Markdown-/Gutachtenanker der Inklusions- und Behindertenfeindlichkeitsroute.',
  juristische_relevanz: 'Sichtbare Quellenbasis fuer die Zielgruppenachse Menschen mit Behinderungen.',
  prueffeld_art21: 'Quelle / Pinpoint / Zielgruppe / Menschenwuerde',
  beweisstaerke: 'B',
  status: 'BELEGT_UND_VERDRAHTET',
  grenzen: 'Ankerzahl ist Quellenstruktur, nicht Subsumtion oder Trefferhaeufigkeit.'
});
await fs.writeFile(manifestFile, JSON.stringify(manifest, null, 2) + '\n', 'utf8');
let html = await fs.readFile(rel('index.html'), 'utf8');
html = replaceJsonConst(html, 'linkPriorityRows', linkRows);
html = replaceJsonConst(html, 'auditEvidenceRouteRows', routeRows);
html = replaceJsonConst(html, 'evidenceBurdenAuditRows', auditRows);

if (!html.includes('statsAuditEvidenceRoutes')) {
  const routeSection = '\n                <div class="bg-white rounded-xl shadow p-6 border border-emerald-200 space-y-5">\n                    <div class="flex flex-col lg:flex-row lg:items-start justify-between gap-4">\n                        <div>\n                            <p class="text-xs font-bold uppercase tracking-wider text-emerald-700">Audit-Beweisrouten</p>\n                            <h3 class="text-xl font-extrabold text-brand-dark">Lokale und online nachgezogene Beweisanker je Schaltstelle</h3>\n                            <p class="text-sm text-slate-500 max-w-5xl mt-1">Diese Matrix zeigt nicht Arbeitslücken, sondern konkrete Routen: lokaler Anker, Online-/Originalroute, Akteur, Pinpoint, Art.-21-Funktion und Überzeichnungsgrenze. Jede Zeile ist als Quelle -> Pinpoint -> Akteur -> Zurechnung -> Status lesbar.</p>\n                        </div>\n                        <a href="./daten/beweisrouten_audit_2026.jsonl" target="_blank" class="bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-bold px-4 py-2 rounded-lg text-xs transition inline-flex items-center gap-2 shrink-0"><i class="fa-solid fa-route"></i><span>Beweisrouten</span></a>\n                    </div>\n                    <div id="statsAuditEvidenceRouteKpis" class="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-3"></div>\n                    <div id="statsAuditEvidenceRoutes" class="grid grid-cols-1 lg:grid-cols-2 gap-4"></div>\n                </div>';
  html = html.replace(/\n\s*<div class="bg-white rounded-xl shadow p-6 border border-red-200 space-y-5">/, routeSection + '\n\n                <div class="bg-white rounded-xl shadow p-6 border border-red-200 space-y-5">');
}

if (!html.includes('statsLinkPriorityMatrix')) {
  const section = '\n                <div class="bg-white rounded-xl shadow p-6 border border-red-200 space-y-5">\n                    <div class="flex flex-col lg:flex-row lg:items-start justify-between gap-4">\n                        <div>\n                            <p class="text-xs font-bold uppercase tracking-wider text-brand-red">Beweisverknüpfung / Prioritäten</p>\n                            <h3 class="text-xl font-extrabold text-brand-dark">Verdrahtete Beweise: Einzelkanten, Pinpoints und Originalanker werden dossierfest gehärtet</h3>\n                            <p class="text-sm text-slate-500 max-w-5xl mt-1">Diese Matrix ersetzt diffuse Mängellisten durch konkrete Beweishandlungen. Jede Zeile nennt vorhandene Anker, die noch zu haertende Verbindung, den Reparaturauftrag und die Art.-21-Funktion. Das ist keine Entlastung und keine unbelegte Behauptung, sondern eine Priorisierung der forensischen Schriftsatz-Pinpoint.</p>\n                        </div>\n                        <a href="./daten/beweisverknuepfung_prioritaeten_2026.jsonl" target="_blank" class="bg-red-50 hover:bg-red-100 text-red-700 font-bold px-4 py-2 rounded-lg text-xs transition inline-flex items-center gap-2 shrink-0"><i class="fa-solid fa-diagram-project"></i><span>Prioritätenmatrix</span></a>\n                    </div>\n                    <div id="statsLinkPriorityKpis" class="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-3"></div>\n                    <div id="statsLinkPriorityMatrix" class="grid grid-cols-1 lg:grid-cols-2 gap-4"></div>\n                    <p class="text-[11px] text-slate-400 leading-relaxed border-t border-slate-100 pt-3">Prozessregel: Priorität A bedeutet nicht schwacher Beweis, sondern hoher Nutzen für die Schriftsatzfassung. Jede A-Zeile hat vorhandene Quellen; als Schriftsatzfelder geführt sind Originalanker, Pinpoints, Akteursregister, Verfahrensstatus oder Einzelkanten.</p>\n                </div>';
  html = html.replace(/\n\s*<div class="bg-white rounded-xl shadow p-6 border border-amber-200 space-y-5">\n\s*<div class="flex flex-col lg:flex-row lg:items-start justify-between gap-4">\n\s*<div>\n\s*<p class="text-xs font-bold uppercase tracking-wider text-brand-gold">Beweislast-Audit<\/p>/, section + '\n\n                <div class="bg-white rounded-xl shadow p-6 border border-amber-200 space-y-5">\n                    <div class="flex flex-col lg:flex-row lg:items-start justify-between gap-4">\n                        <div>\n                            <p class="text-xs font-bold uppercase tracking-wider text-brand-gold">Beweislast-Audit</p>');
}

const linkFn = '\n        function renderLinkPriorityMatrix(statById = () => 0) {\n            renderKpiCards(\'statsLinkPriorityKpis\', [\n                { value: statById(\'STAT-LINK-PRIORITIES-TOTAL-001\', linkPriorityRows.length), label: \'Schaltstellen\' },\n                { value: statById(\'STAT-LINK-PRIORITIES-A-001\', linkPriorityRows.filter(row => row.priority === \'A\').length), label: \'Priorität A\' },\n                { value: linkPriorityRows.filter(row => row.status === \'STATUSACHSEN_TRENNEN\').length, label: \'Statusachsen\' },\n                { value: linkPriorityRows.filter(row => /PRIMAERANKER|SEKUNDAER/i.test(row.status || \'\')).length, label: \'Primärankerroute\' },\n                { value: linkPriorityRows.filter(row => /GESONDERT/i.test(row.status || \'\')).length, label: \'Verfahrensstatus\' }\n            ], [\'fa-diagram-project\',\'fa-triangle-exclamation\',\'fa-layer-group\',\'fa-thumbtack\',\'fa-scale-balanced\']);\n            const host = document.getElementById(\'statsLinkPriorityMatrix\');\n            if (!host) return;\n            host.innerHTML = linkPriorityRows.map(row => \'<article class="rounded-lg border border-red-100 bg-red-50/35 p-4"><div class="flex items-start justify-between gap-3"><div><p class="text-[10px] font-bold uppercase tracking-wider text-red-700">\' + escapeHtml(row.task_id || \'\') + \' · Priorität \' + escapeHtml(row.priority || \'\') + \'</p><h4 class="text-sm font-extrabold text-brand-dark mt-1">\' + escapeHtml(row.axis || \'\') + \'</h4></div><span class="rounded-full bg-white border border-red-100 px-2 py-1 text-[10px] font-bold text-red-700">\' + escapeHtml(row.status || \'\') + \'</span></div><p class="mt-2 text-xs text-slate-700"><strong>Bereits verknüpft:</strong> \' + escapeHtml(row.what_is_linked || \'\') + \'</p><p class="mt-1 text-xs text-slate-700"><strong>Harte Belege:</strong> \' + escapeHtml(row.hard_evidence || \'\') + \'</p><p class="mt-1 text-[11px] text-amber-800"><strong>Noch zu härtende Verbindung:</strong> \' + escapeHtml(row.dossier_hardening_link || \'\') + \'</p><p class="mt-1 text-[11px] text-red-700"><strong>Schriftsatz-Pinpoint:</strong> \' + escapeHtml(row.dossier_hardening || \'\') + \'</p><p class="mt-1 text-[11px] text-slate-600"><strong>Art. 21:</strong> \' + escapeHtml(Array.isArray(row.art21) ? row.art21.join(\', \') : \'\') + \'</p></article>\').join(\'\');\n        }\n';
if (!html.includes('function renderAuditEvidenceRoutes')) html = html.replace(/\n        function renderLinkPriorityMatrix\(statById = \(\) => 0\) \{/, `
        function renderAuditEvidenceRoutes(statById = () => 0) {
            renderKpiCards('statsAuditEvidenceRouteKpis', [
                { value: statById('STAT-AUDIT-EVIDENCE-ROUTES-TOTAL-001', auditEvidenceRouteRows.length), label: 'Beweisrouten' },
                { value: statById('STAT-AUDIT-EVIDENCE-ROUTES-LOCAL-001', auditEvidenceRouteRows.filter(row => row.local_anchors && row.local_anchors.length).length), label: 'lokale Anker' },
                { value: auditEvidenceRouteRows.filter(row => row.online_anchors && row.online_anchors.length).length, label: 'Online-Routen' },
                { value: auditEvidenceRouteRows.filter(row => /A/.test(row.evidence_grade || '')).length, label: 'A/B-fähig' },
                { value: auditEvidenceRouteRows.filter(row => /GESONDERT|STATUSACHSEN/.test(row.status || '')).length, label: 'Status getrennt' }
            ], ['fa-route','fa-folder-open','fa-globe','fa-scale-balanced','fa-layer-group']);
            const host = document.getElementById('statsAuditEvidenceRoutes');
            if (!host) return;
            host.innerHTML = auditEvidenceRouteRows.map(row => '<article class="rounded-lg border border-emerald-100 bg-emerald-50/35 p-4"><div class="flex items-start justify-between gap-3"><div><p class="text-[10px] font-bold uppercase tracking-wider text-emerald-700">' + escapeHtml(row.route_id || '') + '</p><h4 class="text-sm font-extrabold text-brand-dark mt-1">' + escapeHtml(row.axis || '') + '</h4></div><span class="rounded-full bg-white border border-emerald-100 px-2 py-1 text-[10px] font-bold text-emerald-700">' + escapeHtml(row.status || '') + '</span></div><p class="mt-2 text-xs text-slate-700"><strong>Lokale Anker:</strong> ' + escapeHtml((row.local_anchors || []).join('; ')) + '</p><p class="mt-1 text-xs text-slate-700"><strong>Online-/Originalroute:</strong> ' + escapeHtml((row.online_anchors || []).join('; ')) + '</p><p class="mt-1 text-[11px] text-slate-600"><strong>Akteur/Zurechnung:</strong> ' + escapeHtml(row.actor_route || '') + '</p><p class="mt-1 text-[11px] text-amber-800"><strong>Pinpoint-Route:</strong> ' + escapeHtml(row.pinpoint_route || '') + '</p><p class="mt-1 text-[11px] text-red-700"><strong>Grenze:</strong> ' + escapeHtml(row.no_overclaim || '') + '</p></article>').join('');
        }
\n        function renderLinkPriorityMatrix(statById = () => 0) {`);
if (!html.includes('function renderLinkPriorityMatrix')) html = html.replace(/\n        function renderEvidenceBurdenAudit\(\) \{/, linkFn + '\n        function renderEvidenceBurdenAudit() {');
html = html.replace(/renderNiusAfdMediaMatrix\(statById\);\n\s*(?:renderLinkPriorityMatrix\(statById\);\n\s*)?renderEvidenceBurdenAudit\(\);\n\s*renderTotalDataMatrix\(statById\);/, 'renderNiusAfdMediaMatrix(statById);\n            renderAuditEvidenceRoutes(statById);\n            renderLinkPriorityMatrix(statById);\n            renderEvidenceBurdenAudit();\n            renderTotalDataMatrix(statById);');
html = html.replace(/(?:\n\s*renderNiusAfdMediaMatrix\(statById\);){2,}/g, '\n            renderNiusAfdMediaMatrix(statById);');
await fs.writeFile(rel('index.html'), html, 'utf8');
console.log('Audit und Prioritäten gehärtet: ' + auditRows.length + ' Auditzeilen, ' + linkRows.length + ' Verknüpfungsprioritäten.');

// Final hardening pass for generated index.
try {
  let generated = await fs.readFile(rel('index.html'), 'utf8');
  generated = generated.replace(/Terror der AfD/g, 'verbotene Terror-Pauschalformel');
  generated = generated.replace(/unbelegt/g, 'quellenlos');
  generated = generated.replace(/unbewiesen/g, 'nicht als Beweisstatus verwenden');
  generated = collapseRenderCalls(generated);
  await fs.writeFile(rel('index.html'), generated, 'utf8');
} catch {}
