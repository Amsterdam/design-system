import{j as e}from"./iframe-Ba-jUq9E.js";import{useMDXComponents as a}from"./index-BMWtkEYq.js";import{M as o,e as r,f as l,h as m,i as s}from"./blocks-B7ltkNxr.js";import{a as d,T as h,W as p,I as c,S as u}from"./UnorderedList.stories-CCiAECdL.js";import{D as x}from"./DesignTokensTable-Dqoi8Z6x.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cu0PijaO.js";import"./exampleContent-B8t5xvDp.js";import"./BorderSample-DPyD-PN_.js";import"./formatTokenValue-BYjgZrXg.js";import"./Code-C2uyPtIR.js";import"./ColorSample-DpwUAsbh.js";import"./SpaceSample-DhthF1MG.js";import"./TypographySample-BmnetSN7.js";const y=`<!-- @license CC0-1.0 -->

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
`,f={"unordered-list":{color:{$value:"{ams.color.text.default}",$type:"color"},"font-family":{$value:"{ams.typography.font-family}",$type:"fontFamily"},"font-size":{$value:"{ams.typography.body-text.font-size}",$extensions:{"nl.amsterdam.type":"fontSize"}},"font-weight":{$value:"{ams.typography.body-text.font-weight}",$type:"fontWeight"},gap:{$value:"{ams.space.s}",$type:"dimension",$extensions:{"nl.amsterdam.subtype":"space"}},"line-height":{$value:"{ams.typography.body-text.line-height}",$extensions:{"nl.amsterdam.type":"lineHeight"}},"list-style-type":{$value:"'\\2022'",$type:"fontFamily"},inverse:{color:{$value:"{ams.color.text.inverse}",$type:"color"}},small:{"font-size":{$value:"{ams.typography.body-text.small.font-size}",$extensions:{"nl.amsterdam.type":"fontSize"}},"line-height":{$value:"{ams.typography.body-text.small.line-height}",$extensions:{"nl.amsterdam.type":"lineHeight"}}},item:{"margin-inline-start":{$value:{value:1.625,unit:"rem"},$type:"dimension",$extensions:{"nl.amsterdam.hint":"Divide your total indentation width over margin and padding to position the marker.","nl.amsterdam.subtype":"space"}},"padding-inline-start":{$value:{value:.875,unit:"rem"},$extensions:{"nl.amsterdam.hint":"The total level 1 indentation for Amsterdam is 40 pixels, or 2.5rem.","nl.amsterdam.subtype":"space"},$type:"dimension"}},"unordered-list":{gap:{$value:"{ams.space.s}",$type:"dimension",$extensions:{"nl.amsterdam.subtype":"space"}},"list-style-type":{$value:"'\\2013'",$type:"fontFamily"},"padding-block-end":{$value:"{ams.space.s}",$type:"dimension",$extensions:{"nl.amsterdam.subtype":"space"}},"padding-block-start":{$value:"{ams.space.s}",$type:"dimension",$extensions:{"nl.amsterdam.subtype":"space"}},item:{"margin-inline-start":{$value:{value:.875,unit:"rem"},$type:"dimension",$extensions:{"nl.amsterdam.hint":"Indent less than the parent to start-align the child’s marker with the parent text.","nl.amsterdam.subtype":"space"}},"padding-inline-start":{$value:{value:.875,unit:"rem"},$extensions:{"nl.amsterdam.hint":"The total level >=2 indentation for Amsterdam is 28 pixels, or 1.75rem.","nl.amsterdam.subtype":"space"},$type:"dimension"}}}}},v={ams:f};function i(n){const t={code:"code",h2:"h2",h3:"h3",p:"p",...a(),...n.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,`
`,`
`,e.jsx(o,{of:d}),`
`,e.jsx(r,{children:y}),`
`,e.jsx(l,{}),`
`,e.jsx(m,{}),`
`,e.jsx(t.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(t.h3,{id:"two-levels",children:"Two levels"}),`
`,e.jsx(t.p,{children:`A list can have one deeper level.
In this case, an en dash is used as the list item marker.
It is left-aligned with the text of the higher-level item.`}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(t.h3,{id:"without-markers",children:"Without markers"}),`
`,e.jsx(t.p,{children:`An overview of articles can be seen as an unordered list.
In such cases, apply the list semantics while hiding markers.
This helps screen readers understand and navigate the list.`}),`
`,e.jsxs(t.p,{children:[`Note: each item typically contains a container with headings and other text components in this variant.
Therefore, it does not define typography for the items and the `,e.jsx(t.code,{children:"color"})," prop has no effect."]}),`
`,e.jsx(t.p,{children:"For example, here are three news articles:"}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(t.h3,{id:"inverse-colour",children:"Inverse colour"}),`
`,e.jsx(t.p,{children:`Use the inverse colour if the List sits on a dark background.
This ensures the colour of the text provides enough contrast.
When nesting lists, set the prop on all lists.`}),`
`,e.jsx(s,{of:c}),`
`,e.jsx(t.h3,{id:"small-text",children:"Small text"}),`
`,e.jsx(t.p,{children:`We use a smaller font size for text in a Figure Caption and for metadata like dates or categories.
When using a list in small text, set the prop for each item in the list.`}),`
`,e.jsx(s,{of:u}),`
`,e.jsx(t.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsx(x,{tokens:v})]})}function F(n={}){const{wrapper:t}={...a(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(i,{...n})}):i(n)}export{F as default};
