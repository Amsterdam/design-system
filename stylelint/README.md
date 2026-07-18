<!-- @license CC0-1.0 -->

# Stylelint plugin

Stylelint rules that resolve design tokens before judging a declaration.

## Why this exists

Almost every value in this repository is written as a token reference:

```scss
.ams-heading--level-1 {
  font-size: var(--ams-heading-1-font-size);
}
```

Rules that inspect the literal value of a declaration cannot see through that reference.
They read `var(--ams-heading-1-font-size)`, find nothing to check, and pass.
That is the correct thing for a general purpose rule to do, because resolving the reference needs knowledge of where the token is defined.
It does mean such a rule reports no problems here, whatever the token turns out to contain.

The rules in this plugin read the built token file, follow the reference — through as many aliases as it takes — and check the value it ends at.
A problem is reported at the declaration that uses the token, so the warning points at a line you can act on.

## Rules

### `ams/no-unsafe-clamp-font-size`

Reports a `font-size` that resolves to a `clamp()` whose maximum is more than 2.5 times its minimum, when the preferred value scales with the viewport.

A viewport unit does not grow when someone zooms in, so a font size that leans on one heavily leaves too little room to enlarge text.
Text has to stay resizable to 200% under WCAG 2.2 Level AA, success criterion 1.4.4.

A `clamp()` without a viewport unit in its preferred value is not reported: zoom still resizes it.

Options:

- `importFrom` — paths to the CSS files to read tokens from, relative to the working directory.
- `maxRatio` — the largest allowed ratio between the minimum and the maximum. Defaults to `2.5`.

### `ams/require-system-font-fallback`

Reports a `font-family` that resolves to a stack which does not end in a generic family such as `sans-serif`.

Without one, text has nothing to render in when the web font fails to load.
A generic family that is not last is reported too, because the families after it are never reached.

The `font-family` descriptor inside `@font-face` and `@font-palette-values` is skipped, since there it names the font being defined rather than a stack to fall through.
So are the global keywords `inherit`, `initial`, `revert`, `revert-layer` and `unset`.

Options:

- `importFrom` — paths to the CSS files to read tokens from, relative to the working directory.

## What it does not check

The rules skip anything they cannot resolve with certainty, rather than guess:

- A token that is declared more than once with different values, because which declaration wins depends on the cascade.
- A reference cycle, or a chain longer than twenty steps.
- A custom property that is defined nowhere the rule can see, and has no fallback.
- A value that contains Sass interpolation, which only resolves once the stylesheet is compiled.

Resolution is flat: a custom property is looked up by name, without regard for the selector it was declared under.
A component that redeclares a token under one selector is therefore treated as ambiguous and skipped.

## Relationship to `stylelint-plugin-defensive-css`

That plugin is installed and extended from its `strict` config, which enables all 21 of its rules.
Five of its rules are turned off in [.stylelintrc.json](../.stylelintrc.json), which cannot hold comments, so the reasoning lives here.
A full audit of all 21 rules — effectiveness, violations, remediation, and impact — is in [documentation/defensive-css.md](../documentation/defensive-css.md).

`defensive-css/no-unsafe-clamp-font-size` and `defensive-css/require-system-font-fallback` are off because the two rules above replace them.
Neither upstream rule resolves `var()`, so both pass on every tokenised declaration in this repository.
The rules here check the same thing and also catch literal values, so running both would only duplicate warnings on the literals.

`defensive-css/require-custom-property-fallback` is off.
It asks for `var(--token, fallback)` at every use, which would restate a value that the token already defines and leave two places to change it.

`defensive-css/require-at-layer` is off.
It asks for every style to sit in a top-level `@layer`, which changes how consumers override our CSS.
That is an architecture decision, not a lint fix.

`defensive-css/require-pure-selectors` is off.
It reports `> *`, `+ *`, `[aria-expanded="true"] &` and `.ams-date-input:not(:disabled):invalid` as element tags, none of which are.

Every remaining rule runs at `warning` severity where the repository still has violations, so they are visible without failing `lint:css`, and at `error` where it has none.

Two of the upstream rules are narrower than they look:

- `no-fixed-sizes` only checks its default properties once its severity is overridden, which drops coverage of borders, outlines and `translate`. Restoring the full list means restating all ninety properties in the config. It reports 8 violations as configured, against 15 with the full list.
- `no-list-style-none` misses both uses of `list-style: none` in [resets.scss](../packages/css/src/common/resets.scss), because they sit in `@mixin` blocks where it cannot see a list element in the selector.

## Requirements

The token file has to be built before the rules can resolve anything:

```sh
pnpm --filter @amsterdam/design-system-tokens run build
```

When a file listed in `importFrom` cannot be read, the rule reports that as an invalid option instead of passing silently.

## Tests

```sh
pnpm --filter @amsterdam/stylelint-plugin run test
```
