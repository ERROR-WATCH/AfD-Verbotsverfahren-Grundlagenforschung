#!/usr/bin/env node
import fs from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const rel = (...parts) => path.join(root, ...parts);

function parseJsonl(text) {
  return text.split(/\r?\n/).filter(Boolean).map(line => JSON.parse(line));
}

async function readJson(file) {
  return JSON.parse(await fs.readFile(rel(file), 'utf8'));
}

async function readJsonl(file) {
  return parseJsonl(await fs.readFile(rel(file), 'utf8'));
}

async function writeJson(file, data) {
  await fs.writeFile(rel(file), JSON.stringify(data, null, 2) + '\n', 'utf8');
}

async function writeJsonl(file, rows) {
  await fs.writeFile(rel(file), rows.map(row => JSON.stringify(row)).join('\n') + '\n', 'utf8');
}

function upsert(rows, key, entries) {
  const map = new Map(rows.map(row => [row[key], row]));
  for (const entry of entries) map.set(entry[key], { ...(map.get(entry[key]) || {}), ...entry });
  return rows.filter(row => !entries.some(entry => entry[key] === row[key])).concat(entries.map(entry => map.get(entry[key])));
}

function stat(id, title, value, unit, subtheme, method, legal, limitations) {
  return {
    id,
    title,
    value,
    unit,
    theme: 'Vorfeld / Medienkante NIUS',
    subtheme,
    source: 'daten/nius_afd_medienkante_2026.jsonl',
    source_type: 'Strukturierte Medienkantenmatrix',
    source_path: 'daten/nius_afd_medienkante_2026.jsonl',
    finding_location: 'NIUS-/AfD-Medienkantenmatrix 2026',
    method,
    legal_relevance: legal,
    article_21_field: 'Zurechnung / Demokratieprinzip / Menschenwürde / Potentialität',
    evidence_grade: 'B',
    status: 'geprueft',
    limitations
  };
}

const deepresearchPath = 'dokumente/hauptquellen/NIUS_AFD_MEDIENKANTE_DEEPRESEARCH_2026.md';

const localSources = {
  bfvTeilB: 'SRC-GEHEIMGUTACHTEN-TEIL-B-PAGES-401-TO-500-2f914920e1',
  gffAnhang: 'SRC-GFF-AFD-GUTACHTEN-TEIL-09-ANHANG-B-BELEGE-MENSCHENWUERDE-711e41c71e',
  bt13317: 'SRC-BT-PLENARPROTOKOLL-20-133-HETZE-DEBATTE-f99e932576',
  bfvVerbot: 'SRC-UNTERSUCHUNG-BFV-GUTACHTEN-UND-AFD-PARTEIVERBOT-cfd91bede6',
  zeitGotthardt: 'SRC-FRANK-GOTTHARDT-CDU-SPITZE-ERWOG-KOOPERATION-MIT-FIRMA-VON-NIUS-FINANZIER-DIE-ZEIT-725102bbe3'
};

const webSources = [
  {
    source_id: 'SRC-WEB-LEMONDE-NIUS-FOX-NEWS-2025',
    title: 'Le Monde: NIUS als deutschsprachiges Fox-News-Modell',
    repo_path: null,
    original_url: 'https://www.lemonde.fr/economie/article/2025/06/03/en-allemagne-nius-veut-devenir-le-fox-news-germanophone-d-europe-centrale_6610278_3234.html',
    archive_url: 'https://www.lemonde.fr/economie/article/2025/06/03/en-allemagne-nius-veut-devenir-le-fox-news-germanophone-d-europe-centrale_6610278_3234.html',
    source_exists: true,
    source_kind: 'web',
    quellentyp: 'Presse- oder Recherchequelle',
    herausgeber: 'Le Monde',
    datum: '2025-06-03',
    abrufdatum: '2026-07-09',
    seiten_oder_umfang: 'Webartikel',
    format: 'HTML',
    primärquelle: false,
    beweisstärke: 'C',
    juristischer_nutzwert: 'kontext',
    risiken: 'Sekundäre medienanalytische Einordnung; keine automatische AfD-Zurechnung.',
    statistik_nutzbar: true,
    nur_recherchehinweis: false,
    themenbereich: 'Presse- und Recherchequellen',
    notiz: 'Reichweite, Finanzierungs-/Infrastrukturhinweise und Einordnung als reaktionäres Medienangebot.',
    sha256: null
  },
  {
    source_id: 'SRC-WEB-WELT-NIUS-BRANDENBURG-VERMERK-2025',
    title: 'WELT: NIUS macht angeblichen Brandenburger AfD-Verfassungsschutzvermerk publik',
    repo_path: null,
    original_url: 'https://www.welt.de/politik/deutschland/article689acd216fbe021a85130029/Gesichert-rechtsextremistisch-Brandenburger-AfD-Gutachten-angeblich-im-Internet-einsehbar.html',
    archive_url: 'https://www.welt.de/politik/deutschland/article689acd216fbe021a85130029/Gesichert-rechtsextremistisch-Brandenburger-AfD-Gutachten-angeblich-im-Internet-einsehbar.html',
    source_exists: true,
    source_kind: 'web',
    quellentyp: 'Presse- oder Recherchequelle',
    herausgeber: 'WELT / dpa',
    datum: '2025-08-12',
    abrufdatum: '2026-07-09',
    seiten_oder_umfang: 'Webartikel',
    format: 'HTML',
    primärquelle: false,
    beweisstärke: 'C',
    juristischer_nutzwert: 'status_route',
    risiken: 'Berichtet über ein angeblich von NIUS veröffentlichtes Dokument; Echtheit/amtliche Fassung muss gegen Landesveröffentlichung geprüft werden.',
    statistik_nutzbar: true,
    nur_recherchehinweis: false,
    themenbereich: 'Presse- und Recherchequellen',
    notiz: 'Statusachsenregel: Veröffentlichungsroute getrennt vom amtlichen Brandenburg-Vermerk führen.',
    sha256: null
  },
  {
    source_id: 'SRC-WEB-WIKIPEDIA-NIUS-REZEPTION-2026',
    title: 'Wikipedia: NIUS, Unternehmensdaten und Rezeption',
    repo_path: null,
    original_url: 'https://de.wikipedia.org/wiki/Nius',
    archive_url: 'https://de.wikipedia.org/wiki/Nius',
    source_exists: true,
    source_kind: 'web',
    quellentyp: 'Sekundär-/Registerquelle',
    herausgeber: 'Wikipedia',
    datum: '2026-05',
    abrufdatum: '2026-07-09',
    seiten_oder_umfang: 'Webartikel',
    format: 'HTML',
    primärquelle: false,
    beweisstärke: 'D',
    juristischer_nutzwert: 'navigation',
    risiken: 'Sekundär-/Registerquelle; nur als Navigationsanker zu Primär- und Pressebelegen.',
    statistik_nutzbar: true,
    nur_recherchehinweis: false,
    themenbereich: 'Presse- und Recherchequellen',
    notiz: 'Bündelt Hinweise zu Betreiber, Redaktion, Rezeption, Medienaufsicht und AfD-/Brandmauer-Bezug.',
    sha256: null
  },
  {
    source_id: 'SRC-NIUS-AFD-MEDIENKANTE-DEEPRESEARCH-2026',
    title: 'NIUS und AfD: Medienkante, Quellenroute und Art.-21-Zurechnung',
    repo_path: deepresearchPath,
    original_url: null,
    archive_url: deepresearchPath,
    source_exists: true,
    source_kind: 'repo_file',
    quellentyp: 'Methodik- oder Analysedokument',
    herausgeber: 'Repository',
    datum: '2026-07-09',
    abrufdatum: '2026-07-09',
    seiten_oder_umfang: 'Deepresearch-Vermerk',
    format: 'MD',
    primärquelle: false,
    beweisstärke: 'B',
    juristischer_nutzwert: 'navigation',
    risiken: 'Arbeitsvermerk; tragend sind die angebundenen lokalen Primär-, Gutachten- und Parlamentsanker.',
    statistik_nutzbar: true,
    nur_recherchehinweis: false,
    themenbereich: 'Dokumentation / Analyse',
    notiz: 'Führt NIUS nicht als AfD-Organ, sondern als belegte Medien-/Vorfeld-/Kampagnenkante mit Zurechnungsgrenze.',
    sha256: null
  }
];

