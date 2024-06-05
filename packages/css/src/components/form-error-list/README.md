<!-- @license CC0-1.0 -->

# Form Error List

Use this component at the top of a page to summarise any errors a user has made.
When a user makes an error, you must show both a Form Error List and an Error Message above each answer that contains an error.

## Guidelines

- Always show an error summary when there is a validation error, even if there’s only one.
- You must link the errors in the error summary to the answer they relate to (see below).

## Linking from the error summary to each answer

For questions that require a user to answer using a single field, like a file upload, select, textarea, text input or character count, link to the `id` of that field.

When a user has to enter their answer into multiple fields, such as day, month and year fields, link to the `id` of the first field that contains an error.
If you do not know which field contains an error, link to the `id` of the first field.

For questions that require a user to select one or more options from a list using Radios or Checkboxes, link to the `id` of first Radio or Checkbox.

## Where to put the error summary

Put the error summary at the top of the main container, outside of the `<form>`-tag. If your page includes breadcrumbs or a back link, place it below these, but above the `<h1>`.

## Relevant WCAG requirements

Pay extra attention to these parts:

- [WCAG requirement 1.3.1](https://www.w3.org/TR/WCAG21/#info-and-relationships): the heading level of the accordion sections depends on where in the page the accordion is placed, this may differ per page.

## References

- [Show an error summary above the form - NL Design System](https://www.nldesignsystem.nl/richtlijnen/formulieren/foutmeldingen#zet-een-samenvatting-van-de-foutmeldingen-boven-het-formulier)
- [Error Summary component - Gov.uk](https://design-system.service.gov.uk/components/error-summary/)
