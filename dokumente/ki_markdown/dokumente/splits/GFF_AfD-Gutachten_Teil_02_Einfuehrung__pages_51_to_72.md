# GFF_AfD-Gutachten_Teil_02_Einfuehrung (51-72)

                                      –173 –



     Funktionsweise lässt sich folgendermaßen beschreiben: Anstelle eines einzigen,
     durchgängig aktiven Modells umfasst eine MoE-Architektur eine größere Zahl
     spezialisierter Teilnetze – im Fall von Qwen3-235B-A22B insgesamt 128 soge-
     nannte Experten. Dadurch erreichen MoE-Modelle eine deutlich höhere Effizienz
     als vergleichbar große, durchgehend aktivierte (dense) Modelle, ohne dass spür-
     bare Einbußen bei der Qualität der Ausgaben auftreten.

     In dieser Konstellation gliederte sich die Verarbeitung in zwei aufeinander auf-
     bauende Schritte: Im ersten Durchgang klassifizierte das Modell sämtliche Text-
     einheiten anhand des oben beschriebenen Systemprompts I in die drei Katego-
     rien ‚relevant‘, ‚möglicherweise relevant‘ und ‚nicht relevant‘.

c)   Ergebnisse

     Im ersten Durchgang wurden etwa 25.000 der erhobenen und bereinigten Text-
     einheiten als ‚relevant‘ oder ‚möglicherweise relevant‘ eingestuft. Die qualitative
     Validierung der KI-gestützten Vorfilterung durch Jurist*innen und Sozialwissen-
     schaftler*innen war eng mit der nachgelagerten juristischen Auswertung ver-
     zahnt (dazu sogleich).
                                      –174 –



IV.   Auswertung von Massendaten

      Die vorgefilterten Daten wurden nunmehr ausgewertet. Zur Vorbereitung der
      manuellen Auswertung wurde ein zweiter Systemprompt (der Systemprompt II)
      konzipiert, der auf Grundlage eines zuvor entworfenen Kategoriensystems die
      relevanten Passagen der vorgefilterten Daten identifizierte. Diese kategorisier-
      ten Belege wurden manuell validiert, bevor sie – auf Grundlage eines zurückhal-
      tenden Bewertungsmaßstabs – für die Verwendung im Gutachten weiter verar-
      beitet wurden.


1.    Kategoriensystem

      Das der Vorfilterung zugrundeliegende Kategoriensystem ist deduktiv hergelei-
      tet. Die Hauptkategorien wurden vor der Materialsichtung aus der Zusammen-
      führung von vier Wissensbeständen entwickelt: erstens aus einer verdichteten
      Analyse des Gutachtens des Bundesamtes für Verfassungsschutz zur Einstufung
      der AfD und der dort herausgearbeiteten verfassungsrelevanten Kategorien;
      zweitens aus weiteren rechtswissenschaftlichen Stellungnahmen zur AfD; drit-
      tens aus dem sozialwissenschaftlichen und politikwissenschaftlichen For-
      schungsstand zur extremen Rechten in Deutschland; viertens aus den vom Bun-
      desverfassungsgericht im NPD-II-Urteil entwickelten Tatbestandsmerkmalen
      und den hieran anschließenden Maßstäben aus Teil 2 dieses Gutachtens. Diese
      Beurteilungsbasis gewährleistet, dass das Kategoriensystem weder einseitig si-
      cherheitsbehördlich, einseitig sozialwissenschaftlich noch einseitig juristisch
      verengt ist, sondern die für die Beantwortung der verfassungsrechtlichen Leit-
      frage relevanten Dimensionen abdeckt.

      Quer zu den Prüfungsdimensionen (wie Rassismus, Herabwürdigung sexueller
      und geschlechtlicher Minderheiten, Verfolgung und Bestrafung politischer Geg-
      ner*innen u.a.) liegt dem Kategoriensystem eine zweite Strukturierungsebene
      mit drei ‚Achsen‘ zugrunde, die unmittelbar aus dem in Teil 2 entwickelten Prü-
      fungsprogramm folgt: die Unterscheidung von verfassungsfeindlicher Ideologie,
                                     –175 –



     die Forderung nach verfassungsfeindlichen rechtlichen Maßnahmen sowie ver-
     fassungsfeindliches Verhalten der Anhänger*innen (dazu unter Teil 2 B.II). Diese
     drei Achsen wurden juristisch hergeleitet: Sie spiegeln die Differenzierung zwi-
     schen Zielen und Verhalten aus Art. 21 Abs. 2 GG sowie die in Teil 2 vorgenom-
     mene Präzisierung wider, dass sich die Ziele einer Partei zusammensetzen aus
     Ideologie und konkreten Forderungen nach rechtlichen Maßnahmen.

     Innerhalb der Prüfungsdimensionen wurde eine feinere Subkategorienbildung in
     iterativer Auseinandersetzung mit dem tatsächlichen Material vorgenommen.
     Sie diente der besseren Übersichtlichkeit der Belegbasis. Die konkrete Subkate-
     gorisierung innerhalb einer Hauptkategorie hätte auch anders erfolgen können,
     ohne die juristische Tragfähigkeit der Beweisführung zu berühren. Entscheidend
     für die Subsumtion ist, dass eine Äußerung der jeweiligen Hauptkategorie und
     einer der drei Achsen zugeordnet werden kann, nicht jedoch die Platzierung in-
     nerhalb der Subkategorien.


