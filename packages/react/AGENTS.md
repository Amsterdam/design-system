<!-- @license CC0-1.0 -->

# React Package — Agent Instructions

These instructions are additive to the root [AGENTS.md](../../AGENTS.md). Read that first.

Full conventions: [documentation/coding-conventions.md](documentation/coding-conventions.md)

## Key conventions

Agent-critical points:

- **Barrel imports**: barrel files (`index.ts`) exist for external consumers only. Never use them for imports within the same package — this causes cyclic dependencies. Import directly from the source file (e.g. `import type { HeadingProps } from '../Heading/Heading'`).
- **Never use default exports** — use named exports only.
- **ForwardRef**: wrap every component with `forwardRef` (imported directly from `'react'`, not via `React.forwardRef`). Set `displayName` on the result.
- **restProps and clsx**: always destructure known props and spread `...restProps` onto the root element. Merge class names with `clsx('ams-<component-name>', className)` — never use template literals or string concatenation.
- **Subcomponents**: keep in separate files (`GridCell.tsx` alongside `Grid.tsx`), each with their own test file. Do not export subcomponent values from the package barrel — only export their prop types.
- **Screen reader text**: use `ams-visually-hidden` — not `aria-label` (not reliably auto-translated). Other ARIA attributes (`aria-describedby`, `aria-expanded`, `role`) are fine.
- **Styling imports**: never import CSS or SCSS files inside a React component. Components should emit class names only; styling comes from the design system CSS package and consumer/app-level styles (including Storybook globals).
- **Dependencies and config**: do not introduce new runtime dependencies (UI libraries, state managers, date libraries, etc.) or change ESLint, TypeScript, Vitest, or Storybook configuration unless explicitly requested for the task.
- **Component typing style**: do not use `React.FC` or `React.VFC`; prefer plain function components wrapped in `forwardRef` with explicit props types.

## CSS class names

- Base: `ams-<component-name>`
- Modifier: `ams-<component-name>--<variant>`
- Always accept a `className` prop for consumer customisation.

## Props

All props must have JSDoc descriptions. Use `type` (not `interface`) for prop type definitions.
Reuse existing shared types where they already exist; do not introduce new "common" prop types or helpers unless there is a clear, documented need.

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

```tsx
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

Run from the repository root:

- `pnpm --filter @amsterdam/design-system-react test`
- `pnpm --filter @amsterdam/design-system-react watch:test` (watch mode)
