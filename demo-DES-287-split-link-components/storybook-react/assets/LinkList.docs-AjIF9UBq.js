import{j as n}from"./index.esm-XR9-nNnb.js";import{M as r,d as a,P as c,f as i}from"./index-e-xQfx4d.js";import{L as l,S as h,C as m,O as d}from"./LinkList.stories-8OdF3oHB.js";import{useMDXComponents as o}from"./index-_VGcpBFS.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./extends-dGVwEr9R.js";import"./iframe-01kI9a-a.js";import"../sb-preview/runtime.js";import"./index-jmm5gWkb.js";import"./index-ogXoivrg.js";import"./index-MVbLLYTZ.js";import"./index-PPLHz8o0.js";import"./exampleContent-GJvLNqvD.js";const p=`# Link List

A collection of related links.

## Design

Every list item starts with a chevron.
It emphasizes the list structure and thematic coherence.
The chevron is part of the link.
Therefore, it is blue and clickable.

## Guidelines

Use a Link List to present multiple links within a theme.

For additional guidelines, refer to the [Link](?path=/docs/navigation-link--docs) component.
`;function s(t){const e=Object.assign({h2:"h2",h3:"h3",p:"p",a:"a"},o(),t.components);return n.jsxs(n.Fragment,{children:[n.jsx(r,{of:l}),`
`,n.jsx(a,{children:p}),`
`,n.jsx(e.h2,{id:"examples",children:"Examples"}),`
`,n.jsx(e.h3,{id:"default",children:"Default"}),`
`,n.jsx(c,{}),`
`,n.jsx(e.h3,{id:"small-text",children:"Small Text"}),`
`,n.jsxs(e.p,{children:["In the ",n.jsx(e.a,{href:"?path=/docs/react_containers-footer--docs",children:"Footer"}),`, we use small text, also for lists.
Specify this for each item in the list.`]}),`
`,n.jsx(i,{of:h}),`
`,n.jsx(e.h3,{id:"with-custom-icons",children:"With Custom Icons"}),`
`,n.jsx(e.p,{children:`A meaningful icon can help understand a link more quickly or easily.
In that case, replace the list icon.
Avoid using both meaningful and list icons in the same list.`}),`
`,n.jsx(i,{of:m}),`
`,n.jsx(e.h3,{id:"on-dark-background",children:"On Dark Background"}),`
`,n.jsx(e.p,{children:`For a list on a dark background color, specify this for each link in the list.
The link remains responsible for using appropriate text colors.`}),`
`,n.jsx(i,{of:d})]})}function O(t={}){const{wrapper:e}=Object.assign({},o(),t.components);return e?n.jsx(e,Object.assign({},t,{children:n.jsx(s,t)})):s(t)}export{O as default};
