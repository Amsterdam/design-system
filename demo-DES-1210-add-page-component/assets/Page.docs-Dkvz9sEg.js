import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as o}from"./index-CxbY7dAs.js";import{M as i,h as r,P as a,i as m}from"./index-Dr0t6ocr.js";import{P as d}from"./Page.stories-BwT9xmgW.js";import"./index-yBjzXJbu.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-D1WGn7ZF.js";import"./index-fNjTmf9T.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./clsx-B-dksMZM.js";const c=`<!-- @license CC0-1.0 -->

# Page

Contains the entire website.
Sets the background colour and its maximum width, and is horizontally centered.

## Guidelines

- The Page component must be used on all websites for the City of Amsterdam.
  Applications can use it as well, although a specific layout for them is in development.
- It is the outermost container. Within it, combine components such as
  [Grid](https://designsystem.amsterdam/?path=/docs/components-layout-grid--docs),
  [Header](https://designsystem.amsterdam/?path=/docs/components-containers-header--docs),
  [Footer](https://designsystem.amsterdam/?path=/docs/components-containers-footer--docs),
  [Spotlight](https://designsystem.amsterdam/?path=/docs/components-containers-spotlight--docs),
  [Image Slider](https://designsystem.amsterdam/?path=/docs/components-media-image-slider--docs),
  and [Figure](https://designsystem.amsterdam/?path=/docs/components-media-figure--docs).

## Design

The Page container sets the maximum width for a website of the City of Amsterdam, which is 1600 pixels.
It horizontally centres both itself and its content and sets a white background.
`;/*@license CC0-1.0*/function s(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",...o(),...n.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(i,{of:d}),`
`,e.jsx(r,{children:c}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(t.p,{children:`There’s not much to see in the example.
In a wide window, or when zooming out, you’ll notice that the width of the pink box gets limited by the maximum width of the Page container.`}),`
`,e.jsx(a,{}),`
`,e.jsx(m,{}),`
`,e.jsx(t.h2,{id:"structure",children:"Structure"}),`
`,e.jsx(t.p,{children:"The outer containers of your website will look like this:"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`<Page>
  <Header />
  <Grid />
  <Spotlight />
  <Grid />
  <Figure />
  <Footer />
</Page>
`})})]})}function C(n={}){const{wrapper:t}={...o(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}export{C as default};
