import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();

const paths = {
  top40: 'daten/antragsspitze_top40_beweise_2026.jsonl',
  schriftsatz: 'daten/schriftsatz_export_top_beweise_2026.jsonl',
  gutachten: 'daten/gutachten_coverage_audit_2026.jsonl',
  webhash: 'daten/official_web_anchor_integrity_2026.jsonl',
  outJsonl: 'daten/anlagenregister_art21_2026.jsonl',
  outMd: 'dokumente/hauptquellen/ANLAGENREGISTER_ART21_2026.md',
  report: 'reports/anlagenregister-audit-2026-07-09.md',
  readme: 'README.md',
};

function readJsonl(rel) {
  const full = path.join(ROOT, rel);
  if (!fs.existsSync(full)) return [];
  return fs
    .readFileSync(full, 'utf8')
    .split(/\r?\n/)
    .filter(Boolean)
    .map((line, index) => {
      try {
        return JSON.parse(line);
      } catch (error) {
        throw new Error(`${rel}:${index + 1}: ${error.message}`);
      }
    });
}

function writeJsonl(rel, rows) {
  fs.mkdirSync(path.dirname(path.join(ROOT, rel)), { recursive: true });
  fs.writeFileSync(path.join(ROOT, rel), rows.map((row) => JSON.stringify(row)).join('\n') + '\n');
}

function writeText(rel, text) {
  fs.mkdirSync(path.dirname(path.join(ROOT, rel)), { recursive: true });
  fs.writeFileSync(path.join(ROOT, rel), text);
}

function clean(value) {
  return String(value ?? '').replace(/\s+/g, ' ').trim();
}

function unique(values) {
  return [...new Set(values.filter(Boolean))];
}

function makeHashMap(rows) {
  const byPath = new Map();
  for (const row of rows) {
    if (row.repo_path) byPath.set(row.repo_path, row);
  }
  return byPath;
}

function classifyAnlage(row) {
  const text = `${row.source_family ?? ''} ${row.repo_path ?? ''} ${row.source_id ?? ''}`.toLowerCase();
  if (text.includes('gba') || text.includes('olg') || text.includes('bundestag') || text.includes('bverwg') || text.includes('gericht')) return 'A';
  if (text.includes('bfv') || text.includes('lfv') || text.includes('verfassungsschutz')) return 'B';
  if (text.includes('programm') || text.includes('afd_bundestagswahlprogramm') || text.includes('landeswahlprogramm')) return 'D';
  if (text.includes('gff') || text.includes('dimr') || text.includes('gutachten')) return 'B';
  if (text.includes('zitat') || text.includes('proof')) return 'C';
  return 'E';
}

function pinpointStatus(row) {
  const pinpoint = clean(row.pinpoint);
  const repoPath = clean(row.repo_path);
  if (row.archive_integrity?.sha256) return 'HASHGESICHERTER_AMTLICHER_WEBANKER';
  if (/Rn\.|Randnummer|S\.\s*\d+|Seite\s+\d+|Pressemitteilung|GBA-|Bundestag|Beschluss|Urteil/i.test(pinpoint)) return 'PINPOINT_GEFUEHRT';
  if (/Source-ID-Fundstelle|lokaler Volltextanker|repo_path\/source_id/i.test(pinpoint)) return 'PINPOINT_FORMAL_FINALISIEREN';
  if (/ki_markdown|OCR|split|pages_\d+_to_\d+/i.test(repoPath + ' ' + pinpoint)) return 'LOKALER_SPLIT_GEGEN_ORIGINAL_LESEN';
  if (!pinpoint) return 'PINPOINT_FEHLT_FORMAL';
  return 'PINPOINT_ARBEITSSTAND';
}

function nextAction(row, status) {
  if (status === 'HASHGESICHERTER_AMTLICHER_WEBANKER') {
    return 'Als Anlage mit lokaler Hashpruefung fuehren; im Schriftsatz nur den dokumentierten amtlichen Text und den Verfahrensstand behaupten.';
  }
  if (status === 'PINPOINT_GEFUEHRT') {
    return 'In Anlagenregister uebernehmen und gegen Original-PDF/amtliche HTML-Fassung gegenlesen.';
  }
  if (status === 'LOKALER_SPLIT_GEGEN_ORIGINAL_LESEN') {
    return 'OCR-/Split-Fundstelle mit Original-PDF, Seitenzahl, Randnummer oder Absatz final gegenlesen.';
  }
  if (status === 'PINPOINT_FORMAL_FINALISIEREN') {
    return 'Platzhalter durch exakte Seite, Randnummer, Absatz, Aktenzeichen oder Original-URL ersetzen.';
  }
  if ((row.source_family ?? '').includes('gutachten')) {
    return 'Als Norm-/Methodikanker verwenden und mit Tatsachenquelle aus BfV, GFF, LfV, Programm, Urteil oder Zitat koppeln.';
  }
  return 'Akteur, Zurechnungsebene, Originalanker, Pinpoint und Gegenlese vor Schriftsatzeinbau finalisieren.';
}

