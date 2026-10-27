---
name: page-template-from-figma
description: Build a complete Storybook page template — story file, docs page, Code Panel source — from a Figma frame or a screenshot of a live page. Use whenever the task is to add or rebuild a page under storybook/src/pages/, whenever a Figma link or a screenshot of a web page arrives with a request to "build this page", "make a template of this", or "turn this design into a story", and whenever an existing page template needs a new variant or a review against the current conventions. Also use before reviewing someone else's page template work, since the conventions it encodes are not enforced by any test.
license: CC0-1.0
---

<!-- @license CC0-1.0 -->

# Page templates from a design

Read `documentation/page-templates.md` and follow it.
It is the reference, kept with the repository and shared by everyone working on it, and it points at three companion files: `documentation/page-layout-and-spacing.md` for the Grid and the vertical space, `documentation/page-template-comments.md` for the comments, and `documentation/code-panel-source.md` for the hand-written `parameters.docs.source.code`.
This file adds only what is specific to working here.

## Getting the design

A Figma URL alone is not actionable here.
Fetching `figma.com/design/…` returns the app shell, the Figma connector needs an interactive authorisation flow, and there is usually no Dev Mode server listening.
Probe once, then ask:

```bash
curl -s -m 4 -o /dev/null -w "%{http_code}" http://127.0.0.1:3845/mcp
```

`000` means nothing is listening.
Ask for a PNG export or a screenshot straight away, rather than spending minutes on three approaches that will each fail.

A plain screenshot is enough, because the work is matching each band of it to a documented section role and taking the numbers from the reference rather than from the image.

## Working method

Settle public against internal first, then name every band in the vocabulary of the introduction.
That mapping is the whole design decision, and everything after it is lookup — so getting it wrong is the one mistake that cannot be linted out later.

Generate the Code Panel source from the render body instead of retyping it, and let the test confirm the two copies agree:

```bash
python3 storybook/scripts/build_source_block.py <stories.tsx> <StoryExportName>
pnpm --filter=storybook run test
```

Commit per concern, and while the branch is unpushed fold a correction into the commit that introduced it rather than leaving a `fix` commit behind.

## How to verify

```bash
pnpm --filter=storybook run lint
pnpm --filter=storybook run build
```

Then serve `storybook/dist` and screenshot `iframe.html?id=<storyId>&viewMode=story` with a headless browser.
A headless screenshot needs no running preview server.
Do this even when everything passes: the type check, ESLint and a successful build all pass on a layout that paints one column on top of another, so a render check is the only thing that catches a real overflow.
Clean up afterwards with `pnpm --filter=storybook run clean:dist`.

Finally, re-read every comment against the source it describes.
An audit of the existing templates found roughly 103 of 245 factual claims were wrong, and each correction pass introduced new ones, so treat your own corrections as suspect too.

## What not to do

- Do not draft from a neighbouring template. Not every one followed the current guidance when it was written, so copying propagates stale spacing. When a template and the reference disagree, the reference wins, and say so, because it usually means that template is owed a fix.
- Do not adjust a documented value because the screenshot looks a few pixels off. Glyph-to-glyph gaps include half-leading, so they overstate real box gaps. A factor of two is worth raising; anything smaller is measurement noise.
- Do not extract the page's markup into a component. The Code Panel serialises the rendered tree, so the whole page becomes a single element name and the template stops being copyable.
- Do not invent a comment. Name the file that proves each claim before writing it, since nothing fails when a comment lies.
