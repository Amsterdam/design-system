import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as s}from"./index-1Ha5aU2j.js";import{M as r,e as a,P as d,f as h,h as i}from"./index-zJjpjrR6.js";import{P as l,A as m,W as c}from"./PageMenu.stories-N1yiX3lV.js";import{S as u}from"./StatusBadge-BqUNxUUi.js";import"./index-yBjzXJbu.js";import"./index-C0MU9AHG.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CCbIw4CR.js";import"./index-IE9ObSwG.js";import"./index-Cu4lwwaE.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index.esm-DvoLfDtE.js";import"./clsx-B-dksMZM.js";import"./Icon-plsGHcLz.js";import"./Badge-CXuM8o0u.js";const p=`<!-- @license CC0-1.0 -->

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
`;/*@license CC0-1.0*/function o(t){const n={a:"a",h2:"h2",h3:"h3",p:"p",...s(),...t.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(r,{of:l}),`
`,e.jsx(u,{description:"Will be affected by changes to Header and/or have its name changed."}),`
`,e.jsx(a,{children:p}),`
`,e.jsx(d,{}),`
`,e.jsx(h,{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"alignment",children:"Alignment"}),`
`,e.jsxs(n.p,{children:["In the ",e.jsx(n.a,{href:"/docs/components-containers-header--docs",children:"Header"}),", the menu aligns to the end of the line."]}),`
`,e.jsx(i,{of:m}),`
`,e.jsx(n.h3,{id:"wrapping",children:"Wrapping"}),`
`,e.jsxs(n.p,{children:[`If all menu items do not fit on a single line, e.g. on a narrow screen or with zoomed-in text, they wrap to new lines.
This is often useful in the `,e.jsx(n.a,{href:"/docs/components-containers-footer--docs",children:"Footer"}),`.
The Header has its own responsive behaviour; its Page Menu should be configured not to wrap.`]}),`
`,e.jsx(i,{of:c})]})}function D(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{D as default};
