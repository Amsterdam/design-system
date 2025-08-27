import{j as e}from"./iframe-CBZE33UZ.js";import{useMDXComponents as o}from"./index-Cn7i2XGF.js";import{M as t,c as r,P as a,e as d,f as s}from"./blocks-spb3D45S.js";import{F as c,M as h,R as p,D as f,I as m}from"./FileInput.stories-DShUEyrj.js";import"./index-CyKLgi7G.js";const x=`<!-- @license CC0-1.0 -->

# File Input

Allows the user to upload one or more files from their device.

## Visual considerations

The filename label and button are displayed in the language of the browser and can vary between browsers and operating systems.
`;/*@license CC0-1.0*/function l(i){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...o(),...i.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(t,{of:c}),`
`,e.jsx(r,{children:x}),`
`,e.jsx(a,{}),`
`,e.jsx(d,{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"multiple-files",children:"Multiple files"}),`
`,e.jsx(n.p,{children:"Allow multiple files to be selected. The label will update to show the number of files selected."}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(n.h3,{id:"restrict-file-types",children:"Restrict file types"}),`
`,e.jsxs(n.p,{children:["Limit the types of files that can be selected. Some examples are ",e.jsx(n.code,{children:"image/*"}),", ",e.jsx(n.code,{children:"video/*"}),", or ",e.jsx(n.code,{children:"audio/*"}),". To limit to a specific file type, use the MIME type, such as ",e.jsx(n.code,{children:"application/pdf"}),"."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#limiting_accepted_file_types",rel:"nofollow",children:"MDN File Input"}),": More examples"]}),`
`]}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(n.h3,{id:"disabled",children:"Disabled"}),`
`,e.jsx(s,{of:f}),`
`,e.jsx(n.h3,{id:"in-a-field",children:"In a Field"}),`
`,e.jsx(n.p,{children:"Use a Field component to group a File Input with a Label and possibly a description."}),`
`,e.jsxs(n.p,{children:["If you don’t need the description, remove its Paragraph and the ",e.jsx(n.code,{children:"aria-describedby"})," from the Text Input."]}),`
`,e.jsxs(n.p,{children:["Check ",e.jsx(n.a,{href:"/docs/components-forms-field--docs",children:"the Field docs"})," for more information on configuring it."]}),`
`,e.jsx(s,{of:m})]})}function F(i={}){const{wrapper:n}={...o(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(l,{...i})}):l(i)}export{F as default};
