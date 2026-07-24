import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{a as t,d as n,h as r,i,n as a,p as o,u as s}from"./blocks-CqryReaq.js";import{t as c}from"./jsx-runtime-Bq1bXGty.js";import{i as l}from"./react-BnCtKaSV.js";import{n as u,t as d}from"./DesignTokensTable-DKJ851bC.js";import{t as f}from"./mdx-react-shim-9RzcSRdq.js";import{DecimalNumber as p,Disabled as m,EmailAddress as h,InAField as g,InAFieldWithValidation as _,Invalid as v,PhoneNumber as y,Size as b,WebAddress as x,WholeNumber as S,n as C,t as w}from"./TextInput.stories-BkjsUNPm.js";var T,E,D=e((()=>{T={"text-input":{"background-color":{$value:`{ams.inputs.background-color}`,$extensions:{"nl.amsterdam.type":`color`}},"border-color":{$value:`{ams.inputs.border-color}`,$extensions:{"nl.amsterdam.type":`color`}},"border-radius":{$value:`{ams.inputs.border-radius}`,$extensions:{"nl.amsterdam.type":`borderRadius`}},"border-style":{$value:`{ams.inputs.border-style}`,$extensions:{"nl.amsterdam.type":`borderStyle`}},"border-width":{$value:`{ams.inputs.border-width}`,$extensions:{"nl.amsterdam.type":`borderWidth`}},color:{$value:`{ams.inputs.color}`,$extensions:{"nl.amsterdam.type":`color`}},"font-family":{$value:`{ams.inputs.font-family}`,$extensions:{"nl.amsterdam.type":`fontFamily`}},"font-size":{$value:`{ams.inputs.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"font-weight":{$value:`{ams.inputs.font-weight}`,$extensions:{"nl.amsterdam.type":`fontWeight`}},"line-height":{$value:`{ams.inputs.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}},"outline-offset":{$value:`{ams.inputs.outline-offset}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-block":{$value:`{ams.inputs.padding-block}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-inline":{$value:`{ams.inputs.padding-inline}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},disabled:{"background-color":{$value:`{ams.inputs.disabled.background-color}`,$extensions:{"nl.amsterdam.type":`color`}},color:{$value:`{ams.inputs.disabled.color}`,$extensions:{"nl.amsterdam.type":`color`}},cursor:{$value:`{ams.cursor.disabled}`,$extensions:{"nl.amsterdam.type":`cursor`}}},hover:{"box-shadow":{$value:`{ams.inputs.hover.box-shadow}`,$extensions:{"nl.amsterdam.type":`shadow`}}},invalid:{"border-color":{$value:`{ams.inputs.invalid.border-color}`,$extensions:{"nl.amsterdam.type":`color`}},hover:{"border-color":{$value:`{ams.inputs.invalid.hover.border-color}`,$extensions:{"nl.amsterdam.type":`color`}},"box-shadow":{$value:`{ams.inputs.invalid.hover.box-shadow}`,$extensions:{"nl.amsterdam.type":`shadow`}}}},placeholder:{color:{$value:`{ams.inputs.placeholder.color}`,$extensions:{"nl.amsterdam.type":`color`}}}}},E={ams:T}}));function O(e){let r={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,ul:`ul`,...l(),...e.components};return(0,A.jsxs)(A.Fragment,{children:[`
`,`
`,`
`,`
`,(0,A.jsx)(s,{of:w}),`
`,(0,A.jsx)(o,{}),`
`,(0,A.jsx)(t,{of:w}),`
`,(0,A.jsx)(n,{}),`
`,(0,A.jsx)(i,{}),`
`,(0,A.jsx)(r.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,A.jsx)(r.h3,{id:`when-to-use`,children:`When to use`}),`
`,(0,A.jsx)(r.p,{children:`Use a Text Input when users need to enter a single line of text, such as their name or phone number.`}),`
`,(0,A.jsx)(r.h3,{id:`when-not-to-use`,children:`When not to use`}),`
`,(0,A.jsxs)(r.p,{children:[`Do not use a Text Input when users could provide more than 1 sentence of text.
Use a `,(0,A.jsx)(r.a,{href:`/docs/components-forms-text-area--docs`,children:`Text Area`}),` instead.`]}),`
`,(0,A.jsx)(r.p,{children:`Avoid disabling input fields.
They cause usability and accessibility problems.
Disabled fields are often skipped by screen readers.
This makes it hard for users who rely on assistive technologies to understand the form’s content.
They are not included in form submissions, which can lead to incomplete or missing data.`}),`
`,(0,A.jsx)(r.p,{children:`Alternatives:`}),`
`,(0,A.jsxs)(r.ol,{children:[`
`,(0,A.jsxs)(r.li,{children:[`Use the `,(0,A.jsx)(r.code,{children:`readonly`}),` attribute.
This makes a field uneditable but keeps it accessible and included in form submissions.`]}),`
`,(0,A.jsxs)(r.li,{children:[`Display data as plain text or within a non-input element like a `,(0,A.jsx)(r.code,{children:`span`}),` or `,(0,A.jsx)(r.code,{children:`div`}),`.`]}),`
`,(0,A.jsx)(r.li,{children:`Use conditional logic to hide or show fields based on user interaction.
This ensures all necessary fields are accessible and editable when needed.`}),`
`,(0,A.jsx)(r.li,{children:`Use a label or text to explain why a field is not editable if you must disable it temporarily.
This helps the user understand the context.`}),`
`]}),`
`,(0,A.jsx)(r.p,{children:`We advise against placing a placeholder in an input field.`}),`
`,(0,A.jsx)(r.p,{children:`This text would only appear in the field when it is empty, which instead may make it appear filled in.
Even more so, the text disappears immediately after the user starts typing, which means they are no longer able to check whether their input matches the suggestions.
Thirdly, their usual grey colour is often difficult to read.`}),`
`,(0,A.jsx)(r.p,{children:`Inputs without placeholder text are just fine.
Any text that you consider for a placeholder can be included in the description.`}),`
`,(0,A.jsxs)(r.p,{children:[`See also the `,(0,A.jsx)(r.a,{href:`https://www.nldesignsystem.nl/richtlijnen/formulieren/placeholders`,rel:`nofollow`,children:`guidelines for placeholder text`}),` by NL Design System, and `,(0,A.jsx)(r.a,{href:`https://design-system.service.gov.uk/components/text-input/#avoid-placeholder-text`,rel:`nofollow`,children:`the advice to avoid them`}),` by GOV UK.`]}),`
`,(0,A.jsx)(r.p,{children:`The component does apply the correct font and colour for third party websites using placeholders.`}),`
`,(0,A.jsx)(r.h3,{id:`how-to-use`,children:`How to use`}),`
`,(0,A.jsxs)(r.p,{children:[`The width of the Text Input should be appropriate for the information to be entered.
The `,(0,A.jsx)(r.code,{children:`size`}),` attribute sets how many characters are visible; it does not limit how many the user can enter.`]}),`
`,(0,A.jsxs)(r.p,{children:[`Use `,(0,A.jsx)(r.code,{children:`spellcheck="false"`}),` for fields that may contain sensitive information, such as personal data.
Some browser extensions for spell-checking send this information to external servers.`]}),`
`,(0,A.jsxs)(r.p,{children:[`Set `,(0,A.jsx)(r.code,{children:`autocorrect="off"`}),` on those fields too.
Some browsers underline a correctly spelled name, and autocorrection can replace what the user typed.
Browsers already force autocorrection off for `,(0,A.jsx)(r.code,{children:`email`}),`, `,(0,A.jsx)(r.code,{children:`url`}),` and `,(0,A.jsx)(r.code,{children:`password`}),` inputs, so setting the attribute there only makes it explicit.`]}),`
`,(0,A.jsx)(r.p,{children:`Apply automatic assistance where possible.
For example, in logged-in systems, pre-filling known values can prevent errors and save time.`}),`
`,(0,A.jsxs)(r.p,{children:[`Set `,(0,A.jsx)(r.code,{children:`autocomplete`}),` on every field that collects information about the user.
Naming the purpose of a field makes it programmatically determinable, which is what `,(0,A.jsx)(r.a,{href:`https://www.w3.org/TR/WCAG22/#identify-input-purpose`,rel:`nofollow`,children:`WCAG 1.3.5`}),` Identify Input Purpose asks for.
Browsers offering to fill the field in follows from that; it is not the requirement itself.`]}),`
`,(0,A.jsx)(r.p,{children:`A Text Input must have a Label, and in most cases, this label should be visible.`}),`
`,(0,A.jsx)(r.h2,{id:`examples`,children:`Examples`}),`
`,(0,A.jsx)(r.h3,{id:`type-email-address`,children:`Type: Email address`}),`
`,(0,A.jsx)(r.p,{children:`This field helps the user enter an email address.
It has built-in validation to check for a valid email format.
However, do not rely only on the browser’s validation.`}),`
`,(0,A.jsxs)(r.p,{children:[`The `,(0,A.jsx)(r.code,{children:`email`}),` input field looks like a standard text input.
On some devices, it may show an email-specific keyboard.`]}),`
`,(0,A.jsx)(r.p,{children:`Consider setting the following attributes:`}),`
`,(0,A.jsxs)(r.ol,{children:[`
`,(0,A.jsxs)(r.li,{children:[`Set `,(0,A.jsx)(r.code,{children:`autocomplete="email"`}),` to help browsers autofill the user’s email address.`]}),`
`,(0,A.jsxs)(r.li,{children:[`Set `,(0,A.jsx)(r.code,{children:`autocorrect="off"`}),` and `,(0,A.jsx)(r.code,{children:`spellcheck="false"`}),` to stop browsers automatically changing user input.
Email addresses shouldn’t be checked for spelling or grammar.
This may also prevent posting the email address to third-party plugins.`]}),`
`]}),`
`,(0,A.jsxs)(r.p,{children:[`Follow the `,(0,A.jsx)(r.a,{href:`https://design-system.service.gov.uk/patterns/email-addresses/`,rel:`nofollow`,children:`guidelines for asking for email addresses`}),` of the GOV.UK Design System.`]}),`
`,(0,A.jsx)(a,{of:h}),`
`,(0,A.jsx)(r.h3,{id:`type-web-address`,children:`Type: Web address`}),`
`,(0,A.jsx)(r.p,{children:`This field helps the user enter a web address or URL.
It has built-in validation to check for a valid format.
However, do not rely only on the browser’s validation.`}),`
`,(0,A.jsxs)(r.p,{children:[`The `,(0,A.jsx)(r.code,{children:`url`}),` input field looks like a standard text input.
On some devices, it may show a URL-specific keyboard to aid in entering web addresses.`]}),`
`,(0,A.jsx)(r.p,{children:`Consider setting the following attributes:`}),`
`,(0,A.jsxs)(r.ol,{children:[`
`,(0,A.jsxs)(r.li,{children:[`Set `,(0,A.jsx)(r.code,{children:`autocomplete="url"`}),` to help browsers autofill the user’s web address.`]}),`
`,(0,A.jsxs)(r.li,{children:[`Set `,(0,A.jsx)(r.code,{children:`autocorrect="off"`}),` and `,(0,A.jsx)(r.code,{children:`spellcheck="false"`}),` to stop browsers automatically changing user input.
Email addresses shouldn’t be checked for spelling or grammar.
This may also prevent posting the web address to third-party plugins.`]}),`
`]}),`
`,(0,A.jsx)(a,{of:x}),`
`,(0,A.jsx)(r.h3,{id:`type-phone-number`,children:`Type: Phone number`}),`
`,(0,A.jsx)(r.p,{children:`This field helps the user enter a phone number.
It has built-in validation to check for a valid format.
However, do not rely only on the browser’s validation.`}),`
`,(0,A.jsxs)(r.p,{children:[`The `,(0,A.jsx)(r.code,{children:`tel`}),` input field looks like a standard text input.
On mobile devices, it may display a numeric keypad or a keyboard optimized for entering phone numbers.`]}),`
`,(0,A.jsx)(r.p,{children:`Guidelines:`}),`
`,(0,A.jsxs)(r.ol,{children:[`
`,(0,A.jsxs)(r.li,{children:[`Set `,(0,A.jsx)(r.code,{children:`autocomplete="tel"`}),` to help browsers autofill the user’s phone number.`]}),`
`]}),`
`,(0,A.jsxs)(r.p,{children:[`Follow the `,(0,A.jsx)(r.a,{href:`https://design-system.service.gov.uk/patterns/telephone-numbers/`,rel:`nofollow`,children:`guidelines for asking for telephone numbers`}),` of the GOV.UK Design System.`]}),`
`,(0,A.jsx)(a,{of:y}),`
`,(0,A.jsx)(r.h3,{id:`type-whole-number`,children:`Type: Whole number`}),`
`,(0,A.jsxs)(r.p,{children:[`This field helps the user enter a whole number.
Avoid using `,(0,A.jsx)(r.code,{children:`type="number"`}),` as it has several usability and accessibility issues.
Instead, we use `,(0,A.jsx)(r.code,{children:`inputMode="numeric"`}),`, which enables the browser to display a numeric keypad.
Include `,(0,A.jsx)(r.code,{children:`pattern="[0-9]*"`}),` to allow only whole numbers.
However, do not rely only on the browser’s validation.`]}),`
`,(0,A.jsxs)(r.p,{children:[`This follows guidelines of `,(0,A.jsx)(r.a,{href:`https://www.nldesignsystem.nl/richtlijnen/formulieren/wanneer-welk-form-element/iedereen-kan-invullen#input-typenumber-versus-inputmodenumeric`,rel:`nofollow`,children:`NL Design System`}),` and the `,(0,A.jsx)(r.a,{href:`https://technology.blog.gov.uk/2020/02/24/why-the-gov-uk-design-system-team-changed-the-input-type-for-numbers/`,rel:`nofollow`,children:`GOV.UK Design System`}),`.`]}),`
`,(0,A.jsx)(a,{of:S}),`
`,(0,A.jsx)(r.h3,{id:`type-decimal-number`,children:`Type: Decimal number`}),`
`,(0,A.jsxs)(r.p,{children:[`This field helps the user enter a decimal number.
Avoid using `,(0,A.jsx)(r.code,{children:`type="number"`}),` as it has several usability and accessibility issues.
Also, do not include `,(0,A.jsx)(r.code,{children:`inputMode="decimal"`}),`; some devices may display a keypad that lacks a key for the decimal separator.
In such cases, the user will not have access to a numeric keypad.
Include `,(0,A.jsx)(r.code,{children:`pattern="[0-9.,]*"`}),` to permit decimal numbers, using points and commas to separate decimals and digit groups according to different cultures.
However, do not rely only on the browser’s validation.`]}),`
`,(0,A.jsxs)(r.p,{children:[`We follow the advice against using `,(0,A.jsx)(r.code,{children:`type="number"`}),` by `,(0,A.jsx)(r.a,{href:`https://www.nldesignsystem.nl/richtlijnen/formulieren/wanneer-welk-form-element/iedereen-kan-invullen#input-typenumber-versus-inputmodenumeric`,rel:`nofollow`,children:`NL Design System`}),` and the `,(0,A.jsx)(r.a,{href:`https://technology.blog.gov.uk/2020/02/24/why-the-gov-uk-design-system-team-changed-the-input-type-for-numbers/`,rel:`nofollow`,children:`GOV.UK Design System`}),`.`]}),`
`,(0,A.jsx)(a,{of:p}),`
`,(0,A.jsx)(r.h3,{id:`size`,children:`Size`}),`
`,(0,A.jsxs)(r.p,{children:[`Match the width of the input to the expected length of its content.
Use the `,(0,A.jsx)(r.code,{children:`size`}),` attribute for this.
The input won’t grow beyond the width of its container.`]}),`
`,(0,A.jsx)(r.p,{children:`Avoid sizes that feel cramped: the user needs room to type and review comfortably.
Extra space also leaves room for icons or buttons that browsers and extensions may add.`}),`
`,(0,A.jsx)(r.p,{children:`As a rule of thumb: 7 for a postal code, 15 for a phone number, 30 for an email address, and 40 for a web address.`}),`
`,(0,A.jsx)(a,{of:b}),`
`,(0,A.jsx)(r.h3,{id:`invalid`,children:`Invalid`}),`
`,(0,A.jsxs)(r.p,{children:[`Indicates that the input value does not meet the specified constraints.
An `,(0,A.jsx)(r.a,{href:`/docs/components-forms-error-message--docs`,children:`Error Message`}),` must be displayed above the field.
To highlight the error even more, the parent `,(0,A.jsx)(r.a,{href:`/docs/components-forms-field--docs`,children:`Field`}),` component’s `,(0,A.jsx)(r.code,{children:`invalid`}),` prop must also be set.`]}),`
`,(0,A.jsx)(a,{of:v}),`
`,(0,A.jsx)(r.h3,{id:`disabled`,children:`Disabled`}),`
`,(0,A.jsx)(r.p,{children:`A field that can not (yet) be used is indicated with a grey border.
It will not respond to interactions, e.g. with the mouse or keyboard.`}),`
`,(0,A.jsx)(a,{of:m}),`
`,(0,A.jsx)(r.h3,{id:`in-a-field`,children:`In a Field`}),`
`,(0,A.jsx)(r.p,{children:`Use a Field to group a Text Input with a Label, description and / or an Error Message.`}),`
`,(0,A.jsxs)(r.p,{children:[`If you don’t need the description, remove its Paragraph and the `,(0,A.jsx)(r.code,{children:`aria-describedby`}),` from the Text Input.`]}),`
`,(0,A.jsxs)(r.p,{children:[`Check `,(0,A.jsx)(r.a,{href:`/docs/components-forms-field--docs`,children:`the Field docs`}),` for more information on configuring it.`]}),`
`,(0,A.jsx)(a,{of:g}),`
`,(0,A.jsx)(r.h3,{id:`in-a-field-with-validation`,children:`In a Field with validation`}),`
`,(0,A.jsxs)(r.p,{children:[`If the Text Input can become invalid, add an Error Message and its `,(0,A.jsx)(r.code,{children:`id`}),` to the `,(0,A.jsx)(r.code,{children:`aria-describedby`}),` attribute of the Text Input.`]}),`
`,(0,A.jsxs)(r.p,{children:[`Check `,(0,A.jsx)(r.a,{href:`/docs/components-forms-field--docs`,children:`the Field docs`}),` for more information on configuring it.`]}),`
`,(0,A.jsx)(a,{of:_}),`
`,(0,A.jsx)(r.h2,{id:`see-also`,children:`See also`}),`
`,(0,A.jsxs)(r.ul,{children:[`
`,(0,A.jsxs)(r.li,{children:[(0,A.jsx)(r.a,{href:`/docs/components-forms-text-area--docs`,children:`Text Area`}),` – for multi-line text input.`]}),`
`,(0,A.jsxs)(r.li,{children:[(0,A.jsx)(r.a,{href:`/docs/components-forms-password-input--docs`,children:`Password Input`}),` – for sensitive single-line text.`]}),`
`,(0,A.jsxs)(r.li,{children:[(0,A.jsx)(r.a,{href:`/docs/components-forms-date-input--docs`,children:`Date Input`}),` – for entering a date.`]}),`
`,(0,A.jsxs)(r.li,{children:[(0,A.jsx)(r.a,{href:`/docs/components-forms-time-input--docs`,children:`Time Input`}),` – for entering a time.`]}),`
`,(0,A.jsxs)(r.li,{children:[(0,A.jsx)(r.a,{href:`/docs/components-forms-search-field--docs`,children:`Search Field`}),` – for searching the content of the site.`]}),`
`,(0,A.jsxs)(r.li,{children:[(0,A.jsx)(r.a,{href:`/docs/components-forms-field--docs`,children:`Field`}),` – wraps a Text Input with its Label, description, and Error Message.`]}),`
`,(0,A.jsxs)(r.li,{children:[`Extensive `,(0,A.jsx)(r.a,{href:`https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text`,rel:`nofollow`,children:`guidelines for all types of input`}),` on Mozilla Developer Network.`]}),`
`,(0,A.jsxs)(r.li,{children:[`At the same site, an overview of `,(0,A.jsx)(r.a,{href:`https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/autocomplete#token_list_tokens`,rel:`nofollow`,children:`autocompletion values`}),` which help enter personal details faster.`]}),`
`]}),`
`,(0,A.jsx)(r.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,A.jsx)(d,{tokens:E})]})}function k(e={}){let{wrapper:t}={...l(),...e.components};return t?(0,A.jsx)(t,{...e,children:(0,A.jsx)(O,{...e})}):O(e)}var A;e((()=>{A=c(),f(),r(),u(),D(),C()}))();export{k as default};