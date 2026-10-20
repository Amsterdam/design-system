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

### Scope

The scope is optional, and goes in parentheses.
Which one to pick and how to spell it is in [publishing.md](../../../documentation/publishing.md#adding-a-scope).
Nothing enforces it: the "Check PR title" workflow validates the type only.
A component keeps the spaces of its name, as in `fix(Table of Contents)`.

### Subject

- English, no jargon, understandable to someone who did not read the code.
- Start with a capital letter, in the imperative mood: "Correct the aspect ratio for the image", "Only style a list that is directly nested in a list item".
- No full stop at the end.
- Do not repeat the scope in the subject.
  `fix(Avatar): Correct the Avatar aspect ratio` wastes the reader's first three words.
- Describe the outcome, not the mechanics.
  "Show a placeholder background while the image loads" beats "Add a CSS background-color declaration".
- Keep it to one line; most of ours stay under 80 characters.

### Examples

```text
fix(Avatar): Correct the aspect ratio for the image
feat(Modal Dialog): Add Modal Dialog component and repurpose Dialog for short messages
fix(Ordered List, Unordered List): Only style a list that is directly nested in a list item
feat(Progress List)!: Make collapsing and expanding steps optional
chore(docs): Clarify what the Baseline linter cannot check in token values
chore(deps): Install minor updates
```

## The description

Follow [.github/pull_request_template.md](../../pull_request_template.md).
Keep every heading it defines, in its order, and keep the checklist.
Write the text itself as [the writing skill](../writing/SKILL.md) prescribes.
A description is not documentation, so it does not go one sentence per line.

- **Links** — documentation pages, the story in the branch deploy, related issues or discussions.
  Leave the section's placeholder in place rather than inventing a link you have not seen.
  Never fabricate a Jira identifier; take it from the branch name if it is there.
- **What** — the changes, as a short list.
  The reviewer can read the diff; give them the shape of it.
- **Why** — why the change is necessary.
  If the branch name carries a task ID, the backlog item holds the full context, so stay brief.
- **How** — the approach and the key considerations.
  This is where alternatives you rejected, deliberate omissions, and anything unusual belong.
  Mention what you left out of scope, and say so plainly.
  If GitHub Copilot wrote or edited part of the change, say so here with "GitHub Copilot wrote or edited part of this change.", as the [GitHub Copilot usage rules](https://github.com/Amsterdam/development-standards/blob/main/internal/github-copilot.md) require.
  The rules ask for no more than that, so there is no need to list the parts it touched.
- **Checklist** — tick only what is genuinely done or genuinely not applicable.
  An unticked box is a useful signal; a wrongly ticked one is a false one.
  Do not tick the Chromatic box before `/chromatic test` has run and passed, unless the diff has no visual surface at all.
- **Additional notes** — steps to reproduce, test data, and the parts where you specifically want feedback.

Where the diff is unremarkable — a dependency bump, a typo — a short description is the right description.
Do not pad the template's sections to look thorough.

## Never

- Never dress the GitHub Copilot disclosure up as a footer or a `Co-Authored-By` trailer in the description; a sentence under **How** is what the rules ask for.
- Never claim a test, story, or documentation update that is not in the diff.
- Never describe intent you cannot see in the changes.
