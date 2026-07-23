# Antragsreife Final Gap Closer 2026

Stand: 2026-07-09

Dieses Register benennt die letzten sieben Verfahrenshaertungen vor der eigentlichen Antragsschrift. Es ersetzt diffuse Maengellisten durch konkrete Aktionen: Beschaffen, Verlinken, Visualisieren und Schriftsatzlogik. Die vorhandenen Belege bleiben nach Quellengewicht, Status und Zurechnung getrennt.

## Kennzahlen

- Handlungsfelder: 7
- Prioritaet A: 7
- lokale Ankersets: 33
- auszugebende Artefakte: 21
- Quote-Findings: 3722
- Actor-Registry-Zeilen: 3722
- Quelleninventar: 10855
- final gefuehrte Anlagen-Pinpoints: 127

## Sieben Verfahrenshaertungen

### FGC-001 - Zitatkorpus als Schriftsatzpaket

- Prioritaet: A
- Ziel: Top-100/Top-300-Zitate nicht als Masse, sondern als gerichtsfeste Einzelbeweise mit Akteur, Funktion, Datum, Kanal, Zielgruppe, Rechtsgut, Kontext und Gegenargument ausspielen.
- Lokale Belege: daten/findings_art21.jsonl; daten/topzitat_dossierklasse_2026.jsonl; daten/quote_actor_registry_2026.jsonl; dokumente/ki_markdown/zitate/; zitate/
- Online-/Originalroute: Original-X/Facebook/YouTube/Bundestags-/AfD-Kanal-URLs aus Proof-Dateien, GFF-/BfV-Fussnoten und Webarchiven als Screenshot-/Archivanker sichern.
- Bestand: quote_findings=3722; direkt_zurechenbar_indikativ=992; top_dossier_rows=150; actor_registry_rows=3722
- Visualisierung: Funnel: 3.722 Quote-Findings -> direkt zurechenbar -> amtlich/gerichtlich -> Top-100/300; Heatmap Akteur x Rechtsgut; Zielgruppenmatrix.
- Verfahrensregel: Haeufigkeit ist Verdichtungsindikator. Antragstauglich wird das Einzelzitat erst mit Quelle, Pinpoint, Akteur, Ebene, Kontext, Beweisstufe und Gegenlese.
- Outputs: daten/topzitat_dossierklasse_2026.jsonl; daten/quote_actor_registry_2026.jsonl; dokumente/hauptquellen/TOPZITAT_DOSSIERKLASSE_2026.md

Umsetzung:
- Topzitat-Dossierklasse auf 300 Zeilen erweitern oder in Kern/Stuetze/Kontext aufteilen.
- Je Zitat: person_id, Funktion am Datum, Parteiebene, Kanal, Zielgruppe, Rechtsgut, Kontextabsatz und Gegenlese-Feld erzwingen.
- Originalpost oder amtlichen Rede-/Parlamentsanker mit Archivdatum und Screenshot-Hash daneben fuehren.

### FGC-002 - Originalkanaele und Hashbelege

- Prioritaet: A
- Ziel: Presse- und Screenshot-Routen auf amtliche, gerichtliche, parteieigene oder archivierte Originale stellen.
- Lokale Belege: daten/source_inventory.jsonl; daten/presseanker_primaerrouten_2026.jsonl; daten/anlagenregister_art21_2026.jsonl; sources/web/
- Online-/Originalroute: Phoenix-/YouTube-Original oder Transkript fuer Chrupalla/VS; X/Facebook/Youtube-Originale; AfD-Programm-/Beschluss-/Pressemitteilungsseiten; Gerichts-/GBA-/Bundestagsseiten.
- Bestand: quelleninventar=10855; social_media_route_sources=22; presse_recherche_routes=230; official_or_primary_sources=5790; hashgesicherte_amtsanker=19
- Visualisierung: Quellenhierarchie-Leiter: Gericht/amtlich/Parteiquelle > Gutachten > parlamentarisch > Presse/Recherche > lokaler Proof; Ampel pro Route.
- Verfahrensregel: Presse ist Rechercheweg, nicht Endpunkt fuer A-Beweis. Zurechnung entsteht durch dokumentierten AfD-Akteur, Organ, Funktion oder Fall-ID.
- Outputs: daten/presseanker_primaerrouten_2026.jsonl; daten/official_web_anchor_integrity_2026.jsonl; daten/antrag_quellenhierarchie_2026.jsonl

Umsetzung:
- Je route_only-Quelle eine Spalte primary_target_url, archive_url, screenshot_hash, retrieval_date und source_weight pflegen.
- Chrupalla/Phoenix nicht als Direktzitat verwenden, bis Originalvideo/Transkript oder archivierter Originalkanal danebensteht.
- Bei Presse zu Straf-/Statusfaellen: Gericht, GBA, Bundestag, Landtag oder Ministerium als Zielanker bevorzugen.

### FGC-003 - Chronikcluster als Einzelfall-Dossiers

