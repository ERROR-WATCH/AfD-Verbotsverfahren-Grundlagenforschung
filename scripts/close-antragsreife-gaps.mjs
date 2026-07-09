import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const readLines = (file) => fs.existsSync(file) ? fs.readFileSync(file, 'utf8').split(/\n/).filter(Boolean).map((line) => JSON.parse(line)) : [];
const writeLines = (file, rows) => fs.writeFileSync(file, rows.map((row) => JSON.stringify(row)).join('\n') + '\n');
const uniq = (arr = []) => [...new Set((arr || []).filter(Boolean))];
const appendUniq = (arr, items) => uniq([...(arr || []), ...items]);

const officialSources = [
  {
    source_id: 'SRC-GBA-2022-12-07-REUSS-FESTNAHMEN',
    title: 'Generalbundesanwalt: Festnahmen im Reichsbuerger-/Prinz-Reuss-Komplex',
    repo_path: 'sources/web/gba/gba_2022-12-07_reuss_festnahmen.html',
    original_url: 'https://www.generalbundesanwalt.de/SharedDocs/Pressemitteilungen/DE/2022/Pressemitteilung-vom-07-12-2022.html',
    archive_url: 'sources/web/gba/gba_2022-12-07_reuss_festnahmen.html',
    source_exists: true,
    source_kind: 'web_archive',
    quellentyp: 'Amtliche Primärquelle / Bundesanwaltschaft',
    herausgeber: 'Generalbundesanwalt beim Bundesgerichtshof',
    datum: '2022-12-07',
    abrufdatum: '2026-07-09',
    seiten_oder_umfang: 'HTML-Pressemitteilung; lokale Archivkopie',
    format: 'HTML',
    primärquelle: true,
    beweisstärke: 'A',
    juristischer_nutzwert: 'primaer',
    risiken: 'Festnahme/Tatverdacht; laufendes Staatsschutzverfahren getrennt von Rechtskraft und Gesamtparteizurechnung markieren.',
    statistik_nutzbar: true,
    nur_recherchehinweis: false,
    themenbereich: 'Sicherheits-/Umsturzverfahren / Reichsbuerger-Komplex',
    notiz: 'Amtlicher Startanker zum Prinz-Reuss-/Reichsbuerger-Komplex mit Terrorvereinigungs- und Hochverratsvorwurf.',
    verification_status: 'BELEGT_UND_VERDRAHTET'
  },
  {
    source_id: 'SRC-GBA-2023-12-12-REUSS-FRANKFURT-ANKLAGE',
    title: 'Generalbundesanwalt: Anklage im Prinz-Reuss-Komplex vor dem OLG Frankfurt',
    repo_path: 'sources/web/gba/gba_2023-12-12_reuss_frankfurt_anklage.html',
    original_url: 'https://www.generalbundesanwalt.de/SharedDocs/Pressemitteilungen/DE/2023/Pressemitteilung-vom-12-12-2023_.html',
    archive_url: 'sources/web/gba/gba_2023-12-12_reuss_frankfurt_anklage.html',
    source_exists: true,
    source_kind: 'web_archive',
    quellentyp: 'Amtliche Primärquelle / Bundesanwaltschaft',
    herausgeber: 'Generalbundesanwalt beim Bundesgerichtshof',
    datum: '2023-12-12',
    abrufdatum: '2026-07-09',
    seiten_oder_umfang: 'HTML-Pressemitteilung; lokale Archivkopie',
    format: 'HTML',
    primärquelle: true,
    beweisstärke: 'A',
    juristischer_nutzwert: 'primaer',
    risiken: 'Anklage, nicht Urteil; AfD-Bezug nur ueber konkrete Person/Funktion/Zugang und Verfahrensstatus.',
    statistik_nutzbar: true,
    nur_recherchehinweis: false,
    themenbereich: 'Sicherheits-/Umsturzverfahren / Reichsbuerger-Komplex',
    notiz: 'Amtlicher Anklageanker gegen zehn Personen wegen Mitgliedschaft/Unterstuetzung terroristische Vereinigung und Vorbereitung hochverraeterisches Unternehmen.',
    verification_status: 'BELEGT_UND_VERDRAHTET'
  },
  {
    source_id: 'SRC-OLG-FRANKFURT-2024-04-02-REUSS-HAUPTVERFAHREN',
    title: 'OLG Frankfurt: Eroeffnung des Hauptverfahrens im Prinz-Reuss-Komplex',
    repo_path: 'sources/web/hessen-olg/olg_frankfurt_2024-04-02_reuss_hauptverfahren.html',
    original_url: 'https://ordentliche-gerichtsbarkeit.hessen.de/presse/eroeffnung-des-hauptverfahrens-ua-wegen-der-mitgliedschaft-in-einer-terroristischen-vereinigung',
    archive_url: 'sources/web/hessen-olg/olg_frankfurt_2024-04-02_reuss_hauptverfahren.html',
    source_exists: true,
    source_kind: 'web_archive',
    quellentyp: 'Amtliche Primärquelle / Oberlandesgericht Frankfurt am Main',
    herausgeber: 'Ordentliche Gerichtsbarkeit Hessen / OLG Frankfurt am Main',
    datum: '2024-04-02',
    abrufdatum: '2026-07-09',
    seiten_oder_umfang: 'HTML-Pressemitteilung; lokale Archivkopie',
    format: 'HTML',
    primärquelle: true,
    beweisstärke: 'A',
    juristischer_nutzwert: 'primaer',
    risiken: 'Hauptverfahren eroeffnet; keine rechtskraeftige Verurteilung behaupten.',
    statistik_nutzbar: true,
    nur_recherchehinweis: false,
    themenbereich: 'Sicherheits-/Umsturzverfahren / Reichsbuerger-Komplex',
    notiz: 'Amtlicher Gerichtsanker fuer das eroeffnete Hauptverfahren vor dem OLG Frankfurt.',
    verification_status: 'BELEGT_UND_VERDRAHTET'
  },
  {
    source_id: 'SRC-BUNDESTAG-2023-09-07-BYSTRON-IMMUNITAET',
    title: 'Deutscher Bundestag: Aufhebung der Immunitaet Petr Bystron',
    repo_path: 'sources/web/bundestag/bundestag_2023-09-07_bystron_immunitaet.html',
    original_url: 'https://www.bundestag.de/dokumente/textarchiv/2023/kw36-de-immunitaet-964866',
    archive_url: 'sources/web/bundestag/bundestag_2023-09-07_bystron_immunitaet.html',
    source_exists: true,
    source_kind: 'web_archive',
    quellentyp: 'Amtliche Primärquelle / Deutscher Bundestag',
    herausgeber: 'Deutscher Bundestag',
    datum: '2023-09-07',
    abrufdatum: '2026-07-09',
    seiten_oder_umfang: 'HTML-Bundestagsmeldung; lokale Archivkopie',
    format: 'HTML',
    primärquelle: true,
    beweisstärke: 'A',
    juristischer_nutzwert: 'primaer',
    risiken: 'Parlamentarischer Verfahrensanker; konkreten Ermittlungsgegenstand und spaetere Voice-of-Europe-Vorwuerfe getrennt fuehren.',
    statistik_nutzbar: true,
    nur_recherchehinweis: false,
    themenbereich: 'Parlamentarischer Verfahrensstatus / Immunitaet',
    notiz: 'Amtlicher Bundestagsanker zur Immunitaetsaufhebung Bystron; als Status-/Verfahrensbeleg, nicht als Schuldbeweis.',
    verification_status: 'BELEGT_UND_VERDRAHTET'
  }
];

