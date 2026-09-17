import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,d as n,h as r,i,n as a,p as o,u as s}from"./blocks-BFa-eblR.js";import{t as c}from"./jsx-runtime-ATHzeHXA.js";import{i as l,r as u}from"./react-Dyi61YEg.js";import{n as d,t as f}from"./DesignTokensTable-cnHLu-Ek.js";import{a as p,i as m,n as h,r as g,t as _}from"./KnownDateInput.stories-DNnDRAmm.js";var v,y;function b(){return(b=e((()=>{v={"known-date-input":{"column-gap":{$value:`{ams.space.m}`,$description:`The space between the parts of the date.`,$extensions:{"nl.amsterdam.hint":`Must be a single value: it sets a longhand property, which takes only one.`,"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"row-gap":{$value:`{ams.space.s}`,$description:`The space between rows of parts, once the component wraps at narrow widths or large text sizes.`,$extensions:{"nl.amsterdam.hint":`Must be a single value: it sets a longhand property, which takes only one.`,"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},input:{"inline-size":{$value:`calc(3ch + (2 * {ams.inputs.padding-inline}) + (2 * {ams.inputs.border-width}))`,$description:"Fits a two-digit day or month, with a character to spare for the caret. Includes the padding and border of the input, which sizes itself with `border-box`.",$extensions:{"nl.amsterdam.hint":`Must be a single value: it sets a longhand property, which takes only one.`,"nl.amsterdam.type":`dimension`}},year:{"inline-size":{$value:`calc(5ch + (2 * {ams.inputs.padding-inline}) + (2 * {ams.inputs.border-width}))`,$description:"Fits a four-digit year, with a character to spare for the caret. Includes the padding and border of the input, which sizes itself with `border-box`.",$extensions:{"nl.amsterdam.hint":`Must be a single value: it sets a longhand property, which takes only one.`,"nl.amsterdam.type":`dimension`}}}},part:{"row-gap":{$value:`{ams.space.s}`,$description:`The space between the label of a part and its input.`,$extensions:{"nl.amsterdam.hint":`Must be a single value: it sets a longhand property, which takes only one.`,"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}}}},y={ams:v}})))()}function x(e){let r={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...l(),...e.components};return(0,C.jsxs)(C.Fragment,{children:[`
`,`
`,`
`,`
`,(0,C.jsx)(s,{of:_}),`
`,(0,C.jsx)(o,{}),`
`,(0,C.jsx)(t,{of:_}),`
`,(0,C.jsx)(n,{}),`
`,(0,C.jsx)(i,{}),`
`,(0,C.jsx)(r.h2,{id:`subcomponents`,children:`Subcomponents`}),`
`,(0,C.jsxs)(r.p,{children:[`Compose a Known Date Input from its parts: Known Date Input Day, Month, and Year.
Each part renders a `,(0,C.jsx)(r.a,{href:`/docs/components-forms-label--docs`,children:`Label`}),` and a `,(0,C.jsx)(r.a,{href:`/docs/components-forms-text-input--docs`,children:`Text Input`}),`, links the two, and sets what every part of a date needs: a numeric keyboard, a width that fits its digits, and the autocomplete value that matches the `,(0,C.jsx)(r.code,{children:`autoComplete`}),` of the Known Date Input.
Everything else you pass to a part, such as `,(0,C.jsx)(r.code,{children:`name`}),`, `,(0,C.jsx)(r.code,{children:`invalid`}),`, a `,(0,C.jsx)(r.code,{children:`ref`}),`, or a `,(0,C.jsx)(r.code,{children:`className`}),`, goes to its input.`]}),`
`,(0,C.jsxs)(r.p,{children:[`The labels default to Dag, Maand, and Jaar.
Set `,(0,C.jsx)(r.code,{children:`label`}),` on each part for a form in another language.`]}),`
`,(0,C.jsx)(r.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,C.jsx)(r.h3,{id:`when-to-use`,children:`When to use`}),`
`,(0,C.jsx)(r.p,{children:`Use a Known Date Input for a date the user already knows or can copy from a document in front of them: a date of birth, the expiry date of a passport, the day something happened.
Separate fields let someone type the date the way they would say it, without first working out which format the browser expects.`}),`
`,(0,C.jsxs)(r.p,{children:[`This is the pattern the `,(0,C.jsx)(r.a,{href:`https://nldesignsystem.nl/richtlijnen/formulieren/wanneer-welk-form-element/iedereen-kan-invullen`,rel:`nofollow`,children:`NL Design System`}),` and `,(0,C.jsx)(r.a,{href:`https://design-system.service.gov.uk/components/date-input/`,rel:`nofollow`,children:`gov.uk`}),` recommend for these dates.`]}),`
`,(0,C.jsx)(r.h3,{id:`when-not-to-use`,children:`When not to use`}),`
`,(0,C.jsxs)(r.p,{children:[`Use a `,(0,C.jsx)(r.a,{href:`/docs/components-forms-date-input--docs`,children:`Date Input`}),` for a date the user does not know by heart and has to look up, such as an appointment.
Its native control opens a calendar to browse, which a group of text fields cannot offer.`]}),`
`,(0,C.jsxs)(r.p,{children:[`Use a `,(0,C.jsx)(r.a,{href:`/docs/components-forms-date-picker--docs`,children:`Date Picker`}),` when the user has to choose a date or a date range from a calendar they can see, such as when booking an appointment.`]}),`
`,(0,C.jsx)(r.h3,{id:`how-to-use`,children:`How to use`}),`
`,(0,C.jsxs)(r.p,{children:[`Wrap a Known Date Input in a `,(0,C.jsx)(r.a,{href:`/docs/components-forms-field-set--docs`,children:`Field Set`}),` whose legend asks for the date as a question.
The legend is what ties the parts together for a screen reader; without it, three labels read as three unrelated questions.`]}),`
`,(0,C.jsxs)(r.p,{children:[`Put a Paragraph with an example date above the Known Date Input and connect it to the Field Set with `,(0,C.jsx)(r.code,{children:`aria-describedby`}),`.
Write the example in the order the parts appear, so it doubles as a format hint.`]}),`
`,(0,C.jsxs)(r.p,{children:[`Set `,(0,C.jsx)(r.code,{children:`autoComplete`}),` to `,(0,C.jsx)(r.code,{children:`bday`}),` for a date of birth, or to `,(0,C.jsx)(r.code,{children:`cc-exp`}),` for the expiry date of a payment card, so the browser can fill in a date it already knows.
Leave it out for any other date.`]}),`
`,(0,C.jsxs)(r.p,{children:[`Give each part an `,(0,C.jsx)(r.code,{children:`id`}),` when an `,(0,C.jsx)(r.a,{href:`/docs/components-forms-invalid-form-alert--docs`,children:`Invalid Form Alert`}),` has to link to it.
Without one, the part generates its own.`]}),`
`,(0,C.jsxs)(r.p,{children:[`Accept what the user types in the format they type it.
Both `,(0,C.jsx)(r.code,{children:`1`}),` and `,(0,C.jsx)(r.code,{children:`01`}),` are a valid month, and rejecting one of the two turns a formatting preference into an error the user has to solve.`]}),`
`,(0,C.jsx)(r.h2,{id:`examples`,children:`Examples`}),`
`,(0,C.jsx)(r.h3,{id:`with-validation`,children:`With validation`}),`
`,(0,C.jsxs)(r.p,{children:[`To report an error, add `,(0,C.jsx)(r.code,{children:`invalid`}),` and an `,(0,C.jsx)(r.a,{href:`/docs/components-forms-error-message--docs`,children:`Error Message`}),` to the Field Set, and connect the Error Message to the Field Set with `,(0,C.jsx)(r.code,{children:`aria-describedby`}),`.
Set `,(0,C.jsx)(r.code,{children:`invalid`}),` on the parts that are at fault, and only on those: mark the year alone if the year is what is missing.`]}),`
`,(0,C.jsxs)(r.p,{children:[`See the `,(0,C.jsx)(r.a,{href:`https://design-system.service.gov.uk/components/date-input/#error-messages`,rel:`nofollow`,children:`gov.uk documentation on validating this pattern`}),` for how to word the message.`]}),`
`,(0,C.jsx)(a,{of:m}),`
`,(0,C.jsx)(r.h3,{id:`month-and-year`,children:`Month and year`}),`
`,(0,C.jsx)(r.p,{children:`Ask only for the parts of the date you need.
Leave out the Day for a month and a year.`}),`
`,(0,C.jsx)(a,{of:h}),`
`,(0,C.jsx)(r.h3,{id:`translated`,children:`Translated`}),`
`,(0,C.jsxs)(r.p,{children:[`The labels default to Dutch, and the parts appear in the order you place them.
For a form in another language, set `,(0,C.jsx)(r.code,{children:`label`}),` on each part and place the parts in the order its readers expect.
This example asks for a date of birth in American English, which puts the month first.`]}),`
`,(0,C.jsxs)(r.p,{children:[`A Known Date Input does not read `,(0,C.jsx)(r.code,{children:`lang`}),`, so the order is always the one in your markup.
Still set `,(0,C.jsx)(r.code,{children:`lang`}),` on the Field Set, so screen readers pronounce its text in the right language.
See the `,(0,C.jsx)(r.a,{href:`/docs/docs-guidelines-localisation--docs`,children:`Localisation guide`}),` for more.`]}),`
`,(0,C.jsx)(a,{of:g}),`
`,(0,C.jsx)(r.h2,{id:`design`,children:`Design`}),`
`,(0,C.jsxs)(r.p,{children:[`Each part is as wide as the answer it takes: two digits for a day or a month, four for a year.
That difference is a hint in itself, and it keeps the parts from reading as three interchangeable boxes.
The widths hold without CSS too, because each input also carries a `,(0,C.jsx)(r.code,{children:`size`}),` attribute for its digits.`]}),`
`,(0,C.jsx)(r.p,{children:`The parts wrap onto a second line when they no longer fit beside each other, which happens at narrow widths and at large text sizes rather than at a fixed breakpoint.`}),`
`,(0,C.jsx)(r.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,C.jsx)(r.p,{children:`The accessible name of each input comes from its own Label, and the question they answer together comes from the legend of the surrounding Field Set.
A screen reader announces both, so ‘Jaar’ is heard as part of ‘Wanneer ben je geboren?’ rather than on its own.`}),`
`,(0,C.jsxs)(r.p,{children:[`Unlike a `,(0,C.jsx)(r.a,{href:`/docs/components-forms-date-input--docs`,children:`Date Input`}),`, this pattern shows the same order of day, month, and year to everyone.
A native date control takes its order from the browser and the operating system, so the page cannot promise which one a visitor sees; here the page decides, and the example above the parts can state it.`]}),`
`,(0,C.jsx)(r.h2,{id:`see-also`,children:`See also`}),`
`,(0,C.jsxs)(r.ul,{children:[`
`,(0,C.jsxs)(r.li,{children:[(0,C.jsx)(r.a,{href:`/docs/components-forms-date-input--docs`,children:`Date Input`}),` – a native date control for dates the user has to look up.`]}),`
`,(0,C.jsxs)(r.li,{children:[(0,C.jsx)(r.a,{href:`/docs/components-forms-field-set--docs`,children:`Field Set`}),` – groups the parts under one question.`]}),`
`,(0,C.jsxs)(r.li,{children:[(0,C.jsx)(r.a,{href:`/docs/components-forms-text-input--docs`,children:`Text Input`}),` – the input each part renders.`]}),`
`,(0,C.jsxs)(r.li,{children:[(0,C.jsx)(r.a,{href:`/docs/components-forms-date-picker--docs`,children:`Date Picker`}),` – lets the user choose a date from a visible calendar.`]}),`
`,(0,C.jsxs)(r.li,{children:[(0,C.jsx)(r.a,{href:`/docs/components-navigation-calendar--docs`,children:`Calendar`}),` – displays content organised by date in a month view.`]}),`
`]}),`
`,(0,C.jsx)(r.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,C.jsx)(f,{tokens:y})]})}function S(e={}){let{wrapper:t}={...l(),...e.components};return t?(0,C.jsx)(t,{...e,children:(0,C.jsx)(x,{...e})}):x(e)}var C;function w(){return(w=e((()=>{C=c(),u(),r(),d(),b(),p()})))()}w();export{S as default};