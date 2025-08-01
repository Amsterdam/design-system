import{j as e}from"./iframe-_olaG_4U.js";import{useMDXComponents as i}from"./index-lW7CEHaP.js";import{M as o}from"./blocks-DG8eTlyU.js";import"./index-CyZqUWL_.js";/*@license CC0-1.0*/function s(n){const t={code:"code",h1:"h1",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...i(),...n.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(o,{title:"Brand/Design Tokens/Focus"}),`
`,e.jsx(t.h1,{id:"focus",children:"Focus"}),`
`,e.jsx(t.h2,{id:"token",children:"Token"}),`
`,e.jsx(t.p,{children:`Click on the table, then hit the Tab key two times to show the outline on the link and button.
On a touch device, use a screen reader or keyboard to place focus.`}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{style:{textAlign:"left"},children:"CSS variable"}),e.jsx(t.th,{style:{textAlign:"center"},children:"Value"}),e.jsx(t.th,{style:{textAlign:"left"},children:"Example link"}),e.jsx(t.th,{children:"Example button"})]})}),e.jsx(t.tbody,{children:e.jsxs(t.tr,{children:[e.jsx(t.td,{style:{textAlign:"left"},children:e.jsx(t.code,{children:"var(--ams-focus-outline-offset)"})}),e.jsx(t.td,{style:{textAlign:"center"},children:"0.125rem"}),e.jsx(t.td,{style:{textAlign:"left"},children:e.jsx("a",{href:"#",className:"ams-link",children:"A random link text"})}),e.jsx(t.td,{children:e.jsx("button",{className:"ams-button ams-button--primary",children:"Button"})})]})})]}),`
`,e.jsx(t.h2,{id:"design",children:"Design"}),`
`,e.jsx(t.p,{children:`We use the standard focus indicator of the web browsers.
We only adjust the focus outline with an offset of 2 pixels to increase contrast.`}),`
`,e.jsx(t.h2,{id:"guidelines",children:"Guidelines"}),`
`,e.jsx(t.p,{children:"When setting up a page, ensure that the interactive elements are in a logical order, usually from top to bottom and from left to right."})]})}function a(n={}){const{wrapper:t}={...i(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}export{a as default};
