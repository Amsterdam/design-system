import{j as e}from"./jsx-runtime-X2b_N9AH.js";import{useMDXComponents as r}from"./index-CRbi4mQH.js";import{M as o,d as a,P as d,e as l,f as s}from"./index-yC3zt0Ze.js";import{T as h,P as c,E as p,W as u,a as m,b as x,I as f,D as b}from"./TextInput.stories-DwGx192q.js";import"./index-uCp2LrAq.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-Dj2AtHu9.js";import"../sb-preview/runtime.js";import"./index-BOkhicXD.js";import"./index-DXimoRZY.js";import"./index-B8K4vdXH.js";import"./index-DrFu-skq.js";import"./TextInput-2kjh8O1z.js";import"./clsx-B-dksMZM.js";const j=`<!-- @license CC0-1.0 -->

# Text Input

A form field in which a user can enter text.

## Guidelines

- Use a Text Input when users need to enter a single line of text, such as their name or phone number.
- Do not use a Text Input when users could provide more than 1 sentence of text.
- The width of the Text Input should be appropriate for the information to be entered.
- A Text Input must have a Label, and in most cases, this label should be visible.
- Use \`spellcheck="false"\` for fields that may contain sensitive information, such as passwords and personal data.
  Some browser extensions for spell-checking send this information to external servers.
- Apply automatic assistance where possible.
  For example, in logged-in systems, pre-filling known values can prevent errors and save time.
`;/*@license CC0-1.0*/function t(i){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",ul:"ul",...r(),...i.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(o,{of:h}),`
`,e.jsx(a,{children:j}),`
`,e.jsx(d,{}),`
`,e.jsx(l,{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"type-password",children:"Type: Password"}),`
`,e.jsx(n.p,{children:`Creates an input where the user can enter a password.
The characters entered are hidden, usually represented by dots or asterisks, so that the actual text is not visible.`}),`
`,e.jsx(n.p,{children:`Use the password type when the input requires sensitive information, like passwords or PINs.
It ensures that the input is not readable by others who might be looking at the screen.`}),`
`,e.jsx(n.p,{children:"Guidelines:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Allow the user’s password manager to automatically enter the password through ",e.jsx(n.code,{children:'autocomplete="current-password"'}),`.
When asking for a new password, use `,e.jsx(n.code,{children:'autocomplete="new-password"'})," instead."]}),`
`,e.jsxs(n.li,{children:["Add a ",e.jsx(n.code,{children:"minlength"})," attribute to ensure passwords meet a minimum length requirement."]}),`
`,e.jsxs(n.li,{children:["Use the ",e.jsx(n.code,{children:"pattern"})," attribute to enforce password policies, like including numbers and special characters."]}),`
`,e.jsxs(n.li,{children:["If the password is a numeric PIN, add ",e.jsx(n.code,{children:'inputmode="numeric"'}),`.
Devices with virtual keyboards then switch to a numeric keypad layout which makes entering the password easier.`]}),`
`]}),`
`,e.jsx(s,{of:c}),`
`,e.jsx(n.h3,{id:"type-email-address",children:"Type: Email address"}),`
`,e.jsx(n.p,{children:`This field helps the user enter an email address.
It has built-in validation to check for a valid email format.
However, do not rely only on the browser’s validation.`}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"email"}),` input field looks like a standard text input.
On some devices, it may show an email-specific keyboard.`]}),`
`,e.jsx(n.p,{children:"Guidelines:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Set ",e.jsx(n.code,{children:'autocomplete="email"'})," to help browsers autofill the user’s email address."]}),`
`,e.jsxs(n.li,{children:["Use the ",e.jsx(n.code,{children:"required"})," attribute to make sure the field is filled before the form is submitted."]}),`
`]}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(n.h3,{id:"type-web-address",children:"Type: Web address"}),`
`,e.jsx(n.p,{children:`This field helps the user enter an web address or URL.
It has built-in validation to check for a valid format.
However, do not rely only on the browser’s validation.`}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"url"}),` input field looks like a standard text input.
On some devices, it may show a URL-specific keyboard to aid in entering web addresses.`]}),`
`,e.jsx(s,{of:u}),`
`,e.jsx(n.h3,{id:"type-phone-number",children:"Type: Phone number"}),`
`,e.jsx(n.p,{children:`This field helps the user enter a phone number.
It has built-in validation to check for a valid format.
However, do not rely only on the browser’s validation.`}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"tel"}),` input field looks like a standard text input.
On mobile devices, it may display a numeric keypad or a keyboard optimized for entering phone numbers.`]}),`
`,e.jsx(n.p,{children:"Guidelines:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Set ",e.jsx(n.code,{children:'autocomplete="tel"'})," to help browsers autofill the user’s phone number."]}),`
`,e.jsxs(n.li,{children:["Use the ",e.jsx(n.code,{children:"required"})," attribute to make sure the field is filled before the form is submitted."]}),`
`]}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(n.h3,{id:"placeholder",children:"Placeholder"}),`
`,e.jsx(n.p,{children:"This text appears in the field when it is empty."}),`
`,e.jsx(n.p,{children:`Placeholder text can give a brief hint about the kind of data to enter.
Use a word or short phrase that suggests the expected data.
Do not use a full explanation or prompt.`}),`
`,e.jsxs(n.p,{children:["Do not use placeholders instead of a ",e.jsx(n.a,{href:"?path=/docs/components-forms-label--docs",children:"Label"}),`.
Placeholders disappear when the field is filled.
This makes it hard for the user to remember what they need to enter, reducing usability and accessibility.`]}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(n.h3,{id:"invalid",children:"Invalid"}),`
`,e.jsxs(n.p,{children:[`Indicates that the input value does not meet the specified constraints.
The border of an invalid input is red.
An `,e.jsx(n.a,{href:"?path=/docs/components-forms-error-message--docs",children:"Error Message"}),` must be displayed above the field.
To highlight the error even more, the parent `,e.jsx(n.a,{href:"?path=/docs/components-forms-field--docs",children:"Field"})," component’s ",e.jsx(n.code,{children:"invalid"})," prop must also be set."]}),`
`,e.jsx(s,{of:f}),`
`,e.jsx(n.h3,{id:"disabled",children:"Disabled"}),`
`,e.jsx(n.p,{children:`A field that can not (yet) be used is indicated with a grey border.
It will not respond to interactions, e.g. with the mouse or keyboard.`}),`
`,e.jsx(n.p,{children:`Avoid disabling input fields.
They cause usability and accessibility problems.`}),`
`,e.jsx(n.p,{children:`Disabled fields are often skipped by screen readers.
This makes it hard for the user who rely on assistive technologies to understand the form’s content.
They are not included in form submissions, which can lead to incomplete or missing data.`}),`
`,e.jsx(n.p,{children:"Alternatives:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Use the ",e.jsx(n.code,{children:"readonly"}),` attribute.
This makes a field uneditable but keeps it accessible and included in form submissions.`]}),`
`,e.jsxs(n.li,{children:["Display data as plain text or within a non-input element like a ",e.jsx(n.code,{children:"span"})," or ",e.jsx(n.code,{children:"div"}),"."]}),`
`,e.jsx(n.li,{children:`Use conditional logic to hide or show fields based on user interaction.
This ensures all necessary fields are accessible and editable when needed.`}),`
`,e.jsx(n.li,{children:`Use a label or text to explain why a field is not editable if you must disable it temporarily.
This helps the user understand the context.`}),`
`]}),`
`,e.jsx(s,{of:b}),`
`,e.jsx(n.h2,{id:"further-reading",children:"Further reading"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Extensive ",e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text",rel:"nofollow",children:"guidelines for all types of input"})," on Mozilla Developer Network."]}),`
`,e.jsxs(n.li,{children:["An overview of ",e.jsx(n.a,{href:"https://nl-design-system.github.io/utrecht/storybook/?path=/docs/react_react-textbox--docs",rel:"nofollow",children:"suitable metadata for various kinds of content"})," to be entered by Gemeente Utrecht."]}),`
`]})]})}function L(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{L as default};
