import{j as e}from"./iframe-B1iQYuQV.js";import{useMDXComponents as a}from"./index-Bs17nkyN.js";import{M as l,f as r,P as c,i as o,h}from"./blocks-DEECHWdC.js";import{L as d,W as m,C as p,S as u,a as s,b as x,I as f}from"./LinkList.stories-CeX4o_11.js";import{D as g}from"./DesignTokensTable-BzJdFZn4.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Q90rDcHh.js";import"./exampleContent-Du2yH2Fl.js";import"./LinkList-CVSIkyr9.js";import"./Icon-B4TXoSyh.js";import"./ColorSample-C26Sv3Sp.js";const k=`<!-- @license CC0-1.0 -->

# Link List

A collection of related links.

## Design

Every list item starts with a chevron.
It emphasizes the list structure and thematic coherence.
The chevron is part of the link.
Therefore, it is blue and clickable.

## Guidelines

- Use a Link List to present multiple links within a theme.
- For additional guidelines, refer to the [Link](/docs/components-navigation-link--docs) component.
`,y={"link-list":{gap:{$value:"{ams.space.s}",$extensions:{"ams.type":"gap"}},link:{color:{$value:"{ams.links.color}",$type:"color"},"font-family":{$value:"{ams.typography.font-family}",$type:"fontFamily"},"font-size":{$value:"{ams.typography.body-text.font-size}",$extensions:{"ams.type":"fontSize"}},"font-weight":{$value:"{ams.typography.body-text.font-weight}",$type:"fontWeight"},gap:{$value:"{ams.space.s}",$extensions:{"ams.type":"gap"}},"line-height":{$value:"{ams.typography.body-text.line-height}",$type:"number"},"outline-offset":{$value:"{ams.focus.outline-offset}",$extensions:{"ams.type":"outlineOffset"}},"text-decoration-line":{$value:"{ams.links.subtle.text-decoration-line}",$extensions:{"ams.type":"textDecorationLine"}},"text-decoration-thickness":{$value:"{ams.links.text-decoration-thickness}",$extensions:{"ams.type":"textDecorationThickness"}},"text-underline-offset":{$value:"{ams.links.text-underline-offset}",$extensions:{"ams.type":"textUnderlineOffset"}},small:{"font-size":{$value:"{ams.typography.body-text.small.font-size}",$extensions:{"ams.type":"fontSize"}},"line-height":{$value:"{ams.typography.body-text.small.line-height}",$type:"number"}},large:{"font-size":{$value:"{ams.typography.body-text.large.font-size}",$extensions:{"ams.type":"fontSize"}},"line-height":{$value:"{ams.typography.body-text.large.line-height}",$type:"number"}},hover:{color:{$value:"{ams.links.hover.color}",$type:"color"},"text-decoration-line":{$value:"{ams.links.subtle.hover.text-decoration-line}",$extensions:{"ams.type":"textDecorationLine"}}},contrast:{color:{$value:"{ams.links.contrast.color}",$type:"color"},hover:{color:{$value:"{ams.links.contrast.hover.color}",$type:"color"}}},inverse:{color:{$value:"{ams.links.inverse.color}",$type:"color"},hover:{color:{$value:"{ams.links.inverse.hover.color}",$type:"color"}}}}}},v={ams:y};function i(t){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",...a(),...t.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,`
`,`
`,e.jsx(l,{of:d}),`
`,e.jsx(r,{children:k}),`
`,e.jsx(c,{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"with-heading",children:"With heading"}),`
`,e.jsxs(n.p,{children:["A list of links often appears in a block with a ",e.jsx(n.a,{href:"/docs/components-text-heading--docs",children:"Heading"}),`.
Use a size of ‘level-3’ for the Heading and add a small bottom margin.`]}),`
`,e.jsx(o,{of:m}),`
`,e.jsx(n.h3,{id:"custom-icons",children:"Custom icons"}),`
`,e.jsx(n.p,{children:`Replace the list icon with a more meaningful one to help understand a link more quickly or easily.
Avoid using both semantic and list icons in the same list.`}),`
`,e.jsx(o,{of:p}),`
`,e.jsx(n.h3,{id:"small-text",children:"Small text"}),`
`,e.jsx(n.p,{children:`We use a smaller font size for text in a Figure Caption and for metadata like dates or categories.
When using a list in small text, set the prop for each item in the list.`}),`
`,e.jsx(o,{of:u}),`
`,e.jsx(n.h3,{id:"link",children:"Link"}),`
`,e.jsxs(n.p,{children:[`This example of a single link allows using the controls below.
The Link List Link renders both the `,e.jsx(n.code,{children:"<li>"})," and ",e.jsx(n.code,{children:"<a>"}),` elements.
Any attributes and the `,e.jsx(n.code,{children:"ref"})," are passed on to the ",e.jsx(n.code,{children:"<a>"})," element."]}),`
`,e.jsx(o,{of:s}),`
`,e.jsx(h,{of:s}),`
`,e.jsx(n.h3,{id:"on-a-coloured-background",children:"On a coloured background"}),`
`,e.jsxs(n.p,{children:["A Link on a coloured background must set ",e.jsx(n.a,{href:"?path=/docs/brand-design-tokens-colour--docs#pairing-foreground-with-background-colours",children:"the correct text colour"}),` to provide enough contrast.
We have lighter and darker background colours, and links behave differently on each.`]}),`
`,e.jsx(n.h4,{id:"contrast-colour",children:"Contrast colour"}),`
`,e.jsx(n.p,{children:`Use the contrast colour on a lime, orange or yellow background.
It will make the Link black.`}),`
`,e.jsx(o,{of:x}),`
`,e.jsx(n.h4,{id:"inverse-colour",children:"Inverse colour"}),`
`,e.jsx(n.p,{children:`Use the inverse colour on an azure, blue, green, magenta or purple background.
It will make the Link white.`}),`
`,e.jsx(o,{of:f}),`
`,e.jsx(n.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsx(g,{tokens:v})]})}function S(t={}){const{wrapper:n}={...a(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{S as default};
