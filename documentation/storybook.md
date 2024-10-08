<!-- @license CC0-1.0 -->

# Storybook guidelines

We use Storybook to display all components and allow interaction with them.

We publish each merge to the `main` branch to [designsystem.amsterdam](https://designsystem.amsterdam/).

## Structure

We write both docs and stories for each component.
The docs display:

1. The contents of the component’s `README.md` file.
2. The primary story for the component.
3. The controls for the component, which displays all args for the component.
4. A canvas for every other story, each with an introduction.

We write our documentation in English, the stories are in Dutch.

All headings use sentence case.
Component names are in title case – starting each word with a capital letter – to make people recognise them as such.

## Best practices for controls

Controls are automatically generated based on the component’s typing.

### Prop descriptions

We use JSDoc to describe each prop to keep documentation close to the actual definition.
This also helps IDEs pick up the description and display it in their user interface.
The description briefly explains the essence of the prop.
A guideline on how to use the prop may be added, as well as a description of its effect, e.g. visually.
Prevent mentioning the component’s name in a prop description – that should be obvious.
Prop types that aren’t exported don’t require their properties to be described.

### Args

Add [`args`](https://storybook.js.org/docs/react/writing-stories/args) to the Story to set initial values for props.
Follow these guidelines:

1. For Boolean props, set their default value to `false`,
   unless this has side effects e.g. rendering a class name.
   In that case, don’t specify a value.
   Storybook will then display a button ‘Set boolean’ that show a switch.
2. Hide args with `table: { disable: true }` in the `argTypes` object if they don’t apply to the story,
   e.g. if the story composes multiple instances of the component.
   We don’t hide ‘less relevant’ args in other cases, not even in stories that focus on a single prop.

### Arg Types

Add [`argTypes`](https://storybook.js.org/docs/api/arg-types) to the Story to document native HTML attributes or override the generated controls.
Follow these guidelines:

1. Add a `description` field instead of a JSDoc comment for native HTML attributes.
   Use terse sentences that end with a full stop.
   When adding a prop, check for a corresponding existing prop and copy its description.
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

1. Import the Story’s component from the `src` directory so that Storybook can display its types.
   Import other components from the package as usual.
2. Use decorators and / or `args.children` before reaching for `render`. `render` can easily mess up the stories’ code view.
   Decorators are not shown in the code view, `args.children` are.
3. Always check your stories’ code view.
4. `args.children` can be an array, separated by commas and given ascending numbers as keys.

## Future plans

We are considering what to document for each component in the various libraries.

We aim to document each implementation of each component – CSS, React, React Native, and Salesforce Lightning Web Components.

We’re eager to get the most out of Storybook features for accessibility, testing, and more.
