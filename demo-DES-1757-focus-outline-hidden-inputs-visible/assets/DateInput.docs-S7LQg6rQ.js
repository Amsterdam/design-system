import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-BrayXyei.js";import{r as n}from"./react-oCAR5XSR.js";import{c as r,f as i,i as a,l as o,n as s,s as c}from"./blocks-BhO9q2Cc.js";import{n as l,t as u}from"./DesignTokensTable-CJgajNVN.js";import{t as d}from"./mdx-react-shim-9Tyt82po.js";import{DateTime as f,Disabled as p,InAField as m,InAFieldWithValidation as h,Invalid as g,MemorableDate as _,MemorableDateWithValidation as v,n as y,t as b}from"./DateInput.stories-J8bfLdj6.js";var x,S=e((()=>{x=`<!-- @license CC0-1.0 -->

# Date Input

Helps users enter a date.

## Visual considerations

This component uses a native date input, which is styled differently in different browsers and operating systems.
Recreating the native functionality is quite difficult and prone to accessibility errors, which is why we’ve chosen not to do that.
This does mean that this component does not look identical on all browsers and operating systems.
`})),C,w,T=e((()=>{C={"date-input":{"background-color":{$value:`{ams.inputs.background-color}`,$type:`color`},"border-color":{$value:`{ams.inputs.border-color}`,$type:`color`},"border-style":{$value:`{ams.inputs.border-style}`,$extensions:{"nl.amsterdam.type":`borderStyle`}},"border-width":{$value:`{ams.inputs.border-width}`,$extensions:{"nl.amsterdam.type":`borderWidth`}},color:{$value:`{ams.inputs.color}`,$type:`color`},"font-family":{$value:`{ams.inputs.font-family}`,$type:`fontFamily`},"font-size":{$value:`{ams.inputs.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"font-weight":{$value:`{ams.inputs.font-weight}`,$type:`fontWeight`},"line-height":{$value:`{ams.inputs.line-height}`,$extensions:{"nl.amsterdam.type":`lineHeight`}},"outline-offset":{$value:`{ams.inputs.outline-offset}`,$type:`dimension`,$extensions:{"nl.amsterdam.subtype":`space`}},"padding-block":{$value:`{ams.inputs.padding-block}`,$type:`dimension`,$extensions:{"nl.amsterdam.subtype":`space`}},"padding-inline":{$value:`{ams.inputs.padding-inline}`,$type:`dimension`,$extensions:{"nl.amsterdam.subtype":`space`}},disabled:{color:{$value:`{ams.inputs.disabled.color}`,$type:`color`},cursor:{$value:`{ams.cursor.disabled}`},"calendar-picker-indicator":{"background-image":{$deprecated:`Will be removed in release 6.0.0.`,$value:`url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 36 36' fill='%23767676'><path d='M28 6V2h-4v4H12V2H8v4H2v28h32V6zm2 24H6V14h24z'/><path d='M10 17h4v4h-4zm6 0h4v4h-4zm6 0h4v4h-4zm-12 6h4v4h-4zm6 0h4v4h-4z'/></svg>")`}},"calender-picker-indicator":{"background-image":{$deprecated:"Use `ams.date-input.disabled.calendar-picker-indicator.background-image` instead. Will be removed in release 4.0.0.",$value:`url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 36 36' fill='%23767676'><path d='M28 6V2h-4v4H12V2H8v4H2v28h32V6zm2 24H6V14h24z'/><path d='M10 17h4v4h-4zm6 0h4v4h-4zm6 0h4v4h-4zm-12 6h4v4h-4zm6 0h4v4h-4z'/></svg>")`}}},hover:{"box-shadow":{$type:`shadow`,$value:`{ams.inputs.hover.box-shadow}`},"calendar-picker-indicator":{"background-image":{$value:`url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 36 36' fill='%23003677'><path d='M28 6V2h-4v4H12V2H8v4H2v28h32V6zm2 24H6V14h24z'/><path d='M10 17h4v4h-4zm6 0h4v4h-4zm6 0h4v4h-4zm-12 6h4v4h-4zm6 0h4v4h-4z'/></svg>")`}},"calender-picker-indicator":{"background-image":{$deprecated:"Use `ams.date-input.hover.calendar-picker-indicator.background-image` instead. Will be removed in release 4.0.0.",$value:`url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 36 36' fill='%23003677'><path d='M28 6V2h-4v4H12V2H8v4H2v28h32V6zm2 24H6V14h24z'/><path d='M10 17h4v4h-4zm6 0h4v4h-4zm6 0h4v4h-4zm-12 6h4v4h-4zm6 0h4v4h-4z'/></svg>")`}}},invalid:{"border-color":{$value:`{ams.inputs.invalid.border-color}`,$type:`color`},hover:{"border-color":{$value:`{ams.inputs.invalid.hover.border-color}`,$type:`color`},"box-shadow":{$type:`shadow`,$value:`{ams.inputs.invalid.hover.box-shadow}`}}},"calendar-picker-indicator":{"background-image":{$value:`url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 36 36' fill='%23004699'><path d='M28 6V2h-4v4H12V2H8v4H2v28h32V6zm2 24H6V14h24z'/><path d='M10 17h4v4h-4zm6 0h4v4h-4zm6 0h4v4h-4zm-12 6h4v4h-4zm6 0h4v4h-4z'/></svg>")`},cursor:{$value:`{ams.cursor.interactive}`}},"calender-picker-indicator":{"background-image":{$deprecated:"Use `ams.date-input.calendar-picker-indicator.background-image` instead. Will be removed in release 4.0.0.",$value:`url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 36 36' fill='%23004699'><path d='M28 6V2h-4v4H12V2H8v4H2v28h32V6zm2 24H6V14h24z'/><path d='M10 17h4v4h-4zm6 0h4v4h-4zm6 0h4v4h-4zm-12 6h4v4h-4zm6 0h4v4h-4z'/></svg>")`},cursor:{$deprecated:"Use `ams.date-input.calendar-picker-indicator.cursor` instead. Will be removed in release 4.0.0.",$value:`{ams.cursor.interactive}`}}}},w={ams:C}}));function E(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,...n(),...e.components};return(0,O.jsxs)(O.Fragment,{children:[`
`,`
`,`
`,`
`,(0,O.jsx)(r,{of:b}),`
`,(0,O.jsx)(c,{children:x}),`
`,(0,O.jsx)(o,{}),`
`,(0,O.jsx)(a,{}),`
`,(0,O.jsx)(t.h2,{id:`asking-for-memorable-or-easy-to-find-dates`,children:`Asking for memorable or easy to find dates`}),`
`,(0,O.jsx)(t.p,{children:`When asking for a date that is easy to remember or find, like a birthday or passport expiration date,
use a Field Set with separate Text Inputs for day, month, and year.
This approach is easier to use than using a Date Input component.`}),`
`,(0,O.jsxs)(t.p,{children:[`For more information on this pattern, see the `,(0,O.jsx)(t.a,{href:`https://design-system.service.gov.uk/components/date-input/`,rel:`nofollow`,children:`gov.uk`}),` and `,(0,O.jsx)(t.a,{href:`https://nldesignsystem.nl/richtlijnen/formulieren/wanneer-welk-form-element/iedereen-kan-invullen`,rel:`nofollow`,children:`NL Design System`}),` documentation.`]}),`
`,(0,O.jsx)(t.h3,{id:`memorable-date`,children:`Memorable date`}),`
`,(0,O.jsx)(s,{of:_}),`
`,(0,O.jsx)(t.h3,{id:`memorable-date-with-validation`,children:`Memorable date with validation`}),`
`,(0,O.jsxs)(t.p,{children:[`To show validation errors, add `,(0,O.jsx)(t.code,{children:`invalid`}),` and an `,(0,O.jsx)(t.a,{href:`/docs/components-forms-error-message--docs`,children:`Error Message`}),` to the Field Set.
Make sure to connect the Error Message to the Field Set, otherwise this won’t be read by a screen reader.
Additionally, apply the `,(0,O.jsx)(t.code,{children:`invalid`}),` prop to the Text Inputs to visually indicate the error.
Only use the `,(0,O.jsx)(t.code,{children:`invalid`}),` prop on Text Inputs that have errors.
For example, only mark the 'year' input as invalid if the year is not provided.`]}),`
`,(0,O.jsxs)(t.p,{children:[`See the `,(0,O.jsx)(t.a,{href:`https://design-system.service.gov.uk/components/date-input/#error-messages`,rel:`nofollow`,children:`gov.uk`}),` documentation on validation for this pattern.`]}),`
`,(0,O.jsx)(s,{of:v}),`
`,(0,O.jsx)(t.h2,{id:`examples-of-the-date-input`,children:`Examples of the Date Input`}),`
`,(0,O.jsx)(t.h3,{id:`date-and-time`,children:`Date and time`}),`
`,(0,O.jsxs)(t.p,{children:[`To let the user select a specific time on a date, use the `,(0,O.jsx)(t.code,{children:`datetime-local`}),` type.
Note that the control’s UI varies in general from browser to browser.`]}),`
`,(0,O.jsx)(t.p,{children:`The value represents a local date and time, not necessarily the user’s local date and time.
In other words, the input allows any valid combination of year, month, day, hour, and minute — even if such a combination is invalid in the user’s local time zone.`}),`
`,(0,O.jsx)(s,{of:f}),`
`,(0,O.jsx)(t.h3,{id:`invalid`,children:`Invalid`}),`
`,(0,O.jsxs)(t.p,{children:[`Indicates that the input value does not meet the specified constraints.
An `,(0,O.jsx)(t.a,{href:`/docs/components-forms-error-message--docs`,children:`Error Message`}),` must be displayed above the field.
To highlight the error even more, the parent `,(0,O.jsx)(t.a,{href:`/docs/components-forms-field--docs`,children:`Field`}),` component’s `,(0,O.jsx)(t.code,{children:`invalid`}),` prop must also be set.`]}),`
`,(0,O.jsx)(s,{of:g}),`
`,(0,O.jsx)(t.h3,{id:`disabled`,children:`Disabled`}),`
`,(0,O.jsx)(t.p,{children:`A field that can not (yet) be used is indicated with a grey border.
It will not respond to interactions, e.g. with the mouse or keyboard.`}),`
`,(0,O.jsx)(t.p,{children:`Avoid disabling input fields.
They cause usability and accessibility problems.`}),`
`,(0,O.jsx)(t.p,{children:`Disabled fields are often skipped by screen readers.
This makes it hard for the user who rely on assistive technologies to understand the form’s content.
They are not included in form submissions, which can lead to incomplete or missing data.`}),`
`,(0,O.jsx)(t.p,{children:`Alternatives:`}),`
`,(0,O.jsxs)(t.ol,{children:[`
`,(0,O.jsxs)(t.li,{children:[`Use the `,(0,O.jsx)(t.code,{children:`readonly`}),` attribute.
This makes a field uneditable but keeps it accessible and included in form submissions.`]}),`
`,(0,O.jsxs)(t.li,{children:[`Display data as plain text or within a non-input element like a `,(0,O.jsx)(t.code,{children:`span`}),` or `,(0,O.jsx)(t.code,{children:`div`}),`.`]}),`
`,(0,O.jsx)(t.li,{children:`Use conditional logic to hide or show fields based on user interaction.
This ensures all necessary fields are accessible and editable when needed.`}),`
`,(0,O.jsx)(t.li,{children:`Use a label or text to explain why a field is not editable if you must disable it temporarily.
This helps the user understand the context.`}),`
`]}),`
`,(0,O.jsx)(s,{of:p}),`
`,(0,O.jsx)(t.h3,{id:`in-a-field`,children:`In a Field`}),`
`,(0,O.jsx)(t.p,{children:`Use a Field to group a Date Input with a Label, description and / or an Error Message.`}),`
`,(0,O.jsxs)(t.p,{children:[`If you don’t need the description, remove its Paragraph and the `,(0,O.jsx)(t.code,{children:`aria-describedby`}),` from the Date Input.`]}),`
`,(0,O.jsxs)(t.p,{children:[`Check `,(0,O.jsx)(t.a,{href:`/docs/components-forms-field--docs`,children:`the Field docs`}),` for more information on configuring it.`]}),`
`,(0,O.jsx)(s,{of:m}),`
`,(0,O.jsx)(t.h3,{id:`in-a-field-with-validation`,children:`In a Field with validation`}),`
`,(0,O.jsxs)(t.p,{children:[`If the Date Input can become invalid, add an Error Message and its `,(0,O.jsx)(t.code,{children:`id`}),` to the `,(0,O.jsx)(t.code,{children:`aria-describedby`}),` attribute of the Date Input.`]}),`
`,(0,O.jsxs)(t.p,{children:[`Check `,(0,O.jsx)(t.a,{href:`/docs/components-forms-field--docs`,children:`the Field docs`}),` for more information on configuring it.`]}),`
`,(0,O.jsx)(s,{of:h}),`
`,(0,O.jsx)(t.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,O.jsx)(u,{tokens:w})]})}function D(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,O.jsx)(t,{...e,children:(0,O.jsx)(E,{...e})}):E(e)}var O;e((()=>{O=t(),d(),i(),y(),S(),T(),l()}))();export{D as default};