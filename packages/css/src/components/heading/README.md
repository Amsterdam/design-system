<!-- @license CC0-1.0 -->

# Heading

Introduces a page section and describes the following content.

## Guidelines

- Headings help the user scan the structure of a page.
  They also introduce the content that follows them.
- Users of screen readers often use headings to navigate the page.
  That’s why it’s important to nest Headings correctly.
  An incorrect hierarchy will confuse them.
- The `level` prop doesn’t have a default value; determine the correct level for each instance.
- Use the `size` prop to make a Heading visually larger or smaller, but sparingly and consistently:
  - Headings in large sections have size 3 Headings by default – e.g. Accordion, Alert, Dialog and the caption of a Table.
    Most of them can be given a different size if appropriate.
  - Smaller boxes get size 4 Headings, e.g. Card, Table of Content, and ‘Link blocks’:
    a Heading followed by one or more links and maybe some text.
    This is consistent and it fits their narrower width.

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
