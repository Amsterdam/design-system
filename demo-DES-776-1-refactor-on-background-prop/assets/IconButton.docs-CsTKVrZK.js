import{j as n}from"./jsx-runtime-BlAj40OV.js";import{useMDXComponents as s}from"./index-BI1Biiay.js";import{ae as l,ak as i,al as a,am as c,an as r}from"./index-Wm0Op7s6.js";import{I as d,C as h,a as u,L as m,b as p,c as x,d as j}from"./IconButton.stories-BstZB9Iw.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-BP4TiU4j.js";import"../sb-preview/runtime.js";import"./index-BU4L-DQy.js";import"./index-D-8MO0q_.js";import"./index-nrpnv_Jx.js";import"./index-DrFu-skq.js";import"./index.esm-Bsc2owIZ.js";import"./decorators-CweBkPI6.js";import"./IconButton-BF_rt2gy.js";import"./clsx-B-dksMZM.js";import"./Icon-msbkstIT.js";const b=`<!-- @license CC0-1.0 -->

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
`,n.jsx(l,{of:d}),`
`,n.jsx(i,{children:b}),`
`,n.jsx(a,{}),`
`,n.jsx(c,{}),`
`,n.jsx(e.h2,{id:"examples",children:"Examples"}),`
`,n.jsx(e.h3,{id:"on-a-coloured-background",children:"On a Coloured Background"}),`
`,n.jsxs(e.p,{children:[`An ico button on a coloured background must adjust its foreground colour to provide enough contrast.
We have lighter and darker background colours, and icon buttons behave differently on each.
Stijlweb shows `,n.jsx(e.a,{href:"https://amsterdam.nl/stijlweb/basiselementen/kleuren/",rel:"nofollow",children:"which colours suit which backgrounds"}),`.
Although they only address headings and paragraphs, the same principle applies to icon buttons.`]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Set the ",n.jsx(e.code,{children:"contrastColor"}),` prop on a yellow, orange or green background.
It will make the icon button black.`]}),`
`,n.jsxs(e.li,{children:["Use the ",n.jsx(e.code,{children:"inverseColor"}),` prop on a purple or dark blue background.
It will make the icon button white.`]}),`
`,n.jsx(e.li,{children:"On the other background colours, choose either one, but do so consistently."}),`
`]}),`
`,n.jsx(e.h4,{id:"contrast-colour",children:"Contrast Colour"}),`
`,n.jsx(r,{of:h}),`
`,n.jsx(e.h4,{id:"inverse-colour",children:"Inverse Colour"}),`
`,n.jsx(r,{of:u}),`
`,n.jsx(e.h3,{id:"level-3",children:"Level 3"}),`
`,n.jsx(r,{of:m}),`
`,n.jsx(e.h3,{id:"level-4",children:"Level 4"}),`
`,n.jsx(r,{of:p}),`
`,n.jsx(e.h3,{id:"level-5",children:"Level 5"}),`
`,n.jsx(r,{of:x}),`
`,n.jsx(e.h3,{id:"level-6",children:"Level 6"}),`
`,n.jsx(r,{of:j})]})}function X(o={}){const{wrapper:e}={...s(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(t,{...o})}):t(o)}export{X as default};
