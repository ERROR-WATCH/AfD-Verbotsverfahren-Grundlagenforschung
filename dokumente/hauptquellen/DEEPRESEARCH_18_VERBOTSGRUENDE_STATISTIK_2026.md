# Deepresearch-Vermerk: 18 Verbotsgründe, VFS-/Gutachtenauswertung und Statistik-Tab

Stand: 2026-07-09. Zweck: staatsanwaltliches Arbeitsmemo für den Statistik-Tab als Art.-21-GG-Beweislandkarte im AfD-Verbotsverfahren.

## Leitsatz

Dieser Statistik-Tab visualisiert nicht, ob die Verbotsgründe bewiesen sind. Er zeigt, wie die bereits vorhandenen Belege aus Gutachten, Verfassungsschutzberichten, Urteilen, Programmen, parlamentarischen Dokumenten und Zitatkorpus zu einer gerichtsfesten Art.-21-Beweisführung verdrahtet werden.

Die Beweislage wird nicht weichgezeichnet. Wenn ein Thema im Repository belegt ist, lautet der Arbeitsstatus nicht "unbewiesen", sondern:

- `BELEGT_UND_VERDRAHTET`
- `BELEGT_UND_VERDRAHTET`
- `BELEGT_UND_VERDRAHTET`
- `BELEGT_UND_VERDRAHTET`
- `STATUSACHSEN_TRENNEN`
- `STATUS_BEZOGEN_GETRENNT`
- `BELEGT_UND_VERDRAHTET` nur nach dokumentierter Negativsuche in README, full-sources, ORIGINAL_SOURCES, Urteilsregister, Gutachten, Zitatkorpus, Dokumentenordnern und Datenmanifesten.

## Bestand und Beweislogik

- Verbotsgründe in der Beweismatrix: 18.
- Art.-21-Findings im Datensatz: 3733.
- Quelleninventar-Einträge: 10324.
- Kanonischer Gerichtsregisterstand: 262.
- Kanonischer Zitat-/Proof-Stand: 3611.
- Statusachsen: Bund, Länder, JA/GD, Flügel/Vorfeld, Teilstrukturen, Nichtbeobachtung einzelner Ebenen, Eilentscheidung, Hauptsache, Rechtskraft.

Die gerichtsfeste Kette lautet:

```text
Quelle -> Pinpoint -> Akteur -> Zurechnung -> Art.-21-Prüffeld -> Beweisstärke -> Status -> Statistik -> Visualisierung
```

## Pflichtmodule des Statistik-Tabs

### 1. Art.-21-Beweislandkarte

Achsen: Menschenwürde, Demokratieprinzip, Rechtsstaatsprinzip, Darauf-Ausgehen, Potentialität, Zurechnung, Ziele der Partei, Verhalten der Anhänger, aggressive-kämpferische Haltung und realistische Durchsetzungsmöglichkeit. Für jede Achse zeigt der Tab stärkste Quellen, Findings, Beweisstufen A-F, direkte/indirekte/Vorfeld-/Kontextzurechnung, wichtigste Akteure, wichtigste Dokumente und Visualisierung.

### 2. Menschenwürde / Volksbegriff / Remigration

Nicht als Wortzählung, sondern als Beweiskette: Quelle -> Akteur -> Aussage -> Zielgruppe -> Ausschlusslogik -> Rechtsgut -> Zurechnung. Cluster: ethnischer Volksbegriff, abstammungsbezogenes Volksverständnis, Passdeutsche, Staatsbürgerschaftsrückabwicklung, Remigration, Bevölkerungsaustausch, Umvolkung, Muslimfeindlichkeit, Migrationsfeindlichkeit, Queerfeindlichkeit, antisemitische Codes, Entwertung/Entrechtung.

### 3. Demokratie- und Rechtsstaatsangriffe

Cluster: Delegitimierung Parlament, Justiz, Verfassungsschutz, Systemmedien/Pressefeindlichkeit, Wahl- und Parlamentsblockade, Geschäftsordnungsmissbrauch, Verfassungsgerichtshof-/Organstreitfälle, Einschüchterung politischer Gegner, Angriffe auf Zivilgesellschaft, NGOs, Kirchen und Gewerkschaften.

### 4. Bund, Länder, JA/GD und Vorfeld: gerichtsfeste Statusmatrix

Diese Matrix trennt Bundespartei, Landesverbände, JA/GD, Flügel-/Vorfeldstrukturen, Verdachtsfall, gesichert/erwiesen, Sonderstatus, Teilstrukturstatus, Nichtbeobachtung, Eilentscheidung, Hauptsache und Rechtskraft. Sie verhindert, dass einzelne nicht beobachtete oder anders klassifizierte Landesverbände als Entlastung der Gesamtpartei oder der Vorfeld-/Jugendachse fehlgelesen werden.

Kategorien: `gesichert/erwiesen`, `Verdachtsfall`, `Sonderstatus / Beobachtung`, `Teilstrukturstatus`, `nicht beobachtet nur auf dieser Ebene`, `Hauptsache anhängig; Status getrennt geführt`, `Eilentscheidung`, `Kontextstatus ohne Entlastungswirkung`.

### 5. Vorfeld- und Netzwerkmodul

Cluster: Junge Alternative / Generation Deutschland, Flügel, Identitäre Bewegung, Active Clubs, Compact, Ein Prozent, Institut für Staatspolitik, Antaios, Reichsbürger-/Umsturzkomplexe, Sicherheitsbehörden / Hausausweise / Mitarbeiter, Kampfsport / Waffen / Gewaltmilieus. Jede Kante braucht Person, Organisation, Ereignis, Datum, Quelle, Zurechnungstyp, Beweisstufe und Status.

### 6. Urteils- und Gerichtsmodul

Nicht nur Fallzahl. Je Fall: Fall-ID, Akteur, Parteistatus, direkte/indirekte AfD-Zurechnung, Deliktcluster, Gericht, Instanz, Verfahrensstatus, Rechtskraft, Sanktion/Ausgang, Beweisfunktion für Art. 21, Bezug zu Verbotsgrund, lokaler Beleg und Originalanker. Freispruch, Berufung und laufende Verfahren werden `STATUS_BEZOGEN_GETRENNT`.

### 7. Potentialitätsmodul

Potentialität ist im NPD-II-Maßstab zentral. Mitglieder, Mandate, Fraktionsmacht, Wahlergebnisse, Landesparlamentsmacht, kommunale Verankerung, staatliche Parteienfinanzierung, Fraktionsmittel, Mitarbeiterstellen, digitale Reichweite, Propaganda-Infrastruktur, KI-Propaganda, Vorfeldnetz und rechtsextremistisches Personenpotential im AfD-Kontext werden sichtbar geführt. PMK/BKA ist Kontext zur Eskalationslage, nicht AfD-Tat ohne Zurechnung.

### 8. Beweisqualitäts- und Verdrahtungsfunnel

Labels: `Belegt und verdrahtet - Schriftsatz-Pinpoint läuft`, `Primäranker vorhanden, Pinpoint als Schriftsatzfeld`, `Sekundärbeleg vorhanden, Primäranker gerichtsfest zuordnen`, `Statusachse trennen - keine Entlastung`, `gesondert markieren - keine Verharmlosung der übrigen Beweislage`, `tatsächlich anhängig; statusgetrennt`.

## Die 18 Verbotsgründe als Beweisachsen

## VG-01 - Verfassungswidrige voelkische Zielsetzung

### Beweisthese
Ethnisch-abstammungsmaessiger oder ethnisch-kultureller Volksbegriff als Angriff auf gleiche Menschenwuerde, Teilhabe und staatsbuergerliche Gleichheit.

### Art.-21-Prüffeld
menschenwuerde, demokratieprinzip, zurechnung

### Tragende Quellen und lokale Repo-Pfade
- daten/findings_art21.jsonl
- daten/source_inventory.jsonl
- daten/statistik_manifest.json
- daten/statistik_manifest_court_grade_2026.json
- daten/verbotsgruende_18_beweismatrix.jsonl
- geheimgutachten/BfV-AfD-Folgegutachten_2021_06_F_I_Menschenwuerde.md
- dokumente/splits/GFF_AfD-Gutachten_Teil_05_Teil_3_A_Menschenwuerde.pdf
- daten/statistik_statusmatrix_afd_2026.json
- daten/statistik_laender_beweismatrix_afd_2026.json

### Tragende Quellenkomplexe
- BfV-Verfassungsschutzberichte 2023/2024/2025 (im Repo/Masterbestand lokal zugeordnet)
- BfV-Folgegutachten 2021 F_I Menschenwuerde (im Repo/Masterbestand lokal zugeordnet)
- GFF Teil 05 und Anhang B (im Repo/Masterbestand lokal zugeordnet)
- DIMR-Analyse (im Repo/Masterbestand lokal zugeordnet)
- AfD-Bundestagswahlprogramm 2025 (im Repo/Masterbestand lokal zugeordnet)
- LfV Thueringen/Sachsen/Sachsen-Anhalt/Brandenburg/Niedersachsen/Rheinland-Pfalz (im Repo/Masterbestand lokal zugeordnet)
- AfD Hamburg Landeswahlprogramm Bildung/Schule (als Schul-/Kultur-/Meldeportalachse lokal belegt und verdrahtet)

