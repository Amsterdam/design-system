<!-- @license CC0-1.0 -->

# Heading

Introduces a page section and describes the following content.

## Guidelines

- Headings help the user scan the structure of a page.
  They also introduce the content that follows them.
- Users of screen readers often depend on headings to navigate a page.
  If the hierarchy is wrong, it can confuse them.
  That’s why it’s crucial to arrange headings properly.
- The `level` prop doesn’t have a default value; determine the correct level for each instance.
  - Every page should contain one heading with level 1.
  - Do not skip levels. For example, a level 2 Heading must be followed by one with level 3.
- Use the `size` prop to make a Heading visually larger or smaller, but sparingly and consistently.
  - Content pages, e.g. for articles, products, events etc. must not use the size prop on their Headings.
  - Most headings on overview pages, e.g. Card, Table of Content, and ‘Link blocks’, use Heading size 3.
  - The same applies to large sections – e.g. Accordion, Alert, Dialog and the caption of a Table.
    Most of them can be given a different size if appropriate.

## Relevant WCAG requirements

- [WCAG 1.3.1](https://www.w3.org/WAI/WCAG21/quickref/#qr-content-structure-separation-programmatic):
  Text that looks like a heading is also recognized as a heading by a computer.
  Using the correct heading level makes the page structure clear for all users.
- [WCAG 2.4.1](https://www.w3.org/WAI/WCAG21/quickref/#qr-navigation-mechanisms-skip): Headings can be used to navigate to the next section with the keyboard.
- [WCAG 2.4.6](https://www.w3.org/WAI/WCAG21/quickref/#headings-and-labels): Use headings to describe the purpose or subject of the underlying content.
- [WCAG 2.4.10](https://www.w3.org/WAI/WCAG21/quickref/#qr-navigation-mechanisms-headings): Use headings to structure the content.

## References

- [W3C - Headings](https://www.w3.org/WAI/tutorials/page-structure/headings/)
- [W3C - Headings & labels](https://www.w3.org/TR/WCAG21/#headings-and-labels)
- [A11Y project - Heading structure](https://www.a11yproject.com/posts/how-to-accessible-heading-structure/)
