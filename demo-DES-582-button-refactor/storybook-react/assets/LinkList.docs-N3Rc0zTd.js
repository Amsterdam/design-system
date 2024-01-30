import{j as n}from"./index.esm-JtMe0HO0.js";import{M as a,d as l,P as c,f as i,e as h}from"./index-zveacI6K.js";import{L as d,C as m,S as x,a as t,O as p,b as u}from"./LinkList.stories-ZnEETouU.js";import{useMDXComponents as r}from"./index-_VGcpBFS.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./iframe-OXZ6E_Vx.js";import"../sb-preview/runtime.js";import"./index-jmm5gWkb.js";import"./index-ogXoivrg.js";import"./index-MVbLLYTZ.js";import"./index-PPLHz8o0.js";import"./exampleContent-GJvLNqvD.js";const j=`# Link List

A collection of related links.

## Design

Every list item starts with a chevron.
It emphasizes the list structure and thematic coherence.
The chevron is part of the link.
Therefore, it is blue and clickable.

## Guidelines

Use a Link List to present multiple links within a theme.

For additional guidelines, refer to the [Link](?path=/docs/navigation-link--docs) component.
`;function o(s){const e=Object.assign({h2:"h2",h3:"h3",p:"p",code:"code",a:"a"},r(),s.components);return n.jsxs(n.Fragment,{children:[n.jsx(a,{of:d}),`
`,n.jsx(l,{children:j}),`
`,n.jsx(e.h2,{id:"examples",children:"Examples"}),`
`,n.jsx(e.h3,{id:"default",children:"Default"}),`
`,n.jsxs(e.p,{children:[`The Link List has no props.
It is just a container for the items, rendering a `,n.jsx(e.code,{children:"<ul>"})," element."]}),`
`,n.jsx(c,{}),`
`,n.jsx(e.h3,{id:"custom-icons",children:"Custom Icons"}),`
`,n.jsx(e.p,{children:`Replace the list icon with a more meaningful one to help understand a link more quickly or easily.
Avoid using both semantic and list icons in the same list.`}),`
`,n.jsx(i,{of:m}),`
`,n.jsx(e.h3,{id:"small-text",children:"Small Text"}),`
`,n.jsxs(e.p,{children:["In the ",n.jsx(e.a,{href:"?path=/docs/react_containers-footer--docs",children:"Footer"}),`, we use small text, also for lists.
Specify this for each item in the list.`]}),`
`,n.jsx(i,{of:x}),`
`,n.jsx(e.h3,{id:"link",children:"Link"}),`
`,n.jsxs(e.p,{children:[`This example of a single link allows using the controls below.
The Link List Link renders both the `,n.jsx(e.code,{children:"<li>"})," and ",n.jsx(e.code,{children:"<a>"}),` elements.
Any attributes and the `,n.jsx(e.code,{children:"ref"})," are passed on to the ",n.jsx(e.code,{children:"<a>"})," element."]}),`
`,n.jsx(i,{of:t}),`
`,n.jsx(h,{of:t}),`
`,n.jsx(e.h3,{id:"on-a-coloured-background",children:"On a Coloured Background"}),`
`,n.jsx(e.p,{children:"On a dark background, the link colour is white."}),`
`,n.jsx(e.p,{children:"Specify the background context for each link in the list – the link is responsible for its own colors."}),`
`,n.jsx(i,{of:p}),`
`,n.jsx(e.p,{children:"The same goes for a light (not white) background color. The link colour is black here."}),`
`,n.jsx(i,{of:u})]})}function S(s={}){const{wrapper:e}=Object.assign({},r(),s.components);return e?n.jsx(e,Object.assign({},s,{children:n.jsx(o,s)})):o(s)}export{S as default};
