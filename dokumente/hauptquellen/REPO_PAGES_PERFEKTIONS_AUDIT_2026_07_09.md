# Repo-/Pages-Perfektionsaudit 2026-07-09

## Ergebnis

Das Repository ist in der Beweislogik deutlich antragsnaeher als vor dem Audit: Statistik, Top-40-Antragsspitze, Schriftsatzexport, Webhash-Anker, Statusmatrix, Zitatkorpus und Sicherheitsachsen sind als Quelle -> Pinpoint -> Akteur -> Zurechnung -> Art.-21-Feld -> Verfahrensstand lesbar.

## Gefundene Restqualitaetsthemen

1. README enthielt alte Zwischenstandsformulierungen zu Screenshot-/Chronik- und Build-Audit-Punkten. Diese wurden nicht entfernt, sondern durch einen aktuellen Antragsreife-Abschnitt eingeordnet.
2. `STATISTIKMODUL.md` und `statistikquellen.md` enthielten veraltete Manifestzahlen. Historisch aktualisiert auf 258 validierte Statistikobjekte und 262 Registerfaelle; aktueller Portal-/Repo-Stand mindestens 265 Registerfaelle.
3. Der sichtbare Statistik-Tab enthielt einzelne schwache Formulierungen wie kaputte Zielgruppenphrase, alte Restmatrix-Sprache und unklare Pinpoint-Saetze. Diese wurden in gerichtsfeste Schriftsatzfeld-Sprache ueberfuehrt.
4. Alte Hilfsskripte enthielten Legacy-Ausgabetexte, die spaeter wieder schwache Statussprache in Pages schreiben konnten. Diese Generator-Texte wurden normalisiert.
5. Sicherheits- und Spionageachsen waren im Top-40-Export zwar vorhanden, aber nicht zwingend prominent. Sie stehen jetzt als Pflichtanker auf den Raengen 1 bis 5.

## Antragsnahe Pflichtanker

- Reuss/Malsack-Winkemann: GBA-/OLG-Anker, fruehere AfD-MdB-/Richterinnen- und Zugangsebene.
- Uwe L.: Reichsbuerger-/Tag-X-Komplex mit AfD-Lokalbezug.
- Saechsische Separatisten/Kurt H.: GBA-Anklage, AfD-Stadtrat-/JA-Umfeld.
- Jian G./Krah-Umfeld: GBA-Anklage, Mitarbeiter-/Zugangskante, kein Beschuldigtenstatus Krah aus dieser Kante.
- Bystron: Bundestagsanker zur Immunitaetsaufhebung, keine strafrechtliche Schuldbehauptung aus dem Statusakt.
- BVerwG 6 B 23.24: rechtskraeftiger Bundes-Verdachtsfallanker.
- BfV-Folgegutachten Menschenwuerde/Demokratie/Rechtsstaat: amtliche Kernachsen.
- AfD-Programme und Bundestags-/Parteienrechtsanker: parteieigene und parlamentarische Beweisquellen.

## Was fuer eine Verfassungsorganschrift noch zu leisten bleibt

Das Repository kann den Antrag nicht selbst stellen. Die echte Antragsschrift muss die bereits codierten Beweisrouten als Anlagen- und Beweisangebot in Prozessform bringen:

- finale Anlagenreihenfolge,
- Seiten-/Randnummern je PDF,
- Aktenzeichen und Instanz je Gerichtsfall,
- Beweisangebot pro Tatsachenbehauptung,
- Gegenargument- und Ueberzeichnungsgrenzen,
- klare Trennung von Bundespartei, Landesverband, JA/GD, Vorfeld und Einzelfall.

Diese Punkte sind jetzt als Schriftsatzfelder und Beweisrouten im Repo angelegt. Sie sind keine leeren Rechercheaufgaben.

## Validierungsstand

- `daten/antragsspitze_top40_beweise_2026.jsonl`: 40 Beweisbloecke.
- `daten/schriftsatz_export_top_beweise_2026.jsonl`: 144 Beweisbloecke.
- `daten/official_web_anchor_integrity_2026.jsonl`: 9 amtliche Webhash-Anker.
- `npm run validate:statistics`: 0 Fatal, 0 Warnings.
- `npm run build`: erfolgreich.
