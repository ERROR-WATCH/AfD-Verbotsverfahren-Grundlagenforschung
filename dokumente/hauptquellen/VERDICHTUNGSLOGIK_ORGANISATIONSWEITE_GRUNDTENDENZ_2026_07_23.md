# Verdichtungslogik: Von Einzelbelegen zur organisationsweiten Grundtendenz

**Stand:** 23. Juli 2026

## Vorbemerkung

Art. 21 Abs. 2 GG verlangt mehr als viele problematische Einzelbelege. Entscheidend ist, ob Ziele oder Verhalten eine der Partei zurechenbare Grundtendenz zeigen. Diese Methodik beschreibt, wie Einzelbelege im Repository zu einer solchen These verdichtet werden dürfen und wo die Grenze liegt.

## 1. Grundsatz

Eine organisationsweite Grundtendenz darf nicht aus bloßer Menge abgeleitet werden. Erforderlich ist eine strukturierte Verdichtung nach Qualität, Rang, Wiederholung, Parteiebene, Duldung, Sanktionierung, Programmnähe und praktischer Umsetzung.

## 2. Verdichtungskriterien

| Kriterium | Leitfrage | Beweiswirkung |
| --- | --- | --- |
| Akteursrang | Handelt es sich um Bundesvorstand, Landesführung, Fraktion, Mandatsträger oder einfaches Mitglied? | höherer Rang erhöht Zurechnungsnähe |
| Parteiebene | Bund, Land, Kreis, Jugendorganisation, Vorfeld? | mehrere Ebenen können Streuung zeigen |
| Wiederholung | Ist das Muster wiederholt und über Zeit stabil? | Wiederholung spricht gegen Ausrutscherthese |
| Offizieller Kanal | Programm, Parteitag, Fraktionsantrag, offizieller Account? | offizielle Kanäle erhöhen Beweiswert |
| Programmnähe | Entspricht der Beleg Programmen, Beschlüssen oder Kampagnen? | stärkt Zielnachweis |
| Duldung | Bleiben Sanktionen trotz Kenntnis aus? | kann Billigung oder strukturelle Toleranz anzeigen |
| Sanktion/Gegenbeleg | Gibt es Distanzierung, Ausschluss oder Korrektur? | kann Verdichtung begrenzen |
| Praktische Umsetzung | Gibt es parlamentarische Initiativen, Personalpolitik, Anträge oder Verwaltungsperspektiven? | verbindet Ziel mit Handeln |
| Regionale Streuung | Tritt das Muster in mehreren Landesverbänden auf? | kann Gesamtprägung stützen |
| Zeitliche Dauer | Besteht das Muster über Monate/Jahre? | stärkt strukturellen Charakter |

## 3. Verdichtungsstufen

| Stufe | Beschreibung | Zulässige Aussage |
| --- | --- | --- |
| V0 | Einzelbeleg ohne Strukturanschluss | nur Einzelfall oder Recherchehinweis |
| V1 | wiederholter Beleg desselben Akteurs oder Kanals | Muster bei Akteur/Kanal möglich |
| V2 | mehrere Akteure derselben Parteiebene | Strömung oder Ebene kann betroffen sein |
| V3 | mehrere Ebenen, offizielle Kanäle oder Duldung | strukturelle Parteitendenz prüfbar |
| V4 | Programmnähe, Umsetzungspraxis und fehlende wirksame Gegensteuerung | These organisationsweiter Grundtendenz belastbar prüfbar |

## 4. Gegenregel

Gegenbelege sind in jeder Verdichtungsstufe zu berücksichtigen. Eine wirksame Distanzierung, Sanktion oder programmatische Korrektur beseitigt den Ausgangsbeleg nicht automatisch, kann aber seine Zurechnung und Verdichtungswirkung erheblich begrenzen.

## 5. Anwendung im Repository

Die Verdichtungslogik soll künftig sichtbar mit folgenden Datenfeldern verbunden werden:

- `verdichtungsstufe`
- `akteursrang`
- `parteiebene`
- `offizieller_kanal`
- `wiederholung_cluster`
- `gegenbeleg_ids`
- `zurechnungsgrenze`
- `verbleibender_beweiswert`
