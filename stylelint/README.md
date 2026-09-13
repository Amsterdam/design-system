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

Three kinds of rule live here.
The two font rules _replace_ their upstream counterparts, which are turned off: they check literal values as well as tokens.
Three more _complement_ upstream rules that stay on: the upstream rule judges literal values, the rule here only reports a problem that arrives through token resolution.
A declaration that already violates literally is left to the upstream rule, so no declaration is ever reported twice.
`ams/require-single-value-token` stands on its own, since no upstream rule asks how many values a token holds.

### `ams/no-fixed-sizes`

Reports a size-related declaration whose tokens resolve to a pixel length.
Pixels do not scale when users raise their default font size, so sizes that should follow text end up fixed.

The property list is taken from the strict configuration of `defensive-css/no-fixed-sizes`, so both rules cover the same properties without maintaining the list twice — extended with the logical border shorthands (`border-inline`, `border-block`, and their start/end variants) that the upstream list misses.

Options:

- `importFrom` — paths to the CSS files to read tokens from, relative to the working directory.
- `properties` — the properties to check. Defaults to the list described above.

### `ams/no-list-style-none`

Reports a `list-style` or `list-style-type` whose token resolves to `none`.
Safari then removes the list from the accessibility tree, so VoiceOver no longer announces the list or its item count; `list-style-type: ""` hides markers while keeping the semantics.

Options:

- `importFrom` — paths to the CSS files to read tokens from, relative to the working directory.

### `ams/no-unsafe-clamp-font-size`

Reports a `font-size` that resolves to a `clamp()` whose maximum is more than 2.5 times its minimum, when the preferred value scales with the viewport.

A viewport unit does not grow when someone zooms in, so a font size that leans on one heavily leaves too little room to enlarge text.
Text has to stay resizable to 200% under WCAG 2.2 Level AA, success criterion 1.4.4.

A `clamp()` without a viewport unit in its preferred value is not reported: zoom still resizes it.

Options:

- `importFrom` — paths to the CSS files to read tokens from, relative to the working directory.
- `maxRatio` — the largest allowed ratio between the minimum and the maximum. Defaults to `2.5`.

### `ams/require-grid-minmax`

Reports a `grid-template-columns` or `grid-template-rows` whose tokens resolve to a track list with a bare `fr` track.
Such a track cannot shrink below its content’s min-content size, so one long unbreakable word pushes the grid out of its container; `minmax(0, …)` lets it shrink.
Its first finds were three Description List tokens holding bare `fr` tracks, fixed since.

Options:

- `importFrom` — paths to the CSS files to read tokens from, relative to the working directory.

### `ams/require-single-value-token`

Reports a `var()` whose token resolves to more than one value where only one fits: read by `calc()`, `clamp()`, `max()` or `min()`, or assigned to a longhand that takes a single value.

Two values there make the declaration invalid at computed-value time.
The property then falls back to its initial value rather than to the token, so the padding disappears rather than degrading — a failure that is silent and total.
A shorthand is not reported: `padding-block` and `gap` take a value per side on purpose.

Each operand of a math function is judged on its own, so an operand that cannot be resolved does not hide a problem in the one beside it.
A reference nested in another is a fallback, which only applies while the custom property before it is undefined; resolution already weighs that up, so it is not judged a second time on its own.

The [token build](../packages-proprietary/tokens/README.md#tokens-that-hold-a-single-value) enforces the same constraint from the other end, by failing when a token typed as a dimension resolves to more than one value.
This rule covers what that check cannot see: a value a stylesheet composes itself, and a private `--_ams-…` property that never reaches the token dictionary.

Options:

- `importFrom` — paths to the CSS files to read tokens from, relative to the working directory.
- `properties` — the longhands to check. Defaults to the properties that take exactly one value.

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
Six of its rules are turned off in [.stylelintrc.json](../.stylelintrc.json), which cannot hold comments, so the reasoning lives here.
A full audit of all 21 rules — effectiveness, violations, remediation, and impact — is in [documentation/defensive-css.md](../documentation/defensive-css.md).

`defensive-css/no-unsafe-clamp-font-size` and `defensive-css/require-system-font-fallback` are off because the two font rules above replace them.
Neither upstream rule resolves `var()`, so both pass on every tokenised declaration in this repository.
The rules here check the same thing and also catch literal values, so running both would only duplicate warnings on the literals.

`defensive-css/no-fixed-sizes`, `defensive-css/no-list-style-none` and `defensive-css/require-grid-minmax` stay on beside their `ams/` complements: they judge the literal values, the `ams/` rules judge what tokens resolve to.

`defensive-css/require-custom-property-fallback` is off.
It asks for `var(--token, fallback)` at every use, which would restate a value that the token already defines and leave two places to change it.

`defensive-css/require-at-layer` is off.
It asks for every style to sit in a top-level `@layer`, which changes how consumers override our CSS.
That is an architecture decision, not a lint fix.

`defensive-css/require-pure-selectors` is off.
It reports `> *`, `+ *`, `[aria-expanded="true"] &` and `.ams-date-input:not(:disabled):invalid` as element tags, none of which are.

`defensive-css/require-named-grid-lines` is off.
Our grids place children by span (`grid-column-end: span n`, `grid-column: 1 / -1`), by auto-placement, or into named areas, so line names would add bytes without any consumer being able to use them — the classes are the API, not the grid lines.
The rule also fires on `grid-template-columns: var(--…)` declarations it cannot inspect, and double-reports the tracks that `require-grid-minmax` already covers.

Every remaining rule runs at `error` severity, and the repository has no outstanding violations.
Deliberate patterns the rules cannot recognise carry a `stylelint-disable` comment stating the reason at the site, scoped as narrowly as practical — usually a single line.

Two of the upstream rules are narrower than they look:

- `no-fixed-sizes` silently resets its property list to the ~40 defaults when any option — including `severity` — is overridden, dropping coverage of borders, outlines and `translate`. The config therefore leaves the strict preset's ninety-property configuration untouched.
- `no-list-style-none` cannot see into `@mixin` blocks, so it misses the `reset-ol`/`reset-ul` mixins in [resets.scss](../packages/css/src/common/resets.scss). Those mixins hide markers with `list-style-type: ""`, which keeps list semantics; the rule only guards literal future uses.

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
