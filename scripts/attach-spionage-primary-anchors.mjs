#!/usr/bin/env node
import fs from 'node:fs/promises';
import fssync from 'node:fs';
import path from 'node:path';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const rel = (...parts) => path.join(root, ...parts);

const readJsonl = async (file) => {
  const text = await fs.readFile(file, 'utf8').catch(() => '');
  return text.split(/\r?\n/).filter(Boolean).map((line) => JSON.parse(line));
};

const writeJsonl = async (file, rows) => {
  await fs.writeFile(file, rows.map((row) => JSON.stringify(row)).join('\n') + '\n', 'utf8');
};

const uniq = (values) => [...new Set((values || []).filter(Boolean))];
const uniqSegments = (value, separator = "; ") => uniq(String(value || "").split(/\s*;\s*/).filter(Boolean)).join(separator);

async function upsertJsonl(file, key, additions) {
  const rows = await readJsonl(file);
  for (const row of additions) {
    const idx = rows.findIndex((existing) => existing[key] === row[key]);
    if (idx >= 0) rows[idx] = { ...rows[idx], ...row };
    else rows.push(row);
  }
  await writeJsonl(file, rows);
}

const GBA_JIAN_SOURCES = [
  {
    source_id: 'SRC-GBA-2024-04-23-JIAN-G-FESTNAHME',
    title: 'Generalbundesanwalt: Festnahme Jian G. wegen mutmaßlicher geheimdienstlicher Agententätigkeit',
    repo_path: 'sources/web/gba/gba_2024-04-23_jian_g_festnahme.html',
    original_url: 'https://www.generalbundesanwalt.de/SharedDocs/Pressemitteilungen/DE/2024/Pressemitteilung-vom-23-04-2024.html',
    archive_url: 'sources/web/gba/gba_2024-04-23_jian_g_festnahme.html',
    source_exists: true,
    source_kind: 'web_archive',
    quellentyp: 'Amtliche Primärquelle / Bundesanwaltschaft',
    herausgeber: 'Generalbundesanwalt beim Bundesgerichtshof',
    datum: '2024-04-23',
    abrufdatum: '2026-07-09',
    seiten_oder_umfang: 'HTML-Pressemitteilung; lokale Archivkopie',
    format: 'HTML',
    primärquelle: true,
    beweisstärke: 'A',
    juristischer_nutzwert: 'primaer',
    risiken: 'Tatverdacht/Festnahme; keine Gesamtparteizurechnung; AfD-Bezug nur über Mitarbeiter-/Zugangskante und Verfahrensstatus.',
    statistik_nutzbar: true,
    nur_recherchehinweis: false,
    themenbereich: 'Sicherheits-/Spionageverfahren / AfD-Umfeld',
    notiz: 'Amtlicher Festnahmeanker: Jian G. soll für chinesischen Nachrichtendienst tätig gewesen sein, seit 2019 für deutschen MdEP gearbeitet und Informationen aus dem Europäischen Parlament weitergegeben haben.',
    verification_status: 'BELEGT_UND_VERDRAHTET'
  },
  {
    source_id: 'SRC-GBA-2024-05-07-JIAN-G-KRAH-DURCHSUCHUNG',
    title: 'Generalbundesanwalt: Durchsuchungen bei Jian G. und Dr. Maximilian Krah im Europäischen Parlament',
    repo_path: 'sources/web/gba/gba_2024-05-07_jian_g_krah_durchsuchung.html',
    original_url: 'https://www.generalbundesanwalt.de/SharedDocs/Pressemitteilungen/DE/2024/Pressemitteilung-vom-07-05-2024-2.html',
    archive_url: 'sources/web/gba/gba_2024-05-07_jian_g_krah_durchsuchung.html',
    source_exists: true,
    source_kind: 'web_archive',
    quellentyp: 'Amtliche Primärquelle / Bundesanwaltschaft',
    herausgeber: 'Generalbundesanwalt beim Bundesgerichtshof',
    datum: '2024-05-07',
    abrufdatum: '2026-07-09',
    seiten_oder_umfang: 'HTML-Pressemitteilung; lokale Archivkopie',
    format: 'HTML',
    primärquelle: true,
    beweisstärke: 'A',
    juristischer_nutzwert: 'primaer',
    risiken: 'Krah-Büro als Zeugenmaßnahme nach § 103 StPO durchsucht; nicht als Beschuldigtenstatus überzeichnen.',
    statistik_nutzbar: true,
    nur_recherchehinweis: false,
    themenbereich: 'Sicherheits-/Spionageverfahren / AfD-Umfeld',
    notiz: 'Amtlicher Zugangskantenanker: Büros von Jian G. und Maximilian Krah im Europäischen Parlament auf BGH-/EIO-Grundlage durchsucht; Krah-Büro ausdrücklich Zeugenmaßnahme.',
    verification_status: 'BELEGT_UND_VERDRAHTET'
  },
  {
    source_id: 'SRC-GBA-2025-04-29-JIAN-G-ANKLAGE',
    title: 'Generalbundesanwalt: Anklage gegen Jian G. und Yaqi X. wegen mutmaßlicher geheimdienstlicher Agententätigkeit',
    repo_path: 'sources/web/gba/gba_2025-04-29_jian_g_anklage.html',
    original_url: 'https://www.generalbundesanwalt.de/SharedDocs/Pressemitteilungen/DE/2025/Pressemitteilung-vom-29-04-2025.html',
    archive_url: 'sources/web/gba/gba_2025-04-29_jian_g_anklage.html',
    source_exists: true,
    source_kind: 'web_archive',
    quellentyp: 'Amtliche Primärquelle / Bundesanwaltschaft',
    herausgeber: 'Generalbundesanwalt beim Bundesgerichtshof',
    datum: '2025-04-29',
    abrufdatum: '2026-07-09',
    seiten_oder_umfang: 'HTML-Pressemitteilung; lokale Archivkopie',
    format: 'HTML',
    primärquelle: true,
    beweisstärke: 'A',
    juristischer_nutzwert: 'primaer',
    risiken: 'Anklage, nicht Urteil; Spionagekomplex als Sicherheits-/Integritäts- und Zugangskante, nicht als Parteitat formulieren.',
    statistik_nutzbar: true,
    nur_recherchehinweis: false,
    themenbereich: 'Sicherheits-/Spionageverfahren / AfD-Umfeld',
    notiz: 'Amtlicher Anklageanker: Jian G. soll als Assistent eines AfD-Europaabgeordneten mehr als 500 EP-Dokumente gesammelt, Informationen zu AfD-Spitzenpolitikern erhoben und chinesische Oppositionelle ausgespäht haben.',
    verification_status: 'BELEGT_UND_VERDRAHTET'
  }
];

