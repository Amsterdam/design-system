import{j as e}from"./iframe-Czx-_c1G.js";import{useMDXComponents as r}from"./index-DniyLBPi.js";import{M as s,P as o}from"./blocks-DvfWnsyB.js";import{F as a}from"./FormatTime.stories-lKZapQnk.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CAexXiCi.js";function t(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...r(),...i.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(s,{of:a}),`
`,e.jsx(n.h1,{id:"format-time",children:"Format Time"}),`
`,e.jsx(n.p,{children:"Formats a time or time range in Dutch notation according to the City's writing guidelines."}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { formatTime } from "@amsterdam/design-system-react";

formatTime(new Date(2026, 0, 1, 14, 30)); // '14:30'
formatTime(new Date(2026, 0, 1, 9, 5)); // '9:05'
formatTime(new Date(2026, 0, 1, 14, 30), new Date(2026, 0, 1, 15, 0)); // '14:30–15:00'
`})}),`
`,e.jsx(n.h2,{id:"guidelines",children:"Guidelines"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Uses the ",e.jsx(n.code,{children:"nl"})," locale with ",e.jsx(n.code,{children:"Intl.DateTimeFormat"}),"."]}),`
`,e.jsxs(n.li,{children:["Hours do not have a leading zero: ",e.jsx(n.code,{children:"9:05"}),", not ",e.jsx(n.code,{children:"09:05"}),"."]}),`
`,e.jsxs(n.li,{children:["Pass a second argument to format a time range: ",e.jsx(n.code,{children:"'14:30–15:00'"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"preview",children:"Preview"}),`
`,e.jsx(o,{}),`
`,e.jsx(n.h2,{id:"references",children:"References"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.amsterdam.nl/schrijfwijzer/heldere-taal-basis-onze-huisstijl/tekstonderdelen-heldere-taal/tijdnotatie/",rel:"nofollow",children:"Tijdnotatie at Amsterdam Writing Guide (in Dutch)"})}),`
`]})]})}function x(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{x as default};
