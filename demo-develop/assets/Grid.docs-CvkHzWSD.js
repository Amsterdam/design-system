import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./jsx-runtime-BCDDjCIb.js";import{b as n,d as r,f as i,g as a,i as o,m as s,o as c,s as l}from"./iframe-D52YIHT7.js";import{n as u,t as d}from"./DesignTokensTable-DygHr1qT.js";import{t as f}from"./mdx-react-shim-MCP9dlAK.js";import{BackgroundInCompactMode as p,ImproveSemantics as m,SpanAllColumns as h,SpanColumns as g,SpanResponsively as _,SpanRows as v,StartPosition as y,VerticalGap as b,VerticalPadding as x,n as S,t as C}from"./Grid.stories-aVlGQRw1.js";var w,T,E=e((()=>{w={grid:{"column-count":{$value:4,$type:`number`},"column-gap":{$value:`{ams.space.xl}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-block":{l:{$value:`{ams.space.l}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},xl:{$value:`{ams.space.xl}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"2xl":{$value:`{ams.space.2xl}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}},"padding-inline":{$value:`{ams.space.l}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"row-gap":{l:{$value:`{ams.space.l}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},xl:{$value:`{ams.space.xl}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"2xl":{$value:`{ams.space.2xl}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}},medium:{"column-count":{$deprecated:"Use `ams.grid.vi-medium.column-count` instead. Will be removed on or after 2026-10-20.",$value:`{ams.grid.vi-medium.column-count}`,$type:`number`},"padding-inline":{$deprecated:"Use `ams.grid.vi-medium.padding-inline` instead. Will be removed on or after 2026-10-20.",$value:`{ams.grid.vi-medium.padding-inline}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}},wide:{"column-count":{$deprecated:"Use `ams.grid.vi-wide.column-count` instead. Will be removed on or after 2026-10-20.",$value:`{ams.grid.vi-wide.column-count}`,$type:`number`},"padding-inline":{$deprecated:"Use `ams.grid.vi-wide.padding-inline` instead. Will be removed on or after 2026-10-20.",$value:`{ams.grid.vi-wide.padding-inline}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}},"vi-medium":{"column-count":{$value:8,$type:`number`},"padding-inline":{$value:`{ams.space.xl}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}},"vi-wide":{"column-count":{$value:12,$type:`number`},"padding-inline":{$value:`{ams.space.2xl}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}},cell:{"background-color":{$value:`initial`,$extensions:{"nl.amsterdam.type":`color`}},"container-name":{$value:`{ams.query-containers.inline-size.container-name}`},"container-type":{$value:`inline-size`},"padding-block":{$value:`initial`,$extensions:{"nl.amsterdam.type":`dimension`}},"padding-inline":{$value:`initial`,$extensions:{"nl.amsterdam.type":`dimension`}}}}},T={ams:w}}));function D(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,k.jsxs)(k.Fragment,{children:[`
`,`
`,`
`,`
`,(0,k.jsx)(r,{of:C}),`
`,(0,k.jsx)(s,{}),`
`,(0,k.jsx)(l,{of:C}),`
`,(0,k.jsx)(i,{}),`
`,(0,k.jsx)(c,{}),`
`,(0,k.jsx)(t.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,k.jsx)(t.h3,{id:`when-to-use`,children:`When to use`}),`
`,(0,k.jsxs)(t.p,{children:[`Every page uses the Grid as its layout foundation, as a direct child of the `,(0,k.jsx)(t.a,{href:`/docs/components-containers-page--docs`,children:`Page`}),` container.`]}),`
`,(0,k.jsxs)(t.p,{children:[`A page can have multiple Grids stacked vertically.
This lets you mix a Grid with a `,(0,k.jsx)(t.a,{href:`/docs/components-containers-spotlight--docs`,children:`Spotlight`}),`, a `,(0,k.jsx)(t.a,{href:`/docs/components-layout-breakout--docs`,children:`Breakout`}),`, or a full-width `,(0,k.jsx)(t.a,{href:`/docs/components-media-image--docs`,children:`Image`}),` that bleeds out of the main layout.`]}),`
`,(0,k.jsx)(t.h3,{id:`when-not-to-use`,children:`When not to use`}),`
`,(0,k.jsx)(t.p,{children:`Never nest a Grid inside another Grid.
The Grid is currently intended for the full width of the page only.`}),`
`,(0,k.jsxs)(t.p,{children:[`Do not apply `,(0,k.jsx)(t.a,{href:`/docs/utilities-css-gap--docs`,children:`Gap utility classes`}),` to the Grid.
The Grid manages its own gaps; the utility classes interfere with that.`]}),`
`,(0,k.jsx)(t.h3,{id:`how-to-use`,children:`How to use`}),`
`,(0,k.jsxs)(t.p,{children:[`Follow the `,(0,k.jsx)(t.a,{href:`/docs/pages-public-introduction--docs#how-to-size-the-grid-cells`,children:`optimal sizes of Grid Cells`}),` for typical page sections.`]}),`
`,(0,k.jsxs)(t.p,{children:[`Use the `,(0,k.jsx)(t.code,{children:`as`}),` prop to give a Grid or a Grid Cell a meaningful HTML element when one applies.
For example, set a top-level Cell that holds the main content of the page to `,(0,k.jsx)(t.code,{children:`as="main"`}),`, or a sidebar Cell to `,(0,k.jsx)(t.code,{children:`as="aside"`}),`.`]}),`
`,(0,k.jsxs)(t.p,{children:[`Ensure the `,(0,k.jsx)(t.code,{children:`span`}),` and `,(0,k.jsx)(t.code,{children:`start`}),` values for a cell never exceed the number of columns available at that breakpoint.
The browser would add columns to fit, which breaks the layout.`]}),`
`,(0,k.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,k.jsx)(t.p,{children:`The grey strokes in the examples below indicate the columns of the grid.
The gaps between the columns are white – note that they can be wider than the columns.
Pink boxes represent cells on the grid.
In Compact Mode, the page background is light grey.`}),`
`,(0,k.jsx)(t.h3,{id:`vertical-padding`,children:`Vertical padding`}),`
`,(0,k.jsxs)(t.p,{children:[`Add white space above and below the Grid through the `,(0,k.jsx)(t.code,{children:`padding…`}),` props.
Their options match the design tokens for `,(0,k.jsx)(t.a,{href:`/docs/brand-design-tokens-space--docs`,children:`Space`}),`.
This is useful in a container with a coloured background, like `,(0,k.jsx)(t.a,{href:`/docs/components-containers-page-footer--docs`,children:`Page Footer`}),` or `,(0,k.jsx)(t.a,{href:`/docs/components-containers-spotlight--docs`,children:`Spotlight`}),`, or between two consecutive Grids.
Specify `,(0,k.jsx)(t.code,{children:`x-large`}),` to match the vertical gap between columns.
Like the other features of the Grid, this padding is responsive.`]}),`
`,(0,k.jsx)(o,{of:x}),`
`,(0,k.jsx)(t.h3,{id:`vertical-gap`,children:`Vertical gap`}),`
`,(0,k.jsxs)(t.p,{children:[`A Grid automatically creates a new row if the next cell doesn’t fit the current one.
White space between rows defaults to `,(0,k.jsx)(t.code,{children:`x-large`}),`, matching the gap between columns.
Use `,(0,k.jsx)(t.code,{children:`verticalGap`}),` to adjust or remove it.`]}),`
`,(0,k.jsx)(o,{of:b}),`
`,(0,k.jsx)(t.h3,{id:`span-columns`,children:`Span columns`}),`
`,(0,k.jsxs)(t.p,{children:[`A cell defaults to spanning one column.
Use the `,(0,k.jsx)(t.code,{children:`span`}),` prop to make a cell span more columns.`]}),`
`,(0,k.jsx)(o,{of:g}),`
`,(0,k.jsx)(t.h3,{id:`span-rows`,children:`Span rows`}),`
`,(0,k.jsxs)(t.p,{children:[`The `,(0,k.jsx)(t.code,{children:`rowSpan`}),` prop makes a cell span multiple rows.
It supports the values 1, 2, 3, and 4.
If `,(0,k.jsx)(t.code,{children:`rowSpan`}),` is responsive, each of the narrow, medium, and wide values must also fall within that range.`]}),`
`,(0,k.jsx)(o,{of:v}),`
`,(0,k.jsx)(t.h3,{id:`span-responsively`,children:`Span responsively`}),`
`,(0,k.jsxs)(t.p,{children:[`The number of columns or rows a cell covers can vary with the window width.
Use the `,(0,k.jsx)(t.code,{children:`span`}),` or `,(0,k.jsx)(t.code,{children:`rowSpan`}),` prop with three values for narrow, medium, and wide windows.
E.g. `,(0,k.jsx)(t.code,{children:`span={{ narrow: 4, medium: 5, wide: 7 }}`}),` makes the cell span all 4 columns on narrow windows, 5 of 8 on medium, and 7 of 12 on wide.`]}),`
`,(0,k.jsx)(o,{of:_}),`
`,(0,k.jsx)(t.h3,{id:`span-all-columns`,children:`Span all columns`}),`
`,(0,k.jsxs)(t.p,{children:[`To stretch a cell to all available columns – whether 4, 8, or 12 – use `,(0,k.jsx)(t.code,{children:`span="all"`}),`.`]}),`
`,(0,k.jsx)(o,{of:h}),`
`,(0,k.jsx)(t.h3,{id:`start-position`,children:`Start position`}),`
`,(0,k.jsxs)(t.p,{children:[`Each cell starts in the next available position by default.
The `,(0,k.jsx)(t.code,{children:`start`}),` prop sets an explicit starting position, useful to align cells across rows, centre a cell horizontally, or skip a column for white space.`]}),`
`,(0,k.jsxs)(t.p,{children:[`The starting position can be responsive too: `,(0,k.jsx)(t.code,{children:`start={{ narrow: 2, medium: 4, wide: 6 }}`}),`.`]}),`
`,(0,k.jsx)(o,{of:y}),`
`,(0,k.jsx)(t.h3,{id:`background-in-compact-mode`,children:`Background in Compact Mode`}),`
`,(0,k.jsxs)(t.p,{children:[`In Compact Mode the page background is light grey, and cells receive a white background and padding to stand out.
Use the `,(0,k.jsx)(t.code,{children:`flush`}),` appearance to keep the white background but remove the padding.
Use the `,(0,k.jsx)(t.code,{children:`transparent`}),` appearance to let a cell blend into the page background; this also removes the padding.`]}),`
`,(0,k.jsxs)(t.p,{children:[`In Spacious Mode the large spacing between cells distinguishes them on its own, so cells are always transparent and unpadded.
The `,(0,k.jsx)(t.code,{children:`appearance`}),` prop has no effect there.`]}),`
`,(0,k.jsx)(t.p,{children:`This example appears best with Compact Mode active in the toolbar above.`}),`
`,(0,k.jsx)(o,{of:p}),`
`,(0,k.jsx)(t.h3,{id:`improve-semantics`,children:`Improve semantics`}),`
`,(0,k.jsxs)(t.p,{children:[`Both Grid and Grid Cell render a `,(0,k.jsx)(t.code,{children:`<div>`}),` by default.
Use the `,(0,k.jsx)(t.code,{children:`as`}),` prop on either to make the markup more semantic.`]}),`
`,(0,k.jsx)(o,{of:m}),`
`,(0,k.jsx)(t.h2,{id:`features`,children:`Features`}),`
`,(0,k.jsx)(t.p,{children:`The Grid is responsive: 4 columns on narrow windows, 8 on medium, 12 on wide.
Column counts, gaps, and padding all change at the same breakpoints, so the layout scales as a whole.`}),`
`,(0,k.jsx)(t.p,{children:`Cells flow automatically.
A cell that doesn’t fit in the current row moves to the next, which keeps simple layouts simple.`}),`
`,(0,k.jsxs)(t.p,{children:[`A Grid Cell is a `,(0,k.jsx)(t.a,{href:`/docs/utilities-css-query-container--docs`,children:`query container`}),` for inline size, so elements inside it can adapt their appearance to the width of the cell.`]}),`
`,(0,k.jsx)(t.h2,{id:`design`,children:`Design`}),`
`,(0,k.jsx)(t.p,{children:`Cells align to the top of their row, not the centre.
That keeps the start of each cell’s content at a consistent baseline – important in Compact Mode where cells have a visible background.`}),`
`,(0,k.jsx)(t.p,{children:`The Grid is full-width and non-nestable on purpose.
A single, shared rhythm of columns across the page keeps content predictable for users; nesting would break that rhythm.`}),`
`,(0,k.jsx)(t.p,{children:`The 4, 8, and 12 column counts halve cleanly into 2, 3, 4, and 6 subdivisions, so the same content can be arranged consistently across breakpoints.`}),`
`,(0,k.jsx)(t.h3,{id:`breakpoints`,children:`Breakpoints`}),`
`,(0,k.jsx)(t.p,{children:`The narrow grid has 4 columns for windows up to 600 pixels wide.
The medium grid has 8 columns for windows up to 1160 pixels.
The wide grid has 12 columns at 1160 pixels and beyond.`}),`
`,(0,k.jsx)(t.p,{children:`Column widths, gaps, and margins scale continuously between breakpoints; only the column count changes at each step.`}),`
`,(0,k.jsx)(t.h3,{id:`spacious-and-compact-mode`,children:`Spacious and Compact Mode`}),`
`,(0,k.jsxs)(t.p,{children:[`In Spacious Mode, gaps between columns use the `,(0,k.jsx)(t.code,{children:`xl`}),` space token — from 36 to 60 pixels between windows 320 and 1440 pixels wide.
In Compact Mode, the same token scales from 16 to 24 pixels to accommodate denser layouts.`]}),`
`,(0,k.jsxs)(t.p,{children:[`Margins use the `,(0,k.jsx)(t.code,{children:`l`}),` token on the narrow grid in Spacious Mode (`,(0,k.jsx)(t.code,{children:`xl`}),` in Compact), `,(0,k.jsx)(t.code,{children:`xl`}),` on medium, and `,(0,k.jsx)(t.code,{children:`2xl`}),` on wide.`]}),`
`,(0,k.jsx)(t.p,{children:`In Compact Mode the wide grid includes a vertical menu bar beside the grid, up to 128 pixels wide.
On medium and narrow grids, the menu bar moves below the header.`}),`
`,(0,k.jsx)(t.h3,{id:`maximum-width`,children:`Maximum width`}),`
`,(0,k.jsx)(t.p,{children:`A maximum page width prevents content from spreading too far and keeps text comfortably readable.
For public websites it is 1440 pixels; for internal websites 1920 pixels.
There is no minimum: the grid scales as narrow as the available space.`}),`
`,(0,k.jsx)(t.h2,{id:`dimensions`,children:`Dimensions`}),`
`,(0,k.jsx)(t.p,{children:`These tables show the pixel values at each breakpoint; between breakpoints, all values scale continuously.
Dimensions are multiples of 16, not the precise measurements of any specific device.
We name the breakpoints ‘narrow’, ‘medium’, and ‘wide’ rather than ‘mobile’, ‘tablet’, and ‘desktop’ for this reason.`}),`
`,(0,k.jsx)(t.h3,{id:`spacious-mode`,children:`Spacious Mode`}),`
`,(0,k.jsxs)(t.table,{children:[(0,k.jsx)(t.thead,{children:(0,k.jsxs)(t.tr,{children:[(0,k.jsx)(t.th,{style:{textAlign:`left`},children:`Breakpoint`}),(0,k.jsx)(t.th,{style:{textAlign:`right`},children:`From`}),(0,k.jsx)(t.th,{style:{textAlign:`right`},children:`Columns`}),(0,k.jsx)(t.th,{style:{textAlign:`right`},children:`Column width`}),(0,k.jsx)(t.th,{style:{textAlign:`right`},children:`Gap`}),(0,k.jsx)(t.th,{style:{textAlign:`right`},children:`Margin`}),(0,k.jsx)(t.th,{style:{textAlign:`right`},children:`Grid width`})]})}),(0,k.jsxs)(t.tbody,{children:[(0,k.jsxs)(t.tr,{children:[(0,k.jsx)(t.td,{style:{textAlign:`left`},children:`narrow`}),(0,k.jsx)(t.td,{style:{textAlign:`right`},children:`320`}),(0,k.jsx)(t.td,{style:{textAlign:`right`},children:`4`}),(0,k.jsx)(t.td,{style:{textAlign:`right`},children:`41.0`}),(0,k.jsx)(t.td,{style:{textAlign:`right`},children:`36`}),(0,k.jsx)(t.td,{style:{textAlign:`right`},children:`24`}),(0,k.jsx)(t.td,{style:{textAlign:`right`},children:`272`})]}),(0,k.jsxs)(t.tr,{children:[(0,k.jsx)(t.td,{style:{textAlign:`left`},children:`medium`}),(0,k.jsx)(t.td,{style:{textAlign:`right`},children:`600`}),(0,k.jsx)(t.td,{style:{textAlign:`right`},children:`8`}),(0,k.jsx)(t.td,{style:{textAlign:`right`},children:`27.8`}),(0,k.jsx)(t.td,{style:{textAlign:`right`},children:`42`}),(0,k.jsx)(t.td,{style:{textAlign:`right`},children:`42`}),(0,k.jsx)(t.td,{style:{textAlign:`right`},children:`516`})]}),(0,k.jsxs)(t.tr,{children:[(0,k.jsx)(t.td,{style:{textAlign:`left`},children:`wide`}),(0,k.jsx)(t.td,{style:{textAlign:`right`},children:`1160`}),(0,k.jsx)(t.td,{style:{textAlign:`right`},children:`12`}),(0,k.jsx)(t.td,{style:{textAlign:`right`},children:`33.9`}),(0,k.jsx)(t.td,{style:{textAlign:`right`},children:`54`}),(0,k.jsx)(t.td,{style:{textAlign:`right`},children:`79.5`}),(0,k.jsx)(t.td,{style:{textAlign:`right`},children:`1001`})]})]})]}),`
`,(0,k.jsx)(t.h3,{id:`compact-mode`,children:`Compact Mode`}),`
`,(0,k.jsxs)(t.table,{children:[(0,k.jsx)(t.thead,{children:(0,k.jsxs)(t.tr,{children:[(0,k.jsx)(t.th,{style:{textAlign:`left`},children:`Breakpoint`}),(0,k.jsx)(t.th,{style:{textAlign:`right`},children:`From`}),(0,k.jsx)(t.th,{style:{textAlign:`right`},children:`Columns`}),(0,k.jsx)(t.th,{style:{textAlign:`right`},children:`Menu bar`}),(0,k.jsx)(t.th,{style:{textAlign:`right`},children:`Column width`}),(0,k.jsx)(t.th,{style:{textAlign:`right`},children:`Gap`}),(0,k.jsx)(t.th,{style:{textAlign:`right`},children:`Margin`}),(0,k.jsx)(t.th,{style:{textAlign:`right`},children:`Grid width`})]})}),(0,k.jsxs)(t.tbody,{children:[(0,k.jsxs)(t.tr,{children:[(0,k.jsx)(t.td,{style:{textAlign:`left`},children:`narrow`}),(0,k.jsx)(t.td,{style:{textAlign:`right`},children:`320`}),(0,k.jsx)(t.td,{style:{textAlign:`right`},children:`4`}),(0,k.jsx)(t.td,{style:{textAlign:`right`},children:`0`}),(0,k.jsx)(t.td,{style:{textAlign:`right`},children:`54.0`}),(0,k.jsx)(t.td,{style:{textAlign:`right`},children:`24`}),(0,k.jsx)(t.td,{style:{textAlign:`right`},children:`16`}),(0,k.jsx)(t.td,{style:{textAlign:`right`},children:`288`})]}),(0,k.jsxs)(t.tr,{children:[(0,k.jsx)(t.td,{style:{textAlign:`left`},children:`medium`}),(0,k.jsx)(t.td,{style:{textAlign:`right`},children:`600`}),(0,k.jsx)(t.td,{style:{textAlign:`right`},children:`8`}),(0,k.jsx)(t.td,{style:{textAlign:`right`},children:`0`}),(0,k.jsx)(t.td,{style:{textAlign:`right`},children:`44.6`}),(0,k.jsx)(t.td,{style:{textAlign:`right`},children:`27`}),(0,k.jsx)(t.td,{style:{textAlign:`right`},children:`27`}),(0,k.jsx)(t.td,{style:{textAlign:`right`},children:`548`})]}),(0,k.jsxs)(t.tr,{children:[(0,k.jsx)(t.td,{style:{textAlign:`left`},children:`wide`}),(0,k.jsx)(t.td,{style:{textAlign:`right`},children:`1160`}),(0,k.jsx)(t.td,{style:{textAlign:`right`},children:`12`}),(0,k.jsx)(t.td,{style:{textAlign:`right`},children:`108`}),(0,k.jsx)(t.td,{style:{textAlign:`right`},children:`50.1`}),(0,k.jsx)(t.td,{style:{textAlign:`right`},children:`33`}),(0,k.jsx)(t.td,{style:{textAlign:`right`},children:`44`}),(0,k.jsx)(t.td,{style:{textAlign:`right`},children:`964`})]})]})]}),`
`,(0,k.jsx)(t.h3,{id:`reference-widths-for-designers`,children:`Reference widths for designers`}),`
`,(0,k.jsx)(t.p,{children:`When designing a screen in Figma, choose one of three reference widths: phone, tablet, or desktop.
These correspond to the narrow, medium, and wide breakpoints respectively.`}),`
`,(0,k.jsx)(t.h4,{id:`spacious-mode-1`,children:`Spacious Mode`}),`
`,(0,k.jsxs)(t.table,{children:[(0,k.jsx)(t.thead,{children:(0,k.jsxs)(t.tr,{children:[(0,k.jsx)(t.th,{style:{textAlign:`left`},children:`Device class`}),(0,k.jsx)(t.th,{style:{textAlign:`right`},children:`Reference width`}),(0,k.jsx)(t.th,{style:{textAlign:`right`},children:`Columns`}),(0,k.jsx)(t.th,{style:{textAlign:`right`},children:`Column width`}),(0,k.jsx)(t.th,{style:{textAlign:`right`},children:`Gap`}),(0,k.jsx)(t.th,{style:{textAlign:`right`},children:`Margin`}),(0,k.jsx)(t.th,{style:{textAlign:`right`},children:`Grid width`})]})}),(0,k.jsxs)(t.tbody,{children:[(0,k.jsxs)(t.tr,{children:[(0,k.jsx)(t.td,{style:{textAlign:`left`},children:`phone`}),(0,k.jsx)(t.td,{style:{textAlign:`right`},children:`320`}),(0,k.jsx)(t.td,{style:{textAlign:`right`},children:`4`}),(0,k.jsx)(t.td,{style:{textAlign:`right`},children:`41`}),(0,k.jsx)(t.td,{style:{textAlign:`right`},children:`36`}),(0,k.jsx)(t.td,{style:{textAlign:`right`},children:`24`}),(0,k.jsx)(t.td,{style:{textAlign:`right`},children:`272`})]}),(0,k.jsxs)(t.tr,{children:[(0,k.jsx)(t.td,{style:{textAlign:`left`},children:`tablet`}),(0,k.jsx)(t.td,{style:{textAlign:`right`},children:`880`}),(0,k.jsx)(t.td,{style:{textAlign:`right`},children:`8`}),(0,k.jsx)(t.td,{style:{textAlign:`right`},children:`56`}),(0,k.jsx)(t.td,{style:{textAlign:`right`},children:`48`}),(0,k.jsx)(t.td,{style:{textAlign:`right`},children:`48`}),(0,k.jsx)(t.td,{style:{textAlign:`right`},children:`784`})]}),(0,k.jsxs)(t.tr,{children:[(0,k.jsx)(t.td,{style:{textAlign:`left`},children:`desktop`}),(0,k.jsx)(t.td,{style:{textAlign:`right`},children:`1440`}),(0,k.jsx)(t.td,{style:{textAlign:`right`},children:`12`}),(0,k.jsx)(t.td,{style:{textAlign:`right`},children:`50`}),(0,k.jsx)(t.td,{style:{textAlign:`right`},children:`60`}),(0,k.jsx)(t.td,{style:{textAlign:`right`},children:`90`}),(0,k.jsx)(t.td,{style:{textAlign:`right`},children:`1260`})]})]})]}),`
`,(0,k.jsx)(t.h4,{id:`compact-mode-1`,children:`Compact Mode`}),`
`,(0,k.jsxs)(t.table,{children:[(0,k.jsx)(t.thead,{children:(0,k.jsxs)(t.tr,{children:[(0,k.jsx)(t.th,{style:{textAlign:`left`},children:`Device class`}),(0,k.jsx)(t.th,{style:{textAlign:`right`},children:`Reference width`}),(0,k.jsx)(t.th,{style:{textAlign:`right`},children:`Columns`}),(0,k.jsx)(t.th,{style:{textAlign:`right`},children:`Menu bar`}),(0,k.jsx)(t.th,{style:{textAlign:`right`},children:`Column width`}),(0,k.jsx)(t.th,{style:{textAlign:`right`},children:`Gap`}),(0,k.jsx)(t.th,{style:{textAlign:`right`},children:`Margin`}),(0,k.jsx)(t.th,{style:{textAlign:`right`},children:`Grid width`})]})}),(0,k.jsxs)(t.tbody,{children:[(0,k.jsxs)(t.tr,{children:[(0,k.jsx)(t.td,{style:{textAlign:`left`},children:`phone`}),(0,k.jsx)(t.td,{style:{textAlign:`right`},children:`320`}),(0,k.jsx)(t.td,{style:{textAlign:`right`},children:`4`}),(0,k.jsx)(t.td,{style:{textAlign:`right`},children:`0`}),(0,k.jsx)(t.td,{style:{textAlign:`right`},children:`54`}),(0,k.jsx)(t.td,{style:{textAlign:`right`},children:`24`}),(0,k.jsx)(t.td,{style:{textAlign:`right`},children:`16`}),(0,k.jsx)(t.td,{style:{textAlign:`right`},children:`288`})]}),(0,k.jsxs)(t.tr,{children:[(0,k.jsx)(t.td,{style:{textAlign:`left`},children:`tablet`}),(0,k.jsx)(t.td,{style:{textAlign:`right`},children:`880`}),(0,k.jsx)(t.td,{style:{textAlign:`right`},children:`8`}),(0,k.jsx)(t.td,{style:{textAlign:`right`},children:`0`}),(0,k.jsx)(t.td,{style:{textAlign:`right`},children:`76.3`}),(0,k.jsx)(t.td,{style:{textAlign:`right`},children:`30`}),(0,k.jsx)(t.td,{style:{textAlign:`right`},children:`30`}),(0,k.jsx)(t.td,{style:{textAlign:`right`},children:`820`})]}),(0,k.jsxs)(t.tr,{children:[(0,k.jsx)(t.td,{style:{textAlign:`left`},children:`desktop`}),(0,k.jsx)(t.td,{style:{textAlign:`right`},children:`1920`}),(0,k.jsx)(t.td,{style:{textAlign:`right`},children:`12`}),(0,k.jsx)(t.td,{style:{textAlign:`right`},children:`108`}),(0,k.jsx)(t.td,{style:{textAlign:`right`},children:`110`}),(0,k.jsx)(t.td,{style:{textAlign:`right`},children:`36`}),(0,k.jsx)(t.td,{style:{textAlign:`right`},children:`48`}),(0,k.jsx)(t.td,{style:{textAlign:`right`},children:`1716`})]})]})]}),`
`,(0,k.jsx)(t.p,{children:`The Figma grid styles are in the shared library under 'Grid styles'.`}),`
`,(0,k.jsx)(t.h3,{id:`windows-or-screens`,children:`Windows or screens`}),`
`,(0,k.jsx)(t.p,{children:`The breakpoints respond to the browser window width, not the screen resolution.
On most devices the two coincide, but a browser window can be narrower than the screen — for example when two apps share a tablet screen side by side.`}),`
`,(0,k.jsx)(t.h2,{id:`relationship-with-text`,children:`Relationship with text`}),`
`,(0,k.jsxs)(t.p,{children:[(0,k.jsx)(t.a,{href:`/docs/brand-design-tokens-typography--docs`,children:`Text sizes`}),` scale with the window width in sync with the grid, so typography and layout stay proportional across all screen sizes.`]}),`
`,(0,k.jsx)(t.p,{children:`The breakpoints also respond to the effective text size.
When a user zooms in or sets a larger system font, the breakpoints kick in earlier — the number of columns adjusts before content overflows its cells.`}),`
`,(0,k.jsx)(t.h2,{id:`see-also`,children:`See also`}),`
`,(0,k.jsxs)(t.ul,{children:[`
`,(0,k.jsxs)(t.li,{children:[(0,k.jsx)(t.a,{href:`/docs/components-containers-page--docs`,children:`Page`}),` – the container that wraps the Grid.`]}),`
`,(0,k.jsxs)(t.li,{children:[(0,k.jsx)(t.a,{href:`/docs/components-containers-spotlight--docs`,children:`Spotlight`}),` – a full-bleed section that interrupts the Grid.`]}),`
`,(0,k.jsxs)(t.li,{children:[(0,k.jsx)(t.a,{href:`/docs/components-layout-breakout--docs`,children:`Breakout`}),` – widens a cell beyond its column allotment.`]}),`
`,(0,k.jsxs)(t.li,{children:[(0,k.jsx)(t.a,{href:`/docs/docs-developer-guide-spacing--docs`,children:`Spacing`}),` – which tools to use for white space and when.`]}),`
`]}),`
`,(0,k.jsx)(t.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,k.jsx)(d,{tokens:T})]})}function O(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,k.jsx)(t,{...e,children:(0,k.jsx)(D,{...e})}):D(e)}var k;e((()=>{k=t(),f(),a(),u(),E(),S()}))();export{O as default};