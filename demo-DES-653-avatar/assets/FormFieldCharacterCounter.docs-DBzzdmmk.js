import{j as e}from"./jsx-runtime-CKrituN3.js";import{M as o,d as s,P as i,e as h,f as c}from"./index-C99_7UZT.js";import{F as m,E as u}from"./FormFieldCharacterCounter.stories-qsgxXZrj.js";import{useMDXComponents as a}from"./index-DI5IigMn.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-chEQfljY.js";import"../sb-preview/runtime.js";import"./index-BtM5VmRH.js";import"./index-Bw8VTzHM.js";import"./index-Cmc67Rxs.js";import"./index-DrFu-skq.js";import"./index.esm-CLvyEonM.js";const l=`<!-- @license CC0-1.0 -->

# Form Field Character Counter

Help users know how much text they can enter when there is a limit on the number of characters.

Users will get updates at a pace that works best for the way they interact with the textarea. This means:

- sighted users will see a count message that updates as they type
- screen reader users will hear the count announcement when they stop typing.

This component does not restrict the user from entering information. The user can enter more than the character limit, but are told they’ve entered too many characters. This lets them type or copy and paste their full answer, then edit it down.

## Guidelines

- Only use a character counter when there is a good reason for limiting the number of characters users can enter.
  For example, if there is an indication that users are likely to enter more information than they need to.
  Or when there is a legal or technical reason that means an entry must be no more than a certain number of characters.
- If your users keep hitting the character limit imposed by the backend of your service then try to increase the limit rather than use a character counter.
`;function r(t){const n=Object.assign({h2:"h2",p:"p"},a(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:m}),`
`,e.jsx(s,{children:l}),`
`,e.jsx(i,{}),`
`,e.jsx(h,{}),`
`,e.jsx(n.h2,{id:"error",children:"Error"}),`
`,e.jsx(n.p,{children:"When the length exceeds the maximum length, the color of the text changes to red."}),`
`,e.jsx(c,{of:u})]})}function E(t={}){const{wrapper:n}=Object.assign({},a(),t.components);return n?e.jsx(n,Object.assign({},t,{children:e.jsx(r,t)})):r(t)}export{E as default};
