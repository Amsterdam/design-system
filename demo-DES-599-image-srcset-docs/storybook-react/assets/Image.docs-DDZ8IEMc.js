import{j as e}from"./jsx-runtime-CKrituN3.js";import{M as a,d as r,P as l,e as c,f as i}from"./index-BxErrywf.js";import{I as h,S as d,a as m,L as p}from"./Image.stories-j1bEye71.js";import{useMDXComponents as o}from"./index-DI5IigMn.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-B8keLUV9.js";import"../sb-preview/runtime.js";import"./index-BtM5VmRH.js";import"./index-Bw8VTzHM.js";import"./index-Cmc67Rxs.js";import"./index-DrFu-skq.js";import"./index.esm-ChswzL_L.js";const g=`# Image

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
- Ensure that the aspect ratio of the image is supported by the [Aspect Ratio](?path=/docs/layout-aspect-ratio--docs) component.

## Relevant WCAG Requirements

- [WCAG 1.1.1](https://www.w3.org/TR/WCAG22/#non-text-content): Non-text content must have a text alternative.
- [WCAG 1.4.5](https://www.w3.org/TR/WCAG22/#images-of-text): Use text instead of images of text.
- [WCAG 1.4.9](https://www.w3.org/TR/WCAG22/#images-of-text-no-exception): Use images of text only when there is no alternative.
`;function s(n){const t=Object.assign({h2:"h2",p:"p",ul:"ul",li:"li",a:"a",code:"code"},o(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:h}),`
`,e.jsx(r,{children:g}),`
`,e.jsx(l,{}),`
`,e.jsx(c,{}),`
`,e.jsx(t.h2,{id:"image-with-srcset",children:"Image with srcset"}),`
`,e.jsx(t.p,{children:`This is an example of an image with a srcset attribute.
Read this documentation to learn more about the srcset attribute:`}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#srcset",target:"_blank",rel:"nofollow noopener noreferrer",children:"MDN Web Docs HTML"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/srcset",target:"_blank",rel:"nofollow noopener noreferrer",children:"MDN Web Docs API"})}),`
`]}),`
`,e.jsxs(t.p,{children:["When the ",e.jsx(t.code,{children:"(max-width: 832px)"}),` media query condition matches, the 640px image will load, otherwise the 1280px image will be used.
If the srcset attribute uses width descriptors, the sizes attribute must also be present, or the srcset itself will be ignored.`]}),`
`,e.jsx(i,{of:d}),`
`,e.jsxs(t.p,{children:[`When an image element's srcset contains "x" descriptors, browsers also consider the URL in the `,e.jsx(t.code,{children:"src"})," attribute (if present) as a candidate, and assign it a default descriptor of 1x."]}),`
`,e.jsx(i,{of:m}),`
`,e.jsx(t.h2,{id:"lazy-loading",children:"Lazy loading"}),`
`,e.jsxs(t.p,{children:["This is an example of native lazy loading using the ",e.jsx(t.code,{children:"loading"})," attribute. The default behaviour is ",e.jsx(t.code,{children:"eager"}),`, which means the image will load immediately.
The `,e.jsx(t.code,{children:"lazy"})," value will defer the loading of the image until it is within the viewport."]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/loading",target:"_blank",rel:"nofollow noopener noreferrer",children:"MDN Web Docs (HTML)"})}),`
`]}),`
`,e.jsx(i,{of:p})]})}function C(n={}){const{wrapper:t}=Object.assign({},o(),n.components);return t?e.jsx(t,Object.assign({},n,{children:e.jsx(s,n)})):s(n)}export{C as default};
