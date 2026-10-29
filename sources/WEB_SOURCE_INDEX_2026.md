# Vollständiger Index der lokalen Webquellen

Stand: 29.10.2026 (Nachtrag Strategiepapier-Ordner; Basiskonvolut vom 30.07.2026)  
Generiert mit `scripts/build-web-source-index.mjs`.

Der maschinenlesbare Vollindex unter `daten/web_source_inventory_2026.jsonl` enthält für jede lokale Datei Pfad, Ordner, Dateiname, Byteumfang, SHA-256, README-Status und Manifestabdeckung. Erfasst sind **39 Quellenordner** (davon 2 leere Reserveordner), **484 Dateien** und **122.172.137 Bytes** (Summe aller JSONL-Zeilen, Stand 29.10.2026).

Transparenzhinweis: Die bisherige Kopfzeile („38 Quellenordner, 479 Dateien, 75.233.353 Bytes", Stand 30.07.2026) war bereits vor diesem Nachtrag nicht mehr deckungsgleich mit dem JSONL-Bestand – dessen 479 Zeilen summieren sich auf 122.171.665 Bytes. Diese Abweichung liegt im Basiskonvolut (nicht im Nachtragsordner) und wurde hier nicht stillschweigend „korrigiert", sondern ausgewiesen; eine Neuvermessung erfordert einen Voll-Checkout.

| Quellenordner | Dateien | README | SHA-Manifest |
|---|---:|:---:|:---:|
| `afd-coronaregeln-bverfg-20260723` | 6 | ja | ja |
| `afd-gerichtsentscheidungen-2026` | 5 | ja | ja |
| `afd-landesverbaende-verfassungsschutz-20260724` | 6 | ja | ja |
| `afd-organisationsmacht-20260730` | 5 | ja | nein |
| `afd-veranstaltung-steimle-stauffenberg-20260716` | 5 | ja | ja |
| `afd-verbot` | 199 | nein | ja |
| `bundestag` | 2 | nein | ja |
| `bverwg` | 2 | nein | ja |
| `cdu-brandmauer-potentialitaet-20260723` | 53 | ja | ja |
| `csd-sonneberg-auflagen-20260717` | 5 | ja | ja |
| `demokratie-gefaehrdung-20260723` | 18 | ja | ja |
| `diw-afd-paradox-sachsen-anhalt-20260724` | 8 | ja | ja |
| `forgotten-afd-judgments-20260721` | 19 | ja | ja |
| `forgotten-afd-judgments-20260721-completion` | 8 | ja | ja |
| `forgotten-afd-judgments-20260721-extended` | 18 | ja | ja |
| `forgotten-afd-judgments-20260721-final` | 5 | ja | ja |
| `forgotten-afd-judgments-20260721-more` | 9 | ja | ja |
| `fragdenstaat-afd-20260730` | 8 | ja | ja |
| `gba` | 8 | nein | ja |
| `gerichte` | 0 | nein | nein |
| `hessen-olg` | 2 | nein | ja |
| `kommunale-nichtzulassungen-verfassungstreue-20260729` | 13 | ja | ja |
| `lvz` | 2 | nein | ja |
| `neukoelln-luebcke-knockout51-20260721-015209` | 17 | nein | ja |
| `nius` | 0 | nein | nein |
| `normalisierung-halbloyale-demokraten-20260724` | 4 | ja | ja |
| `oez-muenchen-nebenbeleg-20260722` | 7 | ja | ja |
| `pankow-angriff-omas-gegen-rechts-20260602` | 3 | ja | ja |
| `rechte-gewalt-2025-vbrg-taz-20260723` | 5 | ja | ja |
| `rechte-gewalt-stuttgart-fau-20260723` | 3 | ja | ja |
| `rechte-jugend-nsu-steimle-20260724` | 6 | ja | ja |
| `reichsbuerger-frankfurt-taz-20260729` | 4 | ja | ja |
| `sachsen` | 4 | nein | ja |
| `sachsen-anhalt-schule-neutralitaet-20260724` | 3 | ja | ja |
| `sachsen-anhalt-umfragen-20260724` | 3 | ja | ja |
| `sicherheitsstaat-dobrindt-geheimdienst-20260724` | 3 | ja | ja |
| `taz` | 2 | nein | ja |
| `verfassungstreue-potentialitaet-20260723` | 9 | ja | ja |
| `volksverpetzer-strategiepapier-union-20261029` | 5 | ja | ja |

## Leseregel

Ein lokaler Snapshot belegt den archivierten Abrufstand, nicht automatisch die Richtigkeit jeder darin enthaltenen Aussage. Fehlende Ordner-READMEs werden durch diesen zentralen Vollindex auffindbar gemacht; beweistragende Dossiers müssen dennoch Original-URL, Datum, Pinpoint, Akteur, Status und Zurechnungsgrenze einzeln ausweisen. Leere Reserveordner werden nicht als Quellenbestand gezählt. Nachtrag 29.10.2026: Der Ordner `volksverpetzer-strategiepapier-union-20261029` wurde manuell in identischem Zeilenformat nachgetragen (SHA-256 lokal berechnet), da der Arbeits-Checkout kein Vollcheckout ist und eine Neugenerierung des Gesamtindex andernfalls fehlende Dateien unterschlagen würde.
