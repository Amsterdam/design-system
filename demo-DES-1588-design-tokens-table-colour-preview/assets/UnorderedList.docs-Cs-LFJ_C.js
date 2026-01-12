import{j as e}from"./iframe-DnBePZqG.js";import{useMDXComponents as a}from"./index-CK937RcF.js";import{M as o,f as r,P as l,h as d,i as s}from"./blocks-Cfrr9rc5.js";import{a as m,T as h,W as p,I as c,S as y}from"./UnorderedList.stories-PH636o3U.js";import{D as x}from"./DesignTokensTable-BFE6Aawx.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bz_GHSVd.js";import"./exampleContent-Du2yH2Fl.js";import"./BorderSample-COA7WDwz.js";import"./formatTokenValue-BYjgZrXg.js";import"./ColorSample-DUmku21j.js";const u=`<!-- @license CC0-1.0 -->

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
`,f={"unordered-list":{color:{$value:"{ams.color.text.default}",$type:"color"},"font-family":{$value:"{ams.typography.font-family}",$type:"fontFamily"},"font-size":{$value:"{ams.typography.body-text.font-size}",$extensions:{"amsterdam.designsystem.type":"fontSize"}},"font-weight":{$value:"{ams.typography.body-text.font-weight}",$type:"fontWeight"},gap:{$value:"{ams.space.s}",$type:"dimension"},"line-height":{$value:"{ams.typography.body-text.line-height}",$extensions:{"amsterdam.designsystem.type":"lineHeight"}},"list-style-type":{$value:"'\\2022'",$type:"fontFamily"},inverse:{color:{$value:"{ams.color.text.inverse}",$type:"color"}},small:{"font-size":{$value:"{ams.typography.body-text.small.font-size}",$extensions:{"amsterdam.designsystem.type":"fontSize"}},"line-height":{$value:"{ams.typography.body-text.small.line-height}",$extensions:{"amsterdam.designsystem.type":"lineHeight"}}},item:{"margin-inline-start":{$value:{value:1.625,unit:"rem"},$extension:{"amsterdam.designsystem.hint":"Divide your total indentation width over margin and padding to position the marker."},$type:"dimension"},"padding-inline-start":{$value:{value:.875,unit:"rem"},$extension:{"amsterdam.designsystem.hint":"The total level 1 indentation for Amsterdam is 40 pixels, or 2.5rem."},$type:"dimension"}},"unordered-list":{gap:{$value:"{ams.space.s}",$type:"dimension"},"list-style-type":{$value:"'\\2013'",$type:"fontFamily"},"padding-block-end":{$value:"{ams.space.s}",$type:"dimension"},"padding-block-start":{$value:"{ams.space.s}",$type:"dimension"},item:{"margin-inline-start":{$value:{value:.875,unit:"rem"},$extension:{"amsterdam.designsystem.hint":"Indent less than the parent to start-align the child’s marker with the parent text."},$type:"dimension"},"padding-inline-start":{$value:{value:.875,unit:"rem"},$extension:{"amsterdam.designsystem.hint":"The total level >=2 indentation for Amsterdam is 28 pixels, or 1.75rem."},$type:"dimension"}}}}},v={ams:f};function i(n){const t={code:"code",h2:"h2",h3:"h3",p:"p",...a(),...n.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,`
`,`
`,e.jsx(o,{of:m}),`
`,e.jsx(r,{children:u}),`
`,e.jsx(l,{}),`
`,e.jsx(d,{}),`
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
`,e.jsx(s,{of:y}),`
`,e.jsx(t.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsx(x,{tokens:v})]})}function z(n={}){const{wrapper:t}={...a(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(i,{...n})}):i(n)}export{z as default};
