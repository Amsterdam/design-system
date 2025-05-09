import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as r}from"./index-CxbY7dAs.js";import{M as l,h as o,P as a,i as h,j as i}from"./index-Dt0OrEUF.js";import{C as c,A as d,H as m,I as x}from"./Column.stories-DM-iW_LL.js";import"./index-yBjzXJbu.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BCgImmPO.js";import"./index-fNjTmf9T.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index.esm-ChGGnQRO.js";import"./clsx-B-dksMZM.js";import"./index.esm-CblzCDI2.js";import"./types-yiKVj219.js";const p=`<!-- @license CC0-1.0 -->

# Column

Stacks its children vertically with gaps between them and offers alignment options.
`;/*@license CC0-1.0*/function s(t){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...r(),...t.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(l,{of:c}),`
`,e.jsx(o,{children:p}),`
`,e.jsx(n.h2,{id:"guidelines",children:"Guidelines"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Wrap a Column around a set of elements that need the same amount of white space between them."}),`
`,e.jsxs(n.li,{children:["Five sizes of ",e.jsx(n.a,{href:"/docs/brand-design-tokens-space--docs",children:"Space"}),` are available for the width or height of the gap.
The medium gap is the default.`]}),`
`,e.jsxs(n.li,{children:["To add white space below a single element, you can add a ",e.jsx(n.a,{href:"/docs/utilities-css-margin--docs",children:"Margin Bottom"})," instead."]}),`
`,e.jsx(n.li,{children:"Align the elements horizontally or vertically through the alignment props."}),`
`]}),`
`,e.jsx(a,{}),`
`,e.jsx(h,{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"alignment",children:"Alignment"}),`
`,e.jsx(n.p,{children:"Items in the column can be aligned vertically in several ways:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Center"}),": center items within the column."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"End"}),": align items to the bottom of the column – to the bottom."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Space Between"}),": distribute whitespace between items."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Space Around"}),": distribute whitespace around items."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Space Evenly"}),": distribute whitespace evenly around items."]}),`
`]}),`
`,e.jsxs(n.p,{children:["By default, items align to the ",e.jsx(n.strong,{children:"start"}),` of the column – at the top.
This option has no class name or prop value.`]}),`
`,e.jsx(n.p,{children:"This example centers three items vertically."}),`
`,e.jsx(i,{of:d}),`
`,e.jsx(n.h3,{id:"horizontal-alignment",children:"Horizontal alignment"}),`
`,e.jsx(n.p,{children:"Items in the column can be aligned horizontally in several ways:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Start"}),": align items to the start of the column. This is the left side in left-to-right languages."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Center"}),": center items within the column."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"End"}),": align items to the end of the column. This is the right side in left-to-right languages."]}),`
`]}),`
`,e.jsx(n.p,{children:"This example centers three items horizontally."}),`
`,e.jsx(i,{of:m}),`
`,e.jsx(n.h3,{id:"improve-semantics",children:"Improve semantics"}),`
`,e.jsxs(n.p,{children:["By default, a Column renders a ",e.jsx(n.code,{children:"<div>"}),` element in HTML.
Use the `,e.jsx(n.code,{children:"as"}),` prop to make your markup more semantic.
In this example, the Column uses a `,e.jsx(n.code,{children:"<section>"})," element to group the heading and the cards."]}),`
`,e.jsx(i,{of:x})]})}function I(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{I as default};
