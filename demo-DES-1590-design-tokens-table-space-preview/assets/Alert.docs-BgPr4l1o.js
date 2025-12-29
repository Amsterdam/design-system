import{j as e}from"./iframe-D6BrQqDK.js";import{useMDXComponents as i}from"./index-HqcjCZeY.js";import{M as a,f as t,P as c,h as l,i as s}from"./blocks-DGA2Zgqu.js";import{A as d,W as m,E as p,S as h,I as u,a as f}from"./Alert.stories-B5LyMLfU.js";import{D as g}from"./DesignTokensTable-toaANAUY.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DnhsCwGO.js";import"./Alert-BgKw3fPn.js";import"./Icon-pAaVa8J1.js";import"./Row-6lwvwyf7.js";import"./Heading-CXdPScOo.js";import"./IconButton-CgPh33F7.js";import"./ColorSample-BnCtOxFY.js";import"./SpacingSample-CoKnVqit.js";const x=`<!-- @license CC0-1.0 -->

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
`,b={alert:{"background-color":{$value:"{ams.color.background}",$type:"color"},"border-color":{$value:"{ams.color.feedback.info}",$type:"color"},"border-style":{$value:"solid",$extensions:{"ams.type":"borderStyle"}},"border-width":{$value:"{ams.border.width.xl}",$extensions:{"ams.type":"borderWidth"}},"severity-indicator":{"background-color":{$value:"{ams.color.feedback.info}",$type:"color"},"padding-block":{$value:"{ams.space.m}",$extensions:{"ams.type":"paddingBlock"}},"padding-inline":{$value:"{ams.space.s}",$extensions:{"ams.type":"paddingInline"}}},content:{gap:{$value:"{ams.space.s}",$extensions:{"ams.type":"gap"}},"padding-block":{$value:"{ams.space.m}",$extensions:{"ams.type":"paddingBlock"}},"padding-inline":{$value:"{ams.space.m}",$extensions:{"ams.type":"paddingInline"}}},error:{"border-color":{$value:"{ams.color.feedback.error}",$type:"color"},"severity-indicator":{"background-color":{$value:"{ams.color.feedback.error}",$type:"color"}}},success:{"border-color":{$value:"{ams.color.feedback.success}",$type:"color"},"severity-indicator":{"background-color":{$value:"{ams.color.feedback.success}",$type:"color"}}},warning:{"border-color":{$value:"{ams.color.feedback.warning}",$type:"color"},"severity-indicator":{"background-color":{$value:"{ams.color.feedback.warning}",$type:"color"}}}}},$={ams:b};function r(o){const n={h2:"h2",h3:"h3",p:"p",...i(),...o.components};return e.jsxs(e.Fragment,{children:[`
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
`,e.jsx(s,{of:m}),`
`,e.jsx(n.h3,{id:"error",children:"Error"}),`
`,e.jsx(n.p,{children:`In case of an error, use the red alert.
Provide the user with suggestions on alternative ways to achieve the goal.`}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(n.h3,{id:"success",children:"Success"}),`
`,e.jsx(n.p,{children:"Announce the success of a significant action."}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(n.h3,{id:"information",children:"Information"}),`
`,e.jsx(n.p,{children:"An informative message can emphasize matters that are useful to follow."}),`
`,e.jsx(s,{of:u}),`
`,e.jsx(n.h3,{id:"with-inline-link",children:"With inline link"}),`
`,e.jsx(n.p,{children:"Include an inline link in the text to guide the user."}),`
`,e.jsx(s,{of:f}),`
`,e.jsx(n.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsx(g,{tokens:$})]})}function P(o={}){const{wrapper:n}={...i(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(r,{...o})}):r(o)}export{P as default};
