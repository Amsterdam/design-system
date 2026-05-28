<!-- @license CC0-1.0 -->

# Page

Contains the entire website.

The Page component wraps the [Page Header](https://designsystem.amsterdam/?path=/docs/components-containers-page-header--docs), [Page Footer](https://designsystem.amsterdam/?path=/docs/components-containers-page-footer--docs), and the main content in between.
It is centered horizontally and sets a maximum width of 90 rems (usually 1440 pixels).
With a Menu, that becomes 120 rems (1920 pixels).

## Guidelines

- As a root layout component, it must be used for all websites for the City of Amsterdam.
- Page is a [query container](/docs/utilities-css-query-container--docs) for inline size, so that elements in it can adapt their appearance to the width of the page.
  For elements inside a [Grid Cell](/docs/components-layout-grid--docs) or [Dialog](/docs/components-containers-dialog--docs), those are the nearest container and take precedence; Page covers everything else.
