# 03 | Leitfaden zur Datenaufbereitung (Data Processing)

## 1. Herausforderung: Unstrukturierte Daten und schlechte Scans

Viele verfassungsrechtlich relevante Belege – insbesondere ältere Verfassungsschutzberichte, geleakte Protokolle oder interne Parteidokumente – liegen ausschließlich als eingescannte Bild-PDFs vor. Diese sind für Computer blind: Sie enthalten keinen maschinenlesbaren Text, können nicht indexiert und nicht von künstlichen Intelligenzen (LLMs) verarbeitet werden.

Dieses Dokument beschreibt die standardisierten Workflows des Repositories zur **Strukturierung, OCR-Verarbeitung, Splitting und Formatsymmetrie** unstrukturierter Quelldateien.

---

## 2. Der OCR-Workflow (Optical Character Recognition)

Um Scans in hochpräzise Textdateien zu transformieren, nutzen wir einen automatisierten Python-OCR-Stack basierend auf **Tesseract OCR** und **PyPDF2/pdfplumber**:

```
┌────────────────────────┐      ┌────────────────────────┐      ┌────────────────────────┐      ┌────────────────────────┐
│    1. PDF-PREPROCESSING │ ───> │     2. TEXT-EXTRAKTION │ ───> │    3. BEINIGUNG        │ ───> │    4. FORMAT-KONVERTIE- │
│  Binarisierung, Schär-  │      │ Tesseract transkribiert│      │ Korrektur von Umlauten│      │  RUNG (TXT & MD)       │
│  fung, Kontrasterhöhung│      │   jede einzelne Seite  │      │ und Zeilenumbrüchen   │      │ Symmetrische Ablage    │
└────────────────────────┘      └────────────────────────┘      └────────────────────────┘      └────────────────────────┘
```

### Best Practices für die Textextraktion:
- **Sprachpakete laden:** Für deutsche Belege muss Tesseract zwingend mit dem deutschen Sprachpaket (`-l deu`) sowie dem Fraktur-Sprachpaket (`-l deu_frak` bei historischen Dokumenten) ausgeführt werden, um Umlaute und Sonderzeichen fehlerfrei zu erkennen.
- **Binarisierung:** Vor der Texterkennung werden Bildseiten in Schwarz-Weiß (Binarisierung) konvertiert und Rauschen entfernt. Dies senkt die Fehlerrate der Texterkennung um bis zu 95 %.

---

## 3. PDF-Splitting für RAG-Systeme (Retrieval-Augmented Generation)

Hundert- oder tausendseitige Dokumente (wie das *BfV-Folgegutachten 2021* mit über 1.000 Seiten) überfordern den Kontext-Arbeitsspeicher herkömmlicher LLMs und führen bei Suchen zu "In-the-Middle"-Verlusten (Informationen in der Mitte des Textes werden ignoriert).

**Lösung: Programmatisches PDF-Splitting**
*   Das Dokument wird in thematisch zusammenhängende Kapitel oder feste Seitengrößen (z. B. 100-Seiten-Blöcke) zerlegt.
*   Die Splits werden unter `dokumente/splits/` systematisch abgelegt (z. B. `BfV-AfD-Folgegutachten_2021_06_F_I_Menschenwuerde.pdf`).
*   Jeder Split erhält ein exakt deckungsgleiches `.txt`- und `.md`-Pendant für die blitzschnelle RAG-Indexierung.

---

## 4. Die Einhaltung der Formatsymmetrie

Das Repository erzwingt eine **strikte Formatsymmetrie** für alle Textquellen:
*   **Regel:** Jedes Gerichtsurteil, jeder Bericht und jeder Textbeleg muss im Repository **sowohl als `.txt`-Datei als auch als `.md`-Datei** im selben Verzeichnis vorliegen.
*   **Der Grund:**
    - `.txt`-Dateien dienen als unstrukturierter Rohdatenstrom für einfache Scraper, Grep-Suchen und klassische Datenbank-Suchen.
    - `.md`-Dateien nutzen standardisiertes Markdown zur logischen Strukturierung (Überschriften, Fettungen, Zitate, Aktenzeichen-Badges) und ermöglichen dem interaktiven Web-Dashboard, die Dokumente mittels Triebwerken wie **Marked.js** in Echtzeit formatiert und visuell ansprechend im Browser zu rendern.

---

## 5. Das Aktenzeichen-Parsing und Metadaten-Mapping

Ein entscheidender Schritt der Datenaufbereitung ist das Extrahieren strukturierter Metadaten. Jedes der 239 Gerichtsverfahren parst im Hintergrund sein Aktenzeichen über reguläre Ausdrücke (Regex) und speichert diese als standardisiertes JSON:

```json
{
  "id": "01",
  "name": "Björn Höcke - Verwendung einer SA-Parole",
  "aktenzeichen": "5 Ks 132/23",
  "gericht": "LG Halle",
  "datum": "2024-05-14",
  "delikt": "§ 86a StGB (Verwendung von Kennzeichen verfassungswidriger Organisationen)",
  "urteil": "Geldstrafe (100 Tagessätze zu je 130 Euro)",
  "kategorie": "Rechtsextreme Symbole & Parolen",
  "status": "DIREKT AfD",
  "quelle": "./dokumente/hauptquellen/urteilsbelege/01_Hoecke_SA_Parole_LG_Halle.md"
}
```

Diese JSON-Metadaten speisen die dynamischen Dropdown-Filter und den Suchverstärker im Dashboard und machen die Datenmenge für externe Suchmaschinen vollkommen transparent.

---
*Nächstes Dokument: `04_Datenanalyse_Anleitung.md` – Semantic Search und RAG-Pipelines.*
