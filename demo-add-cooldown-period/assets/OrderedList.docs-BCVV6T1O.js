import{j as e}from"./iframe-5wBCJRPl.js";import{useMDXComponents as i}from"./index-B8_lgSOk.js";import{M as a,c as o,P as h,e as l,f as t}from"./blocks-CxJMn4_W.js";import{O as c,T as d,S as m,D as x,W as p,I as u,a as f}from"./OrderedList.stories-DWoCnutU.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bgb7KePS.js";import"./exampleContent-DRope23M.js";const j=`<!-- @license CC0-1.0 -->

# Ordered List

An ordered list is a vertical group of related content with an order.
This list can have 2 levels.
The first level has numbers as list markers.
The second level uses letters in alphabetical order.
List items indent their text by a fixed distance.

## Design

The list uses ascending numbers as markers, providing enough space for numbers up to 99.
Extra white space between items enhances the distinction, mainly when they consist of multiple lines of text.
`;/*@license CC0-1.0*/function r(s){const n={code:"code",h2:"h2",h3:"h3",p:"p",...i(),...s.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(a,{of:c}),`
`,e.jsx(o,{children:j}),`
`,e.jsx(h,{}),`
`,e.jsx(l,{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"two-levels",children:"Two levels"}),`
`,e.jsx(n.p,{children:`A list may have one nested level.
In this case, lowercase letters are used as markers.`}),`
`,e.jsx(t,{of:d}),`
`,e.jsx(n.h3,{id:"starting-number",children:"Starting number"}),`
`,e.jsxs(n.p,{children:[`When necessary, the list can start with a higher number.
Use the HTML attribute `,e.jsx(n.code,{children:"start"}),"."]}),`
`,e.jsx(t,{of:m}),`
`,e.jsx(n.h3,{id:"reverse-order",children:"Reverse order"}),`
`,e.jsxs(n.p,{children:[`The numbers can also be in reverse order.
Use the HTML attribute `,e.jsx(n.code,{children:"reversed"}),"."]}),`
`,e.jsx(t,{of:x}),`
`,e.jsx(n.h3,{id:"without-markers",children:"Without markers"}),`
`,e.jsx(n.p,{children:`An overview of search results can be seen as an ordered list.
In such cases, apply the list semantics while hiding markers.
This helps screen readers understand and navigate the list.`}),`
`,e.jsxs(n.p,{children:[`Note: each item typically contains a container with headings and other text components in this variant.
Therefore, it does not define typography for the items and the `,e.jsx(n.code,{children:"color"})," prop has no effect."]}),`
`,e.jsx(n.p,{children:"For example, here are three news articles:"}),`
`,e.jsx(t,{of:p}),`
`,e.jsx(n.h3,{id:"inverse-colour",children:"Inverse colour"}),`
`,e.jsx(n.p,{children:`Use the inverse colour if the List sits on a dark background.
This ensures the colour of the text provides enough contrast.
When nesting lists, set the prop on all lists.`}),`
`,e.jsx(t,{of:u}),`
`,e.jsx(n.h3,{id:"small-text",children:"Small text"}),`
`,e.jsx(n.p,{children:`We use a smaller font size for text in a Figure Caption and for metadata like dates or categories.
When using a list in small text, set the prop for each item in the list.`}),`
`,e.jsx(t,{of:f})]})}function M(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{M as default};
