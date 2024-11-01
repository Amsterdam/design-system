import{j as e}from"./jsx-runtime-BlAj40OV.js";import{useMDXComponents as s}from"./index-BI1Biiay.js";import{ae as l}from"./index-0qdyKUnH.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-BymoxzR8.js";import"../sb-preview/runtime.js";import"./index-DJFdew98.js";import"./index-D-8MO0q_.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";/*@license CC0-1.0*/function n(i){const t={a:"a",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(l,{title:"Brand/Design Tokens/Grid"}),`
`,e.jsx(t.h1,{id:"grid",children:"Grid"}),`
`,e.jsx(t.p,{children:`Underlying each page is a responsive grid.
All elements on a page are placed on this grid.`}),`
`,e.jsx(t.h2,{id:"design",children:"Design"}),`
`,e.jsx(t.h3,{id:"4-8-or-12-columns",children:"4, 8, or 12 columns"}),`
`,e.jsx(t.p,{children:`The grid divides the screen into columns of equal width.
The wider the window, the more columns.`}),`
`,e.jsx(t.p,{children:`In windows up to 576 pixels wide, the grid has 4 columns.
Up to a width of 1088 pixels, it has 8 columns.
At that point and beyond, it has 12 columns.`}),`
`,e.jsx(t.p,{children:"We refer to these 3 variants as the narrow, medium, and wide grid."}),`
`,e.jsx(t.p,{children:`The breakpoints are based on steps of 256 pixels, starting with a base of 64 pixels.
So, 576 = 64 + 2 × 256 and 1088 = 64 + 4 × 256.`}),`
`,e.jsx(t.p,{children:`At these breakpoints, only the amount of columns changes.
They become narrower or wider, affecting the elements placed on them.
The white spaces between and beside the columns grow at the same rate across the entire spectrum.`}),`
`,e.jsx(t.h3,{id:"two-themes-for-white-space",children:"Two themes for white space"}),`
`,e.jsx(t.p,{children:`The design system supports both websites and web applications.
The desired layout differs significantly between the two.`}),`
`,e.jsx(t.h4,{id:"spacious",children:"Spacious"}),`
`,e.jsx(t.p,{children:`The online corporate identity has been designed for simplicity.
Not many options exist for background colour or borders.
Typography and white space remain as tools to keep screens readable.
For websites, the grid is quite spacious.`}),`
`,e.jsx(t.p,{children:`The gap between columns is 16 pixels wide at a window width of 320 pixels or less.
For every additional 256 pixels of width, it grows linearly by 8 pixels.
(This amounts to 3 and 3/8 per cent of the screen width plus 6 pixels.)
At a window width of 1600 pixels, it is 56 pixels.
After that, the gap does not grow further.`}),`
`,e.jsx(t.p,{children:`In wide windows, the gaps become almost as wide as the columns.
This may seem unnatural, but it is not a problem.
Elements often occupy multiple columns of the grid, including the gaps in between.`}),`
`,e.jsx(t.h4,{id:"compact",children:"Compact"}),`
`,e.jsx(t.p,{children:`For applications, so much white space is unnecessary, even counterproductive.
Therefore, there is also a compact theme for the grid.`}),`
`,e.jsx(t.p,{children:`The minimum gap between columns is also 16 pixels here.
But it only starts growing from a window width of 1088 pixels.
The increase is also slower: 4 pixels per 256 pixels of additional width.
(This amounts to 1 and 9/16 per cent of the screen width minus 1 pixel.)
The maximum here is 40 pixels, only reached at a window width of 2624 pixels.`}),`
`,e.jsx(t.h3,{id:"margins-left-and-right",children:"Margins left and right"}),`
`,e.jsx(t.p,{children:"On both sides, the grid reserves margins of white space."}),`
`,e.jsx(t.h4,{id:"spacious-1",children:"Spacious"}),`
`,e.jsx(t.p,{children:`The margin is 1½ times as wide as the gap between columns.
This provides enough space between the grid and the edges of the screen or window.`}),`
`,e.jsx(t.p,{children:`Some elements, such as full-screen images and the page’s footer, can be positioned over these margins.
These are, therefore, slightly wider than the rest of the content.`}),`
`,e.jsx(t.h4,{id:"compact-1",children:"Compact"}),`
`,e.jsx(t.p,{children:`In the compact theme, the margins outside the grid are as wide as the gaps inside of it.
No elements are placed over these margins.`}),`
`,e.jsx(t.h3,{id:"menu-bar",children:"Menu bar"}),`
`,e.jsx(t.p,{children:`In the wide grid, applications have a vertical menu bar on the left side.
This is next to the grid, not inside, and has a fixed width of 112 pixels.`}),`
`,e.jsx(t.p,{children:`The menu is placed horizontally below the header in the medium and narrow grids.
In this context, the grid takes up the entire width of the window.`}),`
`,e.jsx(t.h3,{id:"maximum-width",children:"Maximum width"}),`
`,e.jsx(t.p,{children:`A maximum width for the grid ensures that white space and typography do not grow indefinitely.
This prevents page elements from getting too far apart, keeping text comfortably readable.`}),`
`,e.jsx(t.p,{children:`For websites, the maximum width of the grid is 1432 pixels.
The grid has this width in windows of at least 1600 pixels wide – the margins are 84 pixels here.`}),`
`,e.jsx(t.p,{children:"Applications often use the entire width of the window."}),`
`,e.jsx(t.p,{children:`There is no explicit minimum width.
Even in windows narrower than 320 pixels, to the extent that they occur in practice,
the grid continues to scale to the available width.
For convenience, the width of 320 plays a role in the documentation.`}),`
`,e.jsx(t.h2,{id:"dimensions",children:"Dimensions"}),`
`,e.jsx(t.p,{children:"In practice, these design choices result in the following dimensions in pixels."}),`
`,e.jsx(t.h3,{id:"widths-per-breakpoint",children:"Widths per breakpoint"}),`
`,e.jsx(t.p,{children:`The columns, gaps, and margins have the following widths at the 3 breakpoints.
Again, between these widths, the widths grow continuously.`}),`
`,e.jsx(t.h4,{id:"spacious-2",children:"Spacious"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{style:{textAlign:"left"},children:"Breakpoint"}),e.jsx(t.th,{style:{textAlign:"right"},children:"From window width"}),e.jsx(t.th,{style:{textAlign:"right"},children:"Number of columns"}),e.jsx(t.th,{style:{textAlign:"right"},children:"Column width"}),e.jsx(t.th,{style:{textAlign:"right"},children:"Gap width"}),e.jsx(t.th,{style:{textAlign:"right"},children:"Margin width"}),e.jsx(t.th,{style:{textAlign:"right"},children:"Grid width"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{style:{textAlign:"left"},children:"narrow"}),e.jsx(t.td,{style:{textAlign:"right"},children:"320"}),e.jsx(t.td,{style:{textAlign:"right"},children:"4"}),e.jsx(t.td,{style:{textAlign:"right"},children:"56"}),e.jsx(t.td,{style:{textAlign:"right"},children:"16"}),e.jsx(t.td,{style:{textAlign:"right"},children:"24"}),e.jsx(t.td,{style:{textAlign:"right"},children:"272"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{style:{textAlign:"left"},children:"medium"}),e.jsx(t.td,{style:{textAlign:"right"},children:"576"}),e.jsx(t.td,{style:{textAlign:"right"},children:"8"}),e.jsx(t.td,{style:{textAlign:"right"},children:"42"}),e.jsx(t.td,{style:{textAlign:"right"},children:"24"}),e.jsx(t.td,{style:{textAlign:"right"},children:"36"}),e.jsx(t.td,{style:{textAlign:"right"},children:"504"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{style:{textAlign:"left"},children:"wide"}),e.jsx(t.td,{style:{textAlign:"right"},children:"1088"}),e.jsx(t.td,{style:{textAlign:"right"},children:"12"}),e.jsx(t.td,{style:{textAlign:"right"},children:"44"}),e.jsx(t.td,{style:{textAlign:"right"},children:"40"}),e.jsx(t.td,{style:{textAlign:"right"},children:"60"}),e.jsx(t.td,{style:{textAlign:"right"},children:"968"})]})]})]}),`
`,e.jsx(t.h4,{id:"compact-2",children:"Compact"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{style:{textAlign:"left"},children:"Breakpoint"}),e.jsx(t.th,{style:{textAlign:"right"},children:"From window width"}),e.jsx(t.th,{style:{textAlign:"right"},children:"Number of columns"}),e.jsx(t.th,{style:{textAlign:"right"},children:"Menu bar width"}),e.jsx(t.th,{style:{textAlign:"right"},children:"Column width"}),e.jsx(t.th,{style:{textAlign:"right"},children:"Gap width"}),e.jsx(t.th,{style:{textAlign:"right"},children:"Margin width"}),e.jsx(t.th,{style:{textAlign:"right"},children:"Grid width"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{style:{textAlign:"left"},children:"narrow"}),e.jsx(t.td,{style:{textAlign:"right"},children:"320"}),e.jsx(t.td,{style:{textAlign:"right"},children:"4"}),e.jsx(t.td,{style:{textAlign:"right"},children:"0"}),e.jsx(t.td,{style:{textAlign:"right"},children:"60"}),e.jsx(t.td,{style:{textAlign:"right"},children:"16"}),e.jsx(t.td,{style:{textAlign:"right"},children:"16"}),e.jsx(t.td,{style:{textAlign:"right"},children:"288"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{style:{textAlign:"left"},children:"medium"}),e.jsx(t.td,{style:{textAlign:"right"},children:"576"}),e.jsx(t.td,{style:{textAlign:"right"},children:"8"}),e.jsx(t.td,{style:{textAlign:"right"},children:"0"}),e.jsx(t.td,{style:{textAlign:"right"},children:"54"}),e.jsx(t.td,{style:{textAlign:"right"},children:"16"}),e.jsx(t.td,{style:{textAlign:"right"},children:"16"}),e.jsx(t.td,{style:{textAlign:"right"},children:"544"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{style:{textAlign:"left"},children:"wide"}),e.jsx(t.td,{style:{textAlign:"right"},children:"1088"}),e.jsx(t.td,{style:{textAlign:"right"},children:"12"}),e.jsx(t.td,{style:{textAlign:"right"},children:"112"}),e.jsx(t.td,{style:{textAlign:"right"},children:"64"}),e.jsx(t.td,{style:{textAlign:"right"},children:"16"}),e.jsx(t.td,{style:{textAlign:"right"},children:"16"}),e.jsx(t.td,{style:{textAlign:"right"},children:"944"})]})]})]}),`
`,e.jsx(t.h3,{id:"not-tied-to-devices",children:"Not tied to devices"}),`
`,e.jsx(t.p,{children:`All grid dimensions are based on multiples of 16;
explicitly not on the sizes of specific screens or devices.`}),`
`,e.jsx(t.p,{children:`We do not want to design our layouts based on the precise dimensions of the latest iPhone or Galaxy,
but instead, make them responsive to the variety of screens they will appear on.
Of course, we have experimented and tested this.
We’ve ultimately chosen values that work well visually.`}),`
`,e.jsx(t.p,{children:"For the same reason, we do not refer to the 3 grid breakpoints as “mobile, tablet, and desktop” but as “for narrow, medium, and wide” screens or windows."}),`
`,e.jsx(t.p,{children:`If you want a bit more guidance,
assume that phones in portrait mode and split-screen windows on tablets use the 4-column grid,
phones in landscape mode and tablets in portrait use the 8-column grid,
and tablets in landscape mode, laptops, and larger screens use the 12-column grid.
The exact number of pixels is not important.`}),`
`,e.jsx(t.h3,{id:"reference-widths-for-designers",children:"Reference widths for designers"}),`
`,e.jsx(t.p,{children:`Nice, all that flexibility.
However, when designing a screen, it is still necessary to choose a specific canvas.
You want to determine how each design behaves on a desktop, a tablet, or a mobile phone.`}),`
`,e.jsx(t.p,{children:`Therefore, in Figma, we work with 3 reference widths.
On those widths, we develop the screen’s design for the 3 classes of devices.
We know that, in reality, there is much more variation, but we have to draw the line somewhere.
You can find these grids in the Figma Library under ‘Grid styles’.`}),`
`,e.jsx(t.p,{children:"In these 3 situations, the dimensions are as follows."}),`
`,e.jsx(t.h4,{id:"spacious-3",children:"Spacious"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{style:{textAlign:"left"},children:"Device Class"}),e.jsx(t.th,{style:{textAlign:"right"},children:"Reference Width"}),e.jsx(t.th,{style:{textAlign:"right"},children:"Number of columns"}),e.jsx(t.th,{style:{textAlign:"right"},children:"Column width"}),e.jsx(t.th,{style:{textAlign:"right"},children:"Gap width"}),e.jsx(t.th,{style:{textAlign:"right"},children:"Margin width"}),e.jsx(t.th,{style:{textAlign:"right"},children:"Grid width"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{style:{textAlign:"left"},children:"phone"}),e.jsx(t.td,{style:{textAlign:"right"},children:"320"}),e.jsx(t.td,{style:{textAlign:"right"},children:"4"}),e.jsx(t.td,{style:{textAlign:"right"},children:"56"}),e.jsx(t.td,{style:{textAlign:"right"},children:"16"}),e.jsx(t.td,{style:{textAlign:"right"},children:"24"}),e.jsx(t.td,{style:{textAlign:"right"},children:"272"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{style:{textAlign:"left"},children:"tablet"}),e.jsx(t.td,{style:{textAlign:"right"},children:"832"}),e.jsx(t.td,{style:{textAlign:"right"},children:"8"}),e.jsx(t.td,{style:{textAlign:"right"},children:"64"}),e.jsx(t.td,{style:{textAlign:"right"},children:"32"}),e.jsx(t.td,{style:{textAlign:"right"},children:"48"}),e.jsx(t.td,{style:{textAlign:"right"},children:"736"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{style:{textAlign:"left"},children:"desktop"}),e.jsx(t.td,{style:{textAlign:"right"},children:"1600"}),e.jsx(t.td,{style:{textAlign:"right"},children:"12"}),e.jsx(t.td,{style:{textAlign:"right"},children:"68"}),e.jsx(t.td,{style:{textAlign:"right"},children:"56"}),e.jsx(t.td,{style:{textAlign:"right"},children:"84"}),e.jsx(t.td,{style:{textAlign:"right"},children:"1432"})]})]})]}),`
`,e.jsx(t.h4,{id:"compact-3",children:"Compact"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{style:{textAlign:"left"},children:"Device Class"}),e.jsx(t.th,{style:{textAlign:"right"},children:"Reference Width"}),e.jsx(t.th,{style:{textAlign:"right"},children:"Number of columns"}),e.jsx(t.th,{style:{textAlign:"right"},children:"Menu bar width"}),e.jsx(t.th,{style:{textAlign:"right"},children:"Column width"}),e.jsx(t.th,{style:{textAlign:"right"},children:"Gap width"}),e.jsx(t.th,{style:{textAlign:"right"},children:"Margin width"}),e.jsx(t.th,{style:{textAlign:"right"},children:"Grid width"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{style:{textAlign:"left"},children:"phone"}),e.jsx(t.td,{style:{textAlign:"right"},children:"320"}),e.jsx(t.td,{style:{textAlign:"right"},children:"4"}),e.jsx(t.td,{style:{textAlign:"right"},children:"0"}),e.jsx(t.td,{style:{textAlign:"right"},children:"60"}),e.jsx(t.td,{style:{textAlign:"right"},children:"16"}),e.jsx(t.td,{style:{textAlign:"right"},children:"16"}),e.jsx(t.td,{style:{textAlign:"right"},children:"288"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{style:{textAlign:"left"},children:"tablet"}),e.jsx(t.td,{style:{textAlign:"right"},children:"832"}),e.jsx(t.td,{style:{textAlign:"right"},children:"8"}),e.jsx(t.td,{style:{textAlign:"right"},children:"0"}),e.jsx(t.td,{style:{textAlign:"right"},children:"86"}),e.jsx(t.td,{style:{textAlign:"right"},children:"16"}),e.jsx(t.td,{style:{textAlign:"right"},children:"16"}),e.jsx(t.td,{style:{textAlign:"right"},children:"800"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{style:{textAlign:"left"},children:"desktop"}),e.jsx(t.td,{style:{textAlign:"right"},children:"1600"}),e.jsx(t.td,{style:{textAlign:"right"},children:"12"}),e.jsx(t.td,{style:{textAlign:"right"},children:"112"}),e.jsx(t.td,{style:{textAlign:"right"},children:"98"}),e.jsx(t.td,{style:{textAlign:"right"},children:"24"}),e.jsx(t.td,{style:{textAlign:"right"},children:"24"}),e.jsx(t.td,{style:{textAlign:"right"},children:"1440"})]})]})]}),`
`,e.jsx(t.h3,{id:"windows-or-screens",children:"Windows or screens"}),`
`,e.jsx(t.p,{children:`We intentionally talk about windows, while responsive design often uses screen widths.
Most of the time, it comes down to the same thing, but not always.
It is good to be aware of this.`}),`
`,e.jsx(t.p,{children:`On a computer screen, the browser window is not necessarily maximized; it can be narrower than the screen.
Responsive design logically assumes the width of the browser window.`}),`
`,e.jsx(t.p,{children:`On phones and tablets, both concepts often coincide,
although tablets allow placing 2 (windows of) apps side by side on the screen.`}),`
`,e.jsx(t.h2,{id:"relationship-with-text",children:"Relationship with text"}),`
`,e.jsx(t.p,{children:"Layout and text relate in various ways."}),`
`,e.jsx(t.h3,{id:"scaling-typography",children:"Scaling typography"}),`
`,e.jsxs(t.p,{children:["Like the grid, the ",e.jsx(t.a,{href:"/docs/brand-design-tokens-text--docs",children:"text sizes"}),` respond to the window width.
This ensures that content looks good on as many window widths and with various personal settings.`]}),`
`,e.jsx(t.h3,{id:"zooming-or-enlarged-text",children:"Zooming or enlarged text"}),`
`,e.jsx(t.p,{children:`People can zoom in on a web page or set a larger text size.
The dimensions of the grid take this into account.
The breakpoints scale with the effective text size.
This way, the amount of columns changes earlier, and large content still fits well.`}),`
`,e.jsx(t.h2,{id:"related-components",children:"Related components"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"/docs/components-layout-grid--docs",children:"Grid"})}),`
`]})]})}function m(i={}){const{wrapper:t}={...s(),...i.components};return t?e.jsx(t,{...i,children:e.jsx(n,{...i})}):n(i)}export{m as default};
