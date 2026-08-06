import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,d as n,h as r,i,n as a,p as o,u as s}from"./blocks-zzQRermb.js";import{t as c}from"./jsx-runtime-ATHzeHXA.js";import{i as l,r as u}from"./react-Dyi61YEg.js";import{n as d,t as f}from"./DesignTokensTable-B7-U8jIH.js";import{a as p,i as m,n as h,o as g,r as _,s as v,t as y}from"./Alert.stories-DZIZ9Kj8.js";var b,x;function S(){return(S=e((()=>{b={alert:{"background-color":{$value:`{ams.color.background.default}`,$extensions:{"nl.amsterdam.type":`color`}},"border-color":{$value:`{ams.color.feedback.info}`,$extensions:{"nl.amsterdam.type":`color`}},"border-radius":{$value:`{ams.border.radius}`,$extensions:{"nl.amsterdam.type":`borderRadius`}},"border-style":{$value:`solid`,$extensions:{"nl.amsterdam.type":`borderStyle`}},"border-width":{$value:`{ams.border.width.xl}`,$extensions:{"nl.amsterdam.type":`borderWidth`}},"severity-indicator":{"background-color":{$value:`{ams.color.feedback.info}`,$extensions:{"nl.amsterdam.type":`color`}},"padding-block":{$value:`{ams.space.m}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-inline":{$value:`{ams.space.s}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}},content:{gap:{$value:`{ams.space.s}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-block":{$value:`{ams.space.m}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-inline":{$value:`{ams.space.m}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}},error:{"border-color":{$value:`{ams.color.feedback.error}`,$extensions:{"nl.amsterdam.type":`color`}},"severity-indicator":{"background-color":{$value:`{ams.color.feedback.error}`,$extensions:{"nl.amsterdam.type":`color`}}}},success:{"border-color":{$value:`{ams.color.feedback.success}`,$extensions:{"nl.amsterdam.type":`color`}},"severity-indicator":{"background-color":{$value:`{ams.color.feedback.success}`,$extensions:{"nl.amsterdam.type":`color`}}}},warning:{"border-color":{$value:`{ams.color.feedback.warning}`,$extensions:{"nl.amsterdam.type":`color`}},"severity-indicator":{"background-color":{$value:`{ams.color.feedback.warning}`,$extensions:{"nl.amsterdam.type":`color`}}}}}},x={ams:b}})))()}function C(e){let r={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...l(),...e.components};return(0,T.jsxs)(T.Fragment,{children:[`
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
`,(0,T.jsx)(r.p,{children:`Use an Alert if the message’s purpose matches one of the following:`}),`
`,(0,T.jsxs)(r.ul,{children:[`
`,(0,T.jsxs)(r.li,{children:[(0,T.jsx)(r.strong,{children:`Information`}),` to bring attention to a message.
This variation is blue and it is the default.`]}),`
`,(0,T.jsxs)(r.li,{children:[(0,T.jsx)(r.strong,{children:`Success`}),` to reassure that a process is complete.
This variation is green.`]}),`
`,(0,T.jsxs)(r.li,{children:[(0,T.jsx)(r.strong,{children:`Warning`}),` when action is needed to prevent damage.
This variation is orange.`]}),`
`,(0,T.jsxs)(r.li,{children:[(0,T.jsx)(r.strong,{children:`Error`}),` indicates an error has occurred.
This variation is red.`]}),`
`]}),`
`,(0,T.jsx)(r.h3,{id:`how-to-use`,children:`How to use`}),`
`,(0,T.jsx)(r.p,{children:`Place the Alert in a Grid Cell to create enough white space around it.`}),`
`,(0,T.jsx)(r.p,{children:`Important and urgent information is to be placed directly below the Page Header.
Examples: system outage or changes in the opening hours of a City Office.
This can be applied to the entire website or to a part of it.`}),`
`,(0,T.jsx)(r.p,{children:`Add a close button if the user should be able to dismiss the Alert.`}),`
`,(0,T.jsxs)(r.p,{children:[`Choose a `,(0,T.jsx)(r.code,{children:`headingLevel`}),` that fits the outline of the page around the Alert; there is no default.
The heading keeps the size of a level 3 Heading whichever level you pick.`]}),`
`,(0,T.jsxs)(r.p,{children:[`You don’t need to set `,(0,T.jsx)(r.code,{children:`headingId`}),`: the Alert generates a unique id for its heading and labels itself with it, so several Alerts on a page never collide.
Pass one only when the heading needs a specific id of your own.`]}),`
`,(0,T.jsxs)(r.p,{children:[`Write the heading and the text so they carry the message on their own.
The severity reaches no one through the colour or the icon alone, which is what `,(0,T.jsx)(r.a,{href:`https://www.w3.org/TR/WCAG22/#use-of-color`,rel:`nofollow`,children:`WCAG 1.4.1`}),` asks you to avoid.`]}),`
`,(0,T.jsx)(r.h2,{id:`examples`,children:`Examples`}),`
`,(0,T.jsx)(r.h3,{id:`warning`,children:`Warning`}),`
`,(0,T.jsx)(r.p,{children:`Display a warning when user action is required.`}),`
`,(0,T.jsx)(a,{of:p}),`
`,(0,T.jsx)(r.h3,{id:`error`,children:`Error`}),`
`,(0,T.jsx)(r.p,{children:`In case of an error, use the red alert.
Provide the user with suggestions on alternative ways to achieve the goal.`}),`
`,(0,T.jsx)(a,{of:h}),`
`,(0,T.jsx)(r.h3,{id:`success`,children:`Success`}),`
`,(0,T.jsx)(r.p,{children:`Announce the success of a significant action.`}),`
`,(0,T.jsx)(a,{of:m}),`
`,(0,T.jsx)(r.h3,{id:`information`,children:`Information`}),`
`,(0,T.jsx)(r.p,{children:`An informative message can emphasize matters that are useful to follow.`}),`
`,(0,T.jsx)(a,{of:_}),`
`,(0,T.jsx)(r.h3,{id:`with-inline-link`,children:`With inline link`}),`
`,(0,T.jsx)(r.p,{children:`Include an inline link in the text to guide the user.`}),`
`,(0,T.jsx)(a,{of:g}),`
`,(0,T.jsx)(r.h2,{id:`design`,children:`Design`}),`
`,(0,T.jsx)(r.p,{children:`An Alert is outlined in the colour of its severity and carries a band of that same colour along its leading edge, with the icon centred in it.
The band takes its dividing line from the outline, so the two meet as one continuous stroke of the same weight.`}),`
`,(0,T.jsx)(r.p,{children:`The background behind the text stays white in all four variants.
Only the outline, the band and the icon change colour, which keeps the text on the same background as the rest of the page and its contrast the same whatever the severity.`}),`
`,(0,T.jsxs)(r.p,{children:[`The heading is fixed at the size of a level 3 Heading, independent of the `,(0,T.jsx)(r.code,{children:`headingLevel`}),` given to it.
Two Alerts then look alike wherever they sit in the outline of a page.`]}),`
`,(0,T.jsx)(r.p,{children:`In print, the band keeps its colour rather than being flattened to save ink.
It is the only part told to do so, because without it nothing distinguishes one severity from another on paper.`}),`
`,(0,T.jsx)(r.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,T.jsxs)(r.p,{children:[`An Alert renders a `,(0,T.jsx)(r.code,{children:`section`}),` labelled by its heading, which makes it a `,(0,T.jsx)(r.code,{children:`region`}),` landmark.
Assistive technology lists it with the other landmarks, so users can reach the message directly instead of hunting for it.`]}),`
`,(0,T.jsxs)(r.p,{children:[`The label is wired up with `,(0,T.jsx)(r.code,{children:`aria-labelledby`}),` rather than left to the heading inside.
NVDA in Chrome does not read that heading as the name of the section otherwise.
Setting `,(0,T.jsx)(r.code,{children:`headingId`}),` to `,(0,T.jsx)(r.code,{children:`null`}),` removes the label, and the landmark with it.`]}),`
`,(0,T.jsx)(r.p,{children:`An Alert does not announce itself when it appears.
It is not a live region, so it suits a message that is already there when a view renders rather than one that must interrupt.`}),`
`,(0,T.jsx)(r.p,{children:`The icon carries no text alternative and the severity is conveyed by colour alone, so neither reaches a screen reader.
Both are reinforcement for a message the heading and text already carry, as described under ‘How to use’.`}),`
`,(0,T.jsx)(r.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,T.jsx)(f,{tokens:x})]})}function w(e={}){let{wrapper:t}={...l(),...e.components};return t?(0,T.jsx)(t,{...e,children:(0,T.jsx)(C,{...e})}):C(e)}var T;function E(){return(E=e((()=>{T=c(),u(),r(),d(),S(),v()})))()}E();export{w as default};