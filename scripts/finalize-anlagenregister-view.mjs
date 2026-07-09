import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const rel = (...parts) => path.join(ROOT, ...parts);

const FILES = {
  anlagen: rel('daten/anlagenregister_art21_2026.jsonl'),
  md: rel('dokumente/hauptquellen/ANLAGENREGISTER_ART21_2026.md'),
  report: rel('reports/anlagenregister-audit-2026-07-09.md'),
  index: rel('index.html'),
};

function readJsonl(file) {
  if (!fs.existsSync(file)) return [];
  return fs.readFileSync(file, 'utf8').split(/\r?\n/).filter(Boolean).map((line) => JSON.parse(line));
}

function writeJsonl(file, rows) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, rows.map((row) => JSON.stringify(row)).join('\n') + '\n');
}

function looksLikePdfInternals(anchor) {
  if (!anchor || !/\.pdf$/i.test(anchor.repo_path || '')) return false;
  return /obj\b|endobj|xref|stream|\/(Title|Length|ColorSpace|Filter)|FEFF|Linearized/i.test(anchor.excerpt || '');
}

function sanitizeRows(rows) {
  return rows.map((row) => {
    if (!looksLikePdfInternals(row.local_line_anchor)) return row;
    const next = { ...row };
    delete next.local_line_anchor;
    next.pinpoint_status = 'PINPOINT_FORMAL_FINALISIEREN';
    next.pinpoint = `PDF-Primaerdatei vorhanden; Seiten-/Rn.-Pinpoint durch pdftotext, OCR oder Originalgegenlese finalisieren: ${next.repo_path}`;
    next.court_next_action = 'PDF nicht als Rohzeilenanker verwenden; amtliche Seiten-/Rn.-Fundstelle oder extrahierte Textfassung erzeugen und gegen Original pruefen.';
    next.red_team_limit = `${next.red_team_limit || 'Keine Ueberzeichnung.'} Kein PDF-Rohobjekt als Pinpoint zitieren.`;
    return next;
  });
}

function stats(rows) {
  return {
    total: rows.length,
    hashAnchors: rows.filter((row) => row.pinpoint_status === 'HASHGESICHERTER_AMTLICHER_WEBANKER').length,
    finalPinpoints: rows.filter((row) => row.pinpoint_status === 'PINPOINT_GEFUEHRT').length,
    localLineAnchors: rows.filter((row) => row.pinpoint_status === 'LOKALER_DATEIANKER_GEFUEHRT').length,
    formalPinpoints: rows.filter((row) => row.pinpoint_status === 'PINPOINT_FORMAL_FINALISIEREN').length,
    splitCounterread: rows.filter((row) => row.pinpoint_status === 'LOKALER_SPLIT_GEGEN_ORIGINAL_LESEN').length,
    gutachtenFamilies: rows.filter((row) => row.source_family === 'gutachten_coverage').length,
    excludedWorkProducts: rows.filter((row) => row.status === 'NICHT_BEWEISMITTEL').length,
  };
}

