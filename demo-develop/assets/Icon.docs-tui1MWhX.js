import{j as e}from"./iframe-DJypQP2c.js";import{useMDXComponents as a}from"./index-DyAohFFF.js";import{M as o,f as r,P as h,h as m,i as s}from"./blocks-C-oJeobn.js";import{I as l,W as d,a as c,S as g,b as p}from"./Icon.stories-bWR5h8Z-.js";import{D as y}from"./DesignTokensTable-D83iVi0Q.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CqyDIePs.js";import"./Icon-BeJTe6VE.js";import"./Row-CpxEHSya.js";import"./Paragraph-DiOqw9_B.js";import"./BorderSample-DMvjCd8K.js";import"./formatTokenValue-BYjgZrXg.js";import"./Code-D8sstZZW.js";import"./ColorSample-B8fLCefa.js";import"./SpaceSample-DtfzW6ey.js";import"./TypographySample-CckKQTPK.js";const u=`<!-- @license CC0-1.0 -->

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
`,x={icon:{"font-size":{$value:"{ams.typography.body-text.font-size}",$extensions:{"amsterdam.designsystem.type":"fontSize"}},"line-height":{$value:"{ams.typography.body-text.line-height}",$extensions:{"amsterdam.designsystem.type":"lineHeight"}},small:{"font-size":{$value:"{ams.typography.body-text.small.font-size}",$extensions:{"amsterdam.designsystem.type":"fontSize"}},"line-height":{$value:"{ams.typography.body-text.small.line-height}",$extensions:{"amsterdam.designsystem.type":"lineHeight"}}},large:{"font-size":{$value:"{ams.typography.body-text.large.font-size}",$extensions:{"amsterdam.designsystem.type":"fontSize"}},"line-height":{$value:"{ams.typography.body-text.large.line-height}",$extensions:{"amsterdam.designsystem.type":"lineHeight"}}},"heading-1":{"font-size":{$value:"{ams.typography.heading.1.font-size}",$extensions:{"amsterdam.designsystem.type":"fontSize"}},"line-height":{$value:"{ams.typography.heading.1.line-height}",$extensions:{"amsterdam.designsystem.type":"lineHeight"}}},"heading-2":{"font-size":{$value:"{ams.typography.heading.2.font-size}",$extensions:{"amsterdam.designsystem.type":"fontSize"}},"line-height":{$value:"{ams.typography.heading.2.line-height}",$extensions:{"amsterdam.designsystem.type":"lineHeight"}}},"heading-3":{"font-size":{$value:"{ams.typography.heading.3.font-size}",$extensions:{"amsterdam.designsystem.type":"fontSize"}},"line-height":{$value:"{ams.typography.heading.3.line-height}",$extensions:{"amsterdam.designsystem.type":"lineHeight"}}},"heading-4":{"font-size":{$value:"{ams.typography.heading.4.font-size}",$extensions:{"amsterdam.designsystem.type":"fontSize"}},"line-height":{$value:"{ams.typography.heading.4.line-height}",$extensions:{"amsterdam.designsystem.type":"lineHeight"}}},"heading-5":{"font-size":{$value:"{ams.typography.heading.5.font-size}",$extensions:{"amsterdam.designsystem.type":"fontSize"}},"line-height":{$value:"{ams.typography.heading.5.line-height}",$extensions:{"amsterdam.designsystem.type":"lineHeight"}}},"heading-6":{"font-size":{$value:"{ams.typography.heading.6.font-size}",$extensions:{"amsterdam.designsystem.type":"fontSize"}},"line-height":{$value:"{ams.typography.heading.6.line-height}",$extensions:{"amsterdam.designsystem.type":"lineHeight"}}},inverse:{color:{$value:"{ams.color.text.inverse}",$type:"color"}}}},f={ams:x};function i(n){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...a(),...n.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,`
`,`
`,e.jsx(o,{of:l}),`
`,e.jsx(r,{children:u}),`
`,e.jsx(t.h2,{id:"how-to-use",children:"How to use"}),`
`,e.jsxs(t.p,{children:["Use the React Icon component together with a React SVG component from ",e.jsx(t.code,{children:"@amsterdam/design-system-react-icons"}),`.
Import this SVG component and use it like this:`]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`import { MailIcon } from "@amsterdam/design-system-react-icons";

<Icon svg={MailIcon} />;
`})}),`
`,e.jsx(h,{}),`
`,e.jsx(m,{}),`
`,e.jsx(t.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(t.h3,{id:"aligning-with-text",children:"Aligning with text"}),`
`,e.jsxs(t.p,{children:[`While the icon itself is square, the wrapping Icon component adds a line height for easy alignment with text.
An icon aligns with regular body text by default.
Use the `,e.jsx(t.code,{children:"size"})," prop to pair an icon with small or large body text or with a heading."]}),`
`,e.jsx(s,{of:d}),`
`,e.jsx(s,{of:c}),`
`,e.jsx(t.h3,{id:"square",children:"Square"}),`
`,e.jsxs(t.p,{children:[`An icon is placed inside a container that has the same line height as text.
This helps align the icon with the text.
It also makes the container rectangular.
Sometimes, it's better for the icon to be square, such as with the `,e.jsx(t.a,{href:"/docs/components-buttons-icon-button--docs",children:"Icon Button"}),"."]}),`
`,e.jsx(s,{of:g}),`
`,e.jsx(t.h3,{id:"inverse-colour",children:"Inverse colour"}),`
`,e.jsx(t.p,{children:`Use the inverse colour if the Icon sits on a dark background.
This ensures the colour of the icon provides enough contrast.`}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(t.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsx(y,{tokens:f})]})}function q(n={}){const{wrapper:t}={...a(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(i,{...n})}):i(n)}export{q as default};
