import{j as e}from"./iframe-DHGRvuV4.js";import{useMDXComponents as o}from"./index-T0Q_6UPe.js";import{M as r,e as a,f as l,h as m,i as n}from"./blocks-Bebh0oNc.js";import{a as d,M as p,b as c,R as u,I as h}from"./DescriptionList.stories-rCsyOIb9.js";import{D as g}from"./DesignTokensTable-BJ-4OLrh.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DanCT5x6.js";import"./BorderSample-6Rgip7i0.js";import"./formatTokenValue-BYjgZrXg.js";import"./Code-BCMuooWb.js";import"./ColorSample-CyclHliD.js";import"./SpaceSample-D9jMI9LH.js";import"./TypographySample-hDqDsbp1.js";const f=`<!-- @license CC0-1.0 -->

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
`,x={"description-list":{color:{$value:"{ams.color.text.default}",$type:"color"},"column-gap":{$deprecated:"Use `ams.description-list.vi-medium.column-gap` instead. Will be removed in release 6.0.0.",$value:"{ams.space.l}",$type:"dimension",$extensions:{"nl.amsterdam.subtype":"space"}},"font-family":{$value:"{ams.typography.font-family}",$type:"fontFamily"},"font-size":{$value:"{ams.typography.body-text.font-size}",$extensions:{"nl.amsterdam.type":"fontSize"}},"line-height":{$value:"{ams.typography.body-text.line-height}",$extensions:{"nl.amsterdam.type":"lineHeight"}},"row-gap":{$deprecated:"Will be removed in release 6.0.0.",$value:"{ams.space.s}",$type:"dimension",$extensions:{"nl.amsterdam.subtype":"space"}},inverse:{color:{$value:"{ams.color.text.inverse}",$type:"color"}},term:{"font-weight":{$value:"{ams.typography.body-text.bold.font-weight}",$type:"fontWeight"},"margin-block-end":{$value:"{ams.space.xs}",$type:"dimension",$extensions:{"nl.amsterdam.subtype":"space"}},"text-wrap":{$value:"balance"},"vi-medium":{"margin-block-end":{$value:"{ams.description-list.description.margin-block-end}",$type:"dimension",$extensions:{"nl.amsterdam.hint":"Should equal the bottom margin of descriptions.","nl.amsterdam.subtype":"space"}}}},description:{"font-weight":{$value:"{ams.typography.body-text.font-weight}",$type:"fontWeight"},"margin-block-end":{$value:"{ams.space.m}",$type:"dimension",$extensions:{"nl.amsterdam.subtype":"space"}},"padding-inline-start":{$value:"0",$type:"dimension",$extensions:{"nl.amsterdam.subtype":"space"}}},section:{"margin-block-end":{$value:"{ams.space.m}",$type:"dimension",$extensions:{"nl.amsterdam.subtype":"space"}}},narrow:{"grid-template-columns":{$deprecated:"Use `ams.description-list.vi-medium.narrow.grid-template-columns` instead. Will be removed in release 6.0.0.",$value:"1fr 4fr"}},medium:{"grid-template-columns":{$deprecated:"Use `ams.description-list.vi-medium.medium.grid-template-columns` instead. Will be removed in release 6.0.0.",$value:"1fr 2fr"}},wide:{"grid-template-columns":{$deprecated:"Use `ams.description-list.vi-medium.wide.grid-template-columns` instead. Will be removed in release 6.0.0.",$value:"1fr 1fr"}},"vi-medium":{"column-gap":{$value:"{ams.space.l}",$type:"dimension",$extensions:{"nl.amsterdam.subtype":"space"}},narrow:{"grid-template-columns":{$value:"1fr 4fr"}},medium:{"grid-template-columns":{$value:"1fr 2fr"}},wide:{"grid-template-columns":{$value:"1fr 1fr"}}}}},y={ams:x};function i(s){const t={code:"code",h2:"h2",h3:"h3",p:"p",...o(),...s.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,`
`,`
`,e.jsx(r,{of:d}),`
`,e.jsx(a,{children:f}),`
`,e.jsx(l,{}),`
`,e.jsx(m,{}),`
`,e.jsx(t.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(t.h3,{id:"multiple-descriptions",children:"Multiple descriptions"}),`
`,e.jsx(t.p,{children:`A term can have several descriptions.
Descriptions have the same spacing as sections because they usually include longer text.`}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(t.h3,{id:"multiple-terms",children:"Multiple terms"}),`
`,e.jsxs(t.p,{children:["If several terms have the same description, place them in a ",e.jsx(t.code,{children:"DescriptionList.Section"}),` component for a correct grid layout.
The terms are positioned closely together.`]}),`
`,e.jsx(n,{of:c}),`
`,e.jsx(t.h3,{id:"multiple-terms-and-descriptions",children:"Multiple terms and descriptions"}),`
`,e.jsx(t.p,{children:`Do not group multiple terms with several descriptions.
This type of content is too complicated and will distort the layout.
Use distinct sections instead, or find an alternative to a Description List.`}),`
`,e.jsx(t.h3,{id:"rich-description",children:"Rich description"}),`
`,e.jsx(t.p,{children:"A description can include rich content such as inline formatting, links, paragraphs, and even lists."}),`
`,e.jsx(n,{of:u}),`
`,e.jsx(t.h3,{id:"inverse-colour",children:"Inverse colour"}),`
`,e.jsx(t.p,{children:`Use the inverse colour if the Description List sits on a dark background.
This ensures the colour of the text provides enough contrast.`}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(t.h2,{id:"design-tokens",children:"Design tokens"}),`
`,e.jsx(g,{tokens:y})]})}function U(s={}){const{wrapper:t}={...o(),...s.components};return t?e.jsx(t,{...s,children:e.jsx(i,{...s})}):i(s)}export{U as default};
