import{n as e}from"./chunk-zsgVPwQN.js";import{t}from"./jsx-runtime-GmyBfqKJ.js";import{r as n}from"./react-RY8N8R-x.js";import{c as r,f as i,i as a,l as o,n as s,s as c}from"./blocks-BMurOIz2.js";import{n as l,t as u}from"./DesignTokensTable-Dr8bxsPE.js";import{t as d}from"./mdx-react-shim-ynubY8I9.js";import{Vertical as f,WithIcons as p,WithManyLinks as m,n as h,t as g}from"./TabNavigation.stories-BAhE3mUv.js";var _,v=e((()=>{_=`<!-- @license CC0-1.0 -->

# Tab Navigation

A horizontal or vertical list of links, styled as tabs, to navigate between a set of related pages.

## Guidelines

- Use Tab Navigation for navigating between pages that each have their own main content.
  Thanks to using links, every tab’s content has its own url that the user can open in a new window, share, or bookmark.
- Use [Tabs](https://designsystem.amsterdam/?path=/docs/components-containers-tabs--docs) instead to switch between small pieces of secondary content without navigating away.
- Use the vertical orientation to stack links below each other, e.g. in a sidebar.
- Add \`aria-current="page"\` to the link pointing to the current page.
`})),y,b,x=e((()=>{y={"tab-navigation":{list:{"box-shadow":{$type:`shadow`,$value:{inset:!0,offsetX:{value:0,unit:`rem`},offsetY:`{ams.border.width.negative.m}`,blur:{value:0,unit:`rem`},spread:{value:0,unit:`rem`},color:`{ams.color.separator}`}},vertical:{"box-shadow":{$type:`shadow`,$value:{inset:!0,offsetX:`{ams.border.width.negative.m}`,offsetY:{value:0,unit:`rem`},blur:{value:0,unit:`rem`},spread:{value:0,unit:`rem`},color:`{ams.color.separator}`}}}},link:{gap:{$value:`{ams.space.s}`,$type:`dimension`,$extensions:{"nl.amsterdam.subtype":`space`}},color:{$value:`{ams.color.interactive.default}`,$type:`color`},cursor:{$value:`{ams.cursor.interactive}`},"font-family":{$value:`{ams.typography.font-family}`,$type:`fontFamily`},"font-size":{$value:`{ams.typography.body-text.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"font-weight":{$value:`{ams.typography.body-text.font-weight}`,$type:`fontWeight`},"line-height":{$value:`{ams.typography.body-text.line-height}`,$extensions:{"nl.amsterdam.type":`lineHeight`}},"outline-offset":{$value:`calc({ams.focus.outline-offset} * -1)`,$type:`dimension`,$extensions:{"nl.amsterdam.subtype":`space`}},"padding-block":{$value:`{ams.space.s}`,$type:`dimension`,$extensions:{"nl.amsterdam.subtype":`space`}},"padding-inline":{$value:`{ams.space.m}`,$type:`dimension`,$extensions:{"nl.amsterdam.subtype":`space`}},hover:{"box-shadow":{$type:`shadow`,$value:{inset:!0,offsetX:{value:0,unit:`rem`},offsetY:`{ams.border.width.negative.m}`,blur:{value:0,unit:`rem`},spread:{value:0,unit:`rem`},color:`currentColor`}},color:{$value:`{ams.color.interactive.hover}`,$type:`color`}},current:{"box-shadow":{$type:`shadow`,$value:{inset:!0,offsetX:{value:0,unit:`rem`},offsetY:`{ams.border.width.negative.xl}`,blur:{value:0,unit:`rem`},spread:{value:0,unit:`rem`},color:`currentColor`}},"font-weight":{$value:`{ams.typography.body-text.bold.font-weight}`,$type:`fontWeight`}},vertical:{hover:{"box-shadow":{$type:`shadow`,$value:{inset:!0,offsetX:`{ams.border.width.negative.m}`,offsetY:{value:0,unit:`rem`},blur:{value:0,unit:`rem`},spread:{value:0,unit:`rem`},color:`currentColor`}}},current:{"box-shadow":{$type:`shadow`,$value:{inset:!0,offsetX:`{ams.border.width.negative.xl}`,offsetY:{value:0,unit:`rem`},blur:{value:0,unit:`rem`},spread:{value:0,unit:`rem`},color:`currentColor`}}}}}}},b={ams:y}}));function S(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,p:`p`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...n(),...e.components};return(0,w.jsxs)(w.Fragment,{children:[`
`,`
`,`
`,`
`,(0,w.jsx)(r,{of:g}),`
`,(0,w.jsx)(c,{children:_}),`
`,(0,w.jsx)(o,{}),`
`,(0,w.jsx)(a,{}),`
`,(0,w.jsx)(t.h2,{id:`keyboard-support`,children:`Keyboard support`}),`
`,(0,w.jsx)(t.p,{children:`The user can navigate the links with their keyboard:`}),`
`,(0,w.jsxs)(t.table,{children:[(0,w.jsx)(t.thead,{children:(0,w.jsxs)(t.tr,{children:[(0,w.jsx)(t.th,{style:{textAlign:`left`},children:`key`}),(0,w.jsx)(t.th,{style:{textAlign:`left`},children:`element`})]})}),(0,w.jsxs)(t.tbody,{children:[(0,w.jsxs)(t.tr,{children:[(0,w.jsx)(t.td,{style:{textAlign:`left`},children:`Tab`}),(0,w.jsx)(t.td,{style:{textAlign:`left`},children:`Go to the next element that can have focus`})]}),(0,w.jsxs)(t.tr,{children:[(0,w.jsx)(t.td,{style:{textAlign:`left`},children:`Shift + Tab`}),(0,w.jsx)(t.td,{style:{textAlign:`left`},children:`Go to the previous element that can have focus`})]}),(0,w.jsxs)(t.tr,{children:[(0,w.jsx)(t.td,{style:{textAlign:`left`},children:`Enter`}),(0,w.jsx)(t.td,{style:{textAlign:`left`},children:`Follow the link that has focus`})]})]})]}),`
`,(0,w.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,w.jsx)(t.h3,{id:`vertical`,children:`Vertical`}),`
`,(0,w.jsxs)(t.p,{children:[`The links can stack vertically through the `,(0,w.jsx)(t.code,{children:`orientation`}),` prop.
This layout kicks in from the medium breakpoint upward.`]}),`
`,(0,w.jsx)(s,{of:f}),`
`,(0,w.jsx)(t.h3,{id:`with-icons`,children:`With icons`}),`
`,(0,w.jsx)(t.p,{children:`Each link can display an icon before its label.`}),`
`,(0,w.jsx)(s,{of:p}),`
`,(0,w.jsx)(t.h3,{id:`with-many-links`,children:`With many links`}),`
`,(0,w.jsx)(t.p,{children:`The links scroll horizontally when their width exceeds the available space.`}),`
`,(0,w.jsx)(s,{of:m}),`
`,(0,w.jsx)(t.h3,{id:`full-page-template`,children:`Full page template`}),`
`,(0,w.jsxs)(t.p,{children:[`One or two Tab Navigations can be used for large internal websites.
`,(0,w.jsx)(t.a,{href:`/story/pages-internal-navigation-page--default`,children:`Here’s a template for that.`})]}),`
`,(0,w.jsx)(t.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,w.jsx)(u,{tokens:b})]})}function C(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,w.jsx)(t,{...e,children:(0,w.jsx)(S,{...e})}):S(e)}var w;e((()=>{w=t(),d(),i(),h(),v(),x(),l()}))();export{C as default};