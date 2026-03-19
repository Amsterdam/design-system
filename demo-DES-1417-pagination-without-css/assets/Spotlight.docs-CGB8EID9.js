import{j as o}from"./iframe-C40nY34P.js";import{useMDXComponents as r}from"./index-BKJkcVWP.js";import{M as a,e as s,f as i,h as c,i as l}from"./blocks-B3q2H5aC.js";import{a as h,H as g}from"./Spotlight.stories-DwIFdWcX.js";import{D as d}from"./DesignTokensTable-BM1IRAwT.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dr27seK6.js";import"./exampleContent-D2tKGi5u.js";import"./BorderSample-BsHcE9-L.js";import"./formatTokenValue-BYjgZrXg.js";import"./Code-Ceqm_xeq.js";import"./ColorSample-Dl_gnJ8W.js";import"./SpaceSample-CXc2YeV0.js";import"./TypographySample-B5oo6MNs.js";const m=`<!-- @license CC0-1.0 -->

# Spotlight

Emphasizes a section on a page through a distinctive background colour.

## Guidelines

- Use the entire width of the [Page](/docs/components-containers-page--docs) container.
  Do not position a Spotlight on the [Grid](/docs/components-layout-grid--docs).
  Wrap its content in a Grid with extra large vertical padding.
- Use any of the [highlight colours](/docs/brand-design-tokens-colour--docs) for the background.
  The design system does not prescribe a meaning to any of these colours.
  The default is purple.
  Select [the correct colour](?path=/docs/brand-design-tokens-colour--docs#pairing-foreground-with-background-colours) for text and links against the background you choose.
- Find a fitting setup for the [amount and width of columns](/docs/pages-public-introduction--docs#how-to-size-the-grid-cells).
- By default, a Spotlight renders a \`<div>\` element in HTML.
  Use the \`as\` prop to make your markup more semantic.

## Relevant WCAG requirements

- [WCAG 1.4.3](https://www.w3.org/TR/WCAG21/#contrast-minimum): Large-scale text and images of large-scale text have a contrast ratio of at least 3:1;

## References

- [Color and contrast accessibility](https://web.dev/articles/color-and-contrast-accessibility)
`,p={spotlight:{"background-color":{$value:"{ams.color.highlight.purple}",$type:"color"},azure:{"background-color":{$value:"{ams.color.highlight.azure}",$type:"color"}},green:{"background-color":{$value:"{ams.color.highlight.green}",$type:"color"}},lime:{"background-color":{$value:"{ams.color.highlight.lime}",$type:"color"}},magenta:{"background-color":{$value:"{ams.color.highlight.magenta}",$type:"color"}},orange:{"background-color":{$value:"{ams.color.highlight.orange}",$type:"color"}},yellow:{"background-color":{$value:"{ams.color.highlight.yellow}",$type:"color"}}}},u={ams:p};function e(n){const t={h2:"h2",h3:"h3",p:"p",...r(),...n.components};return o.jsxs(o.Fragment,{children:[`
`,`
`,`
`,`
`,o.jsx(a,{of:h}),`
`,o.jsx(s,{children:m}),`
`,o.jsx(i,{}),`
`,o.jsx(c,{}),`
`,o.jsx(t.h2,{id:"examples",children:"Examples"}),`
`,o.jsx(t.h3,{id:"highlight-content",children:"Highlight content"}),`
`,o.jsx(t.p,{children:"Use a Spotlight to direct the user’s attention to the most important or actionable content on the page."}),`
`,o.jsx(l,{of:g}),`
`,o.jsx(t.h2,{id:"design-tokens",children:"Design tokens"}),`
`,o.jsx(d,{tokens:u})]})}function T(n={}){const{wrapper:t}={...r(),...n.components};return t?o.jsx(t,{...n,children:o.jsx(e,{...n})}):e(n)}export{T as default};
