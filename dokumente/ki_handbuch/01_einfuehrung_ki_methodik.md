# 01 | KI-Methodik in der verfassungsrechtlichen Grundlagenforschung

## 1. Die Rolle der Künstlichen Intelligenz (KI) im Verbotsverfahren

Das Verbotsverfahren gegen die „Alternative für Deutschland“ (AfD) nach Art. 21 Abs. 2 GG stellt einen beispiellosen historischen Kraftakt dar. Die Beweislast liegt vollständig bei den antragstellenden Verfassungsorganen (Bundestag, Bundesrat, Bundesregierung). Sie müssen ein flächendeckendes, systematisches und aktiv-kämpferisches Verhalten der Gesamtpartei gegen die freiheitliche demokratische Grundordnung (fdGO) nachweisen.

Angesichts von **Zehntausenden Seiten** Verfassungsschutzberichten, Chat-Leaks, Plenardebatten, Kriminalstatistiken und Strafurteilen stoßen traditionelle, rein händische Analysemethoden an Kapazitätsgrenzen. Hier greift das **KI-gestützte Arbeiten** als strategischer Beschleuniger ein.

Künstliche Intelligenz dient in diesem Kontext als:
1. **Skalierungsmotor:** Durchsuchung und Strukturierung von Massendaten in Sekundenschnelle.
2. **Mustererkenner:** Identifikation wiederkehrender verfassungswidriger Schlüsselbegriffe (z. B. völkisch-ethnische Staatsvolkdefinitionen) über Hunderte von Einzelfällen hinweg.
3. **Brückenbauer:** Vereinfachung des Zugangs zu komplexen juristischen Primärdaten für Bürger, Anwälte, Gutachter und Gerichte.

---

## 2. Kernprinzip: Die unerschütterliche Quellenbindung (Source Anchoring)

Das größte Risiko beim Einsatz von Large Language Models (LLMs) in der Rechtswissenschaft sind **Halluzinationen** – die Erfindung von Fakten, Aktenzeichen oder Urteilsbegründungen. Im Rahmen eines verfassungsgerichtlichen Verfahrens wäre eine einzige halluzinierte Quelle ein fataler Angriffspunkt, der die Glaubwürdigkeit des gesamten Antrags beschädigt.

Deshalb gilt das fundamentale **Kernprinzip der unerschütterlichen Quellenbindung**:

```
                       ┌────────────────────────────────────────┐
                       │   KLASSISCHER ANALYSE-WORKFLOW (RAG)   │
                       └───────────────────┬────────────────────┘
                                           │
         ┌─────────────────────────────────┴─────────────────────────────────┐
         ▼                                                                   ▼
┌─────────────────────────────────┐                                 ┌─────────────────────────────────┐
│     1. SEMANTISCHE SUCHE        │                                 │     2. QUELLEN-EXTRAKTION       │
│  LLM durchsucht den Belegkorpus │                                 │  Ausschließlich verifizierte     │
│  mittels Vektor-Embedding       │                                 │  Texte werden geladen.          │
└────────┬────────────────────────┘                                 └────────┬────────────────────────┘
         │                                                                   │
         ▼                                                                   ▼
┌────────────────────────────────────────────────────────────────────────────┴────────────────────────┐
│                                   3. SYNTHESE & PINPOINT-CITES                                      │
│  Das Modell entwirft die Argumentation, darf aber keine Behauptung aufstellen, die nicht durch ein   │
│  konkretes Aktenzeichen, eine Seitenzahl oder einen lokalen Belegpfad abgesichert ist.             │
└──────────────────────────────────────────┬──────────────────────────────────────────────────────────┘
                                           │
                                           ▼
┌─────────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                   4. MANUELLE DOPPEL-VERIFIZIERUNG                                  │
│  Menschliche Gutachter prüfen das Quellendokument im Original. Erst dann ist der Beleg gerichtsfest.│
└─────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 3. Best Practices für Prompting im Bereich des Art. 21 GG

Um optimale, juristisch präzise Ergebnisse aus einem LLM zu extrahieren, müssen Prompts nach dem **Context-Instruction-Constraint-Pattern (CIC)** aufgebaut sein.

### Negativ-Beispiel (Unbrauchbar für Verfassungsrecht):
> „Schreibe mir eine Anklageschrift gegen die AfD und nenne ein paar Beweise.“
> *Problem:* Führt zu unstrukturierten, emotionalen Texten mit hoher Halluzinationsrate.

### Positiv-Beispiel (Präzise, gerichtet, quellenbasiert):
```text
Rolle: Du bist ein hochspezialisierter wissenschaftlicher Mitarbeiter einer Kanzlei für Verfassungsrecht, der einen Schriftsatz für das Bundesverfassungsgericht vorbereitet.
Aufgabe: Analysiere den beigefügten Urteilskorpus zum Fall Marie-Thérèse Kaiser (Fall 2).
Instruktion: Subsumiere das Verhalten der Angeklagten unter das Merkmal der „aktiv-kämpferischen Zielrichtung“ gegen die Menschenwürdegarantie (Art. 1 Abs. 1 GG).
Einschränkungen (Constraints): 
1. Verwende ausschließlich die tatsächlichen Urteilsfeststellungen aus der Datei `02_Kaiser_Volksverhetzung_LG_Lueneburg.txt`.
2. Erfinde keine Fakten oder externen Zitate.
3. Zitieren mit exaktem Aktenzeichen, Gericht und Datum.
Format: Strukturiertes Gutachten im Urteilsstil (Obersatz, Definition, Subsumtion, Ergebnis).
```

---

## 4. Ethische Grenzen und die unersetzliche menschliche Expertise

KI-Systeme sind hochentwickelte statistische Navigationsgeräte im Ozean der Daten. Sie besitzen jedoch **kein Bewusstsein für verfassungsrechtliche Verantwortung**, keine ethische Urteilskraft und können keine strategischen prozessualen Entscheidungen treffen.

*   **Die KI bereitet vor:** Sie sucht, übersetzt, filtert, vergleicht, formatiert und verweist.
*   **Der Mensch entscheidet:** Die finale juristische Subsumtion, die Formulierung der eigentlichen Klageschrift, die Würdigung der politischen Gesamtlage und das Auftreten vor dem Zweiten Senat des Bundesverfassungsgerichts in Karlsruhe verbleiben vollumfänglich in den Händen **geschulter, menschlicher Experten**.

---
*Nächstes Dokument: `02_Deep_Research_Anleitung.md` – Systematische und automatisierte Materialsammlung.*
