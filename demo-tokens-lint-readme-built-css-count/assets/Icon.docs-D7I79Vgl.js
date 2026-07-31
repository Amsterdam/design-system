import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,d as n,h as r,i,n as a,p as o,u as s}from"./blocks-zzQRermb.js";import{t as c}from"./jsx-runtime-ATHzeHXA.js";import{i as l,r as u}from"./react-Dyi61YEg.js";import{n as d,t as f}from"./DesignTokensTable-zSs7cCXh.js";import{a as p,i as m,n as h,o as g,r as _,s as v,t as y}from"./Icon.stories-BwOsnjkg.js";var b,x;function S(){return(S=e((()=>{b={icon:{"font-size":{$value:`{ams.typography.body-text.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"line-height":{$value:`{ams.typography.body-text.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}},small:{"font-size":{$value:`{ams.typography.body-text.small.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"line-height":{$value:`{ams.typography.body-text.small.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}}},large:{"font-size":{$value:`{ams.typography.body-text.large.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"line-height":{$value:`{ams.typography.body-text.large.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}}},"heading-1":{"font-size":{$value:`{ams.typography.heading.1.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"line-height":{$value:`{ams.typography.heading.1.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}}},"heading-2":{"font-size":{$value:`{ams.typography.heading.2.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"line-height":{$value:`{ams.typography.heading.2.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}}},"heading-3":{"font-size":{$value:`{ams.typography.heading.3.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"line-height":{$value:`{ams.typography.heading.3.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}}},"heading-4":{"font-size":{$value:`{ams.typography.heading.4.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"line-height":{$value:`{ams.typography.heading.4.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}}},"heading-5":{"font-size":{$value:`{ams.typography.heading.5.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"line-height":{$value:`{ams.typography.heading.5.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}}},inverse:{color:{$value:`{ams.color.text.inverse}`,$extensions:{"nl.amsterdam.type":`color`}}}}},x={ams:b}})))()}function C(e){let r={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...l(),...e.components};return(0,T.jsxs)(T.Fragment,{children:[`
`,`
`,`
`,`
`,(0,T.jsx)(s,{of:y}),`
`,(0,T.jsx)(o,{}),`
`,(0,T.jsx)(t,{of:y}),`
`,(0,T.jsx)(n,{}),`
`,(0,T.jsx)(i,{}),`
`,(0,T.jsx)(r.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,T.jsx)(r.h3,{id:`when-to-use`,children:`When to use`}),`
`,(0,T.jsx)(r.p,{children:`Use an Icon to support textual interactive elements like buttons and links.
Always try to provide accompanying text for an icon.`}),`
`,(0,T.jsx)(r.p,{children:`Always wrap an SVG icon in an Icon component for proper styling and sizing.`}),`
`,(0,T.jsxs)(r.p,{children:[`Use the React Icon component together with a React SVG component from `,(0,T.jsx)(r.code,{children:`@amsterdam/design-system-react-icons`}),`:`]}),`
`,(0,T.jsx)(r.pre,{children:(0,T.jsx)(r.code,{className:`language-tsx`,children:`import { MailIcon } from "@amsterdam/design-system-react-icons";

<Icon svg={MailIcon} />;
`})}),`
`,(0,T.jsx)(r.h3,{id:`when-not-to-use`,children:`When not to use`}),`
`,(0,T.jsx)(r.p,{children:`Only use icons without accompanying text if they adhere to international standards, such as menu (hamburger icon), search (magnifying glass), next, previous, play, pause, etc.`}),`
`,(0,T.jsx)(r.p,{children:`Our icons can only be used on websites where the City of Amsterdam is the main communicator.`}),`
`,(0,T.jsx)(r.h2,{id:`examples`,children:`Examples`}),`
`,(0,T.jsx)(r.h3,{id:`aligning-with-text`,children:`Aligning with text`}),`
`,(0,T.jsxs)(r.p,{children:[`While the icon itself is square, the wrapping Icon component adds a line height for easy alignment with text.
An icon aligns with regular body text by default.
Use the `,(0,T.jsx)(r.code,{children:`size`}),` prop to pair an icon with small or large body text or with a heading.`]}),`
`,(0,T.jsx)(a,{of:g}),`
`,(0,T.jsx)(a,{of:p}),`
`,(0,T.jsx)(r.h3,{id:`square`,children:`Square`}),`
`,(0,T.jsxs)(r.p,{children:[`An icon is placed inside a container that has the same line height as text.
This helps align the icon with the text.
It also makes the container rectangular.
Sometimes, it is better for the icon to be square, such as with the `,(0,T.jsx)(r.a,{href:`/docs/components-buttons-icon-button--docs`,children:`Icon Button`}),`.`]}),`
`,(0,T.jsx)(a,{of:m}),`
`,(0,T.jsx)(r.h3,{id:`inverse-colour`,children:`Inverse colour`}),`
`,(0,T.jsx)(r.p,{children:`Use the inverse colour if the Icon sits on a dark background.
This ensures the colour of the icon provides enough contrast.`}),`
`,(0,T.jsx)(a,{of:h}),`
`,(0,T.jsx)(r.h3,{id:`right-to-left`,children:`Right-to-left`}),`
`,(0,T.jsx)(r.p,{children:`Some icons imply a reading direction or movement, such as arrows and vehicles.
These mirror automatically when used inside a right-to-left (RTL) context.
Most icons, such as universal symbols and media controls, are unaffected by direction and remain unchanged.`}),`
`,(0,T.jsx)(a,{of:_}),`
`,(0,T.jsx)(r.h2,{id:`features`,children:`Features`}),`
`,(0,T.jsxs)(r.p,{children:[`Icons have extra whitespace at their top and bottom to match the line height of text components.
Specify the appropriate size to pair an icon with small or large body text or with a heading.
`,(0,T.jsx)(r.a,{href:`/docs/brand-design-tokens-typography--docs`,children:`Read more in the typography documentation`}),`.`]}),`
`,(0,T.jsx)(r.p,{children:`Icons are aligned to the left of the text by default and vertically centred to the middle of the first line of text.`}),`
`,(0,T.jsx)(r.p,{children:`The icon defaults to the colour of the container it is in.`}),`
`,(0,T.jsx)(r.h2,{id:`design`,children:`Design`}),`
`,(0,T.jsx)(r.p,{children:`Icons are black or white.
When used as part of an interactive element, they are blue.
When disabled, they are grey.
They must adhere to the same contrast ratio for accessibility as typography against a background colour.`}),`
`,(0,T.jsx)(r.p,{children:`An Icon has no colour of its own: it takes the colour of the text around it, and its artwork is filled with that same colour.
This is why an Icon inside a Button or a Link changes colour along with its label on hover, without either component saying anything about the icon.`}),`
`,(0,T.jsxs)(r.p,{children:[`The artwork is drawn at one em of the container’s font size, and that font size comes from a token for each option of the `,(0,T.jsx)(r.code,{children:`size`}),` prop.
Every option matches a step in the type scale, so choosing a size pairs an icon with a text style rather than with a measurement.
Those tokens are set in rem, so an icon grows along with the font size a user has chosen.`]}),`
`,(0,T.jsxs)(r.p,{children:[`The `,(0,T.jsx)(r.code,{children:`square`}),` variant widens that container to match its height.
An icon then sits in the middle of a square instead of a rectangle, which is what a surrounding button needs to end up square itself.`]}),`
`,(0,T.jsx)(r.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,T.jsxs)(r.p,{children:[`The markup an Icon renders carries the `,(0,T.jsx)(r.code,{children:`hidden`}),` attribute, and the stylesheet is what reveals it again.
If the stylesheet fails to load, the icon is absent rather than dropped into the page at its intrinsic size, and nothing about it reaches assistive technology.`]}),`
`,(0,T.jsx)(r.p,{children:`An Icon has no accessible name of its own and adds nothing to the name of whatever contains it.
It is decoration for text that carries the meaning, which is why ‘When to use’ asks for accompanying text and ‘When not to use’ limits the exceptions to symbols everyone already knows.`}),`
`,(0,T.jsx)(r.h2,{id:`see-also`,children:`See also`}),`
`,(0,T.jsxs)(r.ul,{children:[`
`,(0,T.jsxs)(r.li,{children:[(0,T.jsx)(r.a,{href:`/docs/components-buttons-icon-button--docs`,children:`Icon Button`}),` – a button that consists of a single icon.`]}),`
`,(0,T.jsxs)(r.li,{children:[(0,T.jsx)(r.a,{href:`/docs/brand-assets-icons--docs`,children:`Icons overview`}),` – the full set of available icons.`]}),`
`]}),`
`,(0,T.jsx)(r.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,T.jsx)(f,{tokens:x})]})}function w(e={}){let{wrapper:t}={...l(),...e.components};return t?(0,T.jsx)(t,{...e,children:(0,T.jsx)(C,{...e})}):C(e)}var T;function E(){return(E=e((()=>{T=c(),u(),r(),d(),S(),v()})))()}E();export{w as default};