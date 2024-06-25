import{j as e}from"./jsx-runtime-X2b_N9AH.js";import{useMDXComponents as o}from"./index-CRbi4mQH.js";import{M as r,d as l,P as a,e as d,f as n}from"./index-CL9iXLRD.js";import{T as h,P as c,E as p,W as u,a as m,b as x,I as f,D as j}from"./TextInput.stories-CZkNrVUi.js";import"./index-uCp2LrAq.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-QZ-VIcnZ.js";import"../sb-preview/runtime.js";import"./index-BOkhicXD.js";import"./index-DXimoRZY.js";import"./index-B8K4vdXH.js";import"./index-DrFu-skq.js";import"./TextInput-2kjh8O1z.js";import"./clsx-B-dksMZM.js";const b=`<!-- @license CC0-1.0 -->

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
`;/*@license CC0-1.0*/function i(t){const s={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(r,{of:h}),`
`,e.jsx(l,{children:b}),`
`,e.jsx(a,{}),`
`,e.jsx(d,{}),`
`,e.jsx(s.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(s.h3,{id:"type-password",children:"Type: Password"}),`
`,e.jsx(s.p,{children:`Creates an input where the user can enter a password.
The characters entered are hidden, usually represented by dots or asterisks, so that the actual text is not visible.`}),`
`,e.jsx(s.p,{children:`Use the password type when the input requires sensitive information, like passwords or PINs.
It ensures that the input is not readable by others who might be looking at the screen.`}),`
`,e.jsx(s.p,{children:"Consider setting the following attributes:"}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:["Allow the user’s password manager to automatically fill the password through ",e.jsx(s.code,{children:'autocomplete="current-password"'}),`.
When asking for a new password, use `,e.jsx(s.code,{children:'autocomplete="new-password"'})," instead."]}),`
`,e.jsxs(s.li,{children:["Add a ",e.jsx(s.code,{children:"minlength"}),` attribute to ensure passwords meet a minimum length requirement.
Do not add a `,e.jsx(s.code,{children:"maxlength"})," attribute."]}),`
`,e.jsxs(s.li,{children:["Use the ",e.jsx(s.code,{children:"pattern"}),` attribute to enforce password policies, like including numbers and special characters.
Describe these policies in the `,e.jsx(s.a,{href:"?path=/docs/components-forms-field--docs",children:"Field"}),"’s description as well."]}),`
`,e.jsxs(s.li,{children:["If the password is a numeric PIN, add ",e.jsx(s.code,{children:'inputmode="numeric"'}),`.
Devices with virtual keyboards then switch to a numeric keypad layout which makes entering the password easier.`]}),`
`,e.jsxs(s.li,{children:["Set ",e.jsx(s.code,{children:'autocapitalize="none"'}),", ",e.jsx(s.code,{children:'autocorrect="off"'})," and ",e.jsx(s.code,{children:'spellcheck="false"'}),` to stop browsers automatically changing user input.
Passwords shouldn’t be checked for spelling or grammar.
This may also prevent posting the password to third-party plugins.`]}),`
`]}),`
`,e.jsxs(s.p,{children:["Follow the ",e.jsx(s.a,{href:"https://design-system.service.gov.uk/patterns/passwords/",rel:"nofollow",children:"guidelines for asking for passwords"})," of the GOV.UK Design System."]}),`
`,e.jsx(n,{of:c}),`
`,e.jsx(s.h3,{id:"type-email-address",children:"Type: Email address"}),`
`,e.jsx(s.p,{children:`This field helps the user enter an email address.
It has built-in validation to check for a valid email format.
However, do not rely only on the browser’s validation.`}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"email"}),` input field looks like a standard text input.
On some devices, it may show an email-specific keyboard.`]}),`
`,e.jsx(s.p,{children:"Consider setting the following attributes:"}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:["Set ",e.jsx(s.code,{children:'autocomplete="email"'})," to help browsers autofill the user’s email address."]}),`
`,e.jsxs(s.li,{children:["Set ",e.jsx(s.code,{children:'autocapitalize="none"'}),", ",e.jsx(s.code,{children:'autocorrect="off"'})," and ",e.jsx(s.code,{children:'spellcheck="false"'}),` to stop browsers automatically changing user input.
Email addresses shouldn’t be checked for spelling or grammar.
This may also prevent posting the email address to third-party plugins.`]}),`
`]}),`
`,e.jsxs(s.p,{children:["Follow the ",e.jsx(s.a,{href:"https://design-system.service.gov.uk/patterns/email-addresses/",rel:"nofollow",children:"guidelines for asking for email addresses"})," of the GOV.UK Design System."]}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(s.h3,{id:"type-web-address",children:"Type: Web address"}),`
`,e.jsx(s.p,{children:`This field helps the user enter a web address or URL.
It has built-in validation to check for a valid format.
However, do not rely only on the browser’s validation.`}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"url"}),` input field looks like a standard text input.
On some devices, it may show a URL-specific keyboard to aid in entering web addresses.`]}),`
`,e.jsx(s.p,{children:"Consider setting the following attributes:"}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:["Set ",e.jsx(s.code,{children:'autocomplete="url"'})," to help browsers autofill the user’s web address."]}),`
`,e.jsxs(s.li,{children:["Set ",e.jsx(s.code,{children:'autocapitalize="none"'}),", ",e.jsx(s.code,{children:'autocorrect="off"'})," and ",e.jsx(s.code,{children:'spellcheck="false"'}),` to stop browsers automatically changing user input.
Email addresses shouldn’t be checked for spelling or grammar.
This may also prevent posting the web address to third-party plugins.`]}),`
`]}),`
`,e.jsx(n,{of:u}),`
`,e.jsx(s.h3,{id:"type-phone-number",children:"Type: Phone number"}),`
`,e.jsx(s.p,{children:`This field helps the user enter a phone number.
It has built-in validation to check for a valid format.
However, do not rely only on the browser’s validation.`}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"tel"}),` input field looks like a standard text input.
On mobile devices, it may display a numeric keypad or a keyboard optimized for entering phone numbers.`]}),`
`,e.jsx(s.p,{children:"Guidelines:"}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:["Set ",e.jsx(s.code,{children:'autocomplete="tel"'})," to help browsers autofill the user’s phone number."]}),`
`]}),`
`,e.jsxs(s.p,{children:["Follow the ",e.jsx(s.a,{href:"https://design-system.service.gov.uk/patterns/telephone-numbers/",rel:"nofollow",children:"guidelines for asking for telephone numbers"})," of the GOV.UK Design System."]}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(s.h3,{id:"placeholder",children:"Placeholder"}),`
`,e.jsx(s.p,{children:"This text appears in the field when it is empty. It can give a brief hint about the kind of data to enter."}),`
`,e.jsxs(s.p,{children:[`Don’t try too hard to find a suitable text for a placeholder.
Inputs without placeholder text are just fine – the label and a description should be clear enough.
Do not use a placeholder instead of a `,e.jsx(s.a,{href:"?path=/docs/components-forms-label--docs",children:"Label"}),"."]}),`
`,e.jsxs(s.p,{children:["Follow the ",e.jsx(s.a,{href:"https://www.nldesignsystem.nl/richtlijnen/formulieren/placeholders",rel:"nofollow",children:"guidelines for placeholder text"})," by NL Design System."]}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(s.h3,{id:"invalid",children:"Invalid"}),`
`,e.jsxs(s.p,{children:[`Indicates that the input value does not meet the specified constraints.
An `,e.jsx(s.a,{href:"?path=/docs/components-forms-error-message--docs",children:"Error Message"}),` must be displayed above the field.
To highlight the error even more, the parent `,e.jsx(s.a,{href:"?path=/docs/components-forms-field--docs",children:"Field"})," component’s ",e.jsx(s.code,{children:"invalid"})," prop must also be set."]}),`
`,e.jsx(n,{of:f}),`
`,e.jsx(s.h3,{id:"disabled",children:"Disabled"}),`
`,e.jsx(s.p,{children:`A field that can not (yet) be used is indicated with a grey border.
It will not respond to interactions, e.g. with the mouse or keyboard.`}),`
`,e.jsx(s.p,{children:`Avoid disabling input fields.
They cause usability and accessibility problems.`}),`
`,e.jsx(s.p,{children:`Disabled fields are often skipped by screen readers.
This makes it hard for the user who rely on assistive technologies to understand the form’s content.
They are not included in form submissions, which can lead to incomplete or missing data.`}),`
`,e.jsx(s.p,{children:"Alternatives:"}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:["Use the ",e.jsx(s.code,{children:"readonly"}),` attribute.
This makes a field uneditable but keeps it accessible and included in form submissions.`]}),`
`,e.jsxs(s.li,{children:["Display data as plain text or within a non-input element like a ",e.jsx(s.code,{children:"span"})," or ",e.jsx(s.code,{children:"div"}),"."]}),`
`,e.jsx(s.li,{children:`Use conditional logic to hide or show fields based on user interaction.
This ensures all necessary fields are accessible and editable when needed.`}),`
`,e.jsx(s.li,{children:`Use a label or text to explain why a field is not editable if you must disable it temporarily.
This helps the user understand the context.`}),`
`]}),`
`,e.jsx(n,{of:j}),`
`,e.jsx(s.h2,{id:"further-reading",children:"Further reading"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Extensive ",e.jsx(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text",rel:"nofollow",children:"guidelines for all types of input"})," on Mozilla Developer Network."]}),`
`,e.jsxs(s.li,{children:["An overview of ",e.jsx(s.a,{href:"https://nl-design-system.github.io/utrecht/storybook/?path=/docs/react_react-textbox--docs",rel:"nofollow",children:"suitable metadata for various kinds of content"})," to be entered by Gemeente Utrecht."]}),`
`]})]})}function M(t={}){const{wrapper:s}={...o(),...t.components};return s?e.jsx(s,{...t,children:e.jsx(i,{...t})}):i(t)}export{M as default};
