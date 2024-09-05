import{j as e}from"./jsx-runtime-BlAj40OV.js";import{useMDXComponents as o}from"./index-BI1Biiay.js";import{ae as a,ak as d,al as s,am as l,an as t}from"./index-FaGZXtG_.js";import{F as h,W as c,a as p,b as u,R as x,c as j,d as m,C as f,e as g}from"./FieldSet.stories-DAbQT_Bx.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-Bl470wCU.js";import"../sb-preview/runtime.js";import"./index-BU4L-DQy.js";import"./index-D-8MO0q_.js";import"./index-nrpnv_Jx.js";import"./index-DrFu-skq.js";import"./index.esm-BmUt8U2F.js";import"./clsx-B-dksMZM.js";import"./index.esm-Bsc2owIZ.js";const b=`<!-- @license CC0-1.0 -->

# Field Set

A component to group related form inputs.

## Guidelines

- Use Field Set when you need to show a relationship between multiple form inputs. For example, you may need to group a set of text inputs into a single Field Set when asking for an address.
- If all the child form elements get a \`required\` attribute with the same value, then add the same property with that value to the Field Set. Also make sure to have an empty string as a value for the \`flag\` property on all the Label components to avoid many, redundant ‟not required” labels.
- If the various child form elements have mixed \`required\` attribute values then do the reverse and leave the \`required\` property undefined and set the \`flag\` property to an empty string on the Field Set and set the \`required\` property on the child labels and inputs as needed.

## Relevant WCAG requirements

- [WCAG 1.3.5](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html): Field Set labels the purpose of a group of inputs.

## References

- [Providing a description for groups of form controls using fieldset and legend elements](https://www.w3.org/WAI/WCAG22/Techniques/html/H71)
`;/*@license CC0-1.0*/function r(n){const i={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...o(),...n.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(a,{of:h}),`
`,e.jsx(d,{children:b}),`
`,e.jsx(s,{}),`
`,e.jsx(l,{}),`
`,e.jsx(i.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(i.h3,{id:"with-description",children:"With Description"}),`
`,e.jsxs(i.p,{children:[`A Field Set can have a description.
Make sure to connect this description to the Field Set or a specific input,
otherwise this won’t be read by a screen reader.
Add an `,e.jsx(i.code,{children:"aria-describedby"}),` attribute to the Field Set
and provide the `,e.jsx(i.code,{children:"id"})," of the describing element as its value."]}),`
`,e.jsx(t,{of:c}),`
`,e.jsx(i.h3,{id:"with-hint-marking-field-set-as-required",children:"With Hint Marking Field Set As Required"}),`
`,e.jsxs(i.p,{children:[`A Field Set can indicate whether all of the inputs it contains are optional or required.
Make sure to `,e.jsx("em",{children:"not"})," add a ",e.jsx(i.code,{children:"required"})," or ",e.jsx(i.code,{children:'aria-required="true"'})," attribute to ",e.jsx("em",{children:"any"}),` form element in this Field Set.
Also never set either the `,e.jsx(i.code,{children:"aria-required"})," attribute on a field set that is not of the ",e.jsx(i.code,{children:'role="radiogroup"'})," (see: ",e.jsx(i.a,{href:"#radio-group",children:"Radio Group"}),")."]}),`
`,e.jsx(t,{of:p}),`
`,e.jsx(i.h3,{id:"with-validation",children:"With Validation"}),`
`,e.jsxs(i.p,{children:[`A Field Set can indicate whether any of the inputs it contains has a validation error.
Use an `,e.jsx(i.a,{href:"/docs/components-forms-error-message--docs",children:"Error Message"}),` to describe the error.
Make sure to connect the Error Message to the correct input in the Field Set,
otherwise it won’t be read by a screen reader.
Add an `,e.jsx(i.code,{children:"aria-describedby"})," attribute to the input and provide the ",e.jsx(i.code,{children:"id"})," of Error Message as its value."]}),`
`,e.jsx(t,{of:u}),`
`,e.jsx(i.h2,{id:"radio-group",children:"Radio Group"}),`
`,e.jsx(i.p,{children:"Use a Field Set to group several Radios with a legend, description, and / or an Error Message."}),`
`,e.jsxs(i.p,{children:["Add ",e.jsx(i.code,{children:'role="radiogroup"'}),` to the Field Set to have it explicitly announced as a radio group (the default role is just ‘group’).
The ‘radio group’ role also allows using `,e.jsx(i.code,{children:"aria-required"}),` on Field Set; that isn’t allowed for the ‘group’ role.
Even so, always set `,e.jsx(i.code,{children:"aria-required"})," on the individual Radios as well to ensure that screen readers can read it."]}),`
`,e.jsx(t,{of:x}),`
`,e.jsx(i.h3,{id:"radio-group-with-hint-marking-group-as-optional",children:"Radio Group With Hint Marking Group As Optional"}),`
`,e.jsxs(i.p,{children:["A Field Set with a Radio group can also indicate whether all of the radios it contains are ",e.jsx("em",{children:"not"}),` required.
Make sure to `,e.jsx("em",{children:"not"})," add the ",e.jsx(i.code,{children:'aria-required="true"'})," attribute to the Field Set and ",e.jsx("em",{children:"any"})," input element in this Field Set."]}),`
`,e.jsx(t,{of:j}),`
`,e.jsx(i.h3,{id:"radio-group-with-validation",children:"Radio Group With Validation"}),`
`,e.jsxs(i.p,{children:[`A Field Set with a Radio group can also have a validation error.
In this case, connect the Error Message to the Field Set instead of an input.
Add an `,e.jsx(i.code,{children:"aria-describedby"})," attribute to the Field Set and provide the ",e.jsx(i.code,{children:"id"})," of Error Message as its value."]}),`
`,e.jsx(t,{of:m}),`
`,e.jsx(i.h3,{id:"checkbox-group",children:"Checkbox Group"}),`
`,e.jsx(i.p,{children:"Use a Field Set to group Checkboxes."}),`
`,e.jsxs(i.p,{children:["Please note: ",e.jsx(i.a,{href:"https://github.com/nvaccess/nvda/issues/12718",rel:"nofollow",children:"NVDA has a bug"}),` which causes it to
not report a description connected to a Field Set when it contains checkboxes.`]}),`
`,e.jsxs(i.p,{children:[`For this reason, we add the description text to the label.
Screen reader users will no longer be able to skip the description,
but we think that is preferable to missing the description entirely.
Add an `,e.jsx(i.code,{children:"id"})," to the Field Set and the description, and add both to the ",e.jsx(i.code,{children:"aria-labelledby"})," attribute of Field Set, like so:"]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-jsx",children:`<Fieldset
  aria-labelledby="fieldset description"
  id="fieldset"
  legend="Label"
>
  <Paragraph id="description">Description</Paragraph>
  ...
</FieldSet>
`})}),`
`,e.jsxs(i.p,{children:["The order of the ",e.jsx(i.code,{children:"id"}),"s is the order in which they are read by screen readers."]}),`
`,e.jsx(t,{of:f}),`
`,e.jsxs(i.p,{children:["Note that you should not make a Field Set containing inputs of ",e.jsx(i.code,{children:'type="checkbox"'})," required."]}),`
`,e.jsx(i.h3,{id:"checkbox-group-with-validation",children:"Checkbox Group With Validation"}),`
`,e.jsxs(i.p,{children:["Because of ",e.jsx(i.a,{href:"https://github.com/nvaccess/nvda/issues/12718",rel:"nofollow",children:"the NVDA bug mentioned earlier"}),`,
we add the Error Message text to the label as well.
Add an `,e.jsx(i.code,{children:"id"})," to the Field Set and the Error Message, and add both to the ",e.jsx(i.code,{children:"aria-labelledby"})," attribute of Field Set, like so:"]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-jsx",children:`<Fieldset
  aria-labelledby="fieldset description"
  id="fieldset"
  legend="Label"
>
  <Paragraph id="description">Description</Paragraph>
  ...
</FieldSet>
`})}),`
`,e.jsxs(i.p,{children:["The order of the ",e.jsx(i.code,{children:"id"}),"s is the order in which they are read by screen readers."]}),`
`,e.jsx(t,{of:g})]})}function V(n={}){const{wrapper:i}={...o(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(r,{...n})}):r(n)}export{V as default};
