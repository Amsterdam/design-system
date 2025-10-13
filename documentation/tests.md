# How we test

With each pull request, a [GitHub Action](https://github.com/Amsterdam/design-system/actions/workflows/chromatic.yml) generates a new build of Storybook, which is then published to [Chromatic](https://chromatic.com). Chromatic runs, visual, interaction and accessibility tests on each story labeled "Test" If any changes are detected, they must be approved before merging the pull request. You can accept changes directly through the Chromatic dashboard. Once the changes are accepted, the pull request can be merged.

Unit tests are run within a separate [GitHub Action](https://github.com/Amsterdam/design-system/actions/workflows/lint-test.yml).

## Why we test our components

We test our components to prevent unintended changes that were not the focus of the original change.

## What kind of tests do we use?

The tests we use depend on the specific component, and we only test the functionality that we've written ourselves.

| Test                                                               | When to use                                                               |
| :----------------------------------------------------------------- | :------------------------------------------------------------------------ |
| [Unit test](https://testing-library.com/docs/guiding-principles)   | Is the HTML output as expected? Did the output change with each property? |
| [Interaction test](https://www.chromatic.com/docs/interactions/)   | When using Javascript for custom interactivity, does it still work?       |
| [Visual test](https://www.chromatic.com/docs/visual/)              | Is the visual output the same as before?                                  |
| [Accessibility test](https://www.chromatic.com/docs/interactions/) | Did anything change to the accessibility of the component?                |

## How are the tests configured?

Each component has two story files:

1. `component.stories.tsx` - The default component story, visible within Storybook.
2. `component.test.stories.tsx` - This file only contains story's we test. This story should contain all variations of the component.

This means we are not testing every story, to prevent going over the snapshot limit within Chromatic.
Within `component.test.stories.tsx`, the tests can be set up with [`@storybook/test`](https://storybook.js.org/docs/writing-tests/interaction-testing). We use the [Pseudo States](https://storybook.js.org/addons/storybook-addon-pseudo-states) integration to test the different states.

The test stories are hidden from the component documentation within Storybook.

## How to get access

Ask a team member to [add you to the Chromatic Team](https://www.chromatic.com/docs/collaborators/).
