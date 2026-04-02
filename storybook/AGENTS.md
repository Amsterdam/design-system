<!-- @license CC0-1.0 -->

# Storybook — Agent Instructions

These instructions are additive to the root [AGENTS.md](../AGENTS.md). Read that first.

## Story files

Every component has three story files in `src/components/<Name>/`:

| File                      | Purpose                                      |
| ------------------------- | -------------------------------------------- |
| `<Name>.docs.mdx`         | Documentation page; imports the CSS README   |
| `<Name>.stories.tsx`      | Usage examples for all relevant variants     |
| `<Name>.test.stories.tsx` | Visual, interaction, and accessibility tests |

Meta title format: `Components/<Category>/<ComponentName>`

## Docs

Import the CSS README as the primary content source. Add React-specific notes where needed.

## Visual tests (Chromatic)

- One story per visual variant / state in `<Name>.test.stories.tsx`.
- Tag stories with `'test'` so Chromatic picks them up.
- Chromatic enables pseudo-states via the `IS_CHROMATIC` environment variable (`config/main.ts`).
- Visual changes must be reviewed and approved in the Chromatic dashboard before merging.

## Interaction tests

- Use the Storybook `play` function in `<Name>.test.stories.tsx`.
- Required for components with custom interactive behaviour.
- Wrap all tests in a `describe` block named after the component.
- One behaviour per test, isolated and descriptive.

## Accessibility tests

Enforced globally via Storybook defaults — no per-component setup needed. Do not regress contrast, roles, or reading order.

## CI

Interaction, visual, and accessibility tests run via Chromatic on stories tagged `'test'`. All must pass and visual changes must be approved before merging.

## Configuration

- Global styles and package imports: `config/preview.tsx`
- Static assets (`packages-proprietary/assets`) and Chromatic pseudo-state setup: `config/main.ts`
