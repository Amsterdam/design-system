<!-- @license CC0-1.0 -->

# Link

A link is a navigation element and can be used independently or inline with text.
It is the lightweight variant for navigation.

## Guidelines

Use a link in the following cases:

- To navigate to another page within the website or application
- To navigate to another website (see [External links](#external-links))
- To navigate to an element on the same page
- To link to emails or phone numbers (start the link with `mailto:` or `tel:`)

A link is a navigation component.
Use a button instead of a link when an action is desired.

### External links

Always include `rel="external"` for an external link.
Avoid `target="_blank"`, but use `rel="external noopener"` if necessary.
For more information: [Links to cross-origin destinations are unsafe](https://developer.chrome.com/docs/lighthouse/best-practices/external-anchors-use-rel-noopener/)

### Visited style

Visited links indicate that a user has already opened the link.
We discourage using styles for visited links because they often make the page less clear and navigation more challenging.
The inline link does have a visited style.
It is not part of navigation elements that are frequently scanned.

### Using links with routing libraries

Check out the [developer guide](/docs/docs-developer-guide-routing-libraries--docs) on how to integrate links with external routing libraries.

## Relevant WCAG requirements

- [WCAG 1.4.3](https://www.w3.org/TR/WCAG21/#contrast-minimum)
- [WCAG 2.4.4](https://www.w3.org/TR/WCAG21/#link-purpose-in-context)
- [WCAG 2.5.3](https://www.w3.org/TR/WCAG21/#label-in-name)
- [WCAG 3.1.2](https://www.w3.org/TR/WCAG21/#language-of-parts)

## References

- [Links to cross-origin destinations are unsafe](https://developer.chrome.com/docs/lighthouse/best-practices/external-anchors-use-rel-noopener/): Avoid `target="_blank"` or use `rel="external noopener"` if necessary.
- [_A comprehensive guide to designing perfect links in UX_, on Prototypr](https://blog.prototypr.io/a-guide-to-designing-perfect-links-in-ux-414558f35730): Best practices for links.
- [_Writing Hyperlinks: Salient, Descriptive, Start with Keyword_ by Norman Nielsen Group](https://www.nngroup.com/articles/writing-links/): How to write good links? An extensive article on links.
- [_Hover, focus, active_, by Wunder](https://wunder.io/wunderpedia/accessibility/accessible-uis/hover-focus-active/): A good explanation of the states that elements like links and buttons have in browsers.
- [MDN: `<a>`: The Anchor element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a): Comprehensive overview of all possibilities of links in HTML.
