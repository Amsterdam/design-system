import{j as e}from"./iframe-Czx-_c1G.js";import{useMDXComponents as d}from"./index-DniyLBPi.js";import{M as i,P as r}from"./blocks-DvfWnsyB.js";import{U as l}from"./UseRelativeTime.stories-C0OH2YdP.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CAexXiCi.js";function s(n){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...d(),...n.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(i,{of:l}),`
`,e.jsx(t.h1,{id:"use-relative-time",children:"Use Relative Time"}),`
`,e.jsx(t.p,{children:"A React hook that returns a live-updating relative time string in Dutch."}),`
`,e.jsx(t.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`import { useRelativeTime } from "@amsterdam/design-system-react";

const MyComponent = ({ createdAt }: { createdAt: Date }) => {
  const label = useRelativeTime(createdAt);

  return <time dateTime={createdAt.toISOString()}>{label}</time>;
};
`})}),`
`,e.jsx(t.h2,{id:"output-examples",children:"Output examples"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{children:"Time elapsed"}),e.jsx(t.th,{children:"Output"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"Less than 1 minute"}),e.jsx(t.td,{children:"minder dan 1 minuut geleden"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"1 minute"}),e.jsx(t.td,{children:"1 minuut geleden"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"5 minutes"}),e.jsx(t.td,{children:"5 minuten geleden"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"1 hour"}),e.jsx(t.td,{children:"1 uur geleden"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"3 hours"}),e.jsx(t.td,{children:"3 uur geleden"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"1 day"}),e.jsx(t.td,{children:"1 dag geleden"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"4 days"}),e.jsx(t.td,{children:"4 dagen geleden"})]})]})]}),`
`,e.jsx(t.h2,{id:"guidelines",children:"Guidelines"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["Accepts a ",e.jsx(t.code,{children:"Date"})," object or a numeric timestamp (milliseconds since epoch)."]}),`
`,e.jsx(t.li,{children:"Updates automatically every 30 seconds."}),`
`,e.jsxs(t.li,{children:["Intended for recent timestamps. For older dates, consider using ",e.jsx(t.code,{children:"formatDate"})," instead."]}),`
`]}),`
`,e.jsx(t.h2,{id:"preview",children:"Preview"}),`
`,e.jsx(r,{})]})}function j(n={}){const{wrapper:t}={...d(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}export{j as default};
