<!-- @license CC0-1.0 -->

# Page anatomy

Every page template opens its documentation page with a schematic of the page it demonstrates: the Page Header, the sections in between, and the Page Footer, drawn once per Grid variant.
This describes how to add one to a new page template.

The drawing is the `PageAnatomy` component in `storybook/src/_components/PageAnatomy`.
It renders the story, reads the element tree, and takes every measure from what it finds there: the sections, the Grid Cells on them, and the `span`, `start`, `rowSpan`, padding and gap each one declares.
Nothing about the geometry is written by hand, so the drawing follows the page it documents.

Two things are written by hand: the name of each cell, because no prop on a page says that a cell holds the article body, and an impression of its height, because nothing in a story says how tall its content is.

## Name the cells

Add an `anatomyLabels.ts` beside the story file.

```ts
import type { AnatomyLabels } from "#storybook/_components/PageAnatomy/model";

export const anatomyLabels: AnatomyLabels = [
  [{ height: "line", label: "Breadcrumb" }],
  [
    { height: "title", label: "Page title" },
    { height: "body", label: "Article body" },
  ],
];
```

One array per section, one entry per Grid Cell, both in the order they appear in the story.
An entry is a string, or an object that also names a height from the scale below.

A section is a Grid, a Spotlight, an Overlap, or an Image that runs to the edges of the page.
An Image of its own is a section with a single block; the Image inside an Overlap is a block alongside the Cells that lie on it.

A Grid Subgrid holds Cells rather than content of its own, so it takes no name.
Name the Cells inside it, in the order they appear, as though the Subgrid were not there.

Do not count the sections by reading the story.
Write the names as best you can and run the test below: it reports how many sections the story has and how many cells each one holds, which is faster and does not go wrong.

### Choosing names

Name the role a cell plays, not the content that happens to be in it: ‘Article body’, not ‘Sharing scooters and cargo bikes’.
Keep them short, because a cell four columns wide on a phone has little room, and reuse a name across page types where the role is the same — Breadcrumb, Page title, Section heading, Link section, News card.

Do not call a cell ‘Page header’.
The Page Header is drawn on the same schematic, and the two read as the same thing.
The cell that holds the title of a content page is ‘Page title’.

### Choosing heights

A height is a step of a scale of seven, not a measurement of the content:

- `line`, 32 pixels — a single line of text: a breadcrumb, a result count.
- `heading`, 48 — a heading, a pagination, a search field.
- `title`, 72 — a page title.
- `tile`, 96 — a compact box in a row of them: a top task.
- `card`, 128 — a link section, a news card, a search result.
- `panel`, 192 — a map, a set of filters, a table of contents, an image slider.
- `body`, 256 — a body of text: an article, a product description, a set of questions.

Pick the step by what the cell holds, so that the same kind of content is the same size on every page type.
The names are sizes with a typical use rather than a taxonomy: a page title that carries a lead paragraph is a `card`, and a Compact Mode page has smaller titles than a Spacious Mode one.

Nothing is drawn taller than a `body`, whatever the page does.
An article body on a real page is several times taller than that against its own width, and a schematic that has to be scrolled past says less than one that is read at a glance.
The Page Header is the one height that is not yours to set at all: it comes from the tokens.

Where a cell changes shape between Grid variants, give it a step per variant.
A vertical Tab Navigation runs horizontally below the medium breakpoint, so the cell that holds it is short there:

```ts
export const anatomyLabels: AnatomyLabels = [
  [{ height: { narrow: "heading", medium: "panel", wide: "panel" }, label: "Project navigation" }],
];
```

An Image takes its height from its `aspectRatio` where a label gives it none, up to a `card`, and past that at an ever smaller share of the rest, so that it never reaches a `body`.
Give the Image a step of its own where the flattened height reads wrong.

### Repeated cells draw themselves shorter

A page that lists eight top tasks stacks all eight on a phone, which is a screen of the same block over and over.
The drawing shortens a run of identical cells to its first row, a marker naming what it stands for, and its last row.

The marker counts cells where they lie one under the other, and rows where they lie beside one another: ‘8 more’, but ‘3 × 2 more’ for three rows of two.
A plain count would read there as six more rows.

It does that from four rows up, and per Grid variant: the same eight tasks lie two to a row on the medium grid and four on the wide one, so that run is elided on the first two and drawn in full on the third.
Nothing about this is written by hand, and a run counts as identical when the cells share a name, a span, a row span and a height.
Where a run should be drawn in full, give its cells names that differ.

## Add the section to the documentation page

Put the schematic directly below the introduction, above every other heading, so it is the first thing a reader meets.
If the page has no other headings, give the prose that follows one of its own rather than leaving the schematic at the bottom.

```mdx
import { PageAnatomy } from "#storybook/_components/PageAnatomy/PageAnatomy";

import { anatomyLabels } from "./anatomyLabels.ts";
import * as ArticleStories from "./ArticlePage.stories.tsx";

## Anatomy

This schematic shows the default sections for this page type and how the grids and vertical space work.

<PageAnatomy labels={anatomyLabels} of={ArticleStories} />
```

Use that sentence as it stands.
It reads the same on every page type, and what the drawing shows is explained once, in `storybook/src/pages/public/Introduction.docs.mdx`, beside the rules on vertical space and Cell sizes it illustrates.
Do not repeat that explanation per page.
Where a page draws something other than its default example, say which, as the Form Flow does with ‘a question page’.

Two props cover the cases beyond a public page with a `Default` story:

- `story="…"` names the export to draw, where a page has no `Default`.
- `menu mode="compact"` draws an internal page: Compact Mode scales its space tokens differently and gives the Grid a smaller inline padding, and a Page with a Menu lays out a column for it beside the header, the body and the footer.

## Check the names against the story

`storybook/src/_components/PageAnatomy/anatomyLabels.test.ts` reads every `anatomyLabels.ts` against the story it belongs to and fails when the two disagree.
It finds the new file on its own.
Where a page draws an export other than `Default`, add it to the `storyNames` map in that test, keyed by the directory the page lives in.

```bash
pnpm --filter=storybook run test
```

A page whose names have drifted from its story would otherwise draw a notice on its documentation page for whoever opens it.
That is the point of the test: the story is free to change, and the names have to keep up.

## Add it to the visual test only when it shows something new

`PageAnatomy.test.stories.tsx` is the one story Chromatic snapshots for the drawing itself.
It draws five pages, which between them cover a Spotlight, a full-bleed Image, an Overlap, a run of repeated Cells, a Subgrid holding a Cell that spans all of its columns, Compact Mode, a Menu column, a row-spanning Cell and a transparent one.
The last of the five sits in a container the width of a phone, where one drawing is shown at a time and buttons choose which.
Leave it alone unless a new page type shows something none of those do, and add to that story rather than writing another: the snapshot glob matches a story named `Test`, so a second story is not picked up.
