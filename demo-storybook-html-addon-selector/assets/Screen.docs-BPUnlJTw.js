import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as s}from"./index-CxbY7dAs.js";import{M as i,h as r,P as a,i as m}from"./index-BdHqMTts.js";import{S as c}from"./Screen.stories-dVU0odsT.js";import"./index-yBjzXJbu.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-C__MTIfq.js";import"./index-fNjTmf9T.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./clsx-B-dksMZM.js";const d=`<!-- @license CC0-1.0 -->

# Screen

Manages the maximum width and alignment of the entire website or application.

## Guidelines

- This should be the outermost component of your website or application.
- Within it, combine components such as
  [Grid](https://designsystem.amsterdam/?path=/docs/components-layout-grid--docs),
  [Page Header](https://designsystem.amsterdam/?path=/docs/components-containers-page-header--docs),
  [Page Footer](https://designsystem.amsterdam/?path=/docs/components-containers-page-footer--docs),
  [Spotlight](https://designsystem.amsterdam/?path=/docs/components-containers-spotlight--docs),
  [Image Slider](https://designsystem.amsterdam/?path=/docs/components-media-image-slider--docs),
  and [Figure](https://designsystem.amsterdam/?path=/docs/components-media-figure--docs).

## Design

By default, this component expands to a width of 1600 pixels.
This is the maximum width for a website of the City of Amsterdam.
For applications, you can choose a larger maximum width of 2112 pixels.
The component horizontally centres both itself and its content.
`;/*@license CC0-1.0*/function o(t){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(i,{of:c}),`
`,e.jsx(r,{children:d}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(n.p,{children:`There’s not much to see in the example.
On a wide screen, or when zooming out, you’ll notice that the width of the pink box gets limited by the maximum width of the Screen component.`}),`
`,e.jsx(a,{}),`
`,e.jsx(m,{}),`
`,e.jsx(n.h2,{id:"structure",children:"Structure"}),`
`,e.jsx(n.p,{children:"The outer containers of your website will look like this:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<Screen>
  <PageHeader />
  <Grid />
  <Spotlight />
  <Grid />
  <Figure />
  <PageFooter />
</Screen>
`})})]})}function M(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{M as default};
