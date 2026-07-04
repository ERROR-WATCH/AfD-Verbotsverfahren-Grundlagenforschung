# Statistikmodul AfD-Verbotsverfahren-Grundlagenforschung

## Executive Summary
Dieses Modul trennt strikt zwischen drei Ebenen:
1. amtliche und gerichtliche Zahlen,
2. thematische Korpusauswertung aus den im Repo liegenden Belegen,
3. offene Recherchefelder, die noch nicht belastbar quantifiziert sind.

Für das Repository sind nur solche Statistiken tragfaehig, die direkt eine der verfassungsrechtlichen Fragen des Art. 21 GG beruehren: Zielrichtung, Menschenwuerde, ethnischer Volksbegriff, Minderheitenfeindlichkeit, Zurechnung, Planmaessigkeit, Potentialitaet, digitale Mobilisierung und Verdichtungsmuster.

Die derzeit robustesten Reihen sind:
- BKA-PMK-Fallzahlen 2023 bis 2025,
- BfV-Lagezahlen 2024/2025,
- BfV-Lagebericht Sicherheitsbehoerden 2025,
- BfV-Folgegutachten 2021 (Netzwerk- und Einflusszahlen),
- thematische Treffer und Zitatcluster aus den vorhandenen Gutachten, Verfassungsschutzberichten und dem Urteilsregister.

Diese Reihen werden im Repo als konsistente Primärblöcke gefuehrt, sofern die jeweilige Fundstelle, Jahresfassung und Ebene sichtbar benannt sind.

Alles andere bleibt nur dann Statistik, wenn die Zahl aus einer konkreten Quelle mit Fundstelle ableitbar ist.

## Was hier als Statistik gilt
Keine reine Repo-Technik:
- keine Zaehler fuer PDFs, Markdown-Dateien, Ordner oder Linklisten,
- keine bloeßen Volltextmengen ohne thematische Zuordnung,
- keine Mischwerte aus Verdacht, Urteil, Kommentar und Recherchehinweis.

Stattdessen:
- Belegmengen nach Thema,
- Delikt- und Falltypen,
- Akteursdichte,
- Narrativcluster,
- behördliche Einstufungen,
- Zeitreihen und regionale Verdichtungen,
- Quellenstarke und Beweisstufe.

## Aktuell belastbare Kernzahlen
### Amtliche Reihen
| Bereich | Kennzahl | Wert | Quelle | Beweisstufe |
|---|---|---:|---|---|
| PMK-rechts | Straftaten 2023 | 28.945 | `dokumente/hauptquellen/2023PMKFallzahlen.pdf` | A |
| PMK-rechts | Straftaten 2024 | 25.660 | `dokumente/hauptquellen/BKA_Fallzahlen_PMK_2024.md` | A |
| PMK-rechts | Straftaten 2025 | 28.450 | `dokumente/hauptquellen/BKA_Fallzahlen_PMK_2025.md` | A |
| BfV 2025 | rechtsextremistisches Personenpotenzial | 58.700 | `dokumente/vfs_berichte_bundeslaender/2026-06-30-verfassungsschutzbericht-2025.pdf` | A |
| BfV 2025 | AfD zugerechnetes Potenzial | 28.000 | `dokumente/vfs_berichte_bundeslaender/2026-06-30-verfassungsschutzbericht-2025.pdf` | A |
| Sicherheitsbehoerden 2025 | Verfahren und Massnahmen | 493 | `dokumente/vfs_rechtsextremismus/BfV_Lagebericht_Rechtsextremisten_in_Sicherheitsbehoerden_2025.pdf` | A |
| Sicherheitsbehoerden 2025 | rechtsextremistisch zugeordnet | 343 | `dokumente/vfs_rechtsextremismus/BfV_Lagebericht_Rechtsextremisten_in_Sicherheitsbehoerden_2025.pdf` | A |
| Fluegel-Netzwerk 2021 | Verbindungen | 14.371 | `geheimgutachten/BfV-AfD-Folgegutachten_2021_05_E_Einflussnahme_Fluegel.md` | A |
| Fluegel-Netzwerk 2021 | AfD-Profile mit Interaktion | 334 | `geheimgutachten/BfV-AfD-Folgegutachten_2021_05_E_Einflussnahme_Fluegel.md` | A |

