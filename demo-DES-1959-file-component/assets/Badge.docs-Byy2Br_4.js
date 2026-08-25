import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,d as n,h as r,i,n as a,p as o,u as s}from"./blocks-BQKRe05W.js";import{t as c}from"./jsx-runtime-ATHzeHXA.js";import{i as l,r as u}from"./react-Dyi61YEg.js";import{n as d,t as f}from"./DesignTokensTable-BkSwAu_Q.js";import{n as p,r as m,t as h}from"./Badge.stories-C71WrYhM.js";var g,_;function v(){return(v=e((()=>{g={badge:{"background-color":{$value:`{ams.color.feedback.success}`,$extensions:{"nl.amsterdam.type":`color`}},color:{$value:`{ams.color.text.inverse}`,$extensions:{"nl.amsterdam.type":`color`}},"font-family":{$value:`{ams.typography.font-family}`,$extensions:{"nl.amsterdam.type":`fontFamily`}},"font-size":{$value:`{ams.typography.body-text.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"font-weight":{$value:`{ams.typography.body-text.bold.font-weight}`,$extensions:{"nl.amsterdam.type":`fontWeight`}},gap:{$value:`{ams.space.xs}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"line-height":{$value:`{ams.typography.body-text.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}},"padding-inline":{$value:`{ams.space.xs}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},azure:{"background-color":{$value:`{ams.color.feedback.info}`,$extensions:{"nl.amsterdam.type":`color`}},color:{$value:`{ams.color.text.inverse}`,$extensions:{"nl.amsterdam.type":`color`}}},lime:{"background-color":{$value:`{ams.color.highlight.lime}`,$extensions:{"nl.amsterdam.type":`color`}},color:{$value:`{ams.color.text.default}`,$extensions:{"nl.amsterdam.type":`color`}}},magenta:{"background-color":{$value:`{ams.color.highlight.magenta}`,$extensions:{"nl.amsterdam.type":`color`}},color:{$value:`{ams.color.text.inverse}`,$extensions:{"nl.amsterdam.type":`color`}}},orange:{"background-color":{$value:`{ams.color.feedback.warning}`,$extensions:{"nl.amsterdam.type":`color`}},color:{$value:`{ams.color.text.default}`,$extensions:{"nl.amsterdam.type":`color`}}},purple:{"background-color":{$value:`{ams.color.highlight.purple}`,$extensions:{"nl.amsterdam.type":`color`}},color:{$value:`{ams.color.text.inverse}`,$extensions:{"nl.amsterdam.type":`color`}}},red:{"background-color":{$value:`{ams.color.feedback.error}`,$extensions:{"nl.amsterdam.type":`color`}},color:{$value:`{ams.color.text.inverse}`,$extensions:{"nl.amsterdam.type":`color`}}},yellow:{"background-color":{$value:`{ams.color.highlight.yellow}`,$extensions:{"nl.amsterdam.type":`color`}},color:{$value:`{ams.color.text.default}`,$extensions:{"nl.amsterdam.type":`color`}}}}},_={ams:g}})))()}function y(e){let r={a:`a`,code:`code`,h2:`h2`,h3:`h3`,p:`p`,...l(),...e.components};return(0,x.jsxs)(x.Fragment,{children:[`
`,`
`,`
`,`
`,(0,x.jsx)(s,{of:h}),`
`,(0,x.jsx)(o,{}),`
`,(0,x.jsx)(t,{of:h}),`
`,(0,x.jsx)(n,{}),`
`,(0,x.jsx)(i,{}),`
`,(0,x.jsx)(r.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,x.jsx)(r.h3,{id:`how-to-write`,children:`How to write`}),`
`,(0,x.jsx)(r.p,{children:`Let the Badge contain a short text or a number.`}),`
`,(0,x.jsxs)(r.p,{children:[`Write a label that stands on its own without the colour behind it.
Nothing but the label reaches a screen reader, and a colour is not a message anyone should have to read, which is what `,(0,x.jsx)(r.a,{href:`https://www.w3.org/TR/WCAG22/#use-of-color`,rel:`nofollow`,children:`WCAG 1.4.1`}),` asks of you.`]}),`
`,(0,x.jsx)(r.h2,{id:`examples`,children:`Examples`}),`
`,(0,x.jsx)(r.h3,{id:`with-icon`,children:`With icon`}),`
`,(0,x.jsx)(r.p,{children:`Include an icon when it provides meaning that isn’t obvious from the text alone, or when it helps with quick recognition.
This may be helpful for statuses, alerts, or categories that users look over instead of reading.`}),`
`,(0,x.jsx)(a,{of:p}),`
`,(0,x.jsx)(r.h2,{id:`design`,children:`Design`}),`
`,(0,x.jsxs)(r.p,{children:[`Use any of the feedback or highlight `,(0,x.jsx)(r.a,{href:`/docs/brand-design-tokens-colour--docs`,children:`colours`}),` for the background.
The default is green.
Red, orange and green are especially useful for showing an error, warning, or success.
However, they can also be combined with the other colours without carrying these meanings.`]}),`
`,(0,x.jsx)(r.p,{children:`A Badge is set in bold at the size and line height of body text, and it is padded on the left and right but not above and below.
Its coloured block is therefore exactly as tall as one line of text, so a Badge placed in a sentence or a table cell does not push the lines around it apart.`}),`
`,(0,x.jsx)(r.p,{children:`The corners are square and there is no border.
The colour fills the block, which is what makes a Badge read as a label applied to something rather than as a control to press.`}),`
`,(0,x.jsx)(r.p,{children:`In print, a Badge keeps its background colour instead of being flattened to save ink.`}),`
`,(0,x.jsx)(r.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,x.jsxs)(r.p,{children:[`A Badge renders a `,(0,x.jsx)(r.code,{children:`span`}),` with no role of its own, so its text is read as part of the sentence or the cell it sits in rather than announced separately.`]}),`
`,(0,x.jsx)(r.p,{children:`Neither the background colour nor an icon reaches a screen reader; the label carries the whole message on its own.
‘How to write’ covers what that asks of the wording.`}),`
`,(0,x.jsx)(r.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,x.jsx)(f,{tokens:_})]})}function b(e={}){let{wrapper:t}={...l(),...e.components};return t?(0,x.jsx)(t,{...e,children:(0,x.jsx)(y,{...e})}):y(e)}var x;function S(){return(S=e((()=>{x=c(),u(),r(),d(),v(),m()})))()}S();export{b as default};