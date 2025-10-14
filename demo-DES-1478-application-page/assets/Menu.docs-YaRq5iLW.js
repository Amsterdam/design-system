import{j as e}from"./iframe-C1YDCPUn.js";import{useMDXComponents as r}from"./index-DmzxMFZe.js";import{M as h,c as d,P as c,e as i,f as o}from"./blocks-Cz9pyo0Y.js";import{M as l,I as m,L as a}from"./Menu.stories-BxF08ypS.js";import{S as p}from"./StatusBadge-B_X2LRED.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CGVX0Q1-.js";import"./Icon-CI3Op71E.js";import"./Badge-PHFFAUPZ.js";const f=`<!-- @license CC0-1.0 -->

# Menu

A primary navigation leading to key areas of an application or website.

## Design

- The menu has a blue background.
  Links have a white icon and a label.
- In a narrow window, the menu occupies the full width.
  The icon and label of the link sit next to each other.
- In a wide window, the menu has a maximum width of 8rem.
  It adds whitespace at the top to align with the baseline of Page Header.
  The icon is larger and positioned above the label.

## Guidelines

- Include this component twice: one in the Page Header and one to the side of the Page.
  Do not use it anywhere else.
- Set the \`inWideWindow\` prop to the latter to ensure only one of them is visible, and to get the correct appearance.
- Use filled icons for the links.

Note that the appearance of these examples in Storybook are affected by the width of your screen.
Some invisible inline styles ensures they are visible and (mostly) correct.
`;/*@license CC0-1.0*/function s(n){const t={h2:"h2",h3:"h3",...r(),...n.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,`
`,e.jsx(p,{description:"We’re experimenting with this component; feedback is welcome. Expect changes in future iterations.",status:"beta"}),`
`,e.jsx(h,{of:l}),`
`,e.jsx(d,{children:f}),`
`,e.jsx(c,{}),`
`,e.jsx(i,{}),`
`,e.jsx(t.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(t.h3,{id:"in-wide-window",children:"In wide window"}),`
`,e.jsx(o,{of:m}),`
`,e.jsx(t.h3,{id:"link",children:"Link"}),`
`,e.jsx(o,{of:a}),`
`,e.jsx(i,{of:a})]})}function v(n={}){const{wrapper:t}={...r(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}export{v as default};
