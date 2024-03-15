import{j as e}from"./jsx-runtime-CKrituN3.js";import{useMDXComponents as s}from"./index-DSz_1G2r.js";import{M as o}from"./index-DU7JPqrC.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-CP88y_As.js";import"../sb-preview/runtime.js";import"./index-BtM5VmRH.js";import"./index-Bw8VTzHM.js";import"./index-k_s-dmML.js";import"./index-DrFu-skq.js";function t(i){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Docs/Design Guidelines/Grid"}),`
`,e.jsx(n.h1,{id:"grid",children:"Grid"}),`
`,e.jsx(n.p,{children:`Underlying each page is a responsive grid.
All elements on a page are placed on this grid.`}),`
`,e.jsx(n.h2,{id:"design",children:"Design"}),`
`,e.jsx(n.h3,{id:"four-eight-or-twelve-columns",children:"Four, eight, or twelve columns"}),`
`,e.jsx(n.p,{children:`The grid divides the screen into columns of equal width.
The wider the window, the more columns.`}),`
`,e.jsx(n.p,{children:`In windows up to 576 pixels wide, the grid has 4 columns.
Up to a width of 1088 pixels, it has 8 columns.
At that point and beyond, it has 12 columns.`}),`
`,e.jsx(n.p,{children:"We refer to these three variants as the narrow, medium, and wide grid."}),`
`,e.jsx(n.p,{children:`The breakpoints are based on steps of 256 pixels, starting with a base of 64 pixels.
So, 576 = 64 + 2 × 256 and 1088 = 64 + 4 × 256.`}),`
`,e.jsx(n.p,{children:`At these breakpoints, only the amount of columns changes.
They become narrower or wider, affecting the elements placed on them.
The white spaces between and beside the columns grow at the same rate across the entire spectrum.`}),`
`,e.jsx(n.h3,{id:"two-themes-for-white-space",children:"Two themes for white space"}),`
`,e.jsx(n.p,{children:`The design system supports both websites and web applications.
The desired layout differs significantly between the two.`}),`
`,e.jsx(n.h4,{id:"spacious",children:"Spacious"}),`
`,e.jsx(n.p,{children:`The online corporate identity had been designed for simplicity.
There are few options for background colour or borders.
Typography and white space remain as tools to keep screens readable.
For websites, the grid is quite spacious.`}),`
`,e.jsx(n.p,{children:`The gap between columns is 16 pixels wide at a window width of 320 pixels or less.
For every additional 256 pixels of width, it grows linearly by 8 pixels.
(This amounts to 3 and 3/8 per cent of the screen width plus 6 pixels.)
At a window width of 1600 pixels, it is 56 pixels.
After that, the gap does not grow further.`}),`
`,e.jsx(n.p,{children:`In wide windows, the gaps become almost as wide as the columns.
This may seem unnatural, but it is not a problem.
Elements often occupy multiple columns of the grid, including the gaps in between.`}),`
`,e.jsx(n.h4,{id:"compact",children:"Compact"}),`
`,e.jsx(n.p,{children:`For applications, so much white space is unnecessary, even counterproductive.
Therefore, there is also a compact theme for the grid.`}),`
`,e.jsx(n.p,{children:`The minimum gap between columns is also 16 pixels here.
But it only starts growing from a window width of 1088 pixels.
The increase is also slower: 4 pixels per 256 pixels of additional width.
(This amounts to 1 and 9/16 per cent of the screen width minus 1 pixel.)
The maximum here is 40 pixels, only reached at a window width of 2624 pixels.`}),`
`,e.jsx(n.h3,{id:"margins-left-and-right",children:"Margins left and right"}),`
`,e.jsx(n.p,{children:"On both sides, the grid reserves margins of white space."}),`
`,e.jsx(n.h4,{id:"spacious-1",children:"Spacious"}),`
`,e.jsx(n.p,{children:`The margin is 1½ times as wide as the gap between columns.
This provides enough space between the grid and the edges of the screen or window.`}),`
`,e.jsx(n.p,{children:`Some elements, such as full-screen images and the page’s footer, can be positioned over these margins.
These are, therefore, slightly wider than the rest of the content.`}),`
`,e.jsx(n.h4,{id:"compact-1",children:"Compact"}),`
`,e.jsx(n.p,{children:`In the compact theme, the margins outside the grid are as wide as the gaps inside of it.
No elements are placed over these margins.`}),`
`,e.jsx(n.h3,{id:"menu-bar",children:"Menu bar"}),`
`,e.jsx(n.p,{children:`In the wide grid, applications have a vertical menu bar on the left side.
This is next to the grid, not inside, and has a fixed width of 112 pixels.`}),`
`,e.jsx(n.p,{children:`The menu is placed horizontally below the header in the medium and narrow grids.
In this context, the grid takes up the entire width of the window.`}),`
`,e.jsx(n.h3,{id:"maximum-width",children:"Maximum width"}),`
`,e.jsx(n.p,{children:`A maximum width for the grid ensures that white space and typography do not grow indefinitely.
This prevents page elements from getting too far apart, keeping text comfortably readable.`}),`
`,e.jsx(n.p,{children:`For websites, the maximum width of the grid is 1432 pixels.
The grid has this width in windows of at least 1600 pixels wide – the margins are 84 pixels here.`}),`
`,e.jsx(n.p,{children:"Applications often use the entire width of the window."}),`
`,e.jsx(n.p,{children:`There is no explicit minimum width.
Even in windows narrower than 320 pixels, to the extent that they occur in practice,
the grid continues to scale to the available width.
For convenience, the width of 320 plays a role in the documentation.`}),`
`,e.jsx(n.h2,{id:"dimensions",children:"Dimensions"}),`
`,e.jsx(n.p,{children:"In practice, these design choices result in the following dimensions in pixels."}),`
`,e.jsx(n.h3,{id:"widths-per-breakpoint",children:"Widths per breakpoint"}),`
`,e.jsx(n.p,{children:`The columns, gaps, and margins have the following widths at the three breakpoints.
Again, between these widths, the widths grow continuously.`}),`
`,e.jsx(n.h4,{id:"spacious-2",children:"Spacious"}),`
`,e.jsx(n.p,{children:`| Breakpoint | From window width | Number of columns | Column width | Gap width | Margin width | Grid width |
| :--------- | ----------------: | ----------------: | -----------: | --------: | -----------: | ---------: |
| narrow     |               320 |                 4 |           56 |        16 |           24 |        272 |
| medium     |               576 |                 8 |           42 |        24 |           36 |        504 |
| wide       |              1088 |                12 |           44 |        40 |           60 |        968 |`}),`
`,e.jsx(n.h4,{id:"compact-2",children:"Compact"}),`
`,e.jsx(n.p,{children:`| Breakpoint | From window width | Number of columns | Menu bar width | Column width | Gap width | Margin width | Grid width |
| :--------- | ----------------: | ----------------: | -------------: | -----------: | --------: | -----------: | ---------: |
| narrow     |               320 |                 4 |              0 |           60 |        16 |           16 |        288 |
| medium     |               576 |                 8 |              0 |           54 |        16 |           16 |        544 |
| wide       |              1088 |                12 |            112 |           64 |        16 |           16 |        944 |`}),`
`,e.jsx(n.h3,{id:"not-tied-to-devices",children:"Not tied to devices"}),`
`,e.jsx(n.p,{children:`All grid dimensions are based on multiples of 16;
explicitly not on the sizes of specific screens or devices.`}),`
`,e.jsx(n.p,{children:`We do not want to design our layouts based on the precise dimensions of the latest iPhone or Galaxy,
but instead, make them responsive to the variety of screens they will appear on.
Of course, we have experimented and tested this.
We’ve ultimately chosen values that work well visually.`}),`
`,e.jsx(n.p,{children:'For the same reason, we do not refer to the three grid breakpoints as "mobile, tablet, and desktop" but as "for narrow, medium, and wide" screens or windows.'}),`
`,e.jsx(n.p,{children:`If you want a bit more guidance,
assume that phones in portrait mode and split-screen windows on tablets use the 4-column grid,
phones in landscape mode and tablets in portrait use the 8-column grid,
and tablets in landscape mode,
laptops, and larger screens use the 12-column grid.
The exact number of pixels is not important.`}),`
`,e.jsx(n.h3,{id:"reference-widths-for-designers",children:"Reference widths for designers"}),`
`,e.jsx(n.p,{children:`Nice, all that flexibility.
However, when designing a screen, it is still necessary to choose a specific canvas.
You want to determine how each design behaves on a desktop, a tablet, or a mobile phone.`}),`
`,e.jsx(n.p,{children:`Therefore, in Figma, we work with three reference widths.
On those widths, we develop the screen’s design for those three classes of devices.
We know that, in reality, there is much more variation, but we have to draw the line somewhere.
You can find these grids in the Figma Library under ‘Grid styles’.`}),`
`,e.jsx(n.p,{children:"In these three situations, the dimensions are as follows."}),`
`,e.jsx(n.h4,{id:"spacious-3",children:"Spacious"}),`
`,e.jsx(n.p,{children:`| Device Class | Reference Width | Number of columns | Column width | Gap width | Margin width | Grid width |
| :----------- | --------------: | ----------------: | -----------: | --------: | -----------: | ---------: |
| phone        |             320 |                 4 |           56 |        16 |           24 |        272 |
| tablet       |             832 |                 8 |           64 |        32 |           48 |        736 |
| desktop      |            1600 |                12 |           68 |        56 |           84 |       1432 |`}),`
`,e.jsx(n.h4,{id:"compact-3",children:"Compact"}),`
`,e.jsx(n.p,{children:`| Device Class | Reference Width | Number of columns | Menu bar width | Column width | Gap width | Margin width | Grid width |
| :----------- | --------------: | ----------------: | -------------: | -----------: | --------: | -----------: | ---------: |
| phone        |             320 |                 4 |              0 |           60 |        16 |           16 |        288 |
| tablet       |             832 |                 8 |              0 |           86 |        16 |           16 |        800 |
| desktop      |            1600 |                12 |            112 |           98 |        24 |           24 |       1440 |`}),`
`,e.jsx(n.h3,{id:"windows-or-screens",children:"Windows or screens"}),`
`,e.jsx(n.p,{children:`We intentionally talk about windows, while responsive design often uses screen widths.
Most of the time, it comes down to the same thing, but not always.
It is good to be aware of this.`}),`
`,e.jsx(n.p,{children:`On a computer screen, the browser window is not necessarily maximized; it can be narrower than the screen.
Responsive design logically assumes the width of the browser window.`}),`
`,e.jsx(n.p,{children:`On phones and tablets, the two often coincide.
Tablets can allow placing two (windows of) apps side by side on the screen.`}),`
`,e.jsx(n.h2,{id:"relationship-with-text",children:"Relationship with text"}),`
`,e.jsx(n.p,{children:"Layout and text relate in various ways."}),`
`,e.jsx(n.h3,{id:"scaling-typography",children:"Scaling typography"}),`
`,e.jsxs(n.p,{children:["Like the grid, the ",e.jsx(n.a,{href:"/docs/docs-design-guidelines-typography--docs",children:"text sizes"}),` respond to the window width.
This ensures that content looks good on as many window widths and with various personal settings.`]}),`
`,e.jsx(n.h3,{id:"zooming-or-enlarged-text",children:"Zooming or enlarged text"}),`
`,e.jsx(n.p,{children:`People can zoom in on a web page or set a larger text size.
The dimensions of the grid take this into account.
The breakpoints scale with the effective text size.
This way, the amount of columns changes earlier, and large content still fits well.`}),`
`,e.jsx(n.h2,{id:"related-components",children:"Related Components"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"/docs/components-layout-grid--docs",children:"Grid"})}),`
`]})]})}function g(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{g as default};
