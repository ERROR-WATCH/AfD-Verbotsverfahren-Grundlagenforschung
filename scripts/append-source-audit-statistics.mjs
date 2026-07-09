#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const repoRoot = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const manifestPath = path.join(repoRoot, 'daten', 'statistik_manifest.json');
const auditPath = path.join(repoRoot, 'daten', 'vg_source_match_audit_2026_summary.json');
if (!fs.existsSync(manifestPath) || !fs.existsSync(auditPath)) process.exit(0);
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
const audit = JSON.parse(fs.readFileSync(auditPath, 'utf8'));
const entry = data => ({
  id: data.id,
  title: data.title,
  value: data.value,
  unit: data.unit,
  theme: 'Quelleninventar-Mining',
  subtheme: data.subtheme,
  source: 'daten/vg_source_match_audit_2026_summary.json',
  source_type: 'Abgeleiteter Quelleninventar-Audit',
  source_path: 'daten/vg_source_match_audit_2026_summary.json',
  finding_location: data.finding_location,
  method: data.method,
  legal_relevance: data.legal_relevance,
  article_21_field: data.article_21_field,
  evidence_grade: 'B',
  status: 'geprueft',
  limitations: 'Audit-Mining ersetzt nicht die finale Schriftsatzprüfung der Seiten-/Randnummern am Original; es stopft die Statistik- und Quellenrouten im Repository.'
});
const additions = [
  entry({
    id: 'STAT-SOURCE-MATCH-VG-COVERAGE-001',
    title: 'Quelleninventar-Mining: verdrahtete Verbotsgründe',
    value: audit.rows.filter(row => row.status_after_mining === 'BELEGT_UND_VERDRAHTET').length,
    unit: 'Verbotsgründe',
    subtheme: 'Status nach Quellenabgleich',
    finding_location: 'rows[].status_after_mining',
    method: 'Alle 18 Verbotsgründe wurden gegen source_inventory.jsonl und repo_file_index_2026.jsonl gematcht; gezählt werden Achsen mit Status BELEGT_UND_VERDRAHTET.',
    legal_relevance: 'Belegabdeckung und Verdrahtungsstand der Verbotsbegründung',
    article_21_field: 'Quelle / Pinpoint / Akteur / Zurechnung / Statistik'
  }),
  entry({
    id: 'STAT-SOURCE-MATCH-TOTAL-001',
    title: 'Quelleninventar-Mining: zugeordnete Quellentreffer',
    value: audit.total_source_matches,
    unit: 'Quellentreffer',
    subtheme: 'Gesamtmatches',
    finding_location: 'total_source_matches',
    method: 'Summe der pro Verbotsgrund zugeordneten Quelleninventar-Treffer nach gewichteter Term-/Quellenart-Suche.',
    legal_relevance: 'Belegabdeckung und Quellenroute je Verbotsgrund',
    article_21_field: 'Belegdichte / Zurechnung / Prüffeldabdeckung'
  }),
  entry({
    id: 'STAT-SOURCE-MATCH-PRIMARY-001',
    title: 'Quelleninventar-Mining: Primäranker',
    value: audit.total_primary_anchors,
    unit: 'Primäranker',
    subtheme: 'Primär-/A-B-Anker',
    finding_location: 'total_primary_anchors',
    method: 'Summe der pro Verbotsgrund erkannten Primär-, Gerichts-, Behörden-, Programm- oder A/B-Anker in den Top-Matches.',
    legal_relevance: 'Beweisnähe und Schriftsatz-Pinpoint',
    article_21_field: 'Primäranker / Zurechnung / Beweisstärke'
  })
];
const byId = new Map(manifest.map(item => [item.id, item]));
for (const item of additions) byId.set(item.id, item);
fs.writeFileSync(manifestPath, JSON.stringify([...byId.values()], null, 2) + '\n');
console.log('Appended source-match audit statistics to manifest.');
