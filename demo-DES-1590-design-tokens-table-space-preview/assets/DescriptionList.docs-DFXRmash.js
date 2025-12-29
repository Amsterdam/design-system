import{j as e}from"./iframe-D6BrQqDK.js";import{useMDXComponents as o}from"./index-HqcjCZeY.js";import{M as r,f as a,P as l,h as p,i as s}from"./blocks-DGA2Zgqu.js";import{a as m,M as c,b as d,R as h,I as u}from"./DescriptionList.stories-uUJtW05I.js";import{D as x}from"./DesignTokensTable-toaANAUY.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DnhsCwGO.js";import"./ColorSample-BnCtOxFY.js";import"./SpacingSample-CoKnVqit.js";const f=`<!-- @license CC0-1.0 -->

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
`,g={"description-list":{color:{$value:"{ams.color.text.default}",$type:"color"},"column-gap":{$value:"{ams.space.l}",$extensions:{"ams.type":"columnGap"}},"font-family":{$value:"{ams.typography.font-family}",$type:"fontFamily"},"font-size":{$value:"{ams.typography.body-text.font-size}",$extensions:{"ams.type":"fontSize"}},"line-height":{$value:"{ams.typography.body-text.line-height}",$type:"number"},"row-gap":{$value:"{ams.space.s}",$extensions:{"ams.type":"rowGap"}},inverse:{color:{$value:"{ams.color.text.inverse}",$type:"color"}},term:{"font-weight":{$value:"{ams.typography.body-text.bold.font-weight}",$type:"fontWeight"}},description:{"font-weight":{$value:"{ams.typography.body-text.font-weight}",$type:"fontWeight"},"padding-inline-start":{$value:"{ams.space.l}",$extensions:{"ams.type":"paddingInline"}}},narrow:{"grid-template-columns":{$value:"1fr 4fr",$extensions:{"ams.type":"gridTemplateColumns"}}},medium:{"grid-template-columns":{$value:"1fr 2fr",$extensions:{"ams.type":"gridTemplateColumns"}}},wide:{"grid-template-columns":{$value:"1fr 1fr",$extensions:{"ams.type":"gridTemplateColumns"}}}}},y={ams:g};function i(n){const t={code:"code",h2:"h2",h3:"h3",p:"p",...o(),...n.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,`
`,`
`,e.jsx(r,{of:m}),`
`,e.jsx(a,{children:f}),`
`,e.jsx(l,{}),`
`,e.jsx(p,{}),`
`,e.jsx(t.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(t.h3,{id:"multiple-descriptions",children:"Multiple descriptions"}),`
`,e.jsx(t.p,{children:"A term may have multiple descriptions."}),`
`,e.jsx(s,{of:c}),`
`,e.jsx(t.h3,{id:"multiple-terms",children:"Multiple terms"}),`
`,e.jsxs(t.p,{children:["If multiple terms share a single description, group them in a ",e.jsx(t.code,{children:"DescriptionList.Section"})," component to ensure proper grid layout."]}),`
`,e.jsx(s,{of:d}),`
`,e.jsx(t.h3,{id:"rich-description",children:"Rich description"}),`
`,e.jsx(t.p,{children:"A description can include rich content such as inline formatting, links, paragraphs, and even lists."}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(t.h3,{id:"inverse-colour",children:"Inverse colour"}),`
`,e.jsx(t.p,{children:`Use the inverse colour if the Description List sits on a dark background.
This ensures the colour of the text provides enough contrast.`}),`
`,e.jsx(s,{of:u}),`
`,e.jsx(t.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsx(x,{tokens:y})]})}function k(n={}){const{wrapper:t}={...o(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(i,{...n})}):i(n)}export{k as default};
