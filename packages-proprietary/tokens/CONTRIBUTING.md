<!-- @license CC0-1.0 -->

# Contributing to the tokens package

See the [repository-wide contributing guidelines](../../CONTRIBUTING.md) for general instructions.
The notes below apply specifically to design tokens.

## Compact Mode and responsive overrides

Components may expose separate tokens for responsive variants, such as `vi-medium` and `vi-wide` for the Grid.
These are applied at breakpoints in the component stylesheet and override the base token.

When you add or change a token in a `*.compact.tokens.json` file, check whether the component stylesheet also applies a responsive variant of that token at larger breakpoints.
If it does, override every responsive variant in the compact file as well.
Otherwise, the compact value only applies below the first breakpoint, and the component silently reverts to the default token at larger viewports.

For example, the Grid mixin sets `padding-inline` from `--ams-grid-padding-inline`, then overrides it with `--ams-grid-vi-medium-padding-inline` and `--ams-grid-vi-wide-padding-inline` at the medium and wide breakpoints.
Compact Mode must override all three, not just the base.
