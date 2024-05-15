import{j as o}from"./jsx-runtime-Nms4Y4qS.js";import{useMDXComponents as s}from"./index-DlpNa54Y.js";import{M as r,d as i,P as a,e as l,f as c}from"./index-BF9540bj.js";import{R as d,a as m}from"./Radio.stories-Hdwf8WAe.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-DZeLBTIj.js";import"../sb-preview/runtime.js";import"./index-B8XB3FuZ.js";import"./index-COebWTXQ.js";import"./index-B8K4vdXH.js";import"./index-DrFu-skq.js";import"./clsx-B-dksMZM.js";import"./Fieldset-BdWirkiG.js";const p=`<!-- @license CC0-1.0 -->

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
`;function t(e){const n={a:"a",p:"p",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(r,{of:d}),`
`,o.jsx(i,{children:p}),`
`,o.jsx(a,{}),`
`,o.jsx(l,{}),`
`,o.jsxs(n.p,{children:["Group radios together with a ",o.jsx(n.a,{href:"/docs/components-forms-fieldset--docs",children:"Fieldset"}),` that describes them.
This is usually a question, like ‘Where do you live?’.`]}),`
`,o.jsx(c,{of:m})]})}function g(e={}){const{wrapper:n}={...s(),...e.components};return n?o.jsx(n,{...e,children:o.jsx(t,{...e})}):t(e)}export{g as default};
