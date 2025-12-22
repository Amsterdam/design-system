import{j as o}from"./iframe-DxFJ3SCQ.js";import{useMDXComponents as n}from"./index-CdbzGJT0.js";import{M as t,f as s,P as i,h as c,i as r}from"./blocks-DPfOuimJ.js";import{a as h,W as m,F as g}from"./Avatar.stories-BysU4xjD.js";import{D as d}from"./DesignTokensTable-CKsYRah6.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CnyXa-QK.js";import"./Icon-C8rLjmkz.js";const u=`<!-- @license CC0-1.0 -->

# Avatar

A circular badge representing a person.

## Design

- The avatar contains 1 or 2 initial letters from the person’s full name, a picture, or a generic icon.

## Guidelines

- Show an avatar for the user of the website, or to associate a person with a content item.
- To personalize the Avatar, the user can be allowed to choose one of the [highlight colours](/docs/brand-design-tokens-colour--docs).
  The default is purple.
  The design system does not define a meaning to any of these background colours.
`,p={avatar:{"aspect-ratio":{value:"{ams.aspect-ratio.1-1}"},"background-color":{value:"{ams.color.highlight.purple}"},"border-color":{value:"{ams.color.highlight.purple}"},"border-style":{value:"solid"},"border-width":{value:"{ams.border.width.m}"},color:{value:"{ams.color.text.inverse}"},"font-family":{value:"{ams.typography.font-family}"},"font-size":{value:"{ams.typography.body-text.small.font-size}"},"font-weight":{value:"{ams.typography.body-text.font-weight}"},"line-height":{value:"{ams.typography.body-text.small.line-height}"},"padding-block":{value:"{ams.space.xs}"},"padding-inline":{value:"{ams.space.xs}"},"forced-colors":{"border-width":{value:"{ams.border.width.m}"}},azure:{"background-color":{value:"{ams.color.highlight.azure}"},"border-color":{value:"{ams.color.highlight.azure}"},color:{value:"{ams.color.text.inverse}"}},green:{"background-color":{value:"{ams.color.highlight.green}"},"border-color":{value:"{ams.color.highlight.green}"},color:{value:"{ams.color.text.inverse}"}},lime:{"background-color":{value:"{ams.color.highlight.lime}"},"border-color":{value:"{ams.color.highlight.lime}"},color:{value:"{ams.color.text.default}"}},magenta:{"background-color":{value:"{ams.color.highlight.magenta}"},"border-color":{value:"{ams.color.highlight.magenta}"},color:{value:"{ams.color.text.inverse}"}},orange:{"background-color":{value:"{ams.color.highlight.orange}"},"border-color":{value:"{ams.color.highlight.orange}"},color:{value:"{ams.color.text.default}"}},yellow:{"background-color":{value:"{ams.color.highlight.yellow}"},"border-color":{value:"{ams.color.highlight.yellow}"},color:{value:"{ams.color.text.default}"}}}},v={ams:p};function l(a){const e={h2:"h2",h3:"h3",p:"p",...n(),...a.components};return o.jsxs(o.Fragment,{children:[`
`,`
`,`
`,`
`,o.jsx(t,{of:h}),`
`,o.jsx(s,{children:u}),`
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
`,o.jsx(r,{of:g}),`
`,o.jsx(e.h2,{id:"tokens",children:"Tokens"}),`
`,o.jsx(d,{tokens:v})]})}function T(a={}){const{wrapper:e}={...n(),...a.components};return e?o.jsx(e,{...a,children:o.jsx(l,{...a})}):l(a)}export{T as default};