2.   Kategorisierung

     Zur Kategorisierung diente der Systemprompt II, eine Variante des zur KI-
     gestützten Vorfilterung eingesetzten Systemprompt I (der Systemprompt II un-
     ter Anhang A.II). Dieser Systemprompt definiert erstens Kategorien mit jeweils
     zugeordneten Anwendungsbeispielen; zweitens explizite Ausschlusskriterien,
     die Konstellationen benennen, in denen eine Zuordnung trotz oberflächlicher
     Stichworttreffer nicht erfolgen darf (etwa Berichte über einzelne Verbrechen, po-
     lemische Regierungskritik, bloße Erwähnung von „Remigration“ ohne Zusatzkri-
     terium); drittens Entscheidungsregeln bei Unsicherheit (Zweifel zwischen den
     Ausprägungen werden zugunsten der jeweils zurückhaltenderen Bewertung auf-
     gelöst).

     Der Output des Systemprompts II unterscheidet sich grundlegend von dem des
     Systemprompts I: Während Systemprompt I lediglich eine dreistufige Relevanz-
     einschätzung ausgibt, trifft Systemprompt II für jeden Beleg eine detailliertere
                                     –176 –



     Entscheidung. Er ordnet jeden Beleg einer oder mehreren der strikt vorgegebe-
     nen Kategorien zu. Eigenständige Kategorienbildungen oder Erweiterungen des
     Kategoriensets durch das Modell sind ausgeschlossen. Zu jeder Kategorienzu-
     weisung wird zudem eine wörtliche Textstelle aus dem jeweiligen Beleg als Be-
     gründung hinzugefügt. Im Anschluss werden diese Belegstellen automatisiert
     gegen den Ausgangstext abgeglichen, um Halluzinationen – also frei erfundene
     oder paraphrasierte Zitate – auszuschließen. Die auf diese Weise erzeugte Kate-
     gorisierung wurde nicht quantitativ ausgewertet, etwa im Sinne von Häufigkeits-
     verteilungen oder statistischen Aussagen über das Korpus. Sie diente aus-
     schließlich als Hilfestellung, um die anschließende qualitative Prüfung durch
     Jurist*innen und Sozialwissenschaftler*innen zu strukturieren und effektiver zu
     gestalten.


3.   Validierung der KI-Vorfilterung

     Sämtliche durch die KI-gestützte Vorfilterung als ‚relevant‘ oder ‚möglicherweise
     relevant‘ eingestuften Texteinheiten wurden in einem nachgelagerten Schritt
     durch Jurist*innen und Sozialwissenschaftler*innen qualitativ überprüft. Hierfür
     wurde ein eigenes Auswertungsinterface entwickelt. Die Prüfenden konnten in
     diesem Interface jeden Beleg aus der Vorfilterung sichten und validieren. Diese
     Validierung – also die Bestätigung beziehungsweise Verwerfung von relevanten
     beziehungsweise irrelevanten Belegen – war von den Prüfdimensionen geleitet.


4.   Reliabilitätssicherung

     Jeder Beleg, der im Gutachten verarbeitet wird, wurde in der Regel durch min-
     destens zwei Teammitglieder unabhängig voneinander auf seine Subsumtions-
     tauglichkeit geprüft. Das zielt nicht auf die Übereinstimmung in der Feinkatego-
     risierung, sondern auf den für die Beweisführung entscheidenden Punkt: die
     übereinstimmende Bewertung, dass eine Äußerung als Beleg für die jeweilige
     verfassungsrechtliche Dimension trägt. Eine klassische Intercoder-Reliabilitäts-
     prüfung – also die Prüfung, ob zwei Personen unabhängig voneinander eine
                                      –177 –



     identische Kategorienzuordnung vornehmen – wurde nicht durchgeführt, da die
     sozialwissenschaftliche Klassifikationsleistung hier nicht das eigentliche Ergeb-
     nis, sondern eine Vorstufe zur juristischen Bewertung bildet.


5.   Inhaltliche Auswertung und Selektionslogik

     Aus der KI-gestützten Vorfilterung und der nachfolgenden automatisierten Ka-
     tegorisierung und Validierung durch die Jurist*innen und Sozialwissenschaft-
     ler*innen resultierte eine umfangreiche Belegbasis. Diese wurde anschließend
     einer juristischen Subsumtionsprüfung unterzogen. Maßstab waren die in Teil 2
     entwickelten Tatbestandsmerkmale, die im Verlauf der Prüfung schrittweise
     präzisiert wurden. Jeder Beleg wurde daraufhin geprüft, ob er unter diese Merk-
     male subsumierbar ist und auf welcher Ebene.

     Da der Umfang der daraus gewonnenen Belegbasis den Rahmen einer geschlos-
     senen Darstellung im Gutachten erheblich übersteigt, wurden die positiven Be-
     lege abgestuft einbezogen. In den Haupttext (Teil 3) wurden diejenigen Belege
     aufgenommen, die für die Subsumtion unter die in Teil 2 entwickelten Tatbe-
     standsmerkmale am tragfähigsten sind und die zugleich die Breite des Phäno-
     mens hinsichtlich beteiligter Personen, parteilicher Funktionsebenen und zeitli-
     cher Erstreckung zuverlässig abbilden. Weitere Belege, die die im Fließtext
     entwickelte Argumentation stützen, ohne für sich genommen dieselbe Tragweite
     zu beanspruchen, oder die im Wesentlichen den gleichen Inhalt und Stellenwert
     haben, sind im Anhang zum Gutachten vollständig dokumentiert. Belege, die
     zwar im ersten Schritt als relevant eingestuft wurden, sich bei der Doppelprüfung
     jedoch als nicht subsumtionstauglich erwiesen – etwa weil sie unter Ausschluss-
     kriterien fielen, der Kontext eine alternative Lesart eröffnete oder die Zurech-
     nung zur Partei nicht hinreichend abgesichert war –, finden im Gutachten keine
     Verwendung.

     Bei der Ermittlung der Grundtendenz für bestimmte von der AfD verfolgte Ziele
     werden allerdings auch Belege diskutiert, die die Partei entlasten oder jedenfalls
                                      –178 –



     auf den ersten Blick entlasten könnten. Das betrifft solche Ziele der AfD, die nicht
     programmatisch festgelegt sind, sondern sich nur aus Äußerungen ihrer Funkti-
     onär*innen ergeben. Darunter etwa die Frage, ob die AfD von einem ethnischen
     Volksverständnis geprägt ist. Zu ihrem Verständnis vom deutschen Volk hat die
     Partei verschiedene Erklärungen abgegeben, die dem Eindruck von einem ethni-
     schen Volksverständnis entgegenwirken sollen; erst aus einer Würdigung dieser
     Erklärungen und vieler weiterer Äußerungen aus der AfD entsteht das für die Be-
     stimmung der Grundtendenz notwendige Gesamtbild.


