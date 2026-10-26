# 04 | Leitfaden zur Datenanalyse & RAG-Pipelines

## 1. Das Prinzip von RAG (Retrieval-Augmented Generation)

Wenn Anwälte oder Gutachter ein LLM nach spezifischen verfassungsrechtlichen Sachverhalten befragen (z. B. *„Welche Beweise gibt es für die Verbindung der Jungen Alternative zu den Active Clubs?“*), darf das Modell nicht auf sein allgemeines Training vertrauen, da dies zu Halluzinationen führt.

Stattdessen nutzen wir **Retrieval-Augmented Generation (RAG)**:

```
                            ┌────────────────────────┐
                            │   1. USER-ANFRAGE      │
                            └───────────┬────────────┘
                                        │
                                        ▼
                            ┌────────────────────────┐
                            │ 2. VEKTORISIERUNG (EMB)│
                            └───────────┬────────────┘
                                        │
                                        ▼
                            ┌────────────────────────┐
                            │  3. SEMANTISCHE SUCHE  │
                            │  (Vektor-Datenbank)    │
                            └───────────┬────────────┘
                                        │
                                        ▼
   ┌────────────────────────────────────┴────────────────────────────────────┐
   ▼                                                                         ▼
┌───────────────────────────────┐                                         ┌───────────────────────────────┐
│  4. MATCHING-BELEGE GEFUNDEN  │                                         │ 5. GENERIERUNG IM CONTEXT     │
│  Die relevantesten Text-      │                                         │ LLM formuliert Antwort        │
│  Fragmente werden geladen     │                                         │ STRENG basierend auf Belegen  │
└───────────────────────────────┘                                         └───────────────────────────────┘
```

---

## 2. Chunking-Strategien für verfassungsrechtliche Texte

Juristische Dokumente sind hochgradig strukturiert (Paragraphen, Absätze, Randnummern). Ein unstrukturiertes Zerschneiden von Texten zerstört den Sinnzusammenhang.

### Empfohlene Chunking-Richtlinien:
- **Chunk-Größe (Chunk Size):** 500 bis 1.000 Zeichen (Tokens: ~200-300).
- **Überlappung (Chunk Overlap):** 100 bis 200 Zeichen. Dies stellt sicher, dass Sätze, die über Chunk-Grenzen hinweggehen, im Sinnzusammenhang erfasst werden.
- **Semantisches Chunking:** Bevorzugung von Trennungen an echten Absatzgrenzen (`\n\n`) oder Markdown-Überschriften (`###`), anstatt mitten im Satz zu schneiden.

---

## 3. Semantische Suche vs. Keyword-Suche

*   **Keyword-Suche (Lexikalisch, z. B. TF-IDF / BM25):** Sucht nach exakten Wortübereinstimmungen.  
    *Suchanfrage:* „Waffenbesitz AfD“ findet nur Dokumente, die exakt diese Wörter enthalten.
*   **Semantische Suche (Dense Retrieval / Vector Search):** Sucht nach der mathematischen Bedeutung im Vektorraum.  
    *Suchanfrage:* „Waffenbesitz AfD“ findet auch Dokumente mit Sätzen wie *„Entzug von Waffenbesitzkarten bei Rechtsextremisten“*, *„Sicherung von halbautomatischen Gewehren bei JA-Kader“* oder *„waffenrechtliche Unzuverlässigkeit wegen Parteimitgliedschaft“*.

Im Portal haben wir eine **In-Memory-Volltextsuche** implementiert, die beide Welten kombiniert: Sie sucht blitzschnell im Browser über alle 239 Urteile und zeigt sofort eine kursive Zitat-Vorschau an.

---

## 4. Absicherung gegen Halluzinationen (Fact-Checking und Guardrails)

Um die absolute juristische Belastbarkeit der KI-Analysen zu sichern, müssen folgende **Guardrails** in der Analyse-Pipeline implementiert werden:

1.  **Strict Context Enforcement (System Prompt):**  
    Das Modell wird angewiesen: *„Wenn die Antwort nicht zweifelsfrei aus den bereitgestellten Dokumenten hervorgeht, antworte mit: 'Information nicht im Belegkorpus vorhanden.' Erfinde unter keinen Umständen Fakten.“*
2.  **Attribution und Pinpoint-Citing:**  
    Das System muss gezwungen werden, hinter jedem analysierten Faktum den genauen Dateipfad und das Aktenzeichen zu nennen (z. B. `[Quelle: Fall 22, OVG Münster, Az. 5 A 1210/21]`).
3.  **Human-in-the-Loop (Drei-Augen-Prinzip):**  
    Kein KI-generiertes Teilergebnis darf ungeprüft in die eigentliche Klageschrift einfließen. Gutachter nutzen das Forschungsportal, um den gefundenen Beleg mit einem Klick auf *„Urteil online suchen“* oder *„Lokalen Beleg anzeigen“* manuell im Originaltext abzugleichen.

---
*Nächstes Dokument: `05_Problembehandlung_Hilfestellungen.md` – Troubleshooting und Anwendungsverfahren.*
