import{j as e}from"./iframe-DFqQjuLX.js";import{useMDXComponents as i}from"./index-D-7GnzWA.js";import{M as a,f as r,P as l,h as d,i as o}from"./blocks-CRh74lGD.js";import{a as m,M as c,R as p,D as u,I as h}from"./FileInput.stories-C25LBxVa.js";import{D as y}from"./DesignTokensTable-iW4P1nrg.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BRV8YvAF.js";import"./BorderSample-BvfPIj73.js";import"./formatTokenValue-BYjgZrXg.js";import"./ColorSample-CWM-SwxL.js";import"./SpaceSample-BIoq58P5.js";const b=`<!-- @license CC0-1.0 -->

# File Input

Allows the user to upload one or more files from their device.

## Visual considerations

The filename label and button are displayed in the language of the browser and can vary between browsers and operating systems.
`,f={"file-input":{"background-color":{$value:"{ams.inputs.background-color}",$type:"color"},"border-color":{$value:"{ams.inputs.border-color}",$type:"color"},"border-style":{$value:"dashed",$extensions:{"amsterdam.designsystem.type":"borderStyle"}},"border-width":{$value:"{ams.inputs.border-width}",$extensions:{"amsterdam.designsystem.type":"borderWidth"}},color:{$value:"{ams.inputs.color}",$type:"color"},cursor:{$value:"{ams.cursor.interactive}"},"font-family":{$value:"{ams.inputs.font-family}",$type:"fontFamily"},"font-size":{$value:"{ams.inputs.font-size}",$extensions:{"amsterdam.designsystem.type":"fontSize"}},"font-weight":{$value:"{ams.inputs.font-weight}",$type:"fontWeight"},"line-height":{$value:"{ams.inputs.line-height}",$extensions:{"amsterdam.designsystem.type":"lineHeight"}},"outline-offset":{$value:"{ams.inputs.outline-offset}",$type:"dimension",$extensions:{"amsterdam.designsystem.subtype":"space"}},"padding-block":{$value:"{ams.space.m}",$type:"dimension",$extensions:{"amsterdam.designsystem.subtype":"space"}},"padding-inline":{$value:"{ams.space.m}",$type:"dimension",$extensions:{"amsterdam.designsystem.subtype":"space"}},disabled:{color:{$value:"{ams.inputs.disabled.color}",$type:"color"},cursor:{$value:"{ams.cursor.disabled}"}},"file-selector-button":{"background-color":{$value:"{ams.button.secondary.background-color}",$type:"color"},"border-color":{$value:"{ams.button.secondary.border-color}",$type:"color"},"border-style":{$value:"{ams.button.border-style}",$extensions:{"amsterdam.designsystem.type":"borderStyle"}},"border-width":{$value:"{ams.button.border-width}",$extensions:{"amsterdam.designsystem.type":"borderWidth"}},color:{$value:"{ams.button.secondary.color}",$type:"color"},cursor:{$value:"{ams.button.cursor}"},"line-height":{$value:"{ams.button.line-height}",$extensions:{"amsterdam.designsystem.type":"lineHeight"}},"margin-inline-end":{$value:"{ams.space.m}",$type:"dimension",$extensions:{"amsterdam.designsystem.subtype":"space"}},"padding-block":{$value:"{ams.button.padding-block}",$type:"dimension",$extensions:{"amsterdam.designsystem.subtype":"space"}},"padding-inline":{$value:"{ams.button.padding-inline}",$type:"dimension",$extensions:{"amsterdam.designsystem.subtype":"space"}},disabled:{color:{$value:"{ams.button.secondary.disabled.color}",$type:"color"},cursor:{$value:"{ams.button.disabled.cursor}"}},hover:{"box-shadow":{$value:"{ams.button.secondary.hover.box-shadow}"},color:{$value:"{ams.button.secondary.hover.color}",$type:"color"}}}}},$={ams:f};function t(n){const s={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,`
`,`
`,e.jsx(a,{of:m}),`
`,e.jsx(r,{children:b}),`
`,e.jsx(l,{}),`
`,e.jsx(d,{}),`
`,e.jsx(s.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(s.h3,{id:"multiple-files",children:"Multiple files"}),`
`,e.jsx(s.p,{children:"Allow multiple files to be selected. The label will update to show the number of files selected."}),`
`,e.jsx(o,{of:c}),`
`,e.jsx(s.h3,{id:"restrict-file-types",children:"Restrict file types"}),`
`,e.jsxs(s.p,{children:["Limit the types of files that can be selected. Some examples are ",e.jsx(s.code,{children:"image/*"}),", ",e.jsx(s.code,{children:"video/*"}),", or ",e.jsx(s.code,{children:"audio/*"}),". To limit to a specific file type, use the MIME type, such as ",e.jsx(s.code,{children:"application/pdf"}),"."]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#limiting_accepted_file_types",rel:"nofollow",children:"MDN File Input"}),": More examples"]}),`
`]}),`
`,e.jsx(o,{of:p}),`
`,e.jsx(s.h3,{id:"disabled",children:"Disabled"}),`
`,e.jsx(o,{of:u}),`
`,e.jsx(s.h3,{id:"in-a-field",children:"In a Field"}),`
`,e.jsx(s.p,{children:"Use a Field component to group a File Input with a Label and possibly a description."}),`
`,e.jsxs(s.p,{children:["If you don’t need the description, remove its Paragraph and the ",e.jsx(s.code,{children:"aria-describedby"})," from the Text Input."]}),`
`,e.jsxs(s.p,{children:["Check ",e.jsx(s.a,{href:"/docs/components-forms-field--docs",children:"the Field docs"})," for more information on configuring it."]}),`
`,e.jsx(o,{of:h}),`
`,e.jsx(s.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsx(y,{tokens:$})]})}function C(n={}){const{wrapper:s}={...i(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(t,{...n})}):t(n)}export{C as default};
