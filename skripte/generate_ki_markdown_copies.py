#!/usr/bin/env python3
from __future__ import annotations

import argparse
import os
import re
import shutil
import subprocess
import sys
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parents[1]
MIRROR_ROOT = REPO_ROOT / 'dokumente' / 'ki_markdown'
SPLIT_PAGES_DEFAULT = 50

ALLOWED_SUFFIXES = {'.pdf', '.txt', '.md', '.html', '.htm'}
EXCLUDED_PREFIXES = ('dokumente/ki_markdown/', '.git/')
HAVE_MARKITDOWN = shutil.which('markitdown') is not None
HAVE_PDFINFO = shutil.which('pdfinfo') is not None
HAVE_PDFTOTEXT = shutil.which('pdftotext') is not None


def is_excluded(rel: str) -> bool:
    return rel == 'dokumente/ki_markdown' or rel.startswith(EXCLUDED_PREFIXES) or '/.git/' in rel


def collect_sources(paths: list[str] | None) -> list[Path]:
    if paths:
        out: list[Path] = []
        for raw in paths:
            p = (REPO_ROOT / raw).resolve()
            if p.is_file():
                out.append(p)
            elif p.is_dir():
                for child in p.rglob('*'):
                    if child.is_file() and child.suffix.lower() in ALLOWED_SUFFIXES:
                        rel = child.relative_to(REPO_ROOT).as_posix()
                        if not is_excluded(rel):
                            out.append(child)
        return sorted({p.resolve() for p in out})

    out: list[Path] = []
    for p in REPO_ROOT.rglob('*'):
        if not p.is_file() or p.suffix.lower() not in ALLOWED_SUFFIXES:
            continue
        rel = p.relative_to(REPO_ROOT).as_posix()
        if is_excluded(rel):
            continue
        out.append(p)
    return sorted({p.resolve() for p in out})


def rel_path(src: Path) -> str:
    return src.relative_to(REPO_ROOT).as_posix()


def md_path_for(src: Path) -> Path:
    return (MIRROR_ROOT / src.relative_to(REPO_ROOT)).with_suffix('.md')