function renderMarkdown(rows, s) {
  return [
    '# Anlagenregister Art. 21 / AfD-Verbotsverfahren 2026',
    '',
    'Dieses Register ist die harte Beweisbruecke zwischen Repository, Statistik-Tab und Schriftsatzanlage. Es ersetzt keine Antragsschrift, aber es macht jede starke Quelle als Anlage lesbar: Quelle, Pinpoint, Zurechnung, Art.-21-Feld, Gegenlese und naechste formale Handlung.',
    '',
    'Stand: 2026-07-09',
    '',
    '## Kennzahlen',
    '',
    `- Anlagenzeilen gesamt: ${s.total}`,
    `- hashgesicherte amtliche/gerichtliche Webanker: ${s.hashAnchors}`,
    `- bereits gefuehrte Pinpoints: ${s.finalPinpoints}`,
    `- lokale Datei-/Zeilenanker: ${s.localLineAnchors}`,
    `- formal zu finalisierende Pinpoints: ${s.formalPinpoints}`,
    `- lokale Split-/OCR-Gegenlesen: ${s.splitCounterread}`,
    `- Gutachtenfamilien: ${s.gutachtenFamilies}`,
    `- interne Arbeitsprodukte ausgeschlossen: ${s.excludedWorkProducts}`,
    '',
    '## Prozessregel',
    '',
    'Eine Zeile ist erst schriftsatzfertig, wenn Anlage, genauer Pinpoint, Akteurs-/Parteizurechnung, Verfahrensstatus und Gegenlese zusammenpassen. Lokale Zeilenanker sind verwertbare Arbeitsfundstellen; fuer den Antrag werden sie in Seiten-/Rn.-Pinpoints oder amtliche Webanker ueberfuehrt. PDF-Rohobjekte werden nicht als Pinpoint akzeptiert.',
    '',
    '## Top-Anlagen',
    '',
    ...rows.slice(0, 80).flatMap((row) => [
      `### ${row.anlage_id} - ${row.source_title}`,
      '',
      `- Status: ${row.status}`,
      `- Pinpointstatus: ${row.pinpoint_status}`,
      `- Quelle: ${row.repo_path}`,
      row.web_primary_anchor ? `- Amtlicher Webanker: ${row.web_primary_anchor} (${row.web_primary_url})` : null,
      `- Source-ID: ${row.source_id}`,
      `- Art. 21: ${(row.article21_fields || []).join(', ') || 'zu pruefen'}`,
      `- Pinpoint: ${row.pinpoint || 'zu pruefen'}`,
      `- Beweisangebot: ${row.beweisangebot || 'zu pruefen'}`,
      `- Zurechnung: ${row.zurechnung || 'zu pruefen'}`,
      `- Grenze: ${row.red_team_limit || 'keine Ueberzeichnung; Status und Zurechnung streng trennen'}`,
      `- Naechste Handlung: ${row.court_next_action || 'Schriftsatz-Pinpoint finalisieren'}`,
      '',
    ].filter(Boolean)),
  ].join('\n');
}

function setCardValue(html, label, value) {
  const pattern = new RegExp(`(<span class="stat-card-value">)\\d+(</span>\\s*<span class="stat-card-label">${label}</span>)`);
  return html.replace(pattern, `$1${value}$2`);
}

function syncIndex(s) {
  if (!fs.existsSync(FILES.index)) return;
  let html = fs.readFileSync(FILES.index, 'utf8');
  html = html.replace('grid-cols-1 md:grid-cols-3 gap-3 mb-4', 'grid-cols-1 md:grid-cols-4 gap-3 mb-4');
  html = setCardValue(html, 'hashgesicherte Amts-/Gerichtsanker', s.hashAnchors);
  html = setCardValue(html, 'formal zu finalisierende Pinpoints', s.formalPinpoints);
  html = setCardValue(html, 'Split-/OCR-Gegenlesen', s.splitCounterread);
  if (!html.includes('lokale Datei-/Zeilenanker')) {
    html = html.replace(
      /(\s*<div class="rounded border border-slate-200 bg-white p-3">\s*<span class="stat-card-value">\d+<\/span>\s*<span class="stat-card-label">Split-\/OCR-Gegenlesen<\/span>\s*<\/div>)/,
      `\n              <div class="rounded border border-slate-200 bg-white p-3">\n                <span class="stat-card-value">${s.localLineAnchors}</span>\n                <span class="stat-card-label">lokale Datei-/Zeilenanker</span>\n              </div>$1`,
    );
  } else {
    html = setCardValue(html, 'lokale Datei-/Zeilenanker', s.localLineAnchors);
  }
  html = html.replace(
    /der Rest ist als \d+ finale Seiten-\/Randnummern, \d+ Originalgegenlesen und Status-\/Gegenargumenttrennung geführt\./,
    `der Rest ist als ${s.formalPinpoints} finale Seiten-/Randnummern, ${s.splitCounterread} Originalgegenlesen, ${s.localLineAnchors} lokale Zeilenanker und Status-/Gegenargumenttrennung gefuehrt.`,
  );
  fs.writeFileSync(FILES.index, html);
}

const rows = sanitizeRows(readJsonl(FILES.anlagen));
writeJsonl(FILES.anlagen, rows);
const s = stats(rows);
fs.writeFileSync(FILES.md, renderMarkdown(rows, s));
fs.writeFileSync(FILES.report, `# Anlagenregister-Audit 2026-07-09\n\n${JSON.stringify(s, null, 2)}\n\n## Dateien\n\n- daten/anlagenregister_art21_2026.jsonl\n- dokumente/hauptquellen/ANLAGENREGISTER_ART21_2026.md\n`);
syncIndex(s);

console.log(`Anlagenregister finalisiert: ${s.hashAnchors} Hashanker, ${s.localLineAnchors} lokale Zeilenanker, ${s.formalPinpoints} formale Pinpoints, ${s.splitCounterread} Split-Gegenlesen.`);
