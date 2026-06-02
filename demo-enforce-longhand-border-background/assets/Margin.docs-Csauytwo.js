import{n as e}from"./chunk-DnJy8xQt.js";import{Ht as t}from"./iframe-B0l3K_5D.js";import{r as n}from"./react-DStGRlgw.js";import{c as r,f as i,i as a,l as o,s}from"./blocks-DjSFty0r.js";import{t as c}from"./mdx-react-shim-BQYnwzgm.js";import{n as l,t as u}from"./Margin.stories-CuA2dKJk.js";var d,f=e((()=>{d=`<!-- @license CC0-1.0 -->

# Margin

Adds white space below a single element.

## Class names

Six options are available for the width or height of the bottom margin:

- \`ams-mb-xs\`
- \`ams-mb-s\`
- \`ams-mb-m\`
- \`ams-mb-l\`
- \`ams-mb-xl\`
- \`ams-mb-2xl\`

These classes apply the [design tokens for space](/docs/brand-design-tokens-space--docs).

Because spacing is responsive, the margins are as well.
They are also smaller in [Compact Mode](https://designsystem.amsterdam/docs/docs-developer-guide-modes--docs).

## Guidelines

- Use this utility class to vertically separate one element from the next.
- Consult the [vertical space](/docs/docs-designer-guide-vertical-space--docs) guidelines to find the recommended length.
- It can be used on any element and sets the \`margin-block-end\` CSS property.
  This declaration is marked with the \`!important\` flag to ensure it overrides any other margins.
- Elements’ top and bottom margins are sometimes collapsed into a single margin.
  We only offer a utility for the bottom margin to prevent issues arising from this.
  Consult [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing) for details.
- To add equal margins between elements, either use the [Gap](/docs/utilities-css-gap--docs) utility class on their common parent or wrap them in a [Column](/docs/components-layout-column--docs) component.
  This helps in loops: it prevents having to treat the last element differently.
- Wrap editorial content in the [Prose](/docs/utilities-css-prose--docs) utility class instead to have all spacing set automatically.
`}));function p(e){let t={a:`a`,h2:`h2`,li:`li`,ul:`ul`,...n(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[`
`,`
`,(0,h.jsx)(r,{of:u}),`
`,(0,h.jsx)(s,{children:d}),`
`,(0,h.jsx)(o,{}),`
`,(0,h.jsx)(a,{}),`
`,(0,h.jsx)(t.h2,{id:`see-also`,children:`See also`}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.a,{href:`/docs/docs-developer-guide-spacing--docs`,children:`Spacing`}),` – which tools to use for white space and when.`]}),`
`]})]})}function m(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,h.jsx)(t,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;e((()=>{h=t(),c(),i(),l(),f()}))();export{m as default};