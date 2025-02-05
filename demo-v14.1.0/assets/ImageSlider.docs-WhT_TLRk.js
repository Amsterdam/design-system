import{j as e}from"./jsx-runtime-z8MfsBtr.js";import{useMDXComponents as o}from"./index-BAvqEBP-.js";import{ae as i,aq as a,ar as r,as as l,at as m}from"./index-DUZAjGgx.js";import{I as d,R as h}from"./ImageSlider.stories-uABF2HD_.js";import"./index-C9rmetsa.js";import"./index-D7uoVdV3.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B8D8noXY.js";import"../sb-preview/runtime.js";import"./index-D-OUEn-9.js";import"./index-Cu4lwwaE.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";import"./clsx-B-dksMZM.js";import"./index.esm-X3U7dYaT.js";import"./IconButton-1Nl16OUv.js";import"./Icon-BoBhPfLP.js";import"./Image-wjPwPRFj.js";const c=`<!-- @license CC0-1.0 -->

# Image Slider

Displays a small set of images in a limited space.

## Design

The first or selected image shows at its maximum size.
Every image displays a thumbnail at about 20% of its width.
Users can use buttons, thumbnails or swiping to navigate between the images.
The buttons re not displayed on a narrow touch device.
The images do not slide automatically.

## How to use

- Use this for a series of images that belong together.
- Provide at least 2 images and at most 5.
- Feature the most essential image first.
- Assume that some or many users will not navigate between the slides and only see the first image.
  Display all images separately if you want each of them to receive attention.
- A full-width Image Slider should run from one edge of the Screen to the other;
  position it next to a Grid, not in a Cell spanning all columns.
  Smaller sliders are fine in a Grid Cell.
- Consult the [Image](/docs/components-media-image--docs) docs for guidelines on the individual images.
`;/*@license CC0-1.0*/function s(n){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",...o(),...n.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(i,{of:d}),`
`,e.jsx(a,{children:c}),`
`,e.jsx(r,{}),`
`,e.jsx(l,{}),`
`,e.jsx(t.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(t.h3,{id:"responsive-images",children:"Responsive images"}),`
`,e.jsxs(t.p,{children:["Provide a set of smaller and larger instances for every image (through ",e.jsx(t.code,{children:"srcSet"}),", see ",e.jsx(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#srcset",rel:"nofollow",children:"MDN"}),`) to let the browser select the optimal source file.
A mobile device can often download a smaller file, saving the user’s bandwidth and time.
Don’t forget to still include the required `,e.jsx(t.code,{children:"src"})," attribute."]}),`
`,e.jsx(m,{of:h})]})}function T(n={}){const{wrapper:t}={...o(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}export{T as default};
