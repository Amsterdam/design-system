<!-- @license CC0-1.0 -->

# Building a page template

A page template is a worked example that people copy.
It is judged against the other templates rather than on its own, so most of the work is conforming to decisions made elsewhere.
No test enforces those decisions and no type checks them, which is why they are written down here.

This covers building one from a design: a Figma frame, or a screenshot of a live page.
Three companion files carry the detail:

- [page-layout-and-spacing.md](page-layout-and-spacing.md) — Grid Cell sizes per role, the Grid padding positions, the vertical space lookup, and the component facts that decide spacing.
  Read it before writing the first `<Grid>`.
- [page-template-comments.md](page-template-comments.md) — the canonical comment set with its exact wording, how often each may appear, and how to keep a claim from being false.
  Read it before writing the first comment.
- [code-panel-source.md](code-panel-source.md) — why every template hand-writes `parameters.docs.source.code`, and how to generate it instead of retyping.

## The authority

Two Storybook pages settle the layout, and both are worth reading at the start rather than after a draft exists:

- [storybook/src/pages/public/Introduction.docs.mdx](../storybook/src/pages/public/Introduction.docs.mdx) gives the `Page`, `PageHeader`, `Grid` and `PageFooter` skeleton, the Grid padding rules per structural position, and the `span` and `start` per section role.
- [storybook/src/docs/designer-guide/vertical-space.docs.mdx](../storybook/src/docs/designer-guide/vertical-space.docs.mdx) gives the space between any two components.
  Read it as column for the component above, row for the component below.

Copying a neighbouring template instead propagates stale spacing.
Not every template followed the current guidance when it was written, and the rules have changed since.
When a template and the guidance disagree, the guidance wins.
Say so when it happens, because it usually means the template is owed a fix.

## Working from a design

**Settle public against internal before writing anything.**
They have separate directories, layouts and introductions.
The word ‘internal’ in a request is not reliable: a Profile Page asked for as internal turned out from the screenshots to be unmistakably public.
Screenshots of a public municipal website are public; an application behind a login is internal.
Ask when the screenshot does not settle it.

**Name the sections.**
Walk the design top to bottom and write down what each band _is_, in the vocabulary of the introduction: a breadcrumb, a content page header, a body, side-by-side blocks, top tasks, preview cards, a Spotlight band, a full-bleed image.
This mapping is the whole design decision.
Everything downstream is lookup.

**Do not measure the image.**
A plain screenshot is enough, because you are matching each band to a documented section role and taking the numbers from the guidance.
Glyph-to-glyph gaps in a screenshot include half-leading, so they overstate real box gaps.
Never adjust a documented value because a screenshot looks four pixels off.
A difference of a factor of two is worth raising; anything smaller is measurement noise.

Then build the story, then the documentation page, then the Code Panel source.

## What you are producing

```text
storybook/src/pages/<public|internal>/<PascalCase>/
├── <PascalCase>.stories.tsx
└── <PascalCase>.docs.mdx
```

A `data.ts` alongside them is fine for sample rows or filter options.
A `.tsx` module is fine for content shared with another story, but never for the page’s own markup — see the traps below.

The story file’s shape:

```tsx
/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta } from "@storybook/react-vite";

import { commonMeta } from "../common/commonMeta";

const meta = {
  ...commonMeta,
  title: "Pages/Public/Information Page",
} satisfies Meta;

export default meta;
```

`commonMeta` supplies the `PageLayout` decorator, which renders `Page`, `PageHeader`, the Skip Link and `PageFooter`, along with the 1440-pixel visual test viewport and Spacious mode.
Your story renders only what sits _between_ the header and the footer.

Sidebar titles are `Pages/<Public|Internal>/<Name>`, with the page name in Title Case.
Pages count as proper names, unlike section and guide nodes, which are sentence case.

No `.test.stories.tsx` under `pages/`.
Every story under `Pages/**` is snapshotted directly, so a new story is already a new snapshot and a test story would only duplicate it.

## The documentation page

Follow the existing pages:

```mdx
{/* @license CC0-1.0 */}

import { Meta } from "@storybook/addon-docs/blocks";

import * as InformationStories from "./InformationPage.stories.tsx";

<Meta of={InformationStories} />

# Information page

One paragraph: what this page type is for, and what to use instead when it is not.

## Structure

## Headings

## Layout and spacing
```

Add one `##` section per story where there is more than one.

No `<Canvas>` blocks.
Page documentation pages are prose beside the story group, unlike component documentation pages, which need an explicit `<Canvas of={…} />` per story.

One sentence per line, since this is committed Markdown.
Link component names to their documentation pages, such as `/docs/components-media-figure--docs`, on first mention.

Write it as guidance for someone building their own page, not as a description of this example.
‘Give a Table a cell wider than the reading column’ is useful; ‘this table is in a wide cell’ is not.

General truths about a component belong on that component’s own documentation page, not restated here.
If you find yourself explaining what `aspectRatio` does, that sentence belongs on the Image page.
Check whether it is already there.

## Before you commit

None of these conventions is enforced by a type, so run the checks:

```sh
pnpm --filter=storybook run lint
pnpm --filter=storybook run test
npx eslint storybook/src/pages/public/<Name>
npx prettier --check "storybook/src/pages/public/<Name>/*"
```

`sourceParity.test.ts` is the one that catches the mistake nobody sees: the `render` and the hand-written source string drift apart silently, which is how the Information Page ended up with a stale source string and shipped a snippet the panel would not highlight.

Then read the rendered page.
The type check, ESLint and a successful Storybook build all pass on a layout that paints one column on top of another, so a render check is the only thing that catches a real overflow.

Finally, re-read every comment you wrote against the source it describes.
Nothing fails when a comment lies.

## Traps

**Never extract the page’s markup into a component.**
The Code Panel serialises the rendered tree, so a `<ProfilePageExample />` shows up in place of the whole page.
Inline the JSX in `render`.
Use an argument read in `render: ({ phase }) => …` for the same page at different states, and hide the control with `argTypes: { phase: { table: { disable: true } } }`.
Module-level data constants are fine; the rule is about components.

**Never read another story’s `args.children`.**
Optional chaining makes it fail silently the moment that story converts to `render`, with no type error and no test failure.
This left all eight public templates without a footer for five days.
Share content through a plain non-story `.tsx` module instead.
The stories glob only picks up `*.stories.@(ts|tsx)`.

**Never build a page around a real person.**
Real offices, institutions and buildings are fine, and realistic Dutch copy is wanted.
Invent the person, their party, and anything attributed to them, because any filler around a real name becomes a factual claim about a living individual.
Watch for names lifted straight from a screenshot, since those are usually real office holders.
For a portrait, use `PhotoPlaceholder` rather than a photograph of a person.

**Several `<Image>` in a `<Row>` overflow the cell** instead of shrinking, and paint over the neighbouring column.
`.ams-row` is `flex-wrap: nowrap`, and each image lays out at its intrinsic width.
Use `ImageSlider` for a set of photos, and keep `Row` for items with their own intrinsic sizing.

**Write typographic characters literally.**
An en dash, a curly apostrophe, a superscript two and a bullet are all literal UTF-8 in this repository.
Entities appear only where ESLint’s `react/no-unescaped-entities` forbids a literal apostrophe or quotation mark, or in MDX tables where a non-breaking space would be invisible in the source.

**Keep example content stable for the visual tests.**
Random content reports diffs that are not regressions.
Use the helpers in `storybook/src/_common/exampleContent.ts`, which pin a fixed value under `isChromatic()`, or hard-code a fixed image id.
