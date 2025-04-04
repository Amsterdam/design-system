<!-- @license CC0-1.0 -->

# Card

Use a Card on an overview page to link to an article page, such as a news article, a job vacancy, or a search result.
A Card typically includes the title, introduction, and an image of the content.
The link is mandatory.

## Guidelines

- The title of a Card is a link within a Card Heading.
  The same guidelines as for regular [links](/docs/components-navigation-link--docs) and [headings](/docs/components-text-heading--docs) apply here.
  The link is active across the entire area of the Card.
- A Card needs more content than just a title.
  Supplement this with textual and/or visual content. Use the Card Image for images.
- Place the text in a regular paragraph.
  Only use the smallest text size for a tagline or date.
- Use the Card Heading and Card Image subcomponents to ensure proper vertical spacing within the Card. The Card Heading Group has the `gap` property set to ensure the correct spacing between its children, typically the Card Heading and a tagline. The vertical spacing can be overridden via our utility classes, but this is not recommended.
- This component may not be the best option if the content does not represent a detailed page.
  For referencing a thematic page, use a [top task link](/docs/components-navigation-top-task-link--docs).
  You can also use a [regular link](/docs/components-navigation-link--docs).

### Screen readers

With a screen reader, you can navigate using headings and links in a document.
The title of a Card is a link within a Card Heading, allowing you to utilize both navigation methods.
A screen reader reads the title first, followed by the rest of the content.

### Using links with routing libraries

Check out the [developer guide](/docs/docs-developer-guide-routing-libraries--docs) on how to integrate links with external routing libraries.
