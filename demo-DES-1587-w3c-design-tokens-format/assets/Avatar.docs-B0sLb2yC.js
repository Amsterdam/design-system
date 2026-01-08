import{j as o}from"./iframe-DyECs4ch.js";import{useMDXComponents as l}from"./index-CWS76TmM.js";import{M as n,f as s,P as i,h as c,i as a}from"./blocks-Bszj2iAJ.js";import{a as h,W as m,F as p}from"./Avatar.stories-B1bzzbM_.js";import{D as d}from"./DesignTokensTable-g8mmQRZO.js";import"./preload-helper-PPVm8Dsz.js";import"./index-fKMJsk9n.js";import"./Icon-i5sJ-tPF.js";const g=`<!-- @license CC0-1.0 -->

# Avatar

A circular badge representing a person.

## Design

- The avatar contains 1 or 2 initial letters from the person’s full name, a picture, or a generic icon.

## Guidelines

- Show an avatar for the user of the website, or to associate a person with a content item.
- To personalize the Avatar, the user can be allowed to choose one of the [highlight colours](/docs/brand-design-tokens-colour--docs).
  The default is purple.
  The design system does not define a meaning to any of these background colours.
`,u={avatar:{"aspect-ratio":{$value:"{ams.aspect-ratio.1-1}"},"background-color":{$value:"{ams.color.highlight.purple}",$type:"color"},"border-color":{$value:"{ams.color.highlight.purple}",$type:"color"},"border-style":{$value:"solid"},"border-width":{$value:"{ams.border.width.m}",$extensions:{"ams.type":"borderWidth"}},color:{$value:"{ams.color.text.inverse}",$type:"color"},"font-family":{$value:"{ams.typography.font-family}",$type:"fontFamily"},"font-size":{$value:"{ams.typography.body-text.small.font-size}",$extensions:{"ams.type":"fontSize"}},"font-weight":{$value:"{ams.typography.body-text.font-weight}",$type:"fontWeight"},"line-height":{$value:"{ams.typography.body-text.small.line-height}",$extensions:{"ams.type":"lineHeight"}},"padding-block":{$value:"{ams.space.xs}",$type:"dimension"},"padding-inline":{$value:"{ams.space.xs}",$type:"dimension"},"forced-colors":{"border-width":{$value:"{ams.border.width.m}",$extensions:{"ams.type":"borderWidth"}}},azure:{"background-color":{$value:"{ams.color.highlight.azure}",$type:"color"},"border-color":{$value:"{ams.color.highlight.azure}",$type:"color"},color:{$value:"{ams.color.text.inverse}",$type:"color"}},green:{"background-color":{$value:"{ams.color.highlight.green}",$type:"color"},"border-color":{$value:"{ams.color.highlight.green}",$type:"color"},color:{$value:"{ams.color.text.inverse}",$type:"color"}},lime:{"background-color":{$value:"{ams.color.highlight.lime}",$type:"color"},"border-color":{$value:"{ams.color.highlight.lime}",$type:"color"},color:{$value:"{ams.color.text.default}",$type:"color"}},magenta:{"background-color":{$value:"{ams.color.highlight.magenta}",$type:"color"},"border-color":{$value:"{ams.color.highlight.magenta}",$type:"color"},color:{$value:"{ams.color.text.inverse}",$type:"color"}},orange:{"background-color":{$value:"{ams.color.highlight.orange}",$type:"color"},"border-color":{$value:"{ams.color.highlight.orange}",$type:"color"},color:{$value:"{ams.color.text.default}",$type:"color"}},yellow:{"background-color":{$value:"{ams.color.highlight.yellow}",$type:"color"},"border-color":{$value:"{ams.color.highlight.yellow}",$type:"color"},color:{$value:"{ams.color.text.default}",$type:"color"}}}},$={ams:u};function t(r){const e={h2:"h2",h3:"h3",p:"p",...l(),...r.components};return o.jsxs(o.Fragment,{children:[`
`,`
`,`
`,`
`,o.jsx(n,{of:h}),`
`,o.jsx(s,{children:g}),`
`,o.jsx(i,{}),`
`,o.jsx(c,{}),`
`,o.jsx(e.h2,{id:"examples",children:"Examples"}),`
`,o.jsx(e.h3,{id:"with-image",children:"With image"}),`
`,o.jsx(e.p,{children:`The Avatar can also display a photo or other image for the person.
Make sure to scale the image down to around 100 pixels to prevent unnecessary data transfers.
The center of the image will be visible; provide a square image if possible.`}),`
`,o.jsx(a,{of:m}),`
`,o.jsx(e.h3,{id:"fallback-icon",children:"Fallback icon"}),`
`,o.jsx(e.p,{children:"A user icon displays if no label and image are provided."}),`
`,o.jsx(a,{of:p}),`
`,o.jsx(e.h2,{id:"tokens",children:"Tokens"}),`
`,o.jsx(d,{tokens:$})]})}function M(r={}){const{wrapper:e}={...l(),...r.components};return e?o.jsx(e,{...r,children:o.jsx(t,{...r})}):t(r)}export{M as default};
