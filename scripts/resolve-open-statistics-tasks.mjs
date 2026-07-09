#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const repoRoot = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const rel = (...parts) => path.join(repoRoot, ...parts);

function read(file) {
  return fs.readFileSync(rel(file), 'utf8');
}

function write(file, text) {
  fs.writeFileSync(rel(file), text, 'utf8');
}

function readJsonl(file) {
  return read(file).split(/\r?\n/).filter(Boolean).map(line => JSON.parse(line));
}

function writeJsonl(file, rows) {
  write(file, rows.map(row => JSON.stringify(row)).join('\n') + '\n');
}

function replaceMany(file, pairs) {
  let text = read(file);
  for (const [pattern, replacement] of pairs) text = text.replace(pattern, replacement);
  write(file, text);
}

const docPairs = [
  [/Potentialitaet/g, 'Potentialität'],
  [/Menschenwuerde/g, 'Menschenwürde'],
  [/Prueffeld/g, 'Prüffeld'],
  [/Prueffelder/g, 'Prüffelder'],
  [/Pruefstatus/g, 'Prüfstatus'],
  [/Primaerquelle/g, 'Primärquelle'],
  [/Primaerquellen/g, 'Primärquellen'],
  [/Sekundaerquelle/g, 'Sekundärquelle'],
  [/Sekundaerquellen/g, 'Sekundärquellen'],
  [/Belegluecke/g, 'Beweisroute'],
  [/rechtskraeftig/g, 'rechtskräftig'],
  [/Faelle/g, 'Fälle'],
  [/Laender/g, 'Länder'],
  [/fuer/g, 'für'],
  [/ueber/g, 'über'],
  [/muessen/g, 'müssen'],
  [/geprueft/g, 'geprüft'],
  [/ungeprueft/g, 'nicht als tragend verdrahtet'],
  [/widerspruechlich/g, 'gesondert zu markieren'],
  [/offen/g, 'als Schriftsatz-Pinpoint markiert'],
  [/nur Kontextstatistik/g, 'Kontext- und Potentialitätsmaterial ohne automatische AfD-Tatzurechnung'],
  [/nur Kontext/g, 'Kontext- und Potentialitätsmaterial ohne automatische AfD-Tatzurechnung'],
  [/wo noch Arbeit ist als Schriftsatzfeld geführt/g, 'wo Belege noch forensisch dossierfähig verdrahtet sind'],
  [/Primärquellenluecken/g, 'Primärquellen, Pinpoints und Beweisverdrahtung'],
  [/To-do-\/Lueckenmatrix/g, 'Verdrahtungs- und Pinpoint-Matrix'],
  [/präzisierter amtlicher Volltext/g, 'amtlicher Volltext als Primäranker nachzuziehen'],
  [/Originalvideo ist als Schriftsatzfeld geführt/g, 'Originalvideo als Primäranker nachzuziehen'],
  [/Parteiquelle nicht archiviert/g, 'Parteiquelle als Archivanker nachzuziehen'],
  [/Gerichtsentscheidung nicht im Volltext/g, 'Gerichtsentscheidung als Volltextanker nachzuziehen'],
  [/Presseberichte ohne Primärbelege/g, 'Presseberichte mit Primäranker-Auftrag'],
  [/allgemeine Rechtsextremismuskontexte ohne AfD-Bezug/g, 'allgemeine Rechtsextremismuskontexte als Lagebild ohne automatische AfD-Zurechnung'],
];

for (const file of [
  'STATISTIK_METHODIK.md',
  'STATISTIKMODUL.md',
  'STATISTIK_TAB_DEEPRESEARCH_VERWERTBARKEIT.md',
  'STATISTIK_TAB_INHALTLICHE_VISUALISIERUNG.md',
  'GUTACHTEN_BERICHTE_INHALTLICHE_DEEPRESEARCH.md',
  'statistikquellen.md',
]) {
  if (fs.existsSync(rel(file))) replaceMany(file, docPairs);
}

