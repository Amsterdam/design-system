import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,d as n,h as r,i,n as a,p as o,u as s}from"./blocks-zzQRermb.js";import{t as c}from"./jsx-runtime-ATHzeHXA.js";import{i as l,r as u}from"./react-Dyi61YEg.js";import{n as d,t as f}from"./DesignTokensTable-Bbrs_2h_.js";import{a as p,c as m,i as h,l as g,n as _,o as v,r as y,s as b,t as x}from"./TextArea.stories-Bdt0K0-C.js";var S,C;function w(){return(w=e((()=>{S={"text-area":{"background-color":{$value:`{ams.inputs.background-color}`,$extensions:{"nl.amsterdam.type":`color`}},"border-color":{$value:`{ams.inputs.border-color}`,$extensions:{"nl.amsterdam.type":`color`}},"border-radius":{$value:`{ams.inputs.border-radius}`,$extensions:{"nl.amsterdam.type":`borderRadius`}},"border-style":{$value:`{ams.inputs.border-style}`,$extensions:{"nl.amsterdam.type":`borderStyle`}},"border-width":{$value:`{ams.inputs.border-width}`,$extensions:{"nl.amsterdam.type":`borderWidth`}},color:{$value:`{ams.inputs.color}`,$extensions:{"nl.amsterdam.type":`color`}},"font-family":{$value:`{ams.inputs.font-family}`,$extensions:{"nl.amsterdam.type":`fontFamily`}},"font-size":{$value:`{ams.inputs.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"font-weight":{$value:`{ams.inputs.font-weight}`,$extensions:{"nl.amsterdam.type":`fontWeight`}},"line-height":{$value:`{ams.inputs.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}},"min-block-size":{$value:`calc({ams.typography.body-text.line-height} * 1em + 2 * {ams.text-area.padding-block})`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"outline-offset":{$value:`{ams.inputs.outline-offset}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-block":{$value:`{ams.inputs.padding-block}`,$extensions:{"nl.amsterdam.hint":`Must be a single value: it is used in a calculation, which two values would invalidate.`,"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-inline":{$value:`{ams.inputs.padding-inline}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},disabled:{"background-color":{$value:`{ams.inputs.disabled.background-color}`,$extensions:{"nl.amsterdam.type":`color`}},color:{$value:`{ams.inputs.disabled.color}`,$extensions:{"nl.amsterdam.type":`color`}},cursor:{$value:`{ams.cursor.disabled}`,$extensions:{"nl.amsterdam.type":`cursor`}}},hover:{"box-shadow":{$value:`{ams.inputs.hover.box-shadow}`,$extensions:{"nl.amsterdam.type":`shadow`}}},invalid:{"border-color":{$value:`{ams.inputs.invalid.border-color}`,$extensions:{"nl.amsterdam.type":`color`}},hover:{"border-color":{$value:`{ams.inputs.invalid.hover.border-color}`,$extensions:{"nl.amsterdam.type":`color`}},"box-shadow":{$value:`{ams.inputs.invalid.hover.box-shadow}`,$extensions:{"nl.amsterdam.type":`shadow`}}}},placeholder:{color:{$value:`{ams.inputs.placeholder.color}`,$extensions:{"nl.amsterdam.type":`color`}}}}},C={ams:S}})))()}function T(e){let r={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...l(),...e.components};return(0,D.jsxs)(D.Fragment,{children:[`
`,`
`,`
`,`
`,(0,D.jsx)(s,{of:b}),`
`,(0,D.jsx)(o,{}),`
`,(0,D.jsx)(t,{of:b}),`
`,(0,D.jsx)(n,{}),`
`,(0,D.jsx)(i,{}),`
`,(0,D.jsx)(r.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,D.jsx)(r.h3,{id:`when-to-use`,children:`When to use`}),`
`,(0,D.jsx)(r.p,{children:`Use a Text Area when users need to enter more than 1 sentence of text, such as a comment or description.`}),`
`,(0,D.jsx)(r.h3,{id:`how-to-use`,children:`How to use`}),`
`,(0,D.jsx)(r.p,{children:`The height of the Text Area should be appropriate for the information to be entered.`}),`
`,(0,D.jsxs)(r.p,{children:[`Use `,(0,D.jsx)(r.code,{children:`spellcheck="false"`}),` for fields that may contain sensitive information, such as passwords and personal data.
Some browser extensions for spell-checking send this information to external servers.`]}),`
`,(0,D.jsx)(r.p,{children:`A Text Area must have a label, and in most cases, this label should be visible.`}),`
`,(0,D.jsx)(r.h2,{id:`examples`,children:`Examples`}),`
`,(0,D.jsx)(r.h3,{id:`vertical-resize`,children:`Vertical resize`}),`
`,(0,D.jsx)(a,{of:m}),`
`,(0,D.jsx)(r.h3,{id:`horizontal-resize`,children:`Horizontal resize`}),`
`,(0,D.jsx)(a,{of:_}),`
`,(0,D.jsx)(r.h3,{id:`no-resize`,children:`No resize`}),`
`,(0,D.jsx)(a,{of:v}),`
`,(0,D.jsx)(r.h3,{id:`invalid`,children:`Invalid`}),`
`,(0,D.jsx)(a,{of:p}),`
`,(0,D.jsx)(r.h3,{id:`disabled`,children:`Disabled`}),`
`,(0,D.jsx)(a,{of:x}),`
`,(0,D.jsx)(r.h3,{id:`in-a-field`,children:`In a Field`}),`
`,(0,D.jsx)(r.p,{children:`Use a Field to group a Text Area with a Label, description and / or an Error Message.`}),`
`,(0,D.jsxs)(r.p,{children:[`If you don’t need the description, remove its Paragraph and the `,(0,D.jsx)(r.code,{children:`aria-describedby`}),` from the Text Input.`]}),`
`,(0,D.jsxs)(r.p,{children:[`Check `,(0,D.jsx)(r.a,{href:`/docs/components-forms-field--docs`,children:`the Field docs`}),` for more information on configuring it.`]}),`
`,(0,D.jsx)(a,{of:y}),`
`,(0,D.jsx)(r.h3,{id:`in-a-field-with-validation`,children:`In a Field with validation`}),`
`,(0,D.jsxs)(r.p,{children:[`If the Text Area can become invalid, add an Error Message and its `,(0,D.jsx)(r.code,{children:`id`}),` to the `,(0,D.jsx)(r.code,{children:`aria-describedby`}),` prop of the Text Area.`]}),`
`,(0,D.jsxs)(r.p,{children:[`Check `,(0,D.jsx)(r.a,{href:`/docs/components-forms-field--docs`,children:`the Field docs`}),` for more information on configuring it.`]}),`
`,(0,D.jsx)(a,{of:h}),`
`,(0,D.jsx)(r.h2,{id:`design`,children:`Design`}),`
`,(0,D.jsxs)(r.p,{children:[`A Text Area shares its border, padding, type and states with a `,(0,D.jsx)(r.a,{href:`/docs/components-forms-text-input--docs`,children:`Text Input`}),`, so a form built from both reads as one set of fields.`]}),`
`,(0,D.jsxs)(r.p,{children:[`It has a minimum height of its own, which is what says at a glance that more than one line is expected here.
Setting `,(0,D.jsx)(r.code,{children:`cols`}),` switches the width from filling the container to sizing by character count, and the field still never grows past the space it has.`]}),`
`,(0,D.jsxs)(r.p,{children:[`The `,(0,D.jsx)(r.code,{children:`resize`}),` prop decides which directions the user may drag.
The handle browsers put in the corner is left in place by default: it costs nothing, and it lets someone give themselves more room for a long answer without leaving the page.`]}),`
`,(0,D.jsx)(r.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,D.jsxs)(r.p,{children:[`A Text Area renders a `,(0,D.jsx)(r.code,{children:`textarea`}),` element and is announced with its label and anything `,(0,D.jsx)(r.code,{children:`aria-describedby`}),` points at.`]}),`
`,(0,D.jsxs)(r.p,{children:[`Resizing is a convenience for people who need more room on screen, and it is not supported in Safari on iOS.
Nothing depends on it, so a field there behaves as it would with `,(0,D.jsx)(r.code,{children:`resize`}),` set to none.`]}),`
`,(0,D.jsxs)(r.p,{children:[`The invalid styling responds to `,(0,D.jsx)(r.code,{children:`aria-invalid="true"`}),` and to the browser’s own `,(0,D.jsx)(r.code,{children:`:invalid`}),` state alike, as it does for a `,(0,D.jsx)(r.a,{href:`/docs/components-forms-text-input--docs`,children:`Text Input`}),`.`]}),`
`,(0,D.jsx)(r.h2,{id:`see-also`,children:`See also`}),`
`,(0,D.jsxs)(r.ul,{children:[`
`,(0,D.jsxs)(r.li,{children:[(0,D.jsx)(r.a,{href:`/docs/components-forms-text-input--docs`,children:`Text Input`}),` – for single-line text input.`]}),`
`,(0,D.jsxs)(r.li,{children:[(0,D.jsx)(r.a,{href:`/docs/components-forms-character-count--docs`,children:`Character Count`}),` – communicates a character limit on a Text Area.`]}),`
`,(0,D.jsxs)(r.li,{children:[(0,D.jsx)(r.a,{href:`/docs/components-forms-field--docs`,children:`Field`}),` – wraps a Text Area with its Label, description, and Error Message.`]}),`
`]}),`
`,(0,D.jsx)(r.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,D.jsx)(f,{tokens:C})]})}function E(e={}){let{wrapper:t}={...l(),...e.components};return t?(0,D.jsx)(t,{...e,children:(0,D.jsx)(T,{...e})}):T(e)}var D;function O(){return(O=e((()=>{D=c(),u(),r(),d(),w(),g()})))()}O();export{E as default};