const matrixRows = [
  {
    id: 'NIUS-AFD-001',
    cluster: 'AfD München teilt NIUS-Aschaffenburg-Artikel',
    actor: 'AfD München (BY)',
    organisation: 'AfD-Gliederung / NIUS als aufgegriffener Medieninhalt',
    event: 'Facebook-Teilung eines NIUS-Artikels im Aschaffenburg-/Brandmauer-Komplex; BfV-Gutachten führt den Vorgang als Beleg für demokratie- und rechtsstaatsbezogene Agitation.',
    date: '2025-01-23',
    source_ids: [localSources.bfvTeilB],
    source_paths: ['geheimgutachten/Geheimgutachten_Teil B_pages_401_to_500.md'],
    original_urls: [],
    pinpoint: 'Lokaler BfV-Split, Seitenzählung 64-66 / Fußnotenbereich 3018-3020',
    art21: ['demokratieprinzip', 'rechtsstaatsprinzip', 'darauf_ausgehen', 'zurechnung'],
    zurechnungstyp: 'direkte Organisationskante: AfD-Gliederung macht NIUS-Inhalt durch Teilen/Übernahme zum eigenen Kommunikationsbaustein',
    beweistufe: 'A',
    status: 'BELEGT_UND_VERDRAHTET',
    proof_rule: 'BfV-Gutachten ist der harte Anker; NIUS ist hier nicht Parteiorgan, sondern aufgegriffener Medieninhalt in einer dokumentierten AfD-Kommunikationshandlung.',
    no_overclaim: 'Nicht formulieren: NIUS steuert AfD. Zulässig: AfD-Gliederung übernimmt NIUS-Inhalt als Agitations- und Brandmauer-Narrativ.',
    next_evidence_action: 'Original-Facebook-Post und NIUS-URL als Archiv-Screenshot neben den BfV-Pinpoint legen.',
    visualization: 'Medienkante AfD-Gliederung -> NIUS-Artikel -> Narrativ -> Demokratie-/Rechtsstaatsangriff'
  },
  {
    id: 'NIUS-AFD-002',
    cluster: 'René Springer greift Reichelt-Post auf',
    actor: 'René Springer, MdB / AfD Brandenburg',
    organisation: 'AfD-Funktionär / Reichelt-Post als Ausgangspunkt',
    event: 'GFF-Anhang dokumentiert einen X-Post Springers vom 27.07.2023, der sich auf einen Beitrag Julian Reichelts bezieht und die Reduktion ausländischer Bürgergeldempfänger auf Null fordert.',
    date: '2023-07-27',
    source_ids: [localSources.gffAnhang],
    source_paths: ['dokumente/ki_markdown/dokumente/splits/GFF_AfD-Gutachten_Teil_09_Anhang_B_Belege_Menschenwuerde.md'],
    original_urls: ['https://x.com/rene_springer/status/1684479369555722240'],
    pinpoint: 'GFF Anhang B Menschenwürde, lokaler Abschnitt um Zeile 35880 / Fußnote 6109',
    art21: ['menschenwuerde', 'zurechnung', 'ziele_der_partei', 'verhalten_der_anhaenger'],
    zurechnungstyp: 'direkte Funktionärskante: AfD-MdB greift Reichelt-Inhalt auf und verschärft ihn als sozial-/migrationspolitische Ausschlussforderung',
    beweistufe: 'B',
    status: 'BELEGT_UND_VERDRAHTET',
    proof_rule: 'GFF-Fundstelle plus Original-X-URL reichen als belegte Zurechnungsroute; für A-Niveau Originalpost archivieren.',
    no_overclaim: 'Nicht als NIUS-Parteisteuerung formulieren; beweisfest ist die inhaltliche Übernahme durch einen AfD-Funktionär.',
    next_evidence_action: 'X-Post, Reichelt-Ausgangspost und Screenshot/Archivdatum sichern.',
    visualization: 'Akteur -> Reichelt/NIUS-Bezug -> Zielgruppe -> Ausschlusslogik -> Menschenwürde'
  },
  {
    id: 'NIUS-AFD-003',
    cluster: 'Jurij Kofner kommentiert NIUS-X-Post',
    actor: 'Jurij Kofner',
    organisation: 'AfD-/Vorfeldakteur im GFF-Zitatkorpus / NIUS-X-Post',
    event: 'GFF-Anhang dokumentiert eine abwertende Kommentierung eines NIUS-X-Posts durch Kofner im LSBTIQ-/Trans-Komplex.',
    date: '2024-08-01',
    source_ids: [localSources.gffAnhang],
    source_paths: ['dokumente/ki_markdown/dokumente/splits/GFF_AfD-Gutachten_Teil_09_Anhang_B_Belege_Menschenwuerde.md'],
    original_urls: [],
    pinpoint: 'GFF Anhang B Menschenwürde, lokaler Abschnitt um Zeile 39992',
    art21: ['menschenwuerde', 'zurechnung', 'verhalten_der_anhaenger'],
    zurechnungstyp: 'Akteurs-/Zitatkante: NIUS-Post als Anlass, abwertende Aussage als eigenes Akteurshandeln',
    beweistufe: 'B',
    status: 'BELEGT_UND_VERDRAHTET',
    proof_rule: 'Beweiswert liegt in der dokumentierten Akteursäußerung; NIUS ist Auslöser/Medienknoten, nicht automatisch Parteibeweis.',
    no_overclaim: 'Nicht jeden NIUS-Post als AfD-Beleg zählen; nur die dokumentierte AfD-/Akteursreaktion wird zugerechnet.',
    next_evidence_action: 'Original-X-Thread, Akteursfunktion und Zielgruppenklassifikation für die LSBTIQ-Achse daneben hängen.',
    visualization: 'NIUS-Post -> Akteurskommentar -> Zielgruppe LSBTIQ -> Menschenwürdeachse'
  },
  {
    id: 'NIUS-AFD-004',
    cluster: 'AfD-Bundestagsfrage nutzt NIUS-Artikel als Bezugsanker',
    actor: 'Roger Beckamp, MdB (AfD)',
    organisation: 'AfD-Bundestagsfraktion / Deutscher Bundestag',
    event: 'Bundestagsdrucksache 20/13317 enthält AfD-Fragen, die auf einen NIUS-Artikel zu Gewaltstatistik verweisen; die Regierungsantwort liefert die amtliche PKS-Gegen-/Einordnung.',
    date: '2024-10-08',
    source_ids: [localSources.bt13317],
    source_paths: ['dokumente/hauptquellen/BT_Plenarprotokoll_20_133_Hetze_Debatte.pdf', 'dokumente/ki_markdown/dokumente/hauptquellen/BT_Plenarprotokoll_20_133_Hetze_Debatte.md'],
    original_urls: ['https://dserver.bundestag.de/btd/20/133/2013317'],
    pinpoint: 'BT-Drs. 20/13317, Fragen 43/44, S. 35-36; lokaler Markdown-Abschnitt um Zeile 1954',
    art21: ['demokratieprinzip', 'potentialitaet', 'zurechnung'],
    zurechnungstyp: 'parlamentarische Medienkante: AfD-Abgeordneter führt NIUS-Artikel als Frageanlass ein; amtliche Antwort setzt Datenrahmen',
    beweistufe: 'B',
    status: 'BELEGT_UND_VERDRAHTET',
    proof_rule: 'Parlamentsdrucksache ist Primäranker; NIUS ist Bezugsquelle für die Frage, nicht Ersatz für PKS/BKA-Daten.',
    no_overclaim: 'Nicht als Beleg für Wahrheit des NIUS-Artikels verwenden; beweisfest ist die parlamentarische Nutzung und die amtliche Antwort.',
    next_evidence_action: 'NIUS-Originalartikel archivieren und die PKS-Methodenhinweise aus der Antwort als Gegenlese speichern.',
    visualization: 'NIUS-Artikel -> AfD-Frage -> Bundestag/Regierung -> amtliche Datenmethodik'
  },
  {
    id: 'NIUS-AFD-005',
    cluster: 'NIUS als Veröffentlichungsroute des BfV-AfD-Gutachtens',
    actor: 'NIUS / juristische Verbotsdebatte',
    organisation: 'Medienroute / BfV-Gutachten-PDF',
    event: 'Lokale Rechtsanalyse verweist darauf, dass das BfV-Gutachten als PDF über eine NIUS-Asset-URL abrufbar war; Tagesschau/Spiegel werden daneben als Beleg- und Überblicksrouten genannt.',
    date: '2025-08-15',
    source_ids: [localSources.bfvVerbot],
    source_paths: ['dokumente/hauptquellen/untersuchung-bfv-gutachten-und-afd-parteiverbot.pdf', 'dokumente/ki_markdown/dokumente/hauptquellen/untersuchung-bfv-gutachten-und-afd-parteiverbot__pages_1_to_50.md'],
    original_urls: ['https://api.nius.de/api/assets/office-hr/64a7c9da-6a9a-409e-9141-16ed0e1e9d80/gutachten-bfv-afd4.pdf?version=0'],
    pinpoint: 'Rechtsanalyse, Fußnote 1, lokaler Markdown-Abschnitt um Zeile 140',
    art21: ['beweisqualitaet', 'statusachsen_trennen', 'potentialitaet'],
    zurechnungstyp: 'Quellenroute: NIUS hostet/verbreitet Dokument; Art.-21-Beweis bleibt das Gutachten bzw. die amtliche/gerichtliche Gegenprüfung',
    beweistufe: 'B',
    status: 'BELEGT_UND_VERDRAHTET',
    proof_rule: 'Als Quellenroute nützlich; für gerichtsfeste Nutzung amtliche BfV-/Gerichts-/Aktenfassung danebenlegen.',
    no_overclaim: 'Nicht NIUS als Primärquelle für die Behördenbewertung behandeln, solange amtliche Fassung verfügbar oder beiziehbar ist.',
    next_evidence_action: 'NIUS-PDF-Hash, amtliche Fassung, Tagesschau-/Spiegel-Überblick und Verfahrensstand nebeneinander sichern.',
    visualization: 'Medienroute -> Gutachten -> amtliche/gerichtliche Fassung -> Statusgraph'
  },
  {
    id: 'NIUS-AFD-006',
    cluster: 'NIUS-Finanzierung und rechte Medieninfrastruktur',
    actor: 'Frank Gotthardt / VIUS / NIUS',
    organisation: 'Medieninfrastruktur',
    event: 'Lokale ZEIT-Quelle und Webrecherche beschreiben Gotthardt/VIUS als Finanzierungs- und Betreiberumfeld von NIUS; Le Monde ordnet Reichweite, YouTube-/Spotify-Format und Exxpress-Beteiligung ein.',
    date: '2023-2026',
    source_ids: [localSources.zeitGotthardt, 'SRC-WEB-LEMONDE-NIUS-FOX-NEWS-2025', 'SRC-WEB-WIKIPEDIA-NIUS-REZEPTION-2026'],
    source_paths: ['dokumente/hauptquellen/Frank_Gotthardt__CDU-Spitze_erwog_Kooperation_mit_Firma_von_Nius-Finanzier___DIE_ZEIT.pdf'],
    original_urls: ['https://www.lemonde.fr/economie/article/2025/06/03/en-allemagne-nius-veut-devenir-le-fox-news-germanophone-d-europe-centrale_6610278_3234.html', 'https://de.wikipedia.org/wiki/Nius'],
    pinpoint: 'ZEIT-PDF lokal; Le Monde 03.06.2025, Abschnitte zu Reichweite/VIUS/Exxpress',
    art21: ['potentialitaet', 'vorfeld', 'demokratieprinzip'],
    zurechnungstyp: 'Medieninfrastruktur-/Potentialitätskante ohne automatische Parteizurechnung',
    beweistufe: 'C',
    status: 'BELEGT_UND_VERDRAHTET',
    proof_rule: 'Nützlich für Propaganda- und Reichweiteninfrastruktur; AfD-Zurechnung entsteht erst über konkrete AfD-Akteure, Übernahmen, Auftritte oder Kampagnen.',
    no_overclaim: 'Nicht als AfD-Finanzierung oder Parteiorganisation formulieren.',
    next_evidence_action: 'VIUS-Impressum/Handelsregister, Medienanstalt-Zulassung und eigene Reichweitendaten als Primäranker sichern.',
    visualization: 'Finanzier/Betreiber -> Medienkanal -> Reichweite -> AfD-Übernahmefälle'
  },
  {
    id: 'NIUS-AFD-007',
    cluster: 'Brandenburg-Vermerk: NIUS-Veröffentlichungsroute und Statusachse',
    actor: 'NIUS / AfD Brandenburg / LfV Brandenburg',
    organisation: 'Status- und Quellenroute',
    event: 'WELT/dpa berichtet, NIUS habe einen angeblichen 142-seitigen Brandenburger Verfassungsschutzvermerk zur AfD-Hochstufung vor der angekündigten Veröffentlichung öffentlich gemacht.',
    date: '2025-08-12',
    source_ids: ['SRC-WEB-WELT-NIUS-BRANDENBURG-VERMERK-2025'],
    source_paths: [],
    original_urls: ['https://www.welt.de/politik/deutschland/article689acd216fbe021a85130029/Gesichert-rechtsextremistisch-Brandenburger-AfD-Gutachten-angeblich-im-Internet-einsehbar.html'],
    pinpoint: 'WELT/dpa 12.08.2025, Bericht zur angeblichen NIUS-Veröffentlichung und Prüfung durch Innenministerium',
    art21: ['statusachsen_trennen', 'beweisqualitaet', 'menschenwuerde', 'demokratieprinzip'],
    zurechnungstyp: 'Quellen-/Statusroute: Medienveröffentlichung getrennt von amtlicher Landesbewertung',
    beweistufe: 'C',
    status: 'STATUSACHSEN_TRENNEN',
    proof_rule: 'Statuswirkung darf nur aus amtlicher LfV-/Ministeriums-/Gerichtsfassung folgen; NIUS/WELT sind Veröffentlichungs- und Rechercheanker.',
    no_overclaim: 'Nicht die NIUS-Fassung als amtlich bestätigten Vermerk behandeln, bevor sie mit der amtlichen Veröffentlichung abgeglichen ist.',
    next_evidence_action: 'Amtliche Brandenburg-Veröffentlichung, Klage-/Eilstand und NIUS-Fassung hash-/seitenidentisch vergleichen.',
    visualization: 'NIUS-Veröffentlichung -> WELT/dpa -> Ministeriumsprüfung -> amtlicher Vermerk -> Statusmatrix'
  },
  {
    id: 'NIUS-AFD-008',
    cluster: 'Brandmauer-/Kulturkampf-Kampagnenraum',
    actor: 'NIUS / Reichelt / AfD-nahe Themenaufnahme',
    organisation: 'Medien-/Kampagnenraum',
    event: 'Webrecherche und lokale Funde zeigen NIUS als Verstärker rechter Kulturkampf-, Brandmauer- und Anti-Progressiv-Narrative; AfD-Zurechnung nur bei dokumentierter Übernahme durch AfD-Akteure.',
    date: '2024-2026',
    source_ids: ['SRC-WEB-LEMONDE-NIUS-FOX-NEWS-2025', 'SRC-WEB-WIKIPEDIA-NIUS-REZEPTION-2026'],
    source_paths: [],
    original_urls: ['https://www.lemonde.fr/economie/article/2025/06/03/en-allemagne-nius-veut-devenir-le-fox-news-germanophone-d-europe-centrale_6610278_3234.html', 'https://de.wikipedia.org/wiki/Nius'],
    pinpoint: 'Le Monde 03.06.2025; Wikipedia-Rezeptionsabschnitt mit weiterführenden Presse-/Fachquellen',
    art21: ['demokratieprinzip', 'potentialitaet', 'darauf_ausgehen'],
    zurechnungstyp: 'Kontext- und Medienverstärkungskante; Parteizurechnung nur über konkrete Übernahmehandlungen',
    beweistufe: 'C',
    status: 'BELEGT_UND_VERDRAHTET',
    proof_rule: 'Als Potentialitäts- und Propagandainfrastruktur sichtbar; keine Gleichsetzung mit Partei oder Vorfeldorganisation ohne Kantenbeleg.',
    no_overclaim: 'Nicht als AfD-Medium bezeichnen, sondern als rechter Medienknoten mit dokumentierten AfD-Aufgriffen.',
    next_evidence_action: 'NIUS-Originalsendungen/-Artikel, AfD-Reposts, Auftritte, Interviewgäste und Kampagnenzeitpunkte maschinenlesbar erfassen.',
    visualization: 'Thema -> NIUS-Beitrag -> AfD-Aufgriff -> Reichweite -> Art.-21-Prüffeld'
  }
];

