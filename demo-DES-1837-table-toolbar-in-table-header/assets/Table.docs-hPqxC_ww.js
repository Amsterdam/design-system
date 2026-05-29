import{n as e}from"./chunk-DnJy8xQt.js";import{Vt as t}from"./iframe-CIiByoDn.js";import{r as n}from"./react-BHX50LGj.js";import{c as r,f as i,i as a,l as o,n as s,s as c}from"./blocks-D8VXls4E.js";import{n as l,t as u}from"./DesignTokensTable-Bvf_3DRI.js";import{t as d}from"./mdx-react-shim-C43ecmZQ.js";import{WithDescriptionInCaption as f,WithFooterAndRowHeaders as p,n as m,t as h}from"./Table.stories-B-eYlGW2.js";import{Cell as g,t as _}from"./TableCell.stories-DJLs5TSk.js";var v,y=e((()=>{v=`<!-- @license CC0-1.0 -->

# Table

Presents related values in rows and columns, from a compact reference table to a large data set users need to scan, sort, or filter.

## Guidelines

- Add a caption so users can find and understand the table without reading its data.
- Don’t replace the caption by naming the table another way.
  The caption gives the table both its accessible name and its data-table semantics.
  Naming a table through \`aria-labelledby\` or \`aria-label\` instead [makes some browsers expose it as a layout table](https://www.scottohara.me/blog/2019/04/19/tabled-tables.html), stripping the row and column semantics screen readers rely on.
- Use a [Heading](https://designsystem.amsterdam/?path=/docs/components-text-heading--docs) in the caption, at the level that fits the document outline.
  It becomes the table’s accessible name, announced by screen readers on every encounter.
- Use [Margin](/docs/utilities-css-margin--docs) or [Prose](/docs/utilities-css-prose--docs) to add vertical whitespace.
`})),b,x,S=e((()=>{b={table:{color:{$value:`{ams.color.text.default}`,$extensions:{"nl.amsterdam.type":`color`}},"font-family":{$value:`{ams.typography.font-family}`,$extensions:{"nl.amsterdam.type":`fontFamily`}},"font-size":{$value:`{ams.typography.body-text.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"font-weight":{$value:`{ams.typography.body-text.font-weight}`,$extensions:{"nl.amsterdam.type":`fontWeight`}},"line-height":{$value:`{ams.typography.body-text.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}},caption:{"font-weight":{$value:`{ams.typography.body-text.bold.font-weight}`,$type:`fontWeight`},"margin-block-end":{$value:`{ams.space.s}`,$type:`dimension`,$extensions:{"nl.amsterdam.subtype":`space`}}},cell:{"border-block-end":{$value:`{ams.border.width.s} solid {ams.color.separator}`,$extensions:{"nl.amsterdam.type":`border`}},"padding-block":{$value:`{ams.space.s}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-inline":{$value:`{ams.space.m}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}},"header-cell":{"font-weight":{$value:`{ams.typography.body-text.bold.font-weight}`,$extensions:{"nl.amsterdam.type":`fontWeight`}}}}},x={ams:b}}));function C(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...n(),...e.components};return(0,T.jsxs)(T.Fragment,{children:[`
`,`
`,`
`,`
`,(0,T.jsx)(r,{of:h}),`
`,(0,T.jsx)(c,{children:v}),`
`,(0,T.jsx)(o,{}),`
`,(0,T.jsx)(t.h2,{id:`subcomponents`,children:`Subcomponents`}),`
`,(0,T.jsx)(t.h3,{id:`cell`,children:`Cell`}),`
`,(0,T.jsxs)(t.p,{children:[`Holds a single value within a row.
Use the `,(0,T.jsx)(t.code,{children:`align`}),` prop to align the content to the center or end of the cell.
Apply the same value to all cells in the column and the matching `,(0,T.jsx)(t.code,{children:`Table.HeaderCell`}),`.`]}),`
`,(0,T.jsx)(s,{of:g}),`
`,(0,T.jsx)(a,{of:g}),`
`,(0,T.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,T.jsx)(t.h3,{id:`with-footer-and-row-headers`,children:`With footer and row headers`}),`
`,(0,T.jsxs)(t.p,{children:[`Use table headers to tell users what the rows and columns represent.
Use the scope attribute to help users of assistive technology distinguish between row and column headers.
Use `,(0,T.jsx)(t.code,{children:`Table.Footer`}),` for a summary row.`]}),`
`,(0,T.jsx)(s,{of:p}),`
`,(0,T.jsx)(t.h3,{id:`with-description-in-caption`,children:`With description in caption`}),`
`,(0,T.jsxs)(t.p,{children:[`Add a description to the caption to provide context like a source, date, or reading instructions.
Use a small `,(0,T.jsx)(t.a,{href:`/docs/components-text-paragraph--docs`,children:`Paragraph`}),`.
Set `,(0,T.jsx)(t.code,{children:`aria-labelledby`}),` to keep only the heading as the table’s accessible name, or screen readers will read out the entire text.`]}),`
`,(0,T.jsx)(s,{of:f}),`
`,(0,T.jsx)(t.h2,{id:`see-also`,children:`See also`}),`
`,(0,T.jsxs)(t.ul,{children:[`
`,(0,T.jsxs)(t.li,{children:[(0,T.jsx)(t.a,{href:`/docs/utilities-css-prose--docs`,children:`Prose`}),` – applies the recommended vertical spacing for editorial content.`]}),`
`,(0,T.jsxs)(t.li,{children:[(0,T.jsx)(t.a,{href:`https://www.scottohara.me/blog/2019/04/19/tabled-tables.html`,rel:`nofollow`,children:`Scott O’Hara: Unintentionally tabling table semantics`}),` – why a table needs a caption to keep its semantics rather than an ARIA label.`]}),`
`]}),`
`,(0,T.jsx)(t.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,T.jsx)(u,{tokens:x})]})}function w(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,T.jsx)(t,{...e,children:(0,T.jsx)(C,{...e})}):C(e)}var T;e((()=>{T=t(),d(),i(),m(),_(),y(),S(),l()}))();export{w as default};