def write_manifest_header(path: Path, title: str, columns: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(f'# {title}\n\n{columns}\n', encoding='utf-8')


def append_manifest(path: Path, line: str) -> None:
    with path.open('a', encoding='utf-8') as f:
        f.write(line)


def html_to_markdown(src: Path) -> str:
    if HAVE_MARKITDOWN:
        try:
            proc = subprocess.run(['markitdown', str(src)], check=True, capture_output=True, text=True, timeout=30)
            return proc.stdout
        except (subprocess.CalledProcessError, subprocess.TimeoutExpired):
            pass
    text = src.read_text(encoding='utf-8', errors='ignore')
    text = re.sub(r'(?is)<(script|style).*?>.*?</\\1>', ' ', text)
    text = re.sub(r'(?s)<[^>]+>', ' ', text)
    text = re.sub(r'\s+', ' ', text).strip()
    return f'# {src.name}\n\n{text}\n'


def pdf_to_markdown(src: Path) -> str:
    if HAVE_PDFTOTEXT:
        try:
            proc = subprocess.run(['pdftotext', '-layout', str(src), '-'], check=True, capture_output=True, text=True, timeout=30)
            return f'# {src.name}\n\n{proc.stdout}'
        except (subprocess.CalledProcessError, subprocess.TimeoutExpired):
            return f'# {src.name}\n\n[Konvertierung fehlgeschlagen: PDF ist verschluesselt, defekt oder nicht lesbar.]\n'
    return f'# {src.name}\n\n[Konvertierung fehlgeschlagen: pdftotext ist nicht verfuegbar.]\n'

def pdf_page_count(src: Path) -> int:
    if not HAVE_PDFINFO:
        return 0
    try:
        proc = subprocess.run(['pdfinfo', str(src)], check=True, capture_output=True, text=True, timeout=30)
    except (subprocess.CalledProcessError, subprocess.TimeoutExpired):
        return 0
    m = re.search(r'^Pages:\s*(\d+)\s*$', proc.stdout, re.M)
    return int(m.group(1)) if m else 0


def split_pdf(src: Path, rel: str, split_pages: int, split_manifest: Path) -> int:
    pages = pdf_page_count(src)
    if pages <= split_pages or pages <= 0 or not HAVE_PDFTOTEXT:
        return 0
    base_dir = MIRROR_ROOT / src.relative_to(REPO_ROOT).parent
    stem = src.stem
    created = 0
    for start in range(1, pages + 1, split_pages):
        end = min(start + split_pages - 1, pages)
        out = base_dir / f'{stem}__pages_{start}_to_{end}.md'
        out.parent.mkdir(parents=True, exist_ok=True)
        try:
            proc = subprocess.run(
                ['pdftotext', '-layout', '-f', str(start), '-l', str(end), str(src), '-'],
                check=True,
                capture_output=True,
                text=True,
                timeout=30,
            )
            body = proc.stdout
        except (subprocess.CalledProcessError, subprocess.TimeoutExpired):
            body = '[Split-Konvertierung fehlgeschlagen: PDF-Teil ist nicht lesbar.]\n'
        out.write_text(f'# {stem} ({start}-{end})\n\n{body}', encoding='utf-8')
        append_manifest(split_manifest, f'| `{rel}` | `{out.relative_to(REPO_ROOT).as_posix()}` | {start}-{end} |\n')
        created += 1
    return created

def convert(src: Path, split_pages: int, full_manifest: Path, split_manifest: Path) -> tuple[int, int]:
    rel = rel_path(src)
    out = md_path_for(src)
    out.parent.mkdir(parents=True, exist_ok=True)
    suffix = src.suffix.lower()

    if suffix == '.pdf':
        out.write_text(pdf_to_markdown(src), encoding='utf-8')
        append_manifest(full_manifest, f'| `{rel}` | `{out.relative_to(REPO_ROOT).as_posix()}` | pdf |\n')
        return 1, split_pdf(src, rel, split_pages, split_manifest)

    if suffix in {'.txt', '.md'}:
        shutil.copy2(src, out)
        append_manifest(full_manifest, f'| `{rel}` | `{out.relative_to(REPO_ROOT).as_posix()}` | {suffix[1:]} |\n')
        return 1, 0

    if suffix in {'.html', '.htm'}:
        out.write_text(html_to_markdown(src), encoding='utf-8')
        append_manifest(full_manifest, f'| `{rel}` | `{out.relative_to(REPO_ROOT).as_posix()}` | html |\n')
        return 1, 0

    return 0, 0


def main(argv: list[str]) -> int:
    parser = argparse.ArgumentParser(description='Generate local Markdown mirrors for KI retrieval.')
    parser.add_argument('paths', nargs='*', help='Optional source files or directories relative to the repo root')
    parser.add_argument('--split-pages', type=int, default=int(os.environ.get('KI_MD_SPLIT_PAGES', SPLIT_PAGES_DEFAULT)))
    parser.add_argument('--clean', action='store_true', help='Remove the mirror directory before generation')
    args = parser.parse_args(argv)

    if args.clean and MIRROR_ROOT.exists():
        shutil.rmtree(MIRROR_ROOT)
    MIRROR_ROOT.mkdir(parents=True, exist_ok=True)

    full_manifest = MIRROR_ROOT / 'INDEX.md'
    split_manifest = MIRROR_ROOT / 'SPLITS.md'
    write_manifest_header(full_manifest, 'KI-Markdown-Spiegel', '| Quelle | Spiegel | Typ |\n|---|---|---|')
    write_manifest_header(split_manifest, 'KI-Markdown-Splits', '| Quelle | Split | Seiten |\n|---|---|---|')

    sources = collect_sources(args.paths or None)
    full_count = 0
    split_count = 0
    for src in sources:
        full, splits = convert(src, args.split_pages, full_manifest, split_manifest)
        full_count += full
        split_count += splits

    print(f'Full mirrors: {full_count}', file=sys.stderr)
    print(f'Split chunks: {split_count}', file=sys.stderr)
    return 0


if __name__ == '__main__':
    raise SystemExit(main(sys.argv[1:]))
