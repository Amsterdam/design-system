#!/usr/bin/env python3
# @license EUPL-1.2+
# Copyright Gemeente Amsterdam
"""Resolve design tokens to their real values.

Most values in packages-proprietary/tokens/src are references to other tokens,
so reading a .tokens.json file tells you the shape of the system but not the
size, colour or spacing a component actually gets. This walks the whole token
set, follows every {ams.*} reference, and prints the resolved value beside the
raw one.

    python3 resolve_tokens.py ams.heading
    python3 resolve_tokens.py ams.paragraph --mode compact
    python3 resolve_tokens.py ams.color.highlight --repo /path/to/design-system

Cross-check anything surprising against packages-proprietary/tokens/dist/index.css,
which holds the final computed values.
"""

import argparse
import json
import pathlib
import re
import sys

REFERENCE = re.compile(r"\{([^}]+)\}")
MAX_DEPTH = 16


def find_repo_root(start: pathlib.Path) -> pathlib.Path:
    """Walk up until the tokens package appears, so the script runs from anywhere."""
    for candidate in [start, *start.parents]:
        if (candidate / "packages-proprietary" / "tokens" / "src").is_dir():
            return candidate
    raise SystemExit(
        "Could not find the repository root. Pass --repo with the path to the design-system checkout."
    )


def load_tokens(src: pathlib.Path, mode: str | None) -> dict:
    """Flatten every token file into {dotted.name: raw value}.

    Base tokens live in <name>.tokens.json. A mode adds <name>.<mode>.tokens.json,
    which overrides the base values, so those are loaded second.
    """
    flat: dict[str, object] = {}

    def walk(node, path=""):
        if isinstance(node, dict):
            if "$value" in node:
                flat[path] = node["$value"]
            else:
                for key, value in node.items():
                    walk(value, f"{path}.{key}" if path else key)

    def is_base(path: pathlib.Path) -> bool:
        # date-input.tokens.json is a base file; date-input.compact.tokens.json is not.
        return path.name.count(".") == 2

    for path in sorted(src.rglob("*.tokens.json")):
        if is_base(path):
            walk(json.loads(path.read_text()))

    if mode:
        found = False
        for path in sorted(src.rglob(f"*.{mode}.tokens.json")):
            walk(json.loads(path.read_text()))
            found = True
        if not found:
            print(f"warning: no *.{mode}.tokens.json files found", file=sys.stderr)

    return flat


def resolve(value, flat: dict, depth: int = 0):
    """Follow {ams.*} references until a literal falls out."""
    if depth > MAX_DEPTH:
        return f"<<reference loop: {value}>>"

    # Dimension tokens are objects: {"value": 1.5, "unit": "rem"}.
    if isinstance(value, dict) and "value" in value and "unit" in value:
        return f"{value['value']}{value['unit']}"

    if isinstance(value, str):
        whole = REFERENCE.fullmatch(value.strip())
        if whole:
            target = whole.group(1)
            if target not in flat:
                return f"<<missing {target}>>"
            return resolve(flat[target], flat, depth + 1)

        # A value can embed references, e.g. "1px solid {ams.color.border}".
        def replace(match):
            target = match.group(1)
            if target not in flat:
                return f"<<missing {target}>>"
            return str(resolve(flat[target], flat, depth + 1))

        return REFERENCE.sub(replace, value)

    return value


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("prefix", help="Token prefix to print, e.g. ams.heading")
    parser.add_argument("--mode", help="Overlay a mode's tokens, e.g. compact or lo-fi")
    parser.add_argument("--repo", type=pathlib.Path, help="Path to the design-system checkout")
    parser.add_argument("--raw", action="store_true", help="Also print the unresolved value")
    args = parser.parse_args()

    root = args.repo.resolve() if args.repo else find_repo_root(pathlib.Path.cwd())
    flat = load_tokens(root / "packages-proprietary" / "tokens" / "src", args.mode)

    matches = sorted(name for name in flat if name.startswith(args.prefix))
    if not matches:
        print(f"No tokens start with {args.prefix!r}.", file=sys.stderr)
        # Suggest the groups that exist at the depth the prefix was aiming for,
        # so a typo in the last segment shows its neighbours rather than the whole set.
        depth = args.prefix.count(".") + 1
        parent = args.prefix.rsplit(".", 1)[0] if "." in args.prefix else ""
        siblings = sorted({".".join(n.split(".")[:depth]) for n in flat if not parent or n.startswith(parent + ".")})
        if siblings:
            print(f"Groups available at this level ({len(siblings)}):", file=sys.stderr)
            for name in siblings[:20]:
                print(f"  {name}", file=sys.stderr)
            if len(siblings) > 20:
                print(f"  … and {len(siblings) - 20} more", file=sys.stderr)
        return 1

    for name in matches:
        resolved = json.dumps(resolve(flat[name], flat))
        if args.raw:
            print(f"{name} = {resolved}   (raw: {json.dumps(flat[name])})")
        else:
            print(f"{name} = {resolved}")

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
