<!-- @license CC0-1.0 -->

# Inline Size Context

Turns an element into a [CSS container query](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Containment/Container_queries) context that descendants can query against its inline size.

## Class name

`ams-inline-size-context`

## Guidelines

- Apply this class to an element whose width should drive the layout of its descendants.
- Descendants can then adapt responsively using `@container ams-inline-size-context (min-inline-size: …)`, instead of `@media (min-width: …)`.
- [Page](/docs/components-containers-page--docs), [Grid Cell](/docs/components-layout-grid--docs), and [Dialog](/docs/components-containers-dialog--docs) already establish this context, so you don’t need the utility class on those components.
- Override the default container name or type with the `--ams-inline-size-context-name` and `--ams-inline-size-context-type` custom properties if you need a component-specific container name.
