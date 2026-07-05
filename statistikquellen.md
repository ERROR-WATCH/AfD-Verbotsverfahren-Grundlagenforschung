# Statistikquellen und Methodik
Stand: 05.07.2026

Diese Datei ist die kompakte Bruecke zum Statistiksystem. Die kanonischen Datenprodukte sind:
- `daten/source_inventory.jsonl`
- `daten/findings_art21.jsonl`
- `daten/statistik_manifest.json`
- `methodik/STATISTIK_METHODIK.md`

## Zweck
- Das Quelleninventar erfasst jede relevante Quelle des Repositories und ergaenzende externe Referenzen.
- Die Findings codieren einzelne Belege, Passagen und aggregierte Registerbefunde.
- Das Manifest enthaelt nur aus Findings abgeleitete Kennzahlen.

## Kernregeln
- Keine Zahl ohne Quelle, Fundstelle und Methodik.
- Keine Vermischung von Primärquelle, Sekundaerquelle und Aggregat.
- PMK- und BfV-Lagezahlen sind Kontextdaten und keine automatische AfD-Zurechnung.
- Rechtsstatus, Zurechnung und Beweisstufe bleiben getrennt.

## Aktueller Stand
- Der sichtbare Statistik-Tab rendert nur `daten/statistik_manifest.json`.
- Das Manifest wird aus `daten/findings_art21.jsonl` erzeugt.
- `daten/source_inventory.jsonl` ist die Grundlage fuer Referenzen und provenance.

## Hinweise
- Historische Zwischenstaende bleiben nur als solche markiert.
- Ungepruefte oder widerspruechliche Eintraege erscheinen nicht als tragende Zahlen.
- Weitere Detailregeln stehen in `methodik/STATISTIK_METHODIK.md`.
