import{n as e}from"./chunk-DnJy8xQt.js";import{Vt as t}from"./iframe-28iYUZM8.js";import{r as n}from"./react-Dh1gv6cO.js";import{c as r,f as i,i as a,l as o,n as s,s as c}from"./blocks-qy4twwPt.js";import{t as l}from"./mdx-react-shim-ChbJ9lTe.js";import{VerticalLayout as u,n as d,t as f}from"./Breakout.stories-DlxOoRcy.js";var p,m=e((()=>{p=`<!-- @license CC0-1.0 -->

# Breakout

A composition that lets a figure – e.g. an image, video or map – break out of a Spotlight.
`}));function h(e){let t={code:`code`,h2:`h2`,h3:`h3`,p:`p`,...n(),...e.components};return(0,_.jsxs)(_.Fragment,{children:[`
`,`
`,(0,_.jsx)(r,{of:f}),`
`,(0,_.jsx)(c,{children:p}),`
`,(0,_.jsx)(t.h3,{id:`how-to-use`,children:`How to use`}),`
`,(0,_.jsxs)(t.p,{children:[`This component is an extension of `,(0,_.jsx)(t.code,{children:`Grid`}),`.
It offers the same props, although `,(0,_.jsx)(t.code,{children:`span`}),` and `,(0,_.jsx)(t.code,{children:`start`}),` have been renamed to `,(0,_.jsx)(t.code,{children:`colSpan`}),` and `,(0,_.jsx)(t.code,{children:`colStart`}),`.
Additionally, `,(0,_.jsx)(t.code,{children:`Breakout`}),` allows cells to span multiple rows.`]}),`
`,(0,_.jsxs)(t.p,{children:[`The Cell containing the Spotlight must have `,(0,_.jsx)(t.code,{children:`has="spotlight"`}),` to extend to the gaps and margins around it.
This prop can be used only on Cells that span all columns of the grid, so `,(0,_.jsx)(t.code,{children:`span="all"`}),` is required as well.`]}),`
`,(0,_.jsxs)(t.p,{children:[`The Cell containing the figure must have `,(0,_.jsx)(t.code,{children:`has="figure"`}),` to ensure it aligns to the bottom.`]}),`
`,(0,_.jsx)(t.p,{children:`The content that doesn’t break out defines the height of the Spotlight.
Ensure that the text is short, or the image tall, to prevent losing the break-out effect.`}),`
`,(0,_.jsx)(t.p,{children:`On narrower screens, let the text move below the image.`}),`
`,(0,_.jsx)(o,{}),`
`,(0,_.jsx)(a,{}),`
`,(0,_.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,_.jsx)(t.h3,{id:`vertical-layout`,children:`Vertical layout`}),`
`,(0,_.jsx)(t.p,{children:`A large figure can be placed at the top of the Spotlight, with related text positioned underneath.`}),`
`,(0,_.jsx)(s,{of:u})]})}function g(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,_.jsx)(t,{...e,children:(0,_.jsx)(h,{...e})}):h(e)}var _;e((()=>{_=t(),l(),i(),d(),m()}))();export{g as default};