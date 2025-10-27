import{j as e}from"./iframe-gdJU-RNW.js";import{useMDXComponents as t}from"./index-DNOndqOC.js";import{M as r,f as i,P as c,h as l,i as o}from"./blocks-BRKnWJ3r.js";import{a as h,W as d,F as p}from"./Avatar.stories-CoTlYID8.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CBn6p7ml.js";import"./Icon-BJWEkYh2.js";const m=`<!-- @license CC0-1.0 -->

# Avatar

A circular badge representing a person.

## Design

- The avatar contains 1 or 2 initial letters from the person’s full name, a picture, or a generic icon.

## Guidelines

- Show an avatar for the user of the application, or to associate a person with a content item.
- To personalize the Avatar, the user can be allowed to choose one of the [highlight colours](/docs/brand-design-tokens-colour--docs).
  The default is purple.
  The design system does not define a meaning to any of these background colours.
`;/*@license CC0-1.0*/function s(a){const n={h2:"h2",h3:"h3",p:"p",...t(),...a.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(r,{of:h}),`
`,e.jsx(i,{children:m}),`
`,e.jsx(c,{}),`
`,e.jsx(l,{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"with-image",children:"With image"}),`
`,e.jsx(n.p,{children:`The Avatar can also display a photo or other image for the person.
Make sure to scale the image down to around 100 pixels to prevent unnecessary data transfers.
The center of the image will be visible; provide a square image if possible.`}),`
`,e.jsx(o,{of:d}),`
`,e.jsx(n.h3,{id:"fallback-icon",children:"Fallback icon"}),`
`,e.jsx(n.p,{children:"A user icon displays if no label and image are provided."}),`
`,e.jsx(o,{of:p})]})}function M(a={}){const{wrapper:n}={...t(),...a.components};return n?e.jsx(n,{...a,children:e.jsx(s,{...a})}):s(a)}export{M as default};
