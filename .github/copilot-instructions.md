# Custom instructions for GitHub Copilot

## Test Generation and Documentation Standards for React Components

### Unit Tests

- All components must have unit tests using Jest and React Testing Library.
- Unit tests are placed in a separate file named `component.test.tsx`.
- Tests should check specific properties, HTML output, and expected class names.

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

### Interaction Tests

- Required for components with custom interactive functionality.
- Located in `component.test.stories.tsx` using Storybook's play function.
- Should test user interactions and functional behavior (e.g., opening an accordion section).
- Use semantic queries (`getByRole`, `getByText`) to ensure accessibility compliance in interaction scenarios.
- Keep each test isolated, descriptive, and focused on a single aspect of the component's behavior.
- Wrap all interaction tests in a `describe` block named after the component.

### Visual Tests

- Each component must have visual tests covering all variants.
- Visual tests are placed in `component.test.stories.tsx`.
- Should detect unintended changes to visual appearance (e.g., borders, colors).
- Cover all prop variations and edge cases visually.
- Keep each test isolated, descriptive, and focused on a single aspect of the component's appearance.

### Accessibility Tests

- Accessibility rules are enforced via Storybook defaults, not per component.
- Use semantic queries (`getByRole`, `getByText`) to ensure accessibility compliance.
- Ensure components do not worsen accessibility (e.g., contrast, roles).

### Workflow

- On every pull request, unit tests run via CI.
- Interaction, visual, and accessibility tests run via Chromatic on stories labeled 'Test'.
- All test types must pass before merging.
- Chromatic integration is required for non-unit tests, and changes must be approved in the Chromatic dashboard before merging.
