import{j as e}from"./iframe-Czx-_c1G.js";import{useMDXComponents as r}from"./index-DniyLBPi.js";import{M as s,P as i}from"./blocks-DvfWnsyB.js";import{F as o}from"./FormatDate.stories-B2y1GyuC.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CAexXiCi.js";function a(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...r(),...t.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(s,{of:o}),`
`,e.jsx(n.h1,{id:"format-date",children:"Format Date"}),`
`,e.jsx(n.p,{children:"Formats a date in Dutch long-form notation according to the City’s writing guidelines."}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { formatDate } from "@amsterdam/design-system-react";

formatDate(new Date(2026, 0, 16)); // '16 januari 2026'
formatDate(1800000000000); // '14 september 2027'
formatDate(new Date(2028, 4, 36)); // '5 juni 2028'
formatDate(Date.now()); // Today’s date
formatDate(new Date(2028, 0, 16), { weekday: true }); // ‘zondag 16 januari 2028’
`})}),`
`,e.jsx(n.h2,{id:"guidelines",children:"Guidelines"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Uses the ",e.jsx(n.code,{children:"nl"})," locale with ",e.jsx(n.code,{children:"Intl.DateTimeFormat"})," to produce a day, full month name, and year."]}),`
`,e.jsxs(n.li,{children:["Accepts a ",e.jsx(n.code,{children:"Date"})," object or a numeric timestamp (milliseconds since epoch)."]}),`
`,e.jsxs(n.li,{children:["Note that ",e.jsx(n.code,{children:"new Date(year, month, day)"})," uses a zero-based month: ",e.jsx(n.code,{children:"0"})," is January, ",e.jsx(n.code,{children:"11"})," is December."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"new Date()"})," rolls over out-of-range values, e.g. day 32 of October becomes 1 November."]}),`
`,e.jsxs(n.li,{children:["Pass ",e.jsx(n.code,{children:"{ weekday: true }"})," to include the full weekday name, e.g. 'zondag 16 januari 2028'."]}),`
`]}),`
`,e.jsx(n.h2,{id:"preview",children:"Preview"}),`
`,e.jsx(i,{}),`
`,e.jsx(n.h2,{id:"references",children:"References"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.amsterdam.nl/schrijfwijzer/heldere-taal-basis-onze-huisstijl/tekstonderdelen-heldere-taal/datumnotatie/",rel:"nofollow",children:"Date notation at Amsterdam Writing Guide (in Dutch)"})}),`
`]})]})}function u(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(a,{...t})}):a(t)}export{u as default};
