import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,d as n,h as r,i,n as a,p as o,u as s}from"./blocks-msKSRvUz.js";import{t as c}from"./jsx-runtime-ATHzeHXA.js";import{i as l,r as u}from"./react-Dyi61YEg.js";import{n as d,t as f}from"./DesignTokensTable-CANpFZF0.js";import{n as p,t as m}from"./Tabs.stories-tzifzmW9.js";import{r as h,t as g}from"./TabsButton.stories-DlxLEmi-.js";import{r as _,t as v}from"./TabsPanel.stories-BnEUDcur.js";var y,b;function x(){return(x=e((()=>{y={tabs:{gap:{$value:`{ams.space.m}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},list:{"box-shadow":{$type:`shadow`,$value:{inset:!0,offsetX:{value:0,unit:`rem`},offsetY:`{ams.border.width.negative.m}`,blur:{value:0,unit:`rem`},spread:{value:0,unit:`rem`},color:`{ams.color.separator}`}}},button:{color:{$value:`{ams.color.interactive.default}`,$extensions:{"nl.amsterdam.type":`color`}},cursor:{$value:`{ams.cursor.interactive}`,$extensions:{"nl.amsterdam.type":`cursor`}},"font-family":{$value:`{ams.typography.font-family}`,$extensions:{"nl.amsterdam.type":`fontFamily`}},"font-size":{$value:`{ams.typography.body-text.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"font-weight":{$value:`{ams.typography.body-text.font-weight}`,$extensions:{"nl.amsterdam.type":`fontWeight`}},"line-height":{$value:`{ams.typography.body-text.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}},"outline-offset":{$value:`calc({ams.focus.outline-offset} * -1)`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-block":{$value:`{ams.space.s}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-inline":{$value:`{ams.space.m}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},hover:{"box-shadow":{$type:`shadow`,$value:{inset:!0,offsetX:{value:0,unit:`rem`},offsetY:`{ams.border.width.negative.m}`,blur:{value:0,unit:`rem`},spread:{value:0,unit:`rem`},color:`currentColor`}},color:{$value:`{ams.color.interactive.hover}`,$extensions:{"nl.amsterdam.type":`color`}}},selected:{"box-shadow":{$type:`shadow`,$value:{inset:!0,offsetX:{value:0,unit:`rem`},offsetY:`{ams.border.width.negative.xl}`,blur:{value:0,unit:`rem`},spread:{value:0,unit:`rem`},color:`currentColor`}},"font-weight":{$value:`{ams.typography.body-text.bold.font-weight}`,$extensions:{"nl.amsterdam.type":`fontWeight`}}},disabled:{color:{$value:`{ams.color.interactive.disabled}`,$extensions:{"nl.amsterdam.type":`color`}},cursor:{$value:`{ams.cursor.disabled}`,$extensions:{"nl.amsterdam.type":`cursor`}}}}}},b={ams:y}})))()}function S(e){let r={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...l(),...e.components};return(0,w.jsxs)(w.Fragment,{children:[`
`,`
`,`
`,`
`,(0,w.jsx)(s,{of:m}),`
`,(0,w.jsx)(o,{}),`
`,(0,w.jsx)(t,{of:m}),`
`,(0,w.jsx)(n,{}),`
`,(0,w.jsx)(i,{}),`
`,(0,w.jsx)(r.h2,{id:`subcomponents`,children:`Subcomponents`}),`
`,(0,w.jsx)(r.p,{children:`The List groups the Buttons of all tabs; it has no props of its own and is visible in the example above.`}),`
`,(0,w.jsx)(r.h3,{id:`button`,children:`Button`}),`
`,(0,w.jsxs)(r.p,{children:[`Activates its tab.
Point the required `,(0,w.jsx)(r.code,{children:`aria-controls`}),` prop at the `,(0,w.jsx)(r.code,{children:`id`}),` of the corresponding Panel.`]}),`
`,(0,w.jsx)(a,{of:g}),`
`,(0,w.jsx)(i,{of:g}),`
`,(0,w.jsx)(r.h3,{id:`panel`,children:`Panel`}),`
`,(0,w.jsxs)(r.p,{children:[`Holds the content of a tab.
Its `,(0,w.jsx)(r.code,{children:`id`}),` connects it to the Button that controls it.`]}),`
`,(0,w.jsx)(a,{of:v}),`
`,(0,w.jsx)(i,{of:v}),`
`,(0,w.jsx)(r.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,w.jsx)(r.h3,{id:`when-to-use`,children:`When to use`}),`
`,(0,w.jsx)(r.p,{children:`Use Tabs to let related content fragments share a space on the current page.
Each tab has a button that shows its content in a panel.`}),`
`,(0,w.jsx)(r.p,{children:`The content of each tab must be usable independent of the others.`}),`
`,(0,w.jsx)(r.h3,{id:`when-not-to-use`,children:`When not to use`}),`
`,(0,w.jsxs)(r.p,{children:[`Do not use Tabs to toggle between large amounts of primary content.
That would come down to navigating between pages.
In this context, use `,(0,w.jsx)(r.a,{href:`/docs/components-navigation-tab-navigation--docs`,children:`Tab Navigation`}),` to offer the user the benefits of links.`]}),`
`,(0,w.jsx)(r.h3,{id:`how-to-use`,children:`How to use`}),`
`,(0,w.jsxs)(r.p,{children:[`Create a panel for each button.
Add an `,(0,w.jsx)(r.code,{children:`aria-controls`}),` attribute to each button and match its value to the `,(0,w.jsx)(r.code,{children:`id`}),` of the associated panel.`]}),`
`,(0,w.jsx)(r.h2,{id:`features`,children:`Features`}),`
`,(0,w.jsx)(r.h3,{id:`keyboard-navigation`,children:`Keyboard navigation`}),`
`,(0,w.jsxs)(r.table,{children:[(0,w.jsx)(r.thead,{children:(0,w.jsxs)(r.tr,{children:[(0,w.jsx)(r.th,{style:{textAlign:`left`},children:`Key`}),(0,w.jsx)(r.th,{style:{textAlign:`left`},children:`Behaviour`})]})}),(0,w.jsxs)(r.tbody,{children:[(0,w.jsxs)(r.tr,{children:[(0,w.jsx)(r.td,{style:{textAlign:`left`},children:`Enter or Space`}),(0,w.jsx)(r.td,{style:{textAlign:`left`},children:`Open or close the tab that has the focus`})]}),(0,w.jsxs)(r.tr,{children:[(0,w.jsx)(r.td,{style:{textAlign:`left`},children:`Tab`}),(0,w.jsx)(r.td,{style:{textAlign:`left`},children:`Go to the next element that can have focus`})]}),(0,w.jsxs)(r.tr,{children:[(0,w.jsx)(r.td,{style:{textAlign:`left`},children:`Shift + Tab`}),(0,w.jsx)(r.td,{style:{textAlign:`left`},children:`Go to the previous element that can have focus`})]}),(0,w.jsxs)(r.tr,{children:[(0,w.jsx)(r.td,{style:{textAlign:`left`},children:`Left arrow`}),(0,w.jsx)(r.td,{style:{textAlign:`left`},children:`If the tabs have focus, go to the previous tab`})]}),(0,w.jsxs)(r.tr,{children:[(0,w.jsx)(r.td,{style:{textAlign:`left`},children:`Right arrow`}),(0,w.jsx)(r.td,{style:{textAlign:`left`},children:`If the tabs have focus, go to the next tab`})]}),(0,w.jsxs)(r.tr,{children:[(0,w.jsx)(r.td,{style:{textAlign:`left`},children:`Home`}),(0,w.jsx)(r.td,{style:{textAlign:`left`},children:`If the tabs have focus, go to the first tab`})]}),(0,w.jsxs)(r.tr,{children:[(0,w.jsx)(r.td,{style:{textAlign:`left`},children:`End`}),(0,w.jsx)(r.td,{style:{textAlign:`left`},children:`If the tabs have focus, go to the last tab`})]})]})]}),`
`,(0,w.jsx)(r.h2,{id:`design`,children:`Design`}),`
`,(0,w.jsx)(r.p,{children:`A line runs under the whole row of tabs, and the selected tab marks itself with a thicker line of its own on top of it.
Hovering a tab that is not selected draws a line in the same colour but thinner than the selected tab’s, so a hovered tab reads as a step below the selected one rather than as a different treatment.`}),`
`,(0,w.jsx)(r.p,{children:`The selected tab is also set in bold.
A copy of the label at that bold weight sits invisibly behind every tab, reserving the width the bold text will need, so selecting a tab does not nudge its neighbours along the row.`}),`
`,(0,w.jsx)(r.p,{children:`Tabs do not shrink to fit.
When the row is too long it scrolls sideways and snaps to the start of a tab, which keeps every label readable instead of squeezing labels until they wrap or truncate.`}),`
`,(0,w.jsx)(r.p,{children:`The focus ring is drawn inside a tab rather than around it.
The row is a scrolling container, and a ring drawn outside the button would be clipped at its edge.`}),`
`,(0,w.jsx)(r.p,{children:`In forced colours mode the selected tab is filled with the system’s selection colour.
The lines that normally mark it are shadows, and shadows are not rendered in that mode.`}),`
`,(0,w.jsx)(r.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,w.jsx)(r.p,{children:`Tabs implement the tab pattern: the row is a tab list, each button is a tab that names the panel it controls and reports whether it is selected, and each panel is a tab panel labelled by its own tab.`}),`
`,(0,w.jsx)(r.p,{children:`Only the selected tab is in the tab order.
Tab therefore moves past the whole row in one step, and the arrow, Home and End keys move between the tabs, wrapping around at either end.`}),`
`,(0,w.jsx)(r.p,{children:`The panel itself can be focused, so Tab from the selected tab lands on the content it revealed rather than skipping past it.
Panels that are not selected are not rendered at all: their content is absent from the page, so it is neither announced nor found by ‘Find in page’.`}),`
`,(0,w.jsx)(r.p,{children:`The invisible bold copy of each label is hidden from assistive technology, so a tab is announced once rather than twice.`}),`
`,(0,w.jsx)(r.h2,{id:`see-also`,children:`See also`}),`
`,(0,w.jsxs)(r.ul,{children:[`
`,(0,w.jsxs)(r.li,{children:[(0,w.jsx)(r.a,{href:`/docs/components-navigation-tab-navigation--docs`,children:`Tab Navigation`}),` – when each tab should navigate to its own page.`]}),`
`]}),`
`,(0,w.jsx)(r.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,w.jsx)(f,{tokens:b})]})}function C(e={}){let{wrapper:t}={...l(),...e.components};return t?(0,w.jsx)(t,{...e,children:(0,w.jsx)(S,{...e})}):S(e)}var w;function T(){return(T=e((()=>{w=c(),u(),r(),d(),x(),p(),h(),_()})))()}T();export{C as default};