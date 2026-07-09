import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const rel = (...parts) => path.join(ROOT, ...parts);

const FILES = {
  inventory: rel('daten/source_inventory.jsonl'),
  webhash: rel('daten/official_web_anchor_integrity_2026.jsonl'),
  anlagen: rel('daten/anlagenregister_art21_2026.jsonl'),
  md: rel('dokumente/hauptquellen/ANLAGENREGISTER_ART21_2026.md'),
  report: rel('reports/anlagenregister-audit-2026-07-09.md'),
};

function readJsonl(file) {
  if (!fs.existsSync(file)) return [];
  return fs.readFileSync(file, 'utf8').split(/\r?\n/).filter(Boolean).map((line) => JSON.parse(line));
}

function writeJsonl(file, rows) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, rows.map((row) => JSON.stringify(row)).join('\n') + '\n');
}

function upsert(rows, key, additions) {
  const next = [...rows];
  for (const row of additions) {
    const index = next.findIndex((existing) => existing[key] === row[key]);
    if (index >= 0) next[index] = { ...next[index], ...row };
    else next.push(row);
  }
  return next;
}

function sha256File(file) {
  const data = fs.readFileSync(file);
  return {
    sha256: crypto.createHash('sha256').update(data).digest('hex'),
    bytes: data.length,
  };
}

function clean(value) {
  return String(value ?? '').replace(/\s+/g, ' ').trim();
}

function textCandidate(repoPath) {
  const full = rel(repoPath);
  if (!fs.existsSync(full)) return null;
  if (/\.(md|txt|html)$/i.test(repoPath)) return repoPath;
  const candidates = [
    repoPath.replace(/\.pdf\.pdf$/i, '.txt'),
    repoPath.replace(/\.pdf$/i, '.txt'),
    repoPath.replace(/\.pdf\.pdf$/i, '.md'),
    repoPath.replace(/\.pdf$/i, '.md'),
  ];
  return candidates.find((candidate) => fs.existsSync(rel(candidate))) || null;
}

function firstMeaningfulLine(repoPath) {
  const candidate = textCandidate(repoPath);
  if (!candidate) return null;
  const text = fs.readFileSync(rel(candidate), 'utf8');
  const lines = text.split(/\r?\n/);
  const patterns = [
    /^#\s+/,
    /Gericht|Behörde|Gegenstand|Quelle|Datum|Beschluss|Urteil|Pressemitteilung|Anklage|Einstufung|Verdachtsfall|AfD/i,
  ];
  for (let i = 0; i < Math.min(lines.length, 80); i += 1) {
    const line = clean(lines[i]);
    if (line.length < 8) continue;
    if (patterns.some((pattern) => pattern.test(line))) {
      return { repo_path: candidate, line: i + 1, excerpt: line.slice(0, 220) };
    }
  }
  for (let i = 0; i < Math.min(lines.length, 80); i += 1) {
    const line = clean(lines[i]);
    if (line.length >= 20) return { repo_path: candidate, line: i + 1, excerpt: line.slice(0, 220) };
  }
  return null;
}

const bverwgPath = 'sources/web/bverwg/bverwg_2025-07-22_afd_verdachtsfall_pm54.html';
const bverwgFull = rel(bverwgPath);
const bverwgHash = fs.existsSync(bverwgFull) ? sha256File(bverwgFull) : null;

