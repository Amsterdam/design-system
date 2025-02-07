import{j as e}from"./jsx-runtime-z8MfsBtr.js";import{useMDXComponents as o}from"./index-BAvqEBP-.js";import{M as i,e as s,P as a,f as l}from"./index-DV1WxBg4.js";import{I as m}from"./InvalidFormAlert.stories-DV40z41l.js";import"./index-C9rmetsa.js";import"./index-D7uoVdV3.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-DprsjUZp.js";import"./index-wgz3LQUQ.js";import"./index-Cu4lwwaE.js";import"./index-Brs1icLk.js";import"./index-ogSvIofg.js";import"./clsx-B-dksMZM.js";import"./Alert-D20aEm83.js";import"./index.esm-P1wEHiuM.js";import"./Icon-hgTynAJE.js";import"./Row-CWs564rB.js";import"./Heading-C0m3TTD4.js";import"./getHeadingTag-Dv1eMqvl.js";import"./IconButton-BSjC75tO.js";import"./LinkList-Dghyp6XS.js";const h=`<!-- @license CC0-1.0 -->

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
`,e.jsx(i,{of:m}),`
`,e.jsx(s,{children:h}),`
`,e.jsx(a,{}),`
`,e.jsx(l,{})]})}function G(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r()}export{G as default};
