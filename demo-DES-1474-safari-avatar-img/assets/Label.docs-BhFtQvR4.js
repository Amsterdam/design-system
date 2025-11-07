import{j as e}from"./iframe-CwiD41tY.js";import{useMDXComponents as s}from"./index-D8VVbtGV.js";import{M as a,f as r,P as h,h as l,i}from"./blocks-BYSyI9L2.js";import{a as d,O as c,W as p,b as m}from"./Label.stories-DlcD_no4.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B6qf8hsH.js";import"./Hint-DT_kcszy.js";const x=`<!-- @license CC0-1.0 -->

# Label

Describes a form control.

## Guidelines

- Always associate a form element (such as an \`input\` or \`textarea\`) with a label.
- Set \`optional\` to \`true\` if the input is not required.
- Use \`hint\` to show a custom hint text.
`;/*@license CC0-1.0*/function o(n){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",...s(),...n.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(a,{of:d}),`
`,e.jsx(r,{children:x}),`
`,e.jsx(h,{}),`
`,e.jsx(l,{}),`
`,e.jsx(t.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(t.h3,{id:"optional",children:"Optional"}),`
`,e.jsxs(t.p,{children:["Use the ",e.jsx(t.code,{children:"optional"})," prop to indicate that the user doesn’t need to fill in the field to submit the form."]}),`
`,e.jsx(i,{of:c}),`
`,e.jsx(t.h3,{id:"with-hint",children:"With hint"}),`
`,e.jsxs(t.p,{children:["Use the ",e.jsx(t.code,{children:"hint"})," prop to either customize the text for the optional property or provide another type of remark."]}),`
`,e.jsxs(t.p,{children:["Note: ensure the hint meets ",e.jsx(t.a,{href:"https://www.amsterdam.nl/schrijfwijzer/heldere-taal-basis-onze-huisstijl/",rel:"nofollow",children:"language level B1"}),`.
For the same reason, the default hint text in Dutch is ‘niet verplicht’, not ‘optioneel’.`]}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(t.h3,{id:"with-heading",children:"With Heading"}),`
`,e.jsxs(t.p,{children:[`If the parent Field is the only content on the page, its Label serves as the main heading as well.
Set `,e.jsx(t.code,{children:"isPageHeading"})," to include an ",e.jsx(t.code,{children:"h1"})," element to reflect this."]}),`
`,e.jsx(i,{of:m})]})}function C(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o(n)}export{C as default};
