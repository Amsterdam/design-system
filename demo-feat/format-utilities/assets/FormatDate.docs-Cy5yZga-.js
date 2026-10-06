import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{d as t,h as n,i as r,u as i}from"./blocks-C8qI43rQ.js";import{t as a}from"./jsx-runtime-ATHzeHXA.js";import{i as o,r as s}from"./react-Dyi61YEg.js";import{n as c,t as l}from"./FormatDate.stories-B9lo3xvE.js";function u(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...o(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[`
`,`
`,`
`,(0,f.jsx)(i,{of:l}),`
`,(0,f.jsx)(n.h1,{id:`format-date`,children:`Format Date`}),`
`,(0,f.jsx)(n.p,{children:`Formats a date in Dutch long-form notation according to the City of Amsterdam writing guidelines.`}),`
`,(0,f.jsx)(t,{}),`
`,(0,f.jsx)(r,{}),`
`,(0,f.jsx)(n.h2,{id:`usage`,children:`Usage`}),`
`,(0,f.jsx)(n.pre,{children:(0,f.jsx)(n.code,{className:`language-tsx`,children:`import { formatDate } from "@amsterdam/design-system-react";

formatDate(new Date(2026, 0, 16)); // '16 januari 2026'
formatDate(1800000000000); // '15 januari 2027'
formatDate(new Date(2028, 4, 36)); // '5 juni 2028'
formatDate(Date.now()); // Today’s date
formatDate(new Date(2028, 0, 16), { weekday: true }); // 'zondag 16 januari 2028'
`})}),`
`,(0,f.jsx)(n.h2,{id:`guidelines`,children:`Guidelines`}),`
`,(0,f.jsxs)(n.ul,{children:[`
`,(0,f.jsxs)(n.li,{children:[`Uses the `,(0,f.jsx)(n.code,{children:`nl`}),` locale with `,(0,f.jsx)(n.code,{children:`Intl.DateTimeFormat`}),` to produce a day, full month name, and year.`]}),`
`,(0,f.jsxs)(n.li,{children:[`Accepts a `,(0,f.jsx)(n.code,{children:`Date`}),` object or a numeric timestamp (milliseconds since epoch).`]}),`
`,(0,f.jsxs)(n.li,{children:[`Note that `,(0,f.jsx)(n.code,{children:`new Date(year, month, day)`}),` uses a zero-based month: `,(0,f.jsx)(n.code,{children:`0`}),` is January, `,(0,f.jsx)(n.code,{children:`11`}),` is December.`]}),`
`,(0,f.jsxs)(n.li,{children:[(0,f.jsx)(n.code,{children:`new Date()`}),` rolls over out-of-range values, e.g. day 32 of October becomes 1 November.`]}),`
`,(0,f.jsxs)(n.li,{children:[`Pass `,(0,f.jsx)(n.code,{children:`{ weekday: true }`}),` to include the full weekday name, e.g. `,(0,f.jsx)(n.code,{children:`zondag 16 januari 2028`}),`.`]}),`
`]}),`
`,(0,f.jsx)(n.h2,{id:`see-also`,children:`See also`}),`
`,(0,f.jsxs)(n.ul,{children:[`
`,(0,f.jsx)(n.li,{children:(0,f.jsx)(n.a,{href:`https://www.amsterdam.nl/schrijfwijzer/heldere-taal-basis-onze-huisstijl/tekstonderdelen-heldere-taal/datumnotatie/`,rel:`nofollow`,children:`Date notation at Amsterdam Writing Guide (in Dutch)`})}),`
`]})]})}function d(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(u,{...e})}):u(e)}var f;function p(){return(p=e((()=>{f=a(),s(),n(),c()})))()}p();export{d as default};