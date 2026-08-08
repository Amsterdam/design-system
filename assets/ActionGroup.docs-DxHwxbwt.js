import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,d as n,h as r,i,n as a,p as o,u as s}from"./blocks-CNG2gRRe.js";import{t as c}from"./jsx-runtime-ATHzeHXA.js";import{i as l,r as u}from"./react-Dyi61YEg.js";import{n as d,t as f}from"./DesignTokensTable-DFc5F98A.js";import{i as p,n as m,r as h,t as g}from"./ActionGroup.stories-DP5mDGof.js";var _,v;function y(){return(y=e((()=>{_={"action-group":{gap:{$value:`{ams.space.m}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}}},v={ams:_}})))()}function b(e){let r={a:`a`,code:`code`,h2:`h2`,h3:`h3`,p:`p`,...l(),...e.components};return(0,S.jsxs)(S.Fragment,{children:[`
`,`
`,`
`,`
`,(0,S.jsx)(s,{of:g}),`
`,(0,S.jsx)(o,{}),`
`,(0,S.jsx)(t,{of:g}),`
`,(0,S.jsx)(n,{}),`
`,(0,S.jsx)(i,{}),`
`,(0,S.jsx)(r.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,S.jsx)(r.h3,{id:`when-to-use`,children:`When to use`}),`
`,(0,S.jsxs)(r.p,{children:[`Both a `,(0,S.jsx)(r.a,{href:`/docs/components-buttons-button--docs`,children:`Button`}),` and a `,(0,S.jsx)(r.a,{href:`/docs/components-navigation-link--docs`,children:`Link`}),` can provide an ‘action’ in this context.`]}),`
`,(0,S.jsx)(r.p,{children:`If two or more Buttons or links are in a row, put the one for the primary action first and the other Buttons behind it.`}),`
`,(0,S.jsx)(r.h3,{id:`how-to-use`,children:`How to use`}),`
`,(0,S.jsxs)(r.p,{children:[`Give the group a name when a page holds several sets of actions and hearing ‘group’ on its own would not say which set this is: point `,(0,S.jsx)(r.code,{children:`aria-labelledby`}),` at a heading that names the set, or at text hidden with the `,(0,S.jsx)(r.code,{children:`ams-visually-hidden`}),` class.`]}),`
`,(0,S.jsx)(r.h2,{id:`examples`,children:`Examples`}),`
`,(0,S.jsx)(r.h3,{id:`stacked`,children:`Stacked`}),`
`,(0,S.jsx)(r.p,{children:`If the Buttons don’t fit next to each other, they will automatically stack vertically and stretch to the full width.
This can occur in a narrow Dialog, with long labels, a large text size, or when zooming in.
Resize the pink rectangle to see this in action.`}),`
`,(0,S.jsx)(a,{of:m}),`
`,(0,S.jsx)(r.h3,{id:`with-link`,children:`With Link`}),`
`,(0,S.jsx)(r.p,{children:`An action that involves navigation should be a link.`}),`
`,(0,S.jsx)(a,{of:h}),`
`,(0,S.jsx)(r.h2,{id:`features`,children:`Features`}),`
`,(0,S.jsx)(r.p,{children:`Putting the primary action first keeps the order of Buttons consistent on both narrow and wide screens: if the Buttons do not fit next to each other, they get stacked vertically with the primary action on top.`}),`
`,(0,S.jsx)(r.h2,{id:`design`,children:`Design`}),`
`,(0,S.jsx)(r.p,{children:`Sighted users will read the primary action first, in line with the natural reading order.
The same goes for users of screen readers, who will hear the primary action first, and users of a keyboard, who will focus the primary action first.`}),`
`,(0,S.jsxs)(r.p,{children:[`An Action Group places an even gutter between a set of actions, much as a `,(0,S.jsx)(r.a,{href:`/docs/components-layout-row--docs`,children:`Row`}),` does, and those actions can be `,(0,S.jsx)(r.a,{href:`/docs/components-buttons-button--docs`,children:`Buttons`}),`, `,(0,S.jsx)(r.a,{href:`/docs/components-navigation-link--docs`,children:`Links`}),`, or a mix of the two.
While they fit on one line the group is only as wide as they are, so it can sit at the end of a Dialog or beside other content without claiming the whole line.`]}),`
`,(0,S.jsx)(r.p,{children:`The difference from a Row is that an Action Group stretches its actions.
A Row lets each item keep its own width, side by side or wrapped onto new lines when you allow it.
An Action Group makes every action grow to fill the width it has, so the moment they no longer sit in a row they stack into a single, full-width column.
This follows from the space available rather than a breakpoint, as the ‘Stacked’ example shows.`}),`
`,(0,S.jsx)(r.p,{children:`On a shared line, actions are centred against one another, so a Button and a Link of different heights meet on a common middle rather than a top edge.`}),`
`,(0,S.jsx)(r.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,S.jsxs)(r.p,{children:[`An Action Group renders a `,(0,S.jsx)(r.code,{children:`div`}),` with the `,(0,S.jsx)(r.code,{children:`group`}),` role, so assistive technology presents the actions as one set instead of as unrelated controls that happen to be adjacent.`]}),`
`,(0,S.jsx)(r.p,{children:`The group has no name of its own.
Screen readers announce it as a group and then read the actions, which is enough when the page holds only one set; ‘How to use’ covers the case where it is not.`}),`
`,(0,S.jsx)(r.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,S.jsx)(f,{tokens:v})]})}function x(e={}){let{wrapper:t}={...l(),...e.components};return t?(0,S.jsx)(t,{...e,children:(0,S.jsx)(b,{...e})}):b(e)}var S;function C(){return(C=e((()=>{S=c(),u(),r(),d(),y(),p()})))()}C();export{x as default};