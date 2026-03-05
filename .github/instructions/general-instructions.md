# General Copilot Instructions

## Purpose

Guidance for Copilot agents to generate, update, and review code and documentation in the Amsterdam Design System monorepo, ensuring consistency, accessibility, and compliance with workspace standards.

## Principles

- **Monorepo:** Multiple packages (CSS, React, proprietary assets/tokens/icons), Storybook, and documentation.
- **Component-first:** All UI is built from reusable, accessible components. Document in both CSS and React folders.
- **Accessibility:** Strict WCAG compliance. See `documentation/definition-of-done.md` for required checks.
- **Contribution:** Use GitFlow (feature branches on `develop`, release via `main`). Small, isolated branches and PRs. Conventional commits. Follow NL Design System and workspace coding conventions.
- **Continuous integration:** All PRs run lint, test, Chromatic; use commit hashes for GitHub Actions.

## Coding Conventions

- **CSS:** Use mixins, follow input state precedence, style both native and manual validation. Styles in `packages/css/src/components/[component]/[component].scss`. Do not import CSS in React components.
- **React:** Barrel files for exports, avoid cyclic imports, subcomponents in separate files, use `ams-visually-hidden` for screen reader text. Exports in `packages/react/src/index.ts`.
- **Storybook:** Component files in `storybook/src/components/{{PascalCase name}}/`. Meta title must follow `Components/<Category>/<Component>`.
- **Tokens:** Use design tokens for font, spacing, color, border radius, etc.
- **Documentation:** CSS README files focus on guidelines, usage, and design intent—not on listing tokens or technical variants. Link to CSS docs from React README.

## Component Generation Workflow

Follow Plop configuration and templates. For each new component:

1. **Tokens:** Create in `packages-proprietary/tokens/src/components/ams/{{kebabCase name}}.tokens.json`.
2. **CSS:** Create SCSS and README in `packages/css/src/components/{{kebabCase name}}/`. Register in `index.scss`.
3. **React:** Create component, test, README, barrel, and register in `index.ts`.
4. **Storybook:** Create stories, docs, and test stories in `storybook/src/components/{{PascalCase name}}/`. Meta title: `Components/<Category>/<Component>`.
5. **Testing:** Unit (Jest + RTL), interaction/visual (Storybook + Chromatic), accessibility (Storybook rules).
6. **Documentation:** CSS README: guidelines and usage. React README: link to CSS docs. Storybook docs: import CSS README.

## Testing Standards

- **Unit Tests:**
  - Use Jest and React Testing Library.
  - Place tests in `{{PascalCase name}}.test.tsx`.
  - Cover all props, HTML output, class names, and ForwardRef usage.
  - Use semantic queries for accessibility (e.g., `getByRole`, `getByLabelText`).
  - Ensure coverage for edge cases and accessibility features.
  - Example structure:

    ```js
    describe("ComponentName", () => {
      it("renders", () => {
        /* ... */
      });
      it("renders a design system BEM class name", () => {
        /* ... */
      });
      it("renders an extra class name", () => {
        /* ... */
      });
      it("supports ForwardRef in React", () => {
        /* ... */
      });
      // Additional prop and edge case tests
    });
    ```

- **Interaction Tests:**
  - Required for components with custom interactive functionality.
  - Located in `{{PascalCase name}}.test.stories.tsx` using Storybook's play function.
  - Should test user interactions and functional behavior (e.g., opening an accordion section).
  - Use semantic queries (`getByRole`, `getByText`) to ensure accessibility compliance in interaction scenarios.
  - Keep each test isolated, descriptive, and focused on a single aspect of the component's behavior.
  - Wrap all interaction tests in a `describe` block named after the component.

- **Visual Tests:**
  - Each component must have visual tests covering all variants.
  - Visual tests are placed in `{{PascalCase name}}.test.stories.tsx`.
  - Should detect unintended changes to visual appearance (e.g., borders, colors).
  - Cover all prop variations and edge cases visually.
  - Keep each test isolated, descriptive, and focused on a single aspect of the component's appearance.

- **Accessibility Tests:**
  - Accessibility rules are enforced via Storybook defaults, not per component.
  - Use semantic queries (`getByRole`, `getByText`) to ensure accessibility compliance.
  - Ensure components do not worsen accessibility (e.g., contrast, roles).

- **Workflow:**
  - On every pull request, unit tests run via CI.
  - Interaction, visual, and accessibility tests run via Chromatic on stories labeled 'Test'.
  - All test types must pass before merging.
  - Chromatic integration is required for non-unit tests, and changes must be approved in the Chromatic dashboard before merging.

## Documentation Standards

- **CSS README:** Guidelines, usage, design intent. No token/variant lists. See other CSS README files for style.
- **React README:** Link to CSS docs. Brief usage notes.
- **Storybook Docs:** Import CSS README. Use consistent formatting.

## Accessibility Requirements

- Strict WCAG compliance for all components.
- Use semantic roles and screen reader text as needed.

## Common Pitfalls & Best Practices

- Accessibility failures (see Definition of Done).
- Incorrect import paths (barrel file rules).
- Large PRs or branches (split work, keep changes isolated).
- Missing documentation or tests.
- Always use design tokens for font, spacing, color, border radius, etc.
- For loading indicators, expose props for shape, animation, width, height, count, and layout flexibility.

## References

- [CONTRIBUTING.md](../CONTRIBUTING.md)
- [Definition of Done](../documentation/definition-of-done.md)
- [Publishing](../documentation/publishing.md)
- [Storybook](../storybook/)
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
