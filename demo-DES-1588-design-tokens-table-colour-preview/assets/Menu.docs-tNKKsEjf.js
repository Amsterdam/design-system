import{j as e}from"./iframe-Bu-IfFIy.js";import{useMDXComponents as i}from"./index-S8KVw5KA.js";import{M as l,f as r,P as p,h as s,i as c}from"./blocks-BqHkSdac.js";import{a as d,L as o}from"./Menu.stories-B-jja4Gs.js";import{D as m}from"./DesignTokensTable-Pm5N_49e.js";import{S as h}from"./StatusBadge-C8WRxPUg.js";import"./preload-helper-PPVm8Dsz.js";import"./index-WJRoYrJk.js";import"./useIsAfterBreakpoint-CD_8JG_4.js";import"./Icon-BvvBZ55Z.js";import"./ColorSample-YtXXmf0W.js";import"./Badge-DCGzhs3K.js";const u=`<!-- @license CC0-1.0 -->

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
`,f={menu:{"background-color":{$value:"{ams.color.interactive.default}",$type:"color"},"font-family":{$value:"{ams.typography.font-family}",$type:"fontFamily"},"font-size":{$value:"{ams.typography.body-text.font-size}",$extensions:{"ams.type":"fontSize"}},"font-weight":{$value:"{ams.typography.body-text.font-weight}",$type:"fontWeight"},"line-height":{$value:"{ams.typography.body-text.line-height}",$type:"number"},"padding-block":{$value:"{ams.space.m}",$extensions:{"ams.type":"paddingBlock"}},wide:{"max-inline-size":{$value:{value:8,unit:"rem"},$type:"dimension"},"padding-block":{$value:"calc({ams.logo.block-size} + 2 * {ams.page-header.padding-block}) {ams.space.m}",$extensions:{"ams.type":"paddingBlock"}},"padding-inline":{$value:"{ams.space.s}",$extensions:{"ams.type":"paddingInline"}}},link:{color:{$value:"{ams.links.inverse.color}",$type:"color"},gap:{$value:"{ams.space.s}",$extensions:{"ams.type":"gap"}},"outline-offset":{$value:"{ams.focus.outline-offset}",$extensions:{"ams.type":"outlineOffset"}},"padding-block":{$value:"{ams.space.s}",$extensions:{"ams.type":"paddingBlock"}},"padding-inline":{$value:"{ams.space.s}",$extensions:{"ams.type":"paddingInline"}},"text-decoration-line":{$value:"{ams.links.subtle.text-decoration-line}",$extensions:{"ams.type":"textDecorationLine"}},"text-decoration-thickness":{$value:"{ams.links.text-decoration-thickness}",$extensions:{"ams.type":"textDecorationThickness"}},"text-underline-offset":{$value:"{ams.links.text-underline-offset}",$extensions:{"ams.type":"textUnderlineOffset"}},hover:{color:{$value:"{ams.links.inverse.hover.color}",$type:"color"},"text-decoration-line":{$value:"{ams.links.subtle.hover.text-decoration-line}",$extensions:{"ams.type":"textDecorationLine"}}},wide:{gap:{$value:"{ams.space.xs}",$extensions:{"ams.type":"gap"}}}},list:{gap:{$value:"{ams.space.m}",$extensions:{"ams.type":"gap"}}}}},x={ams:f};function a(t){const n={a:"a",h2:"h2",h3:"h3",p:"p",strong:"strong",...i(),...t.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,`
`,`
`,e.jsx(h,{description:"We’re experimenting with this component; feedback is welcome. Expect changes in future iterations.",status:"beta"}),`
`,e.jsx(l,{of:d}),`
`,e.jsx(r,{children:u}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note"}),`: This component is responsive.
The appearance of the examples depends on the width of your screen.
On the page for the Story, you can change the size of the preview with the related button in the toolbar.`]}),`
`,e.jsx(p,{}),`
`,e.jsx(s,{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsxs(n.p,{children:["See the ",e.jsx(n.a,{href:"/story/pages-internal-home-page--default",children:"Internal Home Page"})," template for a full-page example."]}),`
`,e.jsx(n.h3,{id:"link",children:"Link"}),`
`,e.jsxs(n.p,{children:["Each link in the Menu can be given a target url, a label and one of our ",e.jsx(n.a,{href:"/docs/brand-assets-icons--docs",children:"icons"}),`.
Use the filled variant.`]}),`
`,e.jsx(c,{of:o}),`
`,e.jsx(s,{of:o}),`
`,e.jsx(n.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsx(m,{tokens:x})]})}function I(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(a,{...t})}):a(t)}export{I as default};