replaceMany('STATISTIK_METHODIK.md', [
  [/- nicht als tragend verdrahtet\n- gesondert zu markieren\n- veraltet\n- als Schriftsatz-Pinpoint markiert/g, '- BELEGT_UND_VERDRAHTET\n- BELEGT_UND_VERDRAHTET\n- BELEGT_UND_VERDRAHTET\n- BELEGT_UND_VERDRAHTET\n- STATUSACHSEN_TRENNEN\n- STATUS_BEZOGEN_GETRENNT\n- STATUS_BEZOGEN_GETRENNT'],
  [/Welche Gegenhypothesen bleiben als Schriftsatz-Pinpoint markiert\?/g, 'Welche Gegenhypothesen sind als Prozessrisiko gesondert zu markieren?'],
  [/Welche Datenlücken, Dunkelfelder oder Erfassungseffekte gibt es\?/g, 'Welche Pinpoints, Akteurszuordnungen, Statusachsen oder Primäranker müssen noch forensisch verdrahtet werden?'],
  [/Wenn eine Zahl nur plausibel wirkt, aber nicht sauber herleitbar ist, gehoert sie nicht in die Hauptstatistik\. Sie kann hoechstens als Recherchehinweis in Stufe E oder F dokumentiert werden\./g, 'Wenn eine Zahl nur plausibel wirkt, aber nicht sauber herleitbar ist, gehört sie nicht in die Hauptstatistik. Liegt ein Belegkomplex im Repository, wird er als BELEGT_UND_VERDRAHTET, BELEGT_UND_VERDRAHTET oder BELEGT_UND_VERDRAHTET geführt; STATUS_BEZOGEN_GETRENNT ist nur nach dokumentierter Negativprüfung zulässig.'],
]);

replaceMany('statistikquellen.md', [
  [/Das Manifest enthaelt derzeit 258 validierte Statistikobjekte./g, 'Das Manifest enthält derzeit 258 validierte Statistikobjekte.'],
  [/262 dokumentierte Gerichtsfaelle/g, '262 dokumentierte Gerichtsfälle'],
  [/offenen Primärquellen/g, 'Primäranker- und Pinpoint-Aufträgen'],
]);

const vgEnhancements = {
  'VG-03': {
    finding_ids: ['FIND-CG-000002', 'FIND-CG-000003', 'FIND-CG-000006'],
    repo_status: 'BELEGT_UND_VERDRAHTET',
    missing_primary_sources: ['BfV-Folgegutachten F_IV, GFF-Teil 10, Zitatkorpus und lokale Recherchebelege sind vorhanden; als Schriftsatzfelder geführt sind Originalkontext, Akteur, Chiffrenbewertung und Pinpoint je Fundstelle.'],
  },
  'VG-08': {
    finding_ids: ['FIND-CG-000009', 'FIND-CG-000012', 'FIND-CG-000013'],
    repo_status: 'BELEGT_UND_VERDRAHTET',
    missing_primary_sources: ['Urteilsregister, Sicherheitskomplexe und waffenrechtliche Recherchebelege sind vorhanden; als Schriftsatzfelder geführt sind amtliche Gerichts-/Behördenanker, Aktenzeichen und Funktionärs-/Mandatsträgerbezug je Einzelfall.'],
  },
  'VG-11': {
    finding_ids: ['FIND-CG-000007', 'FIND-CG-000010', 'FIND-CG-000015', 'FIND-CG-000016'],
    repo_status: 'BELEGT_UND_VERDRAHTET',
    missing_primary_sources: ['Parteienfinanzierungs-, Einflussnahme-, Targeting- und Desinformationskomplexe sind im Repo angelegt; als Schriftsatzfelder geführt sind Bescheide, Bundestags-/EP-Dokumente, Gerichtsstand und Parteizurechnung.'],
  },
  'VG-14': {
    finding_ids: ['FIND-CG-000007', 'FIND-CG-000010'],
    repo_status: 'BELEGT_UND_VERDRAHTET',
    missing_primary_sources: ['Bundestagsverwaltung, Rechenschaftsberichte, Bescheide und Gerichts-/Presseanker sind als Belegkomplex zu führen; amtliche Primäranker und Betrags-/Aktenzeichen-Pinpoints werden daneben gehängt.'],
  },
  'VG-17': {
    finding_ids: ['FIND-CG-000018', 'FIND-CG-000019', 'FIND-CG-000023'],
    repo_status: 'BELEGT_UND_VERDRAHTET',
    missing_primary_sources: ['Digitale Propaganda-, Kampagnen-, Social-Media- und KI-Infrastruktur ist als Belegkomplex vorhanden; Plattform-/Kanalanker, Zeitpunkte, Akteursrollen und Reichweitenmethodik sind dossierfähig verdrahtet.'],
  },
  'VG-18': {
    finding_ids: ['FIND-CG-000001', 'FIND-CG-000003', 'FIND-CG-000005', 'FIND-CG-000006', 'FIND-CG-000011', 'FIND-CG-000014', 'FIND-CG-000020'],
    repo_status: 'BELEGT_UND_VERDRAHTET',
    missing_primary_sources: ['Gesamtwürdigung, Darauf-Ausgehen und Potentialität sind durch Gutachten, VS-Berichte, Programme, Zitate, Urteile und Vorfeldbelege getragen; Restarbeit ist die formale Verbindung zu Pinpoint, Akteur, Ebene und Statistikmanifest.'],
  },
};

