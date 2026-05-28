import{n as e}from"./chunk-DnJy8xQt.js";import{Vt as t}from"./iframe-Dxv-IGAM.js";import{r as n}from"./react-Dv-YXQVn.js";import{c as r,f as i,i as a,l as o,n as s,s as c}from"./blocks-yKHdHCtc.js";import{n as l,t as u}from"./DesignTokensTable-ovVdryUv.js";import{t as d}from"./mdx-react-shim-DYRxH3dK.js";import{InverseColor as f,SmallText as p,TwoLevels as m,WithoutMarkers as h,n as g,t as _}from"./UnorderedList.stories-DEfZAXec.js";var v,y=e((()=>{v=`<!-- @license CC0-1.0 -->

# Unordered List

A list is a vertical group of related content.
This list can have 2 levels.
The first level consists of squares.
The second level consists of en dashes (–).
Text in the list items is indented by a fixed distance.

## Design

Items of an unordered list have square markers.
There is extra white space between the items.
This provides better distinction between the items, especially when they consist of multiple lines of text.

## Guidelines

- Use [Margin](/docs/utilities-css-margin--docs) or [Prose](/docs/utilities-css-prose--docs) to add vertical whitespace.
`})),b,x,S=e((()=>{b={"unordered-list":{color:{$value:`{ams.color.text.default}`,$extensions:{"nl.amsterdam.type":`color`}},"font-family":{$value:`{ams.typography.font-family}`,$extensions:{"nl.amsterdam.type":`fontFamily`}},"font-size":{$value:`{ams.typography.body-text.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"font-weight":{$value:`{ams.typography.body-text.font-weight}`,$extensions:{"nl.amsterdam.type":`fontWeight`}},gap:{$value:`{ams.space.s}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"line-height":{$value:`{ams.typography.body-text.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}},"list-style-type":{$value:`'\\2022'`,$extensions:{"nl.amsterdam.type":`listStyleType`}},inverse:{color:{$value:`{ams.color.text.inverse}`,$extensions:{"nl.amsterdam.type":`color`}}},small:{"font-size":{$value:`{ams.typography.body-text.small.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"line-height":{$value:`{ams.typography.body-text.small.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}}},item:{"margin-inline-start":{$value:{value:1.625,unit:`rem`},$extensions:{"nl.amsterdam.hint":`Divide your total indentation width over margin and padding to position the marker.`,"nl.amsterdam.subtype":`space`}},"padding-inline-start":{$value:{value:.875,unit:`rem`},$extensions:{"nl.amsterdam.hint":`The total level 1 indentation for Amsterdam is 40 pixels, or 2.5rem.`,"nl.amsterdam.subtype":`space`}},$type:`dimension`},"unordered-list":{gap:{$value:`{ams.space.s}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"list-style-type":{$value:`'\\2013'`,$extensions:{"nl.amsterdam.type":`listStyleType`}},"padding-block-end":{$value:`{ams.space.s}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-block-start":{$value:`{ams.space.s}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},item:{"margin-inline-start":{$value:{value:.875,unit:`rem`},$extensions:{"nl.amsterdam.hint":`Indent less than the parent to start-align the child’s marker with the parent text.`,"nl.amsterdam.subtype":`space`}},"padding-inline-start":{$value:{value:.875,unit:`rem`},$extensions:{"nl.amsterdam.hint":`The total level >=2 indentation for Amsterdam is 28 pixels, or 1.75rem.`,"nl.amsterdam.subtype":`space`}},$type:`dimension`}}}},x={ams:b}}));function C(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...n(),...e.components};return(0,T.jsxs)(T.Fragment,{children:[`
`,`
`,`
`,`
`,(0,T.jsx)(r,{of:_}),`
`,(0,T.jsx)(c,{children:v}),`
`,(0,T.jsx)(o,{}),`
`,(0,T.jsx)(a,{}),`
`,(0,T.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,T.jsx)(t.h3,{id:`two-levels`,children:`Two levels`}),`
`,(0,T.jsx)(t.p,{children:`A list can have one deeper level.
In this case, an en dash is used as the list item marker.
It is left-aligned with the text of the higher-level item.`}),`
`,(0,T.jsx)(s,{of:m}),`
`,(0,T.jsx)(t.h3,{id:`without-markers`,children:`Without markers`}),`
`,(0,T.jsx)(t.p,{children:`An overview of articles can be seen as an unordered list.
In such cases, apply the list semantics while hiding markers.
This helps screen readers understand and navigate the list.`}),`
`,(0,T.jsxs)(t.p,{children:[`Note: each item typically contains a container with headings and other text components in this variant.
Therefore, it does not define typography for the items and the `,(0,T.jsx)(t.code,{children:`color`}),` prop has no effect.`]}),`
`,(0,T.jsx)(t.p,{children:`For example, here are three news articles:`}),`
`,(0,T.jsx)(s,{of:h}),`
`,(0,T.jsx)(t.h3,{id:`inverse-colour`,children:`Inverse colour`}),`
`,(0,T.jsx)(t.p,{children:`Use the inverse colour if the List sits on a dark background.
This ensures the colour of the text provides enough contrast.
When nesting lists, set the prop on all lists.`}),`
`,(0,T.jsx)(s,{of:f}),`
`,(0,T.jsx)(t.h3,{id:`small-text`,children:`Small text`}),`
`,(0,T.jsx)(t.p,{children:`We use a smaller font size for text in a Figure Caption and for metadata like dates or categories.
When using a list in small text, set the prop for each item in the list.`}),`
`,(0,T.jsx)(s,{of:p}),`
`,(0,T.jsx)(t.h2,{id:`see-also`,children:`See also`}),`
`,(0,T.jsxs)(t.ul,{children:[`
`,(0,T.jsxs)(t.li,{children:[(0,T.jsx)(t.a,{href:`/docs/utilities-css-prose--docs`,children:`Prose`}),` – applies the recommended vertical spacing for editorial content.`]}),`
`]}),`
`,(0,T.jsx)(t.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,T.jsx)(u,{tokens:x})]})}function w(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,T.jsx)(t,{...e,children:(0,T.jsx)(C,{...e})}):C(e)}var T;e((()=>{T=t(),d(),i(),g(),y(),S(),l()}))();export{w as default};