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
- Das Manifest enthält derzeit 258 validierte Statistikobjekte.
- Die Kernwerte sind 262 dokumentierte Gerichtsfaelle, 18 konsolidierte Verbotsgruende und 3.722 Belegzitate.
- Weitere Manifestwerte bilden Aggregatbefunde, Beweisstufe-A-Verteilung und thematische Cluster ab.

## Kernregeln
- Keine Zahl ohne Quelle, Fundstelle und Methodik.
- Keine Vermischung von Primärquelle, Sekundärquelle und Aggregat.
- PMK- und BfV-Lagezahlen sind Kontextdaten und keine automatische AfD-Zurechnung.
- Rechtsstatus, Zurechnung und Beweisstufe bleiben getrennt.

## Hinweise
- Historische Zwischenstaende bleiben nur als solche markiert.
- Ungeprüfte oder gesondert zu markierene Eintraege erscheinen nicht als tragende Zahlen.
- Legacy-Statistikbloecke im HTML sind nur dann relevant, wenn sie technisch ausgeblendet sind und nicht mehr im sichtbaren Statistik-Tab erscheinen.
- Weitere Detailregeln stehen in `methodik/STATISTIK_METHODIK.md`.

## Statistik-Tab Beweissicherung 2026

Diese Quellen wurden für die inhaltliche Statistik-Erweiterung als primaere oder lokale Beweisanker gesichert.

* **BVerwG, Beschluss vom 20.05.2025 - 6 B 23.24**
  Web: https://www.bverwg.de/200525B6B23.24.0
  Funktion: rechtskräftiger Statusanker Bundes-AfD als Verdachtsfall.

* **BVerfG, NPD II, 2 BvB 1/13**
  Web: https://www.bundesverfassungsgericht.de/SharedDocs/Entscheidungen/DE/2017/01/bs20170117_2bvb000113.html
  Funktion: Massstab für Art. 21, Menschenwürde, Demokratie, Potentialität, Darauf-Ausgehen.

* **BVerfG, Finanzierungsausschluss NPD/Die Heimat, 2 BvB 1/19**
  Web: https://www.bundesverfassungsgericht.de/SharedDocs/Entscheidungen/DE/2024/01/bs20240123_2bvb000119.html
  Funktion: Rechtsfolgen-/Finanzierungsausschluss-Achse getrennt vom Parteiverbot.

* **GFF-Gutachten lokal, Teil 02 / Methodik**
  Lokal: `dokumente/ki_markdown/dokumente/splits/GFF_AfD-Gutachten_Teil_02_Einfuehrung.md`
  Funktion: Korpusmethodik, 54.972 Pressemitteilungen, Programme, Parlamentsdokumente, Social Media, Interviews.

* **GFF-Gutachten lokal, Teil 05 / Menschenwürde**
  Lokal: `dokumente/ki_markdown/dokumente/splits/GFF_AfD-Gutachten_Teil_05_Teil_3_A_Menschenwürde.md`
  Funktion: Remigration, ethnischer Volksbegriff, Zielgruppen, Menschenwürde.

* **BfV-Folgegutachten 2021, Fluegel-Netzwerk**
  Lokal: `geheimgutachten/BfV-AfD-Folgegutachten_2021_05_E_Einflussnahme_Fluegel.md`
  Funktion: 14.371 Verbindungen, 334 interagierende AfD-Profile, 1.201 Freundschaftsbeziehungen, Top-Profile.

* **BfV-Folgegutachten 2021, Menschenwürde/Antisemitismus**
  Lokal: `geheimgutachten/BfV-AfD-Folgegutachten_2021_06_F_I_Menschenwürde.txt`
  Funktion: Volksbegriff, Soros-/NWO-/Hochfinanz-Chiffren, antisemitische und verschwörungsideologische Muster.

* **Länderberichte VFS/LfV 2024/2025**
  Lokal: `dokumente/vfs_berichte_bundeslaender/`
  Funktion: Statusmatrix Bund/Länder/JA/GD, regionale Verdichtung, Kontextzahlen und Vorfeld.

* **Urteilsregister / Urteilsbelege**
  Lokal: `dokumente/hauptquellen/urteilsbelege/`
  Funktion: Statusentscheidungen, Strafurteile, Sicherheitsverfahren, Parteienfinanzierung, Freispruch/laufend/nicht rechtskräftig getrennt.

* **Beweissicherungsdaten 2026**
  Lokal: `daten/statistik_beweis_sicherung_2026.json` und `dokumente/hauptquellen/STATISTIK_TAB_BEWEISSICHERUNG_2026.md`
  Funktion: maschinenlesbare Statistik-Tab-Beweismatrix mit lokalen Fundstellen und als Schriftsatz-Pinpoint markierten Primärquellen.

### Maschinenlesbarer Primäranker ergänzt

- `SRC-BVERWG-6-B-23-24-AFD-VERDACHTSFALL-2025` / `FIND-COURT-BVERWG-6-B-23-24-2025`: BVerwG 6 B 23.24, Beschluss vom 20.05.2025, amtlicher Webanker, Randnummern 1-6. Beweisfunktion: Bundes-AfD rechtskräftig als Verdachtsfall beobachtbar; Menschenwürde-, Demokratie- und Zurechnungsachse, ohne gesichert-Bund als rechtskräftig zu überzeichnen.
