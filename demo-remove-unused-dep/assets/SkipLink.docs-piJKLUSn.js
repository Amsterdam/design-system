import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as a}from"./index-CxbY7dAs.js";import{M as s,e as r,P as p,f as l,h as t}from"./index-BHgg25fL.js";import{S as h,O as m,M as c}from"./SkipLink.stories--9dj9DqT.js";import"./index-yBjzXJbu.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B4q2Zsfe.js";import"./index-CJ88nXQk.js";import"./index-Cf9b6H0j.js";import"./index-DrFu-skq.js";import"./index.esm-DDzNsyt1.js";import"./clsx-B-dksMZM.js";import"./index.esm-D3RaMjqb.js";const d=`<!-- @license CC0-1.0 -->

# Skip Link

Allows skipping past recurring navigation blocks at the top of a page.

## Design

The Skip Link sits above the Page Header and is as wide as the Page container.
It remains hidden until activated with the ‘Tab’ key.
After appearing, it pushes the rest of the page down.

## Guidelines

- Place the Skip Link as the first element in the [Page](/docs/components-containers-page--docs) container.
- Target the Skip Link to the main content.
  On an article page, for example, it could be the title of the article.
  On a search page, it could be the search field.
- Set \`id="example-id"\` on the container of that element and then use \`href="#example-id"\` on the Skip Link.
- Complex pages with multiple sections may benefit from more than one Skip Link.
- Skip Links are unnecessary on a simple page with only text and minimal navigation.
`;/*@license CC0-1.0*/function o(i){const e={h2:"h2",h3:"h3",p:"p",...a(),...i.components};return n.jsxs(n.Fragment,{children:[`
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
`,n.jsx(t,{of:c})]})}function D(i={}){const{wrapper:e}={...a(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(o,{...i})}):o(i)}export{D as default};
