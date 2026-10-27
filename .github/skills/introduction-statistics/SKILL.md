---
name: introduction-statistics
description: Recount and update the band of six figures — components, icons, design tokens, templates, modes and tests — at the top of the Storybook Introduction home page. Use whenever asked to update, refresh, check or verify those statistics, whenever a release is being prepared, and after work that adds a component, a page template, a mode or a body of tokens. Also use before reviewing someone else's change to that band, since every figure follows a counting rule that nothing in the repository enforces.
license: CC0-1.0
---

<!-- @license CC0-1.0 -->

# Introduction statistics

Read `documentation/introduction-statistics.md` and follow it.
It is the reference, kept with the repository and shared by everyone working on it: what each of the six figures counts, the command that produces it, how it rounds, and the five ways a plausible-looking recount turns out to be wrong.
This file adds only what is specific to working here.

## Working method

Recount all six, even when only one of them is expected to have moved.
The band is read as a single claim, so a figure left behind makes the others look invented — the July 2026 recount was prompted by one new component and ended up moving tokens, templates and tests as well.

Take the figures from the repository rather than from anything you have already been given.
An earlier statistics band, a release summary, a draft PR description: each of those is a snapshot of a tree that has since moved, and lifting a number from one is how a stale figure survives a recount.

Report the arithmetic next to each result — the raw count, the rounding, and the value it replaces.
The figures are unverifiable once they are on the page, so the working is the only thing that lets a reviewer check them without running everything again.

## How to verify

The unit suite is the slow step and it still takes about fifteen seconds, so run it rather than estimating from a grep:

```bash
pnpm --filter @amsterdam/design-system-react exec vitest run
```

The shell's working directory can reset between commands, so use absolute paths or `cd` at the start of each one.

## What not to do

- Do not count before fetching. Every figure is a claim about `develop`, and a stale tree gives six wrong answers that all look internally consistent.
- Do not take design tokens from `dist/`. The build emits each token once per format and again per mode, so the output measures the build rather than the system.
- Do not round up to reach a friendlier number. The trailing `+` is the whole promise; rounding down is what keeps it true.
- Do not rescue a figure that has fallen. If the rule gives a smaller number than the page claims, report the smaller number and say it fell — widening the definition until the old figure survives is how the band stops meaning anything.
