import{j as e}from"./jsx-runtime-CKrituN3.js";import{M as r,d as a,P as l,e as h,f as s}from"./index-DCoJ-eVP.js";import{T as m,V as c,H as d,I as x,D as p}from"./TextArea.stories-DHVrGnO3.js";import{useMDXComponents as o}from"./index-DI5IigMn.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-DZUoMh1Y.js";import"../sb-preview/runtime.js";import"./index-BtM5VmRH.js";import"./index-Bw8VTzHM.js";import"./index-Cmc67Rxs.js";import"./index-DrFu-skq.js";import"./index.esm-CoJgIkPc.js";import"./exampleContent-BoywlOQx.js";const f=`<!-- @license CC0-1.0 -->

# TextArea

A form field that allows the user to input text over multiple lines.

## Guidelines

- Use a TextArea when users need to enter more than 1 sentence of text, such as a comment or description.
- The height of the TextArea should be appropriate for the information to be entered.
  - Use the experimental grow attribute to allow the TextArea to grow in height as the user types.
- A TextArea must have a label, and in most cases, this label should be visible.
- Use \`spellcheck="false"\` for fields that may contain sensitive information, such as passwords and personal data.
  Some browser extensions for spell-checking send this information to external servers.

## Accessibility

- [WCAG 2.1](https://www.w3.org/WAI/WCAG21/Techniques/html/H91.html) requires that the TextArea has a label or title attribute.
`;function i(n){const t=Object.assign({h2:"h2"},o(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:m}),`
`,e.jsx(a,{children:f}),`
`,e.jsx(l,{}),`
`,e.jsx(h,{}),`
`,e.jsx(t.h2,{id:"vertical-resize",children:"Vertical Resize"}),`
`,e.jsx(s,{of:c}),`
`,e.jsx(t.h2,{id:"horizontal-resize",children:"Horizontal Resize"}),`
`,e.jsx(s,{of:d}),`
`,e.jsx(t.h2,{id:"invalid",children:"Invalid"}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(t.h2,{id:"disabled",children:"Disabled"}),`
`,e.jsx(s,{of:p})]})}function H(n={}){const{wrapper:t}=Object.assign({},o(),n.components);return t?e.jsx(t,Object.assign({},n,{children:e.jsx(i,n)})):i(n)}export{H as default};
