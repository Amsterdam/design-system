---
name: sync-unit-tests
description: Keep the unit tests of an existing component in step with a change to it in the Amsterdam Design System. Use this when a component gains, loses, renames or changes a prop, a default, a subcomponent or a root element, and when asked to check or tidy the tests of a component.
license: CC0-1.0
---

<!-- @license CC0-1.0 -->

# Keeping unit tests in step with a component

Our guide is [documentation/unit-tests.md](../../../documentation/unit-tests.md).
Read it in full, then follow [How to keep the tests in step with a component](../../../documentation/unit-tests.md#how-to-keep-the-tests-in-step-with-a-component).
This file adds only what an agent gets wrong.

- Change the tests in the same commit as the component.
  Do not leave them for a later commit.
- Look at the whole test file, not only at the test you expect to change.
  A renamed or removed prop also appears in titles and set-up elsewhere in the file.
- Put a new test after the tests of the characteristics before it in the guide.
  Do not append it to the end of the file.
- When you touch a file that breaks the guide, such as the five baseline tests not being first, fix that in a separate commit.
  Do not mix it into the commit of the change.
- A test that fails after your change is not always wrong.
  Decide whether the behaviour changed on purpose before you edit the test.
- Never lower coverage to make a change pass.
  The unit tests must cover 100% of the React package.
- Finish by running `pnpm --filter @amsterdam/design-system-react test`.
