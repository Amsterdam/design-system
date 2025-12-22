import{j as e}from"./iframe-BRapv6FB.js";import{useMDXComponents as a}from"./index-1afWrQwj.js";import{M as i,f as t,P as c,h as l,i as r}from"./blocks-Cl_LkDV9.js";import{A as d,W as h,E as u,S as m,I as p,a as f}from"./Alert.stories-C5OydCWC.js";import{D as g}from"./DesignTokensTable-CI3e1M8Z.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DleYxqVB.js";import"./Alert-c8Ca7H7j.js";import"./Icon-Co-YeQpr.js";import"./Row-dA4vXnpZ.js";import"./Heading-BbIod-pT.js";import"./IconButton-C4SRO3lM.js";const x=`<!-- @license CC0-1.0 -->

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
`,b={alert:{"background-color":{value:"{ams.color.background}"},"border-color":{value:"{ams.color.feedback.info}"},"border-style":{value:"solid"},"border-width":{value:"{ams.border.width.xl}"},"severity-indicator":{"background-color":{value:"{ams.color.feedback.info}"},"padding-block":{value:"{ams.space.m}"},"padding-inline":{value:"{ams.space.s}"}},content:{gap:{value:"{ams.space.s}"},"padding-block":{value:"{ams.space.m}"},"padding-inline":{value:"{ams.space.m}"}},error:{"border-color":{value:"{ams.color.feedback.error}"},"severity-indicator":{"background-color":{value:"{ams.color.feedback.error}"}}},success:{"border-color":{value:"{ams.color.feedback.success}"},"severity-indicator":{"background-color":{value:"{ams.color.feedback.success}"}}},warning:{"border-color":{value:"{ams.color.feedback.warning}"},"severity-indicator":{"background-color":{value:"{ams.color.feedback.warning}"}}}}},v={ams:b};function s(o){const n={h2:"h2",h3:"h3",p:"p",...a(),...o.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,`
`,`
`,e.jsx(i,{of:d}),`
`,e.jsx(t,{children:x}),`
`,e.jsx(c,{}),`
`,e.jsx(l,{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"warning",children:"Warning"}),`
`,e.jsx(n.p,{children:"Display a warning when user action is required."}),`
`,e.jsx(r,{of:h}),`
`,e.jsx(n.h3,{id:"error",children:"Error"}),`
`,e.jsx(n.p,{children:`In case of an error, use the red alert.
Provide the user with suggestions on alternative ways to achieve the goal.`}),`
`,e.jsx(r,{of:u}),`
`,e.jsx(n.h3,{id:"success",children:"Success"}),`
`,e.jsx(n.p,{children:"Announce the success of a significant action."}),`
`,e.jsx(r,{of:m}),`
`,e.jsx(n.h3,{id:"information",children:"Information"}),`
`,e.jsx(n.p,{children:"An informative message can emphasize matters that are useful to follow."}),`
`,e.jsx(r,{of:p}),`
`,e.jsx(n.h3,{id:"with-inline-link",children:"With inline link"}),`
`,e.jsx(n.p,{children:"Include an inline link in the text to guide the user."}),`
`,e.jsx(r,{of:f}),`
`,e.jsx(n.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsx(g,{tokens:v})]})}function P(o={}){const{wrapper:n}={...a(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(s,{...o})}):s(o)}export{P as default};
