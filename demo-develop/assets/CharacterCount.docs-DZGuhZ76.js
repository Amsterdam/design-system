import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-BqsN2jGA.js";import{a as n,f as r,i,l as a,m as o,n as s,u as c,v as l}from"./iframe-eoZlGm4y.js";import{n as u,t as d}from"./DesignTokensTable-6_B3Tt76.js";import{t as f}from"./mdx-react-shim-gPYa8SVl.js";import{Error as p,n as m,t as h}from"./CharacterCount.stories-CgfPcDVP.js";var g,_,v=e((()=>{g={"character-count":{color:{$value:`{ams.color.text.default}`,$extensions:{"nl.amsterdam.type":`color`}},"font-family":{$value:`{ams.typography.font-family}`,$extensions:{"nl.amsterdam.type":`fontFamily`}},"font-size":{$value:`{ams.typography.body-text.small.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"font-weight":{$value:`{ams.typography.body-text.font-weight}`,$extensions:{"nl.amsterdam.type":`fontWeight`}},"line-height":{$value:`{ams.typography.body-text.small.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}},error:{color:{$value:`{ams.color.feedback.error}`,$extensions:{"nl.amsterdam.type":`color`}}}}},_={ams:g}}));function y(e){let t={h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...l(),...e.components};return(0,x.jsxs)(x.Fragment,{children:[`
`,`
`,`
`,`
`,(0,x.jsx)(a,{of:h}),`
`,(0,x.jsx)(r,{}),`
`,(0,x.jsx)(n,{of:h}),`
`,(0,x.jsx)(c,{}),`
`,(0,x.jsx)(i,{}),`
`,(0,x.jsx)(t.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,x.jsx)(t.h3,{id:`when-to-use`,children:`When to use`}),`
`,(0,x.jsx)(t.p,{children:`Only use a Character Count when there is a good reason for limiting the number of characters users can enter.
For example, if there is an indication that users are likely to enter more information than they need to.
Or when there is a legal or technical reason that means an entry must be no more than a certain number of characters.`}),`
`,(0,x.jsx)(t.h3,{id:`when-not-to-use`,children:`When not to use`}),`
`,(0,x.jsx)(t.p,{children:`If your users keep hitting the character limit imposed by the backend of your service then try to increase the limit rather than use a Character Count.`}),`
`,(0,x.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,x.jsx)(t.h3,{id:`error`,children:`Error`}),`
`,(0,x.jsx)(t.p,{children:`When the length exceeds the maximum length, the colour of the text changes to red.`}),`
`,(0,x.jsx)(s,{of:p}),`
`,(0,x.jsx)(t.h2,{id:`features`,children:`Features`}),`
`,(0,x.jsx)(t.p,{children:`Users will get updates at a pace that works best for the way they interact with the textarea.
This means:`}),`
`,(0,x.jsxs)(t.ul,{children:[`
`,(0,x.jsx)(t.li,{children:`sighted users will see a count message that updates as they type;`}),`
`,(0,x.jsx)(t.li,{children:`screen reader users will hear the count announcement when they stop typing.`}),`
`]}),`
`,(0,x.jsx)(t.p,{children:`This component does not restrict the user from entering information.
The user can enter more than the character limit, but are told they’ve entered too many characters.
This lets them type or copy and paste their full answer, then edit it down.`}),`
`,(0,x.jsx)(t.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,x.jsx)(d,{tokens:_})]})}function b(e={}){let{wrapper:t}={...l(),...e.components};return t?(0,x.jsx)(t,{...e,children:(0,x.jsx)(y,{...e})}):y(e)}var x;e((()=>{x=t(),f(),o(),u(),v(),m()}))();export{b as default};