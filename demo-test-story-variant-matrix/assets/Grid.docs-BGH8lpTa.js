import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,d as n,h as r,i,n as a,p as o,u as s}from"./blocks-zzQRermb.js";import{t as c}from"./jsx-runtime-ATHzeHXA.js";import{i as l,r as u}from"./react-Dyi61YEg.js";import{n as d,t as f}from"./DesignTokensTable-Do5WsLb4.js";import{a as p,i as m,n as h,o as g,r as _,t as v}from"./Grid.stories-CCqECgmP.js";import{a as y,c as b,i as x,o as S,r as C,s as w,t as T}from"./GridCell.stories-CFwed-z5.js";import{n as E,r as D}from"./GridSubgrid.stories-By1bC73q.js";var O,k;function A(){return(A=e((()=>{O={grid:{"column-count":{$value:4,$type:`number`},"column-gap":{$value:`{ams.space.xl}`,$extensions:{"nl.amsterdam.hint":`Must be a single value: it sets a longhand property, which takes only one.`,"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-block":{l:{$value:`{ams.space.l}`,$extensions:{"nl.amsterdam.hint":`Must be a single value: it sets a longhand property, which takes only one.`,"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},xl:{$value:`{ams.space.xl}`,$extensions:{"nl.amsterdam.hint":`Must be a single value: it sets a longhand property, which takes only one.`,"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"2xl":{$value:`{ams.space.2xl}`,$extensions:{"nl.amsterdam.hint":`Must be a single value: it sets a longhand property, which takes only one.`,"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}},"padding-inline":{$value:`{ams.space.l}`,$extensions:{"nl.amsterdam.hint":`Must be a single value: it is used in a calculation, which two values would invalidate.`,"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"row-gap":{l:{$value:`{ams.space.l}`,$extensions:{"nl.amsterdam.hint":`Must be a single value: it is used in a calculation, which two values would invalidate.`,"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},xl:{$value:`{ams.space.xl}`,$extensions:{"nl.amsterdam.hint":`Must be a single value: it is used in a calculation, which two values would invalidate.`,"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"2xl":{$value:`{ams.space.2xl}`,$extensions:{"nl.amsterdam.hint":`Must be a single value: it is used in a calculation, which two values would invalidate.`,"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}},medium:{"column-count":{$deprecated:"Use `ams.grid.vi-medium.column-count` instead. Will be removed on or after 2026-10-20.",$value:`{ams.grid.vi-medium.column-count}`,$type:`number`},"padding-inline":{$deprecated:"Use `ams.grid.vi-medium.padding-inline` instead. Will be removed on or after 2026-10-20.",$value:`{ams.grid.vi-medium.padding-inline}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}},wide:{"column-count":{$deprecated:"Use `ams.grid.vi-wide.column-count` instead. Will be removed on or after 2026-10-20.",$value:`{ams.grid.vi-wide.column-count}`,$type:`number`},"padding-inline":{$deprecated:"Use `ams.grid.vi-wide.padding-inline` instead. Will be removed on or after 2026-10-20.",$value:`{ams.grid.vi-wide.padding-inline}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}},"vi-medium":{"column-count":{$value:8,$type:`number`},"padding-inline":{$value:`{ams.space.xl}`,$extensions:{"nl.amsterdam.hint":`Must be a single value: it is used in a calculation, which two values would invalidate.`,"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}},"vi-wide":{"column-count":{$value:12,$type:`number`},"padding-inline":{$value:`{ams.space.2xl}`,$extensions:{"nl.amsterdam.hint":`Must be a single value: it is used in a calculation, which two values would invalidate.`,"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}},cell:{"background-color":{$value:`initial`,$extensions:{"nl.amsterdam.type":`color`}},"container-name":{$value:`{ams.query-containers.inline-size.container-name}`},"container-type":{$value:`inline-size`},"padding-block":{$value:`initial`,$extensions:{"nl.amsterdam.type":`dimension`}},"padding-inline":{$value:`initial`,$extensions:{"nl.amsterdam.type":`dimension`}}}}},k={ams:O}})))()}function j(e){let r={a:`a`,code:`code`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...l(),...e.components};return(0,N.jsxs)(N.Fragment,{children:[`
`,`
`,`
`,`
`,(0,N.jsx)(s,{of:h}),`
`,(0,N.jsx)(o,{}),`
`,(0,N.jsx)(t,{of:h}),`
`,(0,N.jsx)(n,{}),`
`,(0,N.jsx)(i,{}),`
`,(0,N.jsx)(r.h2,{id:`subcomponents`,children:`Subcomponents`}),`
`,(0,N.jsx)(r.h3,{id:`cell`,children:`Cell`}),`
`,(0,N.jsxs)(r.p,{children:[`Every direct child of a Grid must be a Cell or a Subgrid.
Size and position it with the `,(0,N.jsx)(r.code,{children:`span`}),` and `,(0,N.jsx)(r.code,{children:`start`}),` props, which accept responsive values.
Its `,(0,N.jsx)(r.code,{children:`appearance`}),` controls the background in Compact Mode.`]}),`
`,(0,N.jsxs)(r.p,{children:[(0,N.jsx)(r.code,{children:`rowSpan`}),` lets a Cell cover several rows, and `,(0,N.jsx)(r.code,{children:`rowStart`}),` puts it in a row of your choosing.
Reach for `,(0,N.jsx)(r.code,{children:`rowStart`}),` only where automatic placement cannot do the job: it never moves back a column without moving down a row, so a Cell that comes first in the source and sits to the right of the one after it pushes that one down.
A sidebar on the trailing side needs a row of its own for that reason; one on the leading side does not, because placement runs towards it.
Set it on the sidebar rather than on everything around it, and leave the rest to automatic placement.`]}),`
`,(0,N.jsx)(a,{of:T}),`
`,(0,N.jsx)(i,{of:T}),`
`,(0,N.jsx)(r.h3,{id:`subgrid`,children:`Subgrid`}),`
`,(0,N.jsxs)(r.p,{children:[`Shares the columns it spans with its own children, so they align to the columns of the page.
Place and size it with `,(0,N.jsx)(r.code,{children:`span`}),` and `,(0,N.jsx)(r.code,{children:`start`}),`, exactly like a Cell; those values also decide how many columns its children have to work with.
Every direct child of a Subgrid must be a Cell.`]}),`
`,(0,N.jsx)(r.p,{children:`Use it for a region beside a sidebar, such as the results of an index page next to a filter column.
Without it, a Cell inside a Cell has no columns to align to.`}),`
`,(0,N.jsxs)(r.p,{children:[`It takes `,(0,N.jsx)(r.code,{children:`rowSpan`}),` and `,(0,N.jsx)(r.code,{children:`rowStart`}),` for the same reasons a Cell does.
A Subgrid is placed as one item, so a region beside a sidebar on the trailing side takes a `,(0,N.jsx)(r.code,{children:`rowStart`}),` of its own.`]}),`
`,(0,N.jsxs)(r.p,{children:[`Its rows take the vertical gap of the Grid, so the region keeps the rhythm of the page.
Give it its own `,(0,N.jsx)(r.code,{children:`gapVertical`}),` to space its rows differently.
It takes `,(0,N.jsx)(r.code,{children:`x-large`}),` as well, which the Grid has no need of: that is the gap a Grid gives by default, and only a Subgrid can end up without it, in a Grid that lowered or removed its own.`]}),`
`,(0,N.jsx)(a,{of:E}),`
`,(0,N.jsx)(i,{of:E}),`
`,(0,N.jsx)(r.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,N.jsx)(r.h3,{id:`when-to-use`,children:`When to use`}),`
`,(0,N.jsxs)(r.p,{children:[`Every page uses the Grid as its layout foundation, as a direct child of the `,(0,N.jsx)(r.a,{href:`/docs/components-containers-page--docs`,children:`Page`}),` container.`]}),`
`,(0,N.jsxs)(r.p,{children:[`A page can have multiple Grids stacked vertically.
This lets you mix a Grid with a `,(0,N.jsx)(r.a,{href:`/docs/components-containers-spotlight--docs`,children:`Spotlight`}),`, a `,(0,N.jsx)(r.a,{href:`/docs/components-layout-breakout--docs`,children:`Breakout`}),`, or a full-width `,(0,N.jsx)(r.a,{href:`/docs/components-media-image--docs`,children:`Image`}),` that bleeds out of the main layout.`]}),`
`,(0,N.jsx)(r.h3,{id:`when-not-to-use`,children:`When not to use`}),`
`,(0,N.jsx)(r.p,{children:`Never nest a Grid inside another Grid.
The Grid is currently intended for the full width of the page only.`}),`
`,(0,N.jsxs)(r.p,{children:[`Do not apply `,(0,N.jsx)(r.a,{href:`/docs/utilities-css-gap--docs`,children:`Gap utility classes`}),` to the Grid.
The Grid manages its own gaps; the utility classes interfere with that.`]}),`
`,(0,N.jsx)(r.h3,{id:`how-to-use`,children:`How to use`}),`
`,(0,N.jsxs)(r.p,{children:[`Follow the `,(0,N.jsx)(r.a,{href:`/docs/pages-guidelines-layout-and-spacing--docs#how-to-size-the-grid-cells`,children:`optimal sizes of Grid Cells`}),` for typical page sections.`]}),`
`,(0,N.jsxs)(r.p,{children:[`Use the `,(0,N.jsx)(r.code,{children:`as`}),` prop to give a Grid or a Grid Cell a meaningful HTML element when one applies.
For example, set a top-level Cell that holds the main content of the page to `,(0,N.jsx)(r.code,{children:`as="main"`}),`, or a sidebar Cell to `,(0,N.jsx)(r.code,{children:`as="aside"`}),`.`]}),`
`,(0,N.jsxs)(r.p,{children:[`Put `,(0,N.jsx)(r.code,{children:`as="main"`}),` on the Grid itself when the main content of a page is a single section: the Grid then is that region.
Wrap the sections in a plain `,(0,N.jsx)(r.code,{children:`main`}),` element instead when the region holds several of them, such as more Grids, a `,(0,N.jsx)(r.a,{href:`/docs/components-containers-spotlight--docs`,children:`Spotlight`}),`, or a full-bleed `,(0,N.jsx)(r.a,{href:`/docs/components-media-image--docs`,children:`Image`}),`.
Next to a sidebar, the main content goes in its own Grid Cell.`]}),`
`,(0,N.jsxs)(r.p,{children:[`Ensure the `,(0,N.jsx)(r.code,{children:`span`}),` and `,(0,N.jsx)(r.code,{children:`start`}),` values for a cell never exceed the number of columns available at that breakpoint.
The browser would add columns to fit, which breaks the layout.`]}),`
`,(0,N.jsxs)(r.p,{children:[`Write the Cells in the order the content should be read, and use `,(0,N.jsx)(r.code,{children:`start`}),` only to decide where each one sits.
Reading order and keyboard order follow the markup rather than the columns, so the two disagree as soon as `,(0,N.jsx)(r.code,{children:`start`}),` is used to reorder rather than to place.`]}),`
`,(0,N.jsx)(r.p,{children:`A Subgrid groups its Cells in the markup as well as on the grid, so it decides the order everything inside it is read in.
Two Subgrids beside one another are read one after the other, the whole of the left column before the whole of the right, where the same Cells written straight into the Grid would have been read across each row in turn.
Keyboard order and screen reader order follow that grouping, and so does the narrow grid: two Subgrids that each span its 4 columns stack there, so the second column lands below the whole of the first rather than interleaving with it.
Reach for a Subgrid where reading a column at a time suits the content, and leave the Cells in the Grid where reading across the rows does.`}),`
`,(0,N.jsx)(r.h2,{id:`examples`,children:`Examples`}),`
`,(0,N.jsx)(r.p,{children:`The grey strokes in the examples below indicate the columns of the grid.
The gaps between the columns are white – note that they can be wider than the columns.
Pink boxes represent cells on the grid.
In Compact Mode, the page background is light grey.`}),`
`,(0,N.jsx)(r.h3,{id:`vertical-padding`,children:`Vertical padding`}),`
`,(0,N.jsxs)(r.p,{children:[`The Grid has no vertical padding of its own.
Add white space above and below it through the `,(0,N.jsx)(r.code,{children:`padding…`}),` props.
They accept `,(0,N.jsx)(r.code,{children:`large`}),`, `,(0,N.jsx)(r.code,{children:`x-large`}),`, and `,(0,N.jsx)(r.code,{children:`2x-large`}),`, matching the `,(0,N.jsx)(r.code,{children:`l`}),`, `,(0,N.jsx)(r.code,{children:`xl`}),`, and `,(0,N.jsx)(r.code,{children:`2xl`}),` design tokens for `,(0,N.jsx)(r.a,{href:`/docs/brand-design-tokens-space--docs`,children:`space`}),`.
This is useful in a container with a coloured background, like `,(0,N.jsx)(r.a,{href:`/docs/components-containers-page-footer--docs`,children:`Page Footer`}),` or `,(0,N.jsx)(r.a,{href:`/docs/components-containers-spotlight--docs`,children:`Spotlight`}),`, or between two consecutive Grids.
Specify `,(0,N.jsx)(r.code,{children:`x-large`}),` to match the gaps between the columns and the rows.
Like the other features of the Grid, this padding is responsive.`]}),`
`,(0,N.jsx)(a,{of:p}),`
`,(0,N.jsx)(r.h3,{id:`vertical-gap`,children:`Vertical gap`}),`
`,(0,N.jsxs)(r.p,{children:[`A Grid automatically creates a new row if the next cell doesn’t fit the current one.
White space between rows defaults to `,(0,N.jsx)(r.code,{children:`x-large`}),`, matching the gap between columns.
Use `,(0,N.jsx)(r.code,{children:`gapVertical`}),` to lower it to `,(0,N.jsx)(r.code,{children:`large`}),` or raise it to `,(0,N.jsx)(r.code,{children:`2x-large`}),`, or to remove it with `,(0,N.jsx)(r.code,{children:`none`}),`.`]}),`
`,(0,N.jsx)(a,{of:m}),`
`,(0,N.jsx)(r.h3,{id:`span-columns`,children:`Span columns`}),`
`,(0,N.jsxs)(r.p,{children:[`A cell defaults to spanning one column.
Use the `,(0,N.jsx)(r.code,{children:`span`}),` prop to make a cell span more columns.`]}),`
`,(0,N.jsx)(a,{of:y}),`
`,(0,N.jsx)(r.h3,{id:`span-rows`,children:`Span rows`}),`
`,(0,N.jsxs)(r.p,{children:[`The `,(0,N.jsx)(r.code,{children:`rowSpan`}),` prop makes a cell span multiple rows.
It supports the values 1, 2, 3, and 4.
If `,(0,N.jsx)(r.code,{children:`rowSpan`}),` is responsive, each of the narrow, medium, and wide values must also fall within that range.`]}),`
`,(0,N.jsx)(a,{of:_}),`
`,(0,N.jsx)(r.h3,{id:`span-responsively`,children:`Span responsively`}),`
`,(0,N.jsxs)(r.p,{children:[`The number of columns or rows a cell covers can vary with the window width.
Use the `,(0,N.jsx)(r.code,{children:`span`}),` or `,(0,N.jsx)(r.code,{children:`rowSpan`}),` prop with three values for narrow, medium, and wide windows.
E.g. `,(0,N.jsx)(r.code,{children:`span={{ narrow: 4, medium: 5, wide: 7 }}`}),` makes the cell span all 4 columns on narrow windows, 5 of 8 on medium, and 7 of 12 on wide.`]}),`
`,(0,N.jsx)(a,{of:S}),`
`,(0,N.jsx)(r.h3,{id:`span-all-columns`,children:`Span all columns`}),`
`,(0,N.jsxs)(r.p,{children:[`To stretch a cell to all available columns – whether 4, 8, or 12 – use `,(0,N.jsx)(r.code,{children:`span="all"`}),`.`]}),`
`,(0,N.jsx)(a,{of:x}),`
`,(0,N.jsx)(r.h3,{id:`start-position`,children:`Start position`}),`
`,(0,N.jsxs)(r.p,{children:[`Each cell starts in the next available position by default.
The `,(0,N.jsx)(r.code,{children:`start`}),` prop sets an explicit starting position, useful to align cells across rows, centre a cell horizontally, or skip a column for white space.`]}),`
`,(0,N.jsxs)(r.p,{children:[`The starting position can be responsive too: `,(0,N.jsx)(r.code,{children:`start={{ narrow: 2, medium: 4, wide: 6 }}`}),`.`]}),`
`,(0,N.jsx)(a,{of:w}),`
`,(0,N.jsx)(r.h3,{id:`background-in-compact-mode`,children:`Background in Compact Mode`}),`
`,(0,N.jsxs)(r.p,{children:[`In Compact Mode the page background is light grey, and cells receive a white background and padding to stand out.
Use the `,(0,N.jsx)(r.code,{children:`flush`}),` appearance to keep the white background but remove the padding.
Use the `,(0,N.jsx)(r.code,{children:`transparent`}),` appearance to let a cell blend into the page background; this also removes the padding.`]}),`
`,(0,N.jsxs)(r.p,{children:[`In Spacious Mode the large spacing between cells distinguishes them on its own, so cells are always transparent and unpadded.
The `,(0,N.jsx)(r.code,{children:`appearance`}),` prop has no effect there.`]}),`
`,(0,N.jsx)(r.p,{children:`This example appears best with Compact Mode active in the toolbar above.`}),`
`,(0,N.jsx)(a,{of:v}),`
`,(0,N.jsx)(r.h3,{id:`improve-semantics`,children:`Improve semantics`}),`
`,(0,N.jsxs)(r.p,{children:[`Both Grid and Grid Cell render a `,(0,N.jsx)(r.code,{children:`<div>`}),` by default.
Use the `,(0,N.jsx)(r.code,{children:`as`}),` prop on either to make the markup more semantic.`]}),`
`,(0,N.jsx)(a,{of:C}),`
`,(0,N.jsx)(r.h2,{id:`features`,children:`Features`}),`
`,(0,N.jsx)(r.p,{children:`The Grid is responsive: 4 columns on narrow windows, 8 on medium, 12 on wide.
The column count and the horizontal padding change at the breakpoints; the gaps scale continuously across all of them.`}),`
`,(0,N.jsx)(r.p,{children:`Cells flow automatically.
A cell that doesn’t fit in the current row moves to the next, which keeps simple layouts simple.`}),`
`,(0,N.jsxs)(r.p,{children:[`A Grid Cell is a `,(0,N.jsx)(r.a,{href:`/docs/utilities-css-query-container--docs`,children:`query container`}),` for inline size, so elements inside it can adapt their appearance to the width of the cell.
A Subgrid is not a query container: a grid container that establishes an independent formatting context cannot share its parent’s columns, so it would stop being a subgrid.
Its Cells are query containers as usual, which is where components that need one belong.`]}),`
`,(0,N.jsx)(r.h2,{id:`design`,children:`Design`}),`
`,(0,N.jsx)(r.p,{children:`Cells align to the top of their row, not the centre.
That keeps the start of each cell’s content at a consistent baseline – important in Compact Mode where cells have a visible background.`}),`
`,(0,N.jsx)(r.p,{children:`The Grid is full-width and non-nestable on purpose.
A single, shared rhythm of columns across the page keeps content predictable for users; nesting would break that rhythm.`}),`
`,(0,N.jsxs)(r.p,{children:[`The Grid has no vertical padding of its own; the `,(0,N.jsx)(r.code,{children:`padding…`}),` props add `,(0,N.jsx)(r.code,{children:`l`}),`, `,(0,N.jsx)(r.code,{children:`xl`}),`, or `,(0,N.jsx)(r.code,{children:`2xl`}),` where a design calls for it.`]}),`
`,(0,N.jsx)(r.p,{children:`The 4, 8, and 12 column counts halve cleanly into 2, 3, 4, and 6 subdivisions, so the same content can be arranged consistently across breakpoints.`}),`
`,(0,N.jsx)(r.h3,{id:`breakpoints`,children:`Breakpoints`}),`
`,(0,N.jsx)(r.p,{children:`The narrow grid has 4 columns for windows up to 600 pixels wide.
The medium grid has 8 columns for windows up to 1160 pixels.
The wide grid has 12 columns at 1160 pixels and beyond.`}),`
`,(0,N.jsx)(r.p,{children:`Column widths and gaps scale continuously with the width of the window.
At each breakpoint the column count changes, and the margin moves up to the next space token.`}),`
`,(0,N.jsx)(r.h3,{id:`spacious-and-compact-mode`,children:`Spacious and Compact Mode`}),`
`,(0,N.jsxs)(r.p,{children:[`Gaps between columns use the `,(0,N.jsx)(r.code,{children:`xl`}),` space token, at every breakpoint.
In Spacious Mode it grows from 36 to 60 pixels between windows 320 and 1440 pixels wide.
In Compact Mode it scales from 20 to 32 pixels to accommodate denser layouts.
Rows use the same token by default, so cells sit equally far apart in both directions.`]}),`
`,(0,N.jsxs)(r.p,{children:[`Margins step up at each breakpoint.
In Spacious Mode they use the `,(0,N.jsx)(r.code,{children:`l`}),` token on the narrow grid, `,(0,N.jsx)(r.code,{children:`xl`}),` on medium, and `,(0,N.jsx)(r.code,{children:`2xl`}),` on wide.
In Compact Mode they use `,(0,N.jsx)(r.code,{children:`m`}),`, `,(0,N.jsx)(r.code,{children:`l`}),`, and `,(0,N.jsx)(r.code,{children:`xl`}),` respectively.
This makes the margin smaller than the gap between cells on narrow windows: content sits closer to the edges of the device than the cells do to each other.
That is deliberate, as Compact Mode has no need for the editorial white space beside the spacious grid.`]}),`
`,(0,N.jsxs)(r.p,{children:[`In Compact Mode every cell adds `,(0,N.jsx)(r.code,{children:`m`}),` of padding on all sides, inside the margins of the Grid.`]}),`
`,(0,N.jsx)(r.h3,{id:`display-cutouts`,children:`Display cutouts`}),`
`,(0,N.jsx)(r.p,{children:`Phones with a display cutout, such as a notch or a camera housing, need clear space along the edge of the screen.
Where the margin is not already wide enough, the Grid widens it to match.
It uses the larger of the two, never both added together.`}),`
`,(0,N.jsx)(r.p,{children:`You mostly see this in landscape.
iOS asks for the same space on both sides, so both margins grow: to around 62 pixels on a recent phone.
At the widths a phone has in landscape, that is roughly a whole column of the medium grid.
Compact Mode changes the most, since its margins start out the smallest.`}),`
`,(0,N.jsxs)(r.p,{children:[`The margins only grow if the page asks for the whole screen with `,(0,N.jsx)(r.code,{children:`viewport-fit=cover`}),`.
`,(0,N.jsx)(r.a,{href:`/docs/docs-developer-guide-getting-started--docs`,children:`Getting started`}),` explains how.`]}),`
`,(0,N.jsx)(r.h3,{id:`maximum-width`,children:`Maximum width`}),`
`,(0,N.jsx)(r.p,{children:`A maximum page width prevents content from spreading too far and keeps text comfortably readable.
For public websites it is 1440 pixels; for internal websites 1920 pixels.
There is no minimum: the grid scales as narrow as the available space.`}),`
`,(0,N.jsx)(r.h2,{id:`dimensions`,children:`Dimensions`}),`
`,(0,N.jsx)(r.p,{children:`These tables show the pixel values at each breakpoint; between breakpoints, all values scale continuously.
‘Margin’ is the horizontal padding of the Grid itself; ‘Gap’ sits between the columns and, by default, between the rows as well.
‘Menu bar’ is the vertical bar that Compact Mode places beside the wide grid, 128 pixels wide; on medium and narrow grids it moves below the header instead.
Dimensions are multiples of 16, not the precise measurements of any specific device.
We name the breakpoints ‘narrow’, ‘medium’, and ‘wide’ rather than ‘mobile’, ‘tablet’, and ‘desktop’ for this reason.`}),`
`,(0,N.jsx)(r.h3,{id:`spacious-mode`,children:`Spacious Mode`}),`
`,(0,N.jsxs)(r.table,{children:[(0,N.jsx)(r.thead,{children:(0,N.jsxs)(r.tr,{children:[(0,N.jsx)(r.th,{style:{textAlign:`left`},children:`Breakpoint`}),(0,N.jsx)(r.th,{style:{textAlign:`right`},children:`From`}),(0,N.jsx)(r.th,{style:{textAlign:`right`},children:`Columns`}),(0,N.jsx)(r.th,{style:{textAlign:`right`},children:`Column width`}),(0,N.jsx)(r.th,{style:{textAlign:`right`},children:`Gap`}),(0,N.jsx)(r.th,{style:{textAlign:`right`},children:`Margin`}),(0,N.jsx)(r.th,{style:{textAlign:`right`},children:`Grid width`})]})}),(0,N.jsxs)(r.tbody,{children:[(0,N.jsxs)(r.tr,{children:[(0,N.jsx)(r.td,{style:{textAlign:`left`},children:`narrow`}),(0,N.jsx)(r.td,{style:{textAlign:`right`},children:`320`}),(0,N.jsx)(r.td,{style:{textAlign:`right`},children:`4`}),(0,N.jsx)(r.td,{style:{textAlign:`right`},children:`41.0`}),(0,N.jsx)(r.td,{style:{textAlign:`right`},children:`36`}),(0,N.jsx)(r.td,{style:{textAlign:`right`},children:`24`}),(0,N.jsx)(r.td,{style:{textAlign:`right`},children:`272`})]}),(0,N.jsxs)(r.tr,{children:[(0,N.jsx)(r.td,{style:{textAlign:`left`},children:`medium`}),(0,N.jsx)(r.td,{style:{textAlign:`right`},children:`600`}),(0,N.jsx)(r.td,{style:{textAlign:`right`},children:`8`}),(0,N.jsx)(r.td,{style:{textAlign:`right`},children:`27.8`}),(0,N.jsx)(r.td,{style:{textAlign:`right`},children:`42`}),(0,N.jsx)(r.td,{style:{textAlign:`right`},children:`42`}),(0,N.jsx)(r.td,{style:{textAlign:`right`},children:`516`})]}),(0,N.jsxs)(r.tr,{children:[(0,N.jsx)(r.td,{style:{textAlign:`left`},children:`wide`}),(0,N.jsx)(r.td,{style:{textAlign:`right`},children:`1160`}),(0,N.jsx)(r.td,{style:{textAlign:`right`},children:`12`}),(0,N.jsx)(r.td,{style:{textAlign:`right`},children:`33.9`}),(0,N.jsx)(r.td,{style:{textAlign:`right`},children:`54`}),(0,N.jsx)(r.td,{style:{textAlign:`right`},children:`79.5`}),(0,N.jsx)(r.td,{style:{textAlign:`right`},children:`1001`})]})]})]}),`
`,(0,N.jsx)(r.h3,{id:`compact-mode`,children:`Compact Mode`}),`
`,(0,N.jsxs)(r.table,{children:[(0,N.jsx)(r.thead,{children:(0,N.jsxs)(r.tr,{children:[(0,N.jsx)(r.th,{style:{textAlign:`left`},children:`Breakpoint`}),(0,N.jsx)(r.th,{style:{textAlign:`right`},children:`From`}),(0,N.jsx)(r.th,{style:{textAlign:`right`},children:`Columns`}),(0,N.jsx)(r.th,{style:{textAlign:`right`},children:`Menu bar`}),(0,N.jsx)(r.th,{style:{textAlign:`right`},children:`Column width`}),(0,N.jsx)(r.th,{style:{textAlign:`right`},children:`Gap`}),(0,N.jsx)(r.th,{style:{textAlign:`right`},children:`Margin`}),(0,N.jsx)(r.th,{style:{textAlign:`right`},children:`Grid width`})]})}),(0,N.jsxs)(r.tbody,{children:[(0,N.jsxs)(r.tr,{children:[(0,N.jsx)(r.td,{style:{textAlign:`left`},children:`narrow`}),(0,N.jsx)(r.td,{style:{textAlign:`right`},children:`320`}),(0,N.jsx)(r.td,{style:{textAlign:`right`},children:`4`}),(0,N.jsx)(r.td,{style:{textAlign:`right`},children:`0`}),(0,N.jsx)(r.td,{style:{textAlign:`right`},children:`59.0`}),(0,N.jsx)(r.td,{style:{textAlign:`right`},children:`20`}),(0,N.jsx)(r.td,{style:{textAlign:`right`},children:`12`}),(0,N.jsx)(r.td,{style:{textAlign:`right`},children:`296`})]}),(0,N.jsxs)(r.tr,{children:[(0,N.jsx)(r.td,{style:{textAlign:`left`},children:`medium`}),(0,N.jsx)(r.td,{style:{textAlign:`right`},children:`600`}),(0,N.jsx)(r.td,{style:{textAlign:`right`},children:`8`}),(0,N.jsx)(r.td,{style:{textAlign:`right`},children:`0`}),(0,N.jsx)(r.td,{style:{textAlign:`right`},children:`50.4`}),(0,N.jsx)(r.td,{style:{textAlign:`right`},children:`23`}),(0,N.jsx)(r.td,{style:{textAlign:`right`},children:`18`}),(0,N.jsx)(r.td,{style:{textAlign:`right`},children:`564`})]}),(0,N.jsxs)(r.tr,{children:[(0,N.jsx)(r.td,{style:{textAlign:`left`},children:`wide`}),(0,N.jsx)(r.td,{style:{textAlign:`right`},children:`1160`}),(0,N.jsx)(r.td,{style:{textAlign:`right`},children:`12`}),(0,N.jsx)(r.td,{style:{textAlign:`right`},children:`128`}),(0,N.jsx)(r.td,{style:{textAlign:`right`},children:`54.6`}),(0,N.jsx)(r.td,{style:{textAlign:`right`},children:`29`}),(0,N.jsx)(r.td,{style:{textAlign:`right`},children:`29`}),(0,N.jsx)(r.td,{style:{textAlign:`right`},children:`974`})]})]})]}),`
`,(0,N.jsx)(r.h3,{id:`reference-widths-for-designers`,children:`Reference widths for designers`}),`
`,(0,N.jsx)(r.p,{children:`When designing a screen in Figma, choose one of three reference widths: phone, tablet, or desktop.
These correspond to the narrow, medium, and wide breakpoints respectively.`}),`
`,(0,N.jsx)(r.h4,{id:`spacious-mode-1`,children:`Spacious Mode`}),`
`,(0,N.jsxs)(r.table,{children:[(0,N.jsx)(r.thead,{children:(0,N.jsxs)(r.tr,{children:[(0,N.jsx)(r.th,{style:{textAlign:`left`},children:`Device class`}),(0,N.jsx)(r.th,{style:{textAlign:`right`},children:`Reference width`}),(0,N.jsx)(r.th,{style:{textAlign:`right`},children:`Columns`}),(0,N.jsx)(r.th,{style:{textAlign:`right`},children:`Column width`}),(0,N.jsx)(r.th,{style:{textAlign:`right`},children:`Gap`}),(0,N.jsx)(r.th,{style:{textAlign:`right`},children:`Margin`}),(0,N.jsx)(r.th,{style:{textAlign:`right`},children:`Grid width`})]})}),(0,N.jsxs)(r.tbody,{children:[(0,N.jsxs)(r.tr,{children:[(0,N.jsx)(r.td,{style:{textAlign:`left`},children:`phone`}),(0,N.jsx)(r.td,{style:{textAlign:`right`},children:`320`}),(0,N.jsx)(r.td,{style:{textAlign:`right`},children:`4`}),(0,N.jsx)(r.td,{style:{textAlign:`right`},children:`41`}),(0,N.jsx)(r.td,{style:{textAlign:`right`},children:`36`}),(0,N.jsx)(r.td,{style:{textAlign:`right`},children:`24`}),(0,N.jsx)(r.td,{style:{textAlign:`right`},children:`272`})]}),(0,N.jsxs)(r.tr,{children:[(0,N.jsx)(r.td,{style:{textAlign:`left`},children:`tablet`}),(0,N.jsx)(r.td,{style:{textAlign:`right`},children:`880`}),(0,N.jsx)(r.td,{style:{textAlign:`right`},children:`8`}),(0,N.jsx)(r.td,{style:{textAlign:`right`},children:`56`}),(0,N.jsx)(r.td,{style:{textAlign:`right`},children:`48`}),(0,N.jsx)(r.td,{style:{textAlign:`right`},children:`48`}),(0,N.jsx)(r.td,{style:{textAlign:`right`},children:`784`})]}),(0,N.jsxs)(r.tr,{children:[(0,N.jsx)(r.td,{style:{textAlign:`left`},children:`desktop`}),(0,N.jsx)(r.td,{style:{textAlign:`right`},children:`1440`}),(0,N.jsx)(r.td,{style:{textAlign:`right`},children:`12`}),(0,N.jsx)(r.td,{style:{textAlign:`right`},children:`50`}),(0,N.jsx)(r.td,{style:{textAlign:`right`},children:`60`}),(0,N.jsx)(r.td,{style:{textAlign:`right`},children:`90`}),(0,N.jsx)(r.td,{style:{textAlign:`right`},children:`1260`})]})]})]}),`
`,(0,N.jsx)(r.h4,{id:`compact-mode-1`,children:`Compact Mode`}),`
`,(0,N.jsxs)(r.table,{children:[(0,N.jsx)(r.thead,{children:(0,N.jsxs)(r.tr,{children:[(0,N.jsx)(r.th,{style:{textAlign:`left`},children:`Device class`}),(0,N.jsx)(r.th,{style:{textAlign:`right`},children:`Reference width`}),(0,N.jsx)(r.th,{style:{textAlign:`right`},children:`Columns`}),(0,N.jsx)(r.th,{style:{textAlign:`right`},children:`Menu bar`}),(0,N.jsx)(r.th,{style:{textAlign:`right`},children:`Column width`}),(0,N.jsx)(r.th,{style:{textAlign:`right`},children:`Gap`}),(0,N.jsx)(r.th,{style:{textAlign:`right`},children:`Margin`}),(0,N.jsx)(r.th,{style:{textAlign:`right`},children:`Grid width`})]})}),(0,N.jsxs)(r.tbody,{children:[(0,N.jsxs)(r.tr,{children:[(0,N.jsx)(r.td,{style:{textAlign:`left`},children:`phone`}),(0,N.jsx)(r.td,{style:{textAlign:`right`},children:`320`}),(0,N.jsx)(r.td,{style:{textAlign:`right`},children:`4`}),(0,N.jsx)(r.td,{style:{textAlign:`right`},children:`0`}),(0,N.jsx)(r.td,{style:{textAlign:`right`},children:`59`}),(0,N.jsx)(r.td,{style:{textAlign:`right`},children:`20`}),(0,N.jsx)(r.td,{style:{textAlign:`right`},children:`12`}),(0,N.jsx)(r.td,{style:{textAlign:`right`},children:`296`})]}),(0,N.jsxs)(r.tr,{children:[(0,N.jsx)(r.td,{style:{textAlign:`left`},children:`tablet`}),(0,N.jsx)(r.td,{style:{textAlign:`right`},children:`880`}),(0,N.jsx)(r.td,{style:{textAlign:`right`},children:`8`}),(0,N.jsx)(r.td,{style:{textAlign:`right`},children:`0`}),(0,N.jsx)(r.td,{style:{textAlign:`right`},children:`82.3`}),(0,N.jsx)(r.td,{style:{textAlign:`right`},children:`26`}),(0,N.jsx)(r.td,{style:{textAlign:`right`},children:`20`}),(0,N.jsx)(r.td,{style:{textAlign:`right`},children:`840`})]}),(0,N.jsxs)(r.tr,{children:[(0,N.jsx)(r.td,{style:{textAlign:`left`},children:`desktop`}),(0,N.jsx)(r.td,{style:{textAlign:`right`},children:`1920`}),(0,N.jsx)(r.td,{style:{textAlign:`right`},children:`12`}),(0,N.jsx)(r.td,{style:{textAlign:`right`},children:`128`}),(0,N.jsx)(r.td,{style:{textAlign:`right`},children:`114.7`}),(0,N.jsx)(r.td,{style:{textAlign:`right`},children:`32`}),(0,N.jsx)(r.td,{style:{textAlign:`right`},children:`32`}),(0,N.jsx)(r.td,{style:{textAlign:`right`},children:`1728`})]})]})]}),`
`,(0,N.jsx)(r.p,{children:`The Figma grid styles are in the shared library under 'Grid styles'.`}),`
`,(0,N.jsx)(r.h3,{id:`windows-or-screens`,children:`Windows or screens`}),`
`,(0,N.jsx)(r.p,{children:`The breakpoints respond to the width of the browser window, not of the screen.
The two often coincide, but a window can easily be narrower than the screen it is on.
Many people keep a window at a fraction of a large monitor, and a tablet can show two apps side by side.`}),`
`,(0,N.jsx)(r.h2,{id:`relationship-with-text`,children:`Relationship with text`}),`
`,(0,N.jsxs)(r.p,{children:[(0,N.jsx)(r.a,{href:`/docs/brand-design-tokens-typography--docs`,children:`Text sizes`}),` scale with the window width in sync with the grid, so typography and layout stay proportional across all screen sizes.`]}),`
`,(0,N.jsx)(r.p,{children:`The breakpoints also respond to the effective text size.
When a user zooms in or sets a larger system font, the breakpoints kick in earlier, which may decrease the number of columns.`}),`
`,(0,N.jsx)(r.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,N.jsxs)(r.p,{children:[`A Grid renders a `,(0,N.jsx)(r.code,{children:`div`}),` by default and adds nothing to the accessibility tree.
Cells are announced in the order they appear in the markup, whatever the grid does with them on screen.`]}),`
`,(0,N.jsxs)(r.p,{children:[`That matters because `,(0,N.jsx)(r.code,{children:`start`}),` can place a cell in a column that does not match its position in the code.
A cell written second and started at column 7 is read second and reached second by the keyboard, even where it appears to the right of a cell written after it.
‘How to use’ covers what that asks of the markup.`]}),`
`,(0,N.jsxs)(r.p,{children:[`The `,(0,N.jsx)(r.code,{children:`as`}),` prop can render an `,(0,N.jsx)(r.code,{children:`article`}),` or a `,(0,N.jsx)(r.code,{children:`section`}),` instead of a `,(0,N.jsx)(r.code,{children:`div`}),`.
A `,(0,N.jsx)(r.code,{children:`section`}),` reaches assistive technology as a landmark only once it has a name, so give the heading inside it an `,(0,N.jsx)(r.code,{children:`id`}),` and point `,(0,N.jsx)(r.code,{children:`aria-labelledby`}),` at that id.`]}),`
`,(0,N.jsx)(r.h2,{id:`see-also`,children:`See also`}),`
`,(0,N.jsxs)(r.ul,{children:[`
`,(0,N.jsxs)(r.li,{children:[(0,N.jsx)(r.a,{href:`/docs/components-containers-page--docs`,children:`Page`}),` – the container that wraps the Grid.`]}),`
`,(0,N.jsxs)(r.li,{children:[(0,N.jsx)(r.a,{href:`/docs/components-containers-spotlight--docs`,children:`Spotlight`}),` – a full-bleed section that interrupts the Grid.`]}),`
`,(0,N.jsxs)(r.li,{children:[(0,N.jsx)(r.a,{href:`/docs/components-layout-breakout--docs`,children:`Breakout`}),` – widens a cell beyond its column allotment.`]}),`
`,(0,N.jsxs)(r.li,{children:[(0,N.jsx)(r.a,{href:`/docs/docs-developer-guide-spacing--docs`,children:`Spacing`}),` – which tools to use for white space and when.`]}),`
`]}),`
`,(0,N.jsx)(r.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,N.jsx)(f,{tokens:k})]})}function M(e={}){let{wrapper:t}={...l(),...e.components};return t?(0,N.jsx)(t,{...e,children:(0,N.jsx)(j,{...e})}):j(e)}var N;function P(){return(P=e((()=>{N=c(),u(),r(),d(),A(),g(),b(),D()})))()}P();export{M as default};