const sourceIds = GBA_JIAN_SOURCES.map((row) => row.source_id);
const sourcePaths = GBA_JIAN_SOURCES.map((row) => row.repo_path);
const urls = GBA_JIAN_SOURCES.map((row) => row.original_url);

await upsertJsonl(rel('daten', 'source_inventory.jsonl'), 'source_id', GBA_JIAN_SOURCES);

const findingsFile = rel('daten', 'findings_art21.jsonl');
const findings = await readJsonl(findingsFile);
for (const row of findings) {
  if (row.finding_id === 'FIND-CG-000007') {
    row.beweistufe = 'A';
    row.evidence_grade = 'A';
    row.quellenart = 'amtlich / gerichtlich';
    row.pruefstatus = 'geprueft';
    row.repo_status = 'BELEGT_UND_VERDRAHTET';
    row.verification_status = 'BELEGT_UND_VERDRAHTET';
    row.source_ids = uniq([row.source_id, ...(row.source_ids || []), ...sourceIds]);
    row.source_paths = uniq([row.source_path, ...(row.source_paths || []), ...sourcePaths]);
    row.original_urls = uniq([...(row.original_urls || []), ...urls]);
    row.exact_fundstelle = 'Fall 27 plus GBA 23.04.2024 Festnahme, GBA 07.05.2024 Durchsuchung, GBA 29.04.2025 Anklage; Krah-Büro nur Zeugenmaßnahme nach § 103 StPO.';
    row.rechtsstatus = 'GBA-Festnahme, Durchsuchung und Anklage amtlich belegt; gerichtlicher Ausgang/Rechtskraft und spätere Registerstände statusbezogen getrennt fuehren.';
    row.relevanzbegruendung = 'Sicherheits-, Integritäts- und Zugangskante: offizieller Assistent eines AfD-Europaabgeordneten; keine automatische Gesamtparteizurechnung, aber starkes Potentialitäts- und Mitarbeiter-/Zugangsmaterial.';
    row.no_overclaim = 'Nicht formulieren: AfD als Partei wegen Spionage verurteilt. Zulässig: amtlich belegter Spionagekomplex mit AfD-MdEP-Mitarbeiter- und Zugangskante.';
  }
  if (row.finding_id === 'FIND-VG-09-SOURCE-MATCH-2026') {
    row.beweisstufe = 'A';
    row.evidence_grade = 'A';
    row.repo_status = 'BELEGT_UND_VERDRAHTET';
    row.pruefstatus = 'BELEGT_UND_VERDRAHTET';
    row.source_ids = uniq([row.source_id, ...(row.source_ids || []), ...sourceIds]);
    row.source_paths = uniq([row.source_path, ...(row.source_paths || []), ...sourcePaths]);
    row.original_urls = uniq([...(row.original_urls || []), ...urls]);
    row.pinpoint = 'VG-09 jetzt mit drei amtlichen GBA-Primärankern zu Jian G./Krah: Festnahme 23.04.2024, Durchsuchung 07.05.2024, Anklage 29.04.2025; Verfahrensstand und Zurechnung getrennt.';
  }
}
await writeJsonl(findingsFile, findings);

