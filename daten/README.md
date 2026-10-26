# Datenmodule

Diese Verzeichnisse enthalten die maschinenlesbaren Statistikbausteine des Repositories.

Die CSV-Dateien sind bewusst nach Funktion getrennt:
- `statistik_belege.csv`: zentrale Evidenzmatrix
- `statistik_akteure.csv`: wiederkehrende Akteure und Rollen
- `statistik_narrative.csv`: Themencluster und Narrativdichte
- `statistik_gerichtsfälle.csv`: Registerstruktur und Verfahrensstatus
- `statistik_verfassungsschutz.csv`: amtliche Einstufungen und Lagezahlen
- `statistik_potentialitaet.csv`: Reichweite, Mandate, Mitglieder- und Mobilisierungsindikatoren

Die Daten werden nur dann als belastbar markiert, wenn sie mit Quelle, Fundstelle, Beweisstufe und juristischem Prüffeld vorliegen.

## Qualitäts- und Erweiterungsachsen

Die Datenmodule sollen additiv erweitert werden, ohne bestehende Belegketten zu kürzen. Für jede neue Statistik gilt:

- Jede Zahl braucht eine Quelle oder einen lokalen Repo-Pfad.
- Jede juristisch relevante Zahl braucht eine Statusgrenze: rechtskräftig, nicht rechtskräftig, laufend, Kontext, Nebenbeleg oder Lagebild.
- PMK-/BKA-/BfV-Lagezahlen dürfen nicht als automatische AfD-Tatzurechnung verwendet werden.
- Presse- und Recherchequellen sind als Rechercheanker nutzbar, sollen aber durch amtliche, gerichtliche, parlamentarische oder parteieigene Primäranker ergänzt werden.
- Google- und Archiv-Fallbacks sind Ausfallsicherungen für tote, verschobene oder blockierte Onlinequellen; sie sind nicht höher zu gewichten als die Originalquelle.
- Pinpoints sollen möglichst als Seite, Randnummer, Aktenzeichen, Absatz, Zeitmarke, Screenshot-Hash oder lokale Zeilenfundstelle geführt werden.

Sinnvolle weitere Module wären:

- `statistik_quellenqualität.csv`: Primärquelle, Pressequelle, Archivroute, Google-Fallback, lokaler Snapshot.
- `statistik_pinpoint_reife.csv`: Beleg-ID, Pinpoint-Typ, Reifegrad und noch fehlende Schriftsatzangabe.
- `statistik_statusachsen.csv`: Rechtskraft, Instanz, Eil-/Hauptsache, Freispruch, laufendes Verfahren und Kontextstatus.
- `statistik_akteurskanten.csv`: Person, Funktion, Zeitraum, Parteiebene, Organisation, Ereignis, Quelle und Zurechnungstyp.
- `statistik_fallback_monitor.csv`: problematische externe Links, Ersatzquelle, Google-Suche, Archivlink und lokale Datei.
