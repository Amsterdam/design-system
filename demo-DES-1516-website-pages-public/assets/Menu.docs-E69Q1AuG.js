import{j as e}from"./iframe-B2tg4AFe.js";import{useMDXComponents as s}from"./index-Dm0hevZf.js";import{M as r,f as h,P as l,h as o,i as c}from"./blocks-sy0QxjJf.js";import{a as d,L as a}from"./Menu.stories-xbzVFf9e.js";import{S as p}from"./StatusBadge-B3f4ReqM.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DLVTDTx0.js";import"./useIsAfterBreakpoint-BgzWAOEM.js";import"./Icon-CE3ssVpq.js";import"./Badge-De28Tvjk.js";const m=`<!-- @license CC0-1.0 -->

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

- This component must not be used on public websites or applications.
  They should offer navigation using the Page Header only.
- Include this component twice: one in the Page Header and one to the side of the Page.
  Do not use it anywhere else.
- Set the \`inWideWindow\` prop to the latter to ensure only one of them is visible, and to get the correct appearance.
- Use filled icons for the links.
`;/*@license CC0-1.0*/function i(t){const n={a:"a",h2:"h2",h3:"h3",p:"p",strong:"strong",...s(),...t.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,`
`,e.jsx(p,{description:"We’re experimenting with this component; feedback is welcome. Expect changes in future iterations.",status:"beta"}),`
`,e.jsx(r,{of:d}),`
`,e.jsx(h,{children:m}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note"}),`: This component is responsive.
The appearance of the examples depends on the width of your screen.
On the page for the Story, you can change the size of the preview with the related button in the toolbar.`]}),`
`,e.jsx(l,{}),`
`,e.jsx(o,{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsxs(n.p,{children:["See the ",e.jsx(n.a,{href:"/story/pages-internal-home-page--default",children:"Internal Home Page"})," template for a full-page example."]}),`
`,e.jsx(n.h3,{id:"link",children:"Link"}),`
`,e.jsxs(n.p,{children:["Each link in the Menu can be given a target url, a label and one of our ",e.jsx(n.a,{href:"/docs/brand-assets-icons--docs",children:"icons"}),`.
Use the filled variant.`]}),`
`,e.jsx(c,{of:a}),`
`,e.jsx(o,{of:a})]})}function v(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{v as default};
