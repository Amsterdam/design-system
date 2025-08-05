import{j as e}from"./iframe-DENEZL2I.js";import{useMDXComponents as s}from"./index-D-l79V4T.js";import{M as a,c as r,P as i,f as d}from"./blocks-F15SYfIG.js";import{T as l,W as c}from"./Table.stories-DLN_92BS.js";import"./index-D9rkhaQ_.js";const h=`<!-- @license CC0-1.0 -->

# Table

Use the table component to let users compare information in rows and columns.
Table is used to display simple information that does not need to be filtered or edited.

## Guidelines

- Use \`<Table.Caption>\` to describe a table in the same way you would use a heading.
  A caption helps users find, navigate and understand tables.
- Never use the table component to layout content on a page.
  Instead, use [Grid](/docs/components-layout-grid--docs).
`;/*@license CC0-1.0*/function t(o){const n={code:"code",h2:"h2",h3:"h3",p:"p",...s(),...o.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(a,{of:l}),`
`,e.jsx(r,{children:h}),`
`,e.jsx(i,{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"with-footer-and-row-headers",children:"With footer and row headers"}),`
`,e.jsxs(n.p,{children:[`Use table headers to tell users what the rows and columns represent.
Use the scope attribute to help users of assistive technology distinguish between row and column headers.
Use `,e.jsx(n.code,{children:"Table.Footer"})," for a summary row."]}),`
`,e.jsx(d,{of:c})]})}function b(o={}){const{wrapper:n}={...s(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}export{b as default};
