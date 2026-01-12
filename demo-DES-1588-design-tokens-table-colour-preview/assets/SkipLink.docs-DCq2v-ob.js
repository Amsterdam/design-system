import{j as e}from"./iframe-DnBePZqG.js";import{useMDXComponents as s}from"./index-CK937RcF.js";import{M as a,f as r,P as l,h as p,i}from"./blocks-Cfrr9rc5.js";import{a as m,O as c,M as h}from"./SkipLink.stories-Cb4FhEzW.js";import{D as d}from"./DesignTokensTable-BFE6Aawx.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bz_GHSVd.js";import"./BorderSample-COA7WDwz.js";import"./formatTokenValue-BYjgZrXg.js";import"./ColorSample-DUmku21j.js";const u=`<!-- @license CC0-1.0 -->

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
`,k={"skip-link":{"background-color":{$value:"{ams.color.interactive.default}",$type:"color"},color:{$value:"{ams.color.text.inverse}",$type:"color"},"font-family":{$value:"{ams.typography.font-family}",$type:"fontFamily"},"font-size":{$value:"{ams.typography.body-text.font-size}",$extensions:{"amsterdam.designsystem.type":"fontSize"}},"font-weight":{$value:"{ams.typography.body-text.font-weight}",$type:"fontWeight"},"line-height":{$value:"{ams.typography.body-text.line-height}",$extensions:{"amsterdam.designsystem.type":"lineHeight"}},"outline-offset":{$value:"{ams.focus.outline-offset}",$type:"dimension"},"padding-block":{$value:"{ams.space.s}",$type:"dimension"},"padding-inline":{$value:"{ams.space.m}",$type:"dimension"},hover:{"background-color":{$value:"{ams.color.interactive.hover}",$type:"color"}}}},f={ams:k};function o(t){const n={h2:"h2",h3:"h3",p:"p",...s(),...t.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,`
`,`
`,e.jsx(a,{of:m}),`
`,e.jsx(r,{children:u}),`
`,e.jsx(l,{}),`
`,e.jsx(p,{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"display-on-focus",children:"Display on focus"}),`
`,e.jsx(n.p,{children:"A Skip Link is only displayed when it receives focus."}),`
`,e.jsx(i,{of:c}),`
`,e.jsx(n.h3,{id:"multiple-links",children:"Multiple links"}),`
`,e.jsx(n.p,{children:"You can use more than one Skip Link if you have a complex page with multiple sections."}),`
`,e.jsx(i,{of:h}),`
`,e.jsx(n.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsx(d,{tokens:f})]})}function M(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{M as default};