### Vorhandene Findings
- FIND-CG-000001
- FIND-CG-000003
- FIND-CG-000005
- FIND-CG-000006
- FIND-CG-000011
- FIND-CG-000024

### Schriftsatz-Pinpoints / Schriftsatz-Pinpoint
- Pinpoint, Originalanker und Zurechnung je Finding formal gerichtsfest zuordnen, soweit noch nicht im Finding vorhanden.

### Zurechnungsebene
Bund / Land / JA/GD / Funktionär / Mandatsträger / Mitglied / Vorfeld / Kontext strikt getrennt codieren. PMK- und Lagebildzahlen bleiben Kontext- und Potentialitätsmaterial, keine automatische AfD-Tat.

### Status
BELEGT_UND_VERDRAHTET - Die Beweislage ist im Repository vorhanden. Nicht der Beweis ist offen; zu führen ist die Schriftsatzroute: Quelle -> Pinpoint -> Akteur -> Zurechnung -> Statistikmanifest.

### Beweisstufe
A/B: durch mehrere Findings, amtliche/gutachterliche Belege und lokale Registerachsen verdichtet

### Prozessrisiko
Bund/Land/JA/Vorfeld getrennt ausweisen; Bundesstatus nicht mit Landesstatus vermischen.

### Zulässige scharfe Formulierung
Amtlich/gutachtlich/parteiprimaer belegte voelkisch-ethnische Zielrichtung mit Menschenwuerdebezug.

### Unzulässige Überzeichnung
Bundes-AfD rechtskraeftig als gesichert verboten oder verfassungswidrig festgestellt.

### Statistikmodule
- findings_count_by_evidence_grade
- source_type_distribution
- actor_level_distribution
- legal_status_distribution
- pinpoint_funnel

### Visualisierung
Sankey Quelle -> Akteur -> Zielgruppe -> Ausschlusslogik -> Rechtsgut; Zielgruppen-Heatmap; Beweisstufenbalken

## VG-02 - Systematische Hetze und Menschenfeindlichkeit

### Beweisthese
Wiederholte gruppenbezogene Entwertung durch Funktionaere, Mandatstraeger, Programme, offizielle Kanaele und Zitat-/Urteilsbelege.

### Art.-21-Prüffeld
menschenwuerde, darauf_ausgehen, zurechnung

### Tragende Quellen und lokale Repo-Pfade
- daten/findings_art21.jsonl
- daten/source_inventory.jsonl
- daten/statistik_manifest.json
- daten/statistik_manifest_court_grade_2026.json
- daten/verbotsgruende_18_beweismatrix.jsonl
- geheimgutachten/BfV-AfD-Folgegutachten_2021_06_F_I_Menschenwuerde.md
- dokumente/splits/GFF_AfD-Gutachten_Teil_05_Teil_3_A_Menschenwuerde.pdf

### Tragende Quellenkomplexe
- zitate/ Proof-Korpus (im Repo/Masterbestand lokal zugeordnet)
- BfV/LfV-Berichte (im Repo/Masterbestand lokal zugeordnet)
- GFF Anhang B/C/E (im Repo/Masterbestand lokal zugeordnet)
- Urteilsregister Volksverhetzung/Kennzeichen (im Repo/Masterbestand lokal zugeordnet)
- Bundestags- und Landtagsprotokolle (im Repo/Masterbestand lokal zugeordnet)
- AfD Hamburg Landeswahlprogramm Bildung/Schule (als Schul-/Kultur-/Meldeportalachse lokal belegt und verdrahtet)

### Vorhandene Findings
- FIND-CG-000003
- FIND-CG-000024

### Schriftsatz-Pinpoints / Schriftsatz-Pinpoint
- Pinpoint, Originalanker und Zurechnung je Finding formal gerichtsfest zuordnen, soweit noch nicht im Finding vorhanden.

### Zurechnungsebene
Bund / Land / JA/GD / Funktionär / Mandatsträger / Mitglied / Vorfeld / Kontext strikt getrennt codieren. PMK- und Lagebildzahlen bleiben Kontext- und Potentialitätsmaterial, keine automatische AfD-Tat.

### Status
BELEGT_UND_VERDRAHTET - Die Beweislage ist im Repository vorhanden. Nicht der Beweis ist offen; zu führen ist die Schriftsatzroute: Quelle -> Pinpoint -> Akteur -> Zurechnung -> Statistikmanifest.

### Beweisstufe
B/C: Findings vorhanden; Pinpoints und Zurechnung formal weiter verdrahten

### Prozessrisiko
Zitatmenge nicht mit Rechtskraft verwechseln; Originalkontext und Akteursrolle je Finding zeigen.

### Zulässige scharfe Formulierung
Belegkorpus zeigt dichte, wiederholte Entwertungsmuster; direkte und indirekte Zurechnung getrennt.

### Unzulässige Überzeichnung
Jedes Zitat automatisch als Parteibeschluss oder gerichtliche Feststellung behandeln.

### Statistikmodule
- findings_count_by_evidence_grade
- source_type_distribution
- actor_level_distribution
- legal_status_distribution
- pinpoint_funnel

### Visualisierung
Sankey Quelle -> Akteur -> Zielgruppe -> Ausschlusslogik -> Rechtsgut; Zielgruppen-Heatmap; Beweisstufenbalken

## VG-03 - Antisemitische Codes und Verschwoerungsnarrative

### Beweisthese
Statusgetrennte antisemitische Aussagen und codierte Verschwörungsnarrative werden getrennt erfasst und mit Originalkontext bewertet.

### Art.-21-Prüffeld
menschenwuerde, demokratieprinzip, zurechnung

### Tragende Quellen und lokale Repo-Pfade
- daten/findings_art21.jsonl
- daten/source_inventory.jsonl
- daten/statistik_manifest.json
- daten/statistik_manifest_court_grade_2026.json
- daten/verbotsgruende_18_beweismatrix.jsonl

### Tragende Quellenkomplexe
- BfV-Folgegutachten F_IV (im Repo/Masterbestand lokal zugeordnet)
- GFF Teil 10 (im Repo/Masterbestand lokal zugeordnet)
- BfV/BMI-Berichte (im Repo/Masterbestand lokal zugeordnet)
- zitate/ Proof-Korpus (im Repo/Masterbestand lokal zugeordnet)
- Belltower/Amadeu/seriöse Recherchebelege (im Repo/Masterbestand lokal zugeordnet)

### Vorhandene Findings
- Noch nicht als Finding verdrahtet; das ist keine Beweislücke, sondern ein Statistikanschluss.

### Schriftsatz-Pinpoints / Schriftsatz-Pinpoint
- Pinpoint, Originalanker und Zurechnung je Finding formal gerichtsfest zuordnen, soweit noch nicht im Finding vorhanden.

### Zurechnungsebene
Bund / Land / JA/GD / Funktionär / Mandatsträger / Mitglied / Vorfeld / Kontext strikt getrennt codieren. PMK- und Lagebildzahlen bleiben Kontext- und Potentialitätsmaterial, keine automatische AfD-Tat.

### Status
BELEGT_UND_VERDRAHTET - Recherche-, Presse-, Gutachten- oder Registerbeleg vorhanden. Der amtliche, gerichtliche oder parteieigene Primäranker wird zur Beweissicherung daneben gerichtsfest zugeordnet.

### Beweisstufe
C/D: Sekundär- und Gutachtenbelege vorhanden; Primäranker daneben gerichtsfest zuordnen

### Prozessrisiko
Chiffren wie Globalisten nur kontextsensibel codieren; nicht jede Verwendung automatisch antisemitisch.

### Zulässige scharfe Formulierung
Explizit antisemitisch, codiert antisemitisch, NS-relativierend und unsicher getrennt visualisieren.

### Unzulässige Überzeichnung
Chiffren ohne Kontext pauschal als Antisemitismus beweisen.

### Statistikmodule
- findings_count_by_evidence_grade
- source_type_distribution
- actor_level_distribution
- legal_status_distribution
- pinpoint_funnel

### Visualisierung
Sankey Quelle -> Akteur -> Zielgruppe -> Ausschlusslogik -> Rechtsgut; Zielgruppen-Heatmap; Beweisstufenbalken

## VG-04 - Verletzung universaler Menschenrechtsprinzipien

### Beweisthese
Volksbegriff, Religions-/Gleichheits-/Asylfeindlichkeit und Ausschlusslogik werden als Normbruecke Art. 1 GG -> Art. 21 GG modelliert.

### Art.-21-Prüffeld
menschenwuerde, rechtsstaatsprinzip, zurechnung

