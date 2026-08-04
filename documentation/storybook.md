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
2. For other props, don’t set an arg to the value the prop has by default.
   The `undefined` option labelled with that default already selects it – see [Choosing a control](#choosing-a-control) – so an arg would only add the prop to the code view.
3. Don’t use an empty string as a placeholder value – it can defeat component behaviour such as generating an id or rendering an optional hint.
   Leave the arg out instead.
4. Hide args with `table: { disable: true }` in the `argTypes` object if they don’t apply to the story, e.g. if the story composes multiple instances of the component.
   We don’t hide ‘less relevant’ args in other cases, not even in stories that focus on a single prop.
5. Note that the args and argTypes of the meta feed the Test story, which is the only story Chromatic snapshots for a component or a CSS utility – see [Test stories](#test-stories).
   Changing them can therefore change snapshots; the args of an individual presentation story don’t reach Chromatic.
   This does not hold for page templates, whose stories Chromatic snapshots one by one.

### Args that only serve the controls

The Boolean flags of the first guideline reach the Code Panel too, teaching readers to write a `disabled={false}` that changes nothing.
So do the event handlers an `action` or a controlled story adds, which print as an empty `() => {}`.
`storybook/config/filterSourceProps.ts` leaves both out of the generated source.

Add a Boolean prop to the list in that module as soon as a story gives it `false`, so it stays out of the code view.
Only add a prop that is off by default: where a prop is on by default, such as Ordered List’s `markers`, `false` switches the default off and the code view has to show it.

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
   When the default has no named value – such as the regular text colour – label it plainly ‘default’.
   Remove the default value from the options themselves, so it doesn’t appear twice: `options: [undefined, ...tags.filter((tag) => tag !== 'div')]`.
6. Only offer options that the prop’s type allows, and offer all of them.
   If a story deliberately shows a subset, add a comment explaining why.
7. For an icon prop, use the shared icon arg type from `storybook/src/_common/iconArgTypes.ts`.
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

To do this, use the shared arg type:

```txt
argTypes: {
  children: childrenArgType('The text content.'),
},
```

It unhides the arg, offers a text control, and sets the description – `children` has no JSDoc of its own.

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

Test stories (`*.test.stories.tsx`) render all states of a component in the single story named ‘Test’, which is the only story Chromatic snapshots for a component.
They inherit the component’s meta and must not define argTypes of their own.
Note that `renderComponentVariants` reads both the argTypes and the args of the meta to build its variant matrix – changing options, hiding args, or giving an arg a value can change what the Test story renders and snapshots.
The matrix holds each configuration once: it opens every state with the component as the meta’s args leave it, and leaves out any prop value that baseline already shows, whether the meta set it or the prop defaults to it.

CSS utilities under `Utilities/` have test stories as well, but cannot use `renderComponentVariants`.
The component next to each utility is a mock that renders a bare element; the utility class comes from the story’s `render`, so a generated matrix would show elements without the class on them.
Their test stories build the matrix by hand instead, covering the scale the CSS ships: all five gaps, all six margins, all six aspect ratios, and both sides of the container query.
That fits in the same number of snapshots as the presentation stories would take, because one image holds the whole scale.
Where a utility has no variants – Body, Prose, Visually Hidden – the test story sets only `tags` and inherits the `render` from the meta, so the snapshot cannot drift from the story we document.

Page templates have no test stories.
Chromatic snapshots their presentation stories directly, so every story under `Pages/` is a snapshot.
Only stories, though: Chromatic skips docs entries, so the `Introduction` pages and the generated `Docs` tab of each template cost nothing.
A page has no single component and no variant props, so `renderComponentVariants` cannot build a matrix for one; collapsing several pages into one Test story would mean either duplicating their markup or reaching into another story’s `render`.
Snapshotting the presentation stories avoids both, and guarantees the image matches the page we document.

Both page families set a Chromatic mode in their `commonMeta` so the snapshot width matches the maximum width of the Page: 1440px for public pages (`ams.page.max-inline-size`) and 1920px for internal ones (`ams.page.with-menu.max-inline-size`).
Chromatic’s default viewport is 1200px, narrower than either, so without this the widest layout we design for would never be tested.
One mode is one snapshot, so setting the width does not change the snapshot count.
