import{j as e}from"./jsx-runtime-X2b_N9AH.js";import{useMDXComponents as o}from"./index-CRbi4mQH.js";import{M as a,d as r,P as d,e as l,f as i}from"./index-N7CvSXx1.js";import{D as c,a as h,I as m,b as p}from"./DateInput.stories-CeLC8DfA.js";import"./index-uCp2LrAq.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-6i41IFEu.js";import"../sb-preview/runtime.js";import"./index-BOkhicXD.js";import"./index-DXimoRZY.js";import"./index-B8K4vdXH.js";import"./index-DrFu-skq.js";import"./clsx-B-dksMZM.js";const u=`<!-- @license CC0-1.0 -->

# Date Input

Helps users enter a date.

## Visual considerations

This component uses a native date input, which is styled differently in different browsers and operating systems.
Recreating the native functionality is quite difficult and prone to accessibility errors, which is why we’ve chosen not to do that.
This does mean that this component does not look identical on all browsers and operating systems.
`;/*@license CC0-1.0*/function t(s){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",...o(),...s.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(a,{of:c}),`
`,e.jsx(r,{children:u}),`
`,e.jsx(d,{}),`
`,e.jsx(l,{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"date-and-time",children:"Date and time"}),`
`,e.jsxs(n.p,{children:["To let the user select a specific time on a date, use the ",e.jsx(n.code,{children:"datetime-local"}),` type.
Note that the control’s UI varies in general from browser to browser.`]}),`
`,e.jsx(n.p,{children:`The value represents a local date and time, not necessarily the user’s local date and time.
In other words, the input allows any valid combination of year, month, day, hour, and minute — even if such a combination is invalid in the user’s local time zone.`}),`
`,e.jsx(i,{of:h}),`
`,e.jsx(n.h3,{id:"invalid",children:"Invalid"}),`
`,e.jsxs(n.p,{children:[`Indicates that the input value does not meet the specified constraints.
An `,e.jsx(n.a,{href:"?path=/docs/components-forms-error-message--docs",children:"Error Message"}),` must be displayed above the field.
To highlight the error even more, the parent `,e.jsx(n.a,{href:"?path=/docs/components-forms-field--docs",children:"Field"})," component’s ",e.jsx(n.code,{children:"invalid"})," prop must also be set."]}),`
`,e.jsx(i,{of:m}),`
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
`,e.jsx(i,{of:p})]})}function C(s={}){const{wrapper:n}={...o(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{C as default};
