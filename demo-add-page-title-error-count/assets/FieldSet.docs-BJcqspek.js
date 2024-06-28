import{j as e}from"./jsx-runtime-X2b_N9AH.js";import{useMDXComponents as o}from"./index-CRbi4mQH.js";import{M as s,d,P as a,e as h,f as n}from"./index-DrEf77XV.js";import{F as l,W as c,a as p,R as u,b as x,C as g,c as j}from"./FieldSet.stories-3Wgn0sKc.js";import"./index-uCp2LrAq.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-BNclD0Be.js";import"../sb-preview/runtime.js";import"./index-BOkhicXD.js";import"./index-DXimoRZY.js";import"./index-B8K4vdXH.js";import"./index-DrFu-skq.js";import"./FieldSet-DkgxHA-T.js";import"./clsx-B-dksMZM.js";import"./Label-BnSmP98q.js";import"./TextInput-DvUsoF4e.js";import"./Column-BRryplre.js";import"./ErrorMessage-BHYT2tqE.js";import"./Paragraph-DpVlyIEJ.js";import"./Checkbox-DRBoUL7U.js";const b=`<!-- @license CC0-1.0 -->

# Field Set

A component to group related form inputs.

## Guidelines

- Use Field Set when you need to show a relationship between multiple form inputs. For example, you may need to group a set of text inputs into a single Field Set when asking for an address.

## Relevant WCAG Requirements

- [WCAG 1.3.5](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html): Field Set labels the purpose of a group of inputs.

## References

- [Providing a description for groups of form controls using fieldset and legend elements](https://www.w3.org/WAI/WCAG22/Techniques/html/H71)
`;/*@license CC0-1.0*/function t(i){const r={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...o(),...i.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(s,{of:l}),`
`,e.jsx(d,{children:b}),`
`,e.jsx(a,{}),`
`,e.jsx(h,{}),`
`,e.jsx(r.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(r.h2,{id:"with-description",children:"With Description"}),`
`,e.jsxs(r.p,{children:[`A Field Set can have a description.
Make sure to connect this description to the Field Set or a specific input,
otherwise this won’t be read by a screen reader.
Add an `,e.jsx(r.code,{children:"aria-describedby"}),` attribute to the Field Set
and provide the `,e.jsx(r.code,{children:"id"})," of the describing element as its value."]}),`
`,e.jsx(n,{of:c}),`
`,e.jsx(r.h2,{id:"with-error",children:"With Error"}),`
`,e.jsxs(r.p,{children:[`A Field Set can indicate whether any of the inputs it contains has a validation error.
Use Error Message to describe the error.
Make sure to connect the error message to the correct input in the Field Set,
otherwise it won’t be read by a screen reader.
Add an `,e.jsx(r.code,{children:"aria-describedby"})," attribute to the input and provide the ",e.jsx(r.code,{children:"id"})," of Error Message as its value."]}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(r.h3,{id:"radio-group",children:"Radio group"}),`
`,e.jsxs(r.p,{children:[`Use a Field Set to group radio buttons.
When grouping radio inputs, use `,e.jsx(r.code,{children:'role="radiogroup"'})," on Field Set to have this grouping explicitly announced as a radio group (the default role is ",e.jsx(r.code,{children:"group"}),`).
Using `,e.jsx(r.code,{children:'role="radiogroup"'})," also allows you to use ",e.jsx(r.code,{children:"aria-required"})," on Field Set, which isn’t allowed for role ",e.jsx(r.code,{children:"group"}),`.
Always also set `,e.jsx(r.code,{children:"aria-required"})," on the individual radio buttons though, to make sure it’s read by screen readers."]}),`
`,e.jsx(n,{of:u}),`
`,e.jsx(r.h3,{id:"radio-group-with-error",children:"Radio group with error"}),`
`,e.jsxs(r.p,{children:[`A Field Set with a radio button group can also have a validation error.
In this case, connect the error message to the Field Set instead of an input.
Add an `,e.jsx(r.code,{children:"aria-describedby"})," attribute to the Field Set and provide the ",e.jsx(r.code,{children:"id"})," of Error Message as its value."]}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(r.h3,{id:"checkbox-group",children:"Checkbox group"}),`
`,e.jsx(r.p,{children:"Use a Field Set to group checkboxes."}),`
`,e.jsxs(r.p,{children:["Please note: ",e.jsx(r.a,{href:"https://github.com/nvaccess/nvda/issues/12718",rel:"nofollow",children:"NVDA has a bug"}),` which causes it to
not report a description connected to a Field Set when it contains checkboxes.`]}),`
`,e.jsxs(r.p,{children:[`For this reason, we add the description text to the label.
Screen reader users will no longer be able to skip the description,
but we think that is preferable to missing the description entirely.
Add an `,e.jsx(r.code,{children:"id"})," to the Field Set and the description, and add both to the ",e.jsx(r.code,{children:"aria-labelledby"})," attribute of Field Set, like so:"]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-jsx",children:`<Fieldset
  aria-labelledby="fieldset description"
  id="fieldset"
  legend="Label"
>
  <Paragraph id="description">Description</Paragraph>
  ...
</FieldSet>
`})}),`
`,e.jsxs(r.p,{children:["The order of the ",e.jsx(r.code,{children:"id"}),"s is the order in which they are read by screen readers."]}),`
`,e.jsx(n,{of:g}),`
`,e.jsx(r.h3,{id:"checkbox-group-with-error",children:"Checkbox group with error"}),`
`,e.jsxs(r.p,{children:["Because of ",e.jsx(r.a,{href:"https://github.com/nvaccess/nvda/issues/12718",rel:"nofollow",children:"the NVDA bug mentioned earlier"}),`,
we add the Error Message text to the label as well.
Add an `,e.jsx(r.code,{children:"id"})," to the Field Set and the Error Message, and add both to the ",e.jsx(r.code,{children:"aria-labelledby"})," attribute of Field Set, like so:"]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-jsx",children:`<Fieldset
  aria-labelledby="fieldset description"
  id="fieldset"
  legend="Label"
>
  <Paragraph id="description">Description</Paragraph>
  ...
</FieldSet>
`})}),`
`,e.jsxs(r.p,{children:["The order of the ",e.jsx(r.code,{children:"id"}),"s is the order in which they are read by screen readers."]}),`
`,e.jsx(n,{of:j})]})}function I(i={}){const{wrapper:r}={...o(),...i.components};return r?e.jsx(r,{...i,children:e.jsx(t,{...i})}):t(i)}export{I as default};
