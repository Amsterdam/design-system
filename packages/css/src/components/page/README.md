<!-- @license CC0-1.0 -->

# Page

Contains the entire website.

The Page component wraps the [Page Header](https://designsystem.amsterdam/?path=/docs/components-containers-page-header--docs),
[Page Footer](https://designsystem.amsterdam/?path=/docs/components-containers-page-footer--docs), and the main content in between.
It is centered horizontally and sets a maximum width of 90 rems (usually 1.440 pixels).
With a Menu, that becomes 120 rems (1.920 pixels).

## Guidelines

- As a root layout component, it must be used for all websites for the City of Amsterdam.
- Components placed inside Page can adapt their layout to the width of the Page itself, rather than the width of the browser window.
  This uses a [CSS container query](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Containment/Container_queries).
