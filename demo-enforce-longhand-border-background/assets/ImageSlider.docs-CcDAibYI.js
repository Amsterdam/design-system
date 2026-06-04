import{n as e}from"./chunk-DnJy8xQt.js";import{Ht as t}from"./iframe-DAX3xGOk.js";import{r as n}from"./react-CIuRvFeK.js";import{c as r,f as i,i as a,l as o,n as s,s as c}from"./blocks-DzAWs_wq.js";import{n as l,t as u}from"./DesignTokensTable-60qKNBfG.js";import{t as d}from"./mdx-react-shim-CZ45UMQO.js";import{ResponsiveImages as f,WithCaptions as p,n as m,t as h}from"./ImageSlider.stories-Cn1jdtgn.js";var g,_=e((()=>{g=`<!-- @license CC0-1.0 -->

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
`})),v,y,b=e((()=>{v={"image-slider":{gap:{$value:`{ams.space.xs}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},scroller:{gap:{$value:`{ams.space.xs}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"outline-offset":{$value:`{ams.focus.outline-offset}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}},thumbnails:{gap:{$value:`{ams.space.xs}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},thumbnail:{"background-color":{$value:`transparent`,$type:`color`},cursor:{$value:`{ams.cursor.interactive}`,$extensions:{"nl.amsterdam.type":`cursor`}},opacity:{$value:`40%`,$extensions:{"nl.amsterdam.type":`opacity`}},"outline-offset":{$value:`{ams.focus.outline-offset}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"in-view":{opacity:{$value:`100%`,$extensions:{"nl.amsterdam.type":`opacity`}}},hover:{opacity:{$value:`100%`,$extensions:{"nl.amsterdam.type":`opacity`}}}}},figure:{"margin-block-end":{$value:`{ams.space.m}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}}}},y={ams:v}}));function x(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,p:`p`,...n(),...e.components};return(0,C.jsxs)(C.Fragment,{children:[`
`,`
`,`
`,`
`,(0,C.jsx)(r,{of:h}),`
`,(0,C.jsx)(c,{children:g}),`
`,(0,C.jsx)(o,{}),`
`,(0,C.jsx)(a,{}),`
`,(0,C.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,C.jsx)(t.h3,{id:`responsive-images`,children:`Responsive images`}),`
`,(0,C.jsxs)(t.p,{children:[`Provide a set of smaller and larger instances for every image (through `,(0,C.jsx)(t.code,{children:`srcSet`}),`, see `,(0,C.jsx)(t.a,{href:`https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#srcset`,rel:`nofollow`,children:`MDN`}),`) to let the browser select the optimal source file.
A mobile device can often download a smaller file, saving the user’s bandwidth and time.
Don’t forget to still include the required `,(0,C.jsx)(t.code,{children:`src`}),` attribute.`]}),`
`,(0,C.jsx)(s,{of:f}),`
`,(0,C.jsx)(t.h3,{id:`with-captions`,children:`With captions`}),`
`,(0,C.jsx)(t.p,{children:`Add a caption to any image to display a description below it, e.g. for context or attribution.
Keep captions short – they take up vertical space, especially on mobile.
Consistent caption lengths across images help avoid large layout shifts when sliding.`}),`
`,(0,C.jsx)(s,{of:p}),`
`,(0,C.jsx)(t.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,C.jsx)(u,{tokens:y})]})}function S(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,C.jsx)(t,{...e,children:(0,C.jsx)(x,{...e})}):x(e)}var C;e((()=>{C=t(),d(),i(),m(),_(),b(),l()}))();export{S as default};