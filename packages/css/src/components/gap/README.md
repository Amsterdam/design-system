<!-- @license CC0-1.0 -->

# Gap

Adds white space between a set of elements.

The five sizes of [Component Space](/docs/foundation-design-tokens-space--docs) are available for the length of the gap.

## Guidelines

- Use this utility class to vertically separate the children of a parent element from each other.
- It can be used on any element and sets the `gap` CSS property.
  It also makes the element a grid container; the gap would be ignored otherwise.
  These declarations are marked with the `!important` flag to ensure they override any other gaps and display modes.
- To add a gap between 2 siblings, the first one can be given a [Margin Bottom](/docs/utilities-css-margin--docs) instead.
  This may be preferable because it doesn’t change the parent’s display mode.
