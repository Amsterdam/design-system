import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,d as n,h as r,i,n as a,p as o,u as s}from"./blocks-msKSRvUz.js";import{t as c}from"./jsx-runtime-ATHzeHXA.js";import{i as l,r as u}from"./react-Dyi61YEg.js";import{n as d,t as f}from"./DesignTokensTable-BQqgEBG_.js";import{i as p,n as m,r as h,t as g}from"./DateInputGroup.stories-DLN49OUd.js";var _,v;function y(){return(y=e((()=>{_={"date-input-group":{"column-gap":{$value:`{ams.space.m}`,$description:`The space between the fields of the group.`,$extensions:{"nl.amsterdam.hint":`Must be a single value: it sets a longhand property, which takes only one.`,"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"row-gap":{$value:`{ams.space.s}`,$description:`The space between rows of fields, once the group wraps at narrow widths or large text sizes.`,$extensions:{"nl.amsterdam.hint":`Must be a single value: it sets a longhand property, which takes only one.`,"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},field:{"inline-size":{$value:`calc(3ch + (2 * {ams.inputs.padding-inline}) + (2 * {ams.inputs.border-width}))`,$description:"Fits a two-digit value such as a day or a month, with a character to spare for the caret. Includes the padding and border of the input, which sizes itself with `border-box`.",$extensions:{"nl.amsterdam.hint":`Must be a single value: it sets a longhand property, which takes only one.`,"nl.amsterdam.type":`dimension`}},"row-gap":{$value:`{ams.space.s}`,$description:`The space between the label of a field and its input.`,$extensions:{"nl.amsterdam.hint":`Must be a single value: it sets a longhand property, which takes only one.`,"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},wide:{"inline-size":{$value:`calc(5ch + (2 * {ams.inputs.padding-inline}) + (2 * {ams.inputs.border-width}))`,$description:"Fits a four-digit value such as a year, with a character to spare for the caret. Includes the padding and border of the input, which sizes itself with `border-box`.",$extensions:{"nl.amsterdam.hint":`Must be a single value: it sets a longhand property, which takes only one.`,"nl.amsterdam.type":`dimension`}}}}}},v={ams:_}})))()}function b(e){let r={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...l(),...e.components};return(0,S.jsxs)(S.Fragment,{children:[`
`,`
`,`
`,`
`,(0,S.jsx)(s,{of:g}),`
`,(0,S.jsx)(o,{}),`
`,(0,S.jsx)(t,{of:g}),`
`,(0,S.jsx)(n,{}),`
`,(0,S.jsx)(i,{}),`
`,(0,S.jsx)(r.p,{children:`The group itself has no props to configure.
The controls above set the legend and the description of the Field Set in this example.`}),`
`,(0,S.jsx)(r.h2,{id:`subcomponents`,children:`Subcomponents`}),`
`,(0,S.jsxs)(r.p,{children:[`Compose a Date Input Group from Date Input Group Fields, one for each part of the date.
A Field pairs a `,(0,S.jsx)(r.a,{href:`/docs/components-forms-label--docs`,children:`Label`}),` with the `,(0,S.jsx)(r.a,{href:`/docs/components-forms-text-input--docs`,children:`Text Input`}),` it describes, and gives that input a width that matches the number of digits it takes.
Set `,(0,S.jsx)(r.code,{children:`wide`}),` on the Field that holds a four-digit value, such as a year.`]}),`
`,(0,S.jsx)(r.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,S.jsx)(r.h3,{id:`when-to-use`,children:`When to use`}),`
`,(0,S.jsx)(r.p,{children:`Use a Date Input Group for a date the user already knows or can copy from a document in front of them: a date of birth, the expiry date of a passport, the day something happened.
Three separate fields let someone type the date the way they would say it, without first working out which format the browser expects.`}),`
`,(0,S.jsxs)(r.p,{children:[`This is the pattern the `,(0,S.jsx)(r.a,{href:`https://nldesignsystem.nl/richtlijnen/formulieren/wanneer-welk-form-element/iedereen-kan-invullen`,rel:`nofollow`,children:`NL Design System`}),` and `,(0,S.jsx)(r.a,{href:`https://design-system.service.gov.uk/components/date-input/`,rel:`nofollow`,children:`gov.uk`}),` recommend for these dates.`]}),`
`,(0,S.jsx)(r.h3,{id:`when-not-to-use`,children:`When not to use`}),`
`,(0,S.jsxs)(r.p,{children:[`Use a `,(0,S.jsx)(r.a,{href:`/docs/components-forms-date-input--docs`,children:`Date Input`}),` for a date the user does not know by heart and has to look up, such as an appointment.
Its native control opens a calendar to browse, which a group of text fields cannot offer.`]}),`
`,(0,S.jsxs)(r.p,{children:[`Use a `,(0,S.jsx)(r.a,{href:`/docs/components-navigation-calendar--docs`,children:`Calendar`}),` when picking a date is the task of the page rather than one answer in a form.`]}),`
`,(0,S.jsx)(r.h3,{id:`how-to-use`,children:`How to use`}),`
`,(0,S.jsxs)(r.p,{children:[`Wrap a Date Input Group in a `,(0,S.jsx)(r.a,{href:`/docs/components-forms-field-set--docs`,children:`Field Set`}),` whose legend asks for the date as a question.
The legend is what ties the fields together for a screen reader; without it, three labels read as three unrelated questions.`]}),`
`,(0,S.jsxs)(r.p,{children:[`Put a Paragraph with an example date above the group and connect it to the Field Set with `,(0,S.jsx)(r.code,{children:`aria-describedby`}),`.
Write the example in the order the fields appear, so it doubles as a format hint.`]}),`
`,(0,S.jsxs)(r.p,{children:[`Give every Text Input an `,(0,S.jsx)(r.code,{children:`inputMode`}),` of `,(0,S.jsx)(r.code,{children:`numeric`}),`, so touch devices offer a numeric keyboard.
Add an `,(0,S.jsx)(r.code,{children:`autoComplete`}),` value where one exists, such as `,(0,S.jsx)(r.code,{children:`bday-day`}),`, `,(0,S.jsx)(r.code,{children:`bday-month`}),`, and `,(0,S.jsx)(r.code,{children:`bday-year`}),` for a date of birth.`]}),`
`,(0,S.jsxs)(r.p,{children:[`Leave the `,(0,S.jsx)(r.code,{children:`size`}),` attribute off the Text Inputs.
The Field sets the width, and a `,(0,S.jsx)(r.code,{children:`size`}),` attribute overrides it.`]}),`
`,(0,S.jsxs)(r.p,{children:[`Accept what the user types in the format they type it.
Both `,(0,S.jsx)(r.code,{children:`1`}),` and `,(0,S.jsx)(r.code,{children:`01`}),` are a valid month, and rejecting one of the two turns a formatting preference into an error the user has to solve.`]}),`
`,(0,S.jsx)(r.h2,{id:`examples`,children:`Examples`}),`
`,(0,S.jsx)(r.h3,{id:`with-validation`,children:`With validation`}),`
`,(0,S.jsxs)(r.p,{children:[`To report an error, add `,(0,S.jsx)(r.code,{children:`invalid`}),` and an `,(0,S.jsx)(r.a,{href:`/docs/components-forms-error-message--docs`,children:`Error Message`}),` to the Field Set, and connect the Error Message to the Field Set with `,(0,S.jsx)(r.code,{children:`aria-describedby`}),`.
Set `,(0,S.jsx)(r.code,{children:`invalid`}),` on the Text Inputs that are at fault, and only on those: mark the year alone if the year is what is missing.`]}),`
`,(0,S.jsxs)(r.p,{children:[`See the `,(0,S.jsx)(r.a,{href:`https://design-system.service.gov.uk/components/date-input/#error-messages`,rel:`nofollow`,children:`gov.uk documentation on validating this pattern`}),` for how to word the message.`]}),`
`,(0,S.jsx)(a,{of:h}),`
`,(0,S.jsx)(r.h3,{id:`month-and-year`,children:`Month and year`}),`
`,(0,S.jsx)(r.p,{children:`Ask only for the parts of the date you need.
A group holds as many fields as the question has parts.`}),`
`,(0,S.jsx)(a,{of:m}),`
`,(0,S.jsx)(r.h2,{id:`design`,children:`Design`}),`
`,(0,S.jsx)(r.p,{children:`Each field is as wide as the answer it takes: two digits for a day or a month, four for a year.
That difference is a hint in itself, and it keeps the group from reading as three interchangeable boxes.`}),`
`,(0,S.jsx)(r.p,{children:`The fields wrap onto a second line when they no longer fit beside each other, which happens at narrow widths and at large text sizes rather than at a fixed breakpoint.`}),`
`,(0,S.jsx)(r.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,S.jsx)(r.p,{children:`The accessible name of each input comes from its own Label, and the question they answer together comes from the legend of the surrounding Field Set.
A screen reader announces both, so ‘Jaar’ is heard as part of ‘Wanneer ben je geboren?’ rather than on its own.`}),`
`,(0,S.jsxs)(r.p,{children:[`Unlike a `,(0,S.jsx)(r.a,{href:`/docs/components-forms-date-input--docs`,children:`Date Input`}),`, this pattern shows the same order of day, month, and year to everyone.
A native date control takes its order from the browser and the operating system, so the page cannot promise which one a visitor sees; here the page decides, and the example above the fields can state it.`]}),`
`,(0,S.jsx)(r.h2,{id:`see-also`,children:`See also`}),`
`,(0,S.jsxs)(r.ul,{children:[`
`,(0,S.jsxs)(r.li,{children:[(0,S.jsx)(r.a,{href:`/docs/components-forms-date-input--docs`,children:`Date Input`}),` – a native date control for dates the user has to look up.`]}),`
`,(0,S.jsxs)(r.li,{children:[(0,S.jsx)(r.a,{href:`/docs/components-forms-field-set--docs`,children:`Field Set`}),` – groups the fields under one question.`]}),`
`,(0,S.jsxs)(r.li,{children:[(0,S.jsx)(r.a,{href:`/docs/components-forms-text-input--docs`,children:`Text Input`}),` – the input each field holds.`]}),`
`,(0,S.jsxs)(r.li,{children:[(0,S.jsx)(r.a,{href:`/docs/components-navigation-calendar--docs`,children:`Calendar`}),` – navigate between dates using a calendar view.`]}),`
`,(0,S.jsxs)(r.li,{children:[(0,S.jsx)(r.a,{href:`/docs/components-forms-date-picker--docs`,children:`Date Picker`}),` – select a date from a calendar in a form.`]}),`
`]}),`
`,(0,S.jsx)(r.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,S.jsx)(f,{tokens:v})]})}function x(e={}){let{wrapper:t}={...l(),...e.components};return t?(0,S.jsx)(t,{...e,children:(0,S.jsx)(b,{...e})}):b(e)}var S;function C(){return(C=e((()=>{S=c(),u(),r(),d(),y(),p()})))()}C();export{x as default};