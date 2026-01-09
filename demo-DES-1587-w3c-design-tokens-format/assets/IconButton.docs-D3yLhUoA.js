import{j as o}from"./iframe-io1_ciOy.js";import{useMDXComponents as a}from"./index-DzfHeplb.js";import{M as s,f as c,P as l,h as i,i as t}from"./blocks-CZbwjBWQ.js";import{I as u,C as d,a as h}from"./IconButton.stories-D2v1WfXC.js";import{D as m}from"./DesignTokensTable-zksFS1ST.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Df8kt4OW.js";import"./Icon-C0baAkIV.js";import"./IconButton-COBOANnA.js";const v=`<!-- @license CC0-1.0 -->

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
`,p={"icon-button":{color:{$value:"{ams.color.interactive.default}",$type:"color"},cursor:{$value:"{ams.cursor.interactive}"},"outline-offset":{$value:"{ams.focus.outline-offset}",$type:"dimension"},hover:{"background-color":{$value:"rgb(0 70 153 / 12.5%)",$type:"color"},color:{$value:"{ams.color.interactive.hover}",$type:"color"}},disabled:{color:{$value:"{ams.color.interactive.disabled}",$type:"color"},cursor:{$value:"{ams.cursor.disabled}"}},contrast:{color:{$value:"{ams.color.interactive.contrast}",$type:"color"},hover:{"background-color":{$value:"rgb(0 0 0 / 12.5%)",$type:"color"},color:{$value:"{ams.color.interactive.contrast}",$type:"color"}},disabled:{color:{$value:"{ams.color.interactive.disabled}",$type:"color"}}},inverse:{"background-color":{$value:"{ams.color.interactive.default}",$type:"color"},color:{$value:"{ams.color.interactive.inverse}",$type:"color"},hover:{"background-color":{$value:"{ams.color.interactive.hover}",$type:"color"},color:{$value:"{ams.color.interactive.inverse}",$type:"color"}},disabled:{color:{$value:"{ams.color.interactive.inverse}",$type:"color"},"background-color":{$value:"{ams.color.interactive.disabled}",$type:"color"}}}}},b={ams:p};function r(n){const e={a:"a",h2:"h2",h3:"h3",h4:"h4",p:"p",...a(),...n.components};return o.jsxs(o.Fragment,{children:[`
`,`
`,`
`,`
`,o.jsx(s,{of:u}),`
`,o.jsx(c,{children:v}),`
`,o.jsx(l,{}),`
`,o.jsx(i,{}),`
`,o.jsx(e.h2,{id:"examples",children:"Examples"}),`
`,o.jsx(e.h3,{id:"on-a-coloured-background",children:"On a coloured background"}),`
`,o.jsxs(e.p,{children:["An Icon Button on a coloured background must set ",o.jsx(e.a,{href:"?path=/docs/brand-design-tokens-colour--docs#pairing-foreground-with-background-colours",children:"the correct text colour"}),` to provide enough contrast.
We have light and dark background colours, and Icon Buttons behave differently on each.`]}),`
`,o.jsx(e.h4,{id:"contrast-colour",children:"Contrast colour"}),`
`,o.jsx(e.p,{children:`Use the contrast colour on a lime, orange or yellow background.
It will make the icon black.`}),`
`,o.jsx(t,{of:d}),`
`,o.jsx(e.h4,{id:"inverse-colour",children:"Inverse colour"}),`
`,o.jsx(e.p,{children:`Use the inverse colour on an azure, blue, green, magenta or purple background.
It will make the icon white.`}),`
`,o.jsx(t,{of:h}),`
`,o.jsx(e.h2,{id:"tokens",children:"Tokens"}),`
`,o.jsx(m,{tokens:b})]})}function w(n={}){const{wrapper:e}={...a(),...n.components};return e?o.jsx(e,{...n,children:o.jsx(r,{...n})}):r(n)}export{w as default};