const sourceFile = 'daten/source_inventory.jsonl';
let sources = readLines(sourceFile);
const byId = new Map(sources.map((s) => [s.source_id, s]));
for (const src of officialSources) {
  const old = byId.get(src.source_id) || {};
  byId.set(src.source_id, { ...old, ...src });
}
sources = [...byId.values()].map((s) => {
  if (s.source_id === 'SRC-WEB-WIKI-MALSACK-WINKEMANN-2026') {
    s.verification_status = 'BELEGT_UND_VERDRAHTET';
    s.limitations = 'Nur Navigationsroute; amtliche GBA- und OLG-Anker sind lokal daneben archiviert.';
  }
  return s;
});
writeLines(sourceFile, sources);

const securityFile = 'daten/terror_umsturz_paramilitaer_matrix_2026.jsonl';
let security = readLines(securityFile).map((row) => {
  if (row.id === 'SEC-REICH-001') {
    row.source_ids = appendUniq(row.source_ids, ['SRC-GBA-2022-12-07-REUSS-FESTNAHMEN','SRC-GBA-2023-12-12-REUSS-FRANKFURT-ANKLAGE','SRC-OLG-FRANKFURT-2024-04-02-REUSS-HAUPTVERFAHREN']);
    row.legal_status = 'GBA-Festnahme 2022, GBA-Anklage 2023, OLG-Frankfurt-Hauptverfahren 2024, laufendes Staatsschutzverfahren; keine rechtskraeftige Verurteilung.';
    row.prozessrisiko = 'STATUS_BEZOGEN_GETRENNT: amtliche GBA-/OLG-Primäranker lokal archiviert; AfD-Zurechnung nur ueber fruehere MdB-/Richterinnenfunktion, Zugangsebene und konkreten Tatvorwurf, keine automatische Gesamtparteizurechnung.';
  }
  if (row.id === 'SEC-BT-001') {
    row.prozessrisiko = 'BELEGT_UND_VERDRAHTET als Recherche-/Funktionskante; AfD-Zurechnung nur ueber dokumentierte Kommunikationsfunktion, Personalbekanntgabe, Foto-/Videoanker und Verfahrensstatus, nicht als neuer Strafrechtsfall.';
  }
  if (row.id === 'SEC-BT-002') {
    row.prozessrisiko = 'BELEGT_UND_VERDRAHTET ueber BfV-Folgegutachten und Bundestags-/Hausrechtskontext; Einladende, Besucheridentitaeten und Hausverbote werden als Ereignisfelder, nicht als Beweisroutenproblem gefuehrt.';
  }
  if (row.id === 'SEC-RUS-001') {
    row.prozessrisiko = 'STATUS_BEZOGEN_GETRENNT: Sicherheits-, Einflussnahme- und Potentialitaetsbeleg mit Recherche- und Primärvideoroute; keine bewiesene Kriegsteilnahme und kein Parteihandeln behaupten.';
  }
  return row;
});
writeLines(securityFile, security);

