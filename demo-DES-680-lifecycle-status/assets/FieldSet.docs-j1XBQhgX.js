import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{useMDXComponents as r}from"./index-DlpNa54Y.js";import{M as s,d,P as a,e as c,f as i}from"./index-CGdEL1ul.js";import{F as h,W as l,a as p,R as u,C as x}from"./FieldSet.stories-B8BEEPco.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-Dt4FNKeb.js";import"../sb-preview/runtime.js";import"./index-B8XB3FuZ.js";import"./index-COebWTXQ.js";import"./index-B8K4vdXH.js";import"./index-DrFu-skq.js";import"./FieldSet-OhsVVCgX.js";import"./clsx-B-dksMZM.js";import"./TextInput-uCUCYHBQ.js";import"./Column-2uDLEbFL.js";import"./Label-7rbJKFpg.js";import"./Paragraph-C4jU4-Z4.js";import"./Checkbox-C-0AeTC0.js";const m=`<!-- @license CC0-1.0 -->

# Field Set

A component to group related form inputs.

## Guidelines

- Use Field Set when you need to show a relationship between multiple form inputs. For example, you may need to group a set of text inputs into a single Field Set when asking for an address.

## Relevant WCAG Requirements

- [WCAG 1.3.5](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html): Field Set labels the purpose of a group of inputs.

## References

- [Providing a description for groups of form controls using fieldset and legend elements](https://www.w3.org/WAI/WCAG22/Techniques/html/H71)
`;function t(o){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",...r(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:h}),`
`,e.jsx(d,{children:m}),`
`,e.jsx(a,{}),`
`,e.jsx(c,{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h2,{id:"with-description",children:"With Description"}),`
`,e.jsxs(n.p,{children:[`A Field Set can have a description.
Make sure to connect this description to the Field Set or a specific input,
otherwise this won’t be read by a screen reader.
Add an `,e.jsx(n.code,{children:"aria-describedby"}),` attribute to the Field Set
and provide the `,e.jsx(n.code,{children:"id"})," of the describing element as its value."]}),`
`,e.jsx(i,{of:l}),`
`,e.jsx(n.h2,{id:"with-error",children:"With Error"}),`
`,e.jsx(n.p,{children:"A Field Set can indicate whether any of the inputs it contains has a validation error."}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(n.h3,{id:"radio-group",children:"Radio group"}),`
`,e.jsxs(n.p,{children:[`Use a Field Set to group radio buttons.
When grouping radio inputs, use `,e.jsx(n.code,{children:'role="radiogroup"'})," on Field Set to have this grouping explicitly announced as a radio group (the default role is ",e.jsx(n.code,{children:"group"}),")."]}),`
`,e.jsxs(n.p,{children:["Using ",e.jsx(n.code,{children:'role="radiogroup"'})," also allows you to use ",e.jsx(n.code,{children:"aria-required"})," on Field Set, which isn’t allowed for role ",e.jsx(n.code,{children:"group"}),`.
Always also set `,e.jsx(n.code,{children:"aria-required"})," on the individual radio buttons though, to make sure it’s read by screen readers."]}),`
`,e.jsx(i,{of:u}),`
`,e.jsx(n.h3,{id:"checkbox-group",children:"Checkbox group"}),`
`,e.jsx(n.p,{children:"Use a Field Set to group checkboxes."}),`
`,e.jsxs(n.p,{children:["Please note: ",e.jsx(n.a,{href:"https://github.com/nvaccess/nvda/issues/12718",rel:"nofollow",children:"NVDA has a bug"}),` which causes it to
not report a description connected to a Field Set when it contains checkboxes.`]}),`
`,e.jsx(n.p,{children:"Try to avoid using descriptions for Field Sets containing checkboxes for this reason."}),`
`,e.jsx(i,{of:x})]})}function q(o={}){const{wrapper:n}={...r(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}export{q as default};