const bverwgSource = {
  source_id: 'SRC-BVERWG-PM-54-2025-AFD-VERDACHTSFALL-RECHTSKRAEFTIG',
  title: 'Bundesverwaltungsgericht: Keine Zulassung der Revision gegen die OVG-Muenster-Urteile zur AfD als Verdachtsfall',
  repo_path: bverwgPath,
  original_url: 'https://www.bverwg.de/pm/2025/54',
  archive_url: bverwgPath,
  source_exists: Boolean(bverwgHash),
  source_kind: 'web_archive',
  quellentyp: 'Amtliche Primärquelle / Bundesverwaltungsgericht',
  herausgeber: 'Bundesverwaltungsgericht',
  datum: '2025-07-22',
  abrufdatum: '2026-07-09',
  seiten_oder_umfang: 'HTML-Pressemitteilung Nr. 54/2025; lokale Archivkopie',
  format: 'HTML',
  primärquelle: true,
  beweisstärke: 'A',
  juristischer_nutzwert: 'primaer',
  risiken: 'Rechtskräftig ist der Verdachtsfallstatus; keine rechtskräftige gesichert-extremistisch-Feststellung der Bundespartei behaupten.',
  statistik_nutzbar: true,
  nur_recherchehinweis: false,
  themenbereich: 'Statusachse / Bundes-AfD Verdachtsfall / BVerwG',
  notiz: 'Amtlicher Statusanker: BVerwG-PM Nr. 54/2025; Nichtzulassungsbeschwerden gegen OVG-Muenster-Urteile erfolglos; OVG-Urteile rechtskraeftig.',
  verification_status: 'BELEGT_UND_VERDRAHTET',
};

let inventory = readJsonl(FILES.inventory);
inventory = upsert(inventory, 'source_id', [bverwgSource]);
writeJsonl(FILES.inventory, inventory);

let webhash = readJsonl(FILES.webhash);
if (bverwgHash) {
  webhash = upsert(webhash, 'repo_path', [{
    id: 'WEBHASH-BVERWG-PM54-2025',
    repo_path: bverwgPath,
    authority: 'Bundesverwaltungsgericht',
    title: bverwgSource.title,
    sha256: bverwgHash.sha256,
    bytes: bverwgHash.bytes,
    archived_at: '2026-07-09T00:00:00.000Z',
    integrity_checked_at: new Date().toISOString(),
    evidence_use: 'Amtlicher Webanker zur rechtskraeftigen Verdachtsfallachse; streng getrennt von der gesichert-Bund-Hochstufung verwenden.',
    no_overclaim: 'Hash belegt lokale Archivintegritaet, nicht mehr als den dokumentierten amtlichen Text und Status.',
  }]);
  writeJsonl(FILES.webhash, webhash);
}

const hashByPath = new Map(webhash.map((row) => [row.repo_path, row]));
const anlagen = readJsonl(FILES.anlagen).map((row) => {
  const next = { ...row };
  if (/BVERWG-6-B-23-24|bverwg_verdachtsfall/i.test(next.source_id + ' ' + next.source_family)) {
    next.web_primary_anchor = bverwgSource.source_id;
    next.web_primary_repo_path = bverwgPath;
    next.web_primary_url = bverwgSource.original_url;
    if (bverwgHash) {
      next.archive_integrity = {
        id: 'WEBHASH-BVERWG-PM54-2025',
        authority: 'Bundesverwaltungsgericht',
        sha256: bverwgHash.sha256,
        bytes: bverwgHash.bytes,
        checked_at: new Date().toISOString(),
      };
      next.pinpoint_status = 'HASHGESICHERTER_AMTLICHER_WEBANKER';
      next.pinpoint = 'BVerwG Pressemitteilung Nr. 54/2025 vom 22.07.2025; Beschluesse vom 20.05.2025, u.a. 6 B 23.24; OVG-Muenster-Urteile rechtskraeftig.';
      next.court_next_action = 'Als amtliche Anlage mit Hashanker fuehren; nur Verdachtsfall-Rechtskraft behaupten, gesichert-Bund getrennt.';
    }
  }

  if (next.pinpoint_status === 'PINPOINT_FORMAL_FINALISIEREN') {
    const anchor = firstMeaningfulLine(next.repo_path);
    if (anchor) {
      next.local_line_anchor = anchor;
      next.pinpoint = `${anchor.repo_path}:${anchor.line} (${anchor.excerpt})`;
      next.pinpoint_status = /ki_markdown|OCR|split/i.test(anchor.repo_path)
        ? 'LOKALER_SPLIT_GEGEN_ORIGINAL_LESEN'
        : 'LOKALER_DATEIANKER_GEFUEHRT';
      next.court_next_action = /ki_markdown|OCR|split/i.test(anchor.repo_path)
        ? 'Lokalen Zeilenanker gegen Original-PDF/amtliche Fassung gegenlesen und Seiten-/Rn.-Pinpoint eintragen.'
        : 'Lokalen Zeilenanker als vorlaeufige Anlagenfundstelle nutzen; fuer Schriftsatz Seiten-/Rn.-Pinpoint finalisieren.';
    }
  }

  if (!next.archive_integrity && hashByPath.has(next.repo_path)) {
    const hash = hashByPath.get(next.repo_path);
    next.archive_integrity = {
      id: hash.id,
      authority: hash.authority,
      sha256: hash.sha256,
      bytes: hash.bytes,
      checked_at: hash.integrity_checked_at || hash.archived_at,
    };
    next.pinpoint_status = 'HASHGESICHERTER_AMTLICHER_WEBANKER';
  }
  return next;
});

