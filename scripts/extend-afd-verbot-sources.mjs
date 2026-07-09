import fs from 'node:fs';
import path from 'node:path';
import https from 'node:https';
import crypto from 'node:crypto';

const root = process.cwd();
const today = '2026-07-09';
const rel = (...parts) => path.join(root, ...parts);

function readJsonl(file) {
  const abs = rel(file);
  if (!fs.existsSync(abs)) return [];
  const text = fs.readFileSync(abs, 'utf8').trim();
  if (!text) return [];
  return text.split(/\n/).filter(Boolean).map((line) => JSON.parse(line));
}

function writeJsonl(file, rows) {
  fs.mkdirSync(path.dirname(rel(file)), { recursive: true });
  fs.writeFileSync(rel(file), rows.map((row) => JSON.stringify(row)).join('\n') + '\n');
}

function readHandakte(proofPath) {
  const abs = rel(proofPath);
  if (!fs.existsSync(abs)) return null;
  const text = fs.readFileSync(abs, 'utf8');
  return (text.match(/Handakte\s+(\d+)/) || [])[1] || null;
}

function slug(value) {
  return String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/gi, '_')
    .replace(/^_+|_+$/g, '')
    .toLowerCase()
    .slice(0, 80);
}

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'afd-verbot-repo-source-audit/2026-07-09' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        fetchUrl(new URL(res.headers.location, url).toString()).then(resolve, reject);
        return;
      }
      let data = '';
      res.setEncoding('utf8');
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => resolve({ statusCode: res.statusCode || 0, body: data }));
    }).on('error', reject);
  });
}

function extractTitle(html) {
  return (html.match(/<h1[^>]*>\s*([^<]+)\s*<\/h1>/i) || html.match(/<title[^>]*>\s*([^<]+)\s*<\/title>/i) || [])[1]
    ?.replace(/\s+/g, ' ')
    .trim() || null;
}

function extractQuote(html) {
  const proofIndex = html.indexOf('Beweisstück');
  if (proofIndex >= 0) {
    const chunk = html.slice(proofIndex, proofIndex + 2500);
    const text = chunk
      .replace(/<script[\s\S]*?<\/script>/gi, ' ')
      .replace(/<style[\s\S]*?<\/style>/gi, ' ')
      .replace(/<[^>]+>/g, ' ')
      .replace(/&quot;/g, '"')
      .replace(/&amp;/g, '&')
      .replace(/\s+/g, ' ')
      .trim();
    return text.replace(/^Beweisstück\s*/i, '').slice(0, 700);
  }
  return (html.match(/content="([^"]{20,700})"/i) || [])[1] || null;
}

function collectAnchors(rows) {
  const anchors = [];
  const byQuote = new Map();
  for (const row of rows) {
    const matches = (row.top_local_matches || [])
      .filter((match) => match.path && match.path.startsWith('zitate/') && fs.existsSync(rel(match.path)))
      .slice(0, 12);
    for (const match of matches) {
      const handakte = readHandakte(match.path);
      if (!handakte) continue;
      const anchor = {
        quote_id: row.quote_id,
        actor: row.actor,
        proof_path: match.path,
        proof_line: match.hit?.line || null,
        handakte,
        url: 'https://afd-verbot.de/beweise/' + handakte,
        local_archive: 'sources/web/afd-verbot/afd_verbot_beweis_' + handakte + '_' + slug(row.actor) + '.html',
        retrieval_date: today,
        source_role: 'afd-verbot.de_web_handakte',
        use_rule: 'Web-Handakte als zusaetzliche Route zum lokalen Proof; fuer Antrag Originalkanal/Amts-/Gutachtenanker bevorzugen.'
      };
      anchors.push(anchor);
      if (!byQuote.has(row.quote_id)) byQuote.set(row.quote_id, []);
      byQuote.get(row.quote_id).push(anchor);
    }
  }
  return { anchors, byQuote };
}

async function archiveUniqueAnchors(anchors) {
  const unique = [];
  const seen = new Set();
  for (const anchor of anchors) {
    if (seen.has(anchor.handakte)) continue;
    seen.add(anchor.handakte);
    unique.push(anchor);
  }

  fs.mkdirSync(rel('sources/web/afd-verbot'), { recursive: true });
  for (const anchor of unique) {
    const abs = rel(anchor.local_archive);
    let body = fs.existsSync(abs) ? fs.readFileSync(abs, 'utf8') : null;
    let statusCode = body ? 200 : 0;
    if (!body) {
      try {
        const fetched = await fetchUrl(anchor.url);
        statusCode = fetched.statusCode;
        body = fetched.body;
        if (statusCode >= 200 && statusCode < 300 && body) fs.writeFileSync(abs, body);
      } catch (error) {
        anchor.fetch_error = String(error.message || error);
        body = '';
      }
    }
    anchor.http_status = statusCode;
    anchor.archive_exists = fs.existsSync(abs);
    anchor.sha256 = anchor.archive_exists ? crypto.createHash('sha256').update(fs.readFileSync(abs)).digest('hex') : null;
    anchor.title = body ? extractTitle(body) : null;
    anchor.web_quote_extract = body ? extractQuote(body) : null;
    anchor.has_links_label = body ? /Links anzeigen/.test(body) : false;
    anchor.has_no_evidence_warning = body ? /keine\s+Belege/i.test(body) : false;
  }
  return unique;
}

