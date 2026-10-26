# Parlamentsaktivität der AfD: Erfassungs- und Bewertungsmethodik

Stand: 30. Juli 2026

## Ziel und Abdeckung

Das Modul erschließt Anträge, Gesetzentwürfe, Große und Kleine Anfragen sowie
belastbar zuordenbare Abstimmungen der AfD im Deutschen Bundestag und in den
16 Landtagen. Vollständigkeit wird nicht pauschal behauptet, sondern je
Parlament, Wahlperiode, Dokumenttyp und Abrufdatum ausgewiesen.

Primärquellen sind DIP und die Open-Data-Angebote des Bundestages sowie die
amtlichen Dokumentationssysteme der Landtage. Presse- und Analysequellen
erläutern Debatten oder Kritik, ersetzen aber weder Drucksache noch
Regierungsantwort.

## Pflichtfelder je Vorgang

- Parlament, Ebene, Wahlperiode, Dokumenttyp, Dokumentnummer und Datum
- Titel, Urheberschaft und Rolle der AfD
- amtliche Original-URL und, soweit archiviert, lokaler Pfad mit Hash
- verlangte Information und konkrete Frage-/Seiten-Pinpoints
- Themen- und Zielgruppencodes
- möglicher Schutzbelang und verlangter Detailgrad
- Antwort, Nichtwissen, Ablehnung, Geheimschutz oder Schwärzung
- parlamentarische Weiterverwendung und Beratungsverlauf
- Abstimmungsdatum, Ergebnis und Datengranularität
- Kritikquelle, Gegenposition und Evidenzstatus
- letzter Abruf und Abdeckungsstatus

## Sicherheits- und Zielgruppenklassifikation

Sensible Themen werden reproduzierbar codiert, unter anderem:

- `KRITIS_ENERGIE`, `KRITIS_WASSER`, `KRITIS_VERKEHR`,
  `KRITIS_DIGITALFUNK`, `KATASTROPHENSCHUTZ`
- `MILITAER_STANDORTE`, `MILITAER_TRANSPORTE`, `DROHNENABWEHR`,
  `RUESTUNG`
- `SOZIALLEISTUNG_PERSONENMERKMALE`, `BUERGERGELD`,
  `ERWERBSMINDERUNG`
- `BEHINDERUNG`, `GESUNDHEIT`, `MIGRATION_HERKUNFT`

Der Schutzstatus wird getrennt vom Thema erfasst:

- `KEIN_BESONDERER_SCHUTZBELANG_ERKANNT`
- `PERSONENBEZUG_AGGREGIERT`
- `OPERATIVE_DETAILS`
- `SCHWACHSTELLEN_ODER_SICHERUNGSMASSNAHMEN`
- `VERSCHLUSSSACHE_ODER_GEHEIMSCHUTZ`
- `PRUEFUNG_OFFEN`

## No-overclaim-Regel

Parlamentarische Anfragen sind ein reguläres Kontrollinstrument. Weder eine
hohe Zahl von Anfragen noch ein sicherheitsrelevantes Thema beweist
Missbrauch, Spionageabsicht oder Informationsweitergabe. Eine solche
Bewertung darf nur als zugeschriebene Position erscheinen und benötigt:

1. die Originalfrage mit Pinpoint,
2. die amtliche Antwort einschließlich etwaiger Schutzbegründung,
3. eine identifizierte, belastbare Kritikquelle,
4. die Erwiderung der AfD und relevante abweichende amtliche Bewertungen,
5. eine vom Quellenbefund getrennte redaktionelle Evidenzeinstufung.

## Abstimmungsdaten

Namentliche Abstimmungen werden auf Personen- und Fraktionsebene aus den
amtlichen Namenslisten erfasst. Bei einfachen Abstimmungen wird ein
Fraktionsvotum nur übernommen, wenn Plenarprotokoll oder amtlicher
Beratungsverlauf es eindeutig ausweisen. Fehlende Individualdaten werden als
`NICHT_NAMENTLICH_VERFUEGBAR` markiert und nicht geschätzt.

## Quantitative Auswertung

Erforderlich sind absolute Zahlen und Bezugsgrößen:

- Vorgänge nach Parlament, Wahlperiode, Dokumenttyp und Jahr
- Anteil der AfD an allen Vorgängen desselben Typs
- Vergleich mit anderen Fraktionen im identischen Zeitraum
- Themen- und Zielgruppenverteilung
- Anteil beantworteter, teilweise beantworteter und abgelehnter Fragen
- Anteil von Fragen mit operativen Details oder ausdrücklich genanntem
  Geheimschutz
- Abstimmungsübereinstimmung nach Fraktion und Politikfeld

Die Kategorie „Antragsflut“ wird nur als Quellenzitat oder als zuvor
definierter quantitativer Befund verwendet; eine bloße absolute Zahl genügt
nicht.
