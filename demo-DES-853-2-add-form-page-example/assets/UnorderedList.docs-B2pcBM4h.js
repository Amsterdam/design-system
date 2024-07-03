import{j as e}from"./jsx-runtime-X2b_N9AH.js";import{useMDXComponents as o}from"./index-CRbi4mQH.js";import{M as r,d as a,P as h,e as l,f as t}from"./index-Cg7299co.js";import{U as d,T as c,W as p,I as m,S as x}from"./UnorderedList.stories-B-pAjoZE.js";import"./index-uCp2LrAq.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-C6-9nkRB.js";import"../sb-preview/runtime.js";import"./index-BOkhicXD.js";import"./index-DXimoRZY.js";import"./index-B8K4vdXH.js";import"./index-DrFu-skq.js";import"./index.esm-Dr6r5gIo.js";import"./decorators-CMqafKrE.js";import"./exampleContent-BEbrefRz.js";import"./UnorderedList-Dj5vkGIl.js";import"./clsx-B-dksMZM.js";import"./Icon-j44OzEOs.js";import"./Paragraph-DpVlyIEJ.js";const f=`<!-- @license CC0-1.0 -->

# Unordered List

A list is a vertical group of related content.
This list can have 2 levels.
The first level consists of squares.
The second level consists of en dashes (–).
Text in the list items is indented by a fixed distance.
`;/*@license CC0-1.0*/function i(n){const s={code:"code",h2:"h2",h3:"h3",p:"p",...o(),...n.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(r,{of:d}),`
`,e.jsx(a,{children:f}),`
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
`,e.jsx(t,{of:c}),`
`,e.jsx(s.h3,{id:"without-markers",children:"Without Markers"}),`
`,e.jsx(s.p,{children:`An overview of equivalent elements is also an unordered list.
In such cases, apply the list semantics while hiding markers.
This helps screen readers understand and navigate the list.`}),`
`,e.jsxs(s.p,{children:[`Note: In this variant, each item typically contains a container with headings and other text components.
Therefore, this variant does not define typography for the items and the `,e.jsx(s.code,{children:"inverseColor"})," prop has no effect."]}),`
`,e.jsx(s.p,{children:"This example is based on the top tasks on the homepage of the website:"}),`
`,e.jsx(t,{of:p}),`
`,e.jsx(s.h3,{id:"inverse-colour",children:"Inverse Colour"}),`
`,e.jsxs(s.p,{children:["Set the ",e.jsx(s.code,{children:"inverseColor"}),` prop if the List sits on a dark background.
This ensures the colour of the text provides enough contrast.
When nesting lists, set the prop on all lists.`]}),`
`,e.jsx(t,{of:m}),`
`,e.jsx(s.h3,{id:"small",children:"Small"}),`
`,e.jsx(s.p,{children:"Use a list with a smaller font size in form descriptions and captions and the like."}),`
`,e.jsx(t,{of:x})]})}function q(n={}){const{wrapper:s}={...o(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(i,{...n})}):i(n)}export{q as default};
