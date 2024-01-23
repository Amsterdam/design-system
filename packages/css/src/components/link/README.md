# Link

A link is used as a navigation element and can be used either as a standalone element or inline with text.
It is the lightweight variant for navigation.

## Guidelines

Use a link in the following cases:

- Navigation to another page within the website or application
- Navigation to another website (see [External links](#external-links))
- Navigation to an element on the same page
- Linking to emails or phone numbers (start the link with `mailto:` or `tel:`)

A link is a navigation component.
Use a button instead of a link when an action is desired.

<!--
  TODO: According to the spec, you should use a link for downloads as well.
  Last time I checked, different browsers handled this differently, which led to unexpected results.
  Maybe that changed in the meantime.
  Do we want to figure this out and describe this in the docs as well?
-->

### External links

Always include `rel="external"` for external links.
Avoid using `target="_blank"`, but use at least `rel="external noopener"` if necessary.
For more information: [Links to cross-origin destinations are unsafe](https://developer.chrome.com/docs/lighthouse/best-practices/external-anchors-use-rel-noopener/)

### Visited style

Visited links indicate that a user has already opened the link.
We discourage using styles for visited links as they often make the page cluttered and navigating through a page more difficult.
However, the inline link does have a visited style.
It is not part of navigation elements that are frequently scanned.

## Relevant WCAG requirements

- [WCAG 1.4.3](https://www.w3.org/TR/WCAG21/#contrast-minimum)
- [WCAG 2.4.4](https://www.w3.org/TR/WCAG21/#link-purpose-in-context)
- [WCAG 2.5.3](https://www.w3.org/TR/WCAG21/#label-in-name)
- [WCAG 3.1.2](https://www.w3.org/TR/WCAG21/#language-of-parts)

## References

- [Links to cross-origin destinations are unsafe](https://developer.chrome.com/docs/lighthouse/best-practices/external-anchors-use-rel-noopener/): Avoid `target="_blank"` or use `rel="external noopener"` if necessary.
- [_A comprehensive guide to designing perfect links in UX_, on Prototypr](https://blog.prototypr.io/a-guide-to-designing-perfect-links-in-ux-414558f35730): Best practices for links.
- [_Writing Hyperlinks: Salient, Descriptive, Start with Keyword_ by Norman Nielsen Group](https://www.nngroup.com/articles/writing-links/): How to write effective links? An in-depth article on links.
- [_Hover, focus, active_, by Wunder](https://wunder.io/wunderpedia/accessibility/accessible-uis/hover-focus-active/): A good explanation of the states that elements like links and buttons have in browsers.
- [MDN: `<a>`: The Anchor element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a): Comprehensive overview of all possibilities of links in HTML.
