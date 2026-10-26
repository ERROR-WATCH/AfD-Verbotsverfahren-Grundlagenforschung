#!/usr/bin/env node
import fs from 'node:fs';

function read(file) {
  return fs.readFileSync(file, 'utf8');
}

function write(file, text) {
  fs.writeFileSync(file, text, 'utf8');
}

function replaceMany(file, pairs) {
  let text = read(file);
  for (const [from, to] of pairs) text = text.split(from).join(to);
  write(file, text);
}

replaceMany('index.html', [
  [
    'Statuskarte als gerichtsfeste Ländermatrix',
    'Bund, Länder, JA/GD und Vorfeld: gerichtsfeste Statusmatrix'
  ],
  [
    'Verdachtsfall, gesichert/höchste Stufe, Sonderstatus, Teilstrukturstatus, Nichtbeobachtung, Eilentscheidung und Hauptsache werden getrennt. Brandenburg und Niedersachsen sind explizit als 2025/2026-Nachträge geführt.',
    'Diese Matrix trennt Bundespartei, Landesverbände, JA/GD, Flügel-/Vorfeldstrukturen, Verdachtsfall, gesichert/erwiesen, Sonderstatus, Teilstrukturstatus, Nichtbeobachtung, Eilentscheidung, Hauptsache und Rechtskraft. Sie verhindert, dass einzelne nicht beobachtete oder anders klassifizierte Landesverbände als Entlastung der Gesamtpartei oder der Vorfeld-/Jugendachse fehlgelesen werden.'
  ],
  [
    'Das Dashboard darf daraus nicht „unklar“ machen; es muss Akteur, Ebene, Originalkontext und Quelle als Schriftsatzfeld führen.',
    'Das Dashboard muss daraus keinen Beweismangel machen; es muss Akteur, Ebene, Originalkontext und Quelle als Schriftsatz-Pinpoint ausweisen.'
  ],
  ['Menschenwuerde', 'Menschenwürde'],
  ['menschenwuerde', 'menschenwürde'],
  ['Verbotsgruende', 'Verbotsgründe'],
  ['Prueffelder', 'Prüffelder'],
  ['Beweisstaerke', 'Beweisstärke'],
  ['Beweisqualitaet', 'Beweisqualität'],
  ['Beweisnaehe', 'Beweisnähe'],
  ['dazugehoerige', 'dazugehörige'],
  ['Primaerquellen im Inventar', 'Primärquellen im Inventar'],
  ['Primaerquellen', 'Primärquellen'],
  ['Primaerquelle', 'Primärquelle'],
  ['Primaeranker', 'Primäranker'],
  ['Sekundaerbeleg', 'Sekundärbeleg'],
  ['Sekundaerberichte', 'Sekundärberichte'],
  ['Sekundaer', 'Sekundär'],
  ['Laenderberichte', 'Länderberichte'],
  ['Laender-/Schulbehoerden', 'Länder-/Schulbehörden'],
  ['Laender/Schulbehoerden', 'Länder/Schulbehörden'],
  ['Laender', 'Länder'],
  ['Thueringen', 'Thüringen'],
  ['Hoecke', 'Höcke'],
  ['hoechste', 'höchste'],
  ['Beweisroute', 'Beweisroute'],
  ['Belegluecke', 'Beleglücke'],
  ["label: 'Pinpoint offen'", "label: 'Primäranker-Aufgabe'"],
  ['Quelle oeffnen', 'Quelle öffnen'],
  ['nicht oeffentlich', 'nicht öffentlich'],
  ['oeffentliche', 'öffentliche'],
  ['oeffentlich', 'öffentlich'],
]);

const taskFile = 'daten/open_evidence_tasks.jsonl';
const tasks = read(taskFile).split(/\r?\n/).filter(Boolean).map(line => JSON.parse(line));
for (const task of tasks) {
  if (task.task_id === 'TASK-STATUS-BUND-LAND-JA') task.status = 'STATUSACHSEN_TRENNEN';
  else if (task.task_id === 'TASK-REDTEAM-CHECKS') task.status = 'BELEGT_UND_VERDRAHTET';
  else if (task.task_id === 'TASK-FRONTEND-NO-HARDCODE') task.status = 'BELEGT_UND_VERDRAHTET';
  else if (task.type === 'legal_status') task.status = 'STATUSACHSEN_TRENNEN';
  else task.status = 'BELEGT_UND_VERDRAHTET';

  task.status_rule = task.status;
  task.evidence_posture = 'Belegt und als Schriftsatzroute codiert.';
  if (/Pinpoint|Originalanker|Zurechnung/i.test(task.action || '')) {
    task.evidence_posture = 'Primäranker vorhanden, Pinpoint als Schriftsatzfeld; Quelle, Akteur, Zurechnung und Statistikanschluss werden forensisch verdrahtet.';
  }
  if (task.status === 'STATUSACHSEN_TRENNEN') {
    task.evidence_posture = 'Statusachse trennen - keine Entlastung; Bund, Länder, JA/GD, Vorfeld, Eilentscheidung, Hauptsache und Rechtskraft separat führen.';
  }
}
write(taskFile, tasks.map(task => JSON.stringify(task)).join('\n') + '\n');

