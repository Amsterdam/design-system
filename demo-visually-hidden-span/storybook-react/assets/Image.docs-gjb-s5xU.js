import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{M as o,d as s,P as a,e as r}from"./index-AJNKfOK1.js";import{I as m}from"./Image.stories-YddSYq9v.js";import{useMDXComponents as c}from"./index-_VGcpBFS.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./iframe-1ogz312L.js";import"../sb-preview/runtime.js";import"./index-jmm5gWkb.js";import"./index-ogXoivrg.js";import"./index-MVbLLYTZ.js";import"./index-PPLHz8o0.js";import"./index.esm-V251aYq6.js";const p=`# Image

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
`;function i(t){return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:m}),`
`,e.jsx(s,{children:p}),`
`,e.jsx(a,{}),`
`,e.jsx(r,{})]})}function b(t={}){const{wrapper:n}=Object.assign({},c(),t.components);return n?e.jsx(n,Object.assign({},t,{children:e.jsx(i,t)})):i()}export{b as default};
