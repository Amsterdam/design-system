import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-BqsN2jGA.js";import{a as n,f as r,i,l as a,m as o,n as s,u as c,v as l}from"./iframe-DBiM1fCX.js";import{t as u}from"./mdx-react-shim-DsN5kvkj.js";import{VerticalLayout as d,n as f,t as p}from"./Breakout.stories-BtV0_5VW.js";function m(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...l(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[`
`,`
`,`
`,(0,g.jsx)(a,{of:p}),`
`,(0,g.jsx)(r,{}),`
`,(0,g.jsx)(n,{of:p}),`
`,(0,g.jsx)(c,{}),`
`,(0,g.jsx)(i,{}),`
`,(0,g.jsx)(t.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,g.jsxs)(t.p,{children:[`The Cell containing the Spotlight must have `,(0,g.jsx)(t.code,{children:`has="spotlight"`}),` to extend to the gaps and margins around it.
This prop can only be used on Cells that span all columns of the grid, so `,(0,g.jsx)(t.code,{children:`span="all"`}),` is required as well.`]}),`
`,(0,g.jsxs)(t.p,{children:[`The Cell containing the figure must have `,(0,g.jsx)(t.code,{children:`has="figure"`}),` to ensure it aligns to the bottom.`]}),`
`,(0,g.jsx)(t.p,{children:`The content that does not break out defines the height of the Spotlight.
Ensure that the text is short, or the image tall, to prevent losing the break-out effect.`}),`
`,(0,g.jsx)(t.p,{children:`On narrower screens, let the text move below the image.`}),`
`,(0,g.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,g.jsx)(t.h3,{id:`vertical-layout`,children:`Vertical layout`}),`
`,(0,g.jsx)(t.p,{children:`A large figure can be placed at the top of the Spotlight, with related text positioned underneath.`}),`
`,(0,g.jsx)(s,{of:d}),`
`,(0,g.jsx)(t.h2,{id:`features`,children:`Features`}),`
`,(0,g.jsxs)(t.p,{children:[`This component is an extension of `,(0,g.jsx)(t.a,{href:`/docs/components-layout-grid--docs`,children:`Grid`}),`.
It offers the same props, although `,(0,g.jsx)(t.code,{children:`span`}),` and `,(0,g.jsx)(t.code,{children:`start`}),` have been renamed to `,(0,g.jsx)(t.code,{children:`colSpan`}),` and `,(0,g.jsx)(t.code,{children:`colStart`}),`.
Additionally, Breakout allows cells to span multiple rows.`]}),`
`,(0,g.jsx)(t.h2,{id:`see-also`,children:`See also`}),`
`,(0,g.jsxs)(t.ul,{children:[`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.a,{href:`/docs/components-layout-grid--docs`,children:`Grid`}),` – the base layout this component extends.`]}),`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.a,{href:`/docs/components-containers-spotlight--docs`,children:`Spotlight`}),` – the container that Breakout breaks out of.`]}),`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.a,{href:`/docs/components-media-figure--docs`,children:`Figure`}),` – the typical content placed inside the break-out Cell.`]}),`
`]})]})}function h(e={}){let{wrapper:t}={...l(),...e.components};return t?(0,g.jsx)(t,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;e((()=>{g=t(),u(),o(),f()}))();export{h as default};