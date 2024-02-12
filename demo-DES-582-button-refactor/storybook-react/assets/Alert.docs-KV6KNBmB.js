import{j as n}from"./jsx-runtime-vNq4Oc-g.js";import{M as o,d as a,P as c,e as l,f as i}from"./index-iN9lcZqq.js";import{A as h,W as d,E as m,S as f,I as u,a as p,b as x,c as j}from"./Alert.stories-nsRCyWBF.js";import{useMDXComponents as r}from"./index-_VGcpBFS.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./iframe-kkReE9Oe.js";import"../sb-preview/runtime.js";import"./index-jmm5gWkb.js";import"./index-ogXoivrg.js";import"./index-MVbLLYTZ.js";import"./index-PPLHz8o0.js";import"./index.esm-TjYPpUpR.js";const g=`# Alert

An Alert informs the user of a significant or time-sensitive message without interrupting their task.

## Specifications

There are four types of notifications:

- **Warning** (orange) when action is needed to prevent damage.
- **Error** (red) indicates an error has occurred.
- **Confirmation** (green) to reassure that a process is complete.
- **Notification** (blue) to bring attention to a message.

## Guidelines

- Place an orange Alert directly below the Header for important and urgent information.
  Examples: system outage or changes in the opening hours of a City Office.
- Ensure sufficient whitespace around the Alert.
  The grid’s whitespace is a good reference – place the Alert in its own cell.
- By default, the Alert cannot be closed.
  This functionality can be added optionally.
- Optionally, the title can be omitted.
`;function s(t){const e=Object.assign({h2:"h2",p:"p",h3:"h3"},r(),t.components);return n.jsxs(n.Fragment,{children:[n.jsx(o,{of:h}),`
`,n.jsx(a,{children:g}),`
`,n.jsx(e.h2,{id:"examples",children:"Examples"}),`
`,n.jsx(e.p,{children:"The default Alert is a warning."}),`
`,n.jsx(c,{}),`
`,n.jsx(l,{}),`
`,n.jsx(e.h3,{id:"warning",children:"Warning"}),`
`,n.jsx(e.p,{children:"Display a warning when user action is required."}),`
`,n.jsx(i,{of:d}),`
`,n.jsx(e.h3,{id:"error",children:"Error"}),`
`,n.jsx(e.p,{children:`In case of an error, use the red alert.
Provide the user with suggestions on alternative ways to achieve the goal.`}),`
`,n.jsx(i,{of:m}),`
`,n.jsx(e.h3,{id:"success",children:"Success"}),`
`,n.jsx(e.p,{children:"Announce the success of a significant action."}),`
`,n.jsx(i,{of:f}),`
`,n.jsx(e.h3,{id:"info",children:"Info"}),`
`,n.jsx(e.p,{children:"An informative message can emphasize matters that are useful to follow."}),`
`,n.jsx(i,{of:u}),`
`,n.jsx(e.h3,{id:"with-inline-link",children:"With Inline Link"}),`
`,n.jsx(e.p,{children:"Include an inline link in the text to guide the user."}),`
`,n.jsx(i,{of:p}),`
`,n.jsx(e.h3,{id:"with-list",children:"With List"}),`
`,n.jsx(e.p,{children:"For clarification, formatted text can be included in the alert."}),`
`,n.jsx(i,{of:x}),`
`,n.jsx(e.h3,{id:"without-title",children:"Without Title"}),`
`,n.jsx(e.p,{children:`Sometimes, a title is unnecessary.
The icon automatically becomes slightly smaller.`}),`
`,n.jsx(i,{of:j})]})}function D(t={}){const{wrapper:e}=Object.assign({},r(),t.components);return e?n.jsx(e,Object.assign({},t,{children:n.jsx(s,t)})):s(t)}export{D as default};