6.   Zurückhaltender Bewertungsmaßstab

     Das Gutachten orientiert sich an einem Prüfungsmaßstab, der dem Ausnahme-
     charakter des Parteiverbots Rechnung trägt. Dasselbe gilt für die Anwendung
     dieses Maßstabs auf die konkreten Belege, also für die Subsumtion: Wo ver-
     schiedene Deutungen möglich waren, wurde die für die AfD jeweils günstigere
     Auslegung gewählt. Dies betrifft die Einordnung von ideologischen Aussagen und
     politischen Zielen ebenso wie die Verhaltensweisen der Anhänger*innen der AfD.

     Die Forderung der AfD nach „millionenfacher Remigration“ beispielsweise wird
     verschiedentlich so interpretiert, dass davon nicht nur Ausländer*innen, sondern
     auch Deutsche mit Migrationsgeschichte erfasst sein müssten. Wie im Gutachten
     gezeigt wird, ist dieser Schluss jedoch unzulässig: Zwar mögen einzelne AfD-
     Funktionär*innen mit dieser Aussage auch auf Deutsche mit Migrationsge-
     schichte abzielen; allerdings lebt in Deutschland eine siebenstellige Anzahl an
     Ausländer*innen ohne dauerhaften Aufenthaltsstatus, sodass für Zwecke einer
     juristisch belastbaren Bewertung zugunsten der AfD diese Forderungen nur auf
     Ausländer*innen zu beziehen sind.
                                      –179 –



V.   Andere ausgewertete Daten

     Neben der oben (D.IV) beschriebenen Massenauswertung von Primärquellen
     wurden weitere Primärquellen ausgewertet, die einer automatisierten Auswer-
     tung nicht zugänglich waren. Dazu zählen Bücher von AfD-Politiker*innen, Inter-
     views und Beiträge in Print- und Onlinezeitschriften aus dem Parteivorfeld sowie
     Videos von Streamer*innen und sogenannten alternativen Medien.

     Zudem wurden als Sekundärquellen wissenschaftliche Fachliteratur und journa-
     listische Berichte herangezogen. Dies betrifft vor allem den Sachbericht zur AfD
     (dazu unter Teil 1), der Strukturen und Kontexte beschreibt, jedoch keine juristi-
     sche Subsumtion vornimmt.

     Sachverhalte und Aussagen aus journalistischen Quellen lassen sich teilweise
     nicht unabhängig verifizieren. Das gilt insbesondere für Informationen aus par-
     teiinternen Quellen – etwa mündliche Aussagen oder weitergegebene interne
     Dokumente –, die darüber hinaus Perspektiven und Wertungen der jeweiligen
     Informant*innen widerspiegeln können. Gleiches gilt für Einordnungen und Be-
     wertungen der Autor*innen selbst.

     Interne Parteidynamiken, etwa informelle Netzwerke, innerparteiliche Konflikte
     oder organisatorische Abläufe, lassen sich allein anhand öffentlich zugänglicher
     Primärquellen häufig nicht rekonstruieren. Journalistische Artikel und Recher-
     chen bilden daher in der Politikwissenschaft eine etablierte Grundlage zur Be-
     schreibung solcher Strukturen. Sie unterliegen publizistischen Sorgfaltspflichten
     und redaktionellen Kontrollmechanismen.

     Die Einordnung zentraler Sachverhalte – etwa informeller Netzwerke oder der
     Machtstellung einzelner Akteur*innen – stützt sich dabei nicht auf einzelne Quel-
     len. Sie ergibt sich vielmehr aus dem Gesamtbild mehrerer Berichte: entweder,
     weil verschiedene Quellen unabhängig voneinander denselben Sachverhalt
     schildern, oder weil sich eine Bewertung erst aus der Zusammenschau unter-
     schiedlicher Berichte ergibt, die jeweils verschiedene Aspekte beleuchten.
                                      –180 –



VI.   Forschungsdatenmanagement und Forschungsethik

      Das Gutachten orientiert sich beim Umgang mit den erhobenen, aufbereiteten
      und ausgewerteten Daten an den einschlägigen Standards guter wissenschaftli-
      cher Praxis, wie sie im Kodex der Deutschen Forschungsgemeinschaft sowie in
      den „Grundsätzen zum Umgang mit Forschungsdaten“ der Allianz der deutschen
      Wissenschaftsorganisationen und den „Leitlinien zum Umgang mit Forschungs-
      daten“ der Deutschen Forschungsgemeinschaft niedergelegt sind. Nachfolgend
      sind die sich hieraus ergebenden Anforderungen und ihre Umsetzung im Projekt
      beschrieben.


1.    Datenschutzrechtliche Anforderungen

      Die Erhebung und Verarbeitung der Daten erfolgt unter Beachtung der einschlä-
      gigen rechtlichen Rahmenbedingungen, insbesondere der Vorgaben des Daten-
      schutz-, des Persönlichkeits- und des Urheberrechts. Zwar handelt es sich bei
      den einzelnen Personen zuzurechnenden Äußerungen ganz überwiegend um
      solche Daten, aus denen die politische Meinung der Äußernden hervorgeht, so-
      dass ihre Verarbeitung nach Art. 9 Abs. 1 DSGVO grundsätzlich untersagt wäre.
      Allerdings wurden nur Äußerungen von Funktionär*innen der AfD verarbeitet, die
      diese in den Sozialen Medien, in Parlamenten, Interviews, Pressemitteilungen
      oder auf sonstige Weise selbst öffentlich gemacht haben, sodass das Verbot des
      Art. 9 Abs. 1 DSGVO nicht gilt (Art. 9 Abs. 2 lit. e DSGVO). Außerdem diente die
      Verarbeitung dieser Daten ausschließlich wissenschaftlichen Forschungszwe-
      cken und war auf das für die Untersuchung der Prüfungsdimensionen erforderli-
      che Maß beschränkt (Art. 89 Abs. 1 DSGVO), sodass das Verbot des Art. 9 Abs. 1
      DSGVO auch aus diesem Grund nicht galt (Art. 9 Abs. 1 lit. j DSGVO). Die Verar-
      beitung der Daten war also zulässig.

      Schutzwürdige Belange Dritter – etwa von Privatpersonen, deren Äußerungen
      ohne politischen Bezug in den erfassten Datenbeständen auftauchen – werden
                                            –181 –



     gewahrt, indem die Belege (Text oder Screenshot) auf Aussagen der AfD und ih-
     rer Funktionär*innen beschränkt sind.


