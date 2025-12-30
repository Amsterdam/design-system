import{j as e}from"./iframe-C5ecNl_V.js";import{useMDXComponents as o}from"./index-Yn57qL7G.js";import{M as a,f as i,P as r,h as l,i as m}from"./blocks-DUgbiV_s.js";import{a as c,R as d}from"./ImageSlider.stories-zxaKedWI.js";import{D as p}from"./DesignTokensTable-Cdn5cVe9.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C03HJkHV.js";import"./Image-B5bXtKU2.js";import"./generateAspectRatioClass-jt2KOtJX.js";import"./Button-CVPMAMGK.js";import"./Icon-8bFle_WR.js";const u=`<!-- @license CC0-1.0 -->

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
`,h={"image-slider":{gap:{$value:"{ams.space.xs}",$extensions:{"ams.type":"gap"}},scroller:{gap:{$value:"{ams.space.xs}",$extensions:{"ams.type":"gap"}},"outline-offset":{$value:"{ams.focus.outline-offset}",$extensions:{"ams.type":"outlineOffset"}}},thumbnails:{gap:{$value:"{ams.space.xs}",$extensions:{"ams.type":"gap"}},thumbnail:{"background-color":{$value:"transparent",$type:"color"},cursor:{$value:"{ams.cursor.interactive}",$extensions:{"ams.type":"cursor"}},opacity:{$value:"40%",$extensions:{"ams.type":"opacity"}},"outline-offset":{$value:"{ams.focus.outline-offset}",$extensions:{"ams.type":"outlineOffset"}},"in-view":{opacity:{$value:"100%",$extensions:{"ams.type":"opacity"}}},hover:{opacity:{$value:"100%",$extensions:{"ams.type":"opacity"}}}}}}},f={ams:h};function t(n){const s={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",...o(),...n.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,`
`,`
`,e.jsx(a,{of:c}),`
`,e.jsx(i,{children:u}),`
`,e.jsx(r,{}),`
`,e.jsx(l,{}),`
`,e.jsx(s.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(s.h3,{id:"responsive-images",children:"Responsive images"}),`
`,e.jsxs(s.p,{children:["Provide a set of smaller and larger instances for every image (through ",e.jsx(s.code,{children:"srcSet"}),", see ",e.jsx(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#srcset",rel:"nofollow",children:"MDN"}),`) to let the browser select the optimal source file.
A mobile device can often download a smaller file, saving the user’s bandwidth and time.
Don’t forget to still include the required `,e.jsx(s.code,{children:"src"})," attribute."]}),`
`,e.jsx(m,{of:d}),`
`,e.jsx(s.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsx(p,{tokens:f})]})}function k(n={}){const{wrapper:s}={...o(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(t,{...n})}):t(n)}export{k as default};
