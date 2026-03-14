import{j as t}from"./iframe-DUjo0XQd.js";import{useMDXComponents as s}from"./index-CL2DjYrX.js";import{M as r,e as a,f as c,i as e}from"./blocks-BjfO1ECG.js";import{a as h,S as l,W as d}from"./ActionGroup.stories-DYEgStXj.js";import{D as m}from"./DesignTokensTable-CcC3dAmQ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BoMkBMpf.js";import"./BorderSample-L31wy3xP.js";import"./formatTokenValue-BYjgZrXg.js";import"./Code-CcJuLi3E.js";import"./ColorSample-BnN6qMX2.js";import"./SpaceSample-BJ4gXQUl.js";import"./TypographySample-CoGOcs8F.js";const p=`<!-- @license CC0-1.0 -->

# Action Group

Groups one or more related actions and manages their layout.

## How to use

- Both a [Button](/docs/components-buttons-button--docs) and a [Link](/docs/components-navigation-link--docs) can provide an ‘action’ in this context.
- If two or more buttons or links are in a row, put the one for the primary action first and the other buttons behind it.
- Sighted users will read the primary action first, in line with the natural reading order.
  The same goes for users of screen readers, who will hear the primary action first, and users of a keyboard, who will focus the primary action first.
- Also, this approach keeps the order of buttons consistent on both narrow and wide screens: if the buttons do not fit next to each other, they get stacked vertically with the primary action on top.
- Replace the default ’group’ role with \`role="toolbar"\` for button toolbars.
`,u={"action-group":{gap:{$value:"{ams.space.m}",$type:"dimension",$extensions:{"nl.amsterdam.subtype":"space"}}}},f={ams:u};function i(o){const n={h2:"h2",h3:"h3",p:"p",...s(),...o.components};return t.jsxs(t.Fragment,{children:[`
`,`
`,`
`,`
`,t.jsx(r,{of:h}),`
`,t.jsx(a,{children:p}),`
`,t.jsx(c,{}),`
`,t.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,t.jsx(n.h3,{id:"stacked",children:"Stacked"}),`
`,t.jsx(n.p,{children:`If the Buttons don’t fit next to each other, they will automatically stack vertically and stretch to the full width.
This can occur in a narrow Dialog, with long labels, a large text size, or when zooming in.
Resize the pink rectangle to see this in action.`}),`
`,t.jsx(e,{of:l}),`
`,t.jsx(n.h3,{id:"with-link",children:"With Link"}),`
`,t.jsx(n.p,{children:"An action that involves navigation should be a link."}),`
`,t.jsx(e,{of:d}),`
`,t.jsx(n.h2,{id:"design-tokens",children:"Design tokens"}),`
`,t.jsx(m,{tokens:f})]})}function E(o={}){const{wrapper:n}={...s(),...o.components};return n?t.jsx(n,{...o,children:t.jsx(i,{...o})}):i(o)}export{E as default};
