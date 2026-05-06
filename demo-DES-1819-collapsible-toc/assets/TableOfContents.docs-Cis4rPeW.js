import{n as e}from"./chunk-jRWAZmH_.js";import{Vt as t}from"./iframe-BwTbJvPk.js";import{r as n}from"./react-Bg3qXIbN.js";import{c as r,f as i,i as a,l as o,n as s,s as c}from"./blocks-BvrJk34V.js";import{n as l,t as u}from"./DesignTokensTable-bzfJqght.js";import{t as d}from"./mdx-react-shim-C8SA5xCb.js";import{Collapsible as f,MultipleLevels as p,n as m,t as h}from"./TableOfContents.stories-B9fr1p1B.js";var g,_=e((()=>{g=`<!-- @license CC0-1.0 -->

# Table of Contents

A list of links corresponding to the content sections on the page.
It helps users to easily navigate to different sections on the same page.

Items that contain a nested list can optionally be made collapsible.
When the parent is collapsible, each item with children gets a toggle button — separate from its link — that expands and collapses the nested list.
Mark the current page's link with \`aria-current="page"\` to highlight it.
`})),v,y,b=e((()=>{v={"table-of-contents":{"font-family":{$value:`{ams.typography.font-family}`,$extensions:{"nl.amsterdam.type":`fontFamily`}},"font-size":{$value:`{ams.typography.body-text.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"font-weight":{$value:`{ams.typography.body-text.font-weight}`,$extensions:{"nl.amsterdam.type":`fontWeight`}},"line-height":{$value:`{ams.typography.body-text.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}},heading:{"margin-block-end":{$value:`{ams.space.s}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}},list:{list:{"padding-block-start":{$value:`{ams.space.xs}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-inline-start":{$value:`{ams.space.m}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}}},item:{gap:{$value:`{ams.space.xs}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"margin-block-end":{$value:`{ams.space.s}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}},link:{color:{$value:`{ams.links.color}`,$extensions:{"nl.amsterdam.type":`color`}},"outline-offset":{$value:`{ams.focus.outline-offset}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"text-decoration-line":{$value:`{ams.links.subtle.text-decoration-line}`,$extensions:{"nl.amsterdam.type":`textDecorationLine`}},"text-decoration-thickness":{$value:`{ams.links.text-decoration-thickness}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"text-underline-offset":{$value:`{ams.links.text-underline-offset}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},current:{color:{$value:`{ams.links.color}`,$extensions:{"nl.amsterdam.type":`color`}},"font-weight":{$value:`{ams.typography.heading.font-weight}`,$extensions:{"nl.amsterdam.type":`fontWeight`}}},hover:{color:{$value:`{ams.links.hover.color}`,$extensions:{"nl.amsterdam.type":`color`}},"text-decoration-line":{$value:`{ams.links.subtle.hover.text-decoration-line}`,$extensions:{"nl.amsterdam.type":`textDecorationLine`}}}},toggle:{color:{$value:`{ams.color.interactive.default}`,$extensions:{"nl.amsterdam.type":`color`}},hover:{color:{$value:`{ams.color.interactive.hover}`,$extensions:{"nl.amsterdam.type":`color`}}},icon:{"transition-duration":{$value:`0.3s`,$type:`duration`},"transition-timing-function":{$value:`ease`,$extensions:{"nl.amsterdam.type":`transitionTimingFunction`}}}}}},y={ams:v}}));function x(e){let t={code:`code`,h2:`h2`,h3:`h3`,p:`p`,...n(),...e.components};return(0,C.jsxs)(C.Fragment,{children:[`
`,`
`,`
`,`
`,(0,C.jsx)(r,{of:h}),`
`,(0,C.jsx)(c,{children:g}),`
`,(0,C.jsx)(o,{}),`
`,(0,C.jsx)(a,{}),`
`,(0,C.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,C.jsx)(t.h3,{id:`multiple-levels`,children:`Multiple levels`}),`
`,(0,C.jsx)(s,{of:p}),`
`,(0,C.jsx)(t.h3,{id:`collapsible`,children:`Collapsible`}),`
`,(0,C.jsxs)(t.p,{children:[`Set the `,(0,C.jsx)(t.code,{children:`collapsible`}),` prop on the root to let each item with a nested list expand and collapse via a separate toggle button.
Use `,(0,C.jsx)(t.code,{children:`defaultExpanded`}),` on a Link to pre-open the current page's ancestors, and `,(0,C.jsx)(t.code,{children:`aria-current="page"`}),` on the link itself to highlight it.`]}),`
`,(0,C.jsx)(s,{of:f}),`
`,(0,C.jsx)(t.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,C.jsx)(u,{tokens:y})]})}function S(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,C.jsx)(t,{...e,children:(0,C.jsx)(x,{...e})}):x(e)}var C;e((()=>{C=t(),d(),i(),m(),_(),b(),l()}))();export{S as default};