writeJsonl(FILES.anlagen, anlagen);

const stats = {
  total: anlagen.length,
  hashAnchors: anlagen.filter((row) => row.pinpoint_status === 'HASHGESICHERTER_AMTLICHER_WEBANKER').length,
  finalPinpoints: anlagen.filter((row) => row.pinpoint_status === 'PINPOINT_GEFUEHRT').length,
  localLineAnchors: anlagen.filter((row) => row.pinpoint_status === 'LOKALER_DATEIANKER_GEFUEHRT').length,
  formalPinpoints: anlagen.filter((row) => row.pinpoint_status === 'PINPOINT_FORMAL_FINALISIEREN').length,
  splitCounterread: anlagen.filter((row) => row.pinpoint_status === 'LOKALER_SPLIT_GEGEN_ORIGINAL_LESEN').length,
  gutachtenFamilies: anlagen.filter((row) => row.source_family === 'gutachten_coverage').length,
  excludedWorkProducts: anlagen.filter((row) => row.status === 'NICHT_BEWEISMITTEL').length,
};

const md = [
  '# Anlagenregister Art. 21 / AfD-Verbotsverfahren 2026',
  '',
  'Dieses Register ist die harte Beweisbruecke zwischen Repository, Statistik-Tab und Schriftsatzanlage. Es ersetzt keine Antragsschrift, aber es macht jede starke Quelle als Anlage lesbar: Quelle, Pinpoint, Zurechnung, Art.-21-Feld, Gegenlese und naechste formale Handlung.',
  '',
  'Stand: 2026-07-09',
  '',
  '## Kennzahlen',
  '',
  `- Anlagenzeilen gesamt: ${stats.total}`,
  `- hashgesicherte amtliche/gerichtliche Webanker: ${stats.hashAnchors}`,
  `- bereits gefuehrte Pinpoints: ${stats.finalPinpoints}`,
  `- lokale Datei-/Zeilenanker: ${stats.localLineAnchors}`,
  `- formal zu finalisierende Pinpoints: ${stats.formalPinpoints}`,
  `- lokale Split-/OCR-Gegenlesen: ${stats.splitCounterread}`,
  `- Gutachtenfamilien: ${stats.gutachtenFamilies}`,
  `- interne Arbeitsprodukte ausgeschlossen: ${stats.excludedWorkProducts}`,
  '',
  '## Prozessregel',
  '',
  'Eine Zeile ist erst schriftsatzfertig, wenn Anlage, genauer Pinpoint, Akteurs-/Parteizurechnung, Verfahrensstatus und Gegenlese zusammenpassen. Lokale Zeilenanker sind verwertbare Arbeitsfundstellen; fuer den Antrag werden sie in Seiten-/Rn.-Pinpoints oder amtliche Webanker ueberfuehrt.',
  '',
  '## Top-Anlagen',
  '',
  ...anlagen.slice(0, 80).flatMap((row) => [
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

fs.writeFileSync(FILES.md, md);
fs.writeFileSync(FILES.report, `# Anlagenregister-Audit 2026-07-09\n\n${JSON.stringify(stats, null, 2)}\n\n## Dateien\n\n- daten/anlagenregister_art21_2026.jsonl\n- dokumente/hauptquellen/ANLAGENREGISTER_ART21_2026.md\n`);

console.log(`Anlagenregister nachgeschaerft: ${stats.hashAnchors} Hashanker, ${stats.localLineAnchors} lokale Zeilenanker, ${stats.formalPinpoints} formale Pinpoints.`);
