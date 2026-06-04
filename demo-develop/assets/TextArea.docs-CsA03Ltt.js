import{n as e}from"./chunk-DnJy8xQt.js";import{Ht as t}from"./iframe-DujSOH9Z.js";import{r as n}from"./react-DN8fKP1y.js";import{c as r,f as i,i as a,l as o,n as s,s as c}from"./blocks-D4SP8fbh.js";import{n as l,t as u}from"./DesignTokensTable-tscw7H_L.js";import{t as d}from"./mdx-react-shim-rkI4hJLI.js";import{Disabled as f,HorizontalResize as p,InAField as m,InAFieldWithValidation as h,Invalid as g,NoResize as _,VerticalResize as v,n as y,t as b}from"./TextArea.stories-DdHDgrqK.js";var x,S=e((()=>{x=`<!-- @license CC0-1.0 -->

# TextArea

A form field that allows the user to input text over multiple lines.

## Guidelines

- Use a TextArea when users need to enter more than 1 sentence of text, such as a comment or description.
- The height of the TextArea should be appropriate for the information to be entered.
- A TextArea must have a label, and in most cases, this label should be visible.
- Use \`spellcheck="false"\` for fields that may contain sensitive information, such as passwords and personal data.
  Some browser extensions for spell-checking send this information to external servers.

## Accessibility

- [WCAG 2.1](https://www.w3.org/WAI/WCAG21/Techniques/html/H91.html) requires that the TextArea has a label or title attribute.
`})),C,w,T=e((()=>{C={"text-area":{"background-color":{$value:`{ams.inputs.background-color}`,$extensions:{"nl.amsterdam.type":`color`}},"border-color":{$value:`{ams.inputs.border-color}`,$extensions:{"nl.amsterdam.type":`color`}},"border-style":{$value:`{ams.inputs.border-style}`,$extensions:{"nl.amsterdam.type":`borderStyle`}},"border-width":{$value:`{ams.inputs.border-width}`,$extensions:{"nl.amsterdam.type":`borderWidth`}},color:{$value:`{ams.inputs.color}`,$extensions:{"nl.amsterdam.type":`color`}},"font-family":{$value:`{ams.inputs.font-family}`,$extensions:{"nl.amsterdam.type":`fontFamily`}},"font-size":{$value:`{ams.inputs.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"font-weight":{$value:`{ams.inputs.font-weight}`,$extensions:{"nl.amsterdam.type":`fontWeight`}},"line-height":{$value:`{ams.inputs.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}},"min-block-size":{$value:`calc({ams.typography.body-text.line-height} * 1em + 2 * {ams.text-area.padding-block})`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"outline-offset":{$value:`{ams.inputs.outline-offset}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-block":{$value:`{ams.inputs.padding-block}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-inline":{$value:`{ams.inputs.padding-inline}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},disabled:{color:{$value:`{ams.inputs.disabled.color}`,$extensions:{"nl.amsterdam.type":`color`}},cursor:{$value:`{ams.cursor.disabled}`,$extensions:{"nl.amsterdam.type":`cursor`}}},hover:{"box-shadow":{$value:`{ams.inputs.hover.box-shadow}`,$extensions:{"nl.amsterdam.type":`shadow`}}},invalid:{"border-color":{$value:`{ams.inputs.invalid.border-color}`,$extensions:{"nl.amsterdam.type":`color`}},hover:{"border-color":{$value:`{ams.inputs.invalid.hover.border-color}`,$extensions:{"nl.amsterdam.type":`color`}},"box-shadow":{$value:`{ams.inputs.invalid.hover.box-shadow}`,$extensions:{"nl.amsterdam.type":`shadow`}}}},placeholder:{color:{$value:`{ams.inputs.placeholder.color}`,$extensions:{"nl.amsterdam.type":`color`}}}}},w={ams:C}}));function E(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,h4:`h4`,p:`p`,...n(),...e.components};return(0,O.jsxs)(O.Fragment,{children:[`
`,`
`,`
`,`
`,(0,O.jsx)(r,{of:b}),`
`,(0,O.jsx)(c,{children:x}),`
`,(0,O.jsx)(o,{}),`
`,(0,O.jsx)(a,{}),`
`,(0,O.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,O.jsx)(t.h3,{id:`vertical-resize`,children:`Vertical resize`}),`
`,(0,O.jsx)(s,{of:v}),`
`,(0,O.jsx)(t.h3,{id:`horizontal-resize`,children:`Horizontal resize`}),`
`,(0,O.jsx)(s,{of:p}),`
`,(0,O.jsx)(t.h3,{id:`no-resize`,children:`No resize`}),`
`,(0,O.jsx)(s,{of:_}),`
`,(0,O.jsx)(t.h3,{id:`invalid`,children:`Invalid`}),`
`,(0,O.jsx)(s,{of:g}),`
`,(0,O.jsx)(t.h3,{id:`disabled`,children:`Disabled`}),`
`,(0,O.jsx)(s,{of:f}),`
`,(0,O.jsx)(t.h4,{id:`in-a-field`,children:`In a Field`}),`
`,(0,O.jsx)(t.p,{children:`Use a Field to group a Text Area with a Label, description and / or an Error Message.`}),`
`,(0,O.jsxs)(t.p,{children:[`If you don’t need the description, remove its Paragraph and the `,(0,O.jsx)(t.code,{children:`aria-describedby`}),` from the Text Input.`]}),`
`,(0,O.jsxs)(t.p,{children:[`Check `,(0,O.jsx)(t.a,{href:`/docs/components-forms-field--docs`,children:`the Field docs`}),` for more information on configuring it.`]}),`
`,(0,O.jsx)(s,{of:m}),`
`,(0,O.jsx)(t.h4,{id:`in-a-field-with-validation`,children:`In a Field with validation`}),`
`,(0,O.jsxs)(t.p,{children:[`If the Text Area can become invalid, add an Error Message and its `,(0,O.jsx)(t.code,{children:`id`}),` to the `,(0,O.jsx)(t.code,{children:`aria-describedby`}),` prop of the Text Area.`]}),`
`,(0,O.jsxs)(t.p,{children:[`Check `,(0,O.jsx)(t.a,{href:`/docs/components-forms-field--docs`,children:`the Field docs`}),` for more information on configuring it.`]}),`
`,(0,O.jsx)(s,{of:h}),`
`,(0,O.jsx)(t.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,O.jsx)(u,{tokens:w})]})}function D(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,O.jsx)(t,{...e,children:(0,O.jsx)(E,{...e})}):E(e)}var O;e((()=>{O=t(),d(),i(),y(),S(),T(),l()}))();export{D as default};