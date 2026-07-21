# Final Release Audit 2026-07-21 02:25:01 +02:00

## Kurzstatus

- Aktueller sichtbarer Portal-/Repo-Stand: mindestens 313 Gerichtsfälle / Registerfälle.
- Sichtbare alte 263-Zählwerte für Gerichtsfälle, Registerfälle oder Urteilsbelege wurden entfernt oder auf historische, nicht aktuelle Einordnung umformuliert.
- Fall 263 bleibt als Fallnummer Jörg Dornau erhalten und ist kein Zählwert.
- Headerbild `afd-verbot.jpg` ist im Pages-Hero als echte Viewport-Breite gesetzt (`w-screen max-w-none`).
- README- und KI-README-Bilder sind auf volle Inhaltsbreite gesetzt; die GitHub-README selbst bleibt technisch durch GitHubs Contentspalte begrenzt.
- YouTube-/README-Renderer im Portal nutzt wieder echte Video-IDs und keine `vi//`-URLs.
- Release-/Archive-ZIPs werden nach diesem Audit neu erzeugt, weil nach dem vorherigen ZIP noch Layout- und Zählwertkorrekturen vorgenommen wurden.

## Validierungsziel

- `npm run build`
- `npm run validate:pages`
- keine sichtbaren falschen 263-Zählwerte in UI-/README-/Statistikdateien
- neues Release-ZIP unter `releases/`
- gespiegeltes Archive-ZIP unter `archives/`
- Remote-Push auf `main`, sofern GitHub-Authentifizierung funktioniert

## Finales ZIP

- Release-ZIP: `releases/afd-verbotsverfahren-grundlagenforschung-20260721-022501-release.zip`
- Archive-ZIP: `archives/afd-verbotsverfahren-grundlagenforschung-20260721-022501-release.zip`
- Groesse Release-ZIP: 1.6G
- Groesse Archive-ZIP: 1.6G
- SHA256: `652109db016c4506523f899f9649d0c9ecd03911354fdf26837e4cf06c899355`
- ZIP-Log: `reports/zip-20260721-022501.log`
