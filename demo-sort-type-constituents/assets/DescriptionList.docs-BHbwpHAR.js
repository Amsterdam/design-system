import{j as e}from"./iframe-BTNV9V5z.js";import{useMDXComponents as o}from"./index-gvQzCJC5.js";import{M as r,c,P as l,e as a,f as t}from"./blocks-Ccd8c0-F.js";import{D as p,M as d,a as h,R as m,I as u}from"./DescriptionList.stories-BHDQLSzM.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BW8ODvA5.js";const x=`<!-- @license CC0-1.0 -->

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
`;/*@license CC0-1.0*/function i(s){const n={code:"code",h2:"h2",h3:"h3",p:"p",...o(),...s.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(r,{of:p}),`
`,e.jsx(c,{children:x}),`
`,e.jsx(l,{}),`
`,e.jsx(a,{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"multiple-descriptions",children:"Multiple descriptions"}),`
`,e.jsx(n.p,{children:"A term may have multiple descriptions."}),`
`,e.jsx(t,{of:d}),`
`,e.jsx(n.h3,{id:"multiple-terms",children:"Multiple terms"}),`
`,e.jsxs(n.p,{children:["If multiple terms share a single description, group them in a ",e.jsx(n.code,{children:"DescriptionList.Section"})," component to ensure proper grid layout."]}),`
`,e.jsx(t,{of:h}),`
`,e.jsx(n.h3,{id:"rich-description",children:"Rich description"}),`
`,e.jsx(n.p,{children:"A description can include rich content such as inline formatting, links, paragraphs, and even lists."}),`
`,e.jsx(t,{of:m}),`
`,e.jsx(n.h3,{id:"inverse-colour",children:"Inverse colour"}),`
`,e.jsx(n.p,{children:`Use the inverse colour if the Description List sits on a dark background.
This ensures the colour of the text provides enough contrast.`}),`
`,e.jsx(t,{of:u})]})}function C(s={}){const{wrapper:n}={...o(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{C as default};
