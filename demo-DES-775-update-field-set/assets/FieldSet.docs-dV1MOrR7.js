import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{useMDXComponents as r}from"./index-DlpNa54Y.js";import{M as s,d as a,P as d,e as c,f as i}from"./index-Z6hjG8yw.js";import{F as p,W as h,a as l,R as u,C as m}from"./FieldSet.stories-eirPSJpJ.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-B4FUcDE1.js";import"../sb-preview/runtime.js";import"./index-B8XB3FuZ.js";import"./index-COebWTXQ.js";import"./index-B8K4vdXH.js";import"./index-DrFu-skq.js";import"./FieldSet-DrQjBPyq.js";import"./clsx-B-dksMZM.js";import"./TextInput-w5YF2xZS.js";import"./Column-2uDLEbFL.js";import"./Label-7rbJKFpg.js";import"./Paragraph-C4jU4-Z4.js";import"./Checkbox-Dnr-vBw_.js";const x=`<!-- @license CC0-1.0 -->

# Field Set

A component to group related form inputs.

## Guidelines

- Use Field Set when you need to show a relationship between multiple form inputs. For example, you may need to group a set of text inputs into a single Field Set when asking for an address.

## Relevant WCAG Requirements

- [WCAG 1.3.5](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html): Field Set labels the purpose of a group of inputs.

## References

- [Providing a description for groups of form controls using fieldset and legend elements](https://www.w3.org/WAI/WCAG22/Techniques/html/H71)
`;function t(n){const o={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:p}),`
`,e.jsx(a,{children:x}),`
`,e.jsx(d,{}),`
`,e.jsx(c,{}),`
`,e.jsx(o.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(o.h2,{id:"with-description",children:"With Description"}),`
`,e.jsx(o.p,{children:`A Field Set can have a description.
Make sure to connect this description to the Field Set or a specific input,
otherwise this won’t be read by a screen reader.`}),`
`,e.jsx(i,{of:h}),`
`,e.jsx(o.h2,{id:"with-error",children:"With Error"}),`
`,e.jsx(o.p,{children:"A Field Set can indicate whether any of the inputs it contains has a validation error."}),`
`,e.jsx(i,{of:l}),`
`,e.jsx(o.h3,{id:"radio-group",children:"Radio group"}),`
`,e.jsxs(o.p,{children:[`Use a Field Set to group radio buttons.
When grouping radio inputs, use `,e.jsx(o.code,{children:'role="radiogroup"'}),` on Field Set to have this grouping explicitly announced as a radio group.
Field Set has a default role of `,e.jsx(o.code,{children:"group"}),"."]}),`
`,e.jsxs(o.p,{children:["Using ",e.jsx(o.code,{children:'role="radiogroup"'})," also allows you to use ",e.jsx(o.code,{children:"aria-required"})," on Field Set, which isn’t allowed for role ",e.jsx(o.code,{children:"group"}),`.
Always also set `,e.jsx(o.code,{children:"aria-required"})," on the individual radio buttons though, to make sure it’s read by screen readers."]}),`
`,e.jsx(i,{of:u}),`
`,e.jsx(o.h3,{id:"checkbox-group",children:"Checkbox group"}),`
`,e.jsx(o.p,{children:"Use a Field Set to group checkboxes."}),`
`,e.jsxs(o.p,{children:["Please note: ",e.jsx(o.a,{href:"https://github.com/nvaccess/nvda/issues/12718",rel:"nofollow",children:"NVDA has bug"}),` which causes it to
not report a description connected to a Field Set when the Field Set contains checkboxes.`]}),`
`,e.jsx(o.p,{children:"Try to avoid using descriptions for Field Sets containing checkboxes for this reason."}),`
`,e.jsx(i,{of:m})]})}function q(n={}){const{wrapper:o}={...r(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(t,{...n})}):t(n)}export{q as default};
