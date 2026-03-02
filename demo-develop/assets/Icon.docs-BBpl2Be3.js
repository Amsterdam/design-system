import{j as e}from"./iframe-iIBmZFft.js";import{useMDXComponents as o}from"./index-D49MvEDA.js";import{M as s,e as r,f as h,h as l,i}from"./blocks-CdmOBQod.js";import{I as m,W as c,a as d,S as p,b as g}from"./Icon.stories-BiYrC5Rr.js";import{D as y}from"./DesignTokensTable-DAXUaRD0.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BG_bZtyc.js";import"./Icon-DRc4BfJJ.js";import"./Paragraph-C3G0RrFM.js";import"./Row-HwAv9Ost.js";import"./BorderSample-BXg71iEW.js";import"./formatTokenValue-BYjgZrXg.js";import"./Code-DrgDgAPK.js";import"./ColorSample-BasS8dW3.js";import"./SpaceSample-KeurG1xv.js";import"./TypographySample-YajHAERZ.js";const u=`<!-- @license CC0-1.0 -->

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
`,x={icon:{"font-size":{$value:"{ams.typography.body-text.font-size}",$extensions:{"nl.amsterdam.type":"fontSize"}},"line-height":{$value:"{ams.typography.body-text.line-height}",$extensions:{"nl.amsterdam.type":"lineHeight"}},small:{"font-size":{$value:"{ams.typography.body-text.small.font-size}",$extensions:{"nl.amsterdam.type":"fontSize"}},"line-height":{$value:"{ams.typography.body-text.small.line-height}",$extensions:{"nl.amsterdam.type":"lineHeight"}}},large:{"font-size":{$value:"{ams.typography.body-text.large.font-size}",$extensions:{"nl.amsterdam.type":"fontSize"}},"line-height":{$value:"{ams.typography.body-text.large.line-height}",$extensions:{"nl.amsterdam.type":"lineHeight"}}},"heading-1":{"font-size":{$value:"{ams.typography.heading.1.font-size}",$extensions:{"nl.amsterdam.type":"fontSize"}},"line-height":{$value:"{ams.typography.heading.1.line-height}",$extensions:{"nl.amsterdam.type":"lineHeight"}}},"heading-2":{"font-size":{$value:"{ams.typography.heading.2.font-size}",$extensions:{"nl.amsterdam.type":"fontSize"}},"line-height":{$value:"{ams.typography.heading.2.line-height}",$extensions:{"nl.amsterdam.type":"lineHeight"}}},"heading-3":{"font-size":{$value:"{ams.typography.heading.3.font-size}",$extensions:{"nl.amsterdam.type":"fontSize"}},"line-height":{$value:"{ams.typography.heading.3.line-height}",$extensions:{"nl.amsterdam.type":"lineHeight"}}},"heading-4":{"font-size":{$value:"{ams.typography.heading.4.font-size}",$extensions:{"nl.amsterdam.type":"fontSize"}},"line-height":{$value:"{ams.typography.heading.4.line-height}",$extensions:{"nl.amsterdam.type":"lineHeight"}}},"heading-5":{"font-size":{$value:"{ams.typography.heading.5.font-size}",$extensions:{"nl.amsterdam.type":"fontSize"}},"line-height":{$value:"{ams.typography.heading.5.line-height}",$extensions:{"nl.amsterdam.type":"lineHeight"}}},"heading-6":{"font-size":{$value:"{ams.typography.heading.6.font-size}",$extensions:{"nl.amsterdam.type":"fontSize"}},"line-height":{$value:"{ams.typography.heading.6.line-height}",$extensions:{"nl.amsterdam.type":"lineHeight"}}},inverse:{color:{$value:"{ams.color.text.inverse}",$type:"color"}}}},f={ams:x};function a(t){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...o(),...t.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,`
`,`
`,e.jsx(s,{of:m}),`
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
`,e.jsx(i,{of:c}),`
`,e.jsx(i,{of:d}),`
`,e.jsx(n.h3,{id:"square",children:"Square"}),`
`,e.jsxs(n.p,{children:[`An icon is placed inside a container that has the same line height as text.
This helps align the icon with the text.
It also makes the container rectangular.
Sometimes, it's better for the icon to be square, such as with the `,e.jsx(n.a,{href:"/docs/components-buttons-icon-button--docs",children:"Icon Button"}),"."]}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(n.h3,{id:"inverse-colour",children:"Inverse colour"}),`
`,e.jsx(n.p,{children:`Use the inverse colour if the Icon sits on a dark background.
This ensures the colour of the icon provides enough contrast.`}),`
`,e.jsx(i,{of:g}),`
`,e.jsx(n.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsx(y,{tokens:f})]})}function q(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(a,{...t})}):a(t)}export{q as default};
