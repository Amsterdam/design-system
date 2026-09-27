import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,d as n,h as r,i,p as a,u as o}from"./blocks-DXSisYNI.js";import{t as s}from"./jsx-runtime-ATHzeHXA.js";import{i as c,r as l}from"./react-Dyi61YEg.js";import{n as u,t as d}from"./DesignTokensTable-DYP84VM5.js";import{n as f,t as p}from"./StatusBadge-CPQ5e2dX.js";import{n as m,t as h}from"./FileList.stories-DZYL39DU.js";import{n as g,r as _}from"./FileListItem.stories-CqNxJ4TQ.js";var v,y;function b(){return(b=e((()=>{v={"file-list":{gap:{$deprecated:`Use an Unordered List without markers instead. Will be removed on or after 2027-04-01.`,$value:`{ams.space.m}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-block":{$deprecated:`Use an Unordered List without markers instead. Will be removed on or after 2027-04-01.`,$value:`{ams.space.m}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},file:{"font-family":{$deprecated:"Use `ams.file-card.font-family` instead. Will be removed on or after 2027-04-01.",$value:`{ams.file-card.font-family}`,$extensions:{"nl.amsterdam.type":`fontFamily`}},"font-size":{$deprecated:"Use `ams.file-card.font-size` instead. Will be removed on or after 2027-04-01.",$value:`{ams.file-card.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"font-weight":{$deprecated:"Use `ams.file-card.font-weight` instead. Will be removed on or after 2027-04-01.",$value:`{ams.file-card.font-weight}`,$extensions:{"nl.amsterdam.type":`fontWeight`}},gap:{$deprecated:"Use `ams.file-card.gap` instead. Will be removed on or after 2027-04-01.",$value:`{ams.file-card.gap}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"line-height":{$deprecated:"Use `ams.file-card.line-height` instead. Will be removed on or after 2027-04-01.",$value:`{ams.file-card.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}},details:{color:{$deprecated:"Use `ams.file-card.details.color` instead. Will be removed on or after 2027-04-01.",$value:`{ams.file-card.details.color}`,$extensions:{"nl.amsterdam.type":`color`}}},preview:{width:{$deprecated:"Use `ams.file-card.preview.width` instead. Will be removed on or after 2027-04-01.",$value:`{ams.file-card.preview.width}`,$extensions:{"nl.amsterdam.type":`dimension`}}}}}},y={ams:v}})))()}function x(e){let r={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...c(),...e.components};return(0,C.jsxs)(C.Fragment,{children:[`
`,`
`,`
`,`
`,(0,C.jsx)(p,{description:`Use File Cards inside an Unordered List without markers instead. This component will be removed on or after 2027-04-01.`,status:`deprecated`}),`
`,(0,C.jsx)(o,{of:h}),`
`,(0,C.jsx)(a,{}),`
`,(0,C.jsx)(t,{of:h}),`
`,(0,C.jsx)(n,{}),`
`,(0,C.jsx)(r.p,{children:`This component has no props to configure.`}),`
`,(0,C.jsxs)(r.p,{children:[`Wrap File Cards in an `,(0,C.jsx)(r.a,{href:`/docs/components-text-unordered-list--docs`,children:`Unordered List`}),` without markers instead, and pass `,(0,C.jsx)(r.code,{children:`previewUrl`}),` to the File Card for a thumbnail, as the `,(0,C.jsx)(r.a,{href:`/docs/components-forms-file-card--docs#with-a-file-input`,children:`With a File Input example on the File Card page`}),` shows.`]}),`
`,(0,C.jsx)(r.pre,{children:(0,C.jsx)(r.code,{className:`language-diff`,children:`- <FileList>
-   <FileList.Item file={file} onDelete={remove} />
- </FileList>
+ <UnorderedList markers={false}>
+   <UnorderedList.Item>
+     <FileCard name={file.name} onDelete={remove} size={file.size} type={file.type} />
+   </UnorderedList.Item>
+ </UnorderedList>
`})}),`
`,(0,C.jsx)(r.h2,{id:`subcomponents`,children:`Subcomponents`}),`
`,(0,C.jsx)(r.h3,{id:`item`,children:`Item`}),`
`,(0,C.jsx)(r.p,{children:`Renders one file within the list.`}),`
`,(0,C.jsx)(i,{of:g}),`
`,(0,C.jsx)(r.h2,{id:`see-also`,children:`See also`}),`
`,(0,C.jsxs)(r.ul,{children:[`
`,(0,C.jsxs)(r.li,{children:[(0,C.jsx)(r.a,{href:`/docs/components-forms-file-card--docs`,children:`File Card`}),` – displays one file, on its own or within a list.`]}),`
`,(0,C.jsxs)(r.li,{children:[(0,C.jsx)(r.a,{href:`/docs/components-text-unordered-list--docs`,children:`Unordered List`}),` – groups several File Cards while keeping list semantics and hiding markers.`]}),`
`]}),`
`,(0,C.jsx)(r.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,C.jsx)(d,{tokens:y})]})}function S(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,C.jsx)(t,{...e,children:(0,C.jsx)(x,{...e})}):x(e)}var C;function w(){return(w=e((()=>{C=s(),l(),r(),u(),f(),b(),m(),_()})))()}w();export{S as default};