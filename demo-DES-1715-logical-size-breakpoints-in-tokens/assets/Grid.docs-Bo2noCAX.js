import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-BrayXyei.js";import{r as n}from"./react-oCAR5XSR.js";import{c as r,f as i,i as a,l as o,n as s,s as c}from"./blocks-CXThzuXO.js";import{n as l,t as u}from"./DesignTokensTable-C6pVlgHX.js";import{t as d}from"./mdx-react-shim-DojbLbVr.js";import{ImproveSemantics as f,SpanAllColumns as p,SpanColumns as m,SpanResponsively as h,StartPosition as g,VerticalGap as _,VerticalPadding as v,n as y,t as b}from"./Grid.stories-CTk6NU2k.js";var x,S=e((()=>{x=`<!-- @license CC0-1.0 -->

# Grid

Divides the screen into columns to align the elements of a page.

## Guidelines

- Every page uses the Grid component as the foundation for its layout.
  It is a direct child of the [Page](/docs/components-containers-page--docs) container.
- The Grid provides 4, 8, or 12 columns, depending on the width of the window.
- Its children are \`Grid.Cell\` components that define how many columns they span, and optionally where they start.
  Both its \`span\` and \`start\` properties accept a single value, or separate values for the narrow, medium and wide variations of the Grid.
  Follow these [optimal sizes of Grid Cells](/docs/pages-public-introduction--docs#how-to-size-the-grid-cells) for various typical page sections.
- A single page can have several Grids.
  This allows mixing a Grid with a [Spotlight](/docs/components-containers-spotlight--docs), [Breakout](/docs/components-layout-breakout--docs) or full width [Image](/docs/components-media-image--docs) which ‘bleed out’ of the main layout.
- Grids must not be nested.
  The component is currently intended for the full width of the page only.
- The Gap utility classes must not be used on the Grid component.

## Design

The [design choices](/docs/docs-developer-guide-grid--docs) are described in the Developer Guide.
`})),C,w,T=e((()=>{C={grid:{"column-count":{$value:`4`},"column-gap":{$value:`{ams.space.xl}`,$type:`dimension`,$extensions:{"nl.amsterdam.subtype":`space`}},"padding-block":{l:{$value:`{ams.space.l}`,$type:`dimension`,$extensions:{"nl.amsterdam.subtype":`space`}},xl:{$value:`{ams.space.xl}`,$type:`dimension`,$extensions:{"nl.amsterdam.subtype":`space`}},"2xl":{$value:`{ams.space.2xl}`,$type:`dimension`,$extensions:{"nl.amsterdam.subtype":`space`}}},"padding-inline":{$value:`{ams.space.l}`,$type:`dimension`,$extensions:{"nl.amsterdam.subtype":`space`}},"row-gap":{l:{$value:`{ams.space.l}`,$type:`dimension`,$extensions:{"nl.amsterdam.subtype":`space`}},xl:{$value:`{ams.space.xl}`,$type:`dimension`,$extensions:{"nl.amsterdam.subtype":`space`}},"2xl":{$value:`{ams.space.2xl}`,$type:`dimension`,$extensions:{"nl.amsterdam.subtype":`space`}}},medium:{"column-count":{$deprecated:"Use `ams.grid.vi-medium.column-count` instead. Will be removed in release 6.0.0.",$value:`{ams.grid.vi-medium.column-count}`},"padding-inline":{$deprecated:"Use `ams.grid.vi-medium.padding-inline` instead. Will be removed in release 6.0.0.",$value:`{ams.grid.vi-medium.padding-inline}`,$type:`dimension`,$extensions:{"nl.amsterdam.subtype":`space`}}},wide:{"column-count":{$deprecated:"Use `ams.grid.vi-wide.column-count` instead. Will be removed in release 6.0.0.",$value:`{ams.grid.vi-wide.column-count}`},"padding-inline":{$deprecated:"Use `ams.grid.vi-wide.padding-inline` instead. Will be removed in release 6.0.0.",$value:`{ams.grid.vi-wide.padding-inline}`,$type:`dimension`,$extensions:{"nl.amsterdam.subtype":`space`}}},"vi-medium":{"column-count":{$value:`8`},"padding-inline":{$value:`{ams.space.xl}`,$type:`dimension`,$extensions:{"nl.amsterdam.subtype":`space`}}},"vi-wide":{"column-count":{$value:`12`},"padding-inline":{$value:`{ams.space.2xl}`,$type:`dimension`,$extensions:{"nl.amsterdam.subtype":`space`}}}}},w={ams:C}}));function E(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...n(),...e.components};return(0,O.jsxs)(O.Fragment,{children:[`
`,`
`,`
`,`
`,(0,O.jsx)(r,{of:b}),`
`,(0,O.jsx)(c,{children:x}),`
`,(0,O.jsx)(o,{}),`
`,(0,O.jsx)(a,{}),`
`,(0,O.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,O.jsx)(t.p,{children:`The grey strokes in the examples on this page indicate the columns of the grid.
The gaps between the columns are white – note that they can be wider than the columns.
Pink boxes represent cells on the grid.`}),`
`,(0,O.jsx)(t.h3,{id:`vertical-padding`,children:`Vertical padding`}),`
`,(0,O.jsxs)(t.p,{children:[`Add white space above and below the grid through the `,(0,O.jsx)(t.code,{children:`padding…`}),` props.
Their options match the design tokens for `,(0,O.jsx)(t.a,{href:`/docs/brand-design-tokens-space--docs`,children:`Space`}),`.
This is useful in a container with a coloured background, like `,(0,O.jsx)(t.a,{href:`/docs/components-containers-page-footer--docs`,children:`Page Footer`}),` or `,(0,O.jsx)(t.a,{href:`/docs/components-containers-spotlight--docs`,children:`Spotlight`}),`, or between two consecutive grids.
Specify a value of `,(0,O.jsx)(t.code,{children:`x-large`}),` to get the same size as the vertical gap between columns.
Like the other features of the grid, this padding is responsive.`]}),`
`,(0,O.jsx)(s,{of:v}),`
`,(0,O.jsx)(t.h3,{id:`vertical-gap`,children:`Vertical gap`}),`
`,(0,O.jsxs)(t.p,{children:[`A grid automatically creates a new row if the next cell doesn’t fit the current one.
White space between rows is as wide as that between columns, which is `,(0,O.jsx)(t.code,{children:`x-large`}),`.
Use the `,(0,O.jsx)(t.code,{children:`verticalGap`}),` prop to adjust to remove it.
Its options match the design tokens for `,(0,O.jsx)(t.a,{href:`/docs/brand-design-tokens-space--docs`,children:`Space`}),`.`]}),`
`,(0,O.jsx)(s,{of:_}),`
`,(0,O.jsx)(t.h3,{id:`span-columns`,children:`Span columns`}),`
`,(0,O.jsxs)(t.p,{children:[`A cell defaults to spanning 1 column in the grid.
Use the `,(0,O.jsx)(t.code,{children:`span`}),` prop to make a cell span more columns.`]}),`
`,(0,O.jsx)(s,{of:m}),`
`,(0,O.jsx)(t.h3,{id:`span-responsively`,children:`Span responsively`}),`
`,(0,O.jsxs)(t.p,{children:[`You can make the number of columns a cell spans depend on the window width.
Use the `,(0,O.jsx)(t.code,{children:`span`}),` prop with 3 values for narrow, medium, and wide windows.
E.g. `,(0,O.jsx)(t.code,{children:`span={{ narrow: 4, medium: 5, wide: 7 }}`}),` makes the cell span all 4 columns on narrow windows, 5 of the 8 on medium windows, and 7 of the 12 on wide windows.`]}),`
`,(0,O.jsx)(s,{of:h}),`
`,(0,O.jsx)(t.h3,{id:`span-all-columns`,children:`Span all columns`}),`
`,(0,O.jsxs)(t.p,{children:[`To stretch the cell to all columns of the grid – whether that are 4, 8, or 12 – use `,(0,O.jsx)(t.code,{children:`span="all"`}),`.`]}),`
`,(0,O.jsx)(s,{of:p}),`
`,(0,O.jsx)(t.h3,{id:`start-position`,children:`Start position`}),`
`,(0,O.jsxs)(t.p,{children:[`Each cell automatically starts in the next available position in the grid.
Adjust the starting position of a cell with the `,(0,O.jsx)(t.code,{children:`start`}),` prop.
This way, you can align cells in multiple rows or center a cell horizontally.
It can also skip a column for more white space between cells.`]}),`
`,(0,O.jsxs)(t.p,{children:[`The starting position of a cell may also depend on the window width.
Use the `,(0,O.jsx)(t.code,{children:`start`}),` prop with 3 values, e.g. `,(0,O.jsx)(t.code,{children:`start={{ narrow: 2, medium: 4, wide: 6 }}`}),`.`]}),`
`,(0,O.jsx)(s,{of:g}),`
`,(0,O.jsx)(t.h3,{id:`improve-semantics`,children:`Improve semantics`}),`
`,(0,O.jsxs)(t.p,{children:[`By default, both Grid and Grid Cell render a `,(0,O.jsx)(t.code,{children:`<div>`}),` element in HTML.
Use the `,(0,O.jsx)(t.code,{children:`as`}),` prop on either to make your markup more semantic.`]}),`
`,(0,O.jsx)(s,{of:f}),`
`,(0,O.jsx)(t.h2,{id:`caution`,children:`Caution`}),`
`,(0,O.jsxs)(t.ul,{children:[`
`,(0,O.jsx)(t.li,{children:`Ensure that the number of columns you assign to a cell matches the amount of columns in the grid for the respective window width.`}),`
`,(0,O.jsx)(t.li,{children:`The same applies to starting a cell in a later column.`}),`
`,(0,O.jsx)(t.li,{children:`If the total of both values is too large, the browser adds columns to the grid.
This is not allowed.`}),`
`]}),`
`,(0,O.jsx)(t.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,O.jsx)(u,{tokens:w})]})}function D(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,O.jsx)(t,{...e,children:(0,O.jsx)(E,{...e})}):E(e)}var O;e((()=>{O=t(),d(),i(),y(),S(),T(),l()}))();export{D as default};