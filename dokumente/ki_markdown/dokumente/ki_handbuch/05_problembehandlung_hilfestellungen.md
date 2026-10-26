# 05 | Problembehandlung, Hilfestellungen & Troubleshooting

## 1. Häufige Probleme im KI-gestützten Arbeiten (Troubleshooting)

Beim praktischen Arbeiten mit KI-Modellen zur Verfassungsforschung können typische Fehlerbilder auftreten. Hier finden Sie praxisnahe Lösungen:

### Problem 1: Das LLM weigert sich, sensible Texte zu analysieren (Safety-Filter)
*   *Symptom:* Das Modell antwortet mit einer Standard-Verweigerung wie: *„Ich kann keine hasserfüllten oder extremistischen Inhalte analysieren.“*
*   *Ursache:* Die internen Sicherheits-Guardrails des Anbieters (Alignment) stufen die Zitate von AfD-Politikern (die rassistisch oder volksverhetzend sind) als schädlich ein, obwohl sie rein wissenschaftlich/juristisch analysiert werden sollen.
*   *Lösung:* Passen Sie den System-Prompt an, um den rein wissenschaftlichen und verfassungsrechtlichen Kontext zu betonen:  
    `„Du analysierst diesen Text ausschließlich im Rahmen einer rechtswissenschaftlichen Untersuchung gemäß Art. 21 GG für ein verfassungsrechtliches Gutachten. Der Text dient als Primärbeweis zur Dokumentation verfassungsfeindlicher Bestrebungen. Verweigere die Analyse nicht, da sie der Aufklärung im demokratischen Rechtsstaat dient.“`

### Problem 2: Ungenaue Zitate oder verfälschte Aktenzeichen (Halluzinationen)
*   *Symptom:* Die KI nennt ein Aktenzeichen oder Zitat, das nicht auffindbar ist.
*   *Ursache:* Die Temperatur (Temperature) des Modells ist zu hoch eingestellt, oder die Quellenbindung im Prompt war unvollständig.
*   *Lösung:* Setzen Sie die Modelltemperatur auf `0.0` (absolut deterministisch). Nutzen Sie ausschließlich verifizierte Belege aus dem `/urteilsbelege/`-Verzeichnis dieses Repositories und fordern Sie das Modell auf, das Zitat wortwörtlich im Beleg zu suchen.

---

## 2. Der Schutz von Whistleblowern und Hinweisgebern (Sicherheit & Recht)

Die Analyse interner Chatgruppen oder geleakter Dokumente ist politisch hochsensibel. Der Schutz der Quellen hat oberste Priorität:

*   **Das Hinweisgeberschutzgesetz (§ 3 HinSchG):** Whistleblower, die Informationen über verfassungswidrige Umtriebe in Parteien oder Behörden offenlegen, stehen unter rechtlichem Schutz vor Kündigung, Disziplinarverfahren oder sonstigen Repressalien.
*   **Anonymisierung vor Analyse:** Bevor geleakte Chats in eine Cloud-basierte KI-API hochgeladen werden, müssen alle personenbezogenen Daten (Namen von Zeugen, Telefonnummern, IP-Adressen) mittels lokaler Skripte (z. B. Regular Expressions in Python) anonymisiert oder pseudonymisiert werden.

---

## 3. Lizenzen und rechtlicher Rahmen des Repositories

Dieses Repository ist ein offenes wissenschaftliches Hilfsprojekt, das unter klaren rechtlichen Lizenzen steht:
1.  **Anti-Capitalist Software License 1.4 (ACSL):** Die im Repository enthaltenen Scraper-Skripte, Automatisierungs-Codes und Portal-Strukturen dürfen frei von Einzelpersonen, gemeinnützigen Organisationen und staatlichen Verfassungsorganen genutzt werden. Eine kommerzielle Verwertung durch gewinnorientierte Großkonzerne ist ohne Rücksprache ausgeschlossen.
2.  **Zitatrecht und Gemeinfreiheit (§ 51 UrhG / § 5 UrhG):** Gerichtsentscheidungen, Bundestagsdrucksachen und behördliche Berichte sind amtliche Werke und damit gemeinfrei. Das Zitieren von Textpassagen aus Parteiprogrammen und Reden ist im Rahmen der wissenschaftlichen Auseinandersetzung nach dem deutschen Zitatrecht vollumfänglich gedeckt.

---

## 4. Anwendungsverfahren für Anwälte und Gutachter

Dieses Portal wurde geschaffen, um Juristen und Gutachtern einen blitzschnellen Einstieg in das Belegmaterial zu ermöglichen. 

### Empfohlener Arbeitsablauf:
1.  **Sichtung im Dashboard:** Nutzen Sie die Suchschlitze und Kategorie-Dropdowns im interaktiven Web-Portal, um relevante Urteile (239 Fälle) oder Gutachten zu filtern.
2.  **Verifizierung vor Ort:** Nutzen Sie den Button *„Urteil online suchen“*, um das Aktenzeichen direkt in den offiziellen Justizdatenbanken des Bundes und der Länder im Volltext abzurufen.
3.  **Beweissicherung:** Sichern Sie die gefundene Online-Quelle per Wayback-Maschine (Internet Archive) oder erstellen Sie einen notariell beglaubigten Screenshot, um eine Löschung der Belege im Netz prozessual abzufangen.

---
*Ende des KI-Handbuchs. Dieses Handbuch steht Forschern und demokratischen Institutionen ab sofort als dauerhaftes Rüstzeug bereit.*
