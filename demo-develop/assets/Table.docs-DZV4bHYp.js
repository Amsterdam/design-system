import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-BqsN2jGA.js";import{E as n,a as r,f as i,i as a,l as o,m as s,n as c,u as l}from"./blocks-Dhq2PbZU.js";import{n as u,t as d}from"./DesignTokensTable-a0gvTEtM.js";import{t as f}from"./mdx-react-shim-B7rHbyW2.js";import{InFigure as p,WithFooterAndRowHeaders as m,WithHeadingAndDescription as h,n as g,t as _}from"./Table.stories-BkvarJLE.js";import{Cell as v,t as y}from"./TableCell.stories-CE0Aokik.js";var b,x,S=e((()=>{b={table:{color:{$value:`{ams.color.text.default}`,$extensions:{"nl.amsterdam.type":`color`}},"font-family":{$value:`{ams.typography.font-family}`,$extensions:{"nl.amsterdam.type":`fontFamily`}},"font-size":{$value:`{ams.typography.body-text.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"font-weight":{$value:`{ams.typography.body-text.font-weight}`,$extensions:{"nl.amsterdam.type":`fontWeight`}},"line-height":{$value:`{ams.typography.body-text.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}},caption:{"font-weight":{$value:`{ams.typography.body-text.bold.font-weight}`,$type:`fontWeight`},"margin-block-end":{$value:`{ams.space.s}`,$type:`dimension`,$extensions:{"nl.amsterdam.subtype":`space`}}},cell:{"border-block-end":{$value:`{ams.border.width.s} solid {ams.color.separator}`,$extensions:{"nl.amsterdam.type":`border`}},"padding-block":{$value:`{ams.space.s}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-inline":{$value:`{ams.space.m}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}},"header-cell":{"font-weight":{$value:`{ams.typography.body-text.bold.font-weight}`,$extensions:{"nl.amsterdam.type":`fontWeight`}}}}},x={ams:b}}));function C(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...n(),...e.components};return(0,T.jsxs)(T.Fragment,{children:[`
`,`
`,`
`,`
`,(0,T.jsx)(o,{of:_}),`
`,(0,T.jsx)(i,{}),`
`,(0,T.jsx)(r,{of:_}),`
`,(0,T.jsx)(l,{}),`
`,(0,T.jsx)(t.h2,{id:`subcomponents`,children:`Subcomponents`}),`
`,(0,T.jsx)(t.h3,{id:`cell`,children:`Cell`}),`
`,(0,T.jsxs)(t.p,{children:[`Holds a single value within a row.
Use the `,(0,T.jsx)(t.code,{children:`align`}),` prop to align the content to the center or end of the cell.
Apply the same value to all cells in the column and the matching `,(0,T.jsx)(t.code,{children:`Table.HeaderCell`}),`.`]}),`
`,(0,T.jsx)(c,{of:v}),`
`,(0,T.jsx)(a,{of:v}),`
`,(0,T.jsx)(t.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,T.jsx)(t.h3,{id:`how-to-use`,children:`How to use`}),`
`,(0,T.jsxs)(t.p,{children:[`Use `,(0,T.jsx)(t.a,{href:`/docs/utilities-css-margin--docs`,children:`Margin`}),` or `,(0,T.jsx)(t.a,{href:`/docs/utilities-css-prose--docs`,children:`Prose`}),` to add vertical whitespace.`]}),`
`,(0,T.jsxs)(t.p,{children:[`Add a caption so users can find and understand the Table without reading its data.
Use a `,(0,T.jsx)(t.a,{href:`/docs/components-text-heading--docs`,children:`Heading`}),` in it, at the level that fits the document outline.`]}),`
`,(0,T.jsxs)(t.p,{children:[`To place content between the Heading and the Table, keep the Caption but hide it visually, then position the heading and content above the Table.
Do not use ARIA relations; they hurt the Table's semantics (see `,(0,T.jsx)(t.a,{href:`https://www.scottohara.me/blog/2019/04/19/tabled-tables.html`,rel:`nofollow`,children:`this article`}),`).`]}),`
`,(0,T.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,T.jsx)(t.h3,{id:`with-footer-and-row-headers`,children:`With footer and row headers`}),`
`,(0,T.jsxs)(t.p,{children:[`Use table headers to tell users what the rows and columns represent.
Use the scope attribute to help users of assistive technology distinguish between row and column headers.
Use `,(0,T.jsx)(t.code,{children:`Table.Footer`}),` for a summary row.`]}),`
`,(0,T.jsx)(c,{of:m}),`
`,(0,T.jsx)(t.h3,{id:`with-heading-and-description`,children:`With heading and description`}),`
`,(0,T.jsx)(t.p,{children:`When the table needs context – a source, a date, or reading instructions – place a heading and a small paragraph above it and hide the caption visually.`}),`
`,(0,T.jsx)(c,{of:h}),`
`,(0,T.jsx)(t.h3,{id:`with-caption-in-figure`,children:`With caption in figure`}),`
`,(0,T.jsxs)(t.p,{children:[`The context can be positioned below the table as well.
In this case, use a `,(0,T.jsx)(t.a,{href:`/docs/components-media-figure--docs`,children:`Figure`}),` and let the Table keep its Caption.`]}),`
`,(0,T.jsx)(c,{of:p}),`
`,(0,T.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,T.jsx)(t.p,{children:`A Table caption creates the accessible name for the Table, announced by screen readers on every encounter.`}),`
`,(0,T.jsx)(t.h2,{id:`see-also`,children:`See also`}),`
`,(0,T.jsxs)(t.ul,{children:[`
`,(0,T.jsxs)(t.li,{children:[(0,T.jsx)(t.a,{href:`/docs/utilities-css-prose--docs`,children:`Prose`}),` – applies the recommended vertical spacing for editorial content.`]}),`
`,(0,T.jsxs)(t.li,{children:[(0,T.jsx)(t.a,{href:`/docs/pages-internal-table-page--docs`,children:`Table Page`}),` – various templates for large data tables in internal websites.`]}),`
`]}),`
`,(0,T.jsx)(t.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,T.jsx)(d,{tokens:x})]})}function w(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,T.jsx)(t,{...e,children:(0,T.jsx)(C,{...e})}):C(e)}var T;e((()=>{T=t(),f(),s(),u(),S(),g(),y()}))();export{w as default};