import{j as e}from"./index.esm-yhfThtqi.js";import{M as i,d as a,P as o}from"./index-NX-7AnYY.js";import{B as c}from"./Breadcrumb.stories-iquAQIWq.js";import{useMDXComponents as s}from"./index-_VGcpBFS.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./extends-dGVwEr9R.js";import"./iframe-wC0G9k0W.js";import"../sb-preview/runtime.js";import"./index-jmm5gWkb.js";import"./index-ogXoivrg.js";import"./index-MVbLLYTZ.js";import"./index-PPLHz8o0.js";const d=`# Breadcrumb

The breadcrumb is a secondary navigation pattern that helps a user understand the structure between levels in the website up to the current page.
Users can use it to navigate.

## Guidelines

### Use like this

Only use the breadcrumb trail if it adds something functional for the user and the structure is ‘static’.

### Avoid this

Do not display the breadcrumb trail on a form page.
It distracts from the user’s task, or one can accidentally interpret it as a Progress Indicator.

It is a secondary navigation pattern.
It can’t replace the main navigation.
`;function r(t){const n=Object.assign({h2:"h2",ul:"ul",li:"li",code:"code"},s(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:c}),`
`,e.jsx(a,{children:d}),`
`,e.jsx(o,{}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"<Breadcrumb />"})," accepts a list of ",e.jsx(n.code,{children:"<Breadcrumb.Item />"}),` components as children.
Other types are filtered out and, therefore, not shown.`]}),`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"<Breadcrumb.Item />"})," requires a ",e.jsx(n.code,{children:"href"})," prop, determining the link."]}),`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"<Breadcrumb.Item />"}),` goes up to 8 levels deep.
Deeper items are not shown.`]}),`
`]})]})}function B(t={}){const{wrapper:n}=Object.assign({},s(),t.components);return n?e.jsx(n,Object.assign({},t,{children:e.jsx(r,t)})):r(t)}export{B as default};
