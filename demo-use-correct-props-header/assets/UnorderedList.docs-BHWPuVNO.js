import{j as e}from"./jsx-runtime-CKrituN3.js";import{M as r,d as a,P as h,e as l,f as n}from"./index-Da_bfdCZ.js";import{U as d,T as c,W as p,I as m}from"./UnorderedList.stories-BwrSP47x.js";import{useMDXComponents as o}from"./index-DI5IigMn.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-AyQEBeGx.js";import"../sb-preview/runtime.js";import"./index-BtM5VmRH.js";import"./index-Bw8VTzHM.js";import"./index-Cmc67Rxs.js";import"./index-DrFu-skq.js";import"./index.esm-1ztBE3Ny.js";import"./exampleContent-CyZEwIqm.js";const x=`<!-- @license CC0-1.0 -->

# Unordered List

A list is a vertical group of related content.
This list can have 2 levels.
The first level consists of squares.
The second level consists of en dashes (–).
Text in the list items is indented by a fixed distance.
`;function i(t){const s=Object.assign({h2:"h2",h3:"h3",p:"p",code:"code"},o(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:d}),`
`,e.jsx(a,{children:x}),`
`,e.jsx(s.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(s.h3,{id:"default",children:"Default"}),`
`,e.jsx(s.p,{children:`Items of an unordered list have square markers.
There is extra white space between the items.
This provides better distinction between the items, especially when they consist of multiple lines of text.`}),`
`,e.jsx(h,{}),`
`,e.jsx(l,{}),`
`,e.jsx(s.h3,{id:"two-levels",children:"Two Levels"}),`
`,e.jsx(s.p,{children:`A list can have one deeper level.
In this case, an en dash is used as the list item marker.
It is left-aligned with the text of the higher-level item.`}),`
`,e.jsx(n,{of:c}),`
`,e.jsx(s.h3,{id:"without-markers",children:"Without Markers"}),`
`,e.jsx(s.p,{children:`An overview of equivalent elements is also an unordered list.
In such cases, apply the list semantics while hiding markers.
This helps screen readers understand and navigate the list.`}),`
`,e.jsxs(s.p,{children:[`Note: In this variant, each item typically contains a container with titles and other text components.
Therefore, this variant does not define typography for the items and the `,e.jsx(s.code,{children:"inverseColor"})," prop has no effect."]}),`
`,e.jsx(s.p,{children:"This example is based on the top tasks on the homepage of the website:"}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(s.h3,{id:"inverse-colour",children:"Inverse Colour"}),`
`,e.jsxs(s.p,{children:["Set the ",e.jsx(s.code,{children:"inverseColor"}),` prop if the List sits on a dark background.
This ensures the colour of the text provides enough contrast.
When nesting lists, set the prop on all lists.`]}),`
`,e.jsx(n,{of:m})]})}function D(t={}){const{wrapper:s}=Object.assign({},o(),t.components);return s?e.jsx(s,Object.assign({},t,{children:e.jsx(i,t)})):i(t)}export{D as default};
