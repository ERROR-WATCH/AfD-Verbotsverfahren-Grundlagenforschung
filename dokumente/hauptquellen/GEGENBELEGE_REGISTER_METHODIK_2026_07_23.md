# Gegenbelege-Register: Methodik und Datenklasse

**Stand:** 23. Juli 2026

## Vorbemerkung

Dieses Register definiert eine eigene Datenklasse für entlastende, begrenzende oder gegenläufige Informationen. Es soll verhindern, dass das Repository nur belastendes Material sammelt oder Gegenindikatoren in Freitextfeldern verschwinden.

## 1. Zweck

Gegenbelege erhöhen die Belastbarkeit der Beweisarchitektur. Sie zeigen, wo eine Zurechnung begrenzt, eine Behauptung relativiert oder ein Vorgang nicht als Beweis genutzt werden darf.

## 2. Gegenbeleg-Typen

| Typ | Beispiele | Wirkung |
| --- | --- | --- |
| Distanzierung | öffentliche Distanzierung, Parteibeschluss, Gegenerklärung | kann Duldung oder Billigung begrenzen |
| Sanktion | Parteiausschluss, Ordnungsmaßnahme, Amtsenthebung | kann Zurechnung zur Gesamtpartei begrenzen oder differenzieren |
| Freispruch | strafrechtlicher Freispruch, erfolgreiche Klage, Verfahrensgewinn | begrenzt Tatsachen- oder Schuldbehauptungen |
| Einstellung | Einstellung nach StPO, fehlender Tatnachweis, Opportunitätseinstellung | erfordert genaue Statusformulierung |
| Gegenposition | innerparteiliche Gegenrede, programmatische Korrektur | kann These organisationsweiter Prägung begrenzen |
| verlorene Abstimmung | abgelehnte Anträge, keine Mehrheit, innerparteiliche Niederlage | begrenzt Aussage über Durchsetzung innerhalb der Partei |
| Kontextkorrektur | Zitat aus dem Zusammenhang, falsches Datum, falsche Funktion | korrigiert oder entwertet Einzelbeleg |

## 3. Mindestfelder

Ein Gegenbeleg sollte folgende Felder enthalten:

| Feld | Bedeutung |
| --- | --- |
| gegenbeleg_id | stabile ID |
| bezugsbeleg_id | Verweis auf betroffenen Beleg/Fall/Finding |
| typ | Distanzierung, Sanktion, Freispruch usw. |
| quelle | Primär- oder Sekundärquelle |
| pinpoint | genaue Fundstelle |
| akteur | wer distanziert, sanktioniert oder entscheidet |
| status | rechtskräftig, vorläufig, berichtet, offen |
| begrenzungswirkung | welche Aussage wird begrenzt? |
| verbleibender_beweiswert | was bleibt trotz Gegenbeleg verwertbar? |

## 4. Start-Register

Die konkrete Datendatei liegt unter:

- [`daten/gegenbelege_register_2026.jsonl`](../../daten/gegenbelege_register_2026.jsonl)

Sie ist als Anfangsstruktur zu verstehen und soll fortlaufend mit konkreten Gegenbelegen aus Gerichtsregister, Parteireaktionen und Primärquellen befüllt werden.
