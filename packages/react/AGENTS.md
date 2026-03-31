<!-- @license CC0-1.0 -->

# React Package — Agent Instructions

These instructions are additive to the root [AGENTS.md](../../AGENTS.md). Read that first.

Full conventions: [documentation/coding-conventions.md](documentation/coding-conventions.md)

## Barrel import rule

Barrel files (`index.ts`) exist for **external consumers only**. Never use them for imports within the same package — this causes cyclic dependencies.

<!-- prettier-ignore -->
```tsx
/* eslint-disable perfectionist/sort-imports, no-redeclare */
// ✅ Import sibling components directly
import type { HeadingProps } from '../Heading/Heading'

// ❌ Never import via barrel within the package
import type { HeadingProps } from '../Heading'
import type { HeadingProps } from '../'
```

## Component structure

- Wrap every component with `React.forwardRef<Ref, Props>`.
- Keep subcomponents in separate files (`GridCell.tsx` alongside `Grid.tsx`), each with their own test file. Import them in the main component file. Do not export them from the package barrel.
- Only use polymorphism for HTML tags that support global attributes (`div`, `section`, `footer`, etc.); type `ref` as `any`. See `Spotlight` and `GridCell` as examples.

## Screen reader text

Use `ams-visually-hidden` — not `aria-label`. `aria-label` is not reliably translated automatically.

```tsx
<span className="ams-visually-hidden">Sluit menu</span>
```

Other ARIA attributes (`aria-describedby`, `aria-expanded`, `role`) are fine and should be used where appropriate.

## CSS class names

- Base: `ams-<component-name>`
- Modifier: `ams-<component-name>--<variant>`
- Always accept a `className` prop for consumer customisation.

## Props

All props must have JSDoc descriptions. Use `type` (not `interface`) for prop type definitions.

## README

- Location: `src/<Name>/README.md`
- Link to the CSS README for shared context; add React-specific usage notes only.

## File locations

| File           | Location                     |
| -------------- | ---------------------------- |
| Component      | `src/<Name>/<Name>.tsx`      |
| Tests          | `src/<Name>/<Name>.test.tsx` |
| Barrel         | `src/<Name>/index.ts`        |
| Package export | `src/index.ts`               |

## Unit tests

Config: `vitest.config.ts` (jsdom, excludes `**/dist/**`). Every component must cover at minimum:

<!-- prettier-ignore -->
```tsx
/* eslint-disable vitest/expect-expect */
describe('ComponentName', () => {
  it('renders', () => {
    /* ... */
  })
  it('renders a design system BEM class name', () => {
    /* ... */
  })
  it('renders an extra class name', () => {
    /* ... */
  })
  it('supports ForwardRef in React', () => {
    /* ... */
  })
  // Additional prop and edge-case tests
})
```

Use semantic queries only: `getByRole`, `getByLabelText`, `getByText`. Never `getByTestId`.

Run: `pnpm --filter @amsterdam/design-system-react test` or `watch:test` for watch mode.
