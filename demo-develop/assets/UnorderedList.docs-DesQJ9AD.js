import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,d as n,h as r,i,n as a,p as o,u as s}from"./blocks-msKSRvUz.js";import{t as c}from"./jsx-runtime-ATHzeHXA.js";import{i as l,r as u}from"./react-Dyi61YEg.js";import{n as d,t as f}from"./DesignTokensTable-D6FGY632.js";import{a as p,i as m,n as h,r as g,t as _}from"./UnorderedList.stories-BuEzolXw.js";var v,y;function b(){return(b=e((()=>{v={"unordered-list":{color:{$value:`{ams.color.text.default}`,$extensions:{"nl.amsterdam.type":`color`}},"font-family":{$value:`{ams.typography.font-family}`,$extensions:{"nl.amsterdam.type":`fontFamily`}},"font-size":{$value:`{ams.typography.body-text.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"font-weight":{$value:`{ams.typography.body-text.font-weight}`,$extensions:{"nl.amsterdam.type":`fontWeight`}},gap:{$value:`{ams.space.s}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"line-height":{$value:`{ams.typography.body-text.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}},"list-style-type":{$value:`'\\2022'`,$extensions:{"nl.amsterdam.type":`listStyleType`}},inverse:{color:{$value:`{ams.color.text.inverse}`,$extensions:{"nl.amsterdam.type":`color`}}},small:{"font-size":{$value:`{ams.typography.body-text.small.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"line-height":{$value:`{ams.typography.body-text.small.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}}},item:{"margin-inline-start":{$value:{value:1.625,unit:`rem`},$extensions:{"nl.amsterdam.hint":`Divide your total indentation width over margin and padding to position the marker. Must be a single value: it sets a longhand property, which takes only one.`,"nl.amsterdam.subtype":`space`}},"padding-inline-start":{$value:{value:.875,unit:`rem`},$extensions:{"nl.amsterdam.hint":`The total level 1 indentation for Amsterdam is 40 pixels, or 2.5rem. Must be a single value: it sets a longhand property, which takes only one.`,"nl.amsterdam.subtype":`space`}},$type:`dimension`},"unordered-list":{gap:{$value:`{ams.space.s}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"list-style-type":{$value:`'\\2013'`,$extensions:{"nl.amsterdam.type":`listStyleType`}},"padding-block-end":{$value:`{ams.space.s}`,$extensions:{"nl.amsterdam.hint":`Must be a single value: it sets a longhand property, which takes only one.`,"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-block-start":{$value:`{ams.space.s}`,$extensions:{"nl.amsterdam.hint":`Must be a single value: it sets a longhand property, which takes only one.`,"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},item:{"margin-inline-start":{$value:{value:.875,unit:`rem`},$extensions:{"nl.amsterdam.hint":`Indent less than the parent to start-align the child’s marker with the parent text. Must be a single value: it sets a longhand property, which takes only one.`,"nl.amsterdam.subtype":`space`}},"padding-inline-start":{$value:{value:.875,unit:`rem`},$extensions:{"nl.amsterdam.hint":`The total level >=2 indentation for Amsterdam is 28 pixels, or 1.75rem. Must be a single value: it sets a longhand property, which takes only one.`,"nl.amsterdam.subtype":`space`}},$type:`dimension`}}}},y={ams:v}})))()}function x(e){let r={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...l(),...e.components};return(0,C.jsxs)(C.Fragment,{children:[`
`,`
`,`
`,`
`,(0,C.jsx)(s,{of:m}),`
`,(0,C.jsx)(o,{}),`
`,(0,C.jsx)(t,{of:m}),`
`,(0,C.jsx)(n,{}),`
`,(0,C.jsx)(i,{}),`
`,(0,C.jsx)(r.h2,{id:`subcomponents`,children:`Subcomponents`}),`
`,(0,C.jsxs)(r.p,{children:[`The `,(0,C.jsx)(r.code,{children:`Item`}),` subcomponent renders an item in the list.
It has no props of its own; the examples on this page show it in place.`]}),`
`,(0,C.jsx)(r.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,C.jsx)(r.h3,{id:`when-to-use`,children:`When to use`}),`
`,(0,C.jsxs)(r.p,{children:[`Use `,(0,C.jsx)(r.a,{href:`/docs/utilities-css-margin--docs`,children:`Margin`}),` or `,(0,C.jsx)(r.a,{href:`/docs/utilities-css-prose--docs`,children:`Prose`}),` to add vertical whitespace.`]}),`
`,(0,C.jsx)(r.h2,{id:`examples`,children:`Examples`}),`
`,(0,C.jsx)(r.h3,{id:`two-levels`,children:`Two levels`}),`
`,(0,C.jsx)(r.p,{children:`A list can have one deeper level.
In this case, an en dash is used as the list item marker.
It is left-aligned with the text of the higher-level item.`}),`
`,(0,C.jsx)(a,{of:g}),`
`,(0,C.jsx)(r.h3,{id:`without-markers`,children:`Without markers`}),`
`,(0,C.jsxs)(r.p,{children:[`Set `,(0,C.jsx)(r.code,{children:`markers`}),` to false where a group of items reads as a list but should not look like one.
The list keeps its `,(0,C.jsx)(r.code,{children:`ul`}),` and `,(0,C.jsx)(r.code,{children:`li`}),` elements, so a screen reader still announces it as a list and reports how many items it holds, while the markers stay out of the way.
Its items then hold blocks rather than sentences, so the list defines no typography and the `,(0,C.jsx)(r.code,{children:`color`}),` prop has no effect.`]}),`
`,(0,C.jsxs)(r.p,{children:[`For a set of Cards laid out across the page, make the `,(0,C.jsx)(r.a,{href:`/docs/components-layout-grid--docs`,children:`Grid`}),` or a Grid Subgrid the list instead.`]}),`
`,(0,C.jsx)(r.h3,{id:`inverse-colour`,children:`Inverse colour`}),`
`,(0,C.jsx)(r.p,{children:`Use the inverse colour if the List sits on a dark background.
This ensures the colour of the text provides enough contrast.
When nesting lists, set the prop on all lists.`}),`
`,(0,C.jsx)(a,{of:_}),`
`,(0,C.jsx)(r.h3,{id:`small-text`,children:`Small text`}),`
`,(0,C.jsx)(r.p,{children:`We use a smaller font size for text in a Figure Caption and for metadata like dates or categories.
When using a list in small text, set the prop for each item in the list.`}),`
`,(0,C.jsx)(a,{of:h}),`
`,(0,C.jsx)(r.h2,{id:`design`,children:`Design`}),`
`,(0,C.jsx)(r.p,{children:`Items of an unordered list have square markers.
The marker is the bullet character, which Amsterdam Sans draws as a square.
There is extra white space between the items.
This provides better distinction between the items, especially when they consist of multiple lines of text.`}),`
`,(0,C.jsx)(r.p,{children:`Markers sit outside the text column.
The second and following lines of an item line up with its first line instead of running back underneath the marker, which keeps the left edge of the text straight.`}),`
`,(0,C.jsx)(r.p,{children:`A nested list is indented less than the top level, which keeps a two-level list from drifting far to the right.
Only a list that sits directly in a list item counts as nested.
A list inside a container, such as a card, starts at the first level again.`}),`
`,(0,C.jsx)(r.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,C.jsxs)(r.p,{children:[`An Unordered List renders `,(0,C.jsx)(r.code,{children:`ul`}),` and `,(0,C.jsx)(r.code,{children:`li`}),` elements.
Screen readers announce it as a list, report how many items it holds, and offer commands to move from one item to the next.`]}),`
`,(0,C.jsxs)(r.p,{children:[`Hiding the markers keeps those semantics intact, so screen readers still announce the items as a list and report how many there are.
That is the point of the variant: the grouping still reaches assistive technology as `,(0,C.jsx)(r.a,{href:`https://www.w3.org/TR/WCAG22/#info-and-relationships`,rel:`nofollow`,children:`WCAG 1.3.1`}),` requires, while the markers stay out of the way visually.`]}),`
`,(0,C.jsx)(r.h2,{id:`see-also`,children:`See also`}),`
`,(0,C.jsxs)(r.ul,{children:[`
`,(0,C.jsxs)(r.li,{children:[(0,C.jsx)(r.a,{href:`/docs/utilities-css-prose--docs`,children:`Prose`}),` – applies the recommended vertical spacing for editorial content.`]}),`
`]}),`
`,(0,C.jsx)(r.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,C.jsx)(f,{tokens:y})]})}function S(e={}){let{wrapper:t}={...l(),...e.components};return t?(0,C.jsx)(t,{...e,children:(0,C.jsx)(x,{...e})}):x(e)}var C;function w(){return(w=e((()=>{C=c(),u(),r(),d(),b(),p()})))()}w();export{S as default};