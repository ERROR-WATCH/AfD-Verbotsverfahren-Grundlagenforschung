# Antragsreife-Perfektionsaudit 2026

Dieses Audit trennt Quellenintegritaet, Pinpoint, Zurechnung, Verfahrensstatus und Beweisgewicht.

## P0-QUELLENINTEGRITAET - Amtliche Webarchive
- Rang: P0
- Bestand: 9 GBA/OLG/Bundestag-Archivkopien neu vom Original gezogen; Build-Skript schuetzt sources/web/**.
- Perfektionsschritt: Hash und Downloadzeit pro amtlichem Webanker im Manifest fuehren.
- Lokale Dateien: scripts/close-antragsreife-gaps.mjs, sources/web/gba/, sources/web/hessen-olg/, sources/web/bundestag/
- Kennzahl: {"official_web_archives_reloaded":9}
- Verfahrensnutzen: Schuetzt Primaertext-Integritaet.

## P1-TOP10-PINPOINTS - 18 Verbotsgruende
- Rang: P1
- Bestand: Alle 18 Achsen sind source_id- und repo_path-gebunden.
- Perfektionsschritt: Pro Verbotsgrund Schriftsatz-Top-10 mit Seite/Rn./Zeile, Akteur, Ebene, Zurechnung und Gegenargument erzeugen.
- Lokale Dateien: daten/verbotsgruende_18_beweismatrix.jsonl, daten/vg_source_match_audit_2026.jsonl
- Kennzahl: {"verbotsgruende":18}
- Verfahrensnutzen: Direkt zitierbare Antragspassagen.

## P1-AKTEURSREGISTER-ZITATE - Zitatkorpus
- Rang: P1
- Bestand: Quote-Findings und Proof-Pfade vorhanden.
- Perfektionsschritt: Belegpfad-Findings mit person_id/org_id, Rolle am Datum, Parteiebene, Kanal, Zielgruppe, Rechtsgut und Gegenlese normalisieren.
- Lokale Dateien: daten/findings_art21.jsonl, daten/zitat_statistik_2026.json, daten/zurechnung_belegpfade_2692_audit.jsonl
- Kennzahl: {"quote_findings":3611,"belegpfad_routes":2692}
- Verfahrensnutzen: Staerkt Zurechnung und Kontext.

## P1-VERFAHRENSSTATUS - Sicherheits- und Gerichtsfaelle
- Rang: P1
- Bestand: GBA-, OLG-, Bundestags- und Registeranker fuer Reuss/Malsack, Saechsische Separatisten, Jian G./Krah und Bystron angelegt.
- Perfektionsschritt: Jede Fallzeile mit Instanz, Aktenzeichen, Datum, Parteistatus, Zugangskante, Beschuldigtenstatus, Rechtskraftfeld und no_overclaim-Text fuehren.
- Lokale Dateien: daten/terror_umsturz_paramilitaer_matrix_2026.jsonl, dokumente/hauptquellen/urteilsbelege/, sources/web/gba/
- Kennzahl: {"security_rows":10,"status_sensitive":6}
- Verfahrensnutzen: Hart, aber ohne Ueberzeichnung.

## P1-QUELLENHIERARCHIE-C - C-Quellen und Arbeitskopien
- Rang: P1
- Bestand: C-Quellen sind Navigation/Arbeitskopie; A/B-Anker tragen Kernachsen.
- Perfektionsschritt: Antragsexport rendert A/B tragend; C nur mit Primaeranker-Verweis, Archiv/Hash oder Route-only-Gewichtung.
- Lokale Dateien: daten/source_inventory.jsonl, daten/statistik_manifest.json
- Kennzahl: {"c_sources":4788,"generated_copies":4616}
- Verfahrensnutzen: Quellengewichtung bleibt angreiffest.

## P1-VORFELD-EINZELKANTEN - JA/GD/Vorfeld/Medien
- Rang: P1
- Bestand: Vorfeld- und Medienkanten sind Art.-21-Feldern zugeordnet.
- Perfektionsschritt: Sammelkanten in Ereigniskanten ausspielen: Person, Organisation, Event, Datum, Quelle, Pinpoint, Parteifunktion, Kantenart, Gegenlese.
- Lokale Dateien: daten/vorfeld_network_edges_2026.jsonl, daten/nius_afd_medienkante_2026.jsonl
- Kennzahl: {"vorfeld_edges":6}
- Verfahrensnutzen: Netzwerkbeweis ohne pauschale Umfeldzurechnung.

## P2-CHRONIKCLUSTER - Chronikcluster
- Rang: P2
- Bestand: Chronikdatei und Registerrouten vorhanden.
- Perfektionsschritt: 13 Cluster als case_id-Zeilen mit Akteur, Parteistatus, Ereignisdatum, Primaeranker, Ausgang und VG-Bezug fuehren.
- Lokale Dateien: dokumente/hauptquellen/Wikipedia_Abgleich_Rechtsextreme_Neonazistische_Vorfälle_AfD.md, daten/cases.json
- Kennzahl: {"cluster_target":13}
- Verfahrensnutzen: Navigationsmaterial wird Einzelfallbeleg.

## P2-UI-ANTRAGSKERN - Dashboard/Export
- Rang: P2
- Bestand: Portal zeigt Achsen, Statusmatrix, Manifest und Beweisrouten.
- Perfektionsschritt: UI trennt Antragstragend, stuetzend, Kontext, Route-only und Statussensibel; Export liefert A/B-Toplisten.
- Lokale Dateien: index.html, daten/statistik_manifest.json
- Kennzahl: {"statistikobjekte":258}
- Verfahrensnutzen: Richtige Gewichtung im Verfahren.

