import{j as n}from"./iframe-BJ_Ctx3d.js";import{useMDXComponents as r}from"./index-1Go8Ip3V.js";import{M as a,c as l,P as c,f as t,e as d}from"./blocks-BpmbR3D5.js";import{L as h,C as u,S as m,a as s,b as x,I as p}from"./LinkList.stories-0DORSf9E.js";import"./index-CO-ww0x-.js";import"./exampleContent-B7cDFRSs.js";import"./LinkList-fGl14wMO.js";import"./Icon-DPHuu20a.js";const k=`<!-- @license CC0-1.0 -->

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
`,n.jsx(a,{of:h}),`
`,n.jsx(l,{children:k}),`
`,n.jsx(c,{}),`
`,n.jsx(e.h2,{id:"examples",children:"Examples"}),`
`,n.jsx(e.h3,{id:"custom-icons",children:"Custom icons"}),`
`,n.jsx(e.p,{children:`Replace the list icon with a more meaningful one to help understand a link more quickly or easily.
Avoid using both semantic and list icons in the same list.`}),`
`,n.jsx(t,{of:u}),`
`,n.jsx(e.h3,{id:"small-text",children:"Small text"}),`
`,n.jsx(e.p,{children:`We use a smaller font size for text in a Figure Caption and for metadata like dates or categories.
When using a list in small text, set the prop for each item in the list.`}),`
`,n.jsx(t,{of:m}),`
`,n.jsx(e.h3,{id:"link",children:"Link"}),`
`,n.jsxs(e.p,{children:[`This example of a single link allows using the controls below.
The Link List Link renders both the `,n.jsx(e.code,{children:"<li>"})," and ",n.jsx(e.code,{children:"<a>"}),` elements.
Any attributes and the `,n.jsx(e.code,{children:"ref"})," are passed on to the ",n.jsx(e.code,{children:"<a>"})," element."]}),`
`,n.jsx(t,{of:s}),`
`,n.jsx(d,{of:s}),`
`,n.jsx(e.h3,{id:"on-a-coloured-background",children:"On a coloured background"}),`
`,n.jsxs(e.p,{children:["A Link on a coloured background must set ",n.jsx(e.a,{href:"?path=/docs/brand-design-tokens-colour--docs#pairing-foreground-with-background-colours",children:"the correct text colour"}),` to provide enough contrast.
We have lighter and darker background colours, and links behave differently on each.`]}),`
`,n.jsx(e.h4,{id:"contrast-colour",children:"Contrast colour"}),`
`,n.jsx(e.p,{children:`Use the contrast colour on a lime, orange or yellow background.
It will make the Link black.`}),`
`,n.jsx(t,{of:x}),`
`,n.jsx(e.h4,{id:"inverse-colour",children:"Inverse colour"}),`
`,n.jsx(e.p,{children:`Use the inverse colour on an azure, blue, green, magenta or purple background.
It will make the Link white.`}),`
`,n.jsx(t,{of:p})]})}function y(o={}){const{wrapper:e}={...r(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(i,{...o})}):i(o)}export{y as default};
