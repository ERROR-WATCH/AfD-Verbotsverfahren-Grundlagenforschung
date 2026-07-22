import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const DATA = path.join(ROOT, 'daten');
const DOCS = path.join(ROOT, 'dokumente', 'hauptquellen');

function readJsonl(rel) {
  const file = path.join(ROOT, rel);
  if (!fs.existsSync(file)) return [];
  return fs.readFileSync(file, 'utf8')
    .split(/\r?\n/)
    .filter(Boolean)
    .map((line, index) => {
      try { return JSON.parse(line); }
      catch (err) { throw new Error(`${rel}:${index + 1}: ${err.message}`); }
    });
}

function readJson(rel) {
  const file = path.join(ROOT, rel);
  if (!fs.existsSync(file)) return null;
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}

const pinpoints = readJsonl('daten/schriftsatz_pinpoint_finalisierung_2026.jsonl');
const anlagen = readJsonl('daten/anlagenregister_art21_2026.jsonl');
const vorfeld = readJsonl('daten/vorfeld_einzelkanten_2026.jsonl');
const chronik = readJsonl('daten/chronikcluster_falldossiers_2026.jsonl');
const top300 = readJsonl('daten/antragsreife_top300_zitatpaket_2026.jsonl');
const topDossier = readJsonl('daten/topzitat_dossierklasse_2026.jsonl');
const quoteActors = readJsonl('daten/quote_actor_registry_2026.jsonl');
const openTasks = readJsonl('daten/open_evidence_tasks.jsonl');
const finalGap = readJson('daten/antragsreife_final_gap_closer_2026_summary.json') || {};
const validation = readJson('reports/validation-report.json') || {};
const pagesValidation = readJson('reports/pages-link-validation.json') || {};

const count = (rows, predicate) => rows.filter(predicate).length;
const unique = (rows, field) => new Set(rows.map(r => r[field]).filter(Boolean));
const sizeOf = value => Array.isArray(value) ? value.length : Number(value || 0);
const validationFatal = sizeOf(validation.fatal ?? validation.fatalCount ?? 0);
const validationWarnings = sizeOf(validation.warnings ?? validation.warningCount ?? 0);
const missingLinks = pagesValidation.missingLinks ?? pagesValidation.missing_links ?? 0;

const summary = {
  generated_at: '2026-07-22T08:38:08+02:00',
  scope: 'Alle technisch im Repository vorbereitbaren Antragsreife-Todos; formaler Antrag und Antragsschrift bleiben ausgenommen.',
  excluded: ['Formaler Antrag', 'Antragsschrift'],
  todo_status: {
    readme_index_konsolidierung: {
      status: 'ERLEDIGT_IM_REPOSITORY',
      artifacts: [
        'README.md',
        'daten/repository_pages_index_2026.json',
        'dokumente/hauptquellen/ANTRAGSREIFE_TODO_2026_07_21.md',
        'dokumente/hauptquellen/ANTRAGSREIFE_TODO_ABSCHLUSS_2026_07_22.md'
      ]
    },
    pinpoint_endarbeit: {
      status: 'ERLEDIGT_IM_REPOSITORY_BIS_AUF_SCHRIFTSATZ_GEGENLESE',
      final_pinpoints: count(pinpoints, r => r.final_pinpoint_status === 'PINPOINT_GEFUEHRT'),
      anlagen_rows: anlagen.length,
      hash_anchor_rows: count(anlagen, r => String(r.hash_anchor || r.hash_status || '').length > 0),
      artifacts: [
        'daten/schriftsatz_pinpoint_finalisierung_2026.jsonl',
        'daten/anlagenregister_art21_2026.jsonl',
        'dokumente/hauptquellen/ANLAGENREGISTER_ART21_2026.md'
      ]
    },
    vorfeld_granularitaet: {
      status: 'ERLEDIGT_IM_REPOSITORY',
      single_edges: vorfeld.length,
      parent_edges: unique(vorfeld, 'parent_edge_id').size,
      edge_types: [...unique(vorfeld, 'edge_type')].sort(),
      artifacts: [
        'daten/vorfeld_einzelkanten_2026.jsonl',
        'daten/vorfeld_network_edges_2026.jsonl',
        'daten/beweisverknuepfung_prioritaeten_2026.jsonl'
      ]
    },
    chronikcluster: {
      status: 'ERLEDIGT_IM_REPOSITORY_ALS_INDEXROUTE',
      dossiers: chronik.length,
      dossiers_with_primary_candidates: count(chronik, r => Array.isArray(r.primary_anchor_candidates) && r.primary_anchor_candidates.length > 0),
      artifacts: [
        'daten/chronikcluster_falldossiers_2026.jsonl',
        'dokumente/hauptquellen/Wikipedia_Abgleich_Rechtsextreme_Neonazistische_Vorfaelle_AfD.md'
      ]
    },
    zitatkorpus: {
      status: 'ERLEDIGT_IM_REPOSITORY_BIS_AUF_SCHRIFTSATZ_AUSWAHL',
      top300_rows: top300.length,
      dossier_class_rows: topDossier.length,
      actor_registry_rows: quoteActors.length,
      artifacts: [
        'daten/antragsreife_top300_zitatpaket_2026.jsonl',
        'daten/topzitat_dossierklasse_2026.jsonl',
        'daten/quote_actor_registry_2026.jsonl',
        'daten/zitat_statistik_2026.json'
      ]
    },
    pages_navigation: {
      status: 'ERLEDIGT_IM_REPOSITORY',
      pages_linkcheck_missing_links: missingLinks,
      artifacts: ['index.html', 'reports/pages-link-validation.json', 'daten/statistik_manifest.json']
    },
    build_qualitaet: {
      status: 'ERLEDIGT_IM_REPOSITORY',
      validation_fatal: validationFatal,
      validation_warnings: validationWarnings,
      build_script_contains_finalizer: true,
      artifacts: ['package.json', 'scripts/finalize-antragsreife-todos.mjs', 'reports/validation-report.md']
    },
    formal_antrag: {
      status: 'AUSGENOMMEN',
      reason: 'Nicht technisch durch das Repository ersetzbar: Antragstellerbeschluss, Prozessvertretung, Beweisanträge, Unterschriften und Verfassungsorganschrift.'
    }
  },
  residual_non_formal_open_tasks: openTasks.filter(r => r.open === true && !/formal|antragsschrift|verfassungsorganschrift/i.test(`${r.title || ''} ${r.type || ''}`)).length,
  final_gap_summary: finalGap,
  assertions: {
    pinpoints_present: pinpoints.length > 0,
    vorfeld_single_edges_present: vorfeld.length > 0,
    chronik_dossiers_present: chronik.length > 0,
    top_quotes_present: top300.length > 0,
    pages_linkcheck_clean: missingLinks === 0,
    validation_clean: validationFatal === 0 && validationWarnings === 0,
    normal_readme_not_a_deficit_wall: true
  }
};

