---
name: code-review
description: Review a pull request or a diff in the Amsterdam Design System. Use this whenever reviewing changes in this repository, to know what to flag, what to leave to the linters, how to rank findings, and how to phrase a review comment.
license: CC0-1.0
---

<!-- @license CC0-1.0 -->

# Reviewing code in the Amsterdam Design System

This is a component **library**, not an application.
A change is only correct if it stays generic, accessible, and reusable across any Amsterdam city service.

## Before you comment

1. Read the root [AGENTS.md](../../../AGENTS.md), then the `AGENTS.md` of every package the diff touches.
   The per-package files hold rules the root file does not repeat.

| Changed path                     | Also read                                                          |
| -------------------------------- | ------------------------------------------------------------------ |
| `**`                             | [AGENTS.md](../../../AGENTS.md)                                    |
| `packages-proprietary/tokens/**` | [tokens/AGENTS.md](../../../packages-proprietary/tokens/AGENTS.md) |
| `packages/css/**`                | [css/AGENTS.md](../../../packages/css/AGENTS.md)                   |
| `packages/react/**`              | [react/AGENTS.md](../../../packages/react/AGENTS.md)               |
| `storybook/**`                   | [storybook/AGENTS.md](../../../storybook/AGENTS.md)                |

2. Check a component's real API before claiming anything about it.
   Read its source and its docs page in the head branch, such as `packages/react/src/<Name>/<Name>.tsx` and `storybook/src/components/<Name>/<Name>.docs.mdx`: they hold both the API the branch consumes and the API it introduces.
   The design system MCP server, through `docs-list` and `docs-show`, can find components and stories faster: the hosted one knows the released API only, and a local one serves the working branch while `pnpm run watch:storybook` runs.
   Use it if you have it, but the source in the branch decides.
   If you cannot verify a claim, say so instead of asserting it: a confidently wrong review comment costs the author more time than no comment at all.
3. Read the pull request title and description for the author's stated intent, then check it against the diff.
   In practice the description trails the code, and a later push can leave it stale, so the diff is the source of truth.
   Say so when they disagree.

## Rank findings before you write them

Report in this order, and lead with the most serious:

1. **Accessibility and correctness** — WCAG 2.2 Level AA failures, broken behaviour, wrong ARIA, lost focus indicators, reading order, contrast.
2. **Public API breakage** — a removed or renamed prop, CSS class, or token, without the PR title carrying a `!`.
3. **Convention violations** — the "never do" rules in the `AGENTS.md` files, the file location and naming tables, token usage.
4. **Missing follow-through** — tests, stories, docs, or `index.*` exports that a behaviour or API change should have brought with it.
5. **Everything else** — readability, naming, simplification.

Stop at the level where you have something real to say.
A review of five genuine accessibility findings is worth more than twenty findings padded with preferences.

## What to look for

Read the root `AGENTS.md` and the `AGENTS.md` of every package the diff touches, using the table above, and flag any break of their rules.
Read [documentation/writing.md](../../../documentation/writing.md) and flag prose that breaks its rules.

## Leave these alone

Tooling already owns them, and repeating tooling in prose only buries your real findings:

- Formatting, quote style, line width, and import order — Prettier and ESLint decide these.
  One sentence per line is the exception: no tool enforces it, so it stays reportable.
- Anything Stylelint or ESLint would fail the build on.
  Say "the linter will catch this" at most once, if at all.
- The pull request title format — the "Check PR title" workflow validates it.
- Test and build failures that CI already reports.
- Praise-only comments and summaries that restate the diff.

## How to write the comment

Our review culture is set out in [documentation/code-reviews.md](../../../documentation/code-reviews.md); it applies to agents too.

- One comment per issue, anchored to the line it concerns.
- Ask a question only when either answer would be fine: a preference, a judgement call, or a trade-off the author may have weighed differently.
  “Would it be okay to move this into a helper? The stories repeat the same three lines.”
- Write a bug, a regression, a broken contract, or a clearly bad choice as a plain statement, not a question.
  Say what breaks, in which situation, and what the fix is.
  “Keep this alias pointing at the `vi-medium` token. It now skips that token, so an app that overrides `--ams-dialog-header-vi-medium-padding-block` sees no change.”
  Asked as a question, a required fix reads like an optional preference.
  Stay courteous: direct is not harsh, and the comment still says why it matters.
- Give a concrete fix as a GitHub suggestion block whenever the change is a line or two.
- Say why it matters — which rule, which WCAG criterion, which convention — and link to the file that states it.
- Mark your own confidence when you are unsure.
  "I could not verify this against the docs" is a useful sentence.

## Never

- **Never approve Chromatic visual changes.**
  Visual approval is a human responsibility.
- **Never approve a pull request** on a maintainer's behalf.
- **Never resolve a review thread.**
  In this repository the pull request author checks and resolves AI-generated comments.
- **Never open a new pull request or push a fix** as part of a review unless you were asked to.

Before calling a review complete, cross-check the change against [documentation/definition-of-done.md](../../../documentation/definition-of-done.md).