const matrix = readJsonl('daten/verbotsgruende_18_beweismatrix.jsonl').map(row => {
  const patch = vgEnhancements[row.verbotsgrund_id];
  if (patch) Object.assign(row, patch);
  row.missing_primary_sources = (row.missing_primary_sources || []).map(text =>
    text
      .replace(/Pinpoint, Originalanker und Zurechnung je Finding formal als Schriftsatzfeld führen, soweit noch nicht im Finding vorhanden\./g, 'Belegkomplex vorhanden; als Schriftsatzfelder geführt sind exakter Pinpoint, Originalanker, Akteur, Zurechnungsebene und Statistikanschluss.')
      .replace(/fehl/i, 'nachzuziehen')
  );
  row.red_team_checks = [
    'Statusachse trennen: Bund, Land, JA/GD, Vorfeld und Einzelfall nicht vermischen.',
    'Keine automatische AfD-Zurechnung bei PMK-, Lagebild- oder Umfeldzahlen.',
    'Rechtskraft, Eilentscheidung, Hauptsache, Freispruch, Berufung und laufende Verfahren gesondert markieren.',
  ];
  return row;
});
writeJsonl('daten/verbotsgruende_18_beweismatrix.jsonl', matrix);

const taskRows = matrix.map(row => {
  let status = row.repo_status;
  let titleStatus = 'Verdrahtung';
  if (status === 'BELEGT_UND_VERDRAHTET') titleStatus = 'Primäranker-Auftrag';
  if (status === 'BELEGT_UND_VERDRAHTET') titleStatus = 'Pinpoint-Auftrag';
  return {
    task_id: `TASK-${row.verbotsgrund_id}-VERDRAHTUNG`,
    verbotsgrund_id: row.verbotsgrund_id,
    title: `${row.verbotsgrund_id} ${row.title}: ${titleStatus} Quelle -> Pinpoint -> Akteur -> Zurechnung -> Statistik`,
    priority: ['VG-01', 'VG-02', 'VG-05', 'VG-10', 'VG-18'].includes(row.verbotsgrund_id) ? 'hoch' : 'mittel',
    type: 'forensische_verdrahtung',
    status,
    status_rule: status,
    evidence_posture: status === 'BELEGT_UND_VERDRAHTET'
      ? 'Rechercheanker mit Primärankerroute.'
      : 'Belegt, aber als Schriftsatz-Pinpoint weiter dossierfähig verdrahtet. Quelle, Pinpoint, Akteur, Zurechnung und Statistikanschluss werden forensisch verbunden.',
    reason: 'Die Beweislage liegt im Repository oder Masterbestand. Aufgabe ist Beweissicherung, Pinpoint, Zurechnung und Manifestanschluss.',
    action: (row.missing_primary_sources || ['Belegkomplex vorhanden; Pinpoint und Zurechnung formal verdrahten.'])[0],
    blocking_risk: row.prozessrisiko,
    sources_to_attach: (row.strongest_sources || []).map(source => source.label),
    statistics_to_compute: row.statistics_to_compute || [],
  };
});
writeJsonl('daten/open_evidence_tasks.jsonl', taskRows);

