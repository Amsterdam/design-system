<!-- @license CC0-1.0 -->

# The Code Panel source of a page template

People copy page markup out of Storybook’s Code Panel, so what the panel prints is part of the deliverable.
Every page template hand-writes it.
Getting there requires knowing how the panel picks its source.

## How the panel chooses

The order is `parameters.docs.source.code`, then the rendered-tree snippet, then `parameters.docs.source.originalSource`.

Which of the last two applies is decided by `__isArgsStory`, which Storybook computes as `render && render.length > 0`.
That is, whether the render function declares a parameter:

- **`render: (args) => …`**, even with an unused parameter, regenerates the source from the rendered element tree.
  JSX comments vanish, because Babel erases them before they reach the tree.
  Every `.map()` expands, object keys alphabetise, and function properties serialise to an indistinguishable `function sY(){}`.
- **`render: () => …`** prints the story’s own CSF text.
  Comments survive, but so do the `{ render: … }` wrapper and the TypeScript around it.

Neither is what a reader wants to copy, which is why setting `code` — which short-circuits both — is the convention.
Since `code` wins regardless, the render signature stops mattering once you set it: the Handbook Page keeps `render: () =>` _and_ sets `code`.

Do not try to fix this by dropping `code` and relying on one of the generated paths.
That was tried on the Information Page and reversed.
A template with no `code` is now the odd one out.

`docs.source.transform`, which runs `collapseInlineObjects`, applies only on the regenerated path and never to a hand-written `code`.
So every `span={{ narrow: 4, medium: 7, wide: 9 }}` in your string prints exactly as you write it, on one line.

## The shape

`render` lives on the story export, not on `meta`.
`originalSource` is generated per export, so a meta-level render leaves the panel serialising `{}`.
`parameters` sorts before `render`.

```tsx
export const Default: StoryObj = {
  parameters: {
    docs: {
      source: {
        // Because this story’s `render` takes no argument, the Code Panel prints its source as written, the story
        // wrapper and its types included. Provide the source by hand so the panel shows the markup to compose,
        // without that scaffolding.
        code: `<>
  {/* Keep the breadcrumb in its own Grid above <main>, so it sits outside the main content region. */}
  <Grid paddingTop="large">…</Grid>
</>`,
        language: "tsx",
      },
    },
  },
  render: () => (
    <>
      <Grid paddingTop="large">…</Grid>
    </>
  ),
};
```

`language: 'tsx'` is not optional.
Storybook cannot infer the language of a hand-written string, so without it the Code Panel prints the snippet unhighlighted.
Every `docs.source` block in every page template sets it: 22 of 22 before the Information Page was written without it, which a reviewer caught.
It sorts after `code`, which is also alphabetical order.

The comment above `code` states why the string exists, and its reason depends on the signature:

- A `render` that declares a parameter: ‘the Code Panel rebuilds its source from the rendered tree: JSX comments disappear’.
- A `render` with no parameter: ‘the Code Panel prints its source as written’, plus what scaffolding that drags in.
  That is state and handlers for an interactive page, or the story wrapper and its types for a static one.
- A `render` on the shared meta: ‘leaves the story with nothing but its parameters’.

## Generating it

Build the string from the render body rather than retyping it.
Retyping is how the two copies diverge.

```sh
python3 storybook/scripts/build_source_block.py \
  storybook/src/pages/public/InformationPage/InformationPage.stories.tsx Default
```

It takes the render body, de-indents it to column zero, collapses a `<Heading>` onto one line where the result fits in 120 columns, and re-wraps a comment that no longer fits into block form.
Paste the output between the backticks.

Two things to check by hand afterwards.
A backtick or a `${` in the content would need escaping inside the template literal, which is rare in Dutch copy but worth a look.
And `src={exampleImageSource(1440, 450)}` should become the literal URL it resolves to, since the panel is showing markup to copy rather than the story’s own helpers.

## Checking the two copies

`storybook/src/pages/sourceParity.test.ts` compares the `render` against the hand-written string for every story in every page template:

```sh
pnpm --filter=storybook run test
```

It reports, per story, whether the comment sets are identical and whether the markup matches once whitespace beside `<` and `>` is normalised away.
That whitespace is exactly what JSX collapses at render time, so a difference there is cosmetic and anything else is drift.

Three differences are legitimate, and the test encodes each one rather than leaving it to the reader:

- A source that swaps `{exampleHeading()}` for the literal text is fine, and counts as a substitution rather than a difference.
  A `{…}` holding a bare identifier, a call or a template literal is therefore a wildcard.
  An object literal such as `span={{ narrow: 4, medium: 7, wide: 9 }}` is not, because cell sizes are exactly where silent drift hurts, so those are compared character for character.
- A source may abbreviate content the page pulls in from elsewhere, **when it marks the gap with an ellipsis**.
  An abbreviation with no marker is indistinguishable from drift.
- A comment that explains the story’s own machinery rather than the page belongs only in the `render`.
  The Home Page’s note about reading `args.children` is the example; it would be noise in markup someone copies.

For a template you are writing, the test is a straight gate: both copies come from one source, so anything it reports is a mistake.

## Trimming

Reproduce the page.
The templates that describe their string as ‘trimmed’ mean it reads more cleanly than the regenerated tree would, not that content is missing.
The Article Page’s string carries every paragraph, link and card of its render.

Abbreviate only where a story pulls content in from elsewhere and the markup would be noise.
`<Overlap>{/* … */}</Overlap>` is the established form for that.

## One group, several variants

Two CSF files cannot share a `title`.
A template whose variants must appear as one sidebar group with one documentation page therefore has to be a single story file with several exports, each with its own `code`.
The Profile Page ended up around 960 lines this way, and the Form Flow and the Navigation Page are the earlier precedents.
Plan for the file to be long, rather than splitting it and losing the group.
