# Beweislast-Audit Statistik-Tab 2026

Stand: 2026-07-09

Dieser Vermerk dokumentiert, was im Statistik-Tab noch verwässernd wirken kann und was daran gehärtet wurde. Maßstab ist nicht maximale Zuspitzung, sondern maximale prozessuale Belastbarkeit: Quelle, Pinpoint, Akteur, Zurechnung, Art.-21-Prüffeld, Beweisstufe und Verfahrensstatus müssen getrennt bleiben.

## Befund

| ID | Achse | Risiko | Erledigte Härtung | Verbleibende Dossierarbeit | Status |
|---|---|---|---|---|---|
| AUDIT-001 | Schule/Kultur/Meldeportale | Vorher waren Findings sichtbar, Source-IDs aber nicht konsequent direkt an der Matrixzeile. | source_ids, source_paths, Akteure, Legalstatus und Pinpoints aus FIND-CG-000020 bis FIND-CG-000024 an daten/schule_kultur_meldeportale_matrix_2026.jsonl gehängt. | Bei Kulturkampf-Beleg parteieigene Kampagnen-/Programm-/Social-Media-Primäranker für A-Aufwertung sichern. | BELEGT_UND_VERDRAHTET |
| AUDIT-002 | Vorfeld/JA/GD/IB/IfS/Compact | Sammelkanten verwässern Beweislast, weil Person, Ereignis, Datum und Quelle nicht je Kante getrennt erscheinen. | source_ids/source_paths an alle Vorfeldkanten gehängt; Sicherheits- und Kulturkante über konkrete Findings verdrahtet. | Sammelkanten in Einzelkanten nach Person, Organisation, Veranstaltung, Medienbeitrag, Kampagne und Zeitraum zerlegen. | BELEGT_UND_VERDRAHTET |
| AUDIT-003 | Sicherheits-/Umsturzkomplexe | Gefahr der Überzeichnung, wenn Kontextmilieu, laufendes Verfahren und direkte AfD-Kante vermischt werden. | FIND-CG-000012 bis 000019 sowie 000025 als Source-ID-Sets an EDGE-SICHERHEIT-UMSTURZ-001 gebunden. | Rechtskraft/Verfahrensstand je Fall weiterführen; laufend bleibt STATUS_BEZOGEN_GETRENNT. | STATUS_BEZOGEN_GETRENNT |
| AUDIT-004 | Zitatkorpus | 3.611 Findings belegen Dichte, aber 2.692 Belegpfadnormalisierungen sind noch nicht als Akteursregister-Endzustand zu lesen. | Zitatstatistik und Gesamtmatrix weisen direkte Zurechnung, Belegpfadnormalisierung, amtliche/gerichtliche Anker und enge Dossierklasse getrennt aus. | Akteursregister und Zielgruppen-/Rechtsgutklassifikation für die 2.692 normalisierten Belegpfade ausbauen. | BELEGT_UND_VERDRAHTET |
| AUDIT-005 | Status Bund/Länder/JA/GD | Pauschalisierung gegen beide Richtungen: weder Bundes-AfD rechtskräftig gesichert noch Landes-Nichtbeobachtung als Entlastung. | Statusmatrix trennt Bund, Länder, JA/GD, Vorfeld, Eilentscheidung, Hauptsache und Rechtskraft. | Medien-/Registerstatus Berlin/MV und amtliche Landesstatusachsen weiter getrennt dokumentieren. | STATUSACHSEN_TRENNEN |

## Ernüchternde Beweisregel

- Starke Beweislage ersetzt keine Pinpointpflicht.
- Ein Recherchebeleg kann tragend vorbereiten, muss für A-Niveau aber nach Möglichkeit mit amtlicher, gerichtlicher oder parteieigener Primärquelle verbunden werden.
- Laufende Verfahren, Freisprüche, Berufungen und Eilverfahren werden nicht entfernt, aber gesondert markiert.
- PMK/BKA und allgemeines Gewaltmilieu sind Potentialitäts- und Lagebildmaterial; AfD-Zurechnung erfolgt nur über Fall, Akteur, Organisation oder dokumentierte Kante.
- Nichtbeobachtung einzelner Landesebenen entlastet nicht automatisch Bund, JA/GD oder Vorfeld; sie ist eine eigene Statusachse.

## Nachprüfung 2026-07-09: zuvor verwässerte Aggregate

### AUDIT-006 - Anti-LGBTQ / Queerfeindlichkeit

