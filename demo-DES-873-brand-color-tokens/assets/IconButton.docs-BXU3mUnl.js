import{j as e}from"./jsx-runtime-z8MfsBtr.js";import{useMDXComponents as s}from"./index-BAvqEBP-.js";import{M as l,e as i,P as a,f as c,h as r}from"./index-Czbx6FiS.js";import{I as d,L as h,a as u,b as p,c as m,C as x,d as j}from"./IconButton.stories-dNBisDPD.js";import"./index-C9rmetsa.js";import"./index-D7uoVdV3.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-3JXVgrSz.js";import"./index-D-OUEn-9.js";import"./index-Cu4lwwaE.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";import"./index.esm-CQm4RKjO.js";import"./IconButton-CxexsjjF.js";import"./clsx-B-dksMZM.js";import"./Icon-hgTynAJE.js";const b=`<!-- @license CC0-1.0 -->

# Icon Button

A button containing only an icon.

## Guidelines

- Use this button only if the icon is entirely clear and understandable.
  Many icons are interpreted differently by different users.
  Only use universally recognized icons, such as a close icon or a play icon.
- Provide a label text that describes what the button does for screen reader users.

## Relevant WCAG requirements

The Icon Button follows [the same requirements and guidelines as a regular button](/docs/components-buttons-button--docs).
`;/*@license CC0-1.0*/function t(o){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",ul:"ul",...s(),...o.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(l,{of:d}),`
`,e.jsx(i,{children:b}),`
`,e.jsx(a,{}),`
`,e.jsx(c,{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"level-3",children:"Level 3"}),`
`,e.jsx(r,{of:h}),`
`,e.jsx(n.h3,{id:"level-4",children:"Level 4"}),`
`,e.jsx(r,{of:u}),`
`,e.jsx(n.h3,{id:"level-5",children:"Level 5"}),`
`,e.jsx(r,{of:p}),`
`,e.jsx(n.h3,{id:"level-6",children:"Level 6"}),`
`,e.jsx(r,{of:m}),`
`,e.jsx(n.h3,{id:"on-a-coloured-background",children:"On a coloured background"}),`
`,e.jsxs(n.p,{children:[`An Icon Button on a coloured background must adjust its foreground colour to provide enough contrast.
We have lighter and darker background colours, and Icon Buttons behave differently on each.
Stijlweb shows `,e.jsx(n.a,{href:"https://amsterdam.nl/stijlweb/basiselementen/kleuren/",rel:"nofollow",children:"which colours suit which backgrounds"}),`.
Although they only address headings and paragraphs, the same principle applies to Icon Buttons.`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Set the ",e.jsx(n.code,{children:"contrastColor"}),` prop on a yellow, orange or green background.
It will make the Icon Button black.`]}),`
`,e.jsxs(n.li,{children:["Use the ",e.jsx(n.code,{children:"inverseColor"}),` prop on a purple or dark blue background.
It will make the Icon Button white.`]}),`
`,e.jsx(n.li,{children:"On the other background colours, choose either one, but do so consistently."}),`
`,e.jsx(n.li,{children:`There is no current scenario to set both properties at the same time.
For now, the 'inverse' appearance will prevail.`}),`
`]}),`
`,e.jsx(n.h4,{id:"contrast-colour",children:"Contrast colour"}),`
`,e.jsx(r,{of:x}),`
`,e.jsx(n.h4,{id:"inverse-colour",children:"Inverse colour"}),`
`,e.jsx(r,{of:j})]})}function R(o={}){const{wrapper:n}={...s(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}export{R as default};
