import{j as e}from"./jsx-runtime-BjgbQsUx.js";import{useMDXComponents as o}from"./index-3rgQkYFR.js";import{ae as s,aq as a,ar as d,as as c,at as i}from"./index-CVjkP0S9.js";import{F as h,W as p,a as l}from"./Field.stories-0gI8y-No.js";import"./index-D2MAbzvX.js";import"./index-RigO-4kf.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-Dp2VuOBv.js";import"../sb-preview/runtime.js";import"./index-BIm0odtm.js";import"./index-D-8MO0q_.js";import"./index-CHGET4sZ.js";import"./index-DrFu-skq.js";import"./index.esm-C0OPbFsf.js";import"./clsx-B-dksMZM.js";import"./index.esm-Bz9pa_xK.js";const m=`<!-- @license CC0-1.0 -->

# Field

Wraps a single input and its related elements. May indicate that the input has a validation error.

## Guidelines

- Only use Field to wrap a single input. Use [Field Set](/docs/components-forms-field-set--docs) to wrap multiple inputs.
`;/*@license CC0-1.0*/function r(t){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",...o(),...t.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(s,{of:h}),`
`,e.jsx(a,{children:m}),`
`,e.jsx(d,{}),`
`,e.jsx(c,{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"with-description",children:"With description"}),`
`,e.jsxs(n.p,{children:[`A Field can have a description.
Make sure to connect this description to the input in the Field,
otherwise it won’t be read by a screen reader.
Add an `,e.jsx(n.code,{children:"aria-describedby"})," attribute to the input and provide the ",e.jsx(n.code,{children:"id"})," of the describing element as its value."]}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(n.h3,{id:"with-validation",children:"With validation"}),`
`,e.jsxs(n.p,{children:[`A Field can indicate if the contained input has a validation error.
Use an `,e.jsx(n.a,{href:"/docs/components-forms-error-message--docs",children:"Error Message"}),` to describe the error.
Make sure to connect the Error Message to the input in the Field,
otherwise it won’t be read by a screen reader.
Add an `,e.jsx(n.code,{children:"aria-describedby"})," attribute to the input and provide the ",e.jsx(n.code,{children:"id"})," of Error Message as its value."]}),`
`,e.jsx(i,{of:l})]})}function k(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{k as default};
