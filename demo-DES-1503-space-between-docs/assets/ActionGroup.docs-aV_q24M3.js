import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-BrayXyei.js";import{r as n}from"./react-oCAR5XSR.js";import{c as r,f as i,l as a,n as o,s}from"./blocks-C1HJxkAN.js";import{n as c,t as l}from"./DesignTokensTable-CJgajNVN.js";import{t as u}from"./mdx-react-shim-9Tyt82po.js";import{Stacked as d,WithLink as f,n as p,t as m}from"./ActionGroup.stories-CxO2OK31.js";var h,g=e((()=>{h=`<!-- @license CC0-1.0 -->

# Action Group

Groups one or more related actions and manages their layout.

## How to use

- Both a [Button](/docs/components-buttons-button--docs) and a [Link](/docs/components-navigation-link--docs) can provide an ‘action’ in this context.
- If two or more buttons or links are in a row, put the one for the primary action first and the other buttons behind it.
- Sighted users will read the primary action first, in line with the natural reading order.
  The same goes for users of screen readers, who will hear the primary action first, and users of a keyboard, who will focus the primary action first.
- Also, this approach keeps the order of buttons consistent on both narrow and wide screens: if the buttons do not fit next to each other, they get stacked vertically with the primary action on top.
- Replace the default ’group’ role with \`role="toolbar"\` for button toolbars.
`})),_,v,y=e((()=>{_={"action-group":{gap:{$value:`{ams.space.m}`,$type:`dimension`,$extensions:{"nl.amsterdam.subtype":`space`}}}},v={ams:_}}));function b(e){let t={h2:`h2`,h3:`h3`,p:`p`,...n(),...e.components};return(0,S.jsxs)(S.Fragment,{children:[`
`,`
`,`
`,`
`,(0,S.jsx)(r,{of:m}),`
`,(0,S.jsx)(s,{children:h}),`
`,(0,S.jsx)(a,{}),`
`,(0,S.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,S.jsx)(t.h3,{id:`stacked`,children:`Stacked`}),`
`,(0,S.jsx)(t.p,{children:`If the Buttons don’t fit next to each other, they will automatically stack vertically and stretch to the full width.
This can occur in a narrow Dialog, with long labels, a large text size, or when zooming in.
Resize the pink rectangle to see this in action.`}),`
`,(0,S.jsx)(o,{of:d}),`
`,(0,S.jsx)(t.h3,{id:`with-link`,children:`With Link`}),`
`,(0,S.jsx)(t.p,{children:`An action that involves navigation should be a link.`}),`
`,(0,S.jsx)(o,{of:f}),`
`,(0,S.jsx)(t.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,S.jsx)(l,{tokens:v})]})}function x(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,S.jsx)(t,{...e,children:(0,S.jsx)(b,{...e})}):b(e)}var S;e((()=>{S=t(),u(),i(),p(),g(),y(),c()}))();export{x as default};