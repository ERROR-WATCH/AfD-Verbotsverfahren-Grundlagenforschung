import os
import re
import json

repo_path = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
index_html_path = os.path.join(repo_path, "index.html")
urteilsbelege_path = os.path.join(repo_path, "dokumente/hauptquellen/urteilsbelege")
output_md_path = os.path.join(repo_path, "dokumente/hauptquellen/AfD_Gerichtsentscheidungen_Urteilsregister_Volltext.md")
output_txt_path = os.path.join(repo_path, "dokumente/hauptquellen/AfD_Gerichtsentscheidungen_Urteilsregister_Volltext.txt")
temp_pdf_md = os.path.join(repo_path, "temp_for_pdf.md")

print(f"Starting master-register compilation...")
print(f"Repository Path: {repo_path}")

# Read index.html to get cases json
with open(index_html_path, "r", encoding="utf-8") as f:
    html_content = f.read()

match = re.search(r"const cases = (\[.*?\]);", html_content, re.DOTALL)
if not match:
    raise Exception("Could not find const cases in index.html!")

cases = json.loads(match.group(1))
print(f"Loaded {len(cases)} cases from index.html.")

# Category mapping to Level 2 headers (crucial for nested TOC hierarchy!)
categories_mapping = {
    "Volksverhetzung & Verfassungswidrige Kennzeichen": "## Volksverhetzung & Verfassungswidrige Kennzeichen",
    "Körperverletzung & Gewaltdelikte": "## Körperverletzung & Gewaltdelikte",
    "Amtsmissbrauch & Dienstvergehen": "## Amtsmissbrauch & Dienstvergehen",
    "Betrug, Untreue & Geldwäsche": "## Betrug, Untreue & Geldwäsche",
    "Waffenbesitz & Sonstige Delikte": "## Waffenbesitz & Sonstige Delikte",
    "Spionage, Landesverrat, Hochverrat & Sabotage": "## Spionage, Landesverrat, Hochverrat & Sabotage",
    "Spionage, Landesverrat & Innere Sicherheit": "## Spionage, Landesverrat, Hochverrat & Sabotage",
    "Besitz und Verbreitung von Kinderpornografie & Sexualdelikte": "## SONDERKATEGORIE: Besitz und Verbreitung von Kinderpornografie & Sexualdelikte",
    "Schwere Vergewaltigung & Sexualstraftaten": "## SONDERKATEGORIE: Schwere Vergewaltigung & Sexualstraftaten",
    "Gesamtpartei & Landesverbände": "SECTION_2",
    "Parteirecht & Spendenaffären": "SECTION_2",
    "Parteirecht & Parlamentsbeteiligung": "SECTION_2",
    "Verwaltungsrecht & Einstufungen": "SECTION_2",
}

section1_subcats = [
    "## Volksverhetzung & Verfassungswidrige Kennzeichen",
    "## Körperverletzung & Gewaltdelikte",
    "## Amtsmissbrauch & Dienstvergehen",
    "## Betrug, Untreue & Geldwäsche",
    "## Waffenbesitz & Sonstige Delikte",
    "## Spionage, Landesverrat, Hochverrat & Sabotage",
    "## SONDERKATEGORIE: Besitz und Verbreitung von Kinderpornografie & Sexualdelikte",
    "## SONDERKATEGORIE: Schwere Vergewaltigung & Sexualstraftaten"
]

def find_file(n):
    prefix = f"{n}_" if n >= 100 else f"{n:02d}_"
    for filename in os.listdir(urteilsbelege_path):
        if filename.startswith(prefix) and filename.endswith(".md"):
            return filename
    return None

