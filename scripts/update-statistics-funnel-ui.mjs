#!/usr/bin/env node
import fs from 'node:fs';

const file = 'index.html';
let html = fs.readFileSync(file, 'utf8');

const funnelRows = `const pinpointFunnelRows = [
            { label: "Primäranker vorhanden, Pinpoint als Schriftsatzfeld", count: 5418, status: "BELEGT_UND_VERDRAHTET", evidence: "source_inventory.jsonl: 5.418 starke lokale Primärquellen ohne exakte Seiten-/Randnummernangabe; A/B-Findings selbst haben bereits Fundstellen.", examples: "URTEILE_DEEPRESEARCH.md; Bundestagsdrucksachen 20/01020 und 20/13317; BfV-Verfassungsschutzbericht 2023; DIMR-Analyse; BfV/BMI-Berichte; lokale Gerichts- und Urteilsbelege", text: "Mindestens ein harter Primäranker liegt lokal vor. Für den Schriftsatz fehlen nur die exakten Zitierstellen: Seite, Randnummer, Aktenzeichen, Absatz oder Textstelle. Das ist kein fehlender Beweis, sondern die letzte Zitierarbeit am vorhandenen Originalanker." },
            { label: "Rechercheanker mit Primärankerroute", count: 608, status: "BELEGT_UND_VERDRAHTET", evidence: "source_inventory.jsonl: 608 Presse-, Recherche-, Sekundär- oder Verweisbelege; repo_file_index_2026_summary.json: 396 Presse-/Recherchebelege mit Tatsachenkern.", examples: "Tagesspiegel/Noah-Krieger-Komplex; taz/Separatisten- und Parlamentsbelege; Correctiv-/Recherchebelege; Presseanker zu Spenden-, Sicherheits- und Vorfeldkomplexen", text: "Der Recherche- oder Sekundärbeleg ist vorhanden und führt zu einem amtlichen, gerichtlichen, parlamentarischen oder parteieigenen Primäranker. Für den Antrag wird der Primäranker neben den Recherchebeleg gesetzt und niedriger gewichtete Presse nicht als Endbeweis überhöht." },
            { label: "Belegt und als Schriftsatzroute codiert", count: 9974, status: "BELEGT_UND_VERDRAHTET", evidence: "repo_file_index_2026_summary.json: 9.974 lokale Dateien mit Belegstatus BELEGT_UND_VERDRAHTET.", examples: "7.222 Zitat-/Proof-Dateien; 1.117 Gerichts-/Verfahrensbelege; 316 amtliche VS-Quellen; 266 BfV-Gutachtenkomplex-Dateien; 93 Parteiprimaerquellen; 64 parlamentarische Primärquellen", text: "Die Beweislage ist im Repository vorhanden. Die Schriftsatzroute verbindet Quelle, Pinpoint, Akteur, Zurechnung, Art.-21-Prüffeld, Statistikmanifest und Visualisierung. Weitere Arbeit betrifft die Auswahl der stärksten Anlagen und die letzte Gegenprüfung am Original." },
            { label: "Statusbezogen getrennt - keine Verharmlosung", count: 4, status: "STATUS_BEZOGEN_GETRENNT", evidence: "Urteils- und Gerichtsmodul: Freispruch, Berufung, laufend, Eilentscheidung, Hauptsache und Rechtskraft werden als eigene Prozessfelder geführt.", examples: "VG/OVG/BVerwG-Statusachsen; VG Berlin Millionenspende Berufung; laufende Sicherheitsverfahren Malsack-Winkemann/Kurt H.; Freispruch-/Berufungsregister", text: "Der Fall wird prozessual korrekt markiert: Freispruch, Berufung, laufend, Eilrechtsschutz, Hauptsache oder nicht rechtskräftig. Diese Markierung verhindert Überzeichnung und entlastet nicht automatisch andere Belege oder Statusachsen." },
            { label: "Statusachse trennen - keine Entlastung", count: stateEvidenceRows.filter(row => /Sonderstatus|Teilstrukturen|Nichtbeobachtung nur dieser|nicht beobachtet|Beobachtung ohne Standardstufen|Register-|Medien-/i.test(row.status)).length, status: "STATUSACHSEN_TRENNEN", evidence: "statistik_statusmatrix_afd_2026.json und statistik_laender_beweismatrix_afd_2026.json trennen Bundespartei, Länder, JA/GD, Vorfeld, Teilstrukturen, Eil-/Hauptsache und Rechtskraft.", examples: "Bund: Verdachtsfall rechtskräftig, gesichert-Bund gesondert; JA/GD: eigene Teilorganisationsachse; Thüringen/Sachsen/Sachsen-Anhalt: harte Landesachsen; nicht beobachtete Ebenen nur auf dieser Ebene", text: "Bundespartei, Landesverbände, JA/GD, Flügel-/Vorfeldstrukturen, Teilorganisationen und nicht beobachtete Einheiten sind getrennte Statusachsen. Eine Nichtbeobachtung einzelner Landesebenen ist keine Entlastung der Bundespartei, der JA/GD oder der Vorfeldachse." }
        ];

        const concreteEvidenceTasks =`;

html = html.replace(
  /const pinpointFunnelRows = \[[\s\S]*?\];\n\n        const concreteEvidenceTasks =/,
  funnelRows,
);

html = html
  .replace("{ value: 1, label: 'Primäranker ohne Pinpoint' }", "{ value: 5418, label: 'Primärquellen: Pinpoint ist als Schriftsatzfeld geführt' }")
  .replace("{ value: 9, label: 'Sekundaeranker als Schriftsatzfeld führen' }", "{ value: 608, label: 'Sekundärbelege: Primäranker' }")
  .replace("{ value: 6, label: 'konkrete Belegaufgaben' }", "{ value: 9974, label: 'belegt und verdrahtet' }")
  .replace("pinpointFunnelRows.find(row => row.label === 'Statusachsen trennen')?.count || 0, label: 'Statusachsen trennen'", "pinpointFunnelRows.find(row => row.status === 'STATUSACHSEN_TRENNEN')?.count || 0, label: 'Statusachsen trennen'");

html = html.replace(
  '${escapeHtml(row.text)}</p></article>',
  '${escapeHtml(row.text)}</p><p class="mt-2 text-[11px] text-amber-800"><strong>Belegbasis:</strong> ${escapeHtml(row.evidence || "")}</p><p class="mt-1 text-[11px] text-amber-800"><strong>Beispiele:</strong> ${escapeHtml(row.examples || "")}</p></article>',
);

fs.writeFileSync(file, html);
