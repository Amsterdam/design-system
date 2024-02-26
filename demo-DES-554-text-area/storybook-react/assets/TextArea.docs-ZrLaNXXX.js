import{j as e}from"./jsx-runtime-CKrituN3.js";import{M as i,d as a,P as h,e as l,f as n}from"./index-BzrTR4IS.js";import{T as c,V as d,H as m,G as x,I as p,D as f}from"./TextArea.stories-2N2Ue3OT.js";import{useMDXComponents as r}from"./index-DI5IigMn.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-DiSCSpIf.js";import"../sb-preview/runtime.js";import"./index-BtM5VmRH.js";import"./index-Bw8VTzHM.js";import"./index-Cmc67Rxs.js";import"./index-DrFu-skq.js";import"./index.esm-B9ehGRlc.js";import"./exampleContent-D2dPQ7p9.js";const j=`# TextArea

A form field that allows the user to input text over multiple lines.

## Guidelines

- Use a TextArea when users need to enter more than 1 sentence of text, such as a comment or description.
- The height of the TextArea should be appropriate for the information to be entered.
  - Use cols and rows attributes to set the width and height of the TextArea.
  - Use the experimental grow attribute to allow the TextArea to grow in height as the user types, this only works in modern browsers.
- A TextArea must have a label, and in most cases, this label should be visible.
- Use \`spellcheck="false"\` for fields that may contain sensitive information, such as passwords and personal data.
  Some browser extensions for spell-checking send this information to external servers.

## Accessibility

- [WCAG 2.1](https://www.w3.org/WAI/WCAG21/Techniques/html/H91.html) requires that the TextArea has a label ot title attribute.

## References

- [Intrinsic & Extrinsic Sizing](https://caniuse.com/?search=form-sizing%3A%20content) browser support.
`;function o(s){const t=Object.assign({h2:"h2",p:"p",code:"code"},r(),s.components);return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:c}),`
`,e.jsx(a,{children:j}),`
`,e.jsx(h,{}),`
`,e.jsx(l,{}),`
`,e.jsx(t.h2,{id:"vertical-resize",children:"Vertical Resize"}),`
`,e.jsx(n,{of:d}),`
`,e.jsx(t.h2,{id:"horizontal-resize",children:"Horizontal Resize"}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(t.h2,{id:"grow",children:"Grow"}),`
`,e.jsxs(t.p,{children:["To allow the textarea to grow in width and height as the user types, set the ",e.jsx(t.code,{children:"grow"})," prop to ",e.jsx(t.code,{children:"true"}),`.
The properties for `,e.jsx(t.code,{children:"cols"})," and ",e.jsx(t.code,{children:"rows"})," are ignored when ",e.jsx(t.code,{children:"grow"})," is set to ",e.jsx(t.code,{children:"true"}),"."]}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(t.h2,{id:"invalid",children:"Invalid"}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(t.h2,{id:"disabled",children:"Disabled"}),`
`,e.jsx(n,{of:f})]})}function I(s={}){const{wrapper:t}=Object.assign({},r(),s.components);return t?e.jsx(t,Object.assign({},s,{children:e.jsx(o,s)})):o(s)}export{I as default};