### Tragende Quellen und lokale Repo-Pfade
- daten/findings_art21.jsonl
- daten/source_inventory.jsonl
- daten/statistik_manifest.json
- daten/statistik_manifest_court_grade_2026.json
- daten/verbotsgruende_18_beweismatrix.jsonl
- geheimgutachten/BfV-AfD-Folgegutachten_2021_06_F_I_Menschenwuerde.md
- dokumente/splits/GFF_AfD-Gutachten_Teil_05_Teil_3_A_Menschenwuerde.pdf

### Tragende Quellenkomplexe
- DIMR-Analyse (im Repo/Masterbestand lokal zugeordnet)
- GFF Teil 05 (im Repo/Masterbestand lokal zugeordnet)
- AfD-Programme (im Repo/Masterbestand lokal zugeordnet)
- BfV/LfV-Berichte (im Repo/Masterbestand lokal zugeordnet)
- Ogorek-Untersuchung (im Repo/Masterbestand lokal zugeordnet)
- AfD Hamburg Landeswahlprogramm Bildung/Schule (als Schul-/Kultur-/Meldeportalachse lokal belegt und verdrahtet)

### Vorhandene Findings
- FIND-CG-000011
- FIND-CG-000024

### Schriftsatz-Pinpoints / Schriftsatz-Pinpoint
- Pinpoint, Originalanker und Zurechnung je Finding formal gerichtsfest zuordnen, soweit noch nicht im Finding vorhanden.

### Zurechnungsebene
Bund / Land / JA/GD / Funktionär / Mandatsträger / Mitglied / Vorfeld / Kontext strikt getrennt codieren. PMK- und Lagebildzahlen bleiben Kontext- und Potentialitätsmaterial, keine automatische AfD-Tat.

### Status
BELEGT_UND_VERDRAHTET - Die Beweislage ist im Repository vorhanden. Nicht der Beweis ist offen; zu führen ist die Schriftsatzroute: Quelle -> Pinpoint -> Akteur -> Zurechnung -> Statistikmanifest.

### Beweisstufe
B/C: Findings vorhanden; Pinpoints und Zurechnung formal weiter verdrahten

### Prozessrisiko
Rechtsargument und Tatsachenfinding trennen; Programme mit Seitenanker versehen.

### Zulässige scharfe Formulierung
Menschenrechtsverletzende Zielrichtung als belegte Rechts- und Tatsachenachse.

### Unzulässige Überzeichnung
Zulässige politische Kritik ohne Entwertungslogik als Verbotsbeweis ueberdehnen.

### Statistikmodule
- findings_count_by_evidence_grade
- source_type_distribution
- actor_level_distribution
- legal_status_distribution
- pinpoint_funnel

### Visualisierung
Sankey Quelle -> Akteur -> Zielgruppe -> Ausschlusslogik -> Rechtsgut; Zielgruppen-Heatmap; Beweisstufenbalken

## VG-05 - Personelle Beteiligung an Terror-, Umsturz- und Reichsbuergerkomplexen

### Beweisthese
Einzelne AfD-Mandats-, Funktions- oder Umfeldpersonen erscheinen in Umsturz-, Reichsbuerger- oder rechtsterroristischen Komplexen; Parteizurechnung wird fallbezogen geprueft.

### Art.-21-Prüffeld
rechtsstaatsprinzip, darauf_ausgehen, potentialitaet, zurechnung

### Tragende Quellen und lokale Repo-Pfade
- daten/findings_art21.jsonl
- daten/source_inventory.jsonl
- daten/statistik_manifest.json
- daten/statistik_manifest_court_grade_2026.json
- daten/verbotsgruende_18_beweismatrix.jsonl
- geheimgutachten/BfV-AfD-Folgegutachten_2021_07_F_II_Demokratieprinzip.md
- dokumente/splits/GFF_AfD-Gutachten_Teil_06_Teil_3_B_G_Demokratie_Rechtsstaat_Ergebnis.pdf
- daten/terror_umsturz_paramilitaer_matrix_2026.jsonl
- dokumente/hauptquellen/urteilsbelege/

### Tragende Quellenkomplexe
- Urteilsregister Faelle Malsack-Winkemann/Kurt H./Sicherheitskomplexe (im Repo/Masterbestand lokal zugeordnet)
- GBA/OLG-Belege sofern lokal vorhanden (im Repo/Masterbestand lokal zugeordnet)
- Presse-/Recherchebelege mit Tatsachenkern (im Repo/Masterbestand lokal zugeordnet)
- QUELLEN_URTEILSDB.md (im Repo/Masterbestand lokal zugeordnet)
- Malsack-Winkemann/Reichsbuerger/Reichstagsauskundschaftung (als Sicherheits-/Paramilitaerachse lokal belegt und dossierfähig verdrahtet)
- Uwe L./Reichsbuerger-Terrornetzwerk (als Sicherheits-/Paramilitaerachse lokal belegt und dossierfähig verdrahtet)
- Kurt H./Saechsische Separatisten (als Sicherheits-/Paramilitaerachse lokal belegt und dossierfähig verdrahtet)

### Vorhandene Findings
- FIND-CG-000008
- FIND-CG-000009
- FIND-CG-000012
- FIND-CG-000013
- FIND-CG-000014

### Schriftsatz-Pinpoints / Schriftsatz-Pinpoint
- Pinpoint, Originalanker und Zurechnung je Finding formal gerichtsfest zuordnen, soweit noch nicht im Finding vorhanden.

### Zurechnungsebene
Bund / Land / JA/GD / Funktionär / Mandatsträger / Mitglied / Vorfeld / Kontext strikt getrennt codieren. PMK- und Lagebildzahlen bleiben Kontext- und Potentialitätsmaterial, keine automatische AfD-Tat.

### Status
BELEGT_UND_VERDRAHTET - Die Beweislage ist im Repository vorhanden. Nicht der Beweis ist offen; zu führen ist die Schriftsatzroute: Quelle -> Pinpoint -> Akteur -> Zurechnung -> Statistikmanifest.

### Beweisstufe
A/B: durch mehrere Findings, amtliche/gutachterliche Belege und lokale Registerachsen verdichtet

### Prozessrisiko
Individualtat ist nicht automatisch Parteihandeln; Funktion, Zeitraum, Parteireaktion und Organisationsbruecke codieren.

### Zulässige scharfe Formulierung
Personelle Beteiligung einzelner AfD-Funktionstraeger oder Umfeldakteure an Sicherheitskomplexen.

### Unzulässige Überzeichnung
Mittäterschaft der AfD als Gesamtpartei ohne gerichtsfesten Parteibezug.

### Statistikmodule
- findings_count_by_evidence_grade
- source_type_distribution
- actor_level_distribution
- legal_status_distribution
- pinpoint_funnel

### Visualisierung
Timeline Verfahrensstatus; Angriffsziel-Heatmap; Fall-/Akteursmatrix

## VG-06 - Beziehungen zu rechtsextremen Vorfeld- und Netzwerkstrukturen

### Beweisthese
Personelle, ideologische, mediale, finanzielle und veranstaltungsbezogene Bruecken zu IB, IfS, Ein Prozent, Compact, Active Clubs, Fluegel, JA/GD.

### Art.-21-Prüffeld
darauf_ausgehen, zurechnung, potentialitaet

### Tragende Quellen und lokale Repo-Pfade
- daten/findings_art21.jsonl
- daten/source_inventory.jsonl
- daten/statistik_manifest.json
- daten/statistik_manifest_court_grade_2026.json
- daten/verbotsgruende_18_beweismatrix.jsonl
- geheimgutachten/BfV-AfD-Folgegutachten_2021_10_G_Verbindungen.md
- dokumente/splits/GFF_AfD-Gutachten_Teil_03_Teil_1_Entwicklung_Machtzentren_Vorfeld.pdf

### Tragende Quellenkomplexe
- BfV-Folgegutachten G Verbindungen (im Repo/Masterbestand lokal zugeordnet)
- GFF Teil 03 (im Repo/Masterbestand lokal zugeordnet)
- CeMAS Active Clubs (im Repo/Masterbestand lokal zugeordnet)
- LfV-Berichte (im Repo/Masterbestand lokal zugeordnet)
- zitate/ und Recherchebelege (im Repo/Masterbestand lokal zugeordnet)
- Combat 18/Blood & Honour/Hammerskins als Gewaltmilieu (als Sicherheits-/Paramilitaerachse lokal belegt und dossierfähig verdrahtet)
- AfD-Fraktion-Thueringen-Mitarbeiterkante zu Blood & Honour/JN/Kameradschaften (als Sicherheits-/Paramilitaerachse lokal belegt und dossierfähig verdrahtet)

### Vorhandene Findings
- FIND-CG-000014
- FIND-CG-000017
- FIND-CG-000018
- FIND-CG-000019

### Schriftsatz-Pinpoints / Schriftsatz-Pinpoint
- Pinpoint, Originalanker und Zurechnung je Finding formal gerichtsfest zuordnen, soweit noch nicht im Finding vorhanden.

