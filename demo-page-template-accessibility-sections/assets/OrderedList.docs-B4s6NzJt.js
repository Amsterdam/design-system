import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,d as n,h as r,i,n as a,p as o,u as s}from"./blocks-zzQRermb.js";import{t as c}from"./jsx-runtime-ATHzeHXA.js";import{i as l,r as u}from"./react-Dyi61YEg.js";import{n as d,t as f}from"./DesignTokensTable-DlYs5AUu.js";import{a as p,c as m,i as h,n as g,o as _,r as v,s as y,t as b}from"./OrderedList.stories-BHVqcJqx.js";var x,S;function C(){return(C=e((()=>{x={"ordered-list":{color:{$value:`{ams.color.text.default}`,$extensions:{"nl.amsterdam.type":`color`}},"font-family":{$value:`{ams.typography.font-family}`,$extensions:{"nl.amsterdam.type":`fontFamily`}},"font-size":{$value:`{ams.typography.body-text.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"font-weight":{$value:`{ams.typography.body-text.font-weight}`,$extensions:{"nl.amsterdam.type":`fontWeight`}},gap:{$value:`{ams.space.s}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"line-height":{$value:`{ams.typography.body-text.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}},"list-style-type":{$value:`decimal`,$extensions:{"nl.amsterdam.type":`listStyleType`}},small:{"font-size":{$value:`{ams.typography.body-text.small.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"line-height":{$value:`{ams.typography.body-text.small.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}}},inverse:{color:{$value:`{ams.color.text.inverse}`,$extensions:{"nl.amsterdam.type":`color`}}},item:{"margin-inline-start":{$value:{value:2.25,unit:`rem`},$extensions:{"nl.amsterdam.hint":`Divide your total indentation width over margin and padding to position the marker. Must be a single value: it sets a longhand property, which takes only one.`,"nl.amsterdam.subtype":`space`}},"padding-inline-start":{$value:{value:.25,unit:`rem`},$extensions:{"nl.amsterdam.hint":`The total level 1 indentation for Amsterdam is 40 pixels, or 2.5rem. Must be a single value: it sets a longhand property, which takes only one.`,"nl.amsterdam.subtype":`space`}},$type:`dimension`},"ordered-list":{gap:{$value:`{ams.space.s}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"list-style-type":{$value:`lower-alpha`,$extensions:{"nl.amsterdam.type":`listStyleType`}},"padding-block-end":{$value:`{ams.space.s}`,$extensions:{"nl.amsterdam.hint":`Must be a single value: it sets a longhand property, which takes only one.`,"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-block-start":{$value:`{ams.space.s}`,$extensions:{"nl.amsterdam.hint":`Must be a single value: it sets a longhand property, which takes only one.`,"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},item:{"margin-inline-start":{$value:{value:1.5,unit:`rem`},$extensions:{"nl.amsterdam.hint":`Indent less than the parent to start-align the child’s marker with the parent text. Must be a single value: it sets a longhand property, which takes only one.`,"nl.amsterdam.subtype":`space`}},"padding-inline-start":{$value:{value:.25,unit:`rem`},$extensions:{"nl.amsterdam.hint":`The total level >=2 indentation for Amsterdam is 28 pixels, or 1.75rem. Must be a single value: it sets a longhand property, which takes only one.`,"nl.amsterdam.subtype":`space`}},$type:`dimension`}}}},S={ams:x}})))()}function w(e){let r={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...l(),...e.components};return(0,E.jsxs)(E.Fragment,{children:[`
`,`
`,`
`,`
`,(0,E.jsx)(s,{of:v}),`
`,(0,E.jsx)(o,{}),`
`,(0,E.jsx)(t,{of:v}),`
`,(0,E.jsx)(n,{}),`
`,(0,E.jsx)(i,{}),`
`,(0,E.jsx)(r.h2,{id:`subcomponents`,children:`Subcomponents`}),`
`,(0,E.jsxs)(r.p,{children:[`The `,(0,E.jsx)(r.code,{children:`Item`}),` subcomponent renders an item in the list.
It has no props of its own; the examples on this page show it in place.`]}),`
`,(0,E.jsx)(r.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,E.jsx)(r.h3,{id:`when-to-use`,children:`When to use`}),`
`,(0,E.jsxs)(r.p,{children:[`Use `,(0,E.jsx)(r.a,{href:`/docs/utilities-css-margin--docs`,children:`Margin`}),` or `,(0,E.jsx)(r.a,{href:`/docs/utilities-css-prose--docs`,children:`Prose`}),` to add vertical whitespace.`]}),`
`,(0,E.jsx)(r.h2,{id:`examples`,children:`Examples`}),`
`,(0,E.jsx)(r.h3,{id:`two-levels`,children:`Two levels`}),`
`,(0,E.jsx)(r.p,{children:`A list may have one nested level.
In this case, lowercase letters are used as markers.`}),`
`,(0,E.jsx)(a,{of:_}),`
`,(0,E.jsx)(r.h3,{id:`starting-number`,children:`Starting number`}),`
`,(0,E.jsxs)(r.p,{children:[`When necessary, the list can start with a higher number.
Use the HTML attribute `,(0,E.jsx)(r.code,{children:`start`}),`.`]}),`
`,(0,E.jsx)(a,{of:p}),`
`,(0,E.jsx)(r.h3,{id:`reverse-order`,children:`Reverse order`}),`
`,(0,E.jsxs)(r.p,{children:[`The numbers can also be in reverse order.
Use the HTML attribute `,(0,E.jsx)(r.code,{children:`reversed`}),`.`]}),`
`,(0,E.jsx)(a,{of:b}),`
`,(0,E.jsx)(r.h3,{id:`without-markers`,children:`Without markers`}),`
`,(0,E.jsx)(r.p,{children:`An overview of search results can be seen as an ordered list.
In such cases, apply the list semantics while hiding markers.
This helps screen readers understand and navigate the list.`}),`
`,(0,E.jsxs)(r.p,{children:[`Note: each item typically contains a container with headings and other text components in this variant.
Therefore, it does not define typography for the items and the `,(0,E.jsx)(r.code,{children:`color`}),` prop has no effect.`]}),`
`,(0,E.jsx)(r.p,{children:`For example, here are three news articles:`}),`
`,(0,E.jsx)(a,{of:y}),`
`,(0,E.jsx)(r.h3,{id:`inverse-colour`,children:`Inverse colour`}),`
`,(0,E.jsx)(r.p,{children:`Use the inverse colour if the List sits on a dark background.
This ensures the colour of the text provides enough contrast.
When nesting lists, set the prop on all lists.`}),`
`,(0,E.jsx)(a,{of:g}),`
`,(0,E.jsx)(r.h3,{id:`small-text`,children:`Small text`}),`
`,(0,E.jsx)(r.p,{children:`We use a smaller font size for text in a Figure Caption and for metadata like dates or categories.
When using a list in small text, set the prop for each item in the list.`}),`
`,(0,E.jsx)(a,{of:h}),`
`,(0,E.jsx)(r.h2,{id:`design`,children:`Design`}),`
`,(0,E.jsx)(r.p,{children:`The list uses ascending numbers as markers, providing enough space for numbers up to 99.
Extra white space between items enhances the distinction, mainly when they consist of multiple lines of text.`}),`
`,(0,E.jsx)(r.p,{children:`Markers sit outside the text column.
The second and following lines of an item line up with its first line instead of running back underneath the number, which keeps the left edge of the text straight.`}),`
`,(0,E.jsx)(r.p,{children:`A nested list is indented less than the top level.
Its numbers need less room because they are letters, and a smaller step keeps a two-level list from drifting far to the right.`}),`
`,(0,E.jsx)(r.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,E.jsxs)(r.p,{children:[`An Ordered List renders `,(0,E.jsx)(r.code,{children:`ol`}),` and `,(0,E.jsx)(r.code,{children:`li`}),` elements.
Screen readers announce it as a list, report how many items it holds, and offer commands to move from one item to the next.`]}),`
`,(0,E.jsxs)(r.p,{children:[`Hiding the markers keeps those semantics intact, so screen readers still announce the items as a list and report how many there are.
That is the point of the variant: the sequence still reaches assistive technology as `,(0,E.jsx)(r.a,{href:`https://www.w3.org/TR/WCAG22/#info-and-relationships`,rel:`nofollow`,children:`WCAG 1.3.1`}),` requires, while the numbers stay out of the way visually.`]}),`
`,(0,E.jsx)(r.h2,{id:`see-also`,children:`See also`}),`
`,(0,E.jsxs)(r.ul,{children:[`
`,(0,E.jsxs)(r.li,{children:[(0,E.jsx)(r.a,{href:`/docs/utilities-css-prose--docs`,children:`Prose`}),` – applies the recommended vertical spacing for editorial content.`]}),`
`]}),`
`,(0,E.jsx)(r.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,E.jsx)(f,{tokens:S})]})}function T(e={}){let{wrapper:t}={...l(),...e.components};return t?(0,E.jsx)(t,{...e,children:(0,E.jsx)(w,{...e})}):w(e)}var E;function D(){return(D=e((()=>{E=c(),u(),r(),d(),C(),m()})))()}D();export{T as default};