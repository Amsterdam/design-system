import{n as e}from"./chunk-zsgVPwQN.js";import{t}from"./jsx-runtime-GmyBfqKJ.js";import{r as n}from"./react-RY8N8R-x.js";import{c as r,f as i,i as a,l as o,n as s,s as c}from"./blocks-BMurOIz2.js";import{n as l,t as u}from"./DesignTokensTable-Dr8bxsPE.js";import{t as d}from"./mdx-react-shim-ynubY8I9.js";import{DecimalNumber as f,Disabled as p,EmailAddress as m,InAField as h,InAFieldWithValidation as g,Invalid as _,PhoneNumber as v,Size as y,WebAddress as b,WholeNumber as x,n as S,t as C}from"./TextInput.stories-BRqY5FKD.js";var w,T=e((()=>{w=`<!-- @license CC0-1.0 -->

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
`})),E,D,O=e((()=>{E={"text-input":{"background-color":{$value:`{ams.inputs.background-color}`,$extensions:{"nl.amsterdam.type":`color`}},"border-color":{$value:`{ams.inputs.border-color}`,$extensions:{"nl.amsterdam.type":`color`}},"border-style":{$value:`{ams.inputs.border-style}`,$extensions:{"nl.amsterdam.type":`borderStyle`}},"border-width":{$value:`{ams.inputs.border-width}`,$extensions:{"nl.amsterdam.type":`borderWidth`}},color:{$value:`{ams.inputs.color}`,$extensions:{"nl.amsterdam.type":`color`}},"font-family":{$value:`{ams.inputs.font-family}`,$extensions:{"nl.amsterdam.type":`fontFamily`}},"font-size":{$value:`{ams.inputs.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"font-weight":{$value:`{ams.inputs.font-weight}`,$extensions:{"nl.amsterdam.type":`fontWeight`}},"line-height":{$value:`{ams.inputs.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}},"outline-offset":{$value:`{ams.inputs.outline-offset}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-block":{$value:`{ams.inputs.padding-block}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-inline":{$value:`{ams.inputs.padding-inline}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},disabled:{color:{$value:`{ams.inputs.disabled.color}`,$extensions:{"nl.amsterdam.type":`color`}},cursor:{$value:`{ams.cursor.disabled}`,$extensions:{"nl.amsterdam.type":`cursor`}}},hover:{"box-shadow":{$value:`{ams.inputs.hover.box-shadow}`,$extensions:{"nl.amsterdam.type":`shadow`}}},invalid:{"border-color":{$value:`{ams.inputs.invalid.border-color}`,$extensions:{"nl.amsterdam.type":`color`}},hover:{"border-color":{$value:`{ams.inputs.invalid.hover.border-color}`,$extensions:{"nl.amsterdam.type":`color`}},"box-shadow":{$value:`{ams.inputs.invalid.hover.box-shadow}`,$extensions:{"nl.amsterdam.type":`shadow`}}}},placeholder:{color:{$value:`{ams.inputs.placeholder.color}`,$extensions:{"nl.amsterdam.type":`color`}}}}},D={ams:E}}));function k(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,ul:`ul`,...n(),...e.components};return(0,j.jsxs)(j.Fragment,{children:[`
`,`
`,`
`,`
`,(0,j.jsx)(r,{of:C}),`
`,(0,j.jsx)(c,{children:w}),`
`,(0,j.jsx)(o,{}),`
`,(0,j.jsx)(a,{}),`
`,(0,j.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,j.jsx)(t.h3,{id:`type-email-address`,children:`Type: Email address`}),`
`,(0,j.jsx)(t.p,{children:`This field helps the user enter an email address.
It has built-in validation to check for a valid email format.
However, do not rely only on the browser’s validation.`}),`
`,(0,j.jsxs)(t.p,{children:[`The `,(0,j.jsx)(t.code,{children:`email`}),` input field looks like a standard text input.
On some devices, it may show an email-specific keyboard.`]}),`
`,(0,j.jsx)(t.p,{children:`Consider setting the following attributes:`}),`
`,(0,j.jsxs)(t.ol,{children:[`
`,(0,j.jsxs)(t.li,{children:[`Set `,(0,j.jsx)(t.code,{children:`autocomplete="email"`}),` to help browsers autofill the user’s email address.`]}),`
`,(0,j.jsxs)(t.li,{children:[`Set `,(0,j.jsx)(t.code,{children:`autocorrect="off"`}),` and `,(0,j.jsx)(t.code,{children:`spellcheck="false"`}),` to stop browsers automatically changing user input.
Email addresses shouldn’t be checked for spelling or grammar.
This may also prevent posting the email address to third-party plugins.`]}),`
`]}),`
`,(0,j.jsxs)(t.p,{children:[`Follow the `,(0,j.jsx)(t.a,{href:`https://design-system.service.gov.uk/patterns/email-addresses/`,rel:`nofollow`,children:`guidelines for asking for email addresses`}),` of the GOV.UK Design System.`]}),`
`,(0,j.jsx)(s,{of:m}),`
`,(0,j.jsx)(t.h3,{id:`type-web-address`,children:`Type: Web address`}),`
`,(0,j.jsx)(t.p,{children:`This field helps the user enter a web address or URL.
It has built-in validation to check for a valid format.
However, do not rely only on the browser’s validation.`}),`
`,(0,j.jsxs)(t.p,{children:[`The `,(0,j.jsx)(t.code,{children:`url`}),` input field looks like a standard text input.
On some devices, it may show a URL-specific keyboard to aid in entering web addresses.`]}),`
`,(0,j.jsx)(t.p,{children:`Consider setting the following attributes:`}),`
`,(0,j.jsxs)(t.ol,{children:[`
`,(0,j.jsxs)(t.li,{children:[`Set `,(0,j.jsx)(t.code,{children:`autocomplete="url"`}),` to help browsers autofill the user’s web address.`]}),`
`,(0,j.jsxs)(t.li,{children:[`Set `,(0,j.jsx)(t.code,{children:`autocorrect="off"`}),` and `,(0,j.jsx)(t.code,{children:`spellcheck="false"`}),` to stop browsers automatically changing user input.
Email addresses shouldn’t be checked for spelling or grammar.
This may also prevent posting the web address to third-party plugins.`]}),`
`]}),`
`,(0,j.jsx)(s,{of:b}),`
`,(0,j.jsx)(t.h3,{id:`type-phone-number`,children:`Type: Phone number`}),`
`,(0,j.jsx)(t.p,{children:`This field helps the user enter a phone number.
It has built-in validation to check for a valid format.
However, do not rely only on the browser’s validation.`}),`
`,(0,j.jsxs)(t.p,{children:[`The `,(0,j.jsx)(t.code,{children:`tel`}),` input field looks like a standard text input.
On mobile devices, it may display a numeric keypad or a keyboard optimized for entering phone numbers.`]}),`
`,(0,j.jsx)(t.p,{children:`Guidelines:`}),`
`,(0,j.jsxs)(t.ol,{children:[`
`,(0,j.jsxs)(t.li,{children:[`Set `,(0,j.jsx)(t.code,{children:`autocomplete="tel"`}),` to help browsers autofill the user’s phone number.`]}),`
`]}),`
`,(0,j.jsxs)(t.p,{children:[`Follow the `,(0,j.jsx)(t.a,{href:`https://design-system.service.gov.uk/patterns/telephone-numbers/`,rel:`nofollow`,children:`guidelines for asking for telephone numbers`}),` of the GOV.UK Design System.`]}),`
`,(0,j.jsx)(s,{of:v}),`
`,(0,j.jsx)(t.h3,{id:`type-whole-number`,children:`Type: Whole number`}),`
`,(0,j.jsxs)(t.p,{children:[`This field helps the user enter a whole number.
Avoid using `,(0,j.jsx)(t.code,{children:`type="number"`}),` as it has several usability and accessibility issues.
Instead, we use `,(0,j.jsx)(t.code,{children:`inputMode="numeric"`}),`, which enables the browser to display a numeric keypad.
Include `,(0,j.jsx)(t.code,{children:`pattern="[0-9]*"`}),` to allow only whole numbers.
However, do not rely only on the browser’s validation.`]}),`
`,(0,j.jsxs)(t.p,{children:[`This follows guidelines of `,(0,j.jsx)(t.a,{href:`https://www.nldesignsystem.nl/richtlijnen/formulieren/wanneer-welk-form-element/iedereen-kan-invullen#input-typenumber-versus-inputmodenumeric`,rel:`nofollow`,children:`NL Design System`}),` and the `,(0,j.jsx)(t.a,{href:`https://technology.blog.gov.uk/2020/02/24/why-the-gov-uk-design-system-team-changed-the-input-type-for-numbers/`,rel:`nofollow`,children:`GOV.UK Design System`}),`.`]}),`
`,(0,j.jsx)(s,{of:x}),`
`,(0,j.jsx)(t.h3,{id:`type-decimal-number`,children:`Type: Decimal number`}),`
`,(0,j.jsxs)(t.p,{children:[`This field helps the user enter a decimal number.
Avoid using `,(0,j.jsx)(t.code,{children:`type="number"`}),` as it has several usability and accessibility issues.
Also, do not include `,(0,j.jsx)(t.code,{children:`inputMode="decimal"`}),`; some devices may display a keypad that lacks a key for the decimal separator.
In such cases, the user will not have access to a numeric keypad.
Include `,(0,j.jsx)(t.code,{children:`pattern="[0-9.,]*"`}),` to permit decimal numbers, using points and commas to separate decimals and digit groups according to different cultures.
However, do not rely only on the browser’s validation.`]}),`
`,(0,j.jsxs)(t.p,{children:[`We follow the advice against using `,(0,j.jsx)(t.code,{children:`type="number"`}),` by `,(0,j.jsx)(t.a,{href:`https://www.nldesignsystem.nl/richtlijnen/formulieren/wanneer-welk-form-element/iedereen-kan-invullen#input-typenumber-versus-inputmodenumeric`,rel:`nofollow`,children:`NL Design System`}),` and the `,(0,j.jsx)(t.a,{href:`https://technology.blog.gov.uk/2020/02/24/why-the-gov-uk-design-system-team-changed-the-input-type-for-numbers/`,rel:`nofollow`,children:`GOV.UK Design System`}),`.`]}),`
`,(0,j.jsx)(s,{of:f}),`
`,(0,j.jsx)(t.h3,{id:`size`,children:`Size`}),`
`,(0,j.jsxs)(t.p,{children:[`Make the width of the input appropriate for the information to be entered.
Use the `,(0,j.jsx)(t.code,{children:`size`}),` attribute for this.`]}),`
`,(0,j.jsx)(t.p,{children:`Avoid making it too narrow – ensure the user has enough space to operate comfortably.
This also gives browsers or extensions an opportunity to add an icon or button at the end.`}),`
`,(0,j.jsx)(t.p,{children:`We suggest a size of 15 for a phone number, 30 for an e-mail address, 40 for a web address, and 7 for a postal code.`}),`
`,(0,j.jsx)(s,{of:y}),`
`,(0,j.jsx)(t.h3,{id:`placeholder`,children:`Placeholder`}),`
`,(0,j.jsx)(t.p,{children:`We advise against placing a placeholder in an input field.`}),`
`,(0,j.jsx)(t.p,{children:`This text would only appear in the field when it is empty, which instead may make it appear filled in.
Even more so, the text disappears immediately after the user starts typing, which means they are no longer able to check whether their input matches the suggestions.
Thirdly, their usual grey colour is often difficult to read.`}),`
`,(0,j.jsx)(t.p,{children:`Inputs without placeholder text are just fine.
Any text that you consider for a placeholder can be included in the description.`}),`
`,(0,j.jsxs)(t.p,{children:[`See also the `,(0,j.jsx)(t.a,{href:`https://www.nldesignsystem.nl/richtlijnen/formulieren/placeholders`,rel:`nofollow`,children:`guidelines for placeholder text`}),` by NL Design System, and `,(0,j.jsx)(t.a,{href:`https://design-system.service.gov.uk/components/text-input/#avoid-placeholder-text`,rel:`nofollow`,children:`the advice to avoid them`}),` by GOV UK.`]}),`
`,(0,j.jsx)(t.p,{children:`The component does apply the correct font and colour for third party websites using placeholders.`}),`
`,(0,j.jsx)(t.h3,{id:`invalid`,children:`Invalid`}),`
`,(0,j.jsxs)(t.p,{children:[`Indicates that the input value does not meet the specified constraints.
An `,(0,j.jsx)(t.a,{href:`/docs/components-forms-error-message--docs`,children:`Error Message`}),` must be displayed above the field.
To highlight the error even more, the parent `,(0,j.jsx)(t.a,{href:`/docs/components-forms-field--docs`,children:`Field`}),` component’s `,(0,j.jsx)(t.code,{children:`invalid`}),` prop must also be set.`]}),`
`,(0,j.jsx)(s,{of:_}),`
`,(0,j.jsx)(t.h3,{id:`disabled`,children:`Disabled`}),`
`,(0,j.jsx)(t.p,{children:`A field that can not (yet) be used is indicated with a grey border.
It will not respond to interactions, e.g. with the mouse or keyboard.`}),`
`,(0,j.jsx)(t.p,{children:`Avoid disabling input fields.
They cause usability and accessibility problems.`}),`
`,(0,j.jsx)(t.p,{children:`Disabled fields are often skipped by screen readers.
This makes it hard for the user who rely on assistive technologies to understand the form’s content.
They are not included in form submissions, which can lead to incomplete or missing data.`}),`
`,(0,j.jsx)(t.p,{children:`Alternatives:`}),`
`,(0,j.jsxs)(t.ol,{children:[`
`,(0,j.jsxs)(t.li,{children:[`Use the `,(0,j.jsx)(t.code,{children:`readonly`}),` attribute.
This makes a field uneditable but keeps it accessible and included in form submissions.`]}),`
`,(0,j.jsxs)(t.li,{children:[`Display data as plain text or within a non-input element like a `,(0,j.jsx)(t.code,{children:`span`}),` or `,(0,j.jsx)(t.code,{children:`div`}),`.`]}),`
`,(0,j.jsx)(t.li,{children:`Use conditional logic to hide or show fields based on user interaction.
This ensures all necessary fields are accessible and editable when needed.`}),`
`,(0,j.jsx)(t.li,{children:`Use a label or text to explain why a field is not editable if you must disable it temporarily.
This helps the user understand the context.`}),`
`]}),`
`,(0,j.jsx)(s,{of:p}),`
`,(0,j.jsx)(t.h3,{id:`in-a-field`,children:`In a Field`}),`
`,(0,j.jsx)(t.p,{children:`Use a Field to group a Text Input with a Label, description and / or an Error Message.`}),`
`,(0,j.jsxs)(t.p,{children:[`If you don’t need the description, remove its Paragraph and the `,(0,j.jsx)(t.code,{children:`aria-describedby`}),` from the Text Input.`]}),`
`,(0,j.jsxs)(t.p,{children:[`Check `,(0,j.jsx)(t.a,{href:`/docs/components-forms-field--docs`,children:`the Field docs`}),` for more information on configuring it.`]}),`
`,(0,j.jsx)(s,{of:h}),`
`,(0,j.jsx)(t.h3,{id:`in-a-field-with-validation`,children:`In a Field with validation`}),`
`,(0,j.jsxs)(t.p,{children:[`If the Text Input can become invalid, add an Error Message and its `,(0,j.jsx)(t.code,{children:`id`}),` to the `,(0,j.jsx)(t.code,{children:`aria-describedby`}),` attribute of the Text Input.`]}),`
`,(0,j.jsxs)(t.p,{children:[`Check `,(0,j.jsx)(t.a,{href:`/docs/components-forms-field--docs`,children:`the Field docs`}),` for more information on configuring it.`]}),`
`,(0,j.jsx)(s,{of:g}),`
`,(0,j.jsx)(t.h2,{id:`further-reading`,children:`Further reading`}),`
`,(0,j.jsxs)(t.ul,{children:[`
`,(0,j.jsxs)(t.li,{children:[`Extensive `,(0,j.jsx)(t.a,{href:`https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text`,rel:`nofollow`,children:`guidelines for all types of input`}),` on Mozilla Developer Network.`]}),`
`,(0,j.jsxs)(t.li,{children:[`At the same site, an overview of `,(0,j.jsx)(t.a,{href:`https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/autocomplete#token_list_tokens`,rel:`nofollow`,children:`autocompletion values`}),` which help enter personal details faster.`]}),`
`]}),`
`,(0,j.jsx)(t.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,j.jsx)(u,{tokens:D})]})}function A(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,j.jsx)(t,{...e,children:(0,j.jsx)(k,{...e})}):k(e)}var j;e((()=>{j=t(),d(),i(),S(),T(),O(),l()}))();export{A as default};