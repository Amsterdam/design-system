<!-- @license CC0-1.0 -->

# Gap

Adds white space between a set of elements.

## Class names

All six sizes of [Space](/docs/brand-design-tokens-space--docs) are available for the width or height of the gap.

| Class name   | Example                                                                                     |
| :----------- | :------------------------------------------------------------------------------------------ |
| `ams-gap-xs` | <div className="ams-docs-token-example--space" style="inline-size: var(--ams-space-xs);" /> |
| `ams-gap-s`  | <div className="ams-docs-token-example--space" style="inline-size: var(--ams-space-s);" />  |
| `ams-gap-m`  | <div className="ams-docs-token-example--space" style="inline-size: var(--ams-space-m);" />  |
| `ams-gap-l`  | <div className="ams-docs-token-example--space" style="inline-size: var(--ams-space-l);" />  |
| `ams-gap-xl` | <div className="ams-docs-token-example--space" style="inline-size: var(--ams-space-xl);" /> |

## Guidelines

- Use this utility class to vertically separate the children of a parent element from each other.
- Do not use it on the Grid component.
  Grid is responsible for its own gaps.
- It can be used on any other element and sets the `gap` CSS property.
  It also makes the element a grid container; the gap would be ignored otherwise.
  These declarations are marked with the `!important` flag to ensure they override any other gaps and display modes.
- To add a gap between 2 siblings, the first one can be given a [Margin Bottom](/docs/utilities-css-margin--docs) instead.
  This may be preferable because it doesn’t change the parent’s display mode.
