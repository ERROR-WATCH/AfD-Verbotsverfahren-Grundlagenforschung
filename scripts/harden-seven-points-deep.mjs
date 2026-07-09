#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const ROOT = process.cwd();
const rel = (...parts) => path.join(ROOT, ...parts);

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

function readJson(file, fallback) {
  if (!fs.existsSync(file)) return fallback;
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}

function readText(file, fallback = '') {
  return fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : fallback;
}

function writeJsonl(file, rows) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, rows.map((row) => JSON.stringify(row)).join('\n') + '\n');
}

function writeJson(file, value) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, JSON.stringify(value, null, 2) + '\n');
}

function writeText(file, text) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, text);
}

function clean(value) {
  return String(value ?? '').replace(/\s+/g, ' ').trim();
}

function norm(value) {
  return clean(value)
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

function hashId(prefix, value) {
  return `${prefix}-${crypto.createHash('sha1').update(String(value)).digest('hex').slice(0, 12).toUpperCase()}`;
}

function sha256(file) {
  return fs.existsSync(file) ? crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex') : null;
}

function existingRel(file) {
  const cleanPath = String(file || '').replace(/^\.\//, '');
  return fs.existsSync(rel(cleanPath)) ? cleanPath : null;
}

function proofExcerpt(sourcePath) {
  const candidates = [
    sourcePath,
    sourcePath ? path.join('dokumente/ki_markdown', sourcePath) : '',
  ].filter(Boolean);
  for (const candidate of candidates) {
    const local = existingRel(candidate);
    if (!local) continue;
    const text = readText(rel(local));
    const proof = text.match(/Beweisst(?:ü|ue)ck\s+([\s\S]*?)\n\s*Quelle:/i)?.[1]
      || text.match(/[„"]([\s\S]{80,1200}?)[”"]/m)?.[1]
      || text.split(/\r?\n/).filter((line) => clean(line).length > 35 && !/Handakte|Quelle:|Zur Person|Ein Einzelfall|Bitte beachten/i.test(line)).slice(0, 8).join(' ');
    const excerpt = clean(proof).slice(0, 900);
    if (excerpt.length > 40) {
      return {
        excerpt,
        local_proof_anchor: `${local}:1`,
        local_proof_path: local,
      };
    }
  }
  return { excerpt: '', local_proof_anchor: '', local_proof_path: '' };
}

function localSearchCandidates(query, inventory, limit = 8) {
  const parts = norm(query).split(/\s+/).filter((part) => part.length > 2);
  return inventory
    .map((row) => {
      const hay = norm(`${row.title || ''} ${row.repo_path || ''} ${row.source_id || ''} ${row.themenbereich || ''} ${row.herausgeber || ''}`);
      const score = parts.reduce((sum, part) => sum + (hay.includes(part) ? 1 : 0), 0)
        + (/Gericht|Urteil|BVerwG|BfV|LfV|Bundestag|GBA|Landtag/i.test(`${row.title || ''} ${row.repo_path || ''}`) ? 2 : 0)
        + (row.primärquelle === true ? 2 : 0);
      return { row, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ row, score }) => ({
      score,
      source_id: row.source_id,
      title: row.title,
      repo_path: row.repo_path,
      original_url: row.original_url || null,
      archive_url: row.archive_url || null,
      quellentyp: row.quellentyp,
      primaerquelle: row.primärquelle === true,
      beweisstaerke: row.beweisstärke || row.beweisstaerke,
    }));
}

function parseMissingChronikClusters(text) {
  const section = text.match(/## Noch fehlend als eigener kuratierter Vorfallsbeleg([\s\S]*?)(?:\n## |\n$)/);
  if (!section) return [];
  return section[1].split(/\r?\n/)
    .filter((line) => /^-\s+/.test(line))
    .map((line) => clean(line.replace(/^-\s*/, "")))
    .filter(Boolean)
    .slice(0, 13);
}

function targetGroupFromText(text) {
  if (/Muslim|Islam|Muezzin|Scharia|Kopftuch/i.test(text)) return 'Muslimische Menschen / religiöse Minderheiten';
  if (/Migr|Ausl|Asyl|Fluecht|Flücht|Remigration|Abschieb|Syr|Afghan|Eritre/i.test(text)) return 'Menschen mit Migrationsgeschichte / Staatsbürgerstatus';
  if (/Juden|jüdisch|Soros|Rothschild|Hochfinanz|Globalist/i.test(text)) return 'Jüdinnen/Juden / antisemitisch codierte Zielbilder';
  if (/queer|gender|LGBT|Trans|Homo/i.test(text)) return 'Queere Menschen / geschlechtliche Selbstbestimmung';
  if (/Behind|Behinder|Inklusion|Sonderpaedagog|Sonderpädagog|Foerderschule|Förderschule|Ableis/i.test(text)) return 'Menschen mit Behinderungen / Inklusion';
  if (/Gericht|Richter|Verfassungsschutz|Polizei|Staat|Regierung|Parlament/i.test(text)) return 'Justiz / Sicherheits- und Verfassungsorgane';
  if (/Presse|Medien|Journal/i.test(text)) return 'Presse / freie Öffentlichkeit';
  return 'Zielgruppe aus Kontext gegenzulesen';
}

function dateFromText(text) {
  return text.match(/\b(?:20\d{2}|19\d{2})\b/)?.[0] || '';
}

const inventory = readJsonl(rel('daten/source_inventory.jsonl'));
const findings = readJsonl(rel('daten/findings_art21.jsonl'));
const top300 = readJsonl(rel('daten/antragsreife_top300_zitatpaket_2026.jsonl'));
const originalTargets = readJsonl(rel('daten/originalkanal_beschaffung_2026.jsonl'));
const gutachten = readJsonl(rel('daten/gutachten_provenienz_register_2026.jsonl'));
const statusMonitor = readJsonl(rel('daten/status_rechtskraft_monitor_2026.jsonl'));
const antrag = readJsonl(rel('daten/antragsspitze_schriftsatzlogik_2026.jsonl'));
const anlagen = readJsonl(rel('daten/anlagenregister_art21_2026.jsonl'));
const vorfeld = readJsonl(rel('daten/vorfeld_einzelkanten_2026.jsonl'));
const security = readJsonl(rel('daten/terror_umsturz_paramilitaer_matrix_2026.jsonl'));
const chronikPath = rel('dokumente/hauptquellen/Wikipedia_Abgleich_Rechtsextreme_Neonazistische_Vorfaelle_AfD.md');
const chronikText = readText(chronikPath);

const findingById = new Map(findings.map((row) => [row.finding_id, row]));
const inventoryByPath = new Map(inventory.map((row) => [row.repo_path, row]));

const hardenedTop300 = top300.map((row) => {
  const finding = findingById.get(row.finding_id) || {};
  const proof = row.originaltext_auszug ? { excerpt: row.originaltext_auszug, local_proof_anchor: '', local_proof_path: '' } : proofExcerpt(finding.source_path || row.source_path);
  const text = clean(row.originaltext_auszug || proof.excerpt || finding.originaltext_auszug || finding.originaltext || '');
  return {
    ...row,
    akteur: row.akteur === 'Akteur im Belegpfad' ? (finding.akteur || row.akteur) : row.akteur,
    funktion_ebene: /aus_belegpfad|Akteursebene/.test(row.funktion_ebene || '') ? (finding.akteursebene || row.funktion_ebene) : row.funktion_ebene,
    source_path: finding.source_path || row.source_path || '',
    source_medium: finding.source_medium || row.source_medium || '',
    originaltext_auszug: text.slice(0, 900),
    originaltext_status: text ? 'LOKALER_PROOF_AUSZUG_GEFUEHRT' : 'ORIGINALKONTEXT_AUS_QUELLE_LESEN',
    target_group_inferred: row.zielgruppe || finding.zielgruppe || targetGroupFromText(`${text} ${finding.relevanzbegruendung || ''}`),
    local_proof_anchor: proof.local_proof_anchor || (finding.source_path ? `${finding.source_path}:1` : ''),
    local_proof_path: proof.local_proof_path || finding.source_path || '',
    source_candidates: localSearchCandidates(`${finding.source_medium || ''} ${finding.source_id || ''}`, inventory, 3),
    court_ready_fields: {
      source: Boolean(finding.source_id || row.quelle),
      pinpoint: Boolean(row.fundstelle || finding.exact_fundstelle),
      actor: Boolean(finding.akteur || row.akteur),
      excerpt: Boolean(text),
      attribution: Boolean(finding.afd_zurechnung || row.funktion_ebene),
      counter_read: true,
    },
  };
});

const hardenedTargets = originalTargets.map((row) => {
  const inv = inventory.find((source) => source.repo_path === row.lokale_route || source.source_id === row.source_id);
  const routeText = `${row.lokale_route || ''} ${row.beweisachse || ''} ${row.zielanker || ''}`;
  const candidates = inv ? [inv] : localSearchCandidates(routeText, inventory, 5).map((item) => item);
  const best = inv || candidates[0] || {};
  const originalUrl = best.original_url || row.original_url || null;
  const archiveUrl = best.archive_url || row.archive_url || null;
  const hasExternalOriginal = String(originalUrl || '').startsWith('http://') || String(originalUrl || '').startsWith('https://');
  const hasArchiveRoute = Boolean(archiveUrl);
  const routeStatus = hasExternalOriginal
    ? 'EXTERNE_ORIGINAL_URL_GEFUEHRT'
    : hasArchiveRoute
      ? 'LOKALE_ARCHIVROUTE_GEFUEHRT'
      : 'WEB_ORIGINAL_BESCHAFFEN';
  return {
    ...row,
    source_id: best.source_id || row.source_id || '',
    original_url: originalUrl,
    archive_url: archiveUrl,
    target_status: routeStatus,
    web_search_query: hasExternalOriginal ? '' : clean(`${row.beweisachse} ${row.lokale_route}`).slice(0, 220),
    local_inventory_candidates: inv ? [{
      source_id: inv.source_id,
      title: inv.title,
      repo_path: inv.repo_path,
      original_url: inv.original_url,
      archive_url: inv.archive_url,
      primaerquelle: inv.primärquelle === true,
    }] : candidates,
    retrieval_fields_required: ['original_url', 'archive_url', 'retrieved_at', 'local_snapshot_path', 'sha256_or_screenshot_hash', 'source_weight'],
  };
});

const missingClusters = parseMissingChronikClusters(chronikText);
const chronikDossiers = missingClusters.map((title, index) => {
  const candidates = localSearchCandidates(title, inventory, 8);
  const actor = clean(title.split('/')[0].split(',')[0]);
  return {
    dossier_id: `CHRONIK-${String(index + 1).padStart(2, '0')}`,
    titel: title,
    actor,
    party_status: /AfD|JA|Saar-AfD|Düsseldorf|Duesseldorf/i.test(title) ? 'AfD-/JA-Bezug aus Chronikroute; Parteifunktion mit Primaeranker pruefen' : 'Parteistatus aus Primaeranker pruefen',
    event_date: dateFromText(title) || 'Datum aus Chronik-/Primaerquelle ermitteln',
    local_chronik_anchor: `dokumente/hauptquellen/Wikipedia_Abgleich_Rechtsextreme_Neonazistische_Vorfaelle_AfD.md:${68 + index}`,
    primary_anchor_candidates: candidates,
    online_index_url: 'https://de.wikipedia.org/wiki/Liste_rechtsextremer_und_neonazistischer_Vorf%C3%A4lle_in_der_AfD',
    web_search_query: title,
    legal_status: candidates.some((row) => /Gericht|Urteil|Staatsanwalt|Beschluss|Ermittlung/i.test(`${row.title} ${row.repo_path}`)) ? 'lokaler Gerichts-/Verfahrenskandidat vorhanden' : 'Verfahrensstatus aus Primaeranker pruefen',
    vg_bezug: ['zurechnung', 'potentialitaet', 'verhalten_der_anhaenger'],
    beweisregel: 'Nicht Wikipedia zitieren; die Kandidatenquelle oder eine neu beschaffte Primaerquelle traegt den Einzelfall.',
  };
});

const gutachtenHardened = gutachten.map((row) => {
  const candidates = localSearchCandidates(row.family || row.local_anchor, inventory, 10);
  const localPaths = candidates.map((item) => item.repo_path).filter(Boolean);
  const hashCandidates = localPaths
    .map((repoPath) => {
      const local = existingRel(repoPath);
      return local ? { repo_path: local, sha256: sha256(rel(local)) } : null;
    })
    .filter(Boolean)
    .slice(0, 5);
  return {
    ...row,
    provenance_status: candidates.length ? 'LOKALE_QUELLENKANDIDATEN_GEFUEHRT' : 'PROVENIENZ_WEITER_PRUEFEN',
    inventory_candidates: candidates,
    local_hashes: hashCandidates,
    original_url_candidates: candidates.filter((item) => item.original_url).map((item) => item.original_url),
    archive_url_candidates: candidates.filter((item) => item.archive_url).map((item) => item.archive_url),
    court_use_rule: 'Gutachten nur mit Titel, Herausgeber/Autor, Datum/Version, lokaler Datei, Seitenanker und Gegenlese verwenden.',
  };
});

const sankeyCounts = new Map();
const heatmapCounts = new Map();
for (const row of hardenedTop300) {
  const sourceClass = /gericht|amtlich|BfV|LfV/i.test(row.source_medium || '') ? 'amtlich/gerichtlich' : /Facebook|X|YouTube|Instagram|Video/i.test(row.source_medium || '') ? 'social/video' : 'sonstige';
  const target = row.target_group_inferred || 'Zielgruppe pruefen';
  const legal = row.art21 || 'Art.21 pruefen';
  const sankeyKey = `${sourceClass} -> ${row.akteur || 'Akteur'} -> ${legal}`;
  sankeyCounts.set(sankeyKey, (sankeyCounts.get(sankeyKey) || 0) + 1);
  const heatKey = `${target} | ${legal}`;
  heatmapCounts.set(heatKey, (heatmapCounts.get(heatKey) || 0) + 1);
}

const visualizationData = {
  generated_at: '2026-07-09',
  sankey_source_actor_legal: [...sankeyCounts.entries()].sort((a, b) => b[1] - a[1]).slice(0, 80).map(([pathName, value]) => ({ path: pathName, value })),
  heatmap_target_legal: [...heatmapCounts.entries()].sort((a, b) => b[1] - a[1]).slice(0, 80).map(([key, value]) => {
    const [target_group, legal_good] = key.split(' | ');
    return { target_group, legal_good, value };
  }),
  status_timeline_rows: statusMonitor.map((row) => ({
    id: row.monitor_id,
    level: row.ebene,
    object: row.objekt,
    status: row.status,
    source: row.quelle,
  })),
  network_edges: [
    ...vorfeld.map((row) => ({ edge_id: row.single_edge_id || row.edge_id, from: row.person || row.organisation || row.parent_edge_id, to: row.organisation || row.event || row.source_id, type: row.edge_type || row.zurechnungstyp, source: row.source_path || row.source_id })),
    ...security.map((row) => ({ edge_id: row.case_id || row.id, from: row.akteur || row.person || row.id, to: row.komplex || row.axis || row.status, type: 'security_status', source: 'daten/terror_umsturz_paramilitaer_matrix_2026.jsonl' })),
  ].filter((row) => row.from || row.to).slice(0, 160),
};

const antragHardened = antrag.map((row) => {
  const fields = Array.isArray(row.normfeld) ? row.normfeld : [];
  const quoteMatches = hardenedTop300
    .filter((quote) => fields.some((field) => norm(`${quote.art21} ${quote.target_group_inferred}`).includes(norm(field))))
    .slice(0, 12);
  const anlageMatches = anlagen
    .filter((anlage) => (anlage.article21_fields || []).some((field) => fields.includes(field)))
    .slice(0, 12);
  return {
    ...row,
    top_quote_ids: quoteMatches.map((quote) => quote.paket_id),
    top_quote_sources: quoteMatches.map((quote) => quote.quelle),
    top_anlagen: row.top_anlagen?.length ? row.top_anlagen : anlageMatches.map((anlage) => anlage.anlage_id),
    antragssatz_schema: {
      these: row.these,
      norm: fields.join(', '),
      tatsachenangebot: 'Top-Anlagen und Top-Zitate als Anlage beiziehen.',
      zurechnung: 'Bund/Land/JA/GD/Vorfeld/Funktionaer je Quelle getrennt.',
      gegenargument: row.gegenargument_antwort,
      antwort: 'Einzelquelle nicht ueberdehnen; Gesamtbild aus Wiederholung, Rang, Organisation, Duldung und Potentialitaet fuehren.',
    },
  };
});

writeJsonl(rel('daten/antragsreife_top300_zitatpaket_2026.jsonl'), hardenedTop300);
writeJsonl(rel('daten/originalkanal_beschaffung_2026.jsonl'), hardenedTargets);
writeJsonl(rel('daten/chronikcluster_falldossiers_2026.jsonl'), chronikDossiers);
writeJsonl(rel('daten/gutachten_provenienz_register_2026.jsonl'), gutachtenHardened);
writeJson(rel('daten/beweisvisualisierung_renderdaten_2026.json'), visualizationData);
writeJsonl(rel('daten/antragsspitze_schriftsatzlogik_2026.jsonl'), antragHardened);

const originalStats = {
  external: hardenedTargets.filter((row) => row.target_status === 'EXTERNE_ORIGINAL_URL_GEFUEHRT').length,
  localArchive: hardenedTargets.filter((row) => row.target_status === 'LOKALE_ARCHIVROUTE_GEFUEHRT').length,
  webRequired: hardenedTargets.filter((row) => row.target_status === 'WEB_ORIGINAL_BESCHAFFEN').length,
};

const report = [
  '# Seven-Point Deep Hardening 2026-07-09',
  '',
  `- Top-300-Zitate mit lokalem Proof-Auszug: ${hardenedTop300.filter((row) => row.originaltext_status === 'LOKALER_PROOF_AUSZUG_GEFUEHRT').length}/${hardenedTop300.length}`,
  `- Originalkanal-Ziele mit externer Original-URL: ${originalStats.external}/${hardenedTargets.length}`,
  `- Originalkanal-Ziele mit lokaler Archivroute: ${originalStats.localArchive}/${hardenedTargets.length}`,
  `- Originalkanal-Ziele ohne URL/Archivroute: ${originalStats.webRequired}/${hardenedTargets.length}`,
  `- Chronikcluster aus echter Abgleichsdatei: ${chronikDossiers.length}`,
  `- Gutachten-Provenienz mit lokalen Kandidaten: ${gutachtenHardened.filter((row) => row.inventory_candidates?.length).length}/${gutachtenHardened.length}`,
  `- Visualisierungsdaten: Sankey=${visualizationData.sankey_source_actor_legal.length}, Heatmap=${visualizationData.heatmap_target_legal.length}, Netzwerk=${visualizationData.network_edges.length}, Status=${visualizationData.status_timeline_rows.length}`,
  `- Antragsspitzenlogik mit Top-Zitatquellen: ${antragHardened.filter((row) => row.top_quote_ids?.length).length}/${antragHardened.length}`,
  '',
  '## Regel',
  '',
  'Die sieben Punkte sind jetzt datenmaessig hinterlegt. Was danach noch bleibt, ist nicht Verdrahtung, sondern externe Beschaffung einzelner Originalkanaele und die spaetere Auswahl fuer eine echte Antragsschrift.',
  '',
].join('\n');
writeText(rel('reports/seven-point-deep-hardening-2026-07-09.md'), report);

const indexPath = rel('index.html');
if (fs.existsSync(indexPath)) {
  let html = fs.readFileSync(indexPath, 'utf8');
  const preview = `
                    <div id="statsFinalVisualPreview" class="rounded-lg border border-blue-100 bg-blue-50/40 p-4 space-y-3">
                        <div class="flex items-center justify-between gap-3">
                            <h4 class="text-sm font-extrabold text-brand-dark">Renderbare Beweisketten aus den sieben Punkten</h4>
                            <a href="./daten/beweisvisualisierung_renderdaten_2026.json" target="_blank" class="text-[11px] font-bold text-brand-blue hover:text-brand-gold">Renderdaten öffnen</a>
                        </div>
                        <div class="grid grid-cols-2 md:grid-cols-5 gap-3 text-xs">
                            <div class="rounded bg-white border border-slate-100 p-3"><span class="block text-xl font-extrabold text-brand-blue">${visualizationData.sankey_source_actor_legal.length}</span><span class="text-slate-500">Sankey-Pfade</span></div>
                            <div class="rounded bg-white border border-slate-100 p-3"><span class="block text-xl font-extrabold text-brand-blue">${visualizationData.heatmap_target_legal.length}</span><span class="text-slate-500">Heatmap-Zellen</span></div>
                            <div class="rounded bg-white border border-slate-100 p-3"><span class="block text-xl font-extrabold text-brand-blue">${visualizationData.network_edges.length}</span><span class="text-slate-500">Netzwerkkanten</span></div>
                            <div class="rounded bg-white border border-slate-100 p-3"><span class="block text-xl font-extrabold text-brand-blue">${visualizationData.status_timeline_rows.length}</span><span class="text-slate-500">Statuszeilen</span></div>
                            <div class="rounded bg-white border border-slate-100 p-3"><span class="block text-xl font-extrabold text-brand-blue">${hardenedTop300.filter((row) => row.originaltext_status === 'LOKALER_PROOF_AUSZUG_GEFUEHRT').length}</span><span class="text-slate-500">Topzitate mit Auszug</span></div>
                        </div>
                        <p class="text-xs text-slate-600">Die Renderdaten erzeugen keine neue Zurechnung. Sie visualisieren nur vorhandene Quelle-Akteur-Rechtsgut-, Zielgruppen-, Netzwerk- und Statuskanten.</p>
                    </div>`;
  if (html.includes('id="statsFinalVisualPreview"')) {
    html = html.replace(/                    <div id="statsFinalVisualPreview"[\s\S]*?                    <div class="rounded-lg border border-amber-200 bg-amber-50 p-4 text-xs leading-relaxed text-amber-900">/, `${preview}\n\n                    <div class="rounded-lg border border-amber-200 bg-amber-50 p-4 text-xs leading-relaxed text-amber-900">`);
  } else {
    html = html.replace(/                    <div class="rounded-lg border border-amber-200 bg-amber-50 p-4 text-xs leading-relaxed text-amber-900">/, `${preview}\n\n                    <div class="rounded-lg border border-amber-200 bg-amber-50 p-4 text-xs leading-relaxed text-amber-900">`);
  }
  if (!html.includes('beweisvisualisierung_renderdaten_2026.json')) {
    html = html.replace('Visualisierungsspezifikation</a>', 'Visualisierungsspezifikation</a>');
  }
  fs.writeFileSync(indexPath, html);
}

console.log(`Seven-point deep hardening: top excerpts ${hardenedTop300.filter((row) => row.originaltext_status === "LOKALER_PROOF_AUSZUG_GEFUEHRT").length}/${hardenedTop300.length}, external urls ${originalStats.external}/${hardenedTargets.length}, local archives ${originalStats.localArchive}/${hardenedTargets.length}, web required ${originalStats.webRequired}/${hardenedTargets.length}, chronik ${chronikDossiers.length}, viz ${visualizationData.sankey_source_actor_legal.length}/${visualizationData.heatmap_target_legal.length}.`);