function anlagePrefix(kind) {
  return `ANL-${kind}`;
}

function buildEvidenceRow(row, index, hashByPath) {
  const archive = row.archive_integrity ?? hashByPath.get(row.repo_path) ?? null;
  const kind = classifyAnlage(row);
  const status = pinpointStatus({ ...row, archive_integrity: archive });
  return {
    anlage_id: `${anlagePrefix(kind)}-${String(index + 1).padStart(3, '0')}`,
    priority_rank: Number(row.priority_rank ?? index + 1),
    source_id: clean(row.source_id || row.id),
    source_title: clean(row.source_title || row.title || row.family),
    repo_path: clean(row.repo_path || row.local_anchor),
    source_family: clean(row.source_family || row.family || 'unclassified'),
    evidence_grade: clean(row.evidence_grade || 'A/B'),
    primary_anchor: Boolean(row.primary_anchor ?? archive),
    archive_integrity: archive
      ? {
          id: archive.id,
          authority: archive.authority,
          sha256: archive.sha256,
          bytes: archive.bytes,
          checked_at: archive.integrity_checked_at || archive.archived_at,
        }
      : null,
    article21_fields: unique(row.article21_fields || row.art21_fields || []),
    pinpoint: clean(row.pinpoint || row.local_anchor),
    pinpoint_status: status,
    tatsachenvortrag: clean(row.tatsachenvortrag || row.evidence_role),
    beweisangebot: clean(row.beweisangebot || row.court_use || row.local_anchor),
    zurechnung: clean(row.zurechnung || 'Zurechnungsebene aus Quelle, Akteur, Parteifunktion und Statusachse getrennt fuehren.'),
    red_team_limit: clean(row.red_team_antwort || row.no_overclaim || row.court_use),
    court_next_action: nextAction(row, status),
    status: 'ANLAGENREIF_CODIERT',
  };
}

function buildGutachtenRow(row, index) {
  return {
    anlage_id: `ANL-GUT-${String(index + 1).padStart(3, '0')}`,
    priority_rank: 500 + index + 1,
    source_id: `GUTACHTEN-${String(index + 1).padStart(3, '0')}`,
    source_title: row.family,
    repo_path: row.local_anchor,
    source_family: 'gutachten_coverage',
    evidence_grade: row.status === 'NICHT_BEWEISMITTEL' ? 'X' : 'A/B',
    primary_anchor: row.status !== 'NICHT_BEWEISMITTEL',
    archive_integrity: null,
    article21_fields: row.art21_fields || [],
    pinpoint: row.local_anchor,
    pinpoint_status: row.status === 'NICHT_BEWEISMITTEL' ? 'AUS_ANTRAGSBEWEIS_AUSSCHLIESSEN' : 'GUTACHTENFAMILIE_VERDRAHTET',
    tatsachenvortrag: row.evidence_role,
    beweisangebot: row.court_use,
    zurechnung: 'Gutachtenfamilie ist Beweis-/Norm-/Methodikanker; konkrete Parteizurechnung nur ueber gekoppelte Tatsachenquelle.',
    red_team_limit: row.court_use,
    court_next_action: row.remaining,
    status: row.status === 'NICHT_BEWEISMITTEL' ? 'NICHT_BEWEISMITTEL' : 'ANLAGENREIF_CODIERT',
  };
}

const top40 = readJsonl(paths.top40);
const schriftsatz = readJsonl(paths.schriftsatz);
const gutachten = readJsonl(paths.gutachten);
const webhash = readJsonl(paths.webhash);
const hashByPath = makeHashMap(webhash);

const seen = new Set();
const mergedEvidence = [];
for (const row of [...top40, ...schriftsatz]) {
  const key = `${row.source_id || row.id}::${row.verbotsgrund_id || ''}::${row.repo_path || ''}`;
  if (seen.has(key)) continue;
  seen.add(key);
  mergedEvidence.push(row);
}

const evidenceRows = mergedEvidence.slice(0, 180).map((row, index) => buildEvidenceRow(row, index, hashByPath));
const gutachtenRows = gutachten.map((row, index) => buildGutachtenRow(row, index));
const rows = [...evidenceRows, ...gutachtenRows];

