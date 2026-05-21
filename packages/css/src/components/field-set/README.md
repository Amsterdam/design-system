<!-- @license CC0-1.0 -->

# Field Set

Groups a set of Radio buttons or Checkboxes, or other related form fields.

## Guidelines

- Group a collection of [Radio](/docs/components-forms-radio--docs) buttons or [Checkboxes](/docs/components-forms-checkbox--docs) into a Field Set.
  This allows them to share a label, description, and error message, while each option still has its own label.
- A Field Set can also express the relation between a group of inputs or other controls.
  For instance, you might want to group several text inputs into one Field Set when requesting an address or various parts of a name.
- Mark a Field Set as `optional` only for a list of Radios or Checkboxes, and if selecting any option is not necessary.
- There’s no need to add white space between the children of a Field Set.
  The component does this automatically.

## Relevant WCAG requirements

- [WCAG 1.3.5](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html): Field Set labels the purpose of a group of inputs.

## References

- [Providing a description for groups of form controls using fieldset and legend elements](https://www.w3.org/WAI/WCAG22/Techniques/html/H71)
