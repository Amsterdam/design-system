import{j as n}from"./iframe-RMwqzCzd.js";import{useMDXComponents as s}from"./index-g2PnwlIS.js";import{M as a,f as r,P as h,i as e}from"./blocks-DJIONqt2.js";import{a as c,S as l,W as d}from"./ActionGroup.stories-Lh-t6hTj.js";import{D as p}from"./DesignTokensTable-DTNttNzm.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D3qruZMH.js";import"./FontDesignToken-fiDH8YNd.js";import"./ColorSample-BFMKLB7P.js";const m=`<!-- @license CC0-1.0 -->

# Action Group

Groups one or more related actions and manages their layout.

## How to use

- Both a [Button](/docs/components-buttons-button--docs) and a [Link](/docs/components-navigation-link--docs) can provide an ‘action’ in this context.
- If two or more buttons or links are in a row, put the one for the primary action first and the other buttons behind it.
- Sighted users will read the primary action first, in line with the natural reading order.
  The same goes for users of screen readers, who will hear the primary action first, and users of a keyboard, who will focus the primary action first.
- Also, this approach keeps the order of buttons consistent on both narrow and wide screens: if the buttons do not fit next to each other, they get stacked vertically with the primary action on top.
- Replace the default ’group’ role with \`role="toolbar"\` for button toolbars.
`,u={"action-group":{gap:{$value:"{ams.space.m}",$extensions:{"ams.type":"gap"}}}},f={ams:u};function i(o){const t={h2:"h2",h3:"h3",p:"p",...s(),...o.components};return n.jsxs(n.Fragment,{children:[`
`,`
`,`
`,`
`,n.jsx(a,{of:c}),`
`,n.jsx(r,{children:m}),`
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
`,n.jsx(p,{tokens:f})]})}function D(o={}){const{wrapper:t}={...s(),...o.components};return t?n.jsx(t,{...o,children:n.jsx(i,{...o})}):i(o)}export{D as default};
