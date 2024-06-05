import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{useMDXComponents as n}from"./index-DlpNa54Y.js";import{M as s,d as i,P as a,e as m}from"./index-B1yD5ooZ.js";import{F as h}from"./FormErrorList.stories-ing33UPL.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-BtX_Rojp.js";import"../sb-preview/runtime.js";import"./index-B8XB3FuZ.js";import"./index-COebWTXQ.js";import"./index-B8K4vdXH.js";import"./index-DrFu-skq.js";import"./clsx-B-dksMZM.js";import"./Alert-BMOTcvbP.js";import"./index.esm-BvH5J7G8.js";import"./Icon-CuaumHXX.js";import"./Heading-CWbN3elW.js";import"./getHeadingElement-DiRwFEz7.js";import"./IconButton-B5n6IYCn.js";import"./VisuallyHidden-Db-04MJ9.js";import"./LinkList-TSzjYT6j.js";const u=`<!-- @license CC0-1.0 -->

# Form Error List

Use this component at the top of a page to summarise any errors a user has made.
When a user makes an error, you must show both a Form Error List and an Error Message above each answer that contains an error.

## Guidelines

- Always show an error summary when there is a validation error, even if there’s only one.
- You must link the errors in the error summary to the answer they relate to (see below).

## Linking from the error summary to each answer

For questions that require a user to answer using a single field, like a file upload, select, textarea, text input or character count, link to the \`id\` of that field.

When a user has to enter their answer into multiple fields, such as day, month and year fields, link to the \`id\` of the first field that contains an error.
If you do not know which field contains an error, link to the \`id\` of the first field.

For questions that require a user to select one or more options from a list using Radios or Checkboxes, link to the \`id\` of first Radio or Checkbox.

## Where to put the error summary

Put the error summary at the top of the main container, outside of the \`<form>\`-tag. If your page includes breadcrumbs or a back link, place it below these, but above the \`<h1>\`.

## Relevant WCAG requirements

Pay extra attention to these parts:

- [WCAG requirement 1.3.1](https://www.w3.org/TR/WCAG21/#info-and-relationships): the heading level of the accordion sections depends on where in the page the accordion is placed, this may differ per page.

## References

- [Show an error summary above the form - NL Design System](https://www.nldesignsystem.nl/richtlijnen/formulieren/foutmeldingen#zet-een-samenvatting-van-de-foutmeldingen-boven-het-formulier)
- [Error Summary component - Gov.uk](https://design-system.service.gov.uk/components/error-summary/)
`;function o(r){return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:h}),`
`,e.jsx(i,{children:u}),`
`,e.jsx(a,{}),`
`,e.jsx(m,{})]})}function A(r={}){const{wrapper:t}={...n(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(o,{...r})}):o()}export{A as default};
