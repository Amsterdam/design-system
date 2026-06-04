import{n as e}from"./chunk-DnJy8xQt.js";import{Ht as t}from"./iframe-DujSOH9Z.js";import{r as n}from"./react-DN8fKP1y.js";import{c as r,f as i,i as a,l as o,n as s,s as c}from"./blocks-D4SP8fbh.js";import{n as l,t as u}from"./DesignTokensTable-tscw7H_L.js";import{t as d}from"./mdx-react-shim-rkI4hJLI.js";import{Disabled as f,InAField as p,InAFieldWithValidation as m,Invalid as h,n as g,t as _}from"./TimeInput.stories-NnmSHNOa.js";var v,y=e((()=>{v=`<!-- @license CC0-1.0 -->

# Time Input

Helps users enter time.

## Visual considerations

This component uses a native time input, which is styled differently in different browsers and operating systems.
Recreating the native functionality is quite difficult and prone to accessibility errors, which is why we’ve chosen not to do that.
This does mean that this component does not look identical on all browsers and operating systems.
`})),b,x,S=e((()=>{b={"time-input":{"background-color":{$value:`{ams.inputs.background-color}`,$extensions:{"nl.amsterdam.type":`color`}},"border-color":{$value:`{ams.inputs.border-color}`,$extensions:{"nl.amsterdam.type":`color`}},"border-style":{$value:`{ams.inputs.border-style}`,$extensions:{"nl.amsterdam.type":`borderStyle`}},"border-width":{$value:`{ams.inputs.border-width}`,$extensions:{"nl.amsterdam.type":`borderWidth`}},color:{$value:`{ams.inputs.color}`,$extensions:{"nl.amsterdam.type":`color`}},"font-family":{$value:`{ams.inputs.font-family}`,$extensions:{"nl.amsterdam.type":`fontFamily`}},"font-size":{$value:`{ams.inputs.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"font-weight":{$value:`{ams.inputs.font-weight}`,$extensions:{"nl.amsterdam.type":`fontWeight`}},"line-height":{$value:`{ams.inputs.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}},"outline-offset":{$value:`{ams.inputs.outline-offset}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-block":{$value:`{ams.inputs.padding-block}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-inline":{$value:`{ams.inputs.padding-inline}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},disabled:{color:{$value:`{ams.inputs.disabled.color}`,$extensions:{"nl.amsterdam.type":`color`}},cursor:{$value:`{ams.cursor.disabled}`,$extensions:{"nl.amsterdam.type":`cursor`}}},hover:{"box-shadow":{$value:`{ams.inputs.hover.box-shadow}`,$extensions:{"nl.amsterdam.type":`shadow`}},"calendar-picker-indicator":{"background-image":{$value:`url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' fill='%23003677'><path d='M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163 16-16A16 16 0 0 0 16 0zm.9 28v-2h-2v1.9A11.8 11.8 0 0 1 4.1 17H6v-2H4.1A11.8 11.8 0 0 1 15 4.1V6h2V4.1A11.8 11.8 0 0 1 27.9 15H26v2h1.9a11.9 11.9 0 0 1-11 11zm.1-13h4v2h-6V9h2v6z'/></svg>")`,$extensions:{"nl.amsterdam.type":`backgroundImage`}}}},invalid:{"border-color":{$value:`{ams.inputs.invalid.border-color}`,$extensions:{"nl.amsterdam.type":`color`}},hover:{"border-color":{$value:`{ams.inputs.invalid.hover.border-color}`,$extensions:{"nl.amsterdam.type":`color`}},"box-shadow":{$value:`{ams.inputs.invalid.hover.box-shadow}`,$extensions:{"nl.amsterdam.type":`shadow`}}}},"calendar-picker-indicator":{"background-image":{$value:`url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' fill='%23004699'><path d='M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163 16-16A16 16 0 0 0 16 0zm.9 28v-2h-2v1.9A11.8 11.8 0 0 1 4.1 17H6v-2H4.1A11.8 11.8 0 0 1 15 4.1V6h2V4.1A11.8 11.8 0 0 1 27.9 15H26v2h1.9a11.9 11.9 0 0 1-11 11zm.1-13h4v2h-6V9h2v6z'/></svg>")`,$extensions:{"nl.amsterdam.type":`backgroundImage`}},cursor:{$value:`{ams.cursor.interactive}`,$extensions:{"nl.amsterdam.type":`cursor`}}}}},x={ams:b}}));function C(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,p:`p`,...n(),...e.components};return(0,T.jsxs)(T.Fragment,{children:[`
`,`
`,`
`,`
`,(0,T.jsx)(r,{of:_}),`
`,(0,T.jsx)(c,{children:v}),`
`,(0,T.jsx)(o,{}),`
`,(0,T.jsx)(a,{}),`
`,(0,T.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,T.jsx)(t.h3,{id:`invalid`,children:`Invalid`}),`
`,(0,T.jsx)(s,{of:h}),`
`,(0,T.jsx)(t.h3,{id:`disabled`,children:`Disabled`}),`
`,(0,T.jsx)(s,{of:f}),`
`,(0,T.jsx)(t.h3,{id:`in-a-field`,children:`In a Field`}),`
`,(0,T.jsx)(t.p,{children:`Use a Field to group a Time Input with a Label, description and / or an Error Message.`}),`
`,(0,T.jsxs)(t.p,{children:[`If you don’t need the description, remove its Paragraph and the `,(0,T.jsx)(t.code,{children:`aria-describedby`}),` from the Time Input.`]}),`
`,(0,T.jsxs)(t.p,{children:[`Check `,(0,T.jsx)(t.a,{href:`/docs/components-forms-field--docs`,children:`the Field docs`}),` for more information on configuring it.`]}),`
`,(0,T.jsx)(s,{of:p}),`
`,(0,T.jsx)(t.h3,{id:`in-a-field-with-validation`,children:`In a Field with validation`}),`
`,(0,T.jsxs)(t.p,{children:[`If the Time Input can become invalid, add an Error Message and its `,(0,T.jsx)(t.code,{children:`id`}),` to the `,(0,T.jsx)(t.code,{children:`aria-describedby`}),` attribute of the Time Input.`]}),`
`,(0,T.jsxs)(t.p,{children:[`Check `,(0,T.jsx)(t.a,{href:`/docs/components-forms-field--docs`,children:`the Field docs`}),` for more information on configuring it.`]}),`
`,(0,T.jsx)(s,{of:m}),`
`,(0,T.jsx)(t.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,T.jsx)(u,{tokens:x})]})}function w(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,T.jsx)(t,{...e,children:(0,T.jsx)(C,{...e})}):C(e)}var T;e((()=>{T=t(),d(),i(),g(),y(),S(),l()}))();export{w as default};