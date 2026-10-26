import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const reportPath = path.join(ROOT, 'reports/anlagenregister-audit-2026-07-09.md');
const indexPath = path.join(ROOT, 'index.html');

const report = fs.readFileSync(reportPath, 'utf8');
const stats = JSON.parse(report.match(/\{[\s\S]*?\}/)[0]);
let html = fs.readFileSync(indexPath, 'utf8');

html = html.replace(
  /Für einen Antrag bleiben formale Antragstellung, Anlagenreihenfolge, \d+ finale Seiten-\/Randnummern, \d+ Originalgegenlesen(?:, \d+ lokale Zeilenanker)? (?:sowie|und) die Priorisierung der stärksten Zitate und Vorfeld-Einzelkanten als Schriftsatzarbeit\./,
  `Für einen Antrag bleiben formale Antragstellung, Anlagenreihenfolge, ${stats.formalPinpoints} finale Seiten-/Randnummern, ${stats.splitCounterread} Originalgegenlesen, ${stats.localLineAnchors} lokale Zeilenanker sowie die Priorisierung der stärksten Zitate und Vorfeld-Einzelkanten als Schriftsatzarbeit.`,
);

html = html.replace(
  /der Rest ist als \d+ finale Seiten-\/Randnummern, \d+ Originalgegenlesen(?:, \d+ lokale Zeilenanker)? (?:sowie|und) Status-\/Gegenargumenttrennung (?:geführt|gefuehrt)\./,
  `der Rest ist als ${stats.formalPinpoints} finale Seiten-/Randnummern, ${stats.splitCounterread} Originalgegenlesen, ${stats.localLineAnchors} lokale Zeilenanker und Status-/Gegenargumenttrennung gefuehrt.`,
);

fs.writeFileSync(indexPath, html);
console.log(`Anlagenregister-Copy synchronisiert: ${stats.formalPinpoints}/${stats.splitCounterread}/${stats.localLineAnchors}.`);
