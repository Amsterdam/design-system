<!-- @license CC0-1.0 -->

# Card

A brief section of a heading, some text, and usually an image, that leads to a related page.

## Guidelines

- Each Card must have a Card Link.
  It only wraps the text of the Heading in markup, but it’s made to stretch the entire Card.
  The guidelines as for regular [links](/docs/components-navigation-link--docs) and [headings](/docs/components-text-heading--docs) apply.
- A Card needs more content than just a heading.
  Add a short paragraph and/or visual content.
- Use the Card Heading, Card Heading Group and Card Image subcomponents.
  They introduce the correct spacing.
- Place the text in a regular [Paragraph](/docs/components-text-paragraph--docs).
  Use a small Paragraph for a date.

### Screen readers

Screen reader users may navigate a page using headings and links.
A Card works well in both approaches as its titel carries a link.
A screen reader reads the title first, followed by the rest of the content.

### Using links with routing libraries

Check out the [developer guide](/docs/docs-developer-guide-routing-libraries--docs) on how to integrate links with external routing libraries.
