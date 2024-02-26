# TextArea

A form field that allows the user to input text over multiple lines.

## Guidelines

- Use a TextArea when users need to enter more than 1 sentence of text, such as a comment or description.
- The height of the TextArea should be appropriate for the information to be entered.
  - Use cols and rows attributes to set the width and height of the TextArea.
  - Use the experimental grow attribute to allow the TextArea to grow in height as the user types, this only works in modern browsers.
- A TextArea must have a label, and in most cases, this label should be visible.
- Use `spellcheck="false"` for fields that may contain sensitive information, such as passwords and personal data.
  Some browser extensions for spell-checking send this information to external servers.

## Accessibility

- [WCAG 2.1](https://www.w3.org/WAI/WCAG21/Techniques/html/H91.html) requires that the TextArea has a label ot title attribute.

## References

- [Intrinsic & Extrinsic Sizing](https://caniuse.com/?search=form-sizing%3A%20content) browser support.
