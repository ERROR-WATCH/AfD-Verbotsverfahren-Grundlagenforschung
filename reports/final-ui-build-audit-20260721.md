# Final UI/Build Audit 2026-07-21

## Kurzstatus

Lokal repariert und nach Build geprüft. Der lokale Pages-Stand ist in den geprüften Tabs und Unterfiltern funktionsfähig. Kein Online-Release wurde ausgelöst, weil der externe Direktlink-Audit weiterhin problematische Quellenrouten enthält.

## Reparaturen in diesem Durchlauf

- Urteilsarten-Filter im Gerichtsregister repariert.
- Gerichtsfälle ohne explizites `urteilsart`-Feld werden aus Text/Description normalisiert.
- Gerichtsregister-Rendering, CSV-Export und Statistik-Auswertung nutzen dieselbe Urteilsarten-Normalisierung.
- `.case-card` und `.quote-card` ergänzt, damit UI-Regressionsprüfungen echte Karten zählen können.
- `favicon.ico` aus `assets/images/afd-verbot.jpg` erzeugt und in `index.html` eingebunden.

## Build und Validatoren

- `npm run build`: exit 0.
- Statistikvalidierung: 10.855 Quellen, 3.868 Findings, 18 Verbotsgründe, 261 Statistikobjekte; Fatal 0, Warnings 0.
- Pages-Linkvalidierung: 4 Dateien, 0 fehlende lokale Links.

## Browser-/DOM-Test nach Build

- Haupttabs geprüft: 11 von 11 sichtbar und mit Inhalt.
- Geprüfte Tabs: `tab-register`, `tab-gruende`, `tab-zitate`, `tab-gutachten`, `tab-statistik`, `tab-vs`, `tab-sonstige`, `tab-programme`, `tab-quellen`, `tab-readme`, `tab-ki`.
- JavaScript-Ausnahmen: 0.
- Lokale `undefined`-Href-Routen: 0.

## Gerichtsregister

- Initial: 313 von 313 Urteilsbelegen sichtbar.
- Zugehörigkeit: `DIREKT AfD` -> 201 von 313 sichtbar.
- Deliktart: `Amtsmissbrauch & Dienstvergehen` -> 2 von 313 sichtbar.
- Urteilsart: `Gerichtliche Entscheidung` -> 179 von 313 sichtbar.
- Reset: 313 von 313 sichtbar.
- Filteroptionen: 3 Zugehörigkeiten, 61 Deliktkategorien, 58 Urteilsarten.

## Statistik-Tab

- Initial: 261 von 261 Statistikobjekten gefiltert, 48 gerendert.
- Themenfilter: `AfD / BfV 2025 Lagezahlen` -> 3 von 261, 3 gerendert.
- Beweisstufe: `A` -> 35 von 261, 35 gerendert.
- Status: `BELEGT_UND_VERDRAHTET` -> 57 von 261, 48 gerendert.
- Filteroptionen: 27 Themen, 4 Beweisstufen, 3 Statuswerte.

## Weitere Reiter

- Zitatsuche: `Gewalt` -> 44 Treffer, 15 sichtbare Tabellenzeilen.
- Gutachten-Filter: 161 -> 8 Dateien.
- Verfassungsschutz-Filter: 63 -> 2 Dateien.
- Sonstige-Dokumente-Filter: 1231 -> 5 Dateien.
- Quellenlisten-Filter: 21 -> 1 Datei.

## Nicht als perfekt freigegeben

Der lokale UI-/Build-Stand ist repariert, aber der Gesamtzustand ist noch nicht release-perfekt: `reports/external-link-check-cases-current-20260721.md` dokumentiert weiterhin 67 problematische externe Direkt-URLs. Die UI ist dafür gehärtet und zeigt bei bekannten problematischen Online-Routen einen Suchfallback, aber für einen finalen Online-/Release-/Archivmodus sollten diese Direktquellen noch durch stabile Primär-, Gerichts-, Pressearchiv- oder Webarchivanker ersetzt werden.

## Releaseentscheidung

Kein Push, kein neuer Release-Zip, kein Timestamp-Update und kein Archive-Mode in diesem Schritt. Das entspricht der Vorgabe, Online-/Release-Schritte erst auszuführen, wenn wirklich keine offenen Perfektionspunkte mehr bestehen.