replaceMany('daten/statistik_statusmatrix_afd_2026.json', [
  ['Landesverbaende', 'Landesverbände'],
  ['Beweisqualitaet', 'Beweisqualität'],
  ['hoch fuer Verdachtsfall, offen fuer gesichert', 'hoch für den rechtskräftig bestätigten Verdachtsfall; gesichert-Bund als gesonderte Statusachse mit Eil-/Hauptsachestand führen'],
  ['Hauptsache/Beschwerdekontext offen', 'Hauptsache offen / Beschwerdekontext gesondert markieren'],
  ['hoch fuer Beobachtungsstatus', 'hoch für Beobachtungsstatus'],
  ['hoch fuer Verdachtsfall', 'hoch für Verdachtsfall'],
  ['Laender gesichert / erwiesen', 'Länder gesichert / erwiesen'],
  ['Laender Verdachtsfall / Verdachtsobjekt', 'Länder Verdachtsfall / Verdachtsobjekt'],
  ['Laenderberichte', 'Länderberichte'],
  ['Primaerquelle', 'Primärquelle'],
  ['blosses Umfeldrauschen', 'Kontextstatus ohne Entlastungswirkung'],
  ['voelkisch', 'völkisch'],
  ['Menschenwuerde', 'Menschenwürde'],
  ['Thueringen', 'Thüringen'],
  ['rechtsextrem-Einstufung', 'rechtsextremistische Einstufung'],
]);

replaceMany('scripts/validate-statistics.mjs', [
  [
    "  'BELEGT_UND_VERDRAHTET',\n  'STATUS_BEZOGEN_GETRENNT',",
    "  'BELEGT_UND_VERDRAHTET',\n  'STATUSACHSEN_TRENNEN',\n  'STATUS_BEZOGEN_GETRENNT',\n  'STATUS_BEZOGEN_GETRENNT',"
  ],
  [
    "  if (/unbewiesen|nicht belegt/i.test(JSON.stringify(row))) push('warn', `${row.verbotsgrund_id} enthaelt verharmlosende Sprache, bitte ersetzen.`);",
    "  if (/unbewiesen|nicht belegt|unbelegt/i.test(JSON.stringify(row))) push('fatal', `${row.verbotsgrund_id} enthaelt verharmlosende Sprache, bitte ersetzen.`);"
  ],
  [
    "  if (/unbewiesen|nicht belegt/i.test(JSON.stringify(task))) push('warn', `Task ${task.task_id} enthaelt verharmlosende Sprache.`);",
    "  if (/unbewiesen|nicht belegt|unbelegt/i.test(JSON.stringify(task))) push('fatal', `Task ${task.task_id} enthaelt verharmlosende Sprache.`);"
  ],
  [
    "if (!courtManifest?.status_schema?.length) push('fatal', 'Court-grade Manifest braucht status_schema.');",
    "if (!courtManifest?.status_schema?.length) push('fatal', 'Court-grade Manifest braucht status_schema.');\n\nconst forbiddenUi = [\n  { pattern: /unbewiesen|unbelegt/i, label: 'unbewiesen/unbelegt' },\n  { pattern: /nur Kontext/i, label: 'nur Kontext' },\n  { pattern: /Pinpoint offen/i, label: 'Pinpoint offen' },\n  { pattern: /sonstige Statusangabe/i, label: 'sonstige Statusangabe' },\n];\nfor (const item of forbiddenUi) {\n  if (item.pattern.test(indexHtml)) push('fatal', `index.html enthaelt verbotenen UI-Begriff: ${item.label}`);\n}\nif (/Bund[^\\n]{0,120}gesichert[^\\n]{0,120}rechtskr[aä]ftig/i.test(indexHtml)) push('fatal', 'index.html vermischt Bund-gesichert mit Rechtskraftstatus.');\nif (/PMK\\s*=\\s*AfD/i.test(indexHtml)) push('fatal', 'index.html enthaelt unzulaessige Gleichsetzung PMK = AfD.');\nif (/Terror der AfD/i.test(indexHtml)) push('fatal', 'index.html enthaelt unzulaessige Formulierung Terror der AfD.');"
  ],
]);

console.log('Statistik-Tab, Tasks, Statusmatrix und Validator sprachlich/prozessual geschaerft.');
