<!-- @license CC0-1.0 -->

# Storybook guidelines

We use Storybook 7 to display all components and allow interaction with them.

We publish each merge to the `main` branch to [amsterdam.github.io/design-system](https://amsterdam.github.io/design-system/).

## Structure

We write both docs and stories for each component.
The docs display:

1. The contents of the component’s `README.md` file.
2. The primary story for the component.
3. The controls for the component, which displays all args for the component.
4. A canvas for every other story, each with an introduction.

We write our documentation in English, the stories are Dutch.

## Best practices for controls

1. For props offering five options or less, use radio buttons rather than a select.
   This makes it easier to compare the options.
   It saves the user a click to select each option and shows everything up front.
2. Don’t use inline radios.
   Their options appear rather small, making them difficult to target with a pointing device.

More to follow.

## Best practices for stories

1. Use decorators and / or `args.children` before reaching for `render`. `render` can easily mess up the stories’ code view.
   Decorators are not shown in the code view, `args.children` are.
2. Always check your stories’ code view.
3. `args.children` can be an array, separated by commas and given a key. Use a (TODO: decide) as a key.

## Future plans

We are considering what to document for each component in the various libraries.

We aim to document each implementation of each component – CSS, React, React Native, and Salesforce Lightning Web Components.

We’re eager to get the most out of Storybook features for accessibility, testing, and more.