function updateAuditRows(rows, byQuote, unique) {
  const byHandakte = new Map(unique.map((anchor) => [anchor.handakte, anchor]));
  for (const row of rows) {
    row.afd_verbot_web_anchors = (byQuote.get(row.quote_id) || []).map((anchor) => {
      const full = byHandakte.get(anchor.handakte) || anchor;
      return {
        handakte: anchor.handakte,
        url: anchor.url,
        local_archive: anchor.local_archive,
        proof_path: anchor.proof_path,
        http_status: full.http_status || null,
        sha256: full.sha256 || null,
        has_links_label: !!full.has_links_label,
        has_no_evidence_warning: !!full.has_no_evidence_warning
      };
    });

    if (row.quote_id === 'SZ-002') {
      row.afd_verbot_web_anchors = [{
        handakte: '33922',
        url: 'https://afd-verbot.de/beweise/33922',
        local_archive: 'sources/web/afd-verbot/afd_verbot_beweis_33922_joerg_meuthen.html',
        proof_path: 'zitate/afd-verbot.de-2025-07-28-proof-00693.md',
        http_status: byHandakte.get('33922')?.http_status || 200,
        sha256: byHandakte.get('33922')?.sha256 || null,
        has_links_label: !!byHandakte.get('33922')?.has_links_label,
        has_no_evidence_warning: !!byHandakte.get('33922')?.has_no_evidence_warning
      }, ...row.afd_verbot_web_anchors].filter((anchor, index, all) => all.findIndex((other) => other.handakte === anchor.handakte && other.proof_path === anchor.proof_path) === index);
      row.local_match_status = 'LOKALER_PROOF_UND_AFD_VERBOT_WEBANKER_GEFUNDEN';
      row.anchor_note = 'Lokaler Proof 00693 und afd-verbot.de-Handakte 33922 belegen den praeziseren Kyffhaeuser-Wortlaut; die zweitseitige PDF ist nur verkuerzender Index.';
      row.court_use = 'Nicht die PDF-Kurzform zitieren; tragend ist Proof 00693 / afd-verbot.de Handakte 33922 mit Quelle Correctiv/Kyffhaeuserrede und ggf. Originalvideo/Correctiv-Archiv.';
      row.top_local_matches = [
        { path: 'zitate/afd-verbot.de-2025-07-28-proof-00693.md', score: 280, hit: { line: 13, text: 'Kyffhaeuser-Wortlaut zur Entsorgen-Rhetorik', match: 'proof_handakte' }, manual: true },
        { path: 'sources/web/afd-verbot/afd_verbot_beweis_33922_joerg_meuthen.html', score: 270, hit: { line: 572, text: 'afd-verbot.de Handakte 33922 archiviert', match: 'web_handakte' }, manual: true },
        ...(row.top_local_matches || []).filter((match) => !/schlimmsten_zitate|SCHLIMMSTE_ZITATE_PDF_AUDIT|schlimmste_zitate_pdf_audit/.test(match.path || '')).filter((match, index, all) => all.findIndex((other) => other.path === match.path) === index).slice(0, 8)
      ];
    }
    if (row.quote_id === 'SZ-003') {
      row.local_match_status = 'LOKALER_PROOF_UND_AFD_VERBOT_WEBANKER_WORTLAUT_PRAEZISIERT';
      row.anchor_note = 'PDF-Kurzform wird nicht uebernommen; Proof 00093 und afd-verbot.de-Handakte 81223 belegen den praezisen Buchenwald-Wortlaut.';
      row.court_use = 'Im Schriftsatz nur den praezisen Proof-/Webanker-Wortlaut verwenden, nicht die verkuerzte PDF-Formel.';
    }
    if (row.quote_id === 'SZ-013') {
      row.local_match_status = 'PROOF_UND_AFD_VERBOT_WEBANKER_MIT_QUELLENRISIKO';
      row.anchor_note = 'Proof 00594 und afd-verbot.de-Handakte 42249 sind archiviert, enthalten aber keinen tragenden Originalbeleg; wegen Eigenhinweis zu fehlenden Belegen nicht in harte Antragsspitze aufnehmen.';
      row.court_use = 'Nur als Recherche-/Risikozeile oder nach Beschaffung eines Originalmitschnitts/Veranstaltungsankers verwenden.';
    }
  }
}

