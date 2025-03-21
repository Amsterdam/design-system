import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as s}from"./index-1Ha5aU2j.js";import{M as i,h as a,P as m,i as c,j as r}from"./index-BjMEHJ_5.js";import{E as h,C as d,W as p}from"./ErrorMessage.stories-BHqlU4-E.js";import"./index-yBjzXJbu.js";import"./index-C0MU9AHG.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-ezVSvJwx.js";import"./index-fNjTmf9T.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index.esm-DvoLfDtE.js";import"./clsx-B-dksMZM.js";import"./Icon-CJVFfJZC.js";const f=`<!-- @license CC0-1.0 -->

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
