<!-- @license CC0-1.0 -->

# Storybook guidelines

We use Storybook 7 to display all components and allow interaction with them.

Each component library has its Storybook instance – currently, we only have React.
We use Storybook’s composition feature to combine the main Storybook with the React one.
We publish each merge to the `main` branch to [amsterdam.github.io/design-system](https://amsterdam.github.io/design-system/).

## Structure

We write both docs and stories for each component.
The docs display:

1. The contents of the component’s `README.md` file.
2. The primary story for the component.
3. The controls for the component, which displays all args for the component.
4. A canvas for every other story, each with an introduction.

We write our documentation in Dutch.

## Best practices for controls

1. Use radio buttons rather than a dropdown for props with 5 options or less.
   This makes it easier to compare the options.
   It saves the user a click to select each option and shows everything up front.

More to follow.

## Future plans

We are considering what to document for each component in the various libraries.

We aim to document each implementation of each component – CSS, React, React Native, and Salesforce Lightning Web Components.

We’re eager to get the most out of Storybook features for accessibility, testing, and more.
