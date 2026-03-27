import{j as e}from"./iframe-BilnQIgS.js";import{useMDXComponents as o}from"./index-CEMgc4wi.js";import{M as r,e as a,f as l,h as p,i as s}from"./blocks-Diztvp9G.js";import{a as m,M as c,b as d,R as h,I as u}from"./DescriptionList.stories-BrJN4tXm.js";import{D as y}from"./DesignTokensTable-BTLROuff.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DJS3fsI6.js";import"./BorderSample-SWsklvU5.js";import"./formatTokenValue-BYjgZrXg.js";import"./Code-BF6AkZVG.js";import"./ColorSample-DuQ1etmH.js";import"./SpaceSample-DgSUnLNy.js";import"./TypographySample-h7R0VimS.js";const g=`<!-- @license CC0-1.0 -->

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
`,f={"description-list":{color:{$value:"{ams.color.text.default}",$type:"color"},"column-gap":{$value:"{ams.space.l}",$type:"dimension",$extensions:{"nl.amsterdam.subtype":"space"}},"font-family":{$value:"{ams.typography.font-family}",$type:"fontFamily"},"font-size":{$value:"{ams.typography.body-text.font-size}",$extensions:{"nl.amsterdam.hint":"Applies to descriptions only; terms set their own font size.","nl.amsterdam.type":"fontSize"}},"line-height":{$value:"{ams.typography.body-text.line-height}",$extensions:{"nl.amsterdam.hint":"Applies to descriptions only; terms set their own line height.","nl.amsterdam.type":"lineHeight"}},"row-gap":{$deprecated:"This token will be removed in release 6.0.0",$value:"{ams.space.s}",$type:"dimension",$extensions:{"nl.amsterdam.subtype":"space"}},inverse:{color:{$value:"{ams.color.text.inverse}",$type:"color"}},term:{"font-size":{$value:"{ams.typography.heading.4.font-size}",$extensions:{"nl.amsterdam.type":"fontSize"}},"font-weight":{$value:"{ams.typography.heading.font-weight}",$type:"fontWeight"},"line-height":{$value:"{ams.typography.heading.4.line-height}",$extensions:{"nl.amsterdam.type":"lineHeight"}},"margin-block-end":{$value:"{ams.space.xs}",$type:"dimension",$extensions:{"nl.amsterdam.subtype":"space"}},"vi-medium":{"margin-block-end":{$value:"{ams.description-list.description.margin-block-end}",$type:"dimension",$extensions:{"nl.amsterdam.hint":"Should equal the bottom margin of descriptions.","nl.amsterdam.subtype":"space"}}}},description:{"font-weight":{$value:"{ams.typography.body-text.font-weight}",$type:"fontWeight"},"margin-block-end":{$value:"{ams.space.m}",$type:"dimension",$extensions:{"nl.amsterdam.subtype":"space"}},"padding-inline-start":{$value:"0",$type:"dimension",$extensions:{"nl.amsterdam.subtype":"space"}}},section:{"margin-block-end":{$value:"{ams.space.m}",$type:"dimension",$extensions:{"nl.amsterdam.subtype":"space"}}},narrow:{"grid-template-columns":{$value:"1fr 4fr"}},medium:{"grid-template-columns":{$value:"1fr 2fr"}},wide:{"grid-template-columns":{$value:"1fr 1fr"}}}},x={ams:f};function i(n){const t={code:"code",h2:"h2",h3:"h3",p:"p",...o(),...n.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,`
`,`
`,e.jsx(r,{of:m}),`
`,e.jsx(a,{children:g}),`
`,e.jsx(l,{}),`
`,e.jsx(p,{}),`
`,e.jsx(t.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(t.h3,{id:"multiple-descriptions",children:"Multiple descriptions"}),`
`,e.jsx(t.p,{children:`A term can have several descriptions.
Descriptions have the same spacing as sections because they usually include longer text.`}),`
`,e.jsx(s,{of:c}),`
`,e.jsx(t.h3,{id:"multiple-terms",children:"Multiple terms"}),`
`,e.jsxs(t.p,{children:["If several terms have the same description, place them in a ",e.jsx(t.code,{children:"DescriptionList.Section"}),` component for a correct grid layout.
The terms are positioned closely together.`]}),`
`,e.jsx(s,{of:d}),`
`,e.jsx(t.h3,{id:"multiple-terms-and-descriptions",children:"Multiple terms and descriptions"}),`
`,e.jsx(t.p,{children:`Do not group multiple terms with several descriptions.
This type of content is too complicated and will distort the layout.
Use distinct sections instead, or find an alternative to a Description List.`}),`
`,e.jsx(t.h3,{id:"rich-description",children:"Rich description"}),`
`,e.jsx(t.p,{children:"A description can include rich content such as inline formatting, links, paragraphs, and even lists."}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(t.h3,{id:"inverse-colour",children:"Inverse colour"}),`
`,e.jsx(t.p,{children:`Use the inverse colour if the Description List sits on a dark background.
This ensures the colour of the text provides enough contrast.`}),`
`,e.jsx(s,{of:u}),`
`,e.jsx(t.h2,{id:"design-tokens",children:"Design tokens"}),`
`,e.jsx(y,{tokens:x})]})}function I(n={}){const{wrapper:t}={...o(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(i,{...n})}):i(n)}export{I as default};
