# Project Integrity Audit 2026-07-21

## Ergebnis

- Sichtbare Standzahlen: auf 313 Gerichtsfälle korrigiert.
- Pages-/Kernseiten-Linkaudit: 0 fehlende lokale Referenzen.
- Datenpfad-Audit: 0 fehlende konkrete lokale Datenpfade nach Filterung zusammengesetzter Beschreibungsfelder.
- JSON/JSONL-Audit: 82 Dateien geprüft, 0 Parsefehler.
- Pages-Validator: 0 fehlende Links.
- Statistik-Validator: 10.855 Quellen, 3.868 Findings, 18 Verbotsgruende, 261 Statistikobjekte, 0 Fatal, 0 Warnings.
- Tab-/Pages-Struktur: 11 Tabs, 11 Buttons, 313 Fallobjekte, keine Fallnummernluecken.

## Bereinigte Befunde

- Veraltete sichtbare Zaehlwerte 265/288/310 wurden auf 313 korrigiert.
- Ein defekter lokaler Spiegel-PDF-Link in full-sources.md wurde auf den vorhandenen Dateipfad korrigiert.
- Veraltete Christian-Lueth-Assetpfade in den JSON-Indizes wurden auf assets/images/christian-lueth.jpg und assets/videos/christian-lueth.mp4 korrigiert.
- Veraltete Gutachten-Split-Indexpfade mit court_ready_pinpointed wurden auf die vorhandenen repaired-Dateien korrigiert.
- Nicht vorhandene afd-verbot local_archive-Behauptungen im schlimmste-zitate-Audit wurden entfernt; vorhandene lokale Archivanker bleiben erhalten.

## Grenzen

- Historische Fallnummern wie Fall 262 und echte PDF-Seitenzahlen wurden nicht veraendert.
- Externe Live-URLs wurden nicht neu gefetcht; geprueft wurden lokale Projektintegritaet und vorhandene Validatoren.
