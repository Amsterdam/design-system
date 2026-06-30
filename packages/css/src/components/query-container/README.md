<!-- @license CC0-1.0 -->

# Query Container

Allows elements to adjust their appearance to the size or state of a containing element.

Container queries in CSS are an alternative to media queries.
They work with a designated ancestor instead of the viewport.
This is the ‘container that can be queried’.
Elements can change their appearance based on a characteristic of that container.

## Class names

One option is currently available:

- `ams-query-container-inline-size` lets elements query the width of the container.

## Guidelines

### Inline size

- Generally, you won’t need this class.
  [Grid Cell](/docs/components-layout-grid--docs), [Dialog](/docs/components-containers-dialog--docs) and [Page](/docs/components-containers-page--docs) are default query containers for inline size.
  Since they all share the same container name, container queries refer to the closest of these ancestors.
  In practice, almost all elements sit in at least one of these containers.
- However, if an element lacks any of them, the conditional styles will not activate.
  To allow the container query to trigger, add this utility class to a suitable ancestor:

```html
<div class="ams-query-container-inline-size">
  <div class="my-component">…</div>
</div>
```

```css
.my-component {
  /* Base styles that apply at any width. */

  @container ams-query-container-inline-size (inline-size >= 40rem) {
    /* Styles to apply if the container is 40rem wide or more. */
  }
}
```
