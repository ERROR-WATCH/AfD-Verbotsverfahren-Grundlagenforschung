# Statistik-Methodik

Stand: 2026-07-05

Diese Datei beschreibt die Kette:

`Quelle -> source_inventory.jsonl -> findings_art21.jsonl -> statistik_manifest.json -> index.html`

## Grundsatz
Keine Statistik ohne Quelle, Fundstelle, Methodik, Beweisstufe und Status.

## Beweisstufen
- A: Gericht, Behoerde, Parlament, amtliches Original, Original-Parteidokument
- B: rechtswissenschaftliches Gutachten, wissenschaftliche Studie, methodisch belastbarer Fachbericht, validierter interner Aggregatdatensatz
- C: journalistische Recherche mit Primärbelegen
- D: NGO-/Monitoring-Bericht mit nachvollziehbarer Methodik
- E: Social-Media, Screenshot, Video, Einzelhinweis, Leak ohne Kettensicherung
- F: ungeprueft, widerspruechlich, veraltet oder nur Navigationshilfe

## Inventar
`daten/source_inventory.jsonl` enthaelt jede relevante Quelle des Repositories und ergaenzende externe Quellenreferenzen.

## Findings
`daten/findings_art21.jsonl` enthaelt Einzelfunde und aggregierte Befunde.

## Statistik
`daten/statistik_manifest.json` enthaelt nur Werte, die aus Findings abgeleitet sind.

## Trennung
- Quote-Findings sind keine Gerichtsurteile.
- Aggregierte CSV-Befunde sind keine Primärquellen.
- PMK/BfV-Kontextdaten sind keine automatische AfD-Zurechnung.
- Historische Zwischenstaende bleiben nur als Kontext ausserhalb der aktiven Statistik.

## Status
- geprueft
- ungeprueft
- veraltet
- widerspruechlich
- offen

## Konsistenzpruefung
Vor jeder neuen Auswertung:
1. Stimmen Quelle und source_id zusammen?
2. Ist die Fundstelle nachvollziehbar?
3. Ist die Beweisstufe korrekt?
4. Sind Rechtsstatus und Zurechnung getrennt?
5. Wurde nichts aus Dateianzahlen erfunden?
