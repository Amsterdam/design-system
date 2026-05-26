<!-- @license CC0-1.0 -->

# Query Container

Turns an element into a query container so descendants can adapt to its size or state with [container queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Containment/Container_queries).

## Class names

One option is currently available:

- `ams-query-container-inline-size` – lets descendants query the element’s inline size.

## Guidelines

### Inline size

- In most cases you will not need this class: [Grid Cell](/docs/components-layout-grid--docs), [Dialog](/docs/components-containers-dialog--docs) and ultimately [Page](/docs/components-containers-page--docs) already establish this query container.
- Apply this class to an element whose width should drive the layout of its descendants.
- Descendants can then adapt responsively with container queries.

  ```css
  .my-component {
    @container ams-query-container-inline-size (min-inline-size: 40rem) {
      /* responsive styles */
    }
  }
  ```

- Override the default container name or type with custom properties if you need a component-specific container name.

  ```css
  .ams-query-container-inline-size {
    --ams-query-container-inline-size-container-name: my-component;
    --ams-query-container-inline-size-container-type: inline-size;
  }
  ```
