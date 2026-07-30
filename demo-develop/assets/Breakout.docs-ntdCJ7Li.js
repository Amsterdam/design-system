import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{a as t,d as n,h as r,i,n as a,p as o,u as s}from"./blocks-CqryReaq.js";import{t as c}from"./jsx-runtime-Bq1bXGty.js";import{i as l}from"./react-BnCtKaSV.js";import{t as u}from"./mdx-react-shim-9RzcSRdq.js";import{VerticalLayout as d,n as f,t as p}from"./Breakout.stories-Hnx1KGm-.js";import{Cell as m,t as h}from"./BreakoutCell.stories-BJ3ui0vU.js";function g(e){let r={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...l(),...e.components};return(0,v.jsxs)(v.Fragment,{children:[`
`,`
`,`
`,(0,v.jsx)(s,{of:p}),`
`,(0,v.jsx)(o,{}),`
`,(0,v.jsx)(t,{of:p}),`
`,(0,v.jsx)(n,{}),`
`,(0,v.jsx)(i,{}),`
`,(0,v.jsx)(r.h2,{id:`subcomponents`,children:`Subcomponents`}),`
`,(0,v.jsx)(r.h3,{id:`cell`,children:`Cell`}),`
`,(0,v.jsxs)(r.p,{children:[`Positions content in the Breakout grid through its `,(0,v.jsx)(r.code,{children:`colSpan`}),`, `,(0,v.jsx)(r.code,{children:`colStart`}),`, `,(0,v.jsx)(r.code,{children:`rowSpan`}),`, and `,(0,v.jsx)(r.code,{children:`rowStart`}),` props.
Use `,(0,v.jsx)(r.code,{children:`as`}),` to change the HTML element.`]}),`
`,(0,v.jsx)(a,{of:m}),`
`,(0,v.jsx)(i,{of:m}),`
`,(0,v.jsx)(r.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,v.jsxs)(r.p,{children:[`The Cell containing the Spotlight must have `,(0,v.jsx)(r.code,{children:`has="spotlight"`}),` to extend to the gaps and margins around it.
This prop can only be used on Cells that span all columns of the grid, so `,(0,v.jsx)(r.code,{children:`span="all"`}),` is required as well.`]}),`
`,(0,v.jsxs)(r.p,{children:[`The Cell containing the figure must have `,(0,v.jsx)(r.code,{children:`has="figure"`}),` to ensure it aligns to the bottom.`]}),`
`,(0,v.jsx)(r.p,{children:`The content that does not break out defines the height of the Spotlight.
Ensure that the text is short, or the image tall, to prevent losing the break-out effect.`}),`
`,(0,v.jsx)(r.p,{children:`On narrower screens, let the text move below the image.`}),`
`,(0,v.jsxs)(r.p,{children:[`Write the Cells in the order the content should be read, and use `,(0,v.jsx)(r.code,{children:`colStart`}),` and `,(0,v.jsx)(r.code,{children:`rowStart`}),` only to decide where each one sits.
Reading order and keyboard order follow the markup rather than the grid, so the two disagree as soon as a start value is used to reorder rather than to place.`]}),`
`,(0,v.jsx)(r.h2,{id:`examples`,children:`Examples`}),`
`,(0,v.jsx)(r.h3,{id:`vertical-layout`,children:`Vertical layout`}),`
`,(0,v.jsx)(r.p,{children:`A large figure can be placed at the top of the Spotlight, with related text positioned underneath.`}),`
`,(0,v.jsx)(a,{of:d}),`
`,(0,v.jsx)(r.h2,{id:`features`,children:`Features`}),`
`,(0,v.jsxs)(r.p,{children:[`This component is an extension of `,(0,v.jsx)(r.a,{href:`/docs/components-layout-grid--docs`,children:`Grid`}),`.
It offers the same props, although `,(0,v.jsx)(r.code,{children:`span`}),` and `,(0,v.jsx)(r.code,{children:`start`}),` have been renamed to `,(0,v.jsx)(r.code,{children:`colSpan`}),` and `,(0,v.jsx)(r.code,{children:`colStart`}),`.
Additionally, Breakout allows cells to span multiple rows.`]}),`
`,(0,v.jsx)(r.h2,{id:`design`,children:`Design`}),`
`,(0,v.jsx)(r.p,{children:`A Breakout Cell escapes the Grid by pulling itself outward by exactly the space the Grid puts around it: the margin at each side, and the vertical gap above and below.
The Spotlight inside it then reaches both edges of the window, while every other Cell keeps to its columns.`}),`
`,(0,v.jsx)(r.p,{children:`The vertical offsets are written out for each gap size, since each one cancels a different amount.
The horizontal offsets simply follow the margin the Grid ends up with.
So when that margin grows to clear a display cutout, the Spotlight still reaches the edge of the screen, and the content beside it moves clear of the cutout.
Each side is cancelled on its own, so a cutout at one edge never pulls the Spotlight away from the other.`}),`
`,(0,v.jsx)(r.p,{children:`Row spans and row starts are generated up to four.
A higher number produces no rule at all rather than an error, so a Cell asking for five rows quietly spans one.`}),`
`,(0,v.jsx)(r.p,{children:`The Cell holding the figure aligns to the bottom of its row, where every other Cell aligns to the top.
That is what lets a tall image sit on the base line of the Spotlight and rise out of the top of it.`}),`
`,(0,v.jsx)(r.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,v.jsx)(r.p,{children:`A Breakout renders the same markup as a Grid and adds nothing to the accessibility tree.
Cells are announced in the order they appear in the markup, whatever the grid does with them on screen, and ‘Usage guidelines’ covers what that asks of the markup.`}),`
`,(0,v.jsx)(r.h2,{id:`see-also`,children:`See also`}),`
`,(0,v.jsxs)(r.ul,{children:[`
`,(0,v.jsxs)(r.li,{children:[(0,v.jsx)(r.a,{href:`/docs/components-layout-grid--docs`,children:`Grid`}),` – the base layout this component extends.`]}),`
`,(0,v.jsxs)(r.li,{children:[(0,v.jsx)(r.a,{href:`/docs/components-containers-spotlight--docs`,children:`Spotlight`}),` – the container that Breakout breaks out of.`]}),`
`,(0,v.jsxs)(r.li,{children:[(0,v.jsx)(r.a,{href:`/docs/components-media-figure--docs`,children:`Figure`}),` – the typical content placed inside the break-out Cell.`]}),`
`]})]})}function _(e={}){let{wrapper:t}={...l(),...e.components};return t?(0,v.jsx)(t,{...e,children:(0,v.jsx)(g,{...e})}):g(e)}var v;e((()=>{v=c(),u(),r(),f(),h()}))();export{_ as default};