import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,d as n,h as r,i,n as a,p as o,u as s}from"./blocks-CNG2gRRe.js";import{t as c}from"./jsx-runtime-ATHzeHXA.js";import{i as l,r as u}from"./react-Dyi61YEg.js";import{n as d,t as f}from"./DesignTokensTable-C1nFTWVJ.js";import{i as p,n as m,r as h,t as g}from"./Image.stories-DkQnWk6r.js";var _,v;function y(){return(y=e((()=>{_={image:{"aspect-ratio":{$value:`{ams.aspect-ratio.16-9}`,$extensions:{"nl.amsterdam.type":`aspectRatio`}},"background-color":{$value:`#e8e8e8`,$description:`A neutral tint that marks the reserved space until the image has loaded. Set as a literal because the brand layer has no matching grey yet.`,$extensions:{"nl.amsterdam.type":`color`}},"background-image":{$value:`none`,$extensions:{"nl.amsterdam.type":`backgroundImage`}},"object-position":{$value:`50% 50%`,$extensions:{"nl.amsterdam.type":`objectPosition`}}}},v={ams:_}})))()}function b(e){let r={a:`a`,code:`code`,em:`em`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...l(),...e.components};return(0,S.jsxs)(S.Fragment,{children:[`
`,`
`,`
`,`
`,(0,S.jsx)(s,{of:g}),`
`,(0,S.jsx)(o,{}),`
`,(0,S.jsx)(t,{of:g}),`
`,(0,S.jsx)(n,{}),`
`,(0,S.jsx)(i,{}),`
`,(0,S.jsx)(r.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,S.jsx)(r.h3,{id:`how-to-use`,children:`How to use`}),`
`,(0,S.jsxs)(r.p,{children:[`The `,(0,S.jsx)(r.code,{children:`alt`}),` attribute is required.
Use `,(0,S.jsx)(r.code,{children:`alt=""`}),` for decorative images – images that add little to the nearby text or contribute only to the visual atmosphere of the page.
Non-decorative images need a text description.`]}),`
`,(0,S.jsxs)(r.p,{children:[`Leaving out `,(0,S.jsx)(r.code,{children:`aspectRatio`}),` falls back to the default ratio; no value preserves the proportions of the source file.
Do not set `,(0,S.jsx)(r.code,{children:`loading="lazy"`}),` on an image in the first screenful of the page: there it delays the largest image in the viewport.`]}),`
`,(0,S.jsx)(r.h3,{id:`how-to-write`,children:`How to write`}),`
`,(0,S.jsxs)(r.p,{children:[`Describe the content of the image.
Imagine what you would say when reading the page to someone over the phone without mentioning that there is an image (source: `,(0,S.jsx)(r.a,{href:`https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/alt`,rel:`nofollow`,children:`MDN`}),`).`]}),`
`,(0,S.jsxs)(r.p,{children:[`The alternate text should be able to replace the image without altering the meaning of the page.
Do not use `,(0,S.jsx)(r.code,{children:`alt`}),` for text that could be construed as a caption or title (source: `,(0,S.jsx)(r.a,{href:`https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/alt`,rel:`nofollow`,children:`MDN`}),`).`]}),`
`,(0,S.jsx)(r.p,{children:`The text is worth writing well for more than one audience: it is what shows when the file fails to load, and search engines read it too.`}),`
`,(0,S.jsx)(r.h2,{id:`examples`,children:`Examples`}),`
`,(0,S.jsx)(r.h3,{id:`responsive-images`,children:`Responsive images`}),`
`,(0,S.jsxs)(r.p,{children:[`Provide a set of smaller and larger instances of the image (through `,(0,S.jsx)(r.code,{children:`srcSet`}),`, see `,(0,S.jsx)(r.a,{href:`https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#srcset`,rel:`nofollow`,children:`MDN`}),`) to let the browser select the optimal source file.
A mobile device can often download a smaller file, saving the user’s bandwidth and time.
Don’t forget to still include the required `,(0,S.jsx)(r.code,{children:`src`}),` attribute.`]}),`
`,(0,S.jsx)(a,{of:h}),`
`,(0,S.jsx)(r.h3,{id:`lazy-loading`,children:`Lazy loading`}),`
`,(0,S.jsxs)(r.p,{children:[`Set the `,(0,S.jsx)(r.code,{children:`loading`}),` attribute (see `,(0,S.jsx)(r.a,{href:`https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#loading`,rel:`nofollow`,children:`MDN`}),`) to `,(0,S.jsx)(r.code,{children:`lazy`}),` and the browser will wait to load the image until it is close to the viewport.
Consider setting this for images below the top area of the page.`]}),`
`,(0,S.jsx)(a,{of:m}),`
`,(0,S.jsx)(r.h2,{id:`features`,children:`Features`}),`
`,(0,S.jsxs)(r.p,{children:[`Optionally specify multiple candidates for the image through the `,(0,S.jsx)(r.code,{children:`srcSet`}),` attribute.
For example, provide small, medium, and large variants for various screen sizes.
This prevents unnecessary downloading of large files.
Do this especially for the main image of a page, where the difference between sizes on a narrow and wide screen is most significant.`]}),`
`,(0,S.jsx)(r.p,{children:`An Image fills the width of its container and always has an aspect ratio, so the browser reserves its box before the file loads and the layout does not shift.`}),`
`,(0,S.jsx)(r.h2,{id:`design`,children:`Design`}),`
`,(0,S.jsxs)(r.p,{children:[`Every Image should be shown in one of the `,(0,S.jsx)(r.a,{href:`/docs/brand-design-tokens-aspect-ratio--docs`,children:`available aspect ratios`}),`.
The default is 16:9.
If the intrinsic dimensions of the source do not match an aspect ratio, the image will be cropped to cover the intended area.
The crop is taken from the centre, so the middle of a photograph is what survives a ratio it was not made for.`]}),`
`,(0,S.jsx)(r.p,{children:`Alternate text is displayed in italics.
When a file fails to load, its description then reads as a stand-in rather than as a stray sentence in the surrounding copy.`}),`
`,(0,S.jsx)(r.p,{children:`The component sets a width of 600 pixels in the markup, which the stylesheet immediately overrides.
It only takes effect when that stylesheet does not arrive, and it keeps a missing image from rendering at whatever size the file happens to be.`}),`
`,(0,S.jsx)(r.p,{children:`An Image carries a light grey background colour, so the space it reserves reads as a placeholder rather than a hole in the page until the file arrives.
It also carries a background image that is switched off by default.
Together they let a mode move the picture out of view and show its own placeholder in the space it reserved, without the component knowing anything about that mode.`}),`
`,(0,S.jsx)(r.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,S.jsxs)(r.p,{children:[`An `,(0,S.jsx)(r.code,{children:`img`}),` with a description is exposed as an image with that text as its name.
Setting `,(0,S.jsx)(r.code,{children:`alt=""`}),` removes it from the accessibility tree instead, so a decorative image is passed over silently rather than announced as an image nobody named.`]}),`
`,(0,S.jsx)(r.p,{children:`Because the box is reserved before the file arrives, the page does not reflow as images load.
Someone reading with a screen magnifier or following a keyboard focus ring does not lose their place halfway down a page.`}),`
`,(0,S.jsx)(r.h2,{id:`see-also`,children:`See also`}),`
`,(0,S.jsxs)(r.ul,{children:[`
`,(0,S.jsxs)(r.li,{children:[(0,S.jsx)(r.a,{href:`/docs/utilities-css-prose--docs`,children:`Prose`}),` – applies the recommended vertical spacing for editorial content.`]}),`
`,(0,S.jsxs)(r.li,{children:[(0,S.jsxs)(r.a,{href:`https://www.nngroup.com/articles/alt-text-usability/`,rel:`nofollow`,children:[(0,S.jsx)(r.em,{children:`Alt Text: Not Always Needed`}),`, Nielsen Norman Group`]}),` – why screen-reader users don’t need every visual experience recreated for them.`]}),`
`,(0,S.jsxs)(r.li,{children:[(0,S.jsxs)(r.a,{href:`https://www.w3.org/WAI/tutorials/images/decision-tree/`,rel:`nofollow`,children:[(0,S.jsx)(r.em,{children:`How to Write Good Alt Text`}),`, Web Accessibility Initiative`]}),` – a decision tree for the alt attribute in various situations.`]}),`
`]}),`
`,(0,S.jsx)(r.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,S.jsx)(f,{tokens:v})]})}function x(e={}){let{wrapper:t}={...l(),...e.components};return t?(0,S.jsx)(t,{...e,children:(0,S.jsx)(b,{...e})}):b(e)}var S;function C(){return(C=e((()=>{S=c(),u(),r(),d(),y(),p()})))()}C();export{x as default};