import{j as e}from"./iframe-DFqQjuLX.js";import{useMDXComponents as s}from"./index-D-7GnzWA.js";import{M as a,f as i,P as c,h as l,i as n}from"./blocks-CRh74lGD.js";import{a as h,A as d,G as g,L as m,M as p,O as u,Y as x,I as f}from"./Spotlight.stories-BBRUGplN.js";import{D as j}from"./DesignTokensTable-iW4P1nrg.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BRV8YvAF.js";import"./exampleContent-Du2yH2Fl.js";import"./BorderSample-BvfPIj73.js";import"./formatTokenValue-BYjgZrXg.js";import"./ColorSample-CWM-SwxL.js";import"./SpaceSample-BIoq58P5.js";const k=`<!-- @license CC0-1.0 -->

# Spotlight

Emphasizes a section on a page through a distinctive background colour.

## Guidelines

- Display the Spotlight at the entire width of the [Page](/docs/components-containers-page--docs) container; do not position it on the [Grid](/docs/components-layout-grid--docs).
- Add a Grid with medium vertical padding inside the Spotlight to add whitespace around the content, even for a single element.
- Use any of the [highlight colours](/docs/brand-design-tokens-colour--docs) for the background.
  The design system does not prescribe a meaning to any of these colours.
  The default is purple.
- Select [the correct colour](?path=/docs/brand-design-tokens-colour--docs#pairing-foreground-with-background-colours) for text and links against the background you choose.

## Relevant WCAG requirements

- [WCAG 1.4.3](https://www.w3.org/TR/WCAG21/#contrast-minimum): Large-scale text and images of large-scale text have a contrast ratio of at least 3:1;

## References

- [Color and contrast accessibility](https://web.dev/articles/color-and-contrast-accessibility)
`,y={spotlight:{"background-color":{$value:"{ams.color.highlight.purple}",$type:"color"},azure:{"background-color":{$value:"{ams.color.highlight.azure}",$type:"color"}},green:{"background-color":{$value:"{ams.color.highlight.green}",$type:"color"}},lime:{"background-color":{$value:"{ams.color.highlight.lime}",$type:"color"}},magenta:{"background-color":{$value:"{ams.color.highlight.magenta}",$type:"color"}},orange:{"background-color":{$value:"{ams.color.highlight.orange}",$type:"color"}},yellow:{"background-color":{$value:"{ams.color.highlight.yellow}",$type:"color"}}}},b={ams:y};function r(t){const o={code:"code",h2:"h2",h3:"h3",p:"p",...s(),...t.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,`
`,`
`,e.jsx(a,{of:h}),`
`,e.jsx(i,{children:k}),`
`,e.jsx(c,{}),`
`,e.jsx(l,{}),`
`,e.jsx(o.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(o.h3,{id:"azure",children:"Azure"}),`
`,e.jsx(n,{of:d}),`
`,e.jsx(o.h3,{id:"green",children:"Green"}),`
`,e.jsx(n,{of:g}),`
`,e.jsx(o.h3,{id:"lime",children:"Lime"}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(o.h3,{id:"magenta",children:"Magenta"}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(o.h3,{id:"orange",children:"Orange"}),`
`,e.jsx(n,{of:u}),`
`,e.jsx(o.h3,{id:"yellow",children:"Yellow"}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(o.h3,{id:"improve-semantics",children:"Improve semantics"}),`
`,e.jsxs(o.p,{children:["By default, a Spotlight renders a ",e.jsx(o.code,{children:"<div>"}),` element in HTML.
Use the `,e.jsx(o.code,{children:"as"})," prop to make your markup more semantic."]}),`
`,e.jsx(n,{of:f}),`
`,e.jsx(o.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsx(j,{tokens:b})]})}function E(t={}){const{wrapper:o}={...s(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(r,{...t})}):r(t)}export{E as default};
