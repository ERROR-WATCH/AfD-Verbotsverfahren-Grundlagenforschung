# Statistikmodul

Das Statistikmodul ist die quantitative Beweislandkarte des Repositories. Die sichtbare Statistik im Portal wird ausschliesslich aus `daten/statistik_manifest.json` gerendert. Das Manifest wird aus `daten/findings_art21.jsonl` abgeleitet; ohne Manifest-Eintrag keine Anzeige.

## Aktiver Stand
- 258 validierte Manifest-Statistikobjekte.
- Kernwerte: 262 dokumentierte Gerichtsfaelle, 18 konsolidierte Verbotsgruende, 3.722 Belegzitate.
- Weitere Manifestwerte: aggregierte Befunde, Beweisstufe-A-Verteilung und acht thematische Cluster.

## Grundprinzipien
- Keine Zahl ohne Quelle.
- Keine Dateianzahl als inhaltliche Statistik.
- Keine Vermischung von Primärquelle, Sekundärquelle, Kontextdaten und Aggregat.
- Keine alten Zwischenstaende ohne historischen Marker.
- PMK- und BfV-Lagezahlen bleiben Kontextdaten, sofern sie nicht separat als validierte Manifest-Statistik gefuehrt werden.

## Beweislogik
- A/B-Eintraege koennen tragend sein.
- C/D-Eintraege sind nur mit Methodik und Fundstelle nutzbar.
- E/F-Eintraege sind Recherchehinweise und nicht tragende Belege.

## Konsistenz
- `index.html` rendert nur Manifest-Eintraege als sichtbare Statistik.
- Historische oder legacy Statistikbloecke bleiben im Code nur, wenn sie technisch ausgeblendet sind.
- `scripts/validate-statistics.mjs` prueft Pflichtfelder, Status und Altlasten.

