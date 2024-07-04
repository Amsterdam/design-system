import{j as o}from"./jsx-runtime-X2b_N9AH.js";import{useMDXComponents as s}from"./index-CRbi4mQH.js";import{M as r,d as i,P as a,e as l,f as c}from"./index-CenGyGJj.js";import{R as d,a as m}from"./Radio.stories-CHmUdQ9U.js";import"./index-uCp2LrAq.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-13zQ6B5m.js";import"../sb-preview/runtime.js";import"./index-BOkhicXD.js";import"./index-DXimoRZY.js";import"./index-B8K4vdXH.js";import"./index-DrFu-skq.js";import"./FieldSet-DkgxHA-T.js";import"./clsx-B-dksMZM.js";const p=`<!-- @license CC0-1.0 -->

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
`;/*@license CC0-1.0*/function t(e){const n={a:"a",p:"p",...s(),...e.components};return o.jsxs(o.Fragment,{children:[`
`,`
`,o.jsx(r,{of:d}),`
`,o.jsx(i,{children:p}),`
`,o.jsx(a,{}),`
`,o.jsx(l,{}),`
`,o.jsxs(n.p,{children:["Group radios together with a ",o.jsx(n.a,{href:"/docs/components-forms-field-set--docs",children:"Field Set"}),` that describes them.
This is usually a question, like ‘Where do you live?’.`]}),`
`,o.jsx(c,{of:m})]})}function g(e={}){const{wrapper:n}={...s(),...e.components};return n?o.jsx(n,{...e,children:o.jsx(t,{...e})}):t(e)}export{g as default};
