import{n as e}from"./chunk-DnJy8xQt.js";import{Vt as t}from"./iframe-D8SeYqVt.js";import{r as n}from"./react-i1-Hmnfh.js";import{c as r,f as i,i as a,l as o,s}from"./blocks-Dc6kZ0g6.js";import{t as c}from"./mdx-react-shim-C43xo2k1.js";import{n as l,t as u}from"./InlineSizeContext.stories-BG-0rJJ7.js";var d,f=e((()=>{d=`<!-- @license CC0-1.0 -->

# Inline Size Context

Turns an element into a [CSS container query](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Containment/Container_queries) context that descendants can query against its inline size.

## Class name

\`ams-inline-size-context\`

## Guidelines

- Apply this class to an element whose width should drive the layout of its descendants.
- Descendants can then adapt responsively using \`@container ams-inline-size-context (min-inline-size: …)\`, instead of \`@media (min-width: …)\`.
- [Page](/docs/components-containers-page--docs), [Grid Cell](/docs/components-layout-grid--docs), and [Dialog](/docs/components-containers-dialog--docs) already establish this context, so you don’t need the utility class on those components.
- Override the default container name or type with the \`--ams-inline-size-context-name\` and \`--ams-inline-size-context-type\` custom properties if you need a component-specific container name.
`}));function p(e){return(0,h.jsxs)(h.Fragment,{children:[`
`,`
`,(0,h.jsx)(r,{of:u}),`
`,(0,h.jsx)(s,{children:d}),`
`,(0,h.jsx)(o,{}),`
`,(0,h.jsx)(a,{})]})}function m(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,h.jsx)(t,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;e((()=>{h=t(),c(),i(),l(),f()}))();export{m as default};