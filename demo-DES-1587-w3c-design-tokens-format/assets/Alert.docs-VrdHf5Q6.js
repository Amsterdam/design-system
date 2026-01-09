import{j as e}from"./iframe-io1_ciOy.js";import{useMDXComponents as i}from"./index-DzfHeplb.js";import{M as a,f as t,P as c,h as l,i as r}from"./blocks-CZbwjBWQ.js";import{A as d,W as m,E as h,S as u,I as p,a as f}from"./Alert.stories-Ct763Gh8.js";import{D as g}from"./DesignTokensTable-zksFS1ST.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Df8kt4OW.js";import"./Alert-CANcAhEr.js";import"./Icon-C0baAkIV.js";import"./Row-B6EMCMdn.js";import"./Heading-BwRhkHv7.js";import"./IconButton-COBOANnA.js";const x=`<!-- @license CC0-1.0 -->

# Alert

An Alert informs the user of a significant or time-sensitive message without interrupting their task.

## Guidelines

- Use an Alert if the message’s purpose matches one of the following:
  - **Information** to bring attention to a message.
    This variation is blue and it is the default.
  - **Success** to reassure that a process is complete.
    This variation is green.
  - **Warning** when action is needed to prevent damage.
    This variation is orange.
  - **Error** indicates an error has occurred.
    This variation is red.
- Place the Alert in a Grid Cell to create enough white space around it.
- Important and urgent information is to be placed directly below the Page Header.
  Examples: system outage or changes in the opening hours of a City Office.
  This can be applied to the entire website or to a part of it.
- Add a close button if the user should be able to dismiss the Alert.
`,b={alert:{"background-color":{$value:"{ams.color.background}",$type:"color"},"border-color":{$value:"{ams.color.feedback.info}",$type:"color"},"border-style":{$value:"solid"},"border-width":{$value:"{ams.border.width.xl}",$extensions:{"amsterdam.designsystem.type":"borderWidth"}},"severity-indicator":{"background-color":{$value:"{ams.color.feedback.info}",$type:"color"},"padding-block":{$value:"{ams.space.m}",$type:"dimension"},"padding-inline":{$value:"{ams.space.s}",$type:"dimension"}},content:{gap:{$value:"{ams.space.s}",$type:"dimension"},"padding-block":{$value:"{ams.space.m}",$type:"dimension"},"padding-inline":{$value:"{ams.space.m}",$type:"dimension"}},error:{"border-color":{$value:"{ams.color.feedback.error}",$type:"color"},"severity-indicator":{"background-color":{$value:"{ams.color.feedback.error}",$type:"color"}}},success:{"border-color":{$value:"{ams.color.feedback.success}",$type:"color"},"severity-indicator":{"background-color":{$value:"{ams.color.feedback.success}",$type:"color"}}},warning:{"border-color":{$value:"{ams.color.feedback.warning}",$type:"color"},"severity-indicator":{"background-color":{$value:"{ams.color.feedback.warning}",$type:"color"}}}}},v={ams:b};function s(o){const n={h2:"h2",h3:"h3",p:"p",...i(),...o.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,`
`,`
`,e.jsx(a,{of:d}),`
`,e.jsx(t,{children:x}),`
`,e.jsx(c,{}),`
`,e.jsx(l,{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"warning",children:"Warning"}),`
`,e.jsx(n.p,{children:"Display a warning when user action is required."}),`
`,e.jsx(r,{of:m}),`
`,e.jsx(n.h3,{id:"error",children:"Error"}),`
`,e.jsx(n.p,{children:`In case of an error, use the red alert.
Provide the user with suggestions on alternative ways to achieve the goal.`}),`
`,e.jsx(r,{of:h}),`
`,e.jsx(n.h3,{id:"success",children:"Success"}),`
`,e.jsx(n.p,{children:"Announce the success of a significant action."}),`
`,e.jsx(r,{of:u}),`
`,e.jsx(n.h3,{id:"information",children:"Information"}),`
`,e.jsx(n.p,{children:"An informative message can emphasize matters that are useful to follow."}),`
`,e.jsx(r,{of:p}),`
`,e.jsx(n.h3,{id:"with-inline-link",children:"With inline link"}),`
`,e.jsx(n.p,{children:"Include an inline link in the text to guide the user."}),`
`,e.jsx(r,{of:f}),`
`,e.jsx(n.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsx(g,{tokens:v})]})}function W(o={}){const{wrapper:n}={...i(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(s,{...o})}):s(o)}export{W as default};
