import{j as e}from"./jsx-runtime-z8MfsBtr.js";import{useMDXComponents as s}from"./index-BAvqEBP-.js";import{ae as r,aq as d,ar as a,as as l,at as i}from"./index-DUZAjGgx.js";import{S as c,G as h,I as m,D as p,a as x,b as j}from"./Select.stories-B4D0Rk3P.js";import"./index-C9rmetsa.js";import"./index-D7uoVdV3.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B8D8noXY.js";import"../sb-preview/runtime.js";import"./index-D-OUEn-9.js";import"./index-Cu4lwwaE.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";import"./index.esm-DSD1WKm8.js";import"./clsx-B-dksMZM.js";import"./index.esm-X3U7dYaT.js";const f=`<!-- @license CC0-1.0 -->

# Select

A form control that allows users to select one or more options from a list.

## References

- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select)
`;/*@license CC0-1.0*/function t(o){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",...s(),...o.components};return e.jsxs(e.Fragment,{children:[`
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
`,e.jsx(i,{of:j})]})}function q(o={}){const{wrapper:n}={...s(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}export{q as default};