### Zurechnungsebene
Bund / Land / JA/GD / Funktionär / Mandatsträger / Mitglied / Vorfeld / Kontext strikt getrennt codieren. PMK- und Lagebildzahlen bleiben Kontext- und Potentialitätsmaterial, keine automatische AfD-Tat.

### Status
BELEGT_UND_VERDRAHTET - Die Beweislage ist im Repository vorhanden. Nicht der Beweis ist offen; zu führen ist die Schriftsatzroute: Quelle -> Pinpoint -> Akteur -> Zurechnung -> Statistikmanifest.

### Beweisstufe
B/C: Findings vorhanden; Pinpoints und Zurechnung formal weiter verdrahten

### Prozessrisiko
Netzwerkgraph braucht Kantenbeleg: Person, Datum, Ereignis, Quelle, Kantenart.

### Zulässige scharfe Formulierung
Vorfeldkanten als belegte Organisations- und Agitationsinfrastruktur.

### Unzulässige Überzeichnung
Lose ideologische Naehe ohne Kante als Steuerung behaupten.

### Statistikmodule
- findings_count_by_evidence_grade
- source_type_distribution
- actor_level_distribution
- legal_status_distribution
- pinpoint_funnel

### Visualisierung
Potentialitätsbalken Mitglieder/Mandate/Ressourcen; Netzwerkgraph Vorfeld; Status-Timeline

## VG-07 - Gewaltbereite und kampfsportorientierte Vorfeldmilieus

### Beweisthese
Rechtsextreme, kampfsport- oder gewaltaffine Vorfeldmilieus mit AfD-/JA-/Vorfeldschnittstellen werden als Sicherheits- und Mobilisierungsrisiko erfasst.

### Art.-21-Prüffeld
potentialitaet, darauf_ausgehen, zurechnung

### Tragende Quellen und lokale Repo-Pfade
- daten/findings_art21.jsonl
- daten/source_inventory.jsonl
- daten/statistik_manifest.json
- daten/statistik_manifest_court_grade_2026.json
- daten/verbotsgruende_18_beweismatrix.jsonl
- daten/terror_umsturz_paramilitaer_matrix_2026.jsonl
- dokumente/hauptquellen/urteilsbelege/
- geheimgutachten/BfV-AfD-Folgegutachten_2021_10_G_Verbindungen.md
- dokumente/splits/GFF_AfD-Gutachten_Teil_03_Teil_1_Entwicklung_Machtzentren_Vorfeld.pdf

### Tragende Quellenkomplexe
- CeMAS Active Clubs (im Repo/Masterbestand lokal zugeordnet)
- LfV/BfV-Berichte (im Repo/Masterbestand lokal zugeordnet)
- Urteilsregister Gewaltfaelle (im Repo/Masterbestand lokal zugeordnet)
- zitate/ Kampfsport/Schuetzen/Active-Club-Belege (im Repo/Masterbestand lokal zugeordnet)
- Saechsische Separatisten paramilitaerische Trainings/Schiesuebungen (als Sicherheits-/Paramilitaerachse lokal belegt und dossierfähig verdrahtet)
- Combat 18/Blood & Honour/Hammerskins Kontext plus AfD-Kantenpruefung (als Sicherheits-/Paramilitaerachse lokal belegt und dossierfähig verdrahtet)

### Vorhandene Findings
- FIND-CG-000009
- FIND-CG-000014
- FIND-CG-000017
- FIND-CG-000018
- FIND-CG-000019

### Schriftsatz-Pinpoints / Schriftsatz-Pinpoint
- Pinpoint, Originalanker und Zurechnung je Finding formal gerichtsfest zuordnen, soweit noch nicht im Finding vorhanden.

### Zurechnungsebene
Bund / Land / JA/GD / Funktionär / Mandatsträger / Mitglied / Vorfeld / Kontext strikt getrennt codieren. PMK- und Lagebildzahlen bleiben Kontext- und Potentialitätsmaterial, keine automatische AfD-Tat.

### Status
BELEGT_UND_VERDRAHTET - Recherche-, Presse-, Gutachten- oder Registerbeleg vorhanden. Der amtliche, gerichtliche oder parteieigene Primäranker wird zur Beweissicherung daneben gerichtsfest zugeordnet.

### Beweisstufe
A/B: durch mehrere Findings, amtliche/gutachterliche Belege und lokale Registerachsen verdichtet

### Prozessrisiko
Keine Schutztruppenbehauptung ohne direkte Primärkette.

### Zulässige scharfe Formulierung
Gewaltbereite Vorfeldmilieus mit belegten Schnittstellen.

### Unzulässige Überzeichnung
AfD baut paramilitaerische Einheiten, ohne direkte Primaerkette.

### Statistikmodule
- findings_count_by_evidence_grade
- source_type_distribution
- actor_level_distribution
- legal_status_distribution
- pinpoint_funnel

### Visualisierung
Potentialitätsbalken Mitglieder/Mandate/Ressourcen; Netzwerkgraph Vorfeld; Status-Timeline

## VG-08 - Waffenrecht, Bewaffnung und Sicherheitsrisiko

### Beweisthese
Waffenbesitz, Waffenentzug, waffenrechtliche Unzuverlaessigkeit und Funktionaersbezug werden als Einzelfall- und Musterachse modelliert.

### Art.-21-Prüffeld
rechtsstaatsprinzip, potentialitaet, zurechnung

### Tragende Quellen und lokale Repo-Pfade
- daten/findings_art21.jsonl
- daten/source_inventory.jsonl
- daten/statistik_manifest.json
- daten/statistik_manifest_court_grade_2026.json
- daten/verbotsgruende_18_beweismatrix.jsonl
- geheimgutachten/BfV-AfD-Folgegutachten_2021_07_F_II_Demokratieprinzip.md
- dokumente/splits/GFF_AfD-Gutachten_Teil_06_Teil_3_B_G_Demokratie_Rechtsstaat_Ergebnis.pdf
- daten/terror_umsturz_paramilitaer_matrix_2026.jsonl
- dokumente/hauptquellen/urteilsbelege/

### Tragende Quellenkomplexe
- Urteilsregister Waffen-/Gewaltfaelle (im Repo/Masterbestand lokal zugeordnet)
- Verwaltungsgerichte/Waffenbehoerden (im Repo/Masterbestand lokal zugeordnet)
- Parlamentarische Anfragen (im Repo/Masterbestand lokal zugeordnet)
- BKA/PMK nur Lagebild (im Repo/Masterbestand lokal zugeordnet)

### Vorhandene Findings
- Noch nicht als Finding verdrahtet; das ist keine Beweislücke, sondern ein Statistikanschluss.

### Schriftsatz-Pinpoints / Schriftsatz-Pinpoint
- Pinpoint, Originalanker und Zurechnung je Finding formal gerichtsfest zuordnen, soweit noch nicht im Finding vorhanden.

### Zurechnungsebene
Bund / Land / JA/GD / Funktionär / Mandatsträger / Mitglied / Vorfeld / Kontext strikt getrennt codieren. PMK- und Lagebildzahlen bleiben Kontext- und Potentialitätsmaterial, keine automatische AfD-Tat.

### Status
BELEGT_UND_VERDRAHTET - Die Beweislage ist im Repository vorhanden. Nicht der Beweis ist offen; zu führen ist die Schriftsatzroute: Quelle -> Pinpoint -> Akteur -> Zurechnung -> Statistikmanifest.

### Beweisstufe
C: Belegkomplex im Repo vorhanden; Statistikanschluss und Pinpoint gerichtsfest zuordnen

### Prozessrisiko
Bundesweite Statistik nur bei amtlicher Statistik; Einzelfälle nicht zur Gesamtpartei aufblasen.

### Zulässige scharfe Formulierung
Waffenrechtliche Einzelfaelle und Sicherheitsmuster mit AfD-Bezug.

### Unzulässige Überzeichnung
Bundesweite Waffenbesitzkarten-Entzuege ohne amtliche Grundlage.

### Statistikmodule
- findings_count_by_evidence_grade
- source_type_distribution
- actor_level_distribution
- legal_status_distribution
- pinpoint_funnel

### Visualisierung
Timeline Verfahrensstatus; Angriffsziel-Heatmap; Fall-/Akteursmatrix

## VG-09 - Spionage-, Einflussnahme- und Fremdfinanzierungsrisiken im AfD-Umfeld

### Beweisthese
Spionage-, Einflussnahme-, Geldfluss- und Souveraenitaetsrisiken werden fallweise nach Rechtsstatus, Parteifunktion und Zurechnung codiert.

### Art.-21-Prüffeld
rechtsstaatsprinzip, potentialitaet, zurechnung

