<!-- @license CC0-1.0 -->

# Storybook guidelines

We use Storybook to display all components and allow interaction with them.

We publish each merge to the `main` branch to [designsystem.amsterdam](https://designsystem.amsterdam/).

## Structure

We write both docs and stories for each component.
The documentation page for each component follows the content model in [component-docs.md](component-docs.md): rationale, Primary story, Controls, followed by a fixed order of structured sections.

We write our documentation in English, the stories are in Dutch.

All headings use sentence case.
Component names are in title case – starting each word with a capital letter – to make people recognise them as such.

## Best practices for controls

Controls are automatically generated based on the component’s typing.
The guidelines below describe when and how to adjust them.
The goal is a controls table where every row is useful: each prop offers a fitting control and shows its description and default value.
Controls are sorted alphabetically through the global configuration.

### Prop descriptions

We use JSDoc to describe each prop of our React components, keeping documentation close to the actual definition.
This also helps IDEs pick up the description and display it in their user interface.
Storybook displays these descriptions in the controls table.
An argTypes `description` is only needed for props that have no JSDoc source – see [Native HTML attributes](#native-html-attributes).

Follow these guidelines:

1. Always use `/** … */` comments – single-asterisk block comments don’t reach the docs.
2. Briefly explain the essence of the prop.
   A guideline on how to use the prop may be added, as well as a description of its effect, e.g. visually.
3. Add an `@default` tag if the prop has a default value.
   A global enhancer in `preview.tsx` displays it in the ‘Default’ column of the controls table.
4. Add an `@deprecated` tag with migration instructions when phasing out a prop.
   A global enhancer in `preview.tsx` then leads the description with a bold notice and groups the prop under a ‘Deprecated’ category.
5. Prevent mentioning the component’s name in a prop description – that should be obvious.
6. When mentioning another component, write its name in title case, e.g. ‘Card’ or ‘Form Field’.
   This represents the component more strongly and helps users recognise them as such.
7. Prop types that aren’t exported don’t require their properties to be described.

### Native HTML attributes

Native HTML attributes (`href`, `disabled`, `checked`, `id`, `rows`, …) have no JSDoc in our code base, so document them with a `description` in `argTypes` instead.
This includes attributes that a component inherits from its underlying element, such as `checked` on an input.
Use terse sentences that end with a full stop.
Reuse the shared description snippets from `storybook/src/_common/argTypes.ts`, so the same attribute reads the same everywhere.
When adding a snippet, check for an existing description of the same attribute and move it to the shared file.
Don’t override `name` or `type` for these args – Storybook infers those correctly.

### Args

Add [`args`](https://storybook.js.org/docs/writing-stories/args) to the Story to set initial values for props.
Follow these guidelines:

1. For Boolean props, set their default value to `false`, unless this has side effects e.g. rendering a class name.
   In that case, don’t specify a value.
   Storybook will then display a button ‘Set boolean’ that shows a switch.
2. Don’t use an empty string as a placeholder value – it can defeat component behaviour such as generating an id or rendering an optional hint.
   Leave the arg out instead.
3. Hide args with `table: { disable: true }` in the `argTypes` object if they don’t apply to the story, e.g. if the story composes multiple instances of the component.
   We don’t hide ‘less relevant’ args in other cases, not even in stories that focus on a single prop.
4. Note that the args and argTypes of the meta feed the Test story, which is the only story Chromatic snapshots – see [Test stories](#test-stories).
   Changing them can therefore change snapshots; the args of individual stories don’t reach Chromatic.

### Choosing a control

Pick the control that matches the shape of the prop.
Set `control.type` explicitly whenever you provide `options` – don’t rely on inference.

1. For a Boolean prop, the automatically generated boolean control is fine.
2. For a union of five options or less, use radio buttons rather than a select.
   This makes it easier to compare the options.
   It saves the user a click to select each option and shows everything up front.
   Inline radios are fine for these as well; prefer stacked radios when the option labels are long.
3. For more than five options, use a select.
4. For a numeric prop, use a number control.
   Set `min`, `max`, and `step` when the type or the component’s behaviour constrains them.
5. For an optional prop, include `undefined` in the options and label it with the effective default value: `labels: { undefined: 'medium (default)' }`.
   This teaches users the default instead of hiding it.
   Remove the default value from the options themselves, so it doesn’t appear twice: `options: [undefined, ...tags.filter((tag) => tag !== 'div')]`.
6. Only offer options that the prop’s type allows, and offer all of them.
   If a story deliberately shows a subset, add a comment explaining why.
7. For an icon prop, use the shared icon arg type from `storybook/src/_common/argTypes.ts`.
   It offers a select of all icon names, mapped to the icon components, labelling `undefined` as ‘none’ for optional props.

### Props without a useful control

Some props have no control that makes sense: functions, React elements, and complex object types.
Two mechanisms exist, with different meanings:

1. `control: false` keeps the row in the controls table, without a control.
   Use it when seeing the prop with its type and description is useful – e.g. `linkComponent`, a slot like `footer`, or a callback that is part of the component’s API.
2. `table: { disable: true }` removes the row entirely.
   Use it only when the prop doesn’t apply to the story at all.

The global configuration already hides `children`, `className`, `style`, `defaultValue`, `onChange`, and `onSubmit` for every story.
Unhide them with `table: { disable: false }` where they are meaningful, e.g. `defaultValue` and `onChange` for form controls.

### Derived args

Some args update automatically, through a decorator or the component itself – for example, a prop that follows a media query.
Mark these with the shared derived arg type from `storybook/src/_common/argTypes.ts`: no control, a read-only row under the ‘Derived’ category, and a description that explains what drives the value.
Locale-synced label args keep their read-only text controls, so their live values remain visible.

### Conditional controls

Use [`if`](https://storybook.js.org/docs/api/arg-types#conditional-controls) to show a control only when it applies – e.g. `iconBefore` only when an `icon` is set, or `closeButtonLabel` only when `closeable` is `true`.
This keeps the controls table focused.

### Actions

Name actions after the event they represent: `'changed'`, `'toggled'`, `'submitted'`.
Don’t use `'clicked'` for a change handler.

### The `children` prop

By default, we hide the `children` prop from the controls.
Children of React components are often React components themselves, which isn’t very useful to show in Storybook.
However, sometimes it is useful to add `children` to the controls.
For example, when the child is a simple string (like in the default Button component story).

To do this, you can override the default like so:

```txt
argTypes: {
  children: {
    table: { disable: false },
  },
},
```

A short argTypes `description` such as ‘The text content.’ is welcome here – `children` has no JSDoc of its own.

## Best practices for stories

1. Import the Story’s component from the `src` directory so that Storybook can display its types.
   Import other components from the package as usual.
2. Use decorators and / or `args.children` before reaching for `render`. `render` can easily mess up the stories’ code view.
   Decorators are not shown in the code view, `args.children` are.
3. Always check your stories’ code view.
4. `args.children` can be an array, separated by commas and given ascending numbers as keys.
5. Define argTypes in the meta rather than on individual stories, so all stories of a component present the same controls.
   A story-level override is fine when a story genuinely needs different options – add a comment explaining why.

## Test stories

Test stories (`*.test.stories.tsx`) render all states of a component in the single story named ‘Test’, which is the only story Chromatic snapshots.
They inherit the component’s meta and must not define argTypes of their own.
Note that `renderComponentVariants` reads the meta’s argTypes to build its variant matrix – changing options or hiding args can change what the Test story renders and snapshots.
