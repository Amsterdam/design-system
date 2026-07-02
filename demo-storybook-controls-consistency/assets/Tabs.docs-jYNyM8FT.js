import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./jsx-runtime-BCDDjCIb.js";import{b as n,d as r,f as i,g as a,i as o,m as s,o as c,s as l}from"./iframe-D_U85AaE.js";import{n as u,t as d}from"./DesignTokensTable-BW4FGviz.js";import{t as f}from"./mdx-react-shim-64I0EcDd.js";import{n as p,t as m}from"./Tabs.stories-C-2A-IBI.js";import{Button as h,t as g}from"./TabsButton.stories-DPuovY6u.js";import{Panel as _,t as v}from"./TabsPanel.stories-0fUaQ6fo.js";var y,b,x=e((()=>{y={tabs:{gap:{$value:`{ams.space.m}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},list:{"box-shadow":{$type:`shadow`,$value:{inset:!0,offsetX:{value:0,unit:`rem`},offsetY:`{ams.border.width.negative.m}`,blur:{value:0,unit:`rem`},spread:{value:0,unit:`rem`},color:`{ams.color.separator}`}}},button:{color:{$value:`{ams.color.interactive.default}`,$extensions:{"nl.amsterdam.type":`color`}},cursor:{$value:`{ams.cursor.interactive}`,$extensions:{"nl.amsterdam.type":`cursor`}},"font-family":{$value:`{ams.typography.font-family}`,$extensions:{"nl.amsterdam.type":`fontFamily`}},"font-size":{$value:`{ams.typography.body-text.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"font-weight":{$value:`{ams.typography.body-text.font-weight}`,$extensions:{"nl.amsterdam.type":`fontWeight`}},"line-height":{$value:`{ams.typography.body-text.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}},"outline-offset":{$value:`calc({ams.focus.outline-offset} * -1)`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-block":{$value:`{ams.space.s}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-inline":{$value:`{ams.space.m}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},hover:{"box-shadow":{$type:`shadow`,$value:{inset:!0,offsetX:{value:0,unit:`rem`},offsetY:`{ams.border.width.negative.m}`,blur:{value:0,unit:`rem`},spread:{value:0,unit:`rem`},color:`currentColor`}},color:{$value:`{ams.color.interactive.hover}`,$extensions:{"nl.amsterdam.type":`color`}}},selected:{"box-shadow":{$type:`shadow`,$value:{inset:!0,offsetX:{value:0,unit:`rem`},offsetY:`{ams.border.width.negative.xl}`,blur:{value:0,unit:`rem`},spread:{value:0,unit:`rem`},color:`currentColor`}},"font-weight":{$value:`{ams.typography.body-text.bold.font-weight}`,$extensions:{"nl.amsterdam.type":`fontWeight`}}},disabled:{color:{$value:`{ams.color.interactive.disabled}`,$extensions:{"nl.amsterdam.type":`color`}},cursor:{$value:`{ams.cursor.disabled}`,$extensions:{"nl.amsterdam.type":`cursor`}}}}}},b={ams:y}}));function S(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,w.jsxs)(w.Fragment,{children:[`
`,`
`,`
`,`
`,(0,w.jsx)(r,{of:m}),`
`,(0,w.jsx)(s,{}),`
`,(0,w.jsx)(l,{of:m}),`
`,(0,w.jsx)(i,{}),`
`,(0,w.jsx)(c,{}),`
`,(0,w.jsx)(t.h2,{id:`subcomponents`,children:`Subcomponents`}),`
`,(0,w.jsx)(t.p,{children:`The List groups the Buttons of all tabs; it has no props of its own and is visible in the example above.`}),`
`,(0,w.jsx)(t.h3,{id:`button`,children:`Button`}),`
`,(0,w.jsxs)(t.p,{children:[`Activates its tab.
Point the required `,(0,w.jsx)(t.code,{children:`aria-controls`}),` prop at the `,(0,w.jsx)(t.code,{children:`id`}),` of the corresponding Panel.`]}),`
`,(0,w.jsx)(o,{of:h}),`
`,(0,w.jsx)(c,{of:h}),`
`,(0,w.jsx)(t.h3,{id:`panel`,children:`Panel`}),`
`,(0,w.jsxs)(t.p,{children:[`Holds the content of a tab.
Its `,(0,w.jsx)(t.code,{children:`id`}),` connects it to the Button that controls it.`]}),`
`,(0,w.jsx)(o,{of:_}),`
`,(0,w.jsx)(c,{of:_}),`
`,(0,w.jsx)(t.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,w.jsx)(t.h3,{id:`when-to-use`,children:`When to use`}),`
`,(0,w.jsx)(t.p,{children:`Use Tabs to let related content fragments share a space on the current page.
Each tab has a button that shows its content in a panel.`}),`
`,(0,w.jsx)(t.p,{children:`The content of each tab must be usable independent of the others.`}),`
`,(0,w.jsx)(t.h3,{id:`when-not-to-use`,children:`When not to use`}),`
`,(0,w.jsxs)(t.p,{children:[`Do not use Tabs to toggle between large amounts of primary content.
That would come down to navigating between pages.
In this context, use `,(0,w.jsx)(t.a,{href:`/docs/components-navigation-tab-navigation--docs`,children:`Tab Navigation`}),` to offer the user the benefits of links.`]}),`
`,(0,w.jsx)(t.h3,{id:`how-to-use`,children:`How to use`}),`
`,(0,w.jsxs)(t.p,{children:[`Create a panel for each button.
Add an `,(0,w.jsx)(t.code,{children:`aria-controls`}),` attribute to each button and match its value to the `,(0,w.jsx)(t.code,{children:`id`}),` of the associated panel.`]}),`
`,(0,w.jsx)(t.h2,{id:`features`,children:`Features`}),`
`,(0,w.jsx)(t.h3,{id:`keyboard-navigation`,children:`Keyboard navigation`}),`
`,(0,w.jsxs)(t.table,{children:[(0,w.jsx)(t.thead,{children:(0,w.jsxs)(t.tr,{children:[(0,w.jsx)(t.th,{style:{textAlign:`left`},children:`Key`}),(0,w.jsx)(t.th,{style:{textAlign:`left`},children:`Behaviour`})]})}),(0,w.jsxs)(t.tbody,{children:[(0,w.jsxs)(t.tr,{children:[(0,w.jsx)(t.td,{style:{textAlign:`left`},children:`Enter or Space`}),(0,w.jsx)(t.td,{style:{textAlign:`left`},children:`Open or close the tab that has the focus`})]}),(0,w.jsxs)(t.tr,{children:[(0,w.jsx)(t.td,{style:{textAlign:`left`},children:`Tab`}),(0,w.jsx)(t.td,{style:{textAlign:`left`},children:`Go to the next element that can have focus`})]}),(0,w.jsxs)(t.tr,{children:[(0,w.jsx)(t.td,{style:{textAlign:`left`},children:`Shift + Tab`}),(0,w.jsx)(t.td,{style:{textAlign:`left`},children:`Go to the previous element that can have focus`})]}),(0,w.jsxs)(t.tr,{children:[(0,w.jsx)(t.td,{style:{textAlign:`left`},children:`Left arrow`}),(0,w.jsx)(t.td,{style:{textAlign:`left`},children:`If the tabs have focus, go to the previous tab`})]}),(0,w.jsxs)(t.tr,{children:[(0,w.jsx)(t.td,{style:{textAlign:`left`},children:`Right arrow`}),(0,w.jsx)(t.td,{style:{textAlign:`left`},children:`If the tabs have focus, go to the next tab`})]}),(0,w.jsxs)(t.tr,{children:[(0,w.jsx)(t.td,{style:{textAlign:`left`},children:`Home`}),(0,w.jsx)(t.td,{style:{textAlign:`left`},children:`If the tabs have focus, go to the first tab`})]}),(0,w.jsxs)(t.tr,{children:[(0,w.jsx)(t.td,{style:{textAlign:`left`},children:`End`}),(0,w.jsx)(t.td,{style:{textAlign:`left`},children:`If the tabs have focus, go to the last tab`})]})]})]}),`
`,(0,w.jsx)(t.h2,{id:`see-also`,children:`See also`}),`
`,(0,w.jsxs)(t.ul,{children:[`
`,(0,w.jsxs)(t.li,{children:[(0,w.jsx)(t.a,{href:`/docs/components-navigation-tab-navigation--docs`,children:`Tab Navigation`}),` – when each tab should navigate to its own page.`]}),`
`]}),`
`,(0,w.jsx)(t.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,w.jsx)(d,{tokens:b})]})}function C(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,w.jsx)(t,{...e,children:(0,w.jsx)(S,{...e})}):S(e)}var w;e((()=>{w=t(),f(),a(),u(),x(),p(),g(),v()}))();export{C as default};