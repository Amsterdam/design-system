import{j as e}from"./iframe-Dx3tBSCK.js";import{useMDXComponents as a}from"./index-Cm8WOTwj.js";import{M as o,f as i,P as r,h as m,i as l}from"./blocks-NS2XOqyi.js";import{a as d,R as c}from"./ImageSlider.stories-CV7nir_P.js";import{D as p}from"./DesignTokensTable-Crs8EIUX.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BOhNFwf-.js";import"./Image-DOZ4DpRD.js";import"./generateAspectRatioClass-jt2KOtJX.js";import"./Button-BBgsLrRF.js";import"./Icon-C6MQMutL.js";import"./BorderSample-BTSZ1UEW.js";import"./formatTokenValue-BYjgZrXg.js";import"./ColorSample-Cjeb0sTL.js";import"./SpacingSample-awuARjeK.js";const u=`<!-- @license CC0-1.0 -->

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
`,h={"image-slider":{gap:{$value:"{ams.space.xs}",$type:"dimension",$extensions:{"amsterdam.designsystem.subtype":"spacingSample"}},scroller:{gap:{$value:"{ams.space.xs}",$type:"dimension",$extensions:{"amsterdam.designsystem.subtype":"spacingSample"}},"outline-offset":{$value:"{ams.focus.outline-offset}",$type:"dimension",$extensions:{"amsterdam.designsystem.subtype":"spacingSample"}}},thumbnails:{gap:{$value:"{ams.space.xs}",$type:"dimension",$extensions:{"amsterdam.designsystem.subtype":"spacingSample"}},thumbnail:{"background-color":{$value:"transparent",$type:"color"},cursor:{$value:"{ams.cursor.interactive}"},opacity:{$value:"40%"},"outline-offset":{$value:"{ams.focus.outline-offset}",$type:"dimension",$extensions:{"amsterdam.designsystem.subtype":"spacingSample"}},"in-view":{opacity:{$value:"100%"}},hover:{opacity:{$value:"100%"}}}}}},g={ams:h};function t(n){const s={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",...a(),...n.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,`
`,`
`,e.jsx(o,{of:d}),`
`,e.jsx(i,{children:u}),`
`,e.jsx(r,{}),`
`,e.jsx(m,{}),`
`,e.jsx(s.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(s.h3,{id:"responsive-images",children:"Responsive images"}),`
`,e.jsxs(s.p,{children:["Provide a set of smaller and larger instances for every image (through ",e.jsx(s.code,{children:"srcSet"}),", see ",e.jsx(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#srcset",rel:"nofollow",children:"MDN"}),`) to let the browser select the optimal source file.
A mobile device can often download a smaller file, saving the user’s bandwidth and time.
Don’t forget to still include the required `,e.jsx(s.code,{children:"src"})," attribute."]}),`
`,e.jsx(l,{of:c}),`
`,e.jsx(s.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsx(p,{tokens:g})]})}function I(n={}){const{wrapper:s}={...a(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(t,{...n})}):t(n)}export{I as default};
