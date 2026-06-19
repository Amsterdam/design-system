import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-BqsN2jGA.js";import{E as n,a as r,f as i,i as a,l as o,m as s,n as c,u as l}from"./blocks-BH5Qbaj0.js";import{n as u,t as d}from"./DesignTokensTable-DtFYz5Wc.js";import{t as f}from"./mdx-react-shim-uRs_E9Fe.js";import{ResponsiveImages as p,WithCaptions as m,n as h,t as g}from"./ImageSlider.stories-CL2S4y8C.js";var _,v,y=e((()=>{_={"image-slider":{gap:{$value:`{ams.space.xs}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},scroller:{gap:{$value:`{ams.space.xs}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"outline-offset":{$value:`{ams.focus.outline-offset}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}},thumbnails:{gap:{$value:`{ams.space.xs}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},thumbnail:{"background-color":{$value:`transparent`,$type:`color`},cursor:{$value:`{ams.cursor.interactive}`,$extensions:{"nl.amsterdam.type":`cursor`}},opacity:{$value:`40%`,$extensions:{"nl.amsterdam.type":`opacity`}},"outline-offset":{$value:`{ams.focus.outline-offset}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"in-view":{opacity:{$value:`100%`,$extensions:{"nl.amsterdam.type":`opacity`}}},hover:{opacity:{$value:`100%`,$extensions:{"nl.amsterdam.type":`opacity`}}}}},figure:{"margin-block-end":{$value:`{ams.space.m}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}}}},v={ams:_}}));function b(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...n(),...e.components};return(0,S.jsxs)(S.Fragment,{children:[`
`,`
`,`
`,`
`,(0,S.jsx)(o,{of:g}),`
`,(0,S.jsx)(i,{}),`
`,(0,S.jsx)(r,{of:g}),`
`,(0,S.jsx)(l,{}),`
`,(0,S.jsx)(a,{}),`
`,(0,S.jsx)(t.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,S.jsx)(t.h3,{id:`when-to-use`,children:`When to use`}),`
`,(0,S.jsx)(t.p,{children:`Use an Image Slider for a series of images that belong together.`}),`
`,(0,S.jsx)(t.h3,{id:`when-not-to-use`,children:`When not to use`}),`
`,(0,S.jsx)(t.p,{children:`Assume that some or many users will not navigate between the slides and only see the first image.
Display all images separately if you want each of them to receive attention.`}),`
`,(0,S.jsx)(t.h3,{id:`how-to-use`,children:`How to use`}),`
`,(0,S.jsx)(t.p,{children:`Provide at least 2 images and at most 5.
Feature the most essential image first.`}),`
`,(0,S.jsxs)(t.p,{children:[`A full-width Image Slider should run from one edge of the `,(0,S.jsx)(t.a,{href:`/docs/components-containers-page--docs`,children:`Page`}),` container to the other; position it next to a Grid, not in a Cell spanning all columns.
Smaller sliders are fine in a Grid Cell.`]}),`
`,(0,S.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,S.jsx)(t.h3,{id:`responsive-images`,children:`Responsive images`}),`
`,(0,S.jsxs)(t.p,{children:[`Provide a set of smaller and larger instances for every image (through `,(0,S.jsx)(t.code,{children:`srcSet`}),`, see `,(0,S.jsx)(t.a,{href:`https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#srcset`,rel:`nofollow`,children:`MDN`}),`) to let the browser select the optimal source file.
A mobile device can often download a smaller file, saving the user’s bandwidth and time.
Don’t forget to still include the required `,(0,S.jsx)(t.code,{children:`src`}),` attribute.`]}),`
`,(0,S.jsx)(c,{of:p}),`
`,(0,S.jsx)(t.h3,{id:`with-captions`,children:`With captions`}),`
`,(0,S.jsx)(t.p,{children:`Add a caption to any image to display a description below it, e.g. for context or attribution.
Keep captions short – they take up vertical space, especially on mobile.
Consistent caption lengths across images help avoid large layout shifts when sliding.`}),`
`,(0,S.jsx)(c,{of:m}),`
`,(0,S.jsx)(t.h2,{id:`design`,children:`Design`}),`
`,(0,S.jsx)(t.p,{children:`The first or selected image shows at its maximum size.
Every image displays a thumbnail at about 20% of its width.
Users can use buttons, thumbnails, or swiping to navigate between the images.
The buttons are not displayed on a narrow touch device.
The images do not slide automatically.`}),`
`,(0,S.jsx)(t.h2,{id:`see-also`,children:`See also`}),`
`,(0,S.jsxs)(t.ul,{children:[`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.a,{href:`/docs/components-media-image--docs`,children:`Image`}),` – guidelines for individual images.`]}),`
`]}),`
`,(0,S.jsx)(t.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,S.jsx)(d,{tokens:v})]})}function x(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,S.jsx)(t,{...e,children:(0,S.jsx)(b,{...e})}):b(e)}var S;e((()=>{S=t(),f(),s(),u(),y(),h()}))();export{x as default};