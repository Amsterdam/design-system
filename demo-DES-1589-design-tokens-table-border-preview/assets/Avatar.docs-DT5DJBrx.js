import{j as e}from"./iframe-sIOt2gmS.js";import{useMDXComponents as l}from"./index-DwankX0C.js";import{M as n,f as s,P as i,h as c,i as a}from"./blocks-BZsiVlPJ.js";import{a as h,W as m,F as d}from"./Avatar.stories-CFedDkAp.js";import{D as p}from"./DesignTokensTable-BhWCEXLR.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BLYaCY2A.js";import"./Icon-C-zUjLVy.js";import"./BorderSample-BA-xUhfJ.js";const g=`<!-- @license CC0-1.0 -->

# Avatar

A circular badge representing a person.

## Design

- The avatar contains 1 or 2 initial letters from the person’s full name, a picture, or a generic icon.

## Guidelines

- Show an avatar for the user of the website, or to associate a person with a content item.
- To personalize the Avatar, the user can be allowed to choose one of the [highlight colours](/docs/brand-design-tokens-colour--docs).
  The default is purple.
  The design system does not define a meaning to any of these background colours.
`,u={avatar:{"aspect-ratio":{$value:"{ams.aspect-ratio.1-1}"},"background-color":{$value:"{ams.color.highlight.purple}",$type:"color"},"border-color":{$value:"{ams.color.highlight.purple}",$type:"color"},"border-style":{$value:"solid",$extensions:{"amsterdam.designsystem.type":"borderStyle"}},"border-width":{$value:"{ams.border.width.m}",$extensions:{"amsterdam.designsystem.type":"borderWidth"}},color:{$value:"{ams.color.text.inverse}",$type:"color"},"font-family":{$value:"{ams.typography.font-family}",$type:"fontFamily"},"font-size":{$value:"{ams.typography.body-text.small.font-size}",$extensions:{"amsterdam.designsystem.type":"fontSize"}},"font-weight":{$value:"{ams.typography.body-text.font-weight}",$type:"fontWeight"},"line-height":{$value:"{ams.typography.body-text.small.line-height}",$extensions:{"amsterdam.designsystem.type":"lineHeight"}},"padding-block":{$value:"{ams.space.xs}",$type:"dimension"},"padding-inline":{$value:"{ams.space.xs}",$type:"dimension"},"forced-colors":{"border-width":{$value:"{ams.border.width.m}",$extensions:{"amsterdam.designsystem.type":"borderWidth"}}},azure:{"background-color":{$value:"{ams.color.highlight.azure}",$type:"color"},"border-color":{$value:"{ams.color.highlight.azure}",$type:"color"},color:{$value:"{ams.color.text.inverse}",$type:"color"}},green:{"background-color":{$value:"{ams.color.highlight.green}",$type:"color"},"border-color":{$value:"{ams.color.highlight.green}",$type:"color"},color:{$value:"{ams.color.text.inverse}",$type:"color"}},lime:{"background-color":{$value:"{ams.color.highlight.lime}",$type:"color"},"border-color":{$value:"{ams.color.highlight.lime}",$type:"color"},color:{$value:"{ams.color.text.default}",$type:"color"}},magenta:{"background-color":{$value:"{ams.color.highlight.magenta}",$type:"color"},"border-color":{$value:"{ams.color.highlight.magenta}",$type:"color"},color:{$value:"{ams.color.text.inverse}",$type:"color"}},orange:{"background-color":{$value:"{ams.color.highlight.orange}",$type:"color"},"border-color":{$value:"{ams.color.highlight.orange}",$type:"color"},color:{$value:"{ams.color.text.default}",$type:"color"}},yellow:{"background-color":{$value:"{ams.color.highlight.yellow}",$type:"color"},"border-color":{$value:"{ams.color.highlight.yellow}",$type:"color"},color:{$value:"{ams.color.text.default}",$type:"color"}}}},y={ams:u};function t(r){const o={h2:"h2",h3:"h3",p:"p",...l(),...r.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,`
`,`
`,e.jsx(n,{of:h}),`
`,e.jsx(s,{children:g}),`
`,e.jsx(i,{}),`
`,e.jsx(c,{}),`
`,e.jsx(o.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(o.h3,{id:"with-image",children:"With image"}),`
`,e.jsx(o.p,{children:`The Avatar can also display a photo or other image for the person.
Make sure to scale the image down to around 100 pixels to prevent unnecessary data transfers.
The center of the image will be visible; provide a square image if possible.`}),`
`,e.jsx(a,{of:m}),`
`,e.jsx(o.h3,{id:"fallback-icon",children:"Fallback icon"}),`
`,e.jsx(o.p,{children:"A user icon displays if no label and image are provided."}),`
`,e.jsx(a,{of:d}),`
`,e.jsx(o.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsx(p,{tokens:y})]})}function T(r={}){const{wrapper:o}={...l(),...r.components};return o?e.jsx(o,{...r,children:e.jsx(t,{...r})}):t(r)}export{T as default};