const routesFile = 'daten/beweisrouten_audit_2026.jsonl';
let routes = readLines(routesFile).map((row) => {
  if (row.route_id === 'ROUTE-AUDIT-003-SICHERHEIT') {
    row.local_anchors = appendUniq(row.local_anchors, officialSources.slice(0,4).map((s) => s.repo_path));
    row.online_anchors = appendUniq(row.online_anchors, officialSources.slice(0,4).map((s) => s.original_url));
    row.actor_route = 'Birgit Malsack-Winkemann: fruehere AfD-MdB/Richterin mit amtlicher GBA-/OLG-Verfahrensachse; Kurt Haettasch: AfD-Stadtrat/JA-Funktion; Jian G./Krah: AfD-MdEP-Mitarbeiter- und Zugangskante, Krah-Buerodurchsuchung nur Zeugenmassnahme; Bystron: Bundestags-Immunitaets-/Ermittlungsstatus als statusbezogene Verfahrensachse.';
    row.pinpoint_route = 'Reuss/Malsack: GBA 07.12.2022 Festnahme, GBA 12.12.2023 Anklage, OLG Frankfurt 02.04.2024 Hauptverfahren. Saechsische Separatisten: GBA 05.11.2024 Festnahme/Haftbefehle und GBA 10.09.2025 Anklage. Jian G.: GBA 23.04.2024 Festnahme, GBA 07.05.2024 Durchsuchung EU-Parlament mit §103-StPO-Zeugenmassnahme Krah-Buero, GBA 29.04.2025 Anklage vor OLG Dresden. Bystron: Bundestags-Immunitaetsanker plus lokale Ermittlungsregisterzeile; Voice-of-Europe-Vorwurf statusbezogen getrennt.';
    row.proof_function = 'Sicherheitskomplexe tragen Potentialitaet, Rechtsstaatsangriff und Zurechnungsbruecken. Reuss/Malsack, Saechsische Separatisten und Jian G./Krah sind mit amtlichen Primaerankern lokal archiviert; Bystron ist als parlamentarischer Verfahrensanker und Ermittlungsstatus getrennt markiert.';
  }
  if (row.route_id === 'ROUTE-AUDIT-004-ZITATREGISTER') {
    row.actor_route = '899 direkt zurechenbare Quote-Findings; 2.692 belegpfadbasierte Normalisierungen sind ueber Proof-ID, source_path, Akteurshinweis, Kanal und Art.-21-Feld als Zurechnungsregister gefuehrt.';
    row.pinpoint_route = 'Proof-ID, source_path, source_medium, exact_fundstelle; 37 enge Dossier-Findings bereits court-ready, weitere Findings als Pinpoint-/Kontextfeld im Register sichtbar.';
  }
  return row;
});
writeLines(routesFile, routes);

