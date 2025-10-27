import{j as e}from"./iframe-MmeX48u9.js";import{useMDXComponents as s}from"./index-D9SzsNR6.js";import{M as r,c as h,P as c,e as o,f as d}from"./blocks-B3j6F6c-.js";import{M as l,L as i}from"./Menu.stories-tHFFUxxr.js";import{S as p}from"./StatusBadge-B8SKEw7M.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Pw9NMeS4.js";import"./useIsAfterBreakpoint-BZNHpolY.js";import"./Icon-D3RWFMAp.js";import"./Badge-CGWjDY9M.js";const m=`<!-- @license CC0-1.0 -->

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
`;/*@license CC0-1.0*/function a(t){const n={h2:"h2",h3:"h3",p:"p",strong:"strong",...s(),...t.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,`
`,e.jsx(p,{description:"We’re experimenting with this component; feedback is welcome. Expect changes in future iterations.",status:"beta"}),`
`,e.jsx(r,{of:l}),`
`,e.jsx(h,{children:m}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note"}),`: This component is responsive.
The appearance of the examples depends on the width of your screen.
On the page for the Story, you can change the size of the preview with the related button in the toolbar.`]}),`
`,e.jsx(c,{}),`
`,e.jsx(o,{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"link",children:"Link"}),`
`,e.jsx(d,{of:i}),`
`,e.jsx(o,{of:i})]})}function v(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(a,{...t})}):a(t)}export{v as default};
