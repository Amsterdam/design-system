import{j as e}from"./jsx-runtime-X2b_N9AH.js";import{useMDXComponents as t}from"./index-CRbi4mQH.js";import{M as s,d as a,P as d,e as c,f as n}from"./index-8tGs9E3C.js";import{F as h,W as l,a as p,R as u,b as x,C as m}from"./FieldSet.stories-7vWuiOT6.js";import"./index-uCp2LrAq.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-H77d7l6U.js";import"../sb-preview/runtime.js";import"./index-BOkhicXD.js";import"./index-DXimoRZY.js";import"./index-B8K4vdXH.js";import"./index-DrFu-skq.js";import"./FieldSet-DkgxHA-T.js";import"./clsx-B-dksMZM.js";import"./Label-BnSmP98q.js";import"./TextInput-DRDJcMP-.js";import"./Column-BRryplre.js";import"./Paragraph-DpVlyIEJ.js";import"./ErrorMessage-bGWcoafk.js";import"./VisuallyHidden-CgdwkxFN.js";import"./Checkbox-DRBoUL7U.js";const g=`<!-- @license CC0-1.0 -->

# Field Set

A component to group related form inputs.

## Guidelines

- Use Field Set when you need to show a relationship between multiple form inputs. For example, you may need to group a set of text inputs into a single Field Set when asking for an address.

## Relevant WCAG Requirements

- [WCAG 1.3.5](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html): Field Set labels the purpose of a group of inputs.

## References

- [Providing a description for groups of form controls using fieldset and legend elements](https://www.w3.org/WAI/WCAG22/Techniques/html/H71)
`;/*@license CC0-1.0*/function i(r){const o={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",...t(),...r.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(s,{of:h}),`
`,e.jsx(a,{children:g}),`
`,e.jsx(d,{}),`
`,e.jsx(c,{}),`
`,e.jsx(o.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(o.h2,{id:"with-description",children:"With Description"}),`
`,e.jsxs(o.p,{children:[`A Field Set can have a description.
Make sure to connect this description to the Field Set or a specific input,
otherwise this won’t be read by a screen reader.
Add an `,e.jsx(o.code,{children:"aria-describedby"}),` attribute to the Field Set
and provide the `,e.jsx(o.code,{children:"id"})," of the describing element as its value."]}),`
`,e.jsx(n,{of:l}),`
`,e.jsx(o.h2,{id:"with-error",children:"With Error"}),`
`,e.jsxs(o.p,{children:[`A Field Set can indicate whether any of the inputs it contains has a validation error.
Use Error Message to describe the error.
Make sure to connect the error message to the correct input in the Field Set,
otherwise it won’t be read by a screen reader.
Add an `,e.jsx(o.code,{children:"aria-describedby"})," attribute to the input and provide the ",e.jsx(o.code,{children:"id"})," of Error Message as its value."]}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(o.h3,{id:"radio-group",children:"Radio group"}),`
`,e.jsxs(o.p,{children:[`Use a Field Set to group radio buttons.
When grouping radio inputs, use `,e.jsx(o.code,{children:'role="radiogroup"'})," on Field Set to have this grouping explicitly announced as a radio group (the default role is ",e.jsx(o.code,{children:"group"}),`).
Using `,e.jsx(o.code,{children:'role="radiogroup"'})," also allows you to use ",e.jsx(o.code,{children:"aria-required"})," on Field Set, which isn’t allowed for role ",e.jsx(o.code,{children:"group"}),`.
Always also set `,e.jsx(o.code,{children:"aria-required"})," on the individual radio buttons though, to make sure it’s read by screen readers."]}),`
`,e.jsx(n,{of:u}),`
`,e.jsx(o.h3,{id:"radio-group-with-error",children:"Radio group with error"}),`
`,e.jsxs(o.p,{children:[`A Field Set with a radio button group can also have a validation error.
In this case, connect the error message to the Field Set instead of an input.
Add an `,e.jsx(o.code,{children:"aria-describedby"})," attribute to the Field Set and provide the ",e.jsx(o.code,{children:"id"})," of Error Message as its value."]}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(o.h3,{id:"checkbox-group",children:"Checkbox group"}),`
`,e.jsx(o.p,{children:"Use a Field Set to group checkboxes."}),`
`,e.jsxs(o.p,{children:["Please note: ",e.jsx(o.a,{href:"https://github.com/nvaccess/nvda/issues/12718",rel:"nofollow",children:"NVDA has a bug"}),` which causes it to
not report a description connected to a Field Set when it contains checkboxes.`]}),`
`,e.jsx(o.p,{children:"Try to avoid using descriptions for Field Sets containing checkboxes for this reason."}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(o.h3,{id:"checkbox-group-with-error",children:"Checkbox group with error"}),`
`,e.jsxs(o.p,{children:["Because of ",e.jsx(o.a,{href:"https://github.com/nvaccess/nvda/issues/12718",rel:"nofollow",children:"the NVDA bug mentioned earlier"}),`,
we currently do not have a reliable way to report error messages for checkbox groups with a validation error.
We are working on adding this as soon as possible.`]})]})}function X(r={}){const{wrapper:o}={...t(),...r.components};return o?e.jsx(o,{...r,children:e.jsx(i,{...r})}):i(r)}export{X as default};