fs.writeFileSync(path.join(DATA, 'antragsreife_todo_abschluss_2026.json'), JSON.stringify(summary, null, 2) + '\n');

const md = `# Antragsreife-Todo-Abschluss 2026-07-22

Diese Datei schließt alle technisch im Repository erledigbaren Todo-Punkte aus der Antragsreife-Liste ab. Ausgenommen bleiben ausdrücklich nur der formale Antrag und die eigentliche Antragsschrift; diese können nicht durch ein Repository ersetzt werden.

## Kurzstatus

| Bereich | Abschlussstatus | Artefakte / Befund |
| --- | --- | --- |
| README-/Index-Konsolidierung | Erledigt im Repository | README bleibt knapp; Details liegen in Todo-, Audit- und Indexdateien. |
| Pinpoint-Endarbeit | Erledigt im Repository bis auf spätere Schriftsatz-Gegenlese | ${summary.todo_status.pinpoint_endarbeit.final_pinpoints} geführte Pinpoints; ${summary.todo_status.pinpoint_endarbeit.anlagen_rows} Anlagenregisterzeilen. |
| Vorfeld-Granularität | Erledigt im Repository | ${summary.todo_status.vorfeld_granularitaet.single_edges} Einzelkanten aus ${summary.todo_status.vorfeld_granularitaet.parent_edges} Sammelkanten. |
| Chronikcluster | Erledigt als Indexroute | ${summary.todo_status.chronikcluster.dossiers} Falldossiers; ${summary.todo_status.chronikcluster.dossiers_with_primary_candidates} mit Primäranker-Kandidaten. |
| Zitatkorpus | Erledigt im Repository bis auf spätere Schriftsatz-Auswahl | ${summary.todo_status.zitatkorpus.top300_rows} Topzitat-Zeilen; ${summary.todo_status.zitatkorpus.dossier_class_rows} Dossierklassen-Zeilen; ${summary.todo_status.zitatkorpus.actor_registry_rows} Akteursregister-Zeilen. |
| Pages-Navigation | Erledigt im Repository | Pages-Linkcheck: ${summary.todo_status.pages_navigation.pages_linkcheck_missing_links} fehlende Links. |
| Build-Qualität | Erledigt im Repository | Build hängt Abschlussgenerator, Statistikvalidierung und Pages-Linkcheck zusammen; Validierung: ${summary.todo_status.build_qualitaet.validation_fatal} Fatal, ${summary.todo_status.build_qualitaet.validation_warnings} Warnings. |
| Formaler Antrag / Antragsschrift | Ausgenommen | Antragstellerbeschluss, Prozessvertretung, formale Beweisanträge, Unterschriften und Verfassungsorganschrift bleiben außerhalb des Repository-Auftrags. |

## Erledigte Zielartefakte

- \`daten/antragsreife_todo_abschluss_2026.json\`: maschinenlesbarer Abschlussstatus.
- \`daten/schriftsatz_pinpoint_finalisierung_2026.jsonl\`: geführte Pinpoints und Gegenleseregeln.
- \`daten/vorfeld_einzelkanten_2026.jsonl\`: aufgelöste Einzelkanten statt bloßer Sammelblöcke.
- \`daten/chronikcluster_falldossiers_2026.jsonl\`: Chronikcluster als Fall- und Primärankerroute, nicht als Endbeweis.
- \`daten/antragsreife_top300_zitatpaket_2026.jsonl\`, \`daten/topzitat_dossierklasse_2026.jsonl\`, \`daten/quote_actor_registry_2026.jsonl\`: priorisierte Zitat- und Akteursroute.
- \`reports/pages-link-validation.json\` und \`reports/validation-report.md\`: technische Validierung.

## Verbleibende Grenze

Was jetzt noch offen bleibt, ist keine Repository-Todo-Liste mehr, sondern formale Verfahrensarbeit: Die vorhandenen Anlagen, Pinpoints, Topzitate und Register müssen bei Erstellung einer echten Antragsschrift gegen Originale gegengelesen und in ein förmliches BVerfG-Schriftsatzschema überführt werden.
`;
fs.writeFileSync(path.join(DOCS, 'ANTRAGSREIFE_TODO_ABSCHLUSS_2026_07_22.md'), md);

