import{j as e}from"./iframe-BiErRGvs.js";import{useMDXComponents as o}from"./index-BVfInj7M.js";import{M as s,f as r,P as l,h as p,i as t}from"./blocks-BzC5Qy9m.js";import{a as c,O as h,M as m}from"./SkipLink.stories-kp4nuloD.js";import{D as d}from"./DesignTokensTable-6Gsg3hI7.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bdsl2Juj.js";const u=`<!-- @license CC0-1.0 -->

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
`,k={"skip-link":{"background-color":{value:"{ams.color.interactive.default}"},color:{value:"{ams.color.text.inverse}"},"font-family":{value:"{ams.typography.font-family}"},"font-size":{value:"{ams.typography.body-text.font-size}"},"font-weight":{value:"{ams.typography.body-text.font-weight}"},"line-height":{value:"{ams.typography.body-text.line-height}"},"outline-offset":{value:"{ams.focus.outline-offset}"},"padding-block":{value:"{ams.space.s}"},"padding-inline":{value:"{ams.space.m}"},hover:{"background-color":{value:"{ams.color.interactive.hover}"}}}},f={ams:k};function a(i){const n={h2:"h2",h3:"h3",p:"p",...o(),...i.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,`
`,`
`,e.jsx(s,{of:c}),`
`,e.jsx(r,{children:u}),`
`,e.jsx(l,{}),`
`,e.jsx(p,{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"display-on-focus",children:"Display on focus"}),`
`,e.jsx(n.p,{children:"A Skip Link is only displayed when it receives focus."}),`
`,e.jsx(t,{of:h}),`
`,e.jsx(n.h3,{id:"multiple-links",children:"Multiple links"}),`
`,e.jsx(n.p,{children:"You can use more than one Skip Link if you have a complex page with multiple sections."}),`
`,e.jsx(t,{of:m}),`
`,e.jsx(n.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsx(d,{tokens:f})]})}function w(i={}){const{wrapper:n}={...o(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(a,{...i})}):a(i)}export{w as default};