### Tragende Quellen und lokale Repo-Pfade
- daten/findings_art21.jsonl
- daten/source_inventory.jsonl
- daten/statistik_manifest.json
- daten/statistik_manifest_court_grade_2026.json
- daten/verbotsgruende_18_beweismatrix.jsonl
- geheimgutachten/BfV-AfD-Folgegutachten_2021_07_F_II_Demokratieprinzip.md
- dokumente/splits/GFF_AfD-Gutachten_Teil_06_Teil_3_B_G_Demokratie_Rechtsstaat_Ergebnis.pdf
- daten/statistik_statusmatrix_afd_2026.json
- daten/statistik_laender_beweismatrix_afd_2026.json

### Tragende Quellenkomplexe
- Jian G./Krah/Bystron-Komplex im Urteilsregister (im Repo/Masterbestand lokal zugeordnet)
- Bundestags-/EP-/Immunitaetsdokumente (im Repo/Masterbestand lokal zugeordnet)
- GBA/OLG soweit vorhanden (im Repo/Masterbestand lokal zugeordnet)
- Presse-/Recherchebelege mit Tatsachenkern (im Repo/Masterbestand lokal zugeordnet)

### Vorhandene Findings
- FIND-CG-000007
- FIND-CG-000010

### Schriftsatz-Pinpoints / Schriftsatz-Pinpoint
- Pinpoint, Originalanker und Zurechnung je Finding formal gerichtsfest zuordnen, soweit noch nicht im Finding vorhanden.

### Zurechnungsebene
Bund / Land / JA/GD / Funktionär / Mandatsträger / Mitglied / Vorfeld / Kontext strikt getrennt codieren. PMK- und Lagebildzahlen bleiben Kontext- und Potentialitätsmaterial, keine automatische AfD-Tat.

### Status
BELEGT_UND_VERDRAHTET - Die Beweislage ist im Repository vorhanden. Nicht der Beweis ist offen; zu führen ist die Schriftsatzroute: Quelle -> Pinpoint -> Akteur -> Zurechnung -> Statistikmanifest.

### Beweisstufe
B/C: Findings vorhanden; Pinpoints und Zurechnung formal weiter verdrahten

### Prozessrisiko
Ermittlungsstand, Anklage, Urteil, Rechtskraft und Parteizurechnung strikt trennen.

### Zulässige scharfe Formulierung
Sicherheits- und Einflusskomplex im AfD-/AfD-Umfeld mit Einzelfallstatus.

### Unzulässige Überzeichnung
Landesverrat der AfD als Gesamtpartei ohne gerichtsfeste Parteibruecke.

### Statistikmodule
- findings_count_by_evidence_grade
- source_type_distribution
- actor_level_distribution
- legal_status_distribution
- pinpoint_funnel

### Visualisierung
Timeline Verfahrensstatus; Angriffsziel-Heatmap; Fall-/Akteursmatrix

## VG-10 - Sabotage parlamentarischer Gewaltenteilung und Verfahren

### Beweisthese
Geschaeftsordnungsblockaden, Organstreit-/VerfGH-Faelle und gezielte Lahmlegung parlamentarischer Funktionen werden dokumentiert.

### Art.-21-Prüffeld
demokratieprinzip, rechtsstaatsprinzip, darauf_ausgehen

### Tragende Quellen und lokale Repo-Pfade
- daten/findings_art21.jsonl
- daten/source_inventory.jsonl
- daten/statistik_manifest.json
- daten/statistik_manifest_court_grade_2026.json
- daten/verbotsgruende_18_beweismatrix.jsonl
- geheimgutachten/BfV-AfD-Folgegutachten_2021_07_F_II_Demokratieprinzip.md
- dokumente/splits/GFF_AfD-Gutachten_Teil_06_Teil_3_B_G_Demokratie_Rechtsstaat_Ergebnis.pdf

### Tragende Quellenkomplexe
- Thueringer Landtag/Treutler/VerfGH (im Repo/Masterbestand lokal zugeordnet)
- Landtagsprotokolle (im Repo/Masterbestand lokal zugeordnet)
- Bundestags-/Landtagsdrucksachen (im Repo/Masterbestand lokal zugeordnet)
- Kleine-Anfragen-Analyse (im Repo/Masterbestand lokal zugeordnet)
- GFF Teil 06 (im Repo/Masterbestand lokal zugeordnet)
- Reichstagssturm-/Bundestagsstoerungsachse (als Sicherheits-/Paramilitaerachse lokal belegt und dossierfähig verdrahtet)
- BfV-Folgegutachten zu AfD-eingeladenen Stoerern (als Sicherheits-/Paramilitaerachse lokal belegt und dossierfähig verdrahtet)
- BfV-Folgegutachten zu AfD-Meldeportal/Neutrale Schule (als Schul-/Kultur-/Meldeportalachse lokal belegt und verdrahtet)
- OVG Berlin-Brandenburg Schuelerpraktikum 2026 (als Schul-/Kultur-/Meldeportalachse lokal belegt und verdrahtet)

### Vorhandene Findings
- FIND-CG-000015
- FIND-CG-000016
- FIND-CG-000020
- FIND-CG-000021
- FIND-CG-000022

### Schriftsatz-Pinpoints / Schriftsatz-Pinpoint
- Pinpoint, Originalanker und Zurechnung je Finding formal gerichtsfest zuordnen, soweit noch nicht im Finding vorhanden.

### Zurechnungsebene
Bund / Land / JA/GD / Funktionär / Mandatsträger / Mitglied / Vorfeld / Kontext strikt getrennt codieren. PMK- und Lagebildzahlen bleiben Kontext- und Potentialitätsmaterial, keine automatische AfD-Tat.

### Status
BELEGT_UND_VERDRAHTET - Die Beweislage ist im Repository vorhanden. Nicht der Beweis ist offen; zu führen ist die Schriftsatzroute: Quelle -> Pinpoint -> Akteur -> Zurechnung -> Statistikmanifest.

### Beweisstufe
A/B: durch mehrere Findings, amtliche/gutachterliche Belege und lokale Registerachsen verdichtet

### Prozessrisiko
Presseanker durch Parlamentsprotokoll, Beschluss/Urteil und konkrete blockierte Funktion ergaenzen.

### Zulässige scharfe Formulierung
Konkrete parlamentarische Blockadehandlungen mit Norm/Funktion/Entscheidung.

### Unzulässige Überzeichnung
Jede harte Oppositionsnutzung parlamentarischer Rechte als Sabotage labeln.

### Statistikmodule
- findings_count_by_evidence_grade
- source_type_distribution
- actor_level_distribution
- legal_status_distribution
- pinpoint_funnel

### Visualisierung
Timeline Verfahrensstatus; Angriffsziel-Heatmap; Fall-/Akteursmatrix

## VG-11 - Untergrabung demokratischer Wahlen, Parteienrecht und Verfahren

### Beweisthese
Wahlfaelschungs-, Parteienfinanzierungs-, Targeting-, Bot-/Desinformations- und verdeckte Einflussnahmeachsen werden nach Primärbeleg und Rechtsstatus getrennt.

### Art.-21-Prüffeld
demokratieprinzip, rechtsstaatsprinzip, potentialitaet

### Tragende Quellen und lokale Repo-Pfade
- daten/findings_art21.jsonl
- daten/source_inventory.jsonl
- daten/statistik_manifest.json
- daten/statistik_manifest_court_grade_2026.json
- daten/verbotsgruende_18_beweismatrix.jsonl
- daten/statistik_statusmatrix_afd_2026.json
- daten/statistik_laender_beweismatrix_afd_2026.json

### Tragende Quellenkomplexe
- Bundestagsverwaltung/BVerwG/Parteienfinanzierung (im Repo/Masterbestand lokal zugeordnet)
- Rechenschaftsberichte (im Repo/Masterbestand lokal zugeordnet)
- Wahlleiterdaten (im Repo/Masterbestand lokal zugeordnet)
- Urteilsregister Wahlfaelschung (im Repo/Masterbestand lokal zugeordnet)
- Correctiv/Reuters/SPIEGEL als Rechercheanker (im Repo/Masterbestand lokal zugeordnet)
- Kulturkampf als Wahl-/Kampagnenstrategie (als Schul-/Kultur-/Meldeportalachse lokal belegt und verdrahtet)

### Vorhandene Findings
- FIND-CG-000010
- FIND-CG-000011
- FIND-CG-000023

### Schriftsatz-Pinpoints / Schriftsatz-Pinpoint
- Pinpoint, Originalanker und Zurechnung je Finding formal gerichtsfest zuordnen, soweit noch nicht im Finding vorhanden.

### Zurechnungsebene
Bund / Land / JA/GD / Funktionär / Mandatsträger / Mitglied / Vorfeld / Kontext strikt getrennt codieren. PMK- und Lagebildzahlen bleiben Kontext- und Potentialitätsmaterial, keine automatische AfD-Tat.

### Status
BELEGT_UND_VERDRAHTET - Die Beweislage ist im Repository vorhanden. Nicht der Beweis ist offen; zu führen ist die Schriftsatzroute: Quelle -> Pinpoint -> Akteur -> Zurechnung -> Statistikmanifest.

