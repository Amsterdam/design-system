import{j as e}from"./iframe-BVoG9m17.js";import{useMDXComponents as a}from"./index-C5FgkE8s.js";import{M as s,f as r,P as h,h as l,i as o}from"./blocks-CbNSObti.js";import{I as c,W as p,a as m,S as d,b as g}from"./Icon.stories-CZO11D-8.js";import{D as y}from"./DesignTokensTable-CkKjOYdP.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dmd0h3iS.js";import"./Icon-wuu9I1G2.js";import"./Row-B6dRHjRn.js";import"./Paragraph-C3sZ16WV.js";import"./BorderSample-CPRdxkNe.js";import"./ColorSample-DmP-UKsX.js";const u=`<!-- @license CC0-1.0 -->

# Icon

Icons are visual symbols used to represent ideas, themes, or actions.
They communicate the message at a glance and draw attention to important (interactive) information.
Always use an \`Icon\` component to encapsulate an SVG icon for proper styling and sizing.

Our icons can only be used on websites where the City of Amsterdam is the main communicator.

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
`,f={icon:{"font-size":{$value:"{ams.typography.body-text.font-size}",$extensions:{"ams.type":"fontSize"}},"line-height":{$value:"{ams.typography.body-text.line-height}",$type:"number"},small:{"font-size":{$value:"{ams.typography.body-text.small.font-size}",$extensions:{"ams.type":"fontSize"}},"line-height":{$value:"{ams.typography.body-text.small.line-height}",$type:"number"}},large:{"font-size":{$value:"{ams.typography.body-text.large.font-size}",$extensions:{"ams.type":"fontSize"}},"line-height":{$value:"{ams.typography.body-text.large.line-height}",$type:"number"}},"heading-1":{"font-size":{$value:"{ams.typography.heading.1.font-size}",$extensions:{"ams.type":"fontSize"}},"line-height":{$value:"{ams.typography.heading.1.line-height}",$type:"number"}},"heading-2":{"font-size":{$value:"{ams.typography.heading.2.font-size}",$extensions:{"ams.type":"fontSize"}},"line-height":{$value:"{ams.typography.heading.2.line-height}",$type:"number"}},"heading-3":{"font-size":{$value:"{ams.typography.heading.3.font-size}",$extensions:{"ams.type":"fontSize"}},"line-height":{$value:"{ams.typography.heading.3.line-height}",$type:"number"}},"heading-4":{"font-size":{$value:"{ams.typography.heading.4.font-size}",$extensions:{"ams.type":"fontSize"}},"line-height":{$value:"{ams.typography.heading.4.line-height}",$type:"number"}},"heading-5":{"font-size":{$value:"{ams.typography.heading.5.font-size}",$extensions:{"ams.type":"fontSize"}},"line-height":{$value:"{ams.typography.heading.5.line-height}",$type:"number"}},"heading-6":{"font-size":{$value:"{ams.typography.heading.6.font-size}",$extensions:{"ams.type":"fontSize"}},"line-height":{$value:"{ams.typography.heading.6.line-height}",$type:"number"}},inverse:{color:{$value:"{ams.color.text.inverse}",$type:"color"}}}},x={ams:f};function i(t){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...a(),...t.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,`
`,`
`,e.jsx(s,{of:c}),`
`,e.jsx(r,{children:u}),`
`,e.jsx(n.h2,{id:"how-to-use",children:"How to use"}),`
`,e.jsxs(n.p,{children:["Use the React Icon component together with a React SVG component from ",e.jsx(n.code,{children:"@amsterdam/design-system-react-icons"}),`.
Import this SVG component and use it like this:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { MailIcon } from "@amsterdam/design-system-react-icons";

<Icon svg={MailIcon} />;
`})}),`
`,e.jsx(h,{}),`
`,e.jsx(l,{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"aligning-with-text",children:"Aligning with text"}),`
`,e.jsxs(n.p,{children:[`While the icon itself is square, the wrapping Icon component adds a line height for easy alignment with text.
An icon aligns with regular body text by default.
Use the `,e.jsx(n.code,{children:"size"})," prop to pair an icon with small or large body text or with a heading."]}),`
`,e.jsx(o,{of:p}),`
`,e.jsx(o,{of:m}),`
`,e.jsx(n.h3,{id:"square",children:"Square"}),`
`,e.jsxs(n.p,{children:[`An icon is placed inside a container that has the same line height as text.
This helps align the icon with the text.
It also makes the container rectangular.
Sometimes, it's better for the icon to be square, such as with the `,e.jsx(n.a,{href:"/docs/components-buttons-icon-button--docs",children:"Icon Button"}),"."]}),`
`,e.jsx(o,{of:d}),`
`,e.jsx(n.h3,{id:"inverse-colour",children:"Inverse colour"}),`
`,e.jsx(n.p,{children:`Use the inverse colour if the Icon sits on a dark background.
This ensures the colour of the icon provides enough contrast.`}),`
`,e.jsx(o,{of:g}),`
`,e.jsx(n.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsx(y,{tokens:x})]})}function T(t={}){const{wrapper:n}={...a(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{T as default};
