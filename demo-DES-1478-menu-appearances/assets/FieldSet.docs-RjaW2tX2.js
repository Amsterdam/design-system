import{j as e}from"./iframe-Db5h8sJL.js";import{useMDXComponents as r}from"./index-O1M5odKb.js";import{M as o,c as d,P as a,e as h,f as i}from"./blocks-DsxtjDsN.js";import{F as l,W as c,a as p,b as u,R as x,c as g,C as j,d as f,e as m}from"./FieldSet.stories-BcYVDVE0.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Blhk8mSQ.js";import"./exampleContent-DRope23M.js";import"./Hint-DJbUOkfR.js";const w=`<!-- @license CC0-1.0 -->

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
`;/*@license CC0-1.0*/function s(t){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(o,{of:l}),`
`,e.jsx(d,{children:w}),`
`,e.jsx(a,{}),`
`,e.jsx(h,{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"with-description",children:"With description"}),`
`,e.jsxs(n.p,{children:[`A Field Set can have a description.
Make sure to connect this description to the Field Set or a specific input,
otherwise this won’t be read by a screen reader.
Add an `,e.jsx(n.code,{children:"aria-describedby"}),` attribute to the Field Set
and provide the `,e.jsx(n.code,{children:"id"})," of the describing element as its value."]}),`
`,e.jsxs(n.p,{children:["Do not use rich text (such as links or lists) in descriptions. ",e.jsx(n.a,{href:"/docs/components-forms-field--docs#no-rich-text",children:"Find out why"}),"."]}),`
`,e.jsx(i,{of:c}),`
`,e.jsx(n.h3,{id:"with-hint",children:"With Hint"}),`
`,e.jsxs(n.p,{children:[`A Field Set can indicate whether all of the inputs it contains are optional or required.
Make sure to add `,e.jsx(n.code,{children:"aria-required"})," to ",e.jsx("em",{children:"all"})," form elements in the Field Set when they are required."]}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(n.h3,{id:"with-validation",children:"With Validation"}),`
`,e.jsxs(n.p,{children:[`A Field Set can indicate whether any of the inputs it contains has a validation error.
Use an `,e.jsx(n.a,{href:"/docs/components-forms-error-message--docs",children:"Error Message"}),` to describe the error.
Make sure to connect the Error Message to the correct input in the Field Set,
otherwise it won’t be read by a screen reader.
Add an `,e.jsx(n.code,{children:"aria-describedby"})," attribute to the input and provide the ",e.jsx(n.code,{children:"id"})," of Error Message as its value."]}),`
`,e.jsxs(n.p,{children:["Do not use rich text (such as links or lists) in an Error Message. ",e.jsx(n.a,{href:"/docs/components-forms-error-message--docs#no-rich-text",children:"Find out why"}),"."]}),`
`,e.jsx(i,{of:u}),`
`,e.jsx(n.h3,{id:"radio-group",children:"Radio group"}),`
`,e.jsx(n.p,{children:"Use a Field Set to group several Radios with a legend, description, and / or an Error Message."}),`
`,e.jsxs(n.p,{children:["Add ",e.jsx(n.code,{children:'role="radiogroup"'}),` to the Field Set to have it explicitly announced as a radio group (the default role is just ‘group’).
The ‘radio group’ role also allows using `,e.jsx(n.code,{children:"aria-required"}),` on Field Set; that isn’t allowed for the ‘group’ role.
Even so, always set `,e.jsx(n.code,{children:"aria-required"})," on the individual Radios as well to ensure that screen readers can read it."]}),`
`,e.jsx(i,{of:x}),`
`,e.jsx(n.h3,{id:"radio-group-with-validation",children:"Radio group with validation"}),`
`,e.jsxs(n.p,{children:[`A Field Set with a Radio group can also have a validation error.
In this case, connect the Error Message to the Field Set instead of an input.
Add an `,e.jsx(n.code,{children:"aria-describedby"})," attribute to the Field Set and provide the ",e.jsx(n.code,{children:"id"})," of Error Message as its value."]}),`
`,e.jsxs(n.p,{children:["Do not use rich text (such as links or lists) in an Error Message. ",e.jsx(n.a,{href:"/docs/components-forms-error-message--docs#no-rich-text",children:"Find out why"}),"."]}),`
`,e.jsx(i,{of:g}),`
`,e.jsx(n.h3,{id:"checkbox-group",children:"Checkbox group"}),`
`,e.jsx(n.p,{children:"Use a Field Set to group Checkboxes."}),`
`,e.jsxs(n.p,{children:["Please note: ",e.jsx(n.a,{href:"https://github.com/nvaccess/nvda/issues/12718",rel:"nofollow",children:"NVDA has a bug"}),` which causes it to
not report a description connected to a Field Set when it contains checkboxes.`]}),`
`,e.jsxs(n.p,{children:[`For this reason, we add the description text to the label.
Screen reader users will no longer be able to skip the description,
but we think that is preferable to missing the description entirely.
Add an `,e.jsx(n.code,{children:"id"})," to the Field Set and the description, and add both to the ",e.jsx(n.code,{children:"aria-labelledby"})," attribute of Field Set, like so:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<FieldSet aria-labelledby="fieldset description" id="fieldset" legend="Label">
  <Paragraph id="description">Description</Paragraph>
  ...
</FieldSet>
`})}),`
`,e.jsxs(n.p,{children:["The order of the ",e.jsx(n.code,{children:"id"}),"s is the order in which they are read by screen readers."]}),`
`,e.jsxs(n.p,{children:["Do not use rich text (such as links or lists) in descriptions. ",e.jsx(n.a,{href:"/docs/components-forms-field--docs#no-rich-text",children:"Find out why"}),"."]}),`
`,e.jsx(i,{of:j}),`
`,e.jsx(n.h3,{id:"checkbox-group-with-validation",children:"Checkbox group with validation"}),`
`,e.jsxs(n.p,{children:["Because of ",e.jsx(n.a,{href:"https://github.com/nvaccess/nvda/issues/12718",rel:"nofollow",children:"the NVDA bug mentioned earlier"}),`,
we add the Error Message text to the label as well.
Add an `,e.jsx(n.code,{children:"id"})," to the Field Set and the Error Message, and add both to the ",e.jsx(n.code,{children:"aria-labelledby"})," attribute of Field Set, like so:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<FieldSet aria-labelledby="fieldset error" id="fieldset" legend="Label">
  <ErrorMessage id="error">Error message</ErrorMessage>
  ...
</FieldSet>
`})}),`
`,e.jsxs(n.p,{children:["The order of the ",e.jsx(n.code,{children:"id"}),"s is the order in which they are read by screen readers."]}),`
`,e.jsxs(n.p,{children:["Do not use rich text (such as links or lists) in an Error Message. ",e.jsx(n.a,{href:"/docs/components-forms-error-message--docs#no-rich-text",children:"Find out why"}),"."]}),`
`,e.jsx(i,{of:f}),`
`,e.jsx(n.h3,{id:"with-heading-in-legend",children:"With Heading in Legend"}),`
`,e.jsxs(n.p,{children:[`If the Field Set is the only content on the page, its Legend serves as the main heading as well.
Set `,e.jsx(n.code,{children:"legendIsPageHeading"})," to include an ",e.jsx(n.code,{children:"h1"})," element to reflect this."]}),`
`,e.jsx(i,{of:m})]})}function E(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{E as default};
