<!-- @license CC0-1.0 -->

# CSS Package — Agent Instructions

These instructions are additive to the root [AGENTS.md](../../AGENTS.md). Read that first.

Full conventions: [documentation/coding-conventions.md](documentation/coding-conventions.md) and [README.md](README.md)

## Naming

BEM-ish NLDS naming:

- Block: `.ams-component`
- Modifier: `.ams-component--variant`
- Element: `.ams-component__element`

## Key conventions

The full coding conventions are in [documentation/coding-conventions.md](documentation/coding-conventions.md). Agent-critical points:

- **Token usage**: all design values (colors, spacing, typography, borders, shadows) must come from CSS custom properties backed by tokens. Reference them as `var(--ams-<component>-<property>)`. If a token is missing, add it in the tokens package first.
- **Input state precedence** (highest → lowest): Disabled → Hover → Invalid → Default. See the coding conventions for the full breakdown including checkbox/radio/switch value states.
- **Pseudo-class blocks**: only list changed properties; unchanged properties belong in the base class.
- **Mixins**: extract common patterns (>2 declarations) into mixins in `src/common/`. Name reset mixins after the element (e.g. `@mixin reset-ul`). Import mixins with `@use "../../common/<mixin-file>" as *;`.
- **Form validation**: support both native (`:invalid`) and manual (`aria-invalid`) validation styles.
 - **Raw values**: never introduce new raw `px`, `rem`, or `em` values for colors, spacing, font sizes, radii, or shadows; if you need a new value, add a token in the tokens package first.
 - **Focus visibility**: never remove focus indicators. Use the shared focus styles defined by tokens and common mixins, and ensure focus states continue to meet WCAG 2.2 contrast and visibility requirements.

## README

- Location: `src/components/<name>/README.md`
- Content: guidelines, usage intent, relevant WCAG requirements.
- Do **not** enumerate every token or list technical variants exhaustively.

## File locations

All CSS directories and file names use `kebab-case` (unlike React's `PascalCase`).

- Component SCSS: `src/components/<name>/<name>.scss`
- Component README: `src/components/<name>/README.md`
- Shared mixins: `src/common/<name>.scss`
- Register new components in: `src/components/index.scss` (add `@use "<name>/<name>";`)

Run from the repository root:

- `pnpm run lint:css` (lint) or `pnpm run lint-fix:css` (auto-fix)
