import{j as o}from"./iframe-CgT_rn2k.js";import{useMDXComponents as s}from"./index-DQbnsFnw.js";import{M as a,f as i,P as c,h as l,i as n}from"./blocks-lxuW4Khk.js";import{a as h,A as d,G as m,L as g,M as p,O as u,Y as x,I as f}from"./Spotlight.stories-CbG1vtSP.js";import{D as j}from"./DesignTokensTable-CmCYa4m4.js";import"./preload-helper-PPVm8Dsz.js";import"./index-oKttLyh-.js";import"./exampleContent-Du2yH2Fl.js";import"./BorderSample-CkwM9uLl.js";import"./formatTokenValue-BYjgZrXg.js";import"./ColorSample-D2L7qNPw.js";import"./SpaceSample-D5tNWEyJ.js";import"./TypographySample-BrsIPEbs.js";const k=`<!-- @license CC0-1.0 -->

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
`,y={spotlight:{"background-color":{$value:"{ams.color.highlight.purple}",$type:"color"},azure:{"background-color":{$value:"{ams.color.highlight.azure}",$type:"color"}},green:{"background-color":{$value:"{ams.color.highlight.green}",$type:"color"}},lime:{"background-color":{$value:"{ams.color.highlight.lime}",$type:"color"}},magenta:{"background-color":{$value:"{ams.color.highlight.magenta}",$type:"color"}},orange:{"background-color":{$value:"{ams.color.highlight.orange}",$type:"color"}},yellow:{"background-color":{$value:"{ams.color.highlight.yellow}",$type:"color"}}}},b={ams:y};function r(t){const e={code:"code",h2:"h2",h3:"h3",p:"p",...s(),...t.components};return o.jsxs(o.Fragment,{children:[`
`,`
`,`
`,`
`,o.jsx(a,{of:h}),`
`,o.jsx(i,{children:k}),`
`,o.jsx(c,{}),`
`,o.jsx(l,{}),`
`,o.jsx(e.h2,{id:"examples",children:"Examples"}),`
`,o.jsx(e.h3,{id:"azure",children:"Azure"}),`
`,o.jsx(n,{of:d}),`
`,o.jsx(e.h3,{id:"green",children:"Green"}),`
`,o.jsx(n,{of:m}),`
`,o.jsx(e.h3,{id:"lime",children:"Lime"}),`
`,o.jsx(n,{of:g}),`
`,o.jsx(e.h3,{id:"magenta",children:"Magenta"}),`
`,o.jsx(n,{of:p}),`
`,o.jsx(e.h3,{id:"orange",children:"Orange"}),`
`,o.jsx(n,{of:u}),`
`,o.jsx(e.h3,{id:"yellow",children:"Yellow"}),`
`,o.jsx(n,{of:x}),`
`,o.jsx(e.h3,{id:"improve-semantics",children:"Improve semantics"}),`
`,o.jsxs(e.p,{children:["By default, a Spotlight renders a ",o.jsx(e.code,{children:"<div>"}),` element in HTML.
Use the `,o.jsx(e.code,{children:"as"})," prop to make your markup more semantic."]}),`
`,o.jsx(n,{of:f}),`
`,o.jsx(e.h2,{id:"tokens",children:"Tokens"}),`
`,o.jsx(j,{tokens:b})]})}function R(t={}){const{wrapper:e}={...s(),...t.components};return e?o.jsx(e,{...t,children:o.jsx(r,{...t})}):r(t)}export{R as default};
