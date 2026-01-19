import{j as e}from"./iframe-Ds5hPfnj.js";import{useMDXComponents as t}from"./index-D8uEBF35.js";import{M as i,f as a,P as c,h as l,i as o}from"./blocks-D9na97cF.js";import{A as d,W as m,E as p,S as u,I as h,a as g}from"./Alert.stories-C8ihYR3w.js";import{D as f}from"./DesignTokensTable-D-5V4mAw.js";import"./preload-helper-PPVm8Dsz.js";import"./index-QkjnO30K.js";import"./Alert-CeF_Fglx.js";import"./Icon-b--WZU8R.js";import"./Row-Do9IjNrO.js";import"./Heading-P23wd1ya.js";import"./getHeadingTag-Dv1eMqvl.js";import"./IconButton-DpaerfMk.js";import"./BorderSample-BNrnKrHa.js";import"./formatTokenValue-BYjgZrXg.js";import"./ColorSample-CRNPoomG.js";import"./SpaceSample-CSG3Dgin.js";import"./TypographySample-BOzwJ_nI.js";const x=`<!-- @license CC0-1.0 -->

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
`,y={alert:{"background-color":{$value:"{ams.color.background}",$type:"color"},"border-color":{$value:"{ams.color.feedback.info}",$type:"color"},"border-style":{$value:"solid",$extensions:{"amsterdam.designsystem.type":"borderStyle"}},"border-width":{$value:"{ams.border.width.xl}",$extensions:{"amsterdam.designsystem.type":"borderWidth"}},"severity-indicator":{"background-color":{$value:"{ams.color.feedback.info}",$type:"color"},"padding-block":{$value:"{ams.space.m}",$type:"dimension",$extensions:{"amsterdam.designsystem.subtype":"space"}},"padding-inline":{$value:"{ams.space.s}",$type:"dimension",$extensions:{"amsterdam.designsystem.subtype":"space"}}},content:{gap:{$value:"{ams.space.s}",$type:"dimension",$extensions:{"amsterdam.designsystem.subtype":"space"}},"padding-block":{$value:"{ams.space.m}",$type:"dimension",$extensions:{"amsterdam.designsystem.subtype":"space"}},"padding-inline":{$value:"{ams.space.m}",$type:"dimension",$extensions:{"amsterdam.designsystem.subtype":"space"}}},error:{"border-color":{$value:"{ams.color.feedback.error}",$type:"color"},"severity-indicator":{"background-color":{$value:"{ams.color.feedback.error}",$type:"color"}}},success:{"border-color":{$value:"{ams.color.feedback.success}",$type:"color"},"severity-indicator":{"background-color":{$value:"{ams.color.feedback.success}",$type:"color"}}},warning:{"border-color":{$value:"{ams.color.feedback.warning}",$type:"color"},"severity-indicator":{"background-color":{$value:"{ams.color.feedback.warning}",$type:"color"}}}}},b={ams:y};function r(s){const n={h2:"h2",h3:"h3",p:"p",...t(),...s.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,`
`,`
`,e.jsx(i,{of:d}),`
`,e.jsx(a,{children:x}),`
`,e.jsx(c,{}),`
`,e.jsx(l,{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"warning",children:"Warning"}),`
`,e.jsx(n.p,{children:"Display a warning when user action is required."}),`
`,e.jsx(o,{of:m}),`
`,e.jsx(n.h3,{id:"error",children:"Error"}),`
`,e.jsx(n.p,{children:`In case of an error, use the red alert.
Provide the user with suggestions on alternative ways to achieve the goal.`}),`
`,e.jsx(o,{of:p}),`
`,e.jsx(n.h3,{id:"success",children:"Success"}),`
`,e.jsx(n.p,{children:"Announce the success of a significant action."}),`
`,e.jsx(o,{of:u}),`
`,e.jsx(n.h3,{id:"information",children:"Information"}),`
`,e.jsx(n.p,{children:"An informative message can emphasize matters that are useful to follow."}),`
`,e.jsx(o,{of:h}),`
`,e.jsx(n.h3,{id:"with-inline-link",children:"With inline link"}),`
`,e.jsx(n.p,{children:"Include an inline link in the text to guide the user."}),`
`,e.jsx(o,{of:g}),`
`,e.jsx(n.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsx(f,{tokens:b})]})}function R(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{R as default};
