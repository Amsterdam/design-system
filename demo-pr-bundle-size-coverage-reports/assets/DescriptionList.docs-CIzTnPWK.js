import{n as e}from"./chunk-zsgVPwQN.js";import{t}from"./jsx-runtime-GmyBfqKJ.js";import{r as n}from"./react-RY8N8R-x.js";import{c as r,f as i,i as a,l as o,n as s,s as c}from"./blocks-BMurOIz2.js";import{n as l,t as u}from"./DesignTokensTable-CRu1Y3b0.js";import{t as d}from"./mdx-react-shim-ynubY8I9.js";import{InverseColour as f,MultipleDescriptions as p,MultipleTerms as m,RichDescription as h,n as g,t as _}from"./DescriptionList.stories-DnRcVxge.js";var v,y=e((()=>{v=`<!-- @license CC0-1.0 -->

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
`})),b,x,S=e((()=>{b={"description-list":{color:{$value:`{ams.color.text.default}`,$extensions:{"nl.amsterdam.type":`color`}},"column-gap":{$value:`{ams.space.l}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"font-family":{$value:`{ams.typography.font-family}`,$extensions:{"nl.amsterdam.type":`fontFamily`}},"font-size":{$value:`{ams.typography.body-text.font-size}`,$extensions:{"nl.amsterdam.hint":`Applies to descriptions only; terms set their own font size.`,"nl.amsterdam.type":`fontSize`}},"line-height":{$value:`{ams.typography.body-text.line-height}`,$extensions:{"nl.amsterdam.hint":`Applies to descriptions only; terms set their own line height.`,"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}},"row-gap":{$deprecated:"Whitespace is now applied through the `ams.description-list.*.margin-block-end` tokens. Will be removed on or after 2026-10-03.",$value:`0`,$type:`dimension`,$extensions:{"nl.amsterdam.subtype":`space`}},inverse:{color:{$value:`{ams.color.text.inverse}`,$extensions:{"nl.amsterdam.type":`color`}}},term:{"font-size":{$value:`{ams.typography.heading.4.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"font-weight":{$value:`{ams.typography.heading.font-weight}`,$extensions:{"nl.amsterdam.type":`fontWeight`}},"line-height":{$value:`{ams.typography.heading.4.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}},"margin-block-end":{$value:`{ams.space.xs}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"text-wrap":{$value:`balance`,$extensions:{"nl.amsterdam.type":`textWrap`}},"vi-medium":{"margin-block-end":{$value:`{ams.description-list.description.margin-block-end}`,$extensions:{"nl.amsterdam.hint":`Should equal the bottom margin of descriptions.`,"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}}},description:{"font-weight":{$value:`{ams.typography.body-text.font-weight}`,$extensions:{"nl.amsterdam.type":`fontWeight`}},"margin-block-end":{$value:`{ams.space.m}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-inline-start":{$value:`0`,$type:`dimension`,$extensions:{"nl.amsterdam.subtype":`space`}}},section:{"margin-block-end":{$value:`{ams.space.m}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}},narrow:{"grid-template-columns":{$value:`1fr 4fr`,$extensions:{"nl.amsterdam.type":`gridTemplateColumns`}}},medium:{"grid-template-columns":{$value:`1fr 2fr`,$extensions:{"nl.amsterdam.type":`gridTemplateColumns`}}},wide:{"grid-template-columns":{$value:`1fr 1fr`,$extensions:{"nl.amsterdam.type":`gridTemplateColumns`}}}}},x={ams:b}}));function C(e){let t={code:`code`,h2:`h2`,h3:`h3`,p:`p`,...n(),...e.components};return(0,T.jsxs)(T.Fragment,{children:[`
`,`
`,`
`,`
`,(0,T.jsx)(r,{of:_}),`
`,(0,T.jsx)(c,{children:v}),`
`,(0,T.jsx)(o,{}),`
`,(0,T.jsx)(a,{}),`
`,(0,T.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,T.jsx)(t.h3,{id:`multiple-descriptions`,children:`Multiple descriptions`}),`
`,(0,T.jsx)(t.p,{children:`A term can have several descriptions.
Descriptions have the same spacing as sections because they usually include longer text.`}),`
`,(0,T.jsx)(s,{of:p}),`
`,(0,T.jsx)(t.h3,{id:`multiple-terms`,children:`Multiple terms`}),`
`,(0,T.jsxs)(t.p,{children:[`If several terms have the same description, place them in a `,(0,T.jsx)(t.code,{children:`DescriptionList.Section`}),` component for a correct grid layout.
The terms are positioned closely together.`]}),`
`,(0,T.jsx)(s,{of:m}),`
`,(0,T.jsx)(t.h3,{id:`multiple-terms-and-descriptions`,children:`Multiple terms and descriptions`}),`
`,(0,T.jsx)(t.p,{children:`Do not group multiple terms with several descriptions.
This type of content is too complicated and will distort the layout.
Use distinct sections instead, or find an alternative to a Description List.`}),`
`,(0,T.jsx)(t.h3,{id:`rich-description`,children:`Rich description`}),`
`,(0,T.jsx)(t.p,{children:`A description can include rich content such as inline formatting, links, paragraphs, and even lists.`}),`
`,(0,T.jsx)(s,{of:h}),`
`,(0,T.jsx)(t.h3,{id:`inverse-colour`,children:`Inverse colour`}),`
`,(0,T.jsx)(t.p,{children:`Use the inverse colour if the Description List sits on a dark background.
This ensures the colour of the text provides enough contrast.`}),`
`,(0,T.jsx)(s,{of:f}),`
`,(0,T.jsx)(t.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,T.jsx)(u,{tokens:x})]})}function w(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,T.jsx)(t,{...e,children:(0,T.jsx)(C,{...e})}):C(e)}var T;e((()=>{T=t(),d(),i(),g(),y(),S(),l()}))();export{w as default};