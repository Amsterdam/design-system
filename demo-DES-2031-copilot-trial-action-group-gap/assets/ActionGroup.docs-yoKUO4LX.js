import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,d as n,h as r,i,n as a,p as o,u as s}from"./blocks-CXJ28Utr.js";import{t as c}from"./jsx-runtime-ATHzeHXA.js";import{i as l,r as u}from"./react-Dyi61YEg.js";import{n as d,t as f}from"./DesignTokensTable-BzsEoPW6.js";import{a as p,i as m,n as h,r as g,t as _}from"./ActionGroup.stories-fG2zYPPY.js";var v,y;function b(){return(b=e((()=>{v={"action-group":{gap:{$value:`{ams.space.m}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"x-small":{gap:{$value:`{ams.space.xs}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}},small:{gap:{$value:`{ams.space.s}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}},large:{gap:{$value:`{ams.space.l}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}},"x-large":{gap:{$value:`{ams.space.xl}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}}}},y={ams:v}})))()}function x(e){let r={a:`a`,code:`code`,h2:`h2`,h3:`h3`,p:`p`,...l(),...e.components};return(0,C.jsxs)(C.Fragment,{children:[`
`,`
`,`
`,`
`,(0,C.jsx)(s,{of:_}),`
`,(0,C.jsx)(o,{}),`
`,(0,C.jsx)(t,{of:_}),`
`,(0,C.jsx)(n,{}),`
`,(0,C.jsx)(i,{}),`
`,(0,C.jsx)(r.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,C.jsx)(r.h3,{id:`when-to-use`,children:`When to use`}),`
`,(0,C.jsxs)(r.p,{children:[`Both a `,(0,C.jsx)(r.a,{href:`/docs/components-buttons-button--docs`,children:`Button`}),` and a `,(0,C.jsx)(r.a,{href:`/docs/components-navigation-link--docs`,children:`Link`}),` can provide an ‘action’ in this context.`]}),`
`,(0,C.jsx)(r.p,{children:`If two or more Buttons or links are in a row, put the one for the primary action first and the other Buttons behind it.`}),`
`,(0,C.jsx)(r.h3,{id:`how-to-use`,children:`How to use`}),`
`,(0,C.jsxs)(r.p,{children:[`Give the group a name when a page holds several sets of actions and hearing ‘group’ on its own would not say which set this is: point `,(0,C.jsx)(r.code,{children:`aria-labelledby`}),` at a heading that names the set, or at text hidden with the `,(0,C.jsx)(r.code,{children:`ams-visually-hidden`}),` class.`]}),`
`,(0,C.jsx)(r.h2,{id:`examples`,children:`Examples`}),`
`,(0,C.jsx)(r.h3,{id:`stacked`,children:`Stacked`}),`
`,(0,C.jsx)(r.p,{children:`If the Buttons don’t fit next to each other, they will automatically stack vertically and stretch to the full width.
This can occur in a narrow Dialog, with long labels, a large text size, or when zooming in.
Resize the pink rectangle to see this in action.`}),`
`,(0,C.jsx)(a,{of:h}),`
`,(0,C.jsx)(r.h3,{id:`stacked-with-a-small-gap`,children:`Stacked with a small gap`}),`
`,(0,C.jsx)(r.p,{children:`This trial compares a smaller gap for wrapped actions, prompted by the Data List review in #2966.
It is a candidate for design review, not an approved use case for smaller spacing.`}),`
`,(0,C.jsx)(a,{of:g}),`
`,(0,C.jsx)(r.h3,{id:`with-link`,children:`With Link`}),`
`,(0,C.jsx)(r.p,{children:`An action that involves navigation should be a link.`}),`
`,(0,C.jsx)(a,{of:m}),`
`,(0,C.jsx)(r.h2,{id:`features`,children:`Features`}),`
`,(0,C.jsx)(r.p,{children:`Putting the primary action first keeps the order of Buttons consistent on both narrow and wide screens: if the Buttons do not fit next to each other, they get stacked vertically with the primary action on top.`}),`
`,(0,C.jsxs)(r.p,{children:[`The trial `,(0,C.jsx)(r.code,{children:`gap`}),` prop offers `,(0,C.jsx)(r.code,{children:`none`}),`, `,(0,C.jsx)(r.code,{children:`x-small`}),`, `,(0,C.jsx)(r.code,{children:`small`}),`, `,(0,C.jsx)(r.code,{children:`large`}),`, and `,(0,C.jsx)(r.code,{children:`x-large`}),`, matching Row and Column.
Omit it to keep the existing medium gap.
In this trial, it sets both the space between actions on a line and the space between wrapped rows.`]}),`
`,(0,C.jsx)(r.h2,{id:`design`,children:`Design`}),`
`,(0,C.jsxs)(r.p,{children:[`Medium spacing follows the principle that equal or similar components, such as Buttons and Standalone Links, sit a medium space apart.
The final set of sizes, including whether to offer `,(0,C.jsx)(r.code,{children:`none`}),`, remains open.
Whether `,(0,C.jsx)(r.code,{children:`gap`}),` should change both directions or only the gap between wrapped rows also remains open.
The designer's question remains unanswered: in what case would a small gap be better?`]}),`
`,(0,C.jsx)(r.p,{children:`Sighted users will read the primary action first, in line with the natural reading order.
The same goes for users of screen readers, who will hear the primary action first, and users of a keyboard, who will focus the primary action first.`}),`
`,(0,C.jsxs)(r.p,{children:[`An Action Group places an even gutter between a set of actions, much as a `,(0,C.jsx)(r.a,{href:`/docs/components-layout-row--docs`,children:`Row`}),` does, and those actions can be `,(0,C.jsx)(r.a,{href:`/docs/components-buttons-button--docs`,children:`Buttons`}),`, `,(0,C.jsx)(r.a,{href:`/docs/components-navigation-link--docs`,children:`Links`}),`, or a mix of the two.
While they fit on one line the group is only as wide as they are, so it can sit at the end of a Dialog or beside other content without claiming the whole line.`]}),`
`,(0,C.jsx)(r.p,{children:`The difference from a Row is that an Action Group stretches its actions.
A Row lets each item keep its own width, side by side or wrapped onto new lines when you allow it.
An Action Group makes every action grow to fill the width it has, so the moment they no longer sit in a row they stack into a single, full-width column.
This follows from the space available rather than a breakpoint, as the ‘Stacked’ example shows.`}),`
`,(0,C.jsx)(r.p,{children:`On a shared line, actions are centred against one another, so a Button and a Link of different heights meet on a common middle rather than a top edge.`}),`
`,(0,C.jsx)(r.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,C.jsxs)(r.p,{children:[`An Action Group renders a `,(0,C.jsx)(r.code,{children:`div`}),` with the `,(0,C.jsx)(r.code,{children:`group`}),` role, so assistive technology presents the actions as one set instead of as unrelated controls that happen to be adjacent.`]}),`
`,(0,C.jsx)(r.p,{children:`The group has no name of its own.
Screen readers announce it as a group and then read the actions, which is enough when the page holds only one set; ‘How to use’ covers the case where it is not.`}),`
`,(0,C.jsx)(r.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,C.jsx)(f,{tokens:y})]})}function S(e={}){let{wrapper:t}={...l(),...e.components};return t?(0,C.jsx)(t,{...e,children:(0,C.jsx)(x,{...e})}):x(e)}var C;function w(){return(w=e((()=>{C=c(),u(),r(),d(),b(),p()})))()}w();export{S as default};