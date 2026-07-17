<!-- @license CC0-1.0 -->

# Writing release notes

Release notes live in Storybook at [storybook/src/docs/release-notes.docs.mdx](../storybook/src/docs/release-notes.docs.mdx), directly below the Introduction.
This guide describes how to write them, for any release, past or future.

## Why the page exists

The changelogs record every change.
That is a different job from telling someone what a release means for them.
A changelog answers ‘what did you commit’; release notes answer ‘what is new, what should I do, and can I upgrade today’.

The page is also the only home some changes have.
Our documentation, examples and page templates live in Storybook rather than in a package, so nothing about them reaches a `CHANGELOG.md`.
If the release notes do not mention a new template or guideline, no one finds out about it.

## Who reads it

Business owners, designers and developers, in one page.
Write so all three can read the same sentence and each take something from it.
That rules out both extremes: no raw commit subjects, and no vague reassurance without specifics.

A useful test per entry: could a designer tell what changed on screen, and could a developer tell what to type?

## What it is not

It is not a complete picture.
Leave out refactors, dependency bumps, CI, tests, tooling, linting, and documentation aimed at people contributing _to_ the design system rather than building _with_ it.
These are assumed.
Including them buries the few things that actually matter.

Everything you leave out is a choice you should be able to defend in one sentence.
Everything you include should change what a reader does next.

## Establishing the release window

Every release is bounded by two `chore: release main` commits on `main`.
Find them, then read everything between:

```sh
git log --oneline --all --grep="chore: release main"
git log --format="%h %ad %s" --date=short <previous-release>..<this-release>
```

That range is the truth.
Work from it.
Use the sources below to interpret it, never the other way around.

## Sources, and how each one lies

**Each package’s `CHANGELOG.md`** gives the versions and the dates.
Take the version numbers from the section headings that carry the release date.
But do not treat the changelogs as a complete inventory, for two reasons:

