import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-BrayXyei.js";import{r as n}from"./react-oCAR5XSR.js";import{c as r,f as i,i as a,l as o,n as s,s as c}from"./blocks-BW3aL8IE.js";import{n as l,t as u}from"./DesignTokensTable-CJgajNVN.js";import{t as d}from"./mdx-react-shim-9Tyt82po.js";import{Disabled as f,InAField as p,MultipleFiles as m,RestrictFileTypes as h,n as g,t as _}from"./FileInput.stories-9W7BuYj8.js";var v,y=e((()=>{v=`<!-- @license CC0-1.0 -->

# File Input

Allows the user to upload one or more files from their device.

## Visual considerations

The filename label and button are displayed in the language of the browser and can vary between browsers and operating systems.
`})),b,x,S=e((()=>{b={"file-input":{"background-color":{$value:`{ams.inputs.background-color}`,$type:`color`},"border-color":{$value:`{ams.inputs.border-color}`,$type:`color`},"border-style":{$value:`dashed`,$extensions:{"nl.amsterdam.type":`borderStyle`}},"border-width":{$value:`{ams.inputs.border-width}`,$extensions:{"nl.amsterdam.type":`borderWidth`}},color:{$value:`{ams.inputs.color}`,$type:`color`},cursor:{$value:`{ams.cursor.interactive}`},"font-family":{$value:`{ams.inputs.font-family}`,$type:`fontFamily`},"font-size":{$value:`{ams.inputs.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"font-weight":{$value:`{ams.inputs.font-weight}`,$type:`fontWeight`},"line-height":{$value:`{ams.inputs.line-height}`,$extensions:{"nl.amsterdam.type":`lineHeight`}},"outline-offset":{$value:`{ams.inputs.outline-offset}`,$type:`dimension`,$extensions:{"nl.amsterdam.subtype":`space`}},"padding-block":{$value:`{ams.space.m}`,$type:`dimension`,$extensions:{"nl.amsterdam.subtype":`space`}},"padding-inline":{$value:`{ams.space.m}`,$type:`dimension`,$extensions:{"nl.amsterdam.subtype":`space`}},disabled:{color:{$value:`{ams.inputs.disabled.color}`,$type:`color`},cursor:{$value:`{ams.cursor.disabled}`}},"file-selector-button":{"background-color":{$value:`{ams.button.secondary.background-color}`,$type:`color`},"border-color":{$value:`{ams.button.secondary.border-color}`,$type:`color`},"border-style":{$value:`{ams.button.border-style}`,$extensions:{"nl.amsterdam.type":`borderStyle`}},"border-width":{$value:`{ams.button.border-width}`,$extensions:{"nl.amsterdam.type":`borderWidth`}},color:{$value:`{ams.button.secondary.color}`,$type:`color`},cursor:{$value:`{ams.button.cursor}`},"line-height":{$value:`{ams.button.line-height}`,$extensions:{"nl.amsterdam.type":`lineHeight`}},"margin-inline-end":{$value:`{ams.space.m}`,$type:`dimension`,$extensions:{"nl.amsterdam.subtype":`space`}},"padding-block":{$value:`{ams.button.padding-block}`,$type:`dimension`,$extensions:{"nl.amsterdam.subtype":`space`}},"padding-inline":{$value:`{ams.button.padding-inline}`,$type:`dimension`,$extensions:{"nl.amsterdam.subtype":`space`}},disabled:{color:{$value:`{ams.button.secondary.disabled.color}`,$type:`color`},cursor:{$value:`{ams.button.disabled.cursor}`}},hover:{"box-shadow":{$value:`{ams.button.secondary.hover.box-shadow}`},color:{$value:`{ams.button.secondary.hover.color}`,$type:`color`}}}}},x={ams:b}}));function C(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...n(),...e.components};return(0,T.jsxs)(T.Fragment,{children:[`
`,`
`,`
`,`
`,(0,T.jsx)(r,{of:_}),`
`,(0,T.jsx)(c,{children:v}),`
`,(0,T.jsx)(o,{}),`
`,(0,T.jsx)(a,{}),`
`,(0,T.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,T.jsx)(t.h3,{id:`multiple-files`,children:`Multiple files`}),`
`,(0,T.jsx)(t.p,{children:`Allow multiple files to be selected. The label will update to show the number of files selected.`}),`
`,(0,T.jsx)(s,{of:m}),`
`,(0,T.jsx)(t.h3,{id:`restrict-file-types`,children:`Restrict file types`}),`
`,(0,T.jsxs)(t.p,{children:[`Limit the types of files that can be selected. Some examples are `,(0,T.jsx)(t.code,{children:`image/*`}),`, `,(0,T.jsx)(t.code,{children:`video/*`}),`, or `,(0,T.jsx)(t.code,{children:`audio/*`}),`. To limit to a specific file type, use the MIME type, such as `,(0,T.jsx)(t.code,{children:`application/pdf`}),`.`]}),`
`,(0,T.jsxs)(t.ul,{children:[`
`,(0,T.jsxs)(t.li,{children:[(0,T.jsx)(t.a,{href:`https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#limiting_accepted_file_types`,rel:`nofollow`,children:`MDN File Input`}),`: More examples`]}),`
`]}),`
`,(0,T.jsx)(s,{of:h}),`
`,(0,T.jsx)(t.h3,{id:`disabled`,children:`Disabled`}),`
`,(0,T.jsx)(s,{of:f}),`
`,(0,T.jsx)(t.h3,{id:`in-a-field`,children:`In a Field`}),`
`,(0,T.jsx)(t.p,{children:`Use a Field component to group a File Input with a Label and possibly a description.`}),`
`,(0,T.jsxs)(t.p,{children:[`If you don’t need the description, remove its Paragraph and the `,(0,T.jsx)(t.code,{children:`aria-describedby`}),` from the Text Input.`]}),`
`,(0,T.jsxs)(t.p,{children:[`Check `,(0,T.jsx)(t.a,{href:`/docs/components-forms-field--docs`,children:`the Field docs`}),` for more information on configuring it.`]}),`
`,(0,T.jsx)(s,{of:p}),`
`,(0,T.jsx)(t.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,T.jsx)(u,{tokens:x})]})}function w(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,T.jsx)(t,{...e,children:(0,T.jsx)(C,{...e})}):C(e)}var T;e((()=>{T=t(),d(),i(),g(),y(),S(),l()}))();export{w as default};