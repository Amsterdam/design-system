import{j as e}from"./iframe-DxFJ3SCQ.js";import{useMDXComponents as i}from"./index-CdbzGJT0.js";import{M as s,f as h,P as r,h as l,i as a}from"./blocks-DPfOuimJ.js";import{I as c,W as d,a as g,S as p,b as m}from"./Icon.stories-C7t6EUcY.js";import{D as u}from"./DesignTokensTable-CKsYRah6.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CnyXa-QK.js";import"./Icon-C8rLjmkz.js";import"./Row-BZSl0n-p.js";import"./Paragraph-BUth8MIL.js";const y=`<!-- @license CC0-1.0 -->

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
`,f={icon:{"font-size":{value:"{ams.typography.body-text.font-size}"},"line-height":{value:"{ams.typography.body-text.line-height}"},small:{"font-size":{value:"{ams.typography.body-text.small.font-size}"},"line-height":{value:"{ams.typography.body-text.small.line-height}"}},large:{"font-size":{value:"{ams.typography.body-text.large.font-size}"},"line-height":{value:"{ams.typography.body-text.large.line-height}"}},"heading-1":{"font-size":{value:"{ams.typography.heading.1.font-size}"},"line-height":{value:"{ams.typography.heading.1.line-height}"}},"heading-2":{"font-size":{value:"{ams.typography.heading.2.font-size}"},"line-height":{value:"{ams.typography.heading.2.line-height}"}},"heading-3":{"font-size":{value:"{ams.typography.heading.3.font-size}"},"line-height":{value:"{ams.typography.heading.3.line-height}"}},"heading-4":{"font-size":{value:"{ams.typography.heading.4.font-size}"},"line-height":{value:"{ams.typography.heading.4.line-height}"}},"heading-5":{"font-size":{value:"{ams.typography.heading.5.font-size}"},"line-height":{value:"{ams.typography.heading.5.line-height}"}},"heading-6":{"font-size":{value:"{ams.typography.heading.6.font-size}"},"line-height":{value:"{ams.typography.heading.6.line-height}"}},inverse:{color:{value:"{ams.color.text.inverse}"}}}},x={ams:f};function o(t){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...i(),...t.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,`
`,`
`,e.jsx(s,{of:c}),`
`,e.jsx(h,{children:y}),`
`,e.jsx(n.h2,{id:"how-to-use",children:"How to use"}),`
`,e.jsxs(n.p,{children:["Use the React Icon component together with a React SVG component from ",e.jsx(n.code,{children:"@amsterdam/design-system-react-icons"}),`.
Import this SVG component and use it like this:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { MailIcon } from "@amsterdam/design-system-react-icons";

<Icon svg={MailIcon} />;
`})}),`
`,e.jsx(r,{}),`
`,e.jsx(l,{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"aligning-with-text",children:"Aligning with text"}),`
`,e.jsxs(n.p,{children:[`While the icon itself is square, the wrapping Icon component adds a line height for easy alignment with text.
An icon aligns with regular body text by default.
Use the `,e.jsx(n.code,{children:"size"})," prop to pair an icon with small or large body text or with a heading."]}),`
`,e.jsx(a,{of:d}),`
`,e.jsx(a,{of:g}),`
`,e.jsx(n.h3,{id:"square",children:"Square"}),`
`,e.jsxs(n.p,{children:[`An icon is placed inside a container that has the same line height as text.
This helps align the icon with the text.
It also makes the container rectangular.
Sometimes, it's better for the icon to be square, such as with the `,e.jsx(n.a,{href:"/docs/components-buttons-icon-button--docs",children:"Icon Button"}),"."]}),`
`,e.jsx(a,{of:p}),`
`,e.jsx(n.h3,{id:"inverse-colour",children:"Inverse colour"}),`
`,e.jsx(n.p,{children:`Use the inverse colour if the Icon sits on a dark background.
This ensures the colour of the icon provides enough contrast.`}),`
`,e.jsx(a,{of:m}),`
`,e.jsx(n.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsx(u,{tokens:x})]})}function A(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{A as default};
