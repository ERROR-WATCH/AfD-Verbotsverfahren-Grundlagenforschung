# Statistik-Tab: inhaltliche Aufbereitung, Einstufungen, Zitate, Gutachten, VS-Berichte

Stand: 2026-07-09

Dieses Konzept ergänzt `GUTACHTEN_BERICHTE_INHALTLICHE_DEEPRESEARCH.md`. Es übersetzt die lokalen Gutachten, VS-Berichte, Urteile, Zitate, Artikel und Statistikdateien in konkrete, visuell sinnvolle Statistikmodule.

Kernprinzip: Nicht alles als Zahl zeigen. Jede Grafik muss eine inhaltliche Aussage tragen und zwischen Tatsachenbefund, Rechtsbewertung, Gericht, Kontextstatistik und statusbezogenem Prüfbeleg unterscheiden.

## 1. Einstufungs- und Gerichtsstatus der AfD

### Inhaltlicher Befund

Die AfD ist auf Bundesebene mindestens als rechtsextremistischer Verdachtsfall gerichtsfest zu behandeln. Die BfV-Hochstufung der Bundespartei zur gesichert rechtsextremistischen Bestrebung ist im lokalen Material dokumentiert, muss aber im UI mit Verfahrensstatus gezeigt werden: Hochstufung durch BfV, anschließend Stillhaltezusage beziehungsweise gerichtliche vorläufige Begrenzung, während der Verdachtsfall-Status weiter trägt.

Für Länder und Teilorganisationen muss getrennt werden:

- Bundespartei.
- Landesverband.
- Junge Alternative / Nachfolge- oder Ersatzstrukturen.
- Flügel beziehungsweise frühere Strömungen.
- Vorfeldorganisationen.

Die Aussage "mindestens Verdachtsfall" darf im Statistik-Tab nur dort als Status stehen, wo sie durch lokale Quelle, Gericht oder VS-Bericht belegt ist. Sonst muss der Status "nicht explizit im lokalen Datensatz" lauten.

### Kritische Punkte

- "Gesichert rechtsextremistisch" ist stärker als "Verdachtsfall", aber prozessual nicht überall gleich belastbar.
- "Beobachtungsobjekt" ist nicht automatisch "gesichert".
- Die JA ist in mehreren Quellen stärker eingestuft als manche Landesverbände.
- VS-Berichte nennen nicht immer alle Beobachtungsobjekte; Nichtnennung ist kein Entlastungsbeweis.
- Presseartikel zu Einstufungen sind Sekundärquellen; amtliche PM, Gerichtsentscheidungen und VS-Berichte müssen bevorzugt werden.

### Vorhandene lokale Anker

- BfV-Pressemitteilung 2022: VG Köln bestätigt AfD und JA als Verdachtsfall.
- OVG Münster / BVerwG-Berichte im Urteilsregister: Verdachtsfall der Bundespartei gerichtsfest beziehungsweise rechtskräftig dokumentiert.
- Lokale Quelle `Deepresearch_BfV_AfD_Rechtsextremismus_Belege_2025_2026.md`: BfV-Hochstufung 2025, aber vorläufige Behandlung nicht als gesichert rechtsextremistisch bis zur Hauptsache.
- Brandenburg VS-Bericht 2024: AfD-Landesverband Brandenburg als rechtsextremistischer Verdachtsfall; JA Brandenburg als gesichert rechtsextremistische Bestrebung.
- Mecklenburg-Vorpommern VS-Bericht 2024: JA MV und Bundes-JA als gesichert rechtsextremistische Bestrebungen bearbeitet.
- Hessen VS-Bericht 2024: JA Hessen als parteigebundene rechtsextremistische Struktur; starke AfD-Anbindung und Wahlkampfunterstützung.
- Niedersachsen/VGH/VG-Nachträge im Urteilsregister: Hochstufung/Beobachtung des Landesverbands als gerichtliches Thema.
- Bayern/VGH-Nachträge im Urteilsregister: Beobachtung des Landesverbands als Verdachtsfall bestätigt.

### Beste Darstellung

- **Deutschlandkarte / Heatmap:** Bundesländer mit Statusfarbe.
- **Gestapelter Balken:** Bundespartei, Landesverbände, JA, Vorfeld nach Statuskategorie.
- **Timeline:** Prüffall -> Verdachtsfall -> gesichert -> Stillhaltezusage/Eilverfahren -> Hauptsache statusbezogen getrennt.
- **Status-Chips pro Quelle:** amtlich, gerichtsfest, angefochten, vorläufig, Pressebeleg.

Kuchendiagramm nur für die Verteilung der Statuskategorien verwenden, nicht für den Rechtsverlauf.

