import{j as e}from"./iframe-Czx-_c1G.js";import{useMDXComponents as t}from"./index-DniyLBPi.js";import{M as s,P as a}from"./blocks-DvfWnsyB.js";import{F as o}from"./FormatIban.stories-Dx4U9kgh.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CAexXiCi.js";function i(r){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...t(),...r.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(s,{of:o}),`
`,e.jsx(n.h1,{id:"format-iban",children:"Format IBAN"}),`
`,e.jsx(n.p,{children:"Formats a Dutch IBAN bank account number according to the City of Amsterdam writing guidelines."}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { formatIban } from "@amsterdam/design-system-react";

formatIban("NL21TRIO0123456789"); // 'NL21 TRIO 0123 4567 89'
formatIban("nl21trio0123456789"); // 'NL21 TRIO 0123 4567 89'
`})}),`
`,e.jsx(n.h2,{id:"guidelines",children:"Guidelines"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Dutch IBANs follow the pattern: ",e.jsx(n.code,{children:"NL00 BANK 0000 0000 00"}),"."]}),`
`,e.jsx(n.li,{children:"The country code and bank code are uppercased."}),`
`,e.jsx(n.li,{children:"Normalises spacing and casing from common input variations."}),`
`,e.jsx(n.li,{children:"Returns the input unchanged if it does not match the Dutch IBAN pattern (18 characters)."}),`
`,e.jsx(n.li,{children:"This function formats only — it does not validate the IBAN check digits."}),`
`]}),`
`,e.jsx(n.h2,{id:"preview",children:"Preview"}),`
`,e.jsx(a,{}),`
`,e.jsx(n.h2,{id:"references",children:"References"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.amsterdam.nl/schrijfwijzer/heldere-taal-basis-onze-huisstijl/tekstonderdelen-heldere-taal/rekeningnummers/",rel:"nofollow",children:"Rekeningnummers at Amsterdam Writing Guide (in Dutch)"})}),`
`]})]})}function j(r={}){const{wrapper:n}={...t(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(i,{...r})}):i(r)}export{j as default};
