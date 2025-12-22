import{j as o}from"./iframe-Dha-7zTR.js";import{useMDXComponents as a}from"./index-CUuWwI6L.js";import{M as s,f as c,P as l,h as i,i as t}from"./blocks-C1WmRPMp.js";import{I as u,C as d,a as h}from"./IconButton.stories-DcxTcycm.js";import{D as m}from"./DesignTokensTable-DH0a8p0G.js";import"./preload-helper-PPVm8Dsz.js";import"./index-fiaxSpfT.js";import"./Icon-B0BHIoDG.js";import"./IconButton-CLxvB1hr.js";const v=`<!-- @license CC0-1.0 -->

# Icon Button

An icon in a button that can be aligned with text.

## Guidelines

- Choose an Icon Button instead of a regular Button if it must align with text.
  Match the size of the Icon Button to that text.
- Only [functional icons](https://designsystem.amsterdam/?path=/docs/brand-assets-icons--docs#functional-icons) can be used in an Icon Button.
  For other icons, use a [Button](https://designsystem.amsterdam/?path=/docs/components-buttons-button--docs) to allow the user to read its label.
- Icon Button still needs a label to describe the button to users of screen readers.

## Relevant WCAG requirements

The Icon Button follows [the same requirements and guidelines as a regular button](/docs/components-buttons-button--docs).
`,b={"icon-button":{color:{value:"{ams.color.interactive.default}"},cursor:{value:"{ams.cursor.interactive}"},"outline-offset":{value:"{ams.focus.outline-offset}"},hover:{"background-color":{value:"rgb(0 70 153 / 12.5%)"},color:{value:"{ams.color.interactive.hover}"}},disabled:{color:{value:"{ams.color.interactive.disabled}"},cursor:{value:"{ams.cursor.disabled}"}},contrast:{color:{value:"{ams.color.interactive.contrast}"},hover:{"background-color":{value:"rgb(0 0 0 / 12.5%)"},color:{value:"{ams.color.interactive.contrast}"}},disabled:{color:{value:"{ams.color.interactive.disabled}"}}},inverse:{"background-color":{value:"{ams.color.interactive.default}"},color:{value:"{ams.color.interactive.inverse}"},hover:{"background-color":{value:"{ams.color.interactive.hover}"},color:{value:"{ams.color.interactive.inverse}"}},disabled:{color:{value:"{ams.color.interactive.inverse}"},"background-color":{value:"{ams.color.interactive.disabled}"}}}}},g={ams:b};function r(e){const n={a:"a",h2:"h2",h3:"h3",h4:"h4",p:"p",...a(),...e.components};return o.jsxs(o.Fragment,{children:[`
`,`
`,`
`,`
`,o.jsx(s,{of:u}),`
`,o.jsx(c,{children:v}),`
`,o.jsx(l,{}),`
`,o.jsx(i,{}),`
`,o.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,o.jsx(n.h3,{id:"on-a-coloured-background",children:"On a coloured background"}),`
`,o.jsxs(n.p,{children:["An Icon Button on a coloured background must set ",o.jsx(n.a,{href:"?path=/docs/brand-design-tokens-colour--docs#pairing-foreground-with-background-colours",children:"the correct text colour"}),` to provide enough contrast.
We have light and dark background colours, and Icon Buttons behave differently on each.`]}),`
`,o.jsx(n.h4,{id:"contrast-colour",children:"Contrast colour"}),`
`,o.jsx(n.p,{children:`Use the contrast colour on a lime, orange or yellow background.
It will make the icon black.`}),`
`,o.jsx(t,{of:d}),`
`,o.jsx(n.h4,{id:"inverse-colour",children:"Inverse colour"}),`
`,o.jsx(n.p,{children:`Use the inverse colour on an azure, blue, green, magenta or purple background.
It will make the icon white.`}),`
`,o.jsx(t,{of:h}),`
`,o.jsx(n.h2,{id:"tokens",children:"Tokens"}),`
`,o.jsx(m,{tokens:g})]})}function M(e={}){const{wrapper:n}={...a(),...e.components};return n?o.jsx(n,{...e,children:o.jsx(r,{...e})}):r(e)}export{M as default};
