import{j as e}from"./jsx-runtime-j_jdvEMj.js";import{useMDXComponents as o}from"./index-BSj771as.js";import{ae as a,aq as r,ar as l,as as d,at as s}from"./index-DghSMygP.js";import{I as c,R as h,L as m}from"./Image.stories-CBAY-jKw.js";import"./index-B-o1Wr-g.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-C53Diy8J.js";import"../sb-preview/runtime.js";import"./index-DolzVqEf.js";import"./index-D-8MO0q_.js";import"./index-CJyPbrN5.js";import"./index-DrFu-skq.js";import"./Image-FUeHJ70v.js";import"./clsx-B-dksMZM.js";const p=`<!-- @license CC0-1.0 -->

# Image

Displays an image.

## Design

Every Image should be shown in one of the [available aspect ratios](https://designsystem.amsterdam/?path=/docs/brand-design-tokens-aspect-ratio--docs).
The default is 16:9.
If the intrinsic dimensions of the source do not match an aspect ratio, the image will get cropped to cover the intended area.

## Guidelines

- Do not forget to include a description of the image in the \`alt\` attribute.
  This ensures that screen reader users can also access this information.
  Additionally, it can aid in search engine optimization.
- A description is unnecessary for decorative images; use \`alt=""\` for these.
  Examples are images that add little to the nearby text or pictures that purely contribute to the design or atmosphere of the page (source: [W3C Web Accessibility Initiative](https://www.w3.org/WAI/tutorials/images/decorative/)).
- Optionally specify multiple candidates for the image through the \`srcSet\` attribute.
  For example, provide small, medium, and large variants for various screen sizes.
  This prevents unnecessary downloading of large files.
  Do this especially for the main image of a page, where the difference between sizes on a narrow and wide screen is most significant.

## Relevant WCAG requirements

- [WCAG 1.1.1](https://www.w3.org/TR/WCAG22/#non-text-content): Non-text content must have a text alternative.
- [WCAG 1.4.5](https://www.w3.org/TR/WCAG22/#images-of-text): Use text instead of images of text.
- [WCAG 1.4.9](https://www.w3.org/TR/WCAG22/#images-of-text-no-exception): Use images of text only when there is no alternative.
`;/*@license CC0-1.0*/function i(n){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",...o(),...n.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(a,{of:c}),`
`,e.jsx(r,{children:p}),`
`,e.jsx(l,{}),`
`,e.jsx(d,{}),`
`,e.jsx(t.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(t.h3,{id:"responsive-images",children:"Responsive images"}),`
`,e.jsxs(t.p,{children:["Provide a set of smaller and larger instances of the image (through ",e.jsx(t.code,{children:"srcSet"}),", see ",e.jsx(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#srcset",rel:"nofollow",children:"MDN"}),`) to let the browser select the optimal source file.
A mobile device can often download a smaller file, saving the user’s bandwidth and time.
Don’t forget to still include the required `,e.jsx(t.code,{children:"src"})," attribute."]}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(t.h3,{id:"lazy-loading",children:"Lazy loading"}),`
`,e.jsxs(t.p,{children:["Set the ",e.jsx(t.code,{children:"loading"})," attribute (see ",e.jsx(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#loading",rel:"nofollow",children:"MDN"}),") to ",e.jsx(t.code,{children:"lazy"}),` and the browser will wait to load the image until it is close to the viewport.
Consider setting this for images below the top area of the page.`]}),`
`,e.jsx(s,{of:m})]})}function z(n={}){const{wrapper:t}={...o(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(i,{...n})}):i(n)}export{z as default};
