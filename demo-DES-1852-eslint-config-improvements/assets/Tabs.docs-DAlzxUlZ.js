import{n as e}from"./chunk-DnJy8xQt.js";import{Vt as t}from"./iframe-DuprQ2Co.js";import{r as n}from"./react-ClhXgyXX.js";import{c as r,f as i,i as a,l as o,s}from"./blocks-abrLv4fP.js";import{n as c,t as l}from"./DesignTokensTable-DyAnDK6w.js";import{t as u}from"./mdx-react-shim-DARUJ-hp.js";import{n as d,t as f}from"./Tabs.stories-v8K5ga41.js";var p,m=e((()=>{p=`<!-- @license CC0-1.0 -->

# Tabs

Discloses related pieces of content in a secondary area on the page.

## Guidelines

- Use Tabs to let related content fragments share a space on the current page.
  Each tab has a button that shows its content in a panel.
- Do not make it toggle between large amounts of primary content.
  That would come down to navigating between pages.
  In this context, use [Tab Navigation](/docs/components-navigation-tab-navigation--docs) to offer the user the benefits of links.
- The content of each tab must be usable independent of the others.
- Create a panel for each button.
  Add an \`aria-controls\` attribute to each button and match its value to the \`id\` of the associated panel.
`})),h,g,_=e((()=>{h={tabs:{gap:{$value:`{ams.space.m}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},list:{"box-shadow":{$type:`shadow`,$value:{inset:!0,offsetX:{value:0,unit:`rem`},offsetY:`{ams.border.width.negative.m}`,blur:{value:0,unit:`rem`},spread:{value:0,unit:`rem`},color:`{ams.color.separator}`}}},button:{color:{$value:`{ams.color.interactive.default}`,$extensions:{"nl.amsterdam.type":`color`}},cursor:{$value:`{ams.cursor.interactive}`,$extensions:{"nl.amsterdam.type":`cursor`}},"font-family":{$value:`{ams.typography.font-family}`,$extensions:{"nl.amsterdam.type":`fontFamily`}},"font-size":{$value:`{ams.typography.body-text.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"font-weight":{$value:`{ams.typography.body-text.font-weight}`,$extensions:{"nl.amsterdam.type":`fontWeight`}},"line-height":{$value:`{ams.typography.body-text.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}},"outline-offset":{$value:`calc({ams.focus.outline-offset} * -1)`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-block":{$value:`{ams.space.s}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-inline":{$value:`{ams.space.m}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},hover:{"box-shadow":{$type:`shadow`,$value:{inset:!0,offsetX:{value:0,unit:`rem`},offsetY:`{ams.border.width.negative.m}`,blur:{value:0,unit:`rem`},spread:{value:0,unit:`rem`},color:`currentColor`}},color:{$value:`{ams.color.interactive.hover}`,$extensions:{"nl.amsterdam.type":`color`}}},selected:{"box-shadow":{$type:`shadow`,$value:{inset:!0,offsetX:{value:0,unit:`rem`},offsetY:`{ams.border.width.negative.xl}`,blur:{value:0,unit:`rem`},spread:{value:0,unit:`rem`},color:`currentColor`}},"font-weight":{$value:`{ams.typography.body-text.bold.font-weight}`,$extensions:{"nl.amsterdam.type":`fontWeight`}}},disabled:{color:{$value:`{ams.color.interactive.disabled}`,$extensions:{"nl.amsterdam.type":`color`}},cursor:{$value:`{ams.cursor.disabled}`,$extensions:{"nl.amsterdam.type":`cursor`}}}}}},g={ams:h}}));function v(e){let t={h2:`h2`,p:`p`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...n(),...e.components};return(0,b.jsxs)(b.Fragment,{children:[`
`,`
`,`
`,`
`,(0,b.jsx)(r,{of:f}),`
`,(0,b.jsx)(s,{children:p}),`
`,(0,b.jsx)(o,{}),`
`,(0,b.jsx)(a,{}),`
`,(0,b.jsx)(t.h2,{id:`keyboard-support`,children:`Keyboard support`}),`
`,(0,b.jsx)(t.p,{children:`The user can navigate the links with their keyboard:`}),`
`,(0,b.jsxs)(t.table,{children:[(0,b.jsx)(t.thead,{children:(0,b.jsxs)(t.tr,{children:[(0,b.jsx)(t.th,{style:{textAlign:`left`},children:`key`}),(0,b.jsx)(t.th,{style:{textAlign:`left`},children:`element`})]})}),(0,b.jsxs)(t.tbody,{children:[(0,b.jsxs)(t.tr,{children:[(0,b.jsx)(t.td,{style:{textAlign:`left`},children:`Enter or Space`}),(0,b.jsx)(t.td,{style:{textAlign:`left`},children:`Open or close the tab that has the focus`})]}),(0,b.jsxs)(t.tr,{children:[(0,b.jsx)(t.td,{style:{textAlign:`left`},children:`Tab`}),(0,b.jsx)(t.td,{style:{textAlign:`left`},children:`Go to the next element that can have focus`})]}),(0,b.jsxs)(t.tr,{children:[(0,b.jsx)(t.td,{style:{textAlign:`left`},children:`Shift + Tab`}),(0,b.jsx)(t.td,{style:{textAlign:`left`},children:`Go to the next element that can have focus`})]}),(0,b.jsxs)(t.tr,{children:[(0,b.jsx)(t.td,{style:{textAlign:`left`},children:`Left arrow`}),(0,b.jsx)(t.td,{style:{textAlign:`left`},children:`If the tabs have focus, go to the previous tab`})]}),(0,b.jsxs)(t.tr,{children:[(0,b.jsx)(t.td,{style:{textAlign:`left`},children:`Right arrow`}),(0,b.jsx)(t.td,{style:{textAlign:`left`},children:`If the tabs have focus, go to the next tab`})]}),(0,b.jsxs)(t.tr,{children:[(0,b.jsx)(t.td,{style:{textAlign:`left`},children:`Home`}),(0,b.jsx)(t.td,{style:{textAlign:`left`},children:`If the tabs have focus, go to the first tab`})]}),(0,b.jsxs)(t.tr,{children:[(0,b.jsx)(t.td,{style:{textAlign:`left`},children:`End`}),(0,b.jsx)(t.td,{style:{textAlign:`left`},children:`If the tabs have focus, go to the last tab`})]})]})]}),`
`,(0,b.jsx)(t.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,b.jsx)(l,{tokens:g})]})}function y(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,b.jsx)(t,{...e,children:(0,b.jsx)(v,{...e})}):v(e)}var b;e((()=>{b=t(),u(),i(),d(),m(),_(),c()}))();export{y as default};