Vorheriger Schwachpunkt: als präzisiertes Forschungsfeld geführt, obwohl im Repo konkrete Zitat-, BfV- und LfV-Anker vorhanden sind.

Härtung: NAR-009 und FIND-92a8707762 führen jetzt `BELEGT_UND_VERDRAHTET` mit Zitatkorpus-Anker, BfV-Verfassungsschutzbericht 2024 und LfV Rheinland-Pfalz 2024. Die Restarbeit ist Zielgruppen-/Akteursnormalisierung und Seitenpinpoint, keine Beweislücke.

### AUDIT-007 - Wissenschaftsfeindlichkeit / Corona- und Klimanarrative

Vorheriger Schwachpunkt: als präzisiertes Forschungsfeld geführt, obwohl FIND-11568581b8, FIND-478bd2ed90 und GFF-Passagen zu Corona-/Klimanarrativen vorhanden sind.

Härtung: NAR-010 und FIND-1f5a863580 führen jetzt konkrete Quellenachsen. Die Restarbeit besteht in der Trennung legitimer Sachkritik von verschwörungsideologischer Systemdelegitimierung.

### AUDIT-008 - Wikipedia-Vorfallchronik / 13 Cluster

Vorheriger Schwachpunkt: 13 Cluster wurden sprachlich als präzisierte eigene Vorfallsbelege geführt. Das war zu weich und missverständlich.

Härtung: Status auf `BELEGT_UND_VERDRAHTET` umgestellt. Das Abgleichsdossier ist ein vorhandener Sekundärbeleg; die Restarbeit ist fallweise Primäranker-Verdrahtung.

### AUDIT-009 - Verfassungsschutz-Abschaffung / Chrupalla-Screenshot

Vorheriger Schwachpunkt: VS-011 wirkte wegen Screenshot-Prüfvermerk wie ein verdrahteter Einzelbeleg.

Härtung: Die Statistikroute bindet jetzt FIND-2ffb8f2dca und SRC-AFD-VERBOT-DE-2025-07-28-PROOF-00327-2ffb8f2dca als direkten Zitatkorpus-Anker ein. Der Screenshot bleibt nur als zusätzliche Originalanker-Aufgabe markiert.

## Nachschärfung 2026-07-09: Restverdrahtung statt Beweislücke

Die erneute Prüfung hat keine neue unbelegte Hauptachse ergeben, sondern sechs Stellen, an denen vorhandene Belege noch enger sortiert werden müssen. Diese Punkte werden im Statistik-Tab als Restverdrahtung geführt, nicht als Entlastung und nicht als Beweismangel.

| ID | Achse | Status | Warum keine Beweislücke | Nächste Beweishandlung |
|---|---|---|---|---|
| REST-001 | 18 Verbotsgruende / Schriftsatz-Toplisten | BELEGT_UND_VERDRAHTET | Quellen und lokale Pfade sind zugeordnet; Restarbeit ist Dossierpriorisierung und Pinpoint-Gegenlese. | Pro VG zehn staerkste Quellen mit Seiten/Rn., Original-URL/Archiv, Akteur, Ebene, Zurechnung, Gegenargument und Prozessrisiko exportieren. |
| REST-002 | Zitatkorpus / Akteursregister | BELEGT_UND_VERDRAHTET | Die Zitate und Belegpfade existieren lokal; ist als Pinpoint-/Statusfeld geführt nicht der Beleg, sondern die feinkoernige Normalisierung fuer Akteur, Zielgruppe, Art.-21-Feld und Zurechnung. | Actor registry mit Person/Funktion/Datum/Kanal/Organisation und Zielgruppenklassifikation generieren. |
| REST-003 | Vorfeldkanten / JA-GD / IB / IfS / Compact / Ein Prozent | BELEGT_UND_VERDRAHTET | Source-IDs, lokale Pfade und Findings sind an den Kanten vorhanden; Restarbeit ist die Aufspaltung in Einzelereignisse. | Jede Kante in Person, Organisation, Veranstaltung, Medienbeitrag, Kampagne, Finanzierung, Datum, Quelle, Beweisstufe und Zurechnungstyp zerlegen. |
| REST-004 | Status Bund / Laender / JA-GD / Vorfeld | STATUSACHSEN_TRENNEN | Bund, Laender, JA/GD, Vorfeld, Gerichte und Verfassungsschutzberichte sind getrennt vorhanden; Restarbeit ist normierte Statussprache pro Ebene und Zeitpunkt. | Berlin/MV und alle Sonderlagen getrennt als amtlich, gerichtlich, medial/registerbasiert, Eilentscheidung, Hauptsache oder Rechtskraft markieren. |
| REST-005 | Schule / Kulturkampf / Meldeportale | BELEGT_UND_VERDRAHTET | Recherche- und BfV-Anker sind vorhanden; der Primaeranker erhoeht Beweisqualitaet, ersetzt aber keine leere Beweislage. | Offizielle AfD-/Fraktions-/Kampagnenseiten, Social-Media-Archive und Programmstellen mit Screenshot/Archivdatum an KULTUR-001 haengen. |
| REST-006 | Sicherheits-/Umsturz- und Gerichtsfaelle | STATUS_BEZOGEN_GETRENNT | Fall- und Quellenanker liegen vor; gerichtsfeste Darstellung verlangt Statusnormalisierung statt pauschaler Belastungs- oder Entlastungsformel. | Je Fall Fall-ID, Akteur, Parteistatus, Deliktcluster, Gericht, Instanz, Verfahrensstand, Rechtskraft, Ausgang und Art.-21-Beweisfunktion maschinenlesbar normalisieren. |

