import{j as e}from"./jsx-runtime-BlAj40OV.js";import{useMDXComponents as o}from"./index-BI1Biiay.js";import{ae as r,ak as l,al as a,am as h,an as t}from"./index-C8lzz2eP.js";import{R as d,H as c,E as p,A as m,V as x,W as g}from"./Row.stories-Cv7WNLsN.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-D96k8jxr.js";import"../sb-preview/runtime.js";import"./index-BMdlDBjA.js";import"./index-D-8MO0q_.js";import"./index-nrpnv_Jx.js";import"./index-DrFu-skq.js";import"./clsx-B-dksMZM.js";import"./Button-fZZcNY7w.js";import"./Avatar-CRAAVM1p.js";import"./index.esm-DY3iRp4W.js";import"./Image-CVzrCme5.js";import"./Icon-msbkstIT.js";import"./Heading-BgL7hu1i.js";import"./getHeadingElement-DiRwFEz7.js";import"./Link-D5rDrOyf.js";import"./Paragraph-BWS5kDPY.js";const j=`<!-- @license CC0-1.0 -->

# Row
`;/*@license CC0-1.0*/function s(i){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...i.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(r,{of:d}),`
`,e.jsx(l,{children:j}),`
`,e.jsx(n.h2,{id:"design",children:"Design"}),`
`,e.jsxs(n.p,{children:["The five ",e.jsx(n.a,{href:"/docs/docs-design-guidelines-space--docs",children:"space"})," sizes are available for the width of the gap."]}),`
`,e.jsx(n.h2,{id:"how-to-use",children:"How to Use"}),`
`,e.jsx(n.p,{children:"Wrap a Row around a set of components that need the same amount of white space between them."}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"default",children:"Default"}),`
`,e.jsx(a,{}),`
`,e.jsx(h,{}),`
`,e.jsx(n.h3,{id:"horizontal-alignment",children:"Horizontal Alignment"}),`
`,e.jsx(n.p,{children:"Items in the row can be aligned horizontally in several ways:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Center"}),": center items within the row."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"End"}),": align items to the end of the row. This is the right side in left-to-right languages."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Space Between"}),": distribute whitespace between items."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Space Around"}),": distribute whitespace around items."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Space Evenly"}),": distribute whitespace evenly around items."]}),`
`]}),`
`,e.jsxs(n.p,{children:["By default, items align to the ",e.jsx(n.strong,{children:"start"}),` of the row – the left side in right-to-left languages.
This options has no class name or prop.`]}),`
`,e.jsxs(n.p,{children:["We left out the word ‘space’ from the values for the alignment prop, e.g. ",e.jsx(n.code,{children:'align="around"'}),"."]}),`
`,e.jsx(n.p,{children:"This example ensures that the spaces between and around all items are equally wide."}),`
`,e.jsx(t,{of:c}),`
`,e.jsx(n.h4,{id:"end-align-a-single-child",children:"End-align a Single Child"}),`
`,e.jsxs(n.p,{children:["To align a single component to the right (in left-to-right languages), wrap it in a ",e.jsx(n.code,{children:"<Row>"})," and set the ",e.jsx(n.code,{children:"align"})," prop to ",e.jsx(n.code,{children:"end"}),"."]}),`
`,e.jsx(t,{of:p}),`
`,e.jsx(n.h4,{id:"align-opposing-texts",children:"Align Opposing Texts"}),`
`,e.jsxs(n.p,{children:[`This example shows a right-aligned link next to a heading.
Use `,e.jsx(n.code,{children:'align="between"'}),` to position them at opposing ends of the row.
Add `,e.jsx(n.code,{children:'alignVertical="baseline"'}),` to align them vertically to their common baseline.
Include `,e.jsx(n.code,{children:"wrap"})," to allow the link to wrap to a new line if both components don’t fit on the same line."]}),`
`,e.jsx(t,{of:m}),`
`,e.jsx(n.h3,{id:"vertical-alignment",children:"Vertical Alignment"}),`
`,e.jsx(n.p,{children:"Items in the row can be aligned vertically in several ways:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Start"}),": align items to the top of the row."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Center"}),": align items to the middle of the row."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"End"}),": align items to the bottom of the row."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Baseline"}),": align items to their common text baseline."]}),`
`]}),`
`,e.jsxs(n.p,{children:["By default, items ",e.jsx(n.strong,{children:"stretch"})," to the height of the row. This options has no class name or prop."]}),`
`,e.jsx(n.p,{children:"This example centers three items vertically."}),`
`,e.jsx(t,{of:x}),`
`,e.jsx(n.h3,{id:"wrapping",children:"Wrapping"}),`
`,e.jsx(n.p,{children:"Items that may not fit together on a single line should be allowed to wrap onto multiple lines."}),`
`,e.jsx(t,{of:g})]})}function O(i={}){const{wrapper:n}={...o(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{O as default};
