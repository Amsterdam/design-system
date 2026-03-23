import{j as e}from"./iframe-CKI2e_O3.js";import{useMDXComponents as i}from"./index-DnGgErAA.js";import{M as r,e as l,f as d,h as s,i as m}from"./blocks-D3H3pWKp.js";import{a as c,L as t}from"./Menu.stories-DQEjynMR.js";import{D as p}from"./DesignTokensTable-Blyjq_Ja.js";import{S as h}from"./StatusBadge-D7UFOv5B.js";import"./preload-helper-PPVm8Dsz.js";import"./index-fQxN8fVz.js";import"./useViewportHasMinWidth-DNpF0Q6V.js";import"./Icon-CBqdvJjm.js";import"./BorderSample-ptIgaaxC.js";import"./formatTokenValue-BYjgZrXg.js";import"./Code-_wgWWEQK.js";import"./ColorSample-B2GnH9eS.js";import"./SpaceSample-BscyOXls.js";import"./TypographySample-mWOyxWgu.js";import"./Badge-CNkjf95C.js";const u=`<!-- @license CC0-1.0 -->

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
`,g={menu:{"background-color":{$value:"{ams.color.interactive.default}",$type:"color"},"font-family":{$value:"{ams.typography.font-family}",$type:"fontFamily"},"font-size":{$value:"{ams.typography.body-text.font-size}",$extensions:{"nl.amsterdam.type":"fontSize"}},"font-weight":{$value:"{ams.typography.body-text.font-weight}",$type:"fontWeight"},"line-height":{$value:"{ams.typography.body-text.line-height}",$extensions:{"nl.amsterdam.type":"lineHeight"}},"padding-block":{$value:"{ams.space.m}",$type:"dimension",$extensions:{"nl.amsterdam.subtype":"space"}},wide:{"max-inline-size":{$value:{value:8,unit:"rem"},$type:"dimension"},"padding-block":{$value:"calc({ams.logo.block-size} + 2 * {ams.page-header.padding-block}) {ams.space.m}",$type:"dimension",$extensions:{"nl.amsterdam.subtype":"space"}},"padding-inline":{$value:"{ams.space.s}",$type:"dimension",$extensions:{"nl.amsterdam.subtype":"space"}}},link:{color:{$value:"{ams.links.inverse.color}",$type:"color"},contrast:{color:{$deprecated:"The menu has a dark background now, so this is no longer needed. Will be removed in release 4.0.0.",$value:"{ams.links.contrast.color}",$type:"color"},hover:{color:{$deprecated:"The menu has a dark background now, so this is no longer needed. Will be removed in release 4.0.0.",$value:"{ams.links.contrast.hover.color}",$type:"color"}}},inverse:{color:{$deprecated:"The menu has a dark background now, so this is no longer needed. Will be removed in release 4.0.0.",$value:"{ams.links.inverse.color}",$type:"color"},hover:{color:{$deprecated:"The menu has a dark background now, so this is no longer needed. Will be removed in release 4.0.0.",$value:"{ams.links.inverse.hover.color}",$type:"color"}}},gap:{$value:"{ams.space.s}",$type:"dimension",$extensions:{"nl.amsterdam.subtype":"space"}},"outline-offset":{$value:"{ams.focus.outline-offset}",$type:"dimension",$extensions:{"nl.amsterdam.subtype":"space"}},"padding-block":{$value:"{ams.space.s}",$type:"dimension",$extensions:{"nl.amsterdam.subtype":"space"}},"padding-inline":{$value:"{ams.space.s}",$type:"dimension",$extensions:{"nl.amsterdam.subtype":"space"}},"text-decoration-line":{$value:"{ams.links.subtle.text-decoration-line}"},"text-decoration-thickness":{$value:"{ams.links.text-decoration-thickness}",$type:"dimension"},"text-underline-offset":{$value:"{ams.links.text-underline-offset}",$type:"dimension",$extensions:{"nl.amsterdam.subtype":"space"}},hover:{color:{$value:"{ams.links.inverse.hover.color}",$type:"color"},"text-decoration-line":{$value:"{ams.links.subtle.hover.text-decoration-line}"}},wide:{gap:{$value:"{ams.space.xs}",$type:"dimension",$extensions:{"nl.amsterdam.subtype":"space"}}}},list:{gap:{$value:"{ams.space.m}",$type:"dimension",$extensions:{"nl.amsterdam.subtype":"space"}}}}},$={ams:g};function a(o){const n={a:"a",h2:"h2",h3:"h3",p:"p",strong:"strong",...i(),...o.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,`
`,`
`,e.jsx(h,{description:"We’re experimenting with this component; feedback is welcome. Expect changes in future iterations.",status:"beta"}),`
`,e.jsx(r,{of:c}),`
`,e.jsx(l,{children:u}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note"}),`: This component is responsive.
The appearance of the examples depends on the width of your screen.
On the page for the Story, you can change the size of the preview with the related button in the toolbar.`]}),`
`,e.jsx(d,{}),`
`,e.jsx(s,{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsxs(n.p,{children:["See the ",e.jsx(n.a,{href:"/story/pages-internal-home-page--default",children:"Internal Home Page"})," template for a full-page example."]}),`
`,e.jsx(n.h3,{id:"link",children:"Link"}),`
`,e.jsxs(n.p,{children:["Each link in the Menu can be given a target url, a label and one of our ",e.jsx(n.a,{href:"/docs/brand-assets-icons--docs",children:"icons"}),`.
Use the filled variant.`]}),`
`,e.jsx(m,{of:t}),`
`,e.jsx(s,{of:t}),`
`,e.jsx(n.h2,{id:"design-tokens",children:"Design tokens"}),`
`,e.jsx(p,{tokens:$})]})}function H(o={}){const{wrapper:n}={...i(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(a,{...o})}):a(o)}export{H as default};
