# Statistikquellen und Methodik
Stand: 04.07.2026
Diese Datei dokumentiert die Datenbasis der im Statistik-Tab angezeigten Kennzahlen. Alle Werte wurden aus dem lokalen Repositorybestand berechnet; externe Nachladung war fuer diese Runde nicht erforderlich, weil die amtlichen VS-Berichte und Gutachten lokal vorliegen.

Konsistenzregel: BfV-/BMI-Verfassungsschutzberichte, BKA-PMK-Fallzahlen, BfV-Gutachten und Gerichtsregister gelten fuer dieses Repo als konsistente Primärblöcke, solange die exakten Fundstellen und Jahresstaende getrennt ausgewiesen werden.
## Zaehlbasis
| Bereich | Wert | Quelle |
|---|---:|---|
| Gerichtsfälle | 239 | `index.html` Arrays `cases`, `quotes`, `documents` |
| Belegzitate | 3.611 | `index.html` Arrays `cases`, `quotes`, `documents` |
| Dokumente | 1.460 | `index.html` Arrays `cases`, `quotes`, `documents` |
| Lokale PDFs | 815 | `index.html` Arrays `cases`, `quotes`, `documents` |
| Verfassungsschutz-Tab | 60 | `index.html` Arrays `cases`, `quotes`, `documents` |
| Gutachten-Tab | 161 | `index.html` Arrays `cases`, `quotes`, `documents` |
| Gutachten: Dateien gesamt | 173 | `geheimgutachten/`, `geheimgutachten_netzpolitik/`, `dokumente/splits/`, `dataset/A__*.jsonl` |
| Gutachten: Portal-Dokumente im Gutachten-Tab | 161 | `geheimgutachten/`, `geheimgutachten_netzpolitik/`, `dokumente/splits/`, `dataset/A__*.jsonl` |
| Gutachten: Ausgewertete TXT/MD-Volltexte | 118 | `geheimgutachten/`, `geheimgutachten_netzpolitik/`, `dokumente/splits/`, `dataset/A__*.jsonl` |
| Gutachten: Volltext-Zeilen | 84.484 | `geheimgutachten/`, `geheimgutachten_netzpolitik/`, `dokumente/splits/`, `dataset/A__*.jsonl` |
| Gutachten: Volltext-Wörter | 2.177.216 | `geheimgutachten/`, `geheimgutachten_netzpolitik/`, `dokumente/splits/`, `dataset/A__*.jsonl` |
| Gutachten: RAG-Belegpassagen | 11.759 | `geheimgutachten/`, `geheimgutachten_netzpolitik/`, `dokumente/splits/`, `dataset/A__*.jsonl` |
| Verfassungsschutz: VS-Dateien auf Datenträger | 60 | `dokumente/vfs_berichte_bundeslaender/`, `dokumente/splits/`, `dokumente/hauptquellen/` |
| Verfassungsschutz: Portal-Dokumente im VS-Tab | 60 | `dokumente/vfs_berichte_bundeslaender/`, `dokumente/splits/`, `dokumente/hauptquellen/` |
| Verfassungsschutz: Ausgewertete Text/PDF-Teile | 57 | `dokumente/vfs_berichte_bundeslaender/`, `dokumente/splits/`, `dokumente/hauptquellen/` |
| Verfassungsschutz: Volltext-Zeichen | 19.331.104 | `dokumente/vfs_berichte_bundeslaender/`, `dokumente/splits/`, `dokumente/hauptquellen/` |
| Verfassungsschutz: BfV 2025 Voll-/Kurzfassung | 2 | `dokumente/vfs_berichte_bundeslaender/`, `dokumente/splits/`, `dokumente/hauptquellen/` |

## BfV-Verfassungsschutzbericht 2025: Lagezahlen
Quelle: [`2026-06-30-verfassungsschutzbericht-2025.pdf`](./dokumente/vfs_berichte_bundeslaender/2026-06-30-verfassungsschutzbericht-2025.pdf), lokale Extraktion mit `pdftotext`.

