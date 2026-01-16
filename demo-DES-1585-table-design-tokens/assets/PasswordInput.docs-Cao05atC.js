import{j as e}from"./iframe-NJNNErvG.js";import{useMDXComponents as i}from"./index-BLAatrER.js";import{M as r,f as a,P as d,h as l,i as t}from"./blocks-BUe834th.js";import{a as p,S as h,I as c,b as m}from"./PasswordInput.stories-C6tO7mTA.js";import{D as u}from"./DesignTokensTable-DTPzf4op.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bgx61uKl.js";import"./BorderSample-Cz8bjDPR.js";import"./formatTokenValue-BYjgZrXg.js";import"./ColorSample-CHAK4YL5.js";import"./SpaceSample-k1pW6d8h.js";import"./TypographySample-DNbZKg3I.js";const f=`<!-- @license CC0-1.0 -->

# Password Input

Helps users enter a password.

## Guidelines

- Use this component when the input requires sensitive information, like passwords or PINs.
  It ensures that the input is not readable by others who might be looking at the screen.
- The characters entered are hidden, represented by squares.

This component sets \`autocorrect="off"\` and \`spellcheck="false"\` to stop browsers automatically changing user input.
Passwords shouldn’t be checked for spelling or grammar.
This may also prevent posting the password to third-party plugins.
These props cannot be overridden.

Consider setting the following attributes:

1. Allow the user’s password manager to automatically fill the password through \`autocomplete="current-password"\`.
   When asking for a new password, use \`autocomplete="new-password"\` instead.
2. Do not add a \`minlength\` attribute to ensure passwords meet a minimum length requirement.
   This would prematurely indicate an error to the user – while they are still typing.
3. Do not add a \`maxlength\` attribute either.
   Users will not get any feedback when their text input has been truncated, e.g. after pasting from a password manager.
4. If the password is a numeric PIN, add \`inputmode="numeric"\`.
   Devices with virtual keyboards then switch to a numeric keypad layout which makes entering the password easier.

Follow the [guidelines for asking for passwords](https://design-system.service.gov.uk/patterns/passwords/) of the GOV.UK Design System.
`,g={"password-input":{"background-color":{$value:"{ams.inputs.background-color}",$type:"color"},"border-color":{$value:"{ams.inputs.border-color}",$type:"color"},"border-style":{$value:"{ams.inputs.border-style}",$extensions:{"amsterdam.designsystem.type":"borderStyle"}},"border-width":{$value:"{ams.inputs.border-width}",$extensions:{"amsterdam.designsystem.type":"borderWidth"}},color:{$value:"{ams.inputs.color}",$type:"color"},"font-family":{$value:"{ams.inputs.font-family}",$type:"fontFamily"},"font-size":{$value:"{ams.inputs.font-size}",$extensions:{"amsterdam.designsystem.type":"fontSize"}},"font-weight":{$value:"{ams.inputs.font-weight}",$type:"fontWeight"},"line-height":{$value:"{ams.inputs.line-height}",$extensions:{"amsterdam.designsystem.type":"lineHeight"}},"outline-offset":{$value:"{ams.inputs.outline-offset}",$type:"dimension",$extensions:{"amsterdam.designsystem.subtype":"space"}},"padding-block":{$value:"{ams.inputs.padding-block}",$type:"dimension",$extensions:{"amsterdam.designsystem.subtype":"space"}},"padding-inline":{$value:"{ams.inputs.padding-inline}",$type:"dimension",$extensions:{"amsterdam.designsystem.subtype":"space"}},disabled:{color:{$value:"{ams.inputs.disabled.color}",$type:"color"},cursor:{$value:"{ams.cursor.disabled}"}},hover:{"box-shadow":{$value:"{ams.inputs.hover.box-shadow}"}},invalid:{"border-color":{$value:"{ams.inputs.invalid.border-color}",$type:"color"},hover:{"border-color":{$value:"{ams.inputs.invalid.hover.border-color}",$type:"color"},"box-shadow":{$value:"{ams.inputs.invalid.hover.box-shadow}"}}},placeholder:{color:{$value:"{ams.inputs.placeholder.color}",$type:"color"}}}},y={ams:g};function o(n){const s={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",...i(),...n.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,`
`,`
`,e.jsx(r,{of:p}),`
`,e.jsx(a,{children:f}),`
`,e.jsx(d,{}),`
`,e.jsx(l,{}),`
`,e.jsx(s.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(s.h3,{id:"size",children:"Size"}),`
`,e.jsxs(s.p,{children:[`The size of the input should be appropriate for the information to be entered.
Use the `,e.jsx(s.code,{children:"size"})," attribute to set the right size."]}),`
`,e.jsx(t,{of:h}),`
`,e.jsx(s.h3,{id:"in-a-field",children:"In a Field"}),`
`,e.jsx(s.p,{children:"Use a Field to group a Password Input with a Label, description and / or an Error Message."}),`
`,e.jsxs(s.p,{children:["If you don’t need the description, remove its Paragraph and the ",e.jsx(s.code,{children:"aria-describedby"})," from the Password Input."]}),`
`,e.jsxs(s.p,{children:["Check ",e.jsx(s.a,{href:"/docs/components-forms-field--docs",children:"the Field docs"})," for more information on configuring it."]}),`
`,e.jsx(t,{of:c}),`
`,e.jsx(s.h3,{id:"in-a-field-with-validation",children:"In a Field with validation"}),`
`,e.jsxs(s.p,{children:["If the Password Input can become invalid, add an Error Message and its ",e.jsx(s.code,{children:"id"})," to the ",e.jsx(s.code,{children:"aria-describedby"})," attribute of the Password Input."]}),`
`,e.jsxs(s.p,{children:["Check ",e.jsx(s.a,{href:"/docs/components-forms-field--docs",children:"the Field docs"})," for more information on configuring it."]}),`
`,e.jsx(t,{of:m}),`
`,e.jsx(s.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsx(u,{tokens:y})]})}function M(n={}){const{wrapper:s}={...i(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(o,{...n})}):o(n)}export{M as default};
