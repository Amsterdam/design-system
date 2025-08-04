import{j as e}from"./iframe-DP3tNp83.js";import{useMDXComponents as o}from"./index-6h8_s8Id.js";import{M as i,c as a,P as r,e as l,f as m}from"./blocks-u5CaE7x8.js";import{I as d,R as c}from"./ImageSlider.stories-DoPcSQPC.js";import"./index-C3X2GkD-.js";import"./Button-CS-KjUs9.js";import"./Icon-Bk7oNDrO.js";import"./generateAspectRatioClass-CefTNpDa.js";import"./Image-CHmySmTG.js";const h=`<!-- @license CC0-1.0 -->

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
`;/*@license CC0-1.0*/function t(s){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",...o(),...s.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(i,{of:d}),`
`,e.jsx(a,{children:h}),`
`,e.jsx(r,{}),`
`,e.jsx(l,{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"responsive-images",children:"Responsive images"}),`
`,e.jsxs(n.p,{children:["Provide a set of smaller and larger instances for every image (through ",e.jsx(n.code,{children:"srcSet"}),", see ",e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#srcset",rel:"nofollow",children:"MDN"}),`) to let the browser select the optimal source file.
A mobile device can often download a smaller file, saving the user’s bandwidth and time.
Don’t forget to still include the required `,e.jsx(n.code,{children:"src"})," attribute."]}),`
`,e.jsx(m,{of:c})]})}function y(s={}){const{wrapper:n}={...o(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{y as default};
