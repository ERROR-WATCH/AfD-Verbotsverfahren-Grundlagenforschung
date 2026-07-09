import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const rel = (...parts) => path.join(ROOT, ...parts);

const FILES = {
  anlagen: rel('daten/anlagenregister_art21_2026.jsonl'),
  findings: rel('daten/findings_art21.jsonl'),
  vorfeld: rel('daten/vorfeld_network_edges_2026.jsonl'),
  gutachten: rel('daten/gutachten_coverage_audit_2026.jsonl'),
  inventory: rel('daten/source_inventory.jsonl'),
  pinpoints: rel('daten/schriftsatz_pinpoint_finalisierung_2026.jsonl'),
  quotes: rel('daten/topzitat_dossierklasse_2026.jsonl'),
  quotesMd: rel('dokumente/hauptquellen/TOPZITAT_DOSSIERKLASSE_2026.md'),
  edges: rel('daten/vorfeld_einzelkanten_2026.jsonl'),
  pressRoutes: rel('daten/presseanker_primaerrouten_2026.jsonl'),
  report: rel('reports/antragsverfahren-final-pass-2026-07-09.md'),
  index: rel('index.html'),
};

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

function writeText(file, text) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, text);
}

function clean(value) {
  return String(value ?? '').replace(/\s+/g, ' ').trim();
}

function pageRange(value) {
  const text = clean(value);
  const match = text.match(/pages?[_ -](\d+)[_ -]to[_ -](\d+)/i) || text.match(/Seiten?\s+(\d+)\s*(?:-|bis|to)\s*(\d+)/i);
  return match ? `${match[1]}-${match[2]}` : null;
}

function pinpointKind(row) {
  const joined = `${row.pinpoint || ''} ${row.repo_path || ''}`;
  if (/HASHGESICHERTER_AMTLICHER_WEBANKER/.test(row.pinpoint_status || '')) return 'amtlicher_hashanker';
  if (row.pinpoint_status === 'PINPOINT_FORMAL_FINALISIEREN') return 'seite_randnummer_absatz_final_eintragen';
  if (/Rn\.|Randnummer/i.test(joined)) return 'randnummer';
  if (/S\.\s*\d+|Seite\s+\d+/i.test(joined)) return 'seite';
  if (/Aktenzeichen|Beschluss|Urteil|Pressemitteilung/i.test(joined)) return 'aktenzeichen_oder_amtlicher_textanker';
  if (pageRange(joined)) return 'seitenbereich_aus_split';
  return 'exakter_schriftsatz_pinpoint';
}

function buildPinpointTasks(anlagen) {
  return anlagen
    .filter((row) => ['PINPOINT_FORMAL_FINALISIEREN', 'LOKALER_SPLIT_GEGEN_ORIGINAL_LESEN', 'LOKALER_DATEIANKER_GEFUEHRT'].includes(row.pinpoint_status))
    .map((row, index) => {
      const range = pageRange(`${row.repo_path} ${row.pinpoint}`);
      return {
        task_id: `PIN-${String(index + 1).padStart(4, '0')}`,
        anlage_id: row.anlage_id,
        source_id: row.source_id,
        source_title: row.source_title,
        repo_path: row.repo_path,
        current_pinpoint_status: row.pinpoint_status,
        current_pinpoint: row.pinpoint,
        extracted_page_range: range,
        required_pinpoint_type: pinpointKind(row),
        court_action: range
          ? `Gegen Original-PDF lesen und Seitenbereich ${range} auf genaue Seite/Randnummer/Absatz reduzieren.`
          : 'Original-PDF, amtliche HTML-Fassung oder Parteiquelle oeffnen und genaue Seite/Randnummer/Absatz/Aktenzeichen eintragen.',
        no_overclaim: 'Bis zur Gegenlese nur als Anlagenroute oder Arbeitsanker verwenden, nicht als finales Schriftsatzzitat.',
        article21_fields: row.article21_fields || [],
        zurechnung: row.zurechnung || '',
      };
    });
}

