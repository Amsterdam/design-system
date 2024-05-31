import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{useMDXComponents as t}from"./index-DlpNa54Y.js";import{M as s,d,P as a,e as c,f as i}from"./index-BwA7DNpl.js";import{F as h,W as l,a as p,R as u,b as x,C as j,c as m}from"./FieldSet.stories-adE8FR5t.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-CGaf4KZl.js";import"../sb-preview/runtime.js";import"./index-B8XB3FuZ.js";import"./index-COebWTXQ.js";import"./index-B8K4vdXH.js";import"./index-DrFu-skq.js";import"./FieldSet-OhsVVCgX.js";import"./clsx-B-dksMZM.js";import"./Label-7rbJKFpg.js";import"./TextInput-uCUCYHBQ.js";import"./Column-2uDLEbFL.js";import"./Paragraph-C4jU4-Z4.js";import"./ErrorMessage-BIVZW8RN.js";import"./VisuallyHidden-Db-04MJ9.js";import"./Checkbox-C-0AeTC0.js";const g=`<!-- @license CC0-1.0 -->

# Field Set

A component to group related form inputs.

## Guidelines

- Use Field Set when you need to show a relationship between multiple form inputs. For example, you may need to group a set of text inputs into a single Field Set when asking for an address.

## Relevant WCAG Requirements

- [WCAG 1.3.5](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html): Field Set labels the purpose of a group of inputs.

## References

- [Providing a description for groups of form controls using fieldset and legend elements](https://www.w3.org/WAI/WCAG22/Techniques/html/H71)
`;function n(o){const r={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",...t(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:h}),`
`,e.jsx(d,{children:g}),`
`,e.jsx(a,{}),`
`,e.jsx(c,{}),`
`,e.jsx(r.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(r.h2,{id:"with-description",children:"With Description"}),`
`,e.jsxs(r.p,{children:[`A Field Set can have a description.
Make sure to connect this description to the Field Set or a specific input,
otherwise this won’t be read by a screen reader.
Add an `,e.jsx(r.code,{children:"aria-describedby"}),` attribute to the Field Set
and provide the `,e.jsx(r.code,{children:"id"})," of the describing element as its value."]}),`
`,e.jsx(i,{of:l}),`
`,e.jsx(r.h2,{id:"with-error",children:"With Error"}),`
`,e.jsxs(r.p,{children:[`A Field Set can indicate whether any of the inputs it contains has a validation error.
Use `,e.jsx(r.code,{children:"FieldSet.ErrorMessage"}),` to describe the error.
Make sure to connect the error message to the input in the Field,
otherwise it won’t be read by a screen reader.
Add an `,e.jsx(r.code,{children:"aria-describedby"})," attribute to the input and provide the ",e.jsx(r.code,{children:"id"})," of ",e.jsx(r.code,{children:"FieldSet.ErrorMessage"})," as its value."]}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(r.h3,{id:"radio-group",children:"Radio group"}),`
`,e.jsxs(r.p,{children:[`Use a Field Set to group radio buttons.
When grouping radio inputs, use `,e.jsx(r.code,{children:'role="radiogroup"'})," on Field Set to have this grouping explicitly announced as a radio group (the default role is ",e.jsx(r.code,{children:"group"}),`).
Using `,e.jsx(r.code,{children:'role="radiogroup"'})," also allows you to use ",e.jsx(r.code,{children:"aria-required"})," on Field Set, which isn’t allowed for role ",e.jsx(r.code,{children:"group"}),`.
Always also set `,e.jsx(r.code,{children:"aria-required"})," on the individual radio buttons though, to make sure it’s read by screen readers."]}),`
`,e.jsx(i,{of:u}),`
`,e.jsx(r.h3,{id:"radio-group-with-error",children:"Radio group with error"}),`
`,e.jsxs(r.p,{children:[`A Field Set with a radio button group can also have a validation error.
In this case, connect the error message to the Field Set instead of an input.
Add an `,e.jsx(r.code,{children:"aria-describedby"})," attribute to the Field Set and provide the ",e.jsx(r.code,{children:"id"})," of ",e.jsx(r.code,{children:"FieldSet.ErrorMessage"})," as its value."]}),`
`,e.jsx(i,{of:x}),`
`,e.jsx(r.h3,{id:"checkbox-group",children:"Checkbox group"}),`
`,e.jsx(r.p,{children:"Use a Field Set to group checkboxes."}),`
`,e.jsxs(r.p,{children:["Please note: ",e.jsx(r.a,{href:"https://github.com/nvaccess/nvda/issues/12718",rel:"nofollow",children:"NVDA has a bug"}),` which causes it to
not report a description connected to a Field Set when it contains checkboxes.`]}),`
`,e.jsx(r.p,{children:"Try to avoid using descriptions for Field Sets containing checkboxes for this reason."}),`
`,e.jsx(i,{of:j}),`
`,e.jsx(r.h3,{id:"checkbox-group-with-error",children:"Checkbox group with error"}),`
`,e.jsxs(r.p,{children:[`A Field Set with a checkbox group can also have a validation error.
Because of `,e.jsx(r.a,{href:"https://github.com/nvaccess/nvda/issues/12718",rel:"nofollow",children:"the NVDA bug mentioned earlier"}),", we need to connect the error message to the Field Set in two ways:"]}),`
`,e.jsxs(r.ol,{children:[`
`,e.jsxs(r.li,{children:["Add an ",e.jsx(r.code,{children:"aria-describedby"})," attribute to the Field Set and provide the ",e.jsx(r.code,{children:"id"})," of ",e.jsx(r.code,{children:"FieldSet.ErrorMessage"})," as its value."]}),`
`,e.jsxs(r.li,{children:["Add an ",e.jsx(r.code,{children:"aria-errormessage"})," attribute to the Field Set and provide the ",e.jsx(r.code,{children:"id"})," of ",e.jsx(r.code,{children:"FieldSet.ErrorMessage"})," as its value."]}),`
`]}),`
`,`
`,e.jsx(i,{of:m})]})}function N(o={}){const{wrapper:r}={...t(),...o.components};return r?e.jsx(r,{...o,children:e.jsx(n,{...o})}):n(o)}export{N as default};
