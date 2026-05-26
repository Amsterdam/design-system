<!-- @license CC0-1.0 -->

# Inline Size Context

Gives an element a containment context that allows descendants to query its inline size.

## Class name

`ams-inline-size-context`

## Guidelines

- In most cases you will not need this class: [Grid Cell](/docs/components-layout-grid--docs), [Dialog](/docs/components-containers-dialog--docs) and ultimately [Page](/docs/components-containers-page--docs) already establish this context.
- Apply this class to an element whose width should drive the layout of its descendants.
- Descendants can then adapt responsively with [container queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Containment/Container_queries).

  ```css
  .my-component {
    @container ams-inline-size-context (min-inline-size: 40rem) {
      /* responsive styles */
    }
  }
  ```

- Override the default container name or type with custom properties if you need a component-specific container name.

  ```css
  .ams-inline-size-context {
    --ams-inline-size-context-container-name: my-component;
    --ams-inline-size-context-container-type: inline-size;
  }
  ```
