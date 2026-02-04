import{j as e}from"./iframe-28p58-e7.js";import{useMDXComponents as i}from"./index-s6Iv4t59.js";import{M as a,f as r,P as l,h as d,i as n}from"./blocks-C9or3pe5.js";import{a as m,M as c,R as p,D as u,I as h}from"./FileInput.stories-C12DUQ4h.js";import{D as y}from"./DesignTokensTable-BmDH44vt.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D_VZO6qE.js";import"./BorderSample-keE_97z0.js";import"./formatTokenValue-BYjgZrXg.js";import"./Code-5wRz0Tat.js";import"./ColorSample-O-QOHId9.js";import"./SpaceSample-BLPWg7xk.js";import"./TypographySample-CMZtIoB3.js";const b=`<!-- @license CC0-1.0 -->

# File Input

Allows the user to upload one or more files from their device.

## Visual considerations

The filename label and button are displayed in the language of the browser and can vary between browsers and operating systems.
`,f={"file-input":{"background-color":{$value:"{ams.inputs.background-color}",$type:"color"},"border-color":{$value:"{ams.inputs.border-color}",$type:"color"},"border-style":{$value:"dashed",$extensions:{"amsterdam.designsystem.type":"borderStyle"}},"border-width":{$value:"{ams.inputs.border-width}",$extensions:{"amsterdam.designsystem.type":"borderWidth"}},color:{$value:"{ams.inputs.color}",$type:"color"},cursor:{$value:"{ams.cursor.interactive}"},"font-family":{$value:"{ams.inputs.font-family}",$type:"fontFamily"},"font-size":{$value:"{ams.inputs.font-size}",$extensions:{"amsterdam.designsystem.type":"fontSize"}},"font-weight":{$value:"{ams.inputs.font-weight}",$type:"fontWeight"},"line-height":{$value:"{ams.inputs.line-height}",$extensions:{"amsterdam.designsystem.type":"lineHeight"}},"outline-offset":{$value:"{ams.inputs.outline-offset}",$type:"dimension",$extensions:{"amsterdam.designsystem.subtype":"space"}},"padding-block":{$value:"{ams.space.m}",$type:"dimension",$extensions:{"amsterdam.designsystem.subtype":"space"}},"padding-inline":{$value:"{ams.space.m}",$type:"dimension",$extensions:{"amsterdam.designsystem.subtype":"space"}},disabled:{color:{$value:"{ams.inputs.disabled.color}",$type:"color"},cursor:{$value:"{ams.cursor.disabled}"}},"file-selector-button":{"background-color":{$value:"{ams.button.secondary.background-color}",$type:"color"},"border-color":{$value:"{ams.button.secondary.border-color}",$type:"color"},"border-style":{$value:"{ams.button.border-style}",$extensions:{"amsterdam.designsystem.type":"borderStyle"}},"border-width":{$value:"{ams.button.border-width}",$extensions:{"amsterdam.designsystem.type":"borderWidth"}},color:{$value:"{ams.button.secondary.color}",$type:"color"},cursor:{$value:"{ams.button.cursor}"},"line-height":{$value:"{ams.button.line-height}",$extensions:{"amsterdam.designsystem.type":"lineHeight"}},"margin-inline-end":{$value:"{ams.space.m}",$type:"dimension",$extensions:{"amsterdam.designsystem.subtype":"space"}},"padding-block":{$value:"{ams.button.padding-block}",$type:"dimension",$extensions:{"amsterdam.designsystem.subtype":"space"}},"padding-inline":{$value:"{ams.button.padding-inline}",$type:"dimension",$extensions:{"amsterdam.designsystem.subtype":"space"}},disabled:{color:{$value:"{ams.button.secondary.disabled.color}",$type:"color"},cursor:{$value:"{ams.button.disabled.cursor}"}},hover:{"box-shadow":{$value:"{ams.button.secondary.hover.box-shadow}"},color:{$value:"{ams.button.secondary.hover.color}",$type:"color"}}}}},$={ams:f};function t(o){const s={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...i(),...o.components};return e.jsxs(e.Fragment,{children:[`
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
`,e.jsx(n,{of:c}),`
`,e.jsx(s.h3,{id:"restrict-file-types",children:"Restrict file types"}),`
`,e.jsxs(s.p,{children:["Limit the types of files that can be selected. Some examples are ",e.jsx(s.code,{children:"image/*"}),", ",e.jsx(s.code,{children:"video/*"}),", or ",e.jsx(s.code,{children:"audio/*"}),". To limit to a specific file type, use the MIME type, such as ",e.jsx(s.code,{children:"application/pdf"}),"."]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#limiting_accepted_file_types",rel:"nofollow",children:"MDN File Input"}),": More examples"]}),`
`]}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(s.h3,{id:"disabled",children:"Disabled"}),`
`,e.jsx(n,{of:u}),`
`,e.jsx(s.h3,{id:"in-a-field",children:"In a Field"}),`
`,e.jsx(s.p,{children:"Use a Field component to group a File Input with a Label and possibly a description."}),`
`,e.jsxs(s.p,{children:["If you don’t need the description, remove its Paragraph and the ",e.jsx(s.code,{children:"aria-describedby"})," from the Text Input."]}),`
`,e.jsxs(s.p,{children:["Check ",e.jsx(s.a,{href:"/docs/components-forms-field--docs",children:"the Field docs"})," for more information on configuring it."]}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(s.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsx(y,{tokens:$})]})}function S(o={}){const{wrapper:s}={...i(),...o.components};return s?e.jsx(s,{...o,children:e.jsx(t,{...o})}):t(o)}export{S as default};