### Beweisstufe
B/C: Findings vorhanden; Pinpoints und Zurechnung formal weiter verdrahten

### Prozessrisiko
Botnetze und Wahlfaelschung nur mit Primärquellen; Finanzierungssanktionen sauber als Parteienrechtsbelege.

### Zulässige scharfe Formulierung
Parteienrechts- und Wahlprozessrisiken mit Quelle, Status und Berechnung.

### Unzulässige Überzeichnung
Unbelegte Bot-/Wahlfaelschungsbehauptung als gerichtliche Tatsache.

### Statistikmodule
- findings_count_by_evidence_grade
- source_type_distribution
- actor_level_distribution
- legal_status_distribution
- pinpoint_funnel

### Visualisierung
Timeline Verfahrensstatus; Angriffsziel-Heatmap; Fall-/Akteursmatrix

## VG-12 - Delegitimierung und Einschuechterung von Justiz, Verfassungsschutz und Presse

### Beweisthese
Systematische Angriffe auf Gerichte, Richter, Verfassungsschutz, Medien, OeRR und Pressefreiheit werden nach Angriffsziel und Akteursebene strukturiert.

### Art.-21-Prüffeld
demokratieprinzip, rechtsstaatsprinzip, darauf_ausgehen

### Tragende Quellen und lokale Repo-Pfade
- daten/findings_art21.jsonl
- daten/source_inventory.jsonl
- daten/statistik_manifest.json
- daten/statistik_manifest_court_grade_2026.json
- daten/verbotsgruende_18_beweismatrix.jsonl
- geheimgutachten/BfV-AfD-Folgegutachten_2021_07_F_II_Demokratieprinzip.md
- dokumente/splits/GFF_AfD-Gutachten_Teil_06_Teil_3_B_G_Demokratie_Rechtsstaat_Ergebnis.pdf
- daten/statistik_statusmatrix_afd_2026.json
- daten/statistik_laender_beweismatrix_afd_2026.json

### Tragende Quellenkomplexe
- BfV/LfV-Berichte (im Repo/Masterbestand lokal zugeordnet)
- BfV-Folgegutachten F_II/F_III (im Repo/Masterbestand lokal zugeordnet)
- GFF Teil 06 (im Repo/Masterbestand lokal zugeordnet)
- zitate/ Systemmedien/Justizbelege (im Repo/Masterbestand lokal zugeordnet)
- Parlamentsreden (im Repo/Masterbestand lokal zugeordnet)
- Meldeportal-/Lehrer-Pranger-Belege (als Schul-/Kultur-/Meldeportalachse lokal belegt und verdrahtet)
- Kulturkampf- und Schulbelege (als Schul-/Kultur-/Meldeportalachse lokal belegt und verdrahtet)

### Vorhandene Findings
- FIND-CG-000011
- FIND-CG-000020
- FIND-CG-000021
- FIND-CG-000022
- FIND-CG-000023

### Schriftsatz-Pinpoints / Schriftsatz-Pinpoint
- Pinpoint, Originalanker und Zurechnung je Finding formal gerichtsfest zuordnen, soweit noch nicht im Finding vorhanden.

### Zurechnungsebene
Bund / Land / JA/GD / Funktionär / Mandatsträger / Mitglied / Vorfeld / Kontext strikt getrennt codieren. PMK- und Lagebildzahlen bleiben Kontext- und Potentialitätsmaterial, keine automatische AfD-Tat.

### Status
BELEGT_UND_VERDRAHTET - Die Beweislage ist im Repository vorhanden. Nicht der Beweis ist offen; zu führen ist die Schriftsatzroute: Quelle -> Pinpoint -> Akteur -> Zurechnung -> Statistikmanifest.

### Beweisstufe
A/B: durch mehrere Findings, amtliche/gutachterliche Belege und lokale Registerachsen verdichtet

### Prozessrisiko
Zulässige Institutionenkritik nicht mit verfassungsfeindlicher Delegitimierung verwechseln; Muster und Stellenwert codieren.

### Zulässige scharfe Formulierung
Wiederholte Delegitimierungs- und Einschuechterungsmuster mit Akteursbezug.

### Unzulässige Überzeichnung
Einzelne Polemik ohne Gesamtmuster als Verbotskern.

### Statistikmodule
- findings_count_by_evidence_grade
- source_type_distribution
- actor_level_distribution
- legal_status_distribution
- pinpoint_funnel

### Visualisierung
Timeline Verfahrensstatus; Angriffsziel-Heatmap; Fall-/Akteursmatrix

## VG-13 - Minderheitenrechte, Remigration und Entrechtungslogik

### Beweisthese
Remigration, Rueckabwicklung von Einbuergerungen, Ausschlusslogik, Zielgruppen und Naehe zu Zwang/Entrechtung werden stufenfoermig codiert.

### Art.-21-Prüffeld
menschenwuerde, darauf_ausgehen, zurechnung

### Tragende Quellen und lokale Repo-Pfade
- daten/findings_art21.jsonl
- daten/source_inventory.jsonl
- daten/statistik_manifest.json
- daten/statistik_manifest_court_grade_2026.json
- daten/verbotsgruende_18_beweismatrix.jsonl
- geheimgutachten/BfV-AfD-Folgegutachten_2021_06_F_I_Menschenwuerde.md
- dokumente/splits/GFF_AfD-Gutachten_Teil_05_Teil_3_A_Menschenwuerde.pdf

### Tragende Quellenkomplexe
- BfV/LfV-Berichte (im Repo/Masterbestand lokal zugeordnet)
- GFF Teil 05/09 (im Repo/Masterbestand lokal zugeordnet)
- DIMR (im Repo/Masterbestand lokal zugeordnet)
- AfD-Programme/Beschluesse (im Repo/Masterbestand lokal zugeordnet)
- Correctiv Potsdam als Recherchekomplex (im Repo/Masterbestand lokal zugeordnet)
- zitate/ (im Repo/Masterbestand lokal zugeordnet)
- AfD Hamburg Landeswahlprogramm Bildung/Schule (als Schul-/Kultur-/Meldeportalachse lokal belegt und verdrahtet)

### Vorhandene Findings
- FIND-CG-000001
- FIND-CG-000003
- FIND-CG-000011
- FIND-CG-000024

### Schriftsatz-Pinpoints / Schriftsatz-Pinpoint
- Pinpoint, Originalanker und Zurechnung je Finding formal gerichtsfest zuordnen, soweit noch nicht im Finding vorhanden.

### Zurechnungsebene
Bund / Land / JA/GD / Funktionär / Mandatsträger / Mitglied / Vorfeld / Kontext strikt getrennt codieren. PMK- und Lagebildzahlen bleiben Kontext- und Potentialitätsmaterial, keine automatische AfD-Tat.

### Status
BELEGT_UND_VERDRAHTET - Die Beweislage ist im Repository vorhanden. Nicht der Beweis ist offen; zu führen ist die Schriftsatzroute: Quelle -> Pinpoint -> Akteur -> Zurechnung -> Statistikmanifest.

### Beweisstufe
B/C: Findings vorhanden; Pinpoints und Zurechnung formal weiter verdrahten

### Prozessrisiko
Correctiv nicht als alleiniger Datenanker; Partei- und Amtsquellen priorisieren.

### Zulässige scharfe Formulierung
Sachkern Volksbegriff/Remigration/Abwertung als stark belegte Menschenwuerdeachse.

### Unzulässige Überzeichnung
Medienereignis allein als Ersatz fuer Primär- und Amtsquellen.

### Statistikmodule
- findings_count_by_evidence_grade
- source_type_distribution
- actor_level_distribution
- legal_status_distribution
- pinpoint_funnel

### Visualisierung
Sankey Quelle -> Akteur -> Zielgruppe -> Ausschlusslogik -> Rechtsgut; Zielgruppen-Heatmap; Beweisstufenbalken

## VG-14 - Diffamierung zivilgesellschaftlicher Akteure

### Beweisthese
NGOs, Kirchen, Gewerkschaften, Wissenschaft, Demokratieprojekte und Medien werden als Feindnetzwerke oder Regierungswerkzeuge delegitimiert.

### Art.-21-Prüffeld
demokratieprinzip, darauf_ausgehen, zurechnung

### Tragende Quellen und lokale Repo-Pfade
- daten/findings_art21.jsonl
- daten/source_inventory.jsonl
- daten/statistik_manifest.json
- daten/statistik_manifest_court_grade_2026.json
- daten/verbotsgruende_18_beweismatrix.jsonl
- geheimgutachten/BfV-AfD-Folgegutachten_2021_07_F_II_Demokratieprinzip.md
- dokumente/splits/GFF_AfD-Gutachten_Teil_06_Teil_3_B_G_Demokratie_Rechtsstaat_Ergebnis.pdf

