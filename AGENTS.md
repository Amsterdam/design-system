<!-- @license CC0-1.0 -->

# General Agent Instructions

Guidance for AI code agents working for the Amsterdam Design System. This is a component **library**, not an application — components must be generic, accessible, and reusable across any Amsterdam city service. Do not add application-specific logic, domain defaults, or assumptions about how a component will be used.

## Agent goals and priorities

When you make changes in this repository, follow these priorities in order:

1. **Correctness and accessibility** — code must work, be robust, and comply with WCAG 2.2 Level AA and our accessibility checklist.
2. **API and contract stability** — avoid breaking existing public APIs (components, props, CSS class names, tokens) unless explicitly requested.
3. **Consistency with existing patterns** — match the established conventions in the relevant package (tokens → CSS → React → Storybook).
4. **Minimal, focused change sets** — only change what is required to satisfy the task; do not refactor unrelated code.
5. **Performance and maintainability** — prefer simple, readable solutions that are fast enough and easy to maintain.

If these priorities conflict, choose the option that best preserves accessibility and correctness while keeping changes as small and consistent as possible.

## Repository structure

`pnpm` workspace monorepo. The pipeline is: **Tokens → CSS → React → Storybook**.

| Package                       | Technology          | Purpose                                                  |
| ----------------------------- | ------------------- | -------------------------------------------------------- |
| `packages-proprietary/tokens` | Style Dictionary    | Design tokens → CSS/JSON/Sass                            |
| `packages/css`                | Sass + Stylelint    | Component CSS (`dist/`)                                  |
| `packages/react`              | TypeScript + Rollup | Unstyled components emitting `.ams-*` classes            |
| `storybook/`                  | Storybook 8         | Component explorer, interaction tests, visual regression |

Global styles are imported in `storybook/config/preview.tsx`. Proprietary assets are served from `packages-proprietary/assets` via `staticDirs` in `storybook/config/main.ts`.

Each package has its own `AGENTS.md` with additional context. Those files are additive to this one — read both when working within a package. Read all Agent Instruction files before making cross-cutting changes that affect multiple layers (for example, a new component or a change to the design tokens that affects CSS and React).

### Off-limits

Never edit generated output directly. Instead, update the source files or configuration and run the appropriate scripts.

- `dist/` directories — build output, regenerated on every build
- `packages-proprietary/assets/logo/` and `packages-proprietary/assets/icons/` — generated files; update the source SVGs and run `pnpm run generate-logos` instead of editing by hand

## Commands

| Task              | Command                                                       |
| ----------------- | ------------------------------------------------------------- |
| Install           | `corepack enable && pnpm install`                             |
| Build all         | `pnpm run build`                                              |
| Dev (all watches) | `pnpm run start`                                              |
| Watch React only  | `pnpm run watch:react`                                        |
| Watch CSS only    | `pnpm run watch:css`                                          |
| Watch Storybook   | `pnpm run watch:storybook`                                    |
| Lint all          | `pnpm run lint`                                               |
| Lint JS/TS        | `pnpm run lint:js`                                            |
| Lint CSS/Sass     | `pnpm run lint:css`                                           |
| Auto-fix lint     | `pnpm run lint-fix`                                           |
| Format            | `pnpm run prettier`                                           |
| Run tests         | `pnpm run test`                                               |
| Watch tests       | `pnpm run --filter @amsterdam/design-system-react watch:test` |
| New component     | `pnpm run plop`                                               |

## Never do

These override common agent defaults — apply them regardless of context:

- **Never use `npm` or `yarn`** — only `pnpm`
- **Never add `import React from 'react'`** — the JSX transform handles this automatically
- **Never use `export default`** — use named exports only
- **Never use `interface` for prop types** — use `type`
- **Never add `any` type casts** or disable TypeScript strict checks
- **Never import via a barrel file within the same package** — import directly from the source file (cyclic dependency risk)
- **Never import CSS or SCSS inside a React component**
- **Never use `aria-label` for screen reader text** — use `ams-visually-hidden`; `aria-label` is not reliably auto-translated
- **Never export subcomponents** from the package barrel (`packages/react/src/index.ts`)
- **Never hardcode design values** (colors, spacing, font sizes, border radii, shadows) — use a CSS custom property from the design tokens
- **Never use `getByTestId` in tests** — use semantic queries (`getByRole`, `getByLabelText`, `getByText`)
- **Never add features, abstractions, or refactors beyond the scope of the task**
- **Never add comments** unless the logic is genuinely non-obvious

### Where to make changes

Follow this decision order when deciding which layer to change:

1. **Visual changes only** (spacing, colors, typography, borders):

- Prefer updating design tokens in `packages-proprietary/tokens` when the change is about a reusable design value.
- Otherwise, update component CSS in `packages/css` using existing tokens.

2. **Behaviour or markup changes that keep the visual contract**:

- Update React components in `packages/react` only; reuse existing CSS classes where possible.

3. **New visual variants or structural changes to markup**:

- Update CSS and React together so that the class contract stays aligned, and update Storybook stories to cover new variants.

4. **New components or major patterns**:

- Only create a new component when explicitly requested or when reuse of an existing component clearly conflicts with its documented intent.
- Follow the "Creating a new component" section and keep the implementation as generic and reusable as possible.

When in doubt, prefer the smallest change that satisfies the task and matches existing patterns.

## Code formatting

Settings are in [.prettierrc.json](.prettierrc.json) — do not override per file.

## Linting

