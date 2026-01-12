import{j as e}from"./iframe-BaUwxCZl.js";import{useMDXComponents as a}from"./index-DT8EWbKi.js";import{M as l,f as r,P as d,h as o,i as m}from"./blocks-CZ3PMVOZ.js";import{a as p,L as s}from"./Menu.stories-12E6lbS_.js";import{D as c}from"./DesignTokensTable-CXEFAGMk.js";import{S as h}from"./StatusBadge-CmtsaGzk.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CQaJWg6X.js";import"./useIsAfterBreakpoint-Cu7YWshI.js";import"./Icon-BuTR6bmd.js";import"./BorderSample-C_ASJ1Bz.js";import"./formatTokenValue-BYjgZrXg.js";import"./ColorSample-omcdFyU3.js";import"./Badge-BzCgy7C3.js";const u=`<!-- @license CC0-1.0 -->

# Menu

A primary navigation leading to key areas of a website.

## Design

- The menu has a blue background.
  Links have a white icon and a label.
- In a narrow window, the menu occupies the full width.
  The icon and label of the link sit next to each other.
- In a wide window, the menu has a maximum width of 8rem.
  It adds whitespace at the top to align with the baseline of Page Header.
  The icon is larger and positioned above the label.

## Guidelines

- This component must not be used for public websites.
  They should offer navigation using the Page Header only.
- This component must only be used in [Compact Mode](/docs/docs-developer-guide-modes--docs).
- Include this component twice: one in the Page Header and one to the side of the Page.
  Do not use it anywhere else.
- Set the \`inWideWindow\` prop to the latter to ensure only one of them is visible, and to get the correct appearance.
- Use filled icons for the links.
`,f={menu:{"background-color":{$value:"{ams.color.interactive.default}",$type:"color"},"font-family":{$value:"{ams.typography.font-family}",$type:"fontFamily"},"font-size":{$value:"{ams.typography.body-text.font-size}",$extensions:{"amsterdam.designsystem.type":"fontSize"}},"font-weight":{$value:"{ams.typography.body-text.font-weight}",$type:"fontWeight"},"line-height":{$value:"{ams.typography.body-text.line-height}",$extensions:{"amsterdam.designsystem.type":"lineHeight"}},"padding-block":{$value:"{ams.space.m}",$type:"dimension"},wide:{"max-inline-size":{$value:{value:8,unit:"rem"},$type:"dimension"},"padding-block":{$value:"calc({ams.logo.block-size} + 2 * {ams.page-header.padding-block}) {ams.space.m}",$type:"dimension"},"padding-inline":{$value:"{ams.space.s}",$type:"dimension"}},link:{color:{$value:"{ams.links.inverse.color}",$type:"color"},gap:{$value:"{ams.space.s}",$type:"dimension"},"outline-offset":{$value:"{ams.focus.outline-offset}",$type:"dimension"},"padding-block":{$value:"{ams.space.s}",$type:"dimension"},"padding-inline":{$value:"{ams.space.s}",$type:"dimension"},"text-decoration-line":{$value:"{ams.links.subtle.text-decoration-line}"},"text-decoration-thickness":{$value:"{ams.links.text-decoration-thickness}",$type:"dimension"},"text-underline-offset":{$value:"{ams.links.text-underline-offset}",$type:"dimension"},hover:{color:{$value:"{ams.links.inverse.hover.color}",$type:"color"},"text-decoration-line":{$value:"{ams.links.subtle.hover.text-decoration-line}"}},wide:{gap:{$value:"{ams.space.xs}",$type:"dimension"}}},list:{gap:{$value:"{ams.space.m}",$type:"dimension"}}}},g={ams:f};function i(t){const n={a:"a",h2:"h2",h3:"h3",p:"p",strong:"strong",...a(),...t.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,`
`,`
`,e.jsx(h,{description:"We’re experimenting with this component; feedback is welcome. Expect changes in future iterations.",status:"beta"}),`
`,e.jsx(l,{of:p}),`
`,e.jsx(r,{children:u}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note"}),`: This component is responsive.
The appearance of the examples depends on the width of your screen.
On the page for the Story, you can change the size of the preview with the related button in the toolbar.`]}),`
`,e.jsx(d,{}),`
`,e.jsx(o,{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsxs(n.p,{children:["See the ",e.jsx(n.a,{href:"/story/pages-internal-home-page--default",children:"Internal Home Page"})," template for a full-page example."]}),`
`,e.jsx(n.h3,{id:"link",children:"Link"}),`
`,e.jsxs(n.p,{children:["Each link in the Menu can be given a target url, a label and one of our ",e.jsx(n.a,{href:"/docs/brand-assets-icons--docs",children:"icons"}),`.
Use the filled variant.`]}),`
`,e.jsx(m,{of:s}),`
`,e.jsx(o,{of:s}),`
`,e.jsx(n.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsx(c,{tokens:g})]})}function z(t={}){const{wrapper:n}={...a(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{z as default};
