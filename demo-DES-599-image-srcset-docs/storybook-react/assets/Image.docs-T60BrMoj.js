import{j as e}from"./index.esm-z1nXSmea.js";import{M as r,d as a,P as c,e as l,f as n}from"./index-yhTjl02-.js";import{I as h,S as d,a as m}from"./Image.stories-prtrY7Rt.js";import{useMDXComponents as o}from"./index-_VGcpBFS.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./extends-dGVwEr9R.js";import"./iframe-3o9K1f5b.js";import"../sb-preview/runtime.js";import"./index-jmm5gWkb.js";import"./index-ogXoivrg.js";import"./index-MVbLLYTZ.js";import"./index-PPLHz8o0.js";const p=`# Image

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
`;function i(s){const t=Object.assign({h2:"h2",p:"p",ul:"ul",li:"li",a:"a",code:"code"},o(),s.components);return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:h}),`
`,e.jsx(a,{children:p}),`
`,e.jsx(c,{}),`
`,e.jsx(l,{}),`
`,e.jsx(t.h2,{id:"image-with-srcset",children:"Image with srcset"}),`
`,e.jsx(t.p,{children:`This is an example of an image with a srcset attribute.
Read this documentation to learn more about the srcset attribute:`}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#srcset",target:"_blank",rel:"nofollow noopener noreferrer",children:"MDN Web Docs HTML"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/srcset",target:"_blank",rel:"nofollow noopener noreferrer",children:"MDN Web Docs API"})}),`
`]}),`
`,e.jsxs(t.p,{children:["When the ",e.jsx(t.code,{children:"(max-width: 832px)"}),` media query condition matches, the 640px image will load, otherwise the 1280px image will be used.
If the srcset attribute uses width descriptors, the sizes attribute must also be present, or the srcset itself will be ignored.`]}),`
`,e.jsx(n,{of:d}),`
`,e.jsxs(t.p,{children:[`When an image element's srcset contains "x" descriptors, browsers also consider the URL in the `,e.jsx(t.code,{children:"src"})," attribute (if present) as a candidate, and assign it a default descriptor of 1x."]}),`
`,e.jsx(n,{of:m})]})}function D(s={}){const{wrapper:t}=Object.assign({},o(),s.components);return t?e.jsx(t,Object.assign({},s,{children:e.jsx(i,s)})):i(s)}export{D as default};
