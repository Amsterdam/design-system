import{j as e}from"./jsx-runtime-BjgbQsUx.js";import{useMDXComponents as o}from"./index-3rgQkYFR.js";import{ae as s,aq as a,ar as d,as as l,at as t}from"./index-DBGIhVoZ.js";import{F as h,W as c,a as p,b as u,R as x,c as j,C as g,d as m}from"./FieldSet.stories-C8m-FKNs.js";import"./index-D2MAbzvX.js";import"./index-RigO-4kf.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CXncp0N0.js";import"../sb-preview/runtime.js";import"./index-BIm0odtm.js";import"./index-D-8MO0q_.js";import"./index-CHGET4sZ.js";import"./index-DrFu-skq.js";import"./index.esm-CfNUYwVi.js";import"./clsx-B-dksMZM.js";import"./index.esm-Bz9pa_xK.js";import"./Hint-ny2kNNgA.js";const f=`<!-- @license CC0-1.0 -->

# Field Set

A component to group related form inputs.

## Guidelines

- Use Field Set when you need to show a relationship between multiple form inputs. For example, you may need to group a set of text inputs into a single Field Set when asking for an address.
- Set \`optional\` to \`true\` if all inputs in a Field Set are not required.
- Use \`hint\` to show a custom hint text.

## Relevant WCAG requirements

- [WCAG 1.3.5](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html): Field Set labels the purpose of a group of inputs.

## References

- [Providing a description for groups of form controls using fieldset and legend elements](https://www.w3.org/WAI/WCAG22/Techniques/html/H71)
`;/*@license CC0-1.0*/function r(n){const i={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...o(),...n.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(s,{of:h}),`
`,e.jsx(a,{children:f}),`
`,e.jsx(d,{}),`
`,e.jsx(l,{}),`
`,e.jsx(i.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(i.h3,{id:"with-description",children:"With description"}),`
`,e.jsxs(i.p,{children:[`A Field Set can have a description.
Make sure to connect this description to the Field Set or a specific input,
otherwise this won’t be read by a screen reader.
Add an `,e.jsx(i.code,{children:"aria-describedby"}),` attribute to the Field Set
and provide the `,e.jsx(i.code,{children:"id"})," of the describing element as its value."]}),`
`,e.jsx(t,{of:c}),`
`,e.jsx(i.h3,{id:"with-hint",children:"With Hint"}),`
`,e.jsxs(i.p,{children:[`A Field Set can indicate whether all of the inputs it contains are optional or required.
Make sure to add `,e.jsx(i.code,{children:"aria-required"})," to ",e.jsx("em",{children:"all"})," form elements in the Field Set when they are required."]}),`
`,e.jsx(t,{of:p}),`
`,e.jsx(i.h3,{id:"with-validation",children:"With Validation"}),`
`,e.jsxs(i.p,{children:[`A Field Set can indicate whether any of the inputs it contains has a validation error.
Use an `,e.jsx(i.a,{href:"/docs/components-forms-error-message--docs",children:"Error Message"}),` to describe the error.
Make sure to connect the Error Message to the correct input in the Field Set,
otherwise it won’t be read by a screen reader.
Add an `,e.jsx(i.code,{children:"aria-describedby"})," attribute to the input and provide the ",e.jsx(i.code,{children:"id"})," of Error Message as its value."]}),`
`,e.jsx(t,{of:u}),`
`,e.jsx(i.h3,{id:"radio-group",children:"Radio group"}),`
`,e.jsx(i.p,{children:"Use a Field Set to group several Radios with a legend, description, and / or an Error Message."}),`
`,e.jsxs(i.p,{children:["Add ",e.jsx(i.code,{children:'role="radiogroup"'}),` to the Field Set to have it explicitly announced as a radio group (the default role is just ‘group’).
The ‘radio group’ role also allows using `,e.jsx(i.code,{children:"aria-required"}),` on Field Set; that isn’t allowed for the ‘group’ role.
Even so, always set `,e.jsx(i.code,{children:"aria-required"})," on the individual Radios as well to ensure that screen readers can read it."]}),`
`,e.jsx(t,{of:x}),`
`,e.jsx(i.h3,{id:"radio-group-with-validation",children:"Radio group with validation"}),`
`,e.jsxs(i.p,{children:[`A Field Set with a Radio group can also have a validation error.
In this case, connect the Error Message to the Field Set instead of an input.
Add an `,e.jsx(i.code,{children:"aria-describedby"})," attribute to the Field Set and provide the ",e.jsx(i.code,{children:"id"})," of Error Message as its value."]}),`
`,e.jsx(t,{of:j}),`
`,e.jsx(i.h3,{id:"checkbox-group",children:"Checkbox group"}),`
`,e.jsx(i.p,{children:"Use a Field Set to group Checkboxes."}),`
`,e.jsxs(i.p,{children:["Please note: ",e.jsx(i.a,{href:"https://github.com/nvaccess/nvda/issues/12718",rel:"nofollow",children:"NVDA has a bug"}),` which causes it to
not report a description connected to a Field Set when it contains checkboxes.`]}),`
`,e.jsxs(i.p,{children:[`For this reason, we add the description text to the label.
Screen reader users will no longer be able to skip the description,
but we think that is preferable to missing the description entirely.
Add an `,e.jsx(i.code,{children:"id"})," to the Field Set and the description, and add both to the ",e.jsx(i.code,{children:"aria-labelledby"})," attribute of Field Set, like so:"]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`<FieldSet aria-labelledby="fieldset description" id="fieldset" legend="Label">
  <Paragraph id="description">Description</Paragraph>
  ...
</FieldSet>
`})}),`
`,e.jsxs(i.p,{children:["The order of the ",e.jsx(i.code,{children:"id"}),"s is the order in which they are read by screen readers."]}),`
`,e.jsx(t,{of:g}),`
`,e.jsx(i.h3,{id:"checkbox-group-with-validation",children:"Checkbox group with validation"}),`
`,e.jsxs(i.p,{children:["Because of ",e.jsx(i.a,{href:"https://github.com/nvaccess/nvda/issues/12718",rel:"nofollow",children:"the NVDA bug mentioned earlier"}),`,
we add the Error Message text to the label as well.
Add an `,e.jsx(i.code,{children:"id"})," to the Field Set and the Error Message, and add both to the ",e.jsx(i.code,{children:"aria-labelledby"})," attribute of Field Set, like so:"]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`<FieldSet aria-labelledby="fieldset error" id="fieldset" legend="Label">
  <ErrorMessage id="error">Error message</ErrorMessage>
  ...
</FieldSet>
`})}),`
`,e.jsxs(i.p,{children:["The order of the ",e.jsx(i.code,{children:"id"}),"s is the order in which they are read by screen readers."]}),`
`,e.jsx(t,{of:m})]})}function V(n={}){const{wrapper:i}={...o(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(r,{...n})}):r(n)}export{V as default};
