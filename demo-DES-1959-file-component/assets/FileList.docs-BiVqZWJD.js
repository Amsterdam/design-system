import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,d as n,f as r,i,m as a,u as o}from"./blocks-D9V5C01B.js";import{t as s}from"./jsx-runtime-ATHzeHXA.js";import{i as c,r as l}from"./react-Dyi61YEg.js";import{n as u,t as d}from"./DesignTokensTable-CG1nU334.js";import{n as f,t as p}from"./StatusBadge-AQzxz3Ok.js";import{n as m,t as h}from"./FileList.stories-Cwzj--QC.js";import{n as g,r as _}from"./FileListItem.stories-BJfLGhDV.js";var v,y;function b(){return(b=e((()=>{v={"file-list":{gap:{$deprecated:`File List has been deprecated. Use File Card and Unordered List instead. Will be removed on or after 2027-04-01.`,$value:`{ams.space.m}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-block":{$deprecated:`File List has been deprecated. Use File Card and Unordered List instead. Will be removed on or after 2027-04-01.`,$value:`{ams.space.m}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},file:{"font-family":{$deprecated:`File List has been deprecated. Use File Card and Unordered List instead. Will be removed on or after 2027-04-01.`,$value:`{ams.typography.font-family}`,$extensions:{"nl.amsterdam.type":`fontFamily`}},"font-size":{$deprecated:`File List has been deprecated. Use File Card and Unordered List instead. Will be removed on or after 2027-04-01.`,$value:`{ams.typography.body-text.small.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"font-weight":{$deprecated:`File List has been deprecated. Use File Card and Unordered List instead. Will be removed on or after 2027-04-01.`,$value:`{ams.typography.body-text.font-weight}`,$extensions:{"nl.amsterdam.type":`fontWeight`}},gap:{$deprecated:`File List has been deprecated. Use File Card and Unordered List instead. Will be removed on or after 2027-04-01.`,$value:`{ams.space.s}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"line-height":{$deprecated:`File List has been deprecated. Use File Card and Unordered List instead. Will be removed on or after 2027-04-01.`,$value:`{ams.typography.body-text.small.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}},details:{color:{$deprecated:`File List has been deprecated. Use File Card and Unordered List instead. Will be removed on or after 2027-04-01.`,$value:`{ams.color.text.secondary}`,$extensions:{"nl.amsterdam.type":`color`}}},preview:{width:{$deprecated:`File List has been deprecated. Use File Card and Unordered List instead. Will be removed on or after 2027-04-01.`,$value:`clamp(2.5rem, 10vw, 5rem)`,$extensions:{"nl.amsterdam.type":`dimension`}}}}}},y={ams:v}})))()}function x(e){let a={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...c(),...e.components};return(0,C.jsxs)(C.Fragment,{children:[`
`,`
`,`
`,`
`,(0,C.jsx)(p,{description:`Use File Cards inside an Unordered List without markers instead. This component will be removed on or after 2027-04-01.`,status:`deprecated`}),`
`,(0,C.jsx)(o,{of:h}),`
`,(0,C.jsx)(r,{}),`
`,(0,C.jsx)(t,{of:h}),`
`,(0,C.jsx)(n,{}),`
`,(0,C.jsx)(a.p,{children:`This component has no props to configure.`}),`
`,(0,C.jsxs)(a.p,{children:[`Wrap File Cards in an `,(0,C.jsx)(a.a,{href:`/docs/components-text-unordered-list--docs`,children:`Unordered List`}),` without markers instead, and pass `,(0,C.jsx)(a.code,{children:`previewUrl`}),` to the File Card for a thumbnail, as the `,(0,C.jsx)(a.a,{href:`/docs/components-forms-file-card--docs#with-a-file-input`,children:`With a File Input example on the File Card page`}),` shows.`]}),`
`,(0,C.jsx)(a.pre,{children:(0,C.jsx)(a.code,{className:`language-diff`,children:`- <FileList>
-   <FileList.Item file={file} onDelete={remove} />
- </FileList>
+ <UnorderedList markers={false}>
+   <UnorderedList.Item>
+     <FileCard name={file.name} onDelete={remove} size={file.size} type={file.type} />
+   </UnorderedList.Item>
+ </UnorderedList>
`})}),`
`,(0,C.jsx)(a.h2,{id:`subcomponents`,children:`Subcomponents`}),`
`,(0,C.jsx)(a.h3,{id:`item`,children:`Item`}),`
`,(0,C.jsx)(a.p,{children:`Renders one file within the list.`}),`
`,(0,C.jsx)(i,{of:g}),`
`,(0,C.jsx)(a.h2,{id:`see-also`,children:`See also`}),`
`,(0,C.jsxs)(a.ul,{children:[`
`,(0,C.jsxs)(a.li,{children:[(0,C.jsx)(a.a,{href:`/docs/components-forms-file-card--docs`,children:`File Card`}),` – displays one file, on its own or within a list.`]}),`
`,(0,C.jsxs)(a.li,{children:[(0,C.jsx)(a.a,{href:`/docs/components-text-unordered-list--docs`,children:`Unordered List`}),` – groups several File Cards while keeping list semantics and hiding markers.`]}),`
`]}),`
`,(0,C.jsx)(a.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,C.jsx)(d,{tokens:y})]})}function S(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,C.jsx)(t,{...e,children:(0,C.jsx)(x,{...e})}):x(e)}var C;function w(){return(w=e((()=>{C=s(),l(),a(),u(),f(),b(),m(),_()})))()}w();export{S as default};