2.   Dokumentation und Nachvollziehbarkeit

     Sämtliche für das Zustandekommen des Gutachtens relevanten Verfahrens-
     schritte wurden so dokumentiert, dass sie durch Dritte nachvollzogen und über-
     prüft werden können. Dies umfasst insbesondere die Dokumentation der Daten-
     erhebung (Quellen, Erhebungszeiträume, Abrufdaten, eingesetzte Schnittstellen
     und Werkzeuge), der Datenaufbereitung (Transkription, Segmentierung, Bereini-
     gung), der KI-gestützten Vorfilterung (eingesetztes Modell, Systemprompts, Pa-
     rameter) sowie der anschließenden manuellen Prüfung durch die Jurist*innen
     und Sozialwissenschaftler*innen.

     Die Herkunft jedes im Gutachten verwendeten Belegs wurde kenntlich gemacht;
     Zitationen ermöglichen den Rückbezug auf die Originalquelle.413 Belege, die im
     Fließtext auszugsweise wiedergegeben werden, sind im jeweils zugehörigen An-
     hang vollständig und – soweit angezeigt – in ihrem Kontext dokumentiert.

     Die im Forschungsprozess entstandenen Daten und Dokumentationen werden
     gegen Manipulation gesichert.414

     Die im Projekt erhobenen und aufbereiteten Daten wurden in adäquater Weise
     gesichert und werden für einen angemessenen Zeitraum aufbewahrt.

     Zeitgleich mit der Veröffentlichung des Gutachtens werden sämtliche im Gutach-
     ten aufgeführten Belege durch „Frag den Staat“ in einer Datenbank der Öffent-
     lichkeit zugänglich gemacht: https://fragdenstaat.de/afd-datenbank/.




     413
           Deutsche Forschungsgemeinschaft, Leitlinien zur Sicherung guter wissenschaftlicher Pra-
     xis, 2024, S. 14 Leitlinie 7 (Phasenübergreifende Qualitätssicherung).
     414
           Deutsche Forschungsgemeinschaft, Leitlinien zur Sicherung guter wissenschaftlicher Pra-
     xis, 2024, S. 17 Leitlinie 12 (Dokumentation): „Dokumentationen und Forschungsergebnisse
     dürfen nicht manipuliert werden; sie sind bestmöglich gegen Manipulationen zu schützen.“
                                     –182 –



VII.   Weiterer Einsatz von KI

       Über die oben beschriebenen Anwendungsfälle hinaus wurde KI (Claude Opus)
       für die Erzeugung einzelner Textpassagen eingesetzt. Diese Textpassagen wur-
       den ausnahmslos von den Jurist*innen und Sozialwissenschaftler*innen überar-
       beitet.
                                   –183 –




E. Prüfungsdimensionen
   Die materiell-rechtliche Prüfung der möglichen Verfassungswidrigkeit der AfD
   erfolgt in verschiedenen Dimensionen (dazu auch unter Teil 2 G). Die Identifika-
   tion, Definition und Priorisierung dieser Prüfungsdimensionen ergab sich aus der
   Sichtung der Vorarbeiten (siehe oben B.) und einer ersten Prüfung des Materials.
   Grob aufteilen lassen sich die Prüfungsdimensionen danach, ob sie bereits
   Schwerpunkte in den Vorarbeiten bildeten (dazu unter E.I) oder erstmalig für die-
   ses Gutachten in den Blick genommen wurden (dazu unter E.II).
                                          –184 –



I.   In Vorarbeiten schon behandelte Fragen

     Die Vorarbeiten, insbesondere das Gutachten des Bundesamts für Verfassungs-
     schutz zur Einstufung der AfD als gesichert extremistische Bestrebung von 2025
     (BfV-Gutachten), behandeln insbesondere folgende Bereiche: den ethnischen
     Volksbegriff, (antimuslimischen) Rassismus, Antisemitismus sowie Demokratie-
     feindlichkeit in Gestalt des Verächtlichmachens des Parlamentarismus.

     Für jeden dieser Themenschwerpunkte wurde in einem ersten Schritt geprüft,
     welche der im BfV-Gutachten zusammengetragenen Äußerungen für ein Verfah-
     ren nach Art. 21 Abs. 2 GG belastbar sein könnten und welche den hohen verfas-
     sungsrechtlichen Maßstäben an die Verfassungswidrigkeit einer Partei nicht ge-
     nügen. Diese Selektion war notwendig, weil das BfV-Gutachten einem
     verfassungsschutzrechtlichen Erkenntnisinteresse folgt, das sich von den Anfor-
     derungen eines Parteiverbotsverfahrens vor dem Bundesverfassungsgericht un-
     terscheidet.

     In einem zweiten Schritt wurde für jeden Schwerpunkt untersucht, welche recht-
     lichen Maßstäbe Rechtsprechung und Literatur für die Bewertung einer mögli-
     chen Verfassungswidrigkeit entwickelt haben. Dabei wurde insbesondere ge-
     fragt, welche Schlüsse sich aus den NPD-Urteilen des Bundesverfassungs-
     gerichts von 2017 und 2024 ziehen lassen – sowohl im Hinblick darauf, was re-
     levante Äußerungen inhaltlich auszeichnet, als auch im Hinblick darauf, welche
     organisatorischen Maßnahmen und programmatischen Festlegungen einer Par-
     tei für die Prüfung des Art. 21 Abs. 2 GG Aussagekraft besitzen.


1.   Ethnischer Volksbegriff

     Seit der „NPD II“-Entscheidung von 2017415 ist der ethnische Volksbegriff ein,
     wenn nicht sogar der Dreh- und Angelpunkt der verfassungs- und verfassungs-



       BVerfG, Urteil v. 17.01.2017 − 2 BvB 1/13, Rn. 635 ff. – NPD II; ebenso: BVerfG, Urteil v.
     415

     23.01.2024 − 2 BvB 1/19, Rn. 325 ff. – Finanzierungsausschluss NPD/Die Heimat.
                                     –185 –



