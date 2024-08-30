import{j as e}from"./jsx-runtime-BlAj40OV.js";import{useMDXComponents as r}from"./index-BI1Biiay.js";import{ae as o,ak as a,al as i,am as p}from"./index-CGTTrZB_.js";import{P as d}from"./PasswordInput.stories-CiClnFuu.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-uZvklSem.js";import"../sb-preview/runtime.js";import"./index-BU4L-DQy.js";import"./index-D-8MO0q_.js";import"./index-nrpnv_Jx.js";import"./index-DrFu-skq.js";import"./clsx-B-dksMZM.js";const m=`<!-- @license CC0-1.0 -->

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
`;/*@license CC0-1.0*/function s(t){return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(o,{of:d}),`
`,e.jsx(a,{children:m}),`
`,e.jsx(i,{}),`
`,e.jsx(p,{})]})}function v(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s()}export{v as default};
