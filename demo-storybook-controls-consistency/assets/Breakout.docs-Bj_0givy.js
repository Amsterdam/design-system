import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./jsx-runtime-BCDDjCIb.js";import{b as n,d as r,f as i,g as a,i as o,m as s,o as c,s as l}from"./iframe-DcAN9mer.js";import{t as u}from"./mdx-react-shim-Vo4OqPs2.js";import{VerticalLayout as d,n as f,t as p}from"./Breakout.stories-DQcXry_r.js";import{Cell as m,t as h}from"./BreakoutCell.stories-DcHw2ZfX.js";function g(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...n(),...e.components};return(0,v.jsxs)(v.Fragment,{children:[`
`,`
`,`
`,(0,v.jsx)(r,{of:p}),`
`,(0,v.jsx)(s,{}),`
`,(0,v.jsx)(l,{of:p}),`
`,(0,v.jsx)(i,{}),`
`,(0,v.jsx)(c,{}),`
`,(0,v.jsx)(t.h2,{id:`subcomponents`,children:`Subcomponents`}),`
`,(0,v.jsx)(t.h3,{id:`cell`,children:`Cell`}),`
`,(0,v.jsxs)(t.p,{children:[`Positions content in the Breakout grid through its `,(0,v.jsx)(t.code,{children:`colSpan`}),`, `,(0,v.jsx)(t.code,{children:`colStart`}),`, `,(0,v.jsx)(t.code,{children:`rowSpan`}),`, and `,(0,v.jsx)(t.code,{children:`rowStart`}),` props.
Use `,(0,v.jsx)(t.code,{children:`as`}),` to change the HTML element.`]}),`
`,(0,v.jsx)(o,{of:m}),`
`,(0,v.jsx)(c,{of:m}),`
`,(0,v.jsx)(t.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,v.jsxs)(t.p,{children:[`The Cell containing the Spotlight must have `,(0,v.jsx)(t.code,{children:`has="spotlight"`}),` to extend to the gaps and margins around it.
This prop can only be used on Cells that span all columns of the grid, so `,(0,v.jsx)(t.code,{children:`span="all"`}),` is required as well.`]}),`
`,(0,v.jsxs)(t.p,{children:[`The Cell containing the figure must have `,(0,v.jsx)(t.code,{children:`has="figure"`}),` to ensure it aligns to the bottom.`]}),`
`,(0,v.jsx)(t.p,{children:`The content that does not break out defines the height of the Spotlight.
Ensure that the text is short, or the image tall, to prevent losing the break-out effect.`}),`
`,(0,v.jsx)(t.p,{children:`On narrower screens, let the text move below the image.`}),`
`,(0,v.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,v.jsx)(t.h3,{id:`vertical-layout`,children:`Vertical layout`}),`
`,(0,v.jsx)(t.p,{children:`A large figure can be placed at the top of the Spotlight, with related text positioned underneath.`}),`
`,(0,v.jsx)(o,{of:d}),`
`,(0,v.jsx)(t.h2,{id:`features`,children:`Features`}),`
`,(0,v.jsxs)(t.p,{children:[`This component is an extension of `,(0,v.jsx)(t.a,{href:`/docs/components-layout-grid--docs`,children:`Grid`}),`.
It offers the same props, although `,(0,v.jsx)(t.code,{children:`span`}),` and `,(0,v.jsx)(t.code,{children:`start`}),` have been renamed to `,(0,v.jsx)(t.code,{children:`colSpan`}),` and `,(0,v.jsx)(t.code,{children:`colStart`}),`.
Additionally, Breakout allows cells to span multiple rows.`]}),`
`,(0,v.jsx)(t.h2,{id:`see-also`,children:`See also`}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.a,{href:`/docs/components-layout-grid--docs`,children:`Grid`}),` – the base layout this component extends.`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.a,{href:`/docs/components-containers-spotlight--docs`,children:`Spotlight`}),` – the container that Breakout breaks out of.`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.a,{href:`/docs/components-media-figure--docs`,children:`Figure`}),` – the typical content placed inside the break-out Cell.`]}),`
`]})]})}function _(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,v.jsx)(t,{...e,children:(0,v.jsx)(g,{...e})}):g(e)}var v;e((()=>{v=t(),u(),a(),f(),h()}))();export{_ as default};