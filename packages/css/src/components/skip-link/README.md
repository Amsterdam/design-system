<!-- @license CC0-1.0 -->

# Skip Link

Allows skipping past recurring navigation blocks at the top of a page.

## Design

The Skip Link sits above the Page Header and is as wide as the Page container.
It remains hidden until activated with the ‘Tab’ key.
After appearing, it pushes the rest of the page down.

## Guidelines

- Place the Skip Link as the first element in the [Page](/docs/components-containers-page--docs) container.
- Direct the Skip Link to the main content area on the Page.
  Typically, this is the `main` HTML element.
  Repeated navigation blocks such as Breadcrumbs and back Links do not belong to the main content area.
- Set `id="inhoud"` on the `main` HTML element and then use `href="#inhoud"` on the Skip Link.
- Complex pages with multiple sections may benefit from more than one Skip Link.
  If you need multiple words to describe a Skip Link target, use kebab case (`id="op-deze-manier"`).
- Skip Links are unnecessary on a simple page with only text and minimal navigation.
