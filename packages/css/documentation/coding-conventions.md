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
  text-underline-offset: 0.1875rem;

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
    text-underline-offset: 0.1875rem;
  }
}
```

## Use mixins for patterns and resets

We use Sass mixins to extract common patterns, especially if they need more than 1 declaration.
We collect reset styles in mixins as well.
Both the name of the mixins and their documentation help explain the approach.
