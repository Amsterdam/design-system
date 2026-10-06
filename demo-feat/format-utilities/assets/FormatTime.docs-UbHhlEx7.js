import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{d as t,h as n,i as r,u as i}from"./blocks-C8qI43rQ.js";import{t as a}from"./jsx-runtime-ATHzeHXA.js";import{i as o,r as s}from"./react-Dyi61YEg.js";import{n as c,t as l}from"./FormatTime.stories-DvcUzt1L.js";function u(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...o(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[`
`,`
`,`
`,(0,f.jsx)(i,{of:l}),`
`,(0,f.jsx)(n.h1,{id:`format-time`,children:`Format Time`}),`
`,(0,f.jsxs)(n.p,{children:[`Formats a time in Dutch notation according to the City of Amsterdam writing guidelines. Use `,(0,f.jsx)(n.code,{children:`formatTimeRange`}),` for a range of two times.`]}),`
`,(0,f.jsx)(t,{}),`
`,(0,f.jsx)(r,{}),`
`,(0,f.jsx)(n.h2,{id:`usage`,children:`Usage`}),`
`,(0,f.jsx)(n.pre,{children:(0,f.jsx)(n.code,{className:`language-tsx`,children:`import { formatTime, formatTimeRange } from "@amsterdam/design-system-react";

formatTime(new Date(2026, 0, 1, 14, 30)); // '14:30'
formatTime(new Date(2026, 0, 1, 9, 5)); // '9:05'
formatTime(new Date(2026, 0, 1, 14, 30), { style: "text" }); // '14.30 uur'

formatTimeRange(new Date(2026, 0, 1, 9), new Date(2026, 0, 1, 17)); // '9:00–17:00'
formatTimeRange(new Date(2026, 0, 1, 9), new Date(2026, 0, 1, 17), { style: "text" }); // 'van 9.00 tot 17.00 uur'
`})}),`
`,(0,f.jsx)(n.h2,{id:`guidelines`,children:`Guidelines`}),`
`,(0,f.jsxs)(n.ul,{children:[`
`,(0,f.jsxs)(n.li,{children:[`The default `,(0,f.jsx)(n.code,{children:`digital`}),` style writes a colon, which is the notation for schedules, opening hours, and other overviews: `,(0,f.jsx)(n.code,{children:`14:30`}),`.`]}),`
`,(0,f.jsxs)(n.li,{children:[`The `,(0,f.jsx)(n.code,{children:`text`}),` style writes a period and the word `,(0,f.jsx)(n.code,{children:`uur`}),`, for a time in running text: `,(0,f.jsx)(n.code,{children:`14.30 uur`}),`.`]}),`
`,(0,f.jsxs)(n.li,{children:[`Hours do not have a leading zero: `,(0,f.jsx)(n.code,{children:`9:05`}),`, not `,(0,f.jsx)(n.code,{children:`09:05`}),`.`]}),`
`,(0,f.jsxs)(n.li,{children:[(0,f.jsx)(n.code,{children:`formatTimeRange`}),` joins the two times: `,(0,f.jsx)(n.code,{children:`9:00–17:00`}),`, or `,(0,f.jsx)(n.code,{children:`van 9.00 tot 17.00 uur`}),` in the `,(0,f.jsx)(n.code,{children:`text`}),` style.
In the `,(0,f.jsx)(n.code,{children:`digital`}),` style an en dash separates them, without spaces around it.`]}),`
`,(0,f.jsxs)(n.li,{children:[`A range never names a date, so a range that runs past midnight reads `,(0,f.jsx)(n.code,{children:`23:00–1:00`}),`.`]}),`
`,(0,f.jsx)(n.li,{children:`Times are read as Amsterdam local time, so a date renders the same moment on a server and in the browser.`}),`
`]}),`
`,(0,f.jsx)(n.h2,{id:`see-also`,children:`See also`}),`
`,(0,f.jsxs)(n.ul,{children:[`
`,(0,f.jsx)(n.li,{children:(0,f.jsx)(n.a,{href:`https://www.amsterdam.nl/schrijfwijzer/heldere-taal-basis-onze-huisstijl/tekstonderdelen-heldere-taal/tijdnotatie/`,rel:`nofollow`,children:`Tijdnotatie at Amsterdam Writing Guide (in Dutch)`})}),`
`]})]})}function d(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(u,{...e})}):u(e)}var f;function p(){return(p=e((()=>{f=a(),s(),n(),c()})))()}p();export{d as default};