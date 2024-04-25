import{j as e}from"./jsx-runtime-CKrituN3.js";import{useMDXComponents as t}from"./index-DSz_1G2r.js";import{M as r,d as a,P as l,e as d,f as s}from"./index-CFOMcm9F.js";import{I as h,P as p,a as c,D as m,F as u,b as x,E as f,N as j,T as b,U as g}from"./Input.stories-CQfyZHic.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-CQAlkiow.js";import"../sb-preview/runtime.js";import"./index-BtM5VmRH.js";import"./index-Dkj0J1ds.js";import"./index-BLcLG51Y.js";import"./index-DrFu-skq.js";import"./clsx-B-dksMZM.js";const v=`<!-- @license CC0-1.0 -->

# Input

A form field in which a user can enter text.

## Guidelines

- Use a Input when users need to enter a single line of text, such as their name or phone number.
- Do not use a Input when users could provide more than 1 sentence of text.
- The width of the Input should be appropriate for the information to be entered.
- A Input must have a label, and in most cases, this label should be visible.
- Use \`spellcheck="false"\` for fields that may contain sensitive information, such as passwords and personal data.
  Some browser extensions for spell-checking send this information to external servers.
- Apply automatic assistance where possible.
  For example, in logged-in systems, pre-filling input can prevent errors and save time.
`;function o(i){const n={h2:"h2",h3:"h3",p:"p",...t(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:h}),`
`,e.jsx(a,{children:v}),`
`,e.jsx(l,{}),`
`,e.jsx(d,{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"placeholder",children:"Placeholder"}),`
`,e.jsx(n.p,{children:`It is possible to place placeholder text in the text input.
A placeholder should not contain crucial information.
Using a suggestion or example can help clarify something for the user.
Suggestions are not a substitute for an explanation or instruction provided in an error message or description.
Placeholder text disappears as soon as the user starts entering data.`}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(n.h3,{id:"invalid",children:"Invalid"}),`
`,e.jsx(n.p,{children:`Whenever possible, use real-time validation of data when filling out forms.
Incorrectly filled input fields become visible immediately.`}),`
`,e.jsx(s,{of:c}),`
`,e.jsx(n.h3,{id:"disabled",children:"Disabled"}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(n.h3,{id:"file",children:"File"}),`
`,e.jsx(s,{of:u}),`
`,e.jsx(n.h3,{id:"password",children:"Password"}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(n.h3,{id:"email",children:"Email"}),`
`,e.jsx(s,{of:f}),`
`,e.jsx(n.h3,{id:"number",children:"Number"}),`
`,e.jsx(s,{of:j}),`
`,e.jsx(n.h3,{id:"telephone",children:"Telephone"}),`
`,e.jsx(s,{of:b}),`
`,e.jsx(n.h3,{id:"url",children:"URL"}),`
`,e.jsx(s,{of:g})]})}function N(i={}){const{wrapper:n}={...t(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(o,{...i})}):o(i)}export{N as default};
