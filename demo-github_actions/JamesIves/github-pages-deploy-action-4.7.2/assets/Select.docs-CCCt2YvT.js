import{j as e}from"./jsx-runtime-j_jdvEMj.js";import{useMDXComponents as t}from"./index-BSj771as.js";import{ae as r,aq as d,ar as a,as as l,at as i}from"./index-BhGkGcsy.js";import{S as c,G as h,I as m,D as p,a as x,b as j}from"./Select.stories-DzuxLeyc.js";import"./index-B-o1Wr-g.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-DcPt4uOT.js";import"../sb-preview/runtime.js";import"./index-DolzVqEf.js";import"./index-D-8MO0q_.js";import"./index-CJyPbrN5.js";import"./index-DrFu-skq.js";import"./index.esm-uKuZBOJz.js";import"./clsx-B-dksMZM.js";import"./index.esm-DE9QoVc-.js";const f=`<!-- @license CC0-1.0 -->

# Select

A form control that allows users to select one or more options from a list.

## References

- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select)
`;/*@license CC0-1.0*/function s(o){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",...t(),...o.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(r,{of:c}),`
`,e.jsx(d,{children:f}),`
`,e.jsx(a,{}),`
`,e.jsx(l,{}),`
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
`,e.jsx(i,{of:j})]})}function G(o={}){const{wrapper:n}={...t(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(s,{...o})}):s(o)}export{G as default};
