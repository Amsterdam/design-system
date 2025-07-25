import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as t}from"./index-CxbY7dAs.js";import{M as l,e as r,P as a,f as d,h as s}from"./index-BHgg25fL.js";import{F as c,M as p,R as h,D as m,I as f}from"./FileInput.stories-BTTnRzR1.js";import"./index-yBjzXJbu.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B4q2Zsfe.js";import"./index-CJ88nXQk.js";import"./index-Cf9b6H0j.js";import"./index-DrFu-skq.js";import"./index.esm-DDzNsyt1.js";import"./clsx-B-dksMZM.js";import"./index.esm-D3RaMjqb.js";const x=`<!-- @license CC0-1.0 -->

# File Input

Allows the user to upload one or more files from their device.

## Visual considerations

The filename label and button are displayed in the language of the browser and can vary between browsers and operating systems.
`;/*@license CC0-1.0*/function o(n){const i={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...t(),...n.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(l,{of:c}),`
`,e.jsx(r,{children:x}),`
`,e.jsx(a,{}),`
`,e.jsx(d,{}),`
`,e.jsx(i.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(i.h3,{id:"multiple-files",children:"Multiple files"}),`
`,e.jsx(i.p,{children:"Allow multiple files to be selected. The label will update to show the number of files selected."}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(i.h3,{id:"restrict-file-types",children:"Restrict file types"}),`
`,e.jsxs(i.p,{children:["Limit the types of files that can be selected. Some examples are ",e.jsx(i.code,{children:"image/*"}),", ",e.jsx(i.code,{children:"video/*"}),", or ",e.jsx(i.code,{children:"audio/*"}),". To limit to a specific file type, use the MIME type, such as ",e.jsx(i.code,{children:"application/pdf"}),"."]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#limiting_accepted_file_types",rel:"nofollow",children:"MDN File Input"}),": More examples"]}),`
`]}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(i.h3,{id:"disabled",children:"Disabled"}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(i.h3,{id:"in-a-field",children:"In a Field"}),`
`,e.jsx(i.p,{children:"Use a Field component to group a File Input with a Label and possibly a description."}),`
`,e.jsxs(i.p,{children:["If you don’t need the description, remove its Paragraph and the ",e.jsx(i.code,{children:"aria-describedby"})," from the Text Input."]}),`
`,e.jsxs(i.p,{children:["Check ",e.jsx(i.a,{href:"/docs/components-forms-field--docs",children:"the Field docs"})," for more information on configuring it."]}),`
`,e.jsx(s,{of:f})]})}function R(n={}){const{wrapper:i}={...t(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(o,{...n})}):o(n)}export{R as default};
