# Deepresearch: statistische Verwertbarkeit der Gutachten und Berichte

Stand: 2026-07-09

## Ziel

Diese Analyse bewertet die lokalen Gutachten, Verfassungsschutzberichte, Gerichtsregister und Statistikdaten danach, welche Inhalte im Statistik-Tab belastbar, nachvollziehbar und visuell sinnvoll dargestellt werden koennen.

Massstab ist nicht: "Kommt ein Wort vor?", sondern:

- Ist der Inhalt in einer Quelle sauber auffindbar?
- Ist er quantifizierbar?
- Hat die Zahl juristische oder analytische Aussagekraft?
- Kann sie nach Beweisstufe, Rechtsstatus und AfD-Zurechnung getrennt werden?
- Ist die Darstellung für Nutzer sofort verstaendlich?

## Ausgewertete Quellengruppen

### 1. BfV-AfD-Folgegutachten 2021

Lokale bevorzugte Arbeitsfassung:

- `geheimgutachten_netzpolitik/BfV-AfD-Folgegutachten_2021_01_A_Einfuehrung.md`
- `..._02_B_Methodik.md`
- `..._03_C_Rechtliche_Vorgaben.md`
- `..._04_D_Struktur_und_Entwicklung.md`
- `..._05_E_Einflussnahme_Fluegel.md`
- `..._06_F_I_Menschenwürde.md`
- `..._07_F_II_Demokratieprinzip.md`
- `..._08_F_III_Rechtsstaatsprinzip.md`
- `..._09_F_IV_Nationalsozialismus.md`
- `..._10_G_Verbindungen.md`
- `..._11_H_Gesamtwuerdigung.md`
- `..._12_I_Fazit.md`
- `..._13_Anhang_Glossar_Fussnoten.md`

Inhaltlich statistisch verwertbar:

- 4.600 geprüfte Belege.
- Knapp 400 Organisationseinheiten.
- Ueber 650 Personen.
- Ca. 300 Reden und Videomaterialien.
- 302 verarbeitete Personen in den Bewertungskapiteln.
- 88 Personen auf Bundesebene.
- 118 Personen auf Landesebene.
- 96 Personen auf Kreisebene.
- 213 Organisationseinheiten, Untergliederungen und Teilorganisationen.
- 11 AfD-Landesverbaende.
- 13 JA-Landesverbaende.
- 185 Bezirks- und Kreisverbaende der AfD und JA.

Sehr gut darstellbare Module:

- **BfV-Methodik-Kachel:** Materialbasis und Belegumfang.
- **Ebenenmatrix:** Bundesebene / Landesebene / Kreisebene.
- **Personen-vs-Organisationseinheiten:** 302 Personen gegen 213 Organisationseinheiten.
- **Prüffeldprofil:** Menschenwürde, Demokratieprinzip, Rechtsstaatsprinzip, NS-Bezug, Verbindungen.
- **Fluegel-Einflussprofil:** Rueckhalt, Groesse, Landesverbaende, Funktionstraeger, Delegierten-/Vorstandsbezug.
- **Vorfeld-Netzwerk:** IfS, COMPACT, Ein Prozent, Zukunft Heimat, PEGIDA, PI-News, Identitaere Bewegung.

Statistische Einschraenkung:

- Die lokale 2021er Netzpolitik-Fassung ist als Arbeitsfassung stark, muss für direkte Zitate aber gegen Original/PDF gespiegelt werden.
- `geheimgutachten/` und `geheimgutachten_netzpolitik/` duerfen nicht doppelt gezaehlt werden.

### 2. BfV-/Geheimgutachten Teile A/B

Lokale Gruppe:

- `geheimgutachten/Geheimgutachten_Teil A_pages_*.md`
- `geheimgutachten/Geheimgutachten_Teil B_pages_*.md`

Dominante inhaltliche Verwertbarkeit:

- Teil A: Menschenwürde, ethnischer Volksbegriff, Migration/Remigration, Islamfeindlichkeit, Ausgrenzungslogik.
- Teil B: Vorfeld, Fluegel/JA, Netzwerkbeziehungen, Demokratie-/Rechtsstaatsangriffe, weitere Belegverdichtung.

