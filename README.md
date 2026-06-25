# AfD-Verbotsverfahren-Grundlagenforschung

<img width="1254" height="1254" alt="afd verdachtsfall" src="https://github.com/user-attachments/assets/a28a01ef-b937-4135-a0c2-1758abe54429" />


[![Watch on YouTube](https://img.youtube.com/vi/eSgFEpI9ZDQ/hqdefault.jpg)](https://www.youtube.com/watch?v=eSgFEpI9ZDQ "Auf YouTube ansehen")

[![Watch on YouTube](https://img.youtube.com/vi/nguiGvWcovA/hqdefault.jpg)](https://www.youtube.com/watch?v=nguiGvWcovA "Auf YouTube ansehen")



https://github.com/user-attachments/assets/92cd544f-f32d-4a2d-bb7d-24ba703612df

https://github.com/user-attachments/assets/cfd3127a-4806-4d61-b523-940bd1b3873c


Dieses Repository sammelt die zentralen Dokumente, Textfragmente und Forschungsergebnisse zur Vorbereitung einer Klageschrift gegen die Partei „Alternative für Deutschland“ (AfD) beim Bundesverfassungsgericht.

## Zweck & Scope (KI-Quellenbündel)

Dieses Repository ist **eine Bündelung öffentlich zugänglicher Quellen** als **Basiskorpus für KI-gestützte Analyse** (Suche, Retrieval, Clustering).  
Es ist **kein** fertiges Dossier und **ersetzt nicht** die professionelle Beweismittelaufbereitung für ein Gericht.

### Was dieses Repo ist
- **Quellenbasis**: Primärdokumente (Amt/Parlament/Partei) + Sekundärmaterial + Programmschriften.
- **KI-tauglich**: Strukturierte Ablage und Textfassungen zur maschinellen Auswertung.
- **Transparenz**: Soweit möglich mit **Original-URLs** und **Archiv-Links**; viele Quellen werden „möglichst vollständig“ bereitgestellt.

### Was es ausdrücklich nicht ist
- **Keine Rechtsberatung, keine Klageschrift** und **keine gerichtsfertige Beweisdatei**.
- **Keine Authentizitätsgarantie** im juristischen Sinn: Die **gerichtliche Übermittlung/Beweislogik** obliegt Fachjurist:innen.

### Hinweise für professionelle Teams
- **Gerichtsfeste Aufbereitung** (Chain of Custody, Pinpoint-Zitate, Zurechnung, Potentialität/Planmäßigkeit) wird **extern** erstellt.
- Wo verfügbar, sind **Original- und Archiv-Links** hinterlegt; **Hashes/Provenienz** können ergänzend erzeugt werden.
- **OCR-/Transkriptstellen** sind als solche zu behandeln; maßgeblich sind **Original-PDFs/-Scans**.

### Empfohlene Nutzung mit KI
- Retrieval über Dateinamen/Ordner + Volltext (z. B. Vektorindex).  
- Ergebnislisten **immer** mit Originalquelle gegenprüfen.  
- **Aus KI-Analysen folgen keine Beweiswerte** – sie sind nur Navigatoren zu den Quellen.

> Kurz: Das Repo liefert die **Quellen in Breite und Struktur**. Die **formale Übergabe an das Gericht** (Seiten-/Randnummern, Beweisführung, eidesstattliche Erklärungen etc.) obligt **den Profis**.


## Projektübersicht

- **Sachverhalt & Grundlagen:** Ausformulierte Entwürfe (PDFs) zum erweiterten Sachverhalt und den rechtlichen Grundlagen.
- **Geheimgutachten:** Vollständige Textfragmentsätze aus den Verfassungsschutz-Gutachten (Teil A & B) in .txt-Dateien.
- **15 Verbotsgründe:** Detaillierte Begründungen und Stichpunktlisten zu den 15 juristischen Verbotsargumenten.
- **Quellenverzeichnis:** Sammlung aller primären und sekundären Quellen (BKA-Berichte, parlamentarische Protokolle, Presseartikel).

## Repository-Struktur

```
├── PUBLIC_SOURCES.md
├── leicht zugängliche Quellen.txt
├── afd-verbot-deepresearch-ausgangspunkt.txt
├── quellen.pdf
├── ENTWURF KLAGESCHRIFT - ERWEITERTER SACHVERHALT - GRUNDLAGEN.pdf
├── ENTWURF KLAGESCHRIFT.pdf
├── WISSENSTAND MAI 2025 AfD.pdf
├── "Im Folgenden werden die zuvor genannten 15 Gründe…".pdf
├── Gründe für ein Afd-Verbots-Verfahren - KI generiert - PDF.pdf
├── schlimmsten zitate der afd.pdf
├── warum die afd verboten gehört.pdf
├── Warum die Alternative für Deutschland verboten gehört.pdf
├── gruende für ein afd verbotsverfahren.pdf
├── gruende_fuer_afd_verbot.txt
├── zusammenfassung_vfs_gutachten_afd.txt
├── Geheimgutachten_Teil A_pages_1_to_100.txt
├── Geheimgutachten_Teil A_pages_101_to_200.txt
├── … (Teil A bis Seite 508)
├── Geheimgutachten_Teil B_pages_1_to_100.txt
├── Geheimgutachten_Teil B_pages_101_to_200.txt
├── … (reparierte Fragmente bis Seite 609)
├── afd-verbot.de-scrape-dependencies.sh
├── afd-verbot.de-scrape-beweise-zitate.py
├── afd-verbot.de-scrape-link-liste.txt
├── zitate/afd-verbot.de-28.07.2025-proof-00001.md => afd-verbot.de-28.07.2025-proof-03611.md
└── README.md (diese Datei)

```
### Dateiliste mit Inhaltsbeschreibungen

| Datei                                                                                                            | Beschreibung                                                                                                                         |
|------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------|
| `README.md`                                                                                                      | Projektübersicht, Installations- und Nutzungshinweise                                                                                |
| `PUBLIC_SOURCES.md`                                                                                              | Sammlung aller öffentlich verfügbaren Quellen mit Download‑Links                                                                     |
| `ENTWURF KLAGESCHRIFT - ERWEITERTER SACHVERHALT - GRUNDLAGEN .pdf`                                               | Vollständiger Klageschrift‑Entwurf mit erweitertem Sachverhalt und Rechtsgrundlagen                                                  |
| `ENTWURF KLAGESCHRIFT .pdf`                                                                                      | Kompakter Entwurf der Klageschrift ohne Erweiterungen                                                                                |
| `WISSENSTAND MAI 2025 AfD.pdf`                                                                                   | Zusammenfassung aktueller Forschung und Medienberichte zur AfD (Stand Mai 2025)                                                      |
| `Gründe für ein Afd-Verbots-Verfahren - KI generiert - PDF.pdf`                                                  | KI‑gestützte Erarbeitung und Erläuterung von 15 juristischen Verbotsgründen                                                          |
| `Im Folgenden werden die zuvor genannten 15 Gründe… .pdf`                                                        | Vertiefende juristische Begründung der 15 Verbotsgründe                                                                              |
| `Gründe.txt`                                                                                                     | Kurze Stichpunktliste aller 15 Verbotsgründe                                                                                         |
| `schlimmsten zitate der afd.pdf`                                                                                 | Sammlung besonders gravierender Zitate von AfD‑Repräsentanten als Beleg für Verfassungsfeindlichkeit                                 |
| `warum die afd verboten gehört.pdf`                                                                              | Essay‑artige Darstellung, warum ein Verbotsverfahren gegen die AfD angezeigt ist                                                     |
| `gruende für ein afd verbotsverfahren.pdf`                                                                       | Prägnante Übersicht über die 15 juristischen Gründe                                                                                  |
| `gruende_fuer_afd_verbot.txt`                                                                                    | Textliche Stichpunkte zu den Verbotsgründen                                                                                          |
| `afd-verbot-deepresearch-ausgangspunkt.txt`                                                                      | Notizen zur initialen Deep‑Research‑Strategie und Suchansätze                                                                        |
| `quellen.pdf`                                                                                                    | Übersicht aller zitierten Primär‑ und Sekundärquellen                                                                                |
| `leicht zugängliche Quellen.txt`                                                                                 | Liste frei verfügbarer, leicht erreichbarer Referenzen                                                                               |
| `nsu-akten-gratis.pdf`                                                                                           | PDF‑Zusammenstellung der NSU‑Gerichtsakten (kostenfrei)                                                                              |
| **Geheimgutachten (OCR‑Texte)**                                                                                  |                                                                                                                                      |
| ├─ `geheimgutachten_txt/Teil A pages 1-508.txt`                                                                  | OCR‑Transkription des BfV‑Gutachtens Teil A, Seiten 1–508                                                                            |
| └─ `geheimgutachten_txt/Teil B pages 1-609 (repariert).txt`                                                      | OCR‑Transkription des BfV‑Gutachtens Teil B, Seiten 1–609 (manuell korrigiert)                                                       |
| **Bundestagsdrucksachen & Plenarprotokolle**                                                                     |                                                                                                                                      |
| `01_dserver.bundestag.de_btd_20_010_2001020.pdf`                                                                 | Drucksache 20/010: Protokoll der Anhörung zum Sicherheitspaket (23. Sep 2024)                                                        |
| `02_dserver.bundestag.de_btd_20_133_2013317.pdf`                                                                 | Drucksache 20/133: Plenarprotokoll 86. Sitzung – Hetze‑Debatte (23. Sep 2024)                                                        |
| `03_dserver.bundestag.de_btp_20_20203.pdf`                                                                       | Plenarprotokoll 203. Sitzung – Anhörung zum Verfassungsschutz (5. Dez 2024)                                                          |
| **Verfassungsschutzberichte & Ministerien**                                                                      |                                                                                                                                      |
| `www_verfassungsschutz_de_…verfassungsschutzbericht-2023.pdf`                                                    | Volltext Verfassungsschutzbericht 2023 (BfV)                                                                                         |
| `www_verfassungsschutz_de_…verfassungsschutzbericht-2024.pdf`                                                    | Volltext Verfassungsschutzbericht 2024 (BfV)                                                                                         |
| `www_verfassungsschutz_de_…-2023.html`                                                                           | Kurzfassung Verfassungsschutzbericht 2023 (Web‑Version)                                                                              |
| `www_verfassungsschutz_de_…-2024.html`                                                                           | Kurzfassung Verfassungsschutzbericht 2024 (Web‑Version)                                                                              |
| `www_bmi_bund_de_…vsb2023-BMI24018.pdf`                                                                          | Volltext Verfassungsschutzbericht 2023 (BMI)                                                                                         |
| `www_bmi_bund_de_…BMI25029-vsb2024.pdf`                                                                          | Volltext Verfassungsschutzbericht 2024 (BMI)                                                                                         |
| ------------------------------------------ | -------------- |
| **Geheimgutachten (OCR-Splits)** | |
| `Geheimgutachten_Teil_A_pages_1_to_100.txt` | OCR-Teilstück BfV-Gutachten Teil A, S. 1–100 |
| `Geheimgutachten_Teil_A_pages_201_to_300.txt` | OCR-Teilstück BfV-Gutachten Teil A, S. 201–300 |
| `Geheimgutachten_Teil_A_pages_301_to_400.txt` | OCR-Teilstück BfV-Gutachten Teil A, S. 301–400 |
| `Geheimgutachten_Teil_A_pages_401_to_500.txt` | OCR-Teilstück BfV-Gutachten Teil A, S. 401–500 |
| `Geheimgutachten_Teil_A_pages_501_to_508.txt` | OCR-Teilstück BfV-Gutachten Teil A, S. 501–508 |
| `Geheimgutachten_Teil_B_pages_1_to_100.txt` | OCR-Teilstück BfV-Gutachten Teil B, S. 1–100 |
| `Geheimgutachten_Teil_B_pages_101_to_200.txt` | OCR-Teilstück BfV-Gutachten Teil B, S. 101–200 |
| `Geheimgutachten_Teil_B_pages_201_to_300.txt` | OCR-Teilstück BfV-Gutachten Teil B, S. 201–300 |
| `Geheimgutachten_Teil_B_pages_301_to_400.txt` | OCR-Teilstück BfV-Gutachten Teil B, S. 301–400 |
| `Geheimgutachten_Teil_B_pages_401_to_500.txt` | OCR-Teilstück BfV-Gutachten Teil B, S. 401–500 |
| `Geheimgutachten_Teil_B_pages_501_to_600*.txt` | OCR-Teilstücke BfV-Gutachten Teil B, S. 501–600 (mehrere reparierte Versionen) |
| `Geheimgutachten_Teil_B_pages_601_to_609*.txt` | OCR-Teilstücke BfV-Gutachten Teil B, S. 601–609 (reparierte Versionen) |
| -------------------------------------------------------------------- | --------------------------------------- |
| **BfV-Verfassungsschutzbericht 2024 (PDF-Splits)** | |
| `part1_1-52.pdf`    | Seiten 1–52    |
| `part2_53-104.pdf`  | Seiten 53–104  |
| `part3_105-156.pdf` | Seiten 105–156 |
| `part4_157-208.pdf` | Seiten 157–208 |
| `part5_209-260.pdf` | Seiten 209–260 |
| `part6_261-312.pdf` | Seiten 261–312 |
| `part7_313-364.pdf` | Seiten 313–364 |
| `part8_365-412.pdf` | Seiten 365–412 |
| -------------------------------------------------------------------- | --------------------------------------- |
|**LfV Hessen Jahresbericht 2024 (PDF-Splits)** | |
| `lfv_jahresbericht_2024_part1_1-25.pdf`    | Seiten 1–25    |
| `lfv_jahresbericht_2024_part2_26-50.pdf`   | Seiten 26–50   |
| `lfv_jahresbericht_2024_part3_51-75.pdf`   | Seiten 51–75   |
| `lfv_jahresbericht_2024_part4_76-100.pdf`  | Seiten 76–100  |
| `lfv_jahresbericht_2024_part5_101-125.pdf` | Seiten 101–125 |
| `lfv_jahresbericht_2024_part6_126-150.pdf` | Seiten 126–150 |
| `lfv_jahresbericht_2024_part7_151-175.pdf` | Seiten 151–175 |
| `lfv_jahresbericht_2024_part8_176-199.pdf` | Seiten 176–199 |
| -------------------------------------------------------------------- | --------------------------------------- |
| **GFF AfD-Gutachten (PDF-Splits)** | *Logische, kapitelgenaue Aufteilung des 3.062-seitigen GFF-Gutachtens (Sicherung für KI-Verarbeitung & GitHub-Limits)* |
| `GFF_AfD-Gutachten_Teil_01_Inhaltsueberblick_Zusammenfassung.pdf`     | Teil 1: Cover, Inhaltsüberblick & Zusammenfassung (Seiten 1–124)                                                                     |
| `GFF_AfD-Gutachten_Teil_02_Einfuehrung.pdf`                           | Teil 2: Einführung (Seiten 125–196)                                                                                                  |
| `GFF_AfD-Gutachten_Teil_03_Teil_1_Entwicklung_Machtzentren_Vorfeld.pdf`| Teil 3: Teil 1 (Entwicklung, Machtzentren, Vorfeld) (Seiten 197–409)                                                                  |
| `GFF_AfD-Gutachten_Teil_04_Teil_2_Rechtliche_Maassstaebe.pdf`         | Teil 4: Teil 2 (Rechtliche Maßstäbe) (Seiten 410–521)                                                                                |
| `GFF_AfD-Gutachten_Teil_05_Teil_3_A_Menschenwuerde.pdf`               | Teil 5: Teil 3-A (Menschenwürde) (Seiten 522–1318)                                                                                   |
| `GFF_AfD-Gutachten_Teil_06_Teil_3_B_G_Demokratie_Rechtsstaat_Ergebnis.pdf`| Teil 6: Teil 3-B-G (Demokratie, Rechtsstaat, Gesamtergebnis) (Seiten 1319–1576)                                                       |
| `GFF_AfD-Gutachten_Teil_07_Schluss_Literaturverzeichnis.pdf`          | Teil 7: Schluss, Danksagung & Literaturverzeichnis (Seiten 1577–1677)                                                                |
| `GFF_AfD-Gutachten_Teil_08_Anhang_A_Methodik.pdf`                     | Teil 8: Anhang A (Methodik) (Seiten 1678–1724)                                                                                       |
| `GFF_AfD-Gutachten_Teil_09_Anhang_B_Belege_Menschenwuerde.pdf`        | Teil 9: Anhang B (Belege Menschenwürde) (Seiten 1725–2810)                                                                           |
| `GFF_AfD-Gutachten_Teil_10_Anhang_C_E_Weitere_Belege.pdf`             | Teil 10: Anhang C–E (Belege Demokratie, Rechtsstaat, NS-Wesensverwandtschaft) (Seiten 2811–3062)                                     |
| -------------------------------------------------------------------- | --------------------------------------- |
| **Studien & NGO‑Berichte**                                                                                       |                                                                                                                                      |
| `01_cemas.io_en_blog_active-clubs-in-germany…pdf`                                                                | Gerenderte HTML‑Studie „Active Clubs in Germany“ (CeMAS)                                                                             |
| `02_www_institut-fuer-menschenrechte_de_…Analyse_Warum_die_AfD_verboten…pdf`                                     | Analyse „Warum die AfD verboten werden könnte“ (Institut für Menschenrechte)                                                         |
| **Mediabeiträge (HTML)**                                                                                         |                                                                                                                                      |
| `www_deutschlandfunk.de_afd-einstufung-verfassungsschutz-100.html`                                               | Artikel Deutschlandfunk: AfD‑Einstufung durch den VS                                                                                 |
| `www_zdfheute.de_afd-verfassungsschutz-gutachten-rechtsextremistisch-100.html`                                   | ZDF‑heute‑Beitrag zum VS‑Gutachten                                                                                                   |
| `www_dw.com_de_afd-einstufung-verfassungsschutz…-a-72478906`                                                     | Deutsche Welle: Aussetzung der AfD‑Einstufung                                                                                        |
| `www_tagesschau.de_afd-systemmedien-101.html`                                                                    | Tagesschau: „AfD attackiert ‚Systemmedien‘“                                                                                          |
| `www_belltower.news_rassistische-narrative…-144885`                                                              | Belltower.News: Analyse rassistischer Narrative nach Silvester                                                                       |
| `www_mdr.de_investigativ_chat-leaks-afd-thueringen-102.html`                                                     | MDR Investigativ: Thüringer Chat‑Leaks                                                                                               |
| `reuters.com_article_germany-security-agency-extremist-idUSKBN2XX0ZY`                                            | Reuters‑Artikel: VS stuft AfD als extremistische Bestrebung ein                                                                      |
| `theguardian.com_world_2025_may_03_germany-security-service-labels-afd-extremist`                                | The Guardian: Bericht zu VS‑Einstufung der AfD                                                                                       |
| `spiegel.de_politik_deutschland_roedder-warnt-vor-buergerkrieg…12345678.html`                                    | Der Spiegel: Warnung Andreas Rödder vor Bürgerkriegsszenarien bei AfD‑Verbot                                                         |
| **Web‑Archive & Suchportale**                                                                                    |                                                                                                                                      |
| `verfassungsschutzberichte.de/`                                                                                  | Portal zu allen VS‑Jahresberichten                                                                                                   |
| `juris.de/jportal/?quelle=jlink&query=BVerfGE+123%2C267`                                                         | juris‑Suche: BVerfGE 123, 267 ff.                                                                                                    |
| **Petitionen & Umfragen**                                                                                        |                                                                                                                                      |
| `campact.de/afd-verbotsverfahren/petition`                                                                       | Campact‑Petition gegen rechtsextreme Landesverbände                                                                                  |
| `ifd-allensbach.de/umfragen/…Bericht_AfD_Verbot_2025.pdf`                                                        | IfD Allensbach‑Umfrage zur AfD‑Verbotsfrage (n≈1 054)                                                                                |
| `insa.de/…BAMS_AfD_Verbot_Mai2025.pdf`                                                                           | INSA‑Umfrage im Auftrag der BAMS (n≈1 001)                                                                                           |
| `fragdenstaat.de/a/afd-verbotsverfahren/download/?format=pdf`                                                    | FragDenStaat‑Beweissammelportal (PDF‑Download)                                                                                       |
| `verfassungsblog.de/partgeltungsbereich-art21gg/`                                                                | Verfassungsblog: Geltungsbereich Art. 21 GG und Parteienverbote                                                                      |
| **Rechtswissenschaftliche Artikel**                                                                              |                                                                                                                                      |
| `lto.de/…gutachterstreit-afd-parteiverbotsverfahren/`                                                            | Legal Tribune Online: Gutachterstreit um AfD‑Verbotsverfahren                                                                        |
| `lto.de/…interview-felor-badenberg-afd-verbot/`                                                                  | LTO‑Interview mit Felor Badenberg zur AfD‑Verbotsdebatte                                                                             |
| `cambridge.org/core/journals/european-law-review/…bverfg-practice/`                                              | Cambridge Law Journal: Vergleich europäischer Parteienverbote (BVerfG‑Praxis)                                                        |
| `afd-verbot.de/beweise`                                                                                          | Zitate Sammlung der Afd durch afd-verbot.de  - Zentrum für politische Schönheit                                                      |

---

# Ergänzungen thematisch sortiert

---

## 1) Thematische Gliederung mit vollständiger Dateiliste

### A) Klageschrift & Argumente (2)
- `ENTWURF KLAGESCHRIFT - ERWEITERTER SACHVERHALT - GRUNDLAGEN .pdf`
- `ENTWURF KLAGESCHRIFT .pdf`

---

### B) Gutachten & Rechtsanalysen (31)
- **GFF AfD-Gutachten (PDF-Splits) – *Logisch und kapitelgenau gesplittet für KI-Verarbeitung & GitHub-Limits (3.062 Seiten)*:**
  - `GFF_AfD-Gutachten_Teil_01_Inhaltsueberblick_Zusammenfassung.pdf` *(Cover, Inhaltsüberblick & Zusammenfassung, S. 1–124)*
  - `GFF_AfD-Gutachten_Teil_02_Einfuehrung.pdf` *(Einführung, S. 125–196)*
  - `GFF_AfD-Gutachten_Teil_03_Teil_1_Entwicklung_Machtzentren_Vorfeld.pdf` *(Teil 1: Entwicklung, Machtzentren, Vorfeld, S. 197–409)*
  - `GFF_AfD-Gutachten_Teil_04_Teil_2_Rechtliche_Maassstaebe.pdf` *(Teil 2: Rechtliche Maßstäbe, S. 410–521)*
  - `GFF_AfD-Gutachten_Teil_05_Teil_3_A_Menschenwuerde.pdf` *(Teil 3-A: Verfassungswidrigkeit - Menschenwürde, S. 522–1318)*
  - `GFF_AfD-Gutachten_Teil_06_Teil_3_B_G_Demokratie_Rechtsstaat_Ergebnis.pdf` *(Teil 3-B-G: Demokratie, Rechtsstaat, Gesamtergebnis, S. 1319–1576)*
  - `GFF_AfD-Gutachten_Teil_07_Schluss_Literaturverzeichnis.pdf` *(Schluss, Danksagung & Literaturverzeichnis, S. 1577–1677)*
  - `GFF_AfD-Gutachten_Teil_08_Anhang_A_Methodik.pdf` *(Anhang A: Methodik, S. 1678–1724)*
  - `GFF_AfD-Gutachten_Teil_09_Anhang_B_Belege_Menschenwuerde.pdf` *(Anhang B: Belege Menschenwürde, S. 1725–2810)*
  - `GFF_AfD-Gutachten_Teil_10_Anhang_C_E_Weitere_Belege.pdf` *(Anhang C-E: Belege Demokratie, Rechtsstaat, NS-Wesensverwandtschaft, S. 2811–3062)*
- `AfD-Verbot_ Alle Anträge, Abstimmungen und Gutachten.pdf`
- `ChatGPT - Analyse-Beispiel.pdf`
- `ChatGPT - Analyse-Beispiel-2.pdf`
- `ChatGPT - Analyse-Beispiel-3.pdf`
- `ChatGPT - Analyse-Beispiel-4.pdf`
- `ChatGPT - BRANDBRIEF.pdf`
- `ChatGPT - Begründung für ein entschiedenes Handeln.pdf`
- `ChatGPT - Warum die Alternative für Deutschland.pdf`
- `Gründe für ein Afd-Verbots-Verfahren - KI generiert - PDF.pdf`
- `Gründe.txt`
- `Im Folgenden werden die zuvor genannten 15 Gründe für ein Parteiverbot der AfD jeweils ausführlich begründet.pdf`
- `Ludwigshafen_ AfD-Politiker darf nicht bei OB-Wahl antreten, das sind die Gründe _ taz.de.pdf`
- `Mögliches AfD-Verbot_ Gutachten liefert neue Argumente.pdf`
- `Warum die AfD eine Gefahr für die Demokratie ist.pdf`
- `Warum die Alternative für Deutschland verboten gehört.pdf`
- `Warum die Normalisierung der AfD eine Gefahr für die Demokratie darstellt.pdf`
- `untersuchung-bfv-gutachten-und-afd-parteiverbot.pdf`
- `warum die afd verboten gehört.pdf`
- `zusammenfassung_vfs_gutachten_afd.txt`
- `02_www.institut-fuer-menschenrechte.de_fileadmin_Redaktion_Pub...Analyse_Warum_die_AfD_verboten_werden_koennte.pdf.pdf`
- `08_www.institut-fuer-menschenrechte.de_fileadmin_Redaktion_Pub...Analyse_Warum_die_AfD_verboten_werden_koennte.pdf.pdf`

---

### C) Amtliche Quellen (BfV/BMI/BKA/BT/BR/BVerfG) (21)
- `01_dserver.bundestag.de_btd_20_010_2001020.pdf.pdf`
- `02_dserver.bundestag.de_btd_20_133_2013317.pdf.pdf`
- `03_dserver.bundestag.de_btp_20_20203.pdf.pdf`
- `07_dserver_bundestag_de_btd_20_010_2001020.pdf`
- `08_dserver_bundestag_de_btd_20_133_2013317.pdf`
- `09_dserver_bundestag_de_btp_20_20203.pdf`
- `01_www_verfassungsschutz_de_...verfassungsschutzbericht-2023.pdf`
- `02_www_verfassungsschutz_de_...verfassungsschutzbericht-2023.html.pdf`
- `03_www_verfassungsschutz_de_...verfassungsschutzbericht-2024.pdf`
- `04_www_verfassungsschutz_de_...verfassungsschutzbericht-2024.html.pdf`
- `05_www_bmi_bund_de_...vsb2023-BMI24018.pdf`
- `06_www_bmi_bund_de_...BMI25029-vsb2024.pdf`
- `18_verfassungsschutzberichte.de_.pdf`
- `AfD-Spende_ Bundestag sieht Tatverdacht bestätigt.pdf`
- `Bundestag_ Missbraucht die AfD die Kleinen Anfragen_ Eine Datenanalyse - SZ.de.pdf`
- `Bundestagsverwaltung_ Wahlplakat-Spende an AfD war unzulässig.pdf`
- `03_www.deutschlandfunk.de_afd-einstufung-verfassungsschutz-rechtsextrem-100.html.pdf`
- `04_www.zdfheute.de_politik_deutschland_afd-verfassungsschutz-gutachten-rechtsextremistisch-100.html.pdf`
- `09_www.deutschlandfunk.de_afd-einstufung-verfassungsschutz-rechtsextrem-100.html.pdf`
- `10_www.zdfheute.de_politik_deutschland_afd-verfassungsschutz-gutachten-rechtsextremistisch-100.html.pdf`
- `22_www.tagesschau.de_inland_innenpolitik_afd-rechtsextrem-verfassungsschutz-100.html.pdf`
- BfV-Verfassungsschutzbericht 2024 (PDF-Splits):
- `part1_1-52.pdf`
- `part2_53-104.pdf`
- `part3_105-156.pdf`
- `part4_157-208.pdf`
- `part5_209-260.pdf`
- `part6_261-312.pdf`
- `part7_313-364.pdf`
- `part8_365-412.pdf`
- LfV Hessen Jahresbericht 2024 (PDF-Splits):
- `lfv_jahresbericht_2024_part1_1-25.pdf`
- `lfv_jahresbericht_2024_part2_26-50.pdf`
- `lfv_jahresbericht_2024_part3_51-75.pdf`
- `lfv_jahresbericht_2024_part4_76-100.pdf`
- `lfv_jahresbericht_2024_part5_101-125.pdf`
- `lfv_jahresbericht_2024_part6_126-150.pdf`
- `lfv_jahresbericht_2024_part7_151-175.pdf`
- `lfv_jahresbericht_2024_part8_176-199.pdf`
- `nsu-akten-gratis.pdf`

> Hinweis: Einige Pressestücke sind hier eingeordnet, weil sie amtliche Einstufungen/Verfahrensstände dokumentieren. In der README kann man sie als **Sekundärbelege zu amtlichen Vorgängen** kennzeichnen.

---
Ich habe mal das Leak für eine KI aufbereitet. Der Verfassungsschutzbericht ist ja nur nach alter Antifa-Manier, Antifa ist Handarbeit, nur eingescannt worden. Das bereitet KI dadurch Probleme es zu in Gänze zu lesen. Deshalb habe ich ein Python-Script mit Tesseract und OCR drüber laufen lassen und die Bilder als Text-Form gespeichert. Die Textform hat trotz spezieller Tricks zur besseren Verarbeitung kleine Typo-Fehler. Aber mit den originalen PDF (in gesplitteter Form - wegen der Ausgabenbegrenzung von KI) kann die KI den Inhalt zu 96% erfassen. Da ein Verbotsverfahren realistisch bis zu 3 Jahren dauert, können Anwaltskanzleien, oder Interessierte nun KI's damit füttern. Ich habe gleich mal einen Anfang einer Klageschrift, mögliche noch unter Verschluss liegende Quellen die nötig sind, eine Presseschau und Gründe für ein Verbot beigefügt. Da das Ganze bis zu 3 Jahren dauern würde und dann die nächsten Bundestagswahlen sind, und vorraussichtlich die AfD dann sehr viele Stimmen bekommt, sollte man JETZT damit anfangen. Auch wenn gerade der Mantel des Schweigens drüber gelegt ist und Dobrindt mit seiner Konservativen Revolution (man googel mal den Ursprung dieses Begriffes auf Wikipedia) alles andere als aktiv wird, sollte man eigentlich nun (auch wenn der Leak aus ner blöden Ecke kommt) eigentlich dieses Thema vorranbringen. Denn wenn die Afd erstmal an der Macht ist, bleibt wahrscheinlich nicht mehr viel, um deren Faschismus noch zu stoppen.

---
### D) Geheimgutachten (OCR/Textfragmente) (24)
- `Geheimgutachten_Teil A_pages_1_to_100.txt`
- `Geheimgutachten_Teil A_pages_101_to_200.txt`
- `Geheimgutachten_Teil A_pages_201_to_300.txt`
- `Geheimgutachten_Teil A_pages_301_to_400.txt`
- `Geheimgutachten_Teil A_pages_401_to_500.txt`
- `Geheimgutachten_Teil A_pages_501_to_508.txt`
- `Geheimgutachten_Teil B_pages_1_to_100.txt`
- `Geheimgutachten_Teil B_pages_101_to_200.txt`
- `Geheimgutachten_Teil B_pages_201_to_300.txt`
- `Geheimgutachten_Teil B_pages_301_to_400.txt`
- `Geheimgutachten_Teil B_pages_401_to_500.txt`
- `Geheimgutachten_Teil B_pages_501_to_600_repaired_pages_1_to_10.txt`
- `Geheimgutachten_Teil B_pages_501_to_600_repaired_pages_11_to_20.txt`
- `Geheimgutachten_Teil B_pages_501_to_600_repaired_pages_21_to_30.txt`
- `Geheimgutachten_Teil B_pages_501_to_600_repaired_pages_31_to_40.txt`
- `Geheimgutachten_Teil B_pages_501_to_600_repaired_pages_41_to_50.txt`
- `Geheimgutachten_Teil B_pages_501_to_600_repaired_pages_51_to_60.txt`
- `Geheimgutachten_Teil B_pages_501_to_600_repaired_pages_61_to_70.txt`
- `Geheimgutachten_Teil B_pages_501_to_600_repaired_pages_71_to_80.txt`
- `Geheimgutachten_Teil B_pages_501_to_600_repaired_pages_81_to_90.txt`
- `Geheimgutachten_Teil B_pages_501_to_600_repaired_pages_91_to_100.txt`
- `Geheimgutachten_Teil B_pages_601_to_609_repaired_pages_1_to_9.txt`
- (sowie 2 DW‑PDF‑Clippings zum Einstufungsverfahren; als Kontext eingefügt)

---
## Primärquelle ergänzt
- `AfD_Bundestagswahlprogramm2025_web.pdf`
--- 
### E) Zitate & Belege (afd‑verbot.de / Proof‑Sammlung) (3 614)
- Ordner: `zitate/`
- Struktur: `afd-verbot.de-<YYYY-MM-DD>-proof-xxxxx.md`  
- **Beispiele**:  
  - `zitate/afd-verbot.de-28.07.2025-proof-00001.md`  
  - `zitate/afd-verbot.de-28.07.2025-proof-00002.md`  
  - `zitate/afd-verbot.de-28.07.2025-proof-00003.md`  
  - `…`  
  - `zitate/afd-verbot.de-28.07.2025-proof-03609.md`  
  - `zitate/afd-verbot.de-28.07.2025-proof-03610.md`  
  - `zitate/afd-verbot.de-28.07.2025-proof-03611.md`

> **README‑Hinweis**: In der Datei `afd-verbot.de-scrape-link-liste.txt` liegt die maschinenlesbare Linkliste.  
> Die Proof‑Dateien sind vollständig nummeriert (00001–03611) und chronologisch datiert.

---

### F) Skripte & Tools (18)
- `afd-verbot.de-scrape-dependencies.sh`
- `afd-verbot.de-scrape-beweise-zitate.py`
- `afd-verbot-linkliste.py`
- `afd-verbot-print-proofs.py`
- `pdf-to-md.sh`
- `split_pdf.py`
- `split10_pdf.py`
- `bulk_ocr_pdfs_to_md.py`
- `setup_all_ocr_deps.sh`
- `dependencies.sh`
- `afd-verbot-deepresearch-ausgangspunkt_split_1.txt`
- `afd-verbot-deepresearch-ausgangspunkt_split_2.txt`
- `afd-verbot-deepresearch-ausgangspunkt_split_3.txt`
- `afd-verbot-deepresearch-ausgangspunkt_split_4.txt`
- `afd-verbot-deepresearch-ausgangspunkt_split_5.txt`
- `afd-verbot-deepresearch-ausgangspunkt_split_6.txt`
- `afd-verbot-deepresearch-ausgangspunkt_split_7.txt`
- `afd-verbot-deepresearch-ausgangspunkt_split_8.txt`

### G) Bilder & Assets (2)
- `afd-politiker-krah-mit-waffe.jpg`
- `zusammenarbeit-adj-rechtsextreme.jpg`

---

### H) Sonstiges / Notizen (66)
- `PUBLIC_SOURCES.md`
- `leicht zugängliche Quellen.txt`
- `quellen.pdf`
- diverse Pressespiegel‑PDFs und Projektmemos (vollständig im Repo enthalten)

---
## Presse / Medienberichte (HTML)
- `www.deutschlandfunk.de_afd-einstufung-verfassungsschutz-100.html`
- `www.zdfheute.de_afd-verfassungsschutz-gutachten-rechtsextremistisch-100.html`
- `www.dw.com_de_afd-einstufung-verfassungsschutz…-a-72478906`
- `www.tagesschau.de_afd-systemmedien-101.html`
- `www_belltower.news_rassistische-narrative…-144885`
- `www.mdr.de_investigativ_chat-leaks-afd-thueringen-102.html`
- `reuters.com_article_germany-security-agency-extremist-idUSKBN2XX0ZY`
- `theguardian.com_world_2025_may_03_germany-security-service-labels-afd-extremist`
- `spiegel.de_politik_deutschland_roedder-warnt-vor-buergerkrieg…12345678.html`

## Presse / Medienberichte (PDF)
- `03_www.deutschlandfunk.de_afd-einstufung-verfassungsschutz-rechtsextrem-100.html.pdf`
- `04_www.zdfheute.de_politik_deutschland_afd-verfassungsschutz-gutachten-rechtsextremistisch-100.html.pdf`
- `09_www.deutschlandfunk.de_afd-einstufung-verfassungsschutz-rechtsextrem-100.html.pdf`
- `10_www.zdfheute.de_politik_deutschland_afd-verfassungsschutz-gutachten-rechtsextremistisch-100.html.pdf`
- `22_www.tagesschau.de_inland_innenpolitik_afd-rechtsextrem-verfassungsschutz-100.html.pdf`
- `Urteile gegen Höcke wegen NS-Parole rechtskräftig.pdf`

## Presseberichte mit Amtsbezug
- `Bundestag_ Missbraucht die AfD die Kleinen Anfragen_ Eine Datenanalyse – SZ.de.pdf`
- `Bundestagsverwaltung_ Wahlplakat-Spende an AfD war unzulässig.pdf`
- `AfD-Spende_ Bundestag sieht Tatverdacht bestätigt.pdf`
---

## 2) Navigations‑Blöcke (für die README)

### 📁 Schnellzugriff auf Kerndossiers
- **Klageschrift** → `ENTWURF KLAGESCHRIFT*.pdf`  
- **BfV/BMI/Bundestag** → Abschnitt **C) Amtliche Quellen**  
- **Geheimgutachten (OCR)** → Abschnitt **D)**  
- **Belege (afd‑verbot.de)** → Ordner `zitate/` + `afd-verbot.de-scrape-link-liste.txt`  
- **Skripte** → Abschnitt **F)**

### 🔎 Suchtipps (README‑Snippet)
```bash
# Beispiel: paramilitärische Belege aus den Proofs
rg -n --iglob 'zitate/*.md' -e 'paramilitär|Kampfsport|Active Club|Schieß|Waffen'

# Beispiel: Volksbegriff-/Menschenwürde-Fundstellen in Geheimgutachten
rg -n --iglob 'Geheimgutachten_*' -e 'Volksbegriff|Menschenwürde|ethnisch|völkisch'
```

---
## Projektstruktur

Das Repository ist in thematische Bereiche gegliedert:

### 1. Analysen & Begründung
- ChatGPT - Analyse-Beispiel.pdf
- ChatGPT - Analyse-Beispiel-2.pdf
- ChatGPT - Analyse-Beispiel-3.pdf
- ChatGPT - Analyse-Beispiel-4.pdf
- ChatGPT - Warum die Alternative für Deutschland.pdf
- ChatGPT - Begründung für ein entschiedenes Handeln.pdf
- ChatGPT - BRANDBRIEF.pdf

### 2. Externe Gutachten & Stellungnahmen
- Claude - Warum ein AfD-Verbot verfassungsrechtlich geboten und demokratiepolitisch überfällig ist.pdf
- Untersuchung-BfV-Gutachten-und-AfD-Parteiverbot.pdf
- AfD-Verbot_ Alle Anträge, Abstimmungen und Gutachten.pdf
- Mögliches AfD-Verbot_ Gutachten liefert neue Argumente.pdf

### 3. Offizielle Dokumente & Quellen
- Bundesverwaltungsgericht_ AfD-Einstufung als Verdachtsfall (Tagesschau).pdf
- quellen.pdf (Übersicht zu allen zitierten Dokumenten und parlamentarischen Protokollen)
- leicht zugängliche Quellen.txt

### 4. DeepResearch-Datensätze
- afd-verbot-deepresearch-ausgangspunkt_split_1.txt – split_8.txt

---

## Quellenlage
Die Datei **quellen.pdf** enthält eine konsolidierte Übersicht zu den verwendeten Belegen.  
Dort sind u. a. enthalten:
- Verfassungsschutzberichte (BMI)
- Bundestagsprotokolle (Plenar- und Ausschusssitzungen)
- Juristische Referenzen (BVerfG, BVerfGG, § 21 GG)
- Hinweise auf nicht-öffentliche, aber alternative öffentlich zugängliche Dokumente

→ Diese Datei dient als verbindlicher Kern-Nachweis der Zitate und Argumentationslinien.

---

## Erklärung
- **Analysen** dienen als argumentative Grundlage (zivilgesellschaftliche & KI-generierte Perspektiven).  
- **Gutachten** liefern juristische und verfassungsrechtliche Begründungen.  
- **Quellen** sichern Nachprüfbarkeit durch amtliche Dokumente.  
- **DeepResearch** bündelt Langtexte, die für KI-gestützte Auswertungen vorbereitet sind.


---


# Nutzung

1. **Repository klonen**
   ```bash
   git clone https://github.com/ERROR-WATCH/AfD-Verbotsverfahren-Grundlagenforschung.git
   cd AfD-Verbotsverfahren-Grundlagenforschung
   ```

2. **Recherche & Konsolidierung**
   - Suche in den `.txt`-Fragmenten nach spezifischen Begriffen (z. B. "paramilitär", "Verschwörung").
   - Vergleiche die Entwurfsklauseln in den PDFs für Sachverhalts- und Rechtsbegründungskapitel.

3. Nutze Deepresearch um die Quellen zu prüfen

   <img width="835" height="675" alt="image" src="https://github.com/user-attachments/assets/31bbbdb7-1c8a-464b-af76-47651c9225b5" />
   <img width="847" height="664" alt="image" src="https://github.com/user-attachments/assets/69c286e0-509c-4411-aa2a-4b39cbb1ef08" />
   <img width="863" height="659" alt="image" src="https://github.com/user-attachments/assets/12c7862e-9962-4090-b252-57ca53122056" />

   Beispiele:
```
   https://github.com/ERROR-WATCH/AfD-Verbotsverfahren-Grundlagenforschung/blob/main/ChatGPT%20-%20Analyse-Beispiel.pdf
   https://github.com/ERROR-WATCH/AfD-Verbotsverfahren-Grundlagenforschung/blob/main/ChatGPT%20-%20Analyse-Beispiel-2.pdf
   https://github.com/ERROR-WATCH/AfD-Verbotsverfahren-Grundlagenforschung/blob/main/ChatGPT%20-%20Analyse-Beispiel-3.pdf
   https://github.com/ERROR-WATCH/AfD-Verbotsverfahren-Grundlagenforschung/blob/main/ChatGPT%20-%20Analyse-Beispiel-4.pdf
````
   Beispiel 2:
```
   https://github.com/ERROR-WATCH/AfD-Verbotsverfahren-Grundlagenforschung/blob/main/ChatGPT%20-%20Warum%20die%20Alternative%20f%C3%BCr%20Deutschland.pdf
````
   Beispiel 3:
```   
   https://github.com/ERROR-WATCH/AfD-Verbotsverfahren-Grundlagenforschung/blob/main/Zitate%20Analyse%20Hausarbeit.pdf
````
   Beispiel 4:
```
   https://github.com/ERROR-WATCH/AfD-Verbotsverfahren-Grundlagenforschung/blob/main/Warum%20die%20AfD%20eine%20Gefahr%20f%C3%BCr%20die%20Demokratie%20ist.pdf
````
   Beispiel 5:
```
   https://github.com/ERROR-WATCH/AfD-Verbotsverfahren-Grundlagenforschung/blob/main/Warum%20die%20Normalisierung%20der%20AfD%20eine%20Gefahr%20f%C3%BCr%20die%20Demokratie%20darstellt.pdf
````
   Beispiel 6:
```
   https://github.com/ERROR-WATCH/AfD-Verbotsverfahren-Grundlagenforschung/blob/main/Claude%20-%20Warum%20ein%20AfD-Verbot%20verfassungsrechtlich%20geboten%20und%20demokratiepolitisch%20%C3%BCberf%C3%A4llig%20ist.pdf
````
   Beispiel 7:
```
   https://github.com/ERROR-WATCH/AfD-Verbotsverfahren-Grundlagenforschung/blob/main/ChatGPT%20-%20Szenarioanalyse_%20AfD-Wahlsieg%202025%20und%20Regierungs%C3%BCbernahme%20(2025%E2%80%932029).pdf
````

5. Wenn wirklich ein Verbotsverfahren anfangen sollte und Sie Staatsanwalt sind, finden sie Möglichkeiten, die noch nicht zugänglichen Quellen in [`quellen.pdf`](./quellen.pdf) , dem Gericht zugänglich zu machen

   
---
## KI-gestützte Analyse und Automatisierung

Dieses Repository ist bewusst so aufgebaut, dass es sowohl Jurist:innen als auch Data-Science-Teams effizient unterstützt. Die wichtigsten KI-relevanten Features auf einen Blick:

1. **Durchsuchbare Rohtexte**  
   Die VS-Geheimgutachten liegen als plain-text-Fragmente (*.txt*) vor. Dadurch entfällt aufwändiges OCR- und PDF-Parsing, und KI-Modelle können direkt Named-Entity-Recognition, semantische Suche oder Topic-Modeling auf den Dokumenten ausführen.

2. **Template-basierte Entwurfs-PDFs**  
   Die Klageschrift-Entwürfe (*.pdf*) sind in klar strukturierten Abschnitten (A–D) gegliedert und enthalten Platzhalter für Fußnoten und Seitennachweise. Mit gezielten Prompts lassen sich mit Legal-LMs automatisch alle Quellenangaben vervollständigen und Prüffragen validieren.

3. **Maschinenlesbare Linklisten**  
   Dateien wie `PUBLIC_SOURCES.md` und `leicht zugängliche Quellen.txt` liefern strukturierte Metadaten und URLs. Sie können direkt in Crawler-Skripte oder ETL-Pipelines eingespeist werden, um neue Verfassungsschutzberichte, Bundestagsdokumente oder Gerichtsurteile fortlaufend zu überwachen und zu archivieren.

4. **Graph- und Relationsextraktion**  
   Die Zuordnung von juristischen Argumenten zu Quellen im `quellen.pdf` ermöglicht es, automatisch einen Fakten-Graphen zu generieren (z. B. mit Neo4j), in dem Knoten (Argumente) und Kanten (Belege) visualisiert und Lücken identifiziert werden können.

5. **Nahtlose Integration in ML-Workflows**  
   Standardisierte Dateinamen und Ordnerstrukturen machen es einfach, die Daten in Jupyter-Notebooks, Colab-Environments oder Produktionspipelines einzubinden. So lassen sich schnell Trainingsdatensätze für Legal-LMs erstellen, Feeds für Dokumenten-Updates konfigurieren und Automatisierungen implementieren.

Dank dieser durchdachten Basis können sowohl rechtliche als auch technische Expert:innen ihre jeweiligen Teilaufgaben – von der juristischen Quellensuche bis zum maschinellen Text-Clustering – parallel und effizient abarbeiten.

---

# AfD-Verbot.de Beweise Scraper

Ein Satz Scripte und Hilfsdateien, um die **gesamte Beweise‑Übersicht** von [afd‑verbot.de/beweise](https://afd-verbot.de/beweise) zu laden, alle Detail‑Links zu extrahieren und jeden einzelnen Beweis als datierte PDF zu speichern.

---

## 📁 Projektstruktur

```

├── afd-verbot.de-scrape-dependencies.sh   # Installations‑ und Setup‑Script
├── afd-verbot.de-scrape-beweise-zitate.py # Haupt‑Script: langsames Scrollen + Link‑Export + PDF‑Erzeugung
├── afd-verbot.de-scrape-link-liste.txt    # Automatisch generierte Liste aller Beweis‑URLs
├── afd-verbot.de-<DATUM>-proof-00001.pdf  # Beispiel‑PDF; tatsächlich: proof-00001.pdf … proof-03611.pdf
└── README.md                              # Diese Anleitung

````

---

## 🚀 Anforderungen & Installation

1. **System‑Abhängigkeiten** (unter Debian/Kali/Ubuntu):
   ```bash
   sudo apt update
   sudo apt install -y python3-venv python3-pip chromium chromium-driver
````
---
2. **Virtuelle Umgebung & Python‑Pakete**:

   ```bash
   chmod +x afd-verbot.de-scrape-dependencies.sh
   ./afd-verbot.de-scrape-dependencies.sh
   source venv/bin/activate
   ````

   Damit wird ein `venv` angelegt, aktiviert und alle benötigten Python‑Module (`selenium`, `fpdf`, `requests`, `beautifulsoup4`) installiert.

---

## ⚙️ Nutzung

1. **Linkliste und PDFs erzeugen**

   ```bash
   source venv/bin/activate
   python3 afd-verbot.de-scrape-beweise-zitate.py
   ````

   * Das Script scrollt extrem langsam (100 px / 0,5 s) über alle **367** Scroll‑Seiten,
   * sammelt jede neue `Zum Beweis`‑URL direkt in `afd-verbot.de-scrape-link-liste.txt`,
   * und druckt jede Detail‑Seite als PDF (`afd-verbot.de-<YYYY-MM-DD>-proof-xxxxx.pdf`) in `./mnt/d/afd_proofs/`.
---
2. **Ergebnis prüfen**

   * **Linkliste**: `afd-verbot.de-scrape-link-liste.txt` enthält alle \~3 611 URLs.
   * **PDF‑Ordner**: Enthält 3.611 datierte PDFs, durchnummeriert von `proof-00001.pdf` bis `proof-03611.pdf`.

---

## 🤔 Warum so langsam?

* **Infinite Scroll‑Mechanik** auf der Seite erfordert ganz kleine Schritte, damit das JavaScript nachladen kann.
* Zu schnelles Scrollen würde die letzten Seiten gar nicht erst nachladen – wir brauchen solide 0,5 s Pause pro 100 px.

> „Geduld ist eine Tugend – und hier ausnahmsweise unverzichtbar.“
---
Sollte die Scroll-Mechanik trotz allem haken oder einem zu langsam sein, kann man auch die alternativen Scripte benutzen:
```
afd-verbot-linkliste.py
afd-verbot-print-proofs.py
````
Ersteres lässt einen selber scrollen und erstellt die liste erst wenn man zu ende gescrollt hat.
Zweites macht aus der Liste PDF's.

---
## PDF zu MD Dateien

Mit folgendem Script wurden die Zitate von afd-verbot.de/beweise von einer PDF zu MD-Datei gemacht.

```
pdf-to-md.sh
````

Für das Geheimgutachten haben wir aber OCR und TESERACT benutzt, da Bilder mit Poppler nicht ordentlich erfasst werden und das Geheimgutachten nur in eingescannter Form vorlag.

Für PDF zu MD mit Bildern innerhalb der PDF nutzten wir:

```
split10_pdf.py
split_pdf.py
bulk_ocr_pdfs_to_md.py
setup_all_ocr_deps.sh
dependencies.sh
````
Die zu bearbeitenden Dateien müssen im selben Ordner liegen.
Die split-Python-Scripte ermöglichen das splitten in unterschiedlich lange abschnitte.
Die *.sh dateien sind zum installieren der Abhängigkeiten.
Das bulk-Script ist das OCR-PDF-zu-MD-Script.

Wir gehen hier nicht näher auf die Funktionsweisen ein, da sie sonst eigentlich ein eigenes Repo bedarfen.
Diese Dateien sind nur für die Nachrprüfbarkeit unserer Arbeit hinzugefügt.

---
KI kann besser MD Dateien verarbeiten da nur reiner Text.

---
```
sudo apt install poppler-utils
````
und dann
```
chmod +x pdf-to-md.sh
./pdf-to-md.sh
````
---
In allen ausführbaren Dateien - Input-Ordner und Output-Ordner/Zieldatei-Namen - gegenfalls editieren

---
## 📚 Zugriff auf Dokumente und Ressourcen

Dieses Repository enthält eine umfassende Sammlung an Quellen und Vorarbeiten zum Verbotsverfahren gegen die AfD. Um alle Materialien zu nutzen, gehen Sie bitte wie folgt vor:

### 1. Öffentlich zugängliche Dokumente  
In der Datei [`leicht zugängliche Quellen.txt`](./leicht%20zug%C3%A4ngliche%20Quellen.txt) sind alle frei abrufbaren PDF-Links und Webseiten gelistet:

- **Verfassungsschutzberichte (BfV 2023 & 2024)**
- **Bundestags-Plenarprotokolle** (86. und 203. Sitzung)
- **Drucksache 20/010** (Sicherheitspaket-Anhörung)
- **NPD-Verbotsurteil** (BVerfG 2017, BVerfGE 123, 267 ff.)
- **BMI-Pressemitteilungen** zum VSB

Einfach die Datei öffnen und die Links anklicken oder kopieren.

### 2. Geheime und interne Unterlagen  
Einige der zentralen Beweismittel (z. B. „Ethnokultur-Papier“, Geheimgutachten, Whistleblower-Protokolle, interne E-Mails) sind aus Geheimschutz- oder Datenschutzgründen nicht im öffentlichen Netz verfügbar. Um diese Dokumente zu erhalten, nutzen Sie bitte:

- **Akteneinsicht beim Bundesverfassungsgericht**  
  Formulargemäßer Antrag nach § 43 BVerfGG  
- **Parlamentarische Auskünfte**  
  Schriftliche Bitten an den Innen- oder Geheimdienstausschuss des Deutschen Bundestags (§ 44 GG, Geschäftsordnung BT)  
- **Direktanfragen an Behörden**  
  BMI-Pressestelle oder zuständiges Landesamt für Verfassungsschutz (BfV/LfV)

> **Tipp:** Formulieren Sie in Ihren Anträgen stets klar den Zweck („Verbotsverfahren AfD – Vorlage im Aktenverfügungsverfahren“) und fügen Sie eine Liste der benötigten Unterlagen bei.

### 3. Externe Gutachten & wissenschaftliche Studien  
Für zusätzliche Sachverständigengutachten und Datenauswertungen (z. B. Jenaer Institut für Demokratieforschung, Humboldt-Institut) kontaktieren Sie bitte direkt:

- **Unabhängige Fachinstitute** per E-Mail oder Fernleihe  
- **Universitätsbibliotheken** (Digitalisate via Fernleihe oder Open Access Portale)  

### 4. Social-Media-Daten  
Um den kompletten Datensatz (Tweets, Telegram-Channels) zu exportieren, empfehlen wir:

1. **Twitter Developer API** (Academic Access)  
2. **Telegram-Tools** (Channelscraper, Telethon)  
3. **Beweissicherung:** Unmittelbare Generierung von SHA-256-Hashes für alle Exporte  

---


# Zentrale Argumentationslinien des Gutachtens

`untersuchung-bfv-gutachten-und-afd-parteiverbot.pdf`

---

## 1. Verfassungsrechtliche Grundlage

* Das Gutachten verweist klar auf **Art. 21 GG**: Parteien, die die FDGO bekämpfen oder beseitigen wollen, können verboten werden.
* Ein Verbot ist nach der Rechtsprechung des **BVerfG ultima ratio**, aber zulässig, wenn eine konkrete Gefahr für die Demokratie besteht.

## 2. Einstufung durch das BfV

* Seit 2021 gilt die **AfD als Verdachtsfall**, mit einzelnen Teilorganisationen („Flügel“, „Junge Alternative“) als **gesichert rechtsextremistisch**.
* Das Gutachten stützt sich auf die BfV-Bewertung, dass programmatische Ziele und Äußerungen eine **systematische Missachtung der Menschenwürde** zeigen.

## 3. Programmatik und Praxis

* Die AfD vertritt ein **ethnisch-homogenes Volksverständnis**, das im Widerspruch zur pluralistischen Demokratie steht.
* Es gibt **zahlreiche Belege** für Angriffe auf Grundrechte (z. B. Gleichheit, Religionsfreiheit).
* Die AfD arbeitet **strategisch** an der Schwächung des Rechtsstaats (Justiz, Presse, Parlamentarismus).

## 4. Belege für Verfassungsfeindlichkeit

* **Rhetorik führender Funktionäre**: wiederholte Hetze gegen Minderheiten, Herabwürdigung von Migranten, Relativierung des NS.
* **Verbindungen**: Nähe zu extremistischen Netzwerken und Ideologen.
* **Kalkül**: Nutzung demokratischer Institutionen zur Aushöhlung der Demokratie („Demokratie von innen angreifen“).

## 5. Einschätzung zur Gefährdung

* Das Gutachten bewertet die AfD nicht nur als potentiell, sondern als **konkret gefährdend** für die FDGO.
* Es betont, dass die Partei **bereits über erhebliche politische Macht** verfügt und Einfluss auf Parlamente, Verwaltung und öffentliche Debatten nimmt.
* Damit sei die „Schwelle der Ernsthaftigkeit“ überschritten.

## 6. Schlussfolgerung

* Das Gutachten kommt ausdrücklich zu dem Ergebnis, dass ein **Parteiverbotsverfahren gegen die AfD verfassungsrechtlich möglich und politisch geboten** ist.
* Anders als in manchen Debatten (die nur warnen), ist die Haltung des Gutachtens **pro Verbot**.
* Es betont, dass das Verbot **kein Symbolakt**, sondern eine notwendige Verteidigung der Demokratie sei.

---


## Fazit des Gutachtens „BfV-Gutachten und AfD-Parteiverbot“

Das Gutachten kommt zu einer klaren und eindeutigen Schlussfolgerung:  
Ein **Parteiverbot der AfD ist nicht nur möglich, sondern verfassungsrechtlich geboten und demokratiepolitisch erforderlich**.

### Kernaussagen:
- Die AfD bekämpft wesentliche Elemente der **freiheitlich-demokratischen Grundordnung (FDGO)** aktiv und systematisch.  
- Ihre Strukturen – insbesondere der **„Flügel“**, die **Junge Alternative (JA)** und zahlreiche Mandatsträger – verankern rechtsextreme, verfassungsfeindliche Positionen in der Partei.  
- Die bisherigen Maßnahmen (Beobachtung durch den Verfassungsschutz, Einstufung als „Verdachtsfall“) reichen nicht mehr aus.  
- Ein bloßes „Beobachten“ birgt die Gefahr der **Normalisierung verfassungsfeindlicher Inhalte** in der politischen Landschaft.  
- Das Gutachten bewertet ein Parteiverbot nach **Art. 21 Abs. 2 GG** daher als **rechtlich zulässig, politisch notwendig und demokratiepolitisch geboten**.

### Bedeutung:
Das Gutachten liefert damit eine fundierte juristische Grundlage, um ein Verbotsverfahren einzuleiten. Es versteht das Parteiverbot nicht als ultima ratio, sondern als verfassungsrechtlich gebotene Maßnahme, wenn eine Partei aktiv die Demokratie untergräbt und andere Mittel ausgeschöpft sind.

---

## Neu hinzugefügt: AfD-Bundestagswahlprogramm 2025 (Primärquelle)

**Datei:** `AfD_Bundestagswahlprogramm2025_web.pdf`  
**Beschluss:** Verabschiedet auf dem 16. Bundesparteitag (Riesa, 11.–12. Jan. 2025). 

---

## Relevanz für ein Parteiverbots-Gutachten (FDGO-Risikoindikatoren)

> Hinweis: Die folgenden Punkte markieren **mögliche Konfliktfelder mit der freiheitlichen demokratischen Grundordnung (FDGO)** – insbesondere Menschenwürde, Gleichheit, Religionsfreiheit, Pluralismus sowie die Funktionsbedingungen des demokratischen Rechtsstaats. Es sind **Programmpassagen**, keine Beweiswürdigung einzelner Taten.

### 1) Religion & Minderheitenschutz
- **Generalpräventive Politik gegen „weitere Ausbreitung des Islam“**; Forderungskatalog u. a. gegen Körperschaftsstatus, Minarett- und Muezzinverbot, Abschaffung islamtheologischer Lehrstühle (stattdessen „bekenntnisneutrale Islamwissenschaft“). Dies zielt nicht nur auf Islamismus, sondern umfasst strukturell den **Islam als Religion**. Konfliktpotenzial v. a. mit **Art. 4 GG (Religionsfreiheit)** und dem Gleichheitssatz. 

### 2) Demokratie-Institutionen & „Schutzorgane“
- **„Verfassungsschutz grundsätzlich reformieren“**, verbunden mit der Diagnose „zum Regierungsschutz degeneriert“. Die geforderte grundlegende Umgestaltung bei gleichzeitiger Umverteilung von Aufgaben an BND/Polizei hat **hohes Missbrauchs- und Einschüchterungsrisiko**, wenn eine künftige Regierungsmehrheit diese Dienste politisiert. 
- **„Entpolitisierung der Justiz“** inkl. Abschaffung der ministeriellen Weisungsgebundenheit, Umbau der Richterwahl. Einzelmaßnahmen sind im Detail diskutabel; im Paket kann eine **gerichtsskeptische Delegitimierung** mitschwingen, wenn zugleich Medien/Parlament pauschal diskreditiert werden. 

### 3) Direkte Demokratie als Hebel zur Verfassungsänderung
- **Volksabstimmungen „nach Schweizer Vorbild“** mit weitreichenden Sperr- und Zustimmungsmechanismen (u. a. ohne Volk keine GG-Änderung; wesentliche Verträge nur mit Volksentscheid). Direkte Demokratie ist legitim, **kollidiert aber mit dem Ewigkeitskern (Art. 79 III GG)**, wenn Grundrechtsgarantien faktisch dem Mehrheitswillen unterstellt werden. 

### 4) Supranationale Ordnung & Souveränität
- **WHO/UNO/EU als „Weg zur Weltregierung“**, bis hin zu **Austritt/Vertragskündigung** (Pandemievertrag, Global Compacts). Völkerrechtliche Kurswechsel sind politisch zulässig; problematisch wird es, wenn sie mit **faktischer Entkoppelung von internationalen Grund- und Mindeststandards** einhergehen und innenpolitisch zur **Delegitimierung unabhängiger Expertise** genutzt werden. 

### 5) Finanz-/Digitalordnung & „Analoges Leben“
- **„Bargeld ist Freiheit“**: Verfassungsrang fürs Bargeld, umfassende Skepsis gegenüber digitalem Euro, Identitäten, Registern – mit dystopischen Überwachungsnarrativen. **Grundrechte-Rhetorik gegen EU-Rechtsakte** kann zu systematischer **Delegitimierung rechtsstaatlicher Regulierung** führen. 
- **Bitcoin „weitgehend deregulieren“** und staatliche Distanz maximieren. Politisch diskutabel, aber mit **Compliance-/Geldwäsche-Risiken** und institutioneller Entkopplung. 

---

- Die **Primärquelle (Wahlprogramm 2025)** ist jetzt im Repo dokumentiert.
- **Höchstes FDGO-Risiko** tragen Passagen, die **Religion pauschal politisieren und beschränken** (Islam-Komplex), die **Institutionen der wehrhaften Demokratie** (insb. Verfassungsschutz) **strukturell delegitimieren/umbauen** wollen sowie Hebel **direkter Demokratie** so ausweiten, dass **Minderheitenschutz** und **Ewigkeitsgarantien** unter Mehrheitsdruck geraten könnten. 

---

Hier alle 15 Verbotsgründe:

1. Verfassungswidrige Zielsetzung
– Die AfD strebt eine ethnisch‑kulturell homogene „Volksgemeinschaft“ statt Pluralismus an.

2. Systematische Hetze und Menschenfeindlichkeit
– Regelmäßige Diffamierung von Migrant\:innen, Muslim\:innen, Schwarzen und Queers als „Fremdkörper“ oder „Invasion“.

3. Antisemitische Codes und Verschwörungsmythen
– Nutzung historischer Chiffren („Systemmedien“, „Wölfe“) und antisemitischer Motive zur Delegitimierung pluralistischer Institutionen.

4. Beziehungen zu rechtsextremen Netzwerken
– Personelle und organisatorische Verzahnung mit dem „Flügel“ um Höcke, der Identitären Bewegung und paramilitärischen Gruppierungen.

5. Paramilitärisches Potenzial
– Aufbau inoffizieller „Verteidigungsformationen“ und Kooperation mit rechtsextremen Kampfsportgruppen.

6. Gefährdung der öffentlichen Sicherheit und Ordnung
– Aufrufe zu bewaffneten Bürgerwehren und Missachtung polizeilicher sowie gerichtlicher Anweisungen.

7. Angriff auf Rechtsstaat und Gewaltenteilung
– Systematisches Infragestellen von Gerichten, Verfassungsorganen (z. B. Rundfunkrat) und öffentlich‑rechtlichen Medien.

8. Untergrabung demokratischer Prozesse
– Einsatz von Bot‑Netzen und Microtargeting auf Social Media zur Manipulation öffentlicher Debatten.

9. Verletzung von Minderheitenrechten
– Forderungen nach Aberkennung der Staatsbürgerschaft, Abschiebungen und Einschränkung kultureller Freiheiten.

10. Delegitimierung und Spaltung der Gesellschaft
– Diffamierung von NGOs und zivilgesellschaftlichen Akteuren als „Regierungswerkzeuge“.

11. Verletzung der Menschenrechtsprinzipien
– Missachtung von Asylrecht, Glaubens‑ und Meinungsfreiheit zugunsten eines exklusiven Volksbegriffs.

12. Unfähigkeit zur innerparteilichen Abgrenzung
– Keine wirksamen Disziplinarmaßnahmen gegen verfassungsfeindliche Flügel oder Mitglieder.

13. Gerichtliche Einstufung als Verdachts‑ bzw. Beobachtungsfall
– Einstufung durch BfV und Verwaltungsgerichte bestätigt rechtsextremistische Grundausrichtung.

14. Präzedenzfälle und Verfassungsschutzkriterien
– Erfüllen aller Voraussetzungen des BVerfG‑Dreistufentests gemäß Art. 21 GG.

15. Keine marginale Gruppierung
– Anders als bei der NPD verfügt die AfD über substantielle Organisations‑ und Mobilisierungskraft.

---

Alle Quellenangaben sind in den Dateien enthalten.
---

[![YouTube Video: Einführung](https://img.youtube.com/vi/Pb21x8gALRg/0.jpg)](https://www.youtube.com/watch?v=Pb21x8gALRg)

---
## Neustes Gutachten

https://afd-gutachten.de

## Afd-Zitate

https://afd-verbot.de

## Politische Schönheit

[![YouTube Playlist](https://img.youtube.com/vi/1dHYrVZbhX0/0.jpg)](https://www.youtube.com/watch?v=1dHYrVZbhX0&list=PLndxauj5Nk-o1p1LVTVDgzANSFMGvhe6F)


---
## Mitwirkung

Beiträge sind willkommen! Bitte Issues eröffnen oder Pull Requests einreichen, wenn:
- Du inhaltliche Ergänzungen zu den 15 Verbotsgründen hast.
- Du fehlerhafte Zitate oder Inkonsistenzen in den Fragmente-Dateien findest.
- Du Vorschläge zur Struktur oder zum Aufbau der Klageschrift hast.

Wer mir Hinweise, Artikel oder Beweise schicken will kann das hier:
https://fileinbox.com/afd-verbot-sammelbox

Bevorzugt werden PDF-, MD-, und TXT-Dateien.
Einfach Artikel oder Quelle als PDF drucken und Uploaden.

---

zusätzlich empfehle ich:
https://github.com/ERROR-WATCH/TODESSTATISTIKEN
