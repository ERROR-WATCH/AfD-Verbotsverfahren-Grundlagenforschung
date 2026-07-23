# Reproduzierbarkeit und Intercoder-Kontrolle

**Stand:** 23. Juli 2026

## Vorbemerkung

Dieses Protokoll definiert eine interne Qualitätskontrolle für die Bewertung von Belegen. Es ist kein Nachweis, dass bereits jeder Datensatz doppelt geprüft wurde. Es beschreibt den Standard, nach dem künftige Gegenlesen nachvollziehbar dokumentiert werden sollen.

## 1. Zweck

Eine Belegarchitektur ist nur dann wissenschaftlich belastbar, wenn die Einstufung einzelner Belege reproduzierbar ist. Zwei unabhängige Bearbeiter sollten bei gleicher Quelle, gleichem Pinpoint und gleicher Bewertungsmatrix zu vergleichbaren Ergebnissen kommen oder Abweichungen begründet dokumentieren.

## 2. Prüfablauf

1. Erstbewertung durch Bearbeiter A anhand der Bewertungsmatrix.
2. Unabhängige Zweitbewertung durch Bearbeiter B ohne Rückgriff auf die Erstwertung.
3. Vergleich der Beweisklasse, Zurechnung, Red-Team-Grenze und Gegenbelege.
4. Dokumentation von Abweichungen.
5. Entscheidung durch Review oder Fachprüfung.
6. Aktualisierung der betroffenen Registerzeile mit Änderungsvermerk.

## 3. Mindestfelder

| Feld | Bedeutung |
| --- | --- |
| review_id | stabile ID der Intercoder-Prüfung |
| bezugsbeleg_id | Finding, Anlagenzeile, Fall-ID oder Quellen-ID |
| reviewer_a_class | Einstufung nach Erstbewertung |
| reviewer_b_class | Einstufung nach Zweitbewertung |
| abweichung | keine, gering, erheblich, fundamental |
| konfliktfeld | Quelle, Pinpoint, Akteur, Zurechnung, Status, Gegenbeleg, Art.-21-Feld |
| entscheidung | finale Arbeitsentscheidung |
| begruendung | knappe Begründung der Entscheidung |
| auswirkung | welche Dateien oder Register sind betroffen? |

## 4. Bewertungsregel

Bei erheblicher Abweichung ist die niedrigere Beweisklasse zu wählen, solange Primärquelle, Pinpoint, Zurechnung oder Gegenbeleglage nicht geklärt sind.

Eine Übereinstimmung zwischen Bearbeiter A und Bearbeiter B begründet für sich genommen keine materielle Richtigkeit der Bewertung. Das Intercoder-Verfahren prüft die Reproduzierbarkeit und Konsistenz der internen Methodik, nicht die externe juristische Validierung eines Belegs.

## 5. Maschinenlesbares Schema

- [`daten/intercoder_review_schema_2026.json`](../../daten/intercoder_review_schema_2026.json)
