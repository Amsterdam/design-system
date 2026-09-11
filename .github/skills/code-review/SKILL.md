---
name: code-review
description: Review a pull request or a diff in the Amsterdam Design System. Use this whenever reviewing changes in this repository, to know what to flag, what to leave to the linters, how to rank findings, and how to phrase a review comment.
license: CC0-1.0
---

<!-- @license CC0-1.0 -->

# Reviewing code in the Amsterdam Design System

This is a component **library**, not an application.
A change is only correct if it stays generic, accessible, and reusable across any Amsterdam city service.

## Before you comment

1. Read the root [AGENTS.md](../../../AGENTS.md), then the `AGENTS.md` of every package the diff touches.
   The per-package files hold rules the root file does not repeat.

   | Changed path                     | Also read                                                          |
   | -------------------------------- | ------------------------------------------------------------------ |
   | `packages-proprietary/tokens/**` | [tokens/AGENTS.md](../../../packages-proprietary/tokens/AGENTS.md) |
   | `packages/css/**`                | [css/AGENTS.md](../../../packages/css/AGENTS.md)                   |
   | `packages/react/**`              | [react/AGENTS.md](../../../packages/react/AGENTS.md)               |
   | `storybook/**`                   | [storybook/AGENTS.md](../../../storybook/AGENTS.md)                |

2. Check a component's real API before claiming anything about it.
   Call the design system MCP server — `list-all-documentation`, then `get-documentation` — to confirm that a property, variant, or component exists.
   It is a public Streamable HTTP endpoint at `https://main--68db9df886b46f139748c074.chromatic.com/mcp`.
   It tracks `main`, so it knows the released API only: a component, property, or variant the pull request itself adds will be absent from it, and that absence is not a finding.
   Use it to check what the branch _consumes_, not what the branch _introduces_.
   If the server is unavailable to you, or you cannot verify a claim through it, say so instead of asserting it — a confidently wrong review comment costs the author more time than no comment at all.
3. Read the pull request title and description first, so you review the change the author intended to make.

## Rank findings before you write them

Report in this order, and lead with the most serious:

1. **Accessibility and correctness** — WCAG 2.2 Level AA failures, broken behaviour, wrong ARIA, lost focus indicators, reading order, contrast.
2. **Public API breakage** — a removed or renamed prop, CSS class, or token, without the PR title carrying a `!`.
3. **Convention violations** — the "never do" rules in the `AGENTS.md` files, the file location and naming tables, token usage.
4. **Missing follow-through** — tests, stories, docs, or `index.*` exports that a behaviour or API change should have brought with it.
5. **Everything else** — readability, naming, simplification.

Stop at the level where you have something real to say.
A review of five genuine accessibility findings is worth more than twenty findings padded with preferences.

## What to look for

These are the mistakes that actually recur here, per layer.

**Any file**

- A new source file without its license header: `@license EUPL-1.2+` for `.ts`, `.tsx`, `.scss` and `.js`, `@license CC0-1.0` for `.md` and `.mdx`.
  Token `.tokens.json` files carry none.
- Markdown or MDX prose that is not one sentence per line.
- Changes to generated output under any `dist/`, or to generated assets under `packages-proprietary/assets/logo/` and `.../icons/`.
- Scope creep: refactors, abstractions, or renames the task did not ask for.
  Flag these even when the code is good.

**Tokens and CSS**

- A hardcoded design value — a raw `px`, `rem`, `em`, or hex colour for spacing, typography, radii, shadows, or colour — where a `var(--ams-…)` custom property belongs.
  This also applies to inline `style` props in stories.
- CSS changed where a missing token was the real cause: the token comes first, then the SCSS.
- A pseudo-class block that repeats properties the base class already sets.
- Input state precedence broken.
  It runs Disabled → Hover → Invalid → Default.
- A removed or weakened focus indicator.
- A new component not registered in `packages/css/src/components/index.scss`.

**React**

- `import React from 'react'`, a default export, or `React.FC`.
- A barrel import (`from '../index'`) inside the package — it creates cyclic dependencies.
  Import from the source file.
- A component that is not wrapped in `forwardRef`, or that has no `displayName`.
- `...restProps` not spread onto the root element, or class names merged with a template literal instead of `clsx('ams-<component>', className)`.
- `aria-label` used to supply screen reader-only text.
  `ams-visually-hidden` is the rule; other ARIA attributes are fine.
- A CSS or SCSS import inside a component.
- `any`, a loosened `tsconfig`, or a type-only import that is missing `import type`.
- A prop without a JSDoc description, or prop types declared with `interface` rather than `type`.
- A new runtime dependency, or a change to ESLint, TypeScript, Vitest, or Storybook config that the task did not call for.
- Unit tests missing the baseline four (renders, BEM class name, extra class name, ForwardRef), or querying with `getByTestId` instead of a semantic query.
- A new component not exported from `packages/react/src/index.ts`.

**Storybook**

- A meta title that does not read `Components/<Category>/<Component Name>`, or a category invented outside the documented list.
- Test stories missing the `['!dev', '!autodocs', '!manifest']` tags, or a subcomponent's stories missing `['!manifest']`.
- A raw `<div>` with inline styles where Grid, Column, or Row would do.
- The primary component imported from the package barrel instead of `@amsterdam/design-system-react/src`.
- An ad-hoc debug or sandbox story.
- A test story added under `src/pages/` — page templates deliberately have none.

## Leave these alone

Tooling already owns them, and repeating tooling in prose only buries your real findings:

- Formatting, quote style, line width, and import order — Prettier and ESLint decide these.
  One sentence per line is the exception: no tool enforces it, so it stays reportable.
- Anything Stylelint or ESLint would fail the build on.
  Say "the linter will catch this" at most once, if at all.
- The pull request title format — the "Check PR title" workflow validates it.
- Test and build failures that CI already reports.
- Praise-only comments and summaries that restate the diff.

## How to write the comment

Our review culture is set out in [documentation/code-reviews.md](../../../documentation/code-reviews.md); it applies to agents too.

- One comment per issue, anchored to the line it concerns.
- Ask rather than instruct: "Would it be okay to…?", "Have you taken into account that…?"
  Written feedback reads more sharply than intended.
- Give a concrete fix as a GitHub suggestion block whenever the change is a line or two.
- Say why it matters — which rule, which WCAG criterion, which convention — and link to the file that states it.
- Mark your own confidence when you are unsure.
  "I could not verify this against the docs" is a useful sentence.

## Never

- **Never approve Chromatic visual changes.**
  Visual approval is a human responsibility.
- **Never approve a pull request** on a maintainer's behalf.
- **Never resolve a review thread.**
  In this repository the pull request author checks and resolves AI-generated comments.
- **Never open a new pull request or push a fix** as part of a review unless you were asked to.

Before calling a review complete, cross-check the change against [documentation/definition-of-done.md](../../../documentation/definition-of-done.md).
