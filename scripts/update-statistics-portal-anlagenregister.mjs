import fs from 'node:fs';

const path = 'index.html';
let html = fs.readFileSync(path, 'utf8');

html = html.replace(
  'Der Vollindex macht die Beweisakte navigierbar: Portal, Statistikmanifest, Findings, Quelleninventar, 18er-Matrix, Statusachsen, Vorfeldkanten, Sicherheitsmatrix, Antragsspitze und Schriftsatzexport sind als Startpunkte verlinkt. Er benennt zugleich die verbliebene Schriftsatzarbeit: formaler Antrag, Anlagenverzeichnis, finale Pinpoints, Topzitat-Dossierklasse und weitere Granularisierung der Vorfeldkanten.',
  'Der Vollindex macht die Beweisakte navigierbar: Portal, Statistikmanifest, Findings, Quelleninventar, 18er-Matrix, Statusachsen, Vorfeldkanten, Sicherheitsmatrix, Antragsspitze, Schriftsatzexport und Anlagenregister sind als Startpunkte verlinkt. Er benennt zugleich die verbliebene Schriftsatzarbeit: formaler Antrag, Anlagenreihenfolge, finale Pinpoints, Topzitat-Dossierklasse und weitere Granularisierung der Vorfeldkanten.',
);

html = html.replace(
  `<span class="block text-2xl font-extrabold text-brand-blue">144</span>
                            <span class="text-xs text-slate-500">Schriftsatzbeweisblöcke</span>`,
  `<span class="block text-2xl font-extrabold text-brand-blue">158</span>
                            <span class="text-xs text-slate-500">Anlagenregister-Zeilen</span>`,
);

const statsBlock = `                    <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <div class="rounded-lg border border-slate-100 bg-slate-50 p-3">
                            <span class="block text-2xl font-extrabold text-brand-blue">6</span>
                            <span class="text-xs text-slate-500">hashgesicherte Amts-/Gerichtsanker</span>
                        </div>
                        <div class="rounded-lg border border-slate-100 bg-slate-50 p-3">
                            <span class="block text-2xl font-extrabold text-brand-blue">44</span>
                            <span class="text-xs text-slate-500">formal zu finalisierende Pinpoints</span>
                        </div>
                        <div class="rounded-lg border border-slate-100 bg-slate-50 p-3">
                            <span class="block text-2xl font-extrabold text-brand-blue">64</span>
                            <span class="text-xs text-slate-500">Split-/OCR-Gegenlesen</span>
                        </div>
                    </div>
`;

const linkGridMarker = '                    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 text-xs">';
if (!html.includes('formal zu finalisierende Pinpoints')) {
  html = html.replace(linkGridMarker, statsBlock + linkGridMarker);
}

const schriftsatzLink = `                        <a href="./dokumente/hauptquellen/SCHRIFTSATZ_EXPORT_TOP_BEWEISE_2026.md" target="_blank" class="rounded-lg border border-blue-100 bg-blue-50/60 p-3 font-bold text-brand-blue hover:text-brand-gold">Schriftsatzexport Top-Beweise</a>
`;

const anlagenLinks = `                        <a href="./dokumente/hauptquellen/ANLAGENREGISTER_ART21_2026.md" target="_blank" class="rounded-lg border border-blue-100 bg-blue-50/60 p-3 font-bold text-brand-blue hover:text-brand-gold">Anlagenregister Art. 21</a>
                        <a href="./daten/anlagenregister_art21_2026.jsonl" target="_blank" class="rounded-lg border border-blue-100 bg-blue-50/60 p-3 font-bold text-brand-blue hover:text-brand-gold">Anlagenregister JSONL</a>
                        <a href="./reports/anlagenregister-audit-2026-07-09.md" target="_blank" class="rounded-lg border border-blue-100 bg-blue-50/60 p-3 font-bold text-brand-blue hover:text-brand-gold">Anlagenregister-Audit</a>
`;

if (!html.includes('ANLAGENREGISTER_ART21_2026.md')) {
  html = html.replace(schriftsatzLink, schriftsatzLink + anlagenLinks);
}

html = html.replace(
  'Das Repo ist jetzt indexiert und validiert, ersetzt aber keine Verfassungsorganschrift. Für einen Antrag bleiben formale Antragstellung, Anlagenreihenfolge, finale Seiten-/Randnummern, Originalgegenlese und die Priorisierung der stärksten Zitate und Vorfeld-Einzelkanten als Schriftsatzarbeit.',
  'Das Repo ist indexiert, validiert und als Anlagenroute vorbereitet, ersetzt aber keine Verfassungsorganschrift. Für einen Antrag bleiben formale Antragstellung, Anlagenreihenfolge, 44 finale Seiten-/Randnummern, 64 Originalgegenlesen, 19 lokale Zeilenanker sowie die Priorisierung der stärksten Zitate und Vorfeld-Einzelkanten als Schriftsatzarbeit.',
);

fs.writeFileSync(path, html);
console.log('Statistik-Portal um Anlagenregister erweitert.');