## 2. Gutachtenvergleich als juristische Aussage-Matrix

### Inhaltlicher Befund

Die Gutachten sagen nicht dasselbe mit anderen Worten. Sie haben unterschiedliche Funktionen:

- **BfV:** Beobachtungs- und Einstufungslogik. Es prüft tatsächliche Anhaltspunkte, Einfluss extremistischer Strömungen, Organisationszurechnung, Funktionärsaussagen und Vorfeldkontakte.
- **GFF:** Art.-21-Prüfung. Es bejaht die Verfassungswidrigkeit vor allem über Demokratieprinzip, Menschenwürde, Darauf-Ausgehen und Potentialität.
- **DIMR:** Menschenwürde-Zentrum. Es sieht den national-völkischen Volksbegriff als Angriff auf gleiche Menschenwürde und gleichberechtigte Zugehörigkeit.
- **Ogorek:** Brückenprüfung. BfV-Material ist relevant, aber nicht automatisch parteiverbotsrechtlich ausreichend.
- **44er-Stellungnahme:** Verfahrens- und Erfolgsaussicht. Sie argumentiert, dass ein Antrag rechtlich aussichtsreich und von den Antragsorganen ernsthaft zu prüfen ist.
- **Artikel/Presse/Dossiers:** Ereignis- und Kontextbelege; sie dürfen nicht wie Gerichts- oder Gutachtenbefunde aussehen.

### Kritische Punkte

- Eine GFF-Rechtsbewertung ist keine gerichtliche Feststellung.
- Ein BfV-Befund ist kein Parteiverbotsurteil.
- Eine Pressequelle kann eine Primärquelle erschließen, ersetzt aber nicht automatisch den Primärbeleg.
- Artikel zu Straftaten oder Vorfällen müssen nach Rechtskraft, Parteizurechnung und Aktualität getrennt werden.

### Beste Darstellung

- **Matrix/Heatmap:** Gutachten x Art.-21-Prüffeld.
- **Radar:** Gewichtung je Gutachten für Menschenwürde, Demokratie, Rechtsstaat, Potentialität, Zurechnung, Vorfeld.
- **Sankey:** Quelle -> Befundtyp -> Art.-21-Prüffeld -> mögliche Statistik.
- **Divergenztabelle:** Wo Quellen übereinstimmen, wo sie enger oder vorsichtiger sind.

Kuchendiagramm ist hier ungeeignet, weil Gutachtenargumente keine Anteile eines Ganzen sind.

## 3. Menschenwürde- und Betroffenengruppen-Matrix

### Inhaltlicher Befund

Die stärkste inhaltliche Linie aus BfV, GFF und DIMR ist nicht "Migration" als normales Politikfeld, sondern die Frage, ob bestimmten Gruppen gleiche Würde, Zugehörigkeit und Rechtssubjektivität abgesprochen wird.

Wiederkehrende Gruppen:

- Muslime.
- Menschen mit Migrationsgeschichte.
- Schutzsuchende.
- eingebürgerte Deutsche oder Deutsche mit zugeschriebener Fremdheit.
- queere und trans Personen.
- Menschen mit Behinderung.
- politische Gegner.
- Richter, Journalisten, Zivilgesellschaft.

Wiederkehrende Muster:

- Entwertung.
- Kriminalisierung.
- kollektive Verdächtigung.
- Ausschluss aus dem "Volk".
- Remigrations-/Vertreibungslogik.
- Entzug von Schutz oder Teilhaberechten.
- Einschüchterung demokratischer Gegner.

### Beste Darstellung

- **Heatmap:** Betrstatusbezogen getrenntengruppe x Handlungsmuster.
- **Stacked Bar:** Anteil der Befunde pro Gruppe nach Beweisstufe A-F.
- **Treemap:** Unterthemen innerhalb Menschenwürde.
- **Detailkarte:** pro Gruppe die stärksten Quellen, Gutachtenaussage, Beispielbefunde.

Kuchendiagramm nur für "Befunde nach Zielgruppe" nutzen, wenn jede Quelle genau einer Zielgruppe zugeordnet ist.

## 4. Remigration / ethnischer Volksbegriff / Bevölkerungsaustausch

### Inhaltlicher Befund

Die Quellen behandeln "Remigration" nicht als isoliertes Wort. Kritisch wird es, wenn der Begriff mit ethnisch-kulturellem Volksbegriff, millionenfacher Entfernung, Entzug von Staatsangehörigkeit, Druck auf Deutsche mit Migrationsgeschichte oder Narrativen wie Bevölkerungsaustausch verbunden ist.

