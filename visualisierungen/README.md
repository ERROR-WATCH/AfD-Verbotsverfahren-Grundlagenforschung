# Visualisierungen

Hier sollen spaeter die thematisch passenden Grafiken liegen:
- Zeitreihe PMK-rechts,
- Zeitreihe BfV-Lagezahlen,
- Balken Deliktarten im Urteilsregister,
- Heatmap Bundeslaender nach Belegdichte,
- Netzwerkgraph Partei / Vorfeld / Medien / Influencer,
- Sankey Quelle -> Narrativ -> Zielgruppe -> Prüffeld.

Die visuellen Formen folgen der Datenstruktur in `daten/` und nicht umgekehrt.

## Additive Visualisierungsplanung

Die Visualisierungen sollen den vorhandenen Datenbestand erklaeren und keine bestehenden Inhalte ersetzen. Besonders sinnvoll sind:

- **Quellenqualitaets-Donut:** amtlich/gerichtlich/parlamentarisch/partei/presse/recherche/fallback.
- **Pinpoint-Reife-Funnel:** Quelle vorhanden -> lokaler Snapshot -> Pinpoint -> Akteur -> Zurechnung -> Schriftsatzfeld.
- **Gerichtsstatus-Matrix:** rechtskraeftig, nicht rechtskraeftig, laufend, Freispruch, Eilrechtsschutz, Kontextfall.
- **Gewalt-/Terror-/Staatsgefaehrdungsband:** direkte AfD-Kanten, indirekte Kontexturteile, Nebenbelege und Lagebild getrennt.
- **Bund-Laender-Statuskarte:** Bundes-AfD, Landesverbaende, JA/GD und Vorfeldachsen getrennt nach Quelle und Zeitpunkt.
- **Fallback-Monitor:** tote Direktlinks, ersetzte Direktlinks, Google-Suchfallbacks, lokale Snapshots und Archivquellen.
- **Akteurs-/Vorfeld-Netzwerk:** nur mit dokumentierter Quelle, Datum, Funktion, Organisation und Zurechnungstyp.

Alle Grafiken muessen dieselben Zaehlregeln wie `daten/README.md` verwenden. Eine Visualisierung darf keine haertere Aussage erzeugen als der zugrunde liegende Datensatz.
