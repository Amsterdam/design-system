import{j as e}from"./iframe-D6MvL6MB.js";import{useMDXComponents as o}from"./index-C44UWCcd.js";import{M as r,f as l,P as a,h as d,i as s}from"./blocks-Bp2t6mub.js";import{T as h,E as c,W as p,P as u,a as m,D as f,S as x,I as j,b,c as y,d as g}from"./TextInput.stories-CEf7y2mL.js";import"./preload-helper-PPVm8Dsz.js";import"./index-5TCV-ppL.js";const w=`<!-- @license CC0-1.0 -->

# Text Input

A form field in which a user can enter text.

## Guidelines

- Use a Text Input when users need to enter a single line of text, such as their name or phone number.
- Do not use a Text Input when users could provide more than 1 sentence of text.
- The width of the Text Input should be appropriate for the information to be entered.
- A Text Input must have a Label, and in most cases, this label should be visible.
- Use \`spellcheck="false"\` for fields that may contain sensitive information, such as personal data.
  Some browser extensions for spell-checking send this information to external servers.
- Apply automatic assistance where possible.
  For example, in logged-in systems, pre-filling known values can prevent errors and save time.
`;/*@license CC0-1.0*/function t(i){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",ul:"ul",...o(),...i.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(r,{of:h}),`
`,e.jsx(l,{children:w}),`
`,e.jsx(a,{}),`
`,e.jsx(d,{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"type-email-address",children:"Type: Email address"}),`
`,e.jsx(n.p,{children:`This field helps the user enter an email address.
It has built-in validation to check for a valid email format.
However, do not rely only on the browser’s validation.`}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"email"}),` input field looks like a standard text input.
On some devices, it may show an email-specific keyboard.`]}),`
`,e.jsx(n.p,{children:"Consider setting the following attributes:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Set ",e.jsx(n.code,{children:'autocomplete="email"'})," to help browsers autofill the user’s email address."]}),`
`,e.jsxs(n.li,{children:["Set ",e.jsx(n.code,{children:'autocorrect="off"'})," and ",e.jsx(n.code,{children:'spellcheck="false"'}),` to stop browsers automatically changing user input.
Email addresses shouldn’t be checked for spelling or grammar.
This may also prevent posting the email address to third-party plugins.`]}),`
`]}),`
`,e.jsxs(n.p,{children:["Follow the ",e.jsx(n.a,{href:"https://design-system.service.gov.uk/patterns/email-addresses/",rel:"nofollow",children:"guidelines for asking for email addresses"})," of the GOV.UK Design System."]}),`
`,e.jsx(s,{of:c}),`
`,e.jsx(n.h3,{id:"type-web-address",children:"Type: Web address"}),`
`,e.jsx(n.p,{children:`This field helps the user enter a web address or URL.
It has built-in validation to check for a valid format.
However, do not rely only on the browser’s validation.`}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"url"}),` input field looks like a standard text input.
On some devices, it may show a URL-specific keyboard to aid in entering web addresses.`]}),`
`,e.jsx(n.p,{children:"Consider setting the following attributes:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Set ",e.jsx(n.code,{children:'autocomplete="url"'})," to help browsers autofill the user’s web address."]}),`
`,e.jsxs(n.li,{children:["Set ",e.jsx(n.code,{children:'autocorrect="off"'})," and ",e.jsx(n.code,{children:'spellcheck="false"'}),` to stop browsers automatically changing user input.
Email addresses shouldn’t be checked for spelling or grammar.
This may also prevent posting the web address to third-party plugins.`]}),`
`]}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(n.h3,{id:"type-phone-number",children:"Type: Phone number"}),`
`,e.jsx(n.p,{children:`This field helps the user enter a phone number.
It has built-in validation to check for a valid format.
However, do not rely only on the browser’s validation.`}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"tel"}),` input field looks like a standard text input.
On mobile devices, it may display a numeric keypad or a keyboard optimized for entering phone numbers.`]}),`
`,e.jsx(n.p,{children:"Guidelines:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Set ",e.jsx(n.code,{children:'autocomplete="tel"'})," to help browsers autofill the user’s phone number."]}),`
`]}),`
`,e.jsxs(n.p,{children:["Follow the ",e.jsx(n.a,{href:"https://design-system.service.gov.uk/patterns/telephone-numbers/",rel:"nofollow",children:"guidelines for asking for telephone numbers"})," of the GOV.UK Design System."]}),`
`,e.jsx(s,{of:u}),`
`,e.jsx(n.h3,{id:"type-whole-number",children:"Type: Whole number"}),`
`,e.jsxs(n.p,{children:[`This field helps the user enter a whole number.
Avoid using `,e.jsx(n.code,{children:'type="number"'}),` as it has several usability and accessibility issues.
Instead, we use `,e.jsx(n.code,{children:'inputMode="numeric"'}),`, which enables the browser to display a numeric keypad.
Include `,e.jsx(n.code,{children:'pattern="[0-9]*"'}),` to allow only whole numbers.
However, do not rely only on the browser’s validation.`]}),`
`,e.jsxs(n.p,{children:["This follows guidelines of ",e.jsx(n.a,{href:"https://www.nldesignsystem.nl/richtlijnen/formulieren/wanneer-welk-form-element/iedereen-kan-invullen#input-typenumber-versus-inputmodenumeric",rel:"nofollow",children:"NL Design System"})," and the ",e.jsx(n.a,{href:"https://technology.blog.gov.uk/2020/02/24/why-the-gov-uk-design-system-team-changed-the-input-type-for-numbers/",rel:"nofollow",children:"GOV.UK Design System"}),"."]}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(n.h3,{id:"type-decimal-number",children:"Type: Decimal number"}),`
`,e.jsxs(n.p,{children:[`This field helps the user enter a decimal number.
Avoid using `,e.jsx(n.code,{children:'type="number"'}),` as it has several usability and accessibility issues.
Also, do not include `,e.jsx(n.code,{children:'inputMode="decimal"'}),`; some devices may display a keypad that lacks a key for the decimal separator.
In such cases, the user will not have access to a numeric keypad.
Include `,e.jsx(n.code,{children:'pattern="[0-9.,]*"'}),` to permit decimal numbers, using points and commas to separate decimals and digit groups according to different cultures.
However, do not rely only on the browser’s validation.`]}),`
`,e.jsxs(n.p,{children:["We follow the advice against using ",e.jsx(n.code,{children:'type="number"'})," by ",e.jsx(n.a,{href:"https://www.nldesignsystem.nl/richtlijnen/formulieren/wanneer-welk-form-element/iedereen-kan-invullen#input-typenumber-versus-inputmodenumeric",rel:"nofollow",children:"NL Design System"})," and the ",e.jsx(n.a,{href:"https://technology.blog.gov.uk/2020/02/24/why-the-gov-uk-design-system-team-changed-the-input-type-for-numbers/",rel:"nofollow",children:"GOV.UK Design System"}),"."]}),`
`,e.jsx(s,{of:f}),`
`,e.jsx(n.h3,{id:"size",children:"Size"}),`
`,e.jsxs(n.p,{children:[`Make the width of the input appropriate for the information to be entered.
Use the `,e.jsx(n.code,{children:"size"})," attribute for this."]}),`
`,e.jsx(n.p,{children:`Avoid making it too narrow – ensure the user has enough space to operate comfortably.
This also gives browsers or extensions an opportunity to add an icon or button at the end.`}),`
`,e.jsx(n.p,{children:"We suggest a size of 15 for a phone number, 30 for an e-mail address, 40 for a web address, and 7 for a postal code."}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(n.h3,{id:"placeholder",children:"Placeholder"}),`
`,e.jsx(n.p,{children:"We advise against placing a placeholder in an input field."}),`
`,e.jsx(n.p,{children:`This text would only appear in the field when it is empty, which instead may make it appear filled in.
Even more so, the text disappears immediately after the user starts typing, which means they are no longer able to check whether their input matches the suggestions.
Thirdly, their usual grey colour is often difficult to read.`}),`
`,e.jsx(n.p,{children:`Inputs without placeholder text are just fine.
Any text that you consider for a placeholder can be included in the description.`}),`
`,e.jsxs(n.p,{children:["See also the ",e.jsx(n.a,{href:"https://www.nldesignsystem.nl/richtlijnen/formulieren/placeholders",rel:"nofollow",children:"guidelines for placeholder text"})," by NL Design System, and ",e.jsx(n.a,{href:"https://design-system.service.gov.uk/components/text-input/#avoid-placeholder-text",rel:"nofollow",children:"the advice to avoid them"})," by GOV UK."]}),`
`,e.jsx(n.p,{children:"In case third party applications does use placeholders, the component does apply the correct font and colour to them."}),`
`,e.jsx(n.h3,{id:"invalid",children:"Invalid"}),`
`,e.jsxs(n.p,{children:[`Indicates that the input value does not meet the specified constraints.
An `,e.jsx(n.a,{href:"/docs/components-forms-error-message--docs",children:"Error Message"}),` must be displayed above the field.
To highlight the error even more, the parent `,e.jsx(n.a,{href:"/docs/components-forms-field--docs",children:"Field"})," component’s ",e.jsx(n.code,{children:"invalid"})," prop must also be set."]}),`
`,e.jsx(s,{of:j}),`
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
`,e.jsx(n.h3,{id:"in-a-field",children:"In a Field"}),`
`,e.jsx(n.p,{children:"Use a Field to group a Text Input with a Label, description and / or an Error Message."}),`
`,e.jsxs(n.p,{children:["If you don’t need the description, remove its Paragraph and the ",e.jsx(n.code,{children:"aria-describedby"})," from the Text Input."]}),`
`,e.jsxs(n.p,{children:["Check ",e.jsx(n.a,{href:"/docs/components-forms-field--docs",children:"the Field docs"})," for more information on configuring it."]}),`
`,e.jsx(s,{of:y}),`
`,e.jsx(n.h3,{id:"in-a-field-with-validation",children:"In a Field with validation"}),`
`,e.jsxs(n.p,{children:["If the Text Input can become invalid, add an Error Message and its ",e.jsx(n.code,{children:"id"})," to the ",e.jsx(n.code,{children:"aria-describedby"})," attribute of the Text Input."]}),`
`,e.jsxs(n.p,{children:["Check ",e.jsx(n.a,{href:"/docs/components-forms-field--docs",children:"the Field docs"})," for more information on configuring it."]}),`
`,e.jsx(s,{of:g}),`
`,e.jsx(n.h2,{id:"further-reading",children:"Further reading"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Extensive ",e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text",rel:"nofollow",children:"guidelines for all types of input"})," on Mozilla Developer Network."]}),`
`,e.jsxs(n.li,{children:["At the same site, an overview of ",e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/autocomplete#token_list_tokens",rel:"nofollow",children:"autocompletion values"})," which help enter personal details faster."]}),`
`]})]})}function A(i={}){const{wrapper:n}={...o(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{A as default};
