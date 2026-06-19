import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-BqsN2jGA.js";import{E as n,a as r,f as i,i as a,l as o,m as s,n as c,u as l}from"./blocks-F9-V6rKS.js";import{n as u,t as d}from"./DesignTokensTable-DXjWEjPb.js";import{t as f}from"./mdx-react-shim-CVf_Uy5N.js";import{LazyLoading as p,ResponsiveImages as m,n as h,t as g}from"./Image.stories-D2BvsX8D.js";var _,v,y=e((()=>{_={image:{"aspect-ratio":{$value:`{ams.aspect-ratio.16-9}`,$extensions:{"nl.amsterdam.type":`aspectRatio`}}}},v={ams:_}}));function b(e){let t={a:`a`,code:`code`,em:`em`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...n(),...e.components};return(0,S.jsxs)(S.Fragment,{children:[`
`,`
`,`
`,`
`,(0,S.jsx)(o,{of:g}),`
`,(0,S.jsx)(i,{}),`
`,(0,S.jsx)(r,{of:g}),`
`,(0,S.jsx)(l,{}),`
`,(0,S.jsx)(a,{}),`
`,(0,S.jsx)(t.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,S.jsx)(t.h3,{id:`how-to-use`,children:`How to use`}),`
`,(0,S.jsxs)(t.p,{children:[`The `,(0,S.jsx)(t.code,{children:`alt`}),` attribute is required.
Use `,(0,S.jsx)(t.code,{children:`alt=""`}),` for decorative images – images that add little to the nearby text or contribute only to the visual atmosphere of the page.
Non-decorative images need a text description.`]}),`
`,(0,S.jsx)(t.h3,{id:`how-to-write`,children:`How to write`}),`
`,(0,S.jsxs)(t.p,{children:[`Describe the content of the image.
Imagine what you would say when reading the page to someone over the phone without mentioning that there is an image (source: `,(0,S.jsx)(t.a,{href:`https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/alt`,rel:`nofollow`,children:`MDN`}),`).`]}),`
`,(0,S.jsxs)(t.p,{children:[`The alternate text should be able to replace the image without altering the meaning of the page.
Do not use `,(0,S.jsx)(t.code,{children:`alt`}),` for text that could be construed as a caption or title (source: `,(0,S.jsx)(t.a,{href:`https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/alt`,rel:`nofollow`,children:`MDN`}),`).`]}),`
`,(0,S.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,S.jsx)(t.h3,{id:`responsive-images`,children:`Responsive images`}),`
`,(0,S.jsxs)(t.p,{children:[`Provide a set of smaller and larger instances of the image (through `,(0,S.jsx)(t.code,{children:`srcSet`}),`, see `,(0,S.jsx)(t.a,{href:`https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#srcset`,rel:`nofollow`,children:`MDN`}),`) to let the browser select the optimal source file.
A mobile device can often download a smaller file, saving the user’s bandwidth and time.
Don’t forget to still include the required `,(0,S.jsx)(t.code,{children:`src`}),` attribute.`]}),`
`,(0,S.jsx)(c,{of:m}),`
`,(0,S.jsx)(t.h3,{id:`lazy-loading`,children:`Lazy loading`}),`
`,(0,S.jsxs)(t.p,{children:[`Set the `,(0,S.jsx)(t.code,{children:`loading`}),` attribute (see `,(0,S.jsx)(t.a,{href:`https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#loading`,rel:`nofollow`,children:`MDN`}),`) to `,(0,S.jsx)(t.code,{children:`lazy`}),` and the browser will wait to load the image until it is close to the viewport.
Consider setting this for images below the top area of the page.`]}),`
`,(0,S.jsx)(c,{of:p}),`
`,(0,S.jsx)(t.h2,{id:`features`,children:`Features`}),`
`,(0,S.jsxs)(t.p,{children:[`Optionally specify multiple candidates for the image through the `,(0,S.jsx)(t.code,{children:`srcSet`}),` attribute.
For example, provide small, medium, and large variants for various screen sizes.
This prevents unnecessary downloading of large files.
Do this especially for the main image of a page, where the difference between sizes on a narrow and wide screen is most significant.`]}),`
`,(0,S.jsx)(t.h2,{id:`design`,children:`Design`}),`
`,(0,S.jsxs)(t.p,{children:[`Every Image should be shown in one of the `,(0,S.jsx)(t.a,{href:`/docs/brand-design-tokens-aspect-ratio--docs`,children:`available aspect ratios`}),`.
The default is 16:9.
If the intrinsic dimensions of the source do not match an aspect ratio, the image will be cropped to cover the intended area.`]}),`
`,(0,S.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,S.jsxs)(t.p,{children:[`Non-visual browsers hide images with `,(0,S.jsx)(t.code,{children:`alt=""`}),` from the user.
The alternate text also displays if the image fails to load, and it can help search engine optimisation.`]}),`
`,(0,S.jsx)(t.h2,{id:`see-also`,children:`See also`}),`
`,(0,S.jsxs)(t.ul,{children:[`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.a,{href:`/docs/utilities-css-prose--docs`,children:`Prose`}),` – applies the recommended vertical spacing for editorial content.`]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsxs)(t.a,{href:`https://www.nngroup.com/articles/alt-text-usability/`,rel:`nofollow`,children:[(0,S.jsx)(t.em,{children:`Alt Text: Not Always Needed`}),`, Nielsen Norman Group`]}),` – why screen-reader users don’t need every visual experience recreated for them.`]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsxs)(t.a,{href:`https://www.w3.org/WAI/tutorials/images/decision-tree/`,rel:`nofollow`,children:[(0,S.jsx)(t.em,{children:`How to Write Good Alt Text`}),`, Web Accessibility Initiative`]}),` – a decision tree for the alt attribute in various situations.`]}),`
`]}),`
`,(0,S.jsx)(t.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,S.jsx)(d,{tokens:v})]})}function x(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,S.jsx)(t,{...e,children:(0,S.jsx)(b,{...e})}):b(e)}var S;e((()=>{S=t(),f(),s(),u(),y(),h()}))();export{x as default};