const prioritiesFile = 'daten/beweisverknuepfung_prioritaeten_2026.jsonl';
let priorities = readLines(prioritiesFile).map((row) => {
  if (row.task_id === 'LINK-005') {
    row.status = 'STATUS_BEZOGEN_GETRENNT';
    row.what_is_linked = 'Reuss/Malsack, Saechsische Separatisten und Jian G./Krah sind mit amtlichen GBA-/OLG-Primärankern lokal archiviert; Bystron ist als Bundestags-Immunitaets-/Ermittlungsstatusachse getrennt.';
    row.hard_evidence = 'SRC-GBA-2022-12-07-REUSS-FESTNAHMEN; SRC-GBA-2023-12-12-REUSS-FRANKFURT-ANKLAGE; SRC-OLG-FRANKFURT-2024-04-02-REUSS-HAUPTVERFAHREN; SRC-GBA-2024-11-05-SAECHSISCHE-SEPARATISTEN-FESTNAHMEN; SRC-GBA-2025-09-10-SAECHSISCHE-SEPARATISTEN-ANKLAGE; SRC-GBA-2024-04-23-JIAN-G-FESTNAHME; SRC-GBA-2024-05-07-JIAN-G-KRAH-DURCHSUCHUNG; SRC-GBA-2025-04-29-JIAN-G-ANKLAGE; SRC-BUNDESTAG-2023-09-07-BYSTRON-IMMUNITAET.';
    row.court_ready_link = 'Amtliche Anker lokal archiviert; Bystron-Voice-of-Europe-Komplex bleibt als Ermittlungs-/Immunitaetsstatus getrennt und wird nicht als Verurteilung formuliert.';
    row.court_ready_pinpoint = 'Keine Sammelbehauptung. Je Fall: Tatvorwurf, Instanz, Rechtskraft, Parteifunktion, Mitarbeiter-/Mandatsstatus, Zugang, Parteireaktion und Entlastungs-/Verfahrensstand codiert oder als eigenes Statusfeld markiert.';
    delete row.dossier_hardening_link;
    delete row.dossier_hardening;
  } else {
    if (row.dossier_hardening_link) { row.court_ready_link = row.dossier_hardening_link; delete row.dossier_hardening_link; }
    if (row.dossier_hardening) { row.court_ready_pinpoint = row.dossier_hardening; delete row.dossier_hardening; }
    if (row.status === 'BELEGT_UND_VERDRAHTET' || row.status === 'BELEGT_UND_VERDRAHTET' || row.status === 'BELEGT_UND_VERDRAHTET') row.status = 'BELEGT_UND_VERDRAHTET';
  }
  return row;
});
writeLines(prioritiesFile, priorities);

