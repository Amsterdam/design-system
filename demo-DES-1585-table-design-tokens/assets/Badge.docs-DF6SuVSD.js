import{j as e}from"./iframe-CgT_rn2k.js";import{useMDXComponents as r}from"./index-DQbnsFnw.js";import{M as a,f as s,P as l,h as i,i as c}from"./blocks-lxuW4Khk.js";import{B as m,W as p}from"./Badge.stories-Du0OH5y5.js";import{D as h}from"./DesignTokensTable-CmCYa4m4.js";import"./preload-helper-PPVm8Dsz.js";import"./index-oKttLyh-.js";import"./Badge-CQ9JuPJo.js";import"./Icon-ovtVf5Iu.js";import"./BorderSample-CkwM9uLl.js";import"./formatTokenValue-BYjgZrXg.js";import"./ColorSample-D2L7qNPw.js";import"./SpaceSample-D5tNWEyJ.js";import"./TypographySample-BrsIPEbs.js";const d=`<!-- @license CC0-1.0 -->

# Badge

A prominent label that indicates a category, property or instruction.

## Guidelines

- Let the badge contain a short text or a number.
- Use any of the feedback or highlight [colours](/docs/brand-design-tokens-colour--docs) for the background.
  The default is green.
  Red, orange and green are especially useful for showing an error, warning, or success.
  However, they can also be combined with the other colours without carrying these meanings.
`,u={badge:{"background-color":{$value:"{ams.color.feedback.success}",$type:"color"},color:{$value:"{ams.color.text.inverse}",$type:"color"},"font-family":{$value:"{ams.typography.font-family}",$type:"fontFamily"},"font-size":{$value:"{ams.typography.body-text.font-size}",$extensions:{"amsterdam.designsystem.type":"fontSize"}},"font-weight":{$value:"{ams.typography.body-text.bold.font-weight}",$type:"fontWeight"},gap:{$value:"{ams.space.xs}",$type:"dimension",$extensions:{"amsterdam.designsystem.subtype":"space"}},"line-height":{$value:"{ams.typography.body-text.line-height}",$extensions:{"amsterdam.designsystem.type":"lineHeight"}},"padding-inline":{$value:"{ams.space.xs}",$type:"dimension",$extensions:{"amsterdam.designsystem.subtype":"space"}},azure:{"background-color":{$value:"{ams.color.feedback.info}",$type:"color"},color:{$value:"{ams.color.text.inverse}",$type:"color"}},lime:{"background-color":{$value:"{ams.color.highlight.lime}",$type:"color"},color:{$value:"{ams.color.text.default}",$type:"color"}},magenta:{"background-color":{$value:"{ams.color.highlight.magenta}",$type:"color"},color:{$value:"{ams.color.text.inverse}",$type:"color"}},orange:{"background-color":{$value:"{ams.color.feedback.warning}",$type:"color"},color:{$value:"{ams.color.text.default}",$type:"color"}},purple:{"background-color":{$value:"{ams.color.highlight.purple}",$type:"color"},color:{$value:"{ams.color.text.inverse}",$type:"color"}},red:{"background-color":{$value:"{ams.color.feedback.error}",$type:"color"},color:{$value:"{ams.color.text.inverse}",$type:"color"}},yellow:{"background-color":{$value:"{ams.color.highlight.yellow}",$type:"color"},color:{$value:"{ams.color.text.default}",$type:"color"}}}},g={ams:u};function n(t){const o={h2:"h2",h3:"h3",p:"p",...r(),...t.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,`
`,`
`,e.jsx(a,{of:m}),`
`,e.jsx(s,{children:d}),`
`,e.jsx(l,{}),`
`,e.jsx(i,{}),`
`,e.jsx(o.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(o.h3,{id:"with-icon",children:"With icon"}),`
`,e.jsx(o.p,{children:`Include an icon when it provides meaning that isn’t obvious from the text alone, or when it helps with quick recognition.
This may be helpful for statuses, alerts, or categories that users look over instead of reading.`}),`
`,e.jsx(c,{of:p}),`
`,e.jsx(o.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsx(h,{tokens:g})]})}function E(t={}){const{wrapper:o}={...r(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(n,{...t})}):n(t)}export{E as default};
