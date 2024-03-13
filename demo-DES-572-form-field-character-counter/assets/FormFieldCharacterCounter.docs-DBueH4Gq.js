import{j as e}from"./jsx-runtime-CKrituN3.js";import{M as a,d as o,P as s,e as i}from"./index-C22ZE0Fc.js";import{F as h}from"./FormFieldCharacterCounter.stories-BLhJshBP.js";import{useMDXComponents as c}from"./index-DI5IigMn.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-CjhbO8Qt.js";import"../sb-preview/runtime.js";import"./index-BtM5VmRH.js";import"./index-Bw8VTzHM.js";import"./index-Cmc67Rxs.js";import"./index-DrFu-skq.js";import"./index.esm-DGz5CV2y.js";const m=`<!-- @license CC0-1.0 -->

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
`;function n(t){return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:h}),`
`,e.jsx(o,{children:m}),`
`,e.jsx(s,{}),`
`,e.jsx(i,{})]})}function F(t={}){const{wrapper:r}=Object.assign({},c(),t.components);return r?e.jsx(r,Object.assign({},t,{children:e.jsx(n,t)})):n()}export{F as default};
