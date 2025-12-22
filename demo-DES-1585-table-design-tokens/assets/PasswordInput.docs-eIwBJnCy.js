import{j as e}from"./iframe-DxFJ3SCQ.js";import{useMDXComponents as r}from"./index-CdbzGJT0.js";import{M as i,f as a,P as d,h as l,i as o}from"./blocks-DPfOuimJ.js";import{a as h,S as c,I as u,b as p}from"./PasswordInput.stories-DfYbz-38.js";import{D as m}from"./DesignTokensTable-CKsYRah6.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CnyXa-QK.js";const f=`<!-- @license CC0-1.0 -->

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
`,w={"password-input":{"background-color":{value:"{ams.inputs.background-color}"},"border-color":{value:"{ams.inputs.border-color}"},"border-style":{value:"{ams.inputs.border-style}"},"border-width":{value:"{ams.inputs.border-width}"},color:{value:"{ams.inputs.color}"},"font-family":{value:"{ams.inputs.font-family}"},"font-size":{value:"{ams.inputs.font-size}"},"font-weight":{value:"{ams.inputs.font-weight}"},"line-height":{value:"{ams.inputs.line-height}"},"outline-offset":{value:"{ams.inputs.outline-offset}"},"padding-block":{value:"{ams.inputs.padding-block}"},"padding-inline":{value:"{ams.inputs.padding-inline}"},disabled:{color:{value:"{ams.inputs.disabled.color}"},cursor:{value:"{ams.cursor.disabled}"}},hover:{"box-shadow":{value:"{ams.inputs.hover.box-shadow}"}},invalid:{"border-color":{value:"{ams.inputs.invalid.border-color}"},hover:{"border-color":{value:"{ams.inputs.invalid.hover.border-color}"},"box-shadow":{value:"{ams.inputs.invalid.hover.box-shadow}"}}},placeholder:{color:{value:"{ams.inputs.placeholder.color}"}}}},g={ams:w};function t(s){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",...r(),...s.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,`
`,`
`,e.jsx(i,{of:h}),`
`,e.jsx(a,{children:f}),`
`,e.jsx(d,{}),`
`,e.jsx(l,{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"size",children:"Size"}),`
`,e.jsxs(n.p,{children:[`The size of the input should be appropriate for the information to be entered.
Use the `,e.jsx(n.code,{children:"size"})," attribute to set the right size."]}),`
`,e.jsx(o,{of:c}),`
`,e.jsx(n.h3,{id:"in-a-field",children:"In a Field"}),`
`,e.jsx(n.p,{children:"Use a Field to group a Password Input with a Label, description and / or an Error Message."}),`
`,e.jsxs(n.p,{children:["If you don’t need the description, remove its Paragraph and the ",e.jsx(n.code,{children:"aria-describedby"})," from the Password Input."]}),`
`,e.jsxs(n.p,{children:["Check ",e.jsx(n.a,{href:"/docs/components-forms-field--docs",children:"the Field docs"})," for more information on configuring it."]}),`
`,e.jsx(o,{of:u}),`
`,e.jsx(n.h3,{id:"in-a-field-with-validation",children:"In a Field with validation"}),`
`,e.jsxs(n.p,{children:["If the Password Input can become invalid, add an Error Message and its ",e.jsx(n.code,{children:"id"})," to the ",e.jsx(n.code,{children:"aria-describedby"})," attribute of the Password Input."]}),`
`,e.jsxs(n.p,{children:["Check ",e.jsx(n.a,{href:"/docs/components-forms-field--docs",children:"the Field docs"})," for more information on configuring it."]}),`
`,e.jsx(o,{of:p}),`
`,e.jsx(n.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsx(m,{tokens:g})]})}function P(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{P as default};