def beautify_content(content, remove_emojis=False):
    lines = content.strip().split("\n")
    new_lines = []
    
    for i, line in enumerate(lines):
        line = line.strip()
        if not line:
            new_lines.append("")
            continue
            
        # Parse titles/headers
        if i == 0:
            # Skip the first line since we now use the beautiful, curated title from index.html
            continue
                
        # Format key-value metadata lines with bold keys
        metadata_match = re.match(r"^(Gericht|Aktenzeichen|Datum der Entscheidungen|Datum der Entscheidung|Datum|Delikt|Urteilsart|Zugehörigkeit|Urteil/Strafmaß|Gegenstand):\s*(.*)", line, re.IGNORECASE)
        if metadata_match:
            key = metadata_match.group(1).strip()
            val = metadata_match.group(2).strip()
            if key.lower().startswith("datum"):
                key = "Datum"
            elif key.lower() == "urteil/strafmaß":
                key = "Urteil / Strafmaß"
            new_lines.append(f"* **{key}:** {val}")
            continue
            
        # Format section titles
        if line == "SACHVERHALT:":
            new_lines.append("")
            new_lines.append("**Sachverhalt:**")
            continue
        elif line == "BEWEISBEDEUTUNG FÜR DAS PARTEIVERBOTSVERFAHREN:":
            new_lines.append("")
            new_lines.append("**Beweisbedeutung für das Parteiverbotsverfahren:**")
            continue
        elif line == "OFFIZIELLER DIREKT-QUELLENLINK (GERICHTS- & PRESSEPROVENIENZ):":
            new_lines.append("")
            new_lines.append("**Offizielle Quelle / Pressebeleg:**")
            continue
            
        if remove_emojis:
            line = line.replace("🔴", "").replace("🔵", "").replace("📥", "").replace("📄", "").replace("📝", "").replace("📚", "").replace("🔗", "")
            
        # Clean up any raw backslashes to prevent LaTeX errors
        line = line.replace("\\", "/")
        new_lines.append(line)
        
    return "\n".join(new_lines)

