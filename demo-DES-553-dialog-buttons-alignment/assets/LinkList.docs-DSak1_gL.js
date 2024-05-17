import{j as n}from"./jsx-runtime-Nms4Y4qS.js";import{useMDXComponents as r}from"./index-DlpNa54Y.js";import{M as l,d as a,P as c,f as o,e as h}from"./index-D9XtKqPg.js";import{L as d,C as m,S as p,a as s,O as x,b as u}from"./LinkList.stories-DWoNT6GN.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-YwA5o6sN.js";import"../sb-preview/runtime.js";import"./index-B8XB3FuZ.js";import"./index-COebWTXQ.js";import"./index-B8K4vdXH.js";import"./index-DrFu-skq.js";import"./index.esm-DQkeu4as.js";import"./exampleContent-CRK3_7Hv.js";import"./LinkList-Cj5_Zz5z.js";import"./clsx-B-dksMZM.js";import"./Icon-tKAGJH_4.js";const f=`<!-- @license CC0-1.0 -->

# Link List

A collection of related links.

## Design

Every list item starts with a chevron.
It emphasizes the list structure and thematic coherence.
The chevron is part of the link.
Therefore, it is blue and clickable.

## Guidelines

Use a Link List to present multiple links within a theme.

For additional guidelines, refer to the [Link](/docs/components-navigation-link--docs) component.
`;function t(i){const e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",...r(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(l,{of:d}),`
`,n.jsx(a,{children:f}),`
`,n.jsx(e.h2,{id:"examples",children:"Examples"}),`
`,n.jsx(e.h3,{id:"default",children:"Default"}),`
`,n.jsxs(e.p,{children:[`The Link List has no props.
It is just a container for the items, rendering a `,n.jsx(e.code,{children:"<ul>"})," element."]}),`
`,n.jsx(c,{}),`
`,n.jsx(e.h3,{id:"custom-icons",children:"Custom Icons"}),`
`,n.jsx(e.p,{children:`Replace the list icon with a more meaningful one to help understand a link more quickly or easily.
Avoid using both semantic and list icons in the same list.`}),`
`,n.jsx(o,{of:m}),`
`,n.jsx(e.h3,{id:"small-text",children:"Small Text"}),`
`,n.jsxs(e.p,{children:["In the ",n.jsx(e.a,{href:"/docs/components-containers-footer--docs",children:"Footer"}),`, we use small text, also for lists.
Specify this for each item in the list.`]}),`
`,n.jsx(o,{of:p}),`
`,n.jsx(e.h3,{id:"link",children:"Link"}),`
`,n.jsxs(e.p,{children:[`This example of a single link allows using the controls below.
The Link List Link renders both the `,n.jsx(e.code,{children:"<li>"})," and ",n.jsx(e.code,{children:"<a>"}),` elements.
Any attributes and the `,n.jsx(e.code,{children:"ref"})," are passed on to the ",n.jsx(e.code,{children:"<a>"})," element."]}),`
`,n.jsx(o,{of:s}),`
`,n.jsx(h,{of:s}),`
`,n.jsx(e.h3,{id:"on-a-coloured-background",children:"On a Coloured Background"}),`
`,n.jsx(e.p,{children:"On a dark background, the link colour is white."}),`
`,n.jsx(e.p,{children:"Specify the background context for each link in the list – the link is responsible for its own colors."}),`
`,n.jsx(o,{of:x}),`
`,n.jsx(e.p,{children:"The same goes for a light (not white) background color. The link colour is black here."}),`
`,n.jsx(o,{of:u})]})}function B(i={}){const{wrapper:e}={...r(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(t,{...i})}):t(i)}export{B as default};
