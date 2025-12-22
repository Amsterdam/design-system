import{j as e}from"./iframe-BiErRGvs.js";import{useMDXComponents as l}from"./index-BVfInj7M.js";import{M as t,f as a,P as r,h as d,i as s}from"./blocks-BzC5Qy9m.js";import{a as c,M as u,R as m,D as h,I as p}from"./FileInput.stories-DnBIYpay.js";import{D as b}from"./DesignTokensTable-6Gsg3hI7.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bdsl2Juj.js";const f=`<!-- @license CC0-1.0 -->

# File Input

Allows the user to upload one or more files from their device.

## Visual considerations

The filename label and button are displayed in the language of the browser and can vary between browsers and operating systems.
`,x={"file-input":{"background-color":{value:"{ams.inputs.background-color}"},"border-color":{value:"{ams.inputs.border-color}"},"border-style":{value:"dashed"},"border-width":{value:"{ams.inputs.border-width}"},color:{value:"{ams.inputs.color}"},cursor:{value:"{ams.cursor.interactive}"},"font-family":{value:"{ams.inputs.font-family}"},"font-size":{value:"{ams.inputs.font-size}"},"font-weight":{value:"{ams.inputs.font-weight}"},"line-height":{value:"{ams.inputs.line-height}"},"outline-offset":{value:"{ams.inputs.outline-offset}"},"padding-block":{value:"{ams.space.m}"},"padding-inline":{value:"{ams.space.m}"},disabled:{color:{value:"{ams.inputs.disabled.color}"},cursor:{value:"{ams.cursor.disabled}"}},"file-selector-button":{"background-color":{value:"{ams.button.secondary.background-color}"},"border-color":{value:"{ams.button.secondary.border-color}"},"border-style":{value:"{ams.button.border-style}"},"border-width":{value:"{ams.button.border-width}"},color:{value:"{ams.button.secondary.color}"},cursor:{value:"{ams.button.cursor}"},"line-height":{value:"{ams.button.line-height}"},"margin-inline-end":{value:"{ams.space.m}"},"padding-block":{value:"{ams.button.padding-block}"},"padding-inline":{value:"{ams.button.padding-inline}"},disabled:{color:{value:"{ams.button.secondary.disabled.color}"},cursor:{value:"{ams.button.disabled.cursor}"}},hover:{"box-shadow":{value:"{ams.button.secondary.hover.box-shadow}"},color:{value:"{ams.button.secondary.hover.color}"}}}}},v={ams:x};function i(n){const o={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...l(),...n.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,`
`,`
`,e.jsx(t,{of:c}),`
`,e.jsx(a,{children:f}),`
`,e.jsx(r,{}),`
`,e.jsx(d,{}),`
`,e.jsx(o.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(o.h3,{id:"multiple-files",children:"Multiple files"}),`
`,e.jsx(o.p,{children:"Allow multiple files to be selected. The label will update to show the number of files selected."}),`
`,e.jsx(s,{of:u}),`
`,e.jsx(o.h3,{id:"restrict-file-types",children:"Restrict file types"}),`
`,e.jsxs(o.p,{children:["Limit the types of files that can be selected. Some examples are ",e.jsx(o.code,{children:"image/*"}),", ",e.jsx(o.code,{children:"video/*"}),", or ",e.jsx(o.code,{children:"audio/*"}),". To limit to a specific file type, use the MIME type, such as ",e.jsx(o.code,{children:"application/pdf"}),"."]}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:[e.jsx(o.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#limiting_accepted_file_types",rel:"nofollow",children:"MDN File Input"}),": More examples"]}),`
`]}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(o.h3,{id:"disabled",children:"Disabled"}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(o.h3,{id:"in-a-field",children:"In a Field"}),`
`,e.jsx(o.p,{children:"Use a Field component to group a File Input with a Label and possibly a description."}),`
`,e.jsxs(o.p,{children:["If you don’t need the description, remove its Paragraph and the ",e.jsx(o.code,{children:"aria-describedby"})," from the Text Input."]}),`
`,e.jsxs(o.p,{children:["Check ",e.jsx(o.a,{href:"/docs/components-forms-field--docs",children:"the Field docs"})," for more information on configuring it."]}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(o.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsx(b,{tokens:v})]})}function D(n={}){const{wrapper:o}={...l(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(i,{...n})}):i(n)}export{D as default};
