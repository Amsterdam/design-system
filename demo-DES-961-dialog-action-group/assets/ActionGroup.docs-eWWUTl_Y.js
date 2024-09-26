import{j as t}from"./jsx-runtime-BlAj40OV.js";import{useMDXComponents as r}from"./index-BI1Biiay.js";import{ae as i,ak as a,al as s,an as h}from"./index-BlFDnoGi.js";import{A as c,S as l}from"./ActionGroup.stories-D2FON1ca.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-B14Nk3So.js";import"../sb-preview/runtime.js";import"./index-Cf-03bMR.js";import"./index-D-8MO0q_.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";import"./index.esm-skUWpdVt.js";import"./clsx-B-dksMZM.js";import"./index.esm-BBV4ZYo5.js";const m=`<!-- @license CC0-1.0 -->

# Action Group

Groups one or more related actions and manages their layout.

## How to use

- If two or more buttons or links are in a row, put the one for the primary action first and the other buttons behind it.
- Sighted users will read the primary action first, in line with the natural reading order.
  The same goes for users of screen readers, who will hear the primary action first, and users of a keyboard, who will focus the primary action first.
- Also, this approach keeps the order of buttons consistent on both narrow and wide screens: if the buttons do not fit next to each other, they get stacked vertically with the primary action on top.
`;/*@license CC0-1.0*/function o(e){const n={h2:"h2",h3:"h3",p:"p",...r(),...e.components};return t.jsxs(t.Fragment,{children:[`
`,`
`,t.jsx(i,{of:c}),`
`,t.jsx(a,{children:m}),`
`,t.jsx(s,{}),`
`,t.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,t.jsx(n.h3,{id:"stacked",children:"Stacked"}),`
`,t.jsx(n.p,{children:`If the Buttons don’t fit next to each other, they will automatically stack vertically and stretch to the full width.
This can occur in a narrow Dialog, with long labels, a large text size, or when zooming in.
Resize the pink rectangle to see this in action.`}),`
`,t.jsx(h,{of:l})]})}function S(e={}){const{wrapper:n}={...r(),...e.components};return n?t.jsx(n,{...e,children:t.jsx(o,{...e})}):o(e)}export{S as default};
