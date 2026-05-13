import{n as e}from"./chunk-DnJy8xQt.js";import{Vt as t}from"./iframe-vZZt0VBm.js";import{r as n}from"./react-BqEBbWRD.js";import{c as r,f as i}from"./blocks-Capyvjxw.js";import{t as a}from"./mdx-react-shim-CFZnKsHu.js";function o(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[`
`,`
`,(0,c.jsx)(r,{title:`Docs/Developer Guide/Grid`}),`
`,(0,c.jsx)(t.h1,{id:`grid`,children:`Grid`}),`
`,(0,c.jsx)(t.p,{children:`Underlying each page is a responsive grid.
All elements on a page are placed on this grid.`}),`
`,(0,c.jsx)(t.h2,{id:`design`,children:`Design`}),`
`,(0,c.jsx)(t.h3,{id:`4-8-or-12-columns`,children:`4, 8, or 12 columns`}),`
`,(0,c.jsx)(t.p,{children:`The grid divides the screen into columns of equal width.
The wider the window, the more columns.`}),`
`,(0,c.jsx)(t.p,{children:`In windows up to 600 pixels wide, the grid has 4 columns.
Up to a width of 1160 pixels, it has 8 columns.
At that point and beyond, it has 12 columns.`}),`
`,(0,c.jsx)(t.p,{children:`We refer to these 3 variants as the narrow, medium, and wide grid.`}),`
`,(0,c.jsx)(t.p,{children:`At these breakpoints, only the number of columns changes.
They become narrower or wider, affecting the elements placed on them.
The white spaces between and beside the columns grow at the same rate across the entire spectrum.`}),`
`,(0,c.jsx)(t.h3,{id:`different-densities`,children:`Different densities`}),`
`,(0,c.jsx)(t.p,{children:`The design system supports both public and internal websites.
The two require different layouts.`}),`
`,(0,c.jsx)(t.h4,{id:`spacious-mode`,children:`Spacious Mode`}),`
`,(0,c.jsx)(t.p,{children:`The online corporate identity has been designed for simplicity.
Not many options exist for background colour or borders.
Typography and white space remain as tools to keep screens readable.
For public websites, the grid is quite spacious.`}),`
`,(0,c.jsxs)(t.p,{children:[`The gap between columns uses our `,(0,c.jsx)(t.code,{children:`xl`}),` space token, which grows from 36 to 60 pixels in windows between 320 and 1440 pixels wide.`]}),`
`,(0,c.jsx)(t.h4,{id:`compact-mode`,children:`Compact Mode`}),`
`,(0,c.jsxs)(t.p,{children:[`Internal websites often need to present more data on a single screen, which makes large amounts of white space counterproductive.
Therefore, the grid adapts to `,(0,c.jsx)(t.a,{href:`/docs/docs-developer-guide-modes--docs`,children:`Compact Mode`}),`, in which the `,(0,c.jsx)(t.code,{children:`xl`}),` space token grows from 16 to 24 pixels.`]}),`
`,(0,c.jsx)(t.h3,{id:`margins-left-and-right`,children:`Margins left and right`}),`
`,(0,c.jsxs)(t.p,{children:[`On both sides, the grid reserves white space at the edges of the screen or window.
This uses the `,(0,c.jsx)(t.code,{children:`l`}),` space token on the narrow grid (`,(0,c.jsx)(t.code,{children:`xl`}),` in Compact Mode), `,(0,c.jsx)(t.code,{children:`xl`}),` on medium, and `,(0,c.jsx)(t.code,{children:`2xl`}),` on the wide grid.`]}),`
`,(0,c.jsx)(t.h3,{id:`menu-bar`,children:`Menu bar`}),`
`,(0,c.jsx)(t.p,{children:`In the wide grid, websites have a vertical menu bar on the left side.
This is next to the grid, not inside, and has a maximum width of 128 pixels.`}),`
`,(0,c.jsx)(t.p,{children:`The menu is placed horizontally below the header in the medium and narrow grids.
In this context, the grid takes up the entire width of the window.`}),`
`,(0,c.jsx)(t.h3,{id:`maximum-width`,children:`Maximum width`}),`
`,(0,c.jsx)(t.p,{children:`A maximum width for the grid ensures that white space and typography do not grow indefinitely.
This prevents page elements from getting too far apart, keeping text comfortably readable.
The maximum width is 1.440 pixels for public websites, and 1.920 for internal ones.`}),`
`,(0,c.jsx)(t.p,{children:`There is no explicit minimum width.
Even in windows narrower than 320 pixels, to the extent that they occur in practice,
the grid continues to scale to the available width.
For convenience, the width of 320 plays a role in the documentation.`}),`
`,(0,c.jsx)(t.h2,{id:`dimensions`,children:`Dimensions`}),`
`,(0,c.jsx)(t.p,{children:`In practice, these design choices result in the following dimensions in pixels.`}),`
`,(0,c.jsx)(t.h3,{id:`widths-per-breakpoint`,children:`Widths per breakpoint`}),`
`,(0,c.jsx)(t.p,{children:`The columns, gaps, and margins have the following widths at the 3 breakpoints.
Again, between these widths, the widths grow continuously.`}),`
`,(0,c.jsx)(t.h4,{id:`spacious`,children:`Spacious`}),`
`,(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.th,{style:{textAlign:`left`},children:`Breakpoint`}),(0,c.jsx)(t.th,{style:{textAlign:`right`},children:`From window width`}),(0,c.jsx)(t.th,{style:{textAlign:`right`},children:`Number of columns`}),(0,c.jsx)(t.th,{style:{textAlign:`right`},children:`Column width`}),(0,c.jsx)(t.th,{style:{textAlign:`right`},children:`Gap width`}),(0,c.jsx)(t.th,{style:{textAlign:`right`},children:`Margin width`}),(0,c.jsx)(t.th,{style:{textAlign:`right`},children:`Grid width`})]})}),(0,c.jsxs)(t.tbody,{children:[(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{style:{textAlign:`left`},children:`narrow`}),(0,c.jsx)(t.td,{style:{textAlign:`right`},children:`320`}),(0,c.jsx)(t.td,{style:{textAlign:`right`},children:`4`}),(0,c.jsx)(t.td,{style:{textAlign:`right`},children:`41`}),(0,c.jsx)(t.td,{style:{textAlign:`right`},children:`36`}),(0,c.jsx)(t.td,{style:{textAlign:`right`},children:`24`}),(0,c.jsx)(t.td,{style:{textAlign:`right`},children:`272`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{style:{textAlign:`left`},children:`medium`}),(0,c.jsx)(t.td,{style:{textAlign:`right`},children:`600`}),(0,c.jsx)(t.td,{style:{textAlign:`right`},children:`8`}),(0,c.jsx)(t.td,{style:{textAlign:`right`},children:`27.8`}),(0,c.jsx)(t.td,{style:{textAlign:`right`},children:`42`}),(0,c.jsx)(t.td,{style:{textAlign:`right`},children:`42`}),(0,c.jsx)(t.td,{style:{textAlign:`right`},children:`516`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{style:{textAlign:`left`},children:`wide`}),(0,c.jsx)(t.td,{style:{textAlign:`right`},children:`1160`}),(0,c.jsx)(t.td,{style:{textAlign:`right`},children:`12`}),(0,c.jsx)(t.td,{style:{textAlign:`right`},children:`33.9`}),(0,c.jsx)(t.td,{style:{textAlign:`right`},children:`54`}),(0,c.jsx)(t.td,{style:{textAlign:`right`},children:`79.5`}),(0,c.jsx)(t.td,{style:{textAlign:`right`},children:`1001`})]})]})]}),`
`,(0,c.jsx)(t.h4,{id:`compact`,children:`Compact`}),`
`,(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.th,{style:{textAlign:`left`},children:`Breakpoint`}),(0,c.jsx)(t.th,{style:{textAlign:`right`},children:`From window width`}),(0,c.jsx)(t.th,{style:{textAlign:`right`},children:`Number of columns`}),(0,c.jsx)(t.th,{style:{textAlign:`right`},children:`Menu bar width`}),(0,c.jsx)(t.th,{style:{textAlign:`right`},children:`Column width`}),(0,c.jsx)(t.th,{style:{textAlign:`right`},children:`Gap width`}),(0,c.jsx)(t.th,{style:{textAlign:`right`},children:`Margin width`}),(0,c.jsx)(t.th,{style:{textAlign:`right`},children:`Grid width`})]})}),(0,c.jsxs)(t.tbody,{children:[(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{style:{textAlign:`left`},children:`narrow`}),(0,c.jsx)(t.td,{style:{textAlign:`right`},children:`320`}),(0,c.jsx)(t.td,{style:{textAlign:`right`},children:`4`}),(0,c.jsx)(t.td,{style:{textAlign:`right`},children:`0`}),(0,c.jsx)(t.td,{style:{textAlign:`right`},children:`54`}),(0,c.jsx)(t.td,{style:{textAlign:`right`},children:`24`}),(0,c.jsx)(t.td,{style:{textAlign:`right`},children:`16`}),(0,c.jsx)(t.td,{style:{textAlign:`right`},children:`288`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{style:{textAlign:`left`},children:`medium`}),(0,c.jsx)(t.td,{style:{textAlign:`right`},children:`600`}),(0,c.jsx)(t.td,{style:{textAlign:`right`},children:`8`}),(0,c.jsx)(t.td,{style:{textAlign:`right`},children:`0`}),(0,c.jsx)(t.td,{style:{textAlign:`right`},children:`44.6`}),(0,c.jsx)(t.td,{style:{textAlign:`right`},children:`27`}),(0,c.jsx)(t.td,{style:{textAlign:`right`},children:`27`}),(0,c.jsx)(t.td,{style:{textAlign:`right`},children:`548`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{style:{textAlign:`left`},children:`wide`}),(0,c.jsx)(t.td,{style:{textAlign:`right`},children:`1160`}),(0,c.jsx)(t.td,{style:{textAlign:`right`},children:`12`}),(0,c.jsx)(t.td,{style:{textAlign:`right`},children:`108`}),(0,c.jsx)(t.td,{style:{textAlign:`right`},children:`50.1`}),(0,c.jsx)(t.td,{style:{textAlign:`right`},children:`33`}),(0,c.jsx)(t.td,{style:{textAlign:`right`},children:`44`}),(0,c.jsx)(t.td,{style:{textAlign:`right`},children:`964`})]})]})]}),`
`,(0,c.jsx)(t.h3,{id:`not-tied-to-devices`,children:`Not tied to devices`}),`
`,(0,c.jsx)(t.p,{children:`All grid dimensions are based on multiples of 16;
explicitly not on the sizes of specific screens or devices.`}),`
`,(0,c.jsx)(t.p,{children:`We do not want to design our layouts based on the precise dimensions of the latest iPhone or Galaxy,
but instead, make them responsive to the variety of screens they will appear on.
Of course, we have experimented and tested this.
We’ve ultimately chosen values that work well visually.`}),`
`,(0,c.jsx)(t.p,{children:`For the same reason, we do not refer to the 3 grid breakpoints as “mobile, tablet, and desktop” but as “for narrow, medium, and wide” screens or windows.`}),`
`,(0,c.jsx)(t.p,{children:`If you want a bit more guidance,
assume that phones in portrait mode and split-screen windows on tablets use the 4-column grid,
phones in landscape mode and tablets in portrait use the 8-column grid,
and tablets in landscape mode, laptops, and larger screens use the 12-column grid.
The exact number of pixels is not important.`}),`
`,(0,c.jsx)(t.h3,{id:`reference-widths-for-designers`,children:`Reference widths for designers`}),`
`,(0,c.jsx)(t.p,{children:`Nice, all that flexibility.
However, when designing a screen, it is still necessary to choose a specific canvas.
You want to determine how each design behaves on a desktop, a tablet, or a mobile phone.`}),`
`,(0,c.jsx)(t.p,{children:`Therefore, in Figma, we work with 3 reference widths.
On those widths, we develop the screen’s design for the 3 classes of devices.
We know that, in reality, there is much more variation, but we have to draw the line somewhere.
You can find these grids in the Figma Library under ‘Grid styles’.`}),`
`,(0,c.jsx)(t.p,{children:`In these 3 situations, the dimensions are as follows.`}),`
`,(0,c.jsx)(t.h4,{id:`spacious-1`,children:`Spacious`}),`
`,(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.th,{style:{textAlign:`left`},children:`Device Class`}),(0,c.jsx)(t.th,{style:{textAlign:`right`},children:`Reference Width`}),(0,c.jsx)(t.th,{style:{textAlign:`right`},children:`Number of columns`}),(0,c.jsx)(t.th,{style:{textAlign:`right`},children:`Column width`}),(0,c.jsx)(t.th,{style:{textAlign:`right`},children:`Gap width`}),(0,c.jsx)(t.th,{style:{textAlign:`right`},children:`Margin width`}),(0,c.jsx)(t.th,{style:{textAlign:`right`},children:`Grid width`})]})}),(0,c.jsxs)(t.tbody,{children:[(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{style:{textAlign:`left`},children:`phone`}),(0,c.jsx)(t.td,{style:{textAlign:`right`},children:`320`}),(0,c.jsx)(t.td,{style:{textAlign:`right`},children:`4`}),(0,c.jsx)(t.td,{style:{textAlign:`right`},children:`41`}),(0,c.jsx)(t.td,{style:{textAlign:`right`},children:`36`}),(0,c.jsx)(t.td,{style:{textAlign:`right`},children:`24`}),(0,c.jsx)(t.td,{style:{textAlign:`right`},children:`272`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{style:{textAlign:`left`},children:`tablet`}),(0,c.jsx)(t.td,{style:{textAlign:`right`},children:`880`}),(0,c.jsx)(t.td,{style:{textAlign:`right`},children:`8`}),(0,c.jsx)(t.td,{style:{textAlign:`right`},children:`56`}),(0,c.jsx)(t.td,{style:{textAlign:`right`},children:`48`}),(0,c.jsx)(t.td,{style:{textAlign:`right`},children:`48`}),(0,c.jsx)(t.td,{style:{textAlign:`right`},children:`784`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{style:{textAlign:`left`},children:`desktop`}),(0,c.jsx)(t.td,{style:{textAlign:`right`},children:`1440`}),(0,c.jsx)(t.td,{style:{textAlign:`right`},children:`12`}),(0,c.jsx)(t.td,{style:{textAlign:`right`},children:`50`}),(0,c.jsx)(t.td,{style:{textAlign:`right`},children:`60`}),(0,c.jsx)(t.td,{style:{textAlign:`right`},children:`90`}),(0,c.jsx)(t.td,{style:{textAlign:`right`},children:`1260`})]})]})]}),`
`,(0,c.jsx)(t.h4,{id:`compact-1`,children:`Compact`}),`
`,(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.th,{style:{textAlign:`left`},children:`Device Class`}),(0,c.jsx)(t.th,{style:{textAlign:`right`},children:`Reference Width`}),(0,c.jsx)(t.th,{style:{textAlign:`right`},children:`Number of columns`}),(0,c.jsx)(t.th,{style:{textAlign:`right`},children:`Menu bar width`}),(0,c.jsx)(t.th,{style:{textAlign:`right`},children:`Column width`}),(0,c.jsx)(t.th,{style:{textAlign:`right`},children:`Gap width`}),(0,c.jsx)(t.th,{style:{textAlign:`right`},children:`Margin width`}),(0,c.jsx)(t.th,{style:{textAlign:`right`},children:`Grid width`})]})}),(0,c.jsxs)(t.tbody,{children:[(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{style:{textAlign:`left`},children:`phone`}),(0,c.jsx)(t.td,{style:{textAlign:`right`},children:`320`}),(0,c.jsx)(t.td,{style:{textAlign:`right`},children:`4`}),(0,c.jsx)(t.td,{style:{textAlign:`right`},children:`0`}),(0,c.jsx)(t.td,{style:{textAlign:`right`},children:`54`}),(0,c.jsx)(t.td,{style:{textAlign:`right`},children:`24`}),(0,c.jsx)(t.td,{style:{textAlign:`right`},children:`16`}),(0,c.jsx)(t.td,{style:{textAlign:`right`},children:`288`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{style:{textAlign:`left`},children:`tablet`}),(0,c.jsx)(t.td,{style:{textAlign:`right`},children:`880`}),(0,c.jsx)(t.td,{style:{textAlign:`right`},children:`8`}),(0,c.jsx)(t.td,{style:{textAlign:`right`},children:`0`}),(0,c.jsx)(t.td,{style:{textAlign:`right`},children:`76.3`}),(0,c.jsx)(t.td,{style:{textAlign:`right`},children:`30`}),(0,c.jsx)(t.td,{style:{textAlign:`right`},children:`30`}),(0,c.jsx)(t.td,{style:{textAlign:`right`},children:`820`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{style:{textAlign:`left`},children:`desktop`}),(0,c.jsx)(t.td,{style:{textAlign:`right`},children:`1920`}),(0,c.jsx)(t.td,{style:{textAlign:`right`},children:`12`}),(0,c.jsx)(t.td,{style:{textAlign:`right`},children:`108`}),(0,c.jsx)(t.td,{style:{textAlign:`right`},children:`110`}),(0,c.jsx)(t.td,{style:{textAlign:`right`},children:`36`}),(0,c.jsx)(t.td,{style:{textAlign:`right`},children:`48`}),(0,c.jsx)(t.td,{style:{textAlign:`right`},children:`1716`})]})]})]}),`
`,(0,c.jsx)(t.h3,{id:`windows-or-screens`,children:`Windows or screens`}),`
`,(0,c.jsx)(t.p,{children:`We intentionally talk about windows, while responsive design often uses screen widths.
Most of the time, it comes down to the same thing, but not always.
It is good to be aware of this.`}),`
`,(0,c.jsx)(t.p,{children:`On a computer screen, the browser window is not necessarily maximized; it can be narrower than the screen.
Responsive design logically assumes the width of the browser window.`}),`
`,(0,c.jsx)(t.p,{children:`On phones and tablets, both concepts often coincide,
although tablets allow placing 2 (windows of) apps side by side on the screen.`}),`
`,(0,c.jsx)(t.h2,{id:`relationship-with-text`,children:`Relationship with text`}),`
`,(0,c.jsx)(t.p,{children:`Layout and text relate in various ways.`}),`
`,(0,c.jsx)(t.h3,{id:`scaling-typography`,children:`Scaling typography`}),`
`,(0,c.jsxs)(t.p,{children:[`Like the grid, the `,(0,c.jsx)(t.a,{href:`/docs/brand-design-tokens-typography--docs`,children:`text sizes`}),` respond to the window width.
This ensures that content looks good on as many window widths and with various personal settings.`]}),`
`,(0,c.jsx)(t.h3,{id:`zooming-or-enlarged-text`,children:`Zooming or enlarged text`}),`
`,(0,c.jsx)(t.p,{children:`People can zoom in on a web page or set a larger text size.
The dimensions of the grid take this into account.
The breakpoints scale with the effective text size.
This way, the amount of columns changes earlier, and large content still fits well.`}),`
`,(0,c.jsx)(t.h2,{id:`related-components`,children:`Related components`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.a,{href:`/docs/components-layout-grid--docs`,children:`Grid`})}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=t(),a(),i()}))();export{s as default};