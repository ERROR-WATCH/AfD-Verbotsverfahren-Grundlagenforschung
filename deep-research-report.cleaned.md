# Deep-Research-Report – bereinigte Release-Fassung

> Hinweis: Diese Release-Fassung bezieht sich auf den geprüften lokalen ZIP-/Portalstand. Das öffentliche GitHub-Repository kann weiterhin als archiviert/read-only angezeigt werden; massgeblich fuer diese Release-Fassung ist der geprüfte lokale ZIP-/Portalstand.

Status: bereinigte Release-Fassung / gegen aktuellen ZIP-Stand geprüft / für Release-Tab geeignet

## 1. Kurzfazit

Der lokale Release-/ZIP-Stand `/home/error/AfD-Verbotsverfahren-Grundlagenforschung-cleaned-371d883.zip` ist als aktiver, bereinigter Archiv- und Auswertungsstand zu behandeln. Das öffentliche GitHub-Repository kann weiterhin als archiviert/read-only angezeigt werden; massgeblich fuer diese Release-Fassung ist der geprüfte lokale ZIP-/Portalstand.

Die Beweisarchitektur ist für eine verbotsorientierte Vorarbeit substantiell: Das Repository trennt Quellen, Fundstellen, Akteure, Zurechnung, Art.-21-Prüffelder, Beweisgrad, Statistikmanifest und Visualisierung. Es ersetzt keinen förmlichen Antrag eines antragsberechtigten Verfassungsorgans, liefert aber eine breite und nachprüfbare Grundlage für dessen Anlagen-, Statistik- und Belegstruktur.

Für den Release gilt: Maßgeblich ist diese bereinigte Fassung.

## 2. Aktueller Datenstand

Die folgenden Kennzahlen sind aus dem aktuellen Repository-/ZIP-Stand und den geprüften Statistik-/README-Dateien übernommen. Maßgeblich sind die validierten Release-Zahlen dieses Stands.

| Bereich | Aktueller Stand | Beleg im Release-Stand | Einordnung |
|---|---:|---|---|
| Gerichtsregister / Gerichtsentscheidungen / Urteilsbelege | 262 | `README.md`, `STATISTIKMODUL.md`, `statistikquellen.md`, `PUBLIC_SOURCES.md` bis Quelle 262 | Registerzahl; nicht gleichzusetzen mit 262 rechtskräftigen Verurteilungen. |
| Juristische Verbotsgründe | 18 | `README.md`, `STATISTIKMODUL.md`, `daten/verbotsgruende_18_beweismatrix.jsonl`, `daten/vg_source_match_audit_2026.jsonl` | Konsolidierte Art.-21-Beweisachsen. |
| Belegzitate / Proof-Findings | 3.722 | README.md, STATISTIKMODUL.md, STATISTIK_TAB_INHALTLICHE_VISUALISIERUNG.md, statistikquellen.md | Aktueller lokaler Release-Korpus. Die Live-Seite afd-verbot.de/beweise weist separat einen Online-Stand von 4.036 Beweisen aus; dieser Online-Stand ist als spätere Source-Erweiterung zu behandeln, nicht als bereits vollständig lokaler Proof-Korpus. |
| Dokumente | über 1.400 | `README.md` | Dokumentenbasis des Portals; keine Aussage, dass jeder Einzelbeleg dieselbe Beweisqualität hat. |
| Statistikmanifest | 261 Objekte | `daten/statistik_manifest.json` | Geprüfte Statistikobjekte mit Quelle, Methode, Rechtsrelevanz und Status. |
| Quelleninventar | 10.741 Quellen | `daten/statistik_manifest.json`, `daten/source_inventory.jsonl` | Provenienz- und Quellenbasis. |
| Primärquellen | 5.586 | `daten/statistik_manifest.json`, `daten/source_inventory.jsonl` | Gerichtliche, amtliche, parlamentarische, parteieigene oder originalnahe Belege. |
| Art.-21-Findings | 3.868 | `daten/statistik_manifest.json`, `daten/findings_art21.jsonl` | Strukturierte Befunde; keine automatische Subsumtion jedes Einzelfindings. |
| Validierung | Fatal 0 / Warnings 0 | `reports/validation-report.md`, `reports/validation-report.json` | Aktuelle technische Validierung ohne gemeldete Fehler. |
| Beweislast-Audit | 17 Auditachsen | `daten/beweislast_audit_2026.jsonl` | Rest- und Statusfragen werden als Auditachsen geführt, nicht als ungeklärte Beweisleere. |
| Beweisrouten-Audit | 10 Routen | `daten/beweisrouten_audit_2026.jsonl` | Lokale und Online-Primär-/Sekundärrouten sind normalisiert. |
| Topzitat-Paket | 300 Einträge | `daten/antragsreife_top300_zitatpaket_2026.jsonl` | Dossierfähige Priorisierung für spätere Anlagenbildung. |
| Enge Topklasse | 40 Einträge | `daten/topzitat_dossierklasse_2026.jsonl` | Auswahl mit hoher Beweisnähe; dient der Verdichtung, nicht der Begrenzung des Gesamtkorpus. |
| Schriftsatz-Export | 144 Einträge | `daten/schriftsatz_topzitate_export_2026.jsonl` | Vorbereitete Ausspielung für Schriftsatz-/Anlagenlogik. |

