import{j as e}from"./iframe-Czx-_c1G.js";import{useMDXComponents as o}from"./index-DniyLBPi.js";import{M as i,P as d}from"./blocks-DvfWnsyB.js";import{F as t}from"./FormatPhoneNumber.stories-BMuJ6OBW.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CAexXiCi.js";function s(r){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...r.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(i,{of:t}),`
`,e.jsx(n.h1,{id:"format-phone-number",children:"Format Phone Number"}),`
`,e.jsx(n.p,{children:"Formats a Dutch phone number according to the City of Amsterdam writing guidelines."}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { formatPhoneNumber } from "@amsterdam/design-system-react";

formatPhoneNumber("0202355911"); // '020 235 5911'
formatPhoneNumber("0343255922"); // '0343 255 922'
formatPhoneNumber("0612345678"); // '06 1234 5678'
formatPhoneNumber("+31201234567"); // '+31 20 123 4567'
formatPhoneNumber("+31612345678"); // '+31 6 1234 5678'
formatPhoneNumber("08001234"); // '0800 1234'
`})}),`
`,e.jsx(n.h2,{id:"guidelines",children:"Guidelines"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Uses spaces to separate the area code and subscriber number — no dashes or parentheses."}),`
`,e.jsxs(n.li,{children:["Subscriber numbers with an even digit count are split into two equal groups: ",e.jsx(n.code,{children:"255 922"}),"."]}),`
`,e.jsxs(n.li,{children:["Subscriber numbers with an odd digit count get a group of 3 followed by a group of 4: ",e.jsx(n.code,{children:"235 5911"}),"."]}),`
`,e.jsxs(n.li,{children:["Mobile numbers use a group of 4 and a group of 4 after ",e.jsx(n.code,{children:"06"}),": ",e.jsx(n.code,{children:"06 1234 5678"}),"."]}),`
`,e.jsxs(n.li,{children:["International numbers replace the leading ",e.jsx(n.code,{children:"0"})," with ",e.jsx(n.code,{children:"+31"})," and use spaces throughout: ",e.jsx(n.code,{children:"+31 20 123 4567"}),"."]}),`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"0031"})," prefix is also accepted and formatted as ",e.jsx(n.code,{children:"+31"}),"."]}),`
`,e.jsxs(n.li,{children:["Service numbers ",e.jsx(n.code,{children:"0800"})," and ",e.jsx(n.code,{children:"0900"})," are supported: ",e.jsx(n.code,{children:"0800 1234"})," or ",e.jsx(n.code,{children:"0800 123 4567"}),"."]}),`
`,e.jsxs(n.li,{children:["Unrecognised input (e.g. ",e.jsx(n.code,{children:"14 020"}),", ",e.jsx(n.code,{children:"112"}),") is returned unchanged."]}),`
`]}),`
`,e.jsx(n.h2,{id:"preview",children:"Preview"}),`
`,e.jsx(d,{}),`
`,e.jsx(n.h2,{id:"references",children:"References"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.amsterdam.nl/schrijfwijzer/heldere-taal-basis-onze-huisstijl/tekstonderdelen-heldere-taal/telefoonnummers/",rel:"nofollow",children:"Telefoonnummers at Amsterdam Writing Guide (in Dutch)"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://taaladvies.net/telefoonnummers-in-nederland-algemeen/",rel:"nofollow",children:"Taaladvies – Telefoonnummers in Nederland"})}),`
`]})]})}function x(r={}){const{wrapper:n}={...o(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}export{x as default};
