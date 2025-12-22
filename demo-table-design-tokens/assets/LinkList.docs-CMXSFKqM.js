import{j as e}from"./iframe-Dha-7zTR.js";import{useMDXComponents as a}from"./index-CUuWwI6L.js";import{M as l,f as r,P as c,i as t,h}from"./blocks-C1WmRPMp.js";import{L as d,W as m,C as u,S as x,a as s,b as p,I as f}from"./LinkList.stories-CBs2HTqn.js";import{D as k}from"./DesignTokensTable-DH0a8p0G.js";import"./preload-helper-PPVm8Dsz.js";import"./index-fiaxSpfT.js";import"./exampleContent-Du2yH2Fl.js";import"./LinkList-tppl3Ktv.js";import"./Icon-B0BHIoDG.js";const g=`<!-- @license CC0-1.0 -->

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
`,v={"link-list":{gap:{value:"{ams.space.s}"},link:{color:{value:"{ams.links.color}"},"font-family":{value:"{ams.typography.font-family}"},"font-size":{value:"{ams.typography.body-text.font-size}"},"font-weight":{value:"{ams.typography.body-text.font-weight}"},gap:{value:"{ams.space.s}"},"line-height":{value:"{ams.typography.body-text.line-height}"},"outline-offset":{value:"{ams.focus.outline-offset}"},"text-decoration-line":{value:"{ams.links.subtle.text-decoration-line}"},"text-decoration-thickness":{value:"{ams.links.text-decoration-thickness}"},"text-underline-offset":{value:"{ams.links.text-underline-offset}"},small:{"font-size":{value:"{ams.typography.body-text.small.font-size}"},"line-height":{value:"{ams.typography.body-text.small.line-height}"}},large:{"font-size":{value:"{ams.typography.body-text.large.font-size}"},"line-height":{value:"{ams.typography.body-text.large.line-height}"}},hover:{color:{value:"{ams.links.hover.color}"},"text-decoration-line":{value:"{ams.links.subtle.hover.text-decoration-line}"}},contrast:{color:{value:"{ams.links.contrast.color}"},hover:{color:{value:"{ams.links.contrast.hover.color}"}}},inverse:{color:{value:"{ams.links.inverse.color}"},hover:{color:{value:"{ams.links.inverse.hover.color}"}}}}}},j={ams:v};function i(o){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",...a(),...o.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,`
`,`
`,e.jsx(l,{of:d}),`
`,e.jsx(r,{children:g}),`
`,e.jsx(c,{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"with-heading",children:"With heading"}),`
`,e.jsxs(n.p,{children:["A list of links often appears in a block with a ",e.jsx(n.a,{href:"/docs/components-text-heading--docs",children:"Heading"}),`.
Use a size of ‘level-3’ for the Heading and add a small bottom margin.`]}),`
`,e.jsx(t,{of:m}),`
`,e.jsx(n.h3,{id:"custom-icons",children:"Custom icons"}),`
`,e.jsx(n.p,{children:`Replace the list icon with a more meaningful one to help understand a link more quickly or easily.
Avoid using both semantic and list icons in the same list.`}),`
`,e.jsx(t,{of:u}),`
`,e.jsx(n.h3,{id:"small-text",children:"Small text"}),`
`,e.jsx(n.p,{children:`We use a smaller font size for text in a Figure Caption and for metadata like dates or categories.
When using a list in small text, set the prop for each item in the list.`}),`
`,e.jsx(t,{of:x}),`
`,e.jsx(n.h3,{id:"link",children:"Link"}),`
`,e.jsxs(n.p,{children:[`This example of a single link allows using the controls below.
The Link List Link renders both the `,e.jsx(n.code,{children:"<li>"})," and ",e.jsx(n.code,{children:"<a>"}),` elements.
Any attributes and the `,e.jsx(n.code,{children:"ref"})," are passed on to the ",e.jsx(n.code,{children:"<a>"})," element."]}),`
`,e.jsx(t,{of:s}),`
`,e.jsx(h,{of:s}),`
`,e.jsx(n.h3,{id:"on-a-coloured-background",children:"On a coloured background"}),`
`,e.jsxs(n.p,{children:["A Link on a coloured background must set ",e.jsx(n.a,{href:"?path=/docs/brand-design-tokens-colour--docs#pairing-foreground-with-background-colours",children:"the correct text colour"}),` to provide enough contrast.
We have lighter and darker background colours, and links behave differently on each.`]}),`
`,e.jsx(n.h4,{id:"contrast-colour",children:"Contrast colour"}),`
`,e.jsx(n.p,{children:`Use the contrast colour on a lime, orange or yellow background.
It will make the Link black.`}),`
`,e.jsx(t,{of:p}),`
`,e.jsx(n.h4,{id:"inverse-colour",children:"Inverse colour"}),`
`,e.jsx(n.p,{children:`Use the inverse colour on an azure, blue, green, magenta or purple background.
It will make the Link white.`}),`
`,e.jsx(t,{of:f}),`
`,e.jsx(n.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsx(k,{tokens:j})]})}function A(o={}){const{wrapper:n}={...a(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(i,{...o})}):i(o)}export{A as default};