### Konkrete Reparaturen

- Die 18er-Beweismatrix verwendet nicht mehr das Feld `missing_primary_sources`; maßgeblich sind jetzt `beweislast_status`, `court_ready_route` und `court_file_remaining`.
- `FIND-9109942dbb` ist nicht mehr als Cluster ohne sauberen Repo-Fall formuliert, sondern als Sekundärchronik mit Primärankerauftrag.
- Die Statistikoberfläche zeigt AUDIT-010 bis AUDIT-014, damit Matrixsemantik, Restverdrahtung, Chronikcluster, Gerichtsstatus und Statusachsen sichtbar sind.

## Quellen-/Codierfunnel: aktive Beweissicherung

Dieser Funnel ist keine Mängelliste. Er benennt die Stellen, an denen vorhandene Beweise für eine gerichtsfeste Art.-21-Beweisführung maximal belastbar sortiert werden müssen.

| Achse | Status | Priorität | Beweissicherungsauftrag |
|---|---|---|---|
| Amtliche Statusquellen Länder | STATUSACHSEN_TRENNEN | A-Priorität | BB, NI, SN, ST, TH, BY und HE mit Volltext/PM, Eilrechtsschutz, Hauptsache und Rechtskraft getrennt sichern. |
| Vorfeld-Kanten | BELEGT_UND_VERDRAHTET | A-Priorität | IB, IfS, Ein Prozent, Compact, Antaios, Active Clubs und JA/GD in Einzelkanten mit Datum, Akteur, Funktion, Quelle und Zurechnungstyp zerlegen. |
| Sicherheitsverfahren | STATUS_BEZOGEN_GETRENNT | A-Priorität | Jian G./Krah, Bystron, Malsack-Winkemann, Kurt H. mit GBA/OLG/VG, Rechtskraft, Parteifunktion, Zeitraum und Parteireaktion codieren. |
| Schulfrieden / Bildungsraum | BELEGT_UND_VERDRAHTET | B-Priorität | Meldeportale, Lehrer-Pranger, OVG-Schülerpraktikum, Landesprogramme und Kampagnen als Einschüchterungs-/Demokratieachse ausbauen. |
| Originalkanäle / Parteiquellen | BELEGT_UND_VERDRAHTET | A-Priorität | Programme, Beschlüsse, Reden, Social-Media-Originale, Videos, Screenshots und Archive als stärkere Primäranker vor Presseanker setzen. |
| Zitat-Zurechnung | BELEGT_UND_VERDRAHTET | A-Priorität | 2.692 belegpfadbasierte Findings in Akteur, Ebene, Kanal, Zielgruppe, Rechtsgut, Kontext und Quellenklasse normalisieren. |
| Rechtskraft / Fairness | STATUS_BEZOGEN_GETRENNT | A-Priorität | Freispruch, laufend, Berufung, Ermittlungen, Eilrechtsschutz, Hauptsache und rechtskräftige Verurteilung getrennt halten. |
| Quellenqualität / Gewichtung | BELEGT_UND_VERDRAHTET | Querschnitt | Gericht, amtlich, Parteiquelle, Gutachten, parlamentarisch, Presse/Recherche, Zitat/Proof und Kopie/OCR in jedem Diagramm unterscheidbar machen. |
