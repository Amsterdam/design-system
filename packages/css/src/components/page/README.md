<!-- @license CC0-1.0 -->

# Page

Contains the entire website.

The Page component wraps the [Page Header](https://designsystem.amsterdam/?path=/docs/components-containers-page-header--docs),
[Page Footer](https://designsystem.amsterdam/?path=/docs/components-containers-page-footer--docs), and the main content in between.
It is centered horizontally and sets a maximum width of 90 rems (usually 1.440 pixels).
With a Menu, that becomes 120 rems (1.920 pixels).

## Guidelines

- As a root layout component, it must be used for all websites for the City of Amsterdam.
- Components can adapt their appearance to the width of a container component and ultimately the Page component through a [CSS container query](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Containment/Container_queries).
- Because Page spans the entire width of the page, it effectively allows components to adapt their appearance to the width of the viewport by using container queries instead of [CSS media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Media_queries).
