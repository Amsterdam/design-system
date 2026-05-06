import{n as e}from"./chunk-jRWAZmH_.js";import{Bt as t}from"./iframe-BTAd8KXZ.js";import{r as n}from"./react-BaiQUpm8.js";import{c as r,f as i,i as a,l as o,n as s,s as c}from"./blocks-Din176z4.js";import{n as l,t as u}from"./DesignTokensTable-CGTemxhO.js";import{t as d}from"./mdx-react-shim-JdiDlmK6.js";import{Disabled as f,InAField as p,MultipleFiles as m,RestrictFileTypes as h,n as g,t as _}from"./FileInput.stories-BWxfdABu.js";var v,y=e((()=>{v=`<!-- @license CC0-1.0 -->

# File Input

Allows the user to upload one or more files from their device.

## Visual considerations

The filename label and button are displayed in the language of the browser and can vary between browsers and operating systems.
`})),b,x,S=e((()=>{b={"file-input":{"background-color":{$value:`{ams.inputs.background-color}`,$extensions:{"nl.amsterdam.type":`color`}},"border-color":{$value:`{ams.inputs.border-color}`,$extensions:{"nl.amsterdam.type":`color`}},"border-style":{$value:`dashed`,$extensions:{"nl.amsterdam.type":`borderStyle`}},"border-width":{$value:`{ams.inputs.border-width}`,$extensions:{"nl.amsterdam.type":`borderWidth`}},color:{$value:`{ams.inputs.color}`,$extensions:{"nl.amsterdam.type":`color`}},cursor:{$value:`{ams.cursor.interactive}`,$extensions:{"nl.amsterdam.type":`cursor`}},"font-family":{$value:`{ams.inputs.font-family}`,$extensions:{"nl.amsterdam.type":`fontFamily`}},"font-size":{$value:`{ams.inputs.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"font-weight":{$value:`{ams.inputs.font-weight}`,$extensions:{"nl.amsterdam.type":`fontWeight`}},"line-height":{$value:`{ams.inputs.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}},"outline-offset":{$value:`{ams.inputs.outline-offset}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-block":{$value:`{ams.space.m}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-inline":{$value:`{ams.space.m}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},disabled:{color:{$value:`{ams.inputs.disabled.color}`,$extensions:{"nl.amsterdam.type":`color`}},cursor:{$value:`{ams.cursor.disabled}`,$extensions:{"nl.amsterdam.type":`cursor`}}},"file-selector-button":{"background-color":{$value:`{ams.button.secondary.background-color}`,$extensions:{"nl.amsterdam.type":`color`}},"border-color":{$value:`{ams.button.secondary.border-color}`,$extensions:{"nl.amsterdam.type":`color`}},"border-style":{$value:`{ams.button.border-style}`,$extensions:{"nl.amsterdam.type":`borderStyle`}},"border-width":{$value:`{ams.button.border-width}`,$extensions:{"nl.amsterdam.type":`borderWidth`}},color:{$value:`{ams.button.secondary.color}`,$extensions:{"nl.amsterdam.type":`color`}},cursor:{$value:`{ams.button.cursor}`,$extensions:{"nl.amsterdam.type":`cursor`}},"line-height":{$value:`{ams.button.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}},"margin-inline-end":{$value:`{ams.space.m}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-block":{$value:`{ams.button.padding-block}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-inline":{$value:`{ams.button.padding-inline}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},disabled:{color:{$value:`{ams.button.secondary.disabled.color}`,$extensions:{"nl.amsterdam.type":`color`}},cursor:{$value:`{ams.button.disabled.cursor}`,$extensions:{"nl.amsterdam.type":`cursor`}}},hover:{"box-shadow":{$value:`{ams.button.secondary.hover.box-shadow}`,$extensions:{"nl.amsterdam.type":`shadow`}},color:{$value:`{ams.button.secondary.hover.color}`,$extensions:{"nl.amsterdam.type":`color`}}}}}},x={ams:b}}));function C(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...n(),...e.components};return(0,T.jsxs)(T.Fragment,{children:[`
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