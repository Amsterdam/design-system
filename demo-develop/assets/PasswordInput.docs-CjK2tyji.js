import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-BqsN2jGA.js";import{b as n,d as r,f as i,g as a,i as o,m as s,o as c,s as l}from"./iframe-Cab0WFT6.js";import{n as u,t as d}from"./DesignTokensTable-BCGoVRQW.js";import{t as f}from"./mdx-react-shim-X84GVmTP.js";import{InAField as p,InAFieldWithValidation as m,Size as h,n as g,t as _}from"./PasswordInput.stories-AiuQcI4Q.js";var v,y,b=e((()=>{v={"password-input":{"background-color":{$value:`{ams.inputs.background-color}`,$extensions:{"nl.amsterdam.type":`color`}},"border-color":{$value:`{ams.inputs.border-color}`,$extensions:{"nl.amsterdam.type":`color`}},"border-style":{$value:`{ams.inputs.border-style}`,$extensions:{"nl.amsterdam.type":`borderStyle`}},"border-width":{$value:`{ams.inputs.border-width}`,$extensions:{"nl.amsterdam.type":`borderWidth`}},color:{$value:`{ams.inputs.color}`,$extensions:{"nl.amsterdam.type":`color`}},"font-family":{$value:`{ams.inputs.font-family}`,$extensions:{"nl.amsterdam.type":`fontFamily`}},"font-size":{$value:`{ams.inputs.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"font-weight":{$value:`{ams.inputs.font-weight}`,$extensions:{"nl.amsterdam.type":`fontWeight`}},"line-height":{$value:`{ams.inputs.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}},"outline-offset":{$value:`{ams.inputs.outline-offset}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-block":{$value:`{ams.inputs.padding-block}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-inline":{$value:`{ams.inputs.padding-inline}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},disabled:{color:{$value:`{ams.inputs.disabled.color}`,$extensions:{"nl.amsterdam.type":`color`}},cursor:{$value:`{ams.cursor.disabled}`,$extensions:{"nl.amsterdam.type":`cursor`}}},hover:{"box-shadow":{$value:`{ams.inputs.hover.box-shadow}`,$extensions:{"nl.amsterdam.type":`shadow`}}},invalid:{"border-color":{$value:`{ams.inputs.invalid.border-color}`,$extensions:{"nl.amsterdam.type":`color`}},hover:{"border-color":{$value:`{ams.inputs.invalid.hover.border-color}`,$extensions:{"nl.amsterdam.type":`color`}},"box-shadow":{$value:`{ams.inputs.invalid.hover.box-shadow}`,$extensions:{"nl.amsterdam.type":`shadow`}}}},placeholder:{color:{$value:`{ams.inputs.placeholder.color}`,$extensions:{"nl.amsterdam.type":`color`}}}}},y={ams:v}}));function x(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,ul:`ul`,...n(),...e.components};return(0,C.jsxs)(C.Fragment,{children:[`
`,`
`,`
`,`
`,(0,C.jsx)(r,{of:_}),`
`,(0,C.jsx)(s,{}),`
`,(0,C.jsx)(l,{of:_}),`
`,(0,C.jsx)(i,{}),`
`,(0,C.jsx)(c,{}),`
`,(0,C.jsx)(t.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,C.jsx)(t.h3,{id:`when-to-use`,children:`When to use`}),`
`,(0,C.jsx)(t.p,{children:`Use this component when the input requires sensitive information, like passwords or PINs.
It ensures that the input is not readable by others who might be looking at the screen.`}),`
`,(0,C.jsx)(t.h3,{id:`how-to-use`,children:`How to use`}),`
`,(0,C.jsx)(t.p,{children:`Consider setting the following attributes:`}),`
`,(0,C.jsxs)(t.ol,{children:[`
`,(0,C.jsxs)(t.li,{children:[`Allow the user’s password manager to automatically fill the password through `,(0,C.jsx)(t.code,{children:`autocomplete="current-password"`}),`.
When asking for a new password, use `,(0,C.jsx)(t.code,{children:`autocomplete="new-password"`}),` instead.`]}),`
`,(0,C.jsxs)(t.li,{children:[`Do not add a `,(0,C.jsx)(t.code,{children:`minlength`}),` attribute to ensure passwords meet a minimum length requirement.
This would prematurely indicate an error to the user – while they are still typing.`]}),`
`,(0,C.jsxs)(t.li,{children:[`Do not add a `,(0,C.jsx)(t.code,{children:`maxlength`}),` attribute either.
Users will not get any feedback when their text input has been truncated, e.g. after pasting from a password manager.`]}),`
`,(0,C.jsxs)(t.li,{children:[`If the password is a numeric PIN, add `,(0,C.jsx)(t.code,{children:`inputmode="numeric"`}),`.
Devices with virtual keyboards then switch to a numeric keypad layout which makes entering the password easier.`]}),`
`]}),`
`,(0,C.jsxs)(t.p,{children:[`Follow the `,(0,C.jsx)(t.a,{href:`https://design-system.service.gov.uk/patterns/passwords/`,rel:`nofollow`,children:`guidelines for asking for passwords`}),` of the GOV.UK Design System.`]}),`
`,(0,C.jsx)(t.p,{children:`Wrap a Password Input in a Field to associate it with a Label, description, and Error Message.`}),`
`,(0,C.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,C.jsx)(t.h3,{id:`size`,children:`Size`}),`
`,(0,C.jsxs)(t.p,{children:[`Match the width of the input to the expected length of its content.
Use the `,(0,C.jsx)(t.code,{children:`size`}),` attribute for this.
The input won’t grow beyond the width of its container.`]}),`
`,(0,C.jsx)(o,{of:h}),`
`,(0,C.jsx)(t.h3,{id:`in-a-field`,children:`In a Field`}),`
`,(0,C.jsx)(t.p,{children:`Use a Field to group a Password Input with a Label, description and / or an Error Message.`}),`
`,(0,C.jsxs)(t.p,{children:[`If you don’t need the description, remove its Paragraph and the `,(0,C.jsx)(t.code,{children:`aria-describedby`}),` from the Password Input.`]}),`
`,(0,C.jsxs)(t.p,{children:[`Check `,(0,C.jsx)(t.a,{href:`/docs/components-forms-field--docs`,children:`the Field docs`}),` for more information on configuring it.`]}),`
`,(0,C.jsx)(o,{of:p}),`
`,(0,C.jsx)(t.h3,{id:`in-a-field-with-validation`,children:`In a Field with validation`}),`
`,(0,C.jsxs)(t.p,{children:[`If the Password Input can become invalid, add an Error Message and its `,(0,C.jsx)(t.code,{children:`id`}),` to the `,(0,C.jsx)(t.code,{children:`aria-describedby`}),` attribute of the Password Input.`]}),`
`,(0,C.jsxs)(t.p,{children:[`Check `,(0,C.jsx)(t.a,{href:`/docs/components-forms-field--docs`,children:`the Field docs`}),` for more information on configuring it.`]}),`
`,(0,C.jsx)(o,{of:m}),`
`,(0,C.jsx)(t.h2,{id:`features`,children:`Features`}),`
`,(0,C.jsx)(t.p,{children:`The characters entered are hidden, represented by squares.`}),`
`,(0,C.jsxs)(t.p,{children:[`This component sets `,(0,C.jsx)(t.code,{children:`autocorrect="off"`}),` and `,(0,C.jsx)(t.code,{children:`spellcheck="false"`}),` to stop browsers automatically changing user input.
Passwords shouldn’t be checked for spelling or grammar.
This may also prevent posting the password to third-party plugins.
These props cannot be overridden.`]}),`
`,(0,C.jsx)(t.h2,{id:`see-also`,children:`See also`}),`
`,(0,C.jsxs)(t.ul,{children:[`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.a,{href:`/docs/components-forms-text-input--docs`,children:`Text Input`}),` – for non-sensitive single-line text.`]}),`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.a,{href:`/docs/components-forms-field--docs`,children:`Field`}),` – wraps a Password Input with its Label, description, and Error Message.`]}),`
`]}),`
`,(0,C.jsx)(t.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,C.jsx)(d,{tokens:y})]})}function S(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,C.jsx)(t,{...e,children:(0,C.jsx)(x,{...e})}):x(e)}var C;e((()=>{C=t(),f(),a(),u(),b(),g()}))();export{S as default};