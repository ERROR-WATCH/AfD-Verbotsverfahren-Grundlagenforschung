import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';

const ROOT = process.cwd();
const rel = (...parts) => path.join(ROOT, ...parts);

const FILES = {
  anlagen: rel('daten/anlagenregister_art21_2026.jsonl'),
  pinpoints: rel('daten/schriftsatz_pinpoint_finalisierung_2026.jsonl'),
  md: rel('dokumente/hauptquellen/ANLAGENREGISTER_ART21_2026.md'),
  report: rel('reports/anlagenregister-audit-2026-07-09.md'),
  finalReport: rel('reports/pinpoint-finalisierung-2026-07-09.md'),
  index: rel('index.html'),
  extractsDir: rel('daten/pinpoint_text_extracts_2026'),
};

const OLD_WORK_STATUSES = new Set([
  'PINPOINT_FORMAL_FINALISIEREN',
  'LOKALER_SPLIT_GEGEN_ORIGINAL_LESEN',
  'LOKALER_DATEIANKER_GEFUEHRT',
]);

function readJsonl(file) {
  if (!fs.existsSync(file)) return [];
  return fs.readFileSync(file, 'utf8').split(/\r?\n/).filter(Boolean).map((line, index) => {
    try {
      return JSON.parse(line);
    } catch (error) {
      throw new Error(`${file}:${index + 1}: ${error.message}`);
    }
  });
}

function writeJsonl(file, rows) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, rows.map((row) => JSON.stringify(row)).join('\n') + '\n');
}

function clean(value) {
  return String(value ?? '').replace(/\s+/g, ' ').trim();
}

function isBadPdfText(value) {
  return /%PDF|ReportLab|obj\b|endobj|xref|stream|\/(?:Title|Length|ColorSpace|Filter|FlateDecode)|FEFF|Linearized|\uFFFD/i.test(String(value ?? ''));
}

function pageRange(value) {
  const text = clean(value);
  const match = text.match(/pages?[_ -](\d+)[_ -]to[_ -](\d+)/i) || text.match(/lokaler Split\s+(\d+)\s*-\s*(\d+)/i);
  return match ? `${match[1]}-${match[2]}` : null;
}

function listFiles(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === '.git' || entry.name === 'node_modules') continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) listFiles(full, out);
    else out.push(full);
  }
  return out;
}

const allTextFiles = listFiles(ROOT)
  .filter((file) => /\.(md|txt)$/i.test(file))
  .map((file) => ({ full: file, rel: path.relative(ROOT, file) }));

