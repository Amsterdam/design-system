import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as a}from"./index-CxbY7dAs.js";import{M as o,e as r,P as i,f as p}from"./index-BHgg25fL.js";import{G as d}from"./Gap.stories-D1s1X6GM.js";import"./index-yBjzXJbu.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B4q2Zsfe.js";import"./index-CJ88nXQk.js";import"./index-Cf9b6H0j.js";import"./index-DrFu-skq.js";import"./index.esm-DDzNsyt1.js";import"./clsx-B-dksMZM.js";import"./index.esm-D3RaMjqb.js";const m=`<!-- @license CC0-1.0 -->

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
`;/*@license CC0-1.0*/function s(n){return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(o,{of:d}),`
`,e.jsx(r,{children:m}),`
`,e.jsx(i,{}),`
`,e.jsx(p,{})]})}function v(n={}){const{wrapper:t}={...a(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s()}export{v as default};
