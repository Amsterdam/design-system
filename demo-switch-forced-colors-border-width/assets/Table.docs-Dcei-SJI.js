import{n as e}from"./chunk-DnJy8xQt.js";import{Ht as t}from"./iframe-Bxbc8Lwg.js";import{r as n}from"./react-B1sbWcDi.js";import{c as r,f as i,i as a,l as o,n as s,s as c}from"./blocks-BwSSmOdx.js";import{n as l,t as u}from"./DesignTokensTable-mmb7L2DE.js";import{t as d}from"./mdx-react-shim-f2v9GNfP.js";import{InFigure as f,WithFooterAndRowHeaders as p,WithHeadingAndDescription as m,n as h,t as g}from"./Table.stories-B1-nLHHa.js";import{Cell as _,t as v}from"./TableCell.stories-Cmgieiho.js";var y,b=e((()=>{y=`<!-- @license CC0-1.0 -->

# Table

Presents related values in rows and columns.
Suitable for both simple reference tables and to inspect large data sets.

## Guidelines

- Add a caption so users can find and understand the table without reading its data.
  Use a [Heading](https://designsystem.amsterdam/?path=/docs/components-text-heading--docs) in it, at the level that fits the document outline.
  This creates the accessible name for the table, which gets announced by screen readers on every encounter.
- To have content between the Heading and the Table, keep the Caption but hide it visually, then position heading and content above the table.
  Do not use ARIA relations; they hurt the Table’s semantics (see [this article](https://www.scottohara.me/blog/2019/04/19/tabled-tables.html)).
- Use [Margin](/docs/utilities-css-margin--docs) or [Prose](/docs/utilities-css-prose--docs) to add vertical whitespace.
`})),x,S,C=e((()=>{x={table:{color:{$value:`{ams.color.text.default}`,$extensions:{"nl.amsterdam.type":`color`}},"font-family":{$value:`{ams.typography.font-family}`,$extensions:{"nl.amsterdam.type":`fontFamily`}},"font-size":{$value:`{ams.typography.body-text.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"font-weight":{$value:`{ams.typography.body-text.font-weight}`,$extensions:{"nl.amsterdam.type":`fontWeight`}},"line-height":{$value:`{ams.typography.body-text.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}},caption:{"font-weight":{$value:`{ams.typography.body-text.bold.font-weight}`,$type:`fontWeight`},"margin-block-end":{$value:`{ams.space.s}`,$type:`dimension`,$extensions:{"nl.amsterdam.subtype":`space`}}},cell:{"border-block-end":{$value:`{ams.border.width.s} solid {ams.color.separator}`,$extensions:{"nl.amsterdam.type":`border`}},"padding-block":{$value:`{ams.space.s}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-inline":{$value:`{ams.space.m}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}},"header-cell":{"font-weight":{$value:`{ams.typography.body-text.bold.font-weight}`,$extensions:{"nl.amsterdam.type":`fontWeight`}}}}},S={ams:x}}));function w(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...n(),...e.components};return(0,E.jsxs)(E.Fragment,{children:[`
`,`
`,`
`,`
`,(0,E.jsx)(r,{of:g}),`
`,(0,E.jsx)(c,{children:y}),`
`,(0,E.jsx)(o,{}),`
`,(0,E.jsx)(t.h2,{id:`subcomponents`,children:`Subcomponents`}),`
`,(0,E.jsx)(t.h3,{id:`cell`,children:`Cell`}),`
`,(0,E.jsxs)(t.p,{children:[`Holds a single value within a row.
Use the `,(0,E.jsx)(t.code,{children:`align`}),` prop to align the content to the center or end of the cell.
Apply the same value to all cells in the column and the matching `,(0,E.jsx)(t.code,{children:`Table.HeaderCell`}),`.`]}),`
`,(0,E.jsx)(s,{of:_}),`
`,(0,E.jsx)(a,{of:_}),`
`,(0,E.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,E.jsx)(t.h3,{id:`with-footer-and-row-headers`,children:`With footer and row headers`}),`
`,(0,E.jsxs)(t.p,{children:[`Use table headers to tell users what the rows and columns represent.
Use the scope attribute to help users of assistive technology distinguish between row and column headers.
Use `,(0,E.jsx)(t.code,{children:`Table.Footer`}),` for a summary row.`]}),`
`,(0,E.jsx)(s,{of:p}),`
`,(0,E.jsx)(t.h3,{id:`with-heading-and-description`,children:`With heading and description`}),`
`,(0,E.jsx)(t.p,{children:`When the table needs context – a source, a date, or reading instructions – place a heading and a small paragraph above it and hide the caption visually.`}),`
`,(0,E.jsx)(s,{of:m}),`
`,(0,E.jsx)(t.h3,{id:`with-caption-in-figure`,children:`With caption in figure`}),`
`,(0,E.jsxs)(t.p,{children:[`The context can be positioned below the table as well.
In this case, use a `,(0,E.jsx)(t.a,{href:`/docs/components-media-figure--docs`,children:`Figure`}),` and let the Table keep its Caption.`]}),`
`,(0,E.jsx)(s,{of:f}),`
`,(0,E.jsx)(t.h2,{id:`see-also`,children:`See also`}),`
`,(0,E.jsxs)(t.ul,{children:[`
`,(0,E.jsxs)(t.li,{children:[(0,E.jsx)(t.a,{href:`/docs/utilities-css-prose--docs`,children:`Prose`}),` – applies the recommended vertical spacing for editorial content.`]}),`
`,(0,E.jsxs)(t.li,{children:[(0,E.jsx)(t.a,{href:`/docs/pages-internal-table-page--docs`,children:`Table Page`}),` – various templates for large data tables in internal websites.`]}),`
`]}),`
`,(0,E.jsx)(t.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,E.jsx)(u,{tokens:S})]})}function T(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,E.jsx)(t,{...e,children:(0,E.jsx)(w,{...e})}):w(e)}var E;e((()=>{E=t(),d(),i(),h(),v(),b(),C(),l()}))();export{T as default};