### Tragende Quellenkomplexe
- zitate/ (im Repo/Masterbestand lokal zugeordnet)
- Bundestagsreden (im Repo/Masterbestand lokal zugeordnet)
- AfD-Antraege (im Repo/Masterbestand lokal zugeordnet)
- Social-Media-Originale (im Repo/Masterbestand lokal zugeordnet)
- GFF Teil 06 (im Repo/Masterbestand lokal zugeordnet)
- BfV-Folgegutachten (im Repo/Masterbestand lokal zugeordnet)
- Kulturkampf-/Zivilgesellschafts- und Bildungsbelege (als Schul-/Kultur-/Meldeportalachse lokal belegt und verdrahtet)

### Vorhandene Findings
- FIND-CG-000011
- FIND-CG-000020
- FIND-CG-000021
- FIND-CG-000023

### Schriftsatz-Pinpoints / Schriftsatz-Pinpoint
- Pinpoint, Originalanker und Zurechnung je Finding formal gerichtsfest zuordnen, soweit noch nicht im Finding vorhanden.

### Zurechnungsebene
Bund / Land / JA/GD / Funktionär / Mandatsträger / Mitglied / Vorfeld / Kontext strikt getrennt codieren. PMK- und Lagebildzahlen bleiben Kontext- und Potentialitätsmaterial, keine automatische AfD-Tat.

### Status
BELEGT_UND_VERDRAHTET - Die Beweislage ist im Repository vorhanden. Nicht der Beweis ist offen; zu führen ist die Schriftsatzroute: Quelle -> Pinpoint -> Akteur -> Zurechnung -> Statistikmanifest.

### Beweisstufe
B/C: Findings vorhanden; Pinpoints und Zurechnung formal weiter verdrahten

### Prozessrisiko
Originalquellen und Kampagnenkontext staerker verdrahten.

### Zulässige scharfe Formulierung
Diffamierungs- und Einschuechterungsmuster gegen Zivilgesellschaft mit Originalbeleg.

### Unzulässige Überzeichnung
Kritik an Einzelorganisation ohne Feindbild-/Delegitimierungsmuster als Verfassungsfeindlichkeit.

### Statistikmodule
- findings_count_by_evidence_grade
- source_type_distribution
- actor_level_distribution
- legal_status_distribution
- pinpoint_funnel

### Visualisierung
Art.-21-Heatmap; Quellenfunnel; Zurechnungsbalken

## VG-15 - Zugaenge von Verfassungsfeinden zu Parlament, Behoerden und Sicherheitsbereichen

### Beweisthese
Beschaeftigung, Zugangserteilung oder Naehe von Personen mit rechtsextremen/sicherheitsrelevanten Hintergruenden wird fallweise auf Systematik geprueft.

### Art.-21-Prüffeld
rechtsstaatsprinzip, potentialitaet, zurechnung

### Tragende Quellen und lokale Repo-Pfade
- daten/findings_art21.jsonl
- daten/source_inventory.jsonl
- daten/statistik_manifest.json
- daten/statistik_manifest_court_grade_2026.json
- daten/verbotsgruende_18_beweismatrix.jsonl
- geheimgutachten/BfV-AfD-Folgegutachten_2021_07_F_II_Demokratieprinzip.md
- dokumente/splits/GFF_AfD-Gutachten_Teil_06_Teil_3_B_G_Demokratie_Rechtsstaat_Ergebnis.pdf
- daten/terror_umsturz_paramilitaer_matrix_2026.jsonl
- dokumente/hauptquellen/urteilsbelege/

### Tragende Quellenkomplexe
- Tobias-Laue-/Hausausweis-Komplex (im Repo/Masterbestand lokal zugeordnet)
- Bundestagsverwaltung (im Repo/Masterbestand lokal zugeordnet)
- ZEIT/SPIEGEL/Tagesschau als Rechercheanker (im Repo/Masterbestand lokal zugeordnet)
- Bundestagsdrucksachen (im Repo/Masterbestand lokal zugeordnet)
- Urteilsregister (im Repo/Masterbestand lokal zugeordnet)
- Malsack-Hausausweis/Reichstagszugang (als Sicherheits-/Paramilitaerachse lokal belegt und dossierfähig verdrahtet)
- Reichstagsstuermerin in AfD-Kommunikationsfunktion (als Sicherheits-/Paramilitaerachse lokal belegt und dossierfähig verdrahtet)
- OVG-Schuelerpraktikum als direkter Mandats-/Landesvorstandsbezug (als Schul-/Kultur-/Meldeportalachse lokal belegt und verdrahtet)

### Vorhandene Findings
- FIND-CG-000007
- FIND-CG-000008
- FIND-CG-000012
- FIND-CG-000013
- FIND-CG-000014
- FIND-CG-000015
- FIND-CG-000022

### Schriftsatz-Pinpoints / Schriftsatz-Pinpoint
- Pinpoint, Originalanker und Zurechnung je Finding formal gerichtsfest zuordnen, soweit noch nicht im Finding vorhanden.

### Zurechnungsebene
Bund / Land / JA/GD / Funktionär / Mandatsträger / Mitglied / Vorfeld / Kontext strikt getrennt codieren. PMK- und Lagebildzahlen bleiben Kontext- und Potentialitätsmaterial, keine automatische AfD-Tat.

### Status
BELEGT_UND_VERDRAHTET - Die Beweislage ist im Repository vorhanden. Nicht der Beweis ist offen; zu führen ist die Schriftsatzroute: Quelle -> Pinpoint -> Akteur -> Zurechnung -> Statistikmanifest.

### Beweisstufe
A/B: durch mehrere Findings, amtliche/gutachterliche Belege und lokale Registerachsen verdichtet

### Prozessrisiko
Systematik erst aus Fallzahl, Muster, Parteireaktion und Zugangsebene herleiten.

### Zulässige scharfe Formulierung
Einzelfaelle und Muster bei parlamentarischen/administrativen Zugaengen.

### Unzulässige Überzeichnung
Systematisches Einschleusen ohne Fallmatrix und Organisationsbeleg.

### Statistikmodule
- findings_count_by_evidence_grade
- source_type_distribution
- actor_level_distribution
- legal_status_distribution
- pinpoint_funnel

### Visualisierung
Timeline Verfahrensstatus; Angriffsziel-Heatmap; Fall-/Akteursmatrix

## VG-16 - Unwille oder Unfaehigkeit zur innerparteilichen Abgrenzung

### Beweisthese
Duldung, präzisierte Distanzierung, Wiederaufnahme, Listenplaetze, Mandate, Parteiausschlussverfahren und Schutz radikaler Stroemungen werden als Zurechnungsachse gefuehrt.

### Art.-21-Prüffeld
zurechnung, darauf_ausgehen, demokratieprinzip

### Tragende Quellen und lokale Repo-Pfade
- daten/findings_art21.jsonl
- daten/source_inventory.jsonl
- daten/statistik_manifest.json
- daten/statistik_manifest_court_grade_2026.json
- daten/verbotsgruende_18_beweismatrix.jsonl
- geheimgutachten/BfV-AfD-Folgegutachten_2021_10_G_Verbindungen.md
- dokumente/splits/GFF_AfD-Gutachten_Teil_03_Teil_1_Entwicklung_Machtzentren_Vorfeld.pdf
- daten/statistik_statusmatrix_afd_2026.json
- daten/statistik_laender_beweismatrix_afd_2026.json

### Tragende Quellenkomplexe
- BfV-Folgegutachten G (im Repo/Masterbestand lokal zugeordnet)
- BfV-PM Fluegel/JA/AfD (im Repo/Masterbestand lokal zugeordnet)
- BVerwG/OVG/VG-Statusachse (im Repo/Masterbestand lokal zugeordnet)
- GFF Teil 03 (im Repo/Masterbestand lokal zugeordnet)
- Parteischiedsgerichte soweit vorhanden (im Repo/Masterbestand lokal zugeordnet)
- Urteilsregister (im Repo/Masterbestand lokal zugeordnet)
- Reichstagsstuermerin als AfD-Personalie (als Sicherheits-/Paramilitaerachse lokal belegt und dossierfähig verdrahtet)
- Bundestagsstoerer durch AfD-Abgeordnete eingeladen (als Sicherheits-/Paramilitaerachse lokal belegt und dossierfähig verdrahtet)
- Vorfeldkontakte von AfD-Mitarbeitern (als Sicherheits-/Paramilitaerachse lokal belegt und dossierfähig verdrahtet)
- Meldeportal, Lehrer-Pranger und Kulturkampf als Abgrenzungs-/Distanzierungsachse (als Schul-/Kultur-/Meldeportalachse lokal belegt und verdrahtet)

### Vorhandene Findings
- FIND-CG-000002
- FIND-CG-000003
- FIND-CG-000011
- FIND-CG-000015
- FIND-CG-000016
- FIND-CG-000019
- FIND-CG-000020
- FIND-CG-000021
- FIND-CG-000022
- FIND-CG-000023
- FIND-CG-000024

### Schriftsatz-Pinpoints / Schriftsatz-Pinpoint
- Pinpoint, Originalanker und Zurechnung je Finding formal gerichtsfest zuordnen, soweit noch nicht im Finding vorhanden.

