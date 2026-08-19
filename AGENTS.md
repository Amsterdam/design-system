<!-- @license CC0-1.0 -->

# General Agent Instructions

Guidance for AI code agents working for the Amsterdam Design System. This is a component **library**, not an application — components must be generic, accessible, and reusable across any Amsterdam city service. Do not add application-specific logic, domain defaults, or assumptions about how a component will be used.

This file is a thin agent-specific layer on top of the official documentation and the per-package `AGENTS.md` files. Prefer reading and following those sources for details; use this file for cross-cutting priorities and "never do" rules.

## Agent priorities

Follow these priorities in order:

1. **Correctness and accessibility** — WCAG 2.2 Level AA and our accessibility checklist.
2. **API and contract stability** — do not break public components, props, CSS class names, or tokens unless asked.
3. **Consistency** — match the established patterns of the package you are in (tokens → CSS → React → Storybook).
4. **Minimal change sets** — see the "never do" rules below.
5. **Performance and maintainability** — simple and readable over clever.

- Search for an existing pattern (component, token, story, mixin) before inventing one. In Storybook stories, use Grid, Column, and Row instead of raw `<div>` elements with inline styles.
- Write Markdown one sentence per line, to keep diffs small.
- Never invent a file, command, configuration option, or API; state the uncertainty instead of guessing.
- When a user instruction conflicts with a rule here or in a package `AGENTS.md`, say so rather than silently following either.
- On an ambiguous task ("improve performance", "add validation"), ask rather than assume new behaviour, UX, or scope.

## Repository structure

`pnpm` workspace monorepo. The main layers are:

- Tokens: [packages-proprietary/tokens](packages-proprietary/tokens/AGENTS.md)
- CSS: [packages/css](packages/css/AGENTS.md)
- React: [packages/react](packages/react/AGENTS.md)
- Storybook: [storybook](storybook/AGENTS.md)

The typical pipeline is: **Tokens → CSS → React → Storybook**.

**STOP: before editing any CSS, check whether you need new or updated tokens first.** If the CSS value you need doesn't have a corresponding `var(--ams-...)` custom property, add the token in `packages-proprietary/tokens` before touching the `.scss` file.

Global styles are imported in [storybook/config/preview.tsx](storybook/config/preview.tsx). Proprietary assets are served from `packages-proprietary/assets` via `staticDirs` in [storybook/config/main.ts](storybook/config/main.ts).

### Naming conventions per package

File and directory casing differs between packages (see also [plopfile.mjs](plopfile.mjs)):

| Package   | Directory / file casing             | Example path                                     |
| --------- | ----------------------------------- | ------------------------------------------------ |
| Tokens    | `kebab-case.tokens.json` (flat)     | `src/components/ams/date-input.tokens.json`      |
| CSS       | `kebab-case/kebab-case.scss`        | `src/components/date-input/date-input.scss`      |
| React     | `PascalCase/PascalCase.tsx`         | `src/DateInput/DateInput.tsx`                    |
| Storybook | `PascalCase/PascalCase.stories.tsx` | `src/components/DateInput/DateInput.stories.tsx` |

Before making changes in a given layer, read the relevant package `AGENTS.md` and, where needed, the documentation it links to.

### Off-limits

- Generated output in any `dist/` directory — update source files or configuration and run the appropriate build script instead.
- Generated proprietary assets under `packages-proprietary/assets/logo/` and `packages-proprietary/assets/icons/` — update source SVGs and run `pnpm --filter @amsterdam/design-system-react generate-logos`.

## Global "never do" rules

These rules override common agent defaults and apply across the repository:

- **Never use npm or yarn** — always use `pnpm` (see commands in [README.md](README.md)).
- **Never add `import React from 'react'`** — the JSX transform handles this automatically.
- **Never weaken TypeScript safety** — avoid `any`, do not disable strict checks, and use `import type` for type-only imports.
- **Never hardcode design values** (colors, spacing, typography, radii, shadows) — use a CSS custom property backed by tokens; add or update tokens first if needed. This applies everywhere: SCSS files, Storybook stories (no inline `style` props with raw `px`/`rem`/hex values), and React components.
- **Never add backwards-compatibility fallbacks** (`@supports`, polyfills, feature detection) unless the task explicitly requests them. Make the simplest change that satisfies the task.
- **Never bypass accessibility** — do not use `aria-label` for screen reader-only text; use the `ams-visually-hidden` helper instead, and never remove focus outlines or rely on colour alone to convey meaning.
- **Never add features, abstractions, or refactors beyond the scope of the task.**
- **Never add comments** unless the logic is genuinely non-obvious and cannot be simplified — JSDoc for public APIs, props, and documentation required by package conventions is the explicit exception.

Package-specific "never do" rules (for example, avoiding barrel imports within the React package, or Storybook testing practices) live in the per-package `AGENTS.md` files.