| Kennzahl | 2024 | 2025 |
|---|---:|---:|
| Rechtsextremistisches Personenpotenzial nach Abzug Mehrfachzuordnungen | 50.250 | 58.700 |
| Gewaltorientierte Rechtsextremisten | 15.300 | 15.600 |
| Verdachtsfall AfD | 20.000 | 28.000 |
| Rechtsextremistische Straftaten | 37.835 | 36.951 |
| Rechtsextremistische Gewaltdelikte | 1.281 | 1.395 |
| Propagandadelikte | 24.177 | 23.122 |
| Volksverhetzung | 5.905 | 4.824 |
| Fremdenfeindliche Straftaten | 13.035 | 12.537 |
| Antisemitische Straftaten | 2.775 | 2.821 |


## BKA-PMK-Zeitreihe 2023 bis 2025
Quelle: `./dokumente/hauptquellen/2023PMKFallzahlen.pdf`, `./dokumente/hauptquellen/BKA_Fallzahlen_PMK_2024.md`, `./dokumente/hauptquellen/BKA_Fallzahlen_PMK_2025.md`.

| Kennzahl | 2023 | 2024 | 2025 | Hinweis |
|---|---:|---:|---:|---|
| PMK-rechts | 28.945 | 25.660 | 28.450 | Amtliche BKA-Fallzahlen |
| Gewalttaten PMK-rechts | 1.270 | 1.280 | 1.420 | Amtliche BKA-Fallzahlen |
| Propagandadelikte PMK-rechts | 16.698 | 15.200 | 16.890 | Amtliche BKA-Fallzahlen |
| Fremdenfeindliche Straftaten | 11.603 | 9.800 | 11.200 | 2023 aus Vollbericht, 2024/2025 aus lokalen BKA-Fassungen |
| Antisemitische Straftaten | 3.034 | 2.775 | 2.821 | 2023 aus Vollbericht, 2024/2025 aus BfV-/BKA-Referenzwerten im Repo |
| Islamfeindliche Straftaten | 1.211 | n.v. | n.v. | 2023 Vollbericht |
| Sexuelle Orientierung | 455 | n.v. | n.v. | 2023 Vollbericht |
| Frauenfeindlich | 145 | n.v. | n.v. | 2023 Vollbericht |
| Geschlechtsbezogene Diversität | 117 | n.v. | n.v. | 2023 Vollbericht |

## BfV-Lagebericht Sicherheitsbehörden 2025
Quelle: `./dokumente/vfs_rechtsextremismus/BfV_Lagebericht_Rechtsextremisten_in_Sicherheitsbehoerden_2025.pdf`.

| Kennzahl | Wert | Hinweis |
|---|---:|---|
| Verfahren und Maßnahmen | 493 | Sicherheitsbehörden Bund und Länder |
| Disziplinarverfahren | 302 | davon 133 Bundes-, 169 Landesfälle |
| Arbeitsrechtliche Maßnahmen | 14 |  |
| Entlassung / Nichternennung | 23 | Beamtenverhältnis auf Widerruf oder Probe |
| Strafverfahren | 154 |  |
| Noch laufend | 190 | 38,5 % des Erhebungsstands |
| Rechtsextremismus zugeordnet | 343 | 83,5 % der Fälle |
| Reichsbürger / Selbstverwalter | 35 | 8,5 % |
| Delegitimierung des Staates | 15 | 3,6 % |
| Mehrere Phänomenbereiche | 18 | 4,4 % |
| Verbot der Dienstausübung | 136 | Begleitmaßnahme |
| Vorläufige Dienstenthebung | 70 | Begleitmaßnahme |
| Einbehaltung der Bezüge | 51 | Begleitmaßnahme |
| Entfernt / nicht ernannt | 51 Beamte/Soldaten + 4 Tarifbeschäftigte | Maßnahme nach Abschluss |

## BfV-Folgegutachten 2021: Netzwerk- und Flügelzahlen
Quelle: `./geheimgutachten/BfV-AfD-Folgegutachten_2021_05_E_Einflussnahme_Fluegel.md` und zugehörige Volltexte.

