import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as s}from"./index-CxbY7dAs.js";import{M as r,e as a,P as d,f as c,h as i}from"./index-BHgg25fL.js";import{R as l,I as h,a as m,W as p}from"./Radio.stories-DHi3BQYx.js";import"./index-yBjzXJbu.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B4q2Zsfe.js";import"./index-CJ88nXQk.js";import"./index-Cf9b6H0j.js";import"./index-DrFu-skq.js";import"./index.esm-DDzNsyt1.js";import"./clsx-B-dksMZM.js";import"./index.esm-D3RaMjqb.js";const u=`<!-- @license CC0-1.0 -->

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
`;/*@license CC0-1.0*/function t(n){const o={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",...s(),...n.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(r,{of:l}),`
`,e.jsx(a,{children:u}),`
`,e.jsx(d,{}),`
`,e.jsx(c,{}),`
`,e.jsx(o.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(o.h3,{id:"in-a-field-set",children:"In a Field Set"}),`
`,e.jsx(o.p,{children:"Use a Field Set to group several Radios with a legend, description and / or an Error Message."}),`
`,e.jsxs(o.p,{children:["Add ",e.jsx(o.code,{children:'role="radiogroup"'}),` to the Field Set to have it explicitly announced as a radio group (the default role is just ‘group’).
The ‘radio group’ role also allows using `,e.jsx(o.code,{children:"aria-required"}),` on Field Set; that isn’t allowed for the ‘group’ role.
Even so, always set `,e.jsx(o.code,{children:"aria-required"})," on the individual Radios as well to ensure that screen readers can read it."]}),`
`,e.jsxs(o.p,{children:["If you don’t need the description, remove its Paragraph and the ",e.jsx(o.code,{children:"aria-describedby"})," from the Field Set."]}),`
`,e.jsxs(o.p,{children:["Check ",e.jsx(o.a,{href:"/docs/components-forms-field-set--docs",children:"the Field Set docs"})," for more information on configuring it."]}),`
`,e.jsx(i,{of:h}),`
`,e.jsx(o.h3,{id:"in-a-field-set-with-validation",children:"In a Field Set with validation"}),`
`,e.jsxs(o.p,{children:["If the Radio can become invalid, add an Error Message component and its ",e.jsx(o.code,{children:"id"})," to the ",e.jsx(o.code,{children:"aria-describedby"})," attribute of the Field Set."]}),`
`,e.jsxs(o.p,{children:["Check ",e.jsx(o.a,{href:"/docs/components-forms-field-set--docs",children:"the Field Set docs"})," for more information on configuring it."]}),`
`,e.jsx(i,{of:m}),`
`,e.jsx(o.h3,{id:"with-custom-icon",children:"With custom icon"}),`
`,e.jsxs(o.p,{children:[`Replace the icon with a custom version to use the Radio in a different theme or visual identity.
Use `,e.jsx(o.code,{children:"ams-radio__circle"}),", ",e.jsx(o.code,{children:"ams-radio__hover-indicator"})," and ",e.jsx(o.code,{children:"ams-radio__checked-indicator"}),` classes in its SVG markup.
Applications for the City of Amsterdam must use the default icon.`]}),`
`,e.jsx(i,{of:p})]})}function M(n={}){const{wrapper:o}={...s(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(t,{...n})}):t(n)}export{M as default};
