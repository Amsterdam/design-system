import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{useMDXComponents as o}from"./index-DlpNa54Y.js";import{M as s,d,P as a,e as c,f as n}from"./index-BwA7DNpl.js";import{F as h,W as p,a as l}from"./Field.stories-BmQKIwE3.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-CGaf4KZl.js";import"../sb-preview/runtime.js";import"./index-B8XB3FuZ.js";import"./index-COebWTXQ.js";import"./index-B8K4vdXH.js";import"./index-DrFu-skq.js";import"./index.esm-CqAVusTv.js";import"./clsx-B-dksMZM.js";import"./index.esm-DQkeu4as.js";import"./Paragraph-C4jU4-Z4.js";const m=`<!-- @license CC0-1.0 -->

# Field

Wraps a single input and its related elements. May indicate that the input has a validation error.

## Guidelines

Only use Field to wrap a single input. Use [Field Set](/docs/components-forms-field-set--docs) to wrap multiple inputs.
`;function r(i){const t={code:"code",h2:"h2",p:"p",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:h}),`
`,e.jsx(d,{children:m}),`
`,e.jsx(a,{}),`
`,e.jsx(c,{}),`
`,e.jsx(t.h2,{id:"with-description",children:"With Description"}),`
`,e.jsxs(t.p,{children:[`A Field can have a description.
Make sure to connect this description to the input in the Field,
otherwise it won’t be read by a screen reader.
Add an `,e.jsx(t.code,{children:"aria-describedby"})," attribute to the input and provide the ",e.jsx(t.code,{children:"id"})," of the describing element as its value."]}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(t.h2,{id:"with-error",children:"With Error"}),`
`,e.jsxs(t.p,{children:[`A Field can indicate if the contained input has a validation error.
Use `,e.jsx(t.code,{children:"Field.ErrorMessage"}),` to describe the error.
Make sure to connect the error message to the input in the Field,
otherwise it won’t be read by a screen reader.
Add an `,e.jsx(t.code,{children:"aria-describedby"})," attribute to the input and provide the ",e.jsx(t.code,{children:"id"})," of ",e.jsx(t.code,{children:"Field.ErrorMessage"})," as its value."]}),`
`,e.jsx(n,{of:l})]})}function k(i={}){const{wrapper:t}={...o(),...i.components};return t?e.jsx(t,{...i,children:e.jsx(r,{...i})}):r(i)}export{k as default};
