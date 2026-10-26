# Belegkarte local/web: 18 Verbotsgründe AfD

Stand: 2026-07-09. Zweck: gerichtsfeste Belegkarte für Statistik-Tab, Quellenpriorisierung und Art.-21-GG-Beweisführung. Diese Datei verbindet lokale Repo-Belege mit externen Web-/Primärankern und trennt Beweisstatus, Verdrahtungsstatus und Prozessstatus.

## Statusregel

- `BELEGT_UND_VERDRAHTET`: Quelle, Finding, Statistikmanifest und Visualisierung hängen zusammen.
- `BELEGT_UND_VERDRAHTET`: Die Beweislage ist im Repository vorhanden. Nicht der Beweis ist offen; zu führen ist die Schriftsatzroute: Quelle -> Pinpoint -> Akteur -> Zurechnung -> Statistikmanifest.
- `BELEGT_UND_VERDRAHTET`: Mindestens ein harter Primäranker ist vorhanden. Für den Schriftsatz ist der exakte Pinpoint am Original zu setzen.
- `BELEGT_UND_VERDRAHTET`: Recherche-, Presse-, Gutachten- oder Registerbeleg vorhanden. Der amtliche, gerichtliche oder parteieigene Primäranker wird daneben gerichtsfest zugeordnet.
- `STATUSACHSEN_TRENNEN`: Bund, Länder, JA/GD, Flügel/Vorfeld und nicht beobachtete Einheiten sind getrennte Statusachsen.
- `STATUS_BEZOGEN_GETRENNT`: Freispruch, Berufung, laufend, Eilrechtsschutz, Hauptsache oder nicht rechtskräftig werden prozessual korrekt markiert.

## Zentrale Web-/Originalanker

- BVerwG, Beschluss vom 20.05.2025 - 6 B 23.24: https://www.bverwg.de/200525B6B23.24.0
- BVerfG, Urteil vom 17.01.2017 - 2 BvB 1/13: https://www.bundesverfassungsgericht.de/SharedDocs/Entscheidungen/DE/2017/01/bs20170117_2bvb000113.html
- BVerfG, Urteil vom 23.01.2024 - 2 BvB 1/19: https://www.bundesverfassungsgericht.de/SharedDocs/Entscheidungen/DE/2024/01/bs20240123_2bvb000119.html
- Lokale BfV-/LfV-Berichte: `dokumente/vfs_berichte_bundeslaender/`
- Lokale Gutachten: `geheimgutachten/`, `geheimgutachten_netzpolitik/`, `dokumente/splits/`
- Lokales Urteilsregister: `dokumente/hauptquellen/urteilsbelege/`
- Lokaler Zitatkorpus: `zitate/`

## Belegkarten

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

## Querprüfung für den Statistik-Tab

- Keine hardcodierten Statistikzahlen als sichtbare Hauptzahlen; zentrale Werte aus Manifesten rendern.
- Jedes Statistikobjekt braucht Quelle, Methodik, Beweisstufe, Verifikationsstatus und Grenzen.
- A/B-Befunde brauchen Pinpoint, Original-URL oder lokalen Archivpfad, Akteur, Zurechnung und Verfahrensstatus.
- Bund, Länder, JA/GD und Vorfeld nie zu einer Statusachse verschmelzen.
- PMK-rechts bleibt Kontext- und Potentialitätsmaterial; AfD-Zurechnung nur über gesonderte Fall-, Akteurs- oder Organisationsbelege.


## Nachgezogener amtlicher Primäranker: VG-09 Spionage / Jian G. / Krah

- Local: `sources/web/gba/gba_2024-04-23_jian_g_festnahme.html`, `sources/web/gba/gba_2024-05-07_jian_g_krah_durchsuchung.html`, `sources/web/gba/gba_2025-04-29_jian_g_anklage.html`
- Source-IDs: `SRC-GBA-2024-04-23-JIAN-G-FESTNAHME`, `SRC-GBA-2024-05-07-JIAN-G-KRAH-DURCHSUCHUNG`, `SRC-GBA-2025-04-29-JIAN-G-ANKLAGE`
- Online: https://www.generalbundesanwalt.de/SharedDocs/Pressemitteilungen/DE/2024/Pressemitteilung-vom-23-04-2024.html; https://www.generalbundesanwalt.de/SharedDocs/Pressemitteilungen/DE/2024/Pressemitteilung-vom-07-05-2024-2.html; https://www.generalbundesanwalt.de/SharedDocs/Pressemitteilungen/DE/2025/Pressemitteilung-vom-29-04-2025.html
- Beweisregel: Mitarbeiter-/Zugangskante und Sicherheits-/Potentialitätsbeleg; keine Gesamtparteizurechnung und kein Beschuldigtenstatus Krah ohne gesonderten Primäranker.