const findings = [
  {
    finding_id: 'FIND-NIUS-AFD-0001',
    finding_level: 'single',
    granularity: 'media_edge',
    thema: 'NIUS-Medienkante / Demokratie- und Rechtsstaatsangriff',
    unterthema: 'AfD München übernimmt NIUS-Aschaffenburg-/Brandmauer-Narrativ',
    art_21_element: 'Demokratieprinzip / Rechtsstaatsprinzip / Zurechnung',
    bverfg_prueffeld: 'Verhalten der Anhänger / Zurechnung / Darauf-Ausgehen',
    akteur: 'AfD München',
    akteursebene: 'AfD-Gliederung',
    afd_zurechnung: 'direkt',
    beweistufe: 'A',
    pruefstatus: 'geprueft',
    source_id: localSources.bfvTeilB,
    source_path: 'geheimgutachten/Geheimgutachten_Teil B_pages_401_to_500.md',
    source_medium: 'BfV-Gutachten / lokaler Split',
    quellenart: 'amtlich / gerichtlich',
    exact_fundstelle: 'Seitenzählung 64-66; Fußnotenbereich 3018-3020',
    relevanzbegruendung: 'Dokumentierte AfD-Gliederungshandlung mit NIUS-Bezug; relevant für Medienübernahme, Brandmauer-Narrativ, Demokratie- und Rechtsstaatsdelegitimierung.',
    kommentar: 'BELEGT_UND_VERDRAHTET: NIUS ist Medieninhalt, die Zurechnung läuft über die AfD-Gliederung und das BfV-Gutachten.',
    rechtsstatus: 'BfV-Gutachten / gerichtsdossierfähig mit Originalpost-Archiv',
    verbotsgrund_ids: ['VG-06', 'VG-10', 'VG-15']
  },
  {
    finding_id: 'FIND-NIUS-AFD-0002',
    finding_level: 'single',
    granularity: 'media_edge',
    thema: 'NIUS/Reichelt-Aufgriff / Menschenwürde',
    unterthema: 'René Springer greift Reichelt-Post auf und formuliert Ausschlussforderung',
    art_21_element: 'Menschenwürde / Zurechnung',
    bverfg_prueffeld: 'Ziele der Partei / Verhalten der Anhänger',
    akteur: 'René Springer',
    akteursebene: 'MdB / AfD-Funktionär',
    afd_zurechnung: 'direkt',
    beweistufe: 'B',
    pruefstatus: 'geprueft',
    source_id: localSources.gffAnhang,
    source_path: 'dokumente/ki_markdown/dokumente/splits/GFF_AfD-Gutachten_Teil_09_Anhang_B_Belege_Menschenwuerde.md',
    source_medium: 'GFF-Gutachten Anhang B Menschenwürde',
    quellenart: 'Gutachten / Sekundäranker mit Original-URL',
    original_url: 'https://x.com/rene_springer/status/1684479369555722240',
    exact_fundstelle: 'Lokaler Abschnitt um Zeile 35880; Fußnote 6109',
    relevanzbegruendung: 'Direkte Funktionärsäußerung mit Reichelt-Bezug; stützt Ausschlusslogik gegen ausländische Leistungsbezieher als Menschenwürde-/Zurechnungsachse.',
    kommentar: 'BELEGT_UND_VERDRAHTET; für A-Aufwertung Originalpost und Reichelt-Ausgangspost archivieren.',
    rechtsstatus: 'Gutachtenbeleg plus Originalpost-Route',
    verbotsgrund_ids: ['VG-02', 'VG-03', 'VG-11']
  },
  {
    finding_id: 'FIND-NIUS-AFD-0003',
    finding_level: 'single',
    granularity: 'media_edge',
    thema: 'NIUS-Aufgriff / Queerfeindlichkeit',
    unterthema: 'Kofner kommentiert NIUS-X-Post im LSBTIQ-/Trans-Komplex',
    art_21_element: 'Menschenwürde / Verhalten der Anhänger',
    bverfg_prueffeld: 'Zielgruppenbezogene Entwertung / Zurechnung',
    akteur: 'Jurij Kofner',
    akteursebene: 'Akteur aus GFF-Zitatkorpus',
    afd_zurechnung: 'belegtes_akteurs_quellen_finding',
    beweistufe: 'B',
    pruefstatus: 'geprueft',
    source_id: localSources.gffAnhang,
    source_path: 'dokumente/ki_markdown/dokumente/splits/GFF_AfD-Gutachten_Teil_09_Anhang_B_Belege_Menschenwuerde.md',
    source_medium: 'GFF-Gutachten Anhang B Menschenwürde',
    quellenart: 'Gutachten / Zitatanker',
    exact_fundstelle: 'Lokaler Abschnitt um Zeile 39992',
    relevanzbegruendung: 'Dokumentierte abwertende Aussage im Anschluss an NIUS-X-Post; stützt Anti-LSBTIQ-/Menschenwürdeachse, aber nur mit Akteurs- und Kontextprüfung.',
    kommentar: 'BELEGT_UND_VERDRAHTET: NIUS ist Anlass-/Medienknoten; die Aussage wird dem Akteur zugerechnet.',
    rechtsstatus: 'Gutachtenbeleg; Originalthread nachziehen',
    verbotsgrund_ids: ['VG-02', 'VG-11', 'VG-18']
  },
  {
    finding_id: 'FIND-NIUS-AFD-0004',
    finding_level: 'single',
    granularity: 'media_edge',
    thema: 'NIUS als parlamentarischer Bezugsanker',
    unterthema: 'AfD-Bundestagsfrage verlinkt NIUS-Gewaltstatistikartikel; amtliche Antwort ordnet PKS methodisch ein',
    art_21_element: 'Demokratieprinzip / Potentialität / Zurechnung',
    bverfg_prueffeld: 'Parlamentarische Kampagnenkante / Datenmethodik',
    akteur: 'Roger Beckamp',
    akteursebene: 'MdB / AfD-Bundestagsfraktion',
    afd_zurechnung: 'direkt',
    beweistufe: 'B',
    pruefstatus: 'geprueft',
    source_id: localSources.bt13317,
    source_path: 'dokumente/hauptquellen/BT_Plenarprotokoll_20_133_Hetze_Debatte.pdf',
    source_medium: 'Bundestagsdrucksache 20/13317',
    quellenart: 'amtlich / parlamentarisch',
    original_url: 'https://dserver.bundestag.de/btd/20/133/2013317',
    exact_fundstelle: 'BT-Drs. 20/13317, Fragen 43/44, S. 35-36',
    relevanzbegruendung: 'Amtliche Primärquelle belegt die Nutzung eines NIUS-Artikels als parlamentarischen Frageanker und zugleich die methodische Gegen-/Einordnung durch die Bundesregierung.',
    kommentar: 'BELEGT_UND_VERDRAHTET; NIUS-Artikel bleibt Bezugsanker, nicht Wahrheitsanker.',
    rechtsstatus: 'Bundestagsdrucksache',
    verbotsgrund_ids: ['VG-10', 'VG-11', 'VG-15']
  },
  {
    finding_id: 'FIND-NIUS-AFD-0005',
    finding_level: 'aggregate',
    granularity: 'source_route',
    thema: 'NIUS als Gutachten-Veröffentlichungsroute',
    unterthema: 'BfV-AfD-Gutachten über NIUS-Asset-URL in lokaler Rechtsanalyse referenziert',
    art_21_element: 'Beweisqualität / Statusachsen',
    bverfg_prueffeld: 'Quelle -> Originalfassung -> Gerichtsdossier',
    akteur: 'NIUS / BfV-Gutachtenroute',
    akteursebene: 'Medienroute',
    afd_zurechnung: 'kontextzahl_keine_afd_tat',
    beweistufe: 'B',
    pruefstatus: 'geprueft',
    source_id: localSources.bfvVerbot,
    source_path: 'dokumente/hauptquellen/untersuchung-bfv-gutachten-und-afd-parteiverbot.pdf',
    source_medium: 'Rechtsanalyse mit NIUS-Asset-URL in Fußnote',
    quellenart: 'Analyse / Quellenroute',
    original_url: 'https://api.nius.de/api/assets/office-hr/64a7c9da-6a9a-409e-9141-16ed0e1e9d80/gutachten-bfv-afd4.pdf?version=0',
    exact_fundstelle: 'Fußnote 1; lokaler Markdown-Abschnitt um Zeile 140',
    relevanzbegruendung: 'Belegt eine Veröffentlichungs-/Zugänglichkeitsroute des BfV-Gutachtens; materielle Beweiswirkung liegt beim Gutachten und amtlich/gerichtlich gesicherten Fassungen.',
    kommentar: 'BELEGT_UND_VERDRAHTET.',
    rechtsstatus: 'Quellenroute, keine eigene Parteizurechnung',
    verbotsgrund_ids: ['VG-06', 'VG-10']
  }
];

