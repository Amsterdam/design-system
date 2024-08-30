import{j as e}from"./jsx-runtime-BlAj40OV.js";import{useMDXComponents as o}from"./index-BI1Biiay.js";import{ae as a,ak as r,al as d,am as l,an as i}from"./index-DFczf4vS.js";import{T as c,V as h,H as m,N as p,I as x,D as f,a as j,b as u}from"./TextArea.stories-AiIm-bAJ.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-CzqMyrXg.js";import"../sb-preview/runtime.js";import"./index-BU4L-DQy.js";import"./index-D-8MO0q_.js";import"./index-nrpnv_Jx.js";import"./index-DrFu-skq.js";import"./index.esm-BEwyunnw.js";import"./clsx-B-dksMZM.js";import"./index.esm-Bsc2owIZ.js";import"./exampleContent-hIIPvEhU.js";const b=`<!-- @license CC0-1.0 -->

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
`;/*@license CC0-1.0*/function t(s){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",...o(),...s.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(a,{of:c}),`
`,e.jsx(r,{children:b}),`
`,e.jsx(d,{}),`
`,e.jsx(l,{}),`
`,e.jsx(n.h2,{id:"vertical-resize",children:"Vertical Resize"}),`
`,e.jsx(i,{of:h}),`
`,e.jsx(n.h2,{id:"horizontal-resize",children:"Horizontal Resize"}),`
`,e.jsx(i,{of:m}),`
`,e.jsx(n.h2,{id:"no-resize",children:"No Resize"}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(n.h2,{id:"invalid",children:"Invalid"}),`
`,e.jsx(i,{of:x}),`
`,e.jsx(n.h2,{id:"disabled",children:"Disabled"}),`
`,e.jsx(i,{of:f}),`
`,e.jsx(n.h3,{id:"in-a-field",children:"In a Field"}),`
`,e.jsxs(n.p,{children:[`Usually, you should place a Text Area inside a Field component.
Here’s an example of a Field component that includes a Label, a description, and a Text Area.
If you don’t need the description, just take out the description Paragraph and the `,e.jsx(n.code,{children:"aria-describedby"})," from the Text Input."]}),`
`,e.jsxs(n.p,{children:["For more information, check ",e.jsx(n.a,{href:"/docs/components-forms-field--docs",children:"the Field component documentation"}),"."]}),`
`,e.jsx(i,{of:j}),`
`,e.jsx(n.h3,{id:"in-an-invalid-field",children:"In an invalid Field"}),`
`,e.jsx(n.p,{children:"This is an example of an invalid Field with a Label, a description, an Error Message and a Text Area."}),`
`,e.jsxs(n.p,{children:["For more information, check ",e.jsx(n.a,{href:"/docs/components-forms-field--docs",children:"the Field component documentation"}),"."]}),`
`,e.jsx(i,{of:u})]})}function G(s={}){const{wrapper:n}={...o(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{G as default};
