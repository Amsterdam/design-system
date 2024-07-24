<!-- @license CC0-1.0 -->

# Grid

Divides the screen into columns to align the elements of a page.

## Usage

Every page should use the grid as the foundation for its layout.
It is placed directly within the [Screen](/docs/components-layout-screen--docs).

A [Footer](/docs/components-containers-footer--docs) and a [Spotlight](/docs/components-containers-spotlight--docs) are slightly wider than the grid.
You close one instance of the grid before these components.
Inside and optionally after them, you start a new one.
Multiple instances of the grid component are possible on a page, but the columns of all grids must align precisely.

Within the grid, you create cells containing the desired content.
A cell often spans multiple columns of the grid.

## Design

The [design choices](/docs/foundation-design-tokens-grid--docs) are described in the general documentation.
