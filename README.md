# AfD-Verbotsverfahren-Grundlagenforschung

Dieses Repository sammelt die zentralen Dokumente, Textfragmente und Forschungsergebnisse zur Vorbereitung einer Klageschrift gegen die Partei „Alternative für Deutschland“ (AfD) beim Bundesverfassungsgericht.

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
## Nutzung

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

   https://github.com/ERROR-WATCH/AfD-Verbotsverfahren-Grundlagenforschung/blob/main/ChatGPT%20-%20Analyse-Beispiel.pdf
   https://github.com/ERROR-WATCH/AfD-Verbotsverfahren-Grundlagenforschung/blob/main/ChatGPT%20-%20Analyse-Beispiel-2.pdf
   https://github.com/ERROR-WATCH/AfD-Verbotsverfahren-Grundlagenforschung/blob/main/ChatGPT%20-%20Analyse-Beispiel-3.pdf
   https://github.com/ERROR-WATCH/AfD-Verbotsverfahren-Grundlagenforschung/blob/main/ChatGPT%20-%20Analyse-Beispiel-4.pdf
   https://github.com/ERROR-WATCH/AfD-Verbotsverfahren-Grundlagenforschung/blob/main/ChatGPT%20-%20Warum%20die%20Alternative%20f%C3%BCr%20Deutschland.pdf
   https://github.com/ERROR-WATCH/AfD-Verbotsverfahren-Grundlagenforschung/blob/main/Zitate%20Analyse%20Hausarbeit.pdf


5. Wenn wirklich ein Verbotsverfahren anfangen sollte und Sie Staatsanwalt sind, finden sie Möglichkeiten, die noch nicht zugänglichen Quellen in quellen.pdf, dem Gericht zugänglich zu machen

   
## Mitwirkung

Beiträge sind willkommen! Bitte Issues eröffnen oder Pull Requests einreichen, wenn:
- Du inhaltliche Ergänzungen zu den 15 Verbotsgründen hast.
- Du fehlerhafte Zitate oder Inkonsistenzen in den Fragmente-Dateien findest.
- Du Vorschläge zur Struktur oder zum Aufbau der Klageschrift hast.

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
├── afd-verbot.de-<DATUM>-proof-00001.pdf  # Beispiel‑PDF; tatsächlich: proof-00001.pdf … proof-03663.pdf
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

   * **Linkliste**: `afd-verbot.de-scrape-link-liste.txt` enthält alle \~3 663 URLs.
   * **PDF‑Ordner**: Enthält 3 663 datierte PDFs, durchnummeriert von `proof-00001.pdf` bis `proof-03663.pdf`.

---

## 🤔 Warum so langsam?

* **Infinite Scroll‑Mechanik** auf der Seite erfordert ganz kleine Schritte, damit das JavaScript nachladen kann.
* Zu schnelles Scrollen würde die letzten Seiten gar nicht erst nachladen – wir brauchen solide 0,5 s Pause pro 100 px.

> „Geduld ist eine Tugend – und hier ausnahmsweise unverzichtbar.“ 

---
## PDF zu MD Dateien
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
Ich habe mal das Leak für eine KI aufbereitet. Der Verfassungsschutzbericht ist ja nur nach alter Antifa-Manier, Antifa ist Handarbeit, nur eingescannt worden. Das bereitet KI dadurch Probleme es zu in Gänze zu lesen. Deshalb habe ich ein Python-Script mit Tesseract und OCR drüber laufen lassen und die Bilder als Text-Form gespeichert. Die Textform hat trotz spezieller Tricks zur besseren Verarbeitung kleine Typo-Fehler. Aber mit den originalen PDF (in gesplitteter Form - wegen der Ausgabenbegrenzung von KI) kann die KI den Inhalt zu 96% erfassen. Da ein Verbotsverfahren realistisch bis zu 3 Jahren dauert, können Anwaltskanzleien, oder Interessierte nun KI's damit füttern. Ich habe gleich mal einen Anfang einer Klageschrift, mögliche noch unter Verschluss liegende Quellen die nötig sind, eine Presseschau und Gründe für ein Verbot beigefügt. Da das Ganze bis zu 3 Jahren dauern würde und dann die nächsten Bundestagswahlen sind, und vorraussichtlich die AfD dann sehr viele Stimmen bekommt, sollte man JETZT damit anfangen. Auch wenn gerade der Mantel des Schweigens drüber gelegt ist und Dobrindt mit seiner Konservativen Revolution (man googel mal den Ursprung dieses Begriffes auf Wikipedia) alles andere als aktiv wird, sollte man eigentlich nun (auch wenn der Leak aus ner blöden Ecke kommt) eigentlich dieses Thema vorranbringen. Denn wenn die Afd erstmal an der Macht ist, bleibt wahrscheinlich nicht mehr viel, um deren Faschismus noch zu stoppen.

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


https://afd-verbot.de