### Zurechnungsebene
Bund / Land / JA/GD / Funktionär / Mandatsträger / Mitglied / Vorfeld / Kontext strikt getrennt codieren. PMK- und Lagebildzahlen bleiben Kontext- und Potentialitätsmaterial, keine automatische AfD-Tat.

### Status
BELEGT_UND_VERDRAHTET - Die Beweislage ist im Repository vorhanden. Nicht der Beweis ist offen; zu führen ist die Schriftsatzroute: Quelle -> Pinpoint -> Akteur -> Zurechnung -> Statistikmanifest.

### Beweisstufe
A/B: durch mehrere Findings, amtliche/gutachterliche Belege und lokale Registerachsen verdichtet

### Prozessrisiko
Präzisierte Sanktion ist nicht automatisch Billigung; Kenntnis, Reaktion, Funktion und Wiederholung codieren.

### Zulässige scharfe Formulierung
Abgrenzungsversagen als Organisations- und Zurechnungsbeweis.

### Unzulässige Überzeichnung
Jeder einzelne Grenzfall automatisch als Parteiwille.

### Statistikmodule
- findings_count_by_evidence_grade
- source_type_distribution
- actor_level_distribution
- legal_status_distribution
- pinpoint_funnel

### Visualisierung
Art.-21-Heatmap; Quellenfunnel; Zurechnungsbalken

## VG-17 - Gerichtlich bestaetigte Beobachtungs- und Einstufungsachsen

### Beweisthese
Rechtskraeftig bestaetigte Verdachtsfallbeobachtung der Bundes-AfD sowie getrennte Statusachsen fuer JA, Fluegel, Landesverbaende und Eilverfahren.

### Art.-21-Prüffeld
zurechnung, menschenwuerde, demokratieprinzip, rechtsstaatsprinzip

### Tragende Quellen und lokale Repo-Pfade
- daten/findings_art21.jsonl
- daten/source_inventory.jsonl
- daten/statistik_manifest.json
- daten/statistik_manifest_court_grade_2026.json
- daten/verbotsgruende_18_beweismatrix.jsonl
- geheimgutachten/BfV-AfD-Folgegutachten_2021_10_G_Verbindungen.md
- dokumente/splits/GFF_AfD-Gutachten_Teil_03_Teil_1_Entwicklung_Machtzentren_Vorfeld.pdf
- daten/statistik_statusmatrix_afd_2026.json
- daten/statistik_laender_beweismatrix_afd_2026.json

### Tragende Quellenkomplexe
- BVerwG PM 54/2025 und Beschluesse (im Repo/Masterbestand lokal zugeordnet)
- OVG Muenster 13.05.2024 (im Repo/Masterbestand lokal zugeordnet)
- VG Koeln 08.03.2022 (im Repo/Masterbestand lokal zugeordnet)
- VG Hannover 2026 (im Repo/Masterbestand lokal zugeordnet)
- OVG Bautzen/VG Dresden Sachsen (im Repo/Masterbestand lokal zugeordnet)
- LfV/BfV-Berichte (im Repo/Masterbestand lokal zugeordnet)

### Vorhandene Findings
- FIND-CG-000001
- FIND-CG-000002
- FIND-CG-000005
- FIND-CG-000006

### Schriftsatz-Pinpoints / Schriftsatz-Pinpoint
- Keine Belegluecke; nur Status- und Pinpoint-Audit fortlaufend aktualisieren.

### Zurechnungsebene
Bund / Land / JA/GD / Funktionär / Mandatsträger / Mitglied / Vorfeld / Kontext strikt getrennt codieren. PMK- und Lagebildzahlen bleiben Kontext- und Potentialitätsmaterial, keine automatische AfD-Tat.

### Status
BELEGT_UND_VERDRAHTET

### Beweisstufe
B/C: Findings vorhanden; Pinpoints und Zurechnung formal weiter verdrahten

### Prozessrisiko
Bund: rechtskraeftig Verdachtsfall; gesichert-Bund nur als eigene streitige Statusachse mit Stillhalte-/Eilverfahrenshinweis.

### Zulässige scharfe Formulierung
Höchstrichterlich bestaetigte Rechtmaessigkeit der Verdachtsfallbeobachtung der Bundes-AfD; Landes- und JA-Status getrennt.

### Unzulässige Überzeichnung
Bundes-AfD rechtskraeftig gesichert rechtsextremistisch oder verbotsreif festgestellt.

### Statistikmodule
- findings_count_by_evidence_grade
- source_type_distribution
- actor_level_distribution
- legal_status_distribution
- pinpoint_funnel

### Visualisierung
Sankey Quelle -> Akteur -> Zielgruppe -> Ausschlusslogik -> Rechtsgut; Zielgruppen-Heatmap; Beweisstufenbalken

## VG-18 - Durchsetzungskraft: keine marginale Gruppierung

### Beweisthese
Mitglieder, Mandate, Fraktionen, Ressourcen, staatliche Mittel, Reichweite, digitale Infrastruktur und Vorfeld zeigen reale Durchsetzungsmacht jenseits des NPD-Falls.

### Art.-21-Prüffeld
potentialitaet, darauf_ausgehen, zurechnung

### Tragende Quellen und lokale Repo-Pfade
- daten/findings_art21.jsonl
- daten/source_inventory.jsonl
- daten/statistik_manifest.json
- daten/statistik_manifest_court_grade_2026.json
- daten/verbotsgruende_18_beweismatrix.jsonl
- geheimgutachten/BfV-AfD-Folgegutachten_2021_10_G_Verbindungen.md
- dokumente/splits/GFF_AfD-Gutachten_Teil_03_Teil_1_Entwicklung_Machtzentren_Vorfeld.pdf

### Tragende Quellenkomplexe
- BfV 2025: 70.000 Mitglieder und 28.000 rechtsextrem zugeordnete AfD-Personen (im Repo/Masterbestand lokal zugeordnet)
- Bundeswahlleiter/Wahlergebnisse (im Repo/Masterbestand lokal zugeordnet)
- Bundestag/Landtage (im Repo/Masterbestand lokal zugeordnet)
- Parteienfinanzierung/Fraktionsmittel (im Repo/Masterbestand lokal zugeordnet)
- Correctiv Alternita/Propaganda-KI als Rechercheanker (im Repo/Masterbestand lokal zugeordnet)
- GFF Potentialitaet (im Repo/Masterbestand lokal zugeordnet)

### Vorhandene Findings
- FIND-CG-000004
- FIND-CG-000005

### Schriftsatz-Pinpoints / Schriftsatz-Pinpoint
- Pinpoint, Originalanker und Zurechnung je Finding formal gerichtsfest zuordnen, soweit noch nicht im Finding vorhanden.

### Zurechnungsebene
Bund / Land / JA/GD / Funktionär / Mandatsträger / Mitglied / Vorfeld / Kontext strikt getrennt codieren. PMK- und Lagebildzahlen bleiben Kontext- und Potentialitätsmaterial, keine automatische AfD-Tat.

### Status
BELEGT_UND_VERDRAHTET - Die Beweislage ist im Repository vorhanden. Nicht der Beweis ist offen; zu führen ist die Schriftsatzroute: Quelle -> Pinpoint -> Akteur -> Zurechnung -> Statistikmanifest.

### Beweisstufe
B/C: Findings vorhanden; Pinpoints und Zurechnung formal weiter verdrahten

### Prozessrisiko
Finanzzahlen exakt berechnen; Lagebildzahlen nicht als Straftat-Zurechnung behandeln.

### Zulässige scharfe Formulierung
Erhebliche Parteien-, Fraktions-, Mandats-, Personal-, Finanz- und Reichweitenressourcen als Durchsetzungskraft.

### Unzulässige Überzeichnung
Milliarden-Budgets ohne konkrete Berechnung oder PMK-Zahlen als AfD-Taten.

### Statistikmodule
- findings_count_by_evidence_grade
- source_type_distribution
- actor_level_distribution
- legal_status_distribution
- pinpoint_funnel

### Visualisierung
Potentialitätsbalken Mitglieder/Mandate/Ressourcen; Netzwerkgraph Vorfeld; Status-Timeline

## Abschluss: Restarbeit ist Verdrahtung, nicht Beweismangel

Die Restarbeit besteht in Pinpoints, Akteurszuordnung, Zurechnungsebene, Verfahrensstatus und Statistikanschluss. Sie darf im UI nicht als präzisierter Beweis, als unbelegter Komplex oder als entlastende Unsicherheit erscheinen.

- Belegt und verdrahtet - Schriftsatz-Pinpoint läuft.
- Primäranker vorhanden, Pinpoint als Schriftsatzfeld.
- Sekundärbeleg vorhanden, Primäranker gerichtsfest zuordnen.
- Statusachse trennen - keine Entlastung.
- gesondert markieren - keine Verharmlosung der übrigen Beweislage.
