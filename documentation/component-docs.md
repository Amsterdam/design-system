<!-- @license CC0-1.0 -->

# Documentation guidelines

Follow these guidelines for a consistent way of documenting components.

## Where to place the documentation files

Generic documentation of components should be placed in the CSS component folder, `/packages/css/src/{component-name}`.
The main file (`README.md`) contains all general information about this component.
Optionally, you could have CSS-specific documentation.
This should be named after the CSS component with a suffix `-css`, e.g. `heading-css.md`.

Every React component has to have a `README.md`.
Like the CSS-specific documentation, here we can write the React-specific documentation if needed.
If there is no React-specific documentation, this README.md should only contain a link to the generic documentation in `/packages/css/src/{component-name}/README.md`

## Documentation content and structure

### Generic documentation

The document consists of the following subjects and needs to be in English.

**{Component name}**
Introduction text of the component and a general description of the purpose of the component.

**Guidelines**
A list of guidelines and best practices the component needs to adhere to.

**Relevant WCAG requirements**
List of links to WCAG items plus a short description.

**References** (optional)
List of reference links.

### CSS / HTML documentation

A description of the HTML elements you should use and the relevant ARIA props for this component.

### React documentation

A description of the React component behaviour (optionally) and a link to the generic documentation in the corresponding CSS component folder.
