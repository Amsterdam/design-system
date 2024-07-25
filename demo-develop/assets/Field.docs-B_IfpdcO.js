import{j as e}from"./jsx-runtime-BlAj40OV.js";import{useMDXComponents as o}from"./index-BI1Biiay.js";import{ae as s,ak as a,al as d,am as c,an as i}from"./index-BzXiveZu.js";import{F as p,W as h,a as l}from"./Field.stories-T3g1Ibv9.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-C8HhERbk.js";import"../sb-preview/runtime.js";import"./index-BU4L-DQy.js";import"./index-D-8MO0q_.js";import"./index-nrpnv_Jx.js";import"./index-DrFu-skq.js";import"./index.esm-DLRIDccq.js";import"./clsx-B-dksMZM.js";import"./index.esm-Bsc2owIZ.js";const m=`<!-- @license CC0-1.0 -->

# Field

Wraps a single input and its related elements. May indicate that the input has a validation error.

## Guidelines

Only use Field to wrap a single input. Use [Field Set](/docs/components-forms-field-set--docs) to wrap multiple inputs.
`;/*@license CC0-1.0*/function r(n){const t={code:"code",h2:"h2",p:"p",...o(),...n.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(s,{of:p}),`
`,e.jsx(a,{children:m}),`
`,e.jsx(d,{}),`
`,e.jsx(c,{}),`
`,e.jsx(t.h2,{id:"with-description",children:"With description"}),`
`,e.jsxs(t.p,{children:[`A Field can have a description.
Make sure to connect this description to the input in the Field,
otherwise it won’t be read by a screen reader.
Add an `,e.jsx(t.code,{children:"aria-describedby"})," attribute to the input and provide the ",e.jsx(t.code,{children:"id"})," of the describing element as its value."]}),`
`,e.jsx(i,{of:h}),`
`,e.jsx(t.h2,{id:"with-error",children:"With error"}),`
`,e.jsxs(t.p,{children:[`A Field can indicate if the contained input has a validation error.
Use Error Message to describe the error.
Make sure to connect the error message to the input in the Field,
otherwise it won’t be read by a screen reader.
Add an `,e.jsx(t.code,{children:"aria-describedby"})," attribute to the input and provide the ",e.jsx(t.code,{children:"id"})," of Error Message as its value."]}),`
`,e.jsx(i,{of:l})]})}function D(n={}){const{wrapper:t}={...o(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(r,{...n})}):r(n)}export{D as default};
