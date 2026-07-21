CHANGELOG, TRANSPARENZ & WISSENSCHAFTLICHE METHODIK

1. Changelog des Forschungsportals (Versionshistorie)

Dieses Kapitel dient der lückenlosen, wissenschaftlichen Dokumentation aller Datenaktualisierungen, Systemerweiterungen und Quellenbereinigungen.

* Version 3.0.0 (Letzte Aktualisierung: 29.06.2026) – Aktueller Stand
  - Erweiterung des Gerichtsregisters (frueherer Zwischenstand -> 239): Die Belegdatenbank wurde von 80 auf 239 verifizierte Gerichtsurteile, Beschlüsse und behördliche Entscheidungen erweitert. Dieser damalige Zwischenstand wurde später erweitert; aktueller Portal-/Repo-Stand: mindestens 313 Fälle.
  - 100%iges Landes-PDF-Archiv (16/16): Alle 16 Landeswahlprogramme der AfD sowie die beiden Bundesbelege (Bundestagswahlprogramm 2025 und Grundsatzprogramm) liegen nun als originale, unmanipulierte Primärbeleg-PDFs physisch im Verzeichnis /landeswahlprogramme/ vor.
  - Der neue Tab „Parteiprogramme AfD“: Integration eines dedizierten 10. Navigations-Tabs mit einem visuellen, farblich codierten Card-Grid für alle 16 Bundesländer zur sofortigen, ausfallfreien Einsicht der Landesprogrammatiken.
  - In-Memory-Zitate-Suchindex: Einbindung einer volltextdurchsuchbaren Quotes-Datenbank (zitate_search_index.json direkt in index.html eingebettet), die eine CORS-freie, rasend schnelle Echtzeitsuche nach Namen, Zitaten und Quellen für alle 3.722 Belegzitate ermöglicht.
  - Sichtbare Aktenzeichen-Badges & Suchverstärker: Monospace-Darstellung von Aktenzeichen auf allen 239 Kacheln sowie programmgesteuerte Begriffskombination bei Google für eine präzise Online-Quellenfindung.
  - Wissenschaftliche Begleitdokumente: Veröffentlichung des Beleg-Audits (PDF_AUDIT_REPORT.md) sowie der tagesaktuellen Presseschau vom 29. Juni 2026 (PRESSESCHAU_AKTUELL.md).

* Version 2.0.0 (Stand: Mai 2025)
  - Pristine „Gutachten & Leaks“ Tab: Bereinigung des wissenschaftlichen Reiters von Presseartikeln und Bündelung von 159 lupenreinen amtlichen und verfassungsrechtlichen Fachgutachten (GFF, BfV etc.).
  - Marked.js Integration: Umstieg von statischem Vorrendern der README auf dynamisches Markdown-Parsing in Echtzeit, inklusive automatischer Konvertierung von Roh-Anhängen in spielbare HTML5-Videoplayer.

---

2. Methodik der Fall-Kategorisierung (Zugehörigkeit)

Um eine differenzierte und gerichtlich belastbare Argumentation zu sichern, werden alle Gerichtsfälle des Registers streng nach ihrer parteiorganisatorischen Nähe kategorisiert:

* 🔴 DIREKT AfD: Umfasst Personen, die zum Tatzeitpunkt ein offizielles Parteamt innehatten, ein Mandat für die AfD ausübten, als offizielle Mitarbeiter in Fraktionen angestellt waren oder sich offiziell im Namen der Partei betätigten. Zurechnung nach dem organisationsrechtlichen Zurechnungsprinzip.
* 🔵 INDIREKT AfD: Umfasst Personen, die sich im rechtsextremen Vorfeld bewegen und nachweisbare, personelle oder finanzielle Verflechtungen zur AfD-Führung aufweisen, ohne selbst formelles Parteimitglied oder Träger eines Amtes zu sein (Identitäre, Compact, Ein Prozent).

---

3. Zitierstandards in der Grundlagenforschung (Juris-Norm)

Zur Erhöhung der wissenschaftlichen Nachprüfbarkeit und zur Vorbereitung einer fehlerfreien Übernahme in gerichtliche Schriftsätze folgt das Register standardmäßig der Juris-Zitiernorm:

Zitierformat: [Autor/Herausgeber, Gericht, Entscheidungsdatum, Aktenzeichen]

Beispiel: Landgericht Halle, Urteil vom 14. Mai 2024, Az. 5 Ks 132/23.
Jedes Urteil verlinkt direkt auf das lokal gesicherte .md, .txt sowie .pdf Dokument mitsamt Zugriffsdatum und Archiv-Signatur.

---

4. Methodische Zuordnung von Zitaten zu Verbotsgründen

Die Zuordnung der 3.722 Belegzitate zu den 18 wehrhaften Verbotsgründen des Portals erfolgt über einen dreistufigen semantischen Zuordnungsalgorithmus:
1. Lexikalische Filterung: Zuordnung über Schlüsselbegriffe (z. B. Zitate mit Begriffen wie „Umvolkung“ werden automatisch dem Verbotsgrund „Völkisch-ethnische Staatsvolkdefinition“ vorgeschlagen).
2. Kontextuelle Validierung: Manuelle Prüfung der Zitate durch verfassungsrechtliche Gutachter zur Eliminierung von Satire- oder Referenzkontexten.
3. RAG-Indexierung: Einbettung der Zitate im Vektorraum zur Gewährleistung, dass semantisch passende Primärzitate augenblicklich als Beweisantritte vorgeschlagen werden.

---
Ende des methodischen Handbuchs. Dieses Kapitel sichert die Transparenz und wissenschaftliche Integrität des Gesamtprojekts.
