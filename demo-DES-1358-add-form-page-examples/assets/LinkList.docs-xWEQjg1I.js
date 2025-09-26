import{j as n}from"./iframe-awC-ZjjZ.js";import{useMDXComponents as r}from"./index-DDZm16Cd.js";import{M as a,c as l,P as c,f as s,e as d}from"./blocks-C7BVl-kR.js";import{L as h,W as m,C as u,S as x,a as t,b as p,I as k}from"./LinkList.stories-_18oTTE8.js";import"./index-D_vm94Bl.js";import"./exampleContent-DRope23M.js";import"./LinkList-Bk1rcWmS.js";import"./Icon-COR6BU6b.js";const f=`<!-- @license CC0-1.0 -->

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
`,n.jsx(l,{children:f}),`
`,n.jsx(c,{}),`
`,n.jsx(e.h2,{id:"examples",children:"Examples"}),`
`,n.jsx(e.h3,{id:"with-heading",children:"With heading"}),`
`,n.jsxs(e.p,{children:["A list of links often appears in a block with a ",n.jsx(e.a,{href:"/docs/components-text-heading--docs",children:"Heading"}),`.
Use a size of ‘level-3’ for the Heading and add a small bottom margin.`]}),`
`,n.jsx(s,{of:m}),`
`,n.jsx(e.h3,{id:"custom-icons",children:"Custom icons"}),`
`,n.jsx(e.p,{children:`Replace the list icon with a more meaningful one to help understand a link more quickly or easily.
Avoid using both semantic and list icons in the same list.`}),`
`,n.jsx(s,{of:u}),`
`,n.jsx(e.h3,{id:"small-text",children:"Small text"}),`
`,n.jsx(e.p,{children:`We use a smaller font size for text in a Figure Caption and for metadata like dates or categories.
When using a list in small text, set the prop for each item in the list.`}),`
`,n.jsx(s,{of:x}),`
`,n.jsx(e.h3,{id:"link",children:"Link"}),`
`,n.jsxs(e.p,{children:[`This example of a single link allows using the controls below.
The Link List Link renders both the `,n.jsx(e.code,{children:"<li>"})," and ",n.jsx(e.code,{children:"<a>"}),` elements.
Any attributes and the `,n.jsx(e.code,{children:"ref"})," are passed on to the ",n.jsx(e.code,{children:"<a>"})," element."]}),`
`,n.jsx(s,{of:t}),`
`,n.jsx(d,{of:t}),`
`,n.jsx(e.h3,{id:"on-a-coloured-background",children:"On a coloured background"}),`
`,n.jsxs(e.p,{children:["A Link on a coloured background must set ",n.jsx(e.a,{href:"?path=/docs/brand-design-tokens-colour--docs#pairing-foreground-with-background-colours",children:"the correct text colour"}),` to provide enough contrast.
We have lighter and darker background colours, and links behave differently on each.`]}),`
`,n.jsx(e.h4,{id:"contrast-colour",children:"Contrast colour"}),`
`,n.jsx(e.p,{children:`Use the contrast colour on a lime, orange or yellow background.
It will make the Link black.`}),`
`,n.jsx(s,{of:p}),`
`,n.jsx(e.h4,{id:"inverse-colour",children:"Inverse colour"}),`
`,n.jsx(e.p,{children:`Use the inverse colour on an azure, blue, green, magenta or purple background.
It will make the Link white.`}),`
`,n.jsx(s,{of:k})]})}function M(o={}){const{wrapper:e}={...r(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(i,{...o})}):i(o)}export{M as default};
