<!-- @license CC0-1.0 -->

# Grid

Divides the screen into columns to align the elements of a page.

## Guidelines

- Every page uses the Grid component as the foundation for its layout.
  It is a direct child of the [Page](/docs/components-containers-page--docs) container.
- The Grid provides 4, 8, or 12 columns, depending on the width of the window.
- Its children are `Grid.Cell` components that define how many columns they span, and optionally where they start.
  Both its `span` and `start` properties accept a single value, or separate values for the narrow, medium and wide variations of the Grid.
  Follow these [optimal sizes of Grid Cells](/docs/pages-public-introduction--docs#how-to-size-the-grid-cells) for various typical page sections.
- Grid Cells align to the top of their row.
  This makes them as tall as their content.
  This is especially useful for [Compact Mode](https://designsystem.amsterdam/docs/docs-developer-guide-modes--docs), where their background colour is different than that of the Page.
  The [internal Home Page](/story/pages-internal-home-page--default) example shows this behaviour.
- A single page can have several Grids.
  This allows mixing a Grid with a [Spotlight](/docs/components-containers-spotlight--docs), [Breakout](/docs/components-layout-breakout--docs) or full width [Image](/docs/components-media-image--docs) which ‘bleed out’ of the main layout.
- Grids must not be nested.
  The component is currently intended for the full width of the page only.
- The Gap utility classes must not be used on the Grid component.
- Each Grid Cell provides a [CSS container query](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Containment/Container_queries) context, so components inside it can adapt their appearance to the cell's inline size.
  For most components, the Grid Cell is the nearest context and the one their queries will match.

## Design

The [design choices](/docs/docs-developer-guide-grid--docs) are described in the Developer Guide.
