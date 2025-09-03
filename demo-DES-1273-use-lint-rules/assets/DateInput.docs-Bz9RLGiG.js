import{j as e}from"./iframe-DteO6EtF.js";import{useMDXComponents as o}from"./index-DEVY4-jM.js";import{M as a,c as r,P as d,e as l,f as i}from"./blocks-DumKRyDn.js";import{D as h,M as c,a as m,b as p,I as f,c as u,d as x,e as j}from"./DateInput.stories-Cjr6aHk2.js";import"./index-BUTxg2bW.js";const b=`<!-- @license CC0-1.0 -->

# Date Input

Helps users enter a date.

## Visual considerations

This component uses a native date input, which is styled differently in different browsers and operating systems.
Recreating the native functionality is quite difficult and prone to accessibility errors, which is why we’ve chosen not to do that.
This does mean that this component does not look identical on all browsers and operating systems.
`;/*@license CC0-1.0*/function t(s){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",...o(),...s.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(a,{of:h}),`
`,e.jsx(r,{children:b}),`
`,e.jsx(d,{}),`
`,e.jsx(l,{}),`
`,e.jsx(n.h2,{id:"asking-for-memorable-or-easy-to-find-dates",children:"Asking for memorable or easy to find dates"}),`
`,e.jsx(n.p,{children:`When asking for a date that is easy to remember or find, like a birthday or passport expiration date,
use a Field Set with separate Text Inputs for day, month, and year.
This approach is easier to use than using a Date Input component.`}),`
`,e.jsxs(n.p,{children:["For more information on this pattern, see the ",e.jsx(n.a,{href:"https://design-system.service.gov.uk/components/date-input/",rel:"nofollow",children:"gov.uk"})," and ",e.jsx(n.a,{href:"https://nldesignsystem.nl/richtlijnen/formulieren/wanneer-welk-form-element/iedereen-kan-invullen",rel:"nofollow",children:"NL Design System"})," documentation."]}),`
`,e.jsx(n.h3,{id:"memorable-date",children:"Memorable date"}),`
`,e.jsx(i,{of:c}),`
`,e.jsx(n.h3,{id:"memorable-date-with-validation",children:"Memorable date with validation"}),`
`,e.jsxs(n.p,{children:["To show validation errors, add ",e.jsx(n.code,{children:"invalid"})," and an ",e.jsx(n.a,{href:"/docs/components-forms-error-message--docs",children:"Error Message"}),` to the Field Set.
Make sure to connect the Error Message to the Field Set, otherwise this won’t be read by a screen reader.
Additionally, apply the `,e.jsx(n.code,{children:"invalid"}),` prop to the Text Inputs to visually indicate the error.
Only use the `,e.jsx(n.code,{children:"invalid"}),` prop on Text Inputs that have errors.
For example, only mark the 'year' input as invalid if the year is not provided.`]}),`
`,e.jsxs(n.p,{children:["See the ",e.jsx(n.a,{href:"https://design-system.service.gov.uk/components/date-input/#error-messages",rel:"nofollow",children:"gov.uk"})," documentation on validation for this pattern."]}),`
`,e.jsx(i,{of:m}),`
`,e.jsx(n.h2,{id:"examples-of-the-date-input",children:"Examples of the Date Input"}),`
`,e.jsx(n.h3,{id:"date-and-time",children:"Date and time"}),`
`,e.jsxs(n.p,{children:["To let the user select a specific time on a date, use the ",e.jsx(n.code,{children:"datetime-local"}),` type.
Note that the control’s UI varies in general from browser to browser.`]}),`
`,e.jsx(n.p,{children:`The value represents a local date and time, not necessarily the user’s local date and time.
In other words, the input allows any valid combination of year, month, day, hour, and minute — even if such a combination is invalid in the user’s local time zone.`}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(n.h3,{id:"invalid",children:"Invalid"}),`
`,e.jsxs(n.p,{children:[`Indicates that the input value does not meet the specified constraints.
An `,e.jsx(n.a,{href:"/docs/components-forms-error-message--docs",children:"Error Message"}),` must be displayed above the field.
To highlight the error even more, the parent `,e.jsx(n.a,{href:"/docs/components-forms-field--docs",children:"Field"})," component’s ",e.jsx(n.code,{children:"invalid"})," prop must also be set."]}),`
`,e.jsx(i,{of:f}),`
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
`,e.jsx(i,{of:u}),`
`,e.jsx(n.h3,{id:"in-a-field",children:"In a Field"}),`
`,e.jsx(n.p,{children:"Use a Field to group a Date Input with a Label, description and / or an Error Message."}),`
`,e.jsxs(n.p,{children:["If you don’t need the description, remove its Paragraph and the ",e.jsx(n.code,{children:"aria-describedby"})," from the Date Input."]}),`
`,e.jsxs(n.p,{children:["Check ",e.jsx(n.a,{href:"/docs/components-forms-field--docs",children:"the Field docs"})," for more information on configuring it."]}),`
`,e.jsx(i,{of:x}),`
`,e.jsx(n.h3,{id:"in-a-field-with-validation",children:"In a Field with validation"}),`
`,e.jsxs(n.p,{children:["If the Date Input can become invalid, add an Error Message and its ",e.jsx(n.code,{children:"id"})," to the ",e.jsx(n.code,{children:"aria-describedby"})," attribute of the Date Input."]}),`
`,e.jsxs(n.p,{children:["Check ",e.jsx(n.a,{href:"/docs/components-forms-field--docs",children:"the Field docs"})," for more information on configuring it."]}),`
`,e.jsx(i,{of:j})]})}function k(s={}){const{wrapper:n}={...o(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{k as default};
