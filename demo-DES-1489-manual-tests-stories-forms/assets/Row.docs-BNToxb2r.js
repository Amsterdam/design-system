import{j as e}from"./iframe-1SECcQ3L.js";import{useMDXComponents as l}from"./index-CLqpQXHB.js";import{M as o,c as r,P as h,e as a,f as t}from"./blocks-Zho_Q-F0.js";import{R as d,A as c,E as g,a as x,b as p,V as m,W as j}from"./Row.stories-D_Gh8kTh.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C7GRAEvc.js";import"./types-yiKVj219.js";import"./Row-CQJ1e74X.js";const f=`<!-- @license CC0-1.0 -->

# Row

Stacks its children horizontally with gaps between them and offers alignment options.
`;/*@license CC0-1.0*/function s(i){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...l(),...i.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(o,{of:d}),`
`,e.jsx(r,{children:f}),`
`,e.jsx(n.h2,{id:"guidelines",children:"Guidelines"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Wrap a Row around a set of elements that need the same amount of white space between them."}),`
`,e.jsxs(n.li,{children:["Five sizes of ",e.jsx(n.a,{href:"/docs/brand-design-tokens-space--docs",children:"Space"}),` are available for the width or height of the gap.
The medium gap is the default.`]}),`
`,e.jsx(n.li,{children:"Align the elements horizontally or vertically through the alignment props."}),`
`]}),`
`,e.jsx(h,{}),`
`,e.jsx(a,{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"alignment",children:"Alignment"}),`
`,e.jsx(n.p,{children:"Items in the row can be aligned horizontally in several ways:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Center"}),": center items within the row."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"End"}),": align items to the end of the row. This is the right side in left-to-right languages."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Space Between"}),": distribute whitespace between items."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Space Around"}),": distribute whitespace around items."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Space Evenly"}),": distribute whitespace evenly around items."]}),`
`]}),`
`,e.jsxs(n.p,{children:["By default, items align to the ",e.jsx(n.strong,{children:"start"}),` of the row – the left side in right-to-left languages.
This option has no class name or prop value.`]}),`
`,e.jsxs(n.p,{children:["We left out the word ‘space’ from the values for the alignment prop, e.g. ",e.jsx(n.code,{children:'align="around"'}),"."]}),`
`,e.jsx(n.p,{children:"This example ensures that the spaces between and around all items are equally wide."}),`
`,e.jsx(t,{of:c}),`
`,e.jsx(n.h4,{id:"end-align-a-single-child",children:"End-align a single child"}),`
`,e.jsxs(n.p,{children:["To align a single component to the right (in left-to-right languages), wrap it in a ",e.jsx(n.code,{children:"<Row>"})," and set the ",e.jsx(n.code,{children:"align"})," prop to ",e.jsx(n.code,{children:"end"}),"."]}),`
`,e.jsx(t,{of:g}),`
`,e.jsx(n.p,{children:"For right-to-left languages, the end of the row is on the left side."}),`
`,e.jsx(t,{of:x}),`
`,e.jsx(n.h4,{id:"align-opposing-texts",children:"Align opposing texts"}),`
`,e.jsx(n.p,{children:"This example shows a right-aligned link next to a heading."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Use ",e.jsx(n.code,{children:'align="between"'})," to have all remaining space between them, which pushes the items to the opposing ends of the row."]}),`
`,e.jsxs(n.li,{children:["Add ",e.jsx(n.code,{children:'alignVertical="baseline"'})," to align them vertically to their common baseline."]}),`
`,e.jsxs(n.li,{children:["Include ",e.jsx(n.code,{children:"wrap"})," to allow the link to wrap to a new line if both components don’t fit on the same line."]}),`
`]}),`
`,e.jsx(t,{of:p}),`
`,e.jsx(n.h3,{id:"vertical-alignment",children:"Vertical alignment"}),`
`,e.jsx(n.p,{children:"Items in the row can be aligned vertically in several ways:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Start"}),": align items to the top of the row."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Center"}),": align items to the middle of the row."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"End"}),": align items to the bottom of the row."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Baseline"}),": align items to their common text baseline."]}),`
`]}),`
`,e.jsxs(n.p,{children:["By default, items ",e.jsx(n.strong,{children:"stretch"}),` to the height of the row.
This option has no class name or prop value.`]}),`
`,e.jsx(n.p,{children:"This example centers three items vertically."}),`
`,e.jsx(t,{of:m}),`
`,e.jsx(n.h3,{id:"wrapping",children:"Wrapping"}),`
`,e.jsx(n.p,{children:"Items that may not fit together on a single line should be allowed to wrap onto multiple lines."}),`
`,e.jsx(t,{of:j})]})}function S(i={}){const{wrapper:n}={...l(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{S as default};
