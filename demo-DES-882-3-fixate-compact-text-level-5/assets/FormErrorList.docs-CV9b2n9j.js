import{j as e}from"./jsx-runtime-BlAj40OV.js";import{useMDXComponents as o}from"./index-BI1Biiay.js";import{ae as i,ak as s,al as a,am as m}from"./index-7DDbNqkE.js";import{F as h}from"./FormErrorList.stories-DW6Rl-5Y.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-Czo47Q3x.js";import"../sb-preview/runtime.js";import"./index-BMdlDBjA.js";import"./index-D-8MO0q_.js";import"./index-nrpnv_Jx.js";import"./index-DrFu-skq.js";import"./clsx-B-dksMZM.js";import"./Alert-PdZqOsBw.js";import"./index.esm-BdsPla5o.js";import"./Icon-msbkstIT.js";import"./Heading-BgL7hu1i.js";import"./getHeadingElement-DiRwFEz7.js";import"./IconButton-DC-mU1yK.js";import"./LinkList-LwRwsEUt.js";const l=`<!-- @license CC0-1.0 -->

# Form Error List

Use this component at the top of a page to summarise any errors a user has made.
When a user makes an error, you must show both a Form Error List and an Error Message above each answer that contains an error.

## Guidelines

- Always show a Form Error List when there is a validation error, even if there’s only one.
- You must link the errors in the Form Error List to the answer they relate to (see below).

## Linking from the Form Error List to each answer

For questions that require a user to answer using a single field, like a file upload, select, textarea, text input or character count, link to the \`id\` of that field.

When a user has to enter their answer into multiple fields, such as day, month and year fields, link to the \`id\` of the first field that contains an error.
If you do not know which field contains an error, link to the \`id\` of the first field.

For questions that require a user to select one or more options from a list using Radios or Checkboxes, link to the \`id\` of the first Radio or Checkbox.

## Where to put the Form Error List

Put the Form Error List directly above the first question on the page. Place it outside of the \`<form>\`-tag, [to make sure screen readers do not skip it](https://nldesignsystem.nl/richtlijnen/formulieren/meerdere-stappen/#plaats-de-informatie-over-waar-de-gebruiker-is-in-de-stappen-boven-het-formulier).

## Error count in document title

This component adds the error count to the document title,
in line with [GOV.UK guidelines for informing users about validation errors](https://design-system.service.gov.uk/patterns/validation/#how-to-tell-the-user-about-validation-errors).

## Relevant WCAG requirements

Pay extra attention to these parts:

- [WCAG requirement 1.3.1](https://www.w3.org/TR/WCAG21/#info-and-relationships): the heading level of the Form Error List depends on where in the page it is placed, this may differ per page.

## References

- [Show an error summary above the form - NL Design System](https://www.nldesignsystem.nl/richtlijnen/formulieren/foutmeldingen#zet-een-samenvatting-van-de-foutmeldingen-boven-het-formulier)
- [Error Summary component - Gov.uk](https://design-system.service.gov.uk/components/error-summary/)
`;/*@license CC0-1.0*/function n(t){return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(i,{of:h}),`
`,e.jsx(s,{children:l}),`
`,e.jsx(a,{}),`
`,e.jsx(m,{})]})}function G(t={}){const{wrapper:r}={...o(),...t.components};return r?e.jsx(r,{...t,children:e.jsx(n,{...t})}):n()}export{G as default};
