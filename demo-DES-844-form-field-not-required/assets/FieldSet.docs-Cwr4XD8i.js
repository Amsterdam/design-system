import{j as e}from"./jsx-runtime-BlAj40OV.js";import{useMDXComponents as o}from"./index-BI1Biiay.js";import{ae as a,ak as s,al as d,am as l,an as i}from"./index-B_RMS4Oh.js";import{F as h,W as c,a as p,b as u,R as x,c as m,d as f,C as j,e as g}from"./FieldSet.stories-CzAEXqBd.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-DqviZ3OH.js";import"../sb-preview/runtime.js";import"./index-BU4L-DQy.js";import"./index-D-8MO0q_.js";import"./index-nrpnv_Jx.js";import"./index-DrFu-skq.js";import"./index.esm-BXcx5UUI.js";import"./clsx-B-dksMZM.js";import"./index.esm-Bsc2owIZ.js";import"./Hint-D4EIfW8U.js";const b="<!-- @license CC0-1.0 -->\n\n# Field Set\n\nA component to group related form inputs.\n\n## Guidelines\n\n- Use Field Set when you need to show a relationship between multiple form inputs. For example, you may need to group a set of text inputs into a single Field Set when asking for an address.\n- If all the child form elements get a `required` attribute with the same value, then add the same property with that value to the Field Set. Also make sure to have an empty string as a value for the `flag` property on all the Label components to avoid many, redundant ‟not required” labels.\n- If the various child form elements have mixed `required` attribute values then do the reverse and leave the `required` property undefined and set the `flag` property to an empty string on the Field Set and set the `required` property on the child labels and inputs as needed.\n- Make sure to set the `optional` prop to `true` if the associated form elements are not required for form submission. The Field Set's legend will then get the descriptive text “(niet verplicht)” if the `hint` prop is not set.\n- If a `hint` is provided its value will be displayed after the legend regardless of the value of `optional`.\n\n## Relevant WCAG requirements\n\n- [WCAG 1.3.5](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html): Field Set labels the purpose of a group of inputs.\n\n## References\n\n- [Providing a description for groups of form controls using fieldset and legend elements](https://www.w3.org/WAI/WCAG22/Techniques/html/H71)\n";/*@license CC0-1.0*/function r(n){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...o(),...n.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(a,{of:h}),`
`,e.jsx(s,{children:b}),`
`,e.jsx(d,{}),`
`,e.jsx(l,{}),`
`,e.jsx(t.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(t.h3,{id:"with-description",children:"With description"}),`
`,e.jsxs(t.p,{children:[`A Field Set can have a description.
Make sure to connect this description to the Field Set or a specific input,
otherwise this won’t be read by a screen reader.
Add an `,e.jsx(t.code,{children:"aria-describedby"}),` attribute to the Field Set
and provide the `,e.jsx(t.code,{children:"id"})," of the describing element as its value."]}),`
`,e.jsx(i,{of:c}),`
`,e.jsx(t.h3,{id:"with-hint",children:"With Hint"}),`
`,e.jsxs(t.p,{children:[`A Field Set can indicate whether all of the inputs it contains are optional or required.
Make sure to add a `,e.jsx(t.code,{children:"required"})," or ",e.jsx(t.code,{children:'aria-required="true"'})," attribute to ",e.jsx("em",{children:"all"})," form element in this Field Set."]}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(t.h3,{id:"with-validation",children:"With Validation"}),`
`,e.jsxs(t.p,{children:[`A Field Set can indicate whether any of the inputs it contains has a validation error.
Use an `,e.jsx(t.a,{href:"/docs/components-forms-error-message--docs",children:"Error Message"}),` to describe the error.
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
`,e.jsx(t.h3,{id:"radio-group-with-hint",children:"Radio group with Hint"}),`
`,e.jsxs(t.p,{children:["A Field Set with a Radio group can also indicate whether all of the radios it contains are ",e.jsx("em",{children:"not"}),` required.
Make sure to add the `,e.jsx(t.code,{children:"required"})," or ",e.jsx(t.code,{children:'aria-required="true"'})," attribute to ",e.jsx("em",{children:"any"})," samely named Radios in this Field Set."]}),`
`,e.jsx(i,{of:m}),`
`,e.jsx(t.h3,{id:"radio-group-with-validation",children:"Radio group with validation"}),`
`,e.jsxs(t.p,{children:[`A Field Set with a Radio group can also have a validation error.
In this case, connect the Error Message to the Field Set instead of an input.
Add an `,e.jsx(t.code,{children:"aria-describedby"})," attribute to the Field Set and provide the ",e.jsx(t.code,{children:"id"})," of Error Message as its value."]}),`
`,e.jsx(i,{of:f}),`
`,e.jsx(t.h3,{id:"checkbox-group",children:"Checkbox group"}),`
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
`,e.jsx(i,{of:j}),`
`,e.jsxs(t.p,{children:["Note that you should not make a Field Set containing inputs of ",e.jsx(t.code,{children:'type="checkbox"'})," required."]}),`
`,e.jsx(t.h3,{id:"checkbox-group-with-validation",children:"Checkbox group with validation"}),`
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
`,e.jsx(i,{of:g})]})}function I(n={}){const{wrapper:t}={...o(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(r,{...n})}):r(n)}export{I as default};
