import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./jsx-runtime-BCDDjCIb.js";import{b as n,d as r,f as i,g as a,i as o,m as s,o as c,s as l}from"./iframe-0Pt48Yob.js";import{n as u,t as d}from"./DesignTokensTable-DdHdYyHg.js";import{t as f}from"./mdx-react-shim-C9XLmIzG.js";import{Disabled as p,Grouped as m,InAField as h,InAFieldWithValidation as g,Invalid as _,n as v,t as y}from"./Select.stories-DhpN57jx.js";var b,x,S=e((()=>{b={select:{"background-color":{$value:`{ams.inputs.background-color}`,$extensions:{"nl.amsterdam.type":`color`}},"background-image":{$value:`url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><path fill='%23004699' fill-rule='evenodd' d='m16 25.757-16-16 2.91-2.9L16 19.937l13.09-13.08 2.91 2.9z'/></svg>")`,$extensions:{"nl.amsterdam.type":`backgroundImage`}},"background-position":{$value:`right {ams.space.m} center`,$extensions:{"nl.amsterdam.type":`backgroundPosition`}},"border-color":{$value:`{ams.inputs.border-color}`,$extensions:{"nl.amsterdam.type":`color`}},"border-style":{$value:`{ams.inputs.border-style}`,$extensions:{"nl.amsterdam.type":`borderStyle`}},"border-width":{$value:`{ams.inputs.border-width}`,$extensions:{"nl.amsterdam.type":`borderWidth`}},color:{$value:`{ams.inputs.color}`,$extensions:{"nl.amsterdam.type":`color`}},"font-family":{$value:`{ams.inputs.font-family}`,$extensions:{"nl.amsterdam.type":`fontFamily`}},"font-size":{$value:`{ams.inputs.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"font-weight":{$value:`{ams.inputs.font-weight}`,$extensions:{"nl.amsterdam.type":`fontWeight`}},"line-height":{$value:`{ams.inputs.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}},"outline-offset":{$value:`{ams.inputs.outline-offset}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-block":{$value:`{ams.inputs.padding-block}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-inline":{$value:`{ams.inputs.padding-inline} calc(2 * {ams.inputs.padding-inline} + 1em)`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},disabled:{"background-image":{$value:`url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><path fill='%23767676' fill-rule='evenodd' d='m16 25.757-16-16 2.91-2.9L16 19.937l13.09-13.08 2.91 2.9z'/></svg>")`,$extensions:{"nl.amsterdam.type":`backgroundImage`}},color:{$value:`{ams.inputs.disabled.color}`,$extensions:{"nl.amsterdam.type":`color`}},cursor:{$value:`{ams.cursor.disabled}`,$extensions:{"nl.amsterdam.type":`cursor`}}},hover:{"box-shadow":{$value:`{ams.inputs.hover.box-shadow}`,$extensions:{"nl.amsterdam.type":`shadow`}},"background-image":{$value:`url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><path fill='%23003677' fill-rule='evenodd' d='m16 25.757-16-16 2.91-2.9L16 19.937l13.09-13.08 2.91 2.9z'/></svg>")`,$extensions:{"nl.amsterdam.type":`backgroundImage`}}},invalid:{"border-color":{$value:`{ams.inputs.invalid.border-color}`,$extensions:{"nl.amsterdam.type":`color`}},hover:{"border-color":{$value:`{ams.inputs.invalid.hover.border-color}`,$extensions:{"nl.amsterdam.type":`color`}},"box-shadow":{$value:`{ams.inputs.invalid.hover.box-shadow}`,$extensions:{"nl.amsterdam.type":`shadow`}}}},option:{disabled:{color:{$value:`{ams.color.interactive.disabled}`,$extensions:{"nl.amsterdam.type":`color`}}}}}},x={ams:b}}));function C(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...n(),...e.components};return(0,T.jsxs)(T.Fragment,{children:[`
`,`
`,`
`,`
`,(0,T.jsx)(r,{of:y}),`
`,(0,T.jsx)(s,{}),`
`,(0,T.jsx)(l,{of:y}),`
`,(0,T.jsx)(i,{}),`
`,(0,T.jsx)(c,{}),`
`,(0,T.jsx)(t.h2,{id:`subcomponents`,children:`Subcomponents`}),`
`,(0,T.jsxs)(t.p,{children:[`Provide the choices of the Select with Option subcomponents, and group related choices with a Group.
They render the native `,(0,T.jsx)(t.code,{children:`<option>`}),` and `,(0,T.jsx)(t.code,{children:`<optgroup>`}),` elements and accept their standard attributes only.`]}),`
`,(0,T.jsx)(t.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,T.jsx)(t.h3,{id:`when-to-use`,children:`When to use`}),`
`,(0,T.jsx)(t.p,{children:`Use a Select when the user must pick one option from a list that is too long to display as Radios.`}),`
`,(0,T.jsx)(t.h3,{id:`when-not-to-use`,children:`When not to use`}),`
`,(0,T.jsxs)(t.p,{children:[`Avoid adding functionality to allow selecting multiple options.
Multi select is harder to use on desktop as they require the user to hold down the `,(0,T.jsx)(t.code,{children:`Ctrl`}),` or `,(0,T.jsx)(t.code,{children:`Cmd`}),` key while clicking on the options.
It is recommended to use checkboxes instead.`]}),`
`,(0,T.jsx)(t.h3,{id:`how-to-use`,children:`How to use`}),`
`,(0,T.jsx)(t.p,{children:`Wrap a Select in a Field to associate it with a Label, description, and Error Message.`}),`
`,(0,T.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,T.jsx)(t.h3,{id:`grouped`,children:`Grouped`}),`
`,(0,T.jsxs)(t.p,{children:[`Use the `,(0,T.jsx)(t.code,{children:`Select.Group`}),` component to group options.
The component requires a `,(0,T.jsx)(t.code,{children:`label`}),` attribute.`]}),`
`,(0,T.jsx)(o,{of:m}),`
`,(0,T.jsx)(t.h3,{id:`invalid`,children:`Invalid`}),`
`,(0,T.jsx)(o,{of:_}),`
`,(0,T.jsx)(t.h3,{id:`disabled`,children:`Disabled`}),`
`,(0,T.jsx)(o,{of:p}),`
`,(0,T.jsx)(t.h3,{id:`in-a-field`,children:`In a Field`}),`
`,(0,T.jsx)(t.p,{children:`Use a Field to group a Select with a Label, description and / or an Error Message.`}),`
`,(0,T.jsxs)(t.p,{children:[`If you don’t need the description, remove its Paragraph and the `,(0,T.jsx)(t.code,{children:`aria-describedby`}),` from the Select.`]}),`
`,(0,T.jsxs)(t.p,{children:[`Check `,(0,T.jsx)(t.a,{href:`/docs/components-forms-field--docs`,children:`the Field docs`}),` for more information on configuring it.`]}),`
`,(0,T.jsx)(o,{of:h}),`
`,(0,T.jsx)(t.h3,{id:`in-a-field-with-validation`,children:`In a Field with validation`}),`
`,(0,T.jsxs)(t.p,{children:[`If the Select can become invalid, add an Error Message and its `,(0,T.jsx)(t.code,{children:`id`}),` to the `,(0,T.jsx)(t.code,{children:`aria-describedby`}),` attribute of the Select.`]}),`
`,(0,T.jsxs)(t.p,{children:[`Check `,(0,T.jsx)(t.a,{href:`/docs/components-forms-field--docs`,children:`the Field docs`}),` for more information on configuring it.`]}),`
`,(0,T.jsx)(o,{of:g}),`
`,(0,T.jsx)(t.h2,{id:`see-also`,children:`See also`}),`
`,(0,T.jsxs)(t.ul,{children:[`
`,(0,T.jsxs)(t.li,{children:[(0,T.jsx)(t.a,{href:`/docs/components-forms-checkbox--docs`,children:`Checkbox`}),` – use for multi-select interactions instead of a multi-Select.`]}),`
`,(0,T.jsxs)(t.li,{children:[(0,T.jsx)(t.a,{href:`/docs/components-forms-radio--docs`,children:`Radio`}),` – for short lists where one option must be selected.`]}),`
`,(0,T.jsxs)(t.li,{children:[(0,T.jsx)(t.a,{href:`/docs/components-forms-field--docs`,children:`Field`}),` – wraps a Select with its Label, description, and Error Message.`]}),`
`]}),`
`,(0,T.jsx)(t.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,T.jsx)(d,{tokens:x})]})}function w(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,T.jsx)(t,{...e,children:(0,T.jsx)(C,{...e})}):C(e)}var T;e((()=>{T=t(),f(),a(),u(),S(),v()}))();export{w as default};