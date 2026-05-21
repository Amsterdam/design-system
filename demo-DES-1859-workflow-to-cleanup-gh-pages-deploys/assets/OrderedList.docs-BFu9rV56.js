import{n as e}from"./chunk-DnJy8xQt.js";import{Vt as t}from"./iframe-lVjygo9o.js";import{r as n}from"./react-COcx68xH.js";import{c as r,f as i,i as a,l as o,n as s,s as c}from"./blocks-pWtLVqrg.js";import{n as l,t as u}from"./DesignTokensTable-CS1SbvMr.js";import{t as d}from"./mdx-react-shim-dijGpx-Z.js";import{DescendingNumbers as f,InverseColor as p,SmallText as m,StartingNumber as h,TwoLevels as g,WithoutMarkers as _,n as v,t as y}from"./OrderedList.stories-BJHWzmg0.js";var b,x=e((()=>{b=`<!-- @license CC0-1.0 -->

# Ordered List

An ordered list is a vertical group of related content with an order.
This list can have 2 levels.
The first level has numbers as list markers.
The second level uses letters in alphabetical order.
List items indent their text by a fixed distance.

## Design

The list uses ascending numbers as markers, providing enough space for numbers up to 99.
Extra white space between items enhances the distinction, mainly when they consist of multiple lines of text.

## Guidelines

- Use [Margin](/docs/utilities-css-margin--docs) or [Prose](/docs/utilities-css-prose--docs) to add vertical whitespace.
`})),S,C,w=e((()=>{S={"ordered-list":{color:{$value:`{ams.color.text.default}`,$extensions:{"nl.amsterdam.type":`color`}},"font-family":{$value:`{ams.typography.font-family}`,$extensions:{"nl.amsterdam.type":`fontFamily`}},"font-size":{$value:`{ams.typography.body-text.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"font-weight":{$value:`{ams.typography.body-text.font-weight}`,$extensions:{"nl.amsterdam.type":`fontWeight`}},gap:{$value:`{ams.space.s}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"line-height":{$value:`{ams.typography.body-text.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}},"list-style-type":{$value:`decimal`,$extensions:{"nl.amsterdam.type":`listStyleType`}},small:{"font-size":{$value:`{ams.typography.body-text.small.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"line-height":{$value:`{ams.typography.body-text.small.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}}},inverse:{color:{$value:`{ams.color.text.inverse}`,$extensions:{"nl.amsterdam.type":`color`}}},item:{"margin-inline-start":{$value:{value:2.25,unit:`rem`},$extensions:{"nl.amsterdam.hint":`Divide your total indentation width over margin and padding to position the marker.`,"nl.amsterdam.subtype":`space`}},"padding-inline-start":{$value:{value:.25,unit:`rem`},$extensions:{"nl.amsterdam.hint":`The total level 1 indentation for Amsterdam is 40 pixels, or 2.5rem.`,"nl.amsterdam.subtype":`space`}},$type:`dimension`},"ordered-list":{gap:{$value:`{ams.space.s}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"list-style-type":{$value:`lower-alpha`,$extensions:{"nl.amsterdam.type":`listStyleType`}},"padding-block-end":{$value:`{ams.space.s}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-block-start":{$value:`{ams.space.s}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},item:{"margin-inline-start":{$value:{value:1.5,unit:`rem`},$extensions:{"nl.amsterdam.hint":`Indent less than the parent to start-align the child’s marker with the parent text.`,"nl.amsterdam.subtype":`space`}},"padding-inline-start":{$value:{value:.25,unit:`rem`},$extensions:{"nl.amsterdam.hint":`The total level >=2 indentation for Amsterdam is 28 pixels, or 1.75rem.`,"nl.amsterdam.subtype":`space`}},$type:`dimension`}}}},C={ams:S}}));function T(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...n(),...e.components};return(0,D.jsxs)(D.Fragment,{children:[`
`,`
`,`
`,`
`,(0,D.jsx)(r,{of:y}),`
`,(0,D.jsx)(c,{children:b}),`
`,(0,D.jsx)(o,{}),`
`,(0,D.jsx)(a,{}),`
`,(0,D.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,D.jsx)(t.h3,{id:`two-levels`,children:`Two levels`}),`
`,(0,D.jsx)(t.p,{children:`A list may have one nested level.
In this case, lowercase letters are used as markers.`}),`
`,(0,D.jsx)(s,{of:g}),`
`,(0,D.jsx)(t.h3,{id:`starting-number`,children:`Starting number`}),`
`,(0,D.jsxs)(t.p,{children:[`When necessary, the list can start with a higher number.
Use the HTML attribute `,(0,D.jsx)(t.code,{children:`start`}),`.`]}),`
`,(0,D.jsx)(s,{of:h}),`
`,(0,D.jsx)(t.h3,{id:`reverse-order`,children:`Reverse order`}),`
`,(0,D.jsxs)(t.p,{children:[`The numbers can also be in reverse order.
Use the HTML attribute `,(0,D.jsx)(t.code,{children:`reversed`}),`.`]}),`
`,(0,D.jsx)(s,{of:f}),`
`,(0,D.jsx)(t.h3,{id:`without-markers`,children:`Without markers`}),`
`,(0,D.jsx)(t.p,{children:`An overview of search results can be seen as an ordered list.
In such cases, apply the list semantics while hiding markers.
This helps screen readers understand and navigate the list.`}),`
`,(0,D.jsxs)(t.p,{children:[`Note: each item typically contains a container with headings and other text components in this variant.
Therefore, it does not define typography for the items and the `,(0,D.jsx)(t.code,{children:`color`}),` prop has no effect.`]}),`
`,(0,D.jsx)(t.p,{children:`For example, here are three news articles:`}),`
`,(0,D.jsx)(s,{of:_}),`
`,(0,D.jsx)(t.h3,{id:`inverse-colour`,children:`Inverse colour`}),`
`,(0,D.jsx)(t.p,{children:`Use the inverse colour if the List sits on a dark background.
This ensures the colour of the text provides enough contrast.
When nesting lists, set the prop on all lists.`}),`
`,(0,D.jsx)(s,{of:p}),`
`,(0,D.jsx)(t.h3,{id:`small-text`,children:`Small text`}),`
`,(0,D.jsx)(t.p,{children:`We use a smaller font size for text in a Figure Caption and for metadata like dates or categories.
When using a list in small text, set the prop for each item in the list.`}),`
`,(0,D.jsx)(s,{of:m}),`
`,(0,D.jsx)(t.h2,{id:`see-also`,children:`See also`}),`
`,(0,D.jsxs)(t.ul,{children:[`
`,(0,D.jsxs)(t.li,{children:[(0,D.jsx)(t.a,{href:`/docs/utilities-css-prose--docs`,children:`Prose`}),` – applies the recommended vertical spacing for editorial content.`]}),`
`]}),`
`,(0,D.jsx)(t.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,D.jsx)(u,{tokens:C})]})}function E(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,D.jsx)(t,{...e,children:(0,D.jsx)(T,{...e})}):T(e)}var D;e((()=>{D=t(),d(),i(),v(),x(),w(),l()}))();export{E as default};