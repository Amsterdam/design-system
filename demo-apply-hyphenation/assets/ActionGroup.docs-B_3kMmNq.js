import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as r}from"./index-1Ha5aU2j.js";import{M as a,e as s,P as h,h as e}from"./index-DLgxtx95.js";import{A as c,S as l,W as d}from"./ActionGroup.stories-tuPzg9U7.js";import"./index-yBjzXJbu.js";import"./index-C0MU9AHG.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-87aPo7dW.js";import"./index-IE9ObSwG.js";import"./index-Cu4lwwaE.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index.esm-C56IaLsI.js";import"./clsx-B-dksMZM.js";import"./index.esm-DvoLfDtE.js";const p=`<!-- @license CC0-1.0 -->

# Action Group

Groups one or more related actions and manages their layout.

## How to use

- Both a [Button](?path=/docs/components-buttons-button--docs) and a [Link](?path=/docs/components-navigation-link--docs) can provide an ‘action’ in this context.
- If two or more buttons or links are in a row, put the one for the primary action first and the other buttons behind it.
- Sighted users will read the primary action first, in line with the natural reading order.
  The same goes for users of screen readers, who will hear the primary action first, and users of a keyboard, who will focus the primary action first.
- Also, this approach keeps the order of buttons consistent on both narrow and wide screens: if the buttons do not fit next to each other, they get stacked vertically with the primary action on top.
- Replace the default ’group’ role with \`role="toolbar"\` for button toolbars.
`;/*@license CC0-1.0*/function i(o){const n={h2:"h2",h3:"h3",p:"p",...r(),...o.components};return t.jsxs(t.Fragment,{children:[`
`,`
`,t.jsx(a,{of:c}),`
`,t.jsx(s,{children:p}),`
`,t.jsx(h,{}),`
`,t.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,t.jsx(n.h3,{id:"stacked",children:"Stacked"}),`
`,t.jsx(n.p,{children:`If the Buttons don’t fit next to each other, they will automatically stack vertically and stretch to the full width.
This can occur in a narrow Dialog, with long labels, a large text size, or when zooming in.
Resize the pink rectangle to see this in action.`}),`
`,t.jsx(e,{of:l}),`
`,t.jsx(n.h3,{id:"with-link",children:"With Link"}),`
`,t.jsx(n.p,{children:"An action that involves navigation should be a link."}),`
`,t.jsx(e,{of:d})]})}function S(o={}){const{wrapper:n}={...r(),...o.components};return n?t.jsx(n,{...o,children:t.jsx(i,{...o})}):i(o)}export{S as default};
