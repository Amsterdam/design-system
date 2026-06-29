import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-BqsN2jGA.js";import{a as n,f as r,i,l as a,m as o,n as s,u as c,v as l}from"./iframe-Dh7IHxOE.js";import{n as u,t as d}from"./DesignTokensTable-BMzrgnx-.js";import{t as f}from"./mdx-react-shim-Bwt_fuh8.js";import{DateTime as p,Disabled as m,InAField as h,InAFieldWithValidation as g,Invalid as _,MemorableDate as v,MemorableDateWithValidation as y,n as b,t as x}from"./DateInput.stories-DFLotX8t.js";var S,C,w=e((()=>{S={"date-input":{"background-color":{$value:`{ams.inputs.background-color}`,$extensions:{"nl.amsterdam.type":`color`}},"border-color":{$value:`{ams.inputs.border-color}`,$extensions:{"nl.amsterdam.type":`color`}},"border-style":{$value:`{ams.inputs.border-style}`,$extensions:{"nl.amsterdam.type":`borderStyle`}},"border-width":{$value:`{ams.inputs.border-width}`,$extensions:{"nl.amsterdam.type":`borderWidth`}},color:{$value:`{ams.inputs.color}`,$extensions:{"nl.amsterdam.type":`color`}},"font-family":{$value:`{ams.inputs.font-family}`,$extensions:{"nl.amsterdam.type":`fontFamily`}},"font-size":{$value:`{ams.inputs.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"font-weight":{$value:`{ams.inputs.font-weight}`,$extensions:{"nl.amsterdam.type":`fontWeight`}},"line-height":{$value:`{ams.inputs.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}},"outline-offset":{$value:`{ams.inputs.outline-offset}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-block":{$value:`{ams.inputs.padding-block}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-inline":{$value:`{ams.inputs.padding-inline}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},disabled:{color:{$value:`{ams.inputs.disabled.color}`,$extensions:{"nl.amsterdam.type":`color`}},cursor:{$value:`{ams.cursor.disabled}`,$extensions:{"nl.amsterdam.type":`cursor`}}},hover:{"box-shadow":{$value:`{ams.inputs.hover.box-shadow}`,$extensions:{"nl.amsterdam.type":`shadow`}},"calendar-picker-indicator":{"background-image":{$value:`url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 36 36' fill='%23003677'><path d='M28 6V2h-4v4H12V2H8v4H2v28h32V6zm2 24H6V14h24z'/><path d='M10 17h4v4h-4zm6 0h4v4h-4zm6 0h4v4h-4zm-12 6h4v4h-4zm6 0h4v4h-4z'/></svg>")`,$extensions:{"nl.amsterdam.type":`backgroundImage`}}}},invalid:{"border-color":{$value:`{ams.inputs.invalid.border-color}`,$extensions:{"nl.amsterdam.type":`color`}},hover:{"border-color":{$value:`{ams.inputs.invalid.hover.border-color}`,$extensions:{"nl.amsterdam.type":`color`}},"box-shadow":{$value:`{ams.inputs.invalid.hover.box-shadow}`,$extensions:{"nl.amsterdam.type":`shadow`}}}},"calendar-picker-indicator":{"background-image":{$value:`url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 36 36' fill='%23004699'><path d='M28 6V2h-4v4H12V2H8v4H2v28h32V6zm2 24H6V14h24z'/><path d='M10 17h4v4h-4zm6 0h4v4h-4zm6 0h4v4h-4zm-12 6h4v4h-4zm6 0h4v4h-4z'/></svg>")`,$extensions:{"nl.amsterdam.type":`backgroundImage`}},cursor:{$value:`{ams.cursor.interactive}`,$extensions:{"nl.amsterdam.type":`cursor`}}}}},C={ams:S}}));function T(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,ul:`ul`,...l(),...e.components};return(0,D.jsxs)(D.Fragment,{children:[`
`,`
`,`
`,`
`,(0,D.jsx)(a,{of:x}),`
`,(0,D.jsx)(r,{}),`
`,(0,D.jsx)(n,{of:x}),`
`,(0,D.jsx)(c,{}),`
`,(0,D.jsx)(i,{}),`
`,(0,D.jsx)(t.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,D.jsx)(t.h3,{id:`when-to-use`,children:`When to use`}),`
`,(0,D.jsx)(t.p,{children:`Use a Date Input when the user must enter a calendar date and the date picker provided by the browser is appropriate.`}),`
`,(0,D.jsx)(t.h3,{id:`when-not-to-use`,children:`When not to use`}),`
`,(0,D.jsx)(t.p,{children:`When asking for a date that is easy to remember or find, like a birthday or passport expiration date,
use a Field Set with separate Text Inputs for day, month, and year.
This approach is easier to use than using a Date Input component.`}),`
`,(0,D.jsxs)(t.p,{children:[`For more information on this pattern, see the `,(0,D.jsx)(t.a,{href:`https://design-system.service.gov.uk/components/date-input/`,rel:`nofollow`,children:`gov.uk`}),` and `,(0,D.jsx)(t.a,{href:`https://nldesignsystem.nl/richtlijnen/formulieren/wanneer-welk-form-element/iedereen-kan-invullen`,rel:`nofollow`,children:`NL Design System`}),` documentation.`]}),`
`,(0,D.jsx)(t.p,{children:`Avoid disabling input fields.
They cause usability and accessibility problems.
Disabled fields are often skipped by screen readers.
This makes it hard for users who rely on assistive technologies to understand the form’s content.
They are not included in form submissions, which can lead to incomplete or missing data.`}),`
`,(0,D.jsx)(t.p,{children:`Alternatives:`}),`
`,(0,D.jsxs)(t.ol,{children:[`
`,(0,D.jsxs)(t.li,{children:[`Use the `,(0,D.jsx)(t.code,{children:`readonly`}),` attribute.
This makes a field uneditable but keeps it accessible and included in form submissions.`]}),`
`,(0,D.jsxs)(t.li,{children:[`Display data as plain text or within a non-input element like a `,(0,D.jsx)(t.code,{children:`span`}),` or `,(0,D.jsx)(t.code,{children:`div`}),`.`]}),`
`,(0,D.jsx)(t.li,{children:`Use conditional logic to hide or show fields based on user interaction.
This ensures all necessary fields are accessible and editable when needed.`}),`
`,(0,D.jsx)(t.li,{children:`Use a label or text to explain why a field is not editable if you must disable it temporarily.
This helps the user understand the context.`}),`
`]}),`
`,(0,D.jsx)(t.h3,{id:`how-to-use`,children:`How to use`}),`
`,(0,D.jsx)(t.p,{children:`Wrap a Date Input in a Field to associate it with a Label, description, and Error Message.`}),`
`,(0,D.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,D.jsx)(t.h3,{id:`memorable-date`,children:`Memorable date`}),`
`,(0,D.jsx)(s,{of:v}),`
`,(0,D.jsx)(t.h3,{id:`memorable-date-with-validation`,children:`Memorable date with validation`}),`
`,(0,D.jsxs)(t.p,{children:[`To show validation errors, add `,(0,D.jsx)(t.code,{children:`invalid`}),` and an `,(0,D.jsx)(t.a,{href:`/docs/components-forms-error-message--docs`,children:`Error Message`}),` to the Field Set.
Make sure to connect the Error Message to the Field Set, otherwise this won’t be read by a screen reader.
Additionally, apply the `,(0,D.jsx)(t.code,{children:`invalid`}),` prop to the Text Inputs to visually indicate the error.
Only use the `,(0,D.jsx)(t.code,{children:`invalid`}),` prop on Text Inputs that have errors.
For example, only mark the ‘year’ input as invalid if the year is not provided.`]}),`
`,(0,D.jsxs)(t.p,{children:[`See the `,(0,D.jsx)(t.a,{href:`https://design-system.service.gov.uk/components/date-input/#error-messages`,rel:`nofollow`,children:`gov.uk`}),` documentation on validation for this pattern.`]}),`
`,(0,D.jsx)(s,{of:y}),`
`,(0,D.jsx)(t.h3,{id:`date-and-time`,children:`Date and time`}),`
`,(0,D.jsxs)(t.p,{children:[`To let the user select a specific time on a date, use the `,(0,D.jsx)(t.code,{children:`datetime-local`}),` type.
Note that the control’s UI varies in general from browser to browser.`]}),`
`,(0,D.jsx)(t.p,{children:`The value represents a local date and time, not necessarily the user’s local date and time.
In other words, the input allows any valid combination of year, month, day, hour, and minute – even if such a combination is invalid in the user’s local time zone.`}),`
`,(0,D.jsx)(s,{of:p}),`
`,(0,D.jsx)(t.h3,{id:`invalid`,children:`Invalid`}),`
`,(0,D.jsxs)(t.p,{children:[`Indicates that the input value does not meet the specified constraints.
An `,(0,D.jsx)(t.a,{href:`/docs/components-forms-error-message--docs`,children:`Error Message`}),` must be displayed above the field.
To highlight the error even more, the parent `,(0,D.jsx)(t.a,{href:`/docs/components-forms-field--docs`,children:`Field`}),` component’s `,(0,D.jsx)(t.code,{children:`invalid`}),` prop must also be set.`]}),`
`,(0,D.jsx)(s,{of:_}),`
`,(0,D.jsx)(t.h3,{id:`disabled`,children:`Disabled`}),`
`,(0,D.jsx)(t.p,{children:`A field that can not (yet) be used is indicated with a grey border.
It will not respond to interactions, e.g. with the mouse or keyboard.`}),`
`,(0,D.jsx)(s,{of:m}),`
`,(0,D.jsx)(t.h3,{id:`in-a-field`,children:`In a Field`}),`
`,(0,D.jsx)(t.p,{children:`Use a Field to group a Date Input with a Label, description and / or an Error Message.`}),`
`,(0,D.jsxs)(t.p,{children:[`If you don’t need the description, remove its Paragraph and the `,(0,D.jsx)(t.code,{children:`aria-describedby`}),` from the Date Input.`]}),`
`,(0,D.jsxs)(t.p,{children:[`Check `,(0,D.jsx)(t.a,{href:`/docs/components-forms-field--docs`,children:`the Field docs`}),` for more information on configuring it.`]}),`
`,(0,D.jsx)(s,{of:h}),`
`,(0,D.jsx)(t.h3,{id:`in-a-field-with-validation`,children:`In a Field with validation`}),`
`,(0,D.jsxs)(t.p,{children:[`If the Date Input can become invalid, add an Error Message and its `,(0,D.jsx)(t.code,{children:`id`}),` to the `,(0,D.jsx)(t.code,{children:`aria-describedby`}),` attribute of the Date Input.`]}),`
`,(0,D.jsxs)(t.p,{children:[`Check `,(0,D.jsx)(t.a,{href:`/docs/components-forms-field--docs`,children:`the Field docs`}),` for more information on configuring it.`]}),`
`,(0,D.jsx)(s,{of:g}),`
`,(0,D.jsx)(t.h2,{id:`design`,children:`Design`}),`
`,(0,D.jsx)(t.p,{children:`This component uses a native date input, which is styled differently in different browsers and operating systems.
Recreating the native functionality is quite difficult and prone to accessibility errors, which is why we’ve chosen not to do that.
This does mean that this component does not look identical on all browsers and operating systems.`}),`
`,(0,D.jsx)(t.h2,{id:`see-also`,children:`See also`}),`
`,(0,D.jsxs)(t.ul,{children:[`
`,(0,D.jsxs)(t.li,{children:[(0,D.jsx)(t.a,{href:`/docs/components-navigation-calendar--docs`,children:`Calendar`}),` – navigate between dates using a calendar view.`]}),`
`,(0,D.jsxs)(t.li,{children:[(0,D.jsx)(t.a,{href:`/docs/components-forms-field--docs`,children:`Field`}),` – wraps a single input with its Label, description, and Error Message.`]}),`
`,(0,D.jsxs)(t.li,{children:[(0,D.jsx)(t.a,{href:`/docs/components-forms-field-set--docs`,children:`Field Set`}),` – use with three Text Inputs for memorable dates instead of a Date Input.`]}),`
`,(0,D.jsxs)(t.li,{children:[(0,D.jsx)(t.a,{href:`/docs/components-forms-time-input--docs`,children:`Time Input`}),` – the counterpart for entering a time.`]}),`
`]}),`
`,(0,D.jsx)(t.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,D.jsx)(d,{tokens:C})]})}function E(e={}){let{wrapper:t}={...l(),...e.components};return t?(0,D.jsx)(t,{...e,children:(0,D.jsx)(T,{...e})}):T(e)}var D;e((()=>{D=t(),f(),o(),u(),w(),b()}))();export{E as default};