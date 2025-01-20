import{j as e}from"./jsx-runtime-z8MfsBtr.js";import{useMDXComponents as r}from"./index-BAvqEBP-.js";import{ae as l,aq as a,ar as c,at as s,as as h}from"./index-B-hUfShA.js";import{L as d,C as m,S as p,a as t,b as u,I as x}from"./LinkList.stories-BCxnzc6-.js";import"./index-C9rmetsa.js";import"./index-D7uoVdV3.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-DPKmBkne.js";import"../sb-preview/runtime.js";import"./index-D-OUEn-9.js";import"./index-Cu4lwwaE.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";import"./index.esm-X3U7dYaT.js";import"./exampleContent-CpGgN1Hc.js";import"./LinkList-CJCFlrwB.js";import"./clsx-B-dksMZM.js";import"./Icon-C3wdI358.js";const j=`<!-- @license CC0-1.0 -->

# Link List

A collection of related links.

## Design

Every list item starts with a chevron.
It emphasizes the list structure and thematic coherence.
The chevron is part of the link.
Therefore, it is blue and clickable.

## Guidelines

- Use a Link List to present multiple links within a theme.
- For additional guidelines, refer to the [Link](/docs/components-navigation-link--docs) component.
`;/*@license CC0-1.0*/function i(o){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",ul:"ul",...r(),...o.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(l,{of:d}),`
`,e.jsx(a,{children:j}),`
`,e.jsx(c,{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"custom-icons",children:"Custom icons"}),`
`,e.jsx(n.p,{children:`Replace the list icon with a more meaningful one to help understand a link more quickly or easily.
Avoid using both semantic and list icons in the same list.`}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(n.h3,{id:"small-text",children:"Small text"}),`
`,e.jsxs(n.p,{children:["In the ",e.jsx(n.a,{href:"/docs/components-containers-footer--docs",children:"Footer"}),`, we use small text, also for lists.
Specify this for each item in the list.`]}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(n.h3,{id:"link",children:"Link"}),`
`,e.jsxs(n.p,{children:[`This example of a single link allows using the controls below.
The Link List Link renders both the `,e.jsx(n.code,{children:"<li>"})," and ",e.jsx(n.code,{children:"<a>"}),` elements.
Any attributes and the `,e.jsx(n.code,{children:"ref"})," are passed on to the ",e.jsx(n.code,{children:"<a>"})," element."]}),`
`,e.jsx(s,{of:t}),`
`,e.jsx(h,{of:t}),`
`,e.jsx(n.h3,{id:"on-a-coloured-background",children:"On a coloured background"}),`
`,e.jsxs(n.p,{children:[`A link on a coloured background must adjust its text colour to provide enough contrast.
We have lighter and darker background colours, and links behave differently on each.
Stijlweb shows `,e.jsx(n.a,{href:"https://amsterdam.nl/stijlweb/basiselementen/kleuren/",rel:"nofollow",children:"which colours suit which backgrounds"}),`.
Although they only address headings and paragraphs, the same principle applies to links.`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Set the ",e.jsx(n.code,{children:"color"})," prop to ",e.jsx(n.code,{children:"contrast"}),` on a yellow, orange or green background.
It will make the link black.`]}),`
`,e.jsxs(n.li,{children:["Use the ",e.jsx(n.code,{children:"color"})," prop to ",e.jsx(n.code,{children:"inverse"}),` on a purple or dark blue background.
It will make the link white.`]}),`
`,e.jsx(n.li,{children:"On the other background colours, choose either one, but do so consistently."}),`
`,e.jsx(n.li,{children:`There is no current scenario to set both properties at the same time.
For now, the 'inverse' appearance will prevail.`}),`
`]}),`
`,e.jsx(n.h4,{id:"contrast-colour",children:"Contrast colour"}),`
`,e.jsx(s,{of:u}),`
`,e.jsx(n.h4,{id:"inverse-colour",children:"Inverse colour"}),`
`,e.jsx(s,{of:x})]})}function X(o={}){const{wrapper:n}={...r(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(i,{...o})}):i(o)}export{X as default};
