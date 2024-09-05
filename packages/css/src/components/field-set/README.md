<!-- @license CC0-1.0 -->

# Field Set

A component to group related form inputs.

## Guidelines

- Use Field Set when you need to show a relationship between multiple form inputs. For example, you may need to group a set of text inputs into a single Field Set when asking for an address.
- If all the child form elements get a `required` attribute with the same value, then add the same property with that value to the Field Set. Also make sure to have an empty string as a value for the `flag` property on all the Label components to avoid many, redundant ‟not required” labels.
- If the various child form elements have mixed `required` attribute values then do the reverse and leave the `required` property undefined and set the `flag` property to an empty string on the Field Set and set the `required` property on the child labels and inputs as needed.

## Relevant WCAG requirements

- [WCAG 1.3.5](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html): Field Set labels the purpose of a group of inputs.

## References

- [Providing a description for groups of form controls using fieldset and legend elements](https://www.w3.org/WAI/WCAG22/Techniques/html/H71)
