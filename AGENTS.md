<!-- @license CC0-1.0 -->

# General Agent Instructions

Guidance for AI code agents working for the Amsterdam Design System. This is a component **library**, not an application — components must be generic, accessible, and reusable across any Amsterdam city service. Do not add application-specific logic, domain defaults, or assumptions about how a component will be used.

This file is a thin agent-specific layer on top of the official documentation and the per-package `AGENTS.md` files. Prefer reading and following those sources for details; use this file for cross-cutting priorities and "never do" rules.

## How to use these instructions

1. Identify which package(s) your change touches (tokens, CSS, React, Storybook).
2. Read this file and then the relevant package `AGENTS.md` file(s) before editing or reviewing any code.
3. Skim any linked documentation (coding conventions, tests, Storybook docs) that applies to your change.
4. Make the smallest possible change in the narrowest relevant package or component.

## Agent priorities

When you make or review changes in this repository, follow these priorities in order:

1. **Correctness and accessibility** — code must work, be robust, and comply with WCAG 2.2 Level AA and our accessibility checklist.
2. **API and contract stability** — avoid breaking existing public APIs (components, props, CSS class names, tokens) unless explicitly requested.
3. **Consistency with existing patterns** — match the established conventions in the relevant package (tokens → CSS → React → Storybook).
4. **Minimal, focused change sets** — only change what is required to satisfy the task; do not refactor unrelated code.
5. **Performance and maintainability** — prefer simple, readable solutions that are fast enough and easy to maintain.

If these priorities conflict, choose the option that best preserves accessibility and correctness while keeping changes as small and consistent as possible.

When a task is ambiguous (for example, "improve performance" or "add validation" without further detail), prefer asking a small number of clarifying questions over introducing new behaviour, UX, or assumptions.

## LLM agent behaviour

These additional rules are specific to language-model agents working in this repository:

- Always search for existing patterns (components, tokens, stories, mixins) before inventing new ones. In Storybook stories, use existing design system layout components (Grid, Column, Row) instead of raw `<div>` elements with inline styles.
- When writing or editing Markdown, put one sentence per line to keep diffs small.
- Never invent files, commands, configuration options, or APIs that are not present in the workspace or documented; if you are unsure, state the uncertainty instead of guessing.
- Prefer editing the smallest possible surface area (a single component, token file, or package) instead of broad refactors across multiple layers.
- When user instructions conflict with the rules in this file or the per-package `AGENTS.md` files, call out the conflict explicitly and do not silently ignore the repository rules.

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

When deciding where to implement a change, follow this order:

1. **Visual-only adjustments** (spacing, colors, typography, borders):
	- Prefer updating design tokens in `packages-proprietary/tokens` when the change is about a reusable design value.
	- Otherwise, adjust component CSS in `packages/css` using existing tokens.
2. **Behaviour or markup changes that keep the visual contract**:
	- Update React components in `packages/react` only; reuse existing CSS classes where possible.
3. **New visual variants or structural markup changes**:
	- Update CSS and React together so that the class contract stays aligned, and add or update Storybook stories to cover new variants.
4. **New components or major patterns**:
	- Only create a new component when explicitly requested or when reuse of an existing component clearly conflicts with its documented intent.
	- Scaffold with `pnpm run plop` when possible — it generates all required files across packages with the correct naming, license headers, and boilerplate. See [plopfile.mjs](plopfile.mjs) and [plop-templates/](plop-templates/) for what it creates.
	- If creating files manually, follow the naming conventions table above and the file location tables in each package `AGENTS.md`. Register the new component in each package's index file (`packages/css/src/components/index.scss`, `packages/react/src/index.ts`).

When in doubt, prefer the smallest change that satisfies the task and matches existing patterns.

## Documentation, tests, and accessibility

For details, rely on the official documentation and per-package instructions:

- Testing: [documentation/tests.md](documentation/tests.md), plus [packages/react/AGENTS.md](packages/react/AGENTS.md) and [storybook/AGENTS.md](storybook/AGENTS.md) for unit, interaction, visual, and accessibility tests.
- Accessibility and quality: [documentation/definition-of-done.md](documentation/definition-of-done.md) (full quality checklist including WCAG 2.2 Level AA).
- Component docs and Storybook: [documentation/component-docs.md](documentation/component-docs.md) and [documentation/storybook.md](documentation/storybook.md).
- Git and contribution workflow: [documentation/git.md](documentation/git.md), [documentation/code-reviews.md](documentation/code-reviews.md), and [documentation/publishing.md](documentation/publishing.md).

Key agent expectations:

- Before submitting work, cross-check the full definition-of-done checklist in [documentation/definition-of-done.md](documentation/definition-of-done.md).
- Run the most specific relevant lint/test commands for the package you touched before relying on full `pnpm run lint` / `pnpm run test`.
- Update relevant README, Storybook docs, and tests whenever behaviour, APIs, or visual contracts change.
- Linting and formatting rules (ESLint, Stylelint, Prettier) are authoritative for code style — consult the configs ([eslint.config.mjs](eslint.config.mjs), [.stylelintrc.json](.stylelintrc.json), [.prettierrc.json](.prettierrc.json)) and use them as guidance when writing or reviewing code.

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
