# Beweissicherung fuer den Statistik-Tab 2026

Stand: 2026-07-09. Dieser Vermerk geht den Statistik-Tab als Beweislandkarte durch. Er unterscheidet harte Beweise, Stuetzbeweise, Risikofelder und konkrete Belegarbeit.

## Massstab

Der Tab soll wie eine staatsanwaltschaftliche Beweisuebersicht vor dem Bundesverfassungsgericht funktionieren: Jede Visualisierung braucht Aussage, Quelle, Fundstelle, Rechtsgut, Zurechnung und Verfahrensstatus. Nicht jede Zahl ist ein Verbotsbeweis; manche Zahlen sind Lagebild, Risikofeld oder konkret verlinkte Belegarbeit.

## Gesicherte Webanker

- BVerwG 6 B 23.24, Beschluss vom 20.05.2025: https://www.bverwg.de/200525B6B23.24.0  \n  Beweisfunktion: Bundes-AfD Verdachtsfall rechtskraeftig; Statusanker fuer Einstufungsstatistik
- BVerfG NPD II, 2 BvB 1/13, Urteil vom 17.01.2017: https://www.bundesverfassungsgericht.de/SharedDocs/Entscheidungen/DE/2017/01/bs20170117_2bvb000113.html  \n  Beweisfunktion: Massstab Art. 21: Menschenwuerde, Demokratieprinzip, Potentialitaet, Darauf-Ausgehen
- BVerfG Finanzierungsausschluss NPD/Die Heimat, 2 BvB 1/19, Urteil vom 23.01.2024: https://www.bundesverfassungsgericht.de/SharedDocs/Entscheidungen/DE/2024/01/bs20240123_2bvb000119.html  \n  Beweisfunktion: Parteienfinanzierung/Finanzierungsausschluss als getrennte Sanktions- und Rechtsfolgenachse
- AP: Jian Guo charged with spying for China: https://apnews.com/article/18b6c38a882028e258b1f890f72c5a6c  \n  Beweisfunktion: Sekundaerer Webanker fuer Spionagekomplex; amtliche GBA-/OLG-Quelle weiter priorisieren
- FT: AfD official among arrested Saxon Separatists: https://www.ft.com/content/70528d00-e83e-49c2-a566-5309bd8eda71  \n  Beweisfunktion: Sekundaerer Webanker fuer Kurt H./Sicherheitskomplex; amtliche GBA-/OLG-Quelle weiter priorisieren

## Beweiscluster

### GFF-Korpus und Methodik

- Gewichtung: hart fuer Methodik
- Rechtsachse: Beweisnaehe/Zurechnung
- Aussage: Das GFF-Gutachten wertet nicht Einzelzitate isoliert, sondern Programme, Parlamentsdokumente, Pressemitteilungen, Social Media, Interviews und Funktionaersaeusserungen als Gesamtbild aus. Damit ist die Statistik rechtlich als Beweiskette aufzubauen: Quelle -> Akteur -> Ebene -> Rechtsgut -> Zurechnung.
- Diagramm: Quellenfunnel und Sankey Quelle -> Beweisfunktion
- Verfahrens- und Pinpoint-/Statusfeld: Originalexporte der 54.972 Pressemitteilungen als maschinenlesbarer Korpus, falls nicht bereits extern gesichert.
- Zahlenanker:
  - Pressemitteilungen im GFF-Datenbestand: 54972
  - Landesverbaende im PM-Korpus: 16
- Lokale Belege:
  - `dokumente/ki_markdown/dokumente/splits/GFF_AfD-Gutachten_Teil_02_Einfuehrung.md:1078`
  - `dokumente/ki_markdown/dokumente/splits/GFF_AfD-Gutachten_Teil_02_Einfuehrung.md:1292`
  - `dokumente/ki_markdown/dokumente/splits/GFF_AfD-Gutachten_Teil_02_Einfuehrung.md:1637`

### Menschenwuerde, Volksbegriff, Remigration

- Gewichtung: Kernbeweis
- Rechtsachse: Art. 21 / Menschenwuerde / Diskriminierungsverbot
- Aussage: GFF, BfV und LfV beschreiben die zentrale Linie nicht als normale Migrationspolitik, sondern als ethnisch-kulturelles Volksverstaendnis, Remigrationslogik und Abwertung von Menschen mit Migrationsgeschichte, Muslimen und weiteren Gruppen.
- Diagramm: Heatmap Zielgruppe x Rechtsgut; Sankey Remigration -> Zielgruppe -> Menschenwuerde
- Verfahrens- und Pinpoint-/Statusfeld: Primaere AfD-Programme, Beschluesse und offizielle Posts fuer jeden starken Befund direkt verlinken.
- Zahlenanker:
  - Art.-21-Findings gesamt: 3703
  - Zitatkorpus: 3611
