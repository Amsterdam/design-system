import{j as e}from"./iframe-B3QdUnod.js";import{useMDXComponents as s}from"./index-DwFayp2I.js";import{M as a,f as i,P as r,i as d}from"./blocks-Cc2WAjKI.js";import{a as l,W as m}from"./Table.stories-dgiewIRY.js";import{D as h}from"./DesignTokensTable-DbG1rIoe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DBP9JHJu.js";import"./BorderSample-DMsAeVA5.js";const p=`<!-- @license CC0-1.0 -->

# Table

Use the table component to let users compare information in rows and columns.
Table is used to display simple information that does not need to be filtered or edited.

## Guidelines

- Add a caption to help users find, navigate and understand the table.
- Include a [Heading](https://designsystem.amsterdam/?path=/docs/components-text-heading--docs) in the Table Caption,
  unless the table is in a [Figure](http://designsystem.amsterdam/?path=/docs/components-media-figure--docs) which has a Figure Caption.
`,c={table:{color:{$value:"{ams.color.text.default}",$type:"color"},"font-family":{$value:"{ams.typography.font-family}",$type:"fontFamily"},"font-size":{$value:"{ams.typography.body-text.font-size}",$extensions:{"amsterdam.designsystem.type":"fontSize"}},"font-weight":{$value:"{ams.typography.body-text.font-weight}",$type:"fontWeight"},"line-height":{$value:"{ams.typography.body-text.line-height}",$extensions:{"amsterdam.designsystem.type":"lineHeight"}},caption:{"font-weight":{$value:"{ams.typography.body-text.bold.font-weight}",$type:"fontWeight"}},cell:{"border-block-end":{$value:"{ams.border.width.s} solid {ams.color.separator}",$type:"color"},"padding-block":{$value:"{ams.space.s}",$type:"dimension"},"padding-inline":{$value:"{ams.space.m}",$type:"dimension"}},"header-cell":{"font-weight":{$value:"{ams.typography.body-text.bold.font-weight}",$type:"fontWeight"}}}},y={ams:c};function o(n){const t={code:"code",h2:"h2",h3:"h3",p:"p",...s(),...n.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,`
`,`
`,e.jsx(a,{of:l}),`
`,e.jsx(i,{children:p}),`
`,e.jsx(r,{}),`
`,e.jsx(t.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(t.h3,{id:"with-footer-and-row-headers",children:"With footer and row headers"}),`
`,e.jsxs(t.p,{children:[`Use table headers to tell users what the rows and columns represent.
Use the scope attribute to help users of assistive technology distinguish between row and column headers.
Use `,e.jsx(t.code,{children:"Table.Footer"})," for a summary row."]}),`
`,e.jsx(d,{of:m}),`
`,e.jsx(t.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsx(h,{tokens:y})]})}function v(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o(n)}export{v as default};
