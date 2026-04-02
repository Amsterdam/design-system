<!-- @license CC0-1.0 -->

# Tokens Package — Agent Instructions

These instructions are additive to the root [AGENTS.md](../../AGENTS.md). Read that first.

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
- Use the `$extensions` field for Amsterdam-specific metadata (e.g. `nl.amsterdam.type`, `nl.amsterdam.subtype`).
- Variant tokens are nested under the component (e.g. `ams.badge.azure.background-color`).

## Compact mode

Some token categories have `.compact.tokens.json` variants (e.g. `space.compact.tokens.json`, `typography.compact.tokens.json`). These provide denser values for compact layouts.

## Build

- Build command: `pnpm build` (runs `node build.js`)
- Watch mode: `pnpm build:watch`
- Output: `dist/` — never edit generated output directly.
- Build config: `build.js` with custom Style Dictionary transforms in `style-dictionary/transforms/`.

## File locations

- Component tokens: `src/components/ams/<name>.tokens.json`
- Brand tokens: `src/brand/ams/`
- Common tokens: `src/common/ams/`
- Build script: `build.js`
- Custom transforms: `style-dictionary/transforms/`

## Key rules

- Every token must have a `$value` and `$type` (or an `$extensions` equivalent).
- Token names use kebab-case and mirror CSS property names where applicable.
- No unused tokens — every defined token must be consumed by CSS or another token.
- No hardcoded design values in CSS or React — if a value is missing, add a token here first.
