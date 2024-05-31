import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{useMDXComponents as i}from"./index-DlpNa54Y.js";import{M as r,d as a,P as m,e as l,f as o}from"./index-BRCXxs-6.js";import{P as h,A as d,W as p}from"./PageMenu.stories-BirI72Nt.js";import{S as u}from"./StatusBadge-DpMkLybt.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-CkQ8yoFj.js";import"../sb-preview/runtime.js";import"./index-B8XB3FuZ.js";import"./index-COebWTXQ.js";import"./index-B8K4vdXH.js";import"./index-DrFu-skq.js";import"./index.esm-DQkeu4as.js";import"./PageMenu-DQ_snOzP.js";import"./clsx-B-dksMZM.js";import"./Icon-CuaumHXX.js";import"./Badge-BRa1hh1O.js";const c=`<!-- @license CC0-1.0 -->

# Page Menu

A small set of links for use in the Header and Footer.

## Guidelines

- Limit the amount of menu items in the Header to 5 items or less, including ‘Search’ and ‘Menu’.
- The menu should fit on a single line and is right-aligned.
- The menu in the footer is left-aligned.
- Submenus are not allowed.
- The ‘Menu’ button opens the Mega Menu.
- On narrow screens, menu items other than ‘Search’ and ‘Menu’ move from the Page Menu to the Mega Menu.

## Relevant WCAG Requirements

- [Consistent Navigation (Level AA)](https://www.w3.org/WAI/WCAG21/Understanding/consistent-navigation.html)

PageMenu is an interactive element, and the [general requirements and guidelines for interactive elements](/docs/docs-design-guidelines-interactive-elements--docs) apply.
`;function s(t){const n={a:"a",h2:"h2",h3:"h3",p:"p",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:h}),`
`,e.jsx(u,{statusReason:"Will possibly be split into two components."}),`
`,e.jsx(a,{children:c}),`
`,e.jsx(m,{}),`
`,e.jsx(l,{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"alignment",children:"Alignment"}),`
`,e.jsxs(n.p,{children:["In the ",e.jsx(n.a,{href:"?path=/docs/components-containers-header--docs",children:"Header"}),", the menu aligns to the end of the line."]}),`
`,e.jsx(o,{of:d}),`
`,e.jsx(n.h3,{id:"wrapping",children:"Wrapping"}),`
`,e.jsxs(n.p,{children:[`If all menu items do not fit on a single line, e.g. on a narrow screen or with zoomed-in text, they wrap to new lines.
This is often useful in the `,e.jsx(n.a,{href:"?path=/docs/components-containers-footer--docs",children:"Footer"}),`.
The Header has its own responsive behaviour; its Page Menu should be configured not to wrap.`]}),`
`,e.jsx(o,{of:p})]})}function H(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{H as default};