schutzrechtlichen Debatte über den Rechtsextremismus im Allgemeinen und die
AfD im Besonderen.416 Der ethnisch-abstammungsmäßige oder ethnisch-kultu-
relle Volksbegriff spielt eine zentrale Rolle bei der Einstufung der AfD durch die
Verfassungsschutzämter417 und bei deren Kontrolle durch die Verwaltungsge-
richte418 sowie in der verwaltungsgerichtlichen Rechtsprechung in angrenzenden
Gebieten wie dem Disziplinar-419 oder dem Vereinsrecht.420

Das Bundesamt für Verfassungsschutz widmet in seinem AfD-Gutachten von
2025 etwa 140 Seiten dem ethnischen Volksbegriff und kommt zu dem Schluss,
„dass die AfD weiterhin ein gegen Art. 1 Abs. 1 GG verstoßendes ethnisch-kultu-
relles Volksverständnis verfolgt und dieses insbesondere auf den Gebieten der
Migrations-, Asyl- und Einbürgerungspolitik umsetzen will“.421

In der rechtswissenschaftlichen Literatur teilen die Kurzgutachten von Cremer422
und    von    siebzehn     Staatsrechtler*innen423       sowie    der    Fachartikel    von



416
    Möllers, Die verfassungsrechtliche Missbilligung eines materialisierten Volksbegriffs als
Element des Schutzes der Verfassung, Der Staat 62 (2023), 181; Gärditz, § 11
Verfassungsidentität und Schutz der Verfassung, in: Stern/Sodan/Möstl (Hrsg.), Das
Staatsrecht der Bundesrepublik Deutschland im europäischen Staatenverbund, 2. Aufl.
2022, Rn. 70 f.; Ogorek, Gutachten zur BfV-Einstufung, 15.08.2025,
https://table.media/assets/untersuchung-bfv-gutachten-und-afd-parteiverbot.pdf
(abgerufen am: 17.06.2026); Majer, Remigration, ethnischer Volksbegriff und ihr Verhältnis
zum Verfassungsrecht, NJ 2025, 352; Kaya, Wer ist das Volk?, Verfassungsblog 2024.
417
    BfV, AfD-Gutachten 2025, S. 114–255.
418
    VG Köln, Beschluss v. 26.02.2026 − 13 L 1109/25, S. 44 ff. – eA: AfD nicht gesichert
rechtsextrem; OVG NRW, Urteil v. 13.05.2024 − 5 A 1218/22, juris, Rn. 202 – Verdachtsfall
AfD; BVerwG, Beschluss v. 20.05.2025 − 6 B 21.24, BeckRS 2025, 17567, Rn. 13 –
Revisionsnichtzulassung AfD Verdachtsfall; siehe auch: OVG Berlin-Brandenburg, Beschluss
v. 19.06.2020 − OVG 1 S 56/20, GSZ 2020, 270, LS 1 – VS-Bericht Flügel, ethnokultureller
Volksbegriff; VGH Bayern, Beschluss v. 14.09.2023 − 10 CE 23.796, BeckRS 2023, 24631
(105) – VS-Beobachtung AfD; VGH Mannheim, Beschluss v. 06.11.2024 − 1 S 1798/23,
BeckRS 2024, 31663, LS 3 – Verdachtsfall AfD.
419
    BVerwG, Urteil v. 21.11.2024 − 2 WD 9/23 – IB Soldat; BVerwG, Urteil v. 09.10.2025 − 2
A 6.24 – Wagner; VG Karlsruhe, Beschluss v. 26.02.2026 − 12 K 528/26, DGVZ 2026, 105 –
Rücknahme der Ernennung einer Beamtin wegen Zweifel an der Verfassungstreue.
420
    BVerwG, Urteil v. 24.06.2025 − 6 A 4.24 – COMPACT.
421
    BfV, AfD-Gutachten 2025, S. 254.
422
    Cremer, Warum die AfD verboten werden könnte. Empfehlungen an Staat und Politik,
2023.
423
    von Arnauld et al., Rechtswissenschaftliche Stellungnahme zu einem
Parteiverbotsverfahren gegen die Alternative für Deutschland, VerfBlog 2024.
                                    –186 –



Towfigh/Alberti424 diesen Befund. Das OVG Münster kam in der „Verdachtsfall“-
Entscheidung von 2024 zu dem Schluss, dass der begründete Verdacht bestehe,
„dass es den politischen Zielsetzungen jedenfalls eines maßgeblichen Teils [der
AfD] entspricht, deutschen Staatsangehörigen mit Migrationshintergrund nur ei-
nen rechtlich abgewerteten Status zuzuerkennen, weil zu ihren zentralen politi-
schen Vorstellungen gehört, dass es eine von der Staatsangehörigkeit unabhän-
gige ‚ethnisch-kulturelle‘ Volkszugehörigkeit gibt […]“.425 Das VG Köln kam in der
Eilrechtsentscheidung zur Hochstufung der AfD 2026 zu dem Schluss, dass dafür
„zwar der begründete Verdacht, aber keine hinreichende Gewissheit“ be-
stehe.426

Die Frage, ob die AfD einen ethnisch-kulturellen Volksbegriff vertritt und diesen
auch durch rechtliche Maßnahmen realisieren will, zu einer zentralen Prüfungs-
dimension dieses Gutachtens zu machen, drängte sich damit von vornherein auf.
Dafür wurden zunächst rechtswissenschaftliche Literatur und verfassungs- und
verwaltungsgerichtliche Urteile ausgewertet, um einen Prüfungsmaßstab aufzu-
stellen. Anhand der „NPD II“-Entscheidung und des BfV-Gutachtens wurde ein
Korpus aus einschlägigen Äußerungen und Maßnahmen gebildet, um anhand der
dortigen Beispiele das gesammelte Material zur AfD auszuwerten. Da die AfD
sich in offiziellen Erklärungen explizit vom ethnischen Volksbegriff und der eth-
nischen Diskriminierung bestimmter Gruppen von deutschen Staatsbürger*in-
nen abgrenzt,427 musste ein besonderer Fokus auf der Ermittlung der Grundten-
denz der Gesamtpartei liegen: der Unterscheidung von einzelnen Entgleisungen,
einer die Gesamtpartei prägenden Ideologie und den von der Gesamtpartei ge-
forderten Maßnahmen.


