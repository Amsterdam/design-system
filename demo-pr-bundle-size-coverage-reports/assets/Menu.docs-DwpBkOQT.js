import{n as e}from"./chunk-zsgVPwQN.js";import{t}from"./jsx-runtime-GmyBfqKJ.js";import{r as n}from"./react-RY8N8R-x.js";import{c as r,f as i,i as a,l as o,n as s,s as c}from"./blocks-BMurOIz2.js";import{n as l,t as u}from"./DesignTokensTable-DSDw7UkQ.js";import{n as d,t as f}from"./StatusBadge-ylmyXsvV.js";import{t as p}from"./mdx-react-shim-ynubY8I9.js";import{Link as m,n as h,t as g}from"./Menu.stories-ryYDUAbf.js";var _,v=e((()=>{_=`<!-- @license CC0-1.0 -->

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
`})),y,b,x=e((()=>{y={menu:{"background-color":{$value:`{ams.color.interactive.default}`,$extensions:{"nl.amsterdam.type":`color`}},"font-family":{$value:`{ams.typography.font-family}`,$extensions:{"nl.amsterdam.type":`fontFamily`}},"font-size":{$value:`{ams.typography.body-text.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"font-weight":{$value:`{ams.typography.body-text.font-weight}`,$extensions:{"nl.amsterdam.type":`fontWeight`}},"line-height":{$value:`{ams.typography.body-text.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}},"padding-block":{$value:`{ams.space.m}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},wide:{"max-inline-size":{$value:{value:8,unit:`rem`},$type:`dimension`},"padding-block":{$value:`calc({ams.logo.block-size} + 2 * {ams.page-header.padding-block}) {ams.space.m}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-inline":{$value:`{ams.space.s}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}},link:{color:{$value:`{ams.links.inverse.color}`,$extensions:{"nl.amsterdam.type":`color`}},gap:{$value:`{ams.space.s}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"outline-offset":{$value:`{ams.focus.outline-offset}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-block":{$value:`{ams.space.s}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-inline":{$value:`{ams.space.s}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"text-decoration-line":{$value:`{ams.links.subtle.text-decoration-line}`,$extensions:{"nl.amsterdam.type":`textDecorationLine`}},"text-decoration-thickness":{$value:`{ams.links.text-decoration-thickness}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"text-underline-offset":{$value:`{ams.links.text-underline-offset}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},hover:{color:{$value:`{ams.links.inverse.hover.color}`,$extensions:{"nl.amsterdam.type":`color`}},"text-decoration-line":{$value:`{ams.links.subtle.hover.text-decoration-line}`,$extensions:{"nl.amsterdam.type":`textDecorationLine`}}},wide:{gap:{$value:`{ams.space.xs}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}}},list:{gap:{$value:`{ams.space.m}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}}}},b={ams:y}}));function S(e){let t={a:`a`,h2:`h2`,h3:`h3`,p:`p`,strong:`strong`,...n(),...e.components};return(0,w.jsxs)(w.Fragment,{children:[`
`,`
`,`
`,`
`,(0,w.jsx)(f,{description:`We’re experimenting with this component; feedback is welcome. Expect changes in future iterations.`,status:`beta`}),`
`,(0,w.jsx)(r,{of:g}),`
`,(0,w.jsx)(c,{children:_}),`
`,(0,w.jsxs)(t.p,{children:[(0,w.jsx)(t.strong,{children:`Note`}),`: This component is responsive.
The appearance of the examples depends on the width of your screen.
On the page for the Story, you can change the size of the preview with the related button in the toolbar.`]}),`
`,(0,w.jsx)(o,{}),`
`,(0,w.jsx)(a,{}),`
`,(0,w.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,w.jsxs)(t.p,{children:[`See the `,(0,w.jsx)(t.a,{href:`/story/pages-internal-home-page--default`,children:`Internal Home Page`}),` template for a full-page example.`]}),`
`,(0,w.jsx)(t.h3,{id:`link`,children:`Link`}),`
`,(0,w.jsxs)(t.p,{children:[`Each link in the Menu can be given a target url, a label and one of our `,(0,w.jsx)(t.a,{href:`/docs/brand-assets-icons--docs`,children:`icons`}),`.
Use the filled variant.`]}),`
`,(0,w.jsx)(s,{of:m}),`
`,(0,w.jsx)(a,{of:m}),`
`,(0,w.jsx)(t.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,w.jsx)(u,{tokens:b})]})}function C(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,w.jsx)(t,{...e,children:(0,w.jsx)(S,{...e})}):S(e)}var w;e((()=>{w=t(),p(),i(),h(),v(),x(),l(),d()}))();export{C as default};