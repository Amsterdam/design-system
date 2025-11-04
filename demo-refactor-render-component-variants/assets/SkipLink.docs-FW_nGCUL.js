import{j as n}from"./iframe-DX06Iv3a.js";import{useMDXComponents as a}from"./index-3IBCwvuO.js";import{M as o,f as r,P as p,h,i as t}from"./blocks-Dym5WNQI.js";import{a as l,O as c,M as m}from"./SkipLink.stories-BJ9LSiQh.js";import"./preload-helper-PPVm8Dsz.js";import"./index-qNMe9VMg.js";const d=`<!-- @license CC0-1.0 -->

# Skip Link

Allows skipping past recurring navigation blocks at the top of a page.

## Design

The Skip Link sits above the Page Header and is as wide as the Page container.
It remains hidden until activated with the ‘Tab’ key.
After appearing, it pushes the rest of the page down.

## Guidelines

- Place the Skip Link as the first element in the [Page](/docs/components-containers-page--docs) container.
- Direct the Skip Link to the main content area on the Page.
  Typically, this is the \`main\` HTML element.
  Repeated navigation blocks such as Breadcrumbs and back Links do not belong to the main content area.
- Set \`id="inhoud"\` on the \`main\` HTML element and then use \`href="#inhoud"\` on the Skip Link.
- Complex pages with multiple sections may benefit from more than one Skip Link.
  If you need multiple words to describe a Skip Link target, use kebab case (\`id="op-deze-manier"\`).
- Skip Links are unnecessary on a simple page with only text and minimal navigation.
`;/*@license CC0-1.0*/function s(i){const e={h2:"h2",h3:"h3",p:"p",...a(),...i.components};return n.jsxs(n.Fragment,{children:[`
`,`
`,n.jsx(o,{of:l}),`
`,n.jsx(r,{children:d}),`
`,n.jsx(p,{}),`
`,n.jsx(h,{}),`
`,n.jsx(e.h2,{id:"examples",children:"Examples"}),`
`,n.jsx(e.h3,{id:"display-on-focus",children:"Display on focus"}),`
`,n.jsx(e.p,{children:"A Skip Link is only displayed when it receives focus."}),`
`,n.jsx(t,{of:c}),`
`,n.jsx(e.h3,{id:"multiple-links",children:"Multiple links"}),`
`,n.jsx(e.p,{children:"You can use more than one Skip Link if you have a complex page with multiple sections."}),`
`,n.jsx(t,{of:m})]})}function L(i={}){const{wrapper:e}={...a(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(s,{...i})}):s(i)}export{L as default};
