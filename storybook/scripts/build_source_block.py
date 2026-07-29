#!/usr/bin/env python3
# @license EUPL-1.2+
# Copyright Gemeente Amsterdam
"""Turn a page-template story's `render` body into the hand-written Code Panel source.

    python3 storybook/scripts/build_source_block.py <stories.tsx> <StoryExportName>

Prints the JSX to paste between the backticks of `parameters.docs.source.code`.
Building the string this way rather than retyping it is what keeps the two copies
identical; verify afterwards with `pnpm --filter=storybook run test`, which runs
src/pages/sourceParity.test.ts over every template.

See documentation/code-panel-source.md for why the string is hand-written at all.

Three transformations, matching what the existing templates do by hand:
  - de-indent the render body to column zero
  - collapse a <Heading> onto one line where the result still fits
  - re-wrap a one-line comment that no longer fits into `{/*\n * … */}` block form
"""

import re
import sys
import textwrap

WIDTH = 120


def render_body(source: str, story: str) -> list[str]:
    """Extract the lines between `render: … => (` and its closing `),` for one export."""
    start = re.search(rf"^export const {re.escape(story)}\b.*?$", source, re.M)
    if not start:
        raise SystemExit(f"No export named {story!r} in this file.")

    rest = source[start.end() :]
    # Horizontal whitespace only: `\s*` also matches the newline, and since `rest` begins at the end of
    # the `export const …` line, re.M's `^` matches at position 0 — so a story whose first key is `render`
    # (that is, one that has no `parameters` block yet) would capture '\n  ' and never find its closing `),`.
    opening = re.search(r"^([ \t]*)render: (?:\([^)]*\)|\w+) => \($", rest, re.M)
    if not opening:
        raise SystemExit(
            f"{story} has no `render: … => (` block. A render whose body is not "
            "parenthesised has to be converted by hand."
        )

    indent = opening.group(1)
    body = rest[opening.end() :].lstrip("\n")
    closing = re.search(rf"^{indent}\),$", body, re.M)
    if not closing:
        raise SystemExit(f"Could not find the end of {story}'s render body.")

    lines = body[: closing.start()].rstrip("\n").split("\n")
    # The body sits two levels in from `render`; strip that so `<>` lands at column zero.
    strip = len(indent) + 2
    return [line[strip:] if line.startswith(" " * strip) else line for line in lines]


def collapse_headings(lines: list[str]) -> list[str]:
    """Join `<Heading …>` / text / `</Heading>` onto one line when it fits."""
    out, i = [], 0
    while i < len(lines):
        match = re.match(r"^(\s*)(<Heading [^>]*>)$", lines[i])
        if match and i + 2 < len(lines) and lines[i + 2].strip() == "</Heading>":
            merged = f"{match.group(1)}{match.group(2)}{lines[i + 1].strip()}</Heading>"
            if len(merged) <= WIDTH:
                out.append(merged)
                i += 3
                continue
        out.append(lines[i])
        i += 1
    return out


def wrap_comments(lines: list[str]) -> list[str]:
    """Re-flow an over-long one-line JSX comment into block form."""
    out = []
    for line in lines:
        match = re.match(r"^(\s*)\{/\* (.*) \*/\}$", line)
        if match and len(line) > WIDTH:
            indent, body = match.groups()
            inner = indent + " "
            out.append(f"{indent}{{/*")
            out.extend(f"{inner}* {part}" for part in textwrap.wrap(body, WIDTH - len(inner) - 3))
            out.append(f"{inner}*/}}")
        else:
            out.append(line)
    return out


def main() -> None:
    if len(sys.argv) != 3:
        raise SystemExit(__doc__)

    path, story = sys.argv[1], sys.argv[2]
    with open(path, encoding="utf-8") as handle:
        source = handle.read()

    lines = wrap_comments(collapse_headings(render_body(source, story)))
    print("\n".join(lines))

    hazards = [n for n, line in enumerate(lines, 1) if "`" in line or "${" in line]
    over = [n for n, line in enumerate(lines, 1) if len(line) > WIDTH]
    if hazards:
        print(f"\n! Escape these before pasting — backtick or ${{ }} in a template literal: {hazards}", file=sys.stderr)
    if over:
        print(f"\n! Still over {WIDTH} columns, shorten by hand: {over}", file=sys.stderr)
    if "exampleImageSource" in source:
        print(
            "\n! Replace any exampleImageSource(...) call with the literal URL it resolves to — "
            "the panel shows markup to copy, not the story's helpers.",
            file=sys.stderr,
        )


if __name__ == "__main__":
    main()
