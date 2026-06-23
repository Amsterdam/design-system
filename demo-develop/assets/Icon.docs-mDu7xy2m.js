import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-BqsN2jGA.js";import{a as n,f as r,i,l as a,m as o,n as s,u as c,v as l}from"./iframe-DiI7e_lX.js";import{n as u,t as d}from"./DesignTokensTable-B0HqcVUP.js";import{t as f}from"./mdx-react-shim-EWQAB-gT.js";import{InverseColour as p,Square as m,WithAHeading as h,WithBodyText as g,n as _,t as v}from"./Icon.stories-DtFFdVHS.js";var y,b,x=e((()=>{y={icon:{"font-size":{$value:`{ams.typography.body-text.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"line-height":{$value:`{ams.typography.body-text.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}},small:{"font-size":{$value:`{ams.typography.body-text.small.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"line-height":{$value:`{ams.typography.body-text.small.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}}},large:{"font-size":{$value:`{ams.typography.body-text.large.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"line-height":{$value:`{ams.typography.body-text.large.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}}},"heading-1":{"font-size":{$value:`{ams.typography.heading.1.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"line-height":{$value:`{ams.typography.heading.1.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}}},"heading-2":{"font-size":{$value:`{ams.typography.heading.2.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"line-height":{$value:`{ams.typography.heading.2.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}}},"heading-3":{"font-size":{$value:`{ams.typography.heading.3.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"line-height":{$value:`{ams.typography.heading.3.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}}},"heading-4":{"font-size":{$value:`{ams.typography.heading.4.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"line-height":{$value:`{ams.typography.heading.4.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}}},"heading-5":{"font-size":{$value:`{ams.typography.heading.5.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"line-height":{$value:`{ams.typography.heading.5.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}}},inverse:{color:{$value:`{ams.color.text.inverse}`,$extensions:{"nl.amsterdam.type":`color`}}}}},b={ams:y}}));function S(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...l(),...e.components};return(0,w.jsxs)(w.Fragment,{children:[`
`,`
`,`
`,`
`,(0,w.jsx)(a,{of:v}),`
`,(0,w.jsx)(r,{}),`
`,(0,w.jsx)(n,{of:v}),`
`,(0,w.jsx)(c,{}),`
`,(0,w.jsx)(i,{}),`
`,(0,w.jsx)(t.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,w.jsx)(t.h3,{id:`when-to-use`,children:`When to use`}),`
`,(0,w.jsx)(t.p,{children:`Use an Icon to support textual interactive elements like buttons and links.
Always try to provide accompanying text for an icon.`}),`
`,(0,w.jsx)(t.p,{children:`Always wrap an SVG icon in an Icon component for proper styling and sizing.`}),`
`,(0,w.jsxs)(t.p,{children:[`Use the React Icon component together with a React SVG component from `,(0,w.jsx)(t.code,{children:`@amsterdam/design-system-react-icons`}),`:`]}),`
`,(0,w.jsx)(t.pre,{children:(0,w.jsx)(t.code,{className:`language-tsx`,children:`import { MailIcon } from "@amsterdam/design-system-react-icons";

<Icon svg={MailIcon} />;
`})}),`
`,(0,w.jsx)(t.h3,{id:`when-not-to-use`,children:`When not to use`}),`
`,(0,w.jsx)(t.p,{children:`Only use icons without accompanying text if they adhere to international standards, such as menu (hamburger icon), search (magnifying glass), next, previous, play, pause, etc.`}),`
`,(0,w.jsx)(t.p,{children:`Our icons can only be used on websites where the City of Amsterdam is the main communicator.`}),`
`,(0,w.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,w.jsx)(t.h3,{id:`aligning-with-text`,children:`Aligning with text`}),`
`,(0,w.jsxs)(t.p,{children:[`While the icon itself is square, the wrapping Icon component adds a line height for easy alignment with text.
An icon aligns with regular body text by default.
Use the `,(0,w.jsx)(t.code,{children:`size`}),` prop to pair an icon with small or large body text or with a heading.`]}),`
`,(0,w.jsx)(s,{of:g}),`
`,(0,w.jsx)(s,{of:h}),`
`,(0,w.jsx)(t.h3,{id:`square`,children:`Square`}),`
`,(0,w.jsxs)(t.p,{children:[`An icon is placed inside a container that has the same line height as text.
This helps align the icon with the text.
It also makes the container rectangular.
Sometimes, it is better for the icon to be square, such as with the `,(0,w.jsx)(t.a,{href:`/docs/components-buttons-icon-button--docs`,children:`Icon Button`}),`.`]}),`
`,(0,w.jsx)(s,{of:m}),`
`,(0,w.jsx)(t.h3,{id:`inverse-colour`,children:`Inverse colour`}),`
`,(0,w.jsx)(t.p,{children:`Use the inverse colour if the Icon sits on a dark background.
This ensures the colour of the icon provides enough contrast.`}),`
`,(0,w.jsx)(s,{of:p}),`
`,(0,w.jsx)(t.h2,{id:`features`,children:`Features`}),`
`,(0,w.jsxs)(t.p,{children:[`Icons have extra whitespace at their top and bottom to match the line height of text components.
Specify the appropriate size to pair an icon with small or large body text or with a heading.
`,(0,w.jsx)(t.a,{href:`/docs/brand-design-tokens-typography--docs`,children:`Read more in the typography documentation`}),`.`]}),`
`,(0,w.jsx)(t.p,{children:`Icons are aligned to the left of the text by default and vertically centred to the middle of the first line of text.`}),`
`,(0,w.jsx)(t.p,{children:`The icon defaults to the colour of the container it is in.`}),`
`,(0,w.jsx)(t.h2,{id:`design`,children:`Design`}),`
`,(0,w.jsx)(t.p,{children:`Icons are black or white.
When used as part of an interactive element, they are blue.
When disabled, they are grey.
They must adhere to the same contrast ratio for accessibility as typography against a background colour.`}),`
`,(0,w.jsx)(t.h2,{id:`see-also`,children:`See also`}),`
`,(0,w.jsxs)(t.ul,{children:[`
`,(0,w.jsxs)(t.li,{children:[(0,w.jsx)(t.a,{href:`/docs/components-buttons-icon-button--docs`,children:`Icon Button`}),` – a button that consists of a single icon.`]}),`
`,(0,w.jsxs)(t.li,{children:[(0,w.jsx)(t.a,{href:`/docs/brand-assets-icons--docs`,children:`Icons overview`}),` – the full set of available icons.`]}),`
`]}),`
`,(0,w.jsx)(t.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,w.jsx)(d,{tokens:b})]})}function C(e={}){let{wrapper:t}={...l(),...e.components};return t?(0,w.jsx)(t,{...e,children:(0,w.jsx)(S,{...e})}):S(e)}var w;e((()=>{w=t(),f(),o(),u(),x(),_()}))();export{C as default};