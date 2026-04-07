import{n as e}from"./chunk-zsgVPwQN.js";import{At as t}from"./iframe-B4OoWQbj.js";import{r as n}from"./react-8SMSAzK2.js";import{c as r,f as i,i as a,l as o,n as s,s as c}from"./blocks-BifevNMR.js";import{n as l,t as u}from"./DesignTokensTable-DAyD6BSl.js";import{t as d}from"./mdx-react-shim-B0A7Egfr.js";import{Disabled as f,Grouped as p,InAField as m,InAFieldWithValidation as h,Invalid as g,n as _,t as v}from"./Select.stories-DompDCHM.js";var y,b=e((()=>{y=`<!-- @license CC0-1.0 -->

# Select

A form control that allows users to select one or more options from a list.

## References

- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select)
`})),x,S,C=e((()=>{x={select:{"background-color":{$value:`{ams.inputs.background-color}`,$type:`color`},"background-image":{$value:`url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><path fill='%23004699' fill-rule='evenodd' d='m16 25.757-16-16 2.91-2.9L16 19.937l13.09-13.08 2.91 2.9z'/></svg>")`},"background-position":{$value:`right {ams.space.m} center`},"border-color":{$value:`{ams.inputs.border-color}`,$type:`color`},"border-style":{$value:`{ams.inputs.border-style}`,$extensions:{"nl.amsterdam.type":`borderStyle`}},"border-width":{$value:`{ams.inputs.border-width}`,$extensions:{"nl.amsterdam.type":`borderWidth`}},color:{$value:`{ams.inputs.color}`,$type:`color`},"font-family":{$value:`{ams.inputs.font-family}`,$type:`fontFamily`},"font-size":{$value:`{ams.inputs.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"font-weight":{$value:`{ams.inputs.font-weight}`,$type:`fontWeight`},"line-height":{$value:`{ams.inputs.line-height}`,$extensions:{"nl.amsterdam.type":`lineHeight`}},"outline-offset":{$value:`{ams.inputs.outline-offset}`,$type:`dimension`,$extensions:{"nl.amsterdam.subtype":`space`}},"padding-block":{$value:`{ams.inputs.padding-block}`,$type:`dimension`,$extensions:{"nl.amsterdam.subtype":`space`}},"padding-inline":{$value:`{ams.inputs.padding-inline} calc(2 * {ams.inputs.padding-inline} + 1em)`,$type:`dimension`,$extensions:{"nl.amsterdam.subtype":`space`}},disabled:{"background-image":{$value:`url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><path fill='%23767676' fill-rule='evenodd' d='m16 25.757-16-16 2.91-2.9L16 19.937l13.09-13.08 2.91 2.9z'/></svg>")`},color:{$value:`{ams.inputs.disabled.color}`,$type:`color`},cursor:{$value:`{ams.cursor.disabled}`}},hover:{"box-shadow":{$type:`shadow`,$value:`{ams.inputs.hover.box-shadow}`},"background-image":{$value:`url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><path fill='%23003677' fill-rule='evenodd' d='m16 25.757-16-16 2.91-2.9L16 19.937l13.09-13.08 2.91 2.9z'/></svg>")`}},invalid:{"border-color":{$value:`{ams.inputs.invalid.border-color}`,$type:`color`},hover:{"border-color":{$value:`{ams.inputs.invalid.hover.border-color}`,$type:`color`},"box-shadow":{$type:`shadow`,$value:`{ams.inputs.invalid.hover.box-shadow}`}}},option:{disabled:{color:{$value:`{ams.color.interactive.disabled}`,$type:`color`}}}}},S={ams:x}}));function w(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,p:`p`,...n(),...e.components};return(0,E.jsxs)(E.Fragment,{children:[`
`,`
`,`
`,`
`,(0,E.jsx)(r,{of:v}),`
`,(0,E.jsx)(c,{children:y}),`
`,(0,E.jsx)(o,{}),`
`,(0,E.jsx)(a,{}),`
`,(0,E.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,E.jsx)(t.h3,{id:`multiple`,children:`Multiple`}),`
`,(0,E.jsxs)(t.p,{children:[`Avoid adding functionality to allow selecting multiple options. Multi select is harder to use
on desktop as they require the user to hold down the `,(0,E.jsx)(t.code,{children:`Ctrl`}),` or `,(0,E.jsx)(t.code,{children:`Cmd`}),` key while clicking on the options.
It is recommended to use checkboxes instead.`]}),`
`,(0,E.jsx)(t.h3,{id:`grouped`,children:`Grouped`}),`
`,(0,E.jsxs)(t.p,{children:[`Use the `,(0,E.jsx)(t.code,{children:`Select.Group`}),` component to group options.
The component requires a `,(0,E.jsx)(t.code,{children:`label`}),` attribute.`]}),`
`,(0,E.jsx)(s,{of:p}),`
`,(0,E.jsx)(t.h3,{id:`invalid`,children:`Invalid`}),`
`,(0,E.jsx)(s,{of:g}),`
`,(0,E.jsx)(t.h3,{id:`disabled`,children:`Disabled`}),`
`,(0,E.jsx)(s,{of:f}),`
`,(0,E.jsx)(t.h3,{id:`in-a-field`,children:`In a Field`}),`
`,(0,E.jsx)(t.p,{children:`Use a Field to group a Select with a Label, description and / or an Error Message.`}),`
`,(0,E.jsxs)(t.p,{children:[`If you don’t need the description, remove its Paragraph and the `,(0,E.jsx)(t.code,{children:`aria-describedby`}),` from the Select.`]}),`
`,(0,E.jsxs)(t.p,{children:[`Check `,(0,E.jsx)(t.a,{href:`/docs/components-forms-field--docs`,children:`the Field docs`}),` for more information on configuring it.`]}),`
`,(0,E.jsx)(s,{of:m}),`
`,(0,E.jsx)(t.h3,{id:`in-a-field-with-validation`,children:`In a Field with validation`}),`
`,(0,E.jsxs)(t.p,{children:[`If the Select can become invalid, add an Error Message and its `,(0,E.jsx)(t.code,{children:`id`}),` to the `,(0,E.jsx)(t.code,{children:`aria-describedby`}),` attribute of the Select.`]}),`
`,(0,E.jsxs)(t.p,{children:[`Check `,(0,E.jsx)(t.a,{href:`/docs/components-forms-field--docs`,children:`the Field docs`}),` for more information on configuring it.`]}),`
`,(0,E.jsx)(s,{of:h}),`
`,(0,E.jsx)(t.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,E.jsx)(u,{tokens:S})]})}function T(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,E.jsx)(t,{...e,children:(0,E.jsx)(w,{...e})}):w(e)}var E;e((()=>{E=t(),d(),i(),_(),b(),C(),l()}))();export{T as default};