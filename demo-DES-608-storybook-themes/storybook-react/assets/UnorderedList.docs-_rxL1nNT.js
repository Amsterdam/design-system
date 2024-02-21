import{j as e}from"./jsx-runtime-CKrituN3.js";import{M as r,d as a,f as n}from"./index-DBYCIfgf.js";import{U as l,D as h,T as d,W as c,I as p}from"./UnorderedList.stories-BDGTfc1Z.js";import{useMDXComponents as o}from"./index-DI5IigMn.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-DeAZoLDb.js";import"../sb-preview/runtime.js";import"./index-BtM5VmRH.js";import"./index-Bw8VTzHM.js";import"./index-Cmc67Rxs.js";import"./index-DrFu-skq.js";import"./index.esm-B56C_5T6.js";import"./exampleContent-D2dPQ7p9.js";const m=`# Unordered List

A list is a vertical group of related content.
This list can have 2 levels.
The first level consists of squares.
The second level consists of en dashes (–).
Text in the list items is indented by a fixed distance.
`;function i(s){const t=Object.assign({h2:"h2",h3:"h3",p:"p",code:"code"},o(),s.components);return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:l}),`
`,e.jsx(a,{children:m}),`
`,e.jsx(t.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(t.h3,{id:"default",children:"Default"}),`
`,e.jsx(t.p,{children:`An unordered list has square bullet points.
There is extra white space between the items.
This provides better distinction between the items, especially when they consist of multiple lines of text.`}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(t.h3,{id:"two-levels",children:"Two levels"}),`
`,e.jsx(t.p,{children:`A list can have one deeper level.
In this case, an en dash is used as the bullet point.
It is left-aligned with the text of the higher-level item.`}),`
`,e.jsx(n,{of:d}),`
`,e.jsx(t.h3,{id:"list-without-bullet-points",children:"List without bullet points"}),`
`,e.jsx(t.p,{children:`An overview of equivalent elements is also an unordered list.
In such cases, use a list without bullet points to convey that semantics.
This helps screen readers understand and navigate the list.`}),`
`,e.jsx(t.p,{children:`Note: In this variant, each item typically contains a container with titles and other text components.
Therefore, this variant does not define typography for the items.`}),`
`,e.jsx(t.p,{children:"This example is based on the top tasks on the homepage of the website:"}),`
`,e.jsx(n,{of:c}),`
`,e.jsx(t.h3,{id:"inverse-colour",children:"Inverse colour"}),`
`,e.jsxs(t.p,{children:["Set the ",e.jsx(t.code,{children:"inverseColor"}),` prop if the List sits on a dark background.
This ensures the colour of the text provides enough contrast.
When nesting lists, set the prop on all lists.`]}),`
`,e.jsx(n,{of:p})]})}function L(s={}){const{wrapper:t}=Object.assign({},o(),s.components);return t?e.jsx(t,Object.assign({},s,{children:e.jsx(i,s)})):i(s)}export{L as default};