const terrorFile = rel('daten', 'terror_umsturz_paramilitaer_matrix_2026.jsonl');
const terrorRows = await readJsonl(terrorFile);
const spionageRow = {
  id: 'SEC-SPIONAGE-001',
  cluster: 'Spionage / ausländische Einflussnahme',
  case: 'Jian G. / Maximilian Krah-Umfeld',
  actor: 'Jian G.; Maximilian Krah als damaliger AfD-MdEP und Zeuge/Zugangskontext',
  legal_status: 'GBA-Festnahme 23.04.2024; GBA-Durchsuchung EU-Parlament 07.05.2024; GBA-Anklage vor dem OLG Dresden laut PM 29.04.2025; Verfahrensausgang/Rechtskraft statusbezogen getrennt fuehren.',
  core_allegation: 'GBA-Anklage: mutmaßliche geheimdienstliche Agententätigkeit (§ 99 StGB), offizieller Assistent eines AfD-Europaabgeordneten seit 2019, Sammlung von mehr als 500 EP-Dokumenten, Informationen zu AfD-Spitzenpolitikern und Ausspähung chinesischer Oppositioneller.',
  zurechnung: 'indirekt-personell: Mitarbeiter-/Zugangskante zu AfD-MdEP; Krah-Bürodurchsuchung ausdrücklich Zeugenmaßnahme nach § 103 StPO.',
  finding_ids: ['FIND-CG-000007', 'FIND-VG-09-SOURCE-MATCH-2026'],
  source_ids: sourceIds,
  source_paths: sourcePaths,
  art21: ['rechtsstaatsprinzip', 'potentialitaet', 'zurechnung'],
  status: 'STATUS_BEZOGEN_GETRENNT',
  beweisstufe: 'A',
  prozessrisiko: 'Keine Gesamtparteizurechnung und keinen Beschuldigtenstatus Krah behaupten; beweisfest ist Mitarbeiter-, Zugang-, Sicherheits- und Potentialitätsbezug.'
};
const terrorIdx = terrorRows.findIndex((row) => row.id === spionageRow.id);
if (terrorIdx >= 0) terrorRows[terrorIdx] = { ...terrorRows[terrorIdx], ...spionageRow };
else terrorRows.push(spionageRow);
for (const row of terrorRows) {
  if (row.id === 'SEC-REICH-001') {
    row.prozessrisiko = 'Amtliche Gerichts-/GBA-Primäranker weiter priorisieren; bis dahin lokal belegter Sicherheits- und Zugangskomplex, laufendes Verfahren, keine automatische Gesamtparteizurechnung.';
  }
}
await writeJsonl(terrorFile, terrorRows);

