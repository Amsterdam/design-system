---
name: write-unit-tests
description: Write the unit tests of a new component or subcomponent in the Amsterdam Design System. Use this when a component is added, when a component has no test file yet, or when asked to complete the tests of a component.
license: CC0-1.0
---

<!-- @license CC0-1.0 -->

# Writing the unit tests of a new component

Our guide is [documentation/unit-tests.md](../../../documentation/unit-tests.md).
Read it in full, then follow [How to set up the tests of a new component](../../../documentation/unit-tests.md#how-to-set-up-the-tests-of-a-new-component).
This file adds only what an agent gets wrong.

- Start from `pnpm run plop` and its five baseline tests.
  Never write the test file by hand, and never delete one of the five.
- Read the source before you write any test.
  Decide which characteristics apply from the source, not from the props table in Storybook or from the tests of another component.
- Write the characteristics in the order of the guide, even when the source declares the props in another order.
- Use the canonical title where the guide gives one.
  Do not invent a new wording for a test that the guide already names.
- A test of a subcomponent lives in the file of that subcomponent, and renders it through its parent.
- Do not add a test that only raises coverage.
  Each test checks a behaviour that a consumer can see.
- Do not commit `it.skip`.
  Write `it.todo` with a comment that says why.
- Finish by running `pnpm --filter @amsterdam/design-system-react test`, and read the new file from top to bottom.
