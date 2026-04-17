<!-- @license CC0-1.0 -->

# Page

Contains the entire website.

The Page component wraps the [Page Header](https://designsystem.amsterdam/?path=/docs/components-containers-page-header--docs),
[Page Footer](https://designsystem.amsterdam/?path=/docs/components-containers-page-footer--docs), and the main content in between.
It is centered horizontally and sets a maximum width of 90 rems (usually 1.440 pixels).
With a Menu, that becomes 120 rems (1.920 pixels).

## Guidelines

- As a root layout component, it must be used for all websites for the City of Amsterdam.
- Page provides a [CSS container query](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Containment/Container_queries) context, so components can adapt their appearance to its inline size.
  Because Page has a maximum width, container queries are more accurate than [media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Media_queries) here — they reflect the actual available space rather than the viewport width.
  Container query contexts nest: a querying component typically matches the nearest ancestor context first, e.g. a [Grid Cell](/docs/components-layout-grid--docs). Page acts as the outermost catch-all.
