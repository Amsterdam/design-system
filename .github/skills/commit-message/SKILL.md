---
name: commit-message
description: Write a commit message for a commit inside a working branch in the Amsterdam Design System. Use this when committing on a branch, and to know why the three types of a pull request title do not apply to it.
license: CC0-1.0
---

<!-- @license CC0-1.0 -->

# Writing a commit message

Our conventions are in [documentation/git.md](../../../documentation/git.md#describe-each-commit).
Read them there.
This file adds only what an agent gets wrong.

- The restriction to `feat`, `fix`, and `chore` belongs to the pull request title, which the [pull-request skill](../pull-request/SKILL.md) covers.
  A commit inside a branch takes any Conventional Commits type.
- Don't repeat the scope of the pull request in every commit: name the part the commit changes.
  In a branch about Data List, write `feat(CSS): …`, not `feat(Data List): …`.
- Add the [Copilot trailer](../../../documentation/git.md#disclose-github-copilot) only when GitHub Copilot wrote or edited part of the commit, never by assumption.
- One commit changes one thing.
  Split a commit that carries a fix and a rename, so the branch reads as steps.
- A commit body is prose, so [the writing skill](../writing/SKILL.md) applies to it.
  It wraps to a width, though, where our documentation goes one sentence per line.