const edge = {
  edge_id: 'EDGE-NIUS-AFD-MEDIENKANTE-001',
  person: 'AfD-Funktionäre/Gliederungen mit dokumentiertem NIUS-/Reichelt-Aufgriff',
  organisation: 'NIUS / Reichelt / VIUS als Medien- und Kampagnenknoten',
  event: 'AfD-Übernahmen, parlamentarische NIUS-Verweise, BfV-/GFF-dokumentierte Medienaufgriffe und Veröffentlichungsrouten',
  date: '2023-2026',
  source: 'BfV-Gutachten, GFF Anhang B, Bundestagsdrucksache 20/13317, ZEIT, Le Monde, WELT',
  zurechnungstyp: 'Medienkante, Kampagnenkante, parlamentarische Bezugsquelle, Quellenroute; keine automatische Parteiorgan-Zurechnung',
  beweistufe: 'B/C',
  status: 'BELEGT_UND_VERDRAHTET',
  art21: ['demokratieprinzip', 'menschenwuerde', 'zurechnung', 'potentialitaet', 'darauf_ausgehen'],
  finding_ids: findings.map(row => row.finding_id),
  source_ids: [...new Set(matrixRows.flatMap(row => row.source_ids))],
  source_paths: [...new Set(matrixRows.flatMap(row => row.source_paths || []))],
  beweislast_notiz: 'NIUS wird als Medien-/Kampagnenknoten geführt. AfD-Zurechnung entsteht nur bei dokumentiertem AfD-Akteur, Parteiorgan, parlamentarischer Handlung, Übernahme, Auftritt oder Kampagnenbrücke.'
};

