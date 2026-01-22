import{j as t}from"./iframe-BknBKS7d.js";import{useMDXComponents as s}from"./index-CCGEqZY8.js";import{M as i,f as a,P as r,h as c,i as h}from"./blocks-BGzDTdSp.js";import{a as d,H as l}from"./Spotlight.stories-BFNNb32P.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BVYPEpyE.js";import"./exampleContent-Du2yH2Fl.js";const p=`<!-- @license CC0-1.0 -->

# Spotlight

Emphasizes a section on a page through a distinctive background colour.

## Guidelines

- Use the entire width of the [Page](/docs/components-containers-page--docs) container.
  Do not position it on the [Grid](/docs/components-layout-grid--docs).
  Wrap the content in a Grid with extra large vertical padding.
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
`;function o(n){const e={h2:"h2",h3:"h3",p:"p",...s(),...n.components};return t.jsxs(t.Fragment,{children:[`
`,`
`,t.jsx(i,{of:d}),`
`,t.jsx(a,{children:p}),`
`,t.jsx(r,{}),`
`,t.jsx(c,{}),`
`,t.jsx(e.h2,{id:"examples",children:"Examples"}),`
`,t.jsx(e.h3,{id:"highlight-content",children:"Highlight content"}),`
`,t.jsx(e.p,{children:"Use a Spotlight to direct the user’s attention to the most important or actionable content on the page."}),`
`,t.jsx(h,{of:l})]})}function w(n={}){const{wrapper:e}={...s(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(o,{...n})}):o(n)}export{w as default};
