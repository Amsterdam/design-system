import{j as o}from"./iframe-XWRU7AeR.js";import{useMDXComponents as l}from"./index-CSZifgYw.js";import{M as n,f as s,P as i,h as c,i as r}from"./blocks-DZFFVZ8g.js";import{a as h,W as m,F as p}from"./Avatar.stories-CyBl5Sxi.js";import{D as d}from"./DesignTokensTable-DKZIzSB2.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cg7UAlX6.js";import"./Icon-Bd_3S9Q8.js";const g=`<!-- @license CC0-1.0 -->

# Avatar

A circular badge representing a person.

## Design

- The avatar contains 1 or 2 initial letters from the person’s full name, a picture, or a generic icon.

## Guidelines

- Show an avatar for the user of the website, or to associate a person with a content item.
- To personalize the Avatar, the user can be allowed to choose one of the [highlight colours](/docs/brand-design-tokens-colour--docs).
  The default is purple.
  The design system does not define a meaning to any of these background colours.
`,u={avatar:{"aspect-ratio":{$value:"{ams.aspect-ratio.1-1}",$extensions:{"ams.type":"aspectRatio"}},"background-color":{$value:"{ams.color.highlight.purple}",$type:"color"},"border-color":{$value:"{ams.color.highlight.purple}",$type:"color"},"border-style":{$value:"solid",$extensions:{"ams.type":"borderStyle"}},"border-width":{$value:"{ams.border.width.m}",$extensions:{"ams.type":"borderWidth"}},color:{$value:"{ams.color.text.inverse}",$type:"color"},"font-family":{$value:"{ams.typography.font-family}",$type:"fontFamily"},"font-size":{$value:"{ams.typography.body-text.small.font-size}",$extensions:{"ams.type":"fontSize"}},"font-weight":{$value:"{ams.typography.body-text.font-weight}",$type:"fontWeight"},"line-height":{$value:"{ams.typography.body-text.small.line-height}",$type:"number"},"padding-block":{$value:"{ams.space.xs}",$extensions:{"ams.type":"paddingBlock"}},"padding-inline":{$value:"{ams.space.xs}",$extensions:{"ams.type":"paddingInline"}},"forced-colors":{"border-width":{$value:"{ams.border.width.m}",$extensions:{"ams.type":"borderWidth"}}},azure:{"background-color":{$value:"{ams.color.highlight.azure}",$type:"color"},"border-color":{$value:"{ams.color.highlight.azure}",$type:"color"},color:{$value:"{ams.color.text.inverse}",$type:"color"}},green:{"background-color":{$value:"{ams.color.highlight.green}",$type:"color"},"border-color":{$value:"{ams.color.highlight.green}",$type:"color"},color:{$value:"{ams.color.text.inverse}",$type:"color"}},lime:{"background-color":{$value:"{ams.color.highlight.lime}",$type:"color"},"border-color":{$value:"{ams.color.highlight.lime}",$type:"color"},color:{$value:"{ams.color.text.default}",$type:"color"}},magenta:{"background-color":{$value:"{ams.color.highlight.magenta}",$type:"color"},"border-color":{$value:"{ams.color.highlight.magenta}",$type:"color"},color:{$value:"{ams.color.text.inverse}",$type:"color"}},orange:{"background-color":{$value:"{ams.color.highlight.orange}",$type:"color"},"border-color":{$value:"{ams.color.highlight.orange}",$type:"color"},color:{$value:"{ams.color.text.default}",$type:"color"}},yellow:{"background-color":{$value:"{ams.color.highlight.yellow}",$type:"color"},"border-color":{$value:"{ams.color.highlight.yellow}",$type:"color"},color:{$value:"{ams.color.text.default}",$type:"color"}}}},$={ams:u};function t(a){const e={h2:"h2",h3:"h3",p:"p",...l(),...a.components};return o.jsxs(o.Fragment,{children:[`
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
`,o.jsx(r,{of:m}),`
`,o.jsx(e.h3,{id:"fallback-icon",children:"Fallback icon"}),`
`,o.jsx(e.p,{children:"A user icon displays if no label and image are provided."}),`
`,o.jsx(r,{of:p}),`
`,o.jsx(e.h2,{id:"tokens",children:"Tokens"}),`
`,o.jsx(d,{tokens:$})]})}function M(a={}){const{wrapper:e}={...l(),...a.components};return e?o.jsx(e,{...a,children:o.jsx(t,{...a})}):t(a)}export{M as default};
