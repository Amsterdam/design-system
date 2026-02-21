import{j as e}from"./iframe-DXIE5VNw.js";import{useMDXComponents as o}from"./index-BuZgDxkq.js";import{M as a,e as s,f as i,h,i as c}from"./blocks-DlqsmmKC.js";import{a as m,E as l}from"./CharacterCount.stories-BAQjMMHw.js";import{D as p}from"./DesignTokensTable-Dwr6gx8p.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CmhfUG0d.js";import"./BorderSample-ChebGInt.js";import"./formatTokenValue-BYjgZrXg.js";import"./Code-B_Nap9ts.js";import"./ColorSample-C75DF6HC.js";import"./SpaceSample-cNxaPOFe.js";import"./TypographySample-Cz2fr9zT.js";const u=`<!-- @license CC0-1.0 -->

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
`,y={"character-count":{color:{$value:"{ams.color.text.default}",$type:"color"},"font-family":{$value:"{ams.typography.font-family}",$type:"fontFamily"},"font-size":{$value:"{ams.typography.body-text.small.font-size}",$extensions:{"nl.amsterdam.type":"fontSize"}},"font-weight":{$value:"{ams.typography.body-text.font-weight}",$type:"fontWeight"},"line-height":{$value:"{ams.typography.body-text.small.line-height}",$extensions:{"nl.amsterdam.type":"lineHeight"}},error:{color:{$value:"{ams.color.feedback.error}",$type:"color"}}}},d={ams:y};function r(n){const t={h2:"h2",h3:"h3",p:"p",...o(),...n.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,`
`,`
`,e.jsx(a,{of:m}),`
`,e.jsx(s,{children:u}),`
`,e.jsx(i,{}),`
`,e.jsx(h,{}),`
`,e.jsx(t.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(t.h3,{id:"error",children:"Error"}),`
`,e.jsx(t.p,{children:"When the length exceeds the maximum length, the colour of the text changes to red."}),`
`,e.jsx(c,{of:l}),`
`,e.jsx(t.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsx(p,{tokens:d})]})}function D(n={}){const{wrapper:t}={...o(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(r,{...n})}):r(n)}export{D as default};
