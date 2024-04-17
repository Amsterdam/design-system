import{j as e}from"./jsx-runtime-CKrituN3.js";import{useMDXComponents as o}from"./index-DSz_1G2r.js";import{M as r,d as a,P as h,e as l,f as n}from"./index-BqIHo0XZ.js";import{U as d,T as c,W as p,I as m}from"./UnorderedList.stories-BLMC5gUH.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-DzpSUL2Y.js";import"../sb-preview/runtime.js";import"./index-BtM5VmRH.js";import"./index-Bw8VTzHM.js";import"./index-DLle_QMf.js";import"./index-DrFu-skq.js";import"./index.esm-DjZ2yxjc.js";import"./decorators-CJr_2w8M.js";import"./exampleContent-CRK3_7Hv.js";import"./UnorderedList-tHVSnRro.js";import"./clsx-B-dksMZM.js";import"./Icon-DW52t4nJ.js";import"./Paragraph-Im3SnT_h.js";const x=`<!-- @license CC0-1.0 -->

# Unordered List

A list is a vertical group of related content.
This list can have 2 levels.
The first level consists of squares.
The second level consists of en dashes (–).
Text in the list items is indented by a fixed distance.
`;function i(s){const t={code:"code",h2:"h2",h3:"h3",p:"p",...o(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:d}),`
`,e.jsx(a,{children:x}),`
`,e.jsx(t.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(t.h3,{id:"default",children:"Default"}),`
`,e.jsx(t.p,{children:`Items of an unordered list have square markers.
There is extra white space between the items.
This provides better distinction between the items, especially when they consist of multiple lines of text.`}),`
`,e.jsx(h,{}),`
`,e.jsx(l,{}),`
`,e.jsx(t.h3,{id:"two-levels",children:"Two Levels"}),`
`,e.jsx(t.p,{children:`A list can have one deeper level.
In this case, an en dash is used as the list item marker.
It is left-aligned with the text of the higher-level item.`}),`
`,e.jsx(n,{of:c}),`
`,e.jsx(t.h3,{id:"without-markers",children:"Without Markers"}),`
`,e.jsx(t.p,{children:`An overview of equivalent elements is also an unordered list.
In such cases, apply the list semantics while hiding markers.
This helps screen readers understand and navigate the list.`}),`
`,e.jsxs(t.p,{children:[`Note: In this variant, each item typically contains a container with titles and other text components.
Therefore, this variant does not define typography for the items and the `,e.jsx(t.code,{children:"inverseColor"})," prop has no effect."]}),`
`,e.jsx(t.p,{children:"This example is based on the top tasks on the homepage of the website:"}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(t.h3,{id:"inverse-colour",children:"Inverse Colour"}),`
`,e.jsxs(t.p,{children:["Set the ",e.jsx(t.code,{children:"inverseColor"}),` prop if the List sits on a dark background.
This ensures the colour of the text provides enough contrast.
When nesting lists, set the prop on all lists.`]}),`
`,e.jsx(n,{of:m})]})}function U(s={}){const{wrapper:t}={...o(),...s.components};return t?e.jsx(t,{...s,children:e.jsx(i,{...s})}):i(s)}export{U as default};
