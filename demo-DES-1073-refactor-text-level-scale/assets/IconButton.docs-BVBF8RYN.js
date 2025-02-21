import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as s}from"./index-1Ha5aU2j.js";import{M as i,e as a,P as l,f as c,h as r}from"./index-C6fez6-a.js";import{I as d,C as h,a as u}from"./IconButton.stories-CAnx4fRE.js";import"./index-yBjzXJbu.js";import"./index-C0MU9AHG.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CRanc9M-.js";import"./index-IE9ObSwG.js";import"./index-Cu4lwwaE.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./Icon-Bimwd819.js";import"./clsx-B-dksMZM.js";import"./index.esm-DvoLfDtE.js";import"./IconButton-DeSQUs08.js";const p=`<!-- @license CC0-1.0 -->

# Icon Button

A button containing only an icon.

## Guidelines

- Use this button only if the icon is entirely clear and understandable.
  Many icons are interpreted differently by different users.
  Only use universally recognized icons, such as a close icon or a play icon.
- Provide a label text that describes what the button does for screen reader users.

## Relevant WCAG requirements

The Icon Button follows [the same requirements and guidelines as a regular button](/docs/components-buttons-button--docs).
`;/*@license CC0-1.0*/function t(o){const e={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",ul:"ul",...s(),...o.components};return n.jsxs(n.Fragment,{children:[`
`,`
`,n.jsx(i,{of:d}),`
`,n.jsx(a,{children:p}),`
`,n.jsx(l,{}),`
`,n.jsx(c,{}),`
`,n.jsx(e.h2,{id:"examples",children:"Examples"}),`
`,n.jsx(e.h3,{id:"on-a-coloured-background",children:"On a coloured background"}),`
`,n.jsxs(e.p,{children:[`An Icon Button on a coloured background must adjust its foreground colour to provide enough contrast.
We have lighter and darker background colours, and Icon Buttons behave differently on each.
Stijlweb shows `,n.jsx(e.a,{href:"https://amsterdam.nl/stijlweb/basiselementen/kleuren/",rel:"nofollow",children:"which colours suit which backgrounds"}),`.
Although they only address headings and paragraphs, the same principle applies to Icon Buttons.`]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Set the ",n.jsx(e.code,{children:"color"})," prop to ",n.jsx(e.code,{children:"contrast"}),` on a yellow, orange or green background.
It will make the Icon Button black.`]}),`
`,n.jsxs(e.li,{children:["Set the ",n.jsx(e.code,{children:"color"})," prop to ",n.jsx(e.code,{children:"inverse"}),` on a purple or dark blue background.
It will make the Icon Button white.`]}),`
`,n.jsx(e.li,{children:"On the other background colours, choose either one, but do so consistently."}),`
`,n.jsx(e.li,{children:`There is no current scenario to set both properties at the same time.
For now, the 'inverse' appearance will prevail.`}),`
`]}),`
`,n.jsx(e.h4,{id:"contrast-colour",children:"Contrast colour"}),`
`,n.jsx(r,{of:h}),`
`,n.jsx(e.h4,{id:"inverse-colour",children:"Inverse colour"}),`
`,n.jsx(r,{of:u})]})}function E(o={}){const{wrapper:e}={...s(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(t,{...o})}):t(o)}export{E as default};
