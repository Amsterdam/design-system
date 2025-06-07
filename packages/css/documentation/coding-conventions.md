# Coding Conventions

## Where to put properties for various states

The declaration block for the pseudo-class name only lists the properties for which the value changes in the related state.
Properties that remain unchanged in all other states are part of the declaration block for the general class name, even if they don’t affect the element’s initial state.

### Do this

This link receives an underline when the user’s pointer hovers over it.
Still, we define its thickness and offset for the initial state.

```css
.ams-link {
  text-decoration: none;
  text-decoration-thickness: 0.125rem;
  text-underline-offset: 0.1667em;

  &:hover {
    text-decoration: underline;
  }
}
```

### Do not do this

```css
.ams-link {
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    text-decoration-thickness: 0.125rem;
    text-underline-offset: 0.1667em;
  }
}
```

## Use mixins for patterns and resets

We use Sass mixins to extract common patterns, especially if they need more than 1 declaration.
Both the name of the mixins and their documentation help explain the approach.

We collect reset styles in mixins as well.
These are named after the element they reset, e.g. `@mixin reset-ul`.
This helps reusing reset styles per element, and reminds to update the mixin if the element type changes.
The declarations in the mixin must override default user agent styling; otherwise it is not a reset.

## Form validation styling

We style both the native invalid state (`:invalid`) as the invalid state you can set manually, using `aria-invalid`.
We’re currently not sure how our users will implement forms, which is why both options are supported.
[Native form validation isn’t without its issues](https://adrianroselli.com/2019/02/avoid-default-field-validation.html) though, so we might only support manual validation in the future.

## Input state precedence order

Inputs can have multiple states that can be combined.
The states we use can be divided into two lists based on their precedence order.
States from both lists can be combined freely (for example, a disabled input can be checked, indeterminate, or unchecked),
but there is a precedence order within each list.

Control states:

1. **Disabled** always takes priority. If an input is disabled, it should not respond to hover, focus, or invalid states.
2. **Hover** should always be visible, except when an input is disabled.
3. **Invalid** indicates a validation error. Should not override disabled. Should be paired with a hover state, so each input should have an invalid hover state defined.
4. **Default** is the base state.

Selection states:

1. **Indeterminate** takes precedence over the checked state. If an input (typically a checkbox) has both checked and indeterminate states, we show it as indeterminate.
2. **Checked** shows the checked state, has lower precedence than indeterminate.
3. **Default** is the base, unchecked state.

In CSS, defining the rules in the order mentioned above can be challenging due to specificity issues.
We prefer to create clear and simple CSS using the smallest selectors possible instead.
This approach may make the order harder to follow.
However, it should always adhere to the precedence order stated above.

Checkbox has the most states, so refer to [that CSS](https://github.com/Amsterdam/design-system/blob/develop/packages/css/src/components/checkbox/checkbox.scss) when adding a new input.
Use the same order and remove any irrelevant states for your input.
