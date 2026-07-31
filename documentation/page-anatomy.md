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
  [{ height: 32, label: "Breadcrumb" }],
  [
    { height: 132, label: "Page title" },
    { height: 372, label: "Article body" },
  ],
];
```

One array per section, one entry per Grid Cell, both in the order they appear in the story.
An entry is a string, or an object that also sets a height in pixels of the page it stands for.

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

Heights are an impression, so aim for a truthful proportion rather than a measurement.
Two things are not yours to set: an Image takes its height from its `aspectRatio`, and the Page Header takes its from the tokens.

Where a cell changes shape between Grid variants, give it a height per variant.
A vertical Tab Navigation runs horizontally below the medium breakpoint, so the cell that holds it is short there:

```ts
export const anatomyLabels: AnatomyLabels = [
  [{ height: { narrow: 40, medium: 240, wide: 240 }, label: "Project navigation" }],
];
```

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
It draws three pages, which between them cover a Spotlight, a full-bleed Image, an Overlap, Compact Mode, a Menu column, a row-spanning Cell and a transparent one.
Leave it alone unless a new page type shows something none of those do, and add to that story rather than writing another: the snapshot glob matches a story named `Test`, so a second story is not picked up.
