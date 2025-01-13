import{j as e}from"./jsx-runtime-z8MfsBtr.js";import{useMDXComponents as s}from"./index-BAvqEBP-.js";import{ae as r,aq as a,ar as d,as as h,at as o}from"./index-DN5t4iaf.js";import{P as m,A as l,W as c}from"./PageMenu.stories-0NlkiIdK.js";import{S as u}from"./StatusBadge-CVZX8jfg.js";import"./index-C9rmetsa.js";import"./index-D7uoVdV3.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-b4P9THbr.js";import"../sb-preview/runtime.js";import"./index-D-OUEn-9.js";import"./index-Cu4lwwaE.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";import"./index.esm-CKYHBquS.js";import"./clsx-B-dksMZM.js";import"./Icon-BoBhPfLP.js";import"./Badge-D8aH0uVX.js";const p=`<!-- @license CC0-1.0 -->

# Page Menu

A small set of links for use in the Header and Footer.

## Guidelines

- Limit the amount of menu items in the Header to 5 items or less, including ‘Search’ and ‘Menu’.
- The menu should fit on a single line and is right-aligned.
- The menu in the footer is left-aligned.
- Submenus are not allowed.
- The ‘Menu’ button opens the Mega Menu.
- On narrow screens, menu items other than ‘Search’ and ‘Menu’ move from the Page Menu to the Mega Menu.

### Using links with routing libraries

Check out the [developer guide](/docs/docs-developer-guide-routing-libraries--docs) on how to integrate links with external routing libraries.

## Relevant WCAG requirements

- [Consistent Navigation (Level AA)](https://www.w3.org/WAI/WCAG21/Understanding/consistent-navigation.html)

Page Menu is an interactive element, and the [general requirements and guidelines for interactivity](/docs/docs-developer-guide-interactivity--docs) apply.
`;/*@license CC0-1.0*/function i(t){const n={a:"a",h2:"h2",h3:"h3",p:"p",...s(),...t.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(r,{of:m}),`
`,e.jsx(u,{reason:"May be affected by changes to Header and/or have its name changed."}),`
`,e.jsx(a,{children:p}),`
`,e.jsx(d,{}),`
`,e.jsx(h,{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"alignment",children:"Alignment"}),`
`,e.jsxs(n.p,{children:["In the ",e.jsx(n.a,{href:"/docs/components-containers-header--docs",children:"Header"}),", the menu aligns to the end of the line."]}),`
`,e.jsx(o,{of:l}),`
`,e.jsx(n.h3,{id:"wrapping",children:"Wrapping"}),`
`,e.jsxs(n.p,{children:[`If all menu items do not fit on a single line, e.g. on a narrow screen or with zoomed-in text, they wrap to new lines.
This is often useful in the `,e.jsx(n.a,{href:"/docs/components-containers-footer--docs",children:"Footer"}),`.
The Header has its own responsive behaviour; its Page Menu should be configured not to wrap.`]}),`
`,e.jsx(o,{of:c})]})}function E(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{E as default};
