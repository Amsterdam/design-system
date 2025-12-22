import{j as e}from"./iframe-CXEcHPCS.js";import{useMDXComponents as o}from"./index-DKi0kqzi.js";import{M as r,f as a,P as l,h as c,i as s}from"./blocks-DRNchBCZ.js";import{a as p,M as d,b as m,R as h,I as u}from"./DescriptionList.stories-DwzEkRZ-.js";import{D as f}from"./DesignTokensTable-iIScG0Gu.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DOSOlYin.js";const x=`<!-- @license CC0-1.0 -->

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
`,g={"description-list":{color:{value:"{ams.color.text.default}"},"column-gap":{value:"{ams.space.l}"},"font-family":{value:"{ams.typography.font-family}"},"font-size":{value:"{ams.typography.body-text.font-size}"},"line-height":{value:"{ams.typography.body-text.line-height}"},"row-gap":{value:"{ams.space.s}"},inverse:{color:{value:"{ams.color.text.inverse}"}},term:{"font-weight":{value:"{ams.typography.body-text.bold.font-weight}"}},description:{"font-weight":{value:"{ams.typography.body-text.font-weight}"},"padding-inline-start":{value:"{ams.space.l}"}},narrow:{"grid-template-columns":{value:"1fr 4fr"}},medium:{"grid-template-columns":{value:"1fr 2fr"}},wide:{"grid-template-columns":{value:"1fr 1fr"}}}},j={ams:g};function i(t){const n={code:"code",h2:"h2",h3:"h3",p:"p",...o(),...t.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,`
`,`
`,e.jsx(r,{of:p}),`
`,e.jsx(a,{children:x}),`
`,e.jsx(l,{}),`
`,e.jsx(c,{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"multiple-descriptions",children:"Multiple descriptions"}),`
`,e.jsx(n.p,{children:"A term may have multiple descriptions."}),`
`,e.jsx(s,{of:d}),`
`,e.jsx(n.h3,{id:"multiple-terms",children:"Multiple terms"}),`
`,e.jsxs(n.p,{children:["If multiple terms share a single description, group them in a ",e.jsx(n.code,{children:"DescriptionList.Section"})," component to ensure proper grid layout."]}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(n.h3,{id:"rich-description",children:"Rich description"}),`
`,e.jsx(n.p,{children:"A description can include rich content such as inline formatting, links, paragraphs, and even lists."}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(n.h3,{id:"inverse-colour",children:"Inverse colour"}),`
`,e.jsx(n.p,{children:`Use the inverse colour if the Description List sits on a dark background.
This ensures the colour of the text provides enough contrast.`}),`
`,e.jsx(s,{of:u}),`
`,e.jsx(n.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsx(f,{tokens:j})]})}function T(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{T as default};
