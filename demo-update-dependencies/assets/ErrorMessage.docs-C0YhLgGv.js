import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as s}from"./index-CxbY7dAs.js";import{M as i,e as a,P as m,f as c,h as r}from"./index-BHgg25fL.js";import{E as h,C as d,W as p}from"./ErrorMessage.stories-BseUOO16.js";import"./index-yBjzXJbu.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B4q2Zsfe.js";import"./index-CJ88nXQk.js";import"./index-Cf9b6H0j.js";import"./index-DrFu-skq.js";import"./index.esm-D3RaMjqb.js";import"./clsx-B-dksMZM.js";import"./Icon-Pril9caF.js";const f=`<!-- @license CC0-1.0 -->

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
`,e.jsx(r,{of:p})]})}function I(n={}){const{wrapper:o}={...s(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(t,{...n})}):t(n)}export{I as default};
