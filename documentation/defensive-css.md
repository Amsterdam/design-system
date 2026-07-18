<!-- @license CC0-1.0 -->

# Defensive CSS audit

This report assesses every rule of [stylelint-plugin-defensive-css](https://github.com/yuschick/stylelint-plugin-defensive-css) against this repository: what each rule enforces, how effective it is here, where we violate it, and what fixing or ignoring it would mean.
It supports the decisions in our Stylelint configuration and proposes a remediation path.

The plugin is a devDependency.
Linting changes nothing that we ship — only the remediation described here would alter the compiled CSS, and the closing sections quantify that.

## Method

Violation counts were collected on 18 July 2026 at commit `28d9a24cf4`, with the plugin at version 2.9.4 in its `strict` configuration (all 21 rules, strictest options), on top of our own `.stylelintrc.json`.
The counts distinguish `packages/css` — the stylesheet consumers install — from `storybook`, which contains hand-written CSS for our documentation site and is not part of any published package.

To reproduce, extend the repository configuration with the strict preset and run Stylelint with the JSON formatter (note that it writes JSON to stderr):

```sh
pnpm exec stylelint --config <config-extending-repo-and-strict> --formatter json '**/*.{css,scss}'
```

Two rules interact with options in a way that affects counts.
Overriding the severity of `no-fixed-sizes` or `require-pure-selectors` without restating their options silently resets those options to defaults: `no-fixed-sizes` then checks ~40 properties instead of strict’s ~90 (8 violations instead of 15), and `require-pure-selectors` loses `strict: true` (15 instead of 78).
All counts below use the strict options.

## Summary

We violate 16 of the 21 rules somewhere; 5 are clean.
Of the 1,991 violations, 86% come from two rules we have deliberately turned off (`require-custom-property-fallback` and `require-at-layer`).
Outside the five disabled rules, 191 violations remain, 167 of them in shipped CSS — and roughly a quarter of those are false positives or deliberate patterns to annotate rather than fix.

The remediation described below has since been carried out in full.
The violation counts in this table record the state at the audit date; the Status column shows the configuration as it now stands: 15 rules at error, 6 off with documented reasons, and no standing warnings.

| Rule                             | packages/css | storybook | Effectiveness caveat                      | Status | Recommendation                                 |
| -------------------------------- | -----------: | --------: | ----------------------------------------- | ------ | ---------------------------------------------- |
| require-custom-property-fallback |         1103 |        45 | flags same-file private properties        | off    | keep off                                       |
| require-at-layer                 |          492 |        82 | —                                         | off    | keep off, revisit as architecture decision     |
| require-pure-selectors           |           49 |        29 | many false positives                      | off    | keep off                                       |
| no-accidental-hover              |           72 |         1 | —                                         | error  | fix, then error                                |
| require-flex-wrap                |           36 |         4 | —                                         | error  | fix (mostly `nowrap`), then error              |
| require-named-grid-lines         |           14 |         3 | mismatch with span-based APIs             | off    | turn off                                       |
| no-fixed-sizes                   |            7 |         8 | cannot resolve tokens                     | error  | annotate, then error                           |
| require-grid-minmax              |           11 |         1 | cannot resolve tokens                     | error  | fix, then error                                |
| require-background-repeat        |            9 |         1 | flags same-element state swaps            | error  | fix 3, annotate rest, then error               |
| require-scrollbar-gutter         |            6 |         2 | flags hidden and horizontal scrollbars    | error  | fix 1, annotate rest, then error               |
| no-user-select-none              |            8 |         0 | cannot resolve tokens                     | error  | annotate (all deliberate), then error          |
| require-overscroll-behavior      |            0 |         2 | —                                         | error  | fix Storybook, then error                      |
| require-focus-visible            |            2 |         0 | —                                         | error  | fix 1, annotate 1, then error                  |
| require-dynamic-viewport-height  |            1 |         1 | flags the fallback of the correct pattern | error  | annotate, fix Storybook, then error            |
| no-list-style-none               |            0 |         1 | cannot see into mixins                    | error  | fix mixins + Storybook, then error             |
| require-prefers-reduced-motion   |            1 |         0 | only recognises the positive pattern      | error  | refactor, then error                           |
| no-mixed-vendor-prefixes         |            0 |         0 | —                                         | error  | keep                                           |
| no-unsafe-will-change            |            0 |         0 | —                                         | error  | keep                                           |
| require-forced-colors-focus      |            0 |         0 | —                                         | error  | keep                                           |
| no-unsafe-clamp-font-size        |            0 |         0 | cannot resolve tokens                     | off    | replaced by `ams/no-unsafe-clamp-font-size`    |
| require-system-font-fallback     |            0 |         0 | cannot resolve tokens                     | off    | replaced by `ams/require-system-font-fallback` |

A recurring theme: seven rules judge declaration _values_, and none of them resolve `var()`.
In a repository where nearly every value is a token reference, those rules only ever see literal values.
That mostly means false _negatives_ (they silently pass tokenised declarations), which is why two of them are replaced by our own token-resolving rules.
The blind spot is smaller than it sounds, though: because our tokens are `rem`- and `clamp()`-based by design, only two tokens hold a `px` value at all — both 1px hairlines for the Progress List connector.

## Rules with a backlog

### no-accidental-hover — 73 (72 shipped)

Requires every `:hover` selector to sit inside `@media (hover: hover)` ([defensivecss.dev/tip/hover-media](https://defensivecss.dev/tip/hover-media/)).
On touch screens, a tap can leave hover styles “stuck” on an element until the next tap elsewhere, which reads as a glitch.

This is our largest genuine backlog, spread over 32 components.
Three patterns:

- Simple feedback on links and buttons: `&:hover { color: … }` in Accordion, Breadcrumb, Calendar, Link, and friends.
- Guarded control hovers: `&:hover:not(:disabled, [aria-disabled="true"])` on Button and the input components, changing box shadows or border colors.
- Compound sibling hovers in Checkbox and Radio, such as `&:hover:not(:disabled) + *` and `&:checked + *:hover .ams-checkbox__rectangle`, where hovering either the control or its label restyles SVG parts.

No selector mixes `:hover` and `:focus` in one list, so wrapping hover rules cannot accidentally remove focus styles.
The repository already reasons about pointer capabilities elsewhere — Image Slider hides its controls under `@media (pointer: coarse)` — so the media query fits house style.

**Approach:** wrap each hover rule in `@media (hover: hover)`.
Mechanical but broad; Chromatic verifies that nothing changes for mouse users.
Then raise the rule to error.

**Impact:** the largest single chunk of the byte cost (72 × ~22 B ≈ 1.6 KB raw, mostly compressed away).
Visitors on touch devices stop seeing stuck hover states; nobody else notices anything.

### require-flex-wrap — 40 (36 shipped)

Requires an explicit `flex-wrap` (or `flex-flow` with a wrap value) on every `display: flex` container.
The default `nowrap` makes content overflow rather than wrap when space runs out, which is the right choice for some containers and a silent bug for others — the rule forces the choice to be visible.

Most of our 36 shipped cases are small icon-plus-label controls where wrapping is undesirable or impossible: Button, Badge, Icon Button, Standalone Link, Pagination links, Checkbox and Radio labels, Error Message.
For these, `flex-wrap: nowrap` documents intent and changes nothing.
Row is the clearest example of nowrap-by-design: wrapping is an explicit opt-in via its `.ams-row--wrap` modifier, so the base must stay `nowrap`.
A handful are genuine judgment calls — toolbar-like rows such as the Calendar and Date Picker headers, the Dialog header, and Image Slider controls — where wrapping on narrow viewports may be the better behaviour.

**Approach:** one pass over all 36 containers, writing `nowrap` for the single-line controls and deciding the toolbar cases individually.
Then raise to error.

**Impact:** ~0.6 KB raw.
Where `nowrap` is written, visitors see nothing; where `wrap` is chosen, narrow-viewport overflow turns into wrapping — a small, visible improvement.

### require-named-grid-lines — 17 (14 shipped)

Wants named lines in every `grid-template-columns`/`rows`, so that placement reads as `grid-column: content` instead of `grid-column: 2`.

The premise does not fit this codebase.
Our grids place children by _span_, not by line number: Grid cells use `grid-column-end: span n` and `grid-column: 1 / -1`, the Calendar and Date Picker use auto-placement into `repeat(7, 1fr)`, and Page uses named _areas_ — a stronger version of what this rule wants.
Line names would add bytes and noise without a single consumer being able to benefit, since the classes are the API, not the grid lines.
The rule also fires on `grid-template-columns: var(--…)` declarations it cannot inspect, and double-reports the same lines as `require-grid-minmax`.

**Approach:** turn the rule off, with this reasoning recorded in the configuration documentation.

### no-fixed-sizes — 15 (7 shipped)

Discourages `px` in size-related properties in favour of relative units, so that sizes scale when users raise their default font size.
This is a value-checking rule: it cannot resolve tokens, so in shipped CSS it only sees the rare literal.

All 7 shipped hits are defensible `px`:

- Dialog’s 1px `border-block-*-width` hairlines exist only in `@media (forced-colors: active)`, as functional separators.
- Visually Hidden’s 1px `block-size`/`inline-size` box is the canonical inclusively-hidden pattern; scaling it serves nobody.
- Page Header’s `translate: -4px 4px` nudges are the geometry of the animated menu icon.
- Skeleton’s margin comes from its text-line-mimicking calculation.

The 8 Storybook hits (mostly the Code sample component) deliberately replicate Storybook’s own pixel-based docs styling.

**Approach:** annotate the 7 shipped sites with `stylelint-disable-next-line` plus a reason — the pattern we already use for `plugin/use-baseline` — and raise to error so future _accidental_ pixels are blocked.
Note that error severity must restate strict’s full property list, or the rule silently narrows to ~40 properties.

**Impact:** none; nothing changes.

### require-grid-minmax — 12 (11 shipped)

Wants `minmax(0, 1fr)` instead of bare `1fr` tracks.
A `1fr` track cannot shrink below its content’s min-content size, so one long unbreakable word — a URL, a reference number — can blow the whole grid out of its container.

The 11 shipped cases include the core Grid mixins (`repeat(var(--ams-grid-column-count), 1fr)` at three breakpoints), the Calendar and Date Picker week grids, Description List, Table of Contents, Page, and Image Slider thumbnails.
The Grid ones matter most: every page layout built on Grid inherits the blowout risk.

**Approach:** mechanical replacement of `1fr` with `minmax(0, 1fr)` at all 11 sites, verified with Chromatic; then error.

**Impact:** ~0.1 KB raw.
Visitors only notice in the failure case this defends against: content that previously pushed a layout sideways now stays inside its column and truncates or scrolls per component design.

### require-background-repeat — 10 (9 shipped)

Requires an explicit `background-repeat` wherever `background-image` is set, because the `repeat` default tiles the image if the box ever outgrows it.

Two patterns, only one of which is real:

- Genuinely missing: the calendar-picker icons of Date Input and Time Input and the cancel icon of Search Field set `background-image` on a pseudo-element without ever declaring `background-repeat`.
- False positives: Select declares `background-repeat: no-repeat` in its base rule, but the rule also flags the `:disabled` and `:hover` rules that merely _swap_ `background-image` on the same element.
  The rule checks per rule block, not per element, so these four can never be fixed without redundant declarations.

**Approach:** add `background-repeat: no-repeat` at the three genuinely missing base declarations; annotate the same-element swap blocks; then error.

**Impact:** ~0.1 KB raw; visitors see nothing unless a future icon change would otherwise have tiled.

### require-scrollbar-gutter — 8 (6 shipped)

Wants `scrollbar-gutter` on scrollable containers, so that the appearance of a classic scrollbar (Windows, or macOS with “always show scrollbars”) does not shift content.

Of the 6 shipped hits, one is genuinely valuable: the Dialog body scrolls vertically when content grows, and `scrollbar-gutter: stable` prevents its content from shifting when that happens.
The rest are marginal or moot: the Image Slider scroller hides its scrollbar entirely (`scrollbar-width: none`), and the Tabs list, Tab Navigation list, and Table are horizontal scrollers, where the property addresses a scrollbar that rarely appears.

**Approach:** add `scrollbar-gutter: stable` to the Dialog body; annotate the others; then error.

**Impact:** ~24 B. Windows visitors stop seeing a subtle content shift when dialog content becomes scrollable.

### no-user-select-none — 8 (8 shipped)

Flags `user-select: none` because disabling text selection usually harms users.

All 8 declarations (4 sites, each with a `-webkit-` twin) are the same deliberate pattern: preventing interaction with _ghost_ elements that are rendered but not meant to be perceived.
Tabs and Tab Navigation render a hidden bold copy of each label to reserve width and avoid layout shift on selection; Page Header renders an invisible duplicate logo link; Visually Hidden prevents copying of screen-reader-only text into the clipboard.
Selecting any of these would put invisible duplicate text on the user’s clipboard.

**Approach:** annotate all four sites with the reasoning; then error, so `user-select: none` on actual content is blocked in future.

**Impact:** none.

### require-overscroll-behavior — 2 (0 shipped)

Wants `overscroll-behavior` on scrollable containers so that reaching the end of an inner scroller does not start scrolling the page behind it.

The shipped CSS is already exemplary: all six scroll containers (Tabs list and panel, Tab Navigation, Dialog body, Image Slider, Table) declare `overscroll-behavior-*: contain` as an annotated progressive enhancement.
Only two Storybook dev-tool containers lack it.

**Approach:** fix the two Storybook cases; then error.

**Impact:** none for design system consumers.

### require-focus-visible — 2 (2 shipped)

Prefers `:focus-visible` over `:focus`, so that focus styling follows the browser’s heuristic for when a focus indication helps (keyboard yes, mouse click usually no).

Both hits need a different treatment:

- `search-field.scss` raises `z-index` on `:focus` so the focus outline is not clipped by the adjacent button.
  Since the raise only matters when the outline shows, `:focus-visible` is the more precise selector; browsers match it on text inputs even for mouse focus, so nothing regresses.
- `input-label-focus.scss` is a deliberate progressive enhancement: it styles on `:focus`, then _undoes_ it via `:focus:not(:focus-visible)`, giving older Safari a focus ring and modern browsers the heuristic.
  The rule cannot recognise this construction.

**Approach:** switch Search Field to `:focus-visible`; annotate the progressive-enhancement helper; then error.

**Impact:** ~8 B; no visible change.

### require-dynamic-viewport-height — 2 (1 shipped)

Flags viewport-height units (`100vh`, `100vb`), which on mobile browsers describe the _largest_ viewport — content sized with them gets cut off while the address bar is visible.
The fix is the dynamic variant (`dvh`), with `vh` only as a fallback for older browsers.

The one shipped hit is that fallback: `page.scss` already declares `min-block-size: 100vh` followed by `min-block-size: 100dvh` — exactly the recommended pattern — and the rule flags the fallback line because it judges declarations in isolation.
The Storybook grid overlay has a genuine static `100vb`.

**Approach:** annotate the fallback line; fix the Storybook overlay; then error.

**Impact:** none; the shipped behaviour is already correct.

### no-list-style-none — 1 (0 shipped, but 13 shipped sites affected)

In Safari, `list-style: none` removes list semantics from the accessibility tree, so VoiceOver no longer announces the list or item count.
Writing `list-style-type: ""` hides the markers while keeping the semantics.

The rule’s single hit is a Storybook component, but that undercounts our exposure: it cannot see into Sass mixins, and both real occurrences live in the `reset-ol`/`reset-ul` mixins in `resets.scss`, which 13 components include — among them genuine content lists such as File List, Link List, Progress List, and the no-marker variants of Ordered and Unordered List.

**Approach:** change both mixins (and the Storybook case) to `list-style-type: ""`; then error.
The rule will keep guarding only literal future uses — the mixin fix is on us, not the linter.

**Impact:** ~65 B compiled.
VoiceOver users in Safari regain list announcements (“list, 5 items”) on marker-less lists.

### require-prefers-reduced-motion — 1 (1 shipped)

Requires transitions and animations of motion properties to sit inside `@media (prefers-reduced-motion: no-preference)`, honouring users who configure their system to reduce motion because animations can trigger vestibular disorders, migraines, or nausea.

The rule is more discerning than expected: it ignores color-only transitions (Switch’s background fade is rightly not flagged) and fires only on motion properties.
Our shipped CSS already honours reduced motion everywhere — Accordion, Table of Contents, and Progress List use the positive pattern the rule recognises.
The single hit, Page Header’s menu icon, uses the equivalent _inverse_ construction: an unconditional transition plus `@media (prefers-reduced-motion) { transition: none }`.
Users experience the same thing; only the rule cannot tell.

**Approach:** refactor Page Header to the positive pattern for consistency with its three siblings; then error.

**Impact:** none; behaviour is identical.

## Rules turned off

### require-custom-property-fallback — 1,148

Wants a fallback value in every `var()`, so that a component still renders reasonably if the token stylesheet fails to load.

We keep this off for three reasons.
First, cost: resolving each of the 1,093 affected `var()` uses in shipped CSS against its actual token value measures 36 KB of added fallbacks — a 26.6% increase of the compiled stylesheet (gzip would soften the transfer, not the duplication).
Second, maintenance: every fallback restates a design decision that the token already owns, leaving two places to change.
Third, accuracy: the rule also flags 17 uses of `--_ams-*` private properties that are defined lines above in the same file.
Our position is that the token stylesheet is a hard dependency of the component stylesheet, documented as such — not something to degrade gracefully without.

### require-at-layer — 574

Wants all styles wrapped in a top-level `@layer`, which gives consumers a clean way to override library styles regardless of specificity.

This is an architecture decision disguised as a lint rule.
Adopting cascade layers changes how every existing consumer’s overrides interact with our styles — unlayered author styles would suddenly beat all of ours, which is the point, but also the breaking change.
It deserves an RFC with migration guidance (and coordination with NL Design System), not a mechanical fix.
Until then the rule stays off; the violation count (574, i.e. every top-level rule) illustrates why a partial fix is meaningless.

### require-pure-selectors — 78

Wants selectors to target only classes and IDs, keeping styles decoupled from markup structure.

The rule is not usable on this codebase in either mode.
In strict mode (as the preset ships), most of its 78 reports are false positives: it flags `> *`, `+ *`, `[aria-expanded="true"] &`, and `.ams-date-input:not(:disabled):invalid` as “element tags”, none of which are.
In non-strict mode 15 remain, still including `> *` and `:nth-of-type(…)` false positives; its genuine finds — `svg`, `img`, `+ label` — are deliberate API surface for a CSS library that consumers apply to their own HTML structure (an `.ams-avatar` must style whichever `img` or `svg` it contains; the input–label pairing _is_ the contract).
Keep off; the false positives are worth reporting upstream.

## Rules we do not violate

Three rules are clean and enforced as errors; whether by accident or on purpose:

- **require-forced-colors-focus** — deliberate.
  The repository has an explicit convention (“never remove focus outlines”) and ships forced-colors work throughout: `LinkText` fills in the Page Header logo, `SelectedItem` backgrounds in Tabs, hairline separators in Dialog.
  The failure this rule guards against — a box-shadow-only focus style that Windows High Contrast erases — has been designed out.
- **no-mixed-vendor-prefixes** — deliberate by architecture.
  We prefix at the _declaration_ level (`-webkit-user-select` beside `user-select`, each annotated), and never group differently-prefixed _selectors_ into one rule, which is the pattern that makes browsers drop the whole block.
- **no-unsafe-will-change** — aligned rather than deliberate.
  There is no `will-change` anywhere; nobody decided against it so much as never needed it.
  The “make the simplest change” convention would resist introducing it, so the rule formalises an existing instinct.

Two more rules report zero but prove nothing, because they cannot resolve `var()` and every relevant declaration here is tokenised:

- **no-unsafe-clamp-font-size** — clean _in fact_, but verified only by our replacement rule `ams/no-unsafe-clamp-font-size`, which resolves token chains and confirms all four fluid font-size tokens scale by 1.11–1.50×, well under the 2.5× limit that would endanger 200% text resize (WCAG 1.4.4).
- **require-system-font-fallback** — likewise: `ams/require-system-font-fallback` resolves every `font-family` through its alias chain to `'Amsterdam Sans', Arial, sans-serif` and requires the generic family to come last.

Both upstream rules stay off to avoid double-reporting on literal values; the `ams/` rules are the enforcement.

## What this does to the bundle

Baseline: the compiled `packages/css` stylesheet is 135,452 B raw, 15,907 B gzipped; the token stylesheet adds 89,163 B raw, 10,218 B gzipped.
Storybook CSS ships to nobody.

The complete remediation set above — 72 hover media queries, 36 flex-wrap declarations, 11 minmax substitutions, 3 background-repeats, 1 scrollbar-gutter, 13 compiled list-style changes, and the focus-visible swap — measures **+2,682 B raw (+2.0%)** and, because the additions are highly repetitive, approximately **+86 B gzipped (+0.5%)** when appended to the real stylesheet.
Interleaving the additions where they actually belong will compress slightly worse than this synthetic measurement, but the order of magnitude stands: roughly a tenth of a kilobyte on the wire.
Measured after the remediation landed: **+2,571 B raw (+1.9%)** and **+271 B gzipped (+1.7%)** — the raw estimate held, and the interleaving penalty on compression stayed within a quarter of a kilobyte.

For contrast, the one rule that would be expensive is off: `require-custom-property-fallback` would add 36 KB raw (+26.6%).

## What visitors would notice

Almost nothing on day one — and that is the point: most of these rules guard against futures rather than fixing presents.
By audience:

- **Touch and hybrid device users** stop seeing hover styles stick to tapped controls (73 fixes; the one visible behaviour change).
- **VoiceOver users in Safari** regain list semantics on marker-less lists such as File List and Progress List.
- **Windows users with classic scrollbars** lose a subtle content shift when Dialog content grows scrollable.
- **Users who enlarge text or zoom** are already served (fluid type ratios verified at 1.11–1.50×) and stay served by the error-level guards.
- **Users with reduced-motion preferences** are already honoured everywhere; one component’s construction changes without changing behaviour.
- **Keyboard users** see no change; focus indication was already sound, including in forced-colors mode.
- **Everyone**, in rare failure scenarios that no longer occur: a long reference number can no longer blow a Grid-based layout out of its container, and a resized icon can no longer tile.

## Suggested sequencing

1. **Safety adds, no visible change** — background-repeat (3), scrollbar-gutter (1), grid-minmax (11), Storybook overscroll and viewport fixes, list-style mixins.
   One mechanical PR, Chromatic-verified.
2. **Flex-wrap intent pass** — 36 explicit declarations, mostly `nowrap`; the handful of toolbar judgment calls reviewed individually.
3. **Hover media queries** — the 72-site wrap, as its own PR for reviewability.
4. **Annotations** — `stylelint-disable-next-line` with reasons on the ~30 deliberate patterns and false positives documented above, each in the same PR as the fix that makes its rule clean.
5. **Ratchet** — as each rule’s backlog reaches zero, raise it from warning to error in `.stylelintrc.json` by removing its warning-severity override, which also restores strict’s options where the override had narrowed them.
   End state: 15 rules at error, 6 off with documented reasons, no standing warnings.
6. **Separately** — `require-named-grid-lines` is turned off as recommended above; cascade layers remain the architecture discussion they are.
