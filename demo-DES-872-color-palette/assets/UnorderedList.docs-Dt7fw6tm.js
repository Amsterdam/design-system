import{j as e}from"./jsx-runtime-BlAj40OV.js";import{useMDXComponents as o}from"./index-BI1Biiay.js";import{ae as r,ak as a,al as h,am as l,an as t}from"./index-D3JDd3a4.js";import{U as d,T as c,W as m,I as p,S as x}from"./UnorderedList.stories-DCB7DdaZ.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-C9FM-GHQ.js";import"../sb-preview/runtime.js";import"./index-Cf-03bMR.js";import"./index-D-8MO0q_.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";import"./index.esm-BCCXlrck.js";import"./clsx-B-dksMZM.js";import"./index.esm-BBV4ZYo5.js";import"./decorators-CweBkPI6.js";import"./exampleContent-hIIPvEhU.js";const f=`<!-- @license CC0-1.0 -->

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
`;/*@license CC0-1.0*/function i(s){const n={code:"code",h2:"h2",h3:"h3",p:"p",...o(),...s.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(r,{of:d}),`
`,e.jsx(a,{children:f}),`
`,e.jsx(h,{}),`
`,e.jsx(l,{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"two-levels",children:"Two levels"}),`
`,e.jsx(n.p,{children:`A list can have one deeper level.
In this case, an en dash is used as the list item marker.
It is left-aligned with the text of the higher-level item.`}),`
`,e.jsx(t,{of:c}),`
`,e.jsx(n.h3,{id:"without-markers",children:"Without markers"}),`
`,e.jsx(n.p,{children:`An overview of equivalent elements is also an unordered list.
In such cases, apply the list semantics while hiding markers.
This helps screen readers understand and navigate the list.`}),`
`,e.jsxs(n.p,{children:[`Note: In this variant, each item typically contains a container with headings and other text components.
Therefore, this variant does not define typography for the items and the `,e.jsx(n.code,{children:"inverseColor"})," prop has no effect."]}),`
`,e.jsx(n.p,{children:"This example is based on the top tasks on the homepage of the website:"}),`
`,e.jsx(t,{of:m}),`
`,e.jsx(n.h3,{id:"inverse-colour",children:"Inverse colour"}),`
`,e.jsxs(n.p,{children:["Set the ",e.jsx(n.code,{children:"inverseColor"}),` prop if the List sits on a dark background.
This ensures the colour of the text provides enough contrast.
When nesting lists, set the prop on all lists.`]}),`
`,e.jsx(t,{of:p}),`
`,e.jsx(n.h3,{id:"small-text",children:"Small text"}),`
`,e.jsx(n.p,{children:"Use a list with a smaller font size in form descriptions and captions and the like."}),`
`,e.jsx(t,{of:x})]})}function U(s={}){const{wrapper:n}={...o(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{U as default};
