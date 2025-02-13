import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as r}from"./index-1Ha5aU2j.js";import{M as i,e as s,P as l,f as c,h as a}from"./index-IFmM0cBN.js";import{A as h,W as p,F as m}from"./Avatar.stories-DlGi19Ga.js";import"./index-yBjzXJbu.js";import"./index-C0MU9AHG.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-Dy3-ihKp.js";import"./index-IE9ObSwG.js";import"./index-Cu4lwwaE.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index.esm-DvoLfDtE.js";import"./clsx-B-dksMZM.js";import"./Icon-plsGHcLz.js";const d=`<!-- @license CC0-1.0 -->

# Avatar

A circular badge representing a person.

## Design

- The avatar contains 1 or 2 initial letters from the person’s full name, a picture, or a generic icon.
- To personalize the Avatar, the user can be allowed to choose one of the [colours](/docs/brand-design-tokens-colour--docs) from the ‘highlight’ group.
  The default is purple.
  The design system does not define a meaning to any of these background colours.
- The default text colour (black) is used on an azure, lime, orange or yellow background.
  The inverse text colour (white) is used on a green, magenta or purple background.
- Blue is only an option for an interactive Avatar, which we expect to add in the future.

## Guidelines

- Show an avatar for the user of the application, or to associate a person with a content item.
`;/*@license CC0-1.0*/function t(o){const n={h2:"h2",h3:"h3",p:"p",...r(),...o.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(i,{of:h}),`
`,e.jsx(s,{children:d}),`
`,e.jsx(l,{}),`
`,e.jsx(c,{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"with-image",children:"With image"}),`
`,e.jsx(n.p,{children:`The Avatar can also display a photo or other image for the person.
Make sure to scale the image down to around 100 pixels to prevent unnecessary data transfers.
The center of the image will be visible; provide a square image if possible.`}),`
`,e.jsx(a,{of:p}),`
`,e.jsx(n.h3,{id:"fallback-icon",children:"Fallback icon"}),`
`,e.jsx(n.p,{children:"A user icon displays if no label and image are provided."}),`
`,e.jsx(a,{of:m})]})}function E(o={}){const{wrapper:n}={...r(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}export{E as default};
