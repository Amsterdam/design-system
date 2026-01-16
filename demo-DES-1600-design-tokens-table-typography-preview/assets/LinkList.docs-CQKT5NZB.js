import{j as e}from"./iframe-uaZW1QRj.js";import{useMDXComponents as a}from"./index-CcoSkRW6.js";import{M as r,f as l,P as c,i as s,h as d}from"./blocks-DB728Lbc.js";import{L as h,W as m,C as p,S as u,a as o,b as x,I as g}from"./LinkList.stories-BrSHUFuK.js";import{D as y}from"./DesignTokensTable-BfPc17Y0.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C5Z1rLbs.js";import"./exampleContent-Du2yH2Fl.js";import"./LinkList-5A99PZrP.js";import"./Icon-CO4S4skG.js";import"./BorderSample-Cn7Ls_0h.js";import"./formatTokenValue-BYjgZrXg.js";import"./ColorSample-CWG4oLre.js";import"./SpaceSample-CfJsOf7z.js";import"./TypographySample-CWwRv-Hs.js";const f=`<!-- @license CC0-1.0 -->

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
`,k={"link-list":{gap:{$value:"{ams.space.s}",$type:"dimension",$extensions:{"amsterdam.designsystem.subtype":"space"}},link:{color:{$value:"{ams.links.color}",$type:"color"},"font-family":{$value:"{ams.typography.font-family}",$type:"fontFamily"},"font-size":{$value:"{ams.typography.body-text.font-size}",$extensions:{"amsterdam.designsystem.type":"fontSize"}},"font-weight":{$value:"{ams.typography.body-text.font-weight}",$type:"fontWeight"},gap:{$value:"{ams.space.s}",$type:"dimension",$extensions:{"amsterdam.designsystem.subtype":"space"}},"line-height":{$value:"{ams.typography.body-text.line-height}",$extensions:{"amsterdam.designsystem.type":"lineHeight"}},"outline-offset":{$value:"{ams.focus.outline-offset}",$type:"dimension",$extensions:{"amsterdam.designsystem.subtype":"space"}},"text-decoration-line":{$value:"{ams.links.subtle.text-decoration-line}"},"text-decoration-thickness":{$value:"{ams.links.text-decoration-thickness}",$type:"dimension"},"text-underline-offset":{$value:"{ams.links.text-underline-offset}",$type:"dimension",$extensions:{"amsterdam.designsystem.subtype":"space"}},small:{"font-size":{$value:"{ams.typography.body-text.small.font-size}",$extensions:{"amsterdam.designsystem.type":"fontSize"}},"line-height":{$value:"{ams.typography.body-text.small.line-height}",$extensions:{"amsterdam.designsystem.type":"lineHeight"}}},large:{"font-size":{$value:"{ams.typography.body-text.large.font-size}",$extensions:{"amsterdam.designsystem.type":"fontSize"}},"line-height":{$value:"{ams.typography.body-text.large.line-height}",$extensions:{"amsterdam.designsystem.type":"lineHeight"}}},hover:{color:{$value:"{ams.links.hover.color}",$type:"color"},"text-decoration-line":{$value:"{ams.links.subtle.hover.text-decoration-line}"}},contrast:{color:{$value:"{ams.links.contrast.color}",$type:"color"},hover:{color:{$value:"{ams.links.contrast.hover.color}",$type:"color"}}},inverse:{color:{$value:"{ams.links.inverse.color}",$type:"color"},hover:{color:{$value:"{ams.links.inverse.hover.color}",$type:"color"}}}}}},v={ams:k};function i(t){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",...a(),...t.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,`
`,`
`,e.jsx(r,{of:h}),`
`,e.jsx(l,{children:f}),`
`,e.jsx(c,{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"with-heading",children:"With heading"}),`
`,e.jsxs(n.p,{children:["A list of links often appears in a block with a ",e.jsx(n.a,{href:"/docs/components-text-heading--docs",children:"Heading"}),`.
Use a size of ‘level-3’ for the Heading and add a small bottom margin.`]}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(n.h3,{id:"custom-icons",children:"Custom icons"}),`
`,e.jsx(n.p,{children:`Replace the list icon with a more meaningful one to help understand a link more quickly or easily.
Avoid using both semantic and list icons in the same list.`}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(n.h3,{id:"small-text",children:"Small text"}),`
`,e.jsx(n.p,{children:`We use a smaller font size for text in a Figure Caption and for metadata like dates or categories.
When using a list in small text, set the prop for each item in the list.`}),`
`,e.jsx(s,{of:u}),`
`,e.jsx(n.h3,{id:"link",children:"Link"}),`
`,e.jsxs(n.p,{children:[`This example of a single link allows using the controls below.
The Link List Link renders both the `,e.jsx(n.code,{children:"<li>"})," and ",e.jsx(n.code,{children:"<a>"}),` elements.
Any attributes and the `,e.jsx(n.code,{children:"ref"})," are passed on to the ",e.jsx(n.code,{children:"<a>"})," element."]}),`
`,e.jsx(s,{of:o}),`
`,e.jsx(d,{of:o}),`
`,e.jsx(n.h3,{id:"on-a-coloured-background",children:"On a coloured background"}),`
`,e.jsxs(n.p,{children:["A Link on a coloured background must set ",e.jsx(n.a,{href:"?path=/docs/brand-design-tokens-colour--docs#pairing-foreground-with-background-colours",children:"the correct text colour"}),` to provide enough contrast.
We have lighter and darker background colours, and links behave differently on each.`]}),`
`,e.jsx(n.h4,{id:"contrast-colour",children:"Contrast colour"}),`
`,e.jsx(n.p,{children:`Use the contrast colour on a lime, orange or yellow background.
It will make the Link black.`}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(n.h4,{id:"inverse-colour",children:"Inverse colour"}),`
`,e.jsx(n.p,{children:`Use the inverse colour on an azure, blue, green, magenta or purple background.
It will make the Link white.`}),`
`,e.jsx(s,{of:g}),`
`,e.jsx(n.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsx(y,{tokens:v})]})}function E(t={}){const{wrapper:n}={...a(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{E as default};