### Inhaltsbezogene Korpuszahlen
| Cluster | Wert | Quelle | Bedeutung |
|---|---:|---|---|
| Migration/Remigration im Gutachtenkorpus | 5.710 | `statistikquellen.md` | zentrale Zielgruppen- und Mobilisierungsfrage |
| Islam/Muslime im Gutachtenkorpus | 9.124 | `statistikquellen.md` | Minderheitenfeindlichkeit |
| Gewalt/Widerstand im Gutachtenkorpus | 5.494 | `statistikquellen.md` | aktiv-kaempferische Rhetorik |
| Antisemitismus im Gutachtenkorpus | 3.670 | `statistikquellen.md` | Menschenwuerde und Feindbildbildung |
| ethnischer Volksbegriff im Gutachtenkorpus | 2.642 | `statistikquellen.md` | völkische Zielrichtung |
| Demokratieprinzip im Gutachtenkorpus | 332 | `statistikquellen.md` | FDGO-Bezug |
| Rechtsstaatsprinzip im Gutachtenkorpus | 226 | `statistikquellen.md` | institutionelle Delegitimierung |

### Urteilsregister
Das Register ist nicht nur "239 Faelle", sondern muss nach Delikt- und Verfahrensart gelesen werden. Besonders tragfaehig sind die bereits ausgewiesenen Registercluster:
- Volksverhetzung,
- Verfassungswidrige Kennzeichen / § 86a StGB,
- Koerperverletzung und Gewalt,
- Beleidigung / Verleumdung,
- Waffen- und Sprengstoffbezug,
- Nötigung / Wahl- und Amtskonflikte,
- Verfahrens- und Einstellungsstatus.

## Juristische Prüffelder
Jede Statistik muss mindestens einem dieser Felder zugeordnet werden:
- Zielrichtung gegen die freiheitliche demokratische Grundordnung,
- aktiv-kaempferisches Vorgehen,
- planmaessiges Handeln,
- Zurechnung zur Partei,
- Verhalten von Anhaengern,
- Potentialitaet,
- organisatorische Staerke,
- parlamentarische Macht,
- digitale Mobilisierungsfaehigkeit,
- gesellschaftliche Wirkmacht,
- Wiederholungs- und Verdichtungsmuster.

## Was noch nicht tragfaehig genug ist
Diese Felder sind im Repo inhaltlich angelegt, aber fuer eine harte Zahl oft noch nur indikativ:
- Mitgliederentwicklung,
- kommunale Mandate,
- Fraktionsstaerken ueber alle Ebenen,
- Social-Media-Reichweiten,
- Bot- und Automationshinweise,
- Plattform-Engagement,
- Demonstrationsmobilisierung,
- bundeslaenderuebergreifende Langzeitreihen ab 2013.

Sie koennen nur dann in das Statistikmodul, wenn eine konkrete Quelle, Fundstelle und eine reproduzierbare Berechnung vorliegen.

## Konkrete Ausbaureserven aus den MD-Korpora
Diese Auswertungen sind in den vorhandenen MD-Dateien bereits angelegt und koennen als naechste Statistikmodule sauber extrahiert werden:

- BfV-Verfassungsschutzbericht 2023 und 2025: AfD-Potenzial, Mitgliederzahlen, Gewaltorientierung, Mobilisierung in sozialen Medien, Passdeutsche, Remigration, Großer Austausch, Bevölkerungsaustausch und Plattformnennungen wie Telegram, TikTok, Instagram, X und Facebook.
- Landesverfassungsschutzberichte 2023/2024: AfD-Status je Bundesland, Nennungen von Landesverband, Jugendorganisation, Vorfeld, Netzwerken und digitaler Propaganda; besonders geeignet fuer eine Bundesland-Matrix mit Status, Thema und Fundstelle.
- BfV-Folgegutachten 2021: Kapitelauswertungen nach Menschenwuerde, Demokratieprinzip, Rechtsstaatsprinzip, Nationalsozialismus und Verbindungen; daraus lassen sich Kapitel-, Abschnitts- und Akteursstatistiken ableiten.
- BfV-Sonderberichte zu Rechtsextremismus im Internet, Musik, Symbolen und Antisemitismus: daraus lassen sich Plattform-, Kanal- und Motivstatistiken extrahieren, ohne Social-Media-Hinweise mit amtlichen Lagezahlen zu vermischen.
- Gutachten-Methodik und Gesamtwuerdigung: belastbare Querschnittszahlen zu Personen, Organisationseinheiten, Bundes-/Land-/Kreisebene, Verbindungen, Reaktionen und Freundschaften.
- Urteilsregister: sauber trennbare Reihen nach Delikt, Verfahrensstatus, Bundesland, AfD-Bezug und Akteursrolle.

