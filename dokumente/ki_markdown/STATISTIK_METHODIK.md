# Statistik-Methodik

Stand: 2026-07-04

## Zweck
Diese Datei definiert, wie das Statistikmodul des Repositories zu lesen, zu bauen und zu aktualisieren ist. Massgeblich sind nur Zahlen, die sich auf eine konkrete Quelle, Fundstelle und Berechnung zurueckfuehren lassen.

Konsistenzregel fuer dieses Repo: Die BfV-/BMI-Verfassungsschutzberichte, BfV-Gutachten, BKA-Fallzahlen und gerichtlichen Registerbelege werden als konsistente Primärblöcke gefuehrt. Sie duerfen in einer Statistik gemeinsam auftreten, aber nur mit sauberer Trennung von Jahr, Ebene, Fundstelle und Rechtsstatus.

## Grundregeln
1. Keine Zahl ohne Quelle.
2. Keine Quelle ohne genaue Zuordnung.
3. Keine Statistik ohne Methodik.
4. Keine Kategorie ohne Definition.
5. Keine Vermischung von Verdacht, Meinung, laufendem Verfahren und rechtskraeftiger Feststellung.

## Beweisstufen
| Stufe | Bedeutung | Verwendbarkeit |
|---|---|---|
| A | amtliche Quelle, Gericht, Parlament, Behörde, Originaldokument | tragend |
| B | wissenschaftliche Studie oder juristisches Gutachten | tragend, aber sekundär |
| C | seriöse journalistische Recherche mit Primärbelegen | ergänzend |
| D | NGO-/Monitoring-Bericht mit Methodik | indikativ |
| E | Social-Media-Beleg, Screenshot, Video, Einzelhinweis | nur Hinweis |
| F | ungeprüft, widersprüchlich, veraltet oder nur Recherchehinweis | nicht tragend |

## Rechtsstatus-Typen
Diese Typen dürfen statistisch nicht vermischt werden:
- rechtskräftiges Urteil,
- Strafbefehl,
- laufendes Ermittlungsverfahren,
- laufendes Gerichtsverfahren,
- eingestelltes Verfahren,
- verwaltungsgerichtliche Entscheidung,
- zivilrechtliche Entscheidung,
- parlamentarischer Vorgang,
- behördliche Einstufung,
- wissenschaftliche Bewertung,
- journalistische Recherche,
- Social-Media-Beleg,
- politische Meinungsäußerung.

## AfD-Bezugslogik
Jeder Fall oder jede Passage bekommt genau einen Primärstatus:
- direkt AfD,
- indirekt AfD,
- Umfeld / Vorfeld,
- allgemeiner Rechtsextremismusbezug,
- kein belastbarer AfD-Bezug.

Direkt und indirekt dürfen in Auswertungen nebeneinander stehen, aber nicht unmarkiert vermengt werden.

## Inhaltslogik fuer Belege
Ein Beleg wird immer nach seinem inhaltlichen Kern klassifiziert, nicht nach Dateityp.

Beispielhafte Inhaltscluster:
- Verfassungsfeindliche Zielrichtung,
- Menschenwuerdeverletzung,
- ethnischer Volksbegriff,
- Minderheitenfeindlichkeit,
- Remigration / Umvolkung / Bevölkerungsaustausch,
- Demokratieverachtung,
- Rechtsstaatsfeindlichkeit,
- Gewalt- und Widerstandslogik,
- Medienfeindlichkeit,
- Antisemitismus,
- Islamfeindlichkeit,
- Anti-LGBTQ,
- Antifeminismus,
- Russlandnaehe / geopolitische Einflusslinien,
- digitale Mobilisierung,
- KI-gestützte oder automatisierte Kampagnen,
- personelle und organisatorische Verdichtung.

## Konsistenzprüfung
Vor jeder neuen Auswertung ist zu prüfen:
1. Stimmen alle Fallzahlen mit der aktuellen Quellenlage ueberein?
2. Gibt es doppelte Faelle, doppelte URLs oder doppelte PDFs?
3. Sind alte Zwischenstaende als veraltet markiert?
4. Werden direkte und indirekte AfD-Bezüge sauber getrennt?
5. Werden laufende Verfahren nicht als rechtskraeftig ausgegeben?
6. Sind Jahreszahlen und Bundeslaender konsistent?
7. Sind amtliche, wissenschaftliche und journalistische Quellen sichtbar getrennt?
8. Ist die Berechnung reproduzierbar?

## Zaehlregeln
### Gerichtsfälle
- Ein Fall = ein gerichtlicher oder strafrechtlicher Vorgang mit eigener Fall-ID.
- Mehrere Instanzen bleiben ein Fall, wenn sie denselben Kern betreffen.
- Strafbefehl, Urteil und Einstellung werden getrennt ausgewiesen.
- Ein Fall darf in Delikt-, Status- und Akteursstatistiken mehrfach erscheinen, aber nie doppelt im selben Zaehlraum.

