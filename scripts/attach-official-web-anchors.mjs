#!/usr/bin/env node
import fs from 'node:fs/promises';
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

function uniq(values) {
  return [...new Set((values || []).filter(Boolean))];
}

async function upsertJsonl(file, key, additions) {
  const rows = await readJsonl(file);
  const seen = new Set(rows.map((row) => row[key]));
  for (const row of additions) {
    const idx = rows.findIndex((existing) => existing[key] === row[key]);
    if (idx >= 0) rows[idx] = { ...rows[idx], ...row };
    else if (!seen.has(row[key])) rows.push(row);
  }
  await writeJsonl(file, rows);
  return rows;
}

const officialSources = [
  {
    source_id: 'SRC-GBA-2024-11-05-SAECHSISCHE-SEPARATISTEN-FESTNAHMEN',
    title: 'Generalbundesanwalt: Festnahme von acht mutmaßlichen Mitgliedern einer rechtsextremistischen terroristischen Vereinigung',
    repo_path: 'sources/web/gba/gba_2024-11-05_saechsische_separatisten_festnahmen.html',
    original_url: 'https://www.generalbundesanwalt.de/SharedDocs/Pressemitteilungen/DE/2024/Pressemitteilung-vom-05-11-2024.html',
    archive_url: 'sources/web/gba/gba_2024-11-05_saechsische_separatisten_festnahmen.html',
    source_exists: true,
    source_kind: 'web_archive',
    quellentyp: 'Amtliche Primärquelle / Bundesanwaltschaft',
    herausgeber: 'Generalbundesanwalt beim Bundesgerichtshof',
    datum: '2024-11-05',
    abrufdatum: '2026-07-09',
    seiten_oder_umfang: 'HTML-Pressemitteilung; lokale Archivkopie',
    format: 'HTML',
    primärquelle: true,
    beweisstärke: 'A',
    juristischer_nutzwert: 'primaer',
    risiken: 'Laufendes Staatsschutzverfahren; keine rechtskräftige Verurteilung; Parteizurechnung nur über statusbezogene AfD-/JA-/Funktionskanten.',
    statistik_nutzbar: true,
    nur_recherchehinweis: false,
    themenbereich: 'Sicherheits-/Umsturzkomplex / Sächsische Separatisten',
    notiz: 'Amtlicher Haftbefehls-/Festnahmeanker: terroristische Vereinigung, Tag-X, nationalsozialistisch ausgerichtetes Staatswesen, ethnische Säuberungen, paramilitärische Trainings.',
    verification_status: 'BELEGT_UND_VERDRAHTET'
  },
  {
    source_id: 'SRC-GBA-2025-09-10-SAECHSISCHE-SEPARATISTEN-ANKLAGE',
    title: 'Generalbundesanwalt: Anklage gegen acht mutmaßliche Mitglieder einer rechtsextremistischen terroristischen Vereinigung erhoben',
    repo_path: 'sources/web/gba/gba_2025-09-10_saechsische_separatisten_anklage.html',
    original_url: 'https://www.generalbundesanwalt.de/SharedDocs/Pressemitteilungen/DE/2025/Pressemitteilung-vom-10-09-2025.html',
    archive_url: 'sources/web/gba/gba_2025-09-10_saechsische_separatisten_anklage.html',
    source_exists: true,
    source_kind: 'web_archive',
    quellentyp: 'Amtliche Primärquelle / Bundesanwaltschaft',
    herausgeber: 'Generalbundesanwalt beim Bundesgerichtshof',
    datum: '2025-09-10',
    abrufdatum: '2026-07-09',
    seiten_oder_umfang: 'HTML-Pressemitteilung; lokale Archivkopie',
    format: 'HTML',
    primärquelle: true,
    beweisstärke: 'A',
    juristischer_nutzwert: 'primaer',
    risiken: 'Anklage, nicht Urteil; laufendes Verfahren; Kurt H. und weitere AfD-/JA-Bezüge müssen als getrennte Zurechnungskanten geführt werden.',
    statistik_nutzbar: true,
    nur_recherchehinweis: false,
    themenbereich: 'Sicherheits-/Umsturzkomplex / Sächsische Separatisten',
    notiz: 'Amtlicher Anklageanker: § 129a StGB, § 83 StGB, Kurt H. zusätzlicher Vorwurf versuchter Mord/tätlicher Angriff/WaffG; Ideologie und paramilitärische Vorbereitung amtlich beschrieben.',
    verification_status: 'BELEGT_UND_VERDRAHTET'
  }
];

await upsertJsonl(rel('daten', 'source_inventory.jsonl'), 'source_id', officialSources);

