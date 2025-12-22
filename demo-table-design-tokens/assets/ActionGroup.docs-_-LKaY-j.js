import{j as n}from"./iframe-Dha-7zTR.js";import{useMDXComponents as a}from"./index-CUuWwI6L.js";import{M as s,f as r,P as h,i as e}from"./blocks-C1WmRPMp.js";import{a as c,S as l,W as d}from"./ActionGroup.stories-BWxIZcKl.js";import{D as m}from"./DesignTokensTable-DH0a8p0G.js";import"./preload-helper-PPVm8Dsz.js";import"./index-fiaxSpfT.js";const p=`<!-- @license CC0-1.0 -->

# Action Group

Groups one or more related actions and manages their layout.

## How to use

- Both a [Button](/docs/components-buttons-button--docs) and a [Link](/docs/components-navigation-link--docs) can provide an ‘action’ in this context.
- If two or more buttons or links are in a row, put the one for the primary action first and the other buttons behind it.
- Sighted users will read the primary action first, in line with the natural reading order.
  The same goes for users of screen readers, who will hear the primary action first, and users of a keyboard, who will focus the primary action first.
- Also, this approach keeps the order of buttons consistent on both narrow and wide screens: if the buttons do not fit next to each other, they get stacked vertically with the primary action on top.
- Replace the default ’group’ role with \`role="toolbar"\` for button toolbars.
`,u={"action-group":{gap:{value:"{ams.space.m}"}}},f={ams:u};function i(o){const t={h2:"h2",h3:"h3",p:"p",...a(),...o.components};return n.jsxs(n.Fragment,{children:[`
`,`
`,`
`,`
`,n.jsx(s,{of:c}),`
`,n.jsx(r,{children:p}),`
`,n.jsx(h,{}),`
`,n.jsx(t.h2,{id:"examples",children:"Examples"}),`
`,n.jsx(t.h3,{id:"stacked",children:"Stacked"}),`
`,n.jsx(t.p,{children:`If the Buttons don’t fit next to each other, they will automatically stack vertically and stretch to the full width.
This can occur in a narrow Dialog, with long labels, a large text size, or when zooming in.
Resize the pink rectangle to see this in action.`}),`
`,n.jsx(e,{of:l}),`
`,n.jsx(t.h3,{id:"with-link",children:"With Link"}),`
`,n.jsx(t.p,{children:"An action that involves navigation should be a link."}),`
`,n.jsx(e,{of:d}),`
`,n.jsx(t.h2,{id:"tokens",children:"Tokens"}),`
`,n.jsx(m,{tokens:f})]})}function v(o={}){const{wrapper:t}={...a(),...o.components};return t?n.jsx(t,{...o,children:n.jsx(i,{...o})}):i(o)}export{v as default};
