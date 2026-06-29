# 02 | Leitfaden für KI-gestütztes Deep Research

## 1. Was ist Deep Research im verfassungsrechtlichen Kontext?

Deep Research bezeichnet einen strukturierten, mehrstufigen KI-Suchprozess, bei dem ein autonomer Agent das Web (oder lokale Datenarchive) durchforstet, um:
1. Relevante Primärquellen (Gerichtsentscheidungen, Sitzungsprotokolle, offizielle Statistiken) zu identifizieren.
2. Querverbindungen und versteckte Muster aufzudecken (z. B. finanzielle Verflechtungen oder informelle Allianzen zwischen AfD-Kandaten und gewaltbereiten Netzwerken).
3. Belege auf Faktentreue zu auditieren und Fehlinformationen herauszufiltern.

---

## 2. Der vierstufige Such- und Validierungs-Workflow

Ein erfolgreicher Deep-Research-Lauf erfolgt stets in vier aufeinander aufbauenden Phasen:

```
┌────────────────────────┐      ┌────────────────────────┐      ┌────────────────────────┐      ┌────────────────────────┐
│   1. FORMULIERUNG      │ ───> │     2. DISCOVERY       │ ───> │     3. EXTRAKTION      │ ───> │    4. VERIFIKATION     │
│  Präzise Suchbegriffe  │      │  Sondierung des Webs & │      │ Einlesen & Strukturieren │      │  Kreuzvergleich mit    │
│  & Aktenzeichen-Suche  │      │   Belegdatenbanken     │      │   der Primärquellen      │      │ amtlichen Dokumenten   │
└────────────────────────┘      └────────────────────────┘      └────────────────────────┘      └────────────────────────┘
```

### Phase 1: Die präzise Such-Formulierung (Query Formulation)
Die KI nutzt fortgeschrittene Such-Operatoren, um Rauschen zu reduzieren.
*   *Schwach:* „AfD Urteil Geldstrafe“
*   *Stark:* `site:openjur.de "Björn Höcke" "SA-Parole" "5 Ks 132/23" "LG Halle" 2024`

### Phase 2: Die explorative Entdeckung (Discovery)
Der Agent sucht parallel in Justizportalen (z. B. Justiz.nrw.de, OpenJur.de, Fallrecht.de) und zieht verifizierte Journalistennetzwerke (wie Correctiv oder netzpolitik.org) heran, um versteckte Primärquellen ausfindig zu machen.

### Phase 3: Die unzensierte Extraktion (Extraction)
Ist ein Dokument gefunden, extrahiert die KI den eigentlichen Tatbestand sowie die Entscheidungsgründe. Textscans werden per OCR (Optical Character Recognition) transkribiert und als formatsymmetrische Markdown- (`.md`) und Reintext- (`.txt`) Dateien gespeichert, um eine maschinelle Weiterverarbeitung zu garantieren.

### Phase 4: Die strenge Verifikation (Cross-Checking)
Jeder extrahierte Treffer wird einem Quervergleich unterzogen:
- Entspricht das Aktenzeichen dem offiziellen Schema deutscher Gerichte?
- Stimmt das Datum mit der tatsächlichen Berichterstattung überein?
- Decken sich die zitierten Gesetzesparagraphen mit der im Literaturverzeichnis verlinkten Rechtslage?

---

## 3. Identifikation und Klassifizierung von Primärquellen

In einem Parteiverbotsverfahren besitzen Beweismittel unterschiedliche Hierarchiestufen. Ein KI-Agent muss lernen, diese strikt zu gewichten:

1.  **Gold-Standard (Absolute Beweiskraft):** Rechtskräftige Strafurteile gegen Kadermitglieder (Typologie A/B) sowie rechtskräftige verwaltungsgerichtliche Bestätigungen behördlicher Einstufungen (z. B. OVG Münster, Fall 22).
2.  **Silber-Standard (Hohe Beweiskraft):** Berichte und offizielle Verfassungsschutzberichte des Bundes und der 16 Bundesländer, statistische BKA-Meldungen zur Hasskriminalität (Hass-PMK) sowie offizielle Bundestagsdrucksachen.
3.  **Bronze-Standard (Indizien):** Investigative Journalismus-Recherchen (Correctiv-Remigrations-Leak, netzpolitik.org-Veröffentlichungen). Sie dienen als hervorragende Wegweiser zur Beschaffung der dahinterliegenden Primärdokumente.

---

## 4. Erkennung und Eliminierung von Fehlinformationen

Bei der Durchführung von Deep-Research-Läufen besteht die Gefahr, auf gefälschte Berichte, irreführende Zitate (Fakes) oder überspitzte Aktivisten-Meldungen zu stoßen.
*   **Der Fact-Checking-Check:** Jedes Zitat muss im Kontext geprüft werden. Das Repository enthält 3.611 verifizierte Zitate – jedes Zitat wurde programmgesteuert auf seine Originalquelle (z. B. Videoaufnahme der Plenarsitzung oder schriftliche Landtagsanfrage) zurückgeführt.
*   **Das Gegenbeleg-Prinzip:** Bevor eine Anschuldigung als Fakt erhoben wird, sucht die KI aktiv nach Entlastungsbeweisen oder Stellungnahmen der Betroffenen. Nur wenn diese entkräftet sind, fließen sie in das Belegregister ein.

---
*Nächstes Dokument: `03_Datenaufbereitung_Anleitung.md` – OCR, PDF-Splitting und Text-Symmetrie.*
