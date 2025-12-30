import{j as e}from"./iframe-CDYRpNq4.js";import{useMDXComponents as l}from"./index-BPplMmsK.js";import{M as a,f as o,P as r,h,i as t}from"./blocks-BTqmiZck.js";import{a as c,A as m,H as d,I as x}from"./Column.stories-BmlTT1L0.js";import{D as p}from"./DesignTokensTable-wq11Lk-9.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BLY34Pyn.js";import"./types-CjGn4A4T.js";import"./BorderSample-DBGmj8sW.js";import"./ColorSample-CS5Vvh-m.js";const u=`<!-- @license CC0-1.0 -->

# Column

Stacks its children vertically with gaps between them and offers alignment options.
`,g={column:{gap:{"x-small":{$value:"{ams.space.xs}",$extensions:{"ams.type":"gap"}},small:{$value:"{ams.space.s}",$extensions:{"ams.type":"gap"}},medium:{$value:"{ams.space.m}",$extensions:{"ams.type":"gap"}},large:{$value:"{ams.space.l}",$extensions:{"ams.type":"gap"}},"x-large":{$value:"{ams.space.xl}",$extensions:{"ams.type":"gap"}}}}},j={ams:g};function i(s){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...l(),...s.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,`
`,`
`,e.jsx(a,{of:c}),`
`,e.jsx(o,{children:u}),`
`,e.jsx(n.h2,{id:"guidelines",children:"Guidelines"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Wrap a Column around a set of elements that need the same amount of white space between them."}),`
`,e.jsxs(n.li,{children:["Five sizes of ",e.jsx(n.a,{href:"/docs/brand-design-tokens-space--docs",children:"Space"}),` are available for the width or height of the gap.
The medium gap is the default.`]}),`
`,e.jsxs(n.li,{children:["To add white space below a single element, you can add a ",e.jsx(n.a,{href:"/docs/utilities-css-margin--docs",children:"Margin Bottom"})," instead."]}),`
`,e.jsx(n.li,{children:"Align the elements horizontally or vertically through the alignment props."}),`
`]}),`
`,e.jsx(r,{}),`
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
`,e.jsx(t,{of:m}),`
`,e.jsx(n.h3,{id:"horizontal-alignment",children:"Horizontal alignment"}),`
`,e.jsx(n.p,{children:"Items in the column can be aligned horizontally in several ways:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Start"}),": align items to the start of the column. This is the left side in left-to-right languages."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Center"}),": center items within the column."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"End"}),": align items to the end of the column. This is the right side in left-to-right languages."]}),`
`]}),`
`,e.jsx(n.p,{children:"This example centers three items horizontally."}),`
`,e.jsx(t,{of:d}),`
`,e.jsx(n.h3,{id:"improve-semantics",children:"Improve semantics"}),`
`,e.jsxs(n.p,{children:["By default, a Column renders a ",e.jsx(n.code,{children:"<div>"}),` element in HTML.
Use the `,e.jsx(n.code,{children:"as"}),` prop to make your markup more semantic.
In this example, the Column uses a `,e.jsx(n.code,{children:"<section>"})," element to group the heading and the cards."]}),`
`,e.jsx(t,{of:x}),`
`,e.jsx(n.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsx(p,{tokens:j})]})}function S(s={}){const{wrapper:n}={...l(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{S as default};
