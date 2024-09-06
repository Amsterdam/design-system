<!-- @license CC0-1.0 -->

# Label

Describes a form control.

## Guidelines

- Always associate a form element (such as an `input` or `textarea`) with a label.
- Make sure to set the `optional` prop to `true` if the associated form element is not required for form submission. The label will then get the descriptive text “(niet verplicht)” if the `hint` prop is not set.
- If a `hint` is provided its value will be displayed after the label regardless of the value of `optional`.
