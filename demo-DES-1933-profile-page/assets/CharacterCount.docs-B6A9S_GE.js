import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,d as n,h as r,i,n as a,p as o,u as s}from"./blocks-zzQRermb.js";import{t as c}from"./jsx-runtime-ATHzeHXA.js";import{i as l,r as u}from"./react-Dyi61YEg.js";import{n as d,t as f}from"./DesignTokensTable-PfMU7bcy.js";import{n as p,r as m,t as h}from"./CharacterCount.stories-C61rFVQ1.js";var g,_;function v(){return(v=e((()=>{g={"character-count":{color:{$value:`{ams.color.text.default}`,$extensions:{"nl.amsterdam.type":`color`}},"font-family":{$value:`{ams.typography.font-family}`,$extensions:{"nl.amsterdam.type":`fontFamily`}},"font-size":{$value:`{ams.typography.body-text.small.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"font-weight":{$value:`{ams.typography.body-text.font-weight}`,$extensions:{"nl.amsterdam.type":`fontWeight`}},"line-height":{$value:`{ams.typography.body-text.small.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}},error:{color:{$value:`{ams.color.feedback.error}`,$extensions:{"nl.amsterdam.type":`color`}}}}},_={ams:g}})))()}function y(e){let r={h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...l(),...e.components};return(0,x.jsxs)(x.Fragment,{children:[`
`,`
`,`
`,`
`,(0,x.jsx)(s,{of:h}),`
`,(0,x.jsx)(o,{}),`
`,(0,x.jsx)(t,{of:h}),`
`,(0,x.jsx)(n,{}),`
`,(0,x.jsx)(i,{}),`
`,(0,x.jsx)(r.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,x.jsx)(r.h3,{id:`when-to-use`,children:`When to use`}),`
`,(0,x.jsx)(r.p,{children:`Only use a Character Count when there is a good reason for limiting the number of characters users can enter.
For example, if there is an indication that users are likely to enter more information than they need to.
Or when there is a legal or technical reason that means an entry must be no more than a certain number of characters.`}),`
`,(0,x.jsx)(r.h3,{id:`when-not-to-use`,children:`When not to use`}),`
`,(0,x.jsx)(r.p,{children:`If your users keep hitting the character limit imposed by the backend of your service then try to increase the limit rather than use a Character Count.`}),`
`,(0,x.jsx)(r.h2,{id:`examples`,children:`Examples`}),`
`,(0,x.jsx)(r.h3,{id:`error`,children:`Error`}),`
`,(0,x.jsx)(r.p,{children:`When the length exceeds the maximum length, the colour of the text changes to red.`}),`
`,(0,x.jsx)(a,{of:p}),`
`,(0,x.jsx)(r.h2,{id:`features`,children:`Features`}),`
`,(0,x.jsx)(r.p,{children:`Users will get updates at a pace that works best for the way they interact with the textarea.
This means:`}),`
`,(0,x.jsxs)(r.ul,{children:[`
`,(0,x.jsx)(r.li,{children:`sighted users will see a count message that updates as they type;`}),`
`,(0,x.jsx)(r.li,{children:`screen reader users will hear the count announcement when they stop typing.`}),`
`]}),`
`,(0,x.jsx)(r.p,{children:`This component does not restrict the user from entering information.
The user can enter more than the character limit, but are told they’ve entered too many characters.
This lets them type or copy and paste their full answer, then edit it down.`}),`
`,(0,x.jsx)(r.h2,{id:`design`,children:`Design`}),`
`,(0,x.jsx)(r.p,{children:`A Character Count is one line of small text below the field.
It keeps the ordinary text colour instead of being greyed down, so a reader who needs to check the count is not asked to read weaker text than the rest of the form.`}),`
`,(0,x.jsx)(r.p,{children:`Going over the limit turns it red, and that is the whole of the change: no icon, no border, and nothing about the field itself.`}),`
`,(0,x.jsx)(r.p,{children:`Counting up towards the limit rather than down from it means the message says the same thing before and after the limit is passed.
The wording never has to switch from characters remaining to characters too many.`}),`
`,(0,x.jsx)(r.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,x.jsx)(r.p,{children:`A Character Count is a status region, so screen readers announce the new count without moving focus and without interrupting what is being read.
Someone typing hears the count between words rather than after every keystroke, which is what ‘Features’ above describes.`}),`
`,(0,x.jsx)(r.p,{children:`The text is fixed Dutch — the count, the word ‘van’, the limit, and ‘tekens’ — and cannot be configured.
That is worth weighing before using a Character Count on a page in another language.`}),`
`,(0,x.jsx)(r.p,{children:`Going over the limit is signalled by colour alone, so the count itself has to be read for the change to register.
The text says the same thing either way, which is what keeps the message complete without the colour.`}),`
`,(0,x.jsx)(r.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,x.jsx)(f,{tokens:_})]})}function b(e={}){let{wrapper:t}={...l(),...e.components};return t?(0,x.jsx)(t,{...e,children:(0,x.jsx)(y,{...e})}):y(e)}var x;function S(){return(S=e((()=>{x=c(),u(),r(),d(),v(),m()})))()}S();export{b as default};