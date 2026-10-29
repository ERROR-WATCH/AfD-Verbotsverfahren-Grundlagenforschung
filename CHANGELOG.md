# Changelog

## 29.10.2026 – Geleaktes AfD-Strategiepapier (von Storch, Juli 2025) + Volksverpetzer-Analyse „Union setzt um“

- Anlass: Analyse „Der Geheimplan der AfD wurde geleakt. Warum setzt die Union ihn um?“ (Volksverpetzer, 29.10.2026) und die darin ausgewertete Primärquelle: die 55-seitige Strategiepräsentation der AfD-Bundestagsfraktionsklausur („Einleitung des Strategieprozesses“, via Politico, Juli 2025; Verfasserin laut ZEIT/Politico: Beatrix von Storch).
- Neue lokale Quellen in `sources/web/volksverpetzer-strategiepapier-union-20261029/`: Vollseiten-Snapshot des Volksverpetzer-Artikels, Strategiepapier-PDF (Bildfassung, 46,7 MB) mit maschinenlesbarem OCR-Volltext (Tesseract deu, 150 dpi), Ordner-README (Provenienz, Echtheitsstatus, Leseregel) und SHA256SUMS.
- Neues Dossier in `dokumente/hauptquellen/`: `AfD_Strategiepapier_vonStorch_Union_Setzt_Um_Analyse_2026-10-29.md` (+ PDF, 7 Seiten) mit Drei-Schritte-Zerlegung des Papiers, allen Artikel-Beleglinks, Repo-Einordnung (KULTUR-001/FIND-CG-000023, CDU-Brandmauer-Achse, E-Mail-Leak-Dossier) und Verwertbarkeitsgrenzen.
- Pages (index.html): Neuer Abschnitt „Geleaktes AfD-Strategiepapier … – und die Union setzt es um“ direkt nach dem E-Mail-Leak-Dossier; 6 neue Einträge im Dokumentenregister (Dossier MD/PDF, Primär-PDF, OCR, Ordner-README, Artikel-Snapshot; Tab „Quellen“).
- Register: `daten/web_source_inventory_2026.jsonl` (+5 Zeilen, skriptgleiches Format, SHA-256 lokal berechnet), `sources/WEB_SOURCE_INDEX_2026.md` (Tabellenzeile + Kopfzahlen + transparenter Nachtragshinweis), `daten/strategiepapier_union_umsetzung_2026_10_29.jsonl` (Dossier-Register mit OCR-Pinpoints SEITE 3/4/10/18/20/51/52).
- Kernerkenntnis der OCR: „Brandmauer stürzen“ ist als eigenes strategisches Ziel der Fraktionsklausur verzeichnet (SEITE 3/4/10/20); SEITE 52 benennt Arbeitsgruppen („Taskforce Südwest / Brandmauer umwerfen“) mit dem Auftrag, „Themen und Forderungen [zu] identifizieren, die die Union mittragen kann, die SPD nicht“.
- Status/Trennschärfe: Recherchebeleg mit parteieigener Primärquelle; Echtheit nicht amtlich verifiziert (förmliche Bestreitung nicht bekannt); die „Union setzt um“-These bleibt redaktionelle Einordnung des Artikels = Potentialitäts-/Normalisierungskontext, kein AfD-Beweis, keine Parteizurechnung zwischen verschiedenen Parteien.
- Befund nebenbei: Der Web-Quellenindex war vor diesem Nachtrag intern inkonsistent (Kopfzeile 30.07.2026: 479 Dateien/75.233.353 Bytes; JSONL-Bestand: 479 Zeilen/122.171.665 Bytes; Tabelle führt zudem zwei leere Reserveordner, die nicht im JSONL stehen). Im Index-Header transparent ausgewiesen; Neuvermessung erfordert einen Voll-Checkout.

## 26.10.2026 – AfD-E-Mail-Leak („goebbelmail“) als Schaukasten und README-Abschnitt

