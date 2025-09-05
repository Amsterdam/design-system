import{j as e}from"./iframe-QaqaIjEY.js";import{useMDXComponents as i}from"./index-lGPlxxjR.js";import{M as o,c as r,P as l,e as m,f as n}from"./blocks-8h0CK36o.js";import{I as d,R as c,V as h}from"./ImageSlider.stories-DkOyQMwl.js";import"./index-dNZl38us.js";import"./Button-DXx-8hQz.js";import"./Icon-DgXc1l3W.js";import"./generateAspectRatioClass-CefTNpDa.js";import"./Image-DpnIYaxJ.js";const g=`<!-- @license CC0-1.0 -->

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
- A full-width Image Slider should run from one edge of the [Page](/docs/components-containers-page--docs) container to the other;
  position it next to a Grid, not in a Cell spanning all columns.
  Smaller sliders are fine in a Grid Cell.
- Consult the [Image](/docs/components-media-image--docs) docs for guidelines on the individual images.
`;/*@license CC0-1.0*/function a(t){const s={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",...i(),...t.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(o,{of:d}),`
`,e.jsx(r,{children:g}),`
`,e.jsx(l,{}),`
`,e.jsx(m,{}),`
`,e.jsx(s.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(s.h3,{id:"responsive-images",children:"Responsive images"}),`
`,e.jsxs(s.p,{children:["Provide a set of smaller and larger instances for every image (through ",e.jsx(s.code,{children:"srcSet"}),", see ",e.jsx(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#srcset",rel:"nofollow",children:"MDN"}),`) to let the browser select the optimal source file.
A mobile device can often download a smaller file, saving the user’s bandwidth and time.
Don’t forget to still include the required `,e.jsx(s.code,{children:"src"})," attribute."]}),`
`,e.jsx(n,{of:c}),`
`,e.jsx(s.h3,{id:"various-aspect-ratios",children:"Various aspect ratios"}),`
`,e.jsx(s.p,{children:`The images can have different aspect ratios.
The selected image gets centered, while the thumbnails stretch vertically.
Note that portrait images can become very tall.
In this case, wrap the slider in a sufficiently narrow Grid Cell.`}),`
`,e.jsx(n,{of:h})]})}function C(t={}){const{wrapper:s}={...i(),...t.components};return s?e.jsx(s,{...t,children:e.jsx(a,{...t})}):a(t)}export{C as default};