## 3. Beweisarchitektur

Der aktuelle Stand folgt einer gerichtsfesten Kette:

`Quelle -> Fundstelle -> Akteur -> AfD-Bezug -> Zurechnung -> Art.-21-Prüffeld -> Beweisgrad -> Statistik/Visualisierung`

Diese Kette ist in mehreren Dateigruppen umgesetzt:

| Funktion | Dateien | Beweiswert |
|---|---|---|
| Quellen- und Provenienzregister | `daten/source_inventory.jsonl`, `full-sources.md`, `ORIGINAL_SOURCES.md`, `PUBLIC_SOURCES.md`, `PUBLIC_EXTENDED_SOURCES.md` | Nachweis der Herkunft, lokalen Archivkopie, Online-Route und Quellenklasse. |
| Art.-21-Findings | 3.868 | Verknüpft Aussage, Akteur, Zielgruppe, Rechtsgut, Quelle und Zurechnung. |
| Verbotsgründe | `daten/verbotsgruende_18_beweismatrix.jsonl`, `daten/vg_source_match_audit_2026.jsonl` | Ordnet Quellen und Findings den 18 juristischen Verbotsachsen zu. |
| Statistikmanifest | `daten/statistik_manifest.json` | Hält Statistikwerte, Methode, Grenzen, Quelle und Art.-21-Relevanz zusammen. |
| Statusachsen | `daten/statistik_statusmatrix_afd_2026.json`, `daten/statistik_laender_beweismatrix_afd_2026.json`, `daten/classification_evidence_afd_2026.jsonl` | Trennt Bund, Länder, JA/GD, Vorfeld, Eilrechtsschutz, Hauptsache und Rechtskraft. |
| Sicherheits- und Vorfeldachsen | `daten/terror_umsturz_paramilitaer_matrix_2026.jsonl`, `daten/vorfeld_network_edges_2026.jsonl`, `daten/nius_afd_medienkante_2026.jsonl` | Trennt direkte Kanten, indirekte Kanten, Kontext, laufende Verfahren und Medien-/Vorfeldrouten. |
| Beweisrouten | `daten/beweisrouten_audit_2026.jsonl`, `daten/beweislast_audit_2026.jsonl` | Zeigt, welche lokalen und online erreichbaren Anker hinter den Beweisachsen stehen. |

Gerichtsfest bedeutet hier nicht, dass jeder Registereintrag eine rechtskräftige Verurteilung wäre. Gerichtsfest bedeutet, dass der Datenbestand Verfahrensstatus, Quelle, Akteur und Zurechnung unterscheidet und damit die spätere Antragsschrift belastbar strukturieren kann.

