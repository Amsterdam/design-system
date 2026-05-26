import{n as e}from"./chunk-DnJy8xQt.js";import{Vt as t}from"./iframe-f8AGb08J.js";import{r as n}from"./react-B7f5NDge.js";import{c as r,f as i,i as a,l as o,n as s,s as c}from"./blocks-DF0TpiZN.js";import{n as l,t as u}from"./DesignTokensTable-OS1I3ivf.js";import{t as d}from"./mdx-react-shim-Dc9E6EU_.js";import{BackgroundInCompactMode as f,ImproveSemantics as p,SpanAllColumns as m,SpanColumns as h,SpanResponsively as g,SpanRows as _,StartPosition as v,VerticalGap as y,VerticalPadding as b,n as x,t as S}from"./Grid.stories-CEmH9g75.js";var C,w=e((()=>{C=`<!-- @license CC0-1.0 -->

# Grid

Divides the screen into columns to align the elements of a page.

## Guidelines

- Every page uses the Grid component as the foundation for its layout.
  It is a direct child of the [Page](/docs/components-containers-page--docs) container.
- The Grid provides 4, 8, or 12 columns, depending on the width of the window.
- Its children are \`Grid.Cell\` components that define how many columns they span, and optionally where they start.
  Both its \`span\` and \`start\` properties accept a single value, or separate values for the narrow, medium and wide variations of the Grid.
  Follow these [optimal sizes of Grid Cells](/docs/pages-public-introduction--docs#how-to-size-the-grid-cells) for various typical page sections.
- Grid Cells align to the top of their row.
  This makes them as tall as their content.
  This is especially useful for [Compact Mode](https://designsystem.amsterdam/docs/docs-developer-guide-modes--docs), where their background colour is different than that of the Page.
  The [internal Home Page](/story/pages-internal-home-page--default) example shows this behaviour.
- A single page can have several Grids.
  This allows mixing a Grid with a [Spotlight](/docs/components-containers-spotlight--docs), [Breakout](/docs/components-layout-breakout--docs) or full width [Image](/docs/components-media-image--docs) which ‘bleed out’ of the main layout.
- Grids must not be nested.
  The component is currently intended for the full width of the page only.
- The Gap utility classes must not be used on the Grid component.
- Components placed inside a Grid Cell can adapt their layout to the width of the cell itself, rather than the width of the browser window.
  This uses a [CSS container query](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Containment/Container_queries).

## Design

The [design choices](/docs/docs-developer-guide-grid--docs) are described in the Developer Guide.
`})),T,E,D=e((()=>{T={grid:{"column-count":{$value:4,$type:`number`},"column-gap":{$value:`{ams.space.xl}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-block":{l:{$value:`{ams.space.l}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},xl:{$value:`{ams.space.xl}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"2xl":{$value:`{ams.space.2xl}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}},"padding-inline":{$value:`{ams.space.l}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"row-gap":{l:{$value:`{ams.space.l}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},xl:{$value:`{ams.space.xl}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"2xl":{$value:`{ams.space.2xl}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}},medium:{"column-count":{$deprecated:"Use `ams.grid.vi-medium.column-count` instead. Will be removed on or after 2026-10-20.",$value:`initial`,$type:`number`},"padding-inline":{$deprecated:"Use `ams.grid.vi-medium.padding-inline` instead. Will be removed on or after 2026-10-20.",$value:`initial`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}},wide:{"column-count":{$deprecated:"Use `ams.grid.vi-wide.column-count` instead. Will be removed on or after 2026-10-20.",$value:`initial`,$type:`number`},"padding-inline":{$deprecated:"Use `ams.grid.vi-wide.padding-inline` instead. Will be removed on or after 2026-10-20.",$value:`initial`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}},"vi-medium":{"column-count":{$value:8,$type:`number`},"padding-inline":{$value:`{ams.space.xl}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}},"vi-wide":{"column-count":{$value:12,$type:`number`},"padding-inline":{$value:`{ams.space.2xl}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}},cell:{"background-color":{$value:`initial`,$extensions:{"nl.amsterdam.type":`color`}},"container-name":{$value:`{ams.query-containers.inline-size.container-name}`},"container-type":{$value:`inline-size`},"padding-block":{$value:`initial`,$extensions:{"nl.amsterdam.type":`dimension`}},"padding-inline":{$value:`initial`,$extensions:{"nl.amsterdam.type":`dimension`}}}}},E={ams:T}}));function O(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,A.jsxs)(A.Fragment,{children:[`
`,`
`,`
`,`
`,(0,A.jsx)(r,{of:S}),`
`,(0,A.jsx)(c,{children:C}),`
`,(0,A.jsx)(o,{}),`
`,(0,A.jsx)(a,{}),`
`,(0,A.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,A.jsx)(t.p,{children:`The grey strokes in the examples on this page indicate the columns of the grid.
The gaps between the columns are white – note that they can be wider than the columns.
Pink boxes represent cells on the grid.
In Compact Mode, the page background is light grey.`}),`
`,(0,A.jsx)(t.h3,{id:`vertical-padding`,children:`Vertical padding`}),`
`,(0,A.jsxs)(t.p,{children:[`Add white space above and below the grid through the `,(0,A.jsx)(t.code,{children:`padding…`}),` props.
Their options match the design tokens for `,(0,A.jsx)(t.a,{href:`/docs/brand-design-tokens-space--docs`,children:`Space`}),`.
This is useful in a container with a coloured background, like `,(0,A.jsx)(t.a,{href:`/docs/components-containers-page-footer--docs`,children:`Page Footer`}),` or `,(0,A.jsx)(t.a,{href:`/docs/components-containers-spotlight--docs`,children:`Spotlight`}),`, or between two consecutive grids.
Specify a value of `,(0,A.jsx)(t.code,{children:`x-large`}),` to get the same size as the vertical gap between columns.
Like the other features of the grid, this padding is responsive.`]}),`
`,(0,A.jsx)(s,{of:b}),`
`,(0,A.jsx)(t.h3,{id:`vertical-gap`,children:`Vertical gap`}),`
`,(0,A.jsxs)(t.p,{children:[`A grid automatically creates a new row if the next cell doesn’t fit the current one.
White space between rows is as wide as that between columns, which is `,(0,A.jsx)(t.code,{children:`x-large`}),`.
Use the `,(0,A.jsx)(t.code,{children:`verticalGap`}),` prop to adjust to remove it.
Its options match the design tokens for `,(0,A.jsx)(t.a,{href:`/docs/brand-design-tokens-space--docs`,children:`Space`}),`.`]}),`
`,(0,A.jsx)(s,{of:y}),`
`,(0,A.jsx)(t.h3,{id:`span-columns`,children:`Span columns`}),`
`,(0,A.jsxs)(t.p,{children:[`A cell defaults to spanning 1 column in the grid.
Use the `,(0,A.jsx)(t.code,{children:`span`}),` prop to make a cell span more columns.`]}),`
`,(0,A.jsx)(s,{of:h}),`
`,(0,A.jsx)(t.h3,{id:`span-rows`,children:`Span rows`}),`
`,(0,A.jsxs)(t.p,{children:[`The `,(0,A.jsx)(t.code,{children:`rowSpan`}),` prop makes a Cell span multiple rows.
It only supports the values `,(0,A.jsx)(t.code,{children:`1`}),`, `,(0,A.jsx)(t.code,{children:`2`}),`, `,(0,A.jsx)(t.code,{children:`3`}),`, and `,(0,A.jsx)(t.code,{children:`4`}),`.
If you use `,(0,A.jsx)(t.code,{children:`rowSpan`}),` responsively, each of the `,(0,A.jsx)(t.code,{children:`narrow`}),`, `,(0,A.jsx)(t.code,{children:`medium`}),`, and `,(0,A.jsx)(t.code,{children:`wide`}),` values must also be between `,(0,A.jsx)(t.code,{children:`1`}),` and `,(0,A.jsx)(t.code,{children:`4`}),`.`]}),`
`,(0,A.jsx)(s,{of:_}),`
`,(0,A.jsx)(t.h3,{id:`span-responsively`,children:`Span responsively`}),`
`,(0,A.jsxs)(t.p,{children:[`The number of columns or rows that a cell covers can vary with the window width.
Use the `,(0,A.jsx)(t.code,{children:`span`}),` or `,(0,A.jsx)(t.code,{children:`rowSpan`}),` prop with 3 values for narrow, medium, and wide windows.
E.g. `,(0,A.jsx)(t.code,{children:`span={{ narrow: 4, medium: 5, wide: 7 }}`}),` makes the cell span all 4 columns on narrow windows, 5 of the 8 on medium windows, and 7 of the 12 on wide windows.`]}),`
`,(0,A.jsx)(s,{of:g}),`
`,(0,A.jsx)(t.h3,{id:`span-all-columns`,children:`Span all columns`}),`
`,(0,A.jsxs)(t.p,{children:[`To stretch the cell to all columns of the grid – whether that are 4, 8, or 12 – use `,(0,A.jsx)(t.code,{children:`span="all"`}),`.`]}),`
`,(0,A.jsx)(s,{of:m}),`
`,(0,A.jsx)(t.h3,{id:`start-position`,children:`Start position`}),`
`,(0,A.jsxs)(t.p,{children:[`Each cell automatically starts in the next available position in the grid.
Adjust the starting position of a cell with the `,(0,A.jsx)(t.code,{children:`start`}),` prop.
This way, you can align cells in multiple rows or center a cell horizontally.
It can also skip a column for more white space between cells.`]}),`
`,(0,A.jsxs)(t.p,{children:[`The starting position of a cell may also depend on the window width.
Use the `,(0,A.jsx)(t.code,{children:`start`}),` prop with 3 values, e.g. `,(0,A.jsx)(t.code,{children:`start={{ narrow: 2, medium: 4, wide: 6 }}`}),`.`]}),`
`,(0,A.jsx)(s,{of:v}),`
`,(0,A.jsx)(t.h3,{id:`background-in-compact-mode`,children:`Background in Compact Mode`}),`
`,(0,A.jsx)(t.p,{children:`In Compact Mode, the page background is light grey.
Grid cells have a white background and padding to stand out against it,
because the tight spacing doesn't distinguish them enough on its own.`}),`
`,(0,A.jsxs)(t.p,{children:[`Use the `,(0,A.jsx)(t.code,{children:`flush`}),` appearance to keep the white background but remove the padding, allowing content to fill the entire cell.
Use the `,(0,A.jsx)(t.code,{children:`transparent`}),` appearance to let a cell blend into the page background instead.
This also removes the padding.`]}),`
`,(0,A.jsxs)(t.p,{children:[`In Spacious Mode, the large spacing between cells is enough to tell them apart, so cells are always transparent and without padding.
The `,(0,A.jsx)(t.code,{children:`appearance`}),` prop has no effect there.`]}),`
`,(0,A.jsxs)(t.p,{children:[(0,A.jsx)(t.strong,{children:`Note`}),`: that’s why this example appears best with the ‘Compact theme’ turned on in the toolbar above.`]}),`
`,(0,A.jsx)(s,{of:f}),`
`,(0,A.jsx)(t.h3,{id:`improve-semantics`,children:`Improve semantics`}),`
`,(0,A.jsxs)(t.p,{children:[`By default, both Grid and Grid Cell render a `,(0,A.jsx)(t.code,{children:`<div>`}),` element in HTML.
Use the `,(0,A.jsx)(t.code,{children:`as`}),` prop on either to make your markup more semantic.`]}),`
`,(0,A.jsx)(s,{of:p}),`
`,(0,A.jsx)(t.h2,{id:`caution`,children:`Caution`}),`
`,(0,A.jsxs)(t.ul,{children:[`
`,(0,A.jsx)(t.li,{children:`Ensure that the number of columns you assign to a cell matches the amount of columns in the grid for the respective window width.`}),`
`,(0,A.jsx)(t.li,{children:`The same applies to starting a cell in a later column.`}),`
`,(0,A.jsx)(t.li,{children:`If the total of both values is too large, the browser adds columns to the grid.
This is not allowed.`}),`
`]}),`
`,(0,A.jsx)(t.h2,{id:`see-also`,children:`See also`}),`
`,(0,A.jsxs)(t.ul,{children:[`
`,(0,A.jsxs)(t.li,{children:[(0,A.jsx)(t.a,{href:`/docs/docs-developer-guide-spacing--docs`,children:`Spacing`}),` – which tools to use for white space and when.`]}),`
`]}),`
`,(0,A.jsx)(t.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,A.jsx)(u,{tokens:E})]})}function k(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,A.jsx)(t,{...e,children:(0,A.jsx)(O,{...e})}):O(e)}var A;e((()=>{A=t(),d(),i(),x(),w(),D(),l()}))();export{k as default};