- Lokale Belege:
  - `dokumente/ki_markdown/dokumente/splits/GFF_AfD-Gutachten_Teil_05_Teil_3_A_Menschenwuerde.md`
  - `geheimgutachten/BfV-AfD-Folgegutachten_2021_06_F_I_Menschenwuerde.txt`
  - `dokumente/vfs_berichte_bundeslaender/LfV_Rheinland_Pfalz_Verfassungsschutzbericht_2024_full.txt:286`
  - `daten/findings_art21.jsonl`

### Einstufungsstatus Bund/Laender/JA/GD

- Gewichtung: hart, aber verfahrenssensibel
- Rechtsachse: Status/Beweisqualitaet
- Aussage: Die Bundes-AfD ist rechtskraeftig als Verdachtsfall bestaetigt. Gesichert/erwiesen ist nur dort als harte Achse zu fuehren, wo Land/JA/GD und Verfahrensstand dies tragen; Bund-gesichert bleibt getrennt und darf nicht als rechtskraeftige Hauptsache dargestellt werden.
- Diagramm: Deutschlandmatrix + Statusdonut + Verfahrens-Timeline
- Verfahrens- und Pinpoint-/Statusfeld: Amtliche Volltexte/PM fuer jedes Bundesland, besonders Brandenburg, Niedersachsen, Sachsen, Sachsen-Anhalt, Thueringen, Bayern, Hessen.
- Zahlenanker:
  - Statusachsen im Tab: 20
  - Bundesverdachtsfall rechtskraeftig: 1
- Lokale Belege:
  - `daten/statistik_statusmatrix_afd_2026.json`
  - `daten/statistik_laender_beweismatrix_afd_2026.json`
  - `dokumente/vfs_berichte_bundeslaender/LfV_Rheinland_Pfalz_Verfassungsschutzbericht_2024_full.txt:283`
  - `dokumente/hauptquellen/DEEPRESEARCH_BRANDENBURG_NIEDERSACHSEN_AFD_STATUS_2026.md`
- Webanker:
  - https://www.bverwg.de/200525B6B23.24.0

### Fluegel, JA und Vorfeld als Zurechnungsnetz

- Gewichtung: tragend
- Rechtsachse: Zurechnung / Darauf-Ausgehen / Potentialitaet
- Aussage: Das BfV-Folgegutachten zeigt strukturelle Verbindungen zwischen AfD-Profilen und Fluegel-Profilen, nicht nur einzelne Sympathien. Die formale Aufloesung des Fluegels beseitigte die Netzwerkbeziehungen nicht.
- Diagramm: Netzwerkgraph + Top-20-Balken + Ereignisvergleich
- Verfahrens- und Pinpoint-/Statusfeld: Aktualisierung 2021 -> 2026 fuer Generation Deutschland, Compact, Ein Prozent, Antaios, IB, IfS mit Kantenbelegen.
- Zahlenanker:
  - AfD-Fluegel-Verbindungen: 14371
  - AfD-Profile mit Interaktion: 334
  - Freundschaftsbeziehungen: 1201
  - Maik Schmitz Verbindungen: 571
  - Tino Chrupalla Verbindungen: 275
- Lokale Belege:
  - `geheimgutachten/BfV-AfD-Folgegutachten_2021_05_E_Einflussnahme_Fluegel.md:1123`
  - `geheimgutachten/BfV-AfD-Folgegutachten_2021_05_E_Einflussnahme_Fluegel.md:1125`
  - `geheimgutachten/BfV-AfD-Folgegutachten_2021_05_E_Einflussnahme_Fluegel.md:1131`
  - `geheimgutachten/BfV-AfD-Folgegutachten_2021_05_E_Einflussnahme_Fluegel.md:1133`
  - `daten/statistik_potentialitaet.csv:8`

### Antisemitismus und Chiffren

- Gewichtung: stuetzend bis tragend je Zurechnung
- Rechtsachse: Menschenwuerde / NS-Wesensverwandtschaft / Demokratie
- Aussage: BfV und Zitatkorpus zeigen statusgetrennte und codierte antisemitische Narrative, vor allem Soros-, Hochfinanz-, NWO-/QAnon- und Globalistenmotive. Statistisch muss zwischen explizit, codiert, importiert-zugeschrieben und NS-relativierend getrennt werden.
- Diagramm: Donut explizit/codiert/NS/Importnarrativ + Zeitlinie
- Verfahrens- und Pinpoint-/Statusfeld: Originalposts mit URL/Screenshot und genaue Akteursebene fuer jede Chiffre.
- Zahlenanker:
  - rechtsextremistische antisemitische Straftaten 2025 Kontext: 2821
  - antisemitische Gewalttaten 2025 Kontext: 49
- Lokale Belege:
  - `geheimgutachten/BfV-AfD-Folgegutachten_2021_06_F_I_Menschenwuerde.txt:421`
  - `geheimgutachten/BfV-AfD-Folgegutachten_2021_06_F_I_Menschenwuerde.txt:1093`
  - `geheimgutachten/BfV-AfD-Folgegutachten_2021_06_F_I_Menschenwuerde.txt:1111`
  - `zitate/afd-verbot.de-2025-07-28-proof-01745.md`
  - `daten/findings_art21.jsonl:3681`

