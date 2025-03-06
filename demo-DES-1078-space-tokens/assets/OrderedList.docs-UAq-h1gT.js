import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as i}from"./index-1Ha5aU2j.js";import{M as o,e as a,P as h,f as l,h as r}from"./index-sQonxv_r.js";import{O as d,T as c,S as m,D as p,W as x,I as u,a as j}from"./OrderedList.stories-B4QbEg-Q.js";import"./index-yBjzXJbu.js";import"./index-C0MU9AHG.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-WTJQV3-n.js";import"./index-fNjTmf9T.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index.esm-Du0K5Sxd.js";import"./clsx-B-dksMZM.js";import"./index.esm-DvoLfDtE.js";import"./exampleContent-PGFPgakh.js";const f=`<!-- @license CC0-1.0 -->

# Ordered List

An ordered list is a vertical group of related content with an order.
This list can have 2 levels.
The first level has numbers as list markers.
The second level uses letters in alphabetical order.
List items indent their text by a fixed distance.

## Design

The list uses ascending numbers as markers, providing enough space for numbers up to 99.
Extra white space between items enhances the distinction, mainly when they consist of multiple lines of text.
`;/*@license CC0-1.0*/function t(s){const n={code:"code",h2:"h2",h3:"h3",p:"p",...i(),...s.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(o,{of:d}),`
`,e.jsx(a,{children:f}),`
`,e.jsx(h,{}),`
`,e.jsx(l,{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"two-levels",children:"Two levels"}),`
`,e.jsx(n.p,{children:`A list may have one nested level.
In this case, lowercase letters are used as markers.`}),`
`,e.jsx(r,{of:c}),`
`,e.jsx(n.h3,{id:"starting-number",children:"Starting number"}),`
`,e.jsxs(n.p,{children:[`When necessary, the list can start with a higher number.
Use the HTML attribute `,e.jsx(n.code,{children:"start"}),"."]}),`
`,e.jsx(r,{of:m}),`
`,e.jsx(n.h3,{id:"reverse-order",children:"Reverse order"}),`
`,e.jsxs(n.p,{children:[`The numbers can also be in reverse order.
Use the HTML attribute `,e.jsx(n.code,{children:"reversed"}),"."]}),`
`,e.jsx(r,{of:p}),`
`,e.jsx(n.h3,{id:"without-markers",children:"Without markers"}),`
`,e.jsx(n.p,{children:`An overview of articles or search results can be presented as an ordered can be seen as an unordered list.
In such cases, apply the list semantics while hiding markers.
This helps screen readers understand and navigate the list.`}),`
`,e.jsxs(n.p,{children:[`Note: each item typically contains a container with headings and other text components in this variant.
Therefore, it does not define typography for the items and the `,e.jsx(n.code,{children:"color"})," prop has no effect."]}),`
`,e.jsx(n.p,{children:"For example, here are three news articles:"}),`
`,e.jsx(r,{of:x}),`
`,e.jsx(n.h3,{id:"inverse-colour",children:"Inverse colour"}),`
`,e.jsxs(n.p,{children:["Set the ",e.jsx(n.code,{children:"color"})," prop to ",e.jsx(n.code,{children:"inverse"}),` if the List sits on a dark background.
This ensures the colour of the text provides enough contrast.
When nesting lists, set the prop on all lists.`]}),`
`,e.jsx(r,{of:u}),`
`,e.jsx(n.h3,{id:"small-text",children:"Small text"}),`
`,e.jsx(n.p,{children:"Use a list with a smaller font size in form descriptions and captions and the like."}),`
`,e.jsx(r,{of:j})]})}function A(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{A as default};
