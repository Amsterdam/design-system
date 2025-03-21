<!-- @license CC0-1.0 -->

# Gap

Adds white space between a set of elements.

## Class names

All six sizes of [Space](/docs/brand-design-tokens-space--docs) are available for the width or height of the gap.

| Class name    | Example                                                                                    |
| :------------ | :----------------------------------------------------------------------------------------- |
| `ams-gap-xs`  | <div className="ams-docs-token-example--space" style="inline-size: var(--ams-gap-xs);" />  |
| `ams-gap-sm`  | <div className="ams-docs-token-example--space" style="inline-size: var(--ams-gap-sm);" />  |
| `ams-gap-md`  | <div className="ams-docs-token-example--space" style="inline-size: var(--ams-gap-md);" />  |
| `ams-gap-lg`  | <div className="ams-docs-token-example--space" style="inline-size: var(--ams-gap-lg);" />  |
| `ams-gap-xl`  | <div className="ams-docs-token-example--space" style="inline-size: var(--ams-gap-xl);" />  |
| `ams-gap-2xl` | <div className="ams-docs-token-example--space" style="inline-size: var(--ams-gap-2xl);" /> |

## Guidelines

- Use this utility class to vertically separate the children of a parent element from each other.
- Do not use it on the Grid component.
  Grid is responsible for its own gaps.
- It can be used on any other element and sets the `gap` CSS property.
  It also makes the element a grid container; the gap would be ignored otherwise.
  These declarations are marked with the `!important` flag to ensure they override any other gaps and display modes.
- To add a gap between 2 siblings, the first one can be given a [Margin Bottom](/docs/utilities-css-margin--docs) instead.
  This may be preferable because it doesn’t change the parent’s display mode.