const edgesFile = rel('daten', 'vorfeld_network_edges_2026.jsonl');
const edges = await readJsonl(edgesFile);
const edge = {
  edge_id: 'EDGE-SPIONAGE-KRAH-JIAN-G-001',
  person: 'Jian G. / Maximilian Krah-Umfeld',
  organisation: 'AfD-Europaabgeordnetenbüro / Europäisches Parlament / mutmaßlicher chinesischer Nachrichtendienst',
  event: 'Mitarbeiter-, Zugangs- und Spionagekomplex mit GBA-Festnahme, Durchsuchung und Anklage',
  date: '2019-2025',
  source: 'Generalbundesanwalt 23.04.2024, 07.05.2024, 29.04.2025; lokaler Fall 27',
  zurechnungstyp: 'Mitarbeiter-/Zugangskante, Sicherheits-/Integritätskante; keine automatische Parteitat',
  beweisstufe: 'A',
  status: 'STATUS_BEZOGEN_GETRENNT',
  art21: ['rechtsstaatsprinzip', 'potentialitaet', 'zurechnung'],
  finding_ids: ['FIND-CG-000007', 'FIND-VG-09-SOURCE-MATCH-2026'],
  source_ids: sourceIds,
  source_paths: sourcePaths,
  beweislast_notiz: 'Amtliche GBA-Primäranker liegen lokal vor. Beweiswert: Zugang und Sicherheitsrisiko im AfD-MdEP-Umfeld; Grenze: Krah-Büro nur Zeugenmaßnahme, keine Parteitat ohne weitere Kante.'
};
const edgeIdx = edges.findIndex((row) => row.edge_id === edge.edge_id);
if (edgeIdx >= 0) edges[edgeIdx] = { ...edges[edgeIdx], ...edge };
else edges.push(edge);
await writeJsonl(edgesFile, edges);

const routeFile = rel('daten', 'beweisrouten_audit_2026.jsonl');
const routes = await readJsonl(routeFile);
for (const row of routes) {
  if (row.route_id === 'ROUTE-AUDIT-003-SICHERHEIT') {
    row.status = 'STATUS_BEZOGEN_GETRENNT';
    row.evidence_grade = 'A/B';
    row.local_anchors = uniq([...(row.local_anchors || []), ...sourcePaths]);
    row.online_anchors = uniq([...(row.online_anchors || []), ...urls]);
    const jianActorRoute = "Jian G./Krah: AfD-MdEP-Mitarbeiter- und Zugangskante, Krah-Bürodurchsuchung nur Zeugenmaßnahme";
    if (!String(row.actor_route || "").includes(jianActorRoute)) {
      row.actor_route = [row.actor_route, jianActorRoute].filter(Boolean).join("; ");
    }
    row.actor_route = uniqSegments(row.actor_route);
    const jianPinpointRoute = "Jian G.: GBA 23.04.2024 Festnahme; GBA 07.05.2024 Durchsuchung EU-Parlament mit §103-StPO-Zeugenmaßnahme Krah-Büro; GBA 29.04.2025 Anklage vor OLG Dresden.";
    if (!String(row.pinpoint_route || "").includes(jianPinpointRoute)) {
      row.pinpoint_route = [row.pinpoint_route, jianPinpointRoute].filter(Boolean).join(" ");
    }
    const jianProofFunction = "Jian G./Krah schließt die bisherige Spionage-Primärankerroute: amtlicher GBA-Festnahme-, Durchsuchungs- und Anklagepfad plus lokale Registerzeile.";
    if (!String(row.proof_function || "").includes(jianProofFunction)) {
      row.proof_function = [row.proof_function, jianProofFunction].filter(Boolean).join(" ");
    }
  }
}
await writeJsonl(routeFile, routes);

