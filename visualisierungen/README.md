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

Die Visualisierungen sollen den vorhandenen Datenbestand erklären und keine bestehenden Inhalte ersetzen. Besonders sinnvoll sind:

- **Quellenqualitäts-Donut:** amtlich/gerichtlich/parlamentarisch/partei/presse/recherche/fallback.
- **Pinpoint-Reife-Funnel:** Quelle vorhanden -> lokaler Snapshot -> Pinpoint -> Akteur -> Zurechnung -> Schriftsatzfeld.
- **Gerichtsstatus-Matrix:** rechtskräftig, nicht rechtskräftig, laufend, Freispruch, Eilrechtsschutz, Kontextfall.
- **Gewalt-/Terror-/Staatsgefährdungsband:** direkte AfD-Kanten, indirekte Kontexturteile, Nebenbelege und Lagebild getrennt.
- **Bund-Länder-Statuskarte:** Bundes-AfD, Landesverbände, JA/GD und Vorfeldachsen getrennt nach Quelle und Zeitpunkt.
- **Fallback-Monitor:** tote Direktlinks, ersetzte Direktlinks, Google-Suchfallbacks, lokale Snapshots und Archivquellen.
- **Akteurs-/Vorfeld-Netzwerk:** nur mit dokumentierter Quelle, Datum, Funktion, Organisation und Zurechnungstyp.

Alle Grafiken müssen dieselben Zählregeln wie `daten/README.md` verwenden. Eine Visualisierung darf keine härtere Aussage erzeugen als der zugrunde liegende Datensatz.
