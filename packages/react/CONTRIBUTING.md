<!-- @license CC0-1.0 -->

# Contributing Guidelines

## Generating logo components

The React logo components in `src/Logo/brands/` are generated from SVG source files in `packages-proprietary/assets/logo/`.
They must not be edited by hand.

After adding or updating an SVG in that folder, run:

```sh
pnpm run generate-logos
```

This will:

- Optimise the SVGs with SVGO
- Generate `*Logo.tsx` components with `forwardRef` and the correct props
- Format and lint the output

Commit both the SVG file(s) and the generated components together.
