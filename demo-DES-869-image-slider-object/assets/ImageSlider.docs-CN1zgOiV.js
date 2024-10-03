import{j as e}from"./jsx-runtime-BlAj40OV.js";import{useMDXComponents as n}from"./index-BI1Biiay.js";import{ae as i,ak as a,al as r,am as m,an as l}from"./index-uJvXS2zB.js";import{I as d,R as c}from"./ImageSlider.stories-qNe3-i_a.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-CL24yUBS.js";import"../sb-preview/runtime.js";import"./index-Cf-03bMR.js";import"./index-D-8MO0q_.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";import"./clsx-B-dksMZM.js";import"./index.esm-BBV4ZYo5.js";import"./IconButton-CifdSLJY.js";import"./Icon-msbkstIT.js";import"./Image-CVzrCme5.js";import"./Screen-Bi3gjHLv.js";const h=`<!-- @license CC0-1.0 -->

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
- Feature the most essential image first.
- Display the Image Slider at the entire width of the [Screen](/docs/components-layout-screen--docs); do not position it on the [Grid](/docs/components-layout-grid--docs).
- Provide at least 2 images but at most 5.
- Assume that some or many users will not use the Slider and only see the first image.
  Display all images separately if you want each of them to receive attention.
- Consult the [Image](/docs/components-media-image--docs) docs for guidelines on the individual images.
`;/*@license CC0-1.0*/function o(s){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",...n(),...s.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(i,{of:d}),`
`,e.jsx(a,{children:h}),`
`,e.jsx(r,{}),`
`,e.jsx(m,{}),`
`,e.jsx(t.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(t.h3,{id:"responsive-images",children:"Responsive images"}),`
`,e.jsxs(t.p,{children:["Provide a set of smaller and larger instances for every image (through ",e.jsx(t.code,{children:"srcSet"}),", see ",e.jsx(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#srcset",rel:"nofollow",children:"MDN"}),`) to let the browser select the optimal source file.
A mobile device can often download a smaller file, saving the user’s bandwidth and time.
Don’t forget to still include the required `,e.jsx(t.code,{children:"src"})," attribute."]}),`
`,e.jsx(l,{of:c})]})}function A(s={}){const{wrapper:t}={...n(),...s.components};return t?e.jsx(t,{...s,children:e.jsx(o,{...s})}):o(s)}export{A as default};