### Urteile, Strafverfahren, Sicherheitskomplex

- Gewichtung: Fallbeweis/Risikofeld
- Rechtsachse: Rechtsstaat / Gewaltpotential / Integritaet
- Aussage: Urteile und Verfahren belegen nicht automatisch Parteihandeln, aber sie zeigen Sicherheitsrisiken, Zurechnungsbruecken, Funktionaersrollen und Fairnessgrenzen. Rechtskraft, Anklage, Ermittlungen, Freispruch und laufend muessen streng getrennt bleiben.
- Diagramm: Urteilsarten-Donut + Rechtsstatus-Matrix + Sicherheitsampel
- Verfahrens- und Pinpoint-/Statusfeld: Amtliche GBA-/OLG-/VG-Volltexte fuer Jian G., Krah, Bystron, Malsack-Winkemann, Kurt H.; Rechtskraft pruefen.
- Zahlenanker:
  - Gerichtsregisterfaelle: 262
  - Nachtragsfaelle zweite Lueckenpruefung: 13
- Lokale Belege:
  - `dokumente/hauptquellen/urteilsbelege/01_Hoecke_SA_Parole_LG_Halle.md`
  - `dokumente/hauptquellen/urteilsbelege/23_Waffenbesitzkarten_Entzug_VG_Duesseldorf.md`
  - `dokumente/hauptquellen/urteilsbelege/27_Jian_G_Spionage_Krah_OLG_Dresden.md`
  - `dokumente/hauptquellen/urteilsbelege/36_Birgit_Malsack_Winkemann_Reichsbuerger_BGH.md`
  - `dokumente/hauptquellen/urteilsbelege/49_Kurt_H_Saechsische_Separatisten_Terror_GBA.md`
  - `dokumente/hauptquellen/urteilsbelege/254_AfD_Millionenspende_VG_Berlin_2026.md`
- Webanker:
  - https://apnews.com/article/18b6c38a882028e258b1f890f72c5a6c
  - https://www.ft.com/content/70528d00-e83e-49c2-a566-5309bd8eda71

### Pressefreiheit, Schulfrieden, Bildung

- Gewichtung: Presse stuetzend; Schule nacharbeiten
- Rechtsachse: Demokratieprinzip / Art. 5 / Bildung
- Aussage: Presseangriffe, Schulfrieden und Bildungsraum sind im Zitat-, Programm-, BfV- und Urteilskorpus vorhanden. Die Achse ist belegt: Meldeportale, Lehrer-Pranger, OVG-Schuelerpraktikum, Landesprogramme und Kulturkampfbelege sind als Demokratie-/Einschuechterungsachse zu fuehren. Zu verdichten sind amtliche Schulbehoerden-/Landtagsdrucksachen, offizielle AfD-Kampagnen und finale Pinpoints.
- Diagramm: Gap-Funnel + Presseangriffs-Donut + Bildungsquellen-Matrix
- Verfahrens- und Pinpoint-/Statusfeld: Meldeportale, Schulbehoerden, Landtagsdrucksachen, Verwaltungsgerichtsentscheidungen, Originalkampagnen.
- Zahlenanker:
  - Schulfrieden/Bildungsraum: belegte Achse mit Primaeranker-Aufwertung: 1
- Lokale Belege:
  - `zitate/afd-verbot.de-2025-07-28-proof-00597.md`
  - `dokumente/hauptquellen/urteilsbelege/17_Brandner_Beleidigung_AG_Gera.txt`
  - `dokumente/hauptquellen/urteilsbelege/45_Christina_Baum_Beleidigung.txt`
  - `dokumente/hauptquellen/landeswahlprogramme/06_Hamburg_Wahlprogramm.md`
  - `dokumente/hauptquellen/landeswahlprogramme/08_Mecklenburg_Vorpommern_Wahlprogramm.md`

## Was im Statistik-Tab noch als Luecke sichtbar bleiben muss

- Bund gesichert rechtsextrem: nur mit Stillhalte-/Eil-/Hauptsachestatus, nicht als rechtskraeftige Hauptsache.
- Schulfrieden/Bildung: vorhandene BfV-, OVG-, Programm- und Zitatbelege als Demokratie-/Einschuechterungsachse fuehren; Behoerden-, Gerichts-, Drucksachen- und Kampagnenanker zur A-Aufwertung daneben pinnen.
- Sicherheitskomplexe: Fall fuer Fall mit Rechtskraft, Funktion, Parteireaktion und Zurechnung.
- Vorfeld: jede Kante mit Datum, Akteur, Organisationsrolle und Originalquelle.
- Zitatkorpus: direkte/indirekte/belegpfadbasierte Akteurs-/Funktionsebene sichtbar halten; vorhandene Belegpfade sind Arbeitsprogramm fuer Ebene/Kanal, kein Beweisabzug ohne Pruefung.
