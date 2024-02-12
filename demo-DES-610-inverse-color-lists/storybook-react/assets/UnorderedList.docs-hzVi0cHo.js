import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{M as r,d as a,f as s}from"./index-CyZKBFl-.js";import{U as l,T as h,W as d}from"./UnorderedList.stories-sTgxwAC0.js";import{useMDXComponents as o}from"./index-_VGcpBFS.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./iframe-dXp1C3vf.js";import"../sb-preview/runtime.js";import"./index-jmm5gWkb.js";import"./index-ogXoivrg.js";import"./extends-dGVwEr9R.js";import"./index-MVbLLYTZ.js";import"./index-PPLHz8o0.js";import"./index.esm-43r_AgvM.js";import"./exampleContent-GJvLNqvD.js";const c=`# Unordered List

A list is a vertical group of related content.
This list can have 2 levels.
The first level consists of squares.
The second level consists of en dashes (–).
Text in the list items is indented by a fixed distance.
`;function i(n){const t=Object.assign({h2:"h2",h3:"h3",p:"p"},o(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:l}),`
`,e.jsx(a,{children:c}),`
`,e.jsx(t.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(t.h3,{id:"default",children:"Default"}),`
`,e.jsx(t.p,{children:`An unordered list has square bullet points.
There is extra white space between the items.
This provides better distinction between the items, especially when they consist of multiple lines of text.`}),`
`,e.jsx(s,{of:void 0}),`
`,e.jsx(t.h3,{id:"two-levels",children:"Two levels"}),`
`,e.jsx(t.p,{children:`A list can have one deeper level.
In this case, an en dash is used as the bullet point.
It is left-aligned with the text of the higher-level item.`}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(t.h3,{id:"list-without-bullet-points",children:"List without bullet points"}),`
`,e.jsx(t.p,{children:`An overview of equivalent elements is also an unordered list.
In such cases, use a list without bullet points to convey that semantics.
This helps screen readers understand and navigate the list.`}),`
`,e.jsx(t.p,{children:`Note: In this variant, each item typically contains a container with titles and other text components.
Therefore, this variant does not define typography for the items.`}),`
`,e.jsx(t.p,{children:"This example is based on the top tasks on the homepage of the website:"}),`
`,e.jsx(s,{of:d})]})}function L(n={}){const{wrapper:t}=Object.assign({},o(),n.components);return t?e.jsx(t,Object.assign({},n,{children:e.jsx(i,n)})):i(n)}export{L as default};
