import{j as e}from"./iframe-Cpqq6kav.js";import{useMDXComponents as s}from"./index-DqXkizN1.js";import{M as a,c as r,P as h,e as l,f as i}from"./blocks-CHF7LEr7.js";import{L as d,O as c,W as p,a as m}from"./Label.stories-CmfPovFA.js";import"./index-DHwpLLoo.js";import"./Hint-C_78G9K7.js";const x=`<!-- @license CC0-1.0 -->

# Label

Describes a form control.

## Guidelines

- Always associate a form element (such as an \`input\` or \`textarea\`) with a label.
- Set \`optional\` to \`true\` if the input is not required.
- Use \`hint\` to show a custom hint text.
`;/*@license CC0-1.0*/function o(t){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",...s(),...t.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(a,{of:d}),`
`,e.jsx(r,{children:x}),`
`,e.jsx(h,{}),`
`,e.jsx(l,{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"optional",children:"Optional"}),`
`,e.jsxs(n.p,{children:["Use the ",e.jsx(n.code,{children:"optional"})," prop to indicate that the user doesn’t need to fill in the field to submit the form."]}),`
`,e.jsx(i,{of:c}),`
`,e.jsx(n.h3,{id:"with-hint",children:"With hint"}),`
`,e.jsxs(n.p,{children:["Use the ",e.jsx(n.code,{children:"hint"})," prop to either customize the text for the optional property or provide another type of remark."]}),`
`,e.jsxs(n.p,{children:["Note: ensure the hint meets ",e.jsx(n.a,{href:"https://www.amsterdam.nl/schrijfwijzer/heldere-taal-basis-onze-huisstijl/",rel:"nofollow",children:"language level B1"}),`.
For the same reason, the default hint text in Dutch is ‘niet verplicht’, not ‘optioneel’.`]}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(n.h3,{id:"with-heading",children:"With Heading"}),`
`,e.jsxs(n.p,{children:[`If the parent Field is the only content on the page, the Label serves as the main heading as well.
Use `,e.jsx(n.code,{children:"isPageHeading"})," to include an ",e.jsx(n.code,{children:"h1"})," element for this."]}),`
`,e.jsx(i,{of:m})]})}function b(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{b as default};