- Pages: Neuer Abschnitt „AfD-E-Mail-Leak („goebbelmail") – Oktober 2026" am Seitenanfang mit Chronologie, Täterschaft (Gruppe „Hexane"; einer der beiden Hacker meldet sich als „Ver" im Zeit-Interview – nach Eigenaussage in der Ukraine geboren/aufgewachsen, heute in den USA lebend), Echtheitslage (AfD-Bestätigung, journalistische Gegenprüfung), belegten Funden (Parteispenden-Widerspruch nach tagesschau/NDR/WDR; rechtes Gedankengut/Duldungsmuster nach taz), Verwertbarkeitsdebatte (LTO: Möllers/Jahn/Dietrich; Steuer-CD-Argumentation) und Juns Gamechanger-Einschätzung inkl. Video-Einbettung.
- README: Abschnitt „AfD-E-Mail-Leak („goebbelmail") – Oktober 2026: Quellenlage und rechtliche Einordnung" mit Quellenliste ergänzt.
- Datumsstand des Abschnitts: 26.10.2026; alle Aussagen mit Quellenlinks belegt. Die Dokumentation wird aus journalistischen Gründen festgehalten (transparente Quellen-Dokumentation eines Vorgangs von erheblicher öffentlicher Relevanz); nach Einschätzung des Projekts ist die übrige Beleglage des Repositories für ein Verbotsverfahren bereits für sich genommen ausreichend, der Leak-Abschnitt ergänzt diese nur der Vollständigkeit halber.

## 30.07.2026 – Quellen-, Chronologie- und Pages-Härtung

- Bothe-Chronologie um Gesetzgebung, Prüfverfahren, ministerielle Stellungnahme und zusätzliche Pressepinpoints ergänzt.
- Kommunale Nichtzulassungen von sachfremden Listen- und Strafrechtsausschlüssen abgegrenzt.
- FragDenStaat-Routen, Pankow-Nebenbeleg und vollständiger Asset-Katalog in Pages ergänzt.
- Gerichtsregister auf 317 Fälle erweitert; neue amtliche BVerwG-/BVerfG-Anker lokal archiviert.
- Chronologie-Audit und sichtbare Metadaten-KPIs für Entscheidungsdatum, Jahresangabe und Aktenzeichen ergänzt.
- Statusverteilung im Statistik-Tab auf volle Inhaltsbreite gestellt.
- taz-Nachtrag zum laufenden Frankfurter Reichsbürger-Verfahren mit amtlichem OLG-Anker, Aktenzeichen 8 St 2/23 und enger Zurechnungsgrenze ergänzt.

## 29.07.2026

- Kommunale Nichtzulassungen wegen Zweifeln an der Verfassungstreue für Bothe, Moriße, Sichert, Vogel, Paul und Detert als eigenes Pinpoint-Dossier und JSONL-Strukturdatensatz ergänzt.
- NDR-, VerfGH-Rheinland-Pfalz-, WDR- und StadtRadio-Quellen lokal archiviert und mit SHA-256-Integritätsliste versehen.
- Goes-Zwischenstand korrigiert: nach kommunalaufsichtlicher Prüfung am 29.07.2026 einstimmig zugelassen; Maxhuni und weitere Zulassungen als Gegenbelege verdrahtet.
- README und Pages-Dokumentenindex um das neue Kommunalwahl-/Verfassungstreuedossier ergänzt.

## 2026-07-23T02:52:34+02:00

- Nachtrag Fall 314 ergänzt: BVerfG 2 BvE 1/22 zu AfD-Bundestagsfraktion/AfD-Abgeordneten und Corona-Zugangsregeln im Bundestag; als verfassungsgerichtlicher Organstreit gezählt, kein Strafurteil und keine eigene Feststellung verfassungswidriger Ziele.
- FAU Stuttgart als rechter-Gewalt-Nebenbeleg lokal gesichert; ausdrücklich nicht als AfD-Gerichtsfall gezählt und ohne automatische AfD-Zurechnung.
- Gerichtsfälle-Hauptzahl von 313 auf 314 angehoben; Belegzitate bleiben 3.722, Verbotsgründe 18.

## 2026-07-23T02:05:51+02:00

- 20 Deepresearch-Module und ein Demokratie-Gefährdungsdossier zu CDU/CSU, Brandmauer, Kretschmer, Dobrindt, WerteUnion/Maaßen, CDU-/JU-Krefeld, Migration, AfD-Verbotsverfahren, taz-/Die-Linke-Gegenlese und Zentrum/BVP-1933-Strukturvergleich ergänzt.
- 50 CDU-Webanker mit SHA256-Prüfsummen unter `sources/web/cdu-brandmauer-potentialitaet-20260723/` und 16 Demokratie-Risikoanker unter `sources/web/demokratie-gefaehrdung-20260723/` gesichert.
- Demokratie-Gefährdungsdossier als separates Risiko-/Potentialitätsdokument ergänzt; nicht als AfD-Gerichtsfall gezählt und nicht als Gleichsetzung von CDU/CSU mit AfD oder NSDAP geführt.
- Separates Zentrum/BVP-1933-Parallelen-Dossier ergänzt; ausdrücklich als Strukturwarnung ohne Gleichsetzung geführt.
- Wahlrecht-/Kippszenario zu Bundesumfragen, Sachsen-Anhalt 2026, Ministerpräsidentenwahlverfahren, indirekter Steigbügelhalter-Mechanik und Bundestagsabstimmung 940 ergänzt; als volatile Mehrheitsarithmetik, Ratschenmechanismus und politische Risikotypologie markiert, nicht als Koalitionsbehauptung.
- Statistik-/Potentialitätskarte im Portal ergänzt; Gerichtsfälle stehen nach Nachtrag bei 314, Belegzitate bleiben 3.722.

## 2026-07-23 00:32 +02:00

- VBRG/taz Jahresbilanz rechte Gewalt 2025 als nicht gezähltes Lagebild im Gewalt-/Terror-/Staatsgefährdungsblock ergänzt.
- SPIEGEL/Sichert, tagesschau/Brandmauer und BR24/Chrupalla als Quellenanker für Verfassungstreue und Potentialität lokal gesichert und verdrahtet.
- Release-Zeitstempel auf 2026-07-23T00:32:31+02:00 aktualisiert.


## 2026-07-21 22:13 +02:00

- README-Schlussbereich auf Verweise zu Index-, Audit- und Todo-Dateien reduziert; Detailbefunde stehen jetzt außerhalb der Haupt-README.
- Antragsreife-Todo als eigene Arbeitsdatei ergänzt.
- Portal-Reiter und Statistikfilter geprüft; Urteilsart-Filter repariert und sichtbar mit Umlauten normalisiert.
- Statistik-Layout gegen überlaufende Legenden geprüft; Browser-Audit bestätigt keine Karten- oder Statistik-Overflows.
- Quote-Deep-Dive-Generator idempotent gemacht, damit `statsQuoteDeepTargets` nicht mehrfach gerendert wird.
- Release-Zeitstempel und Release-Marker auf `20260721-221342` aktualisiert.
- Validierungen ausgeführt: Build, Statistikvalidierung, Pages-Linkcheck, statischer Audit und Browser-Audit.
## 2026-07-30

- taz-Fall zum berichteten Angriff bei einem AfD-Gegenprotest in Berlin-Pankow als nicht gezählten Nebenbeleg mit Pinpoints, JSONL und lokalem Quellenanker ergänzt.
- Verletzungsfoto als zurückhaltenden Asset-Nebenbeleg gesichert; keine isolierte Aussage zu Ursache, Täter oder Parteizurechnung.
- Statusregel ergänzt: Neubewertung erst bei späterer gerichtlicher Entscheidung anhand Aktenzeichen, Instanz, Rechtskraft und ausdrücklichen Feststellungen.
- Bislang im Pages-Katalog `Sonstiges` fehlende Bild-Assets nachgetragen.
