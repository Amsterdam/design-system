<!-- @license CC0-1.0 -->

# Page layout and spacing

Laying out a page template is a lookup rather than a judgement call.
The authority is [storybook/src/pages/public/Introduction.docs.mdx](../storybook/src/pages/public/Introduction.docs.mdx) for the grid, and [storybook/src/docs/designer-guide/vertical-space.docs.mdx](../storybook/src/docs/designer-guide/vertical-space.docs.mdx) for the space between components.
This is the working summary, plus the component facts that decide spacing and are written in neither.

## Grid Cell sizes per section role

| Role                                    | `span`                              | `start`                             |
| --------------------------------------- | ----------------------------------- | ----------------------------------- |
| Breadcrumb, and the content page header | `{ narrow: 4, medium: 7, wide: 9 }` | `{ narrow: 1, medium: 1, wide: 2 }` |
| Content page body                       | `{ narrow: 4, medium: 6, wide: 7 }` | `{ narrow: 1, medium: 2, wide: 3 }` |
| Side-by-side blocks                     | `{ narrow: 4, medium: 4, wide: 6 }` | none                                |
| Side-by-side, navigation style          | `{ narrow: 4, medium: 4, wide: 5 }` | odd cells only                      |
| Top tasks, four per row when wide       | `{ narrow: 4, medium: 4, wide: 3 }` | none                                |
| Preview cards                           | `4`                                 | none                                |

The header is deliberately wider than the body, and starts one column further left.
The body’s seven columns are a reading-measure decision, so a body that needs more width is a signal that the content is not body content.
A Table is the usual case, and it takes a wider cell of its own.

Two side-by-side cells reach one column further than the header above them: `start: 2` plus two spans of 5 ends at column 11, against the header’s 2 to 10.
That overhang is intentional.
Do not correct it.

Neither `span` nor `start` may exceed the columns available at that breakpoint, or the browser adds columns to fit and the layout breaks.
Narrow is 4 columns, medium 8, and wide 12.

`Grid.Cell` has a `rowSpan` property, but it caps at 4.
A taller sidebar needs an inline `style={{ gridRow: 'span N' }}`, where N equals the number of cells beside it.
A larger N works visually, but every phantom row adds a row gap below the last cell.

## Grid padding by structural position

Sections take vertical space from the Grid’s padding properties and nothing else.
No margin utilities for section spacing, and no `gapVertical` overrides.

| Position                          | Padding                                       |
| --------------------------------- | --------------------------------------------- |
| First Grid                        | `paddingTop="large"`, no bottom               |
| The Grid right after a Breadcrumb | no `paddingTop`                               |
| Every Grid in between             | `paddingVertical="x-large"`                   |
| Last Grid before the Page Footer  | `paddingBottom="2x-large"`                    |
| A page that is one single Grid    | `paddingTop="large" paddingBottom="2x-large"` |
| A last section that is not a Grid | the `ams-mb-2xl` utility instead              |

The Grid after a Breadcrumb drops its `paddingTop` so that the breadcrumb and the page title read as one block.
Only a Breadcrumb closes the gap below itself.
A back link or a search field in the first Grid does not, and those keep the regular `x-large` above the section that follows.

Two adjacent Grids add their touching paddings together.
Across a Spotlight that is intentional, because the coloured band separates them.
Between two plain Grids, leave the padding off one of the touching sides.
Worth knowing: before the Information Page, no two plain Grids sat directly adjacent anywhere in the public set, and every doubling was across a Spotlight or a full-bleed image.
So this rule gets little exercise and is easy to get wrong.

A page opening with an Overlap is the exception.
The Overlap sits flush against the Page Header, so the Grid after it is a regular in-between Grid with `paddingVertical="x-large"`.

## The row gap

`gapVertical` stays at its default of `x-large`.
Note what the property actually offers, because the vertical space guide will sometimes ask for a value it cannot express:

```ts
export const gridGaps = ["none", "large", "2x-large"] as const;
```

So the reachable row gaps are zero, `large`, the unset `x-large` default, and `2x-large`.
There is no `medium`.
When two things sit in separate Cells of one Grid and the guide asks for medium, the default `x-large` stands.
That is a constraint of the Grid rather than a mistake, and it is worth writing into the page’s own documentation so nobody reads it as one.

The corollary: putting two elements in separate Cells hands their spacing to the row gap.
If you need the spacing the guide specifies, they belong in one Cell with an `ams-mb-*` utility.

## Space between components

Inside a Cell, each element but the last sets its own bottom margin with an `ams-mb-*` utility.
Look every pair up rather than working from feel.

The fastest authority is the machine-readable table behind the Space Finder:

```sh
grep -n "'Heading 2|Paragraph'" storybook/src/_components/VerticalSpaceFinder/config.ts
```

Keys are `Above|Below`.
A missing key means the guide advises against that combination, not that you may pick freely.
`Paragraph|Paragraph (large)` is absent, for instance, which is why a metadata line followed by a lead has no documented value.
The templates use `xl` there by precedent.

The patterns worth memorising, since they cover most of a page:

- Breadcrumb to Heading 1: **zero**
- Heading 1 to a metadata Paragraph: **x-small**
- Heading 1 to a lead Paragraph: **medium**
- A lead Paragraph to Heading 2: **x-large**
- Before a Heading 2: **x-large**; before a Heading 3 or 4: **large**
- Heading 2 to body text: **small**; Heading 3 to body text: **x-small**
- Heading 3 to a List: **x-small**, not small, which is an easy slip
- Body text to body text: **medium**
- Around a Blockquote, an Image or a Table: **large**

Use a heading’s _visual_ size, not its level: a `<Heading level={2} size="level-3" />` takes the Heading 3 values.

An Accordion, and a Table with a Caption, both start with a Heading.
They take the space that heading’s size calls for, rather than a value of their own.

## Component facts that decide spacing

Each of these was verified against the source, and each has produced a wrong comment or a wrong margin at least once.

**Image always reserves its box.**
`.ams-image` sets `aspect-ratio: var(--ams-image-aspect-ratio)`, and the token defaults to 16:9.
So `aspectRatio` only _changes_ the ratio it crops to.
It does not create the reservation, and passing `aspectRatio="16:9"` is redundant.
Leaving the property off does not preserve the file’s own proportions; it crops to 16:9.

**Do not set `loading` on an above-the-fold image.**
`eager` is the browser default, so the attribute is a no-op.
The guidance is the negative one: do not set `loading="lazy"` in the first screenful, where it delays the largest image in the viewport.
Further down the page `loading="lazy"` is right, and needs no comment.

**Figure supplies its own gap.**
`.ams-figure` is a flex column with `gap: var(--ams-figure-gap)`, set to `ams.space.s`, so a child needs no margin.
An `ams-mb-*` on the Table inside a Figure stacks a second gap on top of it.

**Table scrolls rather than shrinks.**
`.ams-table` is `overflow-x: auto`, and the inner `<table>` has no width, so it sizes to its content and scrolls once it outgrows its cell.
Give it a cell wider than the reading column.
Put its name in `Table.Caption`, because a table that loses its Caption loses its accessible name, and mark the first cell of each row with `scope="row"`.

**A Figure Caption becomes the accessible name of the Figure**, all of it.
It takes any content, so a Heading plus a Link List is fine, but keep it short for that reason.
When a Figure wraps a captioned Table, the two captions name different things on purpose.

**`.ams-grid` has `align-items: start`**, so a cell never stretches to the row height.