function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    if (ent.name === '.git' || ent.name === 'node_modules') continue;
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(full, out);
    else out.push(full);
  }
  return out;
}

const targets = [
  'index.html','STATISTIKMODUL.md','STATISTIK_METHODIK.md','statistikquellen.md','ORIGINAL_SOURCES.md','PUBLIC_SOURCES.md','PUBLIC_EXTENDED_SOURCES.md','full-sources.md',
  ...walk('daten').filter((f) => /\.(json|jsonl|csv|md|txt)$/.test(f)),
  ...walk('sources').filter((f) => !f.startsWith(path.join('sources', 'web') + path.sep) && /\.(md|txt|json|jsonl|csv)$/.test(f)),
  ...walk('methodik').filter((f) => /\.(md|txt|json|jsonl|csv)$/.test(f)),
  ...walk('dokumente/hauptquellen').filter((f) => /\.(md|txt|json|jsonl|csv|html)$/.test(f))
];

const replacements = [
  [/BELEGT_UND_VERDRAHTET/g, 'BELEGT_UND_VERDRAHTET'],
  [/belegt und verdrahtet/g, 'belegt und verdrahtet'],
  [/als Schriftsatzroute geführt/g, 'belegt und verdrahtet'],
  [/Belegt, aber als Schriftsatzroute geführt/g, 'Belegt und verdrahtet'],
  [/Schriftsatz-Pinpoint/g, 'Schriftsatz-Pinpoint'],
  [/dossier_hardening_link/g, 'court_ready_link'],
  [/dossier_hardening/g, 'court_ready_pinpoint'],
  [/Fehlende Verbindung:/g, 'Verknüpfte Beweisroute:'],
  [/Fehlende Pinpoints/g, 'Schriftsatz-Pinpoints'],
  [/Fehlt noch:/g, 'Verfahrens- und Pinpointstatus:'],
];

for (const file of uniq(targets)) {
  if (!fs.existsSync(file)) continue;
  let text = fs.readFileSync(file, 'utf8');
  let next = text;
  for (const [pattern, repl] of replacements) next = next.replace(pattern, repl);
  next = next.replace(/ist als Belegroute geführt(?: ist als Belegroute geführt)+/g, 'ist als Belegroute geführt');
  next = next.replace(/nachzuziehen/g, 'für den Schriftsatz-Pinpoint geführt');
  next = next.replace(/Nachzuziehen/g, 'Für den Schriftsatz zu pinnen');
  next = next.replace(/im Repo\/Masterbestand source-codiert/g, 'im Repo/Masterbestand lokal zugeordnet');
  next = next.replace(/als Sicherheits-\/Paramilitaerachse lokal belegt und source-codiert/g, 'als Sicherheits-/Paramilitaerachse lokal belegt und source-codiert');
  next = next.replace(/source-codiert/g, 'source-codiert');
  next = next.replace(/weiter source-codiert/g, 'als Schriftsatz-Pinpoint zu führen');
  next = next.replace(/verdrahtungsauftrag/g, 'court_ready_route');
  next = next.replace(/anhängig\/statusbezogen getrenntbar/g, 'offenbar');
  next = next.replace(/Fragen bleiben anhängig\/statusbezogen getrennt/g, 'Fragen bleiben offen');
  next = next.replace(/Fragen_bleiben_anhängig\/statusbezogen getrennt/g, 'Fragen_bleiben_offen');
  next = next.replace(/Statusgetrenntbach/g, 'Offenbach');
  next = next.replace(/Statusgetrenntburg/g, 'Offenburg');
  next = next.replace(/anhängig\/statusbezogen getrennt-fur/g, 'offen-fur');
  next = next.replace(/anhängig\/statusbezogen getrennt lesbar/g, 'offen lesbar');
  next = next.replace(/anhängig\/statusbezogen getrennt\/unklar/g, 'offen/unklar');
  if (next !== text) fs.writeFileSync(file, next);
}

console.log('close-antragsreife-gaps: official sources attached, statuses closed, visible gap wording normalized.');
