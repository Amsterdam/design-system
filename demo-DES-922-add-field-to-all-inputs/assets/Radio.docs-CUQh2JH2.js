import{j as e}from"./jsx-runtime-BlAj40OV.js";import{useMDXComponents as s}from"./index-BI1Biiay.js";import{ae as a,ak as r,al as d,am as l,an as i}from"./index-qXtV5kCN.js";import{R as c,I as h,a as p}from"./Radio.stories-CACYQVP_.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-DpfxJwE6.js";import"../sb-preview/runtime.js";import"./index-BU4L-DQy.js";import"./index-D-8MO0q_.js";import"./index-nrpnv_Jx.js";import"./index-DrFu-skq.js";import"./index.esm-BEwyunnw.js";import"./clsx-B-dksMZM.js";import"./index.esm-Bsc2owIZ.js";const m=`<!-- @license CC0-1.0 -->

# Radio

Allows users to select one option from a list.

## Guidelines

- Do not assume that users will know how many options they can select based on the visual difference between radios and checkboxes alone.
  If needed, add a hint explaining this, for example, ‘Select one option’.
- Order radio options alphabetically by default.
  In some cases, it can be helpful to order them from most-to-least common options.
  For example, you could order options for ‘Where do you live?’ based on population size.
  However you should do this with extreme caution as it can reinforce bias.
  If in doubt, order alphabetically.
- Labels should be concise. Try to keep labels shorter than 4 words.

Use a [Checkbox](/docs/components-forms-checkbox--docs) when a user can select more than 1 option from a list.
`;/*@license CC0-1.0*/function t(n){const o={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",...s(),...n.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(a,{of:c}),`
`,e.jsx(r,{children:m}),`
`,e.jsx(d,{}),`
`,e.jsx(l,{}),`
`,e.jsx(o.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(o.h3,{id:"in-a-field-set",children:"In a Field Set"}),`
`,e.jsx(o.p,{children:`Usually, you should place Radio’s inside a Field Set component.
Here’s an example of a Field Set component that includes a legend, a description, and a group of Radio’s.`}),`
`,e.jsxs(o.p,{children:["When grouping Radios, add ",e.jsx(o.code,{children:'role="radiogroup"'}),` to the Field Set to have it explicitly announced as a radio group (the default role is just ‘group’).
The ‘radio group’ role also allows using `,e.jsx(o.code,{children:"aria-required"}),` on Field Set; that isn’t allowed for the ‘group’ role.
Always also set `,e.jsx(o.code,{children:"aria-required"})," on the individual radio buttons though, to make sure it’s read by screen readers."]}),`
`,e.jsxs(o.p,{children:["If you don’t need the description, just take out the description Paragraph and the ",e.jsx(o.code,{children:"aria-describedby"})," from the Field Set."]}),`
`,e.jsxs(o.p,{children:["For more information, check ",e.jsx(o.a,{href:"/docs/components-forms-field-set--docs",children:"the Field Set component documentation"}),"."]}),`
`,e.jsx(i,{of:h}),`
`,e.jsx(o.h3,{id:"in-an-invalid-field-set",children:"In an invalid Field Set"}),`
`,e.jsx(o.p,{children:"This is an example of an invalid Field Set with a Label, a description, an Error Message and a group of Radio’s."}),`
`,e.jsxs(o.p,{children:["For more information, check ",e.jsx(o.a,{href:"/docs/components-forms-field-set--docs",children:"the Field Set component documentation"}),"."]}),`
`,e.jsx(i,{of:p})]})}function M(n={}){const{wrapper:o}={...s(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(t,{...n})}):t(n)}export{M as default};
