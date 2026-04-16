<!-- @license CC0-1.0 -->

# Prose

Applies the recommended vertical spacing between the direct children of a container, so editorial content flows without hand-picked margins.

## Class name

`ams-prose`

## Guidelines

- Use this utility class on a container that wraps editorial content — an article, a rich-text block, or a section built from multiple components — so its children are spaced according to the [‘Space between’](/docs/docs-designer-guide-space-between--docs) recommendations.
- The rules cover Heading (levels 1 through 6), Paragraph (including the large variant), Blockquote, Image, Ordered List, Unordered List, Button, Call to Action Link, Standalone Link, Table, and Accordion.
  Other direct children pick up the default body-to-body spacing.
- It sets `margin-block-end` on each direct child based on what follows it, using the `:has()` selector.
  Browsers without `:has()` support fall back to a uniform spacing.
- Content inside an Accordion panel nested under `.ams-prose` is spaced the same way, so an accordion and its surroundings share one rhythm.
- To add a single ad-hoc gap between two elements, prefer the [Margin Bottom](/docs/utilities-css-margin--docs) utility class on the first one.
- To add even spacing between a set of siblings, prefer the [Gap](/docs/utilities-css-gap--docs) utility class on their parent.
