import{j as e}from"./jsx-runtime-BlAj40OV.js";import{useMDXComponents as o}from"./index-BI1Biiay.js";import{ae as d,ak as s,al as a,am as h,an as i}from"./index-C7A4QEBt.js";import{F as l,W as c,a as p,b as u,R as x,c as j,d as b,C as m,e as g}from"./FieldSet.stories-BD-PCRGt.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-B0eCrbDN.js";import"../sb-preview/runtime.js";import"./index-BMdlDBjA.js";import"./index-D-8MO0q_.js";import"./index-DIJ7EKf7.js";import"./index-DrFu-skq.js";import"./FieldSet-BegDZfbg.js";import"./clsx-B-dksMZM.js";import"./Label-DNXaCjsW.js";import"./TextInput-jIMKXhRY.js";import"./Field-kaYbOqUn.js";import"./ErrorMessage-BV40jE7R.js";import"./Paragraph-BWS5kDPY.js";import"./Column-Beeb86Y8.js";import"./Checkbox-DmLscak1.js";const f=`<!-- @license CC0-1.0 -->

# Field Set

A component to group related form inputs.

## Guidelines

- Use Field Set when you need to show a relationship between multiple form inputs. For example, you may need to group a set of text inputs into a single Field Set when asking for an address.

## Relevant WCAG Requirements

- [WCAG 1.3.5](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html): Field Set labels the purpose of a group of inputs.

## References

- [Providing a description for groups of form controls using fieldset and legend elements](https://www.w3.org/WAI/WCAG22/Techniques/html/H71)
`;/*@license CC0-1.0*/function n(t){const r={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...o(),...t.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(d,{of:l}),`
`,e.jsx(s,{children:f}),`
`,e.jsx(a,{}),`
`,e.jsx(h,{}),`
`,e.jsx(r.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(r.h3,{id:"with-description",children:"With Description"}),`
`,e.jsxs(r.p,{children:[`A Field Set can have a description.
Make sure to connect this description to the Field Set or a specific input,
otherwise this won’t be read by a screen reader.
Add an `,e.jsx(r.code,{children:"aria-describedby"}),` attribute to the Field Set
and provide the `,e.jsx(r.code,{children:"id"})," of the describing element as its value."]}),`
`,e.jsx(i,{of:c}),`
`,e.jsx(r.h3,{id:"with-not-required-label",children:"With Not Required Label"}),`
`,e.jsxs(r.p,{children:["A Field Set can indicate whether all of the inputs it contains are ",e.jsx("em",{children:"not"}),` required.
Make sure to `,e.jsx("em",{children:"not"})," add a ",e.jsx(r.code,{children:"required"})," or ",e.jsx(r.code,{children:'aria-required="true"'})," attribute to ",e.jsx("em",{children:"any"}),` form element in this Field Set.
Also never set either the `,e.jsx(r.code,{children:"aria-required"})," attribute on a field set that is not of the ",e.jsx(r.code,{children:'role="radiogroup"'})," (see: ",e.jsx(r.a,{href:"#radio-group",children:"Radio Group"}),")."]}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(r.h3,{id:"with-error",children:"With Error"}),`
`,e.jsxs(r.p,{children:[`A Field Set can indicate whether any of the inputs it contains has a validation error.
Use Error Message to describe the error.
Make sure to connect the error message to the correct input in the Field Set,
otherwise it won’t be read by a screen reader.
Add an `,e.jsx(r.code,{children:"aria-describedby"})," attribute to the input and provide the ",e.jsx(r.code,{children:"id"})," of Error Message as its value."]}),`
`,e.jsx(i,{of:u}),`
`,e.jsx(r.h3,{id:"radio-group",children:"Radio group"}),`
`,e.jsxs(r.p,{children:[`Use a Field Set to group radio buttons.
When grouping radio inputs, use `,e.jsx(r.code,{children:'role="radiogroup"'})," on Field Set to have this grouping explicitly announced as a radio group (the default role is ",e.jsx(r.code,{children:"group"}),`).
Using `,e.jsx(r.code,{children:'role="radiogroup"'})," also allows you to use ",e.jsx(r.code,{children:"aria-required"})," on Field Set, which isn’t allowed for role ",e.jsx(r.code,{children:"group"}),`.
Always also set `,e.jsx(r.code,{children:"aria-required"})," on the individual radio buttons though, to make sure it’s read by screen readers."]}),`
`,e.jsx(i,{of:x}),`
`,e.jsx(r.h3,{id:"radio-group-with-not-required-label",children:"Radio Group With Not Required Label"}),`
`,e.jsxs(r.p,{children:["A Field Set with a radio button group can also indicate whether all of the radio inputs it contains are ",e.jsx("em",{children:"not"}),` required.
Make sure to `,e.jsx("em",{children:"not"})," add the ",e.jsx(r.code,{children:'aria-required="true"'})," attribute to the Field Set and ",e.jsx("em",{children:"any"})," input element in this Field Set."]}),`
`,e.jsx(i,{of:j}),`
`,e.jsx(r.h3,{id:"radio-group-with-error",children:"Radio Group With Error"}),`
`,e.jsxs(r.p,{children:[`A Field Set with a radio button group can also have a validation error.
In this case, connect the error message to the Field Set instead of an input.
Add an `,e.jsx(r.code,{children:"aria-describedby"})," attribute to the Field Set and provide the ",e.jsx(r.code,{children:"id"})," of Error Message as its value."]}),`
`,e.jsx(i,{of:b}),`
`,e.jsx(r.h3,{id:"checkbox-group",children:"Checkbox Group"}),`
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
`,e.jsx(i,{of:m}),`
`,e.jsxs(r.p,{children:["Note that you should not make a Field Set containing inputs of ",e.jsx(r.code,{children:'type="checkbox"'})," required."]}),`
`,e.jsx(r.h3,{id:"checkbox-group-with-error",children:"Checkbox Group With Error"}),`
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
`,e.jsx(i,{of:g})]})}function X(t={}){const{wrapper:r}={...o(),...t.components};return r?e.jsx(r,{...t,children:e.jsx(n,{...t})}):n(t)}export{X as default};
