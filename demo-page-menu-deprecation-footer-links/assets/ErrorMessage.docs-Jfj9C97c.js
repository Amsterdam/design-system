import{j as e}from"./jsx-runtime-z8MfsBtr.js";import{useMDXComponents as s}from"./index-BAvqEBP-.js";import{M as i,e as a,P as m,f as c,h as r}from"./index-f_tFj7CU.js";import{E as h,C as d,W as p}from"./ErrorMessage.stories-DqsIKOh0.js";import"./index-C9rmetsa.js";import"./index-D7uoVdV3.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-2s1fQP0l.js";import"./index-wgz3LQUQ.js";import"./index-Cu4lwwaE.js";import"./index-Brs1icLk.js";import"./index-ogSvIofg.js";import"./index.esm-P1wEHiuM.js";import"./clsx-B-dksMZM.js";import"./Icon-BPwTIPQC.js";const f=`<!-- @license CC0-1.0 -->

# Error Message

Show an error message when there is a form field validation error.
In the error message explain what went wrong and how to fix it.

For guidance and examples on using error messages in a form,
refer to the [Field](/docs/components-forms-field--docs) and [Field Set](/docs/components-forms-field-set--docs) documentation.

Read the documentation by [NL Design System](https://www.nldesignsystem.nl/richtlijnen/formulieren/foutmeldingen) and [Gov.uk](https://design-system.service.gov.uk/components/error-message/) for more information on the contents of error messages and when to show them.
`;/*@license CC0-1.0*/function t(n){const o={code:"code",h2:"h2",h3:"h3",p:"p",...s(),...n.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(i,{of:h}),`
`,e.jsx(a,{children:f}),`
`,e.jsx(m,{}),`
`,e.jsx(c,{}),`
`,e.jsx(o.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(o.h3,{id:"custom-prefix",children:"Custom prefix"}),`
`,e.jsxs(o.p,{children:[`Error messages are automatically prefixed with a visually hidden text, the Dutch word "Invoerfout".
This makes the error message more clear for screen reader users.
If you want to change this prefix, to support another language for example, you can use the `,e.jsx(o.code,{children:"prefix"})," prop."]}),`
`,e.jsx(r,{of:d}),`
`,e.jsx(o.h3,{id:"with-custom-icon",children:"With custom icon"}),`
`,e.jsx(o.p,{children:`Replace the icon with another to use Error Message in a different theme or visual identity.
Applications for the City of Amsterdam must use the default icon.`}),`
`,e.jsx(r,{of:p})]})}function R(n={}){const{wrapper:o}={...s(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(t,{...n})}):t(n)}export{R as default};
