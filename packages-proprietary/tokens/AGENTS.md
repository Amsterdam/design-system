<!-- @license CC0-1.0 -->

# Tokens Package — Agent Instructions

These instructions are additive to the root [AGENTS.md](../../AGENTS.md). Read that first.

See [README.md](README.md) for full token usage and design guidance; this file focuses on agent-specific rules for editing token source files.

## Overview

This package defines design tokens using the [Design Tokens Community Group (DTCG)](https://tr.designtokens.org/format/) format and builds them into CSS custom properties, JSON, and Sass variables via [Style Dictionary](https://styledictionary.com/).

## Token structure

Tokens are organized into three layers:

| Directory          | Purpose                                           |
| ------------------ | ------------------------------------------------- |
| `src/brand/ams/`   | Brand-level values (colors, typography, spacing)  |
| `src/common/ams/`  | Shared patterns across components (inputs, links) |
| `src/components/ams/` | Component-specific tokens                      |

## Token file format

Token files use the `.tokens.json` extension and follow the DTCG format:

```json
{
  "ams": {
    "<component-name>": {
      "<property>": {
        "$value": "{ams.<reference>}",
        "$type": "<dtcg-type>"
      }
    }
  }
}
```

- Always reference existing brand or common tokens where possible — do not hardcode raw values.
- Valid `$type` values used in this project: `color`, `dimension`, `fontFamily`, `fontWeight`, `shadow`. Do not invent other `$type` values.
- Use the `$extensions` field for Amsterdam-specific metadata (e.g. `nl.amsterdam.type`, `nl.amsterdam.subtype`). Common `$extensions` types include `fontSize`, `lineHeight`, and `space` (via `nl.amsterdam.subtype`). See existing component tokens for examples.
- Variant tokens are nested under the component (e.g. `ams.badge.azure.background-color`).

## Tokens that must hold a single value

A token typed as a dimension must resolve to exactly one value, whether it is typed through `nl.amsterdam.type` or the DTCG `$type`.

A dimension is read through `calc()`, `max()`, `min()` or `clamp()`, or assigned to a CSS longhand, and none of those take two values.
Given two, the declaration is invalid at computed-value time and the property falls back to its initial value rather than to the token, so the spacing disappears rather than degrading.

Two checks enforce this, so it does not have to be remembered:

- `pnpm build` fails and names every offending token, through [style-dictionary/multiValueDimensions.js](style-dictionary/multiValueDimensions.js).
- `ams/require-single-value-token` reports a stylesheet reading such a token where one value fits, through [the Stylelint plugin](../../stylelint/README.md).

The build check exempts a deprecated token, since it is frozen at the value it shipped with until it is removed.
The Stylelint rule does not: it judges the declaration in front of it, deprecated or not, so a deprecated alias that still resolves to two values is still reported where one value fits.
Where a value per side is wanted, use a type that takes several values, or split the token in two and set the longhands — as `ams.dialog.header.padding-block` was split into `ams.dialog.header.padding-block-start` and `ams.dialog.header.padding-block-end`.

Some tokens also carry a `nl.amsterdam.hint` recording why one value is all that fits, in one of two wordings:

- `Must be a single value: it is used in a calculation, which two values would invalidate.`
- `Must be a single value: it sets a longhand property, which takes only one.`

The checks make that note advisory rather than load-bearing.
It stays because it tells whoever changes the value what depends on it; there is no need to add one to a new token.

## Modes

Token files can have mode variants that override a subset of values; the mode names are listed in `build.js`.
Compact mode (`.compact.tokens.json`, e.g. `space.compact.tokens.json`) provides denser values for compact layouts.
Lo-fi mode (`.lo-fi.tokens.json`, e.g. `color.lo-fi.tokens.json`) renders components as a greyscale sketch.
Mode files must only redefine tokens that exist in the base set.
Each mode builds from its own files alone, so a `{ams.*}` reference in a mode file must resolve to a token defined within that mode's file set.

## Build

- Build command: `pnpm build` (runs `node build.js`)
- Watch mode: `pnpm build:watch`
- Output: `dist/` — never edit generated output directly.
- Build config: `build.js` with custom Style Dictionary logic in `style-dictionary/` (includes `transforms/` and `dimensionToString.js`).
- Lint command: `pnpm lint` reports tokens nothing consumes, and needs `dist/` to be built first.
- Test command: `pnpm test`

## File locations

- Component tokens: `src/components/ams/<name>.tokens.json`
- Brand tokens: `src/brand/ams/`
- Common tokens: `src/common/ams/`
- Build script: `build.js`
- Custom transforms: `style-dictionary/transforms/`

## Key rules

- Every token must have a `$value`. Type information is provided through either `$type` (DTCG standard) or `$extensions` with `nl.amsterdam.type` / `nl.amsterdam.subtype`. Some tokens (e.g. cursors, aspect ratios) have no type annotation — follow the existing pattern for the token category you are editing.
- Token names use kebab-case and mirror CSS property names where applicable.
- No unused tokens — every defined token must be consumed by CSS or another token, which the [unused token check](lint/README.md) enforces.
- No hardcoded design values in CSS or React — if a value is missing, add a token here first.
- Changes to brand-level tokens in `src/brand/ams/` have wide impact; do not change them unless the task explicitly calls for brand updates.
- When adding new component tokens, wire them into CSS (and React where applicable) in the same change so they are immediately used.
