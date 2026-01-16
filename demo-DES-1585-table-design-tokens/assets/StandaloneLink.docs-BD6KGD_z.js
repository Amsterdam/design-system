import{j as e}from"./iframe-Cd9q0SQv.js";import{useMDXComponents as s}from"./index-DtFnfk79.js";import{M as i,f as r,P as l,h as c,i as t}from"./blocks-D0WMunrI.js";import{a as d,W as h,b as m,C as u,I as p}from"./StandaloneLink.stories-D_0fdKWp.js";import{D as g}from"./DesignTokensTable-5LMtpjNY.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cfc9Kapx.js";import"./Icon-BmL3jQ_w.js";import"./BorderSample-D0OE5R2I.js";import"./formatTokenValue-BYjgZrXg.js";import"./ColorSample-DfHOEL-p.js";import"./SpaceSample-VVSZhVFs.js";import"./TypographySample-BnFjBgXk.js";const x=`<!-- @license CC0-1.0 -->

# Standalone Link

A navigation element that is separated from the text around it.

The Standalone Link has a chevron icon at the start to signify that it is a link.
This also makes it visually identical to a single link in a [Link List](/docs/components-navigation-link--docs).
As a result, pages can have sections with either one or several links used interchangeably; they look alike, and their semantics are correct.

## Guidelines

- Use a Standalone Link for a single link on its own line of text.
- Within running body text, use a regular Link instead.
- For additional guidelines, refer to the [Link](/docs/components-navigation-link--docs) component.
`,k={"standalone-link":{color:{$value:"{ams.links.color}",$type:"color"},"column-gap":{$value:"{ams.space.s}",$type:"dimension",$extensions:{"amsterdam.designsystem.subtype":"space"}},"font-family":{$value:"{ams.typography.font-family}",$type:"fontFamily"},"font-size":{$value:"{ams.typography.body-text.font-size}",$extensions:{"amsterdam.designsystem.type":"fontSize"}},"font-weight":{$value:"{ams.typography.body-text.font-weight}",$type:"fontWeight"},"line-height":{$value:"{ams.typography.body-text.line-height}",$extensions:{"amsterdam.designsystem.type":"lineHeight"}},"outline-offset":{$value:"{ams.focus.outline-offset}",$type:"dimension",$extensions:{"amsterdam.designsystem.subtype":"space"}},"text-decoration-line":{$value:"{ams.links.subtle.text-decoration-line}"},"text-decoration-thickness":{$value:"{ams.links.text-decoration-thickness}",$type:"dimension"},"text-underline-offset":{$value:"{ams.links.text-underline-offset}",$type:"dimension",$extensions:{"amsterdam.designsystem.subtype":"space"}},hover:{color:{$value:"{ams.links.hover.color}",$type:"color"},"text-decoration-line":{$value:"{ams.links.subtle.hover.text-decoration-line}"}},contrast:{color:{$value:"{ams.links.contrast.color}",$type:"color"},hover:{color:{$value:"{ams.links.contrast.hover.color}",$type:"color"}}},inverse:{color:{$value:"{ams.links.inverse.color}",$type:"color"},hover:{color:{$value:"{ams.links.inverse.hover.color}",$type:"color"}}}}},f={ams:k};function a(o){const n={a:"a",h2:"h2",h3:"h3",h4:"h4",p:"p",...s(),...o.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,`
`,`
`,e.jsx(i,{of:d}),`
`,e.jsx(r,{children:x}),`
`,e.jsx(l,{}),`
`,e.jsx(c,{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"with-heading-and-paragraph",children:"With heading and paragraph"}),`
`,e.jsxs(n.p,{children:["A Standalone Link often appears in a block with a ",e.jsx(n.a,{href:"/docs/components-text-heading--docs",children:"Heading"})," and an introducing ",e.jsx(n.a,{href:"/docs/components-text-paragraph--docs",children:"Paragraph"}),` to lead to a follow-up page.
Use a size of ‘level-3’ for the Heading, add a small bottom margin, and a medium bottom margin to the Paragraph.`]}),`
`,e.jsx(t,{of:h}),`
`,e.jsx(n.h3,{id:"custom-icon",children:"Custom icon"}),`
`,e.jsx(n.p,{children:"If it helps understand the link, a different icon than the default chevron can be used."}),`
`,e.jsx(t,{of:m}),`
`,e.jsx(n.h3,{id:"on-a-coloured-background",children:"On a coloured background"}),`
`,e.jsxs(n.p,{children:["A Standalone Link on a coloured background must set ",e.jsx(n.a,{href:"?path=/docs/brand-design-tokens-colour--docs#pairing-foreground-with-background-colours",children:"the correct text colour"}),` to provide enough contrast.
We have lighter and darker background colours, and links behave differently on each.`]}),`
`,e.jsx(n.h4,{id:"contrast-colour",children:"Contrast colour"}),`
`,e.jsx(n.p,{children:`Use the contrast colour on a lime, orange or yellow background.
It will make the Standalone Link black.`}),`
`,e.jsx(t,{of:u}),`
`,e.jsx(n.h4,{id:"inverse-colour",children:"Inverse colour"}),`
`,e.jsx(n.p,{children:`Use the inverse colour on an azure, blue, green, magenta or purple background.
It will make the Standalone Link white.`}),`
`,e.jsx(t,{of:p}),`
`,e.jsx(n.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsx(g,{tokens:f})]})}function D(o={}){const{wrapper:n}={...s(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(a,{...o})}):a(o)}export{D as default};
