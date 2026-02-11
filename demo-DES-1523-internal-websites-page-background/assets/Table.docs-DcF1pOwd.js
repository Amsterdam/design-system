import{j as e}from"./iframe-BHy15Hmi.js";import{useMDXComponents as s}from"./index-BkaZBAJ-.js";import{M as a,e as i,f as r,i as d}from"./blocks-DNQ3RWLN.js";import{a as l,W as m}from"./Table.stories-B1dSJl_s.js";import{D as p}from"./DesignTokensTable-Cr4veNJ2.js";import"./preload-helper-PPVm8Dsz.js";import"./index-yCf5iRi7.js";import"./BorderSample-33-ZA_Ht.js";import"./formatTokenValue-BYjgZrXg.js";import"./Code-aHsK0Ajx.js";import"./ColorSample-BHnCtrP2.js";import"./SpaceSample-CAvUnIol.js";import"./TypographySample-DelBPUeq.js";const h=`<!-- @license CC0-1.0 -->

# Table

Use the table component to let users compare information in rows and columns.
Table is used to display simple information that does not need to be filtered or edited.

## Guidelines

- Add a caption to help users find, navigate and understand the table.
- Include a [Heading](https://designsystem.amsterdam/?path=/docs/components-text-heading--docs) in the Table Caption,
  unless the table is in a [Figure](http://designsystem.amsterdam/?path=/docs/components-media-figure--docs) which has a Figure Caption.
`,c={table:{color:{$value:"{ams.color.text.default}",$type:"color"},"font-family":{$value:"{ams.typography.font-family}",$type:"fontFamily"},"font-size":{$value:"{ams.typography.body-text.font-size}",$extensions:{"nl.amsterdam.type":"fontSize"}},"font-weight":{$value:"{ams.typography.body-text.font-weight}",$type:"fontWeight"},"line-height":{$value:"{ams.typography.body-text.line-height}",$extensions:{"nl.amsterdam.type":"lineHeight"}},caption:{"font-weight":{$value:"{ams.typography.body-text.bold.font-weight}",$type:"fontWeight"}},cell:{"border-block-end":{$value:"{ams.border.width.s} solid {ams.color.separator}"},"padding-block":{$value:"{ams.space.s}",$type:"dimension",$extensions:{"nl.amsterdam.subtype":"space"}},"padding-inline":{$value:"{ams.space.m}",$type:"dimension",$extensions:{"nl.amsterdam.subtype":"space"}}},"header-cell":{"font-weight":{$value:"{ams.typography.body-text.bold.font-weight}",$type:"fontWeight"}}}},u={ams:c};function o(n){const t={code:"code",h2:"h2",h3:"h3",p:"p",...s(),...n.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,`
`,`
`,e.jsx(a,{of:l}),`
`,e.jsx(i,{children:h}),`
`,e.jsx(r,{}),`
`,e.jsx(t.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(t.h3,{id:"with-footer-and-row-headers",children:"With footer and row headers"}),`
`,e.jsxs(t.p,{children:[`Use table headers to tell users what the rows and columns represent.
Use the scope attribute to help users of assistive technology distinguish between row and column headers.
Use `,e.jsx(t.code,{children:"Table.Footer"})," for a summary row."]}),`
`,e.jsx(d,{of:m}),`
`,e.jsx(t.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsx(p,{tokens:u})]})}function D(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o(n)}export{D as default};