Gut darstellbare Module:

- **Teil-A/Teil-B-Profil:** Was behandelt welcher Gutachtenteil?
- **Seitenblock-Heatmap:** 100-Seiten-Bloecke nach Themencluster.
- **Belegfortschritt:** Wo konzentrieren sich Menschenwürde, Demokratie, Vorfeld, Fluegel, Migration?
- **OCR-/Reparaturstatus:** normale Seitenbloecke vs. reparierte Teil-B-Seiten.

Statistische Einschraenkung:

- OCR-/Reparaturbloecke koennen Treffer verzerren.
- Zahlen sollten als "Text-/Belegdichte" markiert werden, nicht als gerichtliche Feststellung.

### 3. GFF-Gutachten

Lokale Gruppe:

- `dokumente/splits/GFF_AfD-Gutachten_Teil_01_...pdf` bis `Teil_10_...pdf`
- Markdown-Arbeitsfassungen unter `dokumente/ki_markdown/dokumente/splits/`

Inhaltliche Struktur:

- Teil 1: Inhaltsüberblick / Zusammenfassung.
- Teil 2: Einfuehrung.
- Teil 3: Entwicklung, Machtzentren, Vorfeld.
- Teil 4: Rechtliche Massstaebe.
- Teil 5: Menschenwürde.
- Teil 6: Demokratie, Rechtsstaat, Ergebnis.
- Teil 7: Schluss / Literatur.
- Teil 8: Methodik.
- Teil 9: Anhang B, Belege Menschenwürde.
- Teil 10: weitere Belege Demokratie/Rechtsstaat.

Besonders statistisch verwertbar:

- GFF-Methodik mit Kategorien:
  - ethno-voelkischer Nationalismus,
  - Ausgrenzung und Segregation,
  - Volksverhetzung,
  - rassistische Ideologie,
  - Anti-Migrationspolitik,
  - Einschraenkung von Grundrechten,
  - anti-religioese Massnahmen, insbesondere anti-islamisch,
  - Ablehnung parlamentarischer Demokratie,
  - Drohungen und Einschuechterung,
  - Lob demokratiefeindlicher Massnahmen,
  - Aufrufe zum Sturz der Staatsordnung,
  - Queer- und Transfeindlichkeit,
  - sonstige Massnahmen.

Sehr gut darstellbare Module:

- **GFF-Relevanzmatrix:** JA / Grenzfall / Nein, sofern aus den Belegdaten strukturiert extrahiert.
- **GFF-Kategorienradar:** 11 bzw. 14 Methodikkategorien.
- **Menschenwürde-Anhang als Belegatlas:** Belege nach Zielgruppe, Massnahme, Akteur, Ebene.
- **Demokratie/Rechtsstaat-Anhang:** politische Gegner, Einschuechterung, demokratiefeindliche Massnahmen, Sturz-/Systemwechselrhetorik.
- **Methodiktransparenz:** Kriterien und Ausschlusskriterien sichtbar machen.

Statistische Einschraenkung:

- GFF ist Gutachten/Fachanalyse, nicht amtliche Behoerdenstatistik.
- KI-/OCR-Markdown ist Arbeitsfassung; für tragende Zitate PDF-Fundstelle verwenden.
- "Russland/Ausland" wurde in der Regex-Analyse teilweise durch "EU/Europa/auslaendisch" breit getrennt und muss für echte Statistik in Unterkategorien getrennt werden.

### 4. Ogorek / Untersuchung BfV-Gutachten und AfD-Parteiverbot

Lokale Gruppe:

- `dokumente/ki_markdown/dokumente/splits/untersuchung_bfv_gutachten_split_1_sachverhalt_und_vfs.md`
- `...split_2_wehrhafte_demokratie_parteiverbot.md`
- `...split_3_menschenwuerde_npd_urteil.md`
- `...split_4_begriffsverstaendnis_afd_gutachten.md`
- `...split_5_belege_ethnisches_volksverstaendnis.md`
- `...split_6_belege_islamfeindlichkeit_bewertung.md`

