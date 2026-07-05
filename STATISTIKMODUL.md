# Statistikmodul

Das Statistikmodul ist die quantitative Beweislandkarte des Repositories. Der sichtbare Statistik-Tab wird aus `daten/statistik_manifest.json` gerendert. Das Manifest wird aus `daten/findings_art21.jsonl` gebaut; ohne Manifest-Eintrag keine Anzeige.

## Grundprinzipien
- Keine Zahl ohne Quelle.
- Keine Quellenmischung zwischen Kontextdaten, behördlichen Lagezahlen, Gerichtsentscheidungen und journalistischen Recherchen.
- Keine Dateianzahl als inhaltliche Statistik.
- Keine alten Zwischenstaende ohne historischen Marker.

## Aktuelle Startstatistiken
- Gerichtsregister: 239 dokumentierte Faelle.
- Belegzitate: 3.611 konsolidierte Belege.
- Verbotsgruende: 18 konsolidierte Prueffelder.
- BfV 2025: 58.700 rechtsextremistisches Personenpotenzial.
- BKA-PMK 2025: 28.450 PMK-rechts-Faelle als Kontextdaten.
- BfV Sicherheitsbehoerden 2025: 493 Verfahren und Massnahmen.
- Die aktuelle Manifestversion enthaelt zusaetzliche abgeleitete Kennzahlen aus Findings, nicht nur diese Kernwerte.

## Beweislogik
- A/B-Eintraege koennen tragend sein.
- C/D-Eintraege sind nur mit Methodik und Fundstelle nutzbar.
- E/F-Eintraege sind Recherchehinweise und nicht tragende Belege.

## Konsistenz
- `index.html` darf nur Manifest-Eintraege anzeigen.
- `scripts/validate-statistics.mjs` prueft Pflichtfelder, Status und Altlasten.
- Historische Dateien mit 80 Faellen oder 15 Verbotsgruenden bleiben als historische Zwischenstaende markiert.
