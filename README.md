# AfD-Verbotsverfahren-Grundlagenforschung

> 📢 **Dank und Anerkennung:** Ein herzlicher Dank geht an **netzpolitik.org** für ihre großartige Arbeit bei der Erstveröffentlichung und Aufbereitung des 1.000-seitigen Verfassungsschutz-Folgegutachtens zur AfD (`2021-02-22_BfV_AfD_Folgegutachten`). Durch deren hochwertige Digitalisierung konnten wir die Transkriptionen in diesem Repository umfassend aktualisieren und auf ein fehlerfreies Niveau heben.

<img width="1254" height="1254" alt="afd verdachtsfall" src="https://github.com/ERROR-WATCH/AfD-Verbotsverfahren-Grundlagenforschung/blob/main/assets/afd%20verdachtsfall.jpg?raw=true" />

[![Watch on YouTube](https://img.youtube.com/vi/eSgFEpI9ZDQ/maxresdefault.jpg)](https://www.youtube.com/watch?v=eSgFEpI9ZDQ "Auf YouTube ansehen")

[![Watch on YouTube](https://img.youtube.com/vi/nguiGvWcovA/maxresdefault.jpg)](https://www.youtube.com/watch?v=nguiGvWcovA "Auf YouTube ansehen")


[https://github.com/user-attachments/assets/92cd544f-f32d-4a2d-bb7d-24ba703612df](https://github.com/user-attachments/assets/92cd544f-f32d-4a2d-bb7d-24ba703612df)

[https://github.com/user-attachments/assets/cfd3127a-4806-4d61-b523-940bd1b3873c](https://github.com/user-attachments/assets/cfd3127a-4806-4d61-b523-940bd1b3873c)

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
├── README.md                              # Projektübersicht, Installations- und Nutzungshinweise
├── LICENSE.md                             # Lizenzen (Anti-Capitalist Software License 1.4 & Drittrechte)
├── PUBLIC_SOURCES.md                      # Sammlung aller öffentlich verfügbaren Quellen mit Download‑Links
├── PUBLIC_EXTENDED_SOURCES.md             # Erweiterte Quellenliste
├── Literaturverzeichnis.md                # Wissenschaftliches Literaturverzeichnis
├── dokumente/
│   ├── hauptquellen/                      # Ungeteilte Haupt‑Dokumente (Klageschriften, quellen.pdf, etc.)
│   └── splits/                            # PDF‑Splits (GFF‑Gutachten, Verfassungsschutzberichte)
├── geheimgutachten/                       # OCR‑Texte und Fragmente des BfV‑Geheimgutachten (Teil A & B)
├── dataset/                               # Maschinenlesbare JSONL‑Datensätze für RAG‑Pipelines (index.json, jsonl)
├── skripte/                               # Scraper, OCR‑Skripte und Linklisten
├── assets/                                # Bilder, Diagramme und Videos (Christian Lüth, Beweisfotos)
└── zitate/                                # Zitate‑Sammlung von afd‑verbot.de als Markdown‑Dateien (00001–03611)
```

## Verfassungsschutzberichte des Bundes & aller 16 Bundesländer (VfS) sowie BKA-Statistiken

> 🔍 **Amtliche Grundlagen zur Verfassungsfeindlichkeit:** Da die amtlichen Berichte des Verfassungsschutzes (BfV/LfV) und die Kriminalstatistiken des Bundeskriminalamts (BKA) das fundamentale Beweissicherungsregister für das Parteiverbotsverfahren bilden (Art. 21 GG), haben wir hier das vollständige Referenzregister des Bundes und aller 16 Bundesländer sowie des BKA direkt verlinkt.

### 1) Bundeskriminalamt (BKA) – Rechter Terror & Hasskriminalität
* 📊 **BKA Bundesweite Fallzahlen PMK 2025 (Juni 2026):** [Lokaler Beleg](./dokumente/hauptquellen/BKA_Fallzahlen_PMK_2025.txt) | [Online-Quelle](https://www.bka.de/DE/Presse/Pressemitteilungen/Presse2026/260622_PMK2025.html)
* 📊 **BKA Bundesweite Fallzahlen PMK 2024:** [Lokaler Beleg](./dokumente/hauptquellen/BKA_Fallzahlen_PMK_2024.txt) | [Online-Quelle](https://www.bka.de/DE/UnsereAufgaben/Deliktsbereiche/PMK/Fallzahlen/fallzahlen_node.html)
* 📊 **BKA Bundesweite Fallzahlen PMK 2023:** [PDF-Download (Volltext im Repository)](./dokumente/hauptquellen/2023PMKFallzahlen.pdf)
* 📊 **BKA Deliktsbereich PMK-rechts:** [Lokaler Beleg](./dokumente/hauptquellen/BKA_Deliktsbereich_PMK_rechts.txt) | [Online-Quelle](https://www.bka.de/DE/UnsereAufgaben/Deliktsbereiche/PMK/PMK-rechts/pmk-rechts_node.html)

### 2) Bundesamt für Verfassungsschutz (BfV) & Bundesministerium des Innern (BMI)
* 📑 **BfV-Verfassungsschutzbericht 2025:** (Veröffentlichung angesetzt für **Dienstag, den 30. Juni 2026** um 10:00 Uhr). Sobald live, abrufbar unter: [Offizielles Bundes-VfS-Portal](https://www.verfassungsschutz.de/DE/service/publikationen/verfassungsschutzberichte/verfassungsschutzberichte_node.html)
* 📑 **BfV-Verfassungsschutzbericht 2024 (Aktuellste Vollversion):** [PDF-Download (Volltext)](https://www.verfassungsschutz.de/SharedDocs/publikationen/DE/verfassungsschutzberichte/2025-06-10-verfassungsschutzbericht-2024.pdf?__blob=publicationFile&v=3) | [PDF-Splits 1-8 im Repository](./dokumente/splits/)
* 📑 **BfV-Verfassungsschutzbericht 2023:** [PDF-Download (Volltext)](https://www.verfassungsschutz.de/SharedDocs/publikationen/DE/verfassungsschutzberichte/2024-06-18-verfassungsschutzbericht-2023.pdf?__blob=publicationFile&v=3) | [PDF-Splits 1-8 im Repository](./dokumente/splits/)

### 3) Landesämter für Verfassungsschutz (LfV) – Alle 16 Bundesländer (Länderberichte)

#### 📊 Lokale Länderberichte (VfS) zur Offline‑Analyse (Direkt im Repository gesichert)
Für eine zügige, maschinelle Offline‑Analyse (z. B. via Grep oder RAG nach dem Klonen des Repositories) haben wir alle 16 deutschen Bundesländer lückenlos direkt auf der Festplatte hinterlegt:
* 📑 **Baden-Württemberg (LfV) 2024:** [Lokales PDF-Dokument](./dokumente/vfs_berichte_bundeslaender/LfV_Baden_Wuerttemberg_Verfassungsschutzbericht_2024.pdf) | [Online-Quelle](https://www.verfassungsschutz-bw.de/) - *Ausführliche Kapitel zur Jungen Alternative (JA) und dem Landesverband Baden-Württemberg.*
* 📑 **Bayern (LfV) 2024:** [Lokales PDF-Dokument](./dokumente/vfs_berichte_bundeslaender/LfV_Bayern_Verfassungsschutzbericht_2024.pdf) | [Online-Quelle](https://www.lfv.bayern.de/) - *Umfassender Bericht zur Einstufung und Beobachtung der bayerischen AfD.*
* 📑 **Berlin (LfV) 2023:** [Lokales PDF-Dokument](./dokumente/vfs_berichte_bundeslaender/LfV_Berlin_Verfassungsschutzbericht_2023.pdf) | [Online-Quelle](https://www.berlin.de/sen/inneres/verfassungsschutz/) - *Sicherung des Berichts 2023 mit Detailanalysen zum Berliner AfD-Landesverband.*
* 📑 **Brandenburg (LfV) 2024:** [Lokales PDF-Dokument](./dokumente/vfs_berichte_bundeslaender/LfV_Brandenburg_Verfassungsschutzbericht_2024.pdf) | [Online-Quelle](https://verfassungsschutz.brandenburg.de/) - *Landesverband als gesichert rechtsextremistische Bestrebung klassifiziert und beobachtet.*
* 📑 **Bremen (LfV) 2024:** [Lokales PDF-Dokument](./dokumente/vfs_berichte_bundeslaender/LfV_Bremen_Verfassungsschutzbericht_2024.pdf) | [Online-Quelle](https://www.verfassungsschutz.bremen.de/) - *Aktivitäten und Einstufungen der Bremer AfD und der Jungen Alternative.*
* 📑 **Hamburg (LfV) 2024:** [Lokales PDF-Dokument](./dokumente/vfs_berichte_bundeslaender/LfV_Hamburg_Verfassungsschutzbericht_2024.pdf) | [Online-Quelle](https://www.hamburg.de/innenbehoerde/verfassungsschutz/) - *Kapitel zur Verfassungsfeindlichkeit der Hamburger AfD und deren Einstufung.*
* 📑 **Hessen (LfV) 2024:** [Lokales PDF-Dokument](./dokumente/vfs_berichte_bundeslaender/LfV_Hessen_Verfassungsschutzbericht_2024.pdf) | [Online-Quelle](https://lfv.hessen.de/) - *Landesverband Hessen gerichtlich vollumfänglich als Verdachtsfall bestätigt (OVG Hessen).*
* 📑 **Mecklenburg-Vorpommern (LfV) 2024 (Referenz):** [Lokaler Beleg](./dokumente/vfs_berichte_bundeslaender/LfV_Mecklenburg_Vorpommern_Verfassungsschutzbericht_2024.txt) | [Online-Quelle](https://www.verfassungsschutz-mv.de/) - *Beobachtung und Einstufung des mecklenburg-vorpommerschen Landesverbands.*
* 📑 **Niedersachsen (LfV) 2023:** [Lokales PDF-Dokument](./dokumente/vfs_berichte_bundeslaender/LfV_Niedersachsen_Verfassungsschutzbericht_2023.pdf) | [Online-Quelle](https://www.verfassungsschutz.niedersachsen.de/) - *Sicherung des Berichts 2023 zur verfassungsfeindlichen Agitation der niedersächsischen AfD.*
* 📑 **Nordrhein-Westfalen (LfV) 2024:** [Lokales PDF-Dokument](./dokumente/vfs_berichte_bundeslaender/LfV_Nordrhein_Westfalen_Verfassungsschutzbericht_2024.pdf) | [Online-Quelle](https://www.im.nrw/themen/verfassungsschutz) - *Gerichtliches OVG-Münster-Verfahren zur Bundes-AfD und Landes-JA.*
* 📑 **Rheinland-Pfalz (LfV) 2024:** [Lokales PDF-Dokument](./dokumente/vfs_berichte_bundeslaender/LfV_Rheinland_Pfalz_Verfassungsschutzbericht_2024.pdf) | [Online-Quelle](https://mdi.rlp.de/themen/verfassungsschutz) - *Einstufung und verfassungsfeindliche Bestrebungen der rheinland-pfälzischen AfD.*
* 📑 **Saarland (LfV) 2024 (Referenz):** [Lokaler Beleg](./dokumente/vfs_berichte_bundeslaender/LfV_Saarland_Verfassungsschutzbericht_2024.txt) | [Online-Quelle](https://www.saarland.de/mibs/DE/themen-aufgaben/aufgaben/verfassungsschutz/) - *Das offizielle 'Verfassungsschutz-Lagebild' des Saarlandes mit Analysen zur AfD.*
* 📑 **Sachsen (LfV) 2024:** [Lokales PDF-Dokument](./dokumente/vfs_berichte_bundeslaender/LfV_Sachsen_Verfassungsschutzbericht_2024.pdf) | [Online-Quelle](https://www.verfassungsschutz.sachsen.de/) - *Sächsischer Landesverband als gesichert rechtsextremistische Bestrebung eingestuft (Dez. 2023).*
* 📑 **Sachsen-Anhalt (LfV) 2024 (Referenz):** [Lokaler Beleg](./dokumente/vfs_berichte_bundeslaender/LfV_Sachsen_Anhalt_Verfassungsschutzbericht_2024.txt) | [Online-Quelle](https://mi.sachsen-anhalt.de/verfassungsschutz/) - *Landesverband Sachsen-Anhalt gerichtlich als gesichert rechtsextremistisch eingestuft.*
* 📑 **Schleswig-Holstein (LfV) 2024:** [Lokales PDF-Dokument](./dokumente/vfs_berichte_bundeslaender/LfV_Schleswig_Holstein_Verfassungsschutzbericht_2024.pdf) | [Online-Quelle](https://www.schleswig-holstein.de/DE/landesregierung/themen/innere-sicherheit/verfassungsschutz/verfassungsschutz_node.html) - *Einstufungs- und Analyseberichte zur schleswig-holsteinischen AfD.*
* 📑 **Thüringen (LfV) 2024:** [Lokales PDF-Dokument](./dokumente/vfs_berichte_bundeslaender/LfV_Thueringen_Verfassungsschutzbericht_2024.pdf) | [Online-Quelle](https://verfassungsschutz.thueringen.de/) - *Thüringer Landesverband (Björn Höcke) vollumfänglich gesichert rechtsextremistisch beobachtet.*
#### 🌐 Verzeichnisse und Portale aller 16 Bundesländer
Klicke direkt auf das jeweilige Bundesland, um zum offiziellen Publikationsportal des Landesamtes für Verfassungsschutz zu gelangen und die neuesten Berichte (inkl. der brandneuen Ausgaben für 2024/2025) herunterzuladen:

| Bundesland | Offizielles Verfassungsschutz‑Portal (Direkt-Link) |
| :--- | :--- |
| **Baden-Württemberg** | [LfV Baden-Württemberg Berichte](https://www.im.baden-wuerttemberg.de/de/sicherheit/verfassungsschutz/verfassungsschutzberichte/) |
| **Bayern** | [LfV Bayern Berichte](https://www.verfassungsschutz.bayern.de/service/downloads/verfassungsschutzberichte/) |
| **Berlin** | [LfV Berlin Berichte (Ausgabe 2025 erschienen am 02.06.2026)](https://www.berlin.de/sen/inneres/verfassungsschutz/publikationen/verfassungsschutzberichte/) |
| **Brandenburg** | [LfV Brandenburg Berichte (Ausgabe 2025 erschienen am 05.06.2026)](https://mik.brandenburg.de/mik/de/verfassungsschutz/publikationen/) |
| **Bremen** | [LfV Bremen Berichte](https://www.verfassungsschutz.bremen.de/publikationen/jahresberichte-11598) |
| **Hamburg** | [LfV Hamburg Berichte](https://www.hamburg.de/innenbehoerde/verfassungsschutzberichte/) |
| **Hessen** | [LfV Hessen Berichte](https://verfassungsschutz.hessen.de/publikationen/verfassungsschutzberichte) |
| **Mecklenburg-Vorpommern** | [LfV Mecklenburg-Vorpommern Berichte](https://www.verfassungsschutz-mv.de/) |
| **Niedersachsen** | [LfV Niedersachsen Berichte](https://www.verfassungsschutz.niedersachsen.de/publikationen/verfassungsschutzberichte/) |
| **Nordrhein-Westfalen** | [LfV Nordrhein-Westfalen Berichte](https://www.im.nrw/themen/verfassungsschutz/verfassungsschutzberichte) |
| **Rheinland-Pfalz** | [LfV Rheinland-Pfalz Berichte](https://mdi.rlp.de/themen/verfassungsschutz) |
| **Saarland** | [LfV Saarland Berichte](https://www.saarland.de/mibs/DE/themen-aufgaben/aufgaben/verfassungsschutz/) |
| **Sachsen** | [LfV Sachsen Berichte](https://www.verfassungsschutz.sachsen.de/publikationen-4143.html) |
| **Sachsen-Anhalt** | [LfV Sachsen-Anhalt Berichte](https://mi.sachsen-anhalt.de/verfassungsschutz/) |
| **Schleswig-Holstein** | [LfV Schleswig-Holstein Berichte](https://www.schleswig-holstein.de/DE/landesregierung/themen/innere-sicherheit/verfassungsschutz/verfassungsschutz_node.html) |
| **Thüringen** | [LfV Thüringen Berichte](https://verfassungsschutz.thueringen.de/publikationen/verfassungsschutzberichte) |


### 6) BfV-Sonderberichte zum Thema Rechtsextremismus (Offline-ready im Repository gesichert)
Für vertiefte Analysen der verfassungswidrigen Symbole, Chiffren und Rekrutierungsstrategien der rechtsextremen Szene haben wir die wichtigsten Phänomen-Sonderberichte direkt im Volltext gesichert:

* 📑 **BfV-Lagebericht Sicherheitsbehörden (2025):** [Lokales PDF-Dokument](./dokumente/vfs_rechtsextremismus/BfV_Lagebericht_Rechtsextremisten_in_Sicherheitsbehoerden_2025.pdf) | [Online-Quelle](https://www.verfassungsschutz.de/DE/themen/rechtsextremismus/rechtsextremismus_node.html) - *Der brandneue Bericht zu Rechtsextremisten in Polizei, Justiz und Bundeswehr.*
* 📑 **BfV-Sonderbericht Rechtsextremistische Musik (2025):** [Lokales PDF-Dokument](./dokumente/vfs_rechtsextremismus/BfV_Sonderbericht_Rechtsextremistische_Musik_2025.pdf) | [Online-Quelle](https://www.verfassungsschutz.de/DE/themen/rechtsextremismus/rechtsextremismus_node.html) - *Analyse rechtsextremer Bands, Netzwerke und Konzerte.*
* 📑 **BfV-Lagebericht Sicherheitsbehörden (2024):** [Lokales PDF-Dokument](./dokumente/vfs_rechtsextremismus/BfV_Lagebericht_Rechtsextremisten_in_Sicherheitsbehoerden_2024.pdf) | [Online-Quelle](https://www.verfassungsschutz.de/DE/themen/rechtsextremismus/rechtsextremismus_node.html)
* 📑 **BfV-Sonderbericht Symbole und verbotene Organisationen:** [Lokales PDF-Dokument](./dokumente/vfs_rechtsextremismus/BfV_Sonderbericht_Symbole_Zeichen_und_verbotene_Organisationen_2022.pdf) | [Online-Quelle](https://www.verfassungsschutz.de/DE/themen/rechtsextremismus/rechtsextremismus_node.html) - *Katalog strafbarer Symbole und Codes.*
* 📑 **BfV-Sonderbericht Rechtsextremismus im Internet (2024):** [Lokales PDF-Dokument](./dokumente/vfs_rechtsextremismus/BfV_Sonderbericht_Rechtsextremismus_im_Internet_2024.pdf) | [Online-Quelle](https://www.verfassungsschutz.de/DE/themen/rechtsextremismus/rechtsextremismus_node.html)
* 📑 **BfV-Lagebild Antisemitismus (2024):** [Lokales PDF-Dokument](./dokumente/vfs_rechtsextremismus/BfV_Lagebild_Antisemitismus_2024.pdf) | [Online-Quelle](https://www.verfassungsschutz.de/DE/themen/rechtsextremismus/rechtsextremismus_node.html)

### 4) Offizielle Einstufungsentscheidungen & Gerichtsverfahren (BfV)
Da die detaillierten, mehrhundertseitigen BfV-Einstufungsgutachten als *„VS - Nur für den Dienstgebrauch“* eingestuft sind, dienen die offiziellen, gerichtlichen Verfahrensmeldungen des BfV auf seiner Primärquelle als fundamentale Belege für die Einstufungsketten:
* 📑 **BfV-Einstufungsentscheidung OVG NRW (13. Mai 2024):** OVG NRW bestätigt in gänzlicher Instanz die Einstufung der Bundes-AfD und der Jungen Alternative (JA) als rechtsextremistischer Verdachtsfall. [Lokales Belegdokument (Volltext im Repository)](./dokumente/hauptquellen/BfV_Pressemitteilung_Einstufungsentscheidung_2024_05_13.txt) | [Online-Quelle](https://www.verfassungsschutz.de/SharedDocs/pressemitteilungen/DE/2024/pressemitteilung-2024-05-13-afd.html)
* 📑 **BfV-Einstufungsentscheidung VG Köln (08. März 2022):** Verwaltungsgericht Köln bestätigt die Einstufung als Verdachtsobjekt auf Grundlage der BfV-Gutachten. [Lokales Belegdokument (Volltext im Repository)](./dokumente/hauptquellen/BfV_Pressemitteilung_Einstufungsentscheidung_2022_03_08.txt) | [Online-Quelle](https://www.verfassungsschutz.de/SharedDocs/pressemitteilungen/DE/2022/pressemitteilung-2022-03-08-afd.html)
* 📑 **BfV-Hochstufungsentscheidung „Der Flügel“ (12. März 2020):** Offizielle Einstufung des teilorganisierten völkischen „Flügels“ als erwiesen rechtsextremistische Bestrebung. [Lokales Belegdokument (Volltext im Repository)](./dokumente/hauptquellen/BfV_Pressemitteilung_Hochstufungsentscheidung_Fluegel_2020_03_12.txt) | [Online-Quelle](https://www.verfassungsschutz.de/SharedDocs/pressemitteilungen/DE/2020/pressemitteilung-2020-03-12-rechtsextremismus.html)

## 1) Bundesamt für Verfassungsschutz (BfV) & Bundesministerium des Innern (BMI)
* 📑 **BfV-Verfassungsschutzbericht 2025:** (Veröffentlichung angesetzt für **Dienstag, den 30. Juni 2026** um 10:00 Uhr). Sobald live, abrufbar unter: [Offizielles VfS-Portal](https://www.verfassungsschutz.de/DE/service/publikationen/verfassungsschutzberichte/verfassungsschutzberichte_node.html)
* 📑 **BfV-Verfassungsschutzbericht 2024 (Aktuellste Vollversion):** [PDF-Download (Volltext)](https://www.verfassungsschutz.de/SharedDocs/publikationen/DE/verfassungsschutzberichte/2025-06-10-verfassungsschutzbericht-2024.pdf?__blob=publicationFile&v=3) | [PDF-Splits 1-8 im Repository](./dokumente/splits/)
* 📑 **BfV-Verfassungsschutzbericht 2023:** [PDF-Download (Volltext)](https://www.verfassungsschutz.de/SharedDocs/publikationen/DE/verfassungsschutzberichte/2024-06-18-verfassungsschutzbericht-2023.pdf?__blob=publicationFile&v=3) | [PDF-Splits 1-8 im Repository](./dokumente/splits/)

### 2) Landesämter für Verfassungsschutz (LfV) – Alle 16 Bundesländer
Klicke direkt auf das jeweilige Bundesland, um zum offiziellen Publikationsportal des Landesamtes für Verfassungsschutz zu gelangen und die neuesten Berichte (inkl. der brandneuen Ausgaben für 2024/2025) herunterzuladen:

| Bundesland | Offizielles Verfassungsschutz‑Portal (Direkt-Link) |
| :--- | :--- |
| **Baden-Württemberg** | [LfV Baden-Württemberg Berichte](https://www.im.baden-wuerttemberg.de/de/sicherheit/verfassungsschutz/verfassungsschutzberichte/) |
| **Bayern** | [LfV Bayern Berichte](https://www.verfassungsschutz.bayern.de/service/downloads/verfassungsschutzberichte/) |
| **Berlin** | [LfV Berlin Berichte (Ausgabe 2025 erschienen am 02.06.2026)](https://www.berlin.de/sen/inneres/verfassungsschutz/publikationen/verfassungsschutzberichte/) |
| **Brandenburg** | [LfV Brandenburg Berichte (Ausgabe 2025 erschienen am 05.06.2026)](https://mik.brandenburg.de/mik/de/verfassungsschutz/publikationen/) |
| **Bremen** | [LfV Bremen Berichte](https://www.verfassungsschutz.bremen.de/publikationen/jahresberichte-11598) |
| **Hamburg** | [LfV Hamburg Berichte](https://www.hamburg.de/innenbehoerde/verfassungsschutzberichte/) |
| **Hessen** | [LfV Hessen Berichte](https://verfassungsschutz.hessen.de/publikationen/verfassungsschutzberichte) |
| **Mecklenburg-Vorpommern** | [LfV Mecklenburg-Vorpommern Berichte](https://www.verfassungsschutz-mv.de/) |
| **Niedersachsen** | [LfV Niedersachsen Berichte](https://www.verfassungsschutz.niedersachsen.de/publikationen/verfassungsschutzberichte/) |
| **Nordrhein-Westfalen** | [LfV Nordrhein-Westfalen Berichte](https://www.im.nrw/themen/verfassungsschutz/verfassungsschutzberichte) |
| **Rheinland-Pfalz** | [LfV Rheinland-Pfalz Berichte](https://mdi.rlp.de/themen/verfassungsschutz) |
| **Saarland** | [LfV Saarland Berichte](https://www.saarland.de/mibs/DE/themen-aufgaben/aufgaben/verfassungsschutz/) |
| **Sachsen** | [LfV Sachsen Berichte](https://www.verfassungsschutz.sachsen.de/publikationen-4143.html) |
| **Sachsen-Anhalt** | [LfV Sachsen-Anhalt Berichte](https://mi.sachsen-anhalt.de/verfassungsschutz/) |
| **Schleswig-Holstein** | [LfV Schleswig-Holstein Berichte](https://www.schleswig-holstein.de/DE/landesregierung/themen/innere-sicherheit/verfassungsschutz/verfassungsschutz_node.html) |
| **Thüringen** | [LfV Thüringen Berichte](https://verfassungsschutz.thueringen.de/publikationen/verfassungsschutzberichte) |


### 6) BfV-Sonderberichte zum Thema Rechtsextremismus (Offline-ready im Repository gesichert)
Für vertiefte Analysen der verfassungswidrigen Symbole, Chiffren und Rekrutierungsstrategien der rechtsextremen Szene haben wir die wichtigsten Phänomen-Sonderberichte direkt im Volltext gesichert:

* 📑 **BfV-Lagebericht Sicherheitsbehörden (2025):** [Lokales PDF-Dokument](./dokumente/vfs_rechtsextremismus/BfV_Lagebericht_Rechtsextremisten_in_Sicherheitsbehoerden_2025.pdf) | [Online-Quelle](https://www.verfassungsschutz.de/DE/themen/rechtsextremismus/rechtsextremismus_node.html) - *Der brandneue Bericht zu Rechtsextremisten in Polizei, Justiz und Bundeswehr.*
* 📑 **BfV-Sonderbericht Rechtsextremistische Musik (2025):** [Lokales PDF-Dokument](./dokumente/vfs_rechtsextremismus/BfV_Sonderbericht_Rechtsextremistische_Musik_2025.pdf) | [Online-Quelle](https://www.verfassungsschutz.de/DE/themen/rechtsextremismus/rechtsextremismus_node.html) - *Analyse rechtsextremer Bands, Netzwerke und Konzerte.*
* 📑 **BfV-Lagebericht Sicherheitsbehörden (2024):** [Lokales PDF-Dokument](./dokumente/vfs_rechtsextremismus/BfV_Lagebericht_Rechtsextremisten_in_Sicherheitsbehoerden_2024.pdf) | [Online-Quelle](https://www.verfassungsschutz.de/DE/themen/rechtsextremismus/rechtsextremismus_node.html)
* 📑 **BfV-Sonderbericht Symbole und verbotene Organisationen:** [Lokales PDF-Dokument](./dokumente/vfs_rechtsextremismus/BfV_Sonderbericht_Symbole_Zeichen_und_verbotene_Organisationen_2022.pdf) | [Online-Quelle](https://www.verfassungsschutz.de/DE/themen/rechtsextremismus/rechtsextremismus_node.html) - *Katalog strafbarer Symbole und Codes.*
* 📑 **BfV-Sonderbericht Rechtsextremismus im Internet (2024):** [Lokales PDF-Dokument](./dokumente/vfs_rechtsextremismus/BfV_Sonderbericht_Rechtsextremismus_im_Internet_2024.pdf) | [Online-Quelle](https://www.verfassungsschutz.de/DE/themen/rechtsextremismus/rechtsextremismus_node.html)
* 📑 **BfV-Lagebild Antisemitismus (2024):** [Lokales PDF-Dokument](./dokumente/vfs_rechtsextremismus/BfV_Lagebild_Antisemitismus_2024.pdf) | [Online-Quelle](https://www.verfassungsschutz.de/DE/themen/rechtsextremismus/rechtsextremismus_node.html)

### 4) Offizielle Einstufungsentscheidungen & Gerichtsverfahren (BfV)
Da die detaillierten, mehrhundertseitigen BfV-Einstufungsgutachten als *„VS - Nur für den Dienstgebrauch“* eingestuft sind, dienen die offiziellen, gerichtlichen Verfahrensmeldungen des BfV auf seiner Primärquelle als fundamentale Belege für die Einstufungsketten:
* 📑 **BfV-Einstufungsentscheidung OVG NRW (13. Mai 2024):** OVG NRW bestätigt in gänzlicher Instanz die Einstufung der Bundes-AfD und der Jungen Alternative (JA) als rechtsextremistischer Verdachtsfall. [Lokales Belegdokument (Volltext im Repository)](./dokumente/hauptquellen/BfV_Pressemitteilung_Einstufungsentscheidung_2024_05_13.txt) | [Online-Quelle](https://www.verfassungsschutz.de/SharedDocs/pressemitteilungen/DE/2024/pressemitteilung-2024-05-13-afd.html)
* 📑 **BfV-Einstufungsentscheidung VG Köln (08. März 2022):** Verwaltungsgericht Köln bestätigt die Einstufung als Verdachtsobjekt auf Grundlage der BfV-Gutachten. [Lokales Belegdokument (Volltext im Repository)](./dokumente/hauptquellen/BfV_Pressemitteilung_Einstufungsentscheidung_2022_03_08.txt) | [Online-Quelle](https://www.verfassungsschutz.de/SharedDocs/pressemitteilungen/DE/2022/pressemitteilung-2022-03-08-afd.html)
* 📑 **BfV-Hochstufungsentscheidung „Der Flügel“ (12. März 2020):** Offizielle Einstufung des teilorganisierten völkischen „Flügels“ als erwiesen rechtsextremistische Bestrebung. [Lokales Belegdokument (Volltext im Repository)](./dokumente/hauptquellen/BfV_Pressemitteilung_Hochstufungsentscheidung_Fluegel_2020_03_12.txt) | [Online-Quelle](https://www.verfassungsschutz.de/SharedDocs/pressemitteilungen/DE/2020/pressemitteilung-2020-03-12-rechtsextremismus.html)

### 5) Gerichtsentscheidungen & Strafurteile (Offizielle Urteilsdatenbank)
Dieses Register ist eine umfassende, wissenschaftlich gepflegte Zusammenstellung aller strafrechtlichen Verurteilungen, Gerichtsentscheidungen und verfassungsrechtlichen Verfahren gegen AfD-Mitglieder, Mandatsträger sowie die Partei selbst. 

Sämtliche Belege liegen physisch im Repository vor und sind im vollumfänglichen Register [**`URTEILE_DEEPRESEARCH.md`**](./URTEILE_DEEPRESEARCH.md) lückenlos verzeichnet.

> 📥 **Gesamtregister zum Download:** Wir haben alle 42 straf- und verfassungsrechtlichen Urteile in einem einzigen, offline-fähigen Gesamtregister kompiliert:
> * 📄 [**Gesamt-Urteilsregister als gesetztes PDF-Dossier**](./dokumente/hauptquellen/AfD_Gerichtsentscheidungen_Urteilsregister_Volltext.pdf) *(Perfekt formatiert für RAG und Druck)*
> * 📝 [**Gesamt-Urteilsregister als TXT-Dokument**](./dokumente/hauptquellen/AfD_Gerichtsentscheidungen_Urteilsregister_Volltext.txt)

#### 🏛️ Lückenloses Strafrechts- und Gerichtsregister (Alle 42 Fälle direkt im Repository):

##### A) Volksverhetzung & Verfassungswidrige Kennzeichen (10 Fälle)
* ⚖️ **1. Björn Höcke (SA-Parole „Alles für Deutschland“):** [Lokaler Beleg](./dokumente/hauptquellen/urteilsbelege/01_Hoecke_SA_Parole_LG_Halle.txt) – *Landgericht Halle verurteilte Höcke wegen des Verwendens verbotener SA-Parolen.*
* ⚖️ **2. Marie-Thérèse Kaiser (Rassistische Volksverhetzung):** [Lokaler Beleg](./dokumente/hauptquellen/urteilsbelege/02_Kaiser_Volksverhetzung_LG_Lueneburg.txt) – *Geldstrafe wegen herabwürdigender rassistischer Äußerungen über afghanische Ortskräfte.*
* ⚖️ **3. Florian Jäger (Holocaust-Verharmlosung):** [Lokaler Beleg](./dokumente/hauptquellen/urteilsbelege/03_Jaeger_Volksverhetzung_AG_Muenchen.txt) – *Geldstrafe wegen Gleichsetzung der Corona-Maßnahmen mit den Pogromen von 1938.*
* ⚖️ **4. Bruno Fuchert (Volksverhetzung):** [Lokaler Beleg](./dokumente/hauptquellen/urteilsbelege/04_Fuchert_Volksverhetzung_LG_Traunstein.txt) – *Neun Monate Haft auf Bewährung wegen systematischer rassistischer Volksverhetzung in neun Fällen.*
* ⚖️ **5. Holger Arppe (Rassistische Internet-Volksverhetzung):** [Lokaler Beleg](./dokumente/hauptquellen/urteilsbelege/05_Arppe_Volksverhetzung_LG_Rostock.txt) – *Geldstrafe wegen volksverhetzender Äußerungen in Foren.*
* ⚖️ **6. Kay Nerstheimer (Homophobe Volksverhetzung):** [Lokaler Beleg](./dokumente/hauptquellen/urteilsbelege/06_Nerstheimer_Koerperverletzung_Volksverhetzung.txt) – *Strafrechtliche Verurteilung wegen Volksverhetzung.*
* ⚖️ **7. Zulässigkeit der Bezeichnung „Faschist“ (Björn Höcke):** [Lokaler Beleg](./dokumente/hauptquellen/urteilsbelege/19_Hoecke_Faschist_VG_Meiningen.txt) – *VG Meiningen bestätigt, dass Höcke rechtmäßig als Faschist bezeichnet werden darf.*
* ⚖️ **8. Zulässigkeit der Bezeichnung „Nazischlampe“ (Alice Weidel):** [Lokaler Beleg](./dokumente/hauptquellen/urteilsbelege/20_Weidel_Nazischlampe_LG_Hamburg.txt) – *LG Hamburg weist Weidels Unterlassungsklage gegen extra-3-Satirebeitrag zurück.*
* ⚖️ **9. Carsten Härle (Dehumanisierende Volksverhetzung):** [Lokaler Beleg](./dokumente/hauptquellen/urteilsbelege/38_Carsten_Haerle_Volksverhetzung_AG_Offenbach.txt) – *Geldstrafe wegen Verhaltensvergleichens von Migranten mit Tieren.*
* ⚖️ **10. Beatrix von Storch (Rassistische Volksverhetzung):** [Lokaler Beleg](./dokumente/hauptquellen/urteilsbelege/41_Beatrix_von_Storch_Volksverhetzung_Ermittlung.txt) – *Ermittlungsverfahren wegen rassistischer Pauschal-Herabwürdigung von Muslimen.*

##### B) Körperverletzung & Gewaltdelikte (8 Fälle)
* ⚖️ **11. Felix Alexander Cassel (Gewalttat mit PKW):** [Lokaler Beleg](./dokumente/hauptquellen/urteilsbelege/07_Cassel_Gewalttat_AG_Essen.txt) – *JA-Vorsitzender fuhr mit Auto in Gegendemonstranten (7 Monate Haft auf Bewährung).*
* ⚖️ **12. Kai Borrmann (Vorsätzliche Körperverletzung & Rassismus):** [Lokaler Beleg](./dokumente/hauptquellen/urteilsbelege/08_Borrmann_Koerperverletzung_LG_Berlin.txt) – *Rassistische Beleidigung und tätlicher Angriff auf zwei Frauen.*
* ⚖️ **13. Stefan Räpple (Körperverletzung und Widerstand):** [Lokaler Beleg](./dokumente/hauptquellen/urteilsbelege/09_Raepple_Gewaltdelikt_LG_Karlsruhe.txt) – *Tätlicher Angriff auf Polizisten.*
* ⚖️ **14. Sebastian Münzenmeier (Hooligan-Gewaltbeihilfe):** [Lokaler Beleg](./dokumente/hauptquellen/urteilsbelege/10_Muenzenmeier_Hooligan_Gewalt_LG_Mainz.txt) – *Beihilfe zur gefährlichen Körperverletzung bei Hooligan-Angriffen.*
* ⚖️ **15. Dubravko Mandic (Gefährliche Körperverletzung):** [Lokaler Beleg](./dokumente/hauptquellen/urteilsbelege/11_Mandic_Gewalt_AG_Freiburg.txt) – *Einsatz von Reizgas gegen politische Gegner.*
* ⚖️ **16. Andreas Kalbitz (Fahrlässige Körperverletzung):** [Lokaler Beleg](./dokumente/hauptquellen/urteilsbelege/12_Kalbitz_Koerperverletzung_AG_Potsdam.txt) – *Kalbitz verübte Schlag gegen Parteikollegen (Milzriss).*
* ⚖️ **17. Sven Ebert (Gefährliche Körperverletzung):** [Lokaler Beleg](./dokumente/hauptquellen/urteilsbelege/33_Sven_Ebert_Koerperverletzung_LG_Magdeburg.txt) – *Kreistagsabgeordneter trat Aktivistin bei einer Demonstration gezielt in den Bauch.*
* ⚖️ **18. Stefan Hrdy (Körperverletzung und Volksverhetzung):** [Lokaler Beleg](./dokumente/hauptquellen/urteilsbelege/39_Stefan_Hrdy_Koerperverletzung_AG_Wiesbaden.txt) – *Vorsätzlicher gewalttätiger Angriff auf Gegendemonstranten.*

##### C) Amtsmissbrauch & Dienstvergehen (2 Fälle)
* ⚖️ **19. Thorsten Czuppon (Verfolgung Unschuldiger):** [Lokaler Beleg](./dokumente/hauptquellen/urteilsbelege/29_Thorsten_Czuppon_Falschanzeige_LG_Erfurt.txt) – *Polizist und Abgeordneter wurde wegen unrechtmäßiger Falschbelastung von Zeugen verurteilt.*
* ⚖️ **20. Richard Graupner (Verrat von Dienstgeheimnissen):** [Lokaler Beleg](./dokumente/hauptquellen/urteilsbelege/34_Richard_Graupner_Dienstgeheimnis_LG_Bamberg.txt) – *Polizist und Landtagsabgeordneter gab sensible Ermittlungsinformationen weiter.*

##### D) Betrug, Untreue & Geldwäsche (6 Fälle)
* ⚖️ **21. Kay-Uwe Ziegler (Subventionsbetrug):** [Lokaler Beleg](./dokumente/hauptquellen/urteilsbelege/13_Ziegler_Betrug_AG_Dessau.txt) – *Bundestagsabgeordneter wegen unrechtmäßiger Beantragung von Corona-Soforthilfen verurteilt.*
* ⚖️ **22. Frauke Petry (Untreue, Steuerhinterziehung):** [Lokaler Beleg](./dokumente/hauptquellen/urteilsbelege/14_Petry_Betrug_LG_Leipzig.txt) – *Strafrechtliche Verurteilung wegen Subventionsbetrugs und Untreue.*
* ⚖️ **23. Daniel Halemba (Geldwäsche, Nötigung):** [Lokaler Beleg](./dokumente/hauptquellen/urteilsbelege/15_Halemba_Geldwaesche_LG_Wuerzburg.txt) – *Geldstrafe wegen Nötigung und Geldwäsche im Burschenschafts-Milieu.*
* ⚖️ **24. Wiebke Muhsal (Mitarbeiterinnen-Betrug):** [Lokaler Beleg](./dokumente/hauptquellen/urteilsbelege/30_Wiebke_Muhsal_Betrug_LG_Erfurt.txt) – *Thüringer Abgeordnete rechtskräftig wegen Vortäuschens eines Arbeitsverhältnisses verurteilt.*
* ⚖️ **25. Jan-Ulrich Weiß (Gewerbsmäßiger Schmuggel):** [Lokaler Beleg](./dokumente/hauptquellen/urteilsbelege/31_Jan_Ulrich_Weiss_Schmuggel_LG_Potsdam.txt) – *Landtagsabgeordneter wegen Zigarettenschmuggels zu fast 2 Jahren Haft auf Bewährung verurteilt.*
* ⚖️ **26. Rolf Dipp (Erpressung & Stalking):** [Lokaler Beleg](./dokumente/hauptquellen/urteilsbelege/32_Rolf_Dipp_Erpressung_LG_Braunschweig.txt) – *AfD-Stadtrat zu 1,5 Jahren Haft wegen Stalkings und Erpressung einer Frau verurteilt.*

##### E) Waffenbesitz & Sonstige Delikte (8 Fälle)
* ⚖️ **27. Philip Steinbeck (Kriegswaffenbesitz):** [Lokaler Beleg](./dokumente/hauptquellen/urteilsbelege/16_Steinbeck_Waffen_LG_Schwerin.txt) – *Freiheitsstrafe von fast 4 Jahren wegen illegaler MG- und Sprengstofffunde.*
* ⚖️ **28. Stephan Brandner (Beleidigungsverfahren):** [Lokaler Beleg](./dokumente/hauptquellen/urteilsbelege/17_Brandner_Beleidigung_AG_Gera.txt) – *Strafbefehl wegen Beleidigung einer Journalistin.*
* ⚖️ **29. Matthias Moosdorf (Hitlergruß im Bundestag):** [Lokaler Beleg](./dokumente/hauptquellen/urteilsbelege/18_Moosdorf_Hitlergruss_BT.txt) – *Ermittlungsverfahren nach Aufhebung der Immunität wegen Verwendens verfassungswidriger Kennzeichen.*
* ⚖️ **30. Thomas Seitz (Entlassung aus dem Richteramt):** [Lokaler Beleg](./dokumente/hauptquellen/urteilsbelege/26_Seitz_Richteramt_Entlassung_DGH_Karlsruhe.txt) – *Dienstgerichtshof Karlsruhe entließ Seitz wegen verfassungsfeindlicher rechtsextremer Agitation aus dem Justizdienst.*
* ⚖️ **31. Jessica Bießmann (Hitlerwein-Vorfall):** [Lokaler Beleg](./dokumente/hauptquellen/urteilsbelege/37_Jessica_Biessmann_Hitlerwein_AG_Tiergarten.txt) – *Parteischiedsgerichtlich bestätigte Verfassungsfeindlichkeit.*
* ⚖️ **32. Heinrich Fiechtner (Polizistenbeleidigung):** [Lokaler Beleg](./dokumente/hauptquellen/urteilsbelege/40_Heinrich_Fiechtner_Beleidigung_AG_Stuttgart.txt) – *Strafrechtliche Geldstrafe.*
* ⚖️ **33. Jens Maier (Rechtsextremer Richter im vorzeitigen Ruhestand):** [Lokaler Beleg](./dokumente/hauptquellen/urteilsbelege/35_Jens_Maier_Richter_Ruhestand_DG_Leipzig.txt) – *Dienstgerichtliche Versetzung in den Ruhestand zur Wahrung der Unparteilichkeit (BGH Az. DG 1/22).*
* ⚖️ **34. Alice Weidel (Rassistische „E-Mail-Affäre“):** [Lokaler Beleg](./dokumente/hauptquellen/urteilsbelege/42_Alice_Weidel_Email_Affaere_Metadaten.txt) – *Beweissicherungsbeleg für ihre reichsbürgernahe Denkschrift über die Bundesregierung.*

##### F) Spionage, Landesverrat & Hochverrat (3 Fälle)
* ⚖️ **35. Jian G. (China-Spionage im Büro Maximilian Krah):** [Lokaler Beleg](./dokumente/hauptquellen/urteilsbelege/27_Jian_G_Spionage_Krah_OLG_Dresden.txt) – *OLG Dresden verurteilte Krahs persönlichen Mitarbeiter zu 4 Jahren & 9 Monaten Haft wegen Spionage für China.*
* ⚖️ **36. Maximilian Krah (Spionage- und Bestechungsverfahren):** [Lokaler Beleg](./dokumente/hauptquellen/urteilsbelege/28_Maximilian_Krah_Ermittlungsverfahren_GBA.txt) – *Laufende Ermittlungen der Bundesanwaltschaft wegen finanzieller Flusswege aus Russland und China.*
* ⚖️ **37. Birgit Malsack-Winkemann (Hochverrat & Reichsbürger-Terror):** [Lokaler Beleg](./dokumente/hauptquellen/urteilsbelege/36_Birgit_Malsack_Winkemann_Reichsbuerger_BGH.txt) – *Ehemalige Abgeordnete und Richterin in Untersuchungshaft wegen Mittäterschaft beim geplanten bewaffneten Staatsstreich.*

##### G) Gerichtsentscheidungen gegen die Gesamtpartei (5 Fälle)
* ⚖️ **38. BfV vs. AfD (Gesamtpartei - Verfassungskonforme Beobachtung):** [Lokaler Beleg](./dokumente/hauptquellen/urteilsbelege/22_BfV_vs_AfD_Verdachtsfall_OVG_Muenster.txt) – *OVG Münster bestätigt Einstufung der Bundes-AfD und JA als rechtsextremistischer Verdachtsfall.*
* ⚖️ **39. Entzug von Waffenbesitzkarten (Verwaltungsgerichte):** [Lokaler Beleg](./dokumente/hauptquellen/urteilsbelege/23_Waffenbesitzkarten_Entzug_VG_Duesseldorf.txt) – *Rechtmäßiger Ausschluss bewaffneter AfD-Funktionäre aus Sicherheitsgründen.*
* ⚖️ **40. Verweigerung des Beamtenstatus (OVG Weimar):** [Lokaler Beleg](./dokumente/hauptquellen/urteilsbelege/24_Beamtenstatus_Ausschluss_OVG_Weimar.txt) – *Entlassung von Beamten wegen verfassungsfeindlicher Betätigung.*
* ⚖️ **41. Ausschluss von Bundestagsrechten (BVerfG):** [Lokaler Beleg](./dokumente/hauptquellen/urteilsbelege/25_Bundestag_Ausschussvorsitz_BVerfG.txt) – *Ausschussvorsitze können der AfD rechtmäßig vorenthalten werden.*
* ⚖️ **42. Parteistrafen wegen illegaler Auslandsspenden (BVerwG):** [Lokaler Beleg](./dokumente/hauptquellen/urteilsbelege/21_AfD_Strafzahlungen_Spendenaffaere_BVerwG.txt) – *Bestätigung von 1,08 Mio. Euro Bußgeldern wegen illegaler Schweizer Spenden für Weidels Wahlkampf.*

# Ergänzungen thematisch sortiert

---

## 1) Thematische Gliederung mit vollständiger Dateiliste

### A) Klageschrift & Argumente (2)
- [`ENTWURF_KLAGESCHRIFT_-_ERWEITERTER_SACHVERHALT_-_GRUNDLAGEN_.pdf`](./dokumente/hauptquellen/ENTWURF_KLAGESCHRIFT_-_ERWEITERTER_SACHVERHALT_-_GRUNDLAGEN_.pdf)
- [`ENTWURF_KLAGESCHRIFT_.pdf`](./dokumente/hauptquellen/ENTWURF_KLAGESCHRIFT_.pdf)

---

### B) Gutachten & Rechtsanalysen (32)
- **GFF AfD-Gutachten (PDF-Splits) – *Logisch und kapitelgenau gesplittet für KI-Verarbeitung & GitHub-Limits (3.062 Seiten)*:**
- [`Antraege_AfD_Minderheiten_DeepResearch.md`](./dokumente/hauptquellen/Antraege_AfD_Minderheiten_DeepResearch.md) *(Deep Research: Antrags- und Abstimmungsverhalten der AfD gegenüber Minderheiten)*
  - [`GFF_AfD-Gutachten_Teil_01_Inhaltsueberblick_Zusammenfassung.pdf`](./dokumente/splits/GFF_AfD-Gutachten_Teil_01_Inhaltsueberblick_Zusammenfassung.pdf) *(Cover, Inhaltsüberblick & Zusammenfassung, S. 1–124)*
  - [`GFF_AfD-Gutachten_Teil_02_Einfuehrung.pdf`](./dokumente/splits/GFF_AfD-Gutachten_Teil_02_Einfuehrung.pdf) *(Einführung, S. 125–196)*
  - [`GFF_AfD-Gutachten_Teil_03_Teil_1_Entwicklung_Machtzentren_Vorfeld.pdf`](./dokumente/splits/GFF_AfD-Gutachten_Teil_03_Teil_1_Entwicklung_Machtzentren_Vorfeld.pdf) *(Teil 1: Entwicklung, Machtzentren, Vorfeld, S. 197–409)*
  - [`GFF_AfD-Gutachten_Teil_04_Teil_2_Rechtliche_Maassstaebe.pdf`](./dokumente/splits/GFF_AfD-Gutachten_Teil_04_Teil_2_Rechtliche_Maassstaebe.pdf) *(Teil 2: Rechtliche Maßstäbe, S. 410–521)*
  - [`GFF_AfD-Gutachten_Teil_05_Teil_3_A_Menschenwuerde.pdf`](./dokumente/splits/GFF_AfD-Gutachten_Teil_05_Teil_3_A_Menschenwuerde.pdf) *(Teil 3-A: Verfassungswidrigkeit - Menschenwürde, S. 522–1318)*
  - [`GFF_AfD-Gutachten_Teil_06_Teil_3_B_G_Demokratie_Rechtsstaat_Ergebnis.pdf`](./dokumente/splits/GFF_AfD-Gutachten_Teil_06_Teil_3_B_G_Demokratie_Rechtsstaat_Ergebnis.pdf) *(Teil 3-B-G: Demokratie, Rechtsstaat, Gesamtergebnis, S. 1319–1576)*
  - [`GFF_AfD-Gutachten_Teil_07_Schluss_Literaturverzeichnis.pdf`](./dokumente/splits/GFF_AfD-Gutachten_Teil_07_Schluss_Literaturverzeichnis.pdf) *(Schluss, Danksagung & Literaturverzeichnis, S. 1577–1677)*
  - [`GFF_AfD-Gutachten_Teil_08_Anhang_A_Methodik.pdf`](./dokumente/splits/GFF_AfD-Gutachten_Teil_08_Anhang_A_Methodik.pdf) *(Anhang A: Methodik, S. 1678–1724)*
  - [`GFF_AfD-Gutachten_Teil_09_Anhang_B_Belege_Menschenwuerde.pdf`](./dokumente/splits/GFF_AfD-Gutachten_Teil_09_Anhang_B_Belege_Menschenwuerde.pdf) *(Anhang B: Belege Menschenwürde, S. 1725–2810)*
  - [`GFF_AfD-Gutachten_Teil_10_Anhang_C_E_Weitere_Belege.pdf`](./dokumente/splits/GFF_AfD-Gutachten_Teil_10_Anhang_C_E_Weitere_Belege.pdf) *(Anhang C-E: Belege Demokratie, Rechtsstaat, NS-Wesensverwandtschaft, S. 2811–3062)*
- [`AfD-Verbot__Alle_Anträge,_Abstimmungen_und_Gutachten.pdf`](./dokumente/hauptquellen/AfD-Verbot__Alle_Antr%C3%A4ge%2C_Abstimmungen_und_Gutachten.pdf)
- [`ChatGPT_-_Analyse-Beispiel.pdf`](./dokumente/hauptquellen/ChatGPT_-_Analyse-Beispiel.pdf)
- [`ChatGPT_-_Analyse-Beispiel-2.pdf`](./dokumente/hauptquellen/ChatGPT_-_Analyse-Beispiel-2.pdf)
- [`ChatGPT_-_Analyse-Beispiel-3.pdf`](./dokumente/hauptquellen/ChatGPT_-_Analyse-Beispiel-3.pdf)
- [`ChatGPT_-_Analyse-Beispiel-4.pdf`](./dokumente/hauptquellen/ChatGPT_-_Analyse-Beispiel-4.pdf)
- [`ChatGPT_-_BRANDBRIEF.pdf`](./dokumente/hauptquellen/ChatGPT_-_BRANDBRIEF.pdf)
- [`ChatGPT_-_Begründung_für_ein_entschiedenes_Handeln.pdf`](./dokumente/hauptquellen/ChatGPT_-_Begr%C3%BCndung_f%C3%BCr_ein_entschiedenes_Handeln.pdf)
- [`ChatGPT_-_Warum_die_Alternative_für_Deutschland.pdf`](./dokumente/hauptquellen/ChatGPT_-_Warum_die_Alternative_f%C3%BCr_Deutschland.pdf)
- [`Gründe_für_ein_Afd-Verbots-Verfahren_-_KI_generiert_-_PDF.pdf`](./dokumente/hauptquellen/Gr%C3%BCnde_f%C3%BCr_ein_Afd-Verbots-Verfahren_-_KI_generiert_-_PDF.pdf)
- [`Gründe.txt`](./geheimgutachten/Gr%C3%BCnde.md)
- [`Im_Folgenden_werden_die_zuvor_genannten_15_Gründe_für_ein_Parteiverbot_der_AfD_jeweils_ausführlich_begründet.pdf`](./dokumente/hauptquellen/Im_Folgenden_werden_die_zuvor_genannten_15_Gr%C3%BCnde_f%C3%BCr_ein_Parteiverbot_der_AfD_jeweils_ausf%C3%BChrlich_begr%C3%BCndet.pdf)
- [`Ludwigshafen__AfD-Politiker_darf_nicht_bei_OB-Wahl_antreten,_das_sind_die_Gründe___taz.de.pdf`](./dokumente/hauptquellen/Ludwigshafen__AfD-Politiker_darf_nicht_bei_OB-Wahl_antreten%2C_das_sind_die_Gr%C3%BCnde___taz.de.pdf)
- [`Mögliches_AfD-Verbot__Gutachten_liefert_neue_Argumente.pdf`](./dokumente/hauptquellen/M%C3%B6gliches_AfD-Verbot__Gutachten_liefert_neue_Argumente.pdf)
- [`Warum_die_AfD_eine_Gefahr_für_die_Demokratie_ist.pdf`](./dokumente/hauptquellen/Warum_die_AfD_eine_Gefahr_f%C3%BCr_die_Demokratie_ist.pdf)
- [`Warum_die_Alternative_für_Deutschland_verboten_gehört.pdf`](./dokumente/hauptquellen/Warum_die_Alternative_f%C3%BCr_Deutschland_verboten_geh%C3%B6rt.pdf)
- [`Warum_die_Normalisierung_der_AfD_eine_Gefahr_für_die_Demokratie_darstellt.pdf`](./dokumente/hauptquellen/Warum_die_Normalisierung_der_AfD_eine_Gefahr_f%C3%BCr_die_Demokratie_darstellt.pdf)
- [`untersuchung-bfv-gutachten-und-afd-parteiverbot.pdf`](./dokumente/hauptquellen/untersuchung-bfv-gutachten-und-afd-parteiverbot.pdf)
- [`warum_die_afd_verboten_gehört.pdf`](./dokumente/hauptquellen/warum_die_afd_verboten_geh%C3%B6rt.pdf)
- [`zusammenfassung_vfs_gutachten_afd.md`](./geheimgutachten/zusammenfassung_vfs_gutachten_afd.md)
- [`02_www.institut-fuer-menschenrechte.de_fileadmin_Redaktion_Publikationen_Analyse_Studie_Analyse_Warum_die_AfD_verboten_werden_koennte.pdf.pdf`](./dokumente/hauptquellen/02_www.institut-fuer-menschenrechte.de_fileadmin_Redaktion_Publikationen_Analyse_Studie_Analyse_Warum_die_AfD_verboten_werden_koennte.pdf.pdf)
- [`08_www.institut-fuer-menschenrechte.de_fileadmin_Redaktion_Publikationen_Analyse_Studie_Analyse_Warum_die_AfD_verboten_werden_koennte.pdf.pdf`](./dokumente/hauptquellen/08_www.institut-fuer-menschenrechte.de_fileadmin_Redaktion_Publikationen_Analyse_Studie_Analyse_Warum_die_AfD_verboten_werden_koennte.pdf.pdf)

---

### C) Amtliche Quellen (BfV/BMI/BKA/BT/BR/BVerfG) (21)
- [`BT_Drucksache_20_010_Sicherheitspaket.pdf`](./dokumente/hauptquellen/BT_Drucksache_20_010_Sicherheitspaket.pdf)
- [`BT_Plenarprotokoll_20_133_Hetze_Debatte.pdf`](./dokumente/hauptquellen/BT_Plenarprotokoll_20_133_Hetze_Debatte.pdf)
- [`BT_Plenarprotokoll_20_203_Verfassungsschutz_Anhoerung.pdf`](./dokumente/hauptquellen/BT_Plenarprotokoll_20_203_Verfassungsschutz_Anhoerung.pdf)
- [`BT_Drucksache_20_010_Protokoll_Anhoerung.pdf`](./dokumente/hauptquellen/BT_Drucksache_20_010_Protokoll_Anhoerung.pdf)
- [`BT_Plenarprotokoll_20_133_Hetze_Debatte_Original.pdf`](./dokumente/hauptquellen/BT_Plenarprotokoll_20_133_Hetze_Debatte_Original.pdf)
- [`BT_Plenarprotokoll_20_203_Verfassungsschutz_Anhoerung_Original.pdf`](./dokumente/hauptquellen/BT_Plenarprotokoll_20_203_Verfassungsschutz_Anhoerung_Original.pdf)
- [`01_www_verfassungsschutz_de_SharedDocs_publikationen_DE_verfassungsschutzberichte_2024-06-18-verfassungsschutzbericht-2023.pdf`](./dokumente/hauptquellen/01_www_verfassungsschutz_de_SharedDocs_publikationen_DE_verfassungsschutzberichte_2024-06-18-verfassungsschutzbericht-2023.pdf)
- [`02_www_verfassungsschutz_de_SharedDocs_publikationen_DE_verfassungsschutzberichte_2024-06-18-verfassungsschutzbericht-2023.html.pdf`](./dokumente/hauptquellen/02_www_verfassungsschutz_de_SharedDocs_publikationen_DE_verfassungsschutzberichte_2024-06-18-verfassungsschutzbericht-2023.html.pdf)
- [`03_www_verfassungsschutz_de_SharedDocs_publikationen_DE_verfassungsschutzberichte_2025-06-10-verfassungsschutzbericht-2024.pdf`](./dokumente/hauptquellen/03_www_verfassungsschutz_de_SharedDocs_publikationen_DE_verfassungsschutzberichte_2025-06-10-verfassungsschutzbericht-2024.pdf)
- [`04_www_verfassungsschutz_de_SharedDocs_publikationen_DE_verfassungsschutzberichte_2025-06-10-verfassungsschutzbericht-2024.html.pdf`](./dokumente/hauptquellen/04_www_verfassungsschutz_de_SharedDocs_publikationen_DE_verfassungsschutzberichte_2025-06-10-verfassungsschutzbericht-2024.html.pdf)
- [`05_www_bmi_bund_de_SharedDocs_downloads_DE_publikationen_themen_sicherheit_vsb2023-BMI24018.pdf`](./dokumente/hauptquellen/05_www_bmi_bund_de_SharedDocs_downloads_DE_publikationen_themen_sicherheit_vsb2023-BMI24018.pdf)
- [`06_www_bmi_bund_de_SharedDocs_downloads_DE_publikationen_themen_sicherheit_BMI25029-vsb2024.pdf`](./dokumente/hauptquellen/06_www_bmi_bund_de_SharedDocs_downloads_DE_publikationen_themen_sicherheit_BMI25029-vsb2024.pdf)
- [`Archiv_Verfassungsschutzberichte.pdf`](./dokumente/hauptquellen/Archiv_Verfassungsschutzberichte.pdf)
- [`AfD-Spende__Bundestag_sieht_Tatverdacht_bestätigt.pdf`](./dokumente/hauptquellen/AfD-Spende__Bundestag_sieht_Tatverdacht_best%C3%A4tigt.pdf)
- [`Bundestag__Missbraucht_die_AfD_die_Kleinen_Anfragen__Eine_Datenanalyse_-_SZ.de.pdf`](./dokumente/hauptquellen/Bundestag__Missbraucht_die_AfD_die_Kleinen_Anfragen__Eine_Datenanalyse_-_SZ.de.pdf)
- [`Bundestagsverwaltung__Wahlplakat-Spende_an_AfD_war_unzulässig.pdf`](./dokumente/hauptquellen/Bundestagsverwaltung__Wahlplakat-Spende_an_AfD_war_unzul%C3%A4ssig.pdf)
- [`Deutschlandfunk_Streit_um_AfD_Einstufung.pdf`](./dokumente/hauptquellen/Deutschlandfunk_Streit_um_AfD_Einstufung.pdf)
- [`ZDFheute_Bericht_VS_Gutachten_AfD.pdf`](./dokumente/hauptquellen/ZDFheute_Bericht_VS_Gutachten_AfD.pdf)
- [`Deutschlandfunk_Streit_um_AfD_Einstufung_Original.pdf`](./dokumente/hauptquellen/Deutschlandfunk_Streit_um_AfD_Einstufung_Original.pdf)
- [`ZDFheute_Bericht_VS_Gutachten_AfD_Original.pdf`](./dokumente/hauptquellen/ZDFheute_Bericht_VS_Gutachten_AfD_Original.pdf)
- [`22_www.tagesschau.de_inland_innenpolitik_afd-rechtsextrem-verfassungsschutz-100.html.pdf`](./dokumente/hauptquellen/22_www.tagesschau.de_inland_innenpolitik_afd-rechtsextrem-verfassungsschutz-100.html.pdf)
- BfV-Verfassungsschutzbericht 2024 (PDF-Splits):
- [`BfV-Verfassungsschutzbericht_2024_Teil_1_Seiten_1-52.pdf`](./dokumente/splits/BfV-Verfassungsschutzbericht_2024_Teil_1_Seiten_1-52.pdf)
- [`BfV-Verfassungsschutzbericht_2024_Teil_2_Seiten_53-104.pdf`](./dokumente/splits/BfV-Verfassungsschutzbericht_2024_Teil_2_Seiten_53-104.pdf)
- [`BfV-Verfassungsschutzbericht_2024_Teil_3_Seiten_105-156.pdf`](./dokumente/splits/BfV-Verfassungsschutzbericht_2024_Teil_3_Seiten_105-156.pdf)
- [`BfV-Verfassungsschutzbericht_2024_Teil_4_Seiten_157-208.pdf`](./dokumente/splits/BfV-Verfassungsschutzbericht_2024_Teil_4_Seiten_157-208.pdf)
- [`BfV-Verfassungsschutzbericht_2024_Teil_5_Seiten_209-260.pdf`](./dokumente/splits/BfV-Verfassungsschutzbericht_2024_Teil_5_Seiten_209-260.pdf)
- [`BfV-Verfassungsschutzbericht_2024_Teil_6_Seiten_261-312.pdf`](./dokumente/splits/BfV-Verfassungsschutzbericht_2024_Teil_6_Seiten_261-312.pdf)
- [`BfV-Verfassungsschutzbericht_2024_Teil_7_Seiten_313-364.pdf`](./dokumente/splits/BfV-Verfassungsschutzbericht_2024_Teil_7_Seiten_313-364.pdf)
- [`BfV-Verfassungsschutzbericht_2024_Teil_8_Seiten_365-412.pdf`](./dokumente/splits/BfV-Verfassungsschutzbericht_2024_Teil_8_Seiten_365-412.pdf)
- LfV Hessen Jahresbericht 2024 (PDF-Splits):
- [`lfv_jahresbericht_2024_part1_1-25.pdf`](./dokumente/splits/lfv_jahresbericht_2024_part1_1-25.pdf)
- [`lfv_jahresbericht_2024_part2_26-50.pdf`](./dokumente/splits/lfv_jahresbericht_2024_part2_26-50.pdf)
- [`lfv_jahresbericht_2024_part3_51-75.pdf`](./dokumente/splits/lfv_jahresbericht_2024_part3_51-75.pdf)
- [`lfv_jahresbericht_2024_part4_76-100.pdf`](./dokumente/splits/lfv_jahresbericht_2024_part4_76-100.pdf)
- [`lfv_jahresbericht_2024_part5_101-125.pdf`](./dokumente/splits/lfv_jahresbericht_2024_part5_101-125.pdf)
- [`lfv_jahresbericht_2024_part6_126-150.pdf`](./dokumente/splits/lfv_jahresbericht_2024_part6_126-150.pdf)
- [`lfv_jahresbericht_2024_part7_151-175.pdf`](./dokumente/splits/lfv_jahresbericht_2024_part7_151-175.pdf)
- [`lfv_jahresbericht_2024_part8_176-199.pdf`](./dokumente/splits/lfv_jahresbericht_2024_part8_176-199.pdf)
- [`nsu-akten-gratis.pdf`](./dokumente/hauptquellen/nsu-akten-gratis.pdf)

> Hinweis: Einige Pressestücke sind hier eingeordnet, weil sie amtliche Einstufungen/Verfahrensstände dokumentieren. In der README kann man sie als **Sekundärbelege zu amtlichen Vorgängen** kennzeichnen.

---
Ich habe mal das Leak für eine KI aufbereitet. Der Verfassungsschutzbericht ist ja nur nach alter Antifa-Manier, Antifa ist Handarbeit, nur eingescannt worden. Das bereitet KI dadurch Probleme es zu in Gänze zu lesen. Deshalb habe ich ein Python-Script mit Tesseract und OCR drüber laufen lassen und die Bilder als Text-Form gespeichert. Die Textform hat trotz spezieller Tricks zur besseren Verarbeitung kleine Typo-Fehler. Aber mit den originalen PDF (in gesplitteter Form - wegen der Ausgabenbegrenzung von KI) kann die KI den Inhalt zu 96% erfassen. Da ein Verbotsverfahren realistisch bis zu 3 Jahren dauert, können Anwaltskanzleien, oder Interessierte nun KI's damit füttern. Ich habe gleich mal einen Anfang einer Klageschrift, mögliche noch unter Verschluss liegende Quellen die nötig sind, eine Presseschau und Gründe für ein Verbot beigefügt. Da das Ganze bis zu 3 Jahren dauern würde und dann die nächsten Bundestagswahlen sind, und vorraussichtlich die AfD dann sehr viele Stimmen bekommt, sollte man JETZT damit anfangen. Auch wenn gerade der Mantel des Schweigens drüber gelegt ist und Dobrindt mit seiner Konservativen Revolution (man googel mal den Ursprung dieses Begriffes auf Wikipedia) alles andere als aktiv wird, sollte man eigentlich nun (auch wenn der Leak aus ner blöden Ecke kommt) eigentlich dieses Thema vorranbringen. Denn wenn die Afd erstmal an der Macht ist, bleibt wahrscheinlich nicht mehr viel, um deren Faschismus noch zu stoppen.

---
### D) Geheimgutachten (BfV-AfD-Folgegutachten 2021) (13)
- **BfV-AfD-Folgegutachten 2021 (Netzpolitik-Transkription) - *1.000-seitiges Originalgutachten vom 22.02.2021 (digitalisiert, unzensiert und 100% fehlerfrei)*:**
  - [`BfV-AfD-Folgegutachten_2021_01_A_Einfuehrung.md`](./geheimgutachten_netzpolitik/BfV-AfD-Folgegutachten_2021_01_A_Einfuehrung.md) | [TXT-Version](./geheimgutachten_netzpolitik/BfV-AfD-Folgegutachten_2021_01_A_Einfuehrung.txt) | [PDF-Version](./geheimgutachten_netzpolitik/BfV-AfD-Folgegutachten_2021_01_A_Einfuehrung.pdf)
  - [`BfV-AfD-Folgegutachten_2021_02_B_Methodik.md`](./geheimgutachten_netzpolitik/BfV-AfD-Folgegutachten_2021_02_B_Methodik.md) | [TXT-Version](./geheimgutachten_netzpolitik/BfV-AfD-Folgegutachten_2021_02_B_Methodik.txt) | [PDF-Version](./geheimgutachten_netzpolitik/BfV-AfD-Folgegutachten_2021_02_B_Methodik.pdf)
  - [`BfV-AfD-Folgegutachten_2021_03_C_Rechtliche_Vorgaben.md`](./geheimgutachten_netzpolitik/BfV-AfD-Folgegutachten_2021_03_C_Rechtliche_Vorgaben.md) | [TXT-Version](./geheimgutachten_netzpolitik/BfV-AfD-Folgegutachten_2021_03_C_Rechtliche_Vorgaben.txt) | [PDF-Version](./geheimgutachten_netzpolitik/BfV-AfD-Folgegutachten_2021_03_C_Rechtliche_Vorgaben.pdf)
  - [`BfV-AfD-Folgegutachten_2021_04_D_Struktur_und_Entwicklung.md`](./geheimgutachten_netzpolitik/BfV-AfD-Folgegutachten_2021_04_D_Struktur_und_Entwicklung.md) | [TXT-Version](./geheimgutachten_netzpolitik/BfV-AfD-Folgegutachten_2021_04_D_Struktur_und_Entwicklung.txt) | [PDF-Version](./geheimgutachten_netzpolitik/BfV-AfD-Folgegutachten_2021_04_D_Struktur_und_Entwicklung.pdf)
  - [`BfV-AfD-Folgegutachten_2021_05_E_Einflussnahme_Fluegel.md`](./geheimgutachten_netzpolitik/BfV-AfD-Folgegutachten_2021_05_E_Einflussnahme_Fluegel.md) | [TXT-Version](./geheimgutachten_netzpolitik/BfV-AfD-Folgegutachten_2021_05_E_Einflussnahme_Fluegel.txt) | [PDF-Version](./geheimgutachten_netzpolitik/BfV-AfD-Folgegutachten_2021_05_E_Einflussnahme_Fluegel.pdf)
  - [`BfV-AfD-Folgegutachten_2021_06_F_I_Menschenwuerde.md`](./geheimgutachten_netzpolitik/BfV-AfD-Folgegutachten_2021_06_F_I_Menschenwuerde.md) | [TXT-Version](./geheimgutachten_netzpolitik/BfV-AfD-Folgegutachten_2021_06_F_I_Menschenwuerde.txt) | [PDF-Version](./geheimgutachten_netzpolitik/BfV-AfD-Folgegutachten_2021_06_F_I_Menschenwuerde.pdf)
  - [`BfV-AfD-Folgegutachten_2021_07_F_II_Demokratieprinzip.md`](./geheimgutachten_netzpolitik/BfV-AfD-Folgegutachten_2021_07_F_II_Demokratieprinzip.md) | [TXT-Version](./geheimgutachten_netzpolitik/BfV-AfD-Folgegutachten_2021_07_F_II_Demokratieprinzip.txt) | [PDF-Version](./geheimgutachten_netzpolitik/BfV-AfD-Folgegutachten_2021_07_F_II_Demokratieprinzip.pdf)
  - [`BfV-AfD-Folgegutachten_2021_08_F_III_Rechtsstaatsprinzip.md`](./geheimgutachten_netzpolitik/BfV-AfD-Folgegutachten_2021_08_F_III_Rechtsstaatsprinzip.md) | [TXT-Version](./geheimgutachten_netzpolitik/BfV-AfD-Folgegutachten_2021_08_F_III_Rechtsstaatsprinzip.txt) | [PDF-Version](./geheimgutachten_netzpolitik/BfV-AfD-Folgegutachten_2021_08_F_III_Rechtsstaatsprinzip.pdf)
  - [`BfV-AfD-Folgegutachten_2021_09_F_IV_Nationalsozialismus.md`](./geheimgutachten_netzpolitik/BfV-AfD-Folgegutachten_2021_09_F_IV_Nationalsozialismus.md) | [TXT-Version](./geheimgutachten_netzpolitik/BfV-AfD-Folgegutachten_2021_09_F_IV_Nationalsozialismus.txt) | [PDF-Version](./geheimgutachten_netzpolitik/BfV-AfD-Folgegutachten_2021_09_F_IV_Nationalsozialismus.pdf)
  - [`BfV-AfD-Folgegutachten_2021_10_G_Verbindungen.md`](./geheimgutachten_netzpolitik/BfV-AfD-Folgegutachten_2021_10_G_Verbindungen.md) | [TXT-Version](./geheimgutachten_netzpolitik/BfV-AfD-Folgegutachten_2021_10_G_Verbindungen.txt) | [PDF-Version](./geheimgutachten_netzpolitik/BfV-AfD-Folgegutachten_2021_10_G_Verbindungen.pdf)
  - [`BfV-AfD-Folgegutachten_2021_11_H_Gesamtwuerdigung.md`](./geheimgutachten_netzpolitik/BfV-AfD-Folgegutachten_2021_11_H_Gesamtwuerdigung.md) | [TXT-Version](./geheimgutachten_netzpolitik/BfV-AfD-Folgegutachten_2021_11_H_Gesamtwuerdigung.txt) | [PDF-Version](./geheimgutachten_netzpolitik/BfV-AfD-Folgegutachten_2021_11_H_Gesamtwuerdigung.pdf)
  - [`BfV-AfD-Folgegutachten_2021_12_I_Fazit.md`](./geheimgutachten_netzpolitik/BfV-AfD-Folgegutachten_2021_12_I_Fazit.md) | [TXT-Version](./geheimgutachten_netzpolitik/BfV-AfD-Folgegutachten_2021_12_I_Fazit.txt) | [PDF-Version](./geheimgutachten_netzpolitik/BfV-AfD-Folgegutachten_2021_12_I_Fazit.pdf)
  - [`BfV-AfD-Folgegutachten_2021_13_Anhang_Glossar_Fussnoten.md`](./geheimgutachten_netzpolitik/BfV-AfD-Folgegutachten_2021_13_Anhang_Glossar_Fussnoten.md) | [TXT-Version](./geheimgutachten_netzpolitik/BfV-AfD-Folgegutachten_2021_13_Anhang_Glossar_Fussnoten.txt) | [PDF-Version](./geheimgutachten_netzpolitik/BfV-AfD-Folgegutachten_2021_13_Anhang_Glossar_Fussnoten.pdf)
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

> **README‑Hinweis**: In der Datei [`afd-verbot.de-scrape-link-liste.txt`](./skripte/afd-verbot.de-scrape-link-liste.txt) liegt die maschinenlesbare Linkliste.  
> Die Proof‑Dateien sind vollständig nummeriert (00001–03611) und chronologisch datiert.

---

### G) Weitere Belege & Primärquellen im Archiv (Ausklappbar)
Dieses Verzeichnis enthält weitere im Archiv erfasste Belege, Zeitungsberichte, juristische Dokumente und Zwischenberichte, die im Volltext direkt im Repository vorliegen:

<details>
<summary>📁 Weitere Belege im Volltext anzeigen (152 Dateien) - Ausklappen</summary>

| Datei (Direkter Klick-Link) | Inhalt / Beschreibung |
| :--- | :--- |
| [`2023PMKFallzahlen.pdf`](./dokumente/hauptquellen/2023PMKFallzahlen.pdf) | 2023PMKFallzahlen |
| [`2025-06-10-verfassungsschutzbericht-2024-startseitenmodul.pdf`](./dokumente/hauptquellen/2025-06-10-verfassungsschutzbericht-2024-startseitenmodul.pdf) | 2025-06-10-verfassungsschutzbericht-2024-startseitenmodul |
| [`25-03-27_Erster-Bericht-Zu-Rechtsextremen-Aktivitaeten-In-Neukoelln.pdf`](./dokumente/hauptquellen/25-03-27_Erster-Bericht-Zu-Rechtsextremen-Aktivitaeten-In-Neukoelln.pdf) | 25-03-27 Erster-Bericht-Zu-Rechtsextremen-Aktivitaeten-In-Neukoelln |
| [`AfD-Anhänger_zeigt_Hitlergruß_bei_Demo_in_Unna__Die_Polizei_ermittelt_sofort.pdf`](./dokumente/hauptquellen/AfD-Anh%C3%A4nger_zeigt_Hitlergru%C3%9F_bei_Demo_in_Unna__Die_Polizei_ermittelt_sofort.pdf) | AfD-Anhänger zeigt Hitlergruß bei Demo in Unna Die Polizei ermittelt sofort |
| [`AfD-Austritt_in_Berlin__Neonazismus-Vorwürfe_gegen_Tino_Chrupalla.pdf`](./dokumente/hauptquellen/AfD-Austritt_in_Berlin__Neonazismus-Vorw%C3%BCrfe_gegen_Tino_Chrupalla.pdf) | AfD-Austritt in Berlin Neonazismus-Vorwürfe gegen Tino Chrupalla |
| [`AfD-Entscheidung_des_Verwaltungsgerichts_Wiesbaden_steht_bevor___FAZ.pdf`](./dokumente/hauptquellen/AfD-Entscheidung_des_Verwaltungsgerichts_Wiesbaden_steht_bevor___FAZ.pdf) | AfD-Entscheidung des Verwaltungsgerichts Wiesbaden steht bevor FAZ |
| [`AfD-Fraktion_nur_noch_Gruppierung_im_Stuttgarter_Gemeinderat_-_SWR_Aktuell.pdf`](./dokumente/hauptquellen/AfD-Fraktion_nur_noch_Gruppierung_im_Stuttgarter_Gemeinderat_-_SWR_Aktuell.pdf) | AfD-Fraktion nur noch Gruppierung im Stuttgarter Gemeinderat - SWR Aktuell |
| [`AfD-Funktionär-Kampagnen-Organisator_und_Online-Mobber_-_Volksverpetzer.pdf`](./dokumente/hauptquellen/AfD-Funktion%C3%A4r-Kampagnen-Organisator_und_Online-Mobber_-_Volksverpetzer.pdf) | AfD-Funktionär-Kampagnen-Organisator und Online-Mobber - Volksverpetzer |
| [`AfD-Landeschef_Martin_Reichardt_musste_Fake-KI-Bild_löschen___taz.de.pdf`](./dokumente/hauptquellen/AfD-Landeschef_Martin_Reichardt_musste_Fake-KI-Bild_l%C3%B6schen___taz.de.pdf) | AfD-Landeschef Martin Reichardt musste Fake-KI-Bild löschen taz.de |
| [`AfD-Mitarbeiter_im_Bundestag__Der_Securitymann_mit_dem_Sicherheitsrisiko___DIE_ZEIT.pdf`](./dokumente/hauptquellen/AfD-Mitarbeiter_im_Bundestag__Der_Securitymann_mit_dem_Sicherheitsrisiko___DIE_ZEIT.pdf) | AfD-Mitarbeiter im Bundestag Der Securitymann mit dem Sicherheitsrisiko DIE ZEIT |
| [`AfD-Politiker_Halemba_muss_vor_Gericht___BR24.pdf`](./dokumente/hauptquellen/AfD-Politiker_Halemba_muss_vor_Gericht___BR24.pdf) | AfD-Politiker Halemba muss vor Gericht BR24 |
| [`AfD-Politiker_beleidigt_15-Jährige_auf_Facebook.pdf`](./dokumente/hauptquellen/AfD-Politiker_beleidigt_15-J%C3%A4hrige_auf_Facebook.pdf) | AfD-Politiker beleidigt 15-Jährige auf Facebook |
| [`AfD-Spitze_unter_Druck__Unterstützer_fordern_keine_Mäßigung_–_sondern_radikalen_Kurs.pdf`](./dokumente/hauptquellen/AfD-Spitze_unter_Druck__Unterst%C3%BCtzer_fordern_keine_M%C3%A4%C3%9Figung_%E2%80%93_sondern_radikalen_Kurs.pdf) | AfD-Spitze unter Druck Unterstützer fordern keine Mäßigung – sondern radikalen Kurs |
| [`AfD-Verbot_hätte_laut_neuem_Gutachten_„wahrscheinlich_Erfolg“.pdf`](./dokumente/hauptquellen/AfD-Verbot_h%C3%A4tte_laut_neuem_Gutachten_%E2%80%9Ewahrscheinlich_Erfolg%E2%80%9C.pdf) | AfD-Verbot hätte laut neuem Gutachten „wahrscheinlich Erfolg“ |
| [`AfD_-_Vox_mingle_with_ex-US_Border_Patrol_chief_white_nationalist_leader_at_remigration_summit_–_POLITICO.pdf`](./dokumente/hauptquellen/AfD_-_Vox_mingle_with_ex-US_Border_Patrol_chief_white_nationalist_leader_at_remigration_summit_%E2%80%93_POLITICO.pdf) | AfD - Vox mingle with ex-US Border Patrol chief white nationalist leader at remigration summit – POLITICO |
| [`AfD__Gold_aus_Erbschaft_wohl_nach_Liechtenstein_gebracht_–_Fragen_bleiben_offen_-_DER_SPIEGEL.pdf`](./dokumente/hauptquellen/AfD__Gold_aus_Erbschaft_wohl_nach_Liechtenstein_gebracht_%E2%80%93_Fragen_bleiben_offen_-_DER_SPIEGEL.pdf) | AfD Gold aus Erbschaft wohl nach Liechtenstein gebracht – Fragen bleiben offen - DER SPIEGEL |
| [`AfD__Schwurblerin_und_Identitärer_kriegen_keinen_Hausausweis.pdf`](./dokumente/hauptquellen/AfD__Schwurblerin_und_Identit%C3%A4rer_kriegen_keinen_Hausausweis.pdf) | AfD Schwurblerin und Identitärer kriegen keinen Hausausweis |
| [`AfD__Verdacht_auf_Informationsweitergabe_an_Russland_-_DER_SPIEGEL.pdf`](./dokumente/hauptquellen/AfD__Verdacht_auf_Informationsweitergabe_an_Russland_-_DER_SPIEGEL.pdf) | AfD Verdacht auf Informationsweitergabe an Russland - DER SPIEGEL |
| [`AfD__Wie_Demokraten_mit_Verfassungsfeinden_umgehen_können.pdf`](./dokumente/hauptquellen/AfD__Wie_Demokraten_mit_Verfassungsfeinden_umgehen_k%C3%B6nnen.pdf) | AfD Wie Demokraten mit Verfassungsfeinden umgehen können |
| [`AfD__Überwachungsbehörde_nimmt_Europapartei_ins_Visier.pdf`](./dokumente/hauptquellen/AfD__%C3%9Cberwachungsbeh%C3%B6rde_nimmt_Europapartei_ins_Visier.pdf) | AfD Überwachungsbehörde nimmt Europapartei ins Visier |
| [`AfD_muss_Geschäftsstelle_in_Berlin_räumen.pdf`](./dokumente/hauptquellen/AfD_muss_Gesch%C3%A4ftsstelle_in_Berlin_r%C3%A4umen.pdf) | AfD muss Geschäftsstelle in Berlin räumen |
| [`AfD_und_CDU_streichen_Fördergelder__„Demokratie_Leben“_stirbt_im_Ilm-Kreis___taz.de.pdf`](./dokumente/hauptquellen/AfD_und_CDU_streichen_F%C3%B6rdergelder__%E2%80%9EDemokratie_Leben%E2%80%9C_stirbt_im_Ilm-Kreis___taz.de.pdf) | AfD und CDU streichen Fördergelder „Demokratie Leben“ stirbt im Ilm-Kreis taz.de |
| [`AfD_und_Identitäre_Bewegung__An_einem_Strang_-_Ausgabe_756.pdf`](./dokumente/hauptquellen/AfD_und_Identit%C3%A4re_Bewegung__An_einem_Strang_-_Ausgabe_756.pdf) | AfD und Identitäre Bewegung An einem Strang - Ausgabe 756 |
| [`AfD‑Jugend.pdf`](./dokumente/hauptquellen/AfD%E2%80%91Jugend.pdf) | AfD‑Jugend |
| [`Alice_Weidel__Hass_gegen_Syrer_unter_Instagram-Post_hat_Folgen_-_SWR_Aktuell.pdf`](./dokumente/hauptquellen/Alice_Weidel__Hass_gegen_Syrer_unter_Instagram-Post_hat_Folgen_-_SWR_Aktuell.pdf) | Alice Weidel Hass gegen Syrer unter Instagram-Post hat Folgen - SWR Aktuell |
| [`Analyse_Die_AfD_eine_Gefahr_fuer_Menschen_mit_Behinderungen.pdf`](./dokumente/hauptquellen/Analyse_Die_AfD_eine_Gefahr_fuer_Menschen_mit_Behinderungen.pdf) | Analyse Die AfD eine Gefahr fuer Menschen mit Behinderungen |
| [`Analyse_in_den_Bundesländern__Mehr_rechte_Gewalt_als_bekannt___taz.de.pdf`](./dokumente/hauptquellen/Analyse_in_den_Bundesl%C3%A4ndern__Mehr_rechte_Gewalt_als_bekannt___taz.de.pdf) | Analyse in den Bundesländern Mehr rechte Gewalt als bekannt taz.de |
| [`Attacken_auf_Parteibüros_in_Flensburg__Tatverdächiger_in_U-Haft.pdf`](./dokumente/hauptquellen/Attacken_auf_Parteib%C3%BCros_in_Flensburg__Tatverd%C3%A4chiger_in_U-Haft.pdf) | Attacken auf Parteibüros in Flensburg Tatverdächiger in U-Haft |
| [`Beatrix_von_Storch__So_will_die_AfD_mit_Kulturkampf_Wahlen_gewinnen.pdf`](./dokumente/hauptquellen/Beatrix_von_Storch__So_will_die_AfD_mit_Kulturkampf_Wahlen_gewinnen.pdf) | Beatrix von Storch So will die AfD mit Kulturkampf Wahlen gewinnen |
| [`Behindertenfeindlichkeit_der_AfD.pdf`](./dokumente/hauptquellen/Behindertenfeindlichkeit_der_AfD.pdf) | Behindertenfeindlichkeit der AfD |
| [`BelltowerNews_Rassistische_Silvester_Narrative.pdf`](./dokumente/hauptquellen/BelltowerNews_Rassistische_Silvester_Narrative.pdf) | BelltowerNews Rassistische Silvester Narrative |
| [`BelltowerNews_Rassistische_Silvester_Narrative_Original.pdf`](./dokumente/hauptquellen/BelltowerNews_Rassistische_Silvester_Narrative_Original.pdf) | BelltowerNews Rassistische Silvester Narrative Original |
| [`Berlin__Betrunkener_Polizeischüler_soll_Mann_geschlagen_haben_-_DER_SPIEGEL.pdf`](./dokumente/hauptquellen/Berlin__Betrunkener_Polizeisch%C3%BCler_soll_Mann_geschlagen_haben_-_DER_SPIEGEL.pdf) | Berlin Betrunkener Polizeischüler soll Mann geschlagen haben - DER SPIEGEL |
| [`Berliner_Aufruf__AfD-Verbotsverfahren_im_Bundesrat_einleiten_–_JETZT!___WeAct.pdf`](./dokumente/hauptquellen/Berliner_Aufruf__AfD-Verbotsverfahren_im_Bundesrat_einleiten_%E2%80%93_JETZT%21___WeAct.pdf) | Berliner Aufruf AfD-Verbotsverfahren im Bundesrat einleiten – JETZT! WeAct |
| [`Brandenburg_-_AfD_zieht_Eilantrag_gegen_Einstufung_als_gesichert_rechtsextrem_zurück.pdf`](./dokumente/hauptquellen/Brandenburg_-_AfD_zieht_Eilantrag_gegen_Einstufung_als_gesichert_rechtsextrem_zur%C3%BCck.pdf) | Brandenburg - AfD zieht Eilantrag gegen Einstufung als gesichert rechtsextrem zurück |
| [`Bundestag_hebt_Immunität_von_AfD-Politiker_Krah_auf___tagesschau.de.pdf`](./dokumente/hauptquellen/Bundestag_hebt_Immunit%C3%A4t_von_AfD-Politiker_Krah_auf___tagesschau.de.pdf) | Bundestag hebt Immunität von AfD-Politiker Krah auf tagesschau.de |
| [`Bundesverwaltungsgericht__AfD-Einstufung_als__Verdachtsfall__rechtskräftig___tagesschau.de.pdf`](./dokumente/hauptquellen/Bundesverwaltungsgericht__AfD-Einstufung_als__Verdachtsfall__rechtskr%C3%A4ftig___tagesschau.de.pdf) | Bundesverwaltungsgericht AfD-Einstufung als Verdachtsfall rechtskräftig tagesschau.de |
| [`Buttersäure_in_Döbeln__Trautmann_hatte_Hilfe_von_AfD-Mann.pdf`](./dokumente/hauptquellen/Butters%C3%A4ure_in_D%C3%B6beln__Trautmann_hatte_Hilfe_von_AfD-Mann.pdf) | Buttersäure in Döbeln Trautmann hatte Hilfe von AfD-Mann |
| [`CDU-Politikerin_Saskia_Ludwig__Diskutieren_bei_einer_Gruselshow_in_Ungarn___taz.de.pdf`](./dokumente/hauptquellen/CDU-Politikerin_Saskia_Ludwig__Diskutieren_bei_einer_Gruselshow_in_Ungarn___taz.de.pdf) | CDU-Politikerin Saskia Ludwig Diskutieren bei einer Gruselshow in Ungarn taz.de |
| [`CDU_und_SPD_verschaffen_konservativer_Denkfabrik_R21_staatliche_Fördergelder.pdf`](./dokumente/hauptquellen/CDU_und_SPD_verschaffen_konservativer_Denkfabrik_R21_staatliche_F%C3%B6rdergelder.pdf) | CDU und SPD verschaffen konservativer Denkfabrik R21 staatliche Fördergelder |
| [`Campact_Petition_AfD_Verbotsverfahren.pdf`](./dokumente/hauptquellen/Campact_Petition_AfD_Verbotsverfahren.pdf) | Campact Petition AfD Verbotsverfahren |
| [`CeMAS_Active_Clubs_in_Germany_2024.pdf`](./dokumente/hauptquellen/CeMAS_Active_Clubs_in_Germany_2024.pdf) | CeMAS Active Clubs in Germany 2024 |
| [`CeMAS_Kameradschaft_Fitness_Faschismus_Active_Clubs.pdf`](./dokumente/hauptquellen/CeMAS_Kameradschaft_Fitness_Faschismus_Active_Clubs.pdf) | CeMAS Kameradschaft Fitness Faschismus Active Clubs |
| [`ChatGPT-Agent-Repo_Analyse_durchführen.pdf`](./dokumente/hauptquellen/ChatGPT-Agent-Repo_Analyse_durchf%C3%BChren.pdf) | ChatGPT-Agent-Repo Analyse durchführen |
| [`ChatGPT_-_Szenarioanalyse__AfD-Wahlsieg_2025_und_Regierungsübernahme_(2025–2029).pdf`](./dokumente/hauptquellen/ChatGPT_-_Szenarioanalyse__AfD-Wahlsieg_2025_und_Regierungs%C3%BCbernahme_%282025%E2%80%932029%29.pdf) | ChatGPT - Szenarioanalyse AfD-Wahlsieg 2025 und Regierungsübernahme (2025–2029) |
| [`Christian_Lüth___Wir_können_die_nachher_immer_noch_alle_erschießen____DIE_ZEIT.pdf`](./dokumente/hauptquellen/Christian_L%C3%BCth___Wir_k%C3%B6nnen_die_nachher_immer_noch_alle_erschie%C3%9Fen____DIE_ZEIT.pdf) | Christian Lüth Wir können die nachher immer noch alle erschießen DIE ZEIT |
| [`Chronik_rechter_und_rassistischer_Gewalt_der_Woche.pdf`](./dokumente/hauptquellen/Chronik_rechter_und_rassistischer_Gewalt_der_Woche.pdf) | Chronik rechter und rassistischer Gewalt der Woche |
| [`Correctiv-Recherche_zeigt_Straftäter_unter_AfD-Abgeordneten.pdf`](./dokumente/hauptquellen/Correctiv-Recherche_zeigt_Straft%C3%A4ter_unter_AfD-Abgeordneten.pdf) | Correctiv-Recherche zeigt Straftäter unter AfD-Abgeordneten |
| [`DIMR_Analyse_Warum_die_AfD_verboten_werden_koennte.pdf`](./dokumente/hauptquellen/DIMR_Analyse_Warum_die_AfD_verboten_werden_koennte.pdf) | DIMR Analyse Warum die AfD verboten werden koennte |
| [`DIMR_Analyse_Warum_die_AfD_verboten_werden_koennte_Original.pdf`](./dokumente/hauptquellen/DIMR_Analyse_Warum_die_AfD_verboten_werden_koennte_Original.pdf) | DIMR Analyse Warum die AfD verboten werden koennte Original |
| [`DW_Aussetzung_der_AfD_Einstufung.pdf`](./dokumente/hauptquellen/DW_Aussetzung_der_AfD_Einstufung.pdf) | DW Aussetzung der AfD Einstufung |
| [`DW_Aussetzung_der_AfD_Einstufung_Original.pdf`](./dokumente/hauptquellen/DW_Aussetzung_der_AfD_Einstufung_Original.pdf) | DW Aussetzung der AfD Einstufung Original |
| [`Dario_Seifert__Dieser_Ex-Neonazi_soll_die_AfD_zum_Erfolg_führen.pdf`](./dokumente/hauptquellen/Dario_Seifert__Dieser_Ex-Neonazi_soll_die_AfD_zum_Erfolg_f%C3%BChren.pdf) | Dario Seifert Dieser Ex-Neonazi soll die AfD zum Erfolg führen |
| [`Debunked__Die_10_häufigsten_Fakes_über_das_AfD-Verbotsverfahren_-_Volksverpetzer.pdf`](./dokumente/hauptquellen/Debunked__Die_10_h%C3%A4ufigsten_Fakes_%C3%BCber_das_AfD-Verbotsverfahren_-_Volksverpetzer.pdf) | Debunked Die 10 häufigsten Fakes über das AfD-Verbotsverfahren - Volksverpetzer |
| [`Der_Weg_ins_Kanzleramt__Wie_die_AfD-Strategie_funktioniert___tagesschau.de.pdf`](./dokumente/hauptquellen/Der_Weg_ins_Kanzleramt__Wie_die_AfD-Strategie_funktioniert___tagesschau.de.pdf) | Der Weg ins Kanzleramt Wie die AfD-Strategie funktioniert tagesschau.de |
| [`Disziplinarverfahren_läuft__Polizist_trotz_Krankmeldung_im_Wahlkampf_für_die_AfD___Politik___BILD.de.pdf`](./dokumente/hauptquellen/Disziplinarverfahren_l%C3%A4uft__Polizist_trotz_Krankmeldung_im_Wahlkampf_f%C3%BCr_die_AfD___Politik___BILD.de.pdf) | Disziplinarverfahren läuft Polizist trotz Krankmeldung im Wahlkampf für die AfD Politik BILD.de |
| [`Durchsuchung_bei_AfD-Politiker__Polizei_findet_Waffen_und_Sprengstoff.pdf`](./dokumente/hauptquellen/Durchsuchung_bei_AfD-Politiker__Polizei_findet_Waffen_und_Sprengstoff.pdf) | Durchsuchung bei AfD-Politiker Polizei findet Waffen und Sprengstoff |
| [`Düsseldorf__Ex-AfD-Politiker_Beck_wegen_mutmaßlichem_Diebstahl_vor_Gericht.pdf`](./dokumente/hauptquellen/D%C3%BCsseldorf__Ex-AfD-Politiker_Beck_wegen_mutma%C3%9Flichem_Diebstahl_vor_Gericht.pdf) | Düsseldorf Ex-AfD-Politiker Beck wegen mutmaßlichem Diebstahl vor Gericht |
| [`EFTA01614968_-_Epstein_mit_Steve_Bannon_im_Gespräch_über_europäischen_Rechten.pdf`](./dokumente/hauptquellen/EFTA01614968_-_Epstein_mit_Steve_Bannon_im_Gespr%C3%A4ch_%C3%BCber_europ%C3%A4ischen_Rechten.pdf) | EFTA01614968 - Epstein mit Steve Bannon im Gespräch über europäischen Rechten |
| [`Ehemaliger_AfD-Schatzmeister_soll_Geld_veruntreut_haben_-_SWR_Aktuell.pdf`](./dokumente/hauptquellen/Ehemaliger_AfD-Schatzmeister_soll_Geld_veruntreut_haben_-_SWR_Aktuell.pdf) | Ehemaliger AfD-Schatzmeister soll Geld veruntreut haben - SWR Aktuell |
| [`Eilantrag_abgelehnt__Verfassungsschutz_darf_AfD_Niedersachsen_zum_Beobachtungsobjekt_hochstufen.pdf`](./dokumente/hauptquellen/Eilantrag_abgelehnt__Verfassungsschutz_darf_AfD_Niedersachsen_zum_Beobachtungsobjekt_hochstufen.pdf) | Eilantrag abgelehnt Verfassungsschutz darf AfD Niedersachsen zum Beobachtungsobjekt hochstufen |
| [`Erneute-Durchsuchungen-Nds-Ministerium.pdf`](./dokumente/hauptquellen/Erneute-Durchsuchungen-Nds-Ministerium.pdf) | Erneute-Durchsuchungen-Nds-Ministerium |
| [`Eskalation_in_der_NRW-AfD__Einer_der_letzten_Gemäßigten_strauchelt.pdf`](./dokumente/hauptquellen/Eskalation_in_der_NRW-AfD__Einer_der_letzten_Gem%C3%A4%C3%9Figten_strauchelt.pdf) | Eskalation in der NRW-AfD Einer der letzten Gemäßigten strauchelt |
| [`Extreme_Rechte_–_»Zeckenbiss«__AfD-Politiker_Stefan_Hrdy_verurteilt___nd-aktuell.de.pdf`](./dokumente/hauptquellen/Extreme_Rechte_%E2%80%93_%C2%BBZeckenbiss%C2%AB__AfD-Politiker_Stefan_Hrdy_verurteilt___nd-aktuell.de.pdf) | Extreme Rechte – »Zeckenbiss« AfD-Politiker Stefan Hrdy verurteilt nd-aktuell.de |
| [`Extremismus__Verdacht_auf_Angriffe_–_Razzia_gegen_junge_Rechtsextremisten___STERN.de.pdf`](./dokumente/hauptquellen/Extremismus__Verdacht_auf_Angriffe_%E2%80%93_Razzia_gegen_junge_Rechtsextremisten___STERN.de.pdf) | Extremismus Verdacht auf Angriffe – Razzia gegen junge Rechtsextremisten STERN.de |
| [`Extremisten_in_Deutschland_haben_legal_Tausende_Waffen___STERN.de.pdf`](./dokumente/hauptquellen/Extremisten_in_Deutschland_haben_legal_Tausende_Waffen___STERN.de.pdf) | Extremisten in Deutschland haben legal Tausende Waffen STERN.de |
| [`Foitzik.pdf`](./dokumente/hauptquellen/Foitzik.pdf) | Foitzik |
| [`Fotografen_der_Identitären_Bewegung__Ins_rechte_Licht_gerückt___taz.de.pdf`](./dokumente/hauptquellen/Fotografen_der_Identit%C3%A4ren_Bewegung__Ins_rechte_Licht_ger%C3%BCckt___taz.de.pdf) | Fotografen der Identitären Bewegung Ins rechte Licht gerückt taz.de |
| [`Frank_Gotthardt__CDU-Spitze_erwog_Kooperation_mit_Firma_von_Nius-Finanzier___DIE_ZEIT.pdf`](./dokumente/hauptquellen/Frank_Gotthardt__CDU-Spitze_erwog_Kooperation_mit_Firma_von_Nius-Finanzier___DIE_ZEIT.pdf) | Frank Gotthardt CDU-Spitze erwog Kooperation mit Firma von Nius-Finanzier DIE ZEIT |
| [`Gericht_entscheidet__Hessen-AfD_darf_als_Verdachtsfall_eingestuft_werden___hessenschau.de.pdf`](./dokumente/hauptquellen/Gericht_entscheidet__Hessen-AfD_darf_als_Verdachtsfall_eingestuft_werden___hessenschau.de.pdf) | Gericht entscheidet Hessen-AfD darf als Verdachtsfall eingestuft werden hessenschau.de |
| [`Gewalt_als_Alternative__14_verurteilte_AfD-Mandatsträger_im_Amt.pdf`](./dokumente/hauptquellen/Gewalt_als_Alternative__14_verurteilte_AfD-Mandatstr%C3%A4ger_im_Amt.pdf) | Gewalt als Alternative 14 verurteilte AfD-Mandatsträger im Amt |
| [`Hamburg__Nächster_AfD-Abgeordneter_soll_Mandat_verlieren___MOPO.pdf`](./dokumente/hauptquellen/Hamburg__N%C3%A4chster_AfD-Abgeordneter_soll_Mandat_verlieren___MOPO.pdf) | Hamburg Nächster AfD-Abgeordneter soll Mandat verlieren MOPO |
| [`Hamburger_AfD-Politiker_Risch_offenbar_bei_Neonazi-Treffen_in_Russland___ndr.de.pdf`](./dokumente/hauptquellen/Hamburger_AfD-Politiker_Risch_offenbar_bei_Neonazi-Treffen_in_Russland___ndr.de.pdf) | Hamburger AfD-Politiker Risch offenbar bei Neonazi-Treffen in Russland ndr.de |
| [`Hausdurchsuchung_bei_AfD-Waffenfan___Endstation_Rechts_.pdf`](./dokumente/hauptquellen/Hausdurchsuchung_bei_AfD-Waffenfan___Endstation_Rechts_.pdf) | Hausdurchsuchung bei AfD-Waffenfan Endstation Rechts  |
| [`Hendrik_Cremer_über_Rechtsextremismus_und_die_AfD_in_Deutschland_-_Politik_-_SZ.de.pdf`](./dokumente/hauptquellen/Hendrik_Cremer_%C3%BCber_Rechtsextremismus_und_die_AfD_in_Deutschland_-_Politik_-_SZ.de.pdf) | Hendrik Cremer über Rechtsextremismus und die AfD in Deutschland - Politik - SZ.de |
| [`Hessen_-_Verwaltungsgericht_Wiesbaden_lehnt_Beweisanträge_der_AfD_ab.pdf`](./dokumente/hauptquellen/Hessen_-_Verwaltungsgericht_Wiesbaden_lehnt_Beweisantr%C3%A4ge_der_AfD_ab.pdf) | Hessen - Verwaltungsgericht Wiesbaden lehnt Beweisanträge der AfD ab |
| [`Hessen__AfD-Kreisverband_wirbt_für_rechtsextremes_„Thule-Seminar“.pdf`](./dokumente/hauptquellen/Hessen__AfD-Kreisverband_wirbt_f%C3%BCr_rechtsextremes_%E2%80%9EThule-Seminar%E2%80%9C.pdf) | Hessen AfD-Kreisverband wirbt für rechtsextremes „Thule-Seminar“ |
| [`Hessen__AfD_darf_als_Verdachtsfall_eingestuft_werden.pdf`](./dokumente/hauptquellen/Hessen__AfD_darf_als_Verdachtsfall_eingestuft_werden.pdf) | Hessen AfD darf als Verdachtsfall eingestuft werden |
| [`Hessen__Streit_um_AfD-Einstufung__Gericht_weist_Beweisanträge_zurück_-_ntv.de.pdf`](./dokumente/hauptquellen/Hessen__Streit_um_AfD-Einstufung__Gericht_weist_Beweisantr%C3%A4ge_zur%C3%BCck_-_ntv.de.pdf) | Hessen Streit um AfD-Einstufung Gericht weist Beweisanträge zurück - ntv.de |
| [`Hessens_Verfassungsschutz_darf_AfD_als_rechtsextremen_Verdachtsfall_beobachten.pdf`](./dokumente/hauptquellen/Hessens_Verfassungsschutz_darf_AfD_als_rechtsextremen_Verdachtsfall_beobachten.pdf) | Hessens Verfassungsschutz darf AfD als rechtsextremen Verdachtsfall beobachten |
| [`Historiker_Volker_Weiß_über_die_extremen_Rechten__Wie_sie_Geschichte_umschreiben_-_Ausgabe_756.pdf`](./dokumente/hauptquellen/Historiker_Volker_Wei%C3%9F_%C3%BCber_die_extremen_Rechten__Wie_sie_Geschichte_umschreiben_-_Ausgabe_756.pdf) | Historiker Volker Weiß über die extremen Rechten Wie sie Geschichte umschreiben - Ausgabe 756 |
| [`Hitlergruß-Vorwurf_gegen_AfD-Landeschef_Reichardt-mdr.pdf`](./dokumente/hauptquellen/Hitlergru%C3%9F-Vorwurf_gegen_AfD-Landeschef_Reichardt-mdr.pdf) | Hitlergruß-Vorwurf gegen AfD-Landeschef Reichardt-mdr |
| [`Identitäre_Bewegung__Maximilian_Märkl_aus_Augsburg_steht_an_der_Spitze.pdf`](./dokumente/hauptquellen/Identit%C3%A4re_Bewegung__Maximilian_M%C3%A4rkl_aus_Augsburg_steht_an_der_Spitze.pdf) | Identitäre Bewegung Maximilian Märkl aus Augsburg steht an der Spitze |
| [`Intensive_Verbindung__Wie_die_CDU_mit_Fr_•_Table.Briefings.pdf`](./dokumente/hauptquellen/Intensive_Verbindung__Wie_die_CDU_mit_Fr_%E2%80%A2_Table.Briefings.pdf) | Intensive Verbindung Wie die CDU mit Fr • Table.Briefings |
| [`Justiz__Einstufung_der_hessischen_AfD_-_Hauptsacheverfahren_im_Mai___DIE_ZEIT.pdf`](./dokumente/hauptquellen/Justiz__Einstufung_der_hessischen_AfD_-_Hauptsacheverfahren_im_Mai___DIE_ZEIT.pdf) | Justiz Einstufung der hessischen AfD - Hauptsacheverfahren im Mai DIE ZEIT |
| [`Katholische_Kirche_angezündet_–_AfD_stellt_in_Wickede_Ruhr_verurteilten_Brandstifter_für_die_Ratswahl_auf.pdf`](./dokumente/hauptquellen/Katholische_Kirche_angez%C3%BCndet_%E2%80%93_AfD_stellt_in_Wickede_Ruhr_verurteilten_Brandstifter_f%C3%BCr_die_Ratswahl_auf.pdf) | Katholische Kirche angezündet – AfD stellt in Wickede Ruhr verurteilten Brandstifter für die Ratswahl auf |
| [`Kette-des-Versagens-17-02-2021.pdf`](./dokumente/hauptquellen/Kette-des-Versagens-17-02-2021.pdf) | Kette-des-Versagens-17-02-2021 |
| [`Kommunalwahl_2025_Düsseldorf__AfD_provoziert_mit_möglicher_Nazi-Parole.pdf`](./dokumente/hauptquellen/Kommunalwahl_2025_D%C3%BCsseldorf__AfD_provoziert_mit_m%C3%B6glicher_Nazi-Parole.pdf) | Kommunalwahl 2025 Düsseldorf AfD provoziert mit möglicher Nazi-Parole |
| [`Kotré,_Sellner_und_Co.__Wer_war_beim_Remigration_Summit_2025_.pdf`](./dokumente/hauptquellen/Kotr%C3%A9%2C_Sellner_und_Co.__Wer_war_beim_Remigration_Summit_2025_.pdf) | Kotré, Sellner und Co. Wer war beim Remigration Summit 2025  |
| [`Kotré,_Urban,_Frohnmaier__AfD-Prominenz_reist_zu_Putins_Wirtschaftsforum.pdf`](./dokumente/hauptquellen/Kotr%C3%A9%2C_Urban%2C_Frohnmaier__AfD-Prominenz_reist_zu_Putins_Wirtschaftsforum.pdf) | Kotré, Urban, Frohnmaier AfD-Prominenz reist zu Putins Wirtschaftsforum |
| [`Landtagswahlkampf_in_Mecklenburg-Vorpommern__AfD_in_Mecklenburg-Vorpommern_fordert_»Rückführungspolizei«___DIE_ZEIT.pdf`](./dokumente/hauptquellen/Landtagswahlkampf_in_Mecklenburg-Vorpommern__AfD_in_Mecklenburg-Vorpommern_fordert_%C2%BBR%C3%BCckf%C3%BChrungspolizei%C2%AB___DIE_ZEIT.pdf) | Landtagswahlkampf in Mecklenburg-Vorpommern AfD in Mecklenburg-Vorpommern fordert »Rückführungspolizei« DIE ZEIT |
| [`Leipzig__AfD-Sticker_mit_Rasierklingen_präpariert.pdf`](./dokumente/hauptquellen/Leipzig__AfD-Sticker_mit_Rasierklingen_pr%C3%A4pariert.pdf) | Leipzig AfD-Sticker mit Rasierklingen präpariert |
| [`Leipziger_Sicherheitsbehörde_entzieht_zwei_AfD-Politikern_die_Waffenscheine.pdf`](./dokumente/hauptquellen/Leipziger_Sicherheitsbeh%C3%B6rde_entzieht_zwei_AfD-Politikern_die_Waffenscheine.pdf) | Leipziger Sicherheitsbehörde entzieht zwei AfD-Politikern die Waffenscheine |
| [`Linnemann_(CDU)_nennt_falsche_Zahl_zur_Beschäftigung_Geflüchteter___WEB.DE.pdf`](./dokumente/hauptquellen/Linnemann_%28CDU%29_nennt_falsche_Zahl_zur_Besch%C3%A4ftigung_Gefl%C3%BCchteter___WEB.DE.pdf) | Linnemann (CDU) nennt falsche Zahl zur Beschäftigung Geflüchteter WEB.DE |
| [`Maaßen_als_Minister_für_die_AfD__Ein_ernst_zu_nehmender_Kandidat.pdf`](./dokumente/hauptquellen/Maa%C3%9Fen_als_Minister_f%C3%BCr_die_AfD__Ein_ernst_zu_nehmender_Kandidat.pdf) | Maaßen als Minister für die AfD Ein ernst zu nehmender Kandidat |
| [`Maximilian_Krah__Bundestag_hebt_Immunität_des_AfD-Politikers_auf.pdf`](./dokumente/hauptquellen/Maximilian_Krah__Bundestag_hebt_Immunit%C3%A4t_des_AfD-Politikers_auf.pdf) | Maximilian Krah Bundestag hebt Immunität des AfD-Politikers auf |
| [`Missbrauch_von_Fragerecht__Spionageverdacht_gegen_AfD__-_Minister_in_Konflikt_mit_Höcke___DIE_ZEIT.pdf`](./dokumente/hauptquellen/Missbrauch_von_Fragerecht__Spionageverdacht_gegen_AfD__-_Minister_in_Konflikt_mit_H%C3%B6cke___DIE_ZEIT.pdf) | Missbrauch von Fragerecht Spionageverdacht gegen AfD - Minister in Konflikt mit Höcke DIE ZEIT |
| [`Neonazis,_Soldaten_und_Polizisten__Das_radikale_Netzwerk_des_Johannes_K.___taz.de.pdf`](./dokumente/hauptquellen/Neonazis%2C_Soldaten_und_Polizisten__Das_radikale_Netzwerk_des_Johannes_K.___taz.de.pdf) | Neonazis, Soldaten und Polizisten Das radikale Netzwerk des Johannes K. taz.de |
| [`Niederlage_für_Rechtsextreme__Bayerns_Verfassungsschutz_darf_AfD_beobachten___taz.de.pdf`](./dokumente/hauptquellen/Niederlage_f%C3%BCr_Rechtsextreme__Bayerns_Verfassungsschutz_darf_AfD_beobachten___taz.de.pdf) | Niederlage für Rechtsextreme Bayerns Verfassungsschutz darf AfD beobachten taz.de |
| [`Nordrhein-Westfalen__Staatsschutz_ermittelt_nach_Hitlergruß_bei_AfD-Kreisparteitag_-_Politik.pdf`](./dokumente/hauptquellen/Nordrhein-Westfalen__Staatsschutz_ermittelt_nach_Hitlergru%C3%9F_bei_AfD-Kreisparteitag_-_Politik.pdf) | Nordrhein-Westfalen Staatsschutz ermittelt nach Hitlergruß bei AfD-Kreisparteitag - Politik |
| [`PIXA.pdf`](./dokumente/hauptquellen/PIXA.pdf) | PIXA |
| [`Plädoyer_für_ein_AfD-Verbot_aus_antifaschistischer_Perspektive.pdf`](./dokumente/hauptquellen/Pl%C3%A4doyer_f%C3%BCr_ein_AfD-Verbot_aus_antifaschistischer_Perspektive.pdf) | Plädoyer für ein AfD-Verbot aus antifaschistischer Perspektive |
| [`Polizei_stoppt_Neonazi_mit_scharf_geladener_Schusswaffe_und_Ersatzmunition_auf_A8_-_Allgäu_⇏_rechtsaußen.pdf`](./dokumente/hauptquellen/Polizei_stoppt_Neonazi_mit_scharf_geladener_Schusswaffe_und_Ersatzmunition_auf_A8_-_Allg%C3%A4u_%E2%87%8F_rechtsau%C3%9Fen.pdf) | Polizei stoppt Neonazi mit scharf geladener Schusswaffe und Ersatzmunition auf A8 - Allgäu ⇏ rechtsaußen |
| [`Professor_der_Bundespolizei__„Ausgewiesener_Extremist_an_zentraler_Stelle“.pdf`](./dokumente/hauptquellen/Professor_der_Bundespolizei__%E2%80%9EAusgewiesener_Extremist_an_zentraler_Stelle%E2%80%9C.pdf) | Professor der Bundespolizei „Ausgewiesener Extremist an zentraler Stelle“ |
| [`Prozess_gegen_Jian_G._in_Dresden__Das_wird_gefährlich_für_die_AfD.pdf`](./dokumente/hauptquellen/Prozess_gegen_Jian_G._in_Dresden__Das_wird_gef%C3%A4hrlich_f%C3%BCr_die_AfD.pdf) | Prozess gegen Jian G. in Dresden Das wird gefährlich für die AfD |
| [`Prozess_gegen_Krah-Assistenten__Das_steht_in_den_AfD-Dossiers_des_mutmaßlichen_China-Spions_-_DER_SPIEGEL.pdf`](./dokumente/hauptquellen/Prozess_gegen_Krah-Assistenten__Das_steht_in_den_AfD-Dossiers_des_mutma%C3%9Flichen_China-Spions_-_DER_SPIEGEL.pdf) | Prozess gegen Krah-Assistenten Das steht in den AfD-Dossiers des mutmaßlichen China-Spions - DER SPIEGEL |
| [`Razzia__Polizei_sucht_Waffen_bei_Rechtsextremen_vom_„Nordbund“___taz.de.pdf`](./dokumente/hauptquellen/Razzia__Polizei_sucht_Waffen_bei_Rechtsextremen_vom_%E2%80%9ENordbund%E2%80%9C___taz.de.pdf) | Razzia Polizei sucht Waffen bei Rechtsextremen vom „Nordbund“ taz.de |
| [`Razzia_bei_AfD-Politiker__Waffen_und_Sprengstoff_gefunden___tagesschau.de.pdf`](./dokumente/hauptquellen/Razzia_bei_AfD-Politiker__Waffen_und_Sprengstoff_gefunden___tagesschau.de.pdf) | Razzia bei AfD-Politiker Waffen und Sprengstoff gefunden tagesschau.de |
| [`Razzia_in_Lübtheen__Scharfe_Waffen_entdeckt_–_AfD-Politiker_unter_Verdacht_.pdf`](./dokumente/hauptquellen/Razzia_in_L%C3%BCbtheen__Scharfe_Waffen_entdeckt_%E2%80%93_AfD-Politiker_unter_Verdacht_.pdf) | Razzia in Lübtheen Scharfe Waffen entdeckt – AfD-Politiker unter Verdacht  |
| [`Recherche__So_organisiert_sich_die_neue_Generation_der_Neonazis.pdf`](./dokumente/hauptquellen/Recherche__So_organisiert_sich_die_neue_Generation_der_Neonazis.pdf) | Recherche So organisiert sich die neue Generation der Neonazis |
| [`Rechtsextreme_AfD-Kandidaten_im_Kreis_Unna_-_Ruhrgebiet_-_Nachrichten_-_WDR.pdf`](./dokumente/hauptquellen/Rechtsextreme_AfD-Kandidaten_im_Kreis_Unna_-_Ruhrgebiet_-_Nachrichten_-_WDR.pdf) | Rechtsextreme AfD-Kandidaten im Kreis Unna - Ruhrgebiet - Nachrichten - WDR |
| [`Rechtsextremismus__Immer_mehr_junge_Menschen_wegen_rechtsextremer_Straftaten_verdächtigt___DIE_ZEIT.pdf`](./dokumente/hauptquellen/Rechtsextremismus__Immer_mehr_junge_Menschen_wegen_rechtsextremer_Straftaten_verd%C3%A4chtigt___DIE_ZEIT.pdf) | Rechtsextremismus Immer mehr junge Menschen wegen rechtsextremer Straftaten verdächtigt DIE ZEIT |
| [`Rechtsradikale_begehen_mehr_als_120_Straftaten_im_Kreis_Nordhausen_–_Südharzer_Reichsbürger_besitzen_Waffen.pdf`](./dokumente/hauptquellen/Rechtsradikale_begehen_mehr_als_120_Straftaten_im_Kreis_Nordhausen_%E2%80%93_S%C3%BCdharzer_Reichsb%C3%BCrger_besitzen_Waffen.pdf) | Rechtsradikale begehen mehr als 120 Straftaten im Kreis Nordhausen – Südharzer Reichsbürger besitzen Waffen |
| [`Reichsbürger-Prozess_in_Frankfurt__Was_wusste_Markus_Krall____FAZ.pdf`](./dokumente/hauptquellen/Reichsb%C3%BCrger-Prozess_in_Frankfurt__Was_wusste_Markus_Krall____FAZ.pdf) | Reichsbürger-Prozess in Frankfurt Was wusste Markus Krall FAZ |
| [`Reinbek__AfD-Politiker_Stienen_verurteilt_–_5000_Euro_Strafe.pdf`](./dokumente/hauptquellen/Reinbek__AfD-Politiker_Stienen_verurteilt_%E2%80%93_5000_Euro_Strafe.pdf) | Reinbek AfD-Politiker Stienen verurteilt – 5000 Euro Strafe |
| [`Schuldig_und_weiter_im_Amt__Mindestens_elf_AfD-Mandatsträger_wegen_Gewalttaten_verurteilt.pdf`](./dokumente/hauptquellen/Schuldig_und_weiter_im_Amt__Mindestens_elf_AfD-Mandatstr%C3%A4ger_wegen_Gewalttaten_verurteilt.pdf) | Schuldig und weiter im Amt Mindestens elf AfD-Mandatsträger wegen Gewalttaten verurteilt |
| [`Skandal_in_Flensburg__Schild_in_Schaufenster_verbietet_Juden_Zutritt.pdf`](./dokumente/hauptquellen/Skandal_in_Flensburg__Schild_in_Schaufenster_verbietet_Juden_Zutritt.pdf) | Skandal in Flensburg Schild in Schaufenster verbietet Juden Zutritt |
| [`Sportschützen_und_die_AfD__Schüsse_von_rechts___taz.de.pdf`](./dokumente/hauptquellen/Sportsch%C3%BCtzen_und_die_AfD__Sch%C3%BCsse_von_rechts___taz.de.pdf) | Sportschützen und die AfD Schüsse von rechts taz.de |
| [`Streit_in_der_AfD__Wie_völkisch_darf's_denn_sein_.pdf`](./dokumente/hauptquellen/Streit_in_der_AfD__Wie_v%C3%B6lkisch_darf%27s_denn_sein_.pdf) | Streit in der AfD Wie völkisch darf's denn sein  |
| [`Streit_um_AfD-Parteizentrale_in_Berlin__Vermieter_kündigt,_AfD_will_einfach_bleiben_-_SZ.de.pdf`](./dokumente/hauptquellen/Streit_um_AfD-Parteizentrale_in_Berlin__Vermieter_k%C3%BCndigt%2C_AfD_will_einfach_bleiben_-_SZ.de.pdf) | Streit um AfD-Parteizentrale in Berlin Vermieter kündigt, AfD will einfach bleiben - SZ.de |
| [`Thomas_Biebricher_im_Interview_über_die_Krise_des_Konservativismus_-_Kultur_-_SZ.de.pdf`](./dokumente/hauptquellen/Thomas_Biebricher_im_Interview_%C3%BCber_die_Krise_des_Konservativismus_-_Kultur_-_SZ.de.pdf) | Thomas Biebricher im Interview über die Krise des Konservativismus - Kultur - SZ.de |
| [`Thüringens_Innenminister_verdächtigt_AfD_der_Russland-Spionage.pdf`](./dokumente/hauptquellen/Th%C3%BCringens_Innenminister_verd%C3%A4chtigt_AfD_der_Russland-Spionage.pdf) | Thüringens Innenminister verdächtigt AfD der Russland-Spionage |
| [`TikTok_und_Skinhead-Revival__Nichts_als_substanzloses_Gebaren_.pdf`](./dokumente/hauptquellen/TikTok_und_Skinhead-Revival__Nichts_als_substanzloses_Gebaren_.pdf) | TikTok und Skinhead-Revival Nichts als substanzloses Gebaren  |
| [`Urteil_gegen_Ex-Mitarbeiter__Für_AfD-Politiker_Krah_ist_es_noch_nicht_vorbei___tagesschau.de.pdf`](./dokumente/hauptquellen/Urteil_gegen_Ex-Mitarbeiter__F%C3%BCr_AfD-Politiker_Krah_ist_es_noch_nicht_vorbei___tagesschau.de.pdf) | Urteil gegen Ex-Mitarbeiter Für AfD-Politiker Krah ist es noch nicht vorbei tagesschau.de |
| [`VGH_weist_Beschwerden_zu_Beobachtung_des_hessischen_AfD-Landesverbands_zurück___Hessen_Verwaltungsgerichtsbarkeit.pdf`](./dokumente/hauptquellen/VGH_weist_Beschwerden_zu_Beobachtung_des_hessischen_AfD-Landesverbands_zur%C3%BCck___Hessen_Verwaltungsgerichtsbarkeit.pdf) | VGH weist Beschwerden zu Beobachtung des hessischen AfD-Landesverbands zurück Hessen Verwaltungsgerichtsbarkeit |
| [`Verfassungsschutz_darf_AfD_Hessen_weiter_beobachten.pdf`](./dokumente/hauptquellen/Verfassungsschutz_darf_AfD_Hessen_weiter_beobachten.pdf) | Verfassungsschutz darf AfD Hessen weiter beobachten |
| [`Verfassungsschutzbericht_für_Hessen__Viel_mehr_rechtsextreme_Straftaten___hessenschau.de___Landtag.pdf`](./dokumente/hauptquellen/Verfassungsschutzbericht_f%C3%BCr_Hessen__Viel_mehr_rechtsextreme_Straftaten___hessenschau.de___Landtag.pdf) | Verfassungsschutzbericht für Hessen Viel mehr rechtsextreme Straftaten hessenschau.de Landtag |
| [`Verhandlung_zur_AfD-Einstufung___Hessen_Verwaltungsgerichtsbarkeit.pdf`](./dokumente/hauptquellen/Verhandlung_zur_AfD-Einstufung___Hessen_Verwaltungsgerichtsbarkeit.pdf) | Verhandlung zur AfD-Einstufung Hessen Verwaltungsgerichtsbarkeit |
| [`Verlust_von_deutschem_Pass__AfD_nimmt_deutsche_Staatsbürger_ins_Visier_-_Bayern_-_SZ.de.pdf`](./dokumente/hauptquellen/Verlust_von_deutschem_Pass__AfD_nimmt_deutsche_Staatsb%C3%BCrger_ins_Visier_-_Bayern_-_SZ.de.pdf) | Verlust von deutschem Pass AfD nimmt deutsche Staatsbürger ins Visier - Bayern - SZ.de |
| [`Verwaltungsgericht_zum_Verdachtsfall_AfD__Alice_Weidel_wohl_kein_Spitzel___taz.de.pdf`](./dokumente/hauptquellen/Verwaltungsgericht_zum_Verdachtsfall_AfD__Alice_Weidel_wohl_kein_Spitzel___taz.de.pdf) | Verwaltungsgericht zum Verdachtsfall AfD Alice Weidel wohl kein Spitzel taz.de |
| [`Volksverpetzer-764-Gesamt.pdf`](./dokumente/hauptquellen/Volksverpetzer-764-Gesamt.pdf) | Volksverpetzer-764-Gesamt |
| [`Vorwurf_rechter_Terror__Anklage_gegen_„Sächsische_Separatisten“_erhoben___taz.de.pdf`](./dokumente/hauptquellen/Vorwurf_rechter_Terror__Anklage_gegen_%E2%80%9ES%C3%A4chsische_Separatisten%E2%80%9C_erhoben___taz.de.pdf) | Vorwurf rechter Terror Anklage gegen „Sächsische Separatisten“ erhoben taz.de |
| [`WW__Fotos_sollen_Neonazi_als_Ordner_bei_AfD-Veranstaltung_zeigen_-_SWR_Aktuell.pdf`](./dokumente/hauptquellen/WW__Fotos_sollen_Neonazi_als_Ordner_bei_AfD-Veranstaltung_zeigen_-_SWR_Aktuell.pdf) | WW Fotos sollen Neonazi als Ordner bei AfD-Veranstaltung zeigen - SWR Aktuell |
| [`Wahl_zum_Berliner_Abgeordnetenhaus__Berliner_AfD_nominiert_erstmals_Kandidatin_für_Amt_der_»Regierenden«___DIE_ZEIT.pdf`](./dokumente/hauptquellen/Wahl_zum_Berliner_Abgeordnetenhaus__Berliner_AfD_nominiert_erstmals_Kandidatin_f%C3%BCr_Amt_der_%C2%BBRegierenden%C2%AB___DIE_ZEIT.pdf) | Wahl zum Berliner Abgeordnetenhaus Berliner AfD nominiert erstmals Kandidatin für Amt der »Regierenden« DIE ZEIT |
| [`Wahlfälschung_-_Gericht_spricht_Ex-AfD-Chef_schuldig.pdf`](./dokumente/hauptquellen/Wahlf%C3%A4lschung_-_Gericht_spricht_Ex-AfD-Chef_schuldig.pdf) | Wahlfälschung - Gericht spricht Ex-AfD-Chef schuldig |
| [`Warum_wählen_Arbeiter_die_AfD__Eine_Spurensuche_-_Politik_-_SZ.de.pdf`](./dokumente/hauptquellen/Warum_w%C3%A4hlen_Arbeiter_die_AfD__Eine_Spurensuche_-_Politik_-_SZ.de.pdf) | Warum wählen Arbeiter die AfD Eine Spurensuche - Politik - SZ.de |
| [`Wenn_die_Brandmauer_fällt___KATAPULT_Sachsen.pdf`](./dokumente/hauptquellen/Wenn_die_Brandmauer_f%C3%A4llt___KATAPULT_Sachsen.pdf) | Wenn die Brandmauer fällt KATAPULT Sachsen |
| [`Wie_die_AfD_im_Netz_bei_der_KI_die_Konkurrenz_abhängt___STERN.de.pdf`](./dokumente/hauptquellen/Wie_die_AfD_im_Netz_bei_der_KI_die_Konkurrenz_abh%C3%A4ngt___STERN.de.pdf) | Wie die AfD im Netz bei der KI die Konkurrenz abhängt STERN.de |
| [`Wir_werden_wohl_bald_erfahren,_ob_die_AfD_verboten_werden_würde_-_Volksverpetzer.pdf`](./dokumente/hauptquellen/Wir_werden_wohl_bald_erfahren%2C_ob_die_AfD_verboten_werden_w%C3%BCrde_-_Volksverpetzer.pdf) | Wir werden wohl bald erfahren, ob die AfD verboten werden würde - Volksverpetzer |
| [`Zahlen-Kriminalitaet-Gefluechtete-Correctiv.pdf`](./dokumente/hauptquellen/Zahlen-Kriminalitaet-Gefluechtete-Correctiv.pdf) | Zahlen-Kriminalitaet-Gefluechtete-Correctiv |
| [`Zwickau__Rechtsextremismus_bei_Simson-Treffen_-_DDR-Kult_im_braunen_Sumpf___MDR.DE.pdf`](./dokumente/hauptquellen/Zwickau__Rechtsextremismus_bei_Simson-Treffen_-_DDR-Kult_im_braunen_Sumpf___MDR.DE.pdf) | Zwickau Rechtsextremismus bei Simson-Treffen - DDR-Kult im braunen Sumpf MDR.DE |
| [`_Gegen_Europas_Werte___EU_leitet_Verbot_von_AfD-Parteienbündnis_ein___Kurier.pdf`](./dokumente/hauptquellen/_Gegen_Europas_Werte___EU_leitet_Verbot_von_AfD-Parteienb%C3%BCndnis_ein___Kurier.pdf) |  Gegen Europas Werte EU leitet Verbot von AfD-Parteienbündnis ein Kurier |
| [`_Nationalistische__Inhalte!_Polizisten_aus_Niedersachsen_im_Visier_-_news38.de.pdf`](./dokumente/hauptquellen/_Nationalistische__Inhalte%21_Polizisten_aus_Niedersachsen_im_Visier_-_news38.de.pdf) |  Nationalistische Inhalte! Polizisten aus Niedersachsen im Visier - news38.de |
| [`afd_verurteilte_oder_angeklagte_afd_mitglieder.pdf`](./dokumente/hauptquellen/afd_verurteilte_oder_angeklagte_afd_mitglieder.pdf) | afd verurteilte oder angeklagte afd mitglieder |
| [`correctiv-Recherche__Verurteilt_-_und_trotzdem_Mandatsträger___tagesschau.de.pdf`](./dokumente/hauptquellen/correctiv-Recherche__Verurteilt_-_und_trotzdem_Mandatstr%C3%A4ger___tagesschau.de.pdf) | correctiv-Recherche Verurteilt - und trotzdem Mandatsträger tagesschau.de |
| [`n-tv.de_politik_Remigration-Disziplin-Ausgangssperren-AfD-malt-ihr-Bild-von-Berlin-id30874985.html.pdf`](./dokumente/hauptquellen/n-tv.de_politik_Remigration-Disziplin-Ausgangssperren-AfD-malt-ihr-Bild-von-Berlin-id30874985.html.pdf) | n-tv.de politik Remigration-Disziplin-Ausgangssperren-AfD-malt-ihr-Bild-von-Berlin-id30874985.html |
| [`wd-3-245-16-pdf-data.pdf`](./dokumente/hauptquellen/wd-3-245-16-pdf-data.pdf) | wd-3-245-16-pdf-data |
| [`„Es_könnte_bald_soweit_sein“__Thüringer_AfD-Chef_Höcke_zählt_die_Justiz_an_-_und_einen_Staatsanwalt_in_Halle_persönlich.pdf`](./dokumente/hauptquellen/%E2%80%9EEs_k%C3%B6nnte_bald_soweit_sein%E2%80%9C__Th%C3%BCringer_AfD-Chef_H%C3%B6cke_z%C3%A4hlt_die_Justiz_an_-_und_einen_Staatsanwalt_in_Halle_pers%C3%B6nlich.pdf) | „Es könnte bald soweit sein“ Thüringer AfD-Chef Höcke zählt die Justiz an - und einen Staatsanwalt in Halle persönlich |
| [`„Ist_vom_Teufel_geschickt“__Die_AfD_legt_sich_mit_dem_Limburger_Bischof_an_und_entlarvt_sich_dabei_selbst.pdf`](./dokumente/hauptquellen/%E2%80%9EIst_vom_Teufel_geschickt%E2%80%9C__Die_AfD_legt_sich_mit_dem_Limburger_Bischof_an_und_entlarvt_sich_dabei_selbst.pdf) | „Ist vom Teufel geschickt“ Die AfD legt sich mit dem Limburger Bischof an und entlarvt sich dabei selbst |
| [`„Niemand_kommt_rein_und_Millionen_fliegen_raus“__AfD-Politiker_besuchen_internationalen_Gipfel_zu_Remigration.pdf`](./dokumente/hauptquellen/%E2%80%9ENiemand_kommt_rein_und_Millionen_fliegen_raus%E2%80%9C__AfD-Politiker_besuchen_internationalen_Gipfel_zu_Remigration.pdf) | „Niemand kommt rein und Millionen fliegen raus“ AfD-Politiker besuchen internationalen Gipfel zu Remigration |
| [`„Ohne_Russland_geht_nichts“__Wie_sich_AfD-Politiker_für_Moskaus_Interessen_stark_machen.pdf`](./dokumente/hauptquellen/%E2%80%9EOhne_Russland_geht_nichts%E2%80%9C__Wie_sich_AfD-Politiker_f%C3%BCr_Moskaus_Interessen_stark_machen.pdf) | „Ohne Russland geht nichts“ Wie sich AfD-Politiker für Moskaus Interessen stark machen |
| [`„Remigration“__AfD_sucht_Nähe_zu_Sellner_und_US-Hardliner_Bovino.pdf`](./dokumente/hauptquellen/%E2%80%9ERemigration%E2%80%9C__AfD_sucht_N%C3%A4he_zu_Sellner_und_US-Hardliner_Bovino.pdf) | „Remigration“ AfD sucht Nähe zu Sellner und US-Hardliner Bovino |

</details>

### F) Skripte & Tools (18)
- [`skripte/afd-verbot.de-scrape-dependencies.sh`](./skripte/afd-verbot.de-scrape-dependencies.sh)
- [`skripte/afd-verbot.de-scrape-beweise-zitate.py`](./skripte/afd-verbot.de-scrape-beweise-zitate.py)
- [`skripte/afd-verbot-linkliste.py`](./skripte/afd-verbot-linkliste.py)
- [`skripte/afd-verbot-print-proofs.py`](./skripte/afd-verbot-print-proofs.py)
- [`skripte/pdf-to-md.sh`](./skripte/pdf-to-md.sh)
- [`skripte/split_pdf.py`](./skripte/split_pdf.py)
- [`skripte/split10_pdf.py`](./skripte/split10_pdf.py)
- [`skripte/bulk_ocr_pdfs_to_md.py`](./skripte/bulk_ocr_pdfs_to_md.py)
- [`skripte/setup_all_ocr_deps.sh`](./skripte/setup_all_ocr_deps.sh)
- [`skripte/dependencies.sh`](./skripte/dependencies.sh)
- [`geheimgutachten/afd-verbot-deepresearch-ausgangspunkt_split_1.txt`](./geheimgutachten/afd-verbot-deepresearch-ausgangspunkt_split_1.txt)
- [`geheimgutachten/afd-verbot-deepresearch-ausgangspunkt_split_2.txt`](./geheimgutachten/afd-verbot-deepresearch-ausgangspunkt_split_2.txt)
- [`geheimgutachten/afd-verbot-deepresearch-ausgangspunkt_split_3.txt`](./geheimgutachten/afd-verbot-deepresearch-ausgangspunkt_split_3.txt)
- [`geheimgutachten/afd-verbot-deepresearch-ausgangspunkt_split_4.txt`](./geheimgutachten/afd-verbot-deepresearch-ausgangspunkt_split_4.txt)
- [`geheimgutachten/afd-verbot-deepresearch-ausgangspunkt_split_5.txt`](./geheimgutachten/afd-verbot-deepresearch-ausgangspunkt_split_5.txt)
- [`geheimgutachten/afd-verbot-deepresearch-ausgangspunkt_split_6.txt`](./geheimgutachten/afd-verbot-deepresearch-ausgangspunkt_split_6.txt)
- [`geheimgutachten/afd-verbot-deepresearch-ausgangspunkt_split_7.txt`](./geheimgutachten/afd-verbot-deepresearch-ausgangspunkt_split_7.txt)
- [`geheimgutachten/afd-verbot-deepresearch-ausgangspunkt_split_8.txt`](./geheimgutachten/afd-verbot-deepresearch-ausgangspunkt_split_8.txt)
### G) Bilder & Assets (2)
- [`afd-politiker-krah-mit-waffe.jpg`](./assets/afd-politiker-krah-mit-waffe.jpg)
- [`zusammenarbeit-afd-jugend-rechtsextreme.jpg`](./assets/zusammenarbeit-afd-jugend-rechtsextreme.jpg)

---

### H) Sonstiges / Notizen (66)
- [`PUBLIC_SOURCES.md`](./PUBLIC_SOURCES.md)
- [`leicht zugängliche Quellen.txt`](./skripte/leicht%20zug%C3%A4ngliche%20Quellen.txt)
- [`quellen.pdf`](./dokumente/hauptquellen/quellen.pdf)
- diverse Pressespiegel‑PDFs und Projektmemos (vollständig im Repo enthalten)

---
## Presse / Medienberichte (HTML)
- [`03_www.deutschlandfunk.de_afd-einstufung-verfassungsschutz-rechtsextrem-100.html.pdf`](./dokumente/hauptquellen/03_www.deutschlandfunk.de_afd-einstufung-verfassungsschutz-rechtsextrem-100.html.pdf) (Deutschlandfunk)
- [`04_www.zdfheute.de_politik_deutschland_afd-verfassungsschutz-gutachten-rechtsextremistisch-100.html.pdf`](./dokumente/hauptquellen/04_www.zdfheute.de_politik_deutschland_afd-verfassungsschutz-gutachten-rechtsextremistisch-100.html.pdf) (ZDFheute)
- [`05_www.dw.com_de_afd-einstufung-verfassungsschutz-rechtsextremismus-geheimdienst-verwaltungsgericht-k%C3%B6ln-nancy-faeser_a-72478906.pdf`](./dokumente/hauptquellen/05_www.dw.com_de_afd-einstufung-verfassungsschutz-rechtsextremismus-geheimdienst-verwaltungsgericht-k%C3%B6ln-nancy-faeser_a-72478906.pdf) (Deutsche Welle)
- [`Tagesschau_AfD_Systemmedien.txt`](./dokumente/hauptquellen/Tagesschau_AfD_Systemmedien.txt) (Tagesschau - Offline-Beleg)
- [`07_www.belltower.news_rassistische-narrative-nach-silvester-neues-jahr-alte-hetze-144885_.pdf`](./dokumente/hauptquellen/07_www.belltower.news_rassistische-narrative-nach-silvester-neues-jahr-alte-hetze-144885_.pdf) (Belltower.News)
- [`MDR_Investigativ_Chat_Leaks_Thueringen.txt`](./dokumente/hauptquellen/MDR_Investigativ_Chat_Leaks_Thueringen.txt) (MDR Investigativ - Chat Leaks)
- [`Reuters_Germany_Security_Agency_Extremist.txt`](./dokumente/hauptquellen/Reuters_Germany_Security_Agency_Extremist.txt) (Reuters - Domestic Agency Threat Report)
- [`The_Guardian_Germany_Security_Labels_AfD_Extremist.txt`](./dokumente/hauptquellen/The_Guardian_Germany_Security_Labels_AfD_Extremist.txt) (The Guardian - Germany Extremist Label)
- [`Spiegel_Politik_Roedder_Warnt_vor_Buergerkrieg.txt`](./dokumente/hauptquellen/Spiegel_Politik_Roedder_Warnt_vor_Buergerkrieg.txt) (Der Spiegel - Rödder Interview)

## Presse / Medienberichte (PDF)
- [`Deutschlandfunk_Streit_um_AfD_Einstufung.pdf`](./dokumente/hauptquellen/Deutschlandfunk_Streit_um_AfD_Einstufung.pdf)
- [`ZDFheute_Bericht_VS_Gutachten_AfD.pdf`](./dokumente/hauptquellen/ZDFheute_Bericht_VS_Gutachten_AfD.pdf)
- [`Deutschlandfunk_Streit_um_AfD_Einstufung_Original.pdf`](./dokumente/hauptquellen/Deutschlandfunk_Streit_um_AfD_Einstufung_Original.pdf)
- [`ZDFheute_Bericht_VS_Gutachten_AfD_Original.pdf`](./dokumente/hauptquellen/ZDFheute_Bericht_VS_Gutachten_AfD_Original.pdf)
- [`22_www.tagesschau.de_inland_innenpolitik_afd-rechtsextrem-verfassungsschutz-100.html.pdf`](./dokumente/hauptquellen/22_www.tagesschau.de_inland_innenpolitik_afd-rechtsextrem-verfassungsschutz-100.html.pdf)
- [`Urteile_gegen_Höcke_wegen_NS-Parole_rechtskräftig.pdf`](./dokumente/hauptquellen/Urteile_gegen_H%C3%B6cke_wegen_NS-Parole_rechtskr%C3%A4ftig.pdf)

## Presseberichte mit Amtsbezug
- [`Bundestag__Missbraucht_die_AfD_die_Kleinen_Anfragen__Eine_Datenanalyse_-_SZ.de.pdf`](./dokumente/hauptquellen/Bundestag__Missbraucht_die_AfD_die_Kleinen_Anfragen__Eine_Datenanalyse_-_SZ.de.pdf)
- [`Bundestagsverwaltung__Wahlplakat-Spende_an_AfD_war_unzulässig.pdf`](./dokumente/hauptquellen/Bundestagsverwaltung__Wahlplakat-Spende_an_AfD_war_unzul%C3%A4ssig.pdf)
- [`AfD-Spende__Bundestag_sieht_Tatverdacht_bestätigt.pdf`](./dokumente/hauptquellen/AfD-Spende__Bundestag_sieht_Tatverdacht_best%C3%A4tigt.pdf)
---

## 2) Navigations‑Blöcke (für die README)

### 📁 Schnellzugriff auf Kerndossiers
- **Klageschrift** → `ENTWURF KLAGESCHRIFT*.pdf`  
- **BfV/BMI/Bundestag** → Abschnitt **C) Amtliche Quellen**  
- **Geheimgutachten (OCR)** → Abschnitt **D)**  
- **Belege (afd‑verbot.de)** → Ordner `zitate/` + [`afd-verbot.de-scrape-link-liste.txt`](./skripte/afd-verbot.de-scrape-link-liste.txt)  
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
- ChatGPT_-_Analyse-Beispiel.pdf
- ChatGPT_-_Analyse-Beispiel-2.pdf
- ChatGPT_-_Analyse-Beispiel-3.pdf
- ChatGPT_-_Analyse-Beispiel-4.pdf
- ChatGPT_-_Warum_die_Alternative_für_Deutschland.pdf
- ChatGPT_-_Begründung_für_ein_entschiedenes_Handeln.pdf
- ChatGPT_-_BRANDBRIEF.pdf

### 2. Externe Gutachten & Stellungnahmen
- Claude_-_Warum_ein_AfD-Verbot_verfassungsrechtlich_geboten_und_demokratiepolitisch_überfällig_ist.pdf
- Untersuchung-BfV-Gutachten-und-AfD-Parteiverbot.pdf
- AfD-Verbot__Alle_Anträge,_Abstimmungen_und_Gutachten.pdf
- Mögliches_AfD-Verbot__Gutachten_liefert_neue_Argumente.pdf

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
   git clone [https://github.com/ERROR-WATCH/AfD-Verbotsverfahren-Grundlagenforschung.git](https://github.com/ERROR-WATCH/AfD-Verbotsverfahren-Grundlagenforschung.git)
   cd AfD-Verbotsverfahren-Grundlagenforschung
   ```

2. **Recherche & Konsolidierung**
   - Suche in den `.txt`-Fragmenten nach spezifischen Begriffen (z. B. "paramilitär", "Verschwörung").
   - Vergleiche die Entwurfsklauseln in den PDFs für Sachverhalts- und Rechtsbegründungskapitel.

3. **Nutze Deep Research (z. B. mit ChatGPT, Gemini oder Claude), um die Quellen systematisch zu prüfen:**
   
   Da dieses Repository für die maschinelle Verarbeitung optimiert ist, kannst du modernste Sprachmodelle (LLMs) nutzen, um Quellenverzeichnisse abzugleichen, Belege zu verifizieren oder juristische Argumentationsketten aufzubauen.
   
   **Schritt-für-Schritt-Anleitung zur KI-gestützten Analyse:**
   * **Dokument hochladen:** Lade ein Belegdokument (z. B. einen Klageschrift-Entwurf oder eines der Geheimgutachten-Slices) in dein bevorzugtes LLM (ChatGPT Plus, Gemini Advanced oder Claude Pro) hoch.
   * **Prompts zur Quellenprüfung nutzen:** Verwende strukturierte, präzise Prompts wie:
     > *"Analysiere das hochgeladene Gutachten. Prüfe alle genannten Zitate im Hinblick auf ihre logische Konsistenz, vergleiche sie mit den Primärbelegen in den Textdateien dieses Repositories und erstelle eine Liste aller genutzten Fußnoten mit Seitenzahlen."*
   * **Abgleich mit dem Original:** Nutze die extrahierten Zitate und vergleiche sie direkt mit den entsprechenden Seiten der Original-PDFs im Ordner `geheimgutachten/` oder den Quellverzeichnissen in `PUBLIC_SOURCES.md`, um die absolute Korrektheit (Provenienz) sicherzustellen.
   * **Argumentation erweitern:** Lass die KI auf Basis der Belege neue verfassungsrechtliche Teilkapitel oder Klagepunkte (z. B. bezüglich des Demokratieprinzips oder der Menschenwürde) entwerfen.

   Beispiele:
```
   [https://github.com/ERROR-WATCH/AfD-Verbotsverfahren-Grundlagenforschung/blob/main/ChatGPT_-_Analyse-Beispiel.pdf](https://github.com/ERROR-WATCH/AfD-Verbotsverfahren-Grundlagenforschung/blob/main/ChatGPT_-_Analyse-Beispiel.pdf)
   [https://github.com/ERROR-WATCH/AfD-Verbotsverfahren-Grundlagenforschung/blob/main/ChatGPT_-_Analyse-Beispiel-2.pdf](https://github.com/ERROR-WATCH/AfD-Verbotsverfahren-Grundlagenforschung/blob/main/ChatGPT_-_Analyse-Beispiel-2.pdf)
   [https://github.com/ERROR-WATCH/AfD-Verbotsverfahren-Grundlagenforschung/blob/main/ChatGPT_-_Analyse-Beispiel-3.pdf](https://github.com/ERROR-WATCH/AfD-Verbotsverfahren-Grundlagenforschung/blob/main/ChatGPT_-_Analyse-Beispiel-3.pdf)
   [https://github.com/ERROR-WATCH/AfD-Verbotsverfahren-Grundlagenforschung/blob/main/ChatGPT_-_Analyse-Beispiel-4.pdf](https://github.com/ERROR-WATCH/AfD-Verbotsverfahren-Grundlagenforschung/blob/main/ChatGPT_-_Analyse-Beispiel-4.pdf)
````
   Beispiel 2:
```
   [https://github.com/ERROR-WATCH/AfD-Verbotsverfahren-Grundlagenforschung/blob/main/ChatGPT_-_Warum_die_Alternative_f%C3%BCr_Deutschland.pdf](https://github.com/ERROR-WATCH/AfD-Verbotsverfahren-Grundlagenforschung/blob/main/ChatGPT_-_Warum_die_Alternative_f%C3%BCr_Deutschland.pdf)
````
   Beispiel 3:
```   
   [https://github.com/ERROR-WATCH/AfD-Verbotsverfahren-Grundlagenforschung/blob/main/Zitate_Analyse_Hausarbeit.pdf](https://github.com/ERROR-WATCH/AfD-Verbotsverfahren-Grundlagenforschung/blob/main/Zitate_Analyse_Hausarbeit.pdf)
````
   Beispiel 4:
```
   [https://github.com/ERROR-WATCH/AfD-Verbotsverfahren-Grundlagenforschung/blob/main/Warum_die_AfD_eine_Gefahr_f%C3%BCr_die_Demokratie_ist.pdf](https://github.com/ERROR-WATCH/AfD-Verbotsverfahren-Grundlagenforschung/blob/main/Warum_die_AfD_eine_Gefahr_f%C3%BCr_die_Demokratie_ist.pdf)
````
   Beispiel 5:
```
   [https://github.com/ERROR-WATCH/AfD-Verbotsverfahren-Grundlagenforschung/blob/main/Warum_die_Normalisierung_der_AfD_eine_Gefahr_f%C3%BCr_die_Demokratie_darstellt.pdf](https://github.com/ERROR-WATCH/AfD-Verbotsverfahren-Grundlagenforschung/blob/main/Warum_die_Normalisierung_der_AfD_eine_Gefahr_f%C3%BCr_die_Demokratie_darstellt.pdf)
````
   Beispiel 6:
```
   [https://github.com/ERROR-WATCH/AfD-Verbotsverfahren-Grundlagenforschung/blob/main/Claude_-_Warum_ein_AfD-Verbot_verfassungsrechtlich_geboten_und_demokratiepolitisch_%C3%BCberf%C3%A4llig_ist.pdf](https://github.com/ERROR-WATCH/AfD-Verbotsverfahren-Grundlagenforschung/blob/main/Claude_-_Warum_ein_AfD-Verbot_verfassungsrechtlich_geboten_und_demokratiepolitisch_%C3%BCberf%C3%A4llig_ist.pdf)
````
   Beispiel 7:
```
   [https://github.com/ERROR-WATCH/AfD-Verbotsverfahren-Grundlagenforschung/blob/main/ChatGPT%20-%20Szenarioanalyse_%20AfD-Wahlsieg%202025%20und%20Regierungs%C3%BCbernahme%20(2025%E2%80%932029](https://github.com/ERROR-WATCH/AfD-Verbotsverfahren-Grundlagenforschung/blob/main/ChatGPT%20-%20Szenarioanalyse_%20AfD-Wahlsieg%202025%20und%20Regierungs%C3%BCbernahme%20(2025%E2%80%932029)).pdf
````

5. Wenn wirklich ein Verbotsverfahren anfangen sollte und Sie Staatsanwalt sind, finden sie Möglichkeiten, die noch nicht zugänglichen Quellen in [`quellen.pdf`](./dokumente/hauptquellen/quellen.pdf) , dem Gericht zugänglich zu machen

   
---
## KI-gestützte Analyse und Automatisierung

Dieses Repository ist bewusst so aufgebaut, dass es sowohl Jurist:innen als auch Data-Science-Teams effizient unterstützt. Die wichtigsten KI-relevanten Features auf einen Blick:

1. **Durchsuchbare Rohtexte**  
   Die VS-Geheimgutachten liegen als plain-text-Fragmente (*.txt*) vor. Dadurch entfällt aufwändiges OCR- und PDF-Parsing, und KI-Modelle können direkt Named-Entity-Recognition, semantische Suche oder Topic-Modeling auf den Dokumenten ausführen.

2. **Template-basierte Entwurfs-PDFs**  
   Die Klageschrift-Entwürfe (*.pdf*) sind in klar strukturierten Abschnitten (A–D) gegliedert und enthalten Platzhalter für Fußnoten und Seitennachweise. Mit gezielten Prompts lassen sich mit Legal-LMs automatisch alle Quellenangaben vervollständigen und Prüffragen validieren.

3. **Maschinenlesbare Linklisten**  
   Dateien wie `PUBLIC_SOURCES.md` und [`leicht zugängliche Quellen.txt`](./skripte/leicht%20zug%C3%A4ngliche%20Quellen.txt) liefern strukturierte Metadaten und URLs. Sie können direkt in Crawler-Skripte oder ETL-Pipelines eingespeist werden, um neue Verfassungsschutzberichte, Bundestagsdokumente oder Gerichtsurteile fortlaufend zu überwachen und zu archivieren.

4. **Graph- und Relationsextraktion**  
   Die Zuordnung von juristischen Argumenten zu Quellen im [`quellen.pdf`](./dokumente/hauptquellen/quellen.pdf) ermöglicht es, automatisch einen Fakten-Graphen zu generieren (z. B. mit Neo4j), in dem Knoten (Argumente) und Kanten (Belege) visualisiert und Lücken identifiziert werden können.

5. **Nahtlose Integration in ML-Workflows**  
   Standardisierte Dateinamen und Ordnerstrukturen machen es einfach, die Daten in Jupyter-Notebooks, Colab-Environments oder Produktionspipelines einzubinden. So lassen sich schnell Trainingsdatensätze für Legal-LMs erstellen, Feeds für Dokumenten-Updates konfigurieren und Automatisierungen implementieren.

Dank dieser durchdachten Basis können sowohl rechtliche als auch technische Expert:innen ihre jeweiligen Teilaufgaben – von der juristischen Quellensuche bis zum maschinellen Text-Clustering – parallel und effizient abarbeiten.

---

# AfD-Verbot.de Beweise Scraper

Ein Satz Scripte und Hilfsdateien, um die **gesamte Beweise‑Übersicht** von [afd‑verbot.de/beweise](https://afd-verbot.de/beweise) zu laden, alle Detail‑Links zu extrahieren und jeden einzelnen Beweis als datierte PDF zu speichern.

---

## 📁 Projektstruktur

```
├── skripte/
│   ├── afd-verbot.de-scrape-dependencies.sh   # Installations‑ und Setup‑Script
│   ├── afd-verbot.de-scrape-beweise-zitate.py # Haupt‑Script: langsames Scrollen + Link‑Export + PDF‑Erzeugung
│   └── afd-verbot.de-scrape-link-liste.txt    # Automatisch generierte Liste aller Beweis‑URLs
├── afd-verbot.de-<DATUM>-proof-00001.pdf      # Beispiel‑PDF; tatsächlich: proof-00001.pdf … proof-03611.pdf
└── README.md                                  # Diese Anleitung
```

---

## 🚀 Anforderungen & Installation

1. **System‑Abhängigkeiten** (unter Debian/Kali/Ubuntu):
   ```bash
   sudo apt update
   sudo apt install -y python3-venv python3-pip chromium chromium-driver
   ```
---
2. **Virtuelle Umgebung & Python‑Pakete**:

   ```bash
   chmod +x skripte/afd-verbot.de-scrape-dependencies.sh
   ./skripte/afd-verbot.de-scrape-dependencies.sh
   source venv/bin/activate
   ```

   Damit wird ein `venv` angelegt, aktiviert und alle benötigten Python‑Module (`selenium`, `fpdf`, `requests`, `beautifulsoup4`) installiert.

---

## ⚙️ Nutzung

1. **Linkliste und PDFs erzeugen**

   ```bash
   source venv/bin/activate
   python3 skripte/afd-verbot.de-scrape-beweise-zitate.py
   ```

   * Das Script scrollt extrem langsam (100 px / 0,5 s) über alle **367** Scroll‑Seiten,
   * sammelt jede neue `Zum Beweis`‑URL direkt in `skripte/afd-verbot.de-scrape-link-liste.txt`,
   * und druckt jede Detail‑Seite als PDF (`afd-verbot.de-<YYYY-MM-DD>-proof-xxxxx.pdf`) in `./mnt/d/afd_proofs/`.
---
2. **Ergebnis prüfen**

   * **Linkliste**: `skripte/afd-verbot.de-scrape-link-liste.txt` enthält alle \~3 611 URLs.
   * **PDF‑Ordner**: Enthält 3.611 datierte PDFs, durchnummeriert von `proof-00001.pdf` bis `proof-03611.pdf`.

---

## 🤔 Warum so langsam?

* **Infinite Scroll‑Mechanik** auf der Seite erfordert ganz kleine Schritte, damit das JavaScript nachladen kann.
* Zu schnelles Scrollen würde die letzten Seiten gar nicht erst nachladen – wir brauchen solide 0,5 s Pause pro 100 px.

> „Geduld ist eine Tugend – und hier ausnahmsweise unverzichtbar.“
---
Sollte die Scroll-Mechanik trotz allem haken oder einem zu langsam sein, kann man auch die alternativen Scripte benutzen:
```
skripte/afd-verbot-linkliste.py
skripte/afd-verbot-print-proofs.py
```
Ersteres lässt einen selber scrollen und erstellt die liste erst wenn man zu ende gescrollt hat.
Zweites macht aus der Liste PDF's.

---
## PDF zu MD Dateien

Mit folgendem Script wurden die Zitate von afd-verbot.de/beweise von einer PDF zu MD-Datei gemacht.

```
skripte/pdf-to-md.sh
```

Für das Geheimgutachten haben wir aber OCR und TESERACT benutzt, da Bilder mit Poppler nicht ordentlich erfasst werden und das Geheimgutachten nur in eingescannter Form vorlag.

Für PDF zu MD mit Bildern innerhalb der PDF nutzten wir:

```
skripte/split10_pdf.py
skripte/split_pdf.py
skripte/bulk_ocr_pdfs_to_md.py
skripte/setup_all_ocr_deps.sh
skripte/dependencies.sh
```
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
```
und dann
```
chmod +x skripte/pdf-to-md.sh
./skripte/pdf-to-md.sh
```
---
In allen ausführbaren Dateien - Input-Ordner und Output-Ordner/Zieldatei-Namen - gegenfalls editieren

---
## 📚 Zugriff auf Dokumente und Ressourcen

Dieses Repository enthält eine umfassende Sammlung an Quellen und Vorarbeiten zum Verbotsverfahren gegen die AfD. Um alle Materialien zu nutzen, gehen Sie bitte wie folgt vor:

### 1. Öffentlich zugängliche Dokumente  
In der Datei [`leicht zugängliche Quellen.txt`](./skripte/leicht%20zug%C3%A4ngliche%20Quellen.txt) sind alle frei abrufbaren PDF-Links und Webseiten gelistet:

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

[`untersuchung-bfv-gutachten-und-afd-parteiverbot.pdf`](./dokumente/hauptquellen/untersuchung-bfv-gutachten-und-afd-parteiverbot.pdf)

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

**Datei:** [`AfD_Bundestagswahlprogramm2025_web.pdf`](./dokumente/hauptquellen/AfD_Bundestagswahlprogramm2025_web.pdf)  
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

[![YouTube Video: Einführung](https://img.youtube.com/vi/Pb21x8gALRg/maxresdefault.jpg)](https://www.youtube.com/watch?v=Pb21x8gALRg)

---
## Neustes Gutachten

[https://afd-gutachten.de](https://afd-gutachten.de)

## Afd-Zitate

[https://afd-verbot.de](https://afd-verbot.de)

## Politische Schönheit

[![YouTube Playlist](https://img.youtube.com/vi/1dHYrVZbhX0/maxresdefault.jpg)](https://www.youtube.com/watch?v=1dHYrVZbhX0&list=PLndxauj5Nk-o1p1LVTVDgzANSFMGvhe6F)

## Was AfD-Aussteiger erzählen

[![YouTube](https://img.youtube.com/vi/RoyfB-3NpsQ/maxresdefault.jpg)](https://www.youtube.com/watch?v=RoyfB-3NpsQ)

## Ende des Repos

<img width="916" height="988" alt="Claus von Wagner" src="https://github.com/user-attachments/assets/21df85d6-0331-424e-b268-c5939d7d702f" />

---
## Mitwirkung

Beiträge sind willkommen! Bitte Issues eröffnen oder Pull Requests einreichen, wenn:
- Du inhaltliche Ergänzungen zu den 15 Verbotsgründen hast.
- Du fehlerhafte Zitate oder Inkonsistenzen in den Fragmente-Dateien findest.
- Du Vorschläge zur Struktur oder zum Aufbau der Klageschrift hast.

Wer mir Hinweise, Artikel oder Beweise schicken will kann das hier:
[https://fileinbox.com/afd-verbot-sammelbox](https://fileinbox.com/afd-verbot-sammelbox)

Bevorzugt werden PDF-, MD-, und TXT-Dateien.
Einfach Artikel oder Quelle als PDF drucken und Uploaden.

---

zusätzlich empfehle ich:
[https://github.com/ERROR-WATCH/TODESSTATISTIKEN](https://github.com/ERROR-WATCH/TODESSTATISTIKEN)