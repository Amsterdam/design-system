import{j as e}from"./jsx-runtime-j_jdvEMj.js";import{useMDXComponents as s}from"./index-BSj771as.js";import{ae as o,aq as r,ar as p,as as h,at as t}from"./index-C9ne_B96.js";import{S as l,O as m,M as c}from"./SkipLink.stories-33GpSYFT.js";import"./index-B-o1Wr-g.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-pCahJwZA.js";import"../sb-preview/runtime.js";import"./index-DolzVqEf.js";import"./index-D-8MO0q_.js";import"./index-CJyPbrN5.js";import"./index-DrFu-skq.js";import"./index.esm-DBblPCWP.js";import"./clsx-B-dksMZM.js";import"./index.esm-CEuZchO4.js";const d=`<!-- @license CC0-1.0 -->

# Skip Link

Allows navigating past recurring content, such as a menu in the header or the breadcrumbs of a page.

## Design

The Skip Link sits above the header and is as wide as the Screen container.
It remains hidden until activated with the ‘Tab’ key.
After appearing, it pushes the entire page down.

## Guidelines

- Place the Skip Link as the first element in the Screen.
- Target the Skip Link to the main content.
  On an article page, for example, it could be the title of the article.
  On a search page, it could be the search field.
- Set \`id="example-id"\` on the container of that element and then use \`href="#example-id"\` on the Skip Link.
- Complex pages with multiple sections may benefit from more than one Skip Link.
- Skip Links are unnecessary on a simple page with only text and minimal navigation.
`;/*@license CC0-1.0*/function a(i){const n={h2:"h2",h3:"h3",p:"p",...s(),...i.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(o,{of:l}),`
`,e.jsx(r,{children:d}),`
`,e.jsx(p,{}),`
`,e.jsx(h,{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"display-on-focus",children:"Display on focus"}),`
`,e.jsx(n.p,{children:"A Skip Link is only displayed when it receives focus."}),`
`,e.jsx(t,{of:m}),`
`,e.jsx(n.h3,{id:"multiple-links",children:"Multiple links"}),`
`,e.jsx(n.p,{children:"You can use more than one Skip Link if you have a complex page with multiple sections."}),`
`,e.jsx(t,{of:c})]})}function A(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(a,{...i})}):a(i)}export{A as default};
