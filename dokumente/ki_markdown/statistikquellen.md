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

## Aktiver Stand
- Der sichtbare Statistik-Tab rendert ausschliesslich `daten/statistik_manifest.json`.
- Das Manifest enthaelt derzeit 13 validierte Statistikobjekte.
- Die Kernwerte sind 239 dokumentierte Gerichtsfaelle, 18 konsolidierte Verbotsgruende und 3.611 Belegzitate.
- Weitere Manifestwerte bilden Aggregatbefunde, Beweisstufe-A-Verteilung und thematische Cluster ab.

## Kernregeln
- Keine Zahl ohne Quelle, Fundstelle und Methodik.
- Keine Vermischung von Primaerquelle, Sekundaerquelle und Aggregat.
- PMK- und BfV-Lagezahlen sind Kontextdaten und keine automatische AfD-Zurechnung.
- Rechtsstatus, Zurechnung und Beweisstufe bleiben getrennt.

## Hinweise
- Historische Zwischenstaende bleiben nur als solche markiert.
- Ungepruefte oder widerspruechliche Eintraege erscheinen nicht als tragende Zahlen.
- Legacy-Statistikbloecke im HTML sind nur dann relevant, wenn sie technisch ausgeblendet sind und nicht mehr im sichtbaren Statistik-Tab erscheinen.
- Weitere Detailregeln stehen in `methodik/STATISTIK_METHODIK.md`.

