import{j as e}from"./iframe-DNANmwiA.js";import{useMDXComponents as o}from"./index-BHItoz7S.js";import{M as a,e as r,f as l,h as m,i as t}from"./blocks-CLzJduZj.js";import{a as c,R as d,W as p}from"./ImageSlider.stories-DgQaR7BC.js";import{D as h}from"./DesignTokensTable-BQnnnCRZ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DJEgq98D.js";import"./Button-BDR9hiZW.js";import"./Icon-Bdlpoo9F.js";import"./Figure-8XrYLVyA.js";import"./Image-B3Us-DGC.js";import"./generateAspectRatioClass-jt2KOtJX.js";import"./BorderSample-DCE1dtT8.js";import"./formatTokenValue-BYjgZrXg.js";import"./Code-AVUF9eE5.js";import"./ColorSample-DGHs9j19.js";import"./SpaceSample-Dv1OwoWW.js";import"./TypographySample-E2NzdmTC.js";const u=`<!-- @license CC0-1.0 -->

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
`,g={"image-slider":{gap:{$value:"{ams.space.xs}",$type:"dimension",$extensions:{"nl.amsterdam.subtype":"space"}},scroller:{gap:{$value:"{ams.space.xs}",$type:"dimension",$extensions:{"nl.amsterdam.subtype":"space"}},"outline-offset":{$value:"{ams.focus.outline-offset}",$type:"dimension",$extensions:{"nl.amsterdam.subtype":"space"}}},thumbnails:{gap:{$value:"{ams.space.xs}",$type:"dimension",$extensions:{"nl.amsterdam.subtype":"space"}},thumbnail:{"background-color":{$value:"transparent",$type:"color"},cursor:{$value:"{ams.cursor.interactive}"},opacity:{$value:"40%"},"outline-offset":{$value:"{ams.focus.outline-offset}",$type:"dimension",$extensions:{"nl.amsterdam.subtype":"space"}},"in-view":{opacity:{$value:"100%"}},hover:{opacity:{$value:"100%"}}}},figure:{"margin-block-end":{$value:"{ams.space.m}",$type:"dimension",$extensions:{"nl.amsterdam.subtype":"space"}}}}},f={ams:g};function i(n){const s={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",...o(),...n.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,`
`,`
`,e.jsx(a,{of:c}),`
`,e.jsx(r,{children:u}),`
`,e.jsx(l,{}),`
`,e.jsx(m,{}),`
`,e.jsx(s.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(s.h3,{id:"responsive-images",children:"Responsive images"}),`
`,e.jsxs(s.p,{children:["Provide a set of smaller and larger instances for every image (through ",e.jsx(s.code,{children:"srcSet"}),", see ",e.jsx(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#srcset",rel:"nofollow",children:"MDN"}),`) to let the browser select the optimal source file.
A mobile device can often download a smaller file, saving the user’s bandwidth and time.
Don’t forget to still include the required `,e.jsx(s.code,{children:"src"})," attribute."]}),`
`,e.jsx(t,{of:d}),`
`,e.jsx(s.h3,{id:"with-captions",children:"With captions"}),`
`,e.jsx(s.p,{children:`Add a caption to any image to display a description below it, e.g. for context or attribution.
Keep it short — they take up vertical space, especially on mobile.
Consistent caption lengths across images help avoid large layout shifts when sliding.`}),`
`,e.jsx(t,{of:p}),`
`,e.jsx(s.h2,{id:"design-tokens",children:"Design tokens"}),`
`,e.jsx(h,{tokens:f})]})}function W(n={}){const{wrapper:s}={...o(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(i,{...n})}):i(n)}export{W as default};