| Kennzahl | Wert | Hinweis |
|---|---:|---|
| AfD-Profilseiten | 676 | analysierte Personenprofile |
| Funktionsträger | 473 | innerhalb der AfD-Profile |
| Flügel-Profile | 76 | Protagonisten / relevante Akteure |
| Verbindungen AfD -> Flügel | 14.371 | Gesamtkontakte |
| Freundschaftsbeziehungen | 1.201 | zwischen AfD- und Flügel-Profilen |
| Reaktionen auf Flügel-Inhalte | 11.824 | AfD-Profile |
| Likes/Love-Reaktionen | 10.559 | Anteil der Reaktionen |
| AfD-Profile mit Interaktion | 334 | nahezu die Hälfte der analysierten Profile |
| Björn Höcke eingehende Verbindungen | 3.433 | Spitzenwert |
| Birgit Bessin eingehende Verbindungen | 2.511 | Spitzenwert |
| Enrico Komning eingehende Verbindungen | 1.246 | Spitzenwert |
| Meuthen-Effekt | +40,5 % | 373 -> 524 Verbindungen |
| Flügel-Deklarationseffekt | -5,8 % | 398 -> 375 Verbindungen |
| Nach Auflösung des Flügels | knapp 900 | Verbindungen stabilisierten sich |

## Inhaltsstatistiken und Beweislogik
- Die BKA-Zeitreihe, BfV-Lagezahlen und BfV-Gutachten sind die tragenden Statistikbloecke. Sie werden als intern konsistent behandelt und in den Quellenlisten gesondert markiert.
- Technische Repo-Zaehlungen, offene Recherchehinweise und Social-Media-Funde bleiben davon getrennt.

## Inhaltsstatistiken und Beweislogik
- Die BKA-Zeitreihe misst amtliche PMK-Fallzahlen und eignet sich als robuste Langzeitreihe für Mobilisierung, Hasskriminalität und Deliktverschiebungen.
- Die BfV-Lageberichte zeigen, wo das Verfassungsschutzsystem selbst numerische Lagebilder zu Verdachts- und Verfahrenstypen liefert.
- Die Flügel-Netzwerkzahlen sind keine amtlichen Fallzahlen, sondern interne BfV-Auswertungen mit hohem Beweiswert für personelle Verdichtung und digitale Anschlussfähigkeit.

## Gutachten-Statistiken

### Dateiformate

| Kategorie | Anzahl | Zusatz |
|---|---:|---|
| MD | 59 |  |
| TXT | 59 |  |
| PDF | 55 |  |

### RAG-Belegpassagen

| Kategorie | Anzahl | Zusatz |
|---|---:|---|
| aktuelle gefahr | 4.630 | 35 Dokumente; 383 Seiten |
| potenzial | 3.692 | 35 Dokumente; 374 Seiten |
| zielrichtung | 3.437 | 33 Dokumente; 373 Seiten |

### BfV-Folgegutachten 2021 Kapitelumfang

| Kategorie | Anzahl | Zusatz |
|---|---:|---|
| 06 F I Menschenwuerde | 4.723 |  |
| 13 Anhang Glossar Fussnoten | 4.002 |  |
| 10 G Verbindungen | 2.768 |  |
| 07 F II Demokratieprinzip | 1.776 |  |
| 05 E Einflussnahme Fluegel | 1.195 |  |
| 04 D Struktur und Entwicklung | 784 |  |
| 09 F IV Nationalsozialismus | 643 |  |
| 11 H Gesamtwuerdigung | 599 |  |
| 03 C Rechtliche Vorgaben | 167 |  |
| 08 F III Rechtsstaatsprinzip | 121 |  |
| 12 I Fazit | 49 |  |
| 02 B Methodik | 47 |  |
| 01 A Einfuehrung | 9 |  |

### Themen-Treffer im Gutachtenkorpus

| Kategorie | Anzahl | Zusatz |
|---|---:|---|
| AfD | 22.218 |  |
| Vorfeld/Flügel/JA | 13.270 |  |
| Islam/Muslime | 9.124 |  |
| Migration/Remigration/Asyl | 5.710 |  |
| Gewalt/Widerstand | 5.494 |  |
| Antisemitismus | 3.670 |  |
| Nationalsozialismus/NS | 2.816 |  |
| ethnisch/Volksbegriff | 2.642 |  |
| Menschenwürde | 648 |  |
| freiheitliche demokratische Grundordnung | 452 |  |
| Demokratieprinzip | 332 |  |
| Rechtsstaatsprinzip | 226 |  |