- Prioritaet: A
- Ziel: Sekundaere Chronik-/Wikipedia-Routen in Fallzeilen mit Akteur, Parteistatus, Ereignisdatum, Primaeranker, Verfahrensstatus und Art.-21-Funktion zerlegen.
- Lokale Belege: dokumente/hauptquellen/Wikipedia_Abgleich_Rechtsextreme_Neonazistische_Vorfälle_AfD.md; dokumente/hauptquellen/urteilsbelege/; daten/cases.json; daten/findings_art21.jsonl
- Online-/Originalroute: Gerichtsdatenbanken, Pressearchive nur als Suchroute, Parlaments-/Parteiquellen, Staatsanwaltschafts- oder Gerichtsmitteilungen je Cluster.
- Bestand: chronik_cluster_zu_dossierieren=13; gerichtsregister_anker_indikativ=262; findings_total=3868
- Visualisierung: Fallmatrix: Cluster -> Akteur -> Parteistatus -> Primaeranker -> Verfahren -> Art.-21-Funktion.
- Verfahrensregel: Eine Chronik ist kein Beweisersatz. Gerichtsfest wird der Fall erst durch konkreten Primaeranker und Zurechnung.
- Outputs: daten/cases.json; dokumente/hauptquellen/urteilsbelege/; daten/antragsreife_final_gap_closer_2026.jsonl

Umsetzung:
- Pro Cluster case_id, actor, party_status, event_date, legal_status, primary_anchor und VG-Bezug erzeugen.
- Wikipedia nur als Navigationsindex markieren; der Beweisanker muss Gericht, Presseprimaerquelle, Parteistatusbeleg oder amtlicher Text sein.
- Freispruch, laufend, Berufung und Rechtskraft als eigenes Feld fuehren.

### FGC-004 - Gutachten-Provenienz und externe Nachweise

- Prioritaet: A
- Ziel: Alle verwendeten Gutachtenfamilien mit lokaler Datei, Herausgeber/Autor, Version, Seitenanker, Hash, Web-/Archivroute und Gewichtung fuehren.
- Lokale Belege: daten/gutachten_coverage_audit_2026.jsonl; dokumente/hauptquellen/ANTRAGSREIFE_NACHVERDRAHTUNG_2026.md; reports/gutachten-coverage-audit-2026-07-09.md; geheimgutachten/; dokumente/ki_markdown/dokumente/splits/
- Online-/Originalroute: BfV/BMI/BVerwG/VG/OVG fuer amtliche Verfahren; GFF/DIMR/Uni-/Autoren-/Verlagsseiten fuer Gutachten; Webarchive fuer stabile Fassung.
- Bestand: gutachten_audit_rows=11; gutachten_related_inventory_rows=786; anlagen_gutachtenfamilien=11
- Visualisierung: Gutachten-Coverage-Matrix: Quelle x Art.-21-Feld x Seitenanker x Zurechnung x Beweisgewicht.
- Verfahrensregel: Gutachten tragen nur soweit, wie Tatsachenbasis, Methodik, Quelle und Gegenlese sichtbar sind; Verdachtsfallstandard und Verbotsstandard getrennt halten.
- Outputs: daten/gutachten_coverage_audit_2026.jsonl; dokumente/hauptquellen/ANTRAGSREIFE_NACHVERDRAHTUNG_2026.md; reports/gutachten-coverage-audit-2026-07-09.md

Umsetzung:
- family_id, title, author_or_body, publication_date, version, local_hash, page_pinpoint, original_url und archive_url pflegen.
- OCR-/Splitdateien immer auf PDF-/HTML-Ursprung zurueckfuehren.
- Presseuebernahme eines Gutachtens nur als Route verwenden, wenn Originalfassung danebensteht.

### FGC-005 - Beweisvisualisierungen

- Prioritaet: A
- Ziel: Der Statistik-Tab soll die Beweislogik nicht nur tabellarisch zeigen, sondern als Beweisketten: Quelle -> Akteur -> Zurechnung -> Rechtsgut -> Status.
- Lokale Belege: daten/verbotsgruende_18_beweismatrix.jsonl; daten/statistik_statusmatrix_afd_2026.json; daten/statistik_laender_beweismatrix_afd_2026.json; daten/vorfeld_network_edges_2026.jsonl; daten/terror_umsturz_paramilitaer_matrix_2026.jsonl; daten/anlagenregister_art21_2026.jsonl
- Online-/Originalroute: Keine eigene Tatsachenroute; die Visualisierung nutzt nur lokal validierte Source-/Finding-/Case-IDs.
- Bestand: verbotsgruende=18; statusachsen=13; laenderachsen=20; vorfeld_kanten=6; vorfeld_einzelkanten=32; sicherheitsachsen=14
- Visualisierung: Sankey, Timeline, Netzwerkgraph, Heatmap, Statusmatrix, Ressourcen-/Potentialitaetslinie.
- Verfahrensregel: Charts duerfen keine neue Zurechnung erzeugen. Sie zeigen nur bereits codierte Quellen-, Akteurs- und Statuskanten.
- Outputs: index.html#statistik; daten/vorfeld_einzelkanten_2026.jsonl; daten/anlagenregister_art21_2026.jsonl