GFF und DIMR stellen diesen Komplex besonders stark in die Menschenwürde- und Demokratieprüfung. BfV und Länderberichte zeigen, dass "Remigration" über JA, Landesverbände und Vorfeld in Kampagnen und Veranstaltungen getragen wird.

### Kritische Punkte

- Nicht jede Abschiebungsforderung ist verfassungswidrig.
- "Remigration" muss nach Kontext codiert werden: legalistische Abschiebung, politisches Schlagwort, ethnischer Ausschluss, millionenfache Entfernung, Vorfeldbezug.
- Die Statistik muss "bloße Nennung" von "tragendem Befund" trennen.

### Beste Darstellung

- **Stufenmodell:** Abschiebungsforderung -> Remigration -> millionenfache Remigration -> ethnischer Volksbegriff -> Entzug gleicher Zugehörigkeit.
- **Zeitreihe:** Aufkommen/Intensivierung im Korpus, vor allem 2023-2026.
- **Netzwerk:** Akteure, JA, Landesverbände, Vorfeld, Veranstaltungen.
- **Sankey:** Begriff -> Kontext -> Rechtsgut -> Quelle.

Kuchendiagramm ist nur sinnvoll für Kontextkategorien der Remigrationsbefunde.

## 5. Zitate- und Finding-Korpus als Beweislandkarte

### Inhaltlicher Befund

Der Zitatkorpus ist nicht nur eine Sammlung "schlimmer Zitate". Er ist das Bindeglied zwischen Gutachtenaussage und konkretem Beleg. Er muss nach Inhalt, Zurechnung, Beweisstufe, Zielgruppe und Rechtsgut dargestellt werden.

Vorhandene harte Struktur:

- 3.703 Findings.
- 3.722 Zitate/Belege.
- Direkte Zurechnung: 989.
- Indirekte Zurechnung: 22.
- Belegte Akteurs-/Quellen-Findings zur Zurechnungsnormalisierung: 2.692.
- Starke Art.-21-Cluster: Verfassungsfeindliche Zielrichtung, Rechtsstaatsprinzip, Menschenwürde, Potentialität, aktiv-kämpferisches Vorgehen.

### Kritische Punkte

- Die 2.692 Findings sind belegt; offen ist die forensische Schriftsatz-Pinpoint: sie haben lokale Belegpfade und müssen als Akteurs-/Funktionsebene visualisiert werden.
- Direkte Zurechnung muss im UI deutlich höher gewichtet werden als Umfeldbelege.
- Zitate ohne Originaltext dürfen nur als Metadaten-/Fundstellenbeleg erscheinen, nicht als zitierfähiges Zitat.
- Beweisstufe E/F darf nicht wie A/B aussehen.

### Beste Darstellung

- **Donut/Kuchen:** Zurechnung direkt / indirekt / belegpfadbasierte Akteurs- und Funktionsebene.
- **Stacked Bars:** Rechtsgut nach Beweisstufe.
- **Scatterplot:** Beweisstärke x Zurechnungsnähe, Punktgröße = Anzahl Befunde.
- **Treemap:** Themencluster innerhalb direkter Zurechnung.
- **Drilldown-Tabelle:** Finding -> Quelle -> Akteur -> Zurechnung -> Rechtsgut -> Prüfstatus.

Hier ist ein Kuchendiagramm sinnvoll, weil Zurechnung eine echte Anteilsfrage ist.

## 6. Akteurs- und Organisationsnetz

### Inhaltlicher Befund

Die Quellen zeigen wiederkehrende personelle und organisatorische Knoten. Wichtig ist nicht nur, wer häufig genannt wird, sondern auf welcher Ebene und in welchem Zusammenhang:

- Bundesvorstand und Bundesfunktionäre.
- Landesverbände.
- JA.
- frühere Flügel-Strukturen.
- Vorfeldorganisationen wie Identitäre Bewegung, Zukunft Heimat, Institut-für-Staatspolitik-Umfeld, Neue-Rechte-Medien.
- parlamentarische Fraktionen und Mitarbeiterumfelder.

### Vorhandene lokale Statistikanker

- Akteursstatistik aus `daten/statistik_akteure.csv`.
- Finding-Korpus mit Akteur, Akteursebene und Zurechnung.
- VS-Berichte mit Landes- und JA-Strukturen.
- Urteilsbelege zu konkreten Personen/Fällen.
- Artikel zu Mitarbeitern, Vorfeld, Spenden, Gewalt, Waffen, Volksverhetzung.

### Beste Darstellung

