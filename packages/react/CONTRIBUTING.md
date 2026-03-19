<!-- @license CC0-1.0 -->

# Contributing Guidelines

## Generating logo components

The React logo components in `src/Logo/brands/` are generated from SVG source files in `packages-proprietary/assets/logo/`.
They must not be edited by hand.

After adding or updating an SVG in that folder, run:

```sh
npm run generate-logos
```

This optimises the SVGs with SVGO, generates `*Logo.tsx` components with `forwardRef` and the correct props, and formats and lints the output.
Commit both the SVG file(s) and the generated components together.