## 4. Juristische Relevanz nach Art. 21 GG

### Verfassungsfeindliche Zielrichtung

Die Findings und Statistikdateien führen die verfassungsfeindliche Zielrichtung nicht als bloße Gesinnungsbehauptung, sondern über wiederholte, belegte Aussagen und Handlungen. Relevante Felder sind insbesondere Menschenwürde, Demokratieprinzip, Rechtsstaatsprinzip, Zurechnung, aktiv-kämpferisches Vorgehen und Potentialität.

### Menschenwürde und ethnischer Volksbegriff

Der tragende Beweiskern liegt in der Verbindung von ethnisch-kulturellem Volksverständnis, Remigrationslogik, migrationsbezogener Ausschlussrhetorik, gruppenbezogener Entwertung und Zurechnung zu Partei-, Funktions-, Jugend- und Vorfeldstrukturen. Das Repository enthält hierzu Zitat-, Gutachten-, Programm- und Verfassungsschutzanker. Menschen mit Behinderung sind im aktuellen Stand nicht als Randnotiz behandelt: Die Inklusions-/Behindertenachse ist durch `STAT-DISABILITY-INCLUSION-ROUTE-001`, `STAT-DISABILITY-INCLUSION-ANCHORS-001` und `ROUTE-AUDIT-010-BEHINDERUNG` als eigene belegte Beweisroute geführt.

### Demokratieprinzip

Die Demokratieachse umfasst Angriffe auf demokratische Konkurrenz, Parlamente, Medien, Zivilgesellschaft, Wahl- und Entscheidungsverfahren sowie Einschüchterungs- und Delegitimierungsmuster. Beweiserheblich sind nicht einzelne zugespitzte Meinungsäußerungen isoliert, sondern Wiederholung, Akteursrang, Kampagnenfunktion, institutionelles Angriffsziel und Zurechnung.

### Rechtsstaatsprinzip

Die Rechtsstaatsachse wird über Angriffe auf Justiz, Verfassungsschutz, Verwaltung, Verfahrensbindung und Gewaltenteilung geführt. Laufende Verfahren, Eilentscheidungen, Hauptsachen, Berufungen, Freisprüche und rechtskräftige Entscheidungen werden getrennt. Das ist beweisrechtlich zwingend und keine Entlastung belegter anderer Achsen.

### Zurechnung

Die Zurechnung ist nicht pauschal angelegt. Das Repository trennt Partei, Bundes- und Landesebene, JA/GD, Mandatsträger, Funktionäre, Mitglieder, Fraktionen, Mitarbeiter, Vorfeld, Medienknoten und Lagebilddaten ohne automatische Parteizurechnung. Dadurch wird sowohl Überzeichnung als auch unzulässige Verharmlosung vermieden.

### Aktiv-kämpferisches Vorgehen und Potentialität

Potentialität wird nicht aus allgemeinen PMK-Zahlen als AfD-Tat abgeleitet. Sie wird über Organisationsmacht, Mitgliederbasis, Mandate, Fraktionen, Ressourcen, Vorfeld-, Jugend- und Medienkanten sowie rechtsextremistisch zugeordnete AfD-Personen als Strukturbeweis geführt. PMK-/BKA-/BfV-Lagebilddaten bleiben Kontext- und Gefährdungsmaterial, solange keine konkrete AfD-Akteurs- oder Organisationsbrücke besteht.

## 5. Statistik- und Visualisierungsmodul

Die aktuellen Statistikdateien leisten mehr als eine Mengenanzeige. Sie bilden eine Beweislandkarte, die Zahlen nur mit Methode, Quelle, Grenzen und Art.-21-Relevanz ausspielt.

