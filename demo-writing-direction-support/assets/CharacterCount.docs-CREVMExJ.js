import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{a as t,d as n,h as r,i,n as a,p as o,u as s}from"./blocks-CuAf8lRO.js";import{t as c}from"./jsx-runtime-Bq1bXGty.js";import{i as l}from"./react-BnCtKaSV.js";import{n as u,t as d}from"./DesignTokensTable-BF-z-jC7.js";import{t as f}from"./mdx-react-shim-9RzcSRdq.js";import{Error as p,Translated as m,n as h,t as g}from"./CharacterCount.stories-CVY2-hWy.js";var _,v,y=e((()=>{_={"character-count":{color:{$value:`{ams.color.text.default}`,$extensions:{"nl.amsterdam.type":`color`}},"font-family":{$value:`{ams.typography.font-family}`,$extensions:{"nl.amsterdam.type":`fontFamily`}},"font-size":{$value:`{ams.typography.body-text.small.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"font-weight":{$value:`{ams.typography.body-text.font-weight}`,$extensions:{"nl.amsterdam.type":`fontWeight`}},"line-height":{$value:`{ams.typography.body-text.small.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}},error:{color:{$value:`{ams.color.feedback.error}`,$extensions:{"nl.amsterdam.type":`color`}}}}},v={ams:_}}));function b(e){let r={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...l(),...e.components};return(0,S.jsxs)(S.Fragment,{children:[`
`,`
`,`
`,`
`,(0,S.jsx)(s,{of:g}),`
`,(0,S.jsx)(o,{}),`
`,(0,S.jsx)(t,{of:g}),`
`,(0,S.jsx)(n,{}),`
`,(0,S.jsx)(i,{}),`
`,(0,S.jsx)(r.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,S.jsx)(r.h3,{id:`when-to-use`,children:`When to use`}),`
`,(0,S.jsx)(r.p,{children:`Only use a Character Count when there is a good reason for limiting the number of characters users can enter.
For example, if there is an indication that users are likely to enter more information than they need to.
Or when there is a legal or technical reason that means an entry must be no more than a certain number of characters.`}),`
`,(0,S.jsx)(r.h3,{id:`when-not-to-use`,children:`When not to use`}),`
`,(0,S.jsx)(r.p,{children:`If your users keep hitting the character limit imposed by the backend of your service then try to increase the limit rather than use a Character Count.`}),`
`,(0,S.jsx)(r.h2,{id:`examples`,children:`Examples`}),`
`,(0,S.jsx)(r.h3,{id:`error`,children:`Error`}),`
`,(0,S.jsx)(r.p,{children:`When the length exceeds the maximum length, the colour of the text changes to red.`}),`
`,(0,S.jsx)(a,{of:p}),`
`,(0,S.jsx)(r.h3,{id:`translated-text`,children:`Translated text`}),`
`,(0,S.jsxs)(r.p,{children:[`The component displays its text in Dutch by default.
Pass one of the exported formatters – or a custom function – to `,(0,S.jsx)(r.code,{children:`formatText`}),` to display the count in another language.
The Arabic formatter applies Arabic number–noun agreement.
See the `,(0,S.jsx)(r.a,{href:`/docs/docs-developer-guide-localisation--docs`,children:`Localisation developer guide`}),` for the tested locales.`]}),`
`,(0,S.jsx)(a,{of:m}),`
`,(0,S.jsx)(r.h2,{id:`features`,children:`Features`}),`
`,(0,S.jsx)(r.p,{children:`Users will get updates at a pace that works best for the way they interact with the textarea.
This means:`}),`
`,(0,S.jsxs)(r.ul,{children:[`
`,(0,S.jsx)(r.li,{children:`sighted users will see a count message that updates as they type;`}),`
`,(0,S.jsx)(r.li,{children:`screen reader users will hear the count announcement when they stop typing.`}),`
`]}),`
`,(0,S.jsx)(r.p,{children:`This component does not restrict the user from entering information.
The user can enter more than the character limit, but are told they’ve entered too many characters.
This lets them type or copy and paste their full answer, then edit it down.`}),`
`,(0,S.jsx)(r.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,S.jsx)(d,{tokens:v})]})}function x(e={}){let{wrapper:t}={...l(),...e.components};return t?(0,S.jsx)(t,{...e,children:(0,S.jsx)(b,{...e})}):b(e)}var S;e((()=>{S=c(),f(),r(),u(),y(),h()}))();export{x as default};