import{j as t}from"./iframe-Dxu4r0dB.js";import{useMDXComponents as s}from"./index-YLm-jidV.js";import{M as r,e as a,f as c,i as e}from"./blocks-Bh7IGN9S.js";import{a as h,S as l,W as d}from"./ActionGroup.stories-vDhJD9or.js";import{D as m}from"./DesignTokensTable-CnBKsGSY.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C5UbLzCv.js";import"./BorderSample-CIznh25J.js";import"./formatTokenValue-BYjgZrXg.js";import"./Code-B2r2aJ9v.js";import"./ColorSample-Bt0yTBRT.js";import"./SpaceSample-IUV-j72I.js";import"./TypographySample-IR3LE4Eh.js";const p=`<!-- @license CC0-1.0 -->

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
`,t.jsx(n.h2,{id:"tokens",children:"Tokens"}),`
`,t.jsx(m,{tokens:f})]})}function T(o={}){const{wrapper:n}={...s(),...o.components};return n?t.jsx(n,{...o,children:t.jsx(i,{...o})}):i(o)}export{T as default};