| Modul | Aktuelle Leistung | Gerichtsfeste Nutzbarkeit |
|---|---|---|
| `STATISTIKMODUL.md` | Dokumentiert Kernwerte 262 / 18 / 3.722 und Methodik des Statistik-Tabs. | Geeignet als technische Übersicht, nicht als alleinige Rechtsquelle. |
| `STATISTIK_METHODIK.md` | Beschreibt Erhebungs-, Normalisierungs- und Abgrenzungsregeln. | Wichtig für Nachvollziehbarkeit und Angriffsfestigkeit statistischer Verdichtung. |
| `STATISTIK_TAB_DEEPRESEARCH_VERWERTBARKEIT.md` | Bewertet, welche Statistikachsen beweisrechtlich verwertbar sind. | Dient als Red-Team- und Nutzbarkeitsvermerk. |
| `STATISTIK_TAB_INHALTLICHE_VISUALISIERUNG.md` | Ordnet Visualisierungen den Art.-21-Prüffeldern zu. | Geeignet für gerichtliche Anlagenlogik: Sankey, Heatmap, Timeline, Statusmatrix, Donut, Registertabellen. |
| `statistikquellen.md` | Verweist auf Kernquellen der Statistik. | Quellennahe Brücke zwischen Anzeige, Manifest und lokaler Belegdatei. |
| `daten/statistik_manifest.json` | Enthält 261 Statistikobjekte mit Methode, Quelle, Status und Beweisbezug. | Zentraler maschinenlesbarer Statistikanker. |
| `reports/validation-report.md` | Aktuell Fatal 0 / Warnings 0. | Technischer Integritätsnachweis für Release-Stand. |
| `reports/pages-link-validation.json` | Linkvalidierung der Pages-Dateien. | Technischer Nachweis, dass lokale Verweise nicht blind ins Leere laufen. |

Gerichtsfest verwertbar sind vor allem Statusmatrizen, Zeitachsen, Quellenfunnel, Zielgruppen-Heatmaps, Zurechnungsdonuts, Registertabellen und Sankey-Darstellungen, sofern sie nicht als eigenständige Beweisbehauptung, sondern als Visualisierung der hinterlegten Quellenkette verwendet werden.

Für spätere Erweiterungen sind Felder für Seiten-/Rn.-Pinpoints, Archiv-Screenshots, Hashes, Original-URLs, Rechtskraftstatus, Gegenlese, Quellenklasse und Zurechnungstyp vorgesehen oder bereits angelegt. Diese Felder sind Anlagen- und Schriftsatztechnik, nicht ein Belegersatz.

## 6. Quellen- und Provenienzlage

Die Quellenlage ist breit und in mehreren Schichten abgesichert:

| Quellebene | Dateien / Register | Bewertung |
|---|---|---|
| Lokales Quelleninventar | `daten/source_inventory.jsonl` | Zentrale maschinenlesbare Provenienzschicht mit Quellenart, Pfad und Beweisnähe. |
| Öffentliche Quellenlisten | `full-sources.md`, `PUBLIC_SOURCES.md`, `PUBLIC_EXTENDED_SOURCES.md` | Nützlich als Online-/Recherche- und Belegindex. Maßgeblicher Portalstand für das Gerichtsregister ist 262; abweichende Teilstände in Quellenlisten sind nicht als aktuelle Gesamtzahl zu verwenden. |
| Originalquellen | `ORIGINAL_SOURCES.md` | Wichtig für Chain of Custody, Original-URLs und lokale Archivkopien. |
| Urteilsregister | `URTEILE_DEEPRESEARCH.md`, `dokumente/hauptquellen/urteilsbelege/` | Enthält Gerichts-, Straf-, Status- und Verwaltungsbelege. Jeder Fall ist nach Status und Beweisfunktion zu lesen. |
| Gutachten | GFF-, BfV-, DIMR- und VS-Berichtsdateien sowie Splits/OCR | Hoher Wert für juristische Struktur, Tatsachenbasis, Quellenverweise und Verdichtung. |
| Statistikquellen | `statistikquellen.md`, `daten/statistik_manifest.json` | Verbindet Zahlen mit Quelle, Methode und juristischer Relevanz. |
| Validierungsdateien | `reports/validation-report.*`, Audit-JSONL-Dateien | Belegen den technischen und methodischen Integritätsstand des Release. |

