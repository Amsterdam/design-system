<!-- @license CC0-1.0 -->

# Content Header

## Anatomy

The header of a content page consists of the following elements:

1. [Breadcrumb](/docs/components-navigation-breadcrumb--docs)
2. [Heading](https://designsystem.amsterdam/?path=/docs/components-text-heading--docs) with `level={1}`
3. [Paragraph](/docs/components-text-paragraph--docs) – for metadata
4. [Paragraph](/docs/components-text-paragraph--docs) with `size="large"` – for the lead or introduction

## Layout

- The breadcrumb has its own [Grid](/docs/components-layout-grid--docs), because it renders a `nav` element that must be a top-level landmark (TODO check).
- The Grid for the Content Header and Body renders a `main` element.
- Both Grids follow the [sizing guidelines for Cells](/docs/pages-public-introduction--docs#how-to-size-the-grid-cells).

## Spacing

- The Grid for the Breadcrumb has `paddingTop="x-large"` and no white space at the bottom.
- The Heading has a bottom margin of x-small towards the metadata Paragraph – `className="ams-mb-xs"`.
- Between that and the Lead Paragraph: x-large – `className="ams-mb-xl"`
- The Grid for the Content Header and Body has `paddingBottom="x-large"` and no white space at the top.
