import{j as e}from"./jsx-runtime-j_jdvEMj.js";import{useMDXComponents as a}from"./index-BSj771as.js";import{ae as i,aq as r,ar as c,as as l,at as o}from"./index-D2dCknU8.js";import{I as h,W as d,S as m,L as p,a as x,b as u,c as f}from"./Icon.stories-CKR24zzj.js";import{S as j}from"./StatusBadge-_VA1BtQE.js";import"./index-B-o1Wr-g.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-xc5JitDj.js";import"../sb-preview/runtime.js";import"./index-DolzVqEf.js";import"./index-D-8MO0q_.js";import"./index-CJyPbrN5.js";import"./index-DrFu-skq.js";import"./index.esm-NHouR2Jw.js";import"./clsx-B-dksMZM.js";import"./index.esm-DE9QoVc-.js";import"./Icon-D1obyjGa.js";import"./Badge-Cg5Q2pVP.js";const g=`<!-- @license CC0-1.0 -->

# Icon

Icons are visual symbols used to represent ideas, themes, or actions.
They communicate the message at a glance and draw attention to important (interactive) information.
Always use an \`Icon\` component to encapsulate an SVG icon for proper styling and sizing.

## Interactive elements

Use an icon to support textual interactive elements like buttons and links.
Always try to provide accompanying text for an icon.
Only use icons without accompanying text if they adhere to international standards, such as menu (hamburger icon), search (magnifying glass), next, previous, play, pause, etc.

## Color

Icons are black or white.
When used as part of an interactive element, they are dark blue.
When disabled, they are grey.
They must adhere to the same contrast ratio for accessibility as typography against a background colour.
The icon defaults to the colour of the container it is in.

## Alignment

Icons are aligned to the left of the text by default and vertically centred to the middle of the first line of text.

## Size

Icons use the same text levels as all typographic components to determine their size.
This ensures easy alignment between icons and text.
[Refer to the typography documentation for more information](/docs/brand-design-tokens-text--docs).

## Overview

[You can find an overview of the available icons here](/docs/brand-assets-icons--docs).
`;/*@license CC0-1.0*/function s(t){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...a(),...t.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(i,{of:h}),`
`,e.jsx(j,{reason:"The set of available icon names and the component API will change."}),`
`,e.jsx(r,{children:g}),`
`,e.jsx(n.h2,{id:"how-to-use",children:"How to use"}),`
`,e.jsxs(n.p,{children:["Use the React Icon component together with a React SVG component from ",e.jsx(n.code,{children:"@amsterdam/design-system-react-icons"}),`.
Import this SVG as follows:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { EmailIcon } from "@amsterdam/design-system-react-icons";
`})}),`
`,e.jsx(n.p,{children:"Then, you can use it in the component like this:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<Icon svg={EmailIcon} />
`})}),`
`,e.jsx(c,{}),`
`,e.jsx(l,{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"with-text",children:"With text"}),`
`,e.jsxs(n.p,{children:[`Icons can be used alongside text.
Using the same text levels for both the icon and text aligns them perfectly.
`,e.jsx(n.a,{href:"/docs/brand-design-tokens-text--docs",children:"Consult the documentation on typography for more information"}),"."]}),`
`,e.jsx(o,{of:d}),`
`,e.jsx(n.h3,{id:"square",children:"Square"}),`
`,e.jsxs(n.p,{children:["Sometimes it’s useful for the icon to take up square space, for example, with the ",e.jsx(n.a,{href:"/docs/components-buttons-icon-button--docs",children:"Icon Button"}),"."]}),`
`,e.jsx(o,{of:m}),`
`,e.jsx(n.h3,{id:"level-3",children:"Level 3"}),`
`,e.jsx(o,{of:p}),`
`,e.jsx(n.h3,{id:"level-4",children:"Level 4"}),`
`,e.jsx(o,{of:x}),`
`,e.jsx(n.h3,{id:"level-5",children:"Level 5"}),`
`,e.jsx(o,{of:u}),`
`,e.jsx(n.h3,{id:"level-6",children:"Level 6"}),`
`,e.jsx(o,{of:f})]})}function G(t={}){const{wrapper:n}={...a(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{G as default};
