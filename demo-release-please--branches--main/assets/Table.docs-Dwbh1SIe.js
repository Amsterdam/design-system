import{n as e}from"./chunk-zsgVPwQN.js";import{t}from"./jsx-runtime-GmyBfqKJ.js";import{r as n}from"./react-RY8N8R-x.js";import{c as r,f as i,l as a,n as o,s}from"./blocks-BMurOIz2.js";import{n as c,t as l}from"./DesignTokensTable-Dr8bxsPE.js";import{t as u}from"./mdx-react-shim-ynubY8I9.js";import{WithDescriptionInCaption as d,WithFooterAndRowHeaders as f,n as p,t as m}from"./Table.stories-Bl82_p2i.js";var h,g=e((()=>{h=`<!-- @license CC0-1.0 -->

# Table

Structures data in rows and columns to help users work with large amounts of information.

## Guidelines

- Add a caption so users can find and understand the table without reading its data.
- Use a [Heading](https://designsystem.amsterdam/?path=/docs/components-text-heading--docs) in the caption, at the level that fits the document outline.
  It becomes the table’s accessible name, announced by screen readers on every encounter.
`})),_,v,y=e((()=>{_={table:{color:{$value:`{ams.color.text.default}`,$extensions:{"nl.amsterdam.type":`color`}},"font-family":{$value:`{ams.typography.font-family}`,$extensions:{"nl.amsterdam.type":`fontFamily`}},"font-size":{$value:`{ams.typography.body-text.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"font-weight":{$value:`{ams.typography.body-text.font-weight}`,$extensions:{"nl.amsterdam.type":`fontWeight`}},"line-height":{$value:`{ams.typography.body-text.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}},caption:{"font-weight":{$value:`{ams.typography.body-text.bold.font-weight}`,$type:`fontWeight`},"margin-block-end":{$value:`{ams.space.s}`,$type:`dimension`,$extensions:{"nl.amsterdam.subtype":`space`}}},cell:{"border-block-end":{$value:`{ams.border.width.s} solid {ams.color.separator}`,$extensions:{"nl.amsterdam.type":`border`}},"padding-block":{$value:`{ams.space.s}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-inline":{$value:`{ams.space.m}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}},"header-cell":{"font-weight":{$value:`{ams.typography.body-text.bold.font-weight}`,$extensions:{"nl.amsterdam.type":`fontWeight`}}}}},v={ams:_}}));function b(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,p:`p`,...n(),...e.components};return(0,S.jsxs)(S.Fragment,{children:[`
`,`
`,`
`,`
`,(0,S.jsx)(r,{of:m}),`
`,(0,S.jsx)(s,{children:h}),`
`,(0,S.jsx)(a,{}),`
`,(0,S.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,S.jsx)(t.h3,{id:`with-footer-and-row-headers`,children:`With footer and row headers`}),`
`,(0,S.jsxs)(t.p,{children:[`Use table headers to tell users what the rows and columns represent.
Use the scope attribute to help users of assistive technology distinguish between row and column headers.
Use `,(0,S.jsx)(t.code,{children:`Table.Footer`}),` for a summary row.`]}),`
`,(0,S.jsx)(o,{of:f}),`
`,(0,S.jsx)(t.h3,{id:`with-description-in-caption`,children:`With description in caption`}),`
`,(0,S.jsxs)(t.p,{children:[`Add a description to the caption to provide context like a source, date, or reading instructions.
Use a small `,(0,S.jsx)(t.a,{href:`/docs/components-text-paragraph--docs`,children:`Paragraph`}),`.
Set `,(0,S.jsx)(t.code,{children:`aria-labelledby`}),` to keep only the heading as the table’s accessible name, or screen readers will read out the entire text.`]}),`
`,(0,S.jsx)(o,{of:d}),`
`,(0,S.jsx)(t.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,S.jsx)(l,{tokens:v})]})}function x(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,S.jsx)(t,{...e,children:(0,S.jsx)(b,{...e})}):b(e)}var S;e((()=>{S=t(),u(),i(),p(),g(),y(),c()}))();export{x as default};