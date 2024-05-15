<!-- @license CC0-1.0 -->

# Storybook guidelines

We use Storybook to display all components and allow interaction with them.

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

Controls are automatically generated based on the component’s typing.

### Prop descriptions

We use JSDoc to describe each prop to keep documentation close to the actual definition.
This also helps IDE’s pick up the description and display it in their user interface.
The description briefly explains the essence of the prop.
A guideline on how to use the prop may be added, as well as a description of its effect, e.g. visually.
Prevent mentioning the component’s name in a prop description – that should be obvious.
Prop types that aren’t exported don’t require their properties to be described.

### Arg Types

Add [`argTypes`](https://storybook.js.org/docs/api/arg-types) to the Story to document native HTML attributes or override the generated controls.
Be sure to follow these guidelines when you do:

1. Add a `description` field instead of a JSDoc comment for native HTML attributes.
   Use terse sentences that end with a full stop.
   When adding a prop, check for an corresponding existing prop and copy its description.
2. When mentioning a component, write its name in title case, e.g. ‘Card’ or ‘Form Field’.
   This represents the component more strongly and helps users recognise them as such.
3. For props offering five options or less, use radio buttons rather than a select.
   This makes it easier to compare the options.
   It saves the user a click to select each option and shows everything up front.
4. Don’t use inline radios.
   Their options appear rather small, making them difficult to target with a pointing device.

More to follow.

### The `children` prop

By default, we hide the `children` prop from the controls.
Children of React components are often React components themselves, which isn't very useful to show in Storybook.
However, sometimes it is useful to add `children` to the controls.
For example, when the child is a simple string (like in the default Button component story).

To do this, you can override the default like so:

```js
argTypes: {
  children: {
    table: { disable: false },
  },
},
```

## Best practices for stories

1. Use decorators and / or `args.children` before reaching for `render`. `render` can easily mess up the stories’ code view.
   Decorators are not shown in the code view, `args.children` are.
2. Always check your stories’ code view.
3. `args.children` can be an array, separated by commas and given ascending numbers as keys.

## Future plans

We are considering what to document for each component in the various libraries.

We aim to document each implementation of each component – CSS, React, React Native, and Salesforce Lightning Web Components.

We’re eager to get the most out of Storybook features for accessibility, testing, and more.
