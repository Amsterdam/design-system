<!-- @license CC0-1.0 -->

# Unused token check

Reports design tokens that the build defines but nothing consumes.

## Why this exists

[AGENTS.md](../AGENTS.md) asks that every defined token be consumed by CSS or another token.
Until this check, nothing enforced that, and review missed at least one case for over a year: `--ams-search-field-input-cancel-button-color` has never been referenced by [search-field.scss](../../../packages/css/src/components/search-field/search-field.scss) in the entire history of that file.

Every other check in the repository runs from source to the token dictionary, never the other way.
In [.stylelintrc.json](../../../.stylelintrc.json), `csstools/value-no-unknown-custom-properties` and the five `ams/*` rules all take the built token CSS as an `importFrom` dictionary and validate declarations against it.
That answers "does this `var(--ams-…)` resolve to something real?", which catches typos and references to deleted tokens.
It never asks whether every entry in the dictionary is reached, and reasonably so: the built CSS is a published API, so to a stylesheet linter an unreferenced custom property is unremarkable.
This check supplies the missing direction.

## How it works

The set of defined tokens comes from the built CSS in [dist](../dist), not from the `.tokens.json` sources.
Style Dictionary maps a DTCG path such as `ams.color.interactive.default` to a custom property through the transforms in [style-dictionary](../style-dictionary), which do more than join the path with dashes — `name/customKebab` also strips a trailing `default` segment.
Restating that mapping here would leave two implementations to keep in step, so the check reads the output of the real one.

A token consumed only by another token is consumed.
Those references need no separate pass either: the CSS platform is built with `outputReferences`, so a token defined in terms of another carries a `var()` in its built value.
Reading the declarations and their values gives both halves from one file, and the two agree exactly with the `{ams.…}` references in the sources.

Everything else is a text scan of the consumers for `var(--ams-…)`.
Stylesheets are scanned rather than parsed because Sass interpolation is not valid CSS, and because the same scan has to serve the TypeScript and MDX files that reference tokens too.

### What counts as a consumer

`packages/*/src`, `storybook/config` and `storybook/src`, whatever the file extension.
Consumption from Storybook alone is legitimate, and three typography tokens are reached that way and no other.
Documentation outside those directories names tokens in prose, which is not a use, so it is left out.

### Composed names

Five stylesheets build a token name with Sass interpolation inside an `@each` loop, among them [column.scss](../../../packages/css/src/components/column/column.scss) with `var(--ams-column-gap-#{$size})`.
Each one carries a `stylelint-disable` for `csstools/value-no-unknown-custom-properties`, because that rule cannot resolve the name either.
The check reads the loop and expands the name over its values, which is what keeps the twelve gap and aspect ratio tokens those loops reach out of the report.

When a name cannot be expanded — the loop is missing, or the list is not literal — the check falls back on how much of the name is still literal:

- A prefix inside the token namespace, such as `--ams-space-`, narrows the reference to one family. Every token in that family is left unreported, and the reference is listed so the imprecision is visible rather than silent.
- A prefix that stops short of the namespace, such as `--` or `--ams-`, could reach any token at all. Nothing can then be reported with confidence, so the check fails and names the site. There is no such case today; the guard is there for when one appears.

A name composed outside the namespace, such as `var(--utrecht-space-#{$size})`, is ignored, since it can never name a token here.

## What it does not check

- **Names composed at runtime in JavaScript.** [formatTokenValue.ts](../../../storybook/src/_common/formatTokenValue.ts) and [flattenTokens.ts](../../../storybook/src/_components/DesignTokensTable/flattenTokens.ts) both build `--ams-…` strings for the token tables. They are generic machinery that renders whatever it is handed rather than a use of any particular token, so counting them would mark the whole set as consumed.
- **The token sources those tables import.** A documentation page imports a `.tokens.json` file wholesale to tabulate it. Being displayed is not being used.
- **Declarations.** A component stylesheet that writes `--ams-icon-line-height: …` sets a token for its subtree rather than consuming it, so on its own it does not keep the token alive. Four tokens are set that way today, and each also has a real consumer elsewhere.
- **Consumers outside this repository.** Tokens are a published API, and one may be offered deliberately without internal use. That is what the allowlist is for.

## Allowlist

[allowlist.json](allowlist.json) maps a token name to the reason it may stay unused.
An entry has to earn its place: the check reports an entry whose token no longer exists, or which turns out to be consumed after all, so the file cannot quietly rot.

## Requirements

The tokens have to be built before the check can read them:

```sh
pnpm --filter @amsterdam/design-system-tokens run build
```

All six built CSS files are read.
Today `index.css` declares every token, `compact.css` redeclares the subset that makes layouts denser, `lo-fi.css` redeclares the subset that renders components as a greyscale sketch, and the three `.theme.css` variants declare the same names under a different selector, so reading `index.css` alone would give the same answer.
Reading all of them means a build output added later is covered without a change here.

When none can be read, the check says so and fails rather than reporting every token as unused.

## Tests

```sh
pnpm --filter @amsterdam/design-system-tokens run test
```
