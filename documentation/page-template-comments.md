<!-- @license CC0-1.0 -->

# Comments in page templates

Someone building a city service reads a page template to see how the parts fit together, and then copies it.
Without comments the template shows the result and hides the reasoning, so the decisions behind it are invisible and easy to drop.
That is why these stories carry far more comment than ordinary code, and why the general preference for code that explains itself does not apply here.

The flip side is that nothing verifies a comment.
No test fails when one lies.
An adversarial audit of the existing templates checked 245 factual claims and refuted roughly 103 of them, one file being 64% wrong, and every correction pass introduced new false claims in text it had just written.
Treat a comment as an assertion you have to defend.

## Comment what a reader cannot see

A good comment explains a decision the code cannot show: an absent property, a value chosen against an alternative, or a mechanism that is not local.

The clearest example is the missing `paddingTop` on the Grid after a Breadcrumb.
Nothing in the source shows an absence, so the comment is the only carrier.

Skip comments that restate the code.
A comment reading ‘A Heading’ above a Heading earns nothing.

## How often a comment may appear

The unit is once per story, per copy, not once per file.

Put the comment on the first Card, the first image, and the first Spotlight in a story, and leave the rest bare.
Whoever is reading carries it to the next one.

But a five-story file legitimately carries the same sentence five times, once per story.
And a story that keeps its guidance both in `render` and in a hand-written source string legitimately carries it twice.
Only a second occurrence within one copy of one story is repetition worth removing.

A quick check for a single-story file, where a text appearing more than twice is repeated:

```sh
grep -o "{/\* .* \*/}" <file> | sort | uniq -c | sort -rn | head
```

## Keep the two copies in step

Every comment must appear in both the `render` and the hand-written `parameters.docs.source.code`, with the same wording.
They drift otherwise.
Before the copies were first reconciled, several comments existed in only one copy, four templates had none at all in their `render`, a handful of shared sentences had forked into five or six wordings, and the shortened copies had quietly dropped external links.

`storybook/src/pages/sourceParity.test.ts` checks this, along with the markup itself.
See [code-panel-source.md](code-panel-source.md) for what it compares and which differences it accepts.

## The canonical set

These sentences already exist across the templates.
Reuse the exact wording rather than inventing a variant.
A fork is worse than a repeat, because it makes the set unsearchable and multiplies the cost of a correction.

**Structure and spacing**

- `Keep the breadcrumb in its own Grid above <main>, so it sits outside the main content region.`
- `The Grid after the Breadcrumb has no paddingTop, so the breadcrumb and the page title read as one block.`
- `The Skip Link in the Page Layout targets this id, so the next Tab press lands in the main content.`
- `The last Grid before the Page Footer takes a paddingBottom of 2x-large.`
- `A last section that is not a Grid takes ams-mb-2xl instead of a Grid’s paddingBottom.`
- `The body sits in a narrower cell, indented one column on wider screens, for a comfortable reading measure.`
- `This cell is not ams-prose, so every element but the last sets its own bottom margin.`
- `start pins the even-indexed cells to the content column; odd-indexed cells fall in beside them.`

**Media**

- `This image carries no information the text does not, so it takes an empty alt.`
- `Image always reserves its box; aspectRatio only changes it from the default 16:9 to a banner’s 16:5.`
- `Outside the Grid, the image spans the full Page width: up to 90rem, centred — not the full window.`
- `Screen readers skip a Card’s image, so only use a decorative one with an empty alt.`

**Text**

- `The visible date is prose; dateTime repeats it in the machine-readable format software parses.`

The Navigation Page carries a forked wording of the breadcrumb comment: `Public page templates keep the Breadcrumb in its own Grid above <main>, so its nav sits outside it.`
Pick the first form for new work.
The fork is a leftover, not a second option.

Curly apostrophes in these strings are literal, because they are prose.

## Formatting

One line, while it fits inside 120 columns:

```tsx
<Grid paddingBottom="2x-large">
  {/* The last Grid before the Page Footer takes a paddingBottom of 2x-large. */}
  <Grid.Cell span="all">…</Grid.Cell>
</Grid>
```

Block form when it does not:

```tsx
<Image
  alt=""
  /*
   * A full-width hero image. srcSet lets the browser pick a size for the viewport, and aspectRatio crops
   * it to a wide band. It sits in the first screenful, so it is not lazy-loaded: lazy loading suits
   * images below the top of the page, and here it would delay the largest image in the viewport.
   */
  aspectRatio="16:5"
/>
```

Several short comments stack as separate one-line blocks rather than merging into one paragraph.
They are separate claims, and they get corrected separately.

## Before you commit a comment

For each factual claim, name the file that proves it, and check it there.
The recurring failure shapes, all seen in real reviews:

- **Invented mechanisms.**
  ‘The Card Link names the card’ — a Card renders a bare `<article>`, named only by `aria-label`.
  ‘Focus stays because of preventDefault’ — it stays because the hrefs resolve to nothing.
- **Miscited external guidance.**
  Eighteen refutations in one file were claims about what an external design system’s guidance says, where the cited page did not say it.
  If you cite an external page, read it.
- **Comments written to justify a bug.**
  One rationalised a Heading 1 margin that the vertical space guide contradicts.
  When the code and the guide disagree, fix the code.
  Do not write a comment defending it.
- **Guessing at a token value.**
  Read the `.tokens.json` or the compiled custom property.
  Do not infer it from what looks right.
