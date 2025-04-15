<!-- @license CC0-1.0 -->

# Grid

Divides the screen into columns to align the elements of a page.

## Guidelines

- Every page uses the Grid component as the foundation for its layout.
  It is a direct child of the [Page](/docs/components-containers-page--docs) container.
- The Grid provides 4, 8, or 12 columns, depending on the width of the window.
- Its children are `Grid.Cell` components that define how many columns they span, and optionally where they start.
  Both its `span` and `start` properties accept a single value, or separate values for the narrow, medium and wide variations of the Grid.
- A single page can have several Grids.
  This allows mixing a Grid with a [Spotlight](/docs/components-containers-spotlight--docs), [Breakout](/docs/components-layout-breakout--docs) or full width [Image](/docs/components-media-image--docs) which ‘bleed out’ of the main layout.
- Grids must not be nested.
  The component is currently intended for the full width of the page only.
- The Gap utility classes must not be used on the Grid component.

## Design

The [design choices](/docs/brand-design-tokens-grid--docs) are described in the general documentation.