### Personen-Treffer im Gutachtenkorpus

| Kategorie | Anzahl | Zusatz |
|---|---:|---|
| Björn Höcke | 1.218 |  |
| Andreas Kalbitz | 790 |  |
| Alice Weidel | 364 |  |
| Alexander Gauland | 220 |  |
| Götz Kubitschek | 220 |  |
| Tino Chrupalla | 196 |  |
| Maximilian Krah | 190 |  |
| Hans-Thomas Tillschneider | 156 |  |
| Beatrix von Storch | 104 |  |
| Jürgen Elsässer | 92 |  |
| Benedikt Kaiser | 92 |  |
| Martin Sellner | 84 |  |
| Jens Maier | 76 |  |
| Stephan Brandner | 64 |  |
| Erik Lehnert | 58 |  |
| Petr Bystron | 58 |  |
| Roger Beckamp | 48 |  |

## Verfassungsschutzbericht-Statistiken

### Jahre im Portal-Tab

| Kategorie | Anzahl |
|---|---:|
| 2024 | 39 |
| 2023 | 13 |
| 2025 | 4 |
| ohne Jahr | 3 |
| 2022 | 1 |

### Dateiformate

| Kategorie | Anzahl |
|---|---:|
| PDF | 54 |
| MD | 3 |
| TXT | 3 |

### Volltext-Themen-Treffer

| Kategorie | Anzahl |
|---|---:|
| Gewalt/Widerstand | 14.582 |
| Islam/Muslime | 9.804 |
| Antisemitismus | 7.066 |
| Vorfeld/Flügel/JA | 2.487 |
| Migration/Remigration/Asyl | 1.829 |
| AfD | 1.505 |
| Nationalsozialismus/NS | 1.194 |
| ethnisch/Volksbegriff | 746 |
| Menschenwürde | 194 |
| freiheitliche demokratische Grundordnung | 136 |
| Demokratieprinzip | 45 |
| Rechtsstaatsprinzip | 42 |

## Zitate, Straftaten, Urteile

### Zitat-Themen

| Kategorie | Anzahl |
|---|---:|
| Migration/Remigration | 1.244 |
| Justiz/Rechtsstaat | 1.178 |
| Gewalt/Widerstand | 986 |
| Flügel/JA/Vorfeld | 723 |
| Demokratie/Parteienstaat | 624 |
| Islam/Muslime | 532 |
| NS/Relativierung | 193 |
| Ethnischer Volksbegriff | 185 |
| Medien/Lügenpresse | 119 |
| Antisemitismus | 100 |

### Straftaten/Urteilsthemen

| Kategorie | Anzahl |
|---|---:|
| Haft/Bewährung | 130 |
| Ermittlungen/Immunität | 53 |
| Geldstrafe | 38 |
| Volksverhetzung | 29 |
| § 86a/Kennzeichen | 29 |
| Körperverletzung/Gewalt | 25 |
| Waffen/Sprengstoff | 16 |
| Beleidigung/Verleumdung | 11 |

### Gerichte im Register

| Kategorie | Anzahl |
|---|---:|
| Ohne Gericht im Kurztext | 103 |
| Bundesverfassungsgericht | 50 |
| Verwaltungsgericht Aktenzeichen | 13 |
| Verwaltungsgericht VG | 8 |
| Amtsgericht Tiergarten | 5 |
| Bundesgerichtshof | 4 |
| Landgericht Leipzig | 3 |
| Amtsgericht Dresden | 2 |
| Amtsgericht Gera | 2 |
| Landgericht Erfurt | 2 |
| Landgericht Halle | 2 |
| Landgericht Mainz | 2 |
| Landgericht Potsdam | 2 |
| Amtsgericht Augsburg | 1 |
| Amtsgericht Backnang | 1 |

### Zitatquellen