function scoreFinding(row) {
  let score = 0;
  if (row.granularity === 'quote') score += 20;
  if (row.beweistufe === 'A' || row.beweisstufe === 'A') score += 30;
  if (/direkt/i.test(row.afd_zurechnung || row.akteursebene || '')) score += 20;
  if (/amtlich|gerichtlich|VS|Gutachten/i.test(row.quellenart || row.source_medium || '')) score += 15;
  if (row.originaltext || row.originaltext_auszug) score += 12;
  if (/Menschenwürde|Demokratie|Rechtsstaatsprinzip|Verfassungsfeindliche/i.test(row.art_21_element || row.bverfg_prueffeld || '')) score += 8;
  if (row.exact_fundstelle && !/lokaler Quote-Block/i.test(row.exact_fundstelle)) score += 6;
  return score;
}

function buildTopQuoteDossier(findings) {
  return findings
    .filter((row) => row.granularity === 'quote')
    .map((row) => ({ row, score: scoreFinding(row) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 150)
    .map(({ row, score }, index) => ({
      dossier_id: `QUOTE-DOS-${String(index + 1).padStart(3, '0')}`,
      finding_id: row.finding_id,
      score,
      akteur: row.akteur || 'Akteur aus Belegpfad final normalisieren',
      akteursebene: row.akteursebene || 'zu normalisieren',
      afd_zurechnung: row.afd_zurechnung || 'zu normalisieren',
      art21: row.art_21_element || row.bverfg_prueffeld || row.thema || 'Art.-21-Feld zu pruefen',
      beweisstufe: row.beweistufe || row.beweisstufe || 'B/C',
      quellenart: row.quellenart || '',
      source_id: row.source_id,
      source_path: row.source_path,
      source_medium: row.source_medium,
      exact_fundstelle: row.exact_fundstelle,
      originaltext_auszug: clean(row.originaltext_auszug || row.originaltext).slice(0, 650),
      zielgruppe: row.zielgruppe || 'Zielgruppe aus Kontext final codieren',
      rechtsstatus: row.rechtsstatus || 'Status/Gegenlese final pruefen',
      court_action: 'Originalkontext gegenlesen; Akteursfunktion am Datum, Kanal, Zielgruppe, Rechtsgut und Gegenargument eintragen.',
    }));
}

function edgeType(edge) {
  const text = `${edge.zurechnungstyp || ''} ${edge.event || ''} ${edge.organisation || ''}`;
  if (/Mitarbeiter|Zugang/i.test(text)) return 'mitarbeiter_zugangskante';
  if (/Medien|NIUS|Compact/i.test(text)) return 'medienkante';
  if (/Veranstaltung|Kampagne|Remigration|Wahlkampf/i.test(text)) return 'kampagnen_oder_veranstaltungskante';
  if (/Jugend|JA|Generation/i.test(text)) return 'jugend_teilorganisationskante';
  return 'quellengebundene_vorfeldkante';
}

function buildSingleEdges(edges) {
  const rows = [];
  for (const edge of edges) {
    const sourceIds = Array.isArray(edge.source_ids) ? edge.source_ids : [];
    const sourcePaths = Array.isArray(edge.source_paths) ? edge.source_paths : [];
    const findingIds = Array.isArray(edge.finding_ids) ? edge.finding_ids : [];
    const max = Math.max(1, sourceIds.length, sourcePaths.length, findingIds.length);
    for (let i = 0; i < max; i += 1) {
      rows.push({
        single_edge_id: `${edge.edge_id || 'EDGE'}-S${String(i + 1).padStart(3, '0')}`,
        parent_edge_id: edge.edge_id,
        edge_type: edgeType(edge),
        person: edge.person,
        organisation: edge.organisation,
        event: edge.event,
        date: edge.date,
        source_id: sourceIds[i] || sourceIds[0] || '',
        source_path: sourcePaths[i] || sourcePaths[0] || '',
        finding_id: findingIds[i] || findingIds[0] || '',
        zurechnungstyp: edge.zurechnungstyp,
        beweisstufe: edge.beweisstufe || edge.beweistufe,
        status: edge.status,
        art21: edge.art21 || [],
        court_action: 'Fuer Schriftsatz: konkrete Person, Funktion, Datum, Handlung, Originalquelle, AfD-Bruecke und Gegenargument in einer Einzelfallzeile pruefen.',
        no_overclaim: edge.beweislast_notiz || 'Keine Sammelzurechnung ohne belegte Bruecke.',
      });
    }
  }
  return rows;
}

function buildPressRoutes(gutachten, inventory) {
  const gutachtenPress = gutachten
    .filter((row) => /Presse|Recherche|Kontext/i.test(`${row.family} ${row.evidence_role} ${row.court_use}`))
    .map((row, index) => ({
      route_id: `PRESS-GUT-${String(index + 1).padStart(3, '0')}`,
      source_title: row.family,
      source_path: row.local_anchor,
      route_class: 'gutachten_presse_route',
      current_use: row.court_use,
      required_primary_anchor: 'Originalgutachten, Gerichtsentscheidung, Drucksache, amtliche Quelle oder parteieigene Originalquelle daneben fuehren.',
      status: 'PRIMAERROUTE_KONKRET_CODIERT',
    }));
  const inventoryPress = inventory
    .filter((row) => /Presse|Recherche/i.test(`${row.quellentyp} ${row.herausgeber} ${row.themenbereich}`))
    .slice(0, 250)
    .map((row, index) => ({
      route_id: `PRESS-INV-${String(index + 1).padStart(3, '0')}`,
      source_id: row.source_id,
      source_title: row.title,
      source_path: row.repo_path,
      route_class: 'inventar_presse_route',
      current_use: row.juristischer_nutzwert || 'Recherche-/Kontextanker',
      required_primary_anchor: 'Falls als Tatsache genutzt: Gericht/Behörde/Parlament/Parteiquelle oder archiviertes Original daneben belegen.',
      status: row.primärquelle ? 'PRESSE_FALSCH_HART_GEPRUEFT' : 'PRIMAERROUTE_KONKRET_CODIERT',
    }));
  return [...gutachtenPress, ...inventoryPress];
}

function renderQuoteMd(rows) {
  return [
    '# Topzitat-Dossierklasse 2026',
    '',
    'Diese Liste priorisiert die staerksten Zitat-/Proof-Findings fuer die Schriftsatzarbeit. Sie ist keine neue Tatsachenbehauptung, sondern ein Arbeitsregister: Originalkontext, Akteur, Funktion, Kanal, Zielgruppe und Gegenargument muessen vor Antragseinbau gegengelesen werden.',
    '',
    ...rows.map((row) => [
      `## ${row.dossier_id} - ${row.akteur}`,
      '',
      `- Finding: ${row.finding_id}`,
      `- Score: ${row.score}`,
      `- Art. 21: ${row.art21}`,
      `- Zurechnung: ${row.afd_zurechnung} / ${row.akteursebene}`,
      `- Quelle: ${row.source_id}`,
      `- Pfad: ${row.source_path}`,
      `- Fundstelle: ${row.exact_fundstelle || 'zu pruefen'}`,
      `- Auszug: ${row.originaltext_auszug || 'Originaltext im Proof-/Quellenkontext gegenlesen'}`,
      `- Naechste Handlung: ${row.court_action}`,
      '',
    ].join('\n')),
  ].join('\n');
}

const anlagen = readJsonl(FILES.anlagen);
const findings = readJsonl(FILES.findings);
const vorfeld = readJsonl(FILES.vorfeld);
const gutachten = readJsonl(FILES.gutachten);
const inventory = readJsonl(FILES.inventory);

const pinpointTasks = buildPinpointTasks(anlagen);
const topQuotes = buildTopQuoteDossier(findings);
const singleEdges = buildSingleEdges(vorfeld);
const pressRoutes = buildPressRoutes(gutachten, inventory);

writeJsonl(FILES.pinpoints, pinpointTasks);
writeJsonl(FILES.quotes, topQuotes);
writeText(FILES.quotesMd, renderQuoteMd(topQuotes));
writeJsonl(FILES.edges, singleEdges);
writeJsonl(FILES.pressRoutes, pressRoutes);

const stats = {
  pinpointTasks: pinpointTasks.length,
  topQuotes: topQuotes.length,
  singleEdges: singleEdges.length,
  pressRoutes: pressRoutes.length,
  formalPinpointTasks: pinpointTasks.filter((row) => row.current_pinpoint_status === 'PINPOINT_FORMAL_FINALISIEREN').length,
  splitCounterreadTasks: pinpointTasks.filter((row) => row.current_pinpoint_status === 'LOKALER_SPLIT_GEGEN_ORIGINAL_LESEN').length,
  localLineTasks: pinpointTasks.filter((row) => row.current_pinpoint_status === 'LOKALER_DATEIANKER_GEFUEHRT').length,
};

writeText(
  FILES.report,
  [
    '# Antragsverfahren Final-Pass 2026-07-09',
    '',
    JSON.stringify(stats, null, 2),
    '',
    '## Erzeugte Register',
    '',
    '- daten/schriftsatz_pinpoint_finalisierung_2026.jsonl',
    '- daten/topzitat_dossierklasse_2026.jsonl',
    '- dokumente/hauptquellen/TOPZITAT_DOSSIERKLASSE_2026.md',
    '- daten/vorfeld_einzelkanten_2026.jsonl',
    '- daten/presseanker_primaerrouten_2026.jsonl',
    '',
    '## Prozessregel',
    '',
    'Diese Artefakte ersetzen keine Antragsschrift. Sie machen die noch notwendige Schriftsatzarbeit maschinenlesbar und verhindern, dass Arbeitsanker als fertige gerichtliche Pinpoints fehlgelesen werden.',
    '',
  ].join('\n'),
);

if (fs.existsSync(FILES.index)) {
  let html = fs.readFileSync(FILES.index, 'utf8');
  const extraLinks = [
    ['TOPZITAT_DOSSIERKLASSE_2026.md', './dokumente/hauptquellen/TOPZITAT_DOSSIERKLASSE_2026.md', 'Topzitat-Dossierklasse'],
    ['schriftsatz_pinpoint_finalisierung_2026.jsonl', './daten/schriftsatz_pinpoint_finalisierung_2026.jsonl', 'Pinpoint-Finalisierung JSONL'],
    ['vorfeld_einzelkanten_2026.jsonl', './daten/vorfeld_einzelkanten_2026.jsonl', 'Vorfeld-Einzelkanten JSONL'],
    ['presseanker_primaerrouten_2026.jsonl', './daten/presseanker_primaerrouten_2026.jsonl', 'Presseanker-Primärrouten JSONL'],
    ['antragsverfahren-final-pass-2026-07-09.md', './reports/antragsverfahren-final-pass-2026-07-09.md', 'Final-Pass Audit'],
  ];
  for (const [needle, href, label] of extraLinks) {
    if (!html.includes(needle)) {
      html = html.replace(
        '                        <a href="./daten/source_inventory.jsonl" target="_blank" class="rounded-lg border border-blue-100 bg-blue-50/60 p-3 font-bold text-brand-blue hover:text-brand-gold">Quelleninventar</a>',
        `                        <a href="./daten/source_inventory.jsonl" target="_blank" class="rounded-lg border border-blue-100 bg-blue-50/60 p-3 font-bold text-brand-blue hover:text-brand-gold">Quelleninventar</a>\n                        <a href="${href}" target="_blank" class="rounded-lg border border-blue-100 bg-blue-50/60 p-3 font-bold text-brand-blue hover:text-brand-gold">${label}</a>`,
      );
    }
  }
  fs.writeFileSync(FILES.index, html);
}

console.log(`Final-Pass erzeugt: ${stats.pinpointTasks} Pinpointaufgaben, ${stats.topQuotes} Topzitate, ${stats.singleEdges} Einzelkanten, ${stats.pressRoutes} Primaerrouten.`);
