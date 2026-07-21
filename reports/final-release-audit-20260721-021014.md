# Final Release Audit: Pages Build / Archive Mode

Timestamp: 2026-07-21T02:10:14+02:00

## Kurzstatus

- Pages-/Statistik-Build: ausgeführt mit `npm run build`.
- Finale Pages-Validierung: `npm run validate:pages` -> OK, 4 Dateien, 0 fehlende Links.
- Finale Statistikvalidierung: `npm run validate:statistics` -> OK, 10.746 Quellen, 3.868 Findings, 18 Verbotsgründe, 261 Statistikobjekte, Fatal 0, Warnings 0.
- Sichtbare Registerzahl: 265 Gerichtsfälle/Registerfälle.
- Statistik-Tab: 265 Registerfälle und 3.722 Belegzitate sichtbar.
- README-Portalclaim: 265 Gerichtsfälle, 18 Verbotsgründe, 3.722 Belegzitate.
- Juristischer Prüfhinweis: direkt unter dem Portalclaim in `README.md` und `dokumente/ki_markdown/README.md` eingetragen.

## Bild- und Thumbnail-Audit

- Hauptbild `assets/images/afd-verbot.jpg` in README und KI-README vollbreit über raw GitHub URL eingebunden: `width="100%"` und `height:auto`.
- Hauptbild in `index.html` vollbreit ohne `max-h-[70vh]` eingebunden: `w-full h-auto object-contain`.
- YouTube-/ZDF-Thumbnails in README und KI-README auf einheitliche volle Breite gesetzt.
- `Die Anstalt 2` wurde als `Die Anstalt Folge 100` geführt.
- Lokale rohe Bilder (`afd verdachtsfall`, `Claus von Wagner`) ebenfalls auf volle Breite vereinheitlicht.

## Deepresearch-Nachtrag 2026-07-21

- Fall 263: Jörg Dornau / VG Leipzig / Ordnungsgeld Belarus im Quellenregister ergänzt.
- Fall 264: Neukölln-Komplex / Tilo P. / AfD-Kreisvorstandsbezug als indirekter AfD-Kontextfall ergänzt.
- Fall 265: Mord an Walter Lübcke / Stephan Ernst / AfD-Spenden- und Unterstützerkontext als indirekter AfD-Kontextfall ergänzt.
- Knockout51: als Nebenbeleg rechte Gewalt allgemein aufgenommen, nicht als AfD-Registerfall gezählt.
- Ferat Koçak: als Betroffener/Zeuge/linker Politiker dokumentiert, nicht als Täter oder AfD-Zurechnungsträger.

## Quellen und Pinpoints

- `PUBLIC_SOURCES.md` und `PUBLIC_EXTENDED_SOURCES.md` um 263/264/265, Knockout51-Nebenbeleg und Deepresearch-Dossier erweitert.
- `dokumente/hauptquellen/urteilsbelege/QUELLEN_URTEILSDB.md` und KI-Spiegel auf 1 bis 265 aktualisiert.
- Einzelfallbelege 264 und 265 enthalten Pinpoints, Zurechnungsgrenzen und lokale Quellenanker.
- Knockout51-Prüfvermerk enthält Pinpoints und eine klare Nichtzählungsentscheidung.
- Finalisierte Build-Pinpoints: 127 final geführt, 19 Hashanker, 0 nicht finalisiert.

## Lokale Primärquellen / Web-Fetch

Lokaler Fetch-Ordner:

`./sources/web/neukoelln-luebcke-knockout51-20260721-015209/`

Enthalten sind lokale HTML-Anker, URL-Liste, SHA256SUMS, Fetch-Log und Fetch-Audit. Lokal gefetcht wurden u.a. LG Berlin I, Parlament Berlin/Neukölln II, rbb24, taz, BGH PM, BGH Urteil, Presseportal Knockout51, tagesschau und VG Leipzig/Medienservice Sachsen.

Bekannte Fetch-Abweichung: Die GBA-Originseite zur Lübcke-Anklage ist im Webindex auffindbar, lieferte bei lokalem `curl` jedoch HTTP 404; der Presseportal-Mirror `4584193` lieferte HTTP 410. Für die lokale gerichtliche Lübcke-Verifikation sind BGH-PM 127/2022 und BGH-Urteil `3 StR 359/21` gefetcht und hashgesichert.

## Zahlen-Audit

- Alte Kernformulierungen zu 262/263 wurden korrigiert.
- `STATISTIKMODUL.md`, `statistikquellen.md`, KI-Spiegel und `scripts/resolve-open-statistics-tasks.mjs` wurden auf 265 aktualisiert.
- Alte Zwischenstände in historischen Auditdokumenten wurden als überholt formuliert und nicht mehr als aktueller Zahlenstand dargestellt.

## Build-Ergebnis

- `npm run build`: abgeschlossen; letzter fehlender Link wurde durch stabilen Dossier-Alias behoben.
- `npm run validate:pages`: OK.
- `npm run validate:statistics`: OK.
- `node --check` für zentrale Build-/Validierungsskripte: OK.

## Archive Mode

Dieses Audit ist die Freigabegrundlage für das Release-Zip. Das Zip wird ohne `.git/`, `node_modules/`, bestehende `releases/`, bestehende `archives/` und `.before-*` Arbeitskopien erstellt.

## Release- und Archive-ZIP

- Release-ZIP: `releases/afd-verbotsverfahren-grundlagenforschung-20260721-021014-release.zip`
- Archive-ZIP: `archives/afd-verbotsverfahren-grundlagenforschung-20260721-021014-release.zip`
- Groesse Release-ZIP: 1.6G
- Groesse Archive-ZIP: 1.6G
- SHA256: `f1ea4dec4f669f44416b305f931ff3cb61867f6dd3e48d7d479b4576aba7dbe7`
- SHA256-Datei Release: `releases/afd-verbotsverfahren-grundlagenforschung-20260721-021014-release.zip.sha256`
- SHA256-Datei Archive: `archives/afd-verbotsverfahren-grundlagenforschung-20260721-021014-release.zip.sha256`
- Archive Mode: ja, ZIP liegt gespiegelt unter `archives/`.