424
    Towfigh/Alberti, Hätte ein Parteiverbotsverfahren gegen die »Alternative für
Deutschland« (AfD) Aussicht auf Erfolg?, DVBl 139 (2024), 601 (607).
425
    OVG NRW, Urteil v. 13.05.2024 − 5 A 1218/22, juris, Rn. 202 – Verdachtsfall AfD.
426
    VG Köln, Beschluss v. 26.02.2026 − 13 L 1109/25, S. 44 – eA: AfD nicht gesichert
rechtsextrem.
427
    AfD, Erklärung zum deutschen Staatsvolk und zur deutschen Identität 2021,
https://www.afd.de/wp-content/uploads/2021/01/Erkl%C3%A4rung-Deutsches-
Staatsvolk_20_01_2021.pdf.
                                          –187 –



2.   Muslimfeindlichkeit und Rassismus

     Die Vorarbeiten werfen der AfD sowohl eine allgemeine „Fremden“- und Minder-
     heitenfeindlichkeit als auch eine spezifisch gegen Muslim*innen gerichtete Ab-
     wertung vor. Das BfV-Gutachten belegt dies auf über 220 Seiten anhand zweier
     großer Themenblöcke: „Fremden- und minderheitenfeindliche Aussagen und
     Positionen“428 sowie „Muslim- und islamfeindliche Aussagen und Positionen“429.
     Im ersten Block dokumentiert das BfV Äußerungen, die einen Zusammenhang
     zwischen Herkunft und Gewaltneigung konstruieren, Migrant*innen eine miss-
     bräuchliche Inanspruchnahme von Sozialleistungen unterstellen, ihnen okkupa-
     torische Absichten zuschreiben, Migrationsprozesse mit Katastrophenmeta-
     phern beschreiben, eine kulturelle Inkompatibilität behaupten und kollektive
     Rückführungsmaßnahmen fordern. Im zweiten Block werden pauschale nega-
     tive Werturteile über Muslim*innen, ihre bewusste Ausgrenzung, die Behauptung
     einer Verdrängung der europäischen Bevölkerung durch den Islam sowie pau-
     schale Verunglimpfungen als Islamisten belegt.

     Ergänzend wurden die Wahlprogramme des Bundes und der Länder sowie parla-
     mentarische Anträge ausgewertet. Hinzugezogen wurden ferner die einschlägi-
     gen Entscheidungen zur AfD sowie die Urteile des Bundesverfassungsgerichts in
     den Verfahren NPD II (2017) und Heimat (2024), in denen auch rechtliche Maß-
     nahmen angesprochen werden, die sich mit Forderungen der AfD überschnei-
     den.

     Aus diesen Erwägungen ergab sich, auch in diesem Gutachten einen Schwer-
     punkt auf Rassismus und Muslimfeindlichkeit zu legen. Ausgangspunkt war die
     Frage, ob sich die Äußerungen und Programmsätze der AfD zu einer kulturras-
     sistischen Ideologie verdichten. Als rechtliche Maßnahmen, die in diesem Zu-
     sammenhang besonderer Betrachtung bedürfen, sind insbesondere AfD-



     428
           BfV, AfD-Gutachten 2025, S. 256–339.
     429
           BfV, AfD-Gutachten 2025, S. 340–482.
                                         –188 –



     Forderungen nach einem Kopftuchverbot in öffentlichen Einrichtungen,430 nach
     einem Moschee- oder Minarettbauverbot431 sowie nach einem Verbot des Muez-
     zinrufs432 zu nennen.


3.   Antisemitismus

     Das BfV-Gutachten behandelt den Antisemitismus als eigene Kategorie433, misst
     ihm im Ergebnis jedoch nachrangige Bedeutung zu.434 Das Bundesamt konnte in-
     soweit keine antisemitische Grundtendenz der Gesamtpartei feststellen.435
     Dementsprechend zieht auch Ogorek diesen Themenbereich in seiner exempla-
     rischen Belegauswertung nicht eigenständig heran und klammert ihn bei seiner
     quantitativen Gesamtauswertung ausdrücklich aus436 – eben weil das BfV die ge-
     sammelten Belege selbst als zum Nachweis einer entsprechenden Grundhaltung
     unzureichend bewertet hat.

     Auch in der bisherigen Rechtsprechung zur AfD spielt der Antisemitismus keine
     tragende Rolle.

     Die Auswertung der im BfV-Gutachten gesammelten und auch anderweitig be-
     kannten Belege ergab, dass diese Prüfungsdimension zwar nicht ignoriert wer-
     den darf, aber keinen Schwerpunkt bilden wird.




     430
         BfV, AfD-Gutachten 2025, S. 993 ff.; VG Köln, Beschluss v. 26.2.2026, 13 L 1109/25, 36
     f. – eA: AfD nicht gesichert rechtsextrem.
     431
         OVG NRW, Urteil v. 13.05.2024 − 5 A 1218/22, juris, Rn. 241 – Verdachtsfall AfD; VG
     Köln, Beschluss v. 26.02.2026 − 13 L 1109/25, S. 35 f. – eA: AfD nicht gesichert
     rechtsextrem; BfV, AfD-Gutachten 2025, S. 991 f.
     432
         OVG NRW, Urteil v. 13.05.2024 − 5 A 1218/22, juris, Rn. 241 – Verdachtsfall AfD; BfV,
     AfD-Gutachten 2025, S. 991 ff.
     433
         BfV, AfD-Gutachten 2025, S. 483 ff.
     434
         BfV, AfD-Gutachten 2025, S. 1017.
     435
         BfV, AfD-Gutachten 2025, S. 1033.
     436
         Ogorek, Gutachten zur BfV-Einstufung, 15.08.2025,
     https://table.media/assets/untersuchung-bfv-gutachten-und-afd-parteiverbot.pdf
     (abgerufen am: 17.06.2026).
                                          –189 –



