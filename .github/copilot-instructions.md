# Amsterdam Design System — Copilot Instructions

## Principles

- **Monorepo:** Multiple packages (CSS, React, proprietary assets/tokens/icons), Storybook, and documentation.
- **Component-first:** All UI is built from reusable, accessible components. Document in both CSS and React folders.
- **Accessibility:** Strict WCAG compliance. See `documentation/definition-of-done.md` for required checks.
- **Testing:**
  - Unit: Jest + React Testing Library
  - Interaction: Storybook play function
  - Visual: Chromatic
  - Accessibility: Storybook rules
- **Contribution:**
  - Use GitFlow (feature branches on `develop`, release via `main`)
  - Small, isolated branches and PRs
  - Conventional commits (see `documentation/publishing.md`)
  - Follow NL Design System and workspace coding conventions
- **Code reviews:**
  - Use PR templates, clear titles/descriptions
  - Maintainers must approve
  - Resolve all comments
  - Visual regression via Chromatic
- **Coding conventions:**
  - CSS: Use mixins, follow input state precedence, style both native and manual validation
  - React: Barrel files for exports, avoid cyclic imports, subcomponents in separate files, use `ams-visually-hidden` for screen reader text
- **Continuous integration:** All PRs run lint, test, Chromatic; use commit hashes for GitHub Actions
- **Publishing:** Release Please automates changelogs/releases, maintainers control npm/GitHub/Storybook deploys

## Agent Guidance

- **Build/test commands:** Use `npm run lint`, `npm run test`, and Chromatic for visual tests
- **Component boundaries:** Respect CSS/React separation, document in correct folders, follow coding conventions
- **Common pitfalls:**
  - Accessibility failures (see Definition of Done)
  - Incorrect import paths (barrel file rules)
  - Large PRs or branches (split work, keep changes isolated)
  - Missing documentation or tests
- **ApplyTo patterns:** Use for instructions specific to CSS, React, Storybook, or proprietary packages

## Example Prompts

- "Create a new accessible React component using workspace conventions."
- "Add Storybook stories and documentation for a CSS component."
- "Run all tests and report failures."
- "Prepare a release using Release Please."

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
