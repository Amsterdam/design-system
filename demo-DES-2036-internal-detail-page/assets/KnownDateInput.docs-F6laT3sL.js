import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,d as n,h as r,i,n as a,p as o,u as s}from"./blocks-BFa-eblR.js";import{t as c}from"./jsx-runtime-ATHzeHXA.js";import{i as l,r as u}from"./react-Dyi61YEg.js";import{n as d,t as f}from"./DesignTokensTable-B7q-rfnC.js";import{a as p,i as m,n as h,o as g,r as _,t as v}from"./KnownDateInput.stories-BRVNs4tw.js";var y,b;function x(){return(x=e((()=>{y={"known-date-input":{"column-gap":{$value:`{ams.space.m}`,$description:`The space between the fields of the date.`,$extensions:{"nl.amsterdam.hint":`Must be a single value: it sets a longhand property, which takes only one.`,"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"row-gap":{$value:`{ams.space.m}`,$description:`The space between rows of fields, once the component wraps at narrow widths or large text sizes.`,$extensions:{"nl.amsterdam.hint":`Must be a single value: it sets a longhand property, which takes only one.`,"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},input:{"inline-size":{$value:`calc(3ch + (2 * {ams.inputs.padding-inline}) + (2 * {ams.inputs.border-width}))`,$description:"Fits a two-digit day or month, with a character to spare for the caret. Includes the padding and border of the input, which sizes itself with `border-box`.",$extensions:{"nl.amsterdam.hint":`Must be a single value: it sets a longhand property, which takes only one.`,"nl.amsterdam.type":`dimension`}},year:{"inline-size":{$value:`calc(5ch + (2 * {ams.inputs.padding-inline}) + (2 * {ams.inputs.border-width}))`,$description:"Fits a four-digit year, with a character to spare for the caret. Includes the padding and border of the input, which sizes itself with `border-box`.",$extensions:{"nl.amsterdam.hint":`Must be a single value: it sets a longhand property, which takes only one.`,"nl.amsterdam.type":`dimension`}}}},field:{"row-gap":{$value:`{ams.space.s}`,$description:`The space between the label of a field and its input.`,$extensions:{"nl.amsterdam.hint":`Must be a single value: it sets a longhand property, which takes only one.`,"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}}}},b={ams:y}})))()}function S(e){let r={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...l(),...e.components};return(0,w.jsxs)(w.Fragment,{children:[`
`,`
`,`
`,`
`,(0,w.jsx)(s,{of:_}),`
`,(0,w.jsx)(o,{}),`
`,(0,w.jsx)(t,{of:_}),`
`,(0,w.jsx)(n,{}),`
`,(0,w.jsx)(i,{}),`
`,(0,w.jsx)(r.h2,{id:`subcomponents`,children:`Subcomponents`}),`
`,(0,w.jsxs)(r.p,{children:[`Compose a Known Date Input from its Day, Month, and Year parts.
Each part renders a `,(0,w.jsx)(r.a,{href:`/docs/components-forms-label--docs`,children:`Label`}),` and a `,(0,w.jsx)(r.a,{href:`/docs/components-forms-text-input--docs`,children:`Text Input`}),`, links the two, sets a numeric keyboard, a fitting width, and a chosen autocomplete value.
Everything else you pass to a part, such as `,(0,w.jsx)(r.code,{children:`name`}),`, `,(0,w.jsx)(r.code,{children:`invalid`}),`, a `,(0,w.jsx)(r.code,{children:`ref`}),`, or a `,(0,w.jsx)(r.code,{children:`className`}),`, goes to its input.`]}),`
`,(0,w.jsxs)(r.p,{children:[`The labels default to Dag, Maand, and Jaar.
Set `,(0,w.jsx)(r.code,{children:`label`}),` on each field for a form in another language.`]}),`
`,(0,w.jsx)(r.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,w.jsx)(r.h3,{id:`when-to-use`,children:`When to use`}),`
`,(0,w.jsx)(r.p,{children:`Use a Known Date Input for a date the user already knows or can copy from a document in front of them: a date of birth, the expiry date of a passport, the day something happened.
Separate fields let someone type the date the way they would say it, without first working out which format the browser expects.`}),`
`,(0,w.jsxs)(r.p,{children:[`Both `,(0,w.jsx)(r.a,{href:`https://nldesignsystem.nl/richtlijnen/formulieren/wanneer-welk-form-element/iedereen-kan-invullen`,rel:`nofollow`,children:`NL Design System`}),` and `,(0,w.jsx)(r.a,{href:`https://design-system.service.gov.uk/components/date-input/`,rel:`nofollow`,children:`gov.uk`}),` recommend this pattern for these dates.`]}),`
`,(0,w.jsx)(r.h3,{id:`when-not-to-use`,children:`When not to use`}),`
`,(0,w.jsxs)(r.p,{children:[`Use a `,(0,w.jsx)(r.a,{href:`/docs/components-forms-date-input--docs`,children:`Date Input`}),` for a date that the user has to look up, such as for an appointment.
Its native control opens a calendar to browse, which a group of text fields cannot offer.`]}),`
`,(0,w.jsxs)(r.p,{children:[`Use a `,(0,w.jsx)(r.a,{href:`/docs/components-forms-date-picker--docs`,children:`Date Picker`}),` when the user has to choose a date or a date range from a calendar they can see, such as when booking an appointment.`]}),`
`,(0,w.jsx)(r.h3,{id:`how-to-use`,children:`How to use`}),`
`,(0,w.jsxs)(r.p,{children:[`Wrap a Known Date Input in a `,(0,w.jsx)(r.a,{href:`/docs/components-forms-field-set--docs`,children:`Field Set`}),` whose legend asks for the date as a question.`]}),`
`,(0,w.jsxs)(r.p,{children:[`Put a Paragraph with an example date above the Known Date Input and connect it to the Field Set with `,(0,w.jsx)(r.code,{children:`aria-describedby`}),`.
Write the example in the order the fields appear, so it doubles as a format hint.`]}),`
`,(0,w.jsxs)(r.p,{children:[`Set `,(0,w.jsx)(r.code,{children:`autoComplete`}),` to `,(0,w.jsx)(r.code,{children:`birth-date`}),` for a date of birth, or to `,(0,w.jsx)(r.code,{children:`credit-card-expiry-date`}),` for the expiry date of a payment card, so browsers and password managers that support it can fill in the date.`]}),`
`,(0,w.jsxs)(r.p,{children:[`Give each field an `,(0,w.jsx)(r.code,{children:`id`}),` so that an `,(0,w.jsx)(r.a,{href:`/docs/components-forms-invalid-form-alert--docs`,children:`Invalid Form Alert`}),` can link to it.
If you set an `,(0,w.jsx)(r.code,{children:`id`}),` or a `,(0,w.jsx)(r.code,{children:`name`}),`, include the English word for its part in at least one of them, such as `,(0,w.jsx)(r.code,{children:`birth-date-day`}),`.
Safari on iOS only autofills a field when its `,(0,w.jsx)(r.code,{children:`id`}),` or `,(0,w.jsx)(r.code,{children:`name`}),` contains that word, whatever language the page or the phone is in.
The `,(0,w.jsx)(r.code,{children:`id`}),` a field generates for itself already does.`]}),`
`,(0,w.jsxs)(r.p,{children:[`Accept what the user types in the format they type it.
Both `,(0,w.jsx)(r.code,{children:`1`}),` and `,(0,w.jsx)(r.code,{children:`01`}),` are a valid month, and rejecting one of the two gives the user an unnecessary task.`]}),`
`,(0,w.jsx)(r.h2,{id:`examples`,children:`Examples`}),`
`,(0,w.jsx)(r.h3,{id:`in-a-field-set`,children:`In a Field Set`}),`
`,(0,w.jsx)(r.p,{children:`Use a Field Set to give the fields a legend, a description and, when needed, an Error Message.`}),`
`,(0,w.jsxs)(r.p,{children:[`Check `,(0,w.jsx)(r.a,{href:`/docs/components-forms-field-set--docs`,children:`the Field Set docs`}),` for more information on configuring it.`]}),`
`,(0,w.jsx)(a,{of:v}),`
`,(0,w.jsx)(r.h3,{id:`in-a-field-set-with-validation`,children:`In a Field Set with validation`}),`
`,(0,w.jsxs)(r.p,{children:[`The component does not validate its values itself.
To report an error, add `,(0,w.jsx)(r.code,{children:`invalid`}),` and an `,(0,w.jsx)(r.a,{href:`/docs/components-forms-error-message--docs`,children:`Error Message`}),` to the Field Set, and connect the Error Message to the Field Set with `,(0,w.jsx)(r.code,{children:`aria-describedby`}),`.
Set `,(0,w.jsx)(r.code,{children:`invalid`}),` only on the fields that are at fault.`]}),`
`,(0,w.jsxs)(r.p,{children:[`See the `,(0,w.jsx)(r.a,{href:`https://design-system.service.gov.uk/components/date-input/#error-messages`,rel:`nofollow`,children:`gov.uk documentation on validating this pattern`}),` for how to word the message.`]}),`
`,(0,w.jsx)(a,{of:h}),`
`,(0,w.jsx)(r.h3,{id:`month-and-year`,children:`Month and year`}),`
`,(0,w.jsx)(r.p,{children:`Ask only for the parts of the date you need.
Leave out the Day for a month and a year.`}),`
`,(0,w.jsx)(a,{of:m}),`
`,(0,w.jsx)(r.h3,{id:`translated`,children:`Translated`}),`
`,(0,w.jsxs)(r.p,{children:[`The labels default to Dutch, and the fields appear in the order you place them.
For a form in another language, set `,(0,w.jsx)(r.code,{children:`label`}),` on each field and place the fields in the order its readers expect.
This example asks for a date of birth in American English, which puts the month first.
Make sure the `,(0,w.jsx)(r.code,{children:`lang`}),` attribute is in effect; see the `,(0,w.jsx)(r.a,{href:`/docs/docs-guidelines-localisation--docs`,children:`Localisation guide`}),` for more.`]}),`
`,(0,w.jsx)(a,{of:p}),`
`,(0,w.jsx)(r.h2,{id:`design`,children:`Design`}),`
`,(0,w.jsxs)(r.p,{children:[`Each field is as wide as the answer it takes: two digits for a day or a month, four for a year.
That difference is a hint in itself, and it keeps the fields from reading as three interchangeable boxes.
The widths hold without CSS too, because each input also carries a `,(0,w.jsx)(r.code,{children:`size`}),` attribute for its digits.`]}),`
`,(0,w.jsx)(r.p,{children:`The fields wrap onto a second line when they no longer fit beside each other, which happens at narrow widths and at large text sizes.`}),`
`,(0,w.jsx)(r.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,w.jsx)(r.p,{children:`The accessible name of each input comes from its own Label, and the question they answer together comes from the legend of the surrounding Field Set.
A screen reader announces both, so ‘Jaar’ is heard as part of ‘Wanneer ben je geboren?’, not on its own.`}),`
`,(0,w.jsxs)(r.p,{children:[`Unlike a `,(0,w.jsx)(r.a,{href:`/docs/components-forms-date-input--docs`,children:`Date Input`}),`, a Known Date Input shows the same order of day, month, and year to everyone.
A native date control takes its order from the browser and the operating system, which the page cannot change.
Here, the page decides the order, so the example above the fields can match it.`]}),`
`,(0,w.jsx)(r.h2,{id:`see-also`,children:`See also`}),`
`,(0,w.jsxs)(r.ul,{children:[`
`,(0,w.jsxs)(r.li,{children:[(0,w.jsx)(r.a,{href:`/docs/components-forms-date-input--docs`,children:`Date Input`}),` – a native date control for dates the user has to look up.`]}),`
`,(0,w.jsxs)(r.li,{children:[(0,w.jsx)(r.a,{href:`/docs/components-forms-field-set--docs`,children:`Field Set`}),` – groups the fields under one question.`]}),`
`,(0,w.jsxs)(r.li,{children:[(0,w.jsx)(r.a,{href:`/docs/components-forms-text-input--docs`,children:`Text Input`}),` – the input in each field.`]}),`
`,(0,w.jsxs)(r.li,{children:[(0,w.jsx)(r.a,{href:`/docs/components-forms-date-picker--docs`,children:`Date Picker`}),` – lets the user choose a date from a visible calendar.`]}),`
`,(0,w.jsxs)(r.li,{children:[(0,w.jsx)(r.a,{href:`/docs/components-navigation-calendar--docs`,children:`Calendar`}),` – displays content organised by date in a month view.`]}),`
`]}),`
`,(0,w.jsx)(r.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,w.jsx)(f,{tokens:b})]})}function C(e={}){let{wrapper:t}={...l(),...e.components};return t?(0,w.jsx)(t,{...e,children:(0,w.jsx)(S,{...e})}):S(e)}var w;function T(){return(T=e((()=>{w=c(),u(),r(),d(),x(),g()})))()}T();export{C as default};