import{j as e}from"./iframe-BQQSODuY.js";import{useMDXComponents as i}from"./index-BwwJ4zZ-.js";import{M as a,e as l,f as r,h as d,i as s}from"./blocks-Dkg_W2Lw.js";import{a as c,M as m,R as p,D as u,I as h}from"./FileInput.stories-DKdjvLjI.js";import{D as b}from"./DesignTokensTable-BktzzP4p.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BtL1HqGc.js";import"./BorderSample-ChYx1eGO.js";import"./formatTokenValue-BYjgZrXg.js";import"./Code-B-wP0-ZF.js";import"./ColorSample-hcCtO02L.js";import"./SpaceSample-0MeW4GkU.js";import"./TypographySample-CuMGUjzt.js";const f=`<!-- @license CC0-1.0 -->

# File Input

Allows the user to upload one or more files from their device.

## Visual considerations

The filename label and button are displayed in the language of the browser and can vary between browsers and operating systems.
`,y={"file-input":{"background-color":{$value:"{ams.inputs.background-color}",$type:"color"},"border-color":{$value:"{ams.inputs.border-color}",$type:"color"},"border-style":{$value:"dashed",$extensions:{"nl.amsterdam.type":"borderStyle"}},"border-width":{$value:"{ams.inputs.border-width}",$extensions:{"nl.amsterdam.type":"borderWidth"}},color:{$value:"{ams.inputs.color}",$type:"color"},cursor:{$value:"{ams.cursor.interactive}"},"font-family":{$value:"{ams.inputs.font-family}",$type:"fontFamily"},"font-size":{$value:"{ams.inputs.font-size}",$extensions:{"nl.amsterdam.type":"fontSize"}},"font-weight":{$value:"{ams.inputs.font-weight}",$type:"fontWeight"},"line-height":{$value:"{ams.inputs.line-height}",$extensions:{"nl.amsterdam.type":"lineHeight"}},"outline-offset":{$value:"{ams.inputs.outline-offset}",$type:"dimension",$extensions:{"nl.amsterdam.subtype":"space"}},"padding-block":{$value:"{ams.space.m}",$type:"dimension",$extensions:{"nl.amsterdam.subtype":"space"}},"padding-inline":{$value:"{ams.space.m}",$type:"dimension",$extensions:{"nl.amsterdam.subtype":"space"}},disabled:{color:{$value:"{ams.inputs.disabled.color}",$type:"color"},cursor:{$value:"{ams.cursor.disabled}"}},"file-selector-button":{"background-color":{$value:"{ams.button.secondary.background-color}",$type:"color"},"border-color":{$value:"{ams.button.secondary.border-color}",$type:"color"},"border-style":{$value:"{ams.button.border-style}",$extensions:{"nl.amsterdam.type":"borderStyle"}},"border-width":{$value:"{ams.button.border-width}",$extensions:{"nl.amsterdam.type":"borderWidth"}},color:{$value:"{ams.button.secondary.color}",$type:"color"},cursor:{$value:"{ams.button.cursor}"},"line-height":{$value:"{ams.button.line-height}",$extensions:{"nl.amsterdam.type":"lineHeight"}},"margin-inline-end":{$value:"{ams.space.m}",$type:"dimension",$extensions:{"nl.amsterdam.subtype":"space"}},"padding-block":{$value:"{ams.button.padding-block}",$type:"dimension",$extensions:{"nl.amsterdam.subtype":"space"}},"padding-inline":{$value:"{ams.button.padding-inline}",$type:"dimension",$extensions:{"nl.amsterdam.subtype":"space"}},disabled:{color:{$value:"{ams.button.secondary.disabled.color}",$type:"color"},cursor:{$value:"{ams.button.disabled.cursor}"}},hover:{"box-shadow":{$value:"{ams.button.secondary.hover.box-shadow}"},color:{$value:"{ams.button.secondary.hover.color}",$type:"color"}}}}},$={ams:y};function t(o){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...i(),...o.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,`
`,`
`,e.jsx(a,{of:c}),`
`,e.jsx(l,{children:f}),`
`,e.jsx(r,{}),`
`,e.jsx(d,{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"multiple-files",children:"Multiple files"}),`
`,e.jsx(n.p,{children:"Allow multiple files to be selected. The label will update to show the number of files selected."}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(n.h3,{id:"restrict-file-types",children:"Restrict file types"}),`
`,e.jsxs(n.p,{children:["Limit the types of files that can be selected. Some examples are ",e.jsx(n.code,{children:"image/*"}),", ",e.jsx(n.code,{children:"video/*"}),", or ",e.jsx(n.code,{children:"audio/*"}),". To limit to a specific file type, use the MIME type, such as ",e.jsx(n.code,{children:"application/pdf"}),"."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#limiting_accepted_file_types",rel:"nofollow",children:"MDN File Input"}),": More examples"]}),`
`]}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(n.h3,{id:"disabled",children:"Disabled"}),`
`,e.jsx(s,{of:u}),`
`,e.jsx(n.h3,{id:"in-a-field",children:"In a Field"}),`
`,e.jsx(n.p,{children:"Use a Field component to group a File Input with a Label and possibly a description."}),`
`,e.jsxs(n.p,{children:["If you don’t need the description, remove its Paragraph and the ",e.jsx(n.code,{children:"aria-describedby"})," from the Text Input."]}),`
`,e.jsxs(n.p,{children:["Check ",e.jsx(n.a,{href:"/docs/components-forms-field--docs",children:"the Field docs"})," for more information on configuring it."]}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(n.h2,{id:"design-tokens",children:"Design tokens"}),`
`,e.jsx(b,{tokens:$})]})}function S(o={}){const{wrapper:n}={...i(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}export{S as default};