| Kategorie | Anzahl |
|---|---:|
| Facebook | 511 |
| X | 255 |
| Rede im Bundestag | 141 |
| Landtagswahlprogramm | 113 |
| Bundestagsrede | 104 |
| Resolution: Kein Ruf des Muezins in unseren Städten, Facebook | 86 |
| Rede bei Europawahlversammlung, Videomittschnitt auf Youtube vom 04.08.2023, Kanal: AfD TV | 40 |
| Artikel in: AfD Kompakt | 37 |
| Laudenbach, Peter: Volkstheater. Der rechte Angriff auf die Kunstfreiheit. | 31 |
| Website: Brigitte Zypries | 31 |
| Rede bei Europawahlversammlung, Videomittschnitt auf Youtube vom 30.07.2013, Kanal: AfD TV | 29 |
| Twitter | 29 |
| X.com | 27 |
| Offizielle Pressemitteilung der AfD, Website: AfD | 20 |
| Artikel in: Der Tagesspiegel | 17 |

### Meistgenannte Personen/Gremien im Zitatkorpus

| Kategorie | Anzahl |
|---|---:|
| Björn Höcke | 285 |
| Der Bundesvorstand | 143 |
| Maximilian Krah | 112 |
| Christina Baum | 86 |
| Gottfried Curio | 86 |
| Sturmabteilung (JA) der AfD | 86 |
| Alexander Gauland | 61 |
| Alice Weidel | 57 |
| Hans-Thomas Tillschneider | 52 |
| René Springer | 50 |
| Beatrix von Storch | 49 |
| Matthias Helferich | 47 |
| Marvin Weber | 45 |
| Nicole Höchst | 43 |
| Nordrhein-Westfalen Landesvorstand | 43 |

## Methodische Hinweise
- Portalzahlen stammen aus den eingebetteten Arrays `cases`, `quotes` und `documents` in `index.html`.
- Gutachten-Dateien wurden aus `geheimgutachten/`, `geheimgutachten_netzpolitik/` und Gutachten-PDF-Splits unter `dokumente/splits/` inventarisiert. TXT/MD-Volltexte wurden zeilen-, wort- und regexbasiert ausgewertet.
- RAG-Werte stammen aus `dataset/A__aktuelle_gefahr__0000.jsonl`, `dataset/A__potenzial__0000.jsonl` und `dataset/A__zielrichtung__0000.jsonl`; pro Zeile eine Belegpassage.
- Verfassungsschutzberichte wurden aus `dokumente/vfs_berichte_bundeslaender/`, einschlaegigen `dokumente/splits/` und lokalen Hauptquellen mit `pdftotext -layout` bzw. vorhandenen TXT/MD-Fassungen analysiert.
- Themenstatistiken sind Treffer definierter Suchmuster. Mehrfachtreffer pro Dokument sind moeglich; sie messen Korpusgewichtung, nicht Fallzahlen.

- Quellenarten der Zitate werden im Statistik-Tab per First-Match-Regel normalisiert (Soziale Medien, Partei/Fraktion, Gericht/Behörde, Gutachten/Belegwerk, Medienbericht, Sonstiges).
- Gerichte im Register werden aus Titel, Beschreibung und Volltext normiert auf Bundesverfassungsgericht, Bundesverwaltungsgericht, Bundesgerichtshof, Oberverwaltungsgericht, Verwaltungsgericht, Landgericht, Amtsgericht, Behörde/Staatsanwaltschaft oder Ohne Gericht explizit.
- Verfahrensausgänge werden deterministisch als Freiheitsstrafe, Geldstrafe, Gerichtsbeschluss, Urteil, Ermittlungsverfahren, Verwaltungsentscheidung oder Sonstiges gruppiert.
- KI-Markdown-Spiegel werden lokal mit MarkItDown erzeugt; wenn das Python-Modul nicht installiert ist, greift ein lokaler `pdftotext -layout`-Fallback. Keine Remote-URLs, keine Plugins, keine untrusted Inputs.
- Die resultierenden KI-Mirrors liegen unter `dokumente/ki_markdown/` und werden mit `skripte/generate_ki_markdown_copies.sh` gepflegt.
- Beweisstärke A bedeutet amtlich oder gerichtlich, B wissenschaftlich oder parlamentarisch belastbar, C journalistisch gut belegt, D plausibel aber nachprüfungsbedürftig und E nur als Hinweis nutzbar.
- Wo ein Jahr oder eine Unterkategorie in den lokalen Quellen nicht konsistent vorliegt, wird dies als `n.v.` markiert statt zu interpolieren.

