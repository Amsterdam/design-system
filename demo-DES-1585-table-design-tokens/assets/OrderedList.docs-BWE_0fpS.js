import{j as e}from"./iframe-CXu_TrTC.js";import{useMDXComponents as a}from"./index-Cj073HbI.js";import{M as r,f as o,P as l,h as d,i as s}from"./blocks-CykYy4Gc.js";import{a as h,T as m,S as c,D as p,W as u,I as x,b as y}from"./OrderedList.stories-D3bl3QWm.js";import{D as g}from"./DesignTokensTable-BOMxNy0w.js";import"./preload-helper-PPVm8Dsz.js";import"./index-67Bzgv7V.js";import"./exampleContent-Du2yH2Fl.js";import"./BorderSample-CCGCR33m.js";const v=`<!-- @license CC0-1.0 -->

# Ordered List

An ordered list is a vertical group of related content with an order.
This list can have 2 levels.
The first level has numbers as list markers.
The second level uses letters in alphabetical order.
List items indent their text by a fixed distance.

## Design

The list uses ascending numbers as markers, providing enough space for numbers up to 99.
Extra white space between items enhances the distinction, mainly when they consist of multiple lines of text.
`,f={"ordered-list":{color:{$value:"{ams.color.text.default}",$type:"color"},"font-family":{$value:"{ams.typography.font-family}",$type:"fontFamily"},"font-size":{$value:"{ams.typography.body-text.font-size}",$extensions:{"amsterdam.designsystem.type":"fontSize"}},"font-weight":{$value:"{ams.typography.body-text.font-weight}",$type:"fontWeight"},gap:{$value:"{ams.space.s}",$type:"dimension"},"line-height":{$value:"{ams.typography.body-text.line-height}",$extensions:{"amsterdam.designsystem.type":"lineHeight"}},"list-style-type":{$value:"decimal"},small:{"font-size":{$value:"{ams.typography.body-text.small.font-size}",$extensions:{"amsterdam.designsystem.type":"fontSize"}},"line-height":{$value:"{ams.typography.body-text.small.line-height}",$extensions:{"amsterdam.designsystem.type":"lineHeight"}}},inverse:{color:{$value:"{ams.color.text.inverse}",$type:"color"}},item:{"margin-inline-start":{$value:{value:2.25,unit:"rem"},$extension:{"amsterdam.designsystem.hint":"Divide your total indentation width over margin and padding to position the marker."},$type:"dimension"},"padding-inline-start":{$value:{value:.25,unit:"rem"},$extension:{"amsterdam.designsystem.hint":"The total level 1 indentation for Amsterdam is 40 pixels, or 2.5rem."},$type:"dimension"}},"ordered-list":{gap:{$value:"{ams.space.s}",$type:"dimension"},"list-style-type":{$value:"lower-alpha"},"padding-block-end":{$value:"{ams.space.s}",$type:"dimension"},"padding-block-start":{$value:"{ams.space.s}",$type:"dimension"},item:{"margin-inline-start":{$value:{value:1.5,unit:"rem"},$extension:{"amsterdam.designsystem.hint":"Indent less than the parent to start-align the child’s marker with the parent text."},$type:"dimension"},"padding-inline-start":{$value:{value:.25,unit:"rem"},$extension:{"amsterdam.designsystem.hint":"The total level >=2 indentation for Amsterdam is 28 pixels, or 1.75rem."},$type:"dimension"}}}}},$={ams:f};function i(n){const t={code:"code",h2:"h2",h3:"h3",p:"p",...a(),...n.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,`
`,`
`,e.jsx(r,{of:h}),`
`,e.jsx(o,{children:v}),`
`,e.jsx(l,{}),`
`,e.jsx(d,{}),`
`,e.jsx(t.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(t.h3,{id:"two-levels",children:"Two levels"}),`
`,e.jsx(t.p,{children:`A list may have one nested level.
In this case, lowercase letters are used as markers.`}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(t.h3,{id:"starting-number",children:"Starting number"}),`
`,e.jsxs(t.p,{children:[`When necessary, the list can start with a higher number.
Use the HTML attribute `,e.jsx(t.code,{children:"start"}),"."]}),`
`,e.jsx(s,{of:c}),`
`,e.jsx(t.h3,{id:"reverse-order",children:"Reverse order"}),`
`,e.jsxs(t.p,{children:[`The numbers can also be in reverse order.
Use the HTML attribute `,e.jsx(t.code,{children:"reversed"}),"."]}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(t.h3,{id:"without-markers",children:"Without markers"}),`
`,e.jsx(t.p,{children:`An overview of search results can be seen as an ordered list.
In such cases, apply the list semantics while hiding markers.
This helps screen readers understand and navigate the list.`}),`
`,e.jsxs(t.p,{children:[`Note: each item typically contains a container with headings and other text components in this variant.
Therefore, it does not define typography for the items and the `,e.jsx(t.code,{children:"color"})," prop has no effect."]}),`
`,e.jsx(t.p,{children:"For example, here are three news articles:"}),`
`,e.jsx(s,{of:u}),`
`,e.jsx(t.h3,{id:"inverse-colour",children:"Inverse colour"}),`
`,e.jsx(t.p,{children:`Use the inverse colour if the List sits on a dark background.
This ensures the colour of the text provides enough contrast.
When nesting lists, set the prop on all lists.`}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(t.h3,{id:"small-text",children:"Small text"}),`
`,e.jsx(t.p,{children:`We use a smaller font size for text in a Figure Caption and for metadata like dates or categories.
When using a list in small text, set the prop for each item in the list.`}),`
`,e.jsx(s,{of:y}),`
`,e.jsx(t.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsx(g,{tokens:$})]})}function S(n={}){const{wrapper:t}={...a(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(i,{...n})}):i(n)}export{S as default};
