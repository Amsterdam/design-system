# Tests

We test our components to ensure their quality and prevent unintended changes.

## Unit test

| Method    | Description                                                         |
| :-------- | :------------------------------------------------------------------ |
| Input     | Test instructions.                                                  |
| Output    | Pass/fail on the HTML-output of the test.                           |
| Principle | Check specific properties of a component.                           |
| Example   | Does the button still have className `.button-primary` as expected? |

Unit tests are written using [Jest DOM](https://github.com/testing-library/jest-dom). These tests are run on every [pull request](https://github.com/Amsterdam/design-system/blob/develop/.github/workflows/lint-test.yml).
All components should have its own unit tests, and they are in a separate file `component.test.tsx`.

## Interaction test

| Method    | Description                                                |
| :-------- | :--------------------------------------------------------- |
| Input     | User interactions.                                         |
| Output    | Functional behaviour.                                      |
| Principle | Custom functionality produces the same expected behaviour. |
| Example   | When opening a accordion section, is the content visible.  |

Not all components have interactions tests, if a component has custom functionality it should have an interaction test.
Interaction tests are located within the test story, `component.test.stories.tsx`, within the [play](https://storybook.js.org/docs/writing-stories/play-function) option of the story.

## Visual test

| Method    | Description                                   |
| :-------- | :-------------------------------------------- |
| Input     | Variant of a component.                       |
| Output    | Visual appearance of the component.           |
| Principle | Find unintended changes to the visual output. |
| Example   | Does the button still has a border?           |

All components should have their own visual tests.
Visual tests are located within the test story, `component.test.stories.tsx`, which should render all variants of the component.

## Accessibility test

| Method    | Description                                                                          |
| :-------- | :----------------------------------------------------------------------------------- |
| Input     | WCAG Rules.                                                                          |
| Output    | Visual render of the component where the rules are checked on.                       |
| Principle | Make sure that there are no changes which worsen the accessibility of the component. |
| Example   | Is the contrast still high enough?                                                   |

Accessibility tests are not configured on component-basis. The accessibility rules where the component should be tested on are configured Storybook wide. These are configured in `.storybook/preview.ts`.

## How we test

With each pull request there are two actions:

1. [Unit Tests](https://github.com/Amsterdam/design-system/actions/workflows/lint-test.yml)
2. [Interaction, Visual, Accessibility tests](https://github.com/Amsterdam/design-system/actions/workflows/chromatic.yml)

The interaction, visual, and accessibility tests are run by [Chromatic](https://chromatic.com). Chromatic runs, visual, interaction and accessibility tests on each story labeled "Test" If any changes are detected, they must be approved before merging the pull request. You can accept changes directly through the Chromatic dashboard. Once the changes are accepted, the pull request can be merged.

These actions are required to succeed before merging a pull-request.

## How do we run the tests?

Unit tests are run by the [lint-test workflow](https://github.com/Amsterdam/design-system/blob/develop/.github/workflows/lint-test.yml). Interaction, visual, and accessibility tests are tested by [Chromatic](https://www.chromatic.com/docs/).

### Chromatic configuration

Chromatic uses two tokens to run: a project ID and a [secret token](https://www.chromatic.com/manage?appId=68db9df886b46f139748c074&view=configure). The project ID is public within the [repo](https://github.com/Amsterdam/design-system/blob/develop/storybook/chromatic.config.json), while the secret token is used in the [workflow](https://github.com/Amsterdam/design-system/blob/develop/.github/workflows/chromatic.yml).

The secret is configured in two places: [within the repo secrets](https://github.com/Amsterdam/design-system/settings/secrets/actions) and the Dependabot secrets. Since Dependabot does not have default access to repo secrets, separate secrets for Dependabot are configured on the [Dependabot secrets configuration page](https://github.com/Amsterdam/design-system/settings/secrets/dependabot).

Chromatic also uses a [GitHub App](https://github.com/apps/chromatic-com) to integrate with the repository. This app was installed by the enablement team, which is also part of our team within Chromatic. Occasionally, the enablement team may need to refresh the connection.

On every pull request, the [workflow](https://github.com/Amsterdam/design-system/blob/develop/.github/workflows/chromatic.yml) builds Storybook and publishes it to Chromatic, where the tests are run. The test status is displayed in the pull request through the app integration.

#### How to get access

Ask a team member to [add you to the Chromatic Team](https://www.chromatic.com/docs/collaborators/).
