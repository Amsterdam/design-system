import{j as e}from"./iframe-28p58-e7.js";import{useMDXComponents as s}from"./index-s6Iv4t59.js";import{M as i,f as r,P as a,i as m}from"./blocks-C9or3pe5.js";import{a as p,I as l}from"./Figure.stories-CgO5N5QO.js";import{D as c}from"./DesignTokensTable-BmDH44vt.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D_VZO6qE.js";import"./exampleContent-Du2yH2Fl.js";import"./BorderSample-keE_97z0.js";import"./formatTokenValue-BYjgZrXg.js";import"./Code-5wRz0Tat.js";import"./ColorSample-O-QOHId9.js";import"./SpaceSample-BLPWg7xk.js";import"./TypographySample-CMZtIoB3.js";const h=`<!-- @license CC0-1.0 -->

# Figure

Groups media content with a caption that describes it.
`,u={figure:{gap:{$value:"{ams.space.s}",$type:"dimension",$extensions:{"amsterdam.designsystem.subtype":"space"}},caption:{color:{$value:"{ams.color.text.default}",$type:"color"},"font-family":{$value:"{ams.typography.font-family}",$type:"fontFamily"},"font-size":{$value:"{ams.typography.body-text.small.font-size}",$extensions:{"amsterdam.designsystem.type":"fontSize"}},"font-weight":{$value:"{ams.typography.body-text.font-weight}",$type:"fontWeight"},"line-height":{$value:"{ams.typography.body-text.small.line-height}",$extensions:{"amsterdam.designsystem.type":"lineHeight"}},inverse:{color:{$value:"{ams.color.text.inverse}",$type:"color"}}}}},d={ams:u};function o(n){const t={h2:"h2",h3:"h3",p:"p",...s(),...n.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,`
`,`
`,e.jsx(i,{of:p}),`
`,e.jsx(r,{children:h}),`
`,e.jsx(a,{}),`
`,e.jsx(t.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(t.h3,{id:"inverse-colour",children:"Inverse colour"}),`
`,e.jsx(t.p,{children:`Use the inverse colour if the Figure Caption sits on a dark background.
This ensures the colour of the text provides enough contrast.`}),`
`,e.jsx(m,{of:l}),`
`,e.jsx(t.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsx(c,{tokens:d})]})}function E(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o(n)}export{E as default};
