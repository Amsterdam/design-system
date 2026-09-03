import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,d as n,h as r,i,n as a,p as o,u as s}from"./blocks-BQKRe05W.js";import{t as c}from"./jsx-runtime-ATHzeHXA.js";import{i as l,r as u}from"./react-Dyi61YEg.js";import{n as d,t as f}from"./DesignTokensTable-DVrJSakx.js";import{a as p,i as m,n as h,o as g,r as _,t as v}from"./PasswordInput.stories-_21ZR1V6.js";var y,b;function x(){return(x=e((()=>{y={"password-input":{"background-color":{$value:`{ams.inputs.background-color}`,$extensions:{"nl.amsterdam.type":`color`}},"border-color":{$value:`{ams.inputs.border-color}`,$extensions:{"nl.amsterdam.type":`color`}},"border-radius":{$value:`{ams.inputs.border-radius}`,$extensions:{"nl.amsterdam.type":`borderRadius`}},"border-style":{$value:`{ams.inputs.border-style}`,$extensions:{"nl.amsterdam.type":`borderStyle`}},"border-width":{$value:`{ams.inputs.border-width}`,$extensions:{"nl.amsterdam.type":`borderWidth`}},color:{$value:`{ams.inputs.color}`,$extensions:{"nl.amsterdam.type":`color`}},"font-family":{$value:`{ams.inputs.font-family}`,$extensions:{"nl.amsterdam.type":`fontFamily`}},"font-size":{$value:`{ams.inputs.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"font-weight":{$value:`{ams.inputs.font-weight}`,$extensions:{"nl.amsterdam.type":`fontWeight`}},"line-height":{$value:`{ams.inputs.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}},"outline-offset":{$value:`{ams.inputs.outline-offset}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-block":{$value:`{ams.inputs.padding-block}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-inline":{$value:`{ams.inputs.padding-inline}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},disabled:{"background-color":{$value:`{ams.inputs.disabled.background-color}`,$extensions:{"nl.amsterdam.type":`color`}},color:{$value:`{ams.inputs.disabled.color}`,$extensions:{"nl.amsterdam.type":`color`}},cursor:{$value:`{ams.cursor.disabled}`,$extensions:{"nl.amsterdam.type":`cursor`}}},hover:{"box-shadow":{$value:`{ams.inputs.hover.box-shadow}`,$extensions:{"nl.amsterdam.type":`shadow`}}},invalid:{"border-color":{$value:`{ams.inputs.invalid.border-color}`,$extensions:{"nl.amsterdam.type":`color`}},hover:{"border-color":{$value:`{ams.inputs.invalid.hover.border-color}`,$extensions:{"nl.amsterdam.type":`color`}},"box-shadow":{$value:`{ams.inputs.invalid.hover.box-shadow}`,$extensions:{"nl.amsterdam.type":`shadow`}}}},placeholder:{color:{$value:`{ams.inputs.placeholder.color}`,$extensions:{"nl.amsterdam.type":`color`}}}}},b={ams:y}})))()}function S(e){let r={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,ul:`ul`,...l(),...e.components};return(0,w.jsxs)(w.Fragment,{children:[`
`,`
`,`
`,`
`,(0,w.jsx)(s,{of:m}),`
`,(0,w.jsx)(o,{}),`
`,(0,w.jsx)(t,{of:m}),`
`,(0,w.jsx)(n,{}),`
`,(0,w.jsx)(i,{}),`
`,(0,w.jsx)(r.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,w.jsx)(r.h3,{id:`when-to-use`,children:`When to use`}),`
`,(0,w.jsx)(r.p,{children:`Use this component when the input requires sensitive information, like passwords or PINs.
It ensures that the input is not readable by others who might be looking at the screen.`}),`
`,(0,w.jsx)(r.h3,{id:`how-to-use`,children:`How to use`}),`
`,(0,w.jsx)(r.p,{children:`Consider setting the following attributes:`}),`
`,(0,w.jsxs)(r.ol,{children:[`
`,(0,w.jsxs)(r.li,{children:[`Allow the user’s password manager to automatically fill the password through `,(0,w.jsx)(r.code,{children:`autocomplete="current-password"`}),`.
When asking for a new password, use `,(0,w.jsx)(r.code,{children:`autocomplete="new-password"`}),` instead.`]}),`
`,(0,w.jsxs)(r.li,{children:[`Do not add a `,(0,w.jsx)(r.code,{children:`minlength`}),` attribute to ensure passwords meet a minimum length requirement.
This would prematurely indicate an error to the user – while they are still typing.`]}),`
`,(0,w.jsxs)(r.li,{children:[`Do not add a `,(0,w.jsx)(r.code,{children:`maxlength`}),` attribute either.
Users will not get any feedback when their text input has been truncated, e.g. after pasting from a password manager.`]}),`
`,(0,w.jsxs)(r.li,{children:[`If the password is a numeric PIN, add `,(0,w.jsx)(r.code,{children:`inputmode="numeric"`}),`.
Devices with virtual keyboards then switch to a numeric keypad layout which makes entering the password easier.`]}),`
`]}),`
`,(0,w.jsxs)(r.p,{children:[`Follow the `,(0,w.jsx)(r.a,{href:`https://design-system.service.gov.uk/patterns/passwords/`,rel:`nofollow`,children:`guidelines for asking for passwords`}),` of the GOV.UK Design System.`]}),`
`,(0,w.jsx)(r.p,{children:`Wrap a Password Input in a Field to associate it with a Label, description, and Error Message.`}),`
`,(0,w.jsx)(r.h2,{id:`examples`,children:`Examples`}),`
`,(0,w.jsx)(r.h3,{id:`size`,children:`Size`}),`
`,(0,w.jsxs)(r.p,{children:[`Match the width of the input to the expected length of its content.
Use the `,(0,w.jsx)(r.code,{children:`size`}),` attribute for this.
The input won’t grow beyond the width of its container.`]}),`
`,(0,w.jsx)(a,{of:p}),`
`,(0,w.jsx)(r.h3,{id:`disabled`,children:`Disabled`}),`
`,(0,w.jsx)(r.p,{children:`A field that cannot (yet) be used takes a grey background, and the masked value greys out with it.
It will not respond to interactions, e.g. with the mouse or keyboard.`}),`
`,(0,w.jsx)(a,{of:v}),`
`,(0,w.jsx)(r.h3,{id:`in-a-field`,children:`In a Field`}),`
`,(0,w.jsx)(r.p,{children:`Use a Field to group a Password Input with a Label, description and / or an Error Message.`}),`
`,(0,w.jsxs)(r.p,{children:[`If you don’t need the description, remove its Paragraph and the `,(0,w.jsx)(r.code,{children:`aria-describedby`}),` from the Password Input.`]}),`
`,(0,w.jsxs)(r.p,{children:[`Check `,(0,w.jsx)(r.a,{href:`/docs/components-forms-field--docs`,children:`the Field docs`}),` for more information on configuring it.`]}),`
`,(0,w.jsx)(a,{of:h}),`
`,(0,w.jsx)(r.h3,{id:`in-a-field-with-validation`,children:`In a Field with validation`}),`
`,(0,w.jsxs)(r.p,{children:[`If the Password Input can become invalid, add an Error Message and its `,(0,w.jsx)(r.code,{children:`id`}),` to the `,(0,w.jsx)(r.code,{children:`aria-describedby`}),` attribute of the Password Input.`]}),`
`,(0,w.jsxs)(r.p,{children:[`Check `,(0,w.jsx)(r.a,{href:`/docs/components-forms-field--docs`,children:`the Field docs`}),` for more information on configuring it.`]}),`
`,(0,w.jsx)(a,{of:_}),`
`,(0,w.jsx)(r.h2,{id:`features`,children:`Features`}),`
`,(0,w.jsx)(r.p,{children:`The characters entered are hidden, represented by squares.`}),`
`,(0,w.jsxs)(r.p,{children:[`This component sets `,(0,w.jsx)(r.code,{children:`autocorrect="off"`}),` and `,(0,w.jsx)(r.code,{children:`spellcheck="false"`}),` to stop browsers automatically changing user input.
Passwords shouldn’t be checked for spelling or grammar.
This may also prevent posting the password to third-party plugins.
These props cannot be overridden.`]}),`
`,(0,w.jsx)(r.h2,{id:`design`,children:`Design`}),`
`,(0,w.jsxs)(r.p,{children:[`A Password Input is identical to a `,(0,w.jsx)(r.a,{href:`/docs/components-forms-text-input--docs`,children:`Text Input`}),` in every respect a stylesheet controls: the same border, padding, type, width behaviour, and invalid and disabled states.
Only the masking marks it as different, and the browser draws that.`]}),`
`,(0,w.jsx)(r.p,{children:`There is no control to reveal what has been typed.
The component is the field and nothing more, so a service that wants a reveal button builds it beside the field rather than receiving one it cannot remove.`}),`
`,(0,w.jsx)(r.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,w.jsxs)(r.p,{children:[`A Password Input renders an `,(0,w.jsx)(r.code,{children:`input`}),` of type password, so the browser masks the value, keeps it out of autofill for ordinary fields, and lets a password manager recognise it.`]}),`
`,(0,w.jsx)(r.p,{children:`Its text direction is set to follow what is typed rather than the direction of the page.
A password made of characters from another script is then displayed the way it was entered instead of being reordered around it.`}),`
`,(0,w.jsxs)(r.p,{children:[`The `,(0,w.jsx)(r.code,{children:`invalid`}),` prop sets `,(0,w.jsx)(r.code,{children:`aria-invalid`}),` on the field, and that styling responds to the browser’s own `,(0,w.jsx)(r.code,{children:`:invalid`}),` state as well.
A password is incomplete for most of the time it is being typed, so a `,(0,w.jsx)(r.code,{children:`required`}),` or `,(0,w.jsx)(r.code,{children:`pattern`}),` attribute would mark the field red throughout; leave the state to your own validation and set it through `,(0,w.jsx)(r.code,{children:`invalid`}),`.`]}),`
`,(0,w.jsx)(r.h2,{id:`see-also`,children:`See also`}),`
`,(0,w.jsxs)(r.ul,{children:[`
`,(0,w.jsxs)(r.li,{children:[(0,w.jsx)(r.a,{href:`/docs/components-forms-text-input--docs`,children:`Text Input`}),` – for non-sensitive single-line text.`]}),`
`,(0,w.jsxs)(r.li,{children:[(0,w.jsx)(r.a,{href:`/docs/components-forms-field--docs`,children:`Field`}),` – wraps a Password Input with its Label, description, and Error Message.`]}),`
`]}),`
`,(0,w.jsx)(r.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,w.jsx)(f,{tokens:b})]})}function C(e={}){let{wrapper:t}={...l(),...e.components};return t?(0,w.jsx)(t,{...e,children:(0,w.jsx)(S,{...e})}):S(e)}var w;function T(){return(T=e((()=>{w=c(),u(),r(),d(),x(),g()})))()}T();export{C as default};