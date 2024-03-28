import{j as e}from"./jsx-runtime-CKrituN3.js";import{useMDXComponents as o}from"./index-DSz_1G2r.js";import{M as a,d as s,P as i,e as h,f as c}from"./index-BYOgxNAD.js";import{F as m,E as u}from"./FormFieldCharacterCounter.stories-D8F9aF3c.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-B3cvUpgN.js";import"../sb-preview/runtime.js";import"./index-BtM5VmRH.js";import"./index-Bw8VTzHM.js";import"./index-k_s-dmML.js";import"./index-DrFu-skq.js";import"./index.esm-DDU9YzOo.js";const l=`<!-- @license CC0-1.0 -->

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
`;function r(t){const n={h2:"h2",p:"p",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:m}),`
`,e.jsx(s,{children:l}),`
`,e.jsx(i,{}),`
`,e.jsx(h,{}),`
`,e.jsx(n.h2,{id:"error",children:"Error"}),`
`,e.jsx(n.p,{children:"When the length exceeds the maximum length, the color of the text changes to red."}),`
`,e.jsx(c,{of:u})]})}function E(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{E as default};