Umsetzung:
- Sankey Quelle -> Akteur -> Zielgruppe -> Rechtsgut fuer Menschenwuerde/Volksbegriff.
- Status-Timeline Bund/Land/JA/GD/Vorfeld mit Eil, Hauptsache, Rechtskraft.
- Netzwerkgraph Vorfeld/JA/GD/Medien/Sicherheit mit Kantenart und Beweisgewicht.
- Heatmap Zielgruppe x Handlungsmuster x Quelle; Rechtskraft-/Verfahrensmatrix fuer Gerichtsregister.

### FGC-006 - Status- und Rechtskraft-Aktualisierung

- Prioritaet: A
- Ziel: 2026-Verfahren, Eilentscheidungen, Hauptsachen, Berufungen, Freisprueche und Rechtskraft staendig getrennt halten.
- Lokale Belege: daten/statistik_statusmatrix_afd_2026.json; daten/statistik_laender_beweismatrix_afd_2026.json; daten/terror_umsturz_paramilitaer_matrix_2026.jsonl; dokumente/hauptquellen/urteilsbelege/; QUELLEN_URTEILSDB.md
- Online-/Originalroute: BVerwG, OVG/VGH, VG, GBA, OLG, Landtags-/Bundestagsdokumente, Ministerien und Verfassungsschutzbehoerden.
- Bestand: statusachsen=13; laenderachsen=20; sicherheitsfaelle=14; status_getrennt_markierte_anlagen=158
- Visualisierung: Deutschlandmatrix plus Rechtskrafttimeline; Fallstatus-Donut: rechtskraeftig, Eil, Hauptsache, Berufung, laufend, Freispruch.
- Verfahrensregel: Statuspraezision ist Belastbarkeitsgewinn: keine Ueberzeichnung laufender Verfahren, keine Entlastung durch fremde Ebene.
- Outputs: daten/statistik_statusmatrix_afd_2026.json; daten/statistik_laender_beweismatrix_afd_2026.json; daten/terror_umsturz_paramilitaer_matrix_2026.jsonl

Umsetzung:
- Jede Statuszeile mit authority, date, level, procedure, legal_force, evidence_effect und no_relief_rule fuehren.
- Bundes-Verdachtsfall rechtskraeftig und Bundes-Hochstufung als eigene Achse getrennt ausgeben.
- Nichtbeobachtung einzelner Landesebene nur fuer diese Ebene; keine Entlastung von Bund, JA/GD, Vorfeld oder Einzelfund.

### FGC-007 - Antragsspitze und Anlagenlogik

- Prioritaet: A
- Ziel: Aus Datenbestand und Statistik eine Schriftsatzlogik bauen: These, Norm, Top-Anlagen, Zitate, Gegenlese, Gegenargument, Antwort, Beweisangebot.
- Lokale Belege: dokumente/hauptquellen/ANTRAGSSPITZE_TOP40_BEWEISE_2026.md; dokumente/hauptquellen/SCHRIFTSATZ_EXPORT_TOP_BEWEISE_2026.md; daten/anlagenregister_art21_2026.jsonl; daten/verbotsgruende_18_beweismatrix.jsonl
- Online-/Originalroute: Nur fuer verwendete Einzelbeweise: amtliche/gerichtliche/parteieigene Originale und Archivfassungen je Anlage.
- Bestand: verbotsgruende=18; anlagen_rows=158; final_pinpoints=127; local_line_anchors=127
- Visualisierung: Antragsspitzen-Board: Kern/Stuetze/Kontext; Normfeld -> Beweis -> Anlage -> Gegenargument -> Antwort.
- Verfahrensregel: Bis auf die eigentliche Antragsschrift wird alles vorbereitet; die Daten duerfen nicht als fertiger Antrag missverstanden werden.
- Outputs: dokumente/hauptquellen/ANTRAGSSPITZE_TOP40_BEWEISE_2026.md; dokumente/hauptquellen/SCHRIFTSATZ_EXPORT_TOP_BEWEISE_2026.md; dokumente/hauptquellen/ANLAGENREGISTER_ART21_2026.md

Umsetzung:
- Pro Verbotsgrund Top-10-Anlagen mit These, Beweistatsache, Zurechnung, Gegenargument und Antwort ausgeben.
- Anlagenreihenfolge: Kernbeweis Menschenwuerde/Demokratie, Zurechnung/Darauf-Ausgehen, Potentialitaet, Status, Stuetzbeweise, Kontext.
- Jede Anlage mit Beweisangebot und Ueberzeichnungsgrenze fuehren.

## Gesamtregel

Validitaet vor Rhetorik: Keine neue Tatsachenbehauptung ohne Quelle, Pinpoint, Akteur/Ebene, Zurechnung, Status und Gegenlese. Diagramme duerfen nur vorhandene Kanten sichtbar machen. Presse, Chronik und Webroute sind nur dann stark, wenn der Primaeranker danebensteht.
