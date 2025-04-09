<!-- @license CC0-1.0 -->

# Grid

Divides the screen into columns to align the elements of a page.

## Guidelines

- Every page uses the Grid component as the foundation for its layout.
  It is a direct child of [Screen](/docs/components-layout-screen--docs).
- The Grid provides 4, 8, or 12 columns, depending on the width of the window.
  Its children are `Grid.Cell` components that define how many columns of the Grid they span, and optionally at which grid line they start.
- The Cell component accepts values for the narrow, medium and wide variations of the Grid: 4, 8 and 12 columns.
  Configure these three values for every Cell.
- Multiple instances of a Grid are possible on a page.
  This allows interjecting e.g. a [Spotlight](/docs/components-containers-spotlight--docs), [Breakout](/docs/components-layout-breakout--docs) or full width [Image](/docs/components-media-image--docs) which ‘bleed out’ of the Grid.
- Grids must not be nested.
  The component is currently intended for the full width of the page only.
- The Gap utility classes must not be used on the Grid component.

## Design

The [design choices](/docs/brand-design-tokens-grid--docs) are described in the general documentation.
