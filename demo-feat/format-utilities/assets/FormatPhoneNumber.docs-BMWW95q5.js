import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{d as t,h as n,i as r,u as i}from"./blocks-C8qI43rQ.js";import{t as a}from"./jsx-runtime-ATHzeHXA.js";import{i as o,r as s}from"./react-Dyi61YEg.js";import{n as c,t as l}from"./FormatPhoneNumber.stories-jX0q5T84.js";function u(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...o(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[`
`,`
`,`
`,(0,f.jsx)(i,{of:l}),`
`,(0,f.jsx)(n.h1,{id:`format-phone-number`,children:`Format Phone Number`}),`
`,(0,f.jsx)(n.p,{children:`Formats a Dutch phone number according to the City of Amsterdam writing guidelines.`}),`
`,(0,f.jsx)(t,{}),`
`,(0,f.jsx)(r,{}),`
`,(0,f.jsx)(n.h2,{id:`usage`,children:`Usage`}),`
`,(0,f.jsx)(n.pre,{children:(0,f.jsx)(n.code,{className:`language-tsx`,children:`import { formatPhoneNumber } from "@amsterdam/design-system-react";

formatPhoneNumber("0202355911"); // '020 235 5911'
formatPhoneNumber("0343255922"); // '0343 255 922'
formatPhoneNumber("0612345678"); // '06 1234 5678'
formatPhoneNumber("0888989294"); // '088 898 9294'
formatPhoneNumber("14020"); // '14 020'
formatPhoneNumber("+31201234567"); // '+31 20 123 4567'
formatPhoneNumber("+31 (0)20 123 4567"); // '+31 20 123 4567'
formatPhoneNumber("08001234"); // '0800 1234'
`})}),`
`,(0,f.jsx)(n.h2,{id:`guidelines`,children:`Guidelines`}),`
`,(0,f.jsxs)(n.ul,{children:[`
`,(0,f.jsx)(n.li,{children:`Uses spaces to separate the area code and subscriber number — no dashes or parentheses.`}),`
`,(0,f.jsxs)(n.li,{children:[`A two-digit area code is followed by a seven-digit subscriber number, grouped as 3 and 4: `,(0,f.jsx)(n.code,{children:`020 235 5911`}),`.`]}),`
`,(0,f.jsxs)(n.li,{children:[`A three-digit area code is followed by a six-digit subscriber number, grouped as 3 and 3: `,(0,f.jsx)(n.code,{children:`0343 255 922`}),`.`]}),`
`,(0,f.jsxs)(n.li,{children:[`Numbers for businesses and institutions, which start with `,(0,f.jsx)(n.code,{children:`084`}),`, `,(0,f.jsx)(n.code,{children:`085`}),`, `,(0,f.jsx)(n.code,{children:`087`}),`, `,(0,f.jsx)(n.code,{children:`088`}),`, or `,(0,f.jsx)(n.code,{children:`091`}),`, are grouped like a two-digit area code: `,(0,f.jsx)(n.code,{children:`088 898 9294`}),`.`]}),`
`,(0,f.jsxs)(n.li,{children:[`Mobile numbers are grouped as 4 and 4 after `,(0,f.jsx)(n.code,{children:`06`}),`: `,(0,f.jsx)(n.code,{children:`06 1234 5678`}),`.`]}),`
`,(0,f.jsxs)(n.li,{children:[`International numbers replace the leading `,(0,f.jsx)(n.code,{children:`0`}),` with `,(0,f.jsx)(n.code,{children:`+31`}),` and use spaces throughout: `,(0,f.jsx)(n.code,{children:`+31 20 123 4567`}),`.
A trunk zero that is written out anyway, as in `,(0,f.jsx)(n.code,{children:`+31 (0)20`}),`, is dropped.`]}),`
`,(0,f.jsxs)(n.li,{children:[`The `,(0,f.jsx)(n.code,{children:`0031`}),` prefix is also accepted and formatted as `,(0,f.jsx)(n.code,{children:`+31`}),`.`]}),`
`,(0,f.jsxs)(n.li,{children:[`Service numbers `,(0,f.jsx)(n.code,{children:`0800`}),`, `,(0,f.jsx)(n.code,{children:`0900`}),`, `,(0,f.jsx)(n.code,{children:`0906`}),`, and `,(0,f.jsx)(n.code,{children:`0909`}),` are supported: `,(0,f.jsx)(n.code,{children:`0800 1234`}),` or `,(0,f.jsx)(n.code,{children:`0900 123 4567`}),`.`]}),`
`,(0,f.jsxs)(n.li,{children:[`Municipal service numbers are the digits `,(0,f.jsx)(n.code,{children:`14`}),` followed by an area code: `,(0,f.jsx)(n.code,{children:`14 020`}),`.`]}),`
`,(0,f.jsxs)(n.li,{children:[`Unrecognised input, such as `,(0,f.jsx)(n.code,{children:`112`}),`, is returned unchanged rather than grouped on a guess.`]}),`
`]}),`
`,(0,f.jsx)(n.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,f.jsxs)(n.ul,{children:[`
`,(0,f.jsxs)(n.li,{children:[`Write the number in a `,(0,f.jsx)(n.code,{children:`tel:`}),` link so it can be dialled: `,(0,f.jsx)(n.code,{children:`<a href="tel:0202355911">020 235 5911</a>`}),`.
Keep the spaces in the link text and leave them out of the `,(0,f.jsx)(n.code,{children:`href`}),`.`]}),`
`,(0,f.jsxs)(n.li,{children:[`Do not add an `,(0,f.jsx)(n.code,{children:`aria-label`}),` that spells out the digits.
It overrides the way people have set up their screen reader to read numbers, which is their choice to make, not ours.`]}),`
`]}),`
`,(0,f.jsx)(n.h2,{id:`see-also`,children:`See also`}),`
`,(0,f.jsxs)(n.ul,{children:[`
`,(0,f.jsx)(n.li,{children:(0,f.jsx)(n.a,{href:`https://www.amsterdam.nl/schrijfwijzer/heldere-taal-basis-onze-huisstijl/tekstonderdelen-heldere-taal/telefoonnummers/`,rel:`nofollow`,children:`Telefoonnummers at Amsterdam Writing Guide (in Dutch)`})}),`
`,(0,f.jsxs)(n.li,{children:[(0,f.jsx)(n.a,{href:`https://wetten.overheid.nl/BWBR0010198`,rel:`nofollow`,children:`Nummerplan telefoon- en ISDN-diensten (in Dutch)`}),` – which area codes and prefixes exist, and how long each number is.`]}),`
`]})]})}function d(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(u,{...e})}):u(e)}var f;function p(){return(p=e((()=>{f=a(),s(),n(),c()})))()}p();export{d as default};