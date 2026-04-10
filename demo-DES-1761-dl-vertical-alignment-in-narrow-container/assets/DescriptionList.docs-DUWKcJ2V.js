import{n as e}from"./chunk-zsgVPwQN.js";import{At as t}from"./iframe-CqMUOcUw.js";import{r as n}from"./react-CyHLjaaE.js";import{c as r,f as i,i as a,l as o,n as s,s as c}from"./blocks-DTJvvkvv.js";import{n as l,t as u}from"./DesignTokensTable-Czzfm6rp.js";import{t as d}from"./mdx-react-shim-D4P6MQCf.js";import{InverseColour as f,MultipleDescriptions as p,MultipleTerms as m,NarrowContainer as h,RichDescription as g,n as _,t as v}from"./DescriptionList.stories-DI4VKSri.js";var y,b=e((()=>{y=`<!-- @license CC0-1.0 -->

# Description List

A collection of terms and their descriptions.

## Design

In a narrow container, descriptions appear below their term.
Once the container reaches 32rem (or wider), they display in a two-column layout.
The column for the terms is as wide as the longest term, without wrapping.
Its width can be adjusted to be ‘large’ (50%), ‘medium’ (33%), or ‘small’ (20%), which also allows the terms to wrap.

The term is set in bold text.

## References

- [MDN: \`<dl>\`: The Description List element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl)
- [WCAG: Using description lists](https://www.w3.org/WAI/WCAG22/Techniques/html/H40)
`})),x,S,C=e((()=>{x={"description-list":{color:{$value:`{ams.color.text.default}`,$type:`color`},"column-gap":{$value:`{ams.space.l}`,$type:`dimension`,$extensions:{"nl.amsterdam.subtype":`space`}},"font-family":{$value:`{ams.typography.font-family}`,$type:`fontFamily`},"font-size":{$value:`{ams.typography.body-text.font-size}`,$extensions:{"nl.amsterdam.hint":`Applies to descriptions only; terms set their own font size.`,"nl.amsterdam.type":`fontSize`}},"line-height":{$value:`{ams.typography.body-text.line-height}`,$extensions:{"nl.amsterdam.hint":`Applies to descriptions only; terms set their own line height.`,"nl.amsterdam.type":`lineHeight`}},"row-gap":{$deprecated:`Will be removed in release 6.0.0.`,$value:`{ams.space.s}`,$type:`dimension`,$extensions:{"nl.amsterdam.subtype":`space`}},inverse:{color:{$value:`{ams.color.text.inverse}`,$type:`color`}},term:{"font-size":{$value:`{ams.typography.heading.4.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"font-weight":{$value:`{ams.typography.heading.font-weight}`,$type:`fontWeight`},"line-height":{$value:`{ams.typography.heading.4.line-height}`,$extensions:{"nl.amsterdam.type":`lineHeight`}},"margin-block-end":{$value:`{ams.space.xs}`,$type:`dimension`,$extensions:{"nl.amsterdam.subtype":`space`}},"text-wrap":{$value:`balance`},"vi-medium":{"margin-block-end":{$value:`{ams.description-list.description.margin-block-end}`,$type:`dimension`,$extensions:{"nl.amsterdam.hint":`Should equal the bottom margin of descriptions.`,"nl.amsterdam.subtype":`space`}}}},description:{"font-weight":{$value:`{ams.typography.body-text.font-weight}`,$type:`fontWeight`},"margin-block-end":{$value:`{ams.space.m}`,$type:`dimension`,$extensions:{"nl.amsterdam.subtype":`space`}},"padding-inline-start":{$value:`0`,$type:`dimension`,$extensions:{"nl.amsterdam.subtype":`space`}}},section:{"margin-block-end":{$value:`{ams.space.m}`,$type:`dimension`,$extensions:{"nl.amsterdam.subtype":`space`}}},narrow:{"grid-template-columns":{$value:`1fr 4fr`}},medium:{"grid-template-columns":{$value:`1fr 2fr`}},wide:{"grid-template-columns":{$value:`1fr 1fr`}}}},S={ams:x}}));function w(e){let t={code:`code`,h2:`h2`,h3:`h3`,p:`p`,...n(),...e.components};return(0,E.jsxs)(E.Fragment,{children:[`
`,`
`,`
`,`
`,(0,E.jsx)(r,{of:v}),`
`,(0,E.jsx)(c,{children:y}),`
`,(0,E.jsx)(o,{}),`
`,(0,E.jsx)(a,{}),`
`,(0,E.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,E.jsx)(t.h3,{id:`multiple-descriptions`,children:`Multiple descriptions`}),`
`,(0,E.jsx)(t.p,{children:`A term can have several descriptions.
Descriptions have the same spacing as sections because they usually include longer text.`}),`
`,(0,E.jsx)(s,{of:p}),`
`,(0,E.jsx)(t.h3,{id:`multiple-terms`,children:`Multiple terms`}),`
`,(0,E.jsxs)(t.p,{children:[`If several terms have the same description, place them in a `,(0,E.jsx)(t.code,{children:`DescriptionList.Section`}),` component for a correct grid layout.
The terms are positioned closely together.`]}),`
`,(0,E.jsx)(s,{of:m}),`
`,(0,E.jsx)(t.h3,{id:`multiple-terms-and-descriptions`,children:`Multiple terms and descriptions`}),`
`,(0,E.jsx)(t.p,{children:`Do not group multiple terms with several descriptions.
This type of content is too complicated and will distort the layout.
Use distinct sections instead, or find an alternative to a Description List.`}),`
`,(0,E.jsx)(t.h3,{id:`rich-description`,children:`Rich description`}),`
`,(0,E.jsx)(t.p,{children:`A description can include rich content such as inline formatting, links, paragraphs, and even lists.`}),`
`,(0,E.jsx)(s,{of:g}),`
`,(0,E.jsx)(t.h3,{id:`inverse-colour`,children:`Inverse colour`}),`
`,(0,E.jsx)(t.p,{children:`Use the inverse colour if the Description List sits on a dark background.
This ensures the colour of the text provides enough contrast.`}),`
`,(0,E.jsx)(s,{of:f}),`
`,(0,E.jsx)(t.h3,{id:`narrow-container`,children:`Narrow container`}),`
`,(0,E.jsx)(t.p,{children:`The Description List uses container queries to switch between a vertical and horizontal layout.
When its parent container is narrower than the breakpoint, terms and descriptions stack in a single column.`}),`
`,(0,E.jsx)(s,{of:h}),`
`,(0,E.jsx)(t.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,E.jsx)(u,{tokens:S})]})}function T(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,E.jsx)(t,{...e,children:(0,E.jsx)(w,{...e})}):w(e)}var E;e((()=>{E=t(),d(),i(),_(),b(),C(),l()}))();export{T as default};