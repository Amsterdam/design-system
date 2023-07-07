<!-- @license CC0-1.0 -->

# Storybook guidelines

We use Storybook 7 to display all components and allow interacting with them.

Each component library has its own Storybook instance – currently those are CSS and React. We use Storybook’s composition feature to combine the two. For each merge to the `main` branch we publish to [amsterdam.github.io/design-system](https://amsterdam.github.io/design-system/).

## Structure

We write both docs and stories for each component. The docs display:

1. The contents of the component’s `README.md` file.
2. The contents of the component’s `component-css.md` file (only in the CSS library).
3. The primary story for the component.
4. The controls for the component, which displays all args for the component.
5. A canvas for every other story, each with an introduction if possible.

We write our documentation in Dutch.

## Best practices for controls

1. For props offering five options or less, use radio buttons rather than a dropdown. This makes it easier to compare the options. It saves the user a click to select each option and clearly shows all of them up front.

More to follow.

## Future plans

We are considering what to document for each component in the various libraries, respectively.

We aim to document each implementation of each component – CSS, React, React Native, Salesforce Lightning Web Components.

We’re eager to get the most out of Storybook features for accessibility, testing, and more.
