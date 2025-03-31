import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as r}from"./index-CxbY7dAs.js";import{M as l,h as a,P as c,j as t,i as d}from"./index-DKLvC7N8.js";import{L as h,C as m,S as u,a as i,b as x,I as p}from"./LinkList.stories-BTpKPqrK.js";import"./index-yBjzXJbu.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-DIAwsg51.js";import"./index-fNjTmf9T.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index.esm-Bv5DmutW.js";import"./exampleContent-PGFPgakh.js";import"./LinkList-CfzBl3sK.js";import"./clsx-B-dksMZM.js";import"./Icon-BiLXnzv6.js";const j=`<!-- @license CC0-1.0 -->

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
`;/*@license CC0-1.0*/function s(o){const e={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",ul:"ul",...r(),...o.components};return n.jsxs(n.Fragment,{children:[`
`,`
`,n.jsx(l,{of:h}),`
`,n.jsx(a,{children:j}),`
`,n.jsx(c,{}),`
`,n.jsx(e.h2,{id:"examples",children:"Examples"}),`
`,n.jsx(e.h3,{id:"custom-icons",children:"Custom icons"}),`
`,n.jsx(e.p,{children:`Replace the list icon with a more meaningful one to help understand a link more quickly or easily.
Avoid using both semantic and list icons in the same list.`}),`
`,n.jsx(t,{of:m}),`
`,n.jsx(e.h3,{id:"small-text",children:"Small text"}),`
`,n.jsxs(e.p,{children:["In the ",n.jsx(e.a,{href:"/docs/components-containers-footer--docs",children:"Footer"}),`, we use small text, also for lists.
Specify this for each item in the list.`]}),`
`,n.jsx(t,{of:u}),`
`,n.jsx(e.h3,{id:"link",children:"Link"}),`
`,n.jsxs(e.p,{children:[`This example of a single link allows using the controls below.
The Link List Link renders both the `,n.jsx(e.code,{children:"<li>"})," and ",n.jsx(e.code,{children:"<a>"}),` elements.
Any attributes and the `,n.jsx(e.code,{children:"ref"})," are passed on to the ",n.jsx(e.code,{children:"<a>"})," element."]}),`
`,n.jsx(t,{of:i}),`
`,n.jsx(d,{of:i}),`
`,n.jsx(e.h3,{id:"on-a-coloured-background",children:"On a coloured background"}),`
`,n.jsx(e.p,{children:`A link on a coloured background must adjust its text colour to provide enough contrast.
We have lighter and darker background colours, and links behave differently on each.`}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Set the ",n.jsx(e.code,{children:"color"})," prop to ",n.jsx(e.code,{children:"contrast"}),` on a azure, lime, orange or yellow background.
It will make the Link black.`]}),`
`,n.jsxs(e.li,{children:["Set the ",n.jsx(e.code,{children:"color"})," prop to ",n.jsx(e.code,{children:"inverse"}),` on a blue, green, magenta or purple background.
It will make the Link white.`]}),`
`]}),`
`,n.jsx(e.h4,{id:"contrast-colour",children:"Contrast colour"}),`
`,n.jsx(t,{of:x}),`
`,n.jsx(e.h4,{id:"inverse-colour",children:"Inverse colour"}),`
`,n.jsx(t,{of:p})]})}function F(o={}){const{wrapper:e}={...r(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(s,{...o})}):s(o)}export{F as default};