Wichtig: Presse- und Recherchequellen werden nicht als gleichrangiger Ersatz für Gericht, Behörde, Parlament oder Parteioriginal behandelt. Sie sind entweder Sekundäranker, Indexroute oder Ergänzungsbeleg. Wo eine amtliche, gerichtliche, parlamentarische oder parteieigene Quelle existiert, ist diese vorrangig zu verwenden.

## 7. Erreichte Release-Härtungen

Der aktuelle Release-Stand enthält die folgenden belastbaren Struktur- und Validierungsschritte:

| Bereich | Status | Begründung |
|---|---|---|
| Aktiver Release-Kontext | Bereinigt und geprüft | Repository, ZIP, Manifest, Statistikdaten und Validierungsberichte bilden einen aktiven Auswertungsstand. |
| Zitatkorpus | Lokal konsolidiert | Der aktuelle README-/Statistikstand führt 3.722 lokal archivierte Belegzitate; die Live-Seite weist zusätzlich 4.036 Online-Beweise als Erweiterungsquelle aus. |
| Statistikmanifest | Validiert | `daten/statistik_manifest.json` enthält 261 Objekte mit Quelle, Methode, Status und Rechtsrelevanz. |
| Validierung | Bestanden | `reports/validation-report.md` weist Fatal 0 / Warnings 0 aus. |
| Beweisrouten | Strukturiert | `daten/beweisrouten_audit_2026.jsonl` führt 10 Beweisrouten; einzelne Anlagen-Pinpoints bleiben Schriftsatzarbeit. |
| Auditachsen | Strukturiert | `daten/beweislast_audit_2026.jsonl` führt 17 Auditachsen, einschließlich Status-, Sicherheits-, Quellen- und Inklusionsachsen. |
| Zitat-Auswertung | Strukturiert | Zitatstatistik, Top300, Top40 und Schriftsatzexport sind angelegt. |
| Menschen mit Behinderungen / Inklusion | Sichtbar geführt | Die Behinderten-/Inklusionsroute ist als eigene Statistik- und Beweisroute eingetragen. |
| Sicherheits- und Vorfeldachsen | Sichtbar geführt | Eigene Matrizen für Terror-/Umsturz-/Paramilitär-, Vorfeld-, Medien- und Statusachsen sind vorhanden. |
| PMK/BKA-Lagebild | Methodisch getrennt | Statistik- und Methodikdateien trennen Lagebilddaten von konkreter AfD-Zurechnung. |

## 8. Noch offene echte Verbesserungen

Die folgenden Punkte sind die verbleibenden echten, aktuellen Verbesserungen. Sie sind keine pauschalen Beweislücken, sondern konkrete Nacharbeiten für eine spätere Antragsschrift oder Dokumentenhygiene.

