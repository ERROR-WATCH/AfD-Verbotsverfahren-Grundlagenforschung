import os
import subprocess

repo_path = "/home/error/AfD-Verbotsverfahren-Grundlagenforschung"
urteilsbelege_path = os.path.join(repo_path, "dokumente/hauptquellen/urteilsbelege")

print("Checking and compiling missing individual PDF files (81 to 239)...")

compiled_count = 0
for n in range(81, 240):
    prefix = f"{n}_"
    # Find matching .md file
    md_file = None
    for filename in os.listdir(urteilsbelege_path):
        if filename.startswith(prefix) and filename.endswith(".md"):
            md_file = filename
            break
            
    if not md_file:
        print(f"Warning: No markdown file found for case {n}")
        continue
        
    pdf_file = md_file.replace(".md", ".pdf")
    md_path = os.path.join(urteilsbelege_path, md_file)
    pdf_path = os.path.join(urteilsbelege_path, pdf_file)
    
    # Check if PDF already exists (to avoid duplicate work, though none should exist)
    if os.path.exists(pdf_path):
        print(f"PDF already exists for case {n}: {pdf_file}")
        continue
        
    print(f"Compiling [{n}/239]: {md_file} -> {pdf_file}")
    
    # Run pandoc to compile individual PDF
    # We strip emojis in a temporary step or let xelatex handle it with standard warning.
    # Since we want it warning-free, we can quickly read the md file, strip any emojis, write to a temp file, compile, and clean up.
    # This is extremely clean and prevents any latex failures!
    with open(md_path, "r", encoding="utf-8") as f:
        content = f.read()
        
    # Strip emojis
    content_clean = content.replace("🔴", "").replace("🔵", "").replace("📥", "").replace("📄", "").replace("📝", "").replace("📚", "").replace("🔗", "")
    # Add a simple geometry margin header
    content_clean = "---\ngeometry: margin=2cm\n---\n\n" + content_clean
    
    temp_md_path = os.path.join(urteilsbelege_path, f"temp_{n}.md")
    with open(temp_md_path, "w", encoding="utf-8") as f:
        f.write(content_clean)
        
    try:
        subprocess.run([
            "pandoc", "-s", temp_md_path, "-o", pdf_path, "--pdf-engine=xelatex"
        ], check=True)
        compiled_count += 1
    except subprocess.CalledProcessError as e:
        print(f"Error compiling case {n}: {e}")
    finally:
        if os.path.exists(temp_md_path):
            os.remove(temp_md_path)

print(f"Done! Successfully compiled {compiled_count} individual PDF files.")