const deepresearch = `# NIUS und AfD: Medienkante, Quellenroute und Art.-21-Zurechnung 2026

Stand: 2026-07-09

## Beweisthese

NIUS ist im Statistik-Tab nicht als AfD-Organ zu führen. Gerichtsfest ist eine engere, härtere und belastbarere These: NIUS/Reichelt erscheint als rechter Medien- und Kampagnenknoten, dessen Inhalte von AfD-Akteuren aufgegriffen, parlamentarisch als Bezugsanker verwendet oder als Veröffentlichungsroute für Belegdokumente genutzt werden. Die Parteizurechnung entsteht ausschließlich über dokumentierte AfD-Gliederungen, Funktionäre, Mandatsträger, parlamentarische Vorgänge, Reposts, Kommentare, Auftritte, Kampagnen oder andere konkrete Kanten.

## Lokale Beleganker

| ID | Sachverhalt | Quelle | Status | Prozessregel |
|---|---|---|---|---|
| NIUS-AFD-001 | AfD München greift im Aschaffenburg-/Brandmauer-Komplex einen NIUS-Artikel auf. | BfV-Gutachten Teil B, lokaler Split Seitenzählung 64-66 | BELEGT_UND_VERDRAHTET | AfD-Gliederungshandlung, nicht pauschal NIUS=AfD. |
| NIUS-AFD-002 | René Springer bezieht sich auf einen Reichelt-Post und formuliert eine migrations-/sozialpolitische Ausschlussforderung. | GFF Anhang B Menschenwürde, lokaler Abschnitt um Zeile 35880 | BELEGT_UND_VERDRAHTET | Direkte Funktionärskante; Original-X-Archiv für A-Aufwertung sichern. |
| NIUS-AFD-003 | Jurij Kofner kommentiert einen NIUS-X-Post im LSBTIQ-/Trans-Komplex. | GFF Anhang B Menschenwürde, lokaler Abschnitt um Zeile 39992 | BELEGT_UND_VERDRAHTET | Akteursäußerung zurechnen; NIUS ist Anlass-/Medienknoten. |
| NIUS-AFD-004 | AfD-Bundestagsfrage verlinkt einen NIUS-Artikel zu Gewaltstatistik. | BT-Drs. 20/13317, Fragen 43/44, S. 35-36 | BELEGT_UND_VERDRAHTET | Parlamentsdrucksache ist Primäranker; NIUS bleibt Bezugsquelle. |
| NIUS-AFD-005 | BfV-AfD-Gutachten war in der Debatte über eine NIUS-Asset-URL zugänglich. | Lokale Rechtsanalyse, Fußnote 1 | BELEGT_UND_VERDRAHTET | NIUS als Veröffentlichungsroute, materielle Beweiswirkung beim Gutachten. |
| NIUS-AFD-006 | Gotthardt/VIUS/NIUS als finanzierte Medieninfrastruktur. | Lokales ZEIT-PDF; Le Monde; Wikipedia als Registerroute | BELEGT_UND_VERDRAHTET | Für Potentialität/Propagandainfrastruktur relevant, aber keine Parteifinanzierung behaupten. |
| NIUS-AFD-007 | NIUS veröffentlicht angeblichen Brandenburg-Verfassungsschutzvermerk vor amtlicher Pressekonferenz. | WELT/dpa 12.08.2025 | STATUSACHSEN_TRENNEN | Veröffentlichungsroute strikt von amtlicher Landesstatusachse trennen. |
| NIUS-AFD-008 | NIUS als rechter Kulturkampf- und Brandmauer-Kampagnenraum. | Le Monde; Rezeptionsquellen | BELEGT_UND_VERDRAHTET | AfD-Zurechnung nur bei dokumentiertem Aufgriff. |

## Webrecherche 2026-07-09

- Le Monde beschreibt NIUS als 2023 gestartete reaktionäre Plattform Julian Reichelts, mit schneller Reichweite, YouTube-/Spotify-Formaten, Frank-Gotthardt-/VIUS-Struktur und Exxpress-Beteiligung: https://www.lemonde.fr/economie/article/2025/06/03/en-allemagne-nius-veut-devenir-le-fox-news-germanophone-d-europe-centrale_6610278_3234.html
- WELT/dpa berichtet, NIUS habe einen angeblichen 142-seitigen Brandenburger AfD-Verfassungsschutzvermerk öffentlich gemacht; das Ministerium prüfte laut Bericht die Echtheit und die amtliche Veröffentlichung war separat angekündigt: https://www.welt.de/politik/deutschland/article689acd216fbe021a85130029/Gesichert-rechtsextremistisch-Brandenburger-AfD-Gutachten-angeblich-im-Internet-einsehbar.html
- Wikipedia wird nur als Register- und Quellenroute genutzt, nicht als Primärbeweis: https://de.wikipedia.org/wiki/Nius

## Zulässige scharfe Formulierung

NIUS ist als rechter Medien- und Kampagnenknoten mit belegten AfD-Aufgriffen, parlamentarischen NIUS-Bezügen und Veröffentlichungsrouten zu codieren. Beweisrelevant sind konkrete Kanten: AfD-Gliederung, Funktionär, Mandatsträger, Frage, Repost, Kommentar, Kampagne, Auftritt, Quelle und Datum.

## Unzulässige Überzeichnung

Nicht schreiben: NIUS ist ein AfD-Organ. Nicht schreiben: NIUS-Inhalte sind automatisch AfD-Beweise. Nicht schreiben: NIUS finanziert die AfD. Zulässig ist nur die konkrete Medien-, Kampagnen-, Aufgriffs- oder Quellenroute mit Akteur und Beleg.

## Statistikanschluss

- Datenmatrix: \`daten/nius_afd_medienkante_2026.jsonl\`
- Vorfeldkante: \`EDGE-NIUS-AFD-MEDIENKANTE-001\`
- Findings: \`FIND-NIUS-AFD-0001\` bis \`FIND-NIUS-AFD-0005\`
- Manifestwerte: \`STAT-NIUS-AFD-*\`
- Visualisierung: Medienkante AfD-Akteur -> NIUS/Reichelt-Inhalt -> Narrativ/Zielgruppe -> Art.-21-Prüffeld -> Zurechnung
`;

