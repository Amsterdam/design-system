import{j as e}from"./iframe-C4ZkPMWu.js";import{useMDXComponents as o}from"./index-DdiCCGDZ.js";import{M as a,f as i,P as r,h as m}from"./blocks-jaUyGF9v.js";import{M as l}from"./Margin.stories-BhVl1j4d.js";import"./preload-helper-PPVm8Dsz.js";import"./index--RL2T2Oh.js";const c=`<!-- @license CC0-1.0 -->

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
`;/*@license CC0-1.0*/function s(n){return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(a,{of:l}),`
`,e.jsx(i,{children:c}),`
`,e.jsx(r,{}),`
`,e.jsx(m,{})]})}function b(n={}){const{wrapper:t}={...o(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s()}export{b as default};
