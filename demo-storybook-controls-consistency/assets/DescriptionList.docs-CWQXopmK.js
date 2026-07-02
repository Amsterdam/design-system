import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./jsx-runtime-BCDDjCIb.js";import{b as n,d as r,f as i,g as a,i as o,m as s,o as c,s as l}from"./iframe-BO_8dQcY.js";import{n as u,t as d}from"./DesignTokensTable-CtquAmuB.js";import{t as f}from"./mdx-react-shim-BewKpn-b.js";import{InverseColour as p,MultipleDescriptions as m,MultipleTerms as h,Orientation as g,RichDescription as _,n as v,t as y}from"./DescriptionList.stories-CYT3YZV9.js";var b,x,S=e((()=>{b={"description-list":{color:{$value:`{ams.color.text.default}`,$extensions:{"nl.amsterdam.type":`color`}},"column-gap":{$deprecated:"Use `ams.description-list.vi-medium.column-gap` instead. Will be removed on or after 2026-10-20.",$value:`{ams.description-list.vi-medium.column-gap}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"font-family":{$value:`{ams.typography.font-family}`,$extensions:{"nl.amsterdam.type":`fontFamily`}},"font-size":{$value:`{ams.typography.body-text.font-size}`,$extensions:{"nl.amsterdam.hint":`Applies to descriptions only; terms set their own font size.`,"nl.amsterdam.type":`fontSize`}},"line-height":{$value:`{ams.typography.body-text.line-height}`,$extensions:{"nl.amsterdam.hint":`Applies to descriptions only; terms set their own line height.`,"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}},"row-gap":{$deprecated:"Whitespace is now applied through the `ams.description-list.*.margin-block-end` tokens. Will be removed on or after 2026-10-20.",$value:`0`,$type:`dimension`,$extensions:{"nl.amsterdam.subtype":`space`}},inverse:{color:{$value:`{ams.color.text.inverse}`,$extensions:{"nl.amsterdam.type":`color`}}},term:{"font-size":{$value:`{ams.typography.heading.4.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"font-weight":{$value:`{ams.typography.heading.font-weight}`,$extensions:{"nl.amsterdam.type":`fontWeight`}},"line-height":{$value:`{ams.typography.heading.4.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}},"margin-block-end":{$value:`{ams.space.xs}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"text-wrap":{$value:`balance`,$extensions:{"nl.amsterdam.type":`textWrap`}},"vi-medium":{"margin-block-end":{$value:`{ams.description-list.description.margin-block-end}`,$extensions:{"nl.amsterdam.hint":`Should equal the bottom margin of descriptions.`,"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}}},description:{"font-weight":{$value:`{ams.typography.body-text.font-weight}`,$extensions:{"nl.amsterdam.type":`fontWeight`}},"margin-block-end":{$value:`{ams.space.m}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-inline-start":{$value:`0`,$type:`dimension`,$extensions:{"nl.amsterdam.subtype":`space`}}},section:{"margin-block-end":{$value:`{ams.space.m}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}},narrow:{"grid-template-columns":{$deprecated:"Use `ams.description-list.vi-medium.narrow.grid-template-columns` instead. Will be removed on or after 2026-10-20.",$value:`{ams.description-list.vi-medium.narrow.grid-template-columns}`,$extensions:{"nl.amsterdam.type":`gridTemplateColumns`}}},medium:{"grid-template-columns":{$deprecated:"Use `ams.description-list.vi-medium.medium.grid-template-columns` instead. Will be removed on or after 2026-10-20.",$value:`{ams.description-list.vi-medium.medium.grid-template-columns}`,$extensions:{"nl.amsterdam.type":`gridTemplateColumns`}}},wide:{"grid-template-columns":{$deprecated:"Use `ams.description-list.vi-medium.wide.grid-template-columns` instead. Will be removed on or after 2026-10-20.",$value:`{ams.description-list.vi-medium.wide.grid-template-columns}`,$extensions:{"nl.amsterdam.type":`gridTemplateColumns`}}},"vi-medium":{"column-gap":{$value:`{ams.space.l}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},narrow:{"grid-template-columns":{$value:`1fr 4fr`,$extensions:{"nl.amsterdam.type":`gridTemplateColumns`}}},medium:{"grid-template-columns":{$value:`1fr 2fr`,$extensions:{"nl.amsterdam.type":`gridTemplateColumns`}}},wide:{"grid-template-columns":{$value:`1fr 1fr`,$extensions:{"nl.amsterdam.type":`gridTemplateColumns`}}}}}},x={ams:b}}));function C(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...n(),...e.components};return(0,T.jsxs)(T.Fragment,{children:[`
`,`
`,`
`,`
`,(0,T.jsx)(r,{of:y}),`
`,(0,T.jsx)(s,{}),`
`,(0,T.jsx)(l,{of:y}),`
`,(0,T.jsx)(i,{}),`
`,(0,T.jsx)(c,{}),`
`,(0,T.jsx)(t.h2,{id:`subcomponents`,children:`Subcomponents`}),`
`,(0,T.jsxs)(t.p,{children:[`The Term, Description, and Section subcomponents make up a Description List.
Term and Description render the `,(0,T.jsx)(t.code,{children:`<dt>`}),` and `,(0,T.jsx)(t.code,{children:`<dd>`}),` elements, and a Section groups a term with its descriptions.
None of them has props of its own; the examples on this page show them in place.`]}),`
`,(0,T.jsx)(t.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,T.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,T.jsx)(t.h3,{id:`orientation`,children:`Orientation`}),`
`,(0,T.jsx)(t.p,{children:`Resize the following example to see the Description List adapt its layout to the available width.`}),`
`,(0,T.jsx)(o,{of:g}),`
`,(0,T.jsx)(t.h3,{id:`multiple-descriptions`,children:`Multiple descriptions`}),`
`,(0,T.jsx)(t.p,{children:`A term can have several descriptions.
Descriptions have the same spacing as sections because they usually include longer text.`}),`
`,(0,T.jsx)(o,{of:m}),`
`,(0,T.jsx)(t.h3,{id:`multiple-terms`,children:`Multiple terms`}),`
`,(0,T.jsxs)(t.p,{children:[`If several terms have the same description, place them in a `,(0,T.jsx)(t.code,{children:`DescriptionList.Section`}),` component for a correct grid layout.
The terms are positioned closely together.`]}),`
`,(0,T.jsx)(o,{of:h}),`
`,(0,T.jsx)(t.h3,{id:`multiple-terms-and-descriptions`,children:`Multiple terms and descriptions`}),`
`,(0,T.jsx)(t.p,{children:`Do not group multiple terms with several descriptions.
This type of content is too complicated and will distort the layout.
Use distinct sections instead, or find an alternative to a Description List.`}),`
`,(0,T.jsx)(t.h3,{id:`rich-description`,children:`Rich description`}),`
`,(0,T.jsx)(t.p,{children:`A description can include rich content such as inline formatting, links, paragraphs, and even lists.`}),`
`,(0,T.jsx)(o,{of:_}),`
`,(0,T.jsx)(t.h3,{id:`inverse-colour`,children:`Inverse colour`}),`
`,(0,T.jsx)(t.p,{children:`Use the inverse colour if the Description List sits on a dark background.
This ensures the colour of the text provides enough contrast.`}),`
`,(0,T.jsx)(o,{of:p}),`
`,(0,T.jsx)(t.h2,{id:`design`,children:`Design`}),`
`,(0,T.jsxs)(t.p,{children:[`The terms and descriptions stack vertically by default.
They sit next to each other when their `,(0,T.jsx)(t.a,{href:`/docs/utilities-css-query-container--docs`,children:`query container`}),` is wide enough (at least `,(0,T.jsx)(t.code,{children:`32rem`}),`).`]}),`
`,(0,T.jsx)(t.p,{children:`The column for the terms is as wide as the longest term, without wrapping.
Its width can be adjusted to ‘large’ (50%), ‘medium’ (33%), or ‘small’ (20%), which also allows the terms to wrap.`}),`
`,(0,T.jsx)(t.p,{children:`The term is set in bold text.`}),`
`,(0,T.jsx)(t.h2,{id:`see-also`,children:`See also`}),`
`,(0,T.jsxs)(t.ul,{children:[`
`,(0,T.jsxs)(t.li,{children:[(0,T.jsx)(t.a,{href:`/docs/utilities-css-prose--docs`,children:`Prose`}),` – applies the recommended vertical spacing for editorial content.`]}),`
`]}),`
`,(0,T.jsx)(t.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,T.jsx)(d,{tokens:x})]})}function w(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,T.jsx)(t,{...e,children:(0,T.jsx)(C,{...e})}):C(e)}var T;e((()=>{T=t(),f(),a(),u(),S(),v()}))();export{w as default};