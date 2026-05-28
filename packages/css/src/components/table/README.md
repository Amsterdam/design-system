<!-- @license CC0-1.0 -->

# Table

Presents related values in rows and columns, from a compact reference table to a large data set users need to scan, sort, or filter.

## Guidelines

- Add a caption so users can find and understand the table without reading its data.
- Don’t replace the caption by naming the table another way.
  The caption gives the table both its accessible name and its data-table semantics.
  Naming a table through `aria-labelledby` or `aria-label` instead [makes some browsers expose it as a layout table](https://www.scottohara.me/blog/2019/04/19/tabled-tables.html), stripping the row and column semantics screen readers rely on.
- Use a [Heading](https://designsystem.amsterdam/?path=/docs/components-text-heading--docs) in the caption, at the level that fits the document outline.
  It becomes the table’s accessible name, announced by screen readers on every encounter.
- Use [Margin](/docs/utilities-css-margin--docs) or [Prose](/docs/utilities-css-prose--docs) to add vertical whitespace.
