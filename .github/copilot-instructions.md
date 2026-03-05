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

---

For advanced agent customization, consider creating `/create-instruction`, `/create-skill`, or `/create-prompt` files for specific workflows (e.g., accessibility checks, publishing, code review automation). See workspace documentation for details.