Rules are in [eslint.config.mjs](eslint.config.mjs) (ESLint flat config) and applied to Sass via Stylelint (`pnpm run lint:css`). Key behavioural notes for agents:

- Use `import type` for type-only imports; never import types as values.
- No cyclic imports between packages.

## TypeScript

Settings are in [tsconfig.json](tsconfig.json). Key behavioural notes for agents:

- Strict mode is on — avoid `any`; do not disable strict checks.
- Always use `import type` for type-only imports.
- Prefer named exports over default exports.

## CSS / Sass conventions

See [`packages/css/AGENTS.md`](packages/css/AGENTS.md). Full reference: [`packages/css/documentation/coding-conventions.md`](packages/css/documentation/coding-conventions.md).

## React conventions

See [`packages/react/AGENTS.md`](packages/react/AGENTS.md). Full reference: [`packages/react/documentation/coding-conventions.md`](packages/react/documentation/coding-conventions.md).

## Creating a new component

Before creating a component, read an existing one of similar complexity (e.g. `packages/react/src/Badge/`) to understand established patterns. Always run `pnpm plop` — it scaffolds all required files from templates. If scaffolding manually, create files in this order:

1. **Tokens** — `packages-proprietary/tokens/src/components/ams/<name>.tokens.json`
2. **CSS** — `packages/css/src/components/<name>/<name>.scss` + register in `packages/css/src/components/index.scss`
3. **React** — `packages/react/src/<Name>/<Name>.tsx` + `<Name>.test.tsx` + `<Name>/index.ts` + register in `packages/react/src/index.ts`
4. **Storybook** — `storybook/src/components/<Name>/<Name>.docs.mdx` + `<Name>.stories.tsx` + `<Name>.test.stories.tsx`
5. **README** — one under `packages/css/src/components/<name>/` and one under `packages/react/src/<Name>/`

## Testing

See [`packages/react/AGENTS.md`](packages/react/AGENTS.md) for unit tests and [`storybook/AGENTS.md`](storybook/AGENTS.md) for interaction, visual, and accessibility tests.

When you add or change behaviour or markup, prefer running the most specific relevant commands first (for example, `pnpm run --filter @amsterdam/design-system-react test` for React component changes, or `pnpm run lint:css` for Sass-only changes) before falling back to the full `pnpm run lint` and `pnpm run test` suite.

## Accessibility

All components must comply with WCAG 2.2 Level AA. The full checklist is in `documentation/definition-of-done.md`. Key requirements:

- Focus outlines always visible.
- No content overflow at narrow viewports.
- Full keyboard operability; custom gestures must not conflict with native ones.
- Works at 200% browser zoom and maximum system text size.
- Color is never the sole means of conveying information (minimum contrast 4.5:1).
- Screen reader tested with NVDA + Chrome (Windows) and VoiceOver + Safari (macOS / iOS).
- Dynamic changes announced without unexpected focus movement.
- `prefers-reduced-motion` respected when animation is present.
- Forced colors mode supported.
- RTL language support.

For detailed accessibility requirements and examples, always cross-check changes against `documentation/definition-of-done.md`.

## Documentation

For per-package README and Storybook docs conventions, see the relevant package `AGENTS.md`.

### Language

- All documentation: English.
- Code examples in Storybook: Dutch (City of Amsterdam context).
- Headings: Sentence case. Component names: Title Case.

## Licensing

Every new source file must have a license header as its **first line**:

**Code files** (`.ts`, `.tsx`, `.scss`, `.js`):

```ts
// @license EUPL-1.2+
// Copyright Gemeente Amsterdam
```

**Documentation files** (`.md`, `.mdx`):

```md
<!-- @license CC0-1.0 -->
```

See `CONTRIBUTING.md` for the full required copyright notice template.

## Git and contribution workflow

- Branch from `develop` (GitFlow). Merge to `develop`. Releases go via `main`.
- Keep PRs small and focused — one concern per branch.
- Use [Conventional Commits](https://www.conventionalcommits.org/): `feat:`, `fix:`, `chore:`, `docs:`, `refactor:`, `test:`, `style:`.
- PR title is used in release notes — write a clear, English, user-facing title.
- Run `pnpm run lint` and `pnpm run test` locally before opening a PR.
- At least one maintainer must approve before merge.
- All CI checks (lint, tests, Chromatic) must pass.

### When reviewing code as an agent

When you are asked to review code or a pull request, apply these principles:

1. **Prioritise accessibility and correctness** — block or strongly flag changes that break behaviour, introduce regressions, or violate accessibility requirements.
2. **Check against conventions** — ensure changes follow the CSS and React coding conventions, token usage rules, and the "Never do" list in this document.
3. **Respect the public API** — highlight any changes to component APIs, props, or CSS class contracts and call out potential downstream impact.
4. **Verify tests and documentation** — confirm that unit tests, interaction/visual tests, and relevant READMEs or Storybook docs are updated when behaviour or APIs change.
5. **Keep feedback focused and actionable** — group related comments, suggest concrete improvements, and avoid proposing large refactors beyond the scope of the change.

## Definition of done

The full checklist is in [`documentation/definition-of-done.md`](documentation/definition-of-done.md). Before marking work complete, verify at minimum:

- [ ] `pnpm run lint` passes with no errors
- [ ] `pnpm run test` passes
- [ ] Chromatic visual changes reviewed and approved
- [ ] License header present in every new file
- [ ] Relevant `AGENTS.md` files updated if conventions, file locations, or tooling changed
