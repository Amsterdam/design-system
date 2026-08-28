import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,d as n,h as r,i,n as a,p as o,u as s}from"./blocks-BQKRe05W.js";import{t as c}from"./jsx-runtime-ATHzeHXA.js";import{i as l,r as u}from"./react-Dyi61YEg.js";import{n as d,t as f}from"./DesignTokensTable-C7akAg1Z.js";import{i as p,n as m,r as h,t as g}from"./Link.stories-CxSp0YjI.js";var _,v;function y(){return(y=e((()=>{_={link:{color:{$value:`{ams.links.color}`,$extensions:{"nl.amsterdam.type":`color`}},"font-family":{$value:`inherit`},"font-size":{$value:`inherit`},"font-weight":{$value:`{ams.typography.body-text.font-weight}`,$extensions:{"nl.amsterdam.type":`fontWeight`}},"line-height":{$value:`inherit`},"outline-offset":{$value:`{ams.focus.outline-offset}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"text-decoration-thickness":{$value:`{ams.links.text-decoration-thickness}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"text-underline-offset":{$value:`{ams.links.text-underline-offset}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},hover:{color:{$value:`{ams.links.hover.color}`,$extensions:{"nl.amsterdam.type":`color`}},"text-decoration-thickness":{$value:`{ams.links.hover.text-decoration-thickness}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"text-underline-offset":{$value:`{ams.links.hover.text-underline-offset}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}},contrast:{color:{$value:`{ams.links.contrast.color}`,$extensions:{"nl.amsterdam.type":`color`}},hover:{color:{$value:`{ams.links.contrast.hover.color}`,$extensions:{"nl.amsterdam.type":`color`}}}},inverse:{color:{$value:`{ams.links.inverse.color}`,$extensions:{"nl.amsterdam.type":`color`}},hover:{color:{$value:`{ams.links.inverse.hover.color}`,$extensions:{"nl.amsterdam.type":`color`}}}}}},v={ams:_}})))()}function b(e){let r={a:`a`,code:`code`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,ul:`ul`,...l(),...e.components};return(0,S.jsxs)(S.Fragment,{children:[`
`,`
`,`
`,`
`,(0,S.jsx)(s,{of:h}),`
`,(0,S.jsx)(o,{}),`
`,(0,S.jsx)(t,{of:h}),`
`,(0,S.jsx)(n,{}),`
`,(0,S.jsx)(i,{}),`
`,(0,S.jsx)(r.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,S.jsx)(r.h3,{id:`when-to-use`,children:`When to use`}),`
`,(0,S.jsx)(r.p,{children:`Use a Link in the following cases:`}),`
`,(0,S.jsxs)(r.ul,{children:[`
`,(0,S.jsx)(r.li,{children:`To navigate to another page within the website.`}),`
`,(0,S.jsxs)(r.li,{children:[`To navigate to another website (see `,(0,S.jsx)(r.a,{href:`#external-links`,children:`External links`}),` under Accessibility).`]}),`
`,(0,S.jsx)(r.li,{children:`To navigate to an element on the same page.`}),`
`,(0,S.jsxs)(r.li,{children:[`To link to emails or phone numbers (start the link with `,(0,S.jsx)(r.code,{children:`mailto:`}),` or `,(0,S.jsx)(r.code,{children:`tel:`}),`).`]}),`
`]}),`
`,(0,S.jsx)(r.p,{children:`An icon can be added to links, positioned after the link.`}),`
`,(0,S.jsx)(r.h3,{id:`when-not-to-use`,children:`When not to use`}),`
`,(0,S.jsx)(r.p,{children:`A Link is a navigation component.
Use a Button instead of a Link when an action is desired.`}),`
`,(0,S.jsxs)(r.p,{children:[`For a link on its own line of text, use the `,(0,S.jsx)(r.a,{href:`/docs/components-navigation-standalone-link--docs`,children:`Standalone Link`}),`.`]}),`
`,(0,S.jsx)(r.p,{children:`Too many links on the same page may confuse the user.`}),`
`,(0,S.jsx)(r.h3,{id:`how-to-use`,children:`How to use`}),`
`,(0,S.jsxs)(r.p,{children:[`Always include `,(0,S.jsx)(r.code,{children:`rel="external"`}),` for an external link.
Avoid `,(0,S.jsx)(r.code,{children:`target="_blank"`}),`, but use `,(0,S.jsx)(r.code,{children:`rel="external noopener"`}),` if necessary.`]}),`
`,(0,S.jsxs)(r.p,{children:[`Add `,(0,S.jsx)(r.code,{children:`download`}),` to ask the browser to save the linked file instead of navigating to it.
Browsers honour it for same-origin URLs only.`]}),`
`,(0,S.jsx)(r.h2,{id:`examples`,children:`Examples`}),`
`,(0,S.jsx)(r.h3,{id:`on-a-coloured-background`,children:`On a coloured background`}),`
`,(0,S.jsxs)(r.p,{children:[`A Link on a coloured background must set `,(0,S.jsx)(r.a,{href:`/docs/brand-design-tokens-colour--docs#pairing-foreground-with-background-colours`,children:`the correct text colour`}),` to provide enough contrast.
We have lighter and darker background colours, and links behave differently on each.`]}),`
`,(0,S.jsx)(r.h4,{id:`contrast-colour`,children:`Contrast colour`}),`
`,(0,S.jsx)(r.p,{children:`Use the contrast colour on a lime, orange or yellow background.
It will make the Link black.`}),`
`,(0,S.jsx)(a,{of:g}),`
`,(0,S.jsx)(r.h4,{id:`inverse-colour`,children:`Inverse colour`}),`
`,(0,S.jsx)(r.p,{children:`Use the inverse colour on an azure, blue, green, magenta or purple background.
It will make the Link white.`}),`
`,(0,S.jsx)(a,{of:m}),`
`,(0,S.jsx)(r.h2,{id:`design`,children:`Design`}),`
`,(0,S.jsx)(r.p,{children:`We discourage using styles for visited links because they often make the page less clear and navigation more challenging.
It is not part of navigation elements that are frequently scanned.`}),`
`,(0,S.jsx)(r.p,{children:`A Link inherits the typeface, size and line height of the text it sits in.
Nothing about an inline link interrupts the line it belongs to: only its colour and its underline set it apart, at whatever size the surrounding text happens to be.`}),`
`,(0,S.jsx)(r.p,{children:`The underline is thicker than the one a browser draws and sits further from the text, so descenders stay legible through it.
On hover it thickens and moves closer to the text by the same amount, which leaves its lower edge exactly where it was.
The line of text does not shift as the pointer passes over it.`}),`
`,(0,S.jsx)(r.p,{children:`On a coloured background the hover colour is the same as the resting one.
Black or white is already the only readable choice there, so hovering changes the underline alone.`}),`
`,(0,S.jsx)(r.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,S.jsxs)(r.p,{children:[`A Link renders an `,(0,S.jsx)(r.code,{children:`a`}),` element and is announced as a link, in the reading order of the sentence that holds it.`]}),`
`,(0,S.jsx)(r.h3,{id:`external-links`,children:`External links`}),`
`,(0,S.jsxs)(r.p,{children:[(0,S.jsx)(r.code,{children:`rel="external"`}),` states the relationship for machines that read the markup, and nothing about it is announced.
A link that leaves the website, opens a new window, or downloads a file has to say so in its own text: a reader who cannot see the address bar gets no other warning.`]}),`
`,(0,S.jsxs)(r.p,{children:[`Opening a new window also takes someone to a context they did not ask for and cannot leave with the back button, which is why ‘How to use’ discourages `,(0,S.jsx)(r.code,{children:`target="_blank"`}),` rather than only asking for `,(0,S.jsx)(r.code,{children:`noopener`}),` alongside it.`]}),`
`,(0,S.jsx)(r.h2,{id:`see-also`,children:`See also`}),`
`,(0,S.jsxs)(r.ul,{children:[`
`,(0,S.jsxs)(r.li,{children:[(0,S.jsx)(r.a,{href:`/docs/components-navigation-standalone-link--docs`,children:`Standalone Link`}),` – for a single link on its own line of text.`]}),`
`,(0,S.jsxs)(r.li,{children:[(0,S.jsx)(r.a,{href:`/docs/docs-guidelines-routing-libraries--docs`,children:`Routing libraries`}),` – how to integrate links with external routing libraries.`]}),`
`]}),`
`,(0,S.jsx)(r.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,S.jsx)(f,{tokens:v})]})}function x(e={}){let{wrapper:t}={...l(),...e.components};return t?(0,S.jsx)(t,{...e,children:(0,S.jsx)(b,{...e})}):b(e)}var S;function C(){return(C=e((()=>{S=c(),u(),r(),d(),y(),p()})))()}C();export{x as default};