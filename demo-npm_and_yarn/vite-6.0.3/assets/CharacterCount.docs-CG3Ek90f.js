import{j as e}from"./jsx-runtime-BjgbQsUx.js";import{useMDXComponents as a}from"./index-3rgQkYFR.js";import{ae as o,aq as s,ar as h,as as i,at as c}from"./index-CF71P72j.js";import{C as m,E as l}from"./CharacterCount.stories-DXeDr-El.js";import"./index-D2MAbzvX.js";import"./index-RigO-4kf.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-DxGZ9Cpb.js";import"../sb-preview/runtime.js";import"./index-BIm0odtm.js";import"./index-D-8MO0q_.js";import"./index-CHGET4sZ.js";import"./index-DrFu-skq.js";import"./clsx-B-dksMZM.js";const u=`<!-- @license CC0-1.0 -->

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
`;/*@license CC0-1.0*/function r(t){const n={h2:"h2",h3:"h3",p:"p",...a(),...t.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(o,{of:m}),`
`,e.jsx(s,{children:u}),`
`,e.jsx(h,{}),`
`,e.jsx(i,{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"error",children:"Error"}),`
`,e.jsx(n.p,{children:"When the length exceeds the maximum length, the color of the text changes to red."}),`
`,e.jsx(c,{of:l})]})}function T(t={}){const{wrapper:n}={...a(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{T as default};