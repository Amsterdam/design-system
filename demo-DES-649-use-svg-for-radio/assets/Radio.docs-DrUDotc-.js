import{j as e}from"./jsx-runtime-BlAj40OV.js";import{useMDXComponents as s}from"./index-BI1Biiay.js";import{ae as a,ak as r,al as d,am as l,an as t}from"./index-BfuN6aOV.js";import{R as c,I as h,a as m,C as p}from"./Radio.stories-Dfmbm082.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-8jJznu1I.js";import"../sb-preview/runtime.js";import"./index-Cf-03bMR.js";import"./index-D-8MO0q_.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";import"./index.esm-BXBBSymM.js";import"./clsx-B-dksMZM.js";import"./index.esm-BBV4ZYo5.js";const u=`<!-- @license CC0-1.0 -->

# Radio

Allows users to select one option from a list.

## Guidelines

- Do not assume that users will know how many options they can select based on the visual difference between Radios and Checkboxes alone.
  If needed, add a hint explaining this, for example, ‘Select one option’.
- Order Radios alphabetically by default.
  In some cases, it can be helpful to order them from most-to-least common options.
  For example, you could order options for ‘Where do you live?’ based on population size.
  However you should do this with extreme caution as it can reinforce bias.
  If in doubt, order alphabetically.
- Labels should be concise. Try to keep labels shorter than 4 words.

Use a [Checkbox](/docs/components-forms-checkbox--docs) when a user can select more than 1 option from a list.
`;/*@license CC0-1.0*/function i(n){const o={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",...s(),...n.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(a,{of:c}),`
`,e.jsx(r,{children:u}),`
`,e.jsx(d,{}),`
`,e.jsx(l,{}),`
`,e.jsx(o.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(o.h3,{id:"in-a-field-set",children:"In a Field Set"}),`
`,e.jsx(o.p,{children:"Use a Field Set to group several Radios with a legend, description and / or an Error Message."}),`
`,e.jsxs(o.p,{children:["Add ",e.jsx(o.code,{children:'role="radiogroup"'}),` to the Field Set to have it explicitly announced as a radio group (the default role is just ‘group’).
The ‘radio group’ role also allows using `,e.jsx(o.code,{children:"aria-required"}),` on Field Set; that isn’t allowed for the ‘group’ role.
Even so, always set `,e.jsx(o.code,{children:"aria-required"})," on the individual Radios as well to ensure that screen readers can read it."]}),`
`,e.jsxs(o.p,{children:["If you don’t need the description, remove its Paragraph and the ",e.jsx(o.code,{children:"aria-describedby"})," from the Field Set."]}),`
`,e.jsxs(o.p,{children:["Check ",e.jsx(o.a,{href:"/docs/components-forms-field-set--docs",children:"the Field Set docs"})," for more information on configuring it."]}),`
`,e.jsx(t,{of:h}),`
`,e.jsx(o.h3,{id:"in-a-field-set-with-validation",children:"In a Field Set with validation"}),`
`,e.jsxs(o.p,{children:["If the Radio can become invalid, add an Error Message component and its ",e.jsx(o.code,{children:"id"})," to the ",e.jsx(o.code,{children:"aria-describedby"})," attribute of the Field Set."]}),`
`,e.jsxs(o.p,{children:["Check ",e.jsx(o.a,{href:"/docs/components-forms-field-set--docs",children:"the Field Set docs"})," for more information on configuring it."]}),`
`,e.jsx(t,{of:m}),`
`,e.jsx(o.h3,{id:"custom-icons",children:"Custom icons"}),`
`,e.jsxs(o.p,{children:[`It is possible to change the default Radio icon.
This is intended for users who do not work within the City of Amsterdam corporate identity.
If you work for the City of Amsterdam, it is unlikely that you need this.
If you would like to use a custom icon, please contact `,e.jsx(o.a,{href:"mailto:designsystem@amsterdam.nl",children:"designsystem@amsterdam.nl"}),"."]}),`
`,e.jsx(t,{of:p})]})}function A(n={}){const{wrapper:o}={...s(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(i,{...n})}):i(n)}export{A as default};
