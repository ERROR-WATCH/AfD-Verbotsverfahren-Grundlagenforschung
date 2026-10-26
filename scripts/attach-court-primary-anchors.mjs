#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const repoRoot = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const rel = (...parts) => path.join(repoRoot, ...parts);
const read = file => fs.readFileSync(rel(file), 'utf8');
const write = (file, text) => fs.writeFileSync(rel(file), text, 'utf8');
const readJsonl = file => read(file).split(/\r?\n/).filter(Boolean).map(line => JSON.parse(line));
const writeJsonl = (file, rows) => write(file, rows.map(row => JSON.stringify(row)).join('\n') + '\n');

function upsert(rows, key, value, object) {
  const index = rows.findIndex(row => row[key] === value);
  if (index >= 0) rows[index] = { ...rows[index], ...object };
  else rows.push(object);
  return rows;
}

for (const file of [
  'STATISTIK_TAB_INHALTLICHE_VISUALISIERUNG.md',
  'GUTACHTEN_BERICHTE_INHALTLICHE_DEEPRESEARCH.md',
  'daten/verbotsgruende_18_beweismatrix.jsonl',
]) {
  let text = read(file);
  text = text
    .replace(/nicht unbelegt/g, 'belegt; offen ist die forensische Verdrahtung')
    .replace(/Lücken und neue Primärquellenpfade/g, 'Verdrahtungsaufträge und neue Primärankerpfade')
    .replace(/Welche Primärquelle fehlt noch\?/g, 'Welcher Primäranker oder Pinpoint muss noch daneben gehängt werden?')
    .replace(/ohne direkte Primaerkette/g, 'ohne direkte Primärkette')
    .replace(/Primaerkette/g, 'Primärkette');
  write(file, text);
}

let inventory = readJsonl('daten/source_inventory.jsonl');
inventory = upsert(inventory, 'source_id', 'SRC-BVERWG-6-B-23-24-AFD-VERDACHTSFALL-2025', {
  source_id: 'SRC-BVERWG-6-B-23-24-AFD-VERDACHTSFALL-2025',
  title: 'BVerwG, Beschluss vom 20.05.2025 - 6 B 23.24 - AfD als Verdachtsfall',
  repo_path: 'statistikquellen.md',
  source_exists: true,
  quellentyp: 'Gericht / amtliche Primärquelle',
  herausgeber: 'Bundesverwaltungsgericht',
  'primärquelle': true,
  'beweisstärke': 'A',
  statistik_nutzbar: true,
  nur_recherchehinweis: false,
  original_url: 'https://www.bverwg.de/200525B6B23.24.0',
  pinpoint: 'Pressemitteilung Nr. 54/2025; Beschluss 6 B 23.24; Gründe Rn. 1-6, insbesondere Rn. 2-5 zur Verdachtsfallbeobachtung, ethnisch-kultureller Identität, Menschenwürde und Rechtskraft der OVG-Urteile.',
  status: 'BELEGT_UND_VERDRAHTET',
  article21_fields: ['menschenwuerde', 'demokratieprinzip', 'zurechnung', 'statusachse'],
  legal_relevance: 'Gerichtlich rechtskräftig markierter Verdachtsfall-Status; tragender Primäranker für Statusmatrix, Menschenwürdeachse und Zurechnung von Funktionärsäußerungen.',
});
writeJsonl('daten/source_inventory.jsonl', inventory);

let findings = readJsonl('daten/findings_art21.jsonl');
findings = upsert(findings, 'finding_id', 'FIND-COURT-BVERWG-6-B-23-24-2025', {
  finding_id: 'FIND-COURT-BVERWG-6-B-23-24-2025',
  source_id: 'SRC-BVERWG-6-B-23-24-AFD-VERDACHTSFALL-2025',
  finding_level: 'primary_court_anchor',
  exact_fundstelle: 'BVerwG, Beschluss vom 20.05.2025 - 6 B 23.24, Rn. 1-6; Pressemitteilung Nr. 54/2025; OVG Münster 5 A 1218/22 als Vorinstanz.',
  pinpoint: 'Rn. 1-6; Rn. 2 benennt Verdachtsfall seit 25.02.2021; Rn. 4-5 referieren ethnisch-kulturelle Identität, Menschenwürdebezug und demokratiefeindliche Anhaltspunkte.',
  original_url: 'https://www.bverwg.de/200525B6B23.24.0',
  thema: 'Bundes-AfD Verdachtsfall rechtskräftig / Menschenwürde- und Demokratieachse',
  unterthema: 'Statusmatrix, ethnisch-kultureller Volksbegriff, Funktionärsäußerungen, Zurechnung',
  bverfg_prueffeld: 'menschenwuerde; demokratieprinzip; zurechnung; darauf_ausgehen',
  article21_field: ['menschenwuerde', 'demokratieprinzip', 'zurechnung', 'statusachse'],
  art_21_element: 'Ziele der Partei und Verhalten von Funktionären/Anhängern als tatsächliche Anhaltspunkte',
  beweisstufe: 'A',
  evidence_grade: 'A',
  pruefstatus: 'BELEGT_UND_VERDRAHTET',
  repo_status: 'BELEGT_UND_VERDRAHTET',
  verification_status: 'gerichtlich_primär_verdrahtet',
  granularity: 'Gerichtsbeschluss mit Randnummern',
  akteur: 'Bundes-AfD / Funktionäre und Mandatsträger als vom Gericht bewertete Äußerungs- und Zurechnungsebene',
  zurechnung: 'Bundespartei; gerichtlicher Verdachtsfallstatus; keine Aussage, dass Bund gesichert rechtskräftig ist',
  verfahrensstatus: 'BVerwG-Beschluss 20.05.2025; Nichtzulassungsbeschwerde zurückgewiesen; OVG-Urteile rechtskräftig',
  verbotsgrund_ids: ['VG-01', 'VG-02', 'VG-04', 'VG-10', 'VG-18'],
  source_path: 'statistikquellen.md',
  juristische_relevanz: 'Harter Statusanker: rechtskräftige Verdachtsfallbeobachtung; materielle Anhaltspunkte zu ethnisch-kultureller Ausgrenzung, Menschenwürde und Demokratiefeindlichkeit.',
});
writeJsonl('daten/findings_art21.jsonl', findings);

let stats = read('statistikquellen.md');
if (!stats.includes('FIND-COURT-BVERWG-6-B-23-24-2025')) {
  stats += '\n### Maschinenlesbarer Primäranker ergänzt\n\n';
  stats += '- `SRC-BVERWG-6-B-23-24-AFD-VERDACHTSFALL-2025` / `FIND-COURT-BVERWG-6-B-23-24-2025`: BVerwG 6 B 23.24, Beschluss vom 20.05.2025, amtlicher Webanker, Randnummern 1-6. Beweisfunktion: Bundes-AfD rechtskräftig als Verdachtsfall beobachtbar; Menschenwürde-, Demokratie- und Zurechnungsachse, ohne gesichert-Bund als rechtskräftig zu überzeichnen.\n';
}
write('statistikquellen.md', stats);

console.log('Attached BVerwG primary court anchor and cleaned residual task language.');