const sourceInventory = await readJsonl('daten/source_inventory.jsonl');
await writeJsonl('daten/source_inventory.jsonl', upsert(sourceInventory, 'source_id', webSources));

const existingFindings = await readJsonl('daten/findings_art21.jsonl');
await writeJsonl('daten/findings_art21.jsonl', upsert(existingFindings, 'finding_id', findings));

const existingEdges = await readJsonl('daten/vorfeld_network_edges_2026.jsonl');
await writeJsonl('daten/vorfeld_network_edges_2026.jsonl', upsert(existingEdges, 'edge_id', [edge]));

await writeJsonl('daten/nius_afd_medienkante_2026.jsonl', matrixRows);
await fs.writeFile(rel(deepresearchPath), deepresearch, 'utf8');

const manifest = await readJson('daten/statistik_manifest.json');
const directEdges = matrixRows.filter(row => /direkte|parlamentarische/.test(row.zurechnungstyp)).length;
const localAnchors = matrixRows.filter(row => row.source_paths.length).length;
const secondaryRoutes = matrixRows.filter(row => /SEKUNDAER|STATUSACHSEN/.test(row.status)).length;
const niusStats = [
  stat('STAT-NIUS-AFD-EDGES-001', 'NIUS/AfD: belegte Medien- und Quellenkanten', matrixRows.length, 'Kanten', 'Gesamtbestand', 'Zählung der strukturierten NIUS-/AfD-Medienkanten.', 'Vorfeld-/Medienbrücken, Zurechnung, Potentialität', 'Kanten sind Belegpfade; keine automatische Gleichsetzung NIUS=AfD.'),
  stat('STAT-NIUS-AFD-DIRECT-ACTOR-EDGES-001', 'NIUS/AfD: direkte AfD-Akteurs- oder Parlamentskanten', directEdges, 'Kanten', 'Direkte Aufgriffe', 'Zählung von Kanten mit AfD-Gliederung, AfD-Funktionär oder parlamentarischer AfD-Handlung.', 'Direkte Zurechnung über Akteur/Gliederung/Parlament', 'Direkt bedeutet dokumentierter Aufgriff, nicht Steuerung durch NIUS.'),
  stat('STAT-NIUS-AFD-LOCAL-ANCHORS-001', 'NIUS/AfD: lokale Repo-Anker', localAnchors, 'Kanten', 'Lokale Belege', 'Zählung der NIUS-Kanten mit lokalem source_path.', 'Quellennähe und gerichtsfeste Nachprüfbarkeit', 'Lokale Pfade können OCR-/Splitfassungen sein und müssen im Schriftsatz gegen Originale gelesen werden.'),
  stat('STAT-NIUS-AFD-SECONDARY-ROUTES-001', 'NIUS/AfD: Sekundär- oder Statusrouten', secondaryRoutes, 'Kanten', 'Primärankerauftrag', 'Zählung der Kanten, bei denen Web-/Presse-/Registerroute von amtlichem oder parteieigenem Primäranker getrennt wird.', 'Red-Team-Fairness und Beweisqualität', 'Sekundärroute ist kein Beweismangel; der Primäranker wird daneben gezogen.'),
  stat('STAT-NIUS-AFD-NO-OVERCLAIM-RULE-001', 'NIUS/AfD: Prozessregel keine automatische Parteizurechnung', 1, 'Regel', 'Prozessgrenze', 'Eine kanonische Leseregel für alle NIUS-Kanten.', 'Schützt gegen Überzeichnung und macht die konkrete Zurechnung belastbar.', 'NIUS ist nur bei konkretem AfD-Aufgriff, Akteur, Veranstaltung, Repost, Frage oder Kampagne parteibezogen verwertbar.')
];
await writeJson('daten/statistik_manifest.json', upsert(manifest, 'id', niusStats));