Am meisten Zusatzwert liefern dabei nicht weitere Gesamtzahlen, sondern folgende neue Statistikachsen:
- Ebene: Bund, Land, Kreis, Kommune, Parteieinheit, Jugendorganisation, Vorfeld.
- Zeit: Jahr, Berichtsfassung, Auswertungszeitraum, Vorher-Nachher-Vergleich.
- Narrativ: Remigration, ethnischer Volksbegriff, Minderheitenfeindlichkeit, Medienfeindlichkeit, Gewalt/Widerstand, NS-Relativierung, Demokratieverachtung, Russlandnaehe, digitale Mobilisierung.
- Plattform: Telegram, TikTok, Instagram, X, Facebook, YouTube, Messenger, Foren.
- Rollen: Funktionstraeger, Mandatstraeger, einfache Mitglieder, Vorfeldakteure, Medienakteure, Influencer.
- Rechtsstatus: Verdacht, Einstufung, laufendes Verfahren, rechtskraeftiges Urteil, Einstellung, Strafbefehl.

## Belegqualitaet
| Stufe | Bedeutung | Verwendung |
|---|---|---|
| A | amtlich, gerichtliche Primärquelle, Parlament, Behörde | tragende Zahlen |
| B | wissenschaftlich oder juristisch sauber begruendet | tragende Stuetzwerte |
| C | seriöse Recherche mit Primärbelegen | ergänzend |
| D | NGO-/Monitoring-Bericht mit Methodik | indikativ |
| E | Social-Media-Beleg, Screenshot, Einzelhinweis | nur Hinweis |
| F | ungeprueft, widersprüchlich oder veraltet | nicht tragend |

## Ergebnislogik
Eine Statistik ist nur dann verwertbar, wenn sie alle folgenden Fragen beantwortet:
- Was belegt sie?
- Welche Quelle traegt sie?
- Welches juristische Prüffeld betrifft sie?
- Ist sie mit Verdacht, Feststellung oder Urteil vermischt?
- Ist sie zeitlich und regional sauber abgegrenzt?

Wenn eine Zahl diese Fragen nicht beantwortet, gehoert sie nicht ins Modul.

## Datenmodell
Das Repo soll die Statistik künftig in getrennten Dimensionen halten:
- Belege,
- Akteure,
- Narrative,
- Gerichtsfaelle,
- Verfassungsschutz,
- Potentialitaet,
- Methodik.

Siehe dazu `STATISTIK_METHODIK.md` und die CSV-Schemata unter `daten/`.

## Empfohlene Grafiken
- Zeitreihe PMK-rechts 2023 bis 2025,
- Zeitreihe BfV-Lagezahlen 2024 bis 2025,
- Balken Deliktarten im Urteilsregister,
- Heatmap Bundeslaender nach Belegdichte,
- Netzwerkgraph Partei / Vorfeld / Medien / Influencer,
- Sankey Quelle -> Narrativ -> Zielgruppe -> Kanal,
- Matrix Belegtyp -> Quellenstufe -> Prüffeld.

## Repo-Struktur
- `STATISTIKMODUL.md`
- `STATISTIK_METHODIK.md`
- `daten/statistik_belege.csv`
- `daten/statistik_akteure.csv`
- `daten/statistik_narrative.csv`
- `daten/statistik_gerichtsfälle.csv`
- `daten/statistik_verfassungsschutz.csv`
- `daten/statistik_potentialitaet.csv`
- `visualisierungen/`
- `dashboard/statistik.html`

## Kurzfazit
Das Modul ist bewusst konservativ: lieber wenige, nachpruefbare Zahlen als viele scheinbar starke, aber methodisch unsaubere Angaben. Genau das braucht dieses Repo.
