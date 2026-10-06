import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{d as t,h as n,i as r,u as i}from"./blocks-C8qI43rQ.js";import{t as a}from"./jsx-runtime-ATHzeHXA.js";import{i as o,r as s}from"./react-Dyi61YEg.js";import{n as c,t as l}from"./UseRelativeTime.stories-DeFlT-dS.js";function u(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...o(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[`
`,`
`,`
`,(0,f.jsx)(i,{of:l}),`
`,(0,f.jsx)(n.h1,{id:`use-relative-time`,children:`Use Relative Time`}),`
`,(0,f.jsx)(n.p,{children:`A React hook that returns a live-updating relative time string in Dutch.`}),`
`,(0,f.jsx)(t,{}),`
`,(0,f.jsx)(r,{}),`
`,(0,f.jsx)(n.h2,{id:`usage`,children:`Usage`}),`
`,(0,f.jsx)(n.pre,{children:(0,f.jsx)(n.code,{className:`language-tsx`,children:`import { Paragraph, useRelativeTime } from "@amsterdam/design-system-react";

const MyComponent = ({ createdAt }: { readonly createdAt: Date }) => {
  const label = useRelativeTime(createdAt);

  return <Paragraph>{label}</Paragraph>;
};
`})}),`
`,(0,f.jsx)(n.h2,{id:`output-examples`,children:`Output examples`}),`
`,(0,f.jsxs)(n.table,{children:[(0,f.jsx)(n.thead,{children:(0,f.jsxs)(n.tr,{children:[(0,f.jsx)(n.th,{children:`Time elapsed`}),(0,f.jsx)(n.th,{children:`Output`})]})}),(0,f.jsxs)(n.tbody,{children:[(0,f.jsxs)(n.tr,{children:[(0,f.jsx)(n.td,{children:`Less than a minute ago`}),(0,f.jsx)(n.td,{children:`minder dan 1 minuut geleden`})]}),(0,f.jsxs)(n.tr,{children:[(0,f.jsx)(n.td,{children:`5 minutes ago`}),(0,f.jsx)(n.td,{children:`5 minuten geleden`})]}),(0,f.jsxs)(n.tr,{children:[(0,f.jsx)(n.td,{children:`1 hour ago`}),(0,f.jsx)(n.td,{children:`1 uur geleden`})]}),(0,f.jsxs)(n.tr,{children:[(0,f.jsx)(n.td,{children:`3 days ago`}),(0,f.jsx)(n.td,{children:`3 dagen geleden`})]}),(0,f.jsxs)(n.tr,{children:[(0,f.jsx)(n.td,{children:`2 months ago`}),(0,f.jsx)(n.td,{children:`2 maanden geleden`})]}),(0,f.jsxs)(n.tr,{children:[(0,f.jsx)(n.td,{children:`In 1 hour`}),(0,f.jsx)(n.td,{children:`over 1 uur`})]})]})]}),`
`,(0,f.jsx)(n.h2,{id:`guidelines`,children:`Guidelines`}),`
`,(0,f.jsxs)(n.ul,{children:[`
`,(0,f.jsxs)(n.li,{children:[`Accepts a `,(0,f.jsx)(n.code,{children:`Date`}),` object or a numeric timestamp (milliseconds since epoch).`]}),`
`,(0,f.jsx)(n.li,{children:`Handles past and future times, rolling up through minutes, hours, days, weeks, months, and years.`}),`
`,(0,f.jsx)(n.li,{children:`Updates automatically every 30 seconds.`}),`
`,(0,f.jsxs)(n.li,{children:[`For a precise date, use `,(0,f.jsx)(n.code,{children:`formatDate`}),` instead.`]}),`
`,(0,f.jsx)(n.li,{children:`On the server it renders an empty string, and fills in once the page runs in the browser.`}),`
`]}),`
`,(0,f.jsx)(n.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,f.jsxs)(n.ul,{children:[`
`,(0,f.jsxs)(n.li,{children:[`A relative time does not say when something happened.
Write the date next to it, or use `,(0,f.jsx)(n.code,{children:`formatDate`}),`, wherever the exact moment matters to the reader.`]}),`
`,(0,f.jsxs)(n.li,{children:[`Take care when wrapping the label in a `,(0,f.jsx)(n.code,{children:`<time>`}),` element.
Safari and VoiceOver announce its `,(0,f.jsx)(n.code,{children:`dateTime`}),` value a second time, in the language of the operating system rather than the language of the page, so a full timestamp is read out in its entirety.
Keep the value no longer than the reader needs.`]}),`
`]}),`
`,(0,f.jsx)(n.h2,{id:`see-also`,children:`See also`}),`
`,(0,f.jsxs)(n.ul,{children:[`
`,(0,f.jsxs)(n.li,{children:[(0,f.jsx)(n.a,{href:`/docs/utilities-javascript-format-date--docs`,children:`Format Date`}),` – for an absolute date.`]}),`
`]})]})}function d(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(u,{...e})}):u(e)}var f;function p(){return(p=e((()=>{f=a(),s(),n(),c()})))()}p();export{d as default};