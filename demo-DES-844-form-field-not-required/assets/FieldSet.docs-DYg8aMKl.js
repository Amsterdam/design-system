import{j as e}from"./jsx-runtime-BlAj40OV.js";import{useMDXComponents as o}from"./index-BI1Biiay.js";import{ae as d,ak as a,al as s,am as l,an as i}from"./index-DYEMXRUz.js";import{F as h,W as c,a as p,b as u,R as x,c as j,d as b,C as m,e as f}from"./FieldSet.stories-DrDmOEU4.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-1spVsYue.js";import"../sb-preview/runtime.js";import"./index-BU4L-DQy.js";import"./index-D-8MO0q_.js";import"./index-nrpnv_Jx.js";import"./index-DrFu-skq.js";import"./index.esm-DZTeNGND.js";import"./clsx-B-dksMZM.js";import"./index.esm-Bsc2owIZ.js";import"./Label-gh166QWO.js";const g=`<!-- @license CC0-1.0 -->

# Field Set

A component to group related form inputs.

## Guidelines

- Use Field Set when you need to show a relationship between multiple form inputs. For example, you may need to group a set of text inputs into a single Field Set when asking for an address.
- If all the child form elements get a \`required\` attribute with the same value, then add the same property with that value to the Field Set. Also make sure to have an empty string as a value for the \`notRequiredLabel\` property on all the Label components to avoid many, redundant ‟not required” labels.
- If the various child form elements have mixed \`required\` attribute values then do the reverse and leave the \`required\` property undefined and set the \`notRequiredLabel\` property to an empty string on the Field Set and set the \`required\` property on the child labels and inputs as needed.

## Relevant WCAG requirements

- [WCAG 1.3.5](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html): Field Set labels the purpose of a group of inputs.

## References

- [Providing a description for groups of form controls using fieldset and legend elements](https://www.w3.org/WAI/WCAG22/Techniques/html/H71)
`;/*@license CC0-1.0*/function r(n){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...o(),...n.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(d,{of:h}),`
`,e.jsx(a,{children:g}),`
`,e.jsx(s,{}),`
`,e.jsx(l,{}),`
`,e.jsx(t.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(t.h3,{id:"with-description",children:"With Description"}),`
`,e.jsxs(t.p,{children:[`A Field Set can have a description.
Make sure to connect this description to the Field Set or a specific input,
otherwise this won’t be read by a screen reader.
Add an `,e.jsx(t.code,{children:"aria-describedby"}),` attribute to the Field Set
and provide the `,e.jsx(t.code,{children:"id"})," of the describing element as its value."]}),`
`,e.jsx(i,{of:c}),`
`,e.jsx(t.h3,{id:"with-not-required-label",children:"With Not Required Label"}),`
`,e.jsxs(t.p,{children:["A Field Set can indicate whether all of the inputs it contains are ",e.jsx("em",{children:"not"}),` required.
Make sure to `,e.jsx("em",{children:"not"})," add a ",e.jsx(t.code,{children:"required"})," or ",e.jsx(t.code,{children:'aria-required="true"'})," attribute to ",e.jsx("em",{children:"any"}),` form element in this Field Set.
Also never set either the `,e.jsx(t.code,{children:"aria-required"})," attribute on a field set that is not of the ",e.jsx(t.code,{children:'role="radiogroup"'})," (see: ",e.jsx(t.a,{href:"#radio-group",children:"Radio Group"}),")."]}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(t.h3,{id:"with-error",children:"With Error"}),`
`,e.jsxs(t.p,{children:[`A Field Set can indicate whether any of the inputs it contains has a validation error.
Use Error Message to describe the error.
Make sure to connect the Error Message to the correct input in the Field Set,
otherwise it won’t be read by a screen reader.
Add an `,e.jsx(t.code,{children:"aria-describedby"})," attribute to the input and provide the ",e.jsx(t.code,{children:"id"})," of Error Message as its value."]}),`
`,e.jsx(i,{of:u}),`
`,e.jsx(t.h3,{id:"radio-group",children:"Radio group"}),`
`,e.jsx(t.p,{children:"Use a Field Set to group several Radios with a legend, description, and / or an Error Message."}),`
`,e.jsxs(t.p,{children:["Add ",e.jsx(t.code,{children:'role="radiogroup"'}),` to the Field Set to have it explicitly announced as a radio group (the default role is just ‘group’).
The ‘radio group’ role also allows using `,e.jsx(t.code,{children:"aria-required"}),` on Field Set; that isn’t allowed for the ‘group’ role.
Even so, always set `,e.jsx(t.code,{children:"aria-required"})," on the individual Radios as well to ensure that screen readers can read it."]}),`
`,e.jsx(i,{of:x}),`
`,e.jsx(t.h3,{id:"radio-group-with-not-required-label",children:"Radio Group With Not Required Label"}),`
`,e.jsxs(t.p,{children:["A Field Set with a radio button group can also indicate whether all of the radio inputs it contains are ",e.jsx("em",{children:"not"}),` required.
Make sure to `,e.jsx("em",{children:"not"})," add the ",e.jsx(t.code,{children:'aria-required="true"'})," attribute to the Field Set and ",e.jsx("em",{children:"any"})," input element in this Field Set."]}),`
`,e.jsx(i,{of:j}),`
`,e.jsx(t.h3,{id:"radio-group-with-validation",children:"Radio group with validation"}),`
`,e.jsxs(t.p,{children:[`A Field Set with a Radio group can also have a validation error.
In this case, connect the Error Message to the Field Set instead of an input.
Add an `,e.jsx(t.code,{children:"aria-describedby"})," attribute to the Field Set and provide the ",e.jsx(t.code,{children:"id"})," of Error Message as its value."]}),`
`,e.jsx(i,{of:b}),`
`,e.jsx(t.h3,{id:"checkbox-group",children:"Checkbox Group"}),`
`,e.jsx(t.p,{children:"Use a Field Set to group Checkboxes."}),`
`,e.jsxs(t.p,{children:["Please note: ",e.jsx(t.a,{href:"https://github.com/nvaccess/nvda/issues/12718",rel:"nofollow",children:"NVDA has a bug"}),` which causes it to
not report a description connected to a Field Set when it contains checkboxes.`]}),`
`,e.jsxs(t.p,{children:[`For this reason, we add the description text to the label.
Screen reader users will no longer be able to skip the description,
but we think that is preferable to missing the description entirely.
Add an `,e.jsx(t.code,{children:"id"})," to the Field Set and the description, and add both to the ",e.jsx(t.code,{children:"aria-labelledby"})," attribute of Field Set, like so:"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`<Fieldset
  aria-labelledby="fieldset description"
  id="fieldset"
  legend="Label"
>
  <Paragraph id="description">Description</Paragraph>
  ...
</FieldSet>
`})}),`
`,e.jsxs(t.p,{children:["The order of the ",e.jsx(t.code,{children:"id"}),"s is the order in which they are read by screen readers."]}),`
`,e.jsx(i,{of:m}),`
`,e.jsxs(t.p,{children:["Note that you should not make a Field Set containing inputs of ",e.jsx(t.code,{children:'type="checkbox"'})," required."]}),`
`,e.jsx(t.h3,{id:"checkbox-group-with-validation",children:"Checkbox group with validation"}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsx(t.p,{children:"cb354c9d85d4cdccfa3c3cf7763a52b003f7ee0f"}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(t.p,{children:["Because of ",e.jsx(t.a,{href:"https://github.com/nvaccess/nvda/issues/12718",rel:"nofollow",children:"the NVDA bug mentioned earlier"}),`,
we add the Error Message text to the label as well.
Add an `,e.jsx(t.code,{children:"id"})," to the Field Set and the Error Message, and add both to the ",e.jsx(t.code,{children:"aria-labelledby"})," attribute of Field Set, like so:"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`<Fieldset
  aria-labelledby="fieldset description"
  id="fieldset"
  legend="Label"
>
  <Paragraph id="description">Description</Paragraph>
  ...
</FieldSet>
`})}),`
`,e.jsxs(t.p,{children:["The order of the ",e.jsx(t.code,{children:"id"}),"s is the order in which they are read by screen readers."]}),`
`,e.jsx(i,{of:f})]})}function N(n={}){const{wrapper:t}={...o(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(r,{...n})}):r(n)}export{N as default};
