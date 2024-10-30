import{j as e}from"./jsx-runtime-BlAj40OV.js";import{useMDXComponents as r}from"./index-BI1Biiay.js";import{ae as o,ak as l,al as a,am as c,an as i}from"./index-EVVlnb_x.js";import{D as p,M as m,R as d,a as h,I as u}from"./DescriptionList.stories-Bo8f_aSU.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-BXGZkleP.js";import"../sb-preview/runtime.js";import"./index-DJFdew98.js";import"./index-D-8MO0q_.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";import"./index.esm-B5L6_zpt.js";import"./clsx-B-dksMZM.js";import"./index.esm-DQgjFsBh.js";import"./decorators-CweBkPI6.js";const x=`<!-- @license CC0-1.0 -->

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
`,e.jsx(o,{of:p}),`
`,e.jsx(l,{children:x}),`
`,e.jsx(a,{}),`
`,e.jsx(c,{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"multiple-descriptions",children:"Multiple descriptions"}),`
`,e.jsx(n.p,{children:"A term may have multiple descriptions."}),`
`,e.jsx(i,{of:m}),`
`,e.jsx(n.h3,{id:"rich-description",children:"Rich description"}),`
`,e.jsx(n.p,{children:"A description can include rich content such as inline formatting, links, paragraphs, and even lists."}),`
`,e.jsx(i,{of:d}),`
`,e.jsx(n.h3,{id:"multiple-terms",children:"Multiple terms"}),`
`,e.jsx(n.p,{children:"Multiple terms may share one description."}),`
`,e.jsx(i,{of:h}),`
`,e.jsx(n.h3,{id:"inverse-colour",children:"Inverse colour"}),`
`,e.jsxs(n.p,{children:["Set the ",e.jsx(n.code,{children:"inverseColor"}),` prop if the Description List sits on a dark background.
This ensures the colour of the text provides enough contrast.`]}),`
`,e.jsx(i,{of:u})]})}function E(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{E as default};