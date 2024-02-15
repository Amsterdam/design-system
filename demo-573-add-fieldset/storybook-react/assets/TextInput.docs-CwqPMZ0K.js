import{j as e}from"./jsx-runtime-CKrituN3.js";import{M as a,d as r,P as l,e as d,f as s}from"./index-DvLsbWST.js";import{T as p,P as c,I as h,D as m}from"./TextInput.stories-C_2rSoNp.js";import{useMDXComponents as o}from"./index-DI5IigMn.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-Bo_0Kfl5.js";import"../sb-preview/runtime.js";import"./index-BtM5VmRH.js";import"./index-Bw8VTzHM.js";import"./index-Cmc67Rxs.js";import"./index-DrFu-skq.js";import"./index.esm-wQpzMvPy.js";const u=`# Text Input

A form field in which a user can enter text.

## Guidelines

- Use a Text Input when users need to enter a single line of text, such as their name or phone number.
- Do not use a Text Input when users could provide more than 1 sentence of text.
- The width of the Text Input should be appropriate for the information to be entered.
- A Text Input must have a label, and in most cases, this label should be visible.
- Use \`spellcheck="false"\` for fields that may contain sensitive information, such as passwords and personal data.
  Some browser extensions for spell-checking send this information to external servers.
- Apply automatic assistance where possible.
  For example, in logged-in systems, pre-filling input can prevent errors and save time.
`;function i(t){const n=Object.assign({h2:"h2",h3:"h3",p:"p"},o(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:p}),`
`,e.jsx(r,{children:u}),`
`,e.jsx(l,{}),`
`,e.jsx(d,{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"placeholder",children:"Placeholder"}),`
`,e.jsx(n.p,{children:`It is possible to place placeholder text in the text input.
A placeholder should not contain crucial information.
Using a suggestion or example can help clarify something for the user.
Suggestions are not a substitute for an explanation or instruction provided in an error message or description.
Placeholder text disappears as soon as the user starts entering data.`}),`
`,e.jsx(s,{of:c}),`
`,e.jsx(n.h3,{id:"invalid",children:"Invalid"}),`
`,e.jsx(n.p,{children:`Whenever possible, use real-time validation of data when filling out forms.
Incorrectly filled input fields become visible immediately.`}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(n.h3,{id:"disabled",children:"Disabled"}),`
`,e.jsx(s,{of:m})]})}function A(t={}){const{wrapper:n}=Object.assign({},o(),t.components);return n?e.jsx(n,Object.assign({},t,{children:e.jsx(i,t)})):i(t)}export{A as default};
