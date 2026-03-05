# Custom instructions for GitHub Copilot

## Unit Test Generation for React Components

When generating unit tests for components in `packages/react/src`, follow these guidelines:

- Use `@testing-library/react` for rendering and querying components.
- Always test basic rendering and visibility of the component.
- Assert the presence of the design system BEM class name (e.g., `ams-*`).
- Test that extra class names provided via props are merged correctly.
- Validate ForwardRef support using `createRef` and ensure the ref points to the correct DOM node.
- Cover all prop variations, including edge cases (e.g., different label types, custom prefixes, gap/padding sizes).
- Use semantic queries (`getByRole`, `getByText`) to ensure accessibility compliance.
- Wrap all tests in a `describe` block named after the component.
- Keep each test isolated, descriptive, and focused on a single aspect of the component's behavior.
- Include license and copyright headers as in existing tests.

Example structure:

```
describe('ComponentName', () => {
  it('renders', () => { /* ... */ })
  it('renders a design system BEM class name', () => { /* ... */ })
  it('renders an extra class name', () => { /* ... */ })
  it('supports ForwardRef in React', () => { /* ... */ })
  // Additional prop and edge case tests
})
```
