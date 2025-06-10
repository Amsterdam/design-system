import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as s}from"./index-CxbY7dAs.js";import{M as i,e as a,P as r,f as m}from"./index-FKQ9w33j.js";import{M as l}from"./Margin.stories-DLr6KS44.js";import"./index-yBjzXJbu.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-s5UoXFDH.js";import"./index-fNjTmf9T.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index.esm-D1IbH_61.js";import"./clsx-B-dksMZM.js";import"./index.esm-jhuYF6FN.js";const p=`<!-- @license CC0-1.0 -->

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

Because spacing is responsive, the margins are as well.
They are also smaller in Compact Mode.
Consult the [Space](/docs/brand-design-tokens-space--docs) docs for an indication of their sizes.

## Guidelines

- Use this utility class to vertically separate one element from the next.
- It can be used on any element and sets the \`margin-block-end\` CSS property.
  This declaration is marked with the \`!important\` flag to ensure it overrides any other margins.
- Elements’ top and bottom margins are sometimes collapsed into a single margin.
  We only offer a utility for the bottom margin to prevent issues arising from this.
  Consult [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing) for details.
- To add equal margins between elements, either use the [Gap](/docs/utilities-css-gap--docs) utility class on their common parent or wrap them in a [Column](/docs/components-layout-column--docs) component.
  This helps in loops: it prevents having to treat the last element differently.
`;/*@license CC0-1.0*/function o(n){return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(i,{of:l}),`
`,e.jsx(a,{children:p}),`
`,e.jsx(r,{}),`
`,e.jsx(m,{})]})}function v(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o()}export{v as default};
