import{j as e}from"./jsx-runtime-CKrituN3.js";import{M as o,d as a,f as n}from"./index-DBYCIfgf.js";import{O as l,D as h,T as c,S as d,a as u,W as p,I as m}from"./OrderedList.stories-_BTmYxFH.js";import{useMDXComponents as i}from"./index-DI5IigMn.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-DeAZoLDb.js";import"../sb-preview/runtime.js";import"./index-BtM5VmRH.js";import"./index-Bw8VTzHM.js";import"./index-Cmc67Rxs.js";import"./index-DrFu-skq.js";import"./index.esm-B56C_5T6.js";import"./exampleContent-D2dPQ7p9.js";const x=`# Ordered List

An ordered list is a vertical group of related content with an order.
This list can have 2 levels.
The first level has numbers as list markers.
The second level uses letters in alphabetical order.
List items indent their text by a fixed distance.
`;function r(s){const t=Object.assign({h2:"h2",h3:"h3",p:"p",code:"code"},i(),s.components);return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:l}),`
`,e.jsx(a,{children:x}),`
`,e.jsx(t.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(t.h3,{id:"default",children:"Default"}),`
`,e.jsx(t.p,{children:`The list uses ascending numbers as bullet points, providing enough space for numbers up to 99.
Extra whitespace between items enhances the distinction, mainly when they consist of multiple lines of text.`}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(t.h3,{id:"two-levels",children:"Two Levels"}),`
`,e.jsx(t.p,{children:`A list may have one nested level.
In this case, lowercase letters are used as bullet points.`}),`
`,e.jsx(n,{of:c}),`
`,e.jsx(t.h3,{id:"higher-starting-number",children:"Higher Starting Number"}),`
`,e.jsxs(t.p,{children:[`When necessary, the list can start with a higher number.
Use the HTML attribute `,e.jsx(t.code,{children:"start"}),"."]}),`
`,e.jsx(n,{of:d}),`
`,e.jsx(t.h3,{id:"reverse-order",children:"Reverse Order"}),`
`,e.jsxs(t.p,{children:[`The numbers can also be in reverse order.
Use the HTML attribute `,e.jsx(t.code,{children:"reversed"}),"."]}),`
`,e.jsx(n,{of:u}),`
`,e.jsx(t.h3,{id:"list-without-bullet-points",children:"List Without Bullet Points"}),`
`,e.jsx(t.p,{children:`An overview of articles or search results can be presented as an ordered list without bullet points.
In such cases, use a list without bullet points to convey the semantic structure.
This allows screen readers to assist in understanding and navigating the list.`}),`
`,e.jsx(t.p,{children:`Note: each item typically contains a container with titles and other text components in this variant.
Therefore, it does not define typography for the items.`}),`
`,e.jsx(t.p,{children:"For example, here are three news articles:"}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(t.h3,{id:"inverse-colour",children:"Inverse colour"}),`
`,e.jsxs(t.p,{children:["Set the ",e.jsx(t.code,{children:"inverseColor"}),` prop if the List sits on a dark background.
This ensures the colour of the text provides enough contrast.
When nesting lists, set the prop on all lists.`]}),`
`,e.jsx(n,{of:m})]})}function E(s={}){const{wrapper:t}=Object.assign({},i(),s.components);return t?e.jsx(t,Object.assign({},s,{children:e.jsx(r,s)})):r(s)}export{E as default};
