<!-- @license CC0-1.0 -->

# Tabs

Discloses related pieces of content in a secondary area on the page.

## Guidelines

- Use Tabs to let related content fragments share a space on the current page.
  Each tab has a button that shows its content in a panel.
- Do not make it toggle between large amounts of primary content.
  That would come down to navigating between pages.
  In this context, use [Tab Navigation](/docs/components-navigation-tab-navigation--docs) to offer the user the benefits of links.
- The content of each tab must be usable independent of the others.
- Create a panel for each button.
  Add an `aria-controls` attribute to each button and match its value to the `id` of the associated panel.
