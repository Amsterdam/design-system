<!-- @license CC0-1.0 -->

# Spotlight

Emphasizes a section on a page through a distinctive background colour.

## Guidelines

- Use the entire width of the [Page](/docs/components-containers-page--docs) container.
  Do not position it on the [Grid](/docs/components-layout-grid--docs).
  Wrap the content in a Grid with extra large vertical padding.
- Use any of the [highlight colours](/docs/brand-design-tokens-colour--docs) for the background.
  The design system does not prescribe a meaning to any of these colours.
  The default is purple.
  Select [the correct colour](?path=/docs/brand-design-tokens-colour--docs#pairing-foreground-with-background-colours) for text and links against the background you choose.
- Find a fitting setup for the [amount and width of columns](/docs/pages-public-introduction--docs#how-to-size-the-grid-cells).
- By default, a Spotlight renders a `<div>` element in HTML.
  Use the `as` prop to make your markup more semantic.

## Relevant WCAG requirements

- [WCAG 1.4.3](https://www.w3.org/TR/WCAG21/#contrast-minimum): Large-scale text and images of large-scale text have a contrast ratio of at least 3:1;

## References

- [Color and contrast accessibility](https://web.dev/articles/color-and-contrast-accessibility)
