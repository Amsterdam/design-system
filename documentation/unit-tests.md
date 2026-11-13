<!-- @license CC0-1.0 -->

# Unit tests

This guide says which unit tests a React component needs, how to write them, and how to title them.
Follow it for a new component, for a new prop or behaviour on an existing one, and whenever you change a test.
For the other kinds of tests, see [tests.md](tests.md).

Unit tests live next to the component, in `packages/react/src/<Name>/<Name>.test.tsx`.
Each subcomponent has its own test file, such as `AccordionSection.test.tsx`.
Do not split the tests of one component over several files.
If a file grows long, check whether some of its tests belong to a subcomponent and move them there.
They use [Vitest](https://vitest.dev) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/).
Run them with `pnpm --filter @amsterdam/design-system-react test`.

## Which tests to write

### The baseline

Every component and subcomponent has these five tests, first in its file and in this order:

1. `renders` checks that the element is in the document and visible.
2. `renders the design system class name` checks the `ams-…` class name on the root element.
3. `renders an extra class name` checks that a `className` from the consumer sits next to it.
4. `forwards the ref` checks that the ref points to the root element.
5. `passes additional props` checks that props the component does not handle, such as `id` and `data-test`, reach the root element.

`pnpm run plop` writes these five tests for a new component.

### Tests per characteristic

After the baseline, add tests for each characteristic the component has, in the order of this list.
Within a characteristic, test the default first, then each option in the order the source declares it, then the edge cases.
A characteristic applies when the component’s source shows it.
The titles are patterns: replace the parts in angle brackets.

- **Polymorphic element:** a prop such as `as` or `level` chooses the root element.
  Test the default element and each allowed element: `renders a <tag> element by default`, `renders a <tag> element for as ‘<tag>’`.
- **Heading level:** a `headingLevel` prop sets the level of a heading inside the component.
  Test it: `renders the heading at the level of headingLevel`.
- **Variants:** a prop picks an option from a closed set, or a boolean switches a style, such as `color`, `size` or `inverse`.
  Test each option, and the default: `renders the class name for <prop> ‘<value>’`, `renders the class name when <boolean prop>`, `renders no <prop> class name by default`.
- **State:** a prop sets a state, such as `disabled`, `invalid`, `open` or `current`.
  Test the default, the state, and the attributes it sets or leaves out: `is not <state> by default`, `is <state> when <state>`, `omits <attribute> when <prop> is false`.
- **Text:** a prop sets visible text, a label or an accessible name.
  Test the text and a custom value: `renders the <prop>`, `renders a custom <prop>`.
- **Other content:** a prop passes content or data that is not text, such as `footer`, `images` or `errors`.
  Test that it renders, and what happens without it: `renders the <prop>`, `renders nothing without <prop>`.
- **Default values:** a prop has a default, often a Dutch text.
  Test the default: `renders a default <prop>`, `sets <attribute> ‘<value>’ by default`.
- **Ids and ARIA:** the component generates ids or sets ARIA attributes and roles itself.
  Test that each link between elements is made: `generates a unique id for <purpose>`, `links <a> to <b> with <aria attribute>`, `uses a custom <prop>`.
- **Visually hidden text:** the component renders text for screen readers only.
  Test that the text is there and has the `ams-visually-hidden` class name: `renders <text> as visually hidden text`.
- **Custom link component:** a prop such as `linkComponent` replaces the link.
  Test it, and how the ref is passed: `renders a custom link component`, `forwards the ref to an intrinsic link component`, `does not forward the ref to a custom link component`.
- **Controlled and uncontrolled:** the component accepts a value, a `default…` value, or both.
  Test both modes: `follows changes to <prop>`, `does not toggle itself when controlled`, `ignores <defaultProp> when <prop> is set`.
- **Event callbacks:** the component has its own `on…` props.
  Test the call, its arguments and its absence: `calls <onX> when <event>`, `calls <onX> with the new state when <event>`, `does not throw without <onX>`.
- **Icons:** a prop takes an icon.
  Test the default and a custom icon: `renders an icon`, `renders a custom icon`, `renders no icon by default`.
- **Subcomponents:** the component exposes subcomponents, such as `Accordion.Section`.
  Test that they render inside it: `renders its subcomponents`.
- **Static methods:** the component exposes helpers that are not components, such as `Dialog.open`.
  Test each one in a nested `describe('static methods')`.
- **Language and direction:** the component handles `locale`, `lang` or `dir`.
  Test the default and a custom value: `sets dir ‘auto’ by default`, `sets a custom dir`, `formats <content> for the locale`.
- **Context:** a root prop reaches its subcomponents through React context.
  Test it in the root’s file: `uses <prop> from <Parent>`.
- **Keyboard and focus:** the component handles keys or moves focus itself.
  Test each key: `moves focus between <parts> with the arrow keys`, `moves focus to <target> with <Key>`.
- **Viewport:** the component reacts to the window width.
  Test both sides of the breakpoint: `<does something> when the window becomes wide`.
- **Deprecation:** a prop is deprecated, or the component warns during development.
  Test the warning and its absence: `warns that <name> is deprecated`, `does not warn without <prop>`.
- **Conditional parts:** the component renders nothing, or leaves out a part, depending on its props.
  Test each case: `renders nothing when <condition>`, `does not render <part> without <prop>`.
- **Computed content:** the component builds markup or text from data, such as a page range or the days of a month.
  Test the edge cases of the computation, with titles that follow the rules below.
- **Native element:** the root is a form control, link, button or dialog.
  Test the native attributes and events the component sets or changes: `renders the href`, `sets type ‘<value>’`, `calls onChange when clicked`, `does not call onChange when disabled`.

A test that fits none of these is fine.
If the same kind of test turns up in several components, add it to this list.

### What to look for in the source

Read the source of the component and of its subcomponents, and go through the list above from top to bottom.
These signs tell you that a characteristic applies:

- **Variants and state:** a prop typed as a union of strings or as an `as const` array, or a boolean that adds a modifier class name through `clsx`.
- **Default values:** a destructured prop with a default, such as `closeButtonAccessibleName = 'Sluiten'`.
- **Ids and ARIA:** `useId`, `aria-…` attributes or a `role` that the component sets itself.
- **Visually hidden text:** the class name `ams-visually-hidden` in the source.
- **Controlled and uncontrolled:** a `value` or `open` prop next to a `defaultValue` or `defaultOpen` prop.
- **Subcomponents and static methods:** `Object.assign` at the end of the file, with components or with functions.
- **Context:** `createContext` or `useContext`.
- **Keyboard and focus:** `onKeyDown`, or a call to `.focus()`.
- **Viewport:** `useViewportHasMinWidth` or `matchMedia`.
- **Deprecation:** `@deprecated` in a prop’s TSDoc, or a `console.warn` call.
- **Conditional parts:** `return null`, `&&` in front of JSX, or a ternary with `null`.
- **Computed content:** `map` over data, `Intl`, or one of the format helpers.
- **Native element:** the ref type is `HTMLInputElement`, `HTMLButtonElement` or another form control, or the component wraps `Button` or `TextInput`.

A prop that every test passes as set-up does not count as tested.
Give it a test of its own.
The 100% coverage rule catches an untested branch, but not an untested prop, so the list is the check.

## How to set up the tests of a new component

1. Run `pnpm run plop`.
   It writes the test file with the five baseline tests.
   Give the subcomponents their own test file, each with the five baseline tests.
2. Go through the list in [What to look for in the source](#what-to-look-for-in-the-source) and write down the characteristics that apply.
3. Write the tests after the baseline, one characteristic at a time, in the order of the list.
   Start each characteristic with the default, then the options in the order the source declares them, then the edge cases.
4. Title each test with the canonical title of its characteristic where there is one.
5. Run `pnpm --filter @amsterdam/design-system-react test`.
   Fix the file until every test passes and coverage stays at 100%.
6. Read the file from top to bottom once more.
   The five baseline tests come first, and no test sits between two of them.

## How to keep the tests in step with a component

When you change a component, change its tests in the same commit.
Find the change in this list and do what it says.

- **A new prop or behaviour:** find its characteristic in the list.
  Add the tests it asks for after the tests of the characteristics before it.
  If the component had no test for that characteristic yet, check the same characteristic in related components, so they still match.
- **A renamed prop:** change every title that names it.
  Titles write props exactly as in code.
- **A removed prop:** remove its tests.
  Remove the prop from the other tests that pass it as set-up.
- **A changed default value:** change the test of the default.
  Check the stories and the documentation that show the old default.
- **A changed root element:** change the element in the tests of the polymorphic element, and check that the five baseline tests still find the root.
- **A new subcomponent:** give it a test file with the five baseline tests.
  Add `renders its subcomponents` to the file of the parent if it has none.
- **A deprecated prop:** add the deprecation tests, and keep the tests of the prop until it is removed.
- **A renamed component or subcomponent:** rename the test file and the root `describe` to match the new `displayName`.

Then run the tests, and read the changed file from top to bottom to check that the order of the guide still holds.

## How to write a test

- Query by role, label or text: `getByRole`, `getByLabelText` and `getByText`.
- Use `container.querySelector(':only-child')` only to reach a root element without a role, such as a `div` or `span`.
- Never use `getByTestId` or `data-testid`.
  To find a custom icon, give it a class name and look for that class inside the element you found by role.
- Query through `screen`, and take only `container` and `rerender` from `render`.
- Click and type with `userEvent`, set up once per test with `userEvent.setup()`.
- Render a subcomponent through its parent, such as `<Table.Row>`, so the test also checks that the parent exposes it.
- Put a test in the file of the component that owns the prop, state or handler it checks.
- Repeat a test for each option with `forEach` and a template literal title, not with `it.each`.
- Do not commit `it.skip`.
  Write `it.todo` with a comment that says why the test cannot be written yet.

## How to title a test

Vitest prints a test as its `describe` path followed by its `it` title, so together they read as one sentence: “Checkbox › invalid › is invalid when invalid”.

### `describe` titles

- The root `describe` names the subject by its `displayName`, such as `Accordion` or `Accordion.Section`.
  For a hook or a function, use its name, such as `useCollapsible`.
- Use a nested `describe` only for tests that share their setup or a mode, not to label a characteristic.
- A nested `describe` names a prop (`invalid`), a mode (`when controlled`) or a part (`close button`).
  It starts with a lowercase letter and does not use the word “state”.

### `it` titles

- A title finishes the sentence “It …”.
  It starts with a verb in the third person present, such as “renders”, “sets”, “calls” or “is”.
  Do not start with “should”, “can” or “is able to”.
- A title says one behaviour first and its condition last.
  Use these forms for the condition: `when <boolean prop>`, `when <prop> is <value>`, `for <prop> ‘<value>’`, `by default`, `without <prop>` and `when <event>`.
- Write props, attributes, roles, keys and components exactly as in code, without quotes: `defaultExpanded`, `aria-current`, `Grid.Cell`.
  Write a value in curly single quotes: ‘inverse’.
- Leave out jargon such as “BEM”, “ForwardRef” and “React”.
- Leave out vague words such as “correct”, “correctly”, “properly” and “working”: say what the result is.
- Keep a title to 12 words or fewer.
  Do not repeat the name of the component or the condition of the enclosing `describe`.
- Write “class name”, not “class”, and “does not”, not “doesn’t”.
- If a title needs “and” between two results, split the test.
