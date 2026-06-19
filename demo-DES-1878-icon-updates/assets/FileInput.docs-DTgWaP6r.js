import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-BqsN2jGA.js";import{E as n,a as r,f as i,i as a,l as o,m as s,n as c,u as l}from"./blocks-BmHLdeQh.js";import{n as u,t as d}from"./DesignTokensTable-CHtgA4Nl.js";import{t as f}from"./mdx-react-shim-Dw91vMzF.js";import{Disabled as p,InAField as m,MultipleFiles as h,RestrictFileTypes as g,n as _,t as v}from"./FileInput.stories-CI-xrAAy.js";var y,b,x=e((()=>{y={"file-input":{"background-color":{$value:`{ams.inputs.background-color}`,$extensions:{"nl.amsterdam.type":`color`}},"border-color":{$value:`{ams.inputs.border-color}`,$extensions:{"nl.amsterdam.type":`color`}},"border-style":{$value:`dashed`,$extensions:{"nl.amsterdam.type":`borderStyle`}},"border-width":{$value:`{ams.inputs.border-width}`,$extensions:{"nl.amsterdam.type":`borderWidth`}},color:{$value:`{ams.inputs.color}`,$extensions:{"nl.amsterdam.type":`color`}},cursor:{$value:`{ams.cursor.interactive}`,$extensions:{"nl.amsterdam.type":`cursor`}},"font-family":{$value:`{ams.inputs.font-family}`,$extensions:{"nl.amsterdam.type":`fontFamily`}},"font-size":{$value:`{ams.inputs.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"font-weight":{$value:`{ams.inputs.font-weight}`,$extensions:{"nl.amsterdam.type":`fontWeight`}},"line-height":{$value:`{ams.inputs.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}},"outline-offset":{$value:`{ams.inputs.outline-offset}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-block":{$value:`{ams.space.m}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-inline":{$value:`{ams.space.m}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},disabled:{color:{$value:`{ams.inputs.disabled.color}`,$extensions:{"nl.amsterdam.type":`color`}},cursor:{$value:`{ams.cursor.disabled}`,$extensions:{"nl.amsterdam.type":`cursor`}}},"file-selector-button":{"background-color":{$value:`{ams.button.secondary.background-color}`,$extensions:{"nl.amsterdam.type":`color`}},"border-color":{$value:`{ams.button.secondary.border-color}`,$extensions:{"nl.amsterdam.type":`color`}},"border-style":{$value:`{ams.button.border-style}`,$extensions:{"nl.amsterdam.type":`borderStyle`}},"border-width":{$value:`{ams.button.border-width}`,$extensions:{"nl.amsterdam.type":`borderWidth`}},color:{$value:`{ams.button.secondary.color}`,$extensions:{"nl.amsterdam.type":`color`}},cursor:{$value:`{ams.button.cursor}`,$extensions:{"nl.amsterdam.type":`cursor`}},"line-height":{$value:`{ams.button.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}},"margin-inline-end":{$value:`{ams.space.m}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-block":{$value:`{ams.button.padding-block}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-inline":{$value:`{ams.button.padding-inline}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},disabled:{color:{$value:`{ams.button.secondary.disabled.color}`,$extensions:{"nl.amsterdam.type":`color`}},cursor:{$value:`{ams.button.disabled.cursor}`,$extensions:{"nl.amsterdam.type":`cursor`}}},hover:{"box-shadow":{$value:`{ams.button.secondary.hover.box-shadow}`,$extensions:{"nl.amsterdam.type":`shadow`}},color:{$value:`{ams.button.secondary.hover.color}`,$extensions:{"nl.amsterdam.type":`color`}}}}}},b={ams:y}}));function S(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...n(),...e.components};return(0,w.jsxs)(w.Fragment,{children:[`
`,`
`,`
`,`
`,(0,w.jsx)(o,{of:v}),`
`,(0,w.jsx)(i,{}),`
`,(0,w.jsx)(r,{of:v}),`
`,(0,w.jsx)(l,{}),`
`,(0,w.jsx)(a,{}),`
`,(0,w.jsx)(t.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,w.jsx)(t.h3,{id:`when-to-use`,children:`When to use`}),`
`,(0,w.jsx)(t.p,{children:`Use a File Input when users need to attach one or more files from their device.`}),`
`,(0,w.jsx)(t.h3,{id:`how-to-use`,children:`How to use`}),`
`,(0,w.jsx)(t.p,{children:`Wrap a File Input in a Field to associate it with a Label and description.`}),`
`,(0,w.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,w.jsx)(t.h3,{id:`multiple-files`,children:`Multiple files`}),`
`,(0,w.jsx)(t.p,{children:`Allow multiple files to be selected.
The label will update to show the number of files selected.`}),`
`,(0,w.jsx)(c,{of:h}),`
`,(0,w.jsx)(t.h3,{id:`restrict-file-types`,children:`Restrict file types`}),`
`,(0,w.jsxs)(t.p,{children:[`Limit the types of files that can be selected.
Some examples are `,(0,w.jsx)(t.code,{children:`image/*`}),`, `,(0,w.jsx)(t.code,{children:`video/*`}),`, or `,(0,w.jsx)(t.code,{children:`audio/*`}),`.
To limit to a specific file type, use the MIME type, such as `,(0,w.jsx)(t.code,{children:`application/pdf`}),`.`]}),`
`,(0,w.jsxs)(t.ul,{children:[`
`,(0,w.jsxs)(t.li,{children:[(0,w.jsx)(t.a,{href:`https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#limiting_accepted_file_types`,rel:`nofollow`,children:`MDN File Input`}),`: More examples`]}),`
`]}),`
`,(0,w.jsx)(c,{of:g}),`
`,(0,w.jsx)(t.h3,{id:`disabled`,children:`Disabled`}),`
`,(0,w.jsx)(c,{of:p}),`
`,(0,w.jsx)(t.h3,{id:`in-a-field`,children:`In a Field`}),`
`,(0,w.jsx)(t.p,{children:`Use a Field component to group a File Input with a Label and possibly a description.`}),`
`,(0,w.jsxs)(t.p,{children:[`If you don’t need the description, remove its Paragraph and the `,(0,w.jsx)(t.code,{children:`aria-describedby`}),` from the Text Input.`]}),`
`,(0,w.jsxs)(t.p,{children:[`Check `,(0,w.jsx)(t.a,{href:`/docs/components-forms-field--docs`,children:`the Field docs`}),` for more information on configuring it.`]}),`
`,(0,w.jsx)(c,{of:m}),`
`,(0,w.jsx)(t.h2,{id:`design`,children:`Design`}),`
`,(0,w.jsx)(t.p,{children:`The filename label and button are displayed in the language of the browser and can vary between browsers and operating systems.`}),`
`,(0,w.jsx)(t.h2,{id:`see-also`,children:`See also`}),`
`,(0,w.jsxs)(t.ul,{children:[`
`,(0,w.jsxs)(t.li,{children:[(0,w.jsx)(t.a,{href:`/docs/components-forms-file-list--docs`,children:`File List`}),` – shows the files that the user has selected.`]}),`
`,(0,w.jsxs)(t.li,{children:[(0,w.jsx)(t.a,{href:`/docs/components-forms-field--docs`,children:`Field`}),` – wraps a File Input with its Label and description.`]}),`
`]}),`
`,(0,w.jsx)(t.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,w.jsx)(d,{tokens:b})]})}function C(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,w.jsx)(t,{...e,children:(0,w.jsx)(S,{...e})}):S(e)}var w;e((()=>{w=t(),f(),s(),u(),x(),_()}))();export{C as default};