import{j as e}from"./jsx-runtime-BjgbQsUx.js";import{useMDXComponents as a}from"./index-3rgQkYFR.js";import{ae as s,aq as r,ar as l,as as d,at as o}from"./index-GRa9dJqe.js";import{I as h,R as m,L as c}from"./Image.stories-BYgQuacP.js";import"./index-D2MAbzvX.js";import"./index-RigO-4kf.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CQiuiw03.js";import"../sb-preview/runtime.js";import"./index-BIm0odtm.js";import"./index-D-8MO0q_.js";import"./index-CHGET4sZ.js";import"./index-DrFu-skq.js";import"./Image-dslpK47z.js";import"./clsx-B-dksMZM.js";const g=`<!-- @license CC0-1.0 -->

# Image

Displays an image.

## Design

Every Image should be shown in one of the [available aspect ratios](https://designsystem.amsterdam/?path=/docs/brand-design-tokens-aspect-ratio--docs).
The default is 16:9.
If the intrinsic dimensions of the source do not match an aspect ratio, the image will get cropped to cover the intended area.

## Guidelines

- The \`alt\` attribute is required, but can be empty.
- A description is unnecessary for decorative images; use \`alt=""\` for these.
  Non-visual browsers will then hide the image from the user.
  Examples are images that add little to the nearby text, and pictures that purely contribute to the design or atmosphere of the page (source: [W3C Web Accessibility Initiative](https://www.w3.org/WAI/tutorials/images/decorative/)).
- Do describe the content of the image if the image isn’t only decorative.
  When choosing a description for your images, imagine what you would say when reading the page to someone over the phone without mentioning that there’s an image on the page (source: [MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/alt)).
- Every image’s alternate text should be able to replace the image without altering the meaning of the page.
  You should never use \`alt\` for text that could be construed as a caption or title (source: [MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/alt)).
- The alternate text will also display if the image is not (yet) loaded.
  Additionally, it can be helpful for search engine optimization.
- Optionally specify multiple candidates for the image through the \`srcSet\` attribute.
  For example, provide small, medium, and large variants for various screen sizes.
  This prevents unnecessary downloading of large files.
  Do this especially for the main image of a page, where the difference between sizes on a narrow and wide screen is most significant.

## Relevant WCAG requirements

- [WCAG 1.1.1](https://www.w3.org/TR/WCAG22/#non-text-content): Non-text content must have a text alternative.
- [WCAG 1.4.5](https://www.w3.org/TR/WCAG22/#images-of-text): Use text instead of images of text.
- [WCAG 1.4.9](https://www.w3.org/TR/WCAG22/#images-of-text-no-exception): Use images of text only when there is no alternative.

## Further reading

- [Alt Text: Not Always Needed](https://www.nngroup.com/articles/alt-text-usability/)
  (Nielsen Norman Group)
  “Adding alt text to every image does not automatically make webpage content easy to navigate and consume.
  Screen-reader users [...] do not rely on visual information,
  which means they are not interested in designers’ attempts to recreate visual experiences for them.”
- [How to Write Good Alt Text](https://www.w3.org/WAI/tutorials/images/decision-tree/)
  (Web Accessibility Initiative)
  Four questions help you decide whether an image needs describing and how to do so.
  “This decision tree describes how to use the alt attribute of the image element in various situations.”
`;/*@license CC0-1.0*/function i(n){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",...a(),...n.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(s,{of:h}),`
`,e.jsx(r,{children:g}),`
`,e.jsx(l,{}),`
`,e.jsx(d,{}),`
`,e.jsx(t.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(t.h3,{id:"responsive-images",children:"Responsive images"}),`
`,e.jsxs(t.p,{children:["Provide a set of smaller and larger instances of the image (through ",e.jsx(t.code,{children:"srcSet"}),", see ",e.jsx(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#srcset",rel:"nofollow",children:"MDN"}),`) to let the browser select the optimal source file.
A mobile device can often download a smaller file, saving the user’s bandwidth and time.
Don’t forget to still include the required `,e.jsx(t.code,{children:"src"})," attribute."]}),`
`,e.jsx(o,{of:m}),`
`,e.jsx(t.h3,{id:"lazy-loading",children:"Lazy loading"}),`
`,e.jsxs(t.p,{children:["Set the ",e.jsx(t.code,{children:"loading"})," attribute (see ",e.jsx(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#loading",rel:"nofollow",children:"MDN"}),") to ",e.jsx(t.code,{children:"lazy"}),` and the browser will wait to load the image until it is close to the viewport.
Consider setting this for images below the top area of the page.`]}),`
`,e.jsx(o,{of:c})]})}function D(n={}){const{wrapper:t}={...a(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(i,{...n})}):i(n)}export{D as default};
