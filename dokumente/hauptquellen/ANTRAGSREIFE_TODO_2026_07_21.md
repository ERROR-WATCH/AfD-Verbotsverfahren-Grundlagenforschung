# Antragsreife-Todo 2026-07-21

Diese Datei sammelt die Punkte, die nach dem Vollscan noch als konkrete Todo-Liste zu führen sind. Sie ist bewusst aus der Haupt-README ausgelagert, damit die README nicht wie eine plakative Mängelliste wirkt. Das Repository bleibt Forschungs-, Quellen- und Beleggrundlage; die eigentliche Verfassungsorganschrift wird dadurch nicht ersetzt.

## Ziel

Bis auf die formale Antragsschrift sollen alle technisch im Repository vorbereitbaren Punkte als Daten-, Quellen-, Pinpoint-, Validierungs- oder Navigationsaufgabe geführt werden.

## Todo-Liste nach Vollscan

| Bereich | Status | Nächster sauberer Schritt |
| --- | --- | --- |
| README-/Index-Konsolidierung | Erledigt im Repository. | Künftige Erweiterungen weiter in Todo-, Audit- oder Indexdateien führen, nicht als plakative Haupt-README-Mängelliste. |
| Formaler Antrag | Ausgenommen: Das Repo kann Antragstellerbeschluss, Prozessvertretung, Unterschriften und formale Beweisanträge nicht selbst ersetzen. | Erst außerhalb des Repository-Auftrags in eine echte Verfassungsorganschrift überführen. |
| Pinpoint-Endarbeit | Erledigt im Repository bis auf spätere Schriftsatz-Gegenlese. | Bei Antragserstellung Top-Anlagen gegen Originale kontrollieren und dann Seite, Randnummer, Aktenzeichen, Datum, Hash/Archiv und Gegenlese in die förmliche Anlage übernehmen. |
| Vorfeld-Granularität | Erledigt im Repository. | Weitere Einzelkanten nur additiv ergänzen, wenn neue Primäranker hinzukommen. |
| Chronikcluster | Erledigt als Indexroute. | Chroniken nicht als Endbeweis zitieren; bei Antragserstellung die danebenstehenden Primäranker verwenden. |
| Zitatkorpus | Erledigt im Repository bis auf spätere Schriftsatz-Auswahl. | Für die Antragsschrift aus Top-300, Dossierklasse und Akteursregister auswählen und gegen Originalkontext gegenlesen. |
| Pages-Navigation | Erledigt im Repository. | Nach jeder Datenänderung Build, Browser-Audit und Pages-Linkcheck erneut laufen lassen. |
| Build-Qualität | Erledigt im Repository. | Neue Generatoren weiterhin in `build`, `validate:statistics` oder `validate:pages` einhängen. |
| Parlamentsaktivität Bund/Länder | Grundstruktur und amtliche Portalroute angelegt; Vollingestion ist ein fortlaufender Datenprozess. | AfD-Anträge, Gesetzentwürfe, Große/Kleine Anfragen und belastbar zuordenbare Abstimmungen aus DIP und den Dokumentationssystemen aller 16 Landtage mit Abdeckungsstand erfassen. |
| Schutzbedürftige Informationsbegehren | Methodik und erste Primäranker angelegt. | KRITIS, Militär, Sozialleistungen und Behinderung einzeln nach Detailgrad, Schutzinteresse, Regierungsantwort, Kritik, Gegenposition und Weiterverwendung codieren. |
| Abstimmungsverhalten | Amtliche Bundesroute registriert; Länderquellen registriert. | Namentliche Daten übernehmen; nicht namentliche Fraktionsvoten nur bei eindeutigem Plenarprotokoll erfassen und fehlende Individualdaten nicht schätzen. |
| Antrags- und Anfragevolumen | Vergleichsmethodik festgelegt. | Absolute Zahl, Anteil an allen Vorgängen, Vergleichsfraktionen, Zeitraum, Suchbegriffe und Dubletten offenlegen; „Antragsflut“ nicht ohne Bezugsgröße als Befund verwenden. |

## Abschlussartefakt

Der aktuelle Abschlussstand liegt in `dokumente/hauptquellen/ANTRAGSREIFE_TODO_ABSCHLUSS_2026_07_22.md` und `daten/antragsreife_todo_abschluss_2026.json`.

## Umsetzungspfad

- README und Portal behalten nur knappe Verweise auf diese Todo-Liste.
- Offene Punkte werden nicht als Beweislücken formuliert, wenn Quelle, Fall, Status oder Route bereits vorhanden sind.
- Für jedes Todo soll ein Zielartefakt existieren: Datenzeile, Quellenanker, lokaler Snapshot, Pinpoint, Statistikobjekt, Validierungsregel oder Portal-Verweis.
- Das Parlamentsregister trennt parlamentarisch legitime Kontrolle von einer möglichen Sicherheitsproblematik. Weder Anfragehäufigkeit noch ein sensibles Thema belegen für sich allein Informationsmissbrauch, Spionageabsicht oder Weitergabe.
- Für sensible Informationsbegehren sind mindestens Originaldrucksache, Regierungsantwort, konkrete Fragen/Pinpoints, Schutzinteresse, Offenlegungsgrad und gegebenenfalls eine belastbare Kritik- und Gegenquelle zu dokumentieren.
- „Alle Anträge/Anfragen“ bezeichnet nur den durch die jeweiligen Parlamentsportale reproduzierbar abgedeckten Zeitraum. Abdeckung, Datenlücken, Schnittstellenstand und letzter Abruf werden pro Parlament ausgewiesen.
- `npm run build` bleibt der verbindliche Sammeltest für Statistik-Build, Pages-Linkcheck und Statistikvalidierung.
- Die formale Antragsschrift selbst bleibt außerhalb des Repository-Auftrags und muss von antragsberechtigten Stellen beziehungsweise Prozessvertretung erstellt werden.
