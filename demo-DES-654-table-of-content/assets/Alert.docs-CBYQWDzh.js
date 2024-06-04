import{j as n}from"./jsx-runtime-Nms4Y4qS.js";import{useMDXComponents as s}from"./index-DlpNa54Y.js";import{M as o,d as a,P as c,e as l,f as i}from"./index-D76FVNfN.js";import{A as h,W as d,E as m,S as p,I as f,a as u,b as x,c as j}from"./Alert.stories-DtE95yDU.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-tJeSE3SN.js";import"../sb-preview/runtime.js";import"./index-B8XB3FuZ.js";import"./index-COebWTXQ.js";import"./index-B8K4vdXH.js";import"./index-DrFu-skq.js";import"./index.esm-DQkeu4as.js";import"./clsx-B-dksMZM.js";import"./Icon-CuaumHXX.js";import"./Heading-CWbN3elW.js";import"./getHeadingElement-DiRwFEz7.js";import"./IconButton-CFmnpWmC.js";import"./VisuallyHidden-Db-04MJ9.js";import"./UnorderedList-J9gSHTlV.js";import"./Link-DfaTqfXA.js";import"./Paragraph-C4jU4-Z4.js";const g=`<!-- @license CC0-1.0 -->

# Alert

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
- Ensure sufficient white space around the Alert.
  The grid’s white space is a good reference – place the Alert in its own cell.
- By default, the Alert cannot be closed.
  This functionality can be added optionally.
- Optionally, the title can be omitted.
`;function r(t){const e={h2:"h2",h3:"h3",p:"p",...s(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{of:h}),`
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
`,n.jsx(i,{of:p}),`
`,n.jsx(e.h3,{id:"info",children:"Info"}),`
`,n.jsx(e.p,{children:"An informative message can emphasize matters that are useful to follow."}),`
`,n.jsx(i,{of:f}),`
`,n.jsx(e.h3,{id:"with-inline-link",children:"With Inline Link"}),`
`,n.jsx(e.p,{children:"Include an inline link in the text to guide the user."}),`
`,n.jsx(i,{of:u}),`
`,n.jsx(e.h3,{id:"with-list",children:"With List"}),`
`,n.jsx(e.p,{children:"For clarification, formatted text can be included in the alert."}),`
`,n.jsx(i,{of:x}),`
`,n.jsx(e.h3,{id:"without-title",children:"Without Title"}),`
`,n.jsx(e.p,{children:`Sometimes, a title is unnecessary.
The icon automatically becomes slightly smaller.`}),`
`,n.jsx(i,{of:j})]})}function z(t={}){const{wrapper:e}={...s(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(r,{...t})}):r(t)}export{z as default};