const prioritiesFile = rel('daten', 'beweisverknuepfung_prioritaeten_2026.jsonl');
const priorities = await readJsonl(prioritiesFile);
for (const row of priorities) {
  if (row.task_id === 'LINK-005') {
    row.status = 'STATUS_BEZOGEN_GETRENNT';
    row.what_is_linked = 'Sächsische Separatisten und Jian G./Krah sind mit amtlichen GBA-Primärankern lokal archiviert; Reichsbürger/Malsack und Bystron bleiben als nächste amtliche Vollanker-Achsen getrennt.';
    row.hard_evidence = uniq([row.hard_evidence, ...sourceIds, 'daten/terror_umsturz_paramilitaer_matrix_2026.jsonl:SEC-SPIONAGE-001']).join('; ');
    row.dossier_hardening_link = 'Für Reuß/Malsack und Bystron die amtlichen GBA/BGH/OLG/Bundestagsanker weiter physisch ins Repo ziehen; Jian G./Krah ist jetzt mit GBA-Festnahme, Durchsuchung und Anklage belegt.';
    delete row.missing_link;
    row.dossier_hardening = 'Keine Sammelbehauptung. Je Fall: Tatvorwurf, Instanz, Rechtskraft, Parteifunktion, Mitarbeiter-/Mandatsstatus, Zugang, Parteireaktion und Entlastungs-/Verfahrensstand codieren.';
    delete row.repair;
  }
}
await writeJsonl(prioritiesFile, priorities);

const vgFile = rel('daten', 'verbotsgruende_18_beweismatrix.jsonl');
const vgRows = await readJsonl(vgFile);
for (const row of vgRows) {
  if (row.verbotsgrund_id === 'VG-09') {
    row.repo_status = 'BELEGT_UND_VERDRAHTET';
    row.matched_source_ids = uniq([...(row.matched_source_ids || []), ...sourceIds]);
    row.matched_repo_paths = uniq([...(row.matched_repo_paths || []), ...sourcePaths]);
    row.strongest_sources = [
      { label: 'GBA Jian G./Krah: Festnahme, Durchsuchung und Anklage lokal archiviert', status: 'BELEGT_UND_VERDRAHTET: amtliche Primäranker, Verfahrensstatus und Zurechnungsgrenze codiert.' },
      ...(row.strongest_sources || []).filter((source) => !/(GBA\/OLG soweit vorhanden|GBA Jian G\.\/Krah: Festnahme, Durchsuchung und Anklage lokal archiviert)/i.test(source.label || ""))
    ];
    row.zulässige_formulierung = 'Sicherheits- und Einflusskomplex im AfD-/AfD-Umfeld mit amtlichem GBA-Primäranker, Mitarbeiter-/Zugangskante und strikt getrenntem Einzelfallstatus.';
    row.unzulässige_ueberzeichnung = 'Landesverrat der AfD als Gesamtpartei oder Beschuldigtenstatus Krah ohne pruefbare Parteibruecke.';
  }
}
await writeJsonl(vgFile, vgRows);

const docFile = rel('dokumente', 'hauptquellen', 'VERBOTSGRUENDE_BELEGKARTE_LOCAL_WEB_2026.md');
if (fssync.existsSync(docFile)) {
  let doc = await fs.readFile(docFile, 'utf8');
  if (!doc.includes('SRC-GBA-2025-04-29-JIAN-G-ANKLAGE')) {
    doc += `\n\n## Nachgezogener amtlicher Primäranker: VG-09 Spionage / Jian G. / Krah\n\n- Local: \`${sourcePaths[0]}\`, \`${sourcePaths[1]}\`, \`${sourcePaths[2]}\`\n- Source-IDs: \`${sourceIds[0]}\`, \`${sourceIds[1]}\`, \`${sourceIds[2]}\`\n- Online: ${urls.join('; ')}\n- Beweisregel: Mitarbeiter-/Zugangskante und Sicherheits-/Potentialitätsbeleg; keine Gesamtparteizurechnung und kein Beschuldigtenstatus Krah ohne statusbezogenen Primaeranker.\n`;
    await fs.writeFile(docFile, doc, 'utf8');
  }
}

console.log(`Spionage-Primäranker verdrahtet: ${sourceIds.join(', ')}`);
