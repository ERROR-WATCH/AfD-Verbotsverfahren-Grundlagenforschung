# Finaler Deepresearch-Audit vergessene AfD-Gerichtsfälle

Timestamp: 2026-07-21T10:35:10.038Z

## Kurzstatus

- Gerichtsfälle/Registerfälle: 288.
- Neu gezählte Nachtragsfälle: 23 Fälle, Nummern 266 bis 288.
- Neue lokale Urteilsbelege: 23 Markdown-Dateien unter `dokumente/hauptquellen/urteilsbelege/`.
- Neue lokale Web-Snapshots und Fetch-Nachweise: `sources/web/forgotten-afd-judgments-20260721/`.
- Quelleninventar: 10.789 Quellen, davon 10.703 statistiknutzbar und 5.612 als Primärquellen markiert.
- Gerichtsfälle-Tab: 288 eingebettete Fälle, maximaler Fall 288, 0 fehlende Belegpfade.
- Statistik-Tab: Gewalt-/Terror-/Staatsgefährdungsbereich ergänzt und gerendert.
- Urteilsarten: 27 klassifizierte Typen.

## Gezählt ergänzt

Gezählt wurden die Fälle 266 bis 288, soweit ein konkreter Gerichts-/Strafbefehls-/Urteilsstatus und ein AfD-Mitglieds-, Mandats-, Kandidaten- oder Funktionsträgerbezug dokumentiert wurden. Die Nachträge umfassen Beleidigung, Volksverhetzung, NS-Kennzeichen/Sieg-Heil-Kontexte, Bedrohung/Waffenbesitz, gefährliche Körperverletzung, Freiheitsberaubung/Nötigung, Insolvenz-/Arbeitsentgeltkomplexe, Trunkenheit im Verkehr sowie Unterhaltspflichtverletzung.

## Nicht gezählt / Watchlist

- Knockout51 bleibt Nebenbeleg für rechte Gewalt allgemein, nicht als AfD-Registerfall.
- Flensburg/Brandanschläge Parteibüros bleibt Prüfvermerk/Watchlist, weil die öffentlich gesicherten Angaben bisher keinen belastbaren neuen gezählten AfD-Gerichtsfall mit vollständiger Urteilsachse tragen.
- Stephan Brandner 2026 bleibt Watchlist: Strafbefehl/Widerspruch beziehungsweise Verfahrensstand, aber kein neuer rechtskräftiger gezählter Gerichtsfalldatensatz.
- Lars Haise/Erlangen/weitere laufende Ermittlungs- oder Wählbarkeitskontexte bleiben Watchlist, solange Urteil, Akten-/Gerichtsanker und Zurechnungsstand nicht registerfähig sind.

## Quellen und Pinpoints

- `dokumente/hauptquellen/urteilsbelege/QUELLEN_URTEILSDB.md` wurde auf Fälle 1 bis 288 erweitert.
- Pinpoints, lokale Belegpfade, Online-Routen und Zurechnungsgrenzen wurden für 266 bis 288 ergänzt.
- `daten/source_inventory.jsonl` wurde um 43 Einträge erweitert: 23 lokale Urteilsbelege, Flensburg-Prüfvermerk, Deepresearch-Report, Web-Fetch-README und lokale Web-Snapshots.
- `URTEILE_DEEPRESEARCH.md` und `README.md` wurden auf den Nachtragsstand aktualisiert.

## Statistik und Pages

- `index.html` enthält 313 Fälle und einen neuen Statistikbereich zu Gewalt, Terror, Reichsbürger-/Umsturz-, Waffen-, NS-Kennzeichen- und staatsgefährdenden Kontexten.
- Die Statistikwerte in `daten/statistik_manifest.json` und dem eingebetteten Manifest in `index.html` sind synchron.
- Die Gerichtsfälle-Belegpfade wurden geprüft; die zwei Build-bedingten Umlautpfadfehler bei Reichsbürger-Dateinamen wurden auf die existierenden ASCII-Dateien korrigiert.

## Validierung

- `npm run build`: abgeschlossen.
- `npm run validate:statistics`: OK, 10.789 Quellen, 3.868 Findings, 18 Verbotsgründe, 261 Statistikobjekte, Fatal 0, Warnings 0.
- `npm run validate:pages`: OK, 4 Dateien, 0 fehlende Links.
- Struktur-Audit: 313 Fälle, 0 fehlende Belegpfade, 27 Urteilsarten, Quelleninventar/Manifest/Embedded-Manifest synchron.

## Ergebnis

Der Nachtragslauf hat keine weitere belastbare, sofort zählbare Fallgruppe gefunden, die über 266 bis 288 hinaus ohne zusätzliche gerichtliche Primärdaten aufgenommen werden sollte. Weitere Kandidaten bleiben in Watchlist-/Prüfvermerken, bis Urteil, Gericht, Status, Datum und AfD-Zurechnung trennscharf belegt sind.
