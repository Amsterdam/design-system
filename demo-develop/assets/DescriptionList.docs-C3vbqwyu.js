import{j as e}from"./jsx-runtime-z8MfsBtr.js";import{useMDXComponents as r}from"./index-BAvqEBP-.js";import{ae as o,aq as l,ar as c,as as p,at as i}from"./index-CvnPU6Q_.js";import{D as a,M as d,a as m,R as h,I as u}from"./DescriptionList.stories-LtMkYVus.js";import"./index-C9rmetsa.js";import"./index-D7uoVdV3.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-HHw3637C.js";import"../sb-preview/runtime.js";import"./index-D-OUEn-9.js";import"./index-Cu4lwwaE.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";import"./index.esm-DEOhk3Tb.js";import"./clsx-B-dksMZM.js";import"./index.esm-X3U7dYaT.js";const x=`<!-- @license CC0-1.0 -->

# Description List

A collection of terms and their descriptions.

## Design

In a narrow window, descriptions appear indented below their term.
After that, they display in a two-column layout.
The column for the terms is as wide as the longest term, without wrapping.
Its width can be adjusted to be ‘large’ (50%), ‘medium’ (33%), or ‘small’ (20%), which also allows the terms to wrap.

The term is set in bold text.

## References

- [MDN: \`<dl>\`: The Description List element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl)
- [WCAG: Using description lists](https://www.w3.org/WAI/WCAG22/Techniques/html/H40)
`;/*@license CC0-1.0*/function s(t){const n={code:"code",h2:"h2",h3:"h3",p:"p",...r(),...t.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(o,{of:a}),`
`,e.jsx(l,{children:x}),`
`,e.jsx(c,{}),`
`,e.jsx(p,{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"multiple-descriptions",children:"Multiple descriptions"}),`
`,e.jsx(n.p,{children:"A term may have multiple descriptions."}),`
`,e.jsx(i,{of:d}),`
`,e.jsx(n.h3,{id:"multiple-terms",children:"Multiple terms"}),`
`,e.jsxs(n.p,{children:["If multiple terms share a single description, group them in a ",e.jsx(n.code,{children:"DescriptionList.Section"})," component to ensure proper grid layout."]}),`
`,e.jsx(i,{of:m}),`
`,e.jsx(n.h3,{id:"rich-description",children:"Rich description"}),`
`,e.jsx(n.p,{children:"A description can include rich content such as inline formatting, links, paragraphs, and even lists."}),`
`,e.jsx(i,{of:h}),`
`,e.jsx(n.h3,{id:"inverse-colour",children:"Inverse colour"}),`
`,e.jsxs(n.p,{children:["Set the ",e.jsx(n.code,{children:"inverseColor"}),` prop if the Description List sits on a dark background.
This ensures the colour of the text provides enough contrast.`]}),`
`,e.jsx(i,{of:u})]})}function k(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{k as default};