- **Netzwerkgraph:** Akteur -> Organisation -> Quelle -> Rechtsgut.
- **Balkenranking:** nur für Top-Akteure, aber mit Warnhinweis "Nennungen sind keine Schuld-/Beweisskala".
- **Chord/Sankey:** Akteursebene -> Rechtsgut -> Beweisstufe.
- **Zeitstrahl pro Akteur:** Aussagen, Verfahren, Funktionen, Distanzierungen.

Kuchendiagramm ungeeignet. Netzwerk und Balken sind besser.

## 7. Urteile und Verfahren

### Inhaltlicher Befund

Die Urteile sind eine eigene Wahrheitsebene. Sie zeigen:

- gerichtliche Bestätigung von Beobachtung/Einstufung;
- parteienrechtliche und verwaltungsrechtliche Grenzen;
- strafrechtliche Verurteilungen oder Verfahren im AfD-Umfeld;
- waffenrechtliche und beamtenrechtliche Folgen;
- Präzedenzfälle der wehrhaften Demokratie.

### Vorhandene Zahlen

- mindestens 265 Registerfälle.
- Deliktcluster in `daten/statistik_gerichtsfälle.csv`: Volksverhetzung, verfassungswidrige Kennzeichen, Körperverletzung/Gewalt, Beleidigung/Verleumdung.
- Nachträge zu VS-Verfahren Bayern, Niedersachsen, Hessen, Brandenburg und Bundesebene.

### Kritische Punkte

- Strafverfahren gegen Einzelpersonen sind nicht automatisch Parteiverbotsbelege.
- Rechtskräftige Verurteilungen getrennt von Ermittlungen, Anklagen und nicht rechtskräftigen Urteilen zeigen.
- Direkter AfD-Bezug getrennt von indirekten Präzedenzfällen.
- Gerichtliche Bestätigung eines Verdachtsfalls ist für Einstufungsstatistik höherwertig als Presseberichterstattung.

### Beste Darstellung

- **Donut:** Urteilsarten.
- **Stacked Bar:** Ausgang nach Instanz.
- **Timeline:** Verfahren über Jahre.
- **Matrix:** Rechtsgebiet x AfD-Zurechnung.
- **Karten/Listen:** Länder mit Verfassungsschutzverfahren.

Kuchen ist sinnvoll für Urteilsarten und Zugehörigkeit. Für zeitlichen Verlauf ist Linie/Timeline besser.

## 8. VS- und PMK-Kontext

### Inhaltlicher Befund

VS- und PMK-Zahlen zeigen das Umfeld, in dem die AfD-Einstufung bewertet wird: rechtsextremistisches Personenpotenzial, parteigebundene Strukturen, Gewalt, Propaganda, Volksverhetzung, antisemitische und fremdenfeindliche Delikte.

Vorhandene Zahlen:

- Rechtsextremismuspotenzial gesamt 2025: 58.700.
- AfD zugerechnetes Potenzial 2025: 28.000.
- Anteil im lokalen Datensatz: 28.000 von 70.000 AfD-Mitgliedern, also 40 Prozent.
- AfD-Potenzialreihe: 11.300 (2023), 20.000 (2024), 28.000 (2025).
- Rechtsextremistisch motivierte Straftaten 2025: 36.951.
- Gewalttaten 2025: 1.395.
- Volksverhetzung 2025: 4.824.
- Propagandadelikte 2025: 23.122.

### Kritische Punkte

- PMK rechts ist Kontext, nicht AfD-Zurechnung.
- Rechtsextremismuspotenzial und Parteimitglieder sind unterschiedliche Grundgesamtheiten.
- Sprünge können durch Einstufungslogik entstehen, nicht nur durch reale Mitgliederbewegung.

### Beste Darstellung

- **Linienchart:** AfD-Potenzial 2023-2025.
- **Stacked Bar:** Rechtsextremistisches Potenzial nach Parteien/Strukturen.
- **Kontextkarten:** Straftaten/Gewalt/Propaganda/Volksverhetzung.
- **Warnlabel:** "Kontextzahl, keine direkte Parteizurechnung".

Kuchendiagramm nur für Anteil AfD am parteigebundenen rechtsextremistischen Potenzial.

## 9. Artikel, Presse, Recherchen und Dossiers

### Inhaltlicher Befund

Die Artikel im Repo sind statistisch wertvoll, aber nicht als gleichrangige Beweise. Sie liefern:

- Vorfallschroniken.
- Personen- und Netzwerkhinweise.
- Gerichts- und Verfahrensmeldungen.
- Spenden-/Finanzierungsfälle.
- Mitarbeiter- und Sicherheitsrisiken.
- internationale Vernetzungen, Russland-/China-/ESN-/Remigration-Kontexte.
- Hinweise auf statusbezogen getrennte Primärquellen.