Inhaltlich verwertbar:

- Vergleich BfV-Gutachten vs. Parteiverbotsmassstab.
- Wehrhafte Demokratie.
- Menschenwürde im Lichte NPD-II.
- Ethnischer Volksbegriff.
- Islamfeindlichkeit.
- Auswirkungen verwaltungsgerichtlicher Entscheidungen.

Gut darstellbare Module:

- **Rechtsmassstab-Bruecke:** Beobachtungsrecht vs. Parteiverbotsrecht.
- **NPD-II-Abgleich:** Menschenwürde, Potentialität, aktiv-kaempferisches Vorgehen.
- **Belegpruefung:** Welche BfV-Belege sind parteiverbotsrechtlich stark, welche nur beobachtungsrechtlich?
- **Entscheidungsrisiko:** verwaltungsgerichtliche AfD-Entscheidungen als Status-/Risikoblock.

Statistische Einschraenkung:

- Eher Meta-Gutachten als primaere Tatsachenquelle.
- Gut geeignet für Gewichtungs- und Relevanzwerte, weniger für rohe Ereigniszaehlung.

### 5. DIMR und weitere Fachanalysen

Lokale Gruppe:

- `dokumente/ki_markdown/dokumente/hauptquellen/DIMR_Analyse_Warum_die_AfD_verboten_werden_koennte.md`
- `dokumente/ki_markdown/dokumente/hauptquellen/44Rechtliche_Stellungnahme_AfD-Parteiverbot.md`
- weitere Verfassungsblog-/Fachanalysen.

Inhaltlich verwertbar:

- Parteiverbotsmassstab.
- Schutz der gleichen Menschenwürde.
- rassistische Diskriminierung.
- Rechtsstaat und wehrhafte Demokratie.
- Potentialität als zentrale Differenz zur NPD.

Gut darstellbare Module:

- **Fachgutachten-Vergleich:** DIMR, GFF, Ogorek, rechtliche Stellungnahme.
- **Normative Begruendungsachsen:** Menschenwürde, Demokratie, Rechtsstaat, Potentialität.
- **Uebereinstimmungsgrad:** Welche Gutachten stuetzen welche Prüffelder?
- **Quellenrang:** amtlich / wissenschaftlich / NGO / rechtliche Stellungnahme.

Statistische Einschraenkung:

- Fachanalysen zaehlen nicht wie Ereignisse.
- Nutzbar als "Argumentabdeckung", "Prüffeldabdeckung" und "Gutachtenkonsens".

### 6. Verfassungsschutzberichte Bund und Länder

Lokale Gruppe:

- BfV-Berichte 2023/2024/2025.
- LfV-Berichte 2024 als Volltexte für Baden-Wuerttemberg, Bayern, Berlin, Brandenburg, Bremen, Hamburg, Hessen, Mecklenburg-Vorpommern, Niedersachsen, NRW, Rheinland-Pfalz, Saarland, Sachsen, Sachsen-Anhalt, Schleswig-Holstein, Thueringen.
- BfV-Sonderberichte zu Sicherheitsbehoerden, Internet, Antisemitismus, Musik, Symbolen.

Inhaltlich verwertbar:

- rechtsextremistisches Personenpotenzial.
- AfD zugerechnetes Potenzial.
- Parteienfoermiges Rechtsextremismuspotenzial.
- Gewaltorientierung.
- PMK-/Straftatenlage.
- Landesbezogene Einstufungen und Beobachtungsobjekte.
- JA, IB, Reichsbuerger, Active Clubs, rechtsextreme Musik/Symbole/Internet.

Sehr gut darstellbare Module:

- **Bund-Länder-Heatmap:** Bundesland x Thema.
- **Normalisierte Berichtsdichte:** Treffer pro 100.000 Zeichen statt absolute Treffer.
- **Einstufungslandkarte:** Verdachtsfall / gesichert / Beobachtungsobjekt / keine explizite AfD-Einstufung.
- **AfD-Potenzialzeitreihe:** 11.300 -> 20.000 -> 28.000.
- **Parteienpotenzial:** AfD im Verhaeltnis zu Rechtsextremismus in Parteien.
- **Kontextlage:** PMK rechts, Gewaltdelikte, Volksverhetzung, fremdenfeindliche und antisemitische Straftaten.
- **Sonderlagen:** Sicherheitsbehoerden, Waffen, Reichsbuerger, Internet, Antisemitismus.

Statistische Einschraenkung:

- PMK-/BfV-Lagezahlen sind Kontext, keine automatische AfD-Zurechnung.
- Landesberichte sind unterschiedlich lang; absolute Treffer verzerren.
- Nicht jeder Landesbericht behandelt die AfD gleich ausfuehrlich.

### 7. BKA/PMK

Lokale Gruppe:

- `BKA_Fallzahlen_PMK_2023.md`
- `BKA_Fallzahlen_PMK_2024.md`
- `BKA_Fallzahlen_PMK_2025.md`
- `BKA_Deliktsbereich_PMK_rechts.md`

Inhaltlich verwertbar:

- PMK rechts nach Jahr.
- Gewalttaten.
- Propagandadelikte.
- Antisemitische/fremdenfeindliche Teilbereiche, soweit Quelle sauber ausweist.

Gut darstellbare Module:

- **PMK-Kontextzeitreihe:** 2023/2024/2025.
- **Kontext-vs-Zurechnung-Warnung:** eigener visueller Hinweis.
- **Deliktentwicklung:** Straftaten, Gewalttaten, Propaganda.

Statistische Einschraenkung:

- Keine AfD-Zurechnung.
- Nur Kontext für Radikalisierungsumfeld und Sicherheitslage.

### 8. Rechtsprechung und Urteilsregister

Lokale Gruppe:

- `dokumente/hauptquellen/AfD_Gerichtsentscheidungen_Urteilsregister_Volltext.md`
- `dokumente/hauptquellen/urteilsbelege/*`
- `dokumente/hauptquellen/BVerfG_2_BvB_1_13_NPD_Urteil_2017.txt`
- weitere BVerfG/SRP/KPD/NPD-Quellen.

Inhaltlich verwertbar:

- 313 dokumentierte Registerfaelle im Portal.
- Deliktarten.
- Rechtsstatus.
- direkte/indirekte AfD-Zurechnung.
- Strafrecht, Verwaltungsrecht, Waffenrecht, Beamtenrecht, Parteienrecht.
- Instanz und Bundesland.
- Beweisbedeutung für Art. 21.

Gut darstellbare Module:

- **Urteilsarten-Donut:** Strafurteil, Strafbefehl, Verwaltungsgericht, Waffenrecht, Beamtenrecht, Parteienrecht.
- **Rechtsstatus-Leiste:** rechtskräftig, nicht rechtskräftig, laufend, eingestellt, statusbezogen getrennt.
- **Deliktcluster:** Volksverhetzung, Kennzeichen, Koerperverletzung, Waffen/Sprengstoff, Betrug/Parteienfinanzierung, Beleidigung, Spionage/Sicherheitsrisiko.
- **AfD-Bezug:** direkt, indirekt, Vorfeld, Praezedenz.
- **BVerfG-Testschema:** Menschenwürde, Potentialität, aktiv-kaempferisch, Verhalten von Anhaengern.

Statistische Einschraenkung:

- Registerfaelle sind nicht gleich Verurteilungen.
- Mehrere Instanzen duerfen nicht doppelt als Fälle gezaehlt werden.

## Querschnittsbefund aus der lokalen Inhaltsanalyse

Die lokale Inhaltsanalyse über die grossen Textgruppen zeigt:

- BfV 2021 ist besonders stark für Methodik, Zurechnung, Fluegel, JA, Vorfeld, Menschenwürde, Demokratie/Rechtsstaat.
- Die neueren Geheimgutachten-Teile A/B sind besonders stark für Menschenwürde, ethnischen Volksbegriff, Migration/Remigration, Islamfeindlichkeit, Fluegel/JA und Vorfeld.
- GFF ist besonders stark für kategoriale Belegcodierung und eine direkte Uebersetzung in Statistikklassen.
- Ogorek/Untersuchung ist besonders stark für die Frage, welche BfV-Belege parteiverbotsrechtlich verwertbar sind.
- DIMR ist besonders stark für Menschenwürde, rassistische Diskriminierung und parteiverbotsrechtliche Argumentation.
- LfV/BfV-Berichte sind besonders stark für Lagezahlen, regionale Heatmaps, Einstufungsstatus, JA/IB/Reichsbuerger/Sicherheitsbehoerden-Kontext.
- BKA/PMK ist Kontext- und Potentialitätsmaterial ohne automatische AfD-Tatzurechnung.
- Rechtsprechung ist stark für Status, Deliktart, Rechtsfolge, Instanz und Art.-21-Testschema.

## Priorisierte Statistikmodule für den Statistik-Tab

### Prioritaet 1: Art.-21-Beweislandkarte

Visualisierung:

- Heatmap oder Matrix.

Dimensionen:

- Prüffeld: Menschenwürde, Demokratieprinzip, Rechtsstaatsprinzip, NS-Bezug, Potentialität, Zurechnung, aktiv-kaempferisches Vorgehen, organisatorische Staerke.
- Quelle: BfV 2021, BfV 2025/Geheimgutachten, GFF, DIMR, Ogorek, VS-Berichte, Rechtsprechung.
- Wert: Anzahl Findings / Belege / Quellenabdeckung.
- Qualitaet: Beweisstufe A-F.

Warum stark:

- Fuehrt alle Gutachten in einer gemeinsamen juristischen Struktur zusammen.
- Ersetzt isolierte Einzelstatistiken durch eine echte Subsumtionslandkarte.

### Prioritaet 2: Gutachtenvergleich

Visualisierung:

- Vergleichstabelle mit Fortschrittsbalken.

Spalten:

- Quelle.
- Jahr.
- Typ.
- Seiten/Textumfang.
- Rechtsmassstab.
- Menschenwürde.
- Demokratie.
- Rechtsstaat.
- Potentialität.
- Zurechnung.
- Vorfeld.
- Ergebnis/These.

Warum stark:

- Nutzer sehen sofort, welches Gutachten welche Frage beantwortet.
- BfV, GFF, DIMR und Ogorek werden nicht vermischt.

### Prioritaet 3: Menschenwürde- und Volksbegriff-Dashboard

Visualisierung:

- Donut + Balken + Top-Akteure.

Cluster:

- ethnischer Volksbegriff.
- Remigration.
- Passdeutsche / Staatsvolk.
- Muslim-/Islamfeindlichkeit.
- rassistische Diskriminierung.
- Antisemitismus.
- Queer-/Transfeindlichkeit.
- Behindertenfeindlichkeit, sofern weiter strukturiert.

Warum stark:

- Menschenwürde ist das zentrale materielle Prüffeld.
- BfV, GFF, DIMR und NPD-II sind hier besonders gut vergleichbar.

### Prioritaet 4: Vorfeld- und Netzwerkstatistik

Visualisierung:

- Netzwerkgraph oder Matrix.

Knoten:

- AfD-Bundesebene.
- Landesverbaende.
- JA.
- Fluegel.
- Identitaere Bewegung.
- IfS/Sezession.
- COMPACT.
- Ein Prozent.
- PEGIDA.
- Zukunft Heimat.
- weitere rechtsextreme Einzelpersonen/Organisationen.

Kanten:

- Nennung.
- Auftritt.
- Interview.
- gemeinsame Veranstaltung.
- personelle Ueberschneidung.
- organisatorische Kooperation.
- Social-Media-Interaktion.

Warum stark:

- Vorfeldintegration ist statistisch gut darstellbar und juristisch für Zurechnung/Planmaessigkeit relevant.

### Prioritaet 5: Bund-Länder-Verfassungsschutz-Heatmap

Visualisierung:

- Karte oder Heatmap.

Zeilen:

- Bundesland.

Spalten:

- AfD.
- JA.
- IB.
- Fluegel.
- rechtsextrem.
- Verdachtsfall.
- gesichert.
- Gewalt.
- Islamfeindlichkeit.
- Antisemitismus.
- Reichsbuerger.
- Waffen/Sicherheitsbehoerden.

Wert:

- normalisierte Treffer pro 100.000 Zeichen.
- plus Statusmarker für amtliche Einstufung.

Warum stark:

- Nutzt die lokalen LfV-Volltexte sinnvoll.
- Verhindert Verzerrung durch unterschiedlich lange Berichte.

### Prioritaet 6: Potentialitäts- und Machtindikatoren

Visualisierung:

- Zeitreihe + KPI-Karten.

Werte:

- AfD zugerechnetes Potenzial 2023/2024/2025: 11.300 / 20.000 / 28.000.
- AfD-Mitglieder 70.000.
- Anteil 40%.
- Rechtsextremismuspotenzial gesamt 58.700.
- Rechtsextremismuspotenzial in Parteien 32.850.
- Gewaltorientierte Rechtsextremisten 15.600.
- Mandate, Fraktionen, Landesregierungsoptionen, Umfrage-/Wahlergebnisse, sofern aus Primärquellen ergaenzt.

Warum stark:

- Potentialität ist die entscheidende Differenz zum NPD-Urteil.

### Prioritaet 7: Belegqualitaet und Arbeitsstand

Visualisierung:

- Stacked bar.

Werte:

- Findings nach Beweisstufe: A, B, C, D, E, F.
- Quellen nach Primärquelle/nicht Primärquelle.
- AfD-Zurechnung: direkt, indirekt, Vorfeld, belegpfadbasierte Akteurs-/Funktionsebene.
- Status: geprüft, statusbezogen getrennt, statusbezogen zu trennen, veraltet.

Warum stark:

- Zeigt transparent, wo das Dossier belastbar ist und wo Belege noch forensisch an Quelle, Akteur, Pinpoint und Zurechnung geführt sind.
- Aktuelle Schieflage: viele Findings sind als Einzelbelege vorhanden, aber noch nicht auf einheitliche Akteurs-/Funktionsebenen normalisiert; das ist eine Codierliste, keine Beweislücke.

### Prioritaet 8: GFF-Kategorienstatistik

Visualisierung:

- Kategorienradar oder Balken.

Werte:

- Anzahl Belege pro GFF-Kategorie.
- Anteil JA/Grenzfall/Nein, falls aus den Belegdaten strukturiert extrahiert.
- Zielgruppe.
- Massnahmetyp.
- Akteur/Ebene.

Warum stark:

- Die GFF-Methodik ist bereits statistiknah angelegt.
- Besonders geeignet für Menschenwürde und Demokratie/Rechtsstaat.

### Prioritaet 9: Urteils- und Rechtsfolgenmodul

Visualisierung:

- Donut, Statusbalken, Zeitachse.

Werte:

- Fälle gesamt.
- Rechtsstatus.
- Urteilsart.
- Deliktcluster.
- Instanz.
- Bundesland.
- AfD-Bezug.
- Sanktion/Rechtsfolge.

Warum stark:

- Schon teilweise eingebaut, aber ausbaubar.
- Hoher Nutzerwert, weil Rechtsstatus oft missverstanden wird.

### Prioritaet 10: Primärquellen, Pinpoints und Beweisverdrahtung

Visualisierung:

- Verdrahtungs- und Pinpoint-Matrix.

Kategorien:

- amtlicher Volltext als Primäranker nachzuziehen.
- nur Pressequelle.
- nur Screenshot/Social Media.
- OCR unsicher.
- Originalvideo als Primäranker nachzuziehen.
- Parteiquelle als Archivanker nachzuziehen.
- Gerichtsentscheidung als Volltextanker nachzuziehen.

Warum stark:

- Macht Deepresearch operationalisierbar.

## Konkrete Datenfelder für neue Manifest-Statistiken

Jede neue Statistik sollte mindestens enthalten:

- `id`
- `title`
- `value`
- `unit`
- `theme`
- `subtheme`
- `source`
- `source_type`
- `source_path`
- `finding_location`
- `method`
- `legal_relevance`
- `article_21_field`
- `evidence_grade`
- `status`
- `limitations`
- optional: `scope`, `year`, `state`, `actor`, `afd_relation`, `legal_status`, `normalization_base`

## Welche Primärquellen noch geholt oder nachgeschaerft werden sollten

### Hoch priorisiert

- Amtliche Volltexte zu VG/OVG/BVerwG-Entscheidungen AfD/JA/Fluegel.
- Vollstaendige lokale Originalfassung des BfV-Gutachtens 2025 mit Seitenmodell.
- GFF-Original-PDF und Anlagen als kanonische Quelle mit konsistenten Seitenangaben.
- Gerichtliche Volltexte oder Pressemitteilungen für alle Urteilsregisterfaelle.
- AfD-Programme, Satzungen, Unvereinbarkeitsliste, Parteitagsbeschluesse und Wahlprogramme als Primärquellen.
- Originalvideos/Transkripte zu zentralen Reden.
- Archivierte Social-Media-Originale für E-Belege, wenn sie tragend werden sollen.

### Mittel priorisiert

- Landtagsdrucksachen, Plenarprotokolle, Ordnungsrufe, Immunitaetsvorgaenge.
- Bundestagsdrucksachen/Kleine Anfragen mit AfD-Bezug.
- Primärquellen zu Vorfeldorganisationen und gemeinsamen Veranstaltungen.
- Originalquellen zu COMPACT, IfS, Ein Prozent, IB, PEGIDA, Zukunft Heimat.
- BfV-Sonderberichte als Text/OCR mit Fundstellen.

### Nachrangig oder Kontext- und Potentialitätsmaterial ohne automatische AfD-Tatzurechnung

- Presseberichte mit Primäranker-Auftrag.
- Wikipedia-/Chronikabgleiche.
- Meinungsbeitraege.
- allgemeine Rechtsextremismuskontexte als Lagebild ohne automatische AfD-Zurechnung.

## Umsetzungsempfehlung

Nicht zuerst weitere HTML-Kacheln bauen. Zuerst sollten neue Manifest-Gruppen erzeugt werden:

- `STAT-ART21-*`
- `STAT-GUTACHTEN-*`
- `STAT-BFV2021-*`
- `STAT-GFF-*`
- `STAT-LFV-*`
- `STAT-NETZWERK-*`
- `STAT-POTENTIALITAET-*`
- `STAT-QUALITY-*`
- `STAT-PRIMARY-GAPS-*`

Danach kann der Statistik-Tab diese Gruppen als eigene Sektionen rendern:

1. Ueberblick.
2. Art.-21-Beweislandkarte.
3. Gutachtenvergleich.
4. Menschenwürde / Volksbegriff.
5. Demokratie / Rechtsstaat.
6. Vorfeld / Netzwerke.
7. Verfassungsschutz Bund-Länder.
8. Potentialität.
9. Urteile und Rechtsfolgen.
10. Datenqualitaet und Quellenluecken.

## Wichtigste Schlussfolgerung

Die statistische Staerke des Repositories liegt nicht in einzelnen Keywordtreffern. Sie liegt in der Kombination aus:

- 10.323 erfassten Quellen,
- 5.442 Primärquellen,
- mindestens 313 Registerfaellen,
- 3.703 geprüften Findings,
- 3.722 Zitatbefunden,
- 1.234 Findings der Beweisstufe A,
- 989 direkt zurechenbaren Findings,
- BfV-Methodikzahlen von 4.600 geprüften Belegen, über 650 Personen und knapp 400 Organisationseinheiten,
- GFF-Methodikkategorien,
- BfV-/LfV-Lagezahlen und Landesberichten,
- Rechtsprechungs- und Urteilsstatus.

Daraus sollte der Statistik-Tab als Beweis- und Quellen-Navigator aufgebaut werden, nicht als einfache Zahlensammlung.