const terrorRows = await readJsonl(rel('daten', 'terror_umsturz_paramilitaer_matrix_2026.jsonl'));
for (const row of terrorRows) {
  if (row.id === 'SEC-SS-001') {
    row.source_ids = uniq([
      ...(row.source_ids || []),
      'SRC-GBA-2024-11-05-SAECHSISCHE-SEPARATISTEN-FESTNAHMEN',
      'SRC-GBA-2025-09-10-SAECHSISCHE-SEPARATISTEN-ANKLAGE',
      'SRC-OLG-DRESDEN-2025-12-15-SAECHSISCHE-SEPARATISTEN-EROEFFNUNG'
    ]);
    row.legal_status = 'GBA-Festnahme 2024, GBA-Anklage 2025, OLG Dresden Eröffnungsbeschluss 02.12.2025 (5 St 4/25), Hauptverfahren laufend; keine rechtskräftige Verurteilung.';
    row.rechtskraft = 'nicht rechtskräftig; laufendes Hauptverfahren';
    row.aktenzeichen = 'OLG Dresden 5 St 4/25';
    row.status_date = '2026-03-31';
    row.prozessrisiko = 'Laufend und daher STATUS_BEZOGEN_GETRENNT; AfD-/JA-Zurechnung nur über Kurt H., Parteifunktion, Stadtratsmandat, Mitarbeiter-/JA-Belege und weitere Einzelkanten.';
    row.dashboard_label = 'Amtlich belegter Sächsische-Separatisten-Komplex mit AfD-/JA-Kommunal- und Funktionskanten';
  }
}
await writeJsonl(rel('daten', 'terror_umsturz_paramilitaer_matrix_2026.jsonl'), terrorRows);

const routeRows = await readJsonl(rel('daten', 'beweisrouten_audit_2026.jsonl'));
for (const row of routeRows) {
  if (row.route_id === 'ROUTE-AUDIT-003-SICHERHEIT') {
    row.status = 'STATUS_BEZOGEN_GETRENNT';
    row.evidence_grade = 'A/B';
    row.local_anchors = uniq([
      ...(row.local_anchors || []),
      'sources/web/gba/gba_2024-11-05_saechsische_separatisten_festnahmen.html',
      'sources/web/gba/gba_2025-09-10_saechsische_separatisten_anklage.html'
    ]);
    row.online_anchors = uniq([
      'https://www.generalbundesanwalt.de/SharedDocs/Pressemitteilungen/DE/2024/Pressemitteilung-vom-05-11-2024.html',
      'https://www.generalbundesanwalt.de/SharedDocs/Pressemitteilungen/DE/2025/Pressemitteilung-vom-10-09-2025.html',
      ...(row.online_anchors || []).filter((url) => !/welt\.de|wikipedia\.org/i.test(url)),
      'Wikipedia/WELT bleiben nur Zusatz- und Rechercheindex, nicht tragender Primäranker.'
    ]);
    row.pinpoint_route = 'Sächsische Separatisten: GBA 05.11.2024 Zeilen/Inhalt Festnahme und Haftbefehle; GBA 10.09.2025 Anklage, §129a/§83, Kurt H. Zusatzvorwürfe. Reuß/Malsack: lokale Urteilsbelege und BGH/GBA-Suchroute bleiben getrennt, bis amtlicher Volltext lokal archiviert ist.';
    row.proof_function = 'Sicherheitskomplexe tragen Potentialität, Rechtsstaatsangriff und Zurechnungsbrücken. Der Sächsische-Separatisten-Komplex ist jetzt mit amtlichen GBA-Primärankern lokal archiviert; laufende Verfahren bleiben statusbezogen getrennt markiert.';
    row.no_overclaim = 'Keine Terror-Pauschalformel. Zulässig ist: amtlich belegter rechtsterroristischer Sächsische-Separatisten-Komplex mit statusbezogen getrennt zu pruefenden AfD-/JA-/Mitarbeiter- und Mandatskanten; keine rechtskräftige Verurteilung behaupten.';
  }
}
await writeJsonl(rel('daten', 'beweisrouten_audit_2026.jsonl'), routeRows);

const priorities = await readJsonl(rel('daten', 'beweisverknuepfung_prioritaeten_2026.jsonl')).catch(() => []);
for (const row of priorities) {
  if (/Sicherheits|Umsturz|Spionage/i.test(row.axis || '')) {
    row.status = 'STATUS_BEZOGEN_GETRENNT';
    row.what_is_linked = 'Sächsische Separatisten sind mit zwei amtlichen GBA-Primärankern lokal archiviert; bestehende Reichsbürger-/Spionage-/Mitarbeiterkanten bleiben fall- und statusbezogen getrennt.';
    row.hard_evidence = 'SRC-GBA-2024-11-05-SAECHSISCHE-SEPARATISTEN-FESTNAHMEN; SRC-GBA-2025-09-10-SAECHSISCHE-SEPARATISTEN-ANKLAGE; daten/terror_umsturz_paramilitaer_matrix_2026.jsonl:SEC-SS-001.';
    row.missing_link = 'Für Reuß/Malsack, Krah/Jian G. und Bystron die amtlichen GBA/BGH/OLG/Bundestagsanker noch physisch ins Repo ziehen und als eigene Fallzeilen führen.';
    row.repair = 'Keine Sammelbehauptung. Je Fall: Tatvorwurf, Instanz, Rechtskraft, Parteifunktion, Mitarbeiter-/Mandatsstatus, Zugang, Parteireaktion und Entlastungs-/Verfahrensstand codieren.';
  }
}
if (priorities.length) await writeJsonl(rel('daten', 'beweisverknuepfung_prioritaeten_2026.jsonl'), priorities);

console.log('Amtliche Webanker angehängt: ' + officialSources.map((row) => row.source_id).join(', '));
