import{j as e}from"./jsx-runtime-X2b_N9AH.js";import{useMDXComponents as i}from"./index-CRbi4mQH.js";import{M as o,d as a,P as l,e as h,f as r}from"./index-C_f2Chmv.js";import{O as d,S as c,T as m,a as p,D as x,W as u,I as j}from"./OrderedList.stories-Ck0fyNFO.js";import"./index-uCp2LrAq.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-CmnaXOA0.js";import"../sb-preview/runtime.js";import"./index-BOkhicXD.js";import"./index-DXimoRZY.js";import"./index-B8K4vdXH.js";import"./index-DrFu-skq.js";import"./decorators-CMqafKrE.js";import"./exampleContent-CRK3_7Hv.js";import"./clsx-B-dksMZM.js";import"./Heading-CGpdaMNv.js";import"./getHeadingElement-DiRwFEz7.js";import"./Paragraph-DpVlyIEJ.js";const f=`<!-- @license CC0-1.0 -->

# Ordered List

An ordered list is a vertical group of related content with an order.
This list can have 2 levels.
The first level has numbers as list markers.
The second level uses letters in alphabetical order.
List items indent their text by a fixed distance.
`;function t(n){const s={code:"code",h2:"h2",h3:"h3",p:"p",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
`,e.jsx(a,{children:f}),`
`,e.jsx(s.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(s.h3,{id:"default",children:"Default"}),`
`,e.jsx(s.p,{children:`The list uses ascending numbers as markers, providing enough space for numbers up to 99.
Extra white space between items enhances the distinction, mainly when they consist of multiple lines of text.`}),`
`,e.jsx(l,{}),`
`,e.jsx(h,{}),`
`,e.jsx(s.h2,{id:"small",children:"Small"}),`
`,e.jsx(s.p,{children:"Use a list with a smaller font size in form descriptions and captions and the like."}),`
`,e.jsx(r,{of:c}),`
`,e.jsx(s.h3,{id:"two-levels",children:"Two Levels"}),`
`,e.jsx(s.p,{children:`A list may have one nested level.
In this case, lowercase letters are used as markers.`}),`
`,e.jsx(r,{of:m}),`
`,e.jsx(s.h3,{id:"starting-number",children:"Starting Number"}),`
`,e.jsxs(s.p,{children:[`When necessary, the list can start with a higher number.
Use the HTML attribute `,e.jsx(s.code,{children:"start"}),"."]}),`
`,e.jsx(r,{of:p}),`
`,e.jsx(s.h3,{id:"reverse-order",children:"Reverse Order"}),`
`,e.jsxs(s.p,{children:[`The numbers can also be in reverse order.
Use the HTML attribute `,e.jsx(s.code,{children:"reversed"}),"."]}),`
`,e.jsx(r,{of:x}),`
`,e.jsx(s.h3,{id:"without-markers",children:"Without Markers"}),`
`,e.jsx(s.p,{children:`An overview of articles or search results can be presented as an ordered can be seen as an unordered list.
In such cases, apply the list semantics while hiding markers.
This helps screen readers understand and navigate the list.`}),`
`,e.jsxs(s.p,{children:[`Note: each item typically contains a container with titles and other text components in this variant.
Therefore, it does not define typography for the items and the `,e.jsx(s.code,{children:"inverseColor"})," prop has no effect."]}),`
`,e.jsx(s.p,{children:"For example, here are three news articles:"}),`
`,e.jsx(r,{of:u}),`
`,e.jsx(s.h3,{id:"inverse-colour",children:"Inverse Colour"}),`
`,e.jsxs(s.p,{children:["Set the ",e.jsx(s.code,{children:"inverseColor"}),` prop if the List sits on a dark background.
This ensures the colour of the text provides enough contrast.
When nesting lists, set the prop on all lists.`]}),`
`,e.jsx(r,{of:j})]})}function R(n={}){const{wrapper:s}={...i(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(t,{...n})}):t(n)}export{R as default};