function updateSourceInventory(unique) {
  const file = 'daten/source_inventory.jsonl';
  const rows = readJsonl(file);
  const existing = new Set(rows.map((row) => row.source_id));
  for (const anchor of unique) {
    if (!anchor.archive_exists) continue;
    const sourceId = 'SRC-AFD-VERBOT-WEB-HANDAKTE-' + anchor.handakte;
    if (existing.has(sourceId)) continue;
    rows.push({
      source_id: sourceId,
      title: 'afd-verbot.de Web-Handakte ' + anchor.handakte,
      repo_path: anchor.local_archive,
      original_url: anchor.url,
      archive_url: anchor.local_archive,
      source_exists: true,
      source_kind: 'repo_file',
      quellentyp: 'Zitatkorpus / Web-Handakte',
      herausgeber: 'afd-verbot.de / Webarchiv lokal',
      datum: null,
      abrufdatum: today,
      seiten_oder_umfang: null,
      format: 'HTML',
      'primärquelle': false,
      primaerquelle: false,
      beweisstärke: anchor.has_no_evidence_warning ? 'C' : 'B',
      juristischer_nutzwert: anchor.has_no_evidence_warning ? 'route_only' : 'belegroute',
      risiken: anchor.has_no_evidence_warning ? 'Web-Handakte nennt selbst fehlende Belege; Originalquelle zwingend nachziehen.' : 'Web-Handakte ist zusaetzliche Belegroute; Originalkanal/Amts-/Gutachtenanker nach Moeglichkeit bevorzugen.',
      statistik_nutzbar: true,
      nur_recherchehinweis: !!anchor.has_no_evidence_warning,
      themenbereich: 'Zitate und Belege',
      notiz: 'Lokale Webarchivierung zu ' + anchor.url,
      sha256: anchor.sha256
    });
  }
  writeJsonl(file, rows);
}

function writeReport(rows, unique, expanded) {
  const report = [];
  report.push('# afd-verbot.de-Webanker fuer schlimmste Zitate');
  report.push('');
  report.push('- Archivierte eindeutige Handakten: ' + unique.filter((anchor) => anchor.archive_exists).length + ' / ' + unique.length);
  report.push('- Quote-Webanker-Verknuepfungen: ' + expanded.length);
  report.push('- Quellenrisiko mit Eigenhinweis keine Belege: ' + unique.filter((anchor) => anchor.has_no_evidence_warning).length);
  report.push('');
  report.push('## Kritische Korrekturen');
  report.push('- SZ-002 Meuthen: PDF-Kurzform ersetzt durch Proof 00693 und afd-verbot.de Handakte 33922.');
  report.push('- SZ-003 Welsch: PDF-Kurzform ersetzt durch praezisen Buchenwald-Wortlaut aus Proof 00093 / Handakte 81223.');
  report.push('- SZ-013 von Storch: Webanker archiviert, bleibt aber Quellenrisiko wegen Eigenhinweis ohne Belege.');
  report.push('');
  report.push('## Handakten');
  for (const anchor of unique) {
    report.push('- ' + anchor.handakte + ' | ' + anchor.actor + ' | ' + anchor.url + ' | lokal: ' + anchor.local_archive + ' | status: ' + anchor.http_status + ' | risiko: ' + (anchor.has_no_evidence_warning ? 'ja' : 'nein'));
  }
  fs.mkdirSync(rel('reports'), { recursive: true });
  fs.writeFileSync(rel('reports/afd-verbot-webanker-schlimmste-zitate-2026-07-09.md'), report.join('\n') + '\n');
}

const auditFile = 'daten/schlimmste_zitate_pdf_audit_2026.jsonl';
const rows = readJsonl(auditFile);
const { anchors, byQuote } = collectAnchors(rows);
const unique = await archiveUniqueAnchors(anchors);
const byHandakte = new Map(unique.map((anchor) => [anchor.handakte, anchor]));
const expanded = anchors.map((anchor) => ({ ...anchor, ...(byHandakte.get(anchor.handakte) || {}) }));

writeJsonl('daten/afd_verbot_webanker_schlimmste_zitate_2026.jsonl', expanded);
updateAuditRows(rows, byQuote, unique);
writeJsonl(auditFile, rows);
updateSourceInventory(unique);
writeReport(rows, unique, expanded);

console.log('afd-verbot source extension: ' + unique.length + ' unique Handakten, ' + unique.filter((anchor) => anchor.archive_exists).length + ' archived, ' + expanded.length + ' quote-anchor links.');
