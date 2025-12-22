import{j as e}from"./iframe-BRapv6FB.js";import{useMDXComponents as a}from"./index-1afWrQwj.js";import{M as i,f as o,P as l,h,i as s}from"./blocks-Cl_LkDV9.js";import{a as d,T as m,S as c,D as p,W as u,I as x,b as v}from"./OrderedList.stories-BARBA1f_.js";import{D as f}from"./DesignTokensTable-CI3e1M8Z.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DleYxqVB.js";import"./exampleContent-Du2yH2Fl.js";const g=`<!-- @license CC0-1.0 -->

# Ordered List

An ordered list is a vertical group of related content with an order.
This list can have 2 levels.
The first level has numbers as list markers.
The second level uses letters in alphabetical order.
List items indent their text by a fixed distance.

## Design

The list uses ascending numbers as markers, providing enough space for numbers up to 99.
Extra white space between items enhances the distinction, mainly when they consist of multiple lines of text.
`,y={"ordered-list":{color:{value:"{ams.color.text.default}"},"font-family":{value:"{ams.typography.font-family}"},"font-size":{value:"{ams.typography.body-text.font-size}"},"font-weight":{value:"{ams.typography.body-text.font-weight}"},gap:{value:"{ams.space.s}"},"line-height":{value:"{ams.typography.body-text.line-height}"},"list-style-type":{value:"decimal"},small:{"font-size":{value:"{ams.typography.body-text.small.font-size}"},"line-height":{value:"{ams.typography.body-text.small.line-height}"}},inverse:{color:{value:"{ams.color.text.inverse}"}},item:{"margin-inline-start":{value:"2.25rem",comment:"Divide your total indentation width over margin and padding to position the marker."},"padding-inline-start":{value:"0.25rem",comment:"The total level 1 indentation for Amsterdam is 40 pixels, or 2.5rem."}},"ordered-list":{gap:{value:"{ams.space.s}"},"list-style-type":{value:"lower-alpha"},"padding-block-end":{value:"{ams.space.s}"},"padding-block-start":{value:"{ams.space.s}"},item:{"margin-inline-start":{value:"1.5rem",comment:"Indent less than the parent to start-align the child’s marker with the parent text."},"padding-inline-start":{value:"0.25rem",comment:"The total level >=2 indentation for Amsterdam is 28 pixels, or 1.75rem."}}}}},j={ams:y};function r(n){const t={code:"code",h2:"h2",h3:"h3",p:"p",...a(),...n.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,`
`,`
`,e.jsx(i,{of:d}),`
`,e.jsx(o,{children:g}),`
`,e.jsx(l,{}),`
`,e.jsx(h,{}),`
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
`,e.jsx(s,{of:v}),`
`,e.jsx(t.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsx(f,{tokens:j})]})}function W(n={}){const{wrapper:t}={...a(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(r,{...n})}):r(n)}export{W as default};
