<!-- @license CC0-1.0 -->

# Storybook — Agent Instructions

These instructions are additive to the root [AGENTS.md](../AGENTS.md). Read that first.

## Story files

Most components have three story files in `src/components/<Name>/` (some may also have subcomponent story files):

| File                      | Purpose                                      |
| ------------------------- | -------------------------------------------- |
| `<Name>.docs.mdx`         | Documentation page; imports the CSS README   |
| `<Name>.stories.tsx`      | Usage examples for all relevant variants     |
| `<Name>.test.stories.tsx` | Visual, interaction, and accessibility tests |

Meta title format: `Components/<Category>/<Component Name>`

Valid categories (use exactly these):

- `Buttons` — Button, Icon Button
- `Containers` — Accordion, Dialog, Page, Page Footer, Page Header, Progress List, Spotlight, Table, Tabs
- `Feedback` — Alert, Avatar, Badge
- `Forms` — all form-related components (Checkbox, Field, Label, Select, Text Input, etc.)
- `Layout` — Action Group, Breakout, Column, Grid, Overlap, Row
- `Media` — Figure, Icon, Image, Image Slider, Logo
- `Navigation` — Breadcrumb, Card, Link, Link List, Menu, Pagination, Skip Link, Standalone Link, Table of Contents, Call to Action Link
- `Text` — Blockquote, Description List, Heading, Mark, Ordered List, Page Heading, Paragraph, Unordered List

When adding a new component, choose the most fitting existing category. Agents must not introduce new categories; creation of new categories requires explicit human approval.

## Imports

- Import the primary component of a story from `@amsterdam/design-system-react/src` (source, not dist). Helper components used for composition (e.g. Grid, Paragraph) may be imported from `@amsterdam/design-system-react` (the package barrel).
- CSS is loaded globally via `config/preview.tsx` — do not import CSS or SCSS in individual story files.
- Import Storybook types from `@storybook/react-vite`.
- Test stories typically spread the main story's meta: `const meta = { ...accordionMeta, title: '...' } satisfies Meta<typeof Component>`.

## Docs

Import the CSS README as the primary content source. Add React-specific notes where needed.

## Visual tests (Chromatic)

- One story per visual variant / state in `<Name>.test.stories.tsx`.
- Tag test stories with `['!dev', '!autodocs']` to exclude them from docs and development views.
- The CSS pseudo-state simulation addon (`:hover`, `:focus`, etc.) loads in Chromatic CI (via `IS_CHROMATIC`) and in local development (`NODE_ENV === 'development'`). See `config/main.ts`. Do not set `IS_CHROMATIC` manually.
- Visual changes must be reviewed and approved in the Chromatic dashboard before merging.
- **Never approve Chromatic changes as an agent** — visual approval is a human responsibility.

## Interaction tests

- Use the Storybook `play` function in `<Name>.test.stories.tsx`.
- Required for components with custom interactive behaviour.
- Wrap all tests in a `describe` block named after the component.
- One behaviour per test, isolated and descriptive.

Do not add ad-hoc debug or sandbox stories; every story should represent a realistic, documented variant or behaviour of the component.

## Accessibility tests

Enforced globally via Storybook defaults — no per-component setup needed. Do not regress contrast, roles, or reading order.

## CI

Full reference: [`../documentation/tests.md`](../documentation/tests.md). Interaction, visual, and accessibility tests run via Chromatic. All must pass and visual changes must be approved before merging.

Chromatic runs automatically when a draft PR is marked as ready for review. To trigger it manually, comment `/chromatic test` on the pull request.

## Unit tests

Utility functions in `src/_common/` have unit tests (`*.test.ts`) run by Vitest (config: `vitest.config.ts`). When adding or modifying utilities, ensure tests are added or updated.

## Configuration

- Global styles and package imports: `config/preview.tsx`
- Static assets (`packages-proprietary/assets`) and Chromatic pseudo-state setup: `config/main.ts`
