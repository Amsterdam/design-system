import{j as e}from"./jsx-runtime-X2b_N9AH.js";import{useMDXComponents as o}from"./index-CRbi4mQH.js";import{M as s,d as a,P as d,e as c,f as i}from"./index-Cp_XCb3w.js";import{F as p,W as h,a as m}from"./Field.stories-DAoteyO-.js";import"./index-uCp2LrAq.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-D9WUdgQ_.js";import"../sb-preview/runtime.js";import"./index-BOkhicXD.js";import"./index-DXimoRZY.js";import"./index-B8K4vdXH.js";import"./index-DrFu-skq.js";import"./index.esm-C34ZmCBL.js";import"./clsx-B-dksMZM.js";import"./index.esm-DTv5ro-2.js";import"./Label-BnSmP98q.js";import"./Paragraph-DpVlyIEJ.js";const l=`<!-- @license CC0-1.0 -->

# Field

Wraps a single input and its related elements. May indicate that the input has a validation error.

## Guidelines

Only use Field to wrap a single input. Use [Field Set](/docs/components-forms-field-set--docs) to wrap multiple inputs.
`;function r(n){const t={code:"code",h2:"h2",p:"p",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:p}),`
`,e.jsx(a,{children:l}),`
`,e.jsx(d,{}),`
`,e.jsx(c,{}),`
`,e.jsx(t.h2,{id:"with-description",children:"With Description"}),`
`,e.jsxs(t.p,{children:[`A Field can have a description.
Make sure to connect this description to the input in the Field,
otherwise this won’t be read by a screen reader.
Add an `,e.jsx(t.code,{children:"aria-describedby"})," attribute to the input and provide the ",e.jsx(t.code,{children:"id"})," of the describing element as its value."]}),`
`,e.jsx(i,{of:h}),`
`,e.jsx(t.h2,{id:"with-error",children:"With Error"}),`
`,e.jsx(t.p,{children:"A Field can indicate if the contained input has a validation error."}),`
`,e.jsx(i,{of:m})]})}function k(n={}){const{wrapper:t}={...o(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(r,{...n})}):r(n)}export{k as default};
