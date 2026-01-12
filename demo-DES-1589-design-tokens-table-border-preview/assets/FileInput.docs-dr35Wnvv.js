import{j as e}from"./iframe-sIOt2gmS.js";import{useMDXComponents as i}from"./index-DwankX0C.js";import{M as l,f as a,P as r,h as d,i as n}from"./blocks-BZsiVlPJ.js";import{a as c,M as m,R as u,D as p,I as h}from"./FileInput.stories-CIzGlqe9.js";import{D as b}from"./DesignTokensTable-BhWCEXLR.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BLYaCY2A.js";import"./BorderSample-BA-xUhfJ.js";const f=`<!-- @license CC0-1.0 -->

# File Input

Allows the user to upload one or more files from their device.

## Visual considerations

The filename label and button are displayed in the language of the browser and can vary between browsers and operating systems.
`,y={"file-input":{"background-color":{$value:"{ams.inputs.background-color}",$type:"color"},"border-color":{$value:"{ams.inputs.border-color}",$type:"color"},"border-style":{$value:"dashed",$extensions:{"amsterdam.designsystem.type":"borderStyle"}},"border-width":{$value:"{ams.inputs.border-width}",$extensions:{"amsterdam.designsystem.type":"borderWidth"}},color:{$value:"{ams.inputs.color}",$type:"color"},cursor:{$value:"{ams.cursor.interactive}"},"font-family":{$value:"{ams.inputs.font-family}",$type:"fontFamily"},"font-size":{$value:"{ams.inputs.font-size}",$extensions:{"amsterdam.designsystem.type":"fontSize"}},"font-weight":{$value:"{ams.inputs.font-weight}",$type:"fontWeight"},"line-height":{$value:"{ams.inputs.line-height}",$extensions:{"amsterdam.designsystem.type":"lineHeight"}},"outline-offset":{$value:"{ams.inputs.outline-offset}",$type:"dimension"},"padding-block":{$value:"{ams.space.m}",$type:"dimension"},"padding-inline":{$value:"{ams.space.m}",$type:"dimension"},disabled:{color:{$value:"{ams.inputs.disabled.color}",$type:"color"},cursor:{$value:"{ams.cursor.disabled}"}},"file-selector-button":{"background-color":{$value:"{ams.button.secondary.background-color}",$type:"color"},"border-color":{$value:"{ams.button.secondary.border-color}",$type:"color"},"border-style":{$value:"{ams.button.border-style}",$extensions:{"amsterdam.designsystem.type":"borderStyle"}},"border-width":{$value:"{ams.button.border-width}",$extensions:{"amsterdam.designsystem.type":"borderWidth"}},color:{$value:"{ams.button.secondary.color}",$type:"color"},cursor:{$value:"{ams.button.cursor}"},"line-height":{$value:"{ams.button.line-height}",$extensions:{"amsterdam.designsystem.type":"lineHeight"}},"margin-inline-end":{$value:"{ams.space.m}",$type:"dimension"},"padding-block":{$value:"{ams.button.padding-block}",$type:"dimension"},"padding-inline":{$value:"{ams.button.padding-inline}",$type:"dimension"},disabled:{color:{$value:"{ams.button.secondary.disabled.color}",$type:"color"},cursor:{$value:"{ams.button.disabled.cursor}"}},hover:{"box-shadow":{$value:"{ams.button.secondary.hover.box-shadow}"},color:{$value:"{ams.button.secondary.hover.color}",$type:"color"}}}}},$={ams:y};function t(s){const o={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...i(),...s.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,`
`,`
`,e.jsx(l,{of:c}),`
`,e.jsx(a,{children:f}),`
`,e.jsx(r,{}),`
`,e.jsx(d,{}),`
`,e.jsx(o.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(o.h3,{id:"multiple-files",children:"Multiple files"}),`
`,e.jsx(o.p,{children:"Allow multiple files to be selected. The label will update to show the number of files selected."}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(o.h3,{id:"restrict-file-types",children:"Restrict file types"}),`
`,e.jsxs(o.p,{children:["Limit the types of files that can be selected. Some examples are ",e.jsx(o.code,{children:"image/*"}),", ",e.jsx(o.code,{children:"video/*"}),", or ",e.jsx(o.code,{children:"audio/*"}),". To limit to a specific file type, use the MIME type, such as ",e.jsx(o.code,{children:"application/pdf"}),"."]}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:[e.jsx(o.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#limiting_accepted_file_types",rel:"nofollow",children:"MDN File Input"}),": More examples"]}),`
`]}),`
`,e.jsx(n,{of:u}),`
`,e.jsx(o.h3,{id:"disabled",children:"Disabled"}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(o.h3,{id:"in-a-field",children:"In a Field"}),`
`,e.jsx(o.p,{children:"Use a Field component to group a File Input with a Label and possibly a description."}),`
`,e.jsxs(o.p,{children:["If you don’t need the description, remove its Paragraph and the ",e.jsx(o.code,{children:"aria-describedby"})," from the Text Input."]}),`
`,e.jsxs(o.p,{children:["Check ",e.jsx(o.a,{href:"/docs/components-forms-field--docs",children:"the Field docs"})," for more information on configuring it."]}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(o.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsx(b,{tokens:$})]})}function D(s={}){const{wrapper:o}={...i(),...s.components};return o?e.jsx(o,{...s,children:e.jsx(t,{...s})}):t(s)}export{D as default};
