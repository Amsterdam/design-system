import{j as e}from"./iframe-Czx-_c1G.js";import{useMDXComponents as i}from"./index-DniyLBPi.js";import{M as o,P as t}from"./blocks-DvfWnsyB.js";import{F as d}from"./FormatMoney.stories-lSHwW-gW.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CAexXiCi.js";function s(r){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(o,{of:d}),`
`,e.jsx(n.h1,{id:"format-money",children:"Format Money"}),`
`,e.jsx(n.p,{children:"Formats an amount of money in euros according to the City of Amsterdam writing guidelines."}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { formatMoney } from "@amsterdam/design-system-react";

formatMoney(198); // '€ 198,-'
formatMoney(198.5); // '€ 198,50'
formatMoney(1040.25); // '€ 1.040,25'
formatMoney(1000000); // '€ 1.000.000,-'
`})}),`
`,e.jsx(n.h2,{id:"guidelines",children:"Guidelines"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The euro sign ",e.jsx(n.code,{children:"€"})," precedes the amount, followed by a space."]}),`
`,e.jsxs(n.li,{children:["Whole amounts end with ",e.jsx(n.code,{children:",-"}),": ",e.jsx(n.code,{children:"€ 198,-"}),"."]}),`
`,e.jsxs(n.li,{children:["Amounts with cents show exactly two decimal places, using a comma: ",e.jsx(n.code,{children:"€ 198,50"}),"."]}),`
`,e.jsxs(n.li,{children:["Thousands are separated by periods: ",e.jsx(n.code,{children:"€ 1.000,-"}),"."]}),`
`,e.jsxs(n.li,{children:["Uses ",e.jsx(n.code,{children:"Intl.NumberFormat"})," with the ",e.jsx(n.code,{children:"nl-NL"})," locale."]}),`
`,e.jsxs(n.li,{children:["For large round amounts in running text, the writing guidelines prefer writing 'euro' and 'miljoen' as words, e.g. '7,6 miljoen euro'. This function does not do that — it always produces the ",e.jsx(n.code,{children:"€"})," notation."]}),`
`]}),`
`,e.jsx(n.h2,{id:"preview",children:"Preview"}),`
`,e.jsx(t,{}),`
`,e.jsx(n.h2,{id:"references",children:"References"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.amsterdam.nl/schrijfwijzer/heldere-taal-basis-onze-huisstijl/tekstonderdelen-heldere-taal/getallen-bedragen-breuken-percentages/",rel:"nofollow",children:"Bedragen at Amsterdam Writing Guide (in Dutch)"})}),`
`]})]})}function u(r={}){const{wrapper:n}={...i(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}export{u as default};
