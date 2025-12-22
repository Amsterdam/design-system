import{j as e}from"./iframe-w94ru4Ue.js";import{useMDXComponents as a}from"./index-Bq7Cfrvq.js";import{M as o,f as s,P as h,h as i,i as c}from"./blocks-BYunJLRK.js";import{a as m,E as l}from"./CharacterCount.stories-Bme2W7cD.js";import{D as u}from"./DesignTokensTable-BQOGlbBZ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BDwRgOZS.js";const d=`<!-- @license CC0-1.0 -->

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
`,p={"character-count":{color:{value:"{ams.color.text.default}"},"font-family":{value:"{ams.typography.font-family}"},"font-size":{value:"{ams.typography.body-text.small.font-size}"},"font-weight":{value:"{ams.typography.body-text.font-weight}"},"line-height":{value:"{ams.typography.body-text.small.line-height}"},error:{color:{value:"{ams.color.feedback.error}"}}}},f={ams:p};function r(n){const t={h2:"h2",h3:"h3",p:"p",...a(),...n.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,`
`,`
`,e.jsx(o,{of:m}),`
`,e.jsx(s,{children:d}),`
`,e.jsx(h,{}),`
`,e.jsx(i,{}),`
`,e.jsx(t.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(t.h3,{id:"error",children:"Error"}),`
`,e.jsx(t.p,{children:"When the length exceeds the maximum length, the colour of the text changes to red."}),`
`,e.jsx(c,{of:l}),`
`,e.jsx(t.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsx(u,{tokens:f})]})}function C(n={}){const{wrapper:t}={...a(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(r,{...n})}):r(n)}export{C as default};