4.   ‚Verächtlichmachen des Parlamentarismus‘

     Soweit die Vorarbeiten auf mögliche demokratiefeindliche Zielsetzungen, Be-
     strebungen oder Verhaltensweisen der AfD bzw. ihrer Anhänger*innen eingehen,
     beschränken sie sich (zusätzlich zur potenziell demokratiefeindlichen Dimension
     eines ethnischen Volksbegriffs) im Wesentlichen auf Ausführungen dazu, wie die
     Partei den Parlamentarismus, politische Gegner*innen und Institutionen in de-
     mokratiefeindlicher Weise ‚verächtlich mache‘.

     Dies knüpft an die Rechtsprechung des Bundesverfassungsgerichts an, wonach
     „[d]en Rahmen der freiheitlichen demokratischen Grundordnung verlässt […],
     wer den Parlamentarismus verächtlich macht, ohne aufzuzeigen, auf welchem
     anderen Weg dem Grundsatz der Volkssouveränität Rechnung getragen und die
     Offenheit des politischen Willensbildungsprozesses gewährleistet werden
     kann“.437

     Diese Rechtsprechung wurde vom VG Köln im Beschluss zur Einstufung der Jun-
     gen Alternative als gesichert extremistische Bestrebung438 sowie vom OVG
     Münster im Urteil zur Einstufung der AfD als Verdachtsfall439 konkretisiert und
     auf die Junge Alternative sowie die AfD angewendet. Dabei werden auch bereits
     einzelne Belege aufgelistet.440 Eine detaillierte Auseinandersetzung unter Bil-
     dung von Fallgruppen und der Aufführung zahlreicher Belege erfolgte im BfV-
     Gutachten 2025.441

     Towfigh und Alberti nahmen hinsichtlich einer möglichen Demokratiefeindlich-
     keit ebenfalls ausschließlich Stellung zu einer „strategische[n] Delegitimierung
     demokratischer Akteure und Prozesse“ durch die AfD, hierdurch beeinträchtige




     437
         BVerfG, Urteil v. 17.01.2017 − 2 BvB 1/13, Rn. 546 – NPD II.
     438
         VG Köln, Beschluss v. 05.02.2024 − 13 L 1124/23, BeckRS 2024, 5594.
     439
         OVG NRW, Urteil v. 13.05.2024 − 5 A 1218/22, juris – Verdachtsfall AfD.
     440
         OVG NRW, Urteil v. 13.05.2024 − 5 A 1218/22, juris, Rn. 256 ff. – Verdachtsfall AfD; VG
     Köln, Beschluss v. 05.02.2024 − 13 L 1124/23, BeckRS 2024, 5594, Rn. 381 ff.
     441
         BfV, AfD-Gutachten 2025, S. 533 ff.
                                        –190 –



sie „das Demokratie- und Rechtsstaatsprinzip“.442 Ähnliche Ausführungen fin-
den sich in der Stellungnahme von 18 Staatsrechtler*innen.443

Ausgehend von diesen in großem Umfang vorhandenen Belegsammlungen
stellte sich hinsichtlich des ‚Verächtlichmachens des Parlamentarismus‘ weni-
ger die Frage nach der Verbreitung entsprechender Ansichten und Verhaltens-
weisen in der AfD als nach deren rechtlicher Bewertung. Dieses Gutachten be-
fasst sich im Detail mit der Frage, unter welchen Voraussetzungen aus
Äußerungen, mit denen der Parlamentarismus, politische Gegner*innen oder
staatliche Institutionen ‚verächtlich gemacht‘ werden, unter Zugrundelegung
der auch vom BfV herangezogenen Rechtsprechung des Bundesverfassungsge-
richts der Schluss auf demokratiefeindliche Zielsetzungen oder Verhaltenswei-
sen einer Partei beziehungsweise ihrer Anhänger*innen gezogen werden kann.




442
    Towfigh/Alberti, Hätte ein Parteiverbotsverfahren gegen die »Alternative für Deutschland« (AfD)
Aussicht auf Erfolg?, DVBl 139 (2024), 601 (607).
443
    von Arnauld et al., Rechtswissenschaftliche Stellungnahme zu einem
Parteiverbotsverfahren gegen die Alternative für Deutschland, VerfBlog 2024, S. 4 f.
                                              –191 –



II.   Neue Prüfungsdimensionen

      Weitere Prüfungsdimensionen, die in diesem Gutachten im Detail behandelt
      werden, wurden in Vorarbeiten höchstens angedeutet, also weder detailliert tat-
      sächlich noch rechtlich erfasst. Dies betrifft Schutzsuchende (dazu unter E.II.1),
      Queer- (dazu unter E.II.2) und Behindertenfeindlichkeit (dazu unter E.II.3) sowie
      die Unterdrückung politischer Gegner*innen (dazu unter E.II.4 bis E.II.6).


1.    Schutzsuchende

      Während die rassistische Haltung der AfD in Rechtsprechung, Literatur und Öf-
      fentlichkeit durchaus breit diskutiert wird, fehlt bislang eine tiefergehende Ana-
      lyse der Frage, inwiefern die von der Partei geforderten rechtlichen Maßnahmen
      die Menschenwürde von Schutzsuchenden verletzen könnten. Die bisherige Aus-
      einandersetzung konzentriert sich überwiegend auf die ideologische Einordnung
      von Äußerungen – etwa unter den Gesichtspunkten des ethnischen Volksbegriffs
      oder der Muslim- und Islamfeindlichkeit –, während die konkreten leistungs-,
      aufenthalts- und bildungsrechtlichen Forderungen der Partei nicht systematisch
      auf ihre Vereinbarkeit mit Art. 1 Abs. 1 GG untersucht werden.

      Bei der Durchsicht der Parteiprogramme des Bundes und der Länder sind inso-
      weit mehrere rechtliche Maßnahmen aufgefallen, die einer eigenständigen men-
      schenwürderechtlichen Prüfung bedürfen. Eine solche Prüfung ist bislang weder
      hinsichtlich des Abschiebungskonzepts der AfD noch hinsichtlich weiterer For-
      derungen erfolgt – namentlich der Forderung nach einer Streichung existenzsi-
      chernder Leistungen sowie der Forderung, die Versorgung Schutzsuchender auf
      elementare Sachleistungen („Bett, Brot, Seife“) und die Gesundheitsversorgung
      Geduldeter auf akute Notfallhilfe zu beschränken. Eine Ausnahme bildet inso-
      weit allein die Rechtsprechung des VG Köln zur Einstufung der Jungen Alterna-
      tive als Verdachtsfall.444



      444
            VG Köln, Urteil v. 08.03.2022 − 13 K 208/20, juris – Verdachtsfall JA.
                                           –192 –



     Bislang nicht gewürdigt wurden auch die Forderung nach einem Betretungsver-
     bot (Landesverband Brandenburg) und die nach Sonderklassen für Kinder von
     Schutzsuchenden (Landesverband Sachsen-Anhalt).


