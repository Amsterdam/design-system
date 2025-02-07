import{j as e}from"./jsx-runtime-z8MfsBtr.js";import{useMDXComponents as o}from"./index-BAvqEBP-.js";import{M as i,e as a,P as d,f as h,h as t}from"./index-wroGQ5tU.js";import{P as p,I as c,a as l}from"./PasswordInput.stories-Dl3M937Y.js";import"./index-C9rmetsa.js";import"./index-D7uoVdV3.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-Cn6aGhu7.js";import"./index-D-OUEn-9.js";import"./index-Cu4lwwaE.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";import"./index.esm-IMHYXOZR.js";import"./clsx-B-dksMZM.js";import"./index.esm-CQm4RKjO.js";const m=`<!-- @license CC0-1.0 -->

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
`;/*@license CC0-1.0*/function r(s){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",...o(),...s.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(i,{of:p}),`
`,e.jsx(a,{children:m}),`
`,e.jsx(d,{}),`
`,e.jsx(h,{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"in-a-field",children:"In a Field"}),`
`,e.jsx(n.p,{children:"Use a Field to group a Password Input with a Label, description and / or an Error Message."}),`
`,e.jsxs(n.p,{children:["If you don’t need the description, remove its Paragraph and the ",e.jsx(n.code,{children:"aria-describedby"})," from the Password Input."]}),`
`,e.jsxs(n.p,{children:["Check ",e.jsx(n.a,{href:"/docs/components-forms-field--docs",children:"the Field docs"})," for more information on configuring it."]}),`
`,e.jsx(t,{of:c}),`
`,e.jsx(n.h3,{id:"in-a-field-with-validation",children:"In a Field with validation"}),`
`,e.jsxs(n.p,{children:["If the Password Input can become invalid, add an Error Message and its ",e.jsx(n.code,{children:"id"})," to the ",e.jsx(n.code,{children:"aria-describedby"})," attribute of the Password Input."]}),`
`,e.jsxs(n.p,{children:["Check ",e.jsx(n.a,{href:"/docs/components-forms-field--docs",children:"the Field docs"})," for more information on configuring it."]}),`
`,e.jsx(t,{of:l})]})}function D(s={}){const{wrapper:n}={...o(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{D as default};
