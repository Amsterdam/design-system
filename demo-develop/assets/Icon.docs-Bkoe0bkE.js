import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as s}from"./index-CxbY7dAs.js";import{M as a,e as r,P as c,f as h,h as o}from"./index-BHgg25fL.js";import{I as l,W as d,a as m,S as p,b as u}from"./Icon.stories-CjuF2ZqP.js";import"./index-yBjzXJbu.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B4q2Zsfe.js";import"./index-CJ88nXQk.js";import"./index-Cf9b6H0j.js";import"./index-DrFu-skq.js";import"./index.esm-DDzNsyt1.js";import"./clsx-B-dksMZM.js";import"./index.esm-D3RaMjqb.js";import"./Icon-Pril9caF.js";import"./Row-JeNeYdOs.js";import"./Paragraph-BDLeQ91t.js";const x=`<!-- @license CC0-1.0 -->

# Icon

Icons are visual symbols used to represent ideas, themes, or actions.
They communicate the message at a glance and draw attention to important (interactive) information.
Always use an \`Icon\` component to encapsulate an SVG icon for proper styling and sizing.

Our icons can only be used on websites and applications where the City of Amsterdam is the main communicator.

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
`;/*@license CC0-1.0*/function i(t){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(a,{of:l}),`
`,e.jsx(r,{children:x}),`
`,e.jsx(n.h2,{id:"how-to-use",children:"How to use"}),`
`,e.jsxs(n.p,{children:["Use the React Icon component together with a React SVG component from ",e.jsx(n.code,{children:"@amsterdam/design-system-react-icons"}),`.
Import this SVG as follows:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { MailIcon } from "@amsterdam/design-system-react-icons";
`})}),`
`,e.jsx(n.p,{children:"Then, you can use it in the component like this:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Icon svg={MailIcon} />
`})}),`
`,e.jsx(c,{}),`
`,e.jsx(h,{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"aligning-with-text",children:"Aligning with text"}),`
`,e.jsxs(n.p,{children:[`While the icon itself is square, the wrapping Icon component adds a line height for easy alignment with text.
An icon aligns with regular body text by default.
Use the `,e.jsx(n.code,{children:"size"})," prop to pair an icon with small or large body text or with a heading."]}),`
`,e.jsx(o,{of:d}),`
`,e.jsx(o,{of:m}),`
`,e.jsx(n.h3,{id:"square",children:"Square"}),`
`,e.jsxs(n.p,{children:[`An icon is placed inside a container that has the same line height as text.
This helps align the icon with the text.
It also makes the container rectangular.
Sometimes, it's better for the icon to be square, such as with the `,e.jsx(n.a,{href:"/docs/components-buttons-icon-button--docs",children:"Icon Button"}),"."]}),`
`,e.jsx(o,{of:p}),`
`,e.jsx(n.h3,{id:"inverse-colour",children:"Inverse colour"}),`
`,e.jsx(n.p,{children:`Use the inverse colour if the Icon sits on a dark background.
This ensures the colour of the icon provides enough contrast.`}),`
`,e.jsx(o,{of:u})]})}function z(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{z as default};