A few critical rules — token usage, `ams-visually-hidden` for screen reader text, Conventional Commits — are intentionally repeated in per-package `AGENTS.md` files.
Agents scoped to a single directory may only load the local file, so the reinforcement is deliberate; do not DRY these rules out.

## Where to change what

- **A reusable design value** — a token in `packages-proprietary/tokens`.
- **Any other visual-only adjustment** — component CSS in `packages/css`, using existing tokens.
- **Behaviour or markup that keeps the visual contract** — React only, reusing existing CSS classes.
- **A new visual variant or structural markup** — CSS and React together, so the class contract stays aligned, plus stories covering the variants.
- **A new component** — `pnpm run plop`, which scaffolds every package with the right naming, license headers, and boilerplate; see [plopfile.mjs](plopfile.mjs) and [plop-templates/](plop-templates/).

Only create a new component when asked, or when reuse of an existing one clearly conflicts with its documented intent.
Creating files by hand means following the naming table above and each package's file location table, then registering the component in `packages/css/src/components/index.scss` and `packages/react/src/index.ts`.

## Documentation, tests, and accessibility

- Quality checklist, including WCAG 2.2 Level AA: [definition-of-done.md](documentation/definition-of-done.md) — cross-check it before submitting work.
- Testing: [tests.md](documentation/tests.md)
- Component docs: [component-docs.md](documentation/component-docs.md) and [storybook.md](documentation/storybook.md)
- Page templates: [page-anatomy.md](documentation/page-anatomy.md)
- Git, reviews, releases: [git.md](documentation/git.md), [code-reviews.md](documentation/code-reviews.md), [publishing.md](documentation/publishing.md)
- Release notes: [release-notes.md](documentation/release-notes.md)
- Storybook home page figures: [introduction-statistics.md](documentation/introduction-statistics.md)

Run the most specific relevant lint and test commands for the package you touched before falling back to the full `pnpm run lint` and `pnpm run test`.
Update the README, Storybook docs, and tests whenever behaviour, APIs, or visual contracts change.
ESLint, Stylelint, and Prettier are authoritative for code style; consult [eslint.config.mjs](eslint.config.mjs), [.stylelintrc.json](.stylelintrc.json), and [.prettierrc.json](.prettierrc.json) rather than restating their rules.

## Licensing

Every new source file must start with the appropriate license header. Do not introduce alternative or file-local licensing schemes. Token `.tokens.json` files have no license header (they are plain JSON).

**Code files** (`.ts`, `.tsx`, `.scss`, `.js`):

```ts
/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */
```

**Documentation files** (`.md`):

```md
<!-- @license CC0-1.0 -->
```

**Documentation files** (`.mdx`):

```mdx
{/* @license CC0-1.0 */}
```

## Common commands

All commands run from the repository root. Use `pnpm --filter <package-name>` to scope to a single package.

| Task                     | Command                      |
| ------------------------ | ---------------------------- |
| Install dependencies     | `pnpm install`               |
| Build all packages       | `pnpm run build`             |
| Lint everything          | `pnpm run lint`              |
| Run all tests            | `pnpm run test`              |
| Lint CSS only            | `pnpm run lint:css`          |
| Lint JS/TS only          | `pnpm run lint:js`           |
| Auto-fix lint + format   | `pnpm run lint-fix`          |
| Start Storybook          | `pnpm run watch:storybook`   |
| Scaffold a new component | `pnpm run plop`              |

Package-specific commands (lint, test, build, watch) are listed in each package `AGENTS.md`.

Package filter names: `@amsterdam/design-system-tokens`, `@amsterdam/design-system-css`, `@amsterdam/design-system-react`, `@amsterdam/storybook`.

## Git and contribution workflow

Human contributors and agents should both follow the conventions in [documentation/git.md](documentation/git.md): branch from `develop`, use branch names like `feat/DES-178-introduce-checkbox-component`, and write commit messages in English imperative mood describing the goal of the change.

PR titles use [Conventional Commits](documentation/publishing.md#conventional-commits): `feat`, `fix`, `chore` (append `!` for breaking changes). Include the component name as scope when applicable, e.g. `fix(Avatar): Correct the aspect ratio for the image`. These titles become squash-merge commit messages and drive changelog generation.

See also [documentation/code-reviews.md](documentation/code-reviews.md).

## Reviewing as an agent

When reviewing code, prioritise accessibility/correctness regressions and public API breakage. Check changes against the coding conventions, linting rules, token usage rules, and the "never do" lists in this file and the per-package `AGENTS.md` files. Verify that tests and docs are updated when behaviour or APIs change.

Before marking work complete, cross-check the full definition-of-done checklist in [documentation/definition-of-done.md](documentation/definition-of-done.md).
