import{n as e}from"./chunk-DnJy8xQt.js";import{Wt as t}from"./iframe-ScQI8ULk.js";import{r as n}from"./react-i6RQ1Igb.js";import{c as r,f as i,i as a,l as o,n as s,s as c}from"./blocks-CG4nYDyr.js";import{n as l,t as u}from"./DesignTokensTable-CLWtRo4m.js";import{t as d}from"./mdx-react-shim-BhI-q2SU.js";import{Alignment as f,HorizontalAlignment as p,ImproveSemantics as m,n as h,t as g}from"./Column.stories-CK_NivU7.js";var _,v=e((()=>{_=`<!-- @license CC0-1.0 -->

# Column

Stacks its children vertically with gaps between them and offers alignment options.
`})),y,b,x=e((()=>{y={column:{gap:{"x-small":{$value:`{ams.space.xs}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},small:{$value:`{ams.space.s}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},medium:{$value:`{ams.space.m}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},large:{$value:`{ams.space.l}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"x-large":{$value:`{ams.space.xl}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}}}},b={ams:y}}));function S(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,w.jsxs)(w.Fragment,{children:[`
`,`
`,`
`,`
`,(0,w.jsx)(r,{of:g}),`
`,(0,w.jsx)(c,{children:_}),`
`,(0,w.jsx)(t.h2,{id:`guidelines`,children:`Guidelines`}),`
`,(0,w.jsxs)(t.ul,{children:[`
`,(0,w.jsx)(t.li,{children:`Wrap a Column around a set of elements that need the same amount of white space between them.`}),`
`,(0,w.jsxs)(t.li,{children:[`Five sizes of `,(0,w.jsx)(t.a,{href:`/docs/brand-design-tokens-space--docs`,children:`Space`}),` are available for the width or height of the gap.
The medium gap is the default.`]}),`
`,(0,w.jsxs)(t.li,{children:[`To add white space below a single element, you can add a `,(0,w.jsx)(t.a,{href:`/docs/utilities-css-margin--docs`,children:`Margin Bottom`}),` instead.`]}),`
`,(0,w.jsx)(t.li,{children:`Align the elements horizontally or vertically through the alignment props.`}),`
`,(0,w.jsxs)(t.li,{children:[`Do not use it for text – various types of elements require different amounts of space between them.
Wrap editorial content in the `,(0,w.jsx)(t.a,{href:`/docs/utilities-css-prose--docs`,children:`Prose`}),` utility class to have all spacing set automatically.`]}),`
`]}),`
`,(0,w.jsx)(o,{}),`
`,(0,w.jsx)(a,{}),`
`,(0,w.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,w.jsx)(t.h3,{id:`alignment`,children:`Alignment`}),`
`,(0,w.jsx)(t.p,{children:`Items in the column can be aligned vertically in several ways:`}),`
`,(0,w.jsxs)(t.ul,{children:[`
`,(0,w.jsxs)(t.li,{children:[(0,w.jsx)(t.strong,{children:`Center`}),`: center items within the column.`]}),`
`,(0,w.jsxs)(t.li,{children:[(0,w.jsx)(t.strong,{children:`End`}),`: align items to the bottom of the column – to the bottom.`]}),`
`,(0,w.jsxs)(t.li,{children:[(0,w.jsx)(t.strong,{children:`Space Between`}),`: distribute whitespace between items.`]}),`
`,(0,w.jsxs)(t.li,{children:[(0,w.jsx)(t.strong,{children:`Space Around`}),`: distribute whitespace around items.`]}),`
`,(0,w.jsxs)(t.li,{children:[(0,w.jsx)(t.strong,{children:`Space Evenly`}),`: distribute whitespace evenly around items.`]}),`
`]}),`
`,(0,w.jsxs)(t.p,{children:[`By default, items align to the `,(0,w.jsx)(t.strong,{children:`start`}),` of the column – at the top.
This option has no class name or prop value.`]}),`
`,(0,w.jsx)(t.p,{children:`This example centers three items vertically.`}),`
`,(0,w.jsx)(s,{of:f}),`
`,(0,w.jsx)(t.h3,{id:`horizontal-alignment`,children:`Horizontal alignment`}),`
`,(0,w.jsx)(t.p,{children:`Items in the column can be aligned horizontally in several ways:`}),`
`,(0,w.jsxs)(t.ul,{children:[`
`,(0,w.jsxs)(t.li,{children:[(0,w.jsx)(t.strong,{children:`Start`}),`: align items to the start of the column. This is the left side in left-to-right languages.`]}),`
`,(0,w.jsxs)(t.li,{children:[(0,w.jsx)(t.strong,{children:`Center`}),`: center items within the column.`]}),`
`,(0,w.jsxs)(t.li,{children:[(0,w.jsx)(t.strong,{children:`End`}),`: align items to the end of the column. This is the right side in left-to-right languages.`]}),`
`]}),`
`,(0,w.jsx)(t.p,{children:`This example centers three items horizontally.`}),`
`,(0,w.jsx)(s,{of:p}),`
`,(0,w.jsx)(t.h3,{id:`improve-semantics`,children:`Improve semantics`}),`
`,(0,w.jsxs)(t.p,{children:[`By default, a Column renders a `,(0,w.jsx)(t.code,{children:`<div>`}),` element in HTML.
Use the `,(0,w.jsx)(t.code,{children:`as`}),` prop to make your markup more semantic.
In this example, the Column uses a `,(0,w.jsx)(t.code,{children:`<section>`}),` element to group the heading and the cards.`]}),`
`,(0,w.jsx)(s,{of:m}),`
`,(0,w.jsx)(t.h2,{id:`see-also`,children:`See also`}),`
`,(0,w.jsxs)(t.ul,{children:[`
`,(0,w.jsxs)(t.li,{children:[(0,w.jsx)(t.a,{href:`/docs/docs-developer-guide-spacing--docs`,children:`Spacing`}),` – which tools to use for white space and when.`]}),`
`]}),`
`,(0,w.jsx)(t.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,w.jsx)(u,{tokens:b})]})}function C(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,w.jsx)(t,{...e,children:(0,w.jsx)(S,{...e})}):S(e)}var w;e((()=>{w=t(),d(),i(),h(),v(),x(),l()}))();export{C as default};