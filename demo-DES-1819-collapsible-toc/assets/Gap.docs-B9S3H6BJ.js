import{n as e}from"./chunk-DnJy8xQt.js";import{Gt as t}from"./iframe-CDrpwKRp.js";import{r as n}from"./react-DNvMJQLA.js";import{c as r,i,l as a,m as o,u as s}from"./blocks-CmF6jx_U.js";import{t as c}from"./mdx-react-shim-CZYSxpgZ.js";import{n as l,t as u}from"./Gap.stories-BepHtBvj.js";var d,f=e((()=>{d=`<!-- @license CC0-1.0 -->

# Gap

Adds white space between a set of elements.

## Class names

Five options are available for the width or height of the gap:

- \`ams-gap-xs\`
- \`ams-gap-s\`
- \`ams-gap-m\`
- \`ams-gap-l\`
- \`ams-gap-xl\`

These classes apply the [design tokens for space](/docs/brand-design-tokens-space--docs).

Because spacing is responsive, the gaps are as well.
They are also smaller in [Compact Mode](https://designsystem.amsterdam/docs/docs-developer-guide-modes--docs).

## Guidelines

- Use this utility class to vertically separate the children of a parent element from each other.
- Do not use it on the Grid component.
  Grid is responsible for its own gaps.
- Do not use it for text – various types of elements require different amounts of space between them.
  Wrap editorial content in the [Prose](/docs/utilities-css-prose--docs) utility class to have all spacing set automatically.
- It can be used on any other element and sets the \`gap\` CSS property.
  It also makes the element a grid container; the gap would be ignored otherwise.
  These declarations are marked with the \`!important\` flag to ensure they override any other gaps and display modes.
- To add a gap between 2 siblings, the first one can be given a [Margin Bottom](/docs/utilities-css-margin--docs) instead.
  This may be preferable because it doesn’t change the parent’s display mode.
`}));function p(e){let t={a:`a`,h2:`h2`,li:`li`,ul:`ul`,...n(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[`
`,`
`,(0,h.jsx)(a,{of:u}),`
`,(0,h.jsx)(r,{children:d}),`
`,(0,h.jsx)(s,{}),`
`,(0,h.jsx)(i,{}),`
`,(0,h.jsx)(t.h2,{id:`see-also`,children:`See also`}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.a,{href:`/docs/docs-developer-guide-spacing--docs`,children:`Spacing`}),` – which tools to use for white space and when.`]}),`
`]})]})}function m(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,h.jsx)(t,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;e((()=>{h=t(),c(),o(),l(),f()}))();export{m as default};