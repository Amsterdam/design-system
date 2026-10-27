---
name: release-notes
description: Write or update the Storybook Release notes page for a design system release. Use when asked to write release notes, summarise a release, add a release to the Release notes page, or document what shipped in a given release (past or future).
license: CC0-1.0
---

<!-- @license CC0-1.0 -->

# Release notes

Read `documentation/release-notes.md` and follow it.
It is the reference, kept with the repository and shared by everyone working on it: audience, structure, the five headings, voice, how each source lies, and the thirteen ways a finished-looking draft turns out to be wrong.
This file adds only what is specific to working here.

## Working method

Establish the commit range first and work from it.
Never start from a summary you already have to hand — a Slack post, a draft, an earlier release's notes — because those are cumulative and lifting one silently pulls in changes from other releases.

A release can run to 65 commits.
Reading each diff, reconciling the changelogs in both directions, and verifying the links are independent jobs, so split them over slices of the range and run them in parallel rather than serially.

Then run a completeness check over the merged inventory, re-checking it against the range rather than against the drafts.
It earns its keep: on 12 July 2026 it correctly moved two items out of Improved and into Adjusted, which the first pass had read as improvements because they were improvements from our side.

## How to verify

Build Storybook and run the link check in the documentation file, rather than starting a preview server:

```bash
pnpm --filter=storybook run build
```

Clean up afterwards with `pnpm --filter=storybook run clean:dist`.

The shell's working directory can reset between commands, so use absolute paths or `cd` at the start of each one.

## What not to do

- Do not report a changelog gap without confirming the change shipped. The documentation file gives three commands for that; a gap you cannot confirm is a reading error, and it is the most valuable claim on the page when it is real.
- Do not write the undercurrent out loud. An opening line about change being healthy is the one thing guaranteed not to convince anybody. Let the deprecation dates and the Adjusted section carry it.
- Do not describe the repository at HEAD. Read the tree at the release commit with `git show <release-commit>:<path>`, or you will announce deprecations that had not happened yet.
