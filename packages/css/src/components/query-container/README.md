<!-- @license CC0-1.0 -->

# Query Container

Allows elements to adjust to the size or state of an ancestor container.

Container queries are an alternative to media queries.
They work against a designated parent element rather than the viewport.
This parent is then the ‘container that can be queried’.
A child element can then change its appearance based on a characteristic of the container.

## Class names

One option is currently available:

- `ams-query-container-inline-size` lets descendants query the width of the container.

## Guidelines

### Inline size

- In most cases you will not need this class.
  [Grid Cell](/docs/components-layout-grid--docs), [Dialog](/docs/components-containers-dialog--docs) and [Page](/docs/components-containers-page--docs) are query containers for inline size by default.
  Because they all use the same container name, container queries reference the nearest of these ancestors.
  In practice, this works out of the box for most layouts.
- If an element doesn’t have any of these components as an ancestor, the conditional styles never trigger.
  To allow the container query to trigger, add this class to an appropriate ancestor:

```html
<div class="ams-query-container-inline-size">
  <div class="my-component">…</div>
</div>
```

```css
.my-component {
  /* Base styles that apply at any width. */

  @container ams-query-container-inline-size (min-inline-size: 40rem) {
    /* Styles to apply if the container is 40rem wide or more. */
  }
}
```
