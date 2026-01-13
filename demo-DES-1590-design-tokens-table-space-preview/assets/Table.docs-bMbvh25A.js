import{j as e}from"./iframe-Dx3tBSCK.js";import{useMDXComponents as o}from"./index-Cm8WOTwj.js";import{M as a,f as i,P as r,i as d}from"./blocks-NS2XOqyi.js";import{a as m,W as l}from"./Table.stories-DriBlBgw.js";import{D as p}from"./DesignTokensTable-Crs8EIUX.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BOhNFwf-.js";import"./BorderSample-BTSZ1UEW.js";import"./formatTokenValue-BYjgZrXg.js";import"./ColorSample-Cjeb0sTL.js";import"./SpacingSample-awuARjeK.js";const h=`<!-- @license CC0-1.0 -->

# Table

Use the table component to let users compare information in rows and columns.
Table is used to display simple information that does not need to be filtered or edited.

## Guidelines

- Add a caption to help users find, navigate and understand the table.
- Include a [Heading](https://designsystem.amsterdam/?path=/docs/components-text-heading--docs) in the Table Caption,
  unless the table is in a [Figure](http://designsystem.amsterdam/?path=/docs/components-media-figure--docs) which has a Figure Caption.
`,c={table:{color:{$value:"{ams.color.text.default}",$type:"color"},"font-family":{$value:"{ams.typography.font-family}",$type:"fontFamily"},"font-size":{$value:"{ams.typography.body-text.font-size}",$extensions:{"amsterdam.designsystem.type":"fontSize"}},"font-weight":{$value:"{ams.typography.body-text.font-weight}",$type:"fontWeight"},"line-height":{$value:"{ams.typography.body-text.line-height}",$extensions:{"amsterdam.designsystem.type":"lineHeight"}},caption:{"font-weight":{$value:"{ams.typography.body-text.bold.font-weight}",$type:"fontWeight"}},cell:{"border-block-end":{$value:"{ams.border.width.s} solid {ams.color.separator}",$type:"color"},"padding-block":{$value:"{ams.space.s}",$type:"dimension",$extensions:{"amsterdam.designsystem.subtype":"spacingSample"}},"padding-inline":{$value:"{ams.space.m}",$type:"dimension",$extensions:{"amsterdam.designsystem.subtype":"spacingSample"}}},"header-cell":{"font-weight":{$value:"{ams.typography.body-text.bold.font-weight}",$type:"fontWeight"}}}},y={ams:c};function s(n){const t={code:"code",h2:"h2",h3:"h3",p:"p",...o(),...n.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,`
`,`
`,e.jsx(a,{of:m}),`
`,e.jsx(i,{children:h}),`
`,e.jsx(r,{}),`
`,e.jsx(t.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(t.h3,{id:"with-footer-and-row-headers",children:"With footer and row headers"}),`
`,e.jsxs(t.p,{children:[`Use table headers to tell users what the rows and columns represent.
Use the scope attribute to help users of assistive technology distinguish between row and column headers.
Use `,e.jsx(t.code,{children:"Table.Footer"})," for a summary row."]}),`
`,e.jsx(d,{of:l}),`
`,e.jsx(t.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsx(p,{tokens:y})]})}function M(n={}){const{wrapper:t}={...o(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}export{M as default};
