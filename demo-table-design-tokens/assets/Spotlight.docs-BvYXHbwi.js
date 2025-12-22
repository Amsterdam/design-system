import{j as e}from"./iframe-BiErRGvs.js";import{useMDXComponents as a}from"./index-BVfInj7M.js";import{M as r,f as i,P as c,h as l,i as o}from"./blocks-BzC5Qy9m.js";import{a as h,A as d,G as g,L as m,M as u,O as p,Y as x,I as f}from"./Spotlight.stories-H8SHJ8sO.js";import{D as j}from"./DesignTokensTable-6Gsg3hI7.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bdsl2Juj.js";import"./exampleContent-Du2yH2Fl.js";const k=`<!-- @license CC0-1.0 -->

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
`,b={spotlight:{"background-color":{value:"{ams.color.highlight.purple}"},azure:{"background-color":{value:"{ams.color.highlight.azure}"}},green:{"background-color":{value:"{ams.color.highlight.green}"}},lime:{"background-color":{value:"{ams.color.highlight.lime}"}},magenta:{"background-color":{value:"{ams.color.highlight.magenta}"}},orange:{"background-color":{value:"{ams.color.highlight.orange}"}},yellow:{"background-color":{value:"{ams.color.highlight.yellow}"}}}},v={ams:b};function s(t){const n={code:"code",h2:"h2",h3:"h3",p:"p",...a(),...t.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,`
`,`
`,e.jsx(r,{of:h}),`
`,e.jsx(i,{children:k}),`
`,e.jsx(c,{}),`
`,e.jsx(l,{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"azure",children:"Azure"}),`
`,e.jsx(o,{of:d}),`
`,e.jsx(n.h3,{id:"green",children:"Green"}),`
`,e.jsx(o,{of:g}),`
`,e.jsx(n.h3,{id:"lime",children:"Lime"}),`
`,e.jsx(o,{of:m}),`
`,e.jsx(n.h3,{id:"magenta",children:"Magenta"}),`
`,e.jsx(o,{of:u}),`
`,e.jsx(n.h3,{id:"orange",children:"Orange"}),`
`,e.jsx(o,{of:p}),`
`,e.jsx(n.h3,{id:"yellow",children:"Yellow"}),`
`,e.jsx(o,{of:x}),`
`,e.jsx(n.h3,{id:"improve-semantics",children:"Improve semantics"}),`
`,e.jsxs(n.p,{children:["By default, a Spotlight renders a ",e.jsx(n.code,{children:"<div>"}),` element in HTML.
Use the `,e.jsx(n.code,{children:"as"})," prop to make your markup more semantic."]}),`
`,e.jsx(o,{of:f}),`
`,e.jsx(n.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsx(j,{tokens:v})]})}function T(t={}){const{wrapper:n}={...a(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{T as default};
