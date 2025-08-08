import{j as e}from"./iframe-BuCM2YO8.js";import{useMDXComponents as t}from"./index-BqsvkB3H.js";import{M as o,c as r,P as i,e as d}from"./blocks-CKuUIMaW.js";import{G as p}from"./Gap.stories-BzwFF8Zw.js";import"./index-xAWPjtI-.js";const c=`<!-- @license CC0-1.0 -->

# Gap

Adds white space between a set of elements.

## Class names

Five options are available for the width or height of the gap:

- \`ams-gap-xs\`
- \`ams-gap-s\`
- \`ams-gap-m\`
- \`ams-gap-l\`
- \`ams-gap-xl\`

Because spacing is responsive, the gaps are as well.
They are also smaller in Compact Mode.
Consult the [Space](/docs/brand-design-tokens-space--docs) docs for an indication of their sizes.

The \`2xl\` space is intended for whitespace around a [Grid](/docs/components-layout-grid--docs) only, which can be produced through a \`padding*\` of \`large\`.

## Guidelines

- Use this utility class to vertically separate the children of a parent element from each other.
- Do not use it on the Grid component.
  Grid is responsible for its own gaps.
- It can be used on any other element and sets the \`gap\` CSS property.
  It also makes the element a grid container; the gap would be ignored otherwise.
  These declarations are marked with the \`!important\` flag to ensure they override any other gaps and display modes.
- To add a gap between 2 siblings, the first one can be given a [Margin Bottom](/docs/utilities-css-margin--docs) instead.
  This may be preferable because it doesn’t change the parent’s display mode.
`;/*@license CC0-1.0*/function a(n){return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(o,{of:p}),`
`,e.jsx(r,{children:c}),`
`,e.jsx(i,{}),`
`,e.jsx(d,{})]})}function f(n={}){const{wrapper:s}={...t(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(a,{...n})}):a()}export{f as default};
