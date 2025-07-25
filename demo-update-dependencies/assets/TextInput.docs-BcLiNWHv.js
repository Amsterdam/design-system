import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as o}from"./index-CxbY7dAs.js";import{M as r,e as l,P as d,f as a,h as s}from"./index-BHgg25fL.js";import{T as h,E as c,W as p,P as u,a as m,D as f,S as x,b,I as j,c as y,d as g,e as w}from"./TextInput.stories-CKIX_J_M.js";import"./index-yBjzXJbu.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B4q2Zsfe.js";import"./index-CJ88nXQk.js";import"./index-Cf9b6H0j.js";import"./index-DrFu-skq.js";import"./index.esm-DDzNsyt1.js";import"./clsx-B-dksMZM.js";import"./index.esm-D3RaMjqb.js";const v=`<!-- @license CC0-1.0 -->

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
`,e.jsx(l,{children:v}),`
`,e.jsx(d,{}),`
`,e.jsx(a,{}),`
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
`,e.jsxs(n.p,{children:[`The size of the input should be appropriate for the information to be entered.
Use the `,e.jsx(n.code,{children:"size"})," attribute to set the right size."]}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(n.h3,{id:"placeholder",children:"Placeholder"}),`
`,e.jsx(n.p,{children:"This text appears in the field when it is empty. It can give a brief hint about the kind of data to enter."}),`
`,e.jsxs(n.p,{children:[`Don’t try too hard to find a suitable text for a placeholder.
Inputs without placeholder text are just fine – the label and a description should be clear enough.
Do not use a placeholder instead of a `,e.jsx(n.a,{href:"/docs/components-forms-label--docs",children:"Label"}),"."]}),`
`,e.jsxs(n.p,{children:["Follow the ",e.jsx(n.a,{href:"https://www.nldesignsystem.nl/richtlijnen/formulieren/placeholders",rel:"nofollow",children:"guidelines for placeholder text"})," by NL Design System."]}),`
`,e.jsx(s,{of:b}),`
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
`,e.jsx(s,{of:y}),`
`,e.jsx(n.h3,{id:"in-a-field",children:"In a Field"}),`
`,e.jsx(n.p,{children:"Use a Field to group a Text Input with a Label, description and / or an Error Message."}),`
`,e.jsxs(n.p,{children:["If you don’t need the description, remove its Paragraph and the ",e.jsx(n.code,{children:"aria-describedby"})," from the Text Input."]}),`
`,e.jsxs(n.p,{children:["Check ",e.jsx(n.a,{href:"/docs/components-forms-field--docs",children:"the Field docs"})," for more information on configuring it."]}),`
`,e.jsx(s,{of:g}),`
`,e.jsx(n.h3,{id:"in-a-field-with-validation",children:"In a Field with validation"}),`
`,e.jsxs(n.p,{children:["If the Text Input can become invalid, add an Error Message and its ",e.jsx(n.code,{children:"id"})," to the ",e.jsx(n.code,{children:"aria-describedby"})," attribute of the Text Input."]}),`
`,e.jsxs(n.p,{children:["Check ",e.jsx(n.a,{href:"/docs/components-forms-field--docs",children:"the Field docs"})," for more information on configuring it."]}),`
`,e.jsx(s,{of:w}),`
`,e.jsx(n.h2,{id:"further-reading",children:"Further reading"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Extensive ",e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text",rel:"nofollow",children:"guidelines for all types of input"})," on Mozilla Developer Network."]}),`
`,e.jsxs(n.li,{children:["An overview of ",e.jsx(n.a,{href:"https://nl-design-system.github.io/utrecht/storybook/?path=/docs/react_react-textbox--docs",rel:"nofollow",children:"suitable metadata for various kinds of content"})," to be entered by Gemeente Utrecht."]}),`
`]})]})}function W(i={}){const{wrapper:n}={...o(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{W as default};
