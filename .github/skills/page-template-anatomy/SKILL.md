---
name: page-template-anatomy
description: Add the Anatomy section to a page template's Storybook docs page — the schematic of the page, its anatomyLabels.ts, and the check that keeps the two in step. Use whenever a page template under storybook/src/pages/ is added or gains a docs page, whenever a story's sections or Grid Cells change and its labels have to follow, and whenever the label test fails or a drawing reports that its labels no longer match. Also use before reviewing someone else's anatomy section, since most of what it encodes is convention rather than anything a type or a test enforces.
license: CC0-1.0
---

<!-- @license CC0-1.0 -->

# Page template anatomy

Read `documentation/page-anatomy.md` and follow it.
It is the reference, kept with the repository and shared by everyone working on it; this file adds only what is specific to working here.

## Working method

Do not read the story to count its sections and cells.
Write the names as best you can, then run the test and let it tell you what the story actually has:

```bash
pnpm --filter=storybook run test
```

It reports the counts per section, so two or three runs converge faster than reading JSX, and cannot go wrong the way reading can.

Verify the drawing before reporting it done.
Building Storybook and screenshotting the docs page headlessly shows it without starting a preview server:

```bash
pnpm --filter=storybook run build
```

Then serve `storybook/dist` and screenshot `iframe.html?id=<storyId>&viewMode=docs`.
Check the labels fit their cells, that the heights read as a truthful proportion, and that nothing is clipped in a way that misleads.
Clean up the build afterwards with `pnpm --filter=storybook run clean:dist`.

## What not to do

- Do not add heights that flatter the drawing. A cell's height is an impression, but the proportions between cells should be true to the page.
- Do not restate what the drawing shows in the page's own prose. That explanation lives once, in the introduction to the section.
- Do not touch `PageAnatomy.test.stories.tsx` for a page that shows nothing the three pages there do not already cover.
