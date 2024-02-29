import{j as e}from"./jsx-runtime-CKrituN3.js";import{M as i,d as a,P as h,e as l,f as s}from"./index-DQomOMvM.js";import{T as c,V as d,H as m,G as x,I as p,D as f}from"./TextArea.stories-DgXR0ZtC.js";import{useMDXComponents as o}from"./index-DI5IigMn.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-DYcKEKO7.js";import"../sb-preview/runtime.js";import"./index-BtM5VmRH.js";import"./index-Bw8VTzHM.js";import"./index-Cmc67Rxs.js";import"./index-DrFu-skq.js";import"./index.esm-Ciq-DD4p.js";import"./exampleContent-BoywlOQx.js";const j=`# TextArea

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

## References

- [Intrinsic & Extrinsic Sizing](https://caniuse.com/?search=form-sizing%3A%20content) browser support.
`;function r(n){const t=Object.assign({h2:"h2",p:"p",code:"code"},o(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:c}),`
`,e.jsx(a,{children:j}),`
`,e.jsx(h,{}),`
`,e.jsx(l,{}),`
`,e.jsx(t.h2,{id:"vertical-resize",children:"Vertical Resize"}),`
`,e.jsx(s,{of:d}),`
`,e.jsx(t.h2,{id:"horizontal-resize",children:"Horizontal Resize"}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(t.h2,{id:"grow",children:"Grow"}),`
`,e.jsxs(t.p,{children:["To allow the textarea to grow in width and height as the user types, set the ",e.jsx(t.code,{children:"grow"})," prop to ",e.jsx(t.code,{children:"true"}),`.
The properties for `,e.jsx(t.code,{children:"cols"})," and ",e.jsx(t.code,{children:"rows"})," are ignored when ",e.jsx(t.code,{children:"grow"})," is set to ",e.jsx(t.code,{children:"true"}),"."]}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(t.h2,{id:"invalid",children:"Invalid"}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(t.h2,{id:"disabled",children:"Disabled"}),`
`,e.jsx(s,{of:f})]})}function I(n={}){const{wrapper:t}=Object.assign({},o(),n.components);return t?e.jsx(t,Object.assign({},n,{children:e.jsx(r,n)})):r(n)}export{I as default};
