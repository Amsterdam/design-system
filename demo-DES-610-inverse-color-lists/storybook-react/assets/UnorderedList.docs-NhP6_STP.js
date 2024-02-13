import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{M as r,d as a,f as n}from"./index-hXV2oOUp.js";import{U as l,D as h,T as d,W as c,I as p}from"./UnorderedList.stories-LaFhAfJq.js";import{useMDXComponents as o}from"./index-_VGcpBFS.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./iframe-zxQ_SZPu.js";import"../sb-preview/runtime.js";import"./index-jmm5gWkb.js";import"./index-ogXoivrg.js";import"./extends-dGVwEr9R.js";import"./index-MVbLLYTZ.js";import"./index-PPLHz8o0.js";import"./index.esm-iAewYi3C.js";import"./exampleContent-GJvLNqvD.js";const m=`# Unordered List

A list is a vertical group of related content.
This list can have 2 levels.
The first level consists of squares.
The second level consists of en dashes (–).
Text in the list items is indented by a fixed distance.
`;function i(s){const t=Object.assign({h2:"h2",h3:"h3",p:"p"},o(),s.components);return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:l}),`
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
`,e.jsx(t.h3,{id:"list-with-inverted-colors-for-dark-backgrounds",children:"List with inverted colors for dark backgrounds"}),`
`,e.jsx(t.p,{children:"When using a dark background, the list can have inverted colors to ensure readability."}),`
`,e.jsx(n,{of:p})]})}function A(s={}){const{wrapper:t}=Object.assign({},o(),s.components);return t?e.jsx(t,Object.assign({},s,{children:e.jsx(i,s)})):i(s)}export{A as default};