const audit = await readJsonl('daten/beweislast_audit_2026.jsonl');
await writeJsonl('daten/beweislast_audit_2026.jsonl', upsert(audit, 'audit_id', [{
  audit_id: 'AUDIT-015',
  axis: 'NIUS / Reichelt / rechte Medienkante',
  risk: 'Ohne Kantenlogik kann NIUS entweder entlastend als bloßes Medium verschwinden oder überzeichnend als AfD-Organ behandelt werden.',
  fix: 'daten/nius_afd_medienkante_2026.jsonl, FIND-NIUS-AFD-0001 bis 0005 und EDGE-NIUS-AFD-MEDIENKANTE-001 angelegt; direkte AfD-Aufgriffe, parlamentarische Bezugsanker, Veröffentlichungsrouten und Sekundär-/Webquellen getrennt.',
  remaining: 'NIUS-Originalartikel, X-Posts, Videos, Impressum/Handelsregister, Medienanstalt-Zulassung und Archiv-Screenshots als Primäranker neben die lokalen Gutachten-/Parlamentsanker ziehen.',
  status: 'BELEGT_UND_VERDRAHTET',
  evidence: 'daten/nius_afd_medienkante_2026.jsonl; BfV-Gutachten Teil B; GFF Anhang B; BT-Drs. 20/13317; ZEIT-PDF; Le Monde; WELT/dpa',
  process_rule: 'NIUS ist als Medien-/Kampagnenknoten sichtbar. AfD-Zurechnung nur über konkrete AfD-Akteure, Gliederungen, parlamentarische Handlungen oder dokumentierte Aufgriffe.'
}]));

let html = await fs.readFile(rel('index.html'), 'utf8');
const embeddedManifest = await readJson('daten/statistik_manifest.json');
html = html.replace(/const embeddedStatisticsManifest = \[.*?\];/s, `const embeddedStatisticsManifest = ${JSON.stringify(embeddedManifest)};`);
html = html.replace(/const evidenceBurdenAuditRows = \[.*?\];/s, `const evidenceBurdenAuditRows = ${JSON.stringify(await readJsonl('daten/beweislast_audit_2026.jsonl'))};`);

