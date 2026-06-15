import{n as e}from"./chunk-DnJy8xQt.js";import{Wt as t}from"./iframe-DnrRtxtC.js";import{r as n}from"./react-8unDz2__.js";import{a as r,f as i,i as a,l as o,m as s,n as c,u as l}from"./blocks-BJaAo2-G.js";import{n as u,t as d}from"./DesignTokensTable-DN1hJ8io.js";import{t as f}from"./mdx-react-shim-m0rn8JKv.js";import{Disabled as p,HorizontalResize as m,InAField as h,InAFieldWithValidation as g,Invalid as _,NoResize as v,VerticalResize as y,n as b,t as x}from"./TextArea.stories-CqGZf1Pt.js";var S,C,w=e((()=>{S={"text-area":{"background-color":{$value:`{ams.inputs.background-color}`,$extensions:{"nl.amsterdam.type":`color`}},"border-color":{$value:`{ams.inputs.border-color}`,$extensions:{"nl.amsterdam.type":`color`}},"border-style":{$value:`{ams.inputs.border-style}`,$extensions:{"nl.amsterdam.type":`borderStyle`}},"border-width":{$value:`{ams.inputs.border-width}`,$extensions:{"nl.amsterdam.type":`borderWidth`}},color:{$value:`{ams.inputs.color}`,$extensions:{"nl.amsterdam.type":`color`}},"font-family":{$value:`{ams.inputs.font-family}`,$extensions:{"nl.amsterdam.type":`fontFamily`}},"font-size":{$value:`{ams.inputs.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"font-weight":{$value:`{ams.inputs.font-weight}`,$extensions:{"nl.amsterdam.type":`fontWeight`}},"line-height":{$value:`{ams.inputs.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}},"min-block-size":{$value:`calc({ams.typography.body-text.line-height} * 1em + 2 * {ams.text-area.padding-block})`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"outline-offset":{$value:`{ams.inputs.outline-offset}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-block":{$value:`{ams.inputs.padding-block}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-inline":{$value:`{ams.inputs.padding-inline}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},disabled:{color:{$value:`{ams.inputs.disabled.color}`,$extensions:{"nl.amsterdam.type":`color`}},cursor:{$value:`{ams.cursor.disabled}`,$extensions:{"nl.amsterdam.type":`cursor`}}},hover:{"box-shadow":{$value:`{ams.inputs.hover.box-shadow}`,$extensions:{"nl.amsterdam.type":`shadow`}}},invalid:{"border-color":{$value:`{ams.inputs.invalid.border-color}`,$extensions:{"nl.amsterdam.type":`color`}},hover:{"border-color":{$value:`{ams.inputs.invalid.hover.border-color}`,$extensions:{"nl.amsterdam.type":`color`}},"box-shadow":{$value:`{ams.inputs.invalid.hover.box-shadow}`,$extensions:{"nl.amsterdam.type":`shadow`}}}},placeholder:{color:{$value:`{ams.inputs.placeholder.color}`,$extensions:{"nl.amsterdam.type":`color`}}}}},C={ams:S}}));function T(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...n(),...e.components};return(0,D.jsxs)(D.Fragment,{children:[`
`,`
`,`
`,`
`,(0,D.jsx)(o,{of:x}),`
`,(0,D.jsx)(i,{}),`
`,(0,D.jsx)(r,{of:x}),`
`,(0,D.jsx)(l,{}),`
`,(0,D.jsx)(a,{}),`
`,(0,D.jsx)(t.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,D.jsx)(t.h3,{id:`when-to-use`,children:`When to use`}),`
`,(0,D.jsx)(t.p,{children:`Use a Text Area when users need to enter more than 1 sentence of text, such as a comment or description.`}),`
`,(0,D.jsx)(t.h3,{id:`how-to-use`,children:`How to use`}),`
`,(0,D.jsx)(t.p,{children:`The height of the Text Area should be appropriate for the information to be entered.`}),`
`,(0,D.jsxs)(t.p,{children:[`Use `,(0,D.jsx)(t.code,{children:`spellcheck="false"`}),` for fields that may contain sensitive information, such as passwords and personal data.
Some browser extensions for spell-checking send this information to external servers.`]}),`
`,(0,D.jsx)(t.p,{children:`A Text Area must have a label, and in most cases, this label should be visible.`}),`
`,(0,D.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,D.jsx)(t.h3,{id:`vertical-resize`,children:`Vertical resize`}),`
`,(0,D.jsx)(c,{of:y}),`
`,(0,D.jsx)(t.h3,{id:`horizontal-resize`,children:`Horizontal resize`}),`
`,(0,D.jsx)(c,{of:m}),`
`,(0,D.jsx)(t.h3,{id:`no-resize`,children:`No resize`}),`
`,(0,D.jsx)(c,{of:v}),`
`,(0,D.jsx)(t.h3,{id:`invalid`,children:`Invalid`}),`
`,(0,D.jsx)(c,{of:_}),`
`,(0,D.jsx)(t.h3,{id:`disabled`,children:`Disabled`}),`
`,(0,D.jsx)(c,{of:p}),`
`,(0,D.jsx)(t.h3,{id:`in-a-field`,children:`In a Field`}),`
`,(0,D.jsx)(t.p,{children:`Use a Field to group a Text Area with a Label, description and / or an Error Message.`}),`
`,(0,D.jsxs)(t.p,{children:[`If you don’t need the description, remove its Paragraph and the `,(0,D.jsx)(t.code,{children:`aria-describedby`}),` from the Text Input.`]}),`
`,(0,D.jsxs)(t.p,{children:[`Check `,(0,D.jsx)(t.a,{href:`/docs/components-forms-field--docs`,children:`the Field docs`}),` for more information on configuring it.`]}),`
`,(0,D.jsx)(c,{of:h}),`
`,(0,D.jsx)(t.h3,{id:`in-a-field-with-validation`,children:`In a Field with validation`}),`
`,(0,D.jsxs)(t.p,{children:[`If the Text Area can become invalid, add an Error Message and its `,(0,D.jsx)(t.code,{children:`id`}),` to the `,(0,D.jsx)(t.code,{children:`aria-describedby`}),` prop of the Text Area.`]}),`
`,(0,D.jsxs)(t.p,{children:[`Check `,(0,D.jsx)(t.a,{href:`/docs/components-forms-field--docs`,children:`the Field docs`}),` for more information on configuring it.`]}),`
`,(0,D.jsx)(c,{of:g}),`
`,(0,D.jsx)(t.h2,{id:`see-also`,children:`See also`}),`
`,(0,D.jsxs)(t.ul,{children:[`
`,(0,D.jsxs)(t.li,{children:[(0,D.jsx)(t.a,{href:`/docs/components-forms-text-input--docs`,children:`Text Input`}),` – for single-line text input.`]}),`
`,(0,D.jsxs)(t.li,{children:[(0,D.jsx)(t.a,{href:`/docs/components-forms-character-count--docs`,children:`Character Count`}),` – communicates a character limit on a Text Area.`]}),`
`,(0,D.jsxs)(t.li,{children:[(0,D.jsx)(t.a,{href:`/docs/components-forms-field--docs`,children:`Field`}),` – wraps a Text Area with its Label, description, and Error Message.`]}),`
`]}),`
`,(0,D.jsx)(t.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,D.jsx)(d,{tokens:C})]})}function E(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,D.jsx)(t,{...e,children:(0,D.jsx)(T,{...e})}):T(e)}var D;e((()=>{D=t(),f(),s(),b(),w(),u()}))();export{E as default};