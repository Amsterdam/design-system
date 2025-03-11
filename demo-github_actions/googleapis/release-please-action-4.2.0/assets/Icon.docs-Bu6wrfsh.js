import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as i}from"./index-1Ha5aU2j.js";import{M as a,e as r,P as c,f as h,h as t}from"./index-Dc4QmojN.js";import{I as d,W as l,a as m,b as p,c as x,d as u,e as g,f,S as j,g as y}from"./Icon.stories-ssyGvdo4.js";import{S as b}from"./StatusBadge-DJ8nsTRS.js";import"./index-yBjzXJbu.js";import"./index-C0MU9AHG.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CRjV9EOf.js";import"./index-fNjTmf9T.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index.esm-hirjXOjg.js";import"./clsx-B-dksMZM.js";import"./index.esm-DvoLfDtE.js";import"./Icon-CJVFfJZC.js";import"./Row-CGXAxOLh.js";import"./Paragraph-Dg4TdYBs.js";import"./Badge-Du6H0YpE.js";const w=`<!-- @license CC0-1.0 -->

# Icon

Icons are visual symbols used to represent ideas, themes, or actions.
They communicate the message at a glance and draw attention to important (interactive) information.
Always use an \`Icon\` component to encapsulate an SVG icon for proper styling and sizing.

## Interactive elements

Use an icon to support textual interactive elements like buttons and links.
Always try to provide accompanying text for an icon.
Only use icons without accompanying text if they adhere to international standards, such as menu (hamburger icon), search (magnifying glass), next, previous, play, pause, etc.

## Colour

Icons are black or white.
When used as part of an interactive element, they are blue.
When disabled, they are grey.
They must adhere to the same contrast ratio for accessibility as typography against a background colour.
The icon defaults to the colour of the container it is in.

## Alignment

Icons are aligned to the left of the text by default and vertically centred to the middle of the first line of text.

## Size

Icons have extra whitespace at their top and bottom to match the line height of text components.
Specify the appropriate size to pair an icon with small or large body text or with a heading.
[Read more in the typography documentation](/docs/brand-design-tokens-typography--docs).

## Overview

[You can find an overview of the available icons here](/docs/brand-assets-icons--docs).
`;/*@license CC0-1.0*/function s(o){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...i(),...o.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(a,{of:d}),`
`,e.jsx(b,{description:"The set of available icon names and the component API will change."}),`
`,e.jsx(r,{children:w}),`
`,e.jsx(n.h2,{id:"how-to-use",children:"How to use"}),`
`,e.jsxs(n.p,{children:["Use the React Icon component together with a React SVG component from ",e.jsx(n.code,{children:"@amsterdam/design-system-react-icons"}),`.
Import this SVG as follows:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { EmailIcon } from "@amsterdam/design-system-react-icons";
`})}),`
`,e.jsx(n.p,{children:"Then, you can use it in the component like this:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Icon svg={EmailIcon} />
`})}),`
`,e.jsx(c,{}),`
`,e.jsx(h,{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"with-body-text",children:"With body text"}),`
`,e.jsx(n.p,{children:"An icon is as large as regular body text, e.g. paragraphs and lists, including its line height."}),`
`,e.jsx(t,{of:l}),`
`,e.jsxs(n.p,{children:["Use the ",e.jsx(n.code,{children:"size"})," prop to pair an icon with small or large body text."]}),`
`,e.jsx(t,{of:m}),`
`,e.jsx(t,{of:p}),`
`,e.jsx(n.h3,{id:"with-a-heading",children:"With a heading"}),`
`,e.jsxs(n.p,{children:["Use a ",e.jsx(n.code,{children:"size"})," of ",e.jsx(n.code,{children:"heading-3"})," – ",e.jsx(n.code,{children:"heading-6"})," to pair an icon with a ",e.jsx(n.a,{href:"/docs/components-text-heading--docs",children:"Heading"}),"."]}),`
`,e.jsx(t,{of:x}),`
`,e.jsx(t,{of:u}),`
`,e.jsx(t,{of:g}),`
`,e.jsx(t,{of:f}),`
`,e.jsx(n.h3,{id:"square",children:"Square"}),`
`,e.jsxs(n.p,{children:[`An icon is placed inside a container that has the same line height as text.
This helps align the icon with the text.
It also makes the container rectangular.
Sometimes, it's better for the icon to be square, such as with the `,e.jsx(n.a,{href:"/docs/components-buttons-icon-button--docs",children:"Icon Button"}),"."]}),`
`,e.jsx(t,{of:j}),`
`,e.jsx(n.h3,{id:"inverse-colour",children:"Inverse colour"}),`
`,e.jsxs(n.p,{children:["Set the ",e.jsx(n.code,{children:"color"})," prop to ",e.jsx(n.code,{children:"inverse"}),` if the Icon sits on a dark background.
This ensures the colour of the icon provides enough contrast.`]}),`
`,e.jsx(t,{of:y})]})}function V(o={}){const{wrapper:n}={...i(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(s,{...o})}):s(o)}export{V as default};
