import{j as e}from"./iframe-EkBBJOoa.js";import{useMDXComponents as o}from"./index-CSNhsIq-.js";import{M as r,f as d,P as a,h,i}from"./blocks-D26SfkwK.js";import{a as c,W as l,b as p,c as u,d as x,e as m}from"./FieldSet.stories-CP4q02sF.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BKH2GyVu.js";import"./exampleContent-DRope23M.js";import"./Hint-D11GHJDi.js";const f=`<!-- @license CC0-1.0 -->

# Field Set

A component to group related form inputs.

## Guidelines

- Use Field Set when you need to show a relationship between multiple form inputs. For example, you may need to group a set of text inputs into a single Field Set when asking for an address.
- Set \`optional\` to \`true\` if all inputs in a Field Set are not required.
- Use \`hint\` to show a custom hint text.

## Relevant WCAG requirements

- [WCAG 1.3.5](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html): Field Set labels the purpose of a group of inputs.

## References

- [Providing a description for groups of form controls using fieldset and legend elements](https://www.w3.org/WAI/WCAG22/Techniques/html/H71)
`;/*@license CC0-1.0*/function s(t){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",...o(),...t.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(r,{of:c}),`
`,e.jsx(d,{children:f}),`
`,e.jsx(a,{}),`
`,e.jsx(h,{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"with-description",children:"With description"}),`
`,e.jsxs(n.p,{children:[`A Field Set can have a description.
Make sure to connect this description to the Field Set or a specific input,
otherwise this won’t be read by a screen reader.
Add an `,e.jsx(n.code,{children:"aria-describedby"}),` attribute to the Field Set
and provide the `,e.jsx(n.code,{children:"id"})," of the describing element as its value."]}),`
`,e.jsxs(n.p,{children:["Do not use rich text (such as links or lists) in descriptions. ",e.jsx(n.a,{href:"/docs/components-forms-field--docs#no-rich-text",children:"Find out why"}),"."]}),`
`,e.jsx(i,{of:l}),`
`,e.jsx(n.h3,{id:"with-hint",children:"With Hint"}),`
`,e.jsxs(n.p,{children:[`A Field Set can indicate whether all of the inputs it contains are optional or required.
Make sure to add `,e.jsx(n.code,{children:"aria-required"})," to ",e.jsx("em",{children:"all"})," form elements in the Field Set when they are required."]}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(n.h3,{id:"with-validation",children:"With Validation"}),`
`,e.jsxs(n.p,{children:[`A Field Set can indicate whether any of the inputs it contains has a validation error.
Use an `,e.jsx(n.a,{href:"/docs/components-forms-error-message--docs",children:"Error Message"}),` to describe the error.
Make sure to connect the Error Message to the correct input in the Field Set,
otherwise it won’t be read by a screen reader.
Add an `,e.jsx(n.code,{children:"aria-describedby"})," attribute to the input and provide the ",e.jsx(n.code,{children:"id"})," of Error Message as its value."]}),`
`,e.jsxs(n.p,{children:["Do not use rich text (such as links or lists) in an Error Message. ",e.jsx(n.a,{href:"/docs/components-forms-error-message--docs#no-rich-text",children:"Find out why"}),"."]}),`
`,e.jsx(i,{of:u}),`
`,e.jsx(n.h3,{id:"with-heading-in-legend",children:"With Heading in Legend"}),`
`,e.jsxs(n.p,{children:[`If the Field Set is the only content on the page, its Legend serves as the main heading as well.
Set `,e.jsx(n.code,{children:"legendIsPageHeading"})," to include an ",e.jsx(n.code,{children:"h1"})," element to reflect this."]}),`
`,e.jsx(i,{of:x}),`
`,e.jsx(n.h3,{id:"with-a-nested-field-set",children:"With a nested Field Set"}),`
`,e.jsxs(n.p,{children:[`A Field Set can be nested inside another Field Set.
Use the `,e.jsx(n.code,{children:"inFieldSet"})," prop to show the legend in a lighter style."]}),`
`,e.jsx(i,{of:m})]})}function A(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{A as default};
