#!/bin/bash
# Automatische Kompilierung für das AfD-Urteilsregister und PDF-Dossier
# Beendet das Skript bei Fehlern sofort
set -e

# Verzeichnis-Pfade bestimmen
SCRIPTE_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_DIR="$(cd "$SCRIPTE_DIR/.." && pwd)"

echo "=========================================================="
echo "🏛️  Kompilierung: AFD-URTEILSREGISTER & PDF-DOSSIER"
echo "=========================================================="

# 1. Python-Skript ausführen, um MD, TXT und temp PDF-Markdown zu generieren
echo "🐍 [1/3] Generiere konsolidierte Register-Quellen (MD, TXT)..."
python3 "$SCRIPTE_DIR/compile_master_register.py"

# 2. PDF über Pandoc mit XeLaTeX kompilieren
echo "📄 [2/3] Kompiliere typeset PDF-Dossier über LaTeX..."
pandoc -s "$REPO_DIR/temp_for_pdf.md" \
       -o "$REPO_DIR/dokumente/hauptquellen/AfD_Gerichtsentscheidungen_Urteilsregister_Volltext.pdf" \
       --pdf-engine=xelatex \
       -V geometry:margin=2.5cm

# 3. Temporäre Arbeitsdateien bereinigen
echo "🧹 [3/3] Bereinige temporäre LaTeX-Markdown-Arbeitsdatei..."
rm -f "$REPO_DIR/temp_for_pdf.md"

echo "----------------------------------------------------------"
echo "✅ Kompilierung vollkommen fehlerfrei abgeschlossen!"
echo "📂 PDF, MD und TXT wurden erfolgreich lokal aktualisiert."
echo "=========================================================="
