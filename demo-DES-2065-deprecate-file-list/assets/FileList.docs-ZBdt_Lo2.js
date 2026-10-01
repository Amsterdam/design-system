import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,d as n,f as r,i,m as a,u as o}from"./blocks-D9V5C01B.js";import{t as s}from"./jsx-runtime-ATHzeHXA.js";import{i as c,r as l}from"./react-Dyi61YEg.js";import{n as u,t as d}from"./DesignTokensTable-CuUAJOdl.js";import{n as f,t as p}from"./StatusBadge-B8-Q8_wO.js";import{n as m,t as h}from"./FileList.stories-D9Bz3Y3S.js";import{n as g,r as _}from"./FileListItem.stories-CjwON6zC.js";var v,y;function b(){return(b=e((()=>{v={"file-list":{gap:{$deprecated:`File List has been deprecated. Use File Card and Unordered List instead. Will be removed on or after 2027-04-01.`,$value:`{ams.space.m}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-block":{$deprecated:`File List has been deprecated. Use File Card and Unordered List instead. Will be removed on or after 2027-04-01.`,$value:`{ams.space.m}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},file:{"font-family":{$deprecated:`File List has been deprecated. Use File Card and Unordered List instead. Will be removed on or after 2027-04-01.`,$value:`{ams.typography.font-family}`,$extensions:{"nl.amsterdam.type":`fontFamily`}},"font-size":{$deprecated:`File List has been deprecated. Use File Card and Unordered List instead. Will be removed on or after 2027-04-01.`,$value:`{ams.typography.body-text.small.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"font-weight":{$deprecated:`File List has been deprecated. Use File Card and Unordered List instead. Will be removed on or after 2027-04-01.`,$value:`{ams.typography.body-text.font-weight}`,$extensions:{"nl.amsterdam.type":`fontWeight`}},gap:{$deprecated:`File List has been deprecated. Use File Card and Unordered List instead. Will be removed on or after 2027-04-01.`,$value:`{ams.space.s}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"line-height":{$deprecated:`File List has been deprecated. Use File Card and Unordered List instead. Will be removed on or after 2027-04-01.`,$value:`{ams.typography.body-text.small.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}},details:{color:{$deprecated:`File List has been deprecated. Use File Card and Unordered List instead. Will be removed on or after 2027-04-01.`,$value:`{ams.color.text.secondary}`,$extensions:{"nl.amsterdam.type":`color`}}},preview:{width:{$deprecated:`File List has been deprecated. Use File Card and Unordered List instead. Will be removed on or after 2027-04-01.`,$value:`clamp(2.5rem, 10vw, 5rem)`,$extensions:{"nl.amsterdam.type":`dimension`}}}}}},y={ams:v}})))()}function x(e){let a={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...c(),...e.components};return(0,C.jsxs)(C.Fragment,{children:[`
`,`
`,`
`,`
`,(0,C.jsx)(p,{description:`Use File Cards inside an Unordered List without markers instead. This component will be removed on or after 2027-04-01.`,status:`deprecated`}),`
`,(0,C.jsx)(o,{of:h}),`
`,(0,C.jsx)(r,{}),`
`,(0,C.jsx)(t,{of:h}),`
`,(0,C.jsx)(n,{}),`
`,(0,C.jsx)(a.p,{children:`This component has no props to configure.`}),`
`,(0,C.jsxs)(a.p,{children:[`Wrap File Cards in an `,(0,C.jsx)(a.a,{href:`/docs/components-text-unordered-list--docs`,children:`Unordered List`}),` without markers instead, as the `,(0,C.jsx)(a.a,{href:`/docs/components-forms-file-card--docs#in-an-unordered-list`,children:`example on the File Card page`}),` shows.
Pass `,(0,C.jsx)(a.code,{children:`previewUrl`}),` to a File Card to show a thumbnail.`]}),`
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
`,(0,C.jsx)(a.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,C.jsx)(a.h3,{id:`when-to-use`,children:`When to use`}),`
`,(0,C.jsx)(a.p,{children:`Use a File List to display the files a user has selected or uploaded, showing each file’s name, type, size, and a preview.`}),`
`,(0,C.jsx)(a.h2,{id:`design`,children:`Design`}),`
`,(0,C.jsx)(a.p,{children:`Every item is one row: a preview of fixed width, then the name and details, then the delete button.
The preview column is the same width whether it holds a thumbnail or the generic document icon, so the names line up down the list.`}),`
`,(0,C.jsx)(a.p,{children:`A name too long for its row wraps onto the next line rather than being cut off, also when it has no spaces.
The name is what someone recognises the file by, so all of it stays visible.
Automatic hyphenation is switched off for the name, because a hyphen added at a line break looks like part of the file name.`}),`
`,(0,C.jsx)(a.p,{children:`The file type and size sit below the name in their own colour, so the name stays the thing you read first.`}),`
`,(0,C.jsx)(a.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,C.jsxs)(a.p,{children:[`A File List renders `,(0,C.jsx)(a.code,{children:`ul`}),` and `,(0,C.jsx)(a.code,{children:`li`}),` elements, so screen readers announce it as a list and report how many files it holds.`]}),`
`,(0,C.jsxs)(a.p,{children:[`The preview of an image file is decorative and carries an empty `,(0,C.jsx)(a.code,{children:`alt`}),`, because the name of the file is already beside it.`]}),`
`,(0,C.jsx)(a.p,{children:`Every delete button reads ‘Verwijder’ on screen and ‘Verwijder’ followed by the name of the file to a screen reader, so each button has a name of its own.
The label is in Dutch and cannot be configured.`}),`
`,(0,C.jsx)(a.p,{children:`When the focused delete button leaves the page, focus moves to the delete button of the next file, or of the previous one for the last file.`}),`
`,(0,C.jsx)(a.h2,{id:`see-also`,children:`See also`}),`
`,(0,C.jsxs)(a.ul,{children:[`
`,(0,C.jsxs)(a.li,{children:[(0,C.jsx)(a.a,{href:`/docs/components-forms-file-card--docs`,children:`File Card`}),` – displays one file, on its own or within a list.`]}),`
`,(0,C.jsxs)(a.li,{children:[(0,C.jsx)(a.a,{href:`/docs/components-text-unordered-list--docs`,children:`Unordered List`}),` – groups several File Cards while keeping list semantics and hiding markers.`]}),`
`]}),`
`,(0,C.jsx)(a.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,C.jsx)(d,{tokens:y})]})}function S(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,C.jsx)(t,{...e,children:(0,C.jsx)(x,{...e})}):x(e)}var C;function w(){return(w=e((()=>{C=s(),l(),a(),u(),f(),b(),m(),_()})))()}w();export{S as default};