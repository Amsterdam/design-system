import{j as e}from"./index.esm-Oi0OnaUX.js";import{M as a,d as r,P as i,f as d}from"./index-irE5XBgA.js";import{T as m,W as c}from"./Table.stories-TaPaqM70.js";import{useMDXComponents as s}from"./index-_VGcpBFS.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./iframe-LzgjV4rW.js";import"../sb-preview/runtime.js";import"./index-jmm5gWkb.js";import"./index-ogXoivrg.js";import"./index-MVbLLYTZ.js";import"./index-PPLHz8o0.js";const l=`# Table

Use the table component to let users compare information in rows and columns.
Table is used to display simple information that does not need to be filtered or edited.

## Guidelines

- Use \`<Table.Caption>\` to describe a table in the same way you would use a heading.
  A caption helps users find, navigate and understand tables.
- Never use the table component to layout content on a page.
  Instead, use [Grid](https://amsterdam.github.io/design-system/?path=/docs/react_layout-grid--docs).
`;function o(n){const t=Object.assign({h2:"h2",h3:"h3",p:"p",code:"code"},s(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:m}),`
`,e.jsx(r,{children:l}),`
`,e.jsx(i,{}),`
`,e.jsx(t.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(t.h3,{id:"with-footer-and-row-headers",children:"With footer and row headers"}),`
`,e.jsxs(t.p,{children:[`Use table headers to tell users what the rows and columns represent.
Use the scope attribute to help users of assistive technology distinguish between row and column headers.
Use `,e.jsx(t.code,{children:"Table.Footer"})," for a summary row."]}),`
`,e.jsx(d,{of:c})]})}function C(n={}){const{wrapper:t}=Object.assign({},s(),n.components);return t?e.jsx(t,Object.assign({},n,{children:e.jsx(o,n)})):o(n)}export{C as default};
