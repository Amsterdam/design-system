import{n as e}from"./chunk-DnJy8xQt.js";import{Ht as t}from"./iframe-5rfxHe9l.js";import{r as n}from"./react-wAvUL_NZ.js";import{c as r,f as i,i as a,l as o,n as s,s as c}from"./blocks-DHQJGxs8.js";import{n as l,t as u}from"./DesignTokensTable-VTbdhB8k.js";import{t as d}from"./mdx-react-shim-Bn8UDcFM.js";import{AlignOpposingTexts as f,Alignment as p,EndAlignASingleChild as m,EndAlignASingleChildRtl as h,VerticalAlignment as g,Wrapping as _,n as v,t as y}from"./Row.stories-y5jeDGZz.js";var b,x=e((()=>{b=`<!-- @license CC0-1.0 -->

# Row

Stacks its children horizontally with gaps between them and offers alignment options.
`})),S,C,w=e((()=>{S={row:{gap:{"x-small":{$value:`{ams.space.xs}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},small:{$value:`{ams.space.s}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},medium:{$value:`{ams.space.m}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},large:{$value:`{ams.space.l}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"x-large":{$value:`{ams.space.xl}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}}}},C={ams:S}}));function T(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,D.jsxs)(D.Fragment,{children:[`
`,`
`,`
`,`
`,(0,D.jsx)(r,{of:y}),`
`,(0,D.jsx)(c,{children:b}),`
`,(0,D.jsx)(t.h2,{id:`guidelines`,children:`Guidelines`}),`
`,(0,D.jsxs)(t.ul,{children:[`
`,(0,D.jsx)(t.li,{children:`Wrap a Row around a set of elements that need the same amount of white space between them.`}),`
`,(0,D.jsxs)(t.li,{children:[`Five sizes of `,(0,D.jsx)(t.a,{href:`/docs/brand-design-tokens-space--docs`,children:`Space`}),` are available for the width or height of the gap.
The medium gap is the default.`]}),`
`,(0,D.jsx)(t.li,{children:`Align the elements horizontally or vertically through the alignment props.`}),`
`]}),`
`,(0,D.jsx)(o,{}),`
`,(0,D.jsx)(a,{}),`
`,(0,D.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,D.jsx)(t.h3,{id:`alignment`,children:`Alignment`}),`
`,(0,D.jsx)(t.p,{children:`Items in the row can be aligned horizontally in several ways:`}),`
`,(0,D.jsxs)(t.ul,{children:[`
`,(0,D.jsxs)(t.li,{children:[(0,D.jsx)(t.strong,{children:`Center`}),`: center items within the row.`]}),`
`,(0,D.jsxs)(t.li,{children:[(0,D.jsx)(t.strong,{children:`End`}),`: align items to the end of the row. This is the right side in left-to-right languages.`]}),`
`,(0,D.jsxs)(t.li,{children:[(0,D.jsx)(t.strong,{children:`Space Between`}),`: distribute whitespace between items.`]}),`
`,(0,D.jsxs)(t.li,{children:[(0,D.jsx)(t.strong,{children:`Space Around`}),`: distribute whitespace around items.`]}),`
`,(0,D.jsxs)(t.li,{children:[(0,D.jsx)(t.strong,{children:`Space Evenly`}),`: distribute whitespace evenly around items.`]}),`
`]}),`
`,(0,D.jsxs)(t.p,{children:[`By default, items align to the `,(0,D.jsx)(t.strong,{children:`start`}),` of the row – the left side in right-to-left languages.
This option has no class name or prop value.`]}),`
`,(0,D.jsxs)(t.p,{children:[`We left out the word ‘space’ from the values for the alignment prop, e.g. `,(0,D.jsx)(t.code,{children:`align="around"`}),`.`]}),`
`,(0,D.jsx)(t.p,{children:`This example ensures that the spaces between and around all items are equally wide.`}),`
`,(0,D.jsx)(s,{of:p}),`
`,(0,D.jsx)(t.h4,{id:`end-align-a-single-child`,children:`End-align a single child`}),`
`,(0,D.jsxs)(t.p,{children:[`To align a single component to the right (in left-to-right languages), wrap it in a `,(0,D.jsx)(t.code,{children:`<Row>`}),` and set the `,(0,D.jsx)(t.code,{children:`align`}),` prop to `,(0,D.jsx)(t.code,{children:`end`}),`.`]}),`
`,(0,D.jsx)(s,{of:m}),`
`,(0,D.jsx)(t.p,{children:`For right-to-left languages, the end of the row is on the left side.`}),`
`,(0,D.jsx)(s,{of:h}),`
`,(0,D.jsx)(t.h4,{id:`align-opposing-texts`,children:`Align opposing texts`}),`
`,(0,D.jsx)(t.p,{children:`This example shows a right-aligned link next to a heading.`}),`
`,(0,D.jsxs)(t.ul,{children:[`
`,(0,D.jsxs)(t.li,{children:[`Use `,(0,D.jsx)(t.code,{children:`align="between"`}),` to have all remaining space between them, which pushes the items to the opposing ends of the row.`]}),`
`,(0,D.jsxs)(t.li,{children:[`Add `,(0,D.jsx)(t.code,{children:`alignVertical="baseline"`}),` to align them vertically to their common baseline.`]}),`
`,(0,D.jsxs)(t.li,{children:[`Include `,(0,D.jsx)(t.code,{children:`wrap`}),` to allow the link to wrap to a new line if both components don’t fit on the same line.`]}),`
`]}),`
`,(0,D.jsx)(s,{of:f}),`
`,(0,D.jsx)(t.h3,{id:`vertical-alignment`,children:`Vertical alignment`}),`
`,(0,D.jsx)(t.p,{children:`Items in the row can be aligned vertically in several ways:`}),`
`,(0,D.jsxs)(t.ul,{children:[`
`,(0,D.jsxs)(t.li,{children:[(0,D.jsx)(t.strong,{children:`Start`}),`: align items to the top of the row.`]}),`
`,(0,D.jsxs)(t.li,{children:[(0,D.jsx)(t.strong,{children:`Center`}),`: align items to the middle of the row.`]}),`
`,(0,D.jsxs)(t.li,{children:[(0,D.jsx)(t.strong,{children:`End`}),`: align items to the bottom of the row.`]}),`
`,(0,D.jsxs)(t.li,{children:[(0,D.jsx)(t.strong,{children:`Baseline`}),`: align items to their common text baseline.`]}),`
`]}),`
`,(0,D.jsxs)(t.p,{children:[`By default, items `,(0,D.jsx)(t.strong,{children:`stretch`}),` to the height of the row.
This option has no class name or prop value.`]}),`
`,(0,D.jsx)(t.p,{children:`This example centers three items vertically.`}),`
`,(0,D.jsx)(s,{of:g}),`
`,(0,D.jsx)(t.h3,{id:`wrapping`,children:`Wrapping`}),`
`,(0,D.jsx)(t.p,{children:`Items that may not fit together on a single line should be allowed to wrap onto multiple lines.`}),`
`,(0,D.jsx)(s,{of:_}),`
`,(0,D.jsx)(t.h2,{id:`see-also`,children:`See also`}),`
`,(0,D.jsxs)(t.ul,{children:[`
`,(0,D.jsxs)(t.li,{children:[(0,D.jsx)(t.a,{href:`/docs/docs-developer-guide-spacing--docs`,children:`Spacing`}),` – which tools to use for white space and when.`]}),`
`]}),`
`,(0,D.jsx)(t.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,D.jsx)(u,{tokens:C})]})}function E(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,D.jsx)(t,{...e,children:(0,D.jsx)(T,{...e})}):T(e)}var D;e((()=>{D=t(),d(),i(),v(),x(),w(),l()}))();export{E as default};