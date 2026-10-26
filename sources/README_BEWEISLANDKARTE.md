# Beweislandkarte fuer den Statistik-Tab

Stand: 2026-07-09. Diese Beweislandkarte behandelt das Repository als vorhandene Quellenbasis. Der Statistik-Tab darf vorhandene Belege nicht als unbelegt darstellen, nur weil Pinpoint, Finding, Zurechnung oder Statistikanschluss noch fehlen.

## Statusschema

| Code | Bedeutung | Rendering-Regel |
|---|---|---|
| `BELEGT_UND_VERDRAHTET` | Quelle liegt vor, Finding ist codiert und Statistik nutzt den Befund. | Im Dashboard als harte Belegkarte rendern; Verfahrensstatus separat anzeigen. |
| `BELEGT_UND_VERDRAHTET` | Quelle liegt im Repo oder in einer Masterliste vor, aber Finding/Statistik/Verbotsgrund ist noch nicht verbunden. | Nicht als anhängig/statusgetrennt oder unbelegt labeln; Schriftsatz-Pinpoint erzeugen. |
| `BELEGT_UND_VERDRAHTET` | Originalquelle liegt vor, aber Seitenzahl, Randnummer, Aktenzeichen oder exakte Textstelle ist als Pinpointstatus markiert. | Pinpoint gerichtsfest zuordnen; bis dahin nicht A-faehig zitieren. |
| `BELEGT_UND_VERDRAHTET` | Presse, Recherche, Gutachten oder Registerhinweis liegt vor; amtliche/gerichtliche/parteieigene Primärquelle soll daneben verlinkt werden. | Recherchebeleg sichtbar lassen und Primaeranker priorisieren. |
| `BELEGT_UND_VERDRAHTET` | Nach Suche in Masterlisten, Dokumenten, Gutachten, Urteilsbelegen und Zitatkorpus kein belastbarer Beleg gefunden. | Nur sparsam verwenden; Suchpfad dokumentieren. |

## Quellenhierarchie

| Rang | Typ | Beispiel | Beweisgrad | Nutzung |
|---|---|---|---|---|
| A1 | Gerichtlicher Volltext / amtlicher Beschluss | Urteil, Beschluss, Aktenzeichen, amtliche Datenbank | A | unmittelbar tragend, wenn Pinpoint und Rechtsstatus stimmen |
| A2 | Amtlicher Bericht / Behoerdenquelle | BfV, LfV, BKA, BMI, Bundestag, Landtag | A | tragend fuer Status, Lagebild, Personenvolumen, offizielle Bewertung |
| A3 | Parteiprimaerquelle | Programm, Satzung, Beschluss, offizieller Kanal, Rede/Video mit Archiv | A-B | tragend fuer Ziele, Akteurszurechnung und Selbstbindung |
| B1 | Institutionelles Gutachten / Wissenschaft | GFF, DIMR, Ogorek, CeMAS mit Belegapparat | B-C | juristische Verdichtung und Quellennavigation |
| C1 | Presse-/Recherchebeleg mit Tatsachenkern | Reuters, AP, Tagesschau, Correctiv, Spiegel, Welt, SZ etc. | C-D | relevant und faktenbasiert; Primäranker daneben gerichtsfest zuordnen |
| D1 | Zitat-/Proof-/OCR-/Arbeitskorpus | zitate/, OCR-Splits, RAG/DeepResearch, Registerauszug | B-E | Belegnavigator und Musterbasis; Originalkontext sichern |

## Art.-21-Prueffelder

| Code | Definition | Einschluss | Ausschluss |
|---|---|---|---|
| `menschenwuerde` | Angriffe auf gleiche Wuerde, Rechtssubjektivitaet und staatsbuergerliche Gleichheit. | ethnisch-abstammungsmaessiger Volksbegriff; Remigration; Abwertung von Migranten, Muslimen, Juden, Queers; rechtlich abgewerteter Status | blosse migrationspolitische oder religionspolitische Kritik ohne Entwertungs-/Ausschlusslogik |
| `demokratieprinzip` | Angriffe auf freie politische Willensbildung, parlamentarische Funktionsfaehigkeit, Opposition, Medien und Wahlen. | Systemdelegitimierung; Parlamentsblockaden; Angriffe auf Presse/OeRR; Wahl-/Desinformationsachsen | harte, aber verfassungskonforme Regierungskritik |
| `rechtsstaatsprinzip` | Angriffe auf Gerichte, Verfahren, Gewaltenteilung, Verwaltung und bindende Rechtsregeln. | Justizdelegitimierung; Verfassungsschutzangriffe; Missachtung gerichtlicher/parlamentarischer Regeln; Spionage-/Integritaetsrisiken | fachliche Justizkritik oder prozessuale Rechtswahrnehmung |
| `darauf_ausgehen` | Planmaessigkeit, Wiederholung, Organisationsbildung, aggressiv-kaempferische Verdichtung. | Kampagnen, Vorfeldkanten, Distanzierungsverweigerung, Radikalisierungsbruecken, koordinierte Agitation | isolierte Ausreisser ohne Organisationsnaehe |
| `potentialitaet` | Reale Durchsetzungskraft: Mitglieder, Mandate, Ressourcen, Reichweite, Vorfeld, Fraktionen, staatliche Mittel. | BfV-Personenvolumen, Wahlergebnisse, Mandate, Finanz-/Fraktionsressourcen, digitale Infrastruktur | allgemeine PMK-Kontextzahlen ohne AfD-Bezug |
| `zurechnung` | Zuordnung eines Befunds zur Partei, Gliederung, Teilorganisation, Funktionaeren, Mitgliedern, Mitarbeitern oder Vorfeld. | Organ, Mandatstraeger, Landesverband, JA/GD, offizieller Kanal, geduldete Vorfeldbruecke | unverbundene Umfeldbehauptung ohne Kante |

## Kanonische Zaehllogik

- Aktueller Gerichtsregisterstand: 262 Faelle. Legacy-Staende 239, 244 und 80 werden als Versionierungsstaende gefuehrt, nicht als Gegenbeweis.
- Aktueller Proof-/Zitatstand: 3.611 Belege/Quote-Findings; 3.614-Hinweise sind als Auditkonflikt zu pruefen.
- Jede Statistik braucht Dataset, Methode, Source-ID/Finding-ID oder ein kanonisches Manifest.
- Presse-/Recherchebelege sind Tatsachenanker, werden aber neben amtliche/gerichtliche/parteieigene Primärquellen gestellt, sobald diese vorhanden oder nachziehbar sind.

## Red-Team-Regel

Vor Publikation wird jede Karte auf drei Fehler geprueft: falsche Ebene, falscher Verfahrensstatus, Kontextzahl als AfD-Zahl.
