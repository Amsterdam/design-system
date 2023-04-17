# Documentation guidelines

Some guidelines to follow to have a consistent way of documenting components.

## Where to place the documentation files

Generic documentation of components should be placed in the CSS component folder, `/packages/css/src/{component-name}`. The main file (`README.md`) contains all the generic information about this component.
Optionally you could have CSS specific documentation. This should be named after the CSS component with a suffix `-css`, e.g. `heading-css.md`.

Every React component has to have a `README.md`. Like the CSS specific documenation, here we can write the React specific documentation if needed.

## Documentation content and structure

### Generic documentation

The document consist of the following subjects and need to be in Dutch. Below are the Dutch titles.

**[componentnaam]**
Introduction text of the component and a general description of the purpose of the component.

**Richtlijnen**
A list of guidelines and best practices the component needs to adhere to.

**Relevante WCAG eisen**
List of links to WCAG items plus a short description

**Referenties** (optional)
List of reference links.

### CSS / HTML documentation

A description of the HTML structure and aria props

### React documentation

A description of the React component behaviour (optionally) and a link to the generic documentation in the corresponding CSS component folder.
