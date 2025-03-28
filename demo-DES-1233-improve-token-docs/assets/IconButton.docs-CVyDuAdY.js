import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as s}from"./index-CxbY7dAs.js";import{M as i,h as a,P as c,i as l,j as r}from"./index-u0yN0KVy.js";import{I as d,C as u,a as h}from"./IconButton.stories-CZ0MLCSm.js";import"./index-yBjzXJbu.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CvdwvIdr.js";import"./index-fNjTmf9T.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./Icon-BiLXnzv6.js";import"./clsx-B-dksMZM.js";import"./index.esm-DvoLfDtE.js";import"./IconButton-CMK-FeQt.js";const m=`<!-- @license CC0-1.0 -->

# Icon Button

A button containing only an icon.

## Guidelines

- Use this button only if the icon is entirely clear and understandable.
  Many icons are interpreted differently by different users.
  Only use universally recognized icons, such as a close icon or a play icon.
- Provide a label text that describes what the button does for screen reader users.

## Relevant WCAG requirements

The Icon Button follows [the same requirements and guidelines as a regular button](/docs/components-buttons-button--docs).
`;/*@license CC0-1.0*/function t(e){const o={code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",ul:"ul",...s(),...e.components};return n.jsxs(n.Fragment,{children:[`
`,`
`,n.jsx(i,{of:d}),`
`,n.jsx(a,{children:m}),`
`,n.jsx(c,{}),`
`,n.jsx(l,{}),`
`,n.jsx(o.h2,{id:"examples",children:"Examples"}),`
`,n.jsx(o.h3,{id:"on-a-coloured-background",children:"On a coloured background"}),`
`,n.jsx(o.p,{children:`An Icon Button on a coloured background must adjust its foreground colour to provide enough contrast.
We have lighter and darker background colours, and Icon Buttons behave differently on each.`}),`
`,n.jsxs(o.ul,{children:[`
`,n.jsxs(o.li,{children:["Set the ",n.jsx(o.code,{children:"color"})," prop to ",n.jsx(o.code,{children:"contrast"}),` on a azure, lime, orange or yellow background.
It will make the Icon Button black.`]}),`
`,n.jsxs(o.li,{children:["Set the ",n.jsx(o.code,{children:"color"})," prop to ",n.jsx(o.code,{children:"inverse"}),` on a blue, green, magenta or purple background.
It will make the Icon Button white.`]}),`
`]}),`
`,n.jsx(o.h4,{id:"contrast-colour",children:"Contrast colour"}),`
`,n.jsx(r,{of:u}),`
`,n.jsx(o.h4,{id:"inverse-colour",children:"Inverse colour"}),`
`,n.jsx(r,{of:h})]})}function D(e={}){const{wrapper:o}={...s(),...e.components};return o?n.jsx(o,{...e,children:n.jsx(t,{...e})}):t(e)}export{D as default};
