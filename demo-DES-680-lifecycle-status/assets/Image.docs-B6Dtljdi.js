import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{useMDXComponents as i}from"./index-DlpNa54Y.js";import{M as a,d as r,P as l,e as c,f as o}from"./index-SJQ_bW7h.js";import{I as d,M as m,L as h}from"./Image.stories-BEWLhhXt.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-Cnf0w6m6.js";import"../sb-preview/runtime.js";import"./index-B8XB3FuZ.js";import"./index-COebWTXQ.js";import"./index-B8K4vdXH.js";import"./index-DrFu-skq.js";import"./Image-z3YSpimw.js";import"./clsx-B-dksMZM.js";const p=`<!-- @license CC0-1.0 -->

# Image

Displays an image.

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
- Ensure that the aspect ratio of the image is supported by the [Aspect Ratio](/docs/components-layout-aspect-ratio--docs) component.

## Relevant WCAG Requirements

- [WCAG 1.1.1](https://www.w3.org/TR/WCAG22/#non-text-content): Non-text content must have a text alternative.
- [WCAG 1.4.5](https://www.w3.org/TR/WCAG22/#images-of-text): Use text instead of images of text.
- [WCAG 1.4.9](https://www.w3.org/TR/WCAG22/#images-of-text-no-exception): Use images of text only when there is no alternative.
`;function s(n){const t={a:"a",code:"code",h2:"h2",p:"p",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:d}),`
`,e.jsx(r,{children:p}),`
`,e.jsx(t.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(l,{}),`
`,e.jsx(c,{}),`
`,e.jsx(t.h2,{id:"provide-multiple-sources",children:"Provide multiple sources"}),`
`,e.jsxs(t.p,{children:["Use the srcSet prop, which controls the corresponding HTML attribute (see ",e.jsx(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#srcset",rel:"nofollow",children:"MDN"}),`), to let the browser select the optimal source file for the image.
A mobile device can often download a smaller file, saving the user’s bandwidth and time.`]}),`
`,e.jsx(o,{of:m}),`
`,e.jsx(t.h2,{id:"prevent-unnecessary-loading",children:"Prevent unnecessary loading"}),`
`,e.jsxs(t.p,{children:["Set the ",e.jsx(t.code,{children:"loading"})," attribute (see ",e.jsx(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#loading",rel:"nofollow",children:"MDN"}),") to ",e.jsx(t.code,{children:"lazy"}),` and the browser will wait to load the image until it is close to the viewport.
Consider setting this for images below the top area of the page.`]}),`
`,e.jsx(o,{of:h})]})}function E(n={}){const{wrapper:t}={...i(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}export{E as default};