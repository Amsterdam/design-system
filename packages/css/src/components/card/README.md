<!-- @license CC0-1.0 -->

# Card

A brief section of a heading, some text, and optionally an image, that leads to a related page.

## Guidelines

- The mandatory title of a card is a link within a Heading.
  The guidelines for regular [links](/docs/components-navigation-link--docs) and [headings](/docs/components-text-heading--docs) apply.
  The link is made active across the entire area of the card.
- A card needs more content than just a title.
  Add a short text and optionally an image and metadata.
- Use the Card Heading, Card Heading Group and Card Image subcomponents.
  They apply the correct spacing.
- Place the text in a regular [Paragraph](/docs/components-text-paragraph--docs).
  Use a small Paragraph for a publication date.
- This component is not the best option if the target content does not represent an article-like page.
  In that case, use a Heading, a Paragraph and a [Standalone Link](/docs/components-navigation-standalone-link--docs) instead.

### Screen readers

Screen reader users may navigate a page using headings and links.
A Card works well in both approaches as its title carries a link.
A screen reader reads the title first, followed by the rest of the content.

### Using links with routing libraries

Check out the [developer guide](/docs/docs-developer-guide-routing-libraries--docs) on how to integrate links with external routing libraries.