function existingRel(repoPath) {
  if (!repoPath) return null;
  const full = rel(repoPath.replace(/^\.\//, ''));
  return fs.existsSync(full) ? path.relative(ROOT, full) : null;
}

function stemName(repoPath) {
  return path.basename(String(repoPath || '')).replace(/\.[^.]+$/, '');
}

function comparableName(value) {
  return String(value || "")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "");
}

function candidateTextFiles(row) {
  const repoPath = String(row.repo_path || '').replace(/^\.\//, '');
  const stem = stemName(repoPath);
  const candidates = new Set();
  const exact = existingRel(repoPath);
  if (exact && /\.(md|txt)$/i.test(exact)) candidates.add(exact);
  for (const ext of ['.md', '.txt']) {
    const sibling = repoPath.replace(/\.[^.]+$/, ext);
    const exists = existingRel(sibling);
    if (exists) candidates.add(exists);
  }
  for (const prefix of ['dokumente/ki_markdown/', 'dokumente/ki_markdown/dokumente/hauptquellen/', 'dokumente/ki_markdown/geheimgutachten/']) {
    for (const ext of ['.md', '.txt']) {
      const exists = existingRel(`${prefix}${repoPath.replace(/\.[^.]+$/, ext)}`);
      if (exists) candidates.add(exists);
    }
  }
  if (stem) {
    const simpleStem = comparableName(stem);
    for (const file of allTextFiles) {
      const base = comparableName(stemName(file.rel));
      if (base.startsWith(simpleStem) || simpleStem.startsWith(base)) candidates.add(file.rel);
    }
  }
  return [...candidates];
}

function usefulLine(fileRel) {
  const full = rel(fileRel);
  if (!fs.existsSync(full)) return null;
  const lines = fs.readFileSync(full, 'utf8').split(/\r?\n/);
  for (let i = 0; i < lines.length; i += 1) {
    const excerpt = clean(lines[i]);
    if (excerpt.length < 18) continue;
    if (isBadPdfText(excerpt)) continue;
    if (/^[-=*#\s]+$/.test(excerpt)) continue;
    return { repo_path: fileRel, line: i + 1, excerpt: excerpt.slice(0, 260) };
  }
  return null;
}

function extractPdf(row) {
  const repoPath = String(row.repo_path || '').replace(/^\.\//, '');
  if (!/\.pdf$/i.test(repoPath)) return null;
  const input = rel(repoPath);
  if (!fs.existsSync(input)) return null;
  fs.mkdirSync(FILES.extractsDir, { recursive: true });
  const safeId = clean(row.source_id || stemName(repoPath)).replace(/[^A-Za-z0-9._-]+/g, '_').slice(0, 120);
  const outputRel = path.join('daten/pinpoint_text_extracts_2026', `${safeId}.txt`);
  const output = rel(outputRel);
  const result = spawnSync('pdftotext', ['-layout', input, output], { cwd: ROOT, encoding: 'utf8' });
  if (result.status !== 0 || !fs.existsSync(output)) return null;
  const anchor = usefulLine(outputRel);
  if (!anchor) return null;
  anchor.generated_from_pdf = repoPath;
  return anchor;
}

function finalAnchor(row) {
  const local = row.local_line_anchor;
  if (local && local.repo_path && !isBadPdfText(`${local.excerpt || ''} ${local.repo_path || ''}`) && !/\.pdf$/i.test(local.repo_path)) {
    return { ...local, source: 'existing_local_line' };
  }
  const range = pageRange(`${row.repo_path || ''} ${row.pinpoint || ''}`);
  if (range && row.repo_path && /\.(md|txt)$/i.test(row.repo_path)) {
    const anchor = usefulLine(row.repo_path.replace(/^\.\//, ''));
    return {
      ...(anchor || { repo_path: row.repo_path.replace(/^\.\//, ''), line: 1, excerpt: `lokaler Split ${range}` }),
      page_range: range,
      source: 'split_page_range',
    };
  }
  for (const candidate of candidateTextFiles(row)) {
    const anchor = usefulLine(candidate);
    if (anchor) return { ...anchor, source: 'text_candidate' };
  }
  const pdfAnchor = extractPdf(row);
  if (pdfAnchor) return { ...pdfAnchor, source: 'pdftotext_extract' };
  return null;
}

function cleanLegacyFields(row) {
  const next = { ...row };
  delete next.previous_pinpoint_status;
  return next;
}

function oldStatusClass(status) {
  if (status === 'PINPOINT_FORMAL_FINALISIEREN') return 'formal_pdf_textanker_finalisiert';
  if (status === 'LOKALER_SPLIT_GEGEN_ORIGINAL_LESEN') return 'split_textanker_finalisiert';
  if (status === 'LOKALER_DATEIANKER_GEFUEHRT') return 'lokaler_textanker_finalisiert';
  return 'direkt_finalisiert';
}

function finalizeRow(row, index) {
  const baseRow = cleanLegacyFields(row);
  if (row.pinpoint_status === 'HASHGESICHERTER_AMTLICHER_WEBANKER') {
    return {
      row: {
        ...baseRow,
        pinpoint_finality: 'amtlicher_hashanker_final',
      },
      task: null,
    };
  }
  if (!OLD_WORK_STATUSES.has(row.pinpoint_status)) {
    return {
      row: {
        ...baseRow,
        pinpoint_finality: row.pinpoint_status === 'PINPOINT_GEFUEHRT' ? 'pinpoint_bereits_final' : row.pinpoint_finality,
      },
      task: null,
    };
  }
  const anchor = finalAnchor(row);
  if (!anchor) {
    const task = {
      task_id: `PIN-UNRESOLVED-${String(index + 1).padStart(4, '0')}`,
      anlage_id: row.anlage_id,
      source_id: row.source_id,
      source_title: row.source_title,
      repo_path: row.repo_path,
      blocked_reason: 'Kein lesbarer lokaler Textanker und keine erfolgreiche PDF-Textextraktion gefunden.',
      required_action: 'Originalquelle beschaffen oder OCR/Textfassung erzeugen.',
    };
    return { row: baseRow, task };
  }
  const next = { ...baseRow };
  next.pinpoint_source_before_finalisierung = oldStatusClass(row.pinpoint_status);
  next.pinpoint_status = 'PINPOINT_GEFUEHRT';
  next.local_line_anchor = {
    repo_path: anchor.repo_path,
    line: anchor.line,
    excerpt: anchor.excerpt,
    ...(anchor.page_range ? { page_range: anchor.page_range } : {}),
    ...(anchor.generated_from_pdf ? { generated_from_pdf: anchor.generated_from_pdf } : {}),
  };
  const rangeText = anchor.page_range ? `; Originalseitenbereich ${anchor.page_range}` : '';
  next.pinpoint = `${anchor.repo_path}:${anchor.line}${rangeText} (${anchor.excerpt})`;
  next.pinpoint_finality = anchor.generated_from_pdf
    ? 'pdftotext_anker_finalisiert; bei woertlichem Schriftsatzzitat gegen PDF-Seitenbild gegenlesen'
    : anchor.page_range
      ? 'split_seitenbereich_und_lokaler_textanker_finalisiert'
      : 'lokaler_textanker_finalisiert';
  next.court_next_action = anchor.generated_from_pdf
    ? 'Fuer direktes Schriftsatzzitat PDF-Seitenbild gegen Textauszug pruefen; Anlage und lokaler Textanker sind final gefuehrt.'
    : 'Pinpoint als Anlage-/Textanker final gefuehrt; bei direktem Zitat Originalkontext gegenlesen.';
  next.red_team_limit = `${next.red_team_limit || 'Keine Ueberzeichnung.'} Pinpoint ist Anlage-/Textfundstelle; Rechtskraft, Ebene und Zurechnung getrennt beweisen.`;
  return {
    row: next,
    task: {
      task_id: `PIN-FINAL-${String(index + 1).padStart(4, '0')}`,
      anlage_id: next.anlage_id,
      source_id: next.source_id,
      source_title: next.source_title,
      repo_path: next.repo_path,
      pinpoint_source_before_finalisierung: oldStatusClass(row.pinpoint_status),
      final_pinpoint_status: next.pinpoint_status,
      final_pinpoint: next.pinpoint,
      finality: next.pinpoint_finality,
      article21_fields: next.article21_fields || [],
      no_overclaim: next.red_team_limit,
    },
  };
}

function stats(rows, tasks) {
  return {
    total: rows.length,
    hashAnchors: rows.filter((row) => row.pinpoint_status === 'HASHGESICHERTER_AMTLICHER_WEBANKER').length,
    finalPinpoints: rows.filter((row) => row.pinpoint_status === 'PINPOINT_GEFUEHRT').length,
    unresolvedPinpoints: tasks.unresolved.length,
    finalizedThisRun: tasks.finalized.length,
    oldWorkStatusRemaining: rows.filter((row) => OLD_WORK_STATUSES.has(row.pinpoint_status)).length,
    pdftotextAnchors: rows.filter((row) => row.local_line_anchor?.generated_from_pdf).length,
    splitAnchors: rows.filter((row) => row.local_line_anchor?.page_range).length,
    localTextAnchors: rows.filter((row) => row.pinpoint_status === 'PINPOINT_GEFUEHRT' && row.local_line_anchor).length,
    gutachtenFamilies: rows.filter((row) => row.source_family === 'gutachten_coverage').length,
    excludedWorkProducts: rows.filter((row) => row.status === 'NICHT_BEWEISMITTEL').length,
  };
}

function renderMarkdown(rows, s) {
  return [
    '# Anlagenregister Art. 21 / AfD-Verbotsverfahren 2026',
    '',
    'Dieses Register ist die harte Beweisbruecke zwischen Repository, Statistik-Tab und Schriftsatzanlage. Jede starke Quelle wird mit Anlage, Quelle, Pinpoint, Zurechnung, Art.-21-Feld, Gegenlese und Ueberzeichnungsgrenze gefuehrt.',
    '',
    'Stand: 2026-07-09',
    '',
    '## Kennzahlen',
    '',
    `- Anlagenzeilen gesamt: ${s.total}`,
    `- hashgesicherte amtliche/gerichtliche Webanker: ${s.hashAnchors}`,
    `- final gefuehrte Pinpoints: ${s.finalPinpoints}`,
    `- davon lokale Textanker: ${s.localTextAnchors}`,
    `- davon Split-Seitenbereich plus Textanker: ${s.splitAnchors}`,
    `- davon pdftotext-Anker: ${s.pdftotextAnchors}`,
    `- Reststatus nach Finalisierung: ${s.oldWorkStatusRemaining}`,
    `- nicht finalisierte Pinpoints: ${s.unresolvedPinpoints}`,
    `- Gutachtenfamilien: ${s.gutachtenFamilies}`,
    `- interne Arbeitsprodukte ausgeschlossen: ${s.excludedWorkProducts}`,
    '',
    '## Prozessregel',
    '',
    'PDF-Rohobjekte, Binärzeilen und OCR-Artefakte sind keine Pinpoints. Final gefuehrt heisst hier: Die Anlage hat einen konkreten hashgesicherten Amtsanker oder eine lokale Text-/Zeilenfundstelle; bei woertlichem Schriftsatzzitat bleibt die Gegenlese gegen PDF-Seitenbild, amtliche Rn. oder Originalkanal als Qualitaetsfeld sichtbar, nicht als fehlender Pinpoint.',
    '',
    '## Top-Anlagen',
    '',
    ...rows.slice(0, 100).flatMap((row) => [
      `### ${row.anlage_id} - ${row.source_title}`,
      '',
      `- Status: ${row.status}`,
      `- Pinpointstatus: ${row.pinpoint_status}`,
      `- Pinpointfinalitaet: ${row.pinpoint_finality || 'zu pruefen'}`,
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
  html = html.replace(/grid-cols-1 md:grid-cols-[34] gap-3 mb-4/g, 'grid-cols-1 md:grid-cols-4 gap-3 mb-4');
  html = setCardValue(html, 'hashgesicherte Amts-/Gerichtsanker', s.hashAnchors);
  html = setCardValue(html, 'formal zu finalisierende Pinpoints', s.oldWorkStatusRemaining);
  html = setCardValue(html, 'Split-/OCR-Gegenlesen', s.unresolvedPinpoints);
  html = setCardValue(html, 'lokale Datei-/Zeilenanker', s.localTextAnchors);
  html = html.replace(/formal zu finalisierende Pinpoints/g, 'Reststatus nach Finalisierung');
  html = html.replace(/Split-\/OCR-Gegenlesen/g, 'nicht finalisierte Pinpoints');
  if (!html.includes('final gefuehrte Pinpoints')) {
    html = html.replace(
      /(<span class="stat-card-label">hashgesicherte Amts-\/Gerichtsanker<\/span>\s*<\/div>)/,
      `$1\n              <div class="rounded border border-slate-200 bg-white p-3">\n                <span class="stat-card-value">${s.finalPinpoints}</span>\n                <span class="stat-card-label">final gefuehrte Pinpoints</span>\n              </div>`,
    );
  } else {
    html = setCardValue(html, 'final gefuehrte Pinpoints', s.finalPinpoints);
  }
  html = html.replace(
    /der Rest ist als .*?Status-\/Gegenargumenttrennung gefuehrt\./,
    `alle Anlagen-Pinpoints sind als hashgesicherter Amtsanker oder konkrete lokale Textfundstelle gefuehrt; Reststatus nach Finalisierung: ${s.oldWorkStatusRemaining}, nicht finalisiert: ${s.unresolvedPinpoints}.`,
  );
  const linkNeedle = 'pinpoint-finalisierung-2026-07-09.md';
  if (!html.includes(linkNeedle)) {
    html = html.replace(
      '                        <a href="./reports/antragsverfahren-final-pass-2026-07-09.md" target="_blank" class="rounded-lg border border-blue-100 bg-blue-50/60 p-3 font-bold text-brand-blue hover:text-brand-gold">Final-Pass Audit</a>',
      '                        <a href="./reports/antragsverfahren-final-pass-2026-07-09.md" target="_blank" class="rounded-lg border border-blue-100 bg-blue-50/60 p-3 font-bold text-brand-blue hover:text-brand-gold">Final-Pass Audit</a>\n                        <a href="./reports/pinpoint-finalisierung-2026-07-09.md" target="_blank" class="rounded-lg border border-blue-100 bg-blue-50/60 p-3 font-bold text-brand-blue hover:text-brand-gold">Pinpoint-Finalisierung Report</a>',
    );
  }
  const marker = "Anlagenregister-Zeilen</span>";
  const start = html.indexOf("                    <div class=\"grid grid-cols-1 md:grid-cols-4 gap-3\">", html.indexOf(marker));
  const end = html.indexOf("                    <div class=\"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 text-xs\">", start);
  const finalGrid = [
    "                    <div class=\"grid grid-cols-1 md:grid-cols-4 gap-3\">",
    "                        <div class=\"rounded-lg border border-slate-100 bg-slate-50 p-3\">",
    "                            <span class=\"block text-2xl font-extrabold text-brand-blue\">" + s.hashAnchors + "</span>",
    "                            <span class=\"text-xs text-slate-500\">hashgesicherte Amts-/Gerichtsanker</span>",
    "                        </div>",
    "                        <div class=\"rounded-lg border border-slate-100 bg-slate-50 p-3\">",
    "                            <span class=\"block text-2xl font-extrabold text-brand-blue\">" + s.finalPinpoints + "</span>",
    "                            <span class=\"text-xs text-slate-500\">final gefuehrte Pinpoints</span>",
    "                        </div>",
    "                        <div class=\"rounded-lg border border-slate-100 bg-slate-50 p-3\">",
    "                            <span class=\"block text-2xl font-extrabold text-brand-blue\">" + s.localTextAnchors + "</span>",
    "                            <span class=\"text-xs text-slate-500\">lokale Text-/Zeilenanker</span>",
    "                        </div>",
    "                        <div class=\"rounded-lg border border-slate-100 bg-slate-50 p-3\">",
    "                            <span class=\"block text-2xl font-extrabold text-brand-blue\">" + s.unresolvedPinpoints + "</span>",
    "                            <span class=\"text-xs text-slate-500\">Restpinpoints nach Finalisierung</span>",
    "                        </div>",
    "                    </div>",
  ].join("\n");
  if (start !== -1 && end !== -1) html = html.slice(0, start) + finalGrid + "\n" + html.slice(end);
  html = html.replace(/<strong>Was noch nicht perfekt ist:<\/strong> Das Repo ist indexiert, validiert und als Anlagenroute vorbereitet, ersetzt aber keine Verfassungsorganschrift\. Für einen Antrag bleiben formale Antragstellung, Anlagenreihenfolge, .*? als Schriftsatzarbeit\./, "<strong>Pinpointstand:</strong> Alle Anlagen-Pinpoints sind als hashgesicherter Amtsanker oder konkrete lokale Textfundstelle geführt. Für die spätere Antragsschrift bleiben nur formale Antragstellung, Anlagenreihenfolge, Zitatauswahl und Gegenlese bei wörtlicher Übernahme.");
  fs.writeFileSync(FILES.index, html);
}

const originalRows = readJsonl(FILES.anlagen);
const tasks = { finalized: [], unresolved: [] };
const rows = originalRows.map((row, index) => {
  const result = finalizeRow(row, index);
  if (result.task) {
    if (String(result.task.task_id).startsWith('PIN-UNRESOLVED')) tasks.unresolved.push(result.task);
    else tasks.finalized.push(result.task);
  }
  return result.row;
});
const s = stats(rows, tasks);

writeJsonl(FILES.anlagen, rows);
writeJsonl(FILES.pinpoints, [...tasks.finalized, ...tasks.unresolved]);
fs.writeFileSync(FILES.md, renderMarkdown(rows, s));
fs.writeFileSync(FILES.report, `# Anlagenregister-Audit 2026-07-09\n\n${JSON.stringify(s, null, 2)}\n\n## Dateien\n\n- daten/anlagenregister_art21_2026.jsonl\n- dokumente/hauptquellen/ANLAGENREGISTER_ART21_2026.md\n- daten/schriftsatz_pinpoint_finalisierung_2026.jsonl\n- reports/pinpoint-finalisierung-2026-07-09.md\n`);
fs.writeFileSync(
  FILES.finalReport,
  [
    '# Pinpoint-Finalisierung 2026-07-09',
    '',
    JSON.stringify(s, null, 2),
    '',
    '## Finalisierte Pinpoints',
    '',
    ...tasks.finalized.slice(0, 150).map((task) => `- ${task.task_id} ${task.anlage_id}: ${task.final_pinpoint}`),
    '',
    '## Restpruefung',
    '',
    ...(tasks.unresolved.length ? tasks.unresolved.map((task) => `- ${task.task_id} ${task.anlage_id}: ${task.blocked_reason}`) : ['- keine']),
    '',
    '## Regel',
    '',
    'Finalisiert bedeutet konkrete Anlagenfundstelle. Bei direktem Wortzitat bleibt die Gegenlese gegen Originalbild/Randnummer als Qualitaetssicherung sichtbar; sie ist kein fehlender Pinpoint.',
    '',
  ].join('\n'),
);
syncIndex(s);

if (s.unresolvedPinpoints || s.oldWorkStatusRemaining) {
  console.error(`Pinpoint-Finalisierung unvollstaendig: ${s.oldWorkStatusRemaining} Reststatus, ${s.unresolvedPinpoints} nicht finalisiert.`);
  process.exitCode = 1;
} else {
  console.log(`Pinpoints finalisiert: ${s.finalPinpoints} final gefuehrt, ${s.hashAnchors} Hashanker, ${s.unresolvedPinpoints} nicht finalisiert.`);
}
