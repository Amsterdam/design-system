import{j as n}from"./jsx-runtime-j_jdvEMj.js";import{useMDXComponents as o}from"./index-BSj771as.js";import{ae as s,aq as r,ar as p,as as l,at as t}from"./index-DwXntO0u.js";import{S as h,O as m,M as c}from"./SkipLink.stories-Cu6Q0rpK.js";import"./index-B-o1Wr-g.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-Bhs8b6BV.js";import"../sb-preview/runtime.js";import"./index-DolzVqEf.js";import"./index-D-8MO0q_.js";import"./index-CJyPbrN5.js";import"./index-DrFu-skq.js";import"./index.esm-BaqVhzAt.js";import"./clsx-B-dksMZM.js";import"./index.esm-CEuZchO4.js";const d=`<!-- @license CC0-1.0 -->

# Skip Link

Allows skipping past recurring navigation blocks at the top of a page.

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
`;/*@license CC0-1.0*/function a(i){const e={h2:"h2",h3:"h3",p:"p",...o(),...i.components};return n.jsxs(n.Fragment,{children:[`
`,`
`,n.jsx(s,{of:h}),`
`,n.jsx(r,{children:d}),`
`,n.jsx(p,{}),`
`,n.jsx(l,{}),`
`,n.jsx(e.h2,{id:"examples",children:"Examples"}),`
`,n.jsx(e.h3,{id:"display-on-focus",children:"Display on focus"}),`
`,n.jsx(e.p,{children:"A Skip Link is only displayed when it receives focus."}),`
`,n.jsx(t,{of:m}),`
`,n.jsx(e.h3,{id:"multiple-links",children:"Multiple links"}),`
`,n.jsx(e.p,{children:"You can use more than one Skip Link if you have a complex page with multiple sections."}),`
`,n.jsx(t,{of:c})]})}function A(i={}){const{wrapper:e}={...o(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(a,{...i})}):a(i)}export{A as default};
