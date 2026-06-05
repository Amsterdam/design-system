import{n as e}from"./chunk-DnJy8xQt.js";import{Ht as t}from"./iframe-DNHa9dNb.js";import{r as n}from"./react-CMXur4lX.js";import{c as r,f as i,i as a,l as o,n as s,s as c}from"./blocks-q2Ykggxr.js";import{n as l,t as u}from"./DesignTokensTable-C8Yzh4g_.js";import{t as d}from"./mdx-react-shim-DtWSS3XK.js";import{Error as f,n as p,t as m}from"./CharacterCount.stories-BH8jQ7Cz.js";var h,g=e((()=>{h=`<!-- @license CC0-1.0 -->

# Character Count

Help users know how much text they can enter when there is a limit on the number of characters.

Users will get updates at a pace that works best for the way they interact with the textarea. This means:

- sighted users will see a count message that updates as they type;
- screen reader users will hear the count announcement when they stop typing.

This component does not restrict the user from entering information. The user can enter more than the character limit, but are told they’ve entered too many characters. This lets them type or copy and paste their full answer, then edit it down.

## Guidelines

- Only use a character count when there is a good reason for limiting the number of characters users can enter.
  For example, if there is an indication that users are likely to enter more information than they need to.
  Or when there is a legal or technical reason that means an entry must be no more than a certain number of characters.
- If your users keep hitting the character limit imposed by the backend of your service then try to increase the limit rather than use a character count.
`})),_,v,y=e((()=>{_={"character-count":{color:{$value:`{ams.color.text.default}`,$extensions:{"nl.amsterdam.type":`color`}},"font-family":{$value:`{ams.typography.font-family}`,$extensions:{"nl.amsterdam.type":`fontFamily`}},"font-size":{$value:`{ams.typography.body-text.small.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"font-weight":{$value:`{ams.typography.body-text.font-weight}`,$extensions:{"nl.amsterdam.type":`fontWeight`}},"line-height":{$value:`{ams.typography.body-text.small.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}},error:{color:{$value:`{ams.color.feedback.error}`,$extensions:{"nl.amsterdam.type":`color`}}}}},v={ams:_}}));function b(e){let t={h2:`h2`,h3:`h3`,p:`p`,...n(),...e.components};return(0,S.jsxs)(S.Fragment,{children:[`
`,`
`,`
`,`
`,(0,S.jsx)(r,{of:m}),`
`,(0,S.jsx)(c,{children:h}),`
`,(0,S.jsx)(o,{}),`
`,(0,S.jsx)(a,{}),`
`,(0,S.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,S.jsx)(t.h3,{id:`error`,children:`Error`}),`
`,(0,S.jsx)(t.p,{children:`When the length exceeds the maximum length, the colour of the text changes to red.`}),`
`,(0,S.jsx)(s,{of:f}),`
`,(0,S.jsx)(t.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,S.jsx)(u,{tokens:v})]})}function x(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,S.jsx)(t,{...e,children:(0,S.jsx)(b,{...e})}):b(e)}var S;e((()=>{S=t(),d(),i(),p(),g(),y(),l()}))();export{x as default};