- Release-please occasionally drops a commit.
  In the 12 July 2026 release, `feat(Accordion): Add an onToggle callback to Section` (#2758) shipped in React 4.3.0.
  The property is in the published package.
  It appears in no changelog.
  Every sibling `feat` from the same week made it in.
- `chore:` commits never reach a changelog by design, and some of them are user-facing.
  In the same release, #2728 documented how to localise Calendar and Date Picker, and #2785 added property documentation that ships in the Controls table and in IDE tooltips.

So: reconcile the commit range against the changelogs, and report the difference.
A user-facing change that shipped but reached no changelog is not an edge case to tidy away.
It is the single most valuable thing the release notes can carry, because it exists nowhere else.

**The release preview pull request** (`chore: Preview the next release`) is a good starting inventory.
It is a draft written before the release, so it can be wrong in both directions: it may promise something that slipped, and its links may point at pages that were later renamed or deleted.
The 12 July preview linked a ‘Language guide’ that a commit in the same release had already renamed to Localisation.
Verify every claim and every link against the tree.

**Summaries written for other audiences**, such as a Slack post or a note to a partner team, are useful for tone.
They also show what someone thought was worth saying.
They are not a scope.
They are often cumulative, covering several releases at once, so lifting one wholesale silently pulls in changes from earlier releases.

**A pull request description**, ours or an agent’s, states an intention.
The merged code states the outcome.
They diverge more often than you would expect, and a title is the least reliable part of both: #2728 is titled ‘Activate and document the `locale` and `dir` props’, but there is no `dir` property on either component.
It is a Storybook control derived from the locale.

**The code** settles every disagreement.
Read the diff before describing a change.

## Ways to be wrong

Every one of these was caught while reviewing a draft that already looked finished.
They share a shape: a claim that is nearly true, in a sentence that reads well.
Expect to make several of them per release, and budget a verification pass to find them.

1. **A capability that only half landed.**
   The 12 July draft said four components became controllable.
   Three did.
   Accordion Section only gained an `onToggle` callback.
   It runs `useCollapsible` in uncontrolled mode.
   Its `expanded` is a deprecated alias for `defaultExpanded` until October, so the name is not free yet.
   A reader who acted on the draft would have passed `expanded` to Accordion, earned a deprecation warning, and watched the value be treated as an initial default.
   Check the implementation, not the property name: `defaultValue` is uncontrolled, `value` is controlled.
2. **A group with one member that does not belong.**
   The draft said Dialog, Table, Tabs and Tab Navigation all clip vertical overflow.
   Dialog does the opposite.
   Its body keeps `overflow-y: auto`, because it is the scroll container.
   When a commit names four components, check all four.
3. **A token mistaken for the thing it names.**
   The draft said Amsterdam Sans gained three weights and an italic.
   Only the black weight is a new font file; light, extra bold and italic were already shipping and merely gained tokens.
   ‘Added a token for X’ and ‘added X’ are different sentences.
4. **A guarantee with unstated preconditions.**
   The modal Dialog scroll lock needs the `ams-body` class on the consumer’s `<body>`.
   It sits behind an `@supports` query.
   It does not hold on iOS Safari touch, and the source comment says so.
   The draft told readers to delete their own scroll lock.
   Before writing ‘you can remove your workaround’, read the implementation for the cases where it still fails.
5. **A pattern assumed to be uniform.**
   All five packages look like they pin each other.
   React Icons does not.
   It depends only on React.
   Check each one; do not generalise from two.
6. **A count that is not counting what you think.**
   ‘23 component pages’ was the number of files a commit touched; only 21 gained the section being described.
   ‘All 62 component pages’ was the number of pages one commit touched; there were 63.
   A diff count and a total are different numbers.
   Prefer ‘every component page’ to a number you have not counted yourself.
7. **A property on the compound instead of the part.**
   The June draft said Table of Contents items take a `collapsible` property.
   `collapsible` is on the root; the Link takes `defaultExpanded`.
   It also said Menu and Breadcrumb take `linkComponent`; the property is on `Menu.Link` and `Breadcrumb.Link`, and Page Header’s logo uses a different name again.
   A reader who copies the sentence writes code that silently does nothing.
   Grep the actual props interface for each component you name.
8. **A fix that fixes nothing anyone could have hit.**
   The June draft asked readers whether they had worked around a Switch whose track vanished in forced colours.
   Nobody had. The border width was a local custom property, never themeable, and never zero.
   #2656 made it themeable and floored it at 1px so that a token set to zero could not hide it.
   That is hardening against a hazard the same commit introduced, filed under `fix:`.
   Before restating a fix as a symptom, check that the symptom was reachable.
9. **Two components that look alike from the outside.**
   The June draft called Date Picker ‘the same calendar inside a form field’.
   It is neither. Date Picker does not import Calendar, renders no field, and sits inline.
   Calendar is a nav landmark of links; Date Picker is a grid of buttons that selects.
   Read both implementations before you draw a family resemblance.
10. **The repo at HEAD is not the repo at the release.**
    Progress List’s `collapsed` was the current API in June and deprecated in July.
    Describing June from HEAD would have announced a deprecation that had not happened yet.
    Read the tree at the release commit: `git show <release-commit>:<path>`.

## Structure

One page, with one `##` section per release, newest first, dated `## 12 July 2026`.

Keep it one page.
Storybook cannot make a node both a page and a folder.
Giving each release its own page under `Docs/Release notes/…` turns ‘Release notes’ into a folder, and the index page then appears beside the releases as a stray entry labelled ‘Docs’.
That is not fixable from the file: unattached MDX entries are always named ‘Docs’, and `MetaProps` is only `{ of?, title? }`, so there is no `name` to override.
If the page ever does grow unwieldy, the way out is a folder of releases plus a separate child page for the index, not a page that is also a folder.

### Versions

Open with a single paragraph: package names in alphabetical order, version numbers bold.

> Assets **2.5.0**, CSS **4.3.0**, React **4.3.0**, React Icons **2.2.0**, Tokens **4.2.0**.

Hard-code them.
The `PackageVersions` component on the Introduction reads the live manifests, so it always shows the latest.
That is wrong for a release note about a specific past release.

### Framing

Two or three sentences naming the essence of the release, before any list.
Most releases have a theme; find it.
State plainly whether anything breaks.

### New, Changed, Improved, Fixed

Use these four headings, in this order, rather than ‘Breaking’, ‘Features’ and ‘Bugfixes’.
They describe the reader’s experience instead of our commit conventions.
They also let a release with no breaking changes still be honest about what moved.
**New** leads, because that is what people came for.

1. **New**: did not exist before.
2. **Changed**: existing markup renders or behaves differently, with no action required.
   Visual shifts, new defaults, deprecations.
   For a major release, this is where breaking changes go, with migration steps.
3. **Improved**: an existing component gained something optional.
4. **Fixed**: a bug that is gone.

An item belongs in exactly one bucket.
When a change is both an improvement and a shift in behaviour, put it in **Changed**.
That is what the reader needs to notice.
Scroll containment and a scroll lock read as improvements from our side.
From the reader’s side they change how a page they already shipped behaves.

Where several components gained the same kind of capability, write a short paragraph instead of scattering identical bullets.
The 12 July notes do this for the collapsibles that became controllable: one paragraph on why you would want it, then one line per component.

### Docs

A separate section, always.
This covers new examples, new page templates and new or changed guidelines.
It exists because these changes are in no changelog.
This is the only place anyone will learn of them.

Apply the same filter as everywhere else: guidance for people _using_ the design system, not for people maintaining it.

### Upgrading

Three questions, in this order, each as a `####` heading:

1. **Do you need to change anything?**
   For anything short of a major release the answer is **No**, and it should be stated in one word before any qualification.
   Say why it holds: nothing removed, every new property optional.
   Then note anything to migrate at leisure, with its deadline.
   For a major release, this is where the migration steps go.
2. **What you could start using.**
   The new capabilities, framed as an offer rather than an obligation.
3. **Bugs you may have run into.**
   The fixes, restated as symptoms a reader might recognise from their own work.
   ‘A Menu that grew past its maximum width’ lands where ‘Keep the horizontal padding inside the maximum inline size’ does not.

## Voice

The undercurrent: a design system that never changed would be one that had stopped listening.
Change is the product, not an apology for it.
What makes change safe is documentation and a choice about when to follow.
So the notes should read as confident, not defensive.
Never bury a shift to make a release look calmer than it is.

Keep that as an undercurrent.
The structure carries it: a deprecation with a date on it, ‘every new property is optional’, a **Changed** section that admits what moved.
It dies the moment you say it out loud.
An opening aphorism about change being good is the one thing guaranteed not to convince anybody.
Cut it and let the page prove the point.

Concretely:

- Write Markdown with one sentence per line, as everywhere in this repository.
- Keep sentences short and simple.
  Avoid compound sentences: two independent clauses joined by ‘and’, ‘but’ or ‘so’ are two sentences.
  Split them.
- Never use an em dash.
  A full stop, a colon, or a pair of commas will do the same work.
- Sentence case for headings.
  Title case for component names, so readers recognise them.
- Link a component on its first occurrence **in each section**, to its documentation page or to the specific story that shows the change.
  Plain title case for the rest of that section.
  Readers scan one section at a time, so each should stand on its own.
- Prefer the plain word.
  ‘Property’ over ‘prop’ in prose, since designers read this too.
- Give numbers where a number is what someone needs: ‘4 and 8 pixels tighter’, not ‘slightly tighter’.
- Use a numbered list when the count is the point.
  ‘Two things to know’ and ‘three components’ earn one.
  A set of unordered options does not.
- No commit hashes, no pull request numbers.
  Anyone who wants that has the changelog.

## Before you publish

- Derive every link from the `title:` of the story or the `<Meta title>` of the page, kebab-cased: `Components/Feedback/Skeleton` becomes `/docs/components-feedback-skeleton--docs`.
  Check each target exists rather than pattern-matching from memory; pages get renamed.
- Check whether a new component brought an example with it.
  Skeleton shipped with the Loading Page template in the same pull request, and the Documentation section is the only place it gets announced.
- Reconcile the commit range against the changelogs in both directions, and account for every gap.
- Verify the ‘nothing breaks’ claim against the changelogs _and_ the range: look for `!` in commit subjects, `BREAKING CHANGE:` footers, removals, and required properties.
- Check whether any existing deprecation has passed its removal date.
  On 12 July 2026 six icons and a set of field tokens were three days past theirs, and no changelog mentioned it.
  These belong in the notes for the release that removes them, but they are worth raising with the team when you notice.
- Confirm the release notes sort right after the Introduction: add the entry to `storySort.order` in [storybook/config/preview.tsx](../storybook/config/preview.tsx).
- Run `npx prettier --check` and `npx eslint` on the file, and build Storybook once to confirm the MDX compiles.
