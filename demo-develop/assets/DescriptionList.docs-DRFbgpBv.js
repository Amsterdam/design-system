import{j as e}from"./iframe-Dd2cBzZg.js";import{useMDXComponents as o}from"./index-CvmgfcE2.js";import{M as r,e as a,f as l,h as p,i as s}from"./blocks-u38Flq8k.js";import{a as m,M as c,b as d,R as h,I as u}from"./DescriptionList.stories-gf6ZB4sn.js";import{D as x}from"./DesignTokensTable-BxN5PSkN.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CaHv3v6n.js";import"./BorderSample-BdSKaYPQ.js";import"./formatTokenValue-BYjgZrXg.js";import"./Code-CHKKn7FT.js";import"./ColorSample--EdVvpT0.js";import"./SpaceSample-ChHJZdoF.js";import"./TypographySample-CoXGHoB_.js";const f=`<!-- @license CC0-1.0 -->

# Description List

A collection of terms and their descriptions.

## Design

In a narrow window, descriptions appear below their term.
After that, they display in a two-column layout.
The column for the terms is as wide as the longest term, without wrapping.
Its width can be adjusted to be ‘large’ (50%), ‘medium’ (33%), or ‘small’ (20%), which also allows the terms to wrap.

The term is set in bold text.

## References

- [MDN: \`<dl>\`: The Description List element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl)
- [WCAG: Using description lists](https://www.w3.org/WAI/WCAG22/Techniques/html/H40)
`,y={"description-list":{color:{$value:"{ams.color.text.default}",$type:"color"},"column-gap":{$value:"{ams.space.l}",$type:"dimension",$extensions:{"nl.amsterdam.subtype":"space"}},"font-family":{$value:"{ams.typography.font-family}",$type:"fontFamily"},"font-size":{$value:"{ams.typography.body-text.font-size}",$extensions:{"nl.amsterdam.type":"fontSize"}},"line-height":{$value:"{ams.typography.body-text.line-height}",$extensions:{"nl.amsterdam.type":"lineHeight"}},"row-gap":{$deprecated:"This token will be removed in release 6.0.0",$value:"{ams.space.s}",$type:"dimension",$extensions:{"nl.amsterdam.subtype":"space"}},inverse:{color:{$value:"{ams.color.text.inverse}",$type:"color"}},term:{"font-weight":{$value:"{ams.typography.body-text.bold.font-weight}",$type:"fontWeight"},"margin-block-end":{$value:"{ams.space.xs}",$type:"dimension",$extensions:{"nl.amsterdam.subtype":"space"}}},description:{"font-weight":{$value:"{ams.typography.body-text.font-weight}",$type:"fontWeight"},"margin-block-end":{$value:"{ams.space.m}",$type:"dimension",$extensions:{"nl.amsterdam.subtype":"space"}},"padding-inline-start":{$value:"0",$type:"dimension",$extensions:{"nl.amsterdam.subtype":"space"}}},section:{"margin-block-end":{$value:"{ams.space.m}",$type:"dimension",$extensions:{"nl.amsterdam.subtype":"space"}}},narrow:{"grid-template-columns":{$value:"1fr 4fr"}},medium:{"grid-template-columns":{$value:"1fr 2fr"}},wide:{"grid-template-columns":{$value:"1fr 1fr"}}}},g={ams:y};function i(t){const n={code:"code",h2:"h2",h3:"h3",p:"p",...o(),...t.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,`
`,`
`,e.jsx(r,{of:m}),`
`,e.jsx(a,{children:f}),`
`,e.jsx(l,{}),`
`,e.jsx(p,{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"multiple-descriptions",children:"Multiple descriptions"}),`
`,e.jsx(n.p,{children:"A term may have multiple descriptions."}),`
`,e.jsx(s,{of:c}),`
`,e.jsx(n.h3,{id:"multiple-terms",children:"Multiple terms"}),`
`,e.jsxs(n.p,{children:["If multiple terms share a single description, group them in a ",e.jsx(n.code,{children:"DescriptionList.Section"})," component to ensure proper grid layout."]}),`
`,e.jsx(s,{of:d}),`
`,e.jsx(n.h3,{id:"rich-description",children:"Rich description"}),`
`,e.jsx(n.p,{children:"A description can include rich content such as inline formatting, links, paragraphs, and even lists."}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(n.h3,{id:"inverse-colour",children:"Inverse colour"}),`
`,e.jsx(n.p,{children:`Use the inverse colour if the Description List sits on a dark background.
This ensures the colour of the text provides enough contrast.`}),`
`,e.jsx(s,{of:u}),`
`,e.jsx(n.h2,{id:"design-tokens",children:"Design tokens"}),`
`,e.jsx(x,{tokens:g})]})}function R(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{R as default};
