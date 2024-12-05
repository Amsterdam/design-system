import{j as e}from"./jsx-runtime-j_jdvEMj.js";import{useMDXComponents as o}from"./index-BSj771as.js";import{ae as r,aq as l,ar as a,as as p,at as i}from"./index-CqwCZTQy.js";import{D as c,M as h,a as d,R as m,I as u}from"./DescriptionList.stories-L4rF1onB.js";import"./index-B-o1Wr-g.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-Cry0boX5.js";import"../sb-preview/runtime.js";import"./index-DolzVqEf.js";import"./index-D-8MO0q_.js";import"./index-CJyPbrN5.js";import"./index-DrFu-skq.js";import"./index.esm-fCr_kcCR.js";import"./clsx-B-dksMZM.js";import"./index.esm-DE9QoVc-.js";const x=`<!-- @license CC0-1.0 -->

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
`;/*@license CC0-1.0*/function s(n){const t={code:"code",h2:"h2",h3:"h3",p:"p",...o(),...n.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(r,{of:c}),`
`,e.jsx(l,{children:x}),`
`,e.jsx(a,{}),`
`,e.jsx(p,{}),`
`,e.jsx(t.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(t.h3,{id:"multiple-descriptions",children:"Multiple descriptions"}),`
`,e.jsx(t.p,{children:"A term may have multiple descriptions."}),`
`,e.jsx(i,{of:h}),`
`,e.jsx(t.h3,{id:"multiple-terms",children:"Multiple terms"}),`
`,e.jsxs(t.p,{children:["If multiple terms share a single description, group them in a ",e.jsx(t.code,{children:"DescriptionList.Group"}),` to ensure proper grid layout.
Note that this approach is incompatible with the automatic width of the terms column.
The ‘medium’ fixed width option will be applied; the other options can be selected as well.`]}),`
`,e.jsx(i,{of:d}),`
`,e.jsx(t.h3,{id:"rich-description",children:"Rich description"}),`
`,e.jsx(t.p,{children:"A description can include rich content such as inline formatting, links, paragraphs, and even lists."}),`
`,e.jsx(i,{of:m}),`
`,e.jsx(t.h3,{id:"inverse-colour",children:"Inverse colour"}),`
`,e.jsxs(t.p,{children:["Set the ",e.jsx(t.code,{children:"inverseColor"}),` prop if the Description List sits on a dark background.
This ensures the colour of the text provides enough contrast.`]}),`
`,e.jsx(i,{of:u})]})}function E(n={}){const{wrapper:t}={...o(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}export{E as default};
