import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{d as t,h as n,i as r,u as i}from"./blocks-C8qI43rQ.js";import{t as a}from"./jsx-runtime-ATHzeHXA.js";import{i as o,r as s}from"./react-Dyi61YEg.js";import{n as c,t as l}from"./FormatIban.stories-B8lAdTbl.js";function u(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...o(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[`
`,`
`,`
`,(0,f.jsx)(i,{of:l}),`
`,(0,f.jsx)(n.h1,{id:`format-iban`,children:`Format IBAN`}),`
`,(0,f.jsx)(n.p,{children:`Formats a Dutch IBAN bank account number according to the City of Amsterdam writing guidelines.`}),`
`,(0,f.jsx)(t,{}),`
`,(0,f.jsx)(r,{}),`
`,(0,f.jsx)(n.h2,{id:`usage`,children:`Usage`}),`
`,(0,f.jsx)(n.pre,{children:(0,f.jsx)(n.code,{className:`language-tsx`,children:`import { formatIban } from "@amsterdam/design-system-react";

formatIban("NL70TRIO0123456789"); // 'NL70 TRIO 0123 4567 89'
formatIban("nl70trio0123456789"); // 'NL70 TRIO 0123 4567 89'
`})}),`
`,(0,f.jsx)(n.h2,{id:`guidelines`,children:`Guidelines`}),`
`,(0,f.jsxs)(n.ul,{children:[`
`,(0,f.jsxs)(n.li,{children:[`Dutch IBANs follow the pattern `,(0,f.jsx)(n.code,{children:`NL00 BANK 0000 0000 00`}),`: groups of four, ending in a group of two.`]}),`
`,(0,f.jsx)(n.li,{children:`The country code and bank code are uppercased.`}),`
`,(0,f.jsx)(n.li,{children:`Normalises spacing and casing from common input variations.`}),`
`,(0,f.jsxs)(n.li,{children:[`Formats any input shaped like a Dutch IBAN: two letters, two digits, four letters, and ten digits.
It does not check that the country code is `,(0,f.jsx)(n.code,{children:`NL`}),`, and IBANs from countries with another shape are returned unchanged.`]}),`
`,(0,f.jsx)(n.li,{children:`This function formats only — it does not validate the IBAN check digits.`}),`
`]}),`
`,(0,f.jsx)(n.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,f.jsxs)(n.ul,{children:[`
`,(0,f.jsxs)(n.li,{children:[`Do not add an `,(0,f.jsx)(n.code,{children:`aria-label`}),` to spell out the account number.
It overrides the way people have set up their screen reader to read the grouped digits, which is their choice to make, not ours.`]}),`
`]}),`
`,(0,f.jsx)(n.h2,{id:`see-also`,children:`See also`}),`
`,(0,f.jsxs)(n.ul,{children:[`
`,(0,f.jsx)(n.li,{children:(0,f.jsx)(n.a,{href:`https://www.amsterdam.nl/schrijfwijzer/heldere-taal-basis-onze-huisstijl/tekstonderdelen-heldere-taal/rekeningnummers/`,rel:`nofollow`,children:`Rekeningnummers at Amsterdam Writing Guide (in Dutch)`})}),`
`]})]})}function d(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(u,{...e})}):u(e)}var f;function p(){return(p=e((()=>{f=a(),s(),n(),c()})))()}p();export{d as default};