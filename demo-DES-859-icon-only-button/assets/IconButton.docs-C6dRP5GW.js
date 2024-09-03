import{j as e}from"./jsx-runtime-BlAj40OV.js";import{useMDXComponents as s}from"./index-BI1Biiay.js";import{ae as i,ak as l,al as a,am as c,an as r}from"./index-DUZWP2nT.js";import{I as d,L as h,a as u,b as p,c as m,C as x,d as j}from"./IconButton.stories-5j470m0y.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-BLAc8xs9.js";import"../sb-preview/runtime.js";import"./index-BU4L-DQy.js";import"./index-D-8MO0q_.js";import"./index-nrpnv_Jx.js";import"./index-DrFu-skq.js";import"./index.esm-Bsc2owIZ.js";import"./decorators-CweBkPI6.js";import"./IconButton-BgcGyAbu.js";import"./clsx-B-dksMZM.js";import"./Icon-msbkstIT.js";const b=`<!-- @license CC0-1.0 -->

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
`,e.jsx(i,{of:d}),`
`,e.jsx(l,{children:b}),`
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
`,e.jsx(n.h3,{id:"on-a-coloured-background",children:"On a Coloured Background"}),`
`,e.jsxs(n.p,{children:[`An icon button on a coloured background must adjust its foreground colour to provide enough contrast.
We have lighter and darker background colours, and icon buttons behave differently on each.
Stijlweb shows `,e.jsx(n.a,{href:"https://amsterdam.nl/stijlweb/basiselementen/kleuren/",rel:"nofollow",children:"which colours suit which backgrounds"}),`.
Although they only address headings and paragraphs, the same principle applies to icon buttons.`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Set the ",e.jsx(n.code,{children:"contrastColor"}),` prop on a yellow, orange or green background.
It will make the icon button black.`]}),`
`,e.jsxs(n.li,{children:["Use the ",e.jsx(n.code,{children:"inverseColor"}),` prop on a purple or dark blue background.
It will make the icon button white.`]}),`
`,e.jsx(n.li,{children:"On the other background colours, choose either one, but do so consistently."}),`
`,e.jsx(n.li,{children:`There is no current scenario to set both properties at the same time.
For now, the 'inverse' appearance will prevail.`}),`
`]}),`
`,e.jsx(n.h4,{id:"contrast-colour",children:"Contrast Colour"}),`
`,e.jsx(r,{of:x}),`
`,e.jsx(n.h4,{id:"inverse-colour",children:"Inverse Colour"}),`
`,e.jsx(r,{of:j})]})}function X(o={}){const{wrapper:n}={...s(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}export{X as default};