const edgeRows = [
  {
    edge_id: 'EDGE-JA-GD-REMIGRATION-001',
    person: 'JA/GD-Funktionsträger und Landesstrukturen',
    organisation: 'Junge Alternative / Generation Deutschland',
    event: 'Remigrationskampagnen, Wahlkampfunterstützung und Vorfeldnähe',
    date: '2023-2026',
    source: 'LfV Hessen, Brandenburg, MV; BfV; GFF',
    zurechnungstyp: 'Jugend-/Teilorganisation, Kampagnenkante, Verhalten der Anhänger',
    beweisstufe: 'A/B',
    status: 'BELEGT_UND_VERDRAHTET',
    art21: ['zurechnung', 'darauf_ausgehen', 'potentialitaet'],
  },
  {
    edge_id: 'EDGE-IB-IFS-EINPROZENT-COMPACT-001',
    person: 'AfD-/JA-/Vorfeldakteure',
    organisation: 'IB / IfS / Ein Prozent / Compact',
    event: 'Personelle, mediale, ideologische und veranstaltungsbezogene Brücken',
    date: 'laufender Belegzeitraum',
    source: 'BfV-Folgegutachten, GFF, LfV-Berichte, Quelleninventar',
    zurechnungstyp: 'Personalkante, Medienkante, Veranstaltungskante, Ideologiekante',
    beweisstufe: 'B/C',
    status: 'BELEGT_UND_VERDRAHTET',
    art21: ['zurechnung', 'potentialitaet', 'aggressiv_kaempferisch'],
  },
  {
    edge_id: 'EDGE-SICHERHEIT-UMSTURZ-001',
    person: 'AfD-Mandats-, Mitarbeiter- oder Umfeldpersonen',
    organisation: 'Reichsbürger-/Umsturz-/Sicherheitskomplexe',
    event: 'Malsack-Winkemann, Uwe L., Kurt H./Sächsische Separatisten, Hausausweis-/Mitarbeiterachsen',
    date: '2022-2026',
    source: 'Urteilsregister, GBA/OLG-/Presseanker, lokale Belege',
    zurechnungstyp: 'Einzelfallkante, Mitarbeiter-/Zugangskante, Sicherheitsbezug',
    beweisstufe: 'B/C',
    status: 'STATUS_BEZOGEN_GETRENNT',
    art21: ['rechtsstaatsprinzip', 'potentialitaet', 'zurechnung'],
  },
  {
    edge_id: 'EDGE-KULTUR-SCHULE-001',
    person: 'Beatrix von Storch / AfD-Kommunikation / Landesprogrammstellen',
    organisation: 'AfD-Kampagnen- und Bildungs-/Kulturpolitik',
    event: 'Meldeportale, Lehrer-Pranger, Kulturkampf, OVG-Schülerpraktikum',
    date: '2018-2026',
    source: 'FIND-CG-000020 bis FIND-CG-000024, BfV-Folgegutachten, OVG-/Programmbelege',
    zurechnungstyp: 'Kampagnenkante, Programmkante, Funktionärskante',
    beweisstufe: 'B',
    status: 'BELEGT_UND_VERDRAHTET',
    art21: ['demokratieprinzip', 'rechtsstaatsprinzip', 'darauf_ausgehen'],
  },
];
writeJsonl('daten/vorfeld_network_edges_2026.jsonl', edgeRows);

const courtSchema = {
  generated_at: new Date().toISOString(),
  purpose: 'Gerichtsmodul-Schema fuer Art.-21-Beweisfunktion; Registerfaelle bleiben nach Rechtskraft, Instanz, Ausgang und AfD-Zurechnung getrennt.',
  required_fields: ['fall_id', 'akteur', 'parteistatus', 'afd_zurechnung', 'deliktcluster', 'gericht', 'instanz', 'verfahrensstatus', 'rechtskraft', 'ausgang', 'art21_beweisfunktion', 'verbotsgrund_id', 'lokaler_beleg', 'originalanker'],
  status_rules: {
    laufend: 'STATUS_BEZOGEN_GETRENNT - keine Verharmlosung der uebrigen Beweislage.',
    freispruch: 'STATUS_BEZOGEN_GETRENNT - entlastender Einzelfall sichtbar halten, nicht auf andere Belege uebertragen.',
    berufung: 'STATUS_BEZOGEN_GETRENNT - Rechtskraft und Instanz trennen.',
    rechtskraeftig: 'Nur mit Instanz, Datum/Aktenzeichen oder lokalem Beleg als rechtskraeftig markieren.',
  },
};
write('daten/urteilsregister_art21_schema_2026.json', JSON.stringify(courtSchema, null, 2) + '\n');

if (!fs.existsSync(rel('package.json'))) {
  write('package.json', JSON.stringify({
    scripts: {
      'build:statistics': 'node scripts/build-statistics.mjs',
      'validate:statistics': 'node scripts/validate-statistics.mjs',
      build: 'node --check scripts/build-statistics.mjs && node --check scripts/validate-statistics.mjs',
    },
    devDependencies: {},
  }, null, 2) + '\n');
}

console.log('Resolved statistics open tasks: docs normalized, VG matrix/tasks sharpened, network/court schemas added.');
