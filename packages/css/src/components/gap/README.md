<!-- @license CC0-1.0 -->

# Gap

Adds white space between a set of elements.

## Class names

The five sizes of [Component Space](/docs/foundation-design-tokens-space--docs) are available for the length of the margin.

| Class name     | Preview                                                                                   |
| -------------- | ----------------------------------------------------------------------------------------- |
| `.ams-gap--xs` | <div className="ams-docs-token-preview--space" style="inline-size: var(--ams-gap-xs);" /> |
| `.ams-gap--sm` | <div className="ams-docs-token-preview--space" style="inline-size: var(--ams-gap-sm);" /> |
| `.ams-gap--md` | <div className="ams-docs-token-preview--space" style="inline-size: var(--ams-gap-md);" /> |
| `.ams-gap--lg` | <div className="ams-docs-token-preview--space" style="inline-size: var(--ams-gap-lg);" /> |
| `.ams-gap--xl` | <div className="ams-docs-token-preview--space" style="inline-size: var(--ams-gap-xl);" /> |

## Guidelines

- Use this utility class to vertically separate the children of a parent element from each other.
- It can be used on any element and sets the `gap` CSS property.
  It also makes the element a grid container; the gap would be ignored otherwise.
  These declarations are marked with the `!important` flag to ensure they override any other gaps and display modes.
- To add a gap between 2 siblings, the first one can be given a [Margin Bottom](/docs/utilities-css-margin--docs) instead.
  This may be preferable because it doesn’t change the parent’s display mode.