writeJsonl(paths.outJsonl, rows);

const stats = {
  total: rows.length,
  hashAnchors: rows.filter((row) => row.pinpoint_status === 'HASHGESICHERTER_AMTLICHER_WEBANKER').length,
  finalPinpoints: rows.filter((row) => row.pinpoint_status === 'PINPOINT_GEFUEHRT').length,
  formalPinpoints: rows.filter((row) => row.pinpoint_status === 'PINPOINT_FORMAL_FINALISIEREN').length,
  splitCounterread: rows.filter((row) => row.pinpoint_status === 'LOKALER_SPLIT_GEGEN_ORIGINAL_LESEN').length,
  gutachtenFamilies: gutachtenRows.length,
  excludedWorkProducts: rows.filter((row) => row.status === 'NICHT_BEWEISMITTEL').length,
};

const md = [
  '# Anlagenregister Art. 21 / AfD-Verbotsverfahren 2026',
  '',
  'Dieses Register ist die harte Beweisbruecke zwischen Repository, Statistik-Tab und Schriftsatzanlage. Es ersetzt keine Antragsschrift, aber es macht jede starke Quelle als Anlage lesbar: Quelle, Pinpoint, Zurechnung, Art.-21-Feld, Gegenlese und naechste formale Handlung.',
  '',
  `Stand: 2026-07-09`,
  '',
  '## Kennzahlen',
  '',
  `- Anlagenzeilen gesamt: ${stats.total}`,
  `- hashgesicherte amtliche/gerichtliche Webanker: ${stats.hashAnchors}`,
  `- bereits gefuehrte Pinpoints: ${stats.finalPinpoints}`,
  `- formal zu finalisierende Pinpoints: ${stats.formalPinpoints}`,
  `- lokale Split-/OCR-Gegenlesen: ${stats.splitCounterread}`,
  `- Gutachtenfamilien: ${stats.gutachtenFamilies}`,
  `- interne Arbeitsprodukte ausgeschlossen: ${stats.excludedWorkProducts}`,
  '',
  '## Prozessregel',
  '',
  'Eine Zeile ist nur dann schriftsatzfertig, wenn die Anlage selbst, der genaue Pinpoint, die Akteurs-/Parteizurechnung, der Verfahrensstatus und die Gegenlese zusammenpassen. Hashanker belegen die Integritaet der lokal gesicherten Webfassung; sie ersetzen keine rechtliche Subsumtion.',
  '',
  '## Top-Anlagen',
  '',
  ...rows.slice(0, 60).flatMap((row) => [
    `### ${row.anlage_id} - ${row.source_title}`,
    '',
    `- Status: ${row.status}`,
    `- Pinpointstatus: ${row.pinpoint_status}`,
    `- Quelle: ${row.repo_path}`,
    `- Source-ID: ${row.source_id}`,
    `- Art. 21: ${row.article21_fields.join(', ') || 'zu pruefen'}`,
    `- Beweisangebot: ${row.beweisangebot}`,
    `- Zurechnung: ${row.zurechnung}`,
    `- Grenze: ${row.red_team_limit}`,
    `- Naechste Handlung: ${row.court_next_action}`,
    '',
  ]),
].join('\n');

writeText(paths.outMd, md);
writeText(
  paths.report,
  [
    '# Anlagenregister-Audit 2026-07-09',
    '',
    JSON.stringify(stats, null, 2),
    '',
    '## Dateien',
    '',
    `- ${paths.outJsonl}`,
    `- ${paths.outMd}`,
    '',
  ].join('\n'),
);

const readmePath = path.join(ROOT, paths.readme);
if (fs.existsSync(readmePath)) {
  const marker = '### Anlagenregister Art. 21 2026-07-09';
  const current = fs.readFileSync(readmePath, 'utf8');
  if (!current.includes(marker)) {
    fs.appendFileSync(
      readmePath,
      [
        '',
        marker,
        '',
        `- Anlagenregister: \`${paths.outMd}\``,
        `- Maschinenlesbare Fassung: \`${paths.outJsonl}\``,
        `- Auditbericht: \`${paths.report}\``,
        '- Zweck: Topbeweise, Gutachtenfamilien, hashgesicherte Webanker, Pinpointstatus, Zurechnung, Gegenlese und formale naechste Anlagehandlung in einer Schriftsatzroute zusammenfuehren.',
        '',
      ].join('\n'),
    );
  }
}

console.log(`Anlagenregister exportiert: ${stats.total} Zeilen, ${stats.hashAnchors} Hashanker, ${stats.formalPinpoints} formale Pinpoints.`);
