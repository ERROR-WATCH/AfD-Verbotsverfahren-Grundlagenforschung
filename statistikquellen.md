# Statistikquellen und Methodik
Stand: 05.07.2026

Diese Datei ist die Methodik- und Konsistenzdatei fuer das Statistikmodul. Die eigentlichen angezeigten Werte stehen in `daten/statistik_manifest.json`. `index.html` rendert nur noch Eintraege aus diesem Manifest.

## Datenstand
- Aktueller Datenstand ist der konsolidierte Portalstand vom 05.07.2026.
- Historische Zwischenstaende bleiben im Repo nur als historischer Kontext erhalten und duerfen nicht als aktuelle Statistik verwendet werden.
- Der aktive Statistikbestand ist auf wenige, belegte Startstatistiken begrenzt.

## Ausgewertete Dateien
- `daten/statistik_manifest.json`
- `index.html`
- `README.md`
- `PUBLIC_EXTENDED_SOURCES.md`
- `STATISTIKMODUL.md`
- `dokumente/vfs_berichte_bundeslaender/2026-06-30-verfassungsschutzbericht-2025.pdf`
- `dokumente/hauptquellen/BKA_Fallzahlen_PMK_2025.md`
- `dokumente/vfs_rechtsextremismus/BfV_Lagebericht_Rechtsextremisten_in_Sicherheitsbehoerden_2025.pdf`

## Ausgeschlossene Dateien
- `skripte/afd-verbot-deepresearch-ausgangspunkt.txt` und verwandte Alt-Exporte, soweit sie nur historische Zwischenstaende dokumentieren.
- Ungepruefte technische Dateizaehlungen.
- Alle Werte, die nur aus Dateianzahlen oder OCR-Rohzaehlungen abgeleitet waeren, wenn ein konsolidierter Registerwert existiert.

## Definitionsregeln
- `Gerichtsregister` meint den konsolidierten Fallbestand im Portal, nicht nur eine einzelne Urteilsart.
- `Verbotsgruende` meint die im Repo konsistent gefuehrten juristischen Prueffelder.
- `Belegzitate` meint den konsolidierten Zitatbestand des Portals.
- `BfV/BKA/PMK` sind Kontext- und Lagezahlen. Sie sind nicht automatisch AfD-Zurechnungsdaten.
- Rechtsstatus wird nicht vermischt: rechtskraeftig, Strafbefehl, laufend, Ermittlungsverfahren, verwaltungsgerichtlich und zivilrechtlich bleiben getrennt.

## Beweisstärke-Schema
- A: amtlich, gerichtlich, parlamentarisch oder behördlich
- B: wissenschaftlich oder parlamentarisch belastbar / konsolidiertes Repo-Register mit klarer Methodik
- C: journalistisch gut belegt
- D: plausibel, aber nachpruefungsbeduerftig
- E: unsicher oder nur Hinweis
- F: ungeprueft, widerspruechlich oder veraltet

## Umgang mit alten Zwischenstaenden
- Fruehere Zwischenstaende bleiben als historischer Kontext nur ausserhalb des aktiven Statistikpfads erhalten.
- Solche Werte duerfen nur mit dem Marker `veraltet / historischer Zwischenstand / nicht aktueller Datenbestand` stehen bleiben.
- In der aktiven Statistikflaeche werden sie nicht angezeigt.

## Umgang mit laufenden Verfahren
- Laufende Verfahren werden nicht wie rechtskraeftige Urteile behandelt.
- Ermittlungen, Strafbefehle, Beschluesse, Urteile und Einstellungen bleiben getrennte Kategorien.
- Die Quelle bestimmt den Rechtsstatus, nicht die politische Bewertung.

## Umgang mit Social-Media-Belegen
- Social-Media-Belege sind keine Gerichtsentscheidungen.
- Sie koennen Rechercheinweise oder Indikatoren sein, aber keine Feststellungen.
- Sie erhalten nur dann eine hohe Beweisstufe, wenn die Primärquelle selbst amtlich oder gerichtsfest ist.

## Umgang mit PMK-Kontextdaten
- PMK-rechts und Hasskriminalitaet sind Kontextdaten.
- Sie koennen Mobilisierung und Deliktentwicklung illustrieren.
- Sie begruenden keine automatische AfD-Zurechnung.

## Konsistenzprüfung
- Jede Statistik braucht ID, Titel, Wert, Einheit, Quelle, Quellenart, Fundstelle oder Repo-Pfad, Methodik, juristische Relevanz, Prüffeld Art. 21 GG, Beweisstärke und Status.
- `geprueft` ist nur erlaubt, wenn Quelle und Methodik vorhanden sind.
- Aktuelle Werte muessen mit dem Manifest uebereinstimmen.
- Alte Zwischenstaende muessen als historisch markiert sein.
- Dateianzahlen duerfen nur als technische Repo-Statistik erscheinen und nicht im Hauptdashboard als inhaltliche Aussage.

## Offene Datenlücken
- Unterteilungen nach Rechtsstatus werden nur angezeigt, wenn sie im Register eindeutig und konsistent belegt sind.
- Digitale Reichweiten- und Plattformdaten bleiben bis zur Primärquellenanbindung ungeprüft.
- Potenzial-, Regional- und Themenanalysen werden erst nach Manifest-Erweiterung freigeschaltet.

## Aktuelle Startstatistiken
| ID | Titel | Wert | Einheit | Quelle | Quellenart | Status |
|---|---|---:|---|---|---|---|
| STAT-URTEILE-GESAMT-001 | Gerichtsregister: dokumentierte Fälle | 239 | Fälle | `index.html` / `README.md` | Repo-Register / Methodik | geprueft |
| STAT-ZITATE-GESAMT-001 | Belegzitate: konsolidierter Bestand | 3611 | Zitate | `index.html` / `README.md` | Repo-Register / Methodik | geprueft |
| STAT-VB-GRUNDE-GESAMT-001 | Verbotsgruende: konsolidierte Hauptzahl | 18 | Verbotsgruende | `README.md` / `index.html` | Repo-Register / Methodik | geprueft |
| STAT-BFV-2025-PERSONEN-001 | BfV 2025: Rechtsextremistisches Personenpotenzial | 58700 | Personen | `dokumente/vfs_berichte_bundeslaender/2026-06-30-verfassungsschutzbericht-2025.pdf` | Amtlicher BfV-Bericht | geprueft |
| STAT-BKA-PMK-2025-001 | BKA-PMK 2025: PMK-rechts | 28450 | Faelle | `dokumente/hauptquellen/BKA_Fallzahlen_PMK_2025.md` | Amtliche BKA-Statistik | geprueft |
| STAT-SICHERHEITSBEHOERDEN-2025-001 | Verfassungstreue-Verfahren 2025 | 493 | Verfahren und Massnahmen | `dokumente/vfs_rechtsextremismus/BfV_Lagebericht_Rechtsextremisten_in_Sicherheitsbehoerden_2025.pdf` | Amtlicher BfV-Lagebericht | geprueft |
