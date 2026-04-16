import{n as e}from"./chunk-zsgVPwQN.js";import{t}from"./jsx-runtime-GmyBfqKJ.js";import{r as n}from"./react-RY8N8R-x.js";import{c as r,f as i,i as a,l as o,s}from"./blocks-BMurOIz2.js";import{t as c}from"./mdx-react-shim-ynubY8I9.js";import{n as l,t as u}from"./Prose.stories-CYVKpz61.js";var d,f=e((()=>{d=`<!-- @license CC0-1.0 -->

# Prose

Applies the recommended vertical spacing between the direct children of a container, so editorial content flows without hand-picked margins.

## Class name

\`ams-prose\`

## Guidelines

- Use this utility class on a container that wraps editorial content — an article, a rich-text block, or a section built from multiple components — so its children are spaced according to the [‘Space between’](/docs/docs-designer-guide-space-between--docs) recommendations.
- The rules cover Heading (levels 1 through 6), Paragraph (including the large variant), Blockquote, Image, Ordered List, Unordered List, Button, Call to Action Link, Standalone Link, Table, and Accordion.
  Other direct children pick up the default body-to-body spacing.
- It sets \`margin-block-end\` on each direct child based on what follows it, using the \`:has()\` selector.
  Browsers without \`:has()\` support fall back to a uniform spacing.
- Content inside an Accordion panel nested under \`.ams-prose\` is spaced the same way, so an accordion and its surroundings share one rhythm.
- To add a single ad-hoc gap between two elements, prefer the [Margin Bottom](/docs/utilities-css-margin--docs) utility class on the first one.
- To add even spacing between a set of siblings, prefer the [Gap](/docs/utilities-css-gap--docs) utility class on their parent.
`}));function p(e){return(0,h.jsxs)(h.Fragment,{children:[`
`,`
`,(0,h.jsx)(r,{of:u}),`
`,(0,h.jsx)(s,{children:d}),`
`,(0,h.jsx)(o,{}),`
`,(0,h.jsx)(a,{})]})}function m(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,h.jsx)(t,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;e((()=>{h=t(),c(),i(),l(),f()}))();export{m as default};