2.   Queer- und Transfeindlichkeit

     Eine vergleichbare Lücke besteht hinsichtlich einer möglichen Herabwürdigung
     sexueller und geschlechtlicher Minderheiten. Auch insoweit liegen keine einge-
     henden Vorarbeiten vor, die der Frage nachgehen, ob und unter welchen Voraus-
     setzungen Ziele der AfD und das Verhalten ihrer Anhänger*innen gegenüber
     LSBTIQ*-Personen die Menschenwürdegarantie des Art. 1 Abs. 1 GG verletzen.
     Weder das Ogorek-Gutachten noch die bisherige verwaltungs- und verfassungs-
     gerichtliche Rechtsprechung zur AfD nehmen eine solche Prüfung vor und das
     BfV-Gutachten behandelt diesen Bereich nur am Rande445 – obwohl es einige
     Anhaltspunkte – wie etwa offen transfeindliche Äußerungen im Deutschen Bun-
     destag – gibt.


3.   Behindertenfeindlichkeit

     Bislang überhaupt nicht nach dem Maßstab des Art. 21 Abs. 2 GG untersucht
     wurden zudem die behindertenpolitischen Positionen der AfD. Anlass für eine
     nähere Betrachtung boten insbesondere einzelne behindertenfeindliche Äuße-
     rungen unter anderem von Björn Höcke sowie die in der Partei weit verbreitete
     Forderung nach einem Rückbau oder sogar der Beendigung der Inklusion von
     Schüler*innen mit Behinderung.




     445
           BfV, AfD-Gutachten 2025, S. 151, 782.
                                        –193 –



4.   Forderungen nach strafrechtlicher Verfolgung und Bestrafung
     politischer Gegner*innen

     Wie oben (E.I.4) dargestellt, beschränken sich Vorarbeiten in Bezug auf eine
     mögliche Demokratiefeindlichkeit der AfD im Wesentlichen auf Äußerungen, mit
     denen der Parlamentarismus ‚verächtlich gemacht‘ wird.

     Das brandenburgische Landesamt für Verfassungsschutz stellte allerdings eben-
     falls fest, dass wiederholt durch maßgebliche Akteur*innen des Landesverban-
     des die Absicht erklärt worden sei, „im Falle einer Regierungsübernahme die ver-
     antwortlichen Eliten verhaften oder auf die Anklagebank bringen zu wollen“.446
     Solche Absichtserklärungen fanden sich nach entsprechender Suche auch von
     maßgeblichen Akteur*innen des Bundesverbandes und zahlreicher weiterer
     Landesverbände. Dennoch wurden entsprechende Äußerungen in anderen Vor-
     arbeiten nicht erwähnt beziehungsweise im Falle ihrer Erwähnung lediglich als
     weiterer Beleg für ein ‚Verächtlichmachen des Parlamentarismus‘ herangezo-
     gen. Entsprechend wurden bisher auch keine Maßstäbe dafür entwickelt, ob und
     unter welchen Voraussetzungen das Ziel, politische Gegner*innen strafrechtlich
     zu verfolgen und zu belangen, mit dem Demokratieprinzip unvereinbar ist.

     Forderungen nach der strafrechtlichen Verfolgung politischer Gegner*innen wer-
     den in diesem Gutachten nicht als Unterfall eines ‚Verächtlichmachens des Par-
     lamentarismus‘ betrachtet, sondern eigenständig als potenzielle demokratie-
     feindliche Zielsetzung der AfD geprüft.


5.   ‚Antifa-Verbot‘

     Forderungen nach einem Verbot ‚der Antifa‘ oder ihrer ‚Einstufung als Terroror-
     ganisation‘ finden sich in Wahlprogrammen, parlamentarischen Anfragen und

     446
        Ministerium für Inneres und Kommunales Brandenburg, Vermerk: Einstufung des
     Landesverbandes Brandenburg der Partei „Alternative für Deutschland“ als gesichert
     extremistische Bestrebung, 14.04.2025,
     https://mik.brandenburg.de/sixcms/media.php/9/Einstufungsvermerk_LV__AfD.pdf
     (abgerufen am: 19.08.2025), S. 87.
                                     –194 –



     zahlreichen Äußerungen von Verbänden, Fraktionen und Funktionär*innen der
     AfD. In den Vorarbeiten wird dies nicht thematisiert.

     In diesem Gutachten werden Forderungen nach einem Verbot ‚der Antifa‘ hin-
     sichtlich einer eventuell mit dem Demokratieprinzip unvereinbaren Zielsetzung,
     eine Gesinnung zu verbieten, untersucht.


6.   Einschüchterung politischer Gegner*innen und von
     Richter*innen

     Einschüchterungsversuche und einschüchternde Wirkungen von Verhaltenswei-
     sen der Funktionär*innen und Anhänger*innen der AfD gegenüber parlamentari-
     schen und außerparlamentarischen politischen Gegner*innen sowie Richter*in-
     nen werden zwar medial thematisiert, allerdings in juristischen Vorarbeiten nicht
     eigenständig erwähnt.

     Angesichts des wiederholten Vorkommens medial bekannt werdender oder do-
     kumentierter Fälle könnte es sich um ein relevantes demokratie- beziehungs-
     weise rechtsstaatsfeindliches Verhalten der Anhänger*innen der AfD handeln.
     Zur Prüfung dieser Frage werden im vorliegenden Gutachten Maßstäbe dazu er-
     arbeitet, wann einschüchterndes Verhalten geeignet ist, den Prozess der politi-
     schen Willensbildung so weitgehend zu beeinträchtigen, dass es als demokratie-
     feindlich anzusehen ist, oder derart Einfluss auf die richterliche Unabhängigkeit
     zu nehmen, dass es als rechtsstaatsfeindlich anzusehen ist.
