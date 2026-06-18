import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-BqsN2jGA.js";import{E as n,a as r,f as i,i as a,l as o,m as s,n as c,u as l}from"./blocks-Dxx_LN98.js";import{n as u,t as d}from"./DesignTokensTable-CBUGWsoZ.js";import{t as f}from"./mdx-react-shim-C9-HWy_a.js";import{InverseColor as p,SmallText as m,TwoLevels as h,WithoutMarkers as g,n as _,t as v}from"./UnorderedList.stories-B8LSJjxZ.js";var y,b,x=e((()=>{y={"unordered-list":{color:{$value:`{ams.color.text.default}`,$extensions:{"nl.amsterdam.type":`color`}},"font-family":{$value:`{ams.typography.font-family}`,$extensions:{"nl.amsterdam.type":`fontFamily`}},"font-size":{$value:`{ams.typography.body-text.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"font-weight":{$value:`{ams.typography.body-text.font-weight}`,$extensions:{"nl.amsterdam.type":`fontWeight`}},gap:{$value:`{ams.space.s}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"line-height":{$value:`{ams.typography.body-text.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}},"list-style-type":{$value:`'\\2022'`,$extensions:{"nl.amsterdam.type":`listStyleType`}},inverse:{color:{$value:`{ams.color.text.inverse}`,$extensions:{"nl.amsterdam.type":`color`}}},small:{"font-size":{$value:`{ams.typography.body-text.small.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"line-height":{$value:`{ams.typography.body-text.small.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}}},item:{"margin-inline-start":{$value:{value:1.625,unit:`rem`},$extensions:{"nl.amsterdam.hint":`Divide your total indentation width over margin and padding to position the marker.`,"nl.amsterdam.subtype":`space`}},"padding-inline-start":{$value:{value:.875,unit:`rem`},$extensions:{"nl.amsterdam.hint":`The total level 1 indentation for Amsterdam is 40 pixels, or 2.5rem.`,"nl.amsterdam.subtype":`space`}},$type:`dimension`},"unordered-list":{gap:{$value:`{ams.space.s}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"list-style-type":{$value:`'\\2013'`,$extensions:{"nl.amsterdam.type":`listStyleType`}},"padding-block-end":{$value:`{ams.space.s}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-block-start":{$value:`{ams.space.s}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},item:{"margin-inline-start":{$value:{value:.875,unit:`rem`},$extensions:{"nl.amsterdam.hint":`Indent less than the parent to start-align the child’s marker with the parent text.`,"nl.amsterdam.subtype":`space`}},"padding-inline-start":{$value:{value:.875,unit:`rem`},$extensions:{"nl.amsterdam.hint":`The total level >=2 indentation for Amsterdam is 28 pixels, or 1.75rem.`,"nl.amsterdam.subtype":`space`}},$type:`dimension`}}}},b={ams:y}}));function S(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...n(),...e.components};return(0,w.jsxs)(w.Fragment,{children:[`
`,`
`,`
`,`
`,(0,w.jsx)(o,{of:v}),`
`,(0,w.jsx)(i,{}),`
`,(0,w.jsx)(r,{of:v}),`
`,(0,w.jsx)(l,{}),`
`,(0,w.jsx)(a,{}),`
`,(0,w.jsx)(t.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,w.jsx)(t.h3,{id:`when-to-use`,children:`When to use`}),`
`,(0,w.jsxs)(t.p,{children:[`Use `,(0,w.jsx)(t.a,{href:`/docs/utilities-css-margin--docs`,children:`Margin`}),` or `,(0,w.jsx)(t.a,{href:`/docs/utilities-css-prose--docs`,children:`Prose`}),` to add vertical whitespace.`]}),`
`,(0,w.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,w.jsx)(t.h3,{id:`two-levels`,children:`Two levels`}),`
`,(0,w.jsx)(t.p,{children:`A list can have one deeper level.
In this case, an en dash is used as the list item marker.
It is left-aligned with the text of the higher-level item.`}),`
`,(0,w.jsx)(c,{of:h}),`
`,(0,w.jsx)(t.h3,{id:`without-markers`,children:`Without markers`}),`
`,(0,w.jsx)(t.p,{children:`An overview of articles can be seen as an unordered list.
In such cases, apply the list semantics while hiding markers.
This helps screen readers understand and navigate the list.`}),`
`,(0,w.jsxs)(t.p,{children:[`Note: each item typically contains a container with headings and other text components in this variant.
Therefore, it does not define typography for the items and the `,(0,w.jsx)(t.code,{children:`color`}),` prop has no effect.`]}),`
`,(0,w.jsx)(t.p,{children:`For example, here are three news articles:`}),`
`,(0,w.jsx)(c,{of:g}),`
`,(0,w.jsx)(t.h3,{id:`inverse-colour`,children:`Inverse colour`}),`
`,(0,w.jsx)(t.p,{children:`Use the inverse colour if the List sits on a dark background.
This ensures the colour of the text provides enough contrast.
When nesting lists, set the prop on all lists.`}),`
`,(0,w.jsx)(c,{of:p}),`
`,(0,w.jsx)(t.h3,{id:`small-text`,children:`Small text`}),`
`,(0,w.jsx)(t.p,{children:`We use a smaller font size for text in a Figure Caption and for metadata like dates or categories.
When using a list in small text, set the prop for each item in the list.`}),`
`,(0,w.jsx)(c,{of:m}),`
`,(0,w.jsx)(t.h2,{id:`design`,children:`Design`}),`
`,(0,w.jsx)(t.p,{children:`Items of an unordered list have square markers.
There is extra white space between the items.
This provides better distinction between the items, especially when they consist of multiple lines of text.`}),`
`,(0,w.jsx)(t.h2,{id:`see-also`,children:`See also`}),`
`,(0,w.jsxs)(t.ul,{children:[`
`,(0,w.jsxs)(t.li,{children:[(0,w.jsx)(t.a,{href:`/docs/utilities-css-prose--docs`,children:`Prose`}),` – applies the recommended vertical spacing for editorial content.`]}),`
`]}),`
`,(0,w.jsx)(t.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,w.jsx)(d,{tokens:b})]})}function C(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,w.jsx)(t,{...e,children:(0,w.jsx)(S,{...e})}):S(e)}var w;e((()=>{w=t(),f(),s(),u(),x(),_()}))();export{C as default};