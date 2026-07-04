# Statistikquellen und Methodik
Stand: 04.07.2026
Diese Datei dokumentiert die Datenbasis der im Statistik-Tab angezeigten Kennzahlen. Alle Werte wurden aus dem lokalen Repositorybestand berechnet; externe Nachladung war fuer diese Runde nicht erforderlich, weil die amtlichen VS-Berichte und Gutachten lokal vorliegen.
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
