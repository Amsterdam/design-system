import{j as e}from"./iframe-EkBBJOoa.js";import{useMDXComponents as o}from"./index-CSNhsIq-.js";import{M as a,f as r,P as h,h as l,i}from"./blocks-D26SfkwK.js";import{a as d,O as c,W as p,b as x,I as m}from"./Label.stories-CReGANbK.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BKH2GyVu.js";import"./Hint-D11GHJDi.js";const j=`<!-- @license CC0-1.0 -->

# Label

Describes a form control.

## Guidelines

- Always associate a form element (such as an \`input\` or \`textarea\`) with a label.
- Set \`optional\` to \`true\` if the input is not required.
- Use \`hint\` to show a custom hint text.
`;/*@license CC0-1.0*/function s(t){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",...o(),...t.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(a,{of:d}),`
`,e.jsx(r,{children:j}),`
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
`,e.jsxs(n.p,{children:[`If the parent Field is the only content on the page, its Label serves as the main heading as well.
Set `,e.jsx(n.code,{children:"isPageHeading"})," to include an ",e.jsx(n.code,{children:"h1"})," element to reflect this."]}),`
`,e.jsx(i,{of:x}),`
`,e.jsx(n.h3,{id:"in-a-field-set",children:"In a Field Set"}),`
`,e.jsxs(n.p,{children:["When a Label is used in a Field inside a Field Set, use the ",e.jsx(n.code,{children:"inFieldSet"})," prop to show it in a lighter style."]}),`
`,e.jsx(i,{of:m})]})}function y(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{y as default};
