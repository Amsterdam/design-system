import{j as n}from"./iframe-CQoBVDPU.js";import{useMDXComponents as s}from"./index-v9Atgahv.js";import{M as i,f as r,P as l,h as c,i as t}from"./blocks-C_wYJb-M.js";import{a as d,W as h,b as m,C as u,I as p}from"./StandaloneLink.stories-ChgXp7hE.js";import{D as g}from"./DesignTokensTable-DUPokiJG.js";import"./preload-helper-PPVm8Dsz.js";import"./index-_-KlFldO.js";import"./Icon-B5w4s-iY.js";import"./BorderSample-DOcpRoeg.js";import"./ColorSample-CvZdDN3A.js";const k=`<!-- @license CC0-1.0 -->

# Standalone Link

A navigation element that is separated from the text around it.

The Standalone Link has a chevron icon at the start to signify that it is a link.
This also makes it visually identical to a single link in a [Link List](/docs/components-navigation-link--docs).
As a result, pages can have sections with either one or several links used interchangeably; they look alike, and their semantics are correct.

## Guidelines

- Use a Standalone Link for a single link on its own line of text.
- Within running body text, use a regular Link instead.
- For additional guidelines, refer to the [Link](/docs/components-navigation-link--docs) component.
`,f={"standalone-link":{color:{$value:"{ams.links.color}",$type:"color"},"column-gap":{$value:"{ams.space.s}",$type:"dimension"},"font-family":{$value:"{ams.typography.font-family}",$type:"fontFamily"},"font-size":{$value:"{ams.typography.body-text.font-size}",$extensions:{"amsterdam.designsystem.type":"fontSize"}},"font-weight":{$value:"{ams.typography.body-text.font-weight}",$type:"fontWeight"},"line-height":{$value:"{ams.typography.body-text.line-height}",$extensions:{"amsterdam.designsystem.type":"lineHeight"}},"outline-offset":{$value:"{ams.focus.outline-offset}",$type:"dimension"},"text-decoration-line":{$value:"{ams.links.subtle.text-decoration-line}"},"text-decoration-thickness":{$value:"{ams.links.text-decoration-thickness}",$type:"dimension"},"text-underline-offset":{$value:"{ams.links.text-underline-offset}",$type:"dimension"},hover:{color:{$value:"{ams.links.hover.color}",$type:"color"},"text-decoration-line":{$value:"{ams.links.subtle.hover.text-decoration-line}"}},contrast:{color:{$value:"{ams.links.contrast.color}",$type:"color"},hover:{color:{$value:"{ams.links.contrast.hover.color}",$type:"color"}}},inverse:{color:{$value:"{ams.links.inverse.color}",$type:"color"},hover:{color:{$value:"{ams.links.inverse.hover.color}",$type:"color"}}}}},x={ams:f};function a(o){const e={a:"a",h2:"h2",h3:"h3",h4:"h4",p:"p",...s(),...o.components};return n.jsxs(n.Fragment,{children:[`
`,`
`,`
`,`
`,n.jsx(i,{of:d}),`
`,n.jsx(r,{children:k}),`
`,n.jsx(l,{}),`
`,n.jsx(c,{}),`
`,n.jsx(e.h2,{id:"examples",children:"Examples"}),`
`,n.jsx(e.h3,{id:"with-heading-and-paragraph",children:"With heading and paragraph"}),`
`,n.jsxs(e.p,{children:["A Standalone Link often appears in a block with a ",n.jsx(e.a,{href:"/docs/components-text-heading--docs",children:"Heading"})," and an introducing ",n.jsx(e.a,{href:"/docs/components-text-paragraph--docs",children:"Paragraph"}),` to lead to a follow-up page.
Use a size of ‘level-3’ for the Heading, add a small bottom margin, and a medium bottom margin to the Paragraph.`]}),`
`,n.jsx(t,{of:h}),`
`,n.jsx(e.h3,{id:"custom-icon",children:"Custom icon"}),`
`,n.jsx(e.p,{children:"If it helps understand the link, a different icon than the default chevron can be used."}),`
`,n.jsx(t,{of:m}),`
`,n.jsx(e.h3,{id:"on-a-coloured-background",children:"On a coloured background"}),`
`,n.jsxs(e.p,{children:["A Standalone Link on a coloured background must set ",n.jsx(e.a,{href:"?path=/docs/brand-design-tokens-colour--docs#pairing-foreground-with-background-colours",children:"the correct text colour"}),` to provide enough contrast.
We have lighter and darker background colours, and links behave differently on each.`]}),`
`,n.jsx(e.h4,{id:"contrast-colour",children:"Contrast colour"}),`
`,n.jsx(e.p,{children:`Use the contrast colour on a lime, orange or yellow background.
It will make the Standalone Link black.`}),`
`,n.jsx(t,{of:u}),`
`,n.jsx(e.h4,{id:"inverse-colour",children:"Inverse colour"}),`
`,n.jsx(e.p,{children:`Use the inverse colour on an azure, blue, green, magenta or purple background.
It will make the Standalone Link white.`}),`
`,n.jsx(t,{of:p}),`
`,n.jsx(e.h2,{id:"tokens",children:"Tokens"}),`
`,n.jsx(g,{tokens:x})]})}function I(o={}){const{wrapper:e}={...s(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(a,{...o})}):a(o)}export{I as default};
