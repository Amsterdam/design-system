import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,d as n,h as r,i,n as a,p as o,u as s}from"./blocks-zzQRermb.js";import{t as c}from"./jsx-runtime-ATHzeHXA.js";import{i as l,r as u}from"./react-Dyi61YEg.js";import{n as d,t as f}from"./DesignTokensTable-Tb-KAUvl.js";import{i as p,n as m,r as h,t as g}from"./ImageSlider.stories-CtLB8S--.js";var _,v;function y(){return(y=e((()=>{_={"image-slider":{gap:{$value:`{ams.space.xs}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},scroller:{gap:{$value:`{ams.space.xs}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"outline-offset":{$value:`{ams.focus.outline-offset}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}},thumbnails:{gap:{$value:`{ams.space.xs}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},thumbnail:{"background-color":{$value:`transparent`,$type:`color`},"background-position":{$value:`center`,$extensions:{"nl.amsterdam.type":`backgroundPosition`}},cursor:{$value:`{ams.cursor.interactive}`,$extensions:{"nl.amsterdam.type":`cursor`}},opacity:{$value:`40%`,$extensions:{"nl.amsterdam.type":`opacity`}},"outline-offset":{$value:`{ams.focus.outline-offset}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"in-view":{opacity:{$value:`100%`,$extensions:{"nl.amsterdam.type":`opacity`}}},hover:{opacity:{$value:`100%`,$extensions:{"nl.amsterdam.type":`opacity`}}}}},figure:{"margin-block-end":{$value:`{ams.space.m}`,$extensions:{"nl.amsterdam.hint":`Must be a single value: it sets a longhand property, which takes only one.`,"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}}}},v={ams:_}})))()}function b(e){let r={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...l(),...e.components};return(0,S.jsxs)(S.Fragment,{children:[`
`,`
`,`
`,`
`,(0,S.jsx)(s,{of:g}),`
`,(0,S.jsx)(o,{}),`
`,(0,S.jsx)(t,{of:g}),`
`,(0,S.jsx)(n,{}),`
`,(0,S.jsx)(i,{}),`
`,(0,S.jsx)(r.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,S.jsx)(r.h3,{id:`when-to-use`,children:`When to use`}),`
`,(0,S.jsx)(r.p,{children:`Use an Image Slider for a series of images that belong together.`}),`
`,(0,S.jsx)(r.h3,{id:`when-not-to-use`,children:`When not to use`}),`
`,(0,S.jsx)(r.p,{children:`Assume that some or many users will not navigate between the slides and only see the first image.
Display all images separately if you want each of them to receive attention.`}),`
`,(0,S.jsx)(r.h3,{id:`how-to-use`,children:`How to use`}),`
`,(0,S.jsxs)(r.p,{children:[`Each entry in `,(0,S.jsx)(r.code,{children:`images`}),` accepts the props of an `,(0,S.jsx)(r.a,{href:`/docs/components-media-image--docs`,children:`Image`}),`, such as `,(0,S.jsx)(r.code,{children:`aspectRatio`}),` and `,(0,S.jsx)(r.code,{children:`srcSet`}),`, plus an optional `,(0,S.jsx)(r.code,{children:`caption`}),`.
Every image needs its own `,(0,S.jsx)(r.code,{children:`alt`}),`.`]}),`
`,(0,S.jsx)(r.p,{children:`Provide at least 2 images and at most 5.
Feature the most essential image first.`}),`
`,(0,S.jsxs)(r.p,{children:[`A full-width Image Slider should run from one edge of the `,(0,S.jsx)(r.a,{href:`/docs/components-containers-page--docs`,children:`Page`}),` container to the other; position it next to a Grid, not in a Cell spanning all columns.
Smaller sliders are fine in a Grid Cell.`]}),`
`,(0,S.jsx)(r.h2,{id:`examples`,children:`Examples`}),`
`,(0,S.jsx)(r.h3,{id:`responsive-images`,children:`Responsive images`}),`
`,(0,S.jsxs)(r.p,{children:[`Provide a set of smaller and larger instances for every image (through `,(0,S.jsx)(r.code,{children:`srcSet`}),`, see `,(0,S.jsx)(r.a,{href:`https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#srcset`,rel:`nofollow`,children:`MDN`}),`) to let the browser select the optimal source file.
A mobile device can often download a smaller file, saving the user’s bandwidth and time.
Don’t forget to still include the required `,(0,S.jsx)(r.code,{children:`src`}),` attribute.`]}),`
`,(0,S.jsx)(a,{of:m}),`
`,(0,S.jsx)(r.h3,{id:`with-captions`,children:`With captions`}),`
`,(0,S.jsx)(r.p,{children:`Add a caption to any image to display a description below it, e.g. for context or attribution.
Keep captions short – they take up vertical space, especially on mobile.
Consistent caption lengths across images help avoid large layout shifts when sliding.`}),`
`,(0,S.jsx)(a,{of:h}),`
`,(0,S.jsx)(r.h2,{id:`design`,children:`Design`}),`
`,(0,S.jsx)(r.p,{children:`The first or selected image shows at its maximum size.
Every image displays a thumbnail at about 20% of its width.
Users can use buttons, thumbnails, or swiping to navigate between the images.
The buttons are not displayed on a narrow touch device.
The images do not slide automatically.`}),`
`,(0,S.jsx)(r.p,{children:`The thumbnail strip always divides its width into five, whether there are two images or five.
Thumbnails then keep the same size across every Image Slider on a site instead of stretching to fill the row.`}),`
`,(0,S.jsx)(r.p,{children:`A thumbnail that is not in view is drawn at 40% opacity, and the one in view at full strength.
Fading the rest is what marks the current image without adding a border or a marker that would crop into the picture.`}),`
`,(0,S.jsx)(r.p,{children:`The previous and next buttons are hidden on a narrow screen with a coarse pointer.
Swiping is already the natural gesture there, and the buttons would cover a sizeable part of a small image.`}),`
`,(0,S.jsx)(r.p,{children:`Sliding is animated only for users who have not asked for reduced motion.
Everyone else is moved to the next image directly, with no travel across the screen.`}),`
`,(0,S.jsx)(r.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,S.jsx)(r.p,{children:`The strip of images is a single focusable region that a keyboard user can scroll, and it announces politely as the image in view changes.
Only the image currently in view is exposed; the others are hidden from assistive technology, so a screen reader reads one description rather than all of them at once.`}),`
`,(0,S.jsxs)(r.p,{children:[`The thumbnails are marked up as a tab list.
Each thumbnail states its position and the total, and it is named by the number and the alternate text of its image, for example ‘Afbeelding 2: …’.
The word before the number comes from the `,(0,S.jsx)(r.code,{children:`imageLabel`}),` prop, which is where a page in another language changes it.`]}),`
`,(0,S.jsx)(r.p,{children:`Arrow keys move between thumbnails, and only the selected one is in the tab order, so Tab passes the whole strip in one step rather than stopping at every image.`}),`
`,(0,S.jsx)(r.p,{children:`The tab list has no panels attached to it.
Assistive technology therefore announces the thumbnails as tabs without being able to say which region each one controls, and the images stay reachable through the scrollable region instead.`}),`
`,(0,S.jsx)(r.h2,{id:`see-also`,children:`See also`}),`
`,(0,S.jsxs)(r.ul,{children:[`
`,(0,S.jsxs)(r.li,{children:[(0,S.jsx)(r.a,{href:`/docs/components-media-image--docs`,children:`Image`}),` – guidelines for individual images.`]}),`
`]}),`
`,(0,S.jsx)(r.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,S.jsx)(f,{tokens:v})]})}function x(e={}){let{wrapper:t}={...l(),...e.components};return t?(0,S.jsx)(t,{...e,children:(0,S.jsx)(b,{...e})}):b(e)}var S;function C(){return(C=e((()=>{S=c(),u(),r(),d(),y(),p()})))()}C();export{x as default};