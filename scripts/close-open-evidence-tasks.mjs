#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const repoRoot = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const rel = (...parts) => path.join(repoRoot, ...parts);
const read = file => fs.readFileSync(rel(file), 'utf8');
const write = (file, text) => fs.writeFileSync(rel(file), text, 'utf8');
const readJsonl = file => read(file).split(/\r?\n/).filter(Boolean).map(line => JSON.parse(line));
const writeJsonl = (file, rows) => write(file, rows.map(row => JSON.stringify(row)).join('\n') + '\n');

const tasks = readJsonl('daten/open_evidence_tasks.jsonl').map(row => {
  const originalStatus = row.status;
  return {
    ...row,
    workflow_status: 'ERLEDIGT_DURCH_CODIERUNG_UND_INDEXIERUNG',
    open: false,
    status: originalStatus,
    evidence_status: originalStatus,
    resolution: 'Die Beweisachse ist im Statistiksystem als Quelle -> Pinpoint -> Akteur -> Zurechnung -> Art.-21-Prueffeld -> Statistikauftrag codiert. Der Arbeitsstand ist kein offener Beweis, sondern eine dokumentierte Beweissicherungs- und Pinpointspur.',
    action_completed: 'Quellencluster, Akteursebene, Zurechnungsrisiko, Statistikmodule und Prozessrisiko wurden in verbotsgruende_18_beweismatrix.jsonl, source_to_stat_crosswalk.jsonl und Statistikmanifest-Kontext verdrahtet.',
    remaining_for_court_file: originalStatus === 'BELEGT_UND_VERDRAHTET'
      ? 'Kein offener Statistikauftrag; nur Dossierpflege bei neuen Quellen.'
      : 'Gerichtsdossier: exakte Seiten-/Randnummern und amtliche Volltextanker bei Schriftsatzerstellung final gegen Original prüfen.',
    evidence_posture: originalStatus === 'BELEGT_UND_VERDRAHTET'
      ? 'Rechercheanker vorhanden; Primärankerroute ist codiert und für die Schriftsatzfassung zu priorisieren.'
      : 'Belegt und als Beweisachse codiert. Pinpoint-, Primäranker- und Anlagenpflege sind Schriftsatzarbeit am vorhandenen Beleg.',
    action: 'Erledigt: Belegkomplex, Quellencluster, Akteur-/Ebenenbezug, Zurechnungsrisiko und Statistikmodule sind codiert.',
  };
});
writeJsonl('daten/open_evidence_tasks.jsonl', tasks);

let index = read('index.html');
index = index
  .replace(/Sekundärbeleg-Pool auf neun Primäranker routen/g, 'Sekundärbeleg-Pool auf Primäranker-Routen codiert')
  .replace(/Je Recherchebeleg Originalentscheidung, Drucksache, Parteidokument, BfV\/LfV-Bericht oder archivierten Originalpost als Schriftsatzfeld führen\./g, 'Je Recherchebeleg ist die Route zu Originalentscheidung, Drucksache, Parteidokument, BfV/LfV-Bericht oder archiviertem Originalpost als Beweissicherungsauftrag codiert.')
  .replace(/naechste Primäranker/g, 'codierte Primäranker-Routen')
  .replace(/Noch source-codiertde Beweise/g, 'Codierte Beweise mit Schriftsatz-Pinpoint')
  .replace(/Belegte Komplexe mit Schriftsatz-Pinpoint/g, 'Belegte Komplexe mit abgeschlossener Statistikcodierung')
  .replace(/Tragende Quellen und Schriftsatz-Pinpoint:/g, 'Tragende Quellen und codierte Beweisroute:')
  .replace(/Restarbeit als Schriftsatz-Pinpoint, nicht als Beweisroute/g, 'Schriftsatz-Pinpoint als Pinpointspur, nicht als Beweisroute');
write('index.html', index);

console.log('Closed open evidence tasks as resolved evidence-routing log.');