def build_document(remove_emojis):
    compiled_cases = {}
    for c in cases:
        num = c["number"]
        cat = c.get("category", "")
        title_text = c.get("title", f"Gerichtsbeleg {num}").strip()
        
        target_cat_header = categories_mapping.get(cat, "## Sonstige Delikte")
        if "Vergewaltigung" in cat or num == 69:
            target_cat_header = "## SONDERKATEGORIE: Schwere Vergewaltigung & Sexualstraftaten"
            
        file_name = find_file(num)
        if not file_name:
            continue
            
        with open(os.path.join(urteilsbelege_path, file_name), "r", encoding="utf-8") as f:
            raw_content = f.read().strip()
            
        formatted_content = beautify_content(raw_content, remove_emojis)
        
        # Combine "Fall X: Title" into a Level 3 heading using the beautiful, curated title from index.html
        formatted_case = f"### Fall {num}: {title_text}\n\n{formatted_content}"
        
        if target_cat_header not in compiled_cases:
            compiled_cases[target_cat_header] = []
        compiled_cases[target_cat_header].append((num, formatted_case))

    for cat_hdr in compiled_cases:
        compiled_cases[cat_hdr].sort(key=lambda x: x[0])

    out = []
    
    # Only add YAML header if we compile for PDF (so we keep markdown/txt output standard)
    if remove_emojis:
        out.append("---")
        out.append("title: \"RECHTSBELEGE & URTEILSREGISTER\"")
        out.append("subtitle: \"Gerichtsentscheidungen, Urteile und Strafverfahren im Kontext des AfD-Verbotsverfahrens (Art. 21 GG)\"")
        out.append("author: \"Forschungsportal AfD-Verbotsverfahren – Grundlagenforschung\"")
        out.append("date: \"Juni 2026\"")
        out.append("geometry: \"margin=2.5cm\"")
        out.append("fontsize: \"11pt\"")
        out.append("linestretch: \"1.25\"")
        out.append("colorlinks: true")
        out.append("linkcolor: \"blue\"")
        out.append("toc: true")
        out.append("toc-title: \"Inhaltsverzeichnis\"")
        out.append("toc-depth: 3")
        out.append("header-includes: |")
        out.append("  \\usepackage{scrlayer-scrpage}")
        out.append("  \\pagestyle{scrheadings}")
        out.append("  \\ihead{\\footnotesize Rechtsbelege \\& Urteilsregister (239 Fälle)}")
        out.append("  \\ohead{\\footnotesize Stand: Juni 2026}")
        out.append("  \\ifoot{\\footnotesize Forschungsportal AfD-Verbotsverfahren}")
        out.append("  \\ofoot{\\footnotesize Seite \\thepage}")
        out.append("---")
        out.append("")
    
    out.append("# Volltext-Register aller Gerichtsentscheidungen")
    out.append("")
    out.append("Dieses Dokument ist eine umfassende Zusammenstellung gerichtlicher Urteile, rechtskräftiger Verurteilungen, Strafbefehle und laufender Verfahren gegen Mitglieder, Mandatsträger und die Partei Alternative für Deutschland (AfD) sowie deren Landesverbände.")
    out.append("")
    out.append("**Hinweis zur Systematik:** Zur unantastbaren Wahrung der akademischen und juristischen Integrität ist jeder Fall strikt kategorisiert:")
    
    if remove_emojis:
        out.append("* **[DIREKT AfD]**: Faktisch sichere AfD-Parteimitgliedschaft (inkl. exakter Angabe des Mandats/der Funktion, z. B. MdB, MdL, Kreisrat, Landesvorsitzender).")
        out.append("* **[INDIREKT AfD]**: Keine formale direkte Parteimitgliedschaft (oder Status unklar), jedoch mit messerscharf begründetem AfD-Bezug belassen.")
    else:
        out.append("* 🔴 **[DIREKT AfD]**: Faktisch sichere AfD-Parteimitgliedschaft (inkl. exakter Angabe des Mandats/der Funktion, z. B. MdB, MdL, Kreisrat, Landesvorsitzender).")
        out.append("* 🔵 **[INDIREKT AfD]**: Keine formale direkte Parteimitgliedschaft (oder Status unklar), jedoch mit messerscharf begründetem AfD-Bezug belassen.")
    
    out.append("")
    if remove_emojis:
        out.append("> **Gesamtregister als konsolidierte Dateien:**")
        out.append("> * [**Gesamt-Urteilsregister als typeset PDF-Dossier**](./dokumente/hauptquellen/AfD_Gerichtsentscheidungen_Urteilsregister_Volltext.pdf)")
        out.append("> * [**Gesamt-Urteilsregister als konsolidierter TXT-Volltext**](./dokumente/hauptquellen/AfD_Gerichtsentscheidungen_Urteilsregister_Volltext.txt)")
    else:
        out.append("> 📥 **Gesamtregister als konsolidierte Dateien:**")
        out.append("> * 📄 [**Gesamt-Urteilsregister als typeset PDF-Dossier**](./dokumente/hauptquellen/AfD_Gerichtsentscheidungen_Urteilsregister_Volltext.pdf)")
        out.append("> * 📝 [**Gesamt-Urteilsregister als konsolidierter TXT-Volltext**](./dokumente/hauptquellen/AfD_Gerichtsentscheidungen_Urteilsregister_Volltext.txt)")
        
    out.append("")
    if remove_emojis:
        out.append("> **Verifiziertes Quellen- & Provenienzregister:**")
        out.append("> * [**Offizielles Quellen- & Provenienzregister (QUELLEN_URTEILSDB.md)**](./dokumente/hauptquellen/urteilsbelege/QUELLEN_URTEILSDB.md)")
    else:
        out.append("> 📚 **Verifiziertes Quellen- & Provenienzregister:**")
        out.append("> * 🔗 [**Offizielles Quellen- & Provenienzregister (QUELLEN_URTEILSDB.md)**](./dokumente/hauptquellen/urteilsbelege/QUELLEN_URTEILSDB.md)")
    
    out.append("")
    if remove_emojis:
        out.append("\\newpage")
    out.append("")

    # Section 1 (Level 1 Header)
    out.append("# 1. Strafrechtliche Verurteilungen von AfD-Politikern und Mandatsträgern")
    out.append("")

    for subcat in section1_subcats:
        if subcat in compiled_cases:
            # Output Level 2 Category Header
            out.append(subcat)
            out.append("")
            for num, content in compiled_cases[subcat]:
                out.append(content)
                out.append("")
                out.append("---")
                out.append("")
            if remove_emojis:
                out.append("\\newpage")
                out.append("")

    # Section 2 (Level 1 Header)
    out.append("# 2. Urteile und Beschlüsse gegen die Gesamtpartei und Landesverbände")
    out.append("")
    sect2_cases = compiled_cases.get("SECTION_2", [])
    if sect2_cases:
        for num, content in sect2_cases:
            out.append(content)
            out.append("")
            out.append("---")
            out.append("")

    return "\n".join(out)

# 1. Generate and save MD & TXT with EMOJIS (for the Git Repo)
full_markdown_with_emojis = build_document(remove_emojis=False)
with open(output_md_path, "w", encoding="utf-8") as f:
    f.write(full_markdown_with_emojis)
with open(output_txt_path, "w", encoding="utf-8") as f:
    f.write(full_markdown_with_emojis)

# 2. Generate and save temp MD without Emojis (specifically for PDF compilation)
full_markdown_no_emojis = build_document(remove_emojis=True)
with open(temp_pdf_md, "w", encoding="utf-8") as f:
    f.write(full_markdown_no_emojis)

print("Generated beautiful readable MD, TXT, and temp PDF markdown successfully!")
