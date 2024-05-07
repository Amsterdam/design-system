import{j as e}from"./jsx-runtime-CKrituN3.js";import{useMDXComponents as i}from"./index-DSz_1G2r.js";import{M as o,d as a,P as h,e as l,f as n}from"./index-CFp2AEhN.js";import{O as d,S as c,L as m,T as p,a as x,D as u,W as j,I as f}from"./OrderedList.stories-uOHOY0Bk.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-DR_smzPW.js";import"../sb-preview/runtime.js";import"./index-BtM5VmRH.js";import"./index-Dkj0J1ds.js";import"./index-BLcLG51Y.js";import"./index-DrFu-skq.js";import"./decorators-CJr_2w8M.js";import"./exampleContent-CRK3_7Hv.js";import"./clsx-B-dksMZM.js";import"./Heading-DWMBrRCk.js";import"./getHeadingElement-DiRwFEz7.js";import"./Paragraph-XcXe9TCG.js";const v=`<!-- @license CC0-1.0 -->

# Ordered List

An ordered list is a vertical group of related content with an order.
This list can have 2 levels.
The first level has numbers as list markers.
The second level uses letters in alphabetical order.
List items indent their text by a fixed distance.
`;function t(r){const s={code:"code",h2:"h2",h3:"h3",p:"p",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
`,e.jsx(a,{children:v}),`
`,e.jsx(s.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(s.h3,{id:"default",children:"Default"}),`
`,e.jsx(s.p,{children:`The list uses ascending numbers as markers, providing enough space for numbers up to 99.
Extra white space between items enhances the distinction, mainly when they consist of multiple lines of text.`}),`
`,e.jsx(h,{}),`
`,e.jsx(l,{}),`
`,e.jsx(s.h2,{id:"small",children:"Small"}),`
`,e.jsx(s.p,{children:"Use a list with a smaller font size in form descriptions and captions and the like."}),`
`,e.jsx(n,{of:c}),`
`,e.jsx(s.h2,{id:"large",children:"Large"}),`
`,e.jsx(s.p,{children:"Use this size only for the introductory text of a page."}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(s.h3,{id:"two-levels",children:"Two Levels"}),`
`,e.jsx(s.p,{children:`A list may have one nested level.
In this case, lowercase letters are used as markers.`}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(s.h3,{id:"starting-number",children:"Starting Number"}),`
`,e.jsxs(s.p,{children:[`When necessary, the list can start with a higher number.
Use the HTML attribute `,e.jsx(s.code,{children:"start"}),"."]}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(s.h3,{id:"reverse-order",children:"Reverse Order"}),`
`,e.jsxs(s.p,{children:[`The numbers can also be in reverse order.
Use the HTML attribute `,e.jsx(s.code,{children:"reversed"}),"."]}),`
`,e.jsx(n,{of:u}),`
`,e.jsx(s.h3,{id:"without-markers",children:"Without Markers"}),`
`,e.jsx(s.p,{children:`An overview of articles or search results can be presented as an ordered can be seen as an unordered list.
In such cases, apply the list semantics while hiding markers.
This helps screen readers understand and navigate the list.`}),`
`,e.jsxs(s.p,{children:[`Note: each item typically contains a container with titles and other text components in this variant.
Therefore, it does not define typography for the items and the `,e.jsx(s.code,{children:"inverseColor"})," prop has no effect."]}),`
`,e.jsx(s.p,{children:"For example, here are three news articles:"}),`
`,e.jsx(n,{of:j}),`
`,e.jsx(s.h3,{id:"inverse-colour",children:"Inverse Colour"}),`
`,e.jsxs(s.p,{children:["Set the ",e.jsx(s.code,{children:"inverseColor"}),` prop if the List sits on a dark background.
This ensures the colour of the text provides enough contrast.
When nesting lists, set the prop on all lists.`]}),`
`,e.jsx(n,{of:f})]})}function R(r={}){const{wrapper:s}={...i(),...r.components};return s?e.jsx(s,{...r,children:e.jsx(t,{...r})}):t(r)}export{R as default};
