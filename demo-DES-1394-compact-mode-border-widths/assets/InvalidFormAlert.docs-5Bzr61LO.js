import{j as e}from"./iframe-BRVb4hR1.js";import{useMDXComponents as o}from"./index-BWppESBR.js";import{M as i,c as s,P as a,e as l}from"./blocks-TmPDuuNq.js";import{I as h}from"./InvalidFormAlert.stories-fNI7-oQE.js";import"./index-DuphxkYy.js";import"./Alert-CIu4q8-a.js";import"./Icon-B9B6kEnc.js";import"./Row-B27YBqHk.js";import"./Heading-75f-8dLz.js";import"./getHeadingTag-C4Rztoc8.js";import"./IconButton-hHYG7pUB.js";import"./LinkList-C8J0HtOm.js";const m=`<!-- @license CC0-1.0 -->

# Invalid Form Alert

Use this component at the top of a page to summarise any errors a user has made.
When a user makes an error, you must show both a Invalid Form Alert and an Error Message above each answer that contains an error.

## Guidelines

- Always show an Invalid Form Alert when there is a validation error, even if there’s only one.
- You must link the errors in the Invalid Form Alert to the answer they relate to (see below).

## Linking from the Invalid Form Alert to each answer

For questions that require a user to answer using a single field, like a file upload, select, textarea or text input, link to the \`id\` of that field.

When a user has to enter their answer into multiple fields, such as day, month and year fields, link to the \`id\` of the first field that contains an error.
If you do not know which field contains an error, link to the \`id\` of the first field.

For questions that require a user to select one or more options from a list using Radios or Checkboxes, link to the \`id\` of the first Radio or Checkbox.

## Where to put the Invalid Form Alert

Put the Invalid Form Alert directly above the first question on the page. Place it outside of the \`<form>\`-tag, [to make sure screen readers do not skip it](https://nldesignsystem.nl/richtlijnen/formulieren/meerdere-stappen/#plaats-de-informatie-over-waar-de-gebruiker-is-in-de-stappen-boven-het-formulier).

## Error count in document title

This component adds the error count to the document title,
in line with [GOV.UK guidelines for informing users about validation errors](https://design-system.service.gov.uk/patterns/validation/#how-to-tell-the-user-about-validation-errors).

## Focus on initial render

This component receives focus the first time it gets displayed on a page.
This allows keyboard users to quickly navigate to the errors in the form.
It also scrolls the component into view if it isn't already.
Note: this functionality has been disabled on this page, to prevent unexpected focus behaviour.

## Relevant WCAG requirements

Pay extra attention to these parts:

- [WCAG requirement 1.3.1](https://www.w3.org/TR/WCAG21/#info-and-relationships): the heading level of the Invalid Form Alert depends on where in the page it is placed, this may differ per page.

## References

- [Show an error summary above the form - NL Design System](https://www.nldesignsystem.nl/richtlijnen/formulieren/foutmeldingen#zet-een-samenvatting-van-de-foutmeldingen-boven-het-formulier)
- [Error Summary component - Gov.uk](https://design-system.service.gov.uk/components/error-summary/)
`;/*@license CC0-1.0*/function r(t){return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(i,{of:h}),`
`,e.jsx(s,{children:m}),`
`,e.jsx(a,{}),`
`,e.jsx(l,{})]})}function A(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r()}export{A as default};