if (!html.includes('statsNiusAfdMediaMatrix')) {
  const section = `

                <div class="bg-white rounded-xl shadow p-6 border border-purple-100 space-y-5">
                    <div class="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                        <div>
                            <p class="text-xs font-bold uppercase tracking-wider text-purple-700">NIUS / rechte Medienkante</p>
                            <h3 class="text-xl font-extrabold text-brand-dark">NIUS, Reichelt und AfD-Aufgriffe: Medienkante statt Pauschalzurechnung</h3>
                            <p class="text-sm text-slate-500 max-w-5xl mt-1">Diese Matrix führt NIUS nicht als AfD-Organ. Sie zeigt beweisfeste Kanten: AfD-Gliederung, Funktionär, parlamentarische Frage, Veröffentlichungsroute, Medieninfrastruktur, Quelle, Pinpoint und Art.-21-Prüffeld. Die harte Regel lautet: AfD-Zurechnung nur bei dokumentiertem Aufgriff durch Akteur, Ebene oder Organ.</p>
                        </div>
                        <a href="./daten/nius_afd_medienkante_2026.jsonl" target="_blank" class="bg-purple-50 hover:bg-purple-100 text-purple-700 font-bold px-4 py-2 rounded-lg text-xs transition inline-flex items-center gap-2 shrink-0"><i class="fa-solid fa-tower-broadcast"></i><span>NIUS-Matrix</span></a>
                    </div>
                    <div id="statsNiusAfdMediaKpis" class="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-3"></div>
                    <div id="statsNiusAfdMediaMatrix" class="grid grid-cols-1 lg:grid-cols-2 gap-4"></div>
                    <p class="text-[11px] text-slate-400 leading-relaxed border-t border-slate-100 pt-3">Prozessgrenze: NIUS-Beiträge, Reichelt-Posts und Gotthardt-/VIUS-Infrastruktur sind nicht automatisch AfD-Beweise. Beweisrelevant werden sie durch dokumentierte AfD-Aufgriffe, parlamentarische Verwendung, konkrete Kampagnenbrücken oder Quellenrouten. Presse- und Webquellen bleiben niedriger gewichtet als BfV, Gericht, Bundestag oder parteieigene Originale.</p>
                </div>`;
  html = html.replace(/\n\s*<div class="bg-white rounded-xl shadow p-6 border border-amber-200 space-y-5">\n\s*<div class="flex flex-col lg:flex-row lg:items-start justify-between gap-4">\n\s*<div>\n\s*<p class="text-xs font-bold uppercase tracking-wider text-brand-gold">Beweislast-Audit<\/p>/, `${section}\n\n                <div class="bg-white rounded-xl shadow p-6 border border-amber-200 space-y-5">\n                    <div class="flex flex-col lg:flex-row lg:items-start justify-between gap-4">\n                        <div>\n                            <p class="text-xs font-bold uppercase tracking-wider text-brand-gold">Beweislast-Audit</p>`);
}

if (!html.includes('const niusAfdMediaRows = ')) {
  html = html.replace(/const evidenceBurdenAuditRows = /, `const niusAfdMediaRows = ${JSON.stringify(matrixRows)};\n\n        const evidenceBurdenAuditRows = `);
} else {
  html = html.replace(/const niusAfdMediaRows = \[.*?\];/s, `const niusAfdMediaRows = ${JSON.stringify(matrixRows)};`);
}

if (!html.includes('function renderNiusAfdMediaMatrix')) {
  const fn = `
        function renderNiusAfdMediaMatrix(statById = () => 0) {
            renderKpiCards('statsNiusAfdMediaKpis', [
                { value: statById('STAT-NIUS-AFD-EDGES-001', niusAfdMediaRows.length), label: 'NIUS-Kanten' },
                { value: statById('STAT-NIUS-AFD-DIRECT-ACTOR-EDGES-001', niusAfdMediaRows.filter(row => /direkte|parlamentarische/i.test(row.zurechnungstyp || '')).length), label: 'direkte Aufgriffe' },
                { value: statById('STAT-NIUS-AFD-LOCAL-ANCHORS-001', niusAfdMediaRows.filter(row => Array.isArray(row.source_paths) && row.source_paths.length).length), label: 'lokale Anker' },
                { value: statById('STAT-NIUS-AFD-SECONDARY-ROUTES-001', niusAfdMediaRows.filter(row => /SEKUNDAER|STATUSACHSEN/i.test(row.status || '')).length), label: 'Primärankerroute' },
                { value: statById('STAT-NIUS-AFD-NO-OVERCLAIM-RULE-001', 1), label: 'keine Pauschalzurechnung' }
            ], ['fa-tower-broadcast','fa-link','fa-folder-open','fa-thumbtack','fa-scale-balanced']);
            const host = document.getElementById('statsNiusAfdMediaMatrix');
            if (!host) return;
            host.innerHTML = niusAfdMediaRows.map(row => '<article class="rounded-lg border border-purple-100 bg-purple-50/35 p-4"><div class="flex items-start justify-between gap-3"><div><p class="text-[10px] font-bold uppercase tracking-wider text-purple-700">' + escapeHtml(row.id || '') + '</p><h4 class="text-sm font-extrabold text-brand-dark mt-1">' + escapeHtml(row.cluster || '') + '</h4></div><span class="rounded-full bg-white border border-purple-100 px-2 py-1 text-[10px] font-bold text-purple-700">' + escapeHtml(row.status || '') + '</span></div><p class="mt-2 text-xs text-slate-700"><strong>Akteur:</strong> ' + escapeHtml(row.actor || '') + '</p><p class="mt-1 text-xs text-slate-700"><strong>Kante:</strong> ' + escapeHtml(row.zurechnungstyp || '') + '</p><p class="mt-1 text-xs text-slate-700"><strong>Art. 21:</strong> ' + escapeHtml(Array.isArray(row.art21) ? row.art21.join(', ') : '') + '</p><p class="mt-1 text-[11px] text-slate-600"><strong>Beleganker:</strong> ' + escapeHtml(Array.isArray(row.source_ids) ? row.source_ids.join(', ') : '') + '</p><p class="mt-1 text-[11px] text-slate-600"><strong>Pinpoint:</strong> ' + escapeHtml(row.pinpoint || '') + '</p><p class="mt-1 text-[11px] text-amber-800"><strong>Prozessregel:</strong> ' + escapeHtml(row.proof_rule || '') + '</p><p class="mt-1 text-[11px] text-red-700"><strong>Keine Überzeichnung:</strong> ' + escapeHtml(row.no_overclaim || '') + '</p></article>').join('');
        }
`;
  html = html.replace(/\n        function renderEvidenceBurdenAudit\(\) \{/, `${fn}\n        function renderEvidenceBurdenAudit() {`);
}

if (!html.includes('renderNiusAfdMediaMatrix(statById);')) {
  html = html.replace(/renderEvidenceBurdenAudit\(\);\n\s*renderTotalDataMatrix\(statById\);/, `renderNiusAfdMediaMatrix(statById);\n            renderEvidenceBurdenAudit();\n            renderTotalDataMatrix(statById);`);
}
html = html.replace(/Vorfeld- und Netzwerkmodul', count: fmtStat\(terrorParamilitaryRows\.length \+ 4\) \+ ' Sicherheits-\/Vorfeld- und Kampagnenkanten im sichtbaren Tab', evidence: 'daten\/vorfeld_network_edges_2026\.jsonl; terrorParamilitaryRows; EDGE-JA-GD-REMIGRATION-001; EDGE-IB-IFS-EINPROZENT-COMPACT-001; EDGE-KULTUR-SCHULE-001'/, `Vorfeld- und Netzwerkmodul', count: fmtStat(terrorParamilitaryRows.length + 5) + ' Sicherheits-/Vorfeld-, Medien- und Kampagnenkanten im sichtbaren Tab', evidence: 'daten/vorfeld_network_edges_2026.jsonl; daten/nius_afd_medienkante_2026.jsonl; terrorParamilitaryRows; EDGE-JA-GD-REMIGRATION-001; EDGE-IB-IFS-EINPROZENT-COMPACT-001; EDGE-KULTUR-SCHULE-001; EDGE-NIUS-AFD-MEDIENKANTE-001'`);

await fs.writeFile(rel('index.html'), html, 'utf8');

console.log('NIUS/AfD-Medienkante verdrahtet: Matrix, Findings, Sources, Edge, Manifest, UI und Deepresearch-Vermerk aktualisiert.');
