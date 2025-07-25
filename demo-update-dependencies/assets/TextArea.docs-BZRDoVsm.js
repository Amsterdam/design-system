import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as t}from"./index-CxbY7dAs.js";import{M as r,e as a,P as d,f as l,h as i}from"./index-BHgg25fL.js";import{T as h,V as c,H as m,N as x,I as f,D as p,a as j,b as u}from"./TextArea.stories-Cz6B6Cc_.js";import"./index-yBjzXJbu.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B4q2Zsfe.js";import"./index-CJ88nXQk.js";import"./index-Cf9b6H0j.js";import"./index-DrFu-skq.js";import"./index.esm-DDzNsyt1.js";import"./clsx-B-dksMZM.js";import"./index.esm-D3RaMjqb.js";import"./exampleContent-B9pMnolB.js";const b=`<!-- @license CC0-1.0 -->

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
`;/*@license CC0-1.0*/function o(s){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",...t(),...s.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(r,{of:h}),`
`,e.jsx(a,{children:b}),`
`,e.jsx(d,{}),`
`,e.jsx(l,{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"vertical-resize",children:"Vertical resize"}),`
`,e.jsx(i,{of:c}),`
`,e.jsx(n.h3,{id:"horizontal-resize",children:"Horizontal resize"}),`
`,e.jsx(i,{of:m}),`
`,e.jsx(n.h3,{id:"no-resize",children:"No resize"}),`
`,e.jsx(i,{of:x}),`
`,e.jsx(n.h3,{id:"invalid",children:"Invalid"}),`
`,e.jsx(i,{of:f}),`
`,e.jsx(n.h3,{id:"disabled",children:"Disabled"}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(n.h4,{id:"in-a-field",children:"In a Field"}),`
`,e.jsx(n.p,{children:"Use a Field to group a Text Area with a Label, description and / or an Error Message."}),`
`,e.jsxs(n.p,{children:["If you don’t need the description, remove its Paragraph and the ",e.jsx(n.code,{children:"aria-describedby"})," from the Text Input."]}),`
`,e.jsxs(n.p,{children:["Check ",e.jsx(n.a,{href:"/docs/components-forms-field--docs",children:"the Field docs"})," for more information on configuring it."]}),`
`,e.jsx(i,{of:j}),`
`,e.jsx(n.h4,{id:"in-a-field-with-validation",children:"In a Field with validation"}),`
`,e.jsxs(n.p,{children:["If the Text Area can become invalid, add an Error Message and its ",e.jsx(n.code,{children:"id"})," to the ",e.jsx(n.code,{children:"aria-describedby"})," prop of the Text Area."]}),`
`,e.jsxs(n.p,{children:["Check ",e.jsx(n.a,{href:"/docs/components-forms-field--docs",children:"the Field docs"})," for more information on configuring it."]}),`
`,e.jsx(i,{of:u})]})}function H(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(o,{...s})}):o(s)}export{H as default};
