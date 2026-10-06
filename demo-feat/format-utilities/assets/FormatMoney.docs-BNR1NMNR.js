import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{d as t,h as n,i as r,u as i}from"./blocks-C8qI43rQ.js";import{t as a}from"./jsx-runtime-ATHzeHXA.js";import{i as o,r as s}from"./react-Dyi61YEg.js";import{n as c,t as l}from"./FormatMoney.stories-CL4NFj0A.js";function u(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...o(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[`
`,`
`,`
`,(0,f.jsx)(i,{of:l}),`
`,(0,f.jsx)(n.h1,{id:`format-money`,children:`Format Money`}),`
`,(0,f.jsx)(n.p,{children:`Formats an amount of money in euros according to the City of Amsterdam writing guidelines.`}),`
`,(0,f.jsx)(t,{}),`
`,(0,f.jsx)(r,{}),`
`,(0,f.jsx)(n.h2,{id:`usage`,children:`Usage`}),`
`,(0,f.jsx)(n.pre,{children:(0,f.jsx)(n.code,{className:`language-tsx`,children:`import { formatMoney } from "@amsterdam/design-system-react";

formatMoney(198); // '€ 198,-'
formatMoney(198.5); // '€ 198,50'
formatMoney(1040.25); // '€ 1.040,25'
formatMoney(1000000); // '€ 1.000.000,-'
`})}),`
`,(0,f.jsx)(n.h2,{id:`guidelines`,children:`Guidelines`}),`
`,(0,f.jsxs)(n.ul,{children:[`
`,(0,f.jsxs)(n.li,{children:[`The euro sign `,(0,f.jsx)(n.code,{children:`€`}),` precedes the amount, followed by a space.`]}),`
`,(0,f.jsxs)(n.li,{children:[`Whole amounts end with `,(0,f.jsx)(n.code,{children:`,-`}),`: `,(0,f.jsx)(n.code,{children:`€ 198,-`}),`.`]}),`
`,(0,f.jsxs)(n.li,{children:[`Amounts with cents show exactly two decimal places, using a comma: `,(0,f.jsx)(n.code,{children:`€ 198,50`}),`.`]}),`
`,(0,f.jsxs)(n.li,{children:[`Thousands are separated by periods: `,(0,f.jsx)(n.code,{children:`€ 1.000,-`}),`.`]}),`
`,(0,f.jsxs)(n.li,{children:[`Uses `,(0,f.jsx)(n.code,{children:`Intl.NumberFormat`}),` with the `,(0,f.jsx)(n.code,{children:`nl-NL`}),` locale.`]}),`
`,(0,f.jsxs)(n.li,{children:[`For large round amounts in running text, the writing guidelines prefer writing ‘euro’ and ‘miljoen’ as words, e.g. 7,6 miljoen euro.
This function does not do that — it always produces the `,(0,f.jsx)(n.code,{children:`€`}),` notation.`]}),`
`]}),`
`,(0,f.jsx)(n.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,f.jsxs)(n.ul,{children:[`
`,(0,f.jsxs)(n.li,{children:[`Do not add an `,(0,f.jsx)(n.code,{children:`aria-label`}),` to spell out the amount.
It overrides the way people have set up their screen reader to read numbers, which is their choice to make, not ours.`]}),`
`]}),`
`,(0,f.jsx)(n.h2,{id:`see-also`,children:`See also`}),`
`,(0,f.jsxs)(n.ul,{children:[`
`,(0,f.jsx)(n.li,{children:(0,f.jsx)(n.a,{href:`https://www.amsterdam.nl/schrijfwijzer/heldere-taal-basis-onze-huisstijl/tekstonderdelen-heldere-taal/getallen-bedragen-breuken-percentages/`,rel:`nofollow`,children:`Bedragen at Amsterdam Writing Guide (in Dutch)`})}),`
`]})]})}function d(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(u,{...e})}):u(e)}var f;function p(){return(p=e((()=>{f=a(),s(),n(),c()})))()}p();export{d as default};