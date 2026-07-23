# Methodik-Versionierung und Änderungsvermerk

**Stand:** 23. Juli 2026

## Vorbemerkung

Dieses Dokument definiert, wie Änderungen an Bewertungsmatrix, Beweisklassen, Verdichtungslogik, Gegenbelegtypen und Auditregeln dokumentiert werden sollen. Es ersetzt nicht die Git-Historie, ergänzt sie aber um eine wissenschaftliche Änderungslogik.

## 1. Zweck

Methodische Regeln entwickeln sich. Für externe Nachvollziehbarkeit muss erkennbar bleiben, wann eine Regel geändert wurde, warum sie geändert wurde und welche Datensätze dadurch erneut geprüft werden müssen.

## 2. Änderungstypen

| Typ | Beispiel | Erforderliche Folgeprüfung |
| --- | --- | --- |
| Beweisklasse | neue Mindestanforderung für `anlagenreif` | betroffene A-/B-Belege erneut prüfen |
| Gegenbelegtyp | neue Kategorie `Kontextkorrektur` | Gegenbelegregister ergänzen |
| Verdichtungsstufe | neue Schwelle zwischen V2 und V3 | Cluster und Grundtendenz-Thesen erneut bewerten |
| Statusregel | neue Trennung von Eilentscheidung und Hauptsache | Statusregister nachcodieren |
| Zurechnungsregel | strengere Anforderungen bei Nichtmitgliedern | Vorfeld- und Medienkanten prüfen |

## 3. Mindestfelder

| Feld | Bedeutung |
| --- | --- |
| change_id | stabile Änderungs-ID |
| datum | Datum der methodischen Änderung |
| regelbereich | Bewertungsmatrix, Gegenbelege, Verdichtung, Status, Zurechnung, Audit |
| alte_regel | bisherige Regel oder leer bei Neueinführung |
| neue_regel | neue Regel |
| grund | Anlass der Änderung |
| betroffene_dateien | Register oder Dokumente, die betroffen sein können |
| nachpruefung_erforderlich | ja/nein |
| status | offen, umgesetzt, rückwirkend geprüft |

## 4. Start-Changelog

- [`daten/methodik_changelog_2026.jsonl`](../../daten/methodik_changelog_2026.jsonl)
