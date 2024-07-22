import{j as n}from"./jsx-runtime-BlAj40OV.js";import{useMDXComponents as r}from"./index-BI1Biiay.js";import{ae as l,ak as a,al as c,an as s,am as h}from"./index-DKMaVUD6.js";import{L as d,C as m,S as u,a as t,b as p,I as x}from"./LinkList.stories-C2vs5vFg.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-Bm4TKUHQ.js";import"../sb-preview/runtime.js";import"./index-BMdlDBjA.js";import"./index-D-8MO0q_.js";import"./index-nrpnv_Jx.js";import"./index-DrFu-skq.js";import"./index.esm-DY3iRp4W.js";import"./decorators-CweBkPI6.js";import"./exampleContent-BGs0ZnDQ.js";import"./LinkList-Bn07eV2y.js";import"./clsx-B-dksMZM.js";import"./Icon-msbkstIT.js";const j=`<!-- @license CC0-1.0 -->

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
`;/*@license CC0-1.0*/function i(o){const e={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",ul:"ul",...r(),...o.components};return n.jsxs(n.Fragment,{children:[`
`,`
`,n.jsx(l,{of:d}),`
`,n.jsx(a,{children:j}),`
`,n.jsx(e.h2,{id:"examples",children:"Examples"}),`
`,n.jsx(e.h3,{id:"default",children:"Default"}),`
`,n.jsxs(e.p,{children:[`The Link List has no props.
It is just a container for the items, rendering a `,n.jsx(e.code,{children:"<ul>"})," element."]}),`
`,n.jsx(c,{}),`
`,n.jsx(e.h3,{id:"custom-icons",children:"Custom Icons"}),`
`,n.jsx(e.p,{children:`Replace the list icon with a more meaningful one to help understand a link more quickly or easily.
Avoid using both semantic and list icons in the same list.`}),`
`,n.jsx(s,{of:m}),`
`,n.jsx(e.h3,{id:"small-text",children:"Small Text"}),`
`,n.jsxs(e.p,{children:["In the ",n.jsx(e.a,{href:"/docs/components-containers-footer--docs",children:"Footer"}),`, we use small text, also for lists.
Specify this for each item in the list.`]}),`
`,n.jsx(s,{of:u}),`
`,n.jsx(e.h3,{id:"link",children:"Link"}),`
`,n.jsxs(e.p,{children:[`This example of a single link allows using the controls below.
The Link List Link renders both the `,n.jsx(e.code,{children:"<li>"})," and ",n.jsx(e.code,{children:"<a>"}),` elements.
Any attributes and the `,n.jsx(e.code,{children:"ref"})," are passed on to the ",n.jsx(e.code,{children:"<a>"})," element."]}),`
`,n.jsx(s,{of:t}),`
`,n.jsx(h,{of:t}),`
`,n.jsx(e.h3,{id:"on-a-coloured-background",children:"On a Coloured Background"}),`
`,n.jsxs(e.p,{children:[`A link on a coloured background must adjust its text colour to provide enough contrast.
We have lighter and darker background colours, and links behave differently on each.
Stijlweb shows `,n.jsx(e.a,{href:"https://amsterdam.nl/stijlweb/basiselementen/kleuren/",rel:"nofollow",children:"which colours suit which backgrounds"}),`.
Although they only address headings and paragraphs, the same principle applies to links.`]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Set the ",n.jsx(e.code,{children:"contrastColor"}),` prop on a yellow, orange or green background.
It will make the link black.`]}),`
`,n.jsxs(e.li,{children:["Use the ",n.jsx(e.code,{children:"inverseColor"}),` prop on a purple or dark blue background.
It will make the link white.`]}),`
`,n.jsx(e.li,{children:"On the other background colours, choose either one, but do so consistently."}),`
`]}),`
`,n.jsx(e.h4,{id:"contrast-colour",children:"Contrast Colour"}),`
`,n.jsx(s,{of:p}),`
`,n.jsx(e.h4,{id:"inverse-colour",children:"Inverse Colour"}),`
`,n.jsx(s,{of:x})]})}function X(o={}){const{wrapper:e}={...r(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(i,{...o})}):i(o)}export{X as default};
