import{j as e}from"./iframe-w94ru4Ue.js";import{useMDXComponents as o}from"./index-Bq7Cfrvq.js";import{M as a,f as h,P as r,h as l,i}from"./blocks-BYunJLRK.js";import{a as d,O as p,W as c,b as m,I as x}from"./Label.stories-C-Vn8kfZ.js";import{D as f}from"./DesignTokensTable-BQOGlbBZ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BDwRgOZS.js";import"./Hint-BRXBEyAK.js";const j=`<!-- @license CC0-1.0 -->

# Label

Describes a form control.

## Guidelines

- Always associate a form element (such as an \`input\` or \`textarea\`) with a label.
- Set \`optional\` to \`true\` if the input is not required.
- Use \`hint\` to show a custom hint text.
`,u={label:{color:{value:"{ams.color.text.default}"},"font-family":{value:"{ams.typography.font-family}"},"font-size":{value:"{ams.typography.heading.3.font-size}"},"font-weight":{value:"{ams.typography.heading.font-weight}"},"line-height":{value:"{ams.typography.heading.3.line-height}"},"text-wrap":{value:"{ams.typography.heading.text-wrap}"},"in-fieldset":{"font-weight":{value:"{ams.typography.body-text.font-weight}"}}}},g={ams:u};function s(n){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",...o(),...n.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,`
`,`
`,e.jsx(a,{of:d}),`
`,e.jsx(h,{children:j}),`
`,e.jsx(r,{}),`
`,e.jsx(l,{}),`
`,e.jsx(t.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(t.h3,{id:"optional",children:"Optional"}),`
`,e.jsxs(t.p,{children:["Use the ",e.jsx(t.code,{children:"optional"})," prop to indicate that the user doesn’t need to fill in the field to submit the form."]}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(t.h3,{id:"with-hint",children:"With hint"}),`
`,e.jsxs(t.p,{children:["Use the ",e.jsx(t.code,{children:"hint"})," prop to either customize the text for the optional property or provide another type of remark."]}),`
`,e.jsxs(t.p,{children:["Note: ensure the hint meets ",e.jsx(t.a,{href:"https://www.amsterdam.nl/schrijfwijzer/heldere-taal-basis-onze-huisstijl/",rel:"nofollow",children:"language level B1"}),`.
For the same reason, the default hint text in Dutch is ‘niet verplicht’, not ‘optioneel’.`]}),`
`,e.jsx(i,{of:c}),`
`,e.jsx(t.h3,{id:"with-heading",children:"With Heading"}),`
`,e.jsxs(t.p,{children:[`If the parent Field is the only content on the page, its Label serves as the main heading as well.
Set `,e.jsx(t.code,{children:"isPageHeading"})," to include an ",e.jsx(t.code,{children:"h1"})," element to reflect this."]}),`
`,e.jsx(i,{of:m}),`
`,e.jsx(t.h3,{id:"in-a-field-set",children:"In a Field Set"}),`
`,e.jsxs(t.p,{children:["When a Label is used in a Field inside a Field Set, use the ",e.jsx(t.code,{children:"inFieldSet"})," prop to show it in a lighter style."]}),`
`,e.jsx(i,{of:x}),`
`,e.jsx(t.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsx(f,{tokens:g})]})}function C(n={}){const{wrapper:t}={...o(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}export{C as default};
