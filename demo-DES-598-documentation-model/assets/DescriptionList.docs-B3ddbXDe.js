import{j as e}from"./jsx-runtime-CKrituN3.js";import{useMDXComponents as s}from"./index-DSz_1G2r.js";import{M as i,d as a,P as l,e as m,f as o}from"./index-BoEicyZt.js";import{D as p,M as c,I as d}from"./DescriptionList.stories-23nhoYGH.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-Dqm1ekO-.js";import"../sb-preview/runtime.js";import"./index-BtM5VmRH.js";import"./index-Bw8VTzHM.js";import"./index-k_s-dmML.js";import"./index-DrFu-skq.js";import"./index.esm-58p7CVPD.js";import"./clsx-B-dksMZM.js";import"./index.esm-DjZ2yxjc.js";import"./exampleContent-CRK3_7Hv.js";const h=`<!-- @license CC0-1.0 -->

# Description List

A collection of terms and their details.

## Design

On a narrow screen, details appear indented below their term.
From the medium breakpoint, terms and details appear next to each other.
The column for the details is twice as wide as the one for the term.

Details are set in bold text.

## References

- [MDN: \`<dl>\`: The Description List element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl)
- [WCAG: Using description lists](https://www.w3.org/WAI/WCAG22/Techniques/html/H40)
`;function r(n){const t={code:"code",h2:"h2",h3:"h3",p:"p",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:p}),`
`,e.jsx(a,{children:h}),`
`,e.jsx(l,{}),`
`,e.jsx(m,{}),`
`,e.jsx(t.h2,{id:"multiple-details",children:"Multiple details"}),`
`,e.jsx(t.p,{children:"A term may have multiple details."}),`
`,e.jsx(o,{of:c}),`
`,e.jsx(t.h3,{id:"inverse-colour",children:"Inverse colour"}),`
`,e.jsxs(t.p,{children:["Set the ",e.jsx(t.code,{children:"inverseColor"}),` prop if the Description List sits on a dark background.
This ensures the colour of the text provides enough contrast.`]}),`
`,e.jsx(o,{of:d})]})}function I(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(r,{...n})}):r(n)}export{I as default};