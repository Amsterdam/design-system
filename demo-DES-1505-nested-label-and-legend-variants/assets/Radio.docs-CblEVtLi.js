import{j as e}from"./iframe-EkBBJOoa.js";import{useMDXComponents as t}from"./index-CSNhsIq-.js";import{M as r,f as a,P as d,h as c,i as s}from"./blocks-D26SfkwK.js";import{a as l,I as h,b as m,W as u}from"./Radio.stories-BsEa2V8j.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BKH2GyVu.js";const p=`<!-- @license CC0-1.0 -->

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
- Do not check a radio button initially.
  This prevents users from leaving the question unanswered.
  It also increases the chance of submitting a wrong answer.
- Use a [Checkbox](/docs/components-forms-checkbox--docs) when a user can select more than 1 option from a list.
`;/*@license CC0-1.0*/function i(n){const o={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",...t(),...n.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(r,{of:l}),`
`,e.jsx(a,{children:p}),`
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
`,e.jsx(s,{of:h}),`
`,e.jsx(o.h3,{id:"in-a-field-set-with-validation",children:"In a Field Set with validation"}),`
`,e.jsxs(o.p,{children:[`A Field Set with a Radio group can become invalid.
In this case, connect an Error Message to the Field Set.
Add an `,e.jsx(o.code,{children:"aria-describedby"})," attribute to the Field Set and provide the ",e.jsx(o.code,{children:"id"})," of Error Message as its value."]}),`
`,e.jsxs(o.p,{children:["Do not use rich text (such as links or lists) in an Error Message. ",e.jsx(o.a,{href:"/docs/components-forms-error-message--docs#no-rich-text",children:"Find out why"}),"."]}),`
`,e.jsxs(o.p,{children:["Check ",e.jsx(o.a,{href:"/docs/components-forms-field-set--docs",children:"the Field Set docs"})," for more information on configuring it."]}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(o.h3,{id:"with-custom-icon",children:"With custom icon"}),`
`,e.jsxs(o.p,{children:[`Replace the icon with a custom version to use the Radio in a different theme or visual identity.
Use `,e.jsx(o.code,{children:"ams-radio__circle"}),", ",e.jsx(o.code,{children:"ams-radio__hover-indicator"})," and ",e.jsx(o.code,{children:"ams-radio__checked-indicator"}),` classes in its SVG markup.
Applications for the City of Amsterdam must use the default icon.`]}),`
`,e.jsx(s,{of:u})]})}function y(n={}){const{wrapper:o}={...t(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(i,{...n})}):i(n)}export{y as default};
