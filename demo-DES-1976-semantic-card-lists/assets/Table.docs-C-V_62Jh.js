import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,d as n,h as r,i,n as a,p as o,u as s}from"./blocks-zzQRermb.js";import{t as c}from"./jsx-runtime-ATHzeHXA.js";import{i as l,r as u}from"./react-Dyi61YEg.js";import{n as d,t as f}from"./DesignTokensTable-CIDlCEyn.js";import{a as p,i as m,n as h,r as g,t as _}from"./Table.stories-CZrX8EJQ.js";import{r as v,t as y}from"./TableCell.stories-xWA2JeB8.js";import{r as b,t as x}from"./TableHeaderCell.stories-DO7ZnmXb.js";var S,C;function w(){return(w=e((()=>{S={table:{color:{$value:`{ams.color.text.default}`,$extensions:{"nl.amsterdam.type":`color`}},"font-family":{$value:`{ams.typography.font-family}`,$extensions:{"nl.amsterdam.type":`fontFamily`}},"font-size":{$value:`{ams.typography.body-text.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"font-weight":{$value:`{ams.typography.body-text.font-weight}`,$extensions:{"nl.amsterdam.type":`fontWeight`}},"line-height":{$value:`{ams.typography.body-text.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}},"outline-offset":{$value:`{ams.focus.outline-offset}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},caption:{"font-weight":{$value:`{ams.typography.body-text.bold.font-weight}`,$type:`fontWeight`},"margin-block-end":{$value:`{ams.space.s}`,$type:`dimension`,$extensions:{"nl.amsterdam.hint":`Must be a single value: it sets a longhand property, which takes only one.`,"nl.amsterdam.subtype":`space`}}},cell:{"border-block-end":{$value:`{ams.border.width.s} solid {ams.color.separator}`,$extensions:{"nl.amsterdam.type":`border`}},"padding-block":{$value:`{ams.space.s}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-inline":{$value:`{ams.space.m}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}},"header-cell":{"font-weight":{$value:`{ams.typography.body-text.bold.font-weight}`,$extensions:{"nl.amsterdam.type":`fontWeight`}}}}},C={ams:S}})))()}function T(e){let r={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...l(),...e.components};return(0,D.jsxs)(D.Fragment,{children:[`
`,`
`,`
`,`
`,(0,D.jsx)(s,{of:h}),`
`,(0,D.jsx)(o,{}),`
`,(0,D.jsx)(t,{of:h}),`
`,(0,D.jsx)(n,{}),`
`,(0,D.jsx)(r.p,{children:`This component has no props to configure.`}),`
`,(0,D.jsx)(r.h2,{id:`subcomponents`,children:`Subcomponents`}),`
`,(0,D.jsx)(r.p,{children:`A Table is composed of a Caption, a Header containing Header Cells, a Body, an optional Footer, and Rows of Cells.
Caption, Header, Body, Footer, and Row have no props of their own; the example above shows each of them in place.`}),`
`,(0,D.jsx)(r.h3,{id:`cell`,children:`Cell`}),`
`,(0,D.jsxs)(r.p,{children:[`Holds a single value within a row.
Use the `,(0,D.jsx)(r.code,{children:`align`}),` prop to align the content to the center or end of the cell.
Apply the same value to all cells in the column and the matching `,(0,D.jsx)(r.code,{children:`Table.HeaderCell`}),`.`]}),`
`,(0,D.jsx)(a,{of:y}),`
`,(0,D.jsx)(i,{of:y}),`
`,(0,D.jsx)(r.h3,{id:`header-cell`,children:`Header Cell`}),`
`,(0,D.jsxs)(r.p,{children:[`Labels the column of values below it.
Use the `,(0,D.jsx)(r.code,{children:`align`}),` prop to match the alignment of the column’s cells.`]}),`
`,(0,D.jsx)(a,{of:x}),`
`,(0,D.jsx)(i,{of:x}),`
`,(0,D.jsx)(r.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,D.jsx)(r.h3,{id:`how-to-use`,children:`How to use`}),`
`,(0,D.jsxs)(r.p,{children:[`Use `,(0,D.jsx)(r.a,{href:`/docs/utilities-css-margin--docs`,children:`Margin`}),` or `,(0,D.jsx)(r.a,{href:`/docs/utilities-css-prose--docs`,children:`Prose`}),` to add vertical whitespace.`]}),`
`,(0,D.jsxs)(r.p,{children:[`Add a caption so users can find and understand the Table without reading its data.
Use a `,(0,D.jsx)(r.a,{href:`/docs/components-text-heading--docs`,children:`Heading`}),` in it, at the level that fits the document outline.`]}),`
`,(0,D.jsxs)(r.p,{children:[`To place content between the Heading and the Table, keep the Caption but hide it visually, then position the heading and content above the Table.
Do not use ARIA relations; they hurt the Table's semantics (see `,(0,D.jsx)(r.a,{href:`https://www.scottohara.me/blog/2019/04/19/tabled-tables.html`,rel:`nofollow`,children:`this article`}),`).`]}),`
`,(0,D.jsx)(r.p,{children:`Keep a Table narrow enough to fit where it is used.`}),`
`,(0,D.jsx)(r.h2,{id:`examples`,children:`Examples`}),`
`,(0,D.jsx)(r.h3,{id:`with-footer-and-row-headers`,children:`With footer and row headers`}),`
`,(0,D.jsxs)(r.p,{children:[`Use table headers to tell users what the rows and columns represent.
Use the scope attribute to help users of assistive technology distinguish between row and column headers.
Use `,(0,D.jsx)(r.code,{children:`Table.Footer`}),` for a summary row.`]}),`
`,(0,D.jsx)(a,{of:g}),`
`,(0,D.jsx)(r.h3,{id:`with-heading-and-description`,children:`With heading and description`}),`
`,(0,D.jsx)(r.p,{children:`When the table needs context – a source, a date, or reading instructions – place a heading and a small paragraph above it and hide the caption visually.`}),`
`,(0,D.jsx)(a,{of:m}),`
`,(0,D.jsx)(r.h3,{id:`with-caption-in-figure`,children:`With caption in figure`}),`
`,(0,D.jsxs)(r.p,{children:[`The context can be positioned below the table as well.
In this case, use a `,(0,D.jsx)(r.a,{href:`/docs/components-media-figure--docs`,children:`Figure`}),` and let the Table keep its Caption.`]}),`
`,(0,D.jsx)(a,{of:_}),`
`,(0,D.jsx)(r.h2,{id:`features`,children:`Features`}),`
`,(0,D.jsx)(r.p,{children:`A Table wider than the space it sits in scrolls horizontally within its own container, rather than widening the page around it.
That container takes keyboard focus, so someone can scroll it with the arrow keys, not only with a pointer or touch.`}),`
`,(0,D.jsx)(r.h2,{id:`design`,children:`Design`}),`
`,(0,D.jsx)(r.p,{children:`Rows are separated by a single rule beneath each one.
There are no vertical lines, no zebra stripes, and no spacing between cells: the columns are held together by their alignment.`}),`
`,(0,D.jsx)(r.p,{children:`Cells align to the top of their row, so the first line of every cell in a row starts level even when one of them wraps over several lines.
Header cells in the head align to the bottom instead, which puts a column label that runs onto two lines directly above the values it names.`}),`
`,(0,D.jsx)(r.p,{children:`The caption is bold and aligned with the start of the table rather than centred over it.
It reads as the title of what follows, in the same place a heading would sit.`}),`
`,(0,D.jsx)(r.p,{children:`In print, a Table is never split across two pages.`}),`
`,(0,D.jsx)(r.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,D.jsx)(r.p,{children:`A Table caption creates the accessible name for the Table, announced by screen readers on every encounter.
That is also why ‘How to use’ warns against ARIA relations as a substitute: they name the table without giving it the caption its semantics expect.`}),`
`,(0,D.jsxs)(r.p,{children:[`The container that scrolls is a focusable group, which keeps the columns past its right edge reachable without a pointing device, as `,(0,D.jsx)(r.a,{href:`https://www.w3.org/TR/WCAG22/#keyboard`,rel:`nofollow`,children:`WCAG 2.1.1`}),` requires.`]}),`
`,(0,D.jsx)(r.h2,{id:`see-also`,children:`See also`}),`
`,(0,D.jsxs)(r.ul,{children:[`
`,(0,D.jsxs)(r.li,{children:[(0,D.jsx)(r.a,{href:`/docs/utilities-css-prose--docs`,children:`Prose`}),` – applies the recommended vertical spacing for editorial content.`]}),`
`,(0,D.jsxs)(r.li,{children:[(0,D.jsx)(r.a,{href:`/docs/pages-internal-table-page--docs`,children:`Table Page`}),` – various templates for large data tables in internal websites.`]}),`
`]}),`
`,(0,D.jsx)(r.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,D.jsx)(f,{tokens:C})]})}function E(e={}){let{wrapper:t}={...l(),...e.components};return t?(0,D.jsx)(t,{...e,children:(0,D.jsx)(T,{...e})}):T(e)}var D;function O(){return(O=e((()=>{D=c(),u(),r(),d(),w(),p(),v(),b()})))()}O();export{E as default};