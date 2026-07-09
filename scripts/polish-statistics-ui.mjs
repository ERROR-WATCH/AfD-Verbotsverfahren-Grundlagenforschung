#!/usr/bin/env node
import fs from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const rel = (...parts) => path.join(root, ...parts);

const textFiles = [
  rel('index.html'),
  rel('daten', 'beweisrouten_audit_2026.jsonl'),
  rel('daten', 'beweislast_audit_2026.jsonl'),
  rel('daten', 'beweisverknuepfung_prioritaeten_2026.jsonl')
];

const replacements = [
  [/BVerfG-Modus \/ Beweisfuehrung/g, 'BVerfG-Modus / Beweisführung'],
  [/gelesen werden muessten/g, 'gelesen werden müssten'],
  [/Rechtsmassstab/g, 'Rechtsmaßstab'],
  [/Gepruefte Statistikobjekte/g, 'Geprüfte Statistikobjekte'],
  [/Gepruefte Werte/g, 'Geprüfte Werte'],
  [/gepruefte Eintraege/g, 'geprüfte Einträge'],
  [/Aggregierte Zaehleinheiten/g, 'Aggregierte Zähleinheiten'],
  [/Zaehleinheiten/g, 'Zähleinheiten'],
  [/Groesster Wert/g, 'Größter Wert'],
  [/nicht verfuegbar/g, 'nicht verfügbar'],
  [/Entzug gleicher Wuerde/g, 'Entzug gleicher Würde'],
  [/Rechtssubjektivitaet/g, 'Rechtssubjektivität'],
  [/ueber Volksbegriff/g, 'über Volksbegriff'],
  [/Funktionaer/g, 'Funktionär'],
  [/Funktionaeren/g, 'Funktionären'],
  [/Funktionaers/g, 'Funktionärs'],
  [/Funktionaersrolle/g, 'Funktionärsrolle'],
  [/Kanaelen/g, 'Kanälen'],
  [/Zurechnungsnaehe/g, 'Zurechnungsnähe'],
  [/voelkisch/g, 'völkisch'],
  [/Fluegel/g, 'Flügel'],
  [/Reichsbuerger/g, 'Reichsbürger'],
  [/rechtskraeftig/g, 'rechtskräftig'],
  [/bestaetigt/g, 'bestätigt'],
  [/Rechtmaessigkeit/g, 'Rechtmäßigkeit'],
  [/Fuehrungsfigur/g, 'Führungsfigur'],
  [/Verfahrensstaende/g, 'Verfahrensstände'],
  [/Mandatstraeger/g, 'Mandatsträger'],
  [/Nachtragsfaelle/g, 'Nachtragsfälle'],
  [/Beweisluecke/g, 'Beweislücke'],
  [/Primaeranker/g, 'Primäranker'],
  [/Primaerquelle/g, 'Primärquelle'],
  [/Primaerquellen/g, 'Primärquellen'],
  [/Beweissicherung wird der Route zum amtlichen, gerichtlichen oder parteieigenen Primäranker ist codiert/g,
    'Beweissicherung ist die Route zum amtlichen, gerichtlichen oder parteieigenen Primäranker codiert'],
  [/Zur Beweissicherung wird der Route zum amtlichen, gerichtlichen oder parteieigenen Primäranker ist codiert/g,
    'Zur Beweissicherung ist die Route zum amtlichen, gerichtlichen oder parteieigenen Primäranker codiert'],
  [/Sekundärbeleg vorhanden, Primärankerroute codiert/g,
    'Sekundärbeleg vorhanden, Primärankerroute codiert - keine Beweislücke'],
  [/Sonder\/nicht beobachtet/g, 'Sonderstatus / Nichtbeobachtung nur dieser Ebene'],
  [/Status nach Correctiv 2026/g, 'Register-/Medienstatus nach Correctiv 2026; amtliche Ebene getrennt führen'],
  [/Quelle ist vorhanden; die Kategorie erklärt keine Beweislücke, sondern verlangt Status-, Ebenen- und Pinpoint-Prüfung/g,
    'Quelle und Ebene sind vorhanden; diese Kategorie verlangt Status-, Ebenen- und Pinpoint-Prüfung und wirkt nicht entlastend'],
  [/Dossierarbeit:/g, 'Forensische Verdrahtung:'],
  [/Gehärtet:/g, 'Bereits beweisfest verdrahtet:'],
  [/Risiko:/g, 'Schwachstelle vor Härtung:'],
  [/Beweisstatus \/ Red-Team/g, 'Beweisfunktion / Prozessgrenze'],
  [/Red-Team\/Primäranker/g, 'Primäranker / Prozessgrenze']
];

function polish(text) {
  let out = text;
  for (const [pattern, replacement] of replacements) out = out.replace(pattern, replacement);
  return out;
}

for (const file of textFiles) {
  let text;
  try {
    text = await fs.readFile(file, 'utf8');
  } catch {
    continue;
  }
  await fs.writeFile(file, polish(text), 'utf8');
}

console.log('Statistik-UI final poliert: Umlaute, Grammatik, Status- und Auditlabels normalisiert.');