| Datei / Bereich | Befund | Warum relevant | Status | Konkrete Nacharbeit |
|---|---|---|---|---|
| `README.md` | Das README betont zutreffend, dass das Repository kein fertiges juristisches Antragsdokument ist. | Ein Parteiverbotsantrag erfordert Verfassungsorganbeschluss, prozessuale Antragsschrift, Anlagenverzeichnis und rechtliche Subsumtion. | Offen außerhalb des Release-ZIPs; kein technischer Mangel. | Für einen echten Antrag eine separate Schriftsatzfassung erstellen; README nicht kürzen, allenfalls ergänzen. |
| `full-sources.md` | Enthält Teilstände mit 239 Fällen. | Kann bei flüchtiger Lektüre vom aktuellen Portalstand 262 abweichen. | Aktueller Release-Stand bleibt 262. | Bei späterer Konsolidierung Teilstände vollständig in den 262er Quellenstand überführen. |
| `PUBLIC_EXTENDED_SOURCES.md` | Enthält Teilstände mit 259 Fällen, während Nachträge bis 262 vorhanden sind. | Quellenlisten sollen den aktuellen Registerstand eindeutig spiegeln. | Aktuelle README-/Statistikdateien führen 262. | Bei späterer Konsolidierung Teilstände vollständig in den 262er Quellenstand überführen. |
| `daten/antragsreife_top300_zitatpaket_2026.jsonl` / `daten/schriftsatz_topzitate_export_2026.jsonl` | Topzitate sind vorbereitet, aber eine endgültige Antragsspitze ist eine juristische Auswahlentscheidung. | Ein Antrag braucht nicht alle Zitate, sondern die stärksten, redundant abgesicherten und prozessual sauber eingeordneten Belege. | Daten vorhanden; formale Antragsspitze offen. | Endauswahl nach Rechtsgut, Akteursrang, Quelle, Pinpoint, Zurechnung, Gegenlese und Prozessrisiko treffen. |
| `daten/schlimmste_zitate_pdf_audit_2026.jsonl` / `reports/schlimmste-zitate-pdf-audit-2026-07-09.md` | Ein Risiko-/Wortlautfall bleibt getrennt und wird nicht als harter Top300-Beleg geführt. | Das schützt die Beweisführung vor Überzeichnung. | Korrekt getrennt, kein Defizit der harten Beweisbasis. | Nur verwenden, wenn Originalquelle/Wortlaut endgültig gesichert ist; sonst als Risiko-/Recherchehinweis belassen. |
| Status- und Sicherheitsfälle | Laufende Ermittlungen, Anklagen, Eilrechtsschutz, Hauptsache und Rechtskraft bleiben getrennt. | Für ein Verfahren ist diese Trennung zwingend, weil sonst Überzeichnung angreifbar wird. | Struktur vorhanden. | In einer späteren Antragsschrift je Fall die aktuellste amtliche Verfahrenslage nochmals gegen Gericht/GBA/Behörde prüfen. |
| afd-verbot.de/beweise Live-Stand | Die Live-Seite weist 4.036 Online-Beweise aus, während der lokale Release-Korpus 3.722 Proof-Dateien enthält. | Das ist keine interne Inkonsistenz, sondern ein belegter Online-Erweiterungsstand. | Offen als Source-Erweiterung, nicht als Release-Zählkonflikt. | Live-IDs über /api/accusations?page=... in eine neue Quellen- und Importmatrix übernehmen, bevor sie als lokale Proof-Findings gezählt werden. |
| Formale Anlagenfähigkeit | Viele Quellen sind lokal und online indexiert; die gerichtliche Anlage braucht finale Nummerierung, Zitierweise, PDF-Seiten und ggf. Hash-/Archivvermerk. | Das ist die Brücke vom Forschungsrepo zur Schriftsatzanlage. | Vorbereitet, aber nicht als fertige Antragsschrift ausgegeben. | Anlagenverzeichnis, Beweisnummern, Seiten-/Rn.-Pinpoints und Prozessstatus in finalem Schriftsatzformat erzeugen. |

## 9. Release-Empfehlung

Diese Datei ist die bereinigte Release-Fassung. Sie ist gegen den aktuellen ZIP-/Repo-Stand geprüft, trennt Belegtatsachen von Verfahrensstatus und benennt nur noch konkrete, aktuelle Restarbeiten.

Der Release-Tab soll diese bereinigte Fassung als maßgebliche Release-Bewertung verlinken.

## Audit-Vermerk

Diese Fassung wurde gegen den aktuellen Release-Stand `/home/error/AfD-Verbotsverfahren-Grundlagenforschung-cleaned-371d883.zip` abgeglichen und bildet den geprüften Release-Stand mit Quellen-, Statistik-, Validierungs- und Beweisroutenbezug ab.
