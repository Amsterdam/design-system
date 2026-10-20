---
name: pull-request
description: Write the title and description of a pull request in the Amsterdam Design System. Use this when opening a pull request, or when asked to draft, rewrite, or check a PR title or description in this repository.
license: CC0-1.0
---

<!-- @license CC0-1.0 -->

# Writing a pull request

Our pull request titles are not throwaway text.
Squash merging turns the title into the commit message, Release Please reads it to decide the release type, and the changelog and release notes quote it verbatim.
Write it for the person who reads the changelog months from now, not for the reviewer who already knows the branch.
The release mechanics behind this are in [documentation/publishing.md](../../../documentation/publishing.md#conventional-commits).

## The title

```text
<type>(<scope>)<!>: <Subject>
```

### Type

Exactly three types are valid, and the "Check PR title" workflow fails the pull request on anything else:

| Type    | Release | Use for                                                                                                                                  |
| ------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `feat`  | minor   | A new function, or an extension of an existing one.                                                                                      |
| `fix`   | patch   | A change that should reach consumers: bug fixes, refactors, regular dependency updates, documentation _about components_.                |
| `chore` | none    | A change with no consumer-visible impact: development dependencies, configuration, tooling, documentation that is not about a component. |

Append `!` for a breaking change — after the scope, before the colon — for a major release.

**Never use** `docs`, `refactor`, `test`, `ci`, `style`, `build`, `perf`, or `revert`.
They are part of the wider Conventional Commits vocabulary but not of ours, and CI rejects them.
A documentation change is `chore` unless it documents a component, in which case it is `fix`.

The deciding question for `chore` versus `fix` is not how large the change is, but whether someone installing the package would notice.

This three-type restriction is for the pull request title alone: it is what Release Please reads and what becomes the squash commit on `develop`.
A commit inside your branch is free to use any Conventional Commits type, as [commit-message/SKILL.md](../commit-message/SKILL.md) explains.

### Scope

The scope is optional, and goes in parentheses.
Which one to pick and how to spell it is in [publishing.md](../../../documentation/publishing.md#adding-a-scope).
Nothing enforces it: the "Check PR title" workflow validates the type only.
A component keeps the spaces of its name, as in `fix(Table of Contents)`.

### Subject

Write it as [publishing.md](../../../documentation/publishing.md#writing-the-subject) sets out, with its examples.
Two things agents get wrong:

- Repeating the scope: `fix(Avatar): Correct the Avatar aspect ratio` wastes the reader's first three words.
- Describing the mechanics: "Add a CSS background-color declaration" repeats the diff, where "Show a placeholder background while the image loads" says what changed.

## The description

Follow [.github/pull_request_template.md](../../../.github/pull_request_template.md).
Keep every heading it defines, in its order.
Write the text itself as [the writing skill](../writing/SKILL.md) prescribes.
A description is not documentation, so it does not go one sentence per line.

- **Links** — the documentation pages and stories in the branch deploy that the change affects, related issues, and discussions.
  Link them before the deploy exists, because its address follows from the branch name, as [the workflows README](../../../.github/workflows/README.md) describes: drop the type prefix up to the first slash, and put `demo-` in its place.
  Branch `feat/DES-1959-file-component` deploys to `https://designsystem.amsterdam/demo-DES-1959-file-component/`, so its File Card page is `https://designsystem.amsterdam/demo-DES-1959-file-component/?path=/docs/components-forms-file-card--docs`.
  Take the `path` from the Storybook title: `/docs/<title>--docs` for a page and `/story/<title>--<story>` for a story, both in kebab case.
  Never invent any other link, and never fabricate an issue identifier; take it from the branch name if it is there.
- **What** — the changes, as a short list.
  The reviewer can read the diff; give them the shape of it.
- **Why** — why the change is necessary.
  If the branch name carries a task ID, the backlog item holds the full context, so stay brief.
- **How** — the approach and the key considerations.
  This is where alternatives you rejected, deliberate omissions, and anything unusual belong.
  Mention what you left out of scope, and say so plainly.
  If GitHub Copilot wrote or edited part of the change, say so here with "GitHub Copilot wrote or edited part of this change.", as the [GitHub Copilot usage rules](https://github.com/Amsterdam/development-standards/blob/main/internal/github-copilot.md) require.
  The rules ask for no more than that, so there is no need to list the parts it touched.
- **Checklist** — remove the items the change has no surface for, and tick only what is done.
  A `chore` often needs none of the test, documentation, story, export, Chromatic, or screen reader items.
  A `feat` or `fix` without a visual change drops Chromatic, and one that changes no markup, ARIA, or behaviour drops the screen reader tests.
  Tick the Chromatic item only after `/chromatic test` has passed, and leave the screen reader items to the person who ran them.
  An unticked box is a useful signal; a wrongly ticked one is a false one.
- **Additional notes** — steps to reproduce, test data, and the parts where you specifically want feedback.

Where the diff is unremarkable — a dependency bump, a typo — a short description is the right description.
Do not pad the template's sections to look thorough.

## Never

- Never dress the GitHub Copilot disclosure up as a footer or a `Co-Authored-By` trailer in the description; a sentence under **How** is what the rules ask for.
- Never claim a test, story, or documentation update that is not in the diff.
- Never describe intent you cannot see in the changes.
