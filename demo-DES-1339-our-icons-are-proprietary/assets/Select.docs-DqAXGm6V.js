import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as t}from"./index-CxbY7dAs.js";import{M as r,e as d,P as l,f as c,h as i}from"./index-Bh4Zs5ZT.js";import{S as a,G as h,I as m,D as p,a as x,b as j}from"./Select.stories-vv_NZARI.js";import"./index-yBjzXJbu.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-D5lo71ZB.js";import"./index-CJ88nXQk.js";import"./index-Cf9b6H0j.js";import"./index-DrFu-skq.js";import"./index.esm-r0Mi5W58.js";import"./clsx-B-dksMZM.js";import"./index.esm-CVKOIKGq.js";const f=`<!-- @license CC0-1.0 -->

# Select

A form control that allows users to select one or more options from a list.

## References

- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select)
`;/*@license CC0-1.0*/function s(o){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",...t(),...o.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(r,{of:a}),`
`,e.jsx(d,{children:f}),`
`,e.jsx(l,{}),`
`,e.jsx(c,{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"multiple",children:"Multiple"}),`
`,e.jsxs(n.p,{children:[`Avoid adding functionality to allow selecting multiple options. Multi select is harder to use
on desktop as they require the user to hold down the `,e.jsx(n.code,{children:"Ctrl"})," or ",e.jsx(n.code,{children:"Cmd"}),` key while clicking on the options.
It is recommended to use checkboxes instead.`]}),`
`,e.jsx(n.h3,{id:"grouped",children:"Grouped"}),`
`,e.jsxs(n.p,{children:["Use the ",e.jsx(n.code,{children:"Select.Group"}),` component to group options.
The component requires a `,e.jsx(n.code,{children:"label"})," attribute."]}),`
`,e.jsx(i,{of:h}),`
`,e.jsx(n.h3,{id:"invalid",children:"Invalid"}),`
`,e.jsx(i,{of:m}),`
`,e.jsx(n.h3,{id:"disabled",children:"Disabled"}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(n.h3,{id:"in-a-field",children:"In a Field"}),`
`,e.jsx(n.p,{children:"Use a Field to group a Select with a Label, description and / or an Error Message."}),`
`,e.jsxs(n.p,{children:["If you don’t need the description, remove its Paragraph and the ",e.jsx(n.code,{children:"aria-describedby"})," from the Select."]}),`
`,e.jsxs(n.p,{children:["Check ",e.jsx(n.a,{href:"/docs/components-forms-field--docs",children:"the Field docs"})," for more information on configuring it."]}),`
`,e.jsx(i,{of:x}),`
`,e.jsx(n.h3,{id:"in-a-field-with-validation",children:"In a Field with validation"}),`
`,e.jsxs(n.p,{children:["If the Select can become invalid, add an Error Message and its ",e.jsx(n.code,{children:"id"})," to the ",e.jsx(n.code,{children:"aria-describedby"})," attribute of the Select."]}),`
`,e.jsxs(n.p,{children:["Check ",e.jsx(n.a,{href:"/docs/components-forms-field--docs",children:"the Field docs"})," for more information on configuring it."]}),`
`,e.jsx(i,{of:j})]})}function A(o={}){const{wrapper:n}={...t(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(s,{...o})}):s(o)}export{A as default};
