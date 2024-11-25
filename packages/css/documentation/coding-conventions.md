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
