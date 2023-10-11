# Coding Conventions

## Pseudo class styles

When defining styles for an element that gets a pseudo class (for example `:hover` on hover), define the styles that do not change in the element selector and only the styles that change in the pseudo class selector.

For example, do this:

```css
.class {
  text-decoration: none;
  text-decoration-thickness: 2px;
  text-underline-offset: 3px;

  &:hover {
    text-decoration: underline;
  }
}
```

Instead of this:

```css
.class {
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    text-decoration-thickness: 2px;
    text-underline-offset: 3px;
  }
}
```
