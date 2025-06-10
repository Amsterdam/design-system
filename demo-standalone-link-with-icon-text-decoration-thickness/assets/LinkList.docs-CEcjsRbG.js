import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as r}from"./index-CxbY7dAs.js";import{M as a,e as l,P as c,h as t,f as h}from"./index-CvkcCW1u.js";import{L as d,C as m,S as u,a as s,b as p,I as x}from"./LinkList.stories-DCfYwxJ2.js";import"./index-yBjzXJbu.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-Myo1Y4Fl.js";import"./index-fNjTmf9T.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index.esm-jhuYF6FN.js";import"./exampleContent-r-zRGsZY.js";import"./LinkList-CY5A71mH.js";import"./clsx-B-dksMZM.js";import"./Icon-BBW_x4VP.js";const k=`<!-- @license CC0-1.0 -->

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
`;/*@license CC0-1.0*/function i(o){const e={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",...r(),...o.components};return n.jsxs(n.Fragment,{children:[`
`,`
`,n.jsx(a,{of:d}),`
`,n.jsx(l,{children:k}),`
`,n.jsx(c,{}),`
`,n.jsx(e.h2,{id:"examples",children:"Examples"}),`
`,n.jsx(e.h3,{id:"custom-icons",children:"Custom icons"}),`
`,n.jsx(e.p,{children:`Replace the list icon with a more meaningful one to help understand a link more quickly or easily.
Avoid using both semantic and list icons in the same list.`}),`
`,n.jsx(t,{of:m}),`
`,n.jsx(e.h3,{id:"small-text",children:"Small text"}),`
`,n.jsxs(e.p,{children:["In the ",n.jsx(e.a,{href:"/docs/components-containers-page-footer--docs",children:"Page Footer"}),`, we use small text, also for lists.
Specify this for each item in the list.`]}),`
`,n.jsx(t,{of:u}),`
`,n.jsx(e.h3,{id:"link",children:"Link"}),`
`,n.jsxs(e.p,{children:[`This example of a single link allows using the controls below.
The Link List Link renders both the `,n.jsx(e.code,{children:"<li>"})," and ",n.jsx(e.code,{children:"<a>"}),` elements.
Any attributes and the `,n.jsx(e.code,{children:"ref"})," are passed on to the ",n.jsx(e.code,{children:"<a>"})," element."]}),`
`,n.jsx(t,{of:s}),`
`,n.jsx(h,{of:s}),`
`,n.jsx(e.h3,{id:"on-a-coloured-background",children:"On a coloured background"}),`
`,n.jsxs(e.p,{children:["A Link on a coloured background must set ",n.jsx(e.a,{href:"?path=/docs/brand-design-tokens-colour--docs#pairing-foreground-with-background-colours",children:"the correct text colour"})," to provide enough contrast.We have lighter and darker background colours, and links behave differently on each."]}),`
`,n.jsx(e.h4,{id:"contrast-colour",children:"Contrast colour"}),`
`,n.jsx(e.p,{children:`Use the contrast colour on a lime, orange or yellow background.
It will make the Link black.`}),`
`,n.jsx(t,{of:p}),`
`,n.jsx(e.h4,{id:"inverse-colour",children:"Inverse colour"}),`
`,n.jsx(e.p,{children:`Use the inverse colour on an azure, blue, green, magenta or purple background.
It will make the Link white.`}),`
`,n.jsx(t,{of:x})]})}function F(o={}){const{wrapper:e}={...r(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(i,{...o})}):i(o)}export{F as default};
