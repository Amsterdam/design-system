<!-- @license CC0-1.0 -->

# Table

Presents related values in rows and columns.
Suitable for both simple reference tables and to inspect large data sets.

## Guidelines

- Add a caption so users can find and understand the table without reading its data.
  Use a [Heading](https://designsystem.amsterdam/?path=/docs/components-text-heading--docs) in it, at the level that fits the document outline.
  This creates the accessible name for the table, which gets announced by screen readers on every encounter.
- To have content between the Heading and the Table, keep the Caption but hide it visually, then position heading and content above the table.
  Do not use ARIA relations; they hurt the Table’s semantics (see [this article](https://www.scottohara.me/blog/2019/04/19/tabled-tables.html)).
- Use [Margin](/docs/utilities-css-margin--docs) or [Prose](/docs/utilities-css-prose--docs) to add vertical whitespace.
