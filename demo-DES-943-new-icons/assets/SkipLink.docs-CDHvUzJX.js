import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as o}from"./index-CxbY7dAs.js";import{M as s,f as r,P as p,h as l,i as t}from"./index-CMhTqWrX.js";import{S as h,O as m,M as c}from"./SkipLink.stories-83CyDWZS.js";import"./index-yBjzXJbu.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-sefJnpUQ.js";import"./index-fNjTmf9T.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index.esm-CKUoi3R8.js";import"./clsx-B-dksMZM.js";import"./index.esm-BRYoeV1b.js";const d=`<!-- @license CC0-1.0 -->

# Skip Link

Allows skipping past recurring navigation blocks at the top of a page.

## Design

The Skip Link sits above the Page Header and is as wide as the Screen container.
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
`,n.jsx(t,{of:c})]})}function D(i={}){const{wrapper:e}={...o(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(a,{...i})}):a(i)}export{D as default};