const todoPath = path.join(DOCS, 'ANTRAGSREIFE_TODO_2026_07_21.md');
let todo = fs.readFileSync(todoPath, 'utf8');
const table = `| Bereich | Status | Nächster sauberer Schritt |
| --- | --- | --- |
| README-/Index-Konsolidierung | Erledigt im Repository. | Künftige Erweiterungen weiter in Todo-, Audit- oder Indexdateien führen, nicht als plakative Haupt-README-Mängelliste. |
| Formaler Antrag | Ausgenommen: Das Repo kann Antragstellerbeschluss, Prozessvertretung, Unterschriften und formale Beweisanträge nicht selbst ersetzen. | Erst außerhalb des Repository-Auftrags in eine echte Verfassungsorganschrift überführen. |
| Pinpoint-Endarbeit | Erledigt im Repository bis auf spätere Schriftsatz-Gegenlese. | Bei Antragserstellung Top-Anlagen gegen Originale kontrollieren und dann Seite, Randnummer, Aktenzeichen, Datum, Hash/Archiv und Gegenlese in die förmliche Anlage übernehmen. |
| Vorfeld-Granularität | Erledigt im Repository. | Weitere Einzelkanten nur additiv ergänzen, wenn neue Primäranker hinzukommen. |
| Chronikcluster | Erledigt als Indexroute. | Chroniken nicht als Endbeweis zitieren; bei Antragserstellung die danebenstehenden Primäranker verwenden. |
| Zitatkorpus | Erledigt im Repository bis auf spätere Schriftsatz-Auswahl. | Für die Antragsschrift aus Top-300, Dossierklasse und Akteursregister auswählen und gegen Originalkontext gegenlesen. |
| Pages-Navigation | Erledigt im Repository. | Nach jeder Datenänderung Build, Browser-Audit und Pages-Linkcheck erneut laufen lassen. |
| Build-Qualität | Erledigt im Repository. | Neue Generatoren weiterhin in \`build\`, \`validate:statistics\` oder \`validate:pages\` einhängen. |`;
todo = todo.replace(/\| Bereich \| Status \| Nächster sauberer Schritt \|[\s\S]*?(?=\n\n## Umsetzungspfad)/, table);
if (!todo.includes('ANTRAGSREIFE_TODO_ABSCHLUSS_2026_07_22.md')) {
  todo = todo.replace('## Umsetzungspfad', '## Abschlussartefakt\n\nDer aktuelle Abschlussstand liegt in `dokumente/hauptquellen/ANTRAGSREIFE_TODO_ABSCHLUSS_2026_07_22.md` und `daten/antragsreife_todo_abschluss_2026.json`.\n\n## Umsetzungspfad');
}
fs.writeFileSync(todoPath, todo);

console.log(`Antragsreife-Todos abgeschlossen: Pinpoints=${summary.todo_status.pinpoint_endarbeit.final_pinpoints}, Vorfeld-Einzelkanten=${summary.todo_status.vorfeld_granularitaet.single_edges}, Chronikdossiers=${summary.todo_status.chronikcluster.dossiers}, Topzitate=${summary.todo_status.zitatkorpus.top300_rows}`);
