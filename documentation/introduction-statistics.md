<!-- @license CC0-1.0 -->

# Introduction statistics

The Storybook home page opens with a band of six figures: components, icons, design tokens, templates, modes and tests.
They live in the `InlineList` near the top of [storybook/src/docs/introduction.docs.mdx](../storybook/src/docs/introduction.docs.mdx).

The band is a claim about the size of the design system, so each figure needs a rule that someone else can apply and arrive at the same number.
This describes those rules, the commands that produce them, and the places where counting goes wrong.

Count on an up-to-date `develop`, unless a branch's own work is what the figures are meant to announce.
Fetch first: a figure counted against a stale tree is wrong in a way nothing later will catch.

## What each figure counts

### Components

The distinct root directories re-exported from `packages/react/src/index.ts`.

```bash
grep -oE "from '\./[A-Z][A-Za-z]+'" packages/react/src/index.ts | sort -u | wc -l
```

Exported, not present.
A directory can exist without being part of the public API — `ComboBox` was in that position in July 2026 — and the figure claims what someone installing the package can use.

### Icons

The outlined icons in `packages-proprietary/react-icons/src`: every `.tsx` file except the `*Fill*` variants.

```bash
find packages-proprietary/react-icons/src -name '*.tsx' | grep -iv index | wc -l
find packages-proprietary/react-icons/src -name '*.tsx' | grep -iE 'fill' | wc -l
```

Subtract the second from the first.
A filled icon is the same icon in another weight rather than another thing to reach for, so counting both would inflate the figure by more than half.

### Design tokens

The `$value` leaves under the three token source directories.

```bash
grep -rho '"\$value"' \
  packages-proprietary/tokens/src/brand \
  packages-proprietary/tokens/src/common \
  packages-proprietary/tokens/src/components | wc -l
```

Count the source, not `dist`.
The build emits a token several times over — once per format, and again per mode — so a figure taken from the output measures the build rather than the system.

### Templates

The page stories under `storybook/src/pages`, counted individually.

```bash
grep -rhcE "^export const [A-Z]" storybook/src/pages --include="*.stories.tsx" | paste -sd+ - | bc
```

Every story counts, not every directory.
A page template with five stories offers five layouts to start from, which is what the figure is telling people.

### Modes

The distinct modes, taken from `themeNames` in `storybook/config/themes.ts`.

That list holds more names than there are modes, because Lo-fi combines with each density rather than sitting beside them: four names — Spacious, Spacious Lo-fi, Compact, Compact Lo-fi — describe three modes.
Read the axes, not the length of the array.

### Tests

The React unit suite plus the stories Chromatic snapshots.

Run the suite rather than counting it, and add the skipped cases to the passing ones:

```bash
pnpm --filter @amsterdam/design-system-react exec vitest run
```

For the visual side, read `onlyStoryNames` in `storybook/chromatic.config.json` and count what it matches.
The patterns have grown over time — components first, then pages, utilities and modes — so read the file each time instead of reusing the last set.
Two rules operate side by side: for components, utilities and modes only the story named `Test` is captured, while under `Pages/` every story is.

## Rounding

Components, templates and modes are exact.

Icons round down to the nearest ten, and design tokens and tests to the nearest hundred, each written with a trailing `+`.
Rounding down is what makes the `+` true, so a figure never rounds up even when it is a handful short.

## Where counting goes wrong

**Grepping for `it(` undercounts the unit tests.**
In July 2026 the grep returned 1165 against a suite of 1310, and in August 1259 against 1414 — a gap of roughly a tenth, in the direction that makes the figure look safe.
Run the suite.

**`src/_components` holds Test stories too.**
Seventeen of them are titled `Components/Docs/*`, so they match the Chromatic pattern for components while sitting nowhere near `src/components`.
Counting only `src/components` loses them.

**Snapshots are not tests.**
Chromatic captures more than one snapshot per story, and the multiplier lives in its project settings rather than in this repository.
The figure counts tests.

**A figure can fall.**
Tests dropped from `1500+` to `1300+` in July 2026 when the rule above was first applied to a claim that predated it.
Report the number the rule gives and say that it fell, rather than reaching for a wider definition that rescues the old one.

**A recount can be undone by a merge.**
That same `1300+` returned to `1500+` in [#2797](https://github.com/Amsterdam/design-system/pull/2797), which had branched before the recount landed.
Check what the figures were on `develop` before assuming the page is simply out of date.

## When to recount

The figures do not update themselves, and every one of them moves.
Recount when a release is being prepared, when the page is being edited for another reason, and after work that adds a component, a page template, a mode or a body of tokens.