### Kritische Punkte

- Pressequellen brauchen Dublettenbereinigung.
- Bei Vorwürfen immer Rechtsstatus trennen: Verdacht, Ermittlungen, Anklage, Urteil, rechtskräftig.
- Internationale/Spionage-/Russland-Themen nicht mit Art.-21-Kern vermischen, sondern als Sicherheits- und Einflussmodul führen.

### Beste Darstellung

- **Quellenqualitäts-Balken:** amtlich, Gericht, Gutachten, Presse, Dossier, KI-Kopie.
- **Funnel:** Pressehinweis -> Primärquelle vorhanden -> Finding codiert -> juristisch verwertbar.
- **Treemap:** Artikelcluster nach Thema.
- **Offene-Quellen-Liste:** fehlende Primärbelege priorisiert.

Kuchen sinnvoll für Quellentypen, aber nicht für inhaltliche Wahrheit.

## 10. Was im Statistik-Tab als erstes umgesetzt werden sollte

1. **Einstufungsstatus-Karte:** Bund/Länder/JA/Vorfeld mit Status und gerichtlichem Stand.
2. **Gutachtenvergleich:** BfV, GFF, DIMR, Ogorek, 44er, VS-Berichte, Gerichte.
3. **Art.-21-Beweislandkarte:** Menschenwürde, Demokratie, Rechtsstaat, Potentialität, Darauf-Ausgehen, Zurechnung.
4. **Zitat-/Finding-Beweislandkarte:** Beweisstufe, Zurechnung, Rechtsgut, Akteur, Zielgruppe.
5. **Urteilsmodul:** Urteilsart, Ausgang, Instanz, Rechtsfrage, direkter/indirekter AfD-Bezug.
6. **VS-/PMK-Kontext:** Potentialität und Eskalationsumfeld mit Nichtzurechnungswarnung.
7. **Remigration-/Volksbegriff-Modul:** Kontext statt bloße Worthäufigkeit.
8. **Akteursnetz:** Funktionäre, JA, Landesverbände, Vorfeld, Gerichte, Quellen.
9. **Datenqualität:** Primärquelle, Gutachten, Presse, KI-Kopie, statusbezogen getrennt, geprüft.

## 11. Diagrammregel

- **Kuchendiagramm/Donut:** nur für echte Anteile einer Grundgesamtheit: Zurechnung, Quellentypen, Urteilsarten, Statuskategorien.
- **Linienchart:** Zeitreihen: Einstufungen, Potential, PMK, Gerichtsverlauf.
- **Heatmap:** Länder, Rechtsgüter, Betroffenengruppen, Gutachtenvergleich.
- **Stacked Bar:** Rechtsgut nach Beweisstufe, Instanz nach Ausgang, Potenzial nach Kategorie.
- **Sankey:** Quelle -> Befund -> Rechtsgut -> juristische Relevanz.
- **Netzwerk:** Akteure, Organisationen, Vorfeld, Landesverbände.
- **Treemap:** Themencluster, Artikelcluster, direkte Finding-Unterthemen.
- **Scatterplot:** Beweisstärke x Zurechnungsnähe x Häufigkeit.

## 12. Zentrale UI-Warnhinweise

- "Gerichtlich bestätigt" nur verwenden, wenn lokale Gerichtsquelle oder verlässlicher Gerichtsbericht vorliegt.
- "Gesichert rechtsextremistisch" immer mit Ebene und Verfahrensstatus.
- PMK- und VS-Kontextzahlen nicht als AfD-Taten darstellen.
- Nennungen nicht als Schuld- oder Beweisstärke ausgeben.
- Zitate ohne Originaltext nur als Fundstellen-/Metadatenbefund.
- Pressebelege als Recherchehinweis markieren, bis Primärquelle oder Gerichtsvolltext vorhanden ist.

## 13. Das Gesamtbild

Das Gesamtbild entsteht erst aus der Kombination:

- VS-Gutachten liefern Einstufungs- und Beobachtungsgrund.
- Länderberichte zeigen Regionalisierung, JA, Vorfeld und lokale Radikalisierung.
- GFF/DIMR/Ogorek/44er liefern Art.-21-Rechtsauswertung und methodische Einordnung.
- Zitate/Findings liefern konkrete Belege.
- Urteile liefern gerichtliche Belastbarkeit.
- Artikel liefern Ereignisse, Verdrahtungsaufträge und neue Primärankerpfade.
- PMK/VS-Zahlen liefern Potentialitäts- und Eskalationskontext.

Der Statistik-Tab sollte diese Ebenen sichtbar zusammenführen, nicht flach nebeneinanderlegen.
