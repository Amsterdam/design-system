import{n as e}from"./chunk-DnJy8xQt.js";import{Wt as t}from"./iframe-EtotSqU7.js";import{r as n}from"./react-oqUsHMAz.js";import{c as r,f as i,i as a,l as o,n as s,s as c}from"./blocks-Ciy89E-x.js";import{n as l,t as u}from"./DesignTokensTable-DVtCujVH.js";import{t as d}from"./mdx-react-shim-DQ175UNt.js";import{InverseColour as f,MultipleDescriptions as p,MultipleTerms as m,Orientation as h,RichDescription as g,n as _,t as v}from"./DescriptionList.stories-iUFflcsq.js";var y,b=e((()=>{y=`<!-- @license CC0-1.0 -->

# Description List

A collection of terms and their descriptions.

## Design

- The terms and descriptions stack vertically by default. They sit next to each other when their [query container](/docs/utilities-css-query-container--docs) is wide enough (at least \`32rem\`).
- The column for the terms is as wide as the longest term, without wrapping. Its width can be adjusted to be ‘large’ (50%), ‘medium’ (33%), or ‘small’ (20%), which also allows the terms to wrap.
- The term is set in bold text.

## References

- [MDN: \`<dl>\`: The Description List element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl)
- [WCAG: Using description lists](https://www.w3.org/WAI/WCAG22/Techniques/html/H40)
`})),x,S,C=e((()=>{x={"description-list":{color:{$value:`{ams.color.text.default}`,$extensions:{"nl.amsterdam.type":`color`}},"column-gap":{$deprecated:"Use `ams.description-list.vi-medium.column-gap` instead. Will be removed on or after 2026-10-20.",$value:`initial`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"font-family":{$value:`{ams.typography.font-family}`,$extensions:{"nl.amsterdam.type":`fontFamily`}},"font-size":{$value:`{ams.typography.body-text.font-size}`,$extensions:{"nl.amsterdam.hint":`Applies to descriptions only; terms set their own font size.`,"nl.amsterdam.type":`fontSize`}},"line-height":{$value:`{ams.typography.body-text.line-height}`,$extensions:{"nl.amsterdam.hint":`Applies to descriptions only; terms set their own line height.`,"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}},"row-gap":{$deprecated:"Whitespace is now applied through the `ams.description-list.*.margin-block-end` tokens. Will be removed on or after 2026-10-20.",$value:`0`,$type:`dimension`,$extensions:{"nl.amsterdam.subtype":`space`}},inverse:{color:{$value:`{ams.color.text.inverse}`,$extensions:{"nl.amsterdam.type":`color`}}},term:{"font-size":{$value:`{ams.typography.heading.4.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"font-weight":{$value:`{ams.typography.heading.font-weight}`,$extensions:{"nl.amsterdam.type":`fontWeight`}},"line-height":{$value:`{ams.typography.heading.4.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}},"margin-block-end":{$value:`{ams.space.xs}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"text-wrap":{$value:`balance`,$extensions:{"nl.amsterdam.type":`textWrap`}},"vi-medium":{"margin-block-end":{$value:`{ams.description-list.description.margin-block-end}`,$extensions:{"nl.amsterdam.hint":`Should equal the bottom margin of descriptions.`,"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}}},description:{"font-weight":{$value:`{ams.typography.body-text.font-weight}`,$extensions:{"nl.amsterdam.type":`fontWeight`}},"margin-block-end":{$value:`{ams.space.m}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-inline-start":{$value:`0`,$type:`dimension`,$extensions:{"nl.amsterdam.subtype":`space`}}},section:{"margin-block-end":{$value:`{ams.space.m}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}},narrow:{"grid-template-columns":{$deprecated:"Use `ams.description-list.vi-medium.narrow.grid-template-columns` instead. Will be removed on or after 2026-10-20.",$value:`initial`,$extensions:{"nl.amsterdam.type":`gridTemplateColumns`}}},medium:{"grid-template-columns":{$deprecated:"Use `ams.description-list.vi-medium.medium.grid-template-columns` instead. Will be removed on or after 2026-10-20.",$value:`initial`,$extensions:{"nl.amsterdam.type":`gridTemplateColumns`}}},wide:{"grid-template-columns":{$deprecated:"Use `ams.description-list.vi-medium.wide.grid-template-columns` instead. Will be removed on or after 2026-10-20.",$value:`initial`,$extensions:{"nl.amsterdam.type":`gridTemplateColumns`}}},"vi-medium":{"column-gap":{$value:`{ams.space.l}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},narrow:{"grid-template-columns":{$value:`1fr 4fr`,$extensions:{"nl.amsterdam.type":`gridTemplateColumns`}}},medium:{"grid-template-columns":{$value:`1fr 2fr`,$extensions:{"nl.amsterdam.type":`gridTemplateColumns`}}},wide:{"grid-template-columns":{$value:`1fr 1fr`,$extensions:{"nl.amsterdam.type":`gridTemplateColumns`}}}}}},S={ams:x}}));function w(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...n(),...e.components};return(0,E.jsxs)(E.Fragment,{children:[`
`,`
`,`
`,`
`,(0,E.jsx)(r,{of:v}),`
`,(0,E.jsx)(c,{children:y}),`
`,(0,E.jsx)(o,{}),`
`,(0,E.jsx)(a,{}),`
`,(0,E.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,E.jsx)(t.h3,{id:`orientation`,children:`Orientation`}),`
`,(0,E.jsx)(t.p,{children:`Resize the following example to see the Description List adapt its layout to the available width.`}),`
`,(0,E.jsx)(s,{of:h}),`
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
`,(0,E.jsx)(t.h2,{id:`see-also`,children:`See also`}),`
`,(0,E.jsxs)(t.ul,{children:[`
`,(0,E.jsxs)(t.li,{children:[(0,E.jsx)(t.a,{href:`/docs/utilities-css-prose--docs`,children:`Prose`}),` – applies the recommended vertical spacing for editorial content.`]}),`
`]}),`
`,(0,E.jsx)(t.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,E.jsx)(u,{tokens:S})]})}function T(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,E.jsx)(t,{...e,children:(0,E.jsx)(w,{...e})}):w(e)}var E;e((()=>{E=t(),d(),i(),_(),b(),C(),l()}))();export{T as default};