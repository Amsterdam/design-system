import{j as n}from"./jsx-runtime-z8MfsBtr.js";import{useMDXComponents as s}from"./index-BAvqEBP-.js";import{M as a,e as r,P as p,f as l,h as t}from"./index-BzCZR2Ib.js";import{S as h,O as m,M as c}from"./SkipLink.stories-CGHSRQyZ.js";import"./index-C9rmetsa.js";import"./index-D7uoVdV3.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-VB-HcgEe.js";import"./index-D-OUEn-9.js";import"./index-Cu4lwwaE.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";import"./index.esm-DSD1WKm8.js";import"./clsx-B-dksMZM.js";import"./index.esm-X3U7dYaT.js";const d=`<!-- @license CC0-1.0 -->

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
`;/*@license CC0-1.0*/function o(i){const e={h2:"h2",h3:"h3",p:"p",...s(),...i.components};return n.jsxs(n.Fragment,{children:[`
`,`
`,n.jsx(a,{of:h}),`
`,n.jsx(r,{children:d}),`
`,n.jsx(p,{}),`
`,n.jsx(l,{}),`
`,n.jsx(e.h2,{id:"examples",children:"Examples"}),`
`,n.jsx(e.h3,{id:"display-on-focus",children:"Display on focus"}),`
`,n.jsx(e.p,{children:"A Skip Link is only displayed when it receives focus."}),`
`,n.jsx(t,{of:m}),`
`,n.jsx(e.h3,{id:"multiple-links",children:"Multiple links"}),`
`,n.jsx(e.p,{children:"You can use more than one Skip Link if you have a complex page with multiple sections."}),`
`,n.jsx(t,{of:c})]})}function A(i={}){const{wrapper:e}={...s(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(o,{...i})}):o(i)}export{A as default};
