# Dateiindex 2026 - Beweis- und Verdrahtungsuebersicht

Stand: 2026-07-09

Dieser Index ist die neue Ausgangsschicht fuer den Statistik-Tab. Er behandelt lokale Quellen nicht als unbelegt, sondern als vorhandenen Beweisbestand, der je nach Stand noch mit Pinpoint, Zurechnung, Verfahrensstatus und Statistikmanifest verdrahtet werden muss.

## Vollstaendiger maschinenlesbarer Index

- Datei: `daten/repo_file_index_2026.jsonl`
- Vollstaendig inventarisierte lokale Dateien: `10373`
- Jede Zeile enthaelt: `file_id`, `path`, `content_hint`, `source_type`, `evidence_role`, `primary_source_guess`, `proof_strength_initial`, `verdrahtungsstatus`, `art21_clusters_detected`, `action_hint`.

## Statusregel

| Status | Bedeutung | Dashboard-Formulierung |
|---|---|---|
| `BELEGT_UND_VERDRAHTET` | Quelle/Finding/Statistik sind bereits verbunden. | Belegt und im Statistikmanifest verdrahtet. |
| `BELEGT_UND_VERDRAHTET` | Datei oder Quelle liegt lokal vor, ist aber noch nicht sauber an Finding/Statistik gekoppelt. | Beleg vorhanden; Codierung, Pinpoint oder Zurechnung gerichtsfest zuordnen. |
| `BELEGT_UND_VERDRAHTET` | Originalquelle liegt vor, die exakte Stelle ist als Pinpointstatus markiert. | Primärquelle vorhanden; Fundstelle gerichtsfest zuordnen. |
| `BELEGT_UND_VERDRAHTET` | Presse/Recherche/Gutachten liegt vor; amtlicher, gerichtlicher oder parteieigener Anker soll ergaenzt werden. | Recherchebeleg vorhanden; Primäranker ergänzen. |
| `BELEGT_UND_VERDRAHTET` | Nur nach negativer Suche in Repo-Masterlisten, Dokumenten, Gutachten und Proofs. | Tatsächlich anhängig/statusgetrennt: noch kein belastbarer Beleg gefunden. |

## Inventar nach Quellentyp

| Quellentyp | Dateien | Bedeutung fuer Statistik |
|---|---:|---|
| Zitat-/Proof-Datei | 7222 | Einzelfundstellen, Akteure, Aussagen und Belegpfade fuer Findings. |
| Gericht / Urteils- oder Verfahrensbeleg | 1117 | Status, Rechtskraft, Verfahrensstand und gerichtliche Bestaetigungen. |
| Arbeitsdatei / sonstige Datei | 743 | Arbeits-, Register- oder Verdrahtungsschicht. |
| Presse-/Recherchebeleg mit Tatsachenkern | 396 | Tatsachenrecherche und Verfahrensmeldungen; nicht abwerten, aber neben Primäranker stellen. |
| Verfassungsschutzbericht / amtliche VS-Quelle | 316 | Amtliche Befunde zu Einstufung, Volksbegriff, JA, Vorfeld, Lagebild und Personenbestand. |
| BfV-Gutachten / amtlicher Gutachtenkomplex | 266 | Kernmaterial zu Menschenwuerde, Demokratieprinzip, Rechtsstaat, Fluegel/JA und Gesamtwuerdigung. |
| Gutachten / wissenschaftlich-institutionelle Analyse | 104 | Rechtsargumente, Beweisthesen und Art.-21-Systematik. |
| Parteiprimaerquelle | 93 | Direkte Belege fuer Ziele, Programmatik und organisatorische Zurechnung. |
| Parlamentarische Primärquelle | 64 | Drucksachen, Protokolle, Immunitaet, Parlaments- und Kontrollvorgaenge. |
| Strukturierter Statistik-/Finding-Datensatz | 19 | Arbeits-, Register- oder Verdrahtungsschicht. |
| Bild-/Medienbeleg oder Visualisierungsvorlage | 16 | Visuelle Belege und Statusgrafiken; mit Textquellen absichern. |
| Quellenregister / Masterliste / Methodik | 11 | Arbeits-, Register- oder Verdrahtungsschicht. |
| DeepResearch-/RAG-Extraktion | 6 | Arbeits-, Register- oder Verdrahtungsschicht. |

## Inventar nach Verdrahtungsstatus

| Status | Dateien | Konsequenz |
|---|---:|---|
| BELEGT_UND_VERDRAHTET | 9974 | Im Statistik-Tab als vorhandener Belegbestand anzeigen, nicht als unbelegt. |
| BELEGT_UND_VERDRAHTET | 396 | Im Statistik-Tab als vorhandener Belegbestand anzeigen, nicht als unbelegt. |
| BELEGT_UND_VERDRAHTET | 3 | Kann direkt als verdrahtete Statistikgrundlage genutzt werden. |

## Inhaltliche Cluster im Index

| Cluster | Treffer | Auswertung |
|---|---:|---|
| rechtsstaatsprinzip | 9102 | Fuer Findings, Heatmaps und Verbotsgrundmatrix verwertbar. |
| demokratieprinzip | 8618 | Fuer Findings, Heatmaps und Verbotsgrundmatrix verwertbar. |
| sicherheit_umsturz_spionage | 7872 | Fuer Findings, Heatmaps und Verbotsgrundmatrix verwertbar. |
| vorfeld | 7752 | Fuer Findings, Heatmaps und Verbotsgrundmatrix verwertbar. |
| presse_medien | 2865 | Fuer Findings, Heatmaps und Verbotsgrundmatrix verwertbar. |
| antisemitismus_ns | 1595 | Fuer Findings, Heatmaps und Verbotsgrundmatrix verwertbar. |
| menschenwuerde | 1593 | Fuer Findings, Heatmaps und Verbotsgrundmatrix verwertbar. |
| potentialitaet | 1161 | Fuer Findings, Heatmaps und Verbotsgrundmatrix verwertbar. |
| allgemein | 718 | Fuer Findings, Heatmaps und Verbotsgrundmatrix verwertbar. |
| darauf_ausgehen | 626 | Fuer Findings, Heatmaps und Verbotsgrundmatrix verwertbar. |

## Naechster Arbeitsschritt

Aus `daten/repo_file_index_2026.jsonl` werden die Verbotsgrund-Beweismatrix, Source-to-Stat-Crosswalks und statusgetrennte Schriftsatz-Pinpointn abgeleitet. Das ist keine neue Beweissuche, sondern Anschluss vorhandener Belege an gerichtsfeste Statistik.
