import{j as e}from"./jsx-runtime-BlAj40OV.js";import{useMDXComponents as s}from"./index-BI1Biiay.js";import{ae as r,ak as a,al as d,am as l,an as i}from"./index-BVjh-M6o.js";import{T as h,V as c,H as m,N as x,I as p,D as f,a as j,b as u}from"./TextArea.stories-GZZO03_2.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-DhfYZI8l.js";import"../sb-preview/runtime.js";import"./index-BU4L-DQy.js";import"./index-D-8MO0q_.js";import"./index-nrpnv_Jx.js";import"./index-DrFu-skq.js";import"./index.esm-BEwyunnw.js";import"./clsx-B-dksMZM.js";import"./index.esm-Bsc2owIZ.js";import"./exampleContent-hIIPvEhU.js";const b=`<!-- @license CC0-1.0 -->

# TextArea

A form field that allows the user to input text over multiple lines.

## Guidelines

- Use a TextArea when users need to enter more than 1 sentence of text, such as a comment or description.
- The height of the TextArea should be appropriate for the information to be entered.
- A TextArea must have a label, and in most cases, this label should be visible.
- Use \`spellcheck="false"\` for fields that may contain sensitive information, such as passwords and personal data.
  Some browser extensions for spell-checking send this information to external servers.

## Accessibility

- [WCAG 2.1](https://www.w3.org/WAI/WCAG21/Techniques/html/H91.html) requires that the TextArea has a label or title attribute.
`;/*@license CC0-1.0*/function t(o){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",...s(),...o.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(r,{of:h}),`
`,e.jsx(a,{children:b}),`
`,e.jsx(d,{}),`
`,e.jsx(l,{}),`
`,e.jsx(n.h2,{id:"vertical-resize",children:"Vertical Resize"}),`
`,e.jsx(i,{of:c}),`
`,e.jsx(n.h2,{id:"horizontal-resize",children:"Horizontal Resize"}),`
`,e.jsx(i,{of:m}),`
`,e.jsx(n.h2,{id:"no-resize",children:"No Resize"}),`
`,e.jsx(i,{of:x}),`
`,e.jsx(n.h2,{id:"invalid",children:"Invalid"}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(n.h2,{id:"disabled",children:"Disabled"}),`
`,e.jsx(i,{of:f}),`
`,e.jsx(n.h3,{id:"in-a-field",children:"In a Field"}),`
`,e.jsx(n.p,{children:"Use a Field to group a Text Area with a Label, description and / or an Error Message."}),`
`,e.jsxs(n.p,{children:["If you don’t need the description, remove its Paragraph and the ",e.jsx(n.code,{children:"aria-describedby"})," from the Text Input."]}),`
`,e.jsxs(n.p,{children:["Check ",e.jsx(n.a,{href:"/docs/components-forms-field--docs",children:"the Field component documentation"})," for more information on configuring it."]}),`
`,e.jsx(i,{of:j}),`
`,e.jsx(n.h3,{id:"in-a-field-with-validation",children:"In a Field With Validation"}),`
`,e.jsxs(n.p,{children:["If the Text Area can become invalid, add an Error Message and its ",e.jsx(n.code,{children:"id"})," to the ",e.jsx(n.code,{children:"aria-describedby"})," prop of the Text Area."]}),`
`,e.jsxs(n.p,{children:["Check ",e.jsx(n.a,{href:"/docs/components-forms-field--docs",children:"the Field component documentation"})," for more information on configuring it."]}),`
`,e.jsx(i,{of:u})]})}function W(o={}){const{wrapper:n}={...s(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}export{W as default};