### Narrative
- Ein Text kann mehreren Narrativen zugeordnet werden.
- Ein Narrativ-Zaehler ist deshalb keine exklusive Gesamtsumme, sondern eine Mehrfachzuordnung.
- Jede narrative Zaehlung braucht eine klare Token- oder Passagenlogik.

### Akteure
- Ein Akteur wird nach normalisiertem Namen gefuehrt.
- Alias, Schreibvarianten und Rollenbezeichnungen werden auf eine Hauptform gemappt.
- Mandat, Funktion und Parteistatus werden als getrennte Felder gespeichert.

### Verfassungsschutz
- Bundes- und Landesberichte sind getrennte Ebenen.
- Einstufungen, Lagezahlen und Einzelfallnennungen werden nicht vermischt.
- Ein Landesverband kann in mehreren Jahren erscheinen; jeder Jahrgang ist eine eigene Zeile.

### Potentialitaet
- Potentialitaet ist keine moralische Kategorie, sondern ein juristisch-politischer Indikator.
- Zulässig sind nur Zahlen, die reale Reichweite, Mandatsstärke, Mitgliederbasis, Fraktionsmacht oder institutionelle Durchsetzungskraft beschreiben.
- Social-Media-Reichweite muss stets von Reichweiten-Schätzung, Plattformdaten und Archivbelegen getrennt werden.

## Quellenmodell
Jede Statistikzeile soll mindestens diese Felder enthalten:
- Statistik-ID
- Datum oder Jahr
- Kategorie
- Unterkategorie
- Akteur
- Bundesland oder Ebene
- Quelle
- Quellenart
- Fundstelle
- Original-URL oder lokaler Repo-Pfad
- Zahlenwert
- Einheit
- Berechnungsmethode
- Unsicherheitsgrad
- Beweisstufe
- juristische Relevanz
- zugeordnetes Prüffeld Art. 21 GG
- Kommentar zur Belegqualität
- Status

## Statuswerte
- geprüft
- ungeprüft
- widersprüchlich
- veraltet
- offen

## Auswertungslogik
Die Auswertung soll jeweils beantworten:
- Was zeigt die Zahl?
- Was zeigt sie ausdrücklich nicht?
- Ist sie nur Indikator oder tragender Beweis?
- Welche Gegenhypothesen bleiben offen?
- Welche Datenlücken, Dunkelfelder oder Erfassungseffekte gibt es?

## Typische Fehler, die vermieden werden muessen
- technische Repo-Zaehlung als inhaltliche Statistik ausgeben,
- laufende und abgeschlossene Verfahren mischen,
- Sekundaerquelle wie Primärquelle behandeln,
- Jahreszahlen unterschiedlicher Stände vermengen,
- regionale und bundesweite Reihen ungetrennt ausweisen,
- soziale Medien wie amtliche Statistik behandeln,
- OCR-Fehler ohne Kennzeichnung uebernehmen,
- Korrelation als Kausalitaet formulieren.

## Empfohlene Dateirollen
- `STATISTIKMODUL.md`: thematischer Gesamtueberblick,
- `STATISTIK_METHODIK.md`: Regeln und Definitionen,
- `daten/statistik_belege.csv`: zentrale Evidenzmatrix,
- `daten/statistik_akteure.csv`: Akteursdichte und Rollen,
- `daten/statistik_narrative.csv`: Themencluster und Narrativdichte,
- `daten/statistik_gerichtsfälle.csv`: Registerstruktur,
- `daten/statistik_verfassungsschutz.csv`: amtliche Einstufungen und Lagezahlen,
- `daten/statistik_potentialitaet.csv`: Reichweite und Durchsetzungskraft.

## Minimaler Konsistenzcheck vor Merge
1. Sind alle Quellen mit Pfad oder URL benannt?
2. Ist jede Zahl einer Beweisstufe zugeordnet?
3. Sind Direkt-/Indirekt-AfD-Bezüge getrennt?
4. Sind laufende und rechtskraeftige Verfahren getrennt?
5. Sind Jahresreihen nur aus gleichartigen Quellen gebildet?
6. Sind technische Zaehler aus dem Inhaltsteil entfernt?
7. Sind BfV/BKA/Gutachten als konsistente Primärblöcke im Quellenverzeichnis markiert?

## Abschlussregel
Wenn eine Zahl nur plausibel wirkt, aber nicht sauber herleitbar ist, gehoert sie nicht in die Hauptstatistik. Sie kann hoechstens als Recherchehinweis in Stufe E oder F dokumentiert werden.
