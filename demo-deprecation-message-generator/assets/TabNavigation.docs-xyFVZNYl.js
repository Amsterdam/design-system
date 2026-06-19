import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-BqsN2jGA.js";import{E as n,a as r,f as i,i as a,l as o,m as s,n as c,u as l}from"./blocks-DkkOzZX7.js";import{n as u,t as d}from"./DesignTokensTable-DHwXcWoz.js";import{t as f}from"./mdx-react-shim-Da_GZRDL.js";import{Vertical as p,WithIcons as m,WithManyLinks as h,n as g,t as _}from"./TabNavigation.stories-Bktb85Hc.js";var v,y,b=e((()=>{v={"tab-navigation":{list:{"box-shadow":{$type:`shadow`,$value:{inset:!0,offsetX:{value:0,unit:`rem`},offsetY:`{ams.border.width.negative.m}`,blur:{value:0,unit:`rem`},spread:{value:0,unit:`rem`},color:`{ams.color.separator}`}},vertical:{"box-shadow":{$type:`shadow`,$value:{inset:!0,offsetX:`{ams.border.width.negative.m}`,offsetY:{value:0,unit:`rem`},blur:{value:0,unit:`rem`},spread:{value:0,unit:`rem`},color:`{ams.color.separator}`}}}},link:{gap:{$value:`{ams.space.s}`,$type:`dimension`,$extensions:{"nl.amsterdam.subtype":`space`}},color:{$value:`{ams.color.interactive.default}`,$type:`color`},cursor:{$value:`{ams.cursor.interactive}`},"font-family":{$value:`{ams.typography.font-family}`,$type:`fontFamily`},"font-size":{$value:`{ams.typography.body-text.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"font-weight":{$value:`{ams.typography.body-text.font-weight}`,$type:`fontWeight`},"line-height":{$value:`{ams.typography.body-text.line-height}`,$extensions:{"nl.amsterdam.type":`lineHeight`}},"outline-offset":{$value:`calc({ams.focus.outline-offset} * -1)`,$type:`dimension`,$extensions:{"nl.amsterdam.subtype":`space`}},"padding-block":{$value:`{ams.space.s}`,$type:`dimension`,$extensions:{"nl.amsterdam.subtype":`space`}},"padding-inline":{$value:`{ams.space.m}`,$type:`dimension`,$extensions:{"nl.amsterdam.subtype":`space`}},hover:{"box-shadow":{$type:`shadow`,$value:{inset:!0,offsetX:{value:0,unit:`rem`},offsetY:`{ams.border.width.negative.m}`,blur:{value:0,unit:`rem`},spread:{value:0,unit:`rem`},color:`currentColor`}},color:{$value:`{ams.color.interactive.hover}`,$type:`color`}},current:{"box-shadow":{$type:`shadow`,$value:{inset:!0,offsetX:{value:0,unit:`rem`},offsetY:`{ams.border.width.negative.xl}`,blur:{value:0,unit:`rem`},spread:{value:0,unit:`rem`},color:`currentColor`}},"font-weight":{$value:`{ams.typography.body-text.bold.font-weight}`,$type:`fontWeight`}},vertical:{hover:{"box-shadow":{$type:`shadow`,$value:{inset:!0,offsetX:`{ams.border.width.negative.m}`,offsetY:{value:0,unit:`rem`},blur:{value:0,unit:`rem`},spread:{value:0,unit:`rem`},color:`currentColor`}}},current:{"box-shadow":{$type:`shadow`,$value:{inset:!0,offsetX:`{ams.border.width.negative.xl}`,offsetY:{value:0,unit:`rem`},blur:{value:0,unit:`rem`},spread:{value:0,unit:`rem`},color:`currentColor`}}}}}}},y={ams:v}}));function x(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,C.jsxs)(C.Fragment,{children:[`
`,`
`,`
`,`
`,(0,C.jsx)(o,{of:_}),`
`,(0,C.jsx)(i,{}),`
`,(0,C.jsx)(r,{of:_}),`
`,(0,C.jsx)(l,{}),`
`,(0,C.jsx)(a,{}),`
`,(0,C.jsx)(t.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,C.jsx)(t.h3,{id:`when-to-use`,children:`When to use`}),`
`,(0,C.jsx)(t.p,{children:`Use Tab Navigation for navigating between pages that each have their own main content.
Thanks to using links, every tab’s content has its own url that the user can open in a new window, share, or bookmark.`}),`
`,(0,C.jsx)(t.p,{children:`Use the vertical orientation to stack links below each other, e.g. in a sidebar.`}),`
`,(0,C.jsx)(t.h3,{id:`when-not-to-use`,children:`When not to use`}),`
`,(0,C.jsxs)(t.p,{children:[`Use `,(0,C.jsx)(t.a,{href:`/docs/components-containers-tabs--docs`,children:`Tabs`}),` instead to switch between small pieces of secondary content without navigating away.`]}),`
`,(0,C.jsx)(t.h3,{id:`how-to-use`,children:`How to use`}),`
`,(0,C.jsxs)(t.p,{children:[`Add `,(0,C.jsx)(t.code,{children:`aria-current="page"`}),` to the link pointing to the current page.`]}),`
`,(0,C.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,C.jsx)(t.h3,{id:`vertical`,children:`Vertical`}),`
`,(0,C.jsxs)(t.p,{children:[`The links can stack vertically through the `,(0,C.jsx)(t.code,{children:`orientation`}),` prop.
This layout kicks in from the medium breakpoint upward.`]}),`
`,(0,C.jsx)(c,{of:p}),`
`,(0,C.jsx)(t.h3,{id:`with-icons`,children:`With icons`}),`
`,(0,C.jsx)(t.p,{children:`Each link can display an icon before its label.`}),`
`,(0,C.jsx)(c,{of:m}),`
`,(0,C.jsx)(t.h3,{id:`with-many-links`,children:`With many links`}),`
`,(0,C.jsx)(t.p,{children:`The links scroll horizontally when their width exceeds the available space.`}),`
`,(0,C.jsx)(c,{of:h}),`
`,(0,C.jsx)(t.h3,{id:`full-page-template`,children:`Full page template`}),`
`,(0,C.jsxs)(t.p,{children:[`One or two Tab Navigations can be used for large internal websites.
`,(0,C.jsx)(t.a,{href:`/story/pages-internal-navigation-page--default`,children:`Here’s a template for that.`})]}),`
`,(0,C.jsx)(t.h2,{id:`features`,children:`Features`}),`
`,(0,C.jsx)(t.h3,{id:`keyboard-navigation`,children:`Keyboard navigation`}),`
`,(0,C.jsx)(t.p,{children:`The user can navigate the links with their keyboard:`}),`
`,(0,C.jsxs)(t.table,{children:[(0,C.jsx)(t.thead,{children:(0,C.jsxs)(t.tr,{children:[(0,C.jsx)(t.th,{style:{textAlign:`left`},children:`Key`}),(0,C.jsx)(t.th,{style:{textAlign:`left`},children:`Element`})]})}),(0,C.jsxs)(t.tbody,{children:[(0,C.jsxs)(t.tr,{children:[(0,C.jsx)(t.td,{style:{textAlign:`left`},children:`Tab`}),(0,C.jsx)(t.td,{style:{textAlign:`left`},children:`Go to the next element that can have focus`})]}),(0,C.jsxs)(t.tr,{children:[(0,C.jsx)(t.td,{style:{textAlign:`left`},children:`Shift + Tab`}),(0,C.jsx)(t.td,{style:{textAlign:`left`},children:`Go to the previous element that can have focus`})]}),(0,C.jsxs)(t.tr,{children:[(0,C.jsx)(t.td,{style:{textAlign:`left`},children:`Enter`}),(0,C.jsx)(t.td,{style:{textAlign:`left`},children:`Follow the link that has focus`})]})]})]}),`
`,(0,C.jsx)(t.h2,{id:`see-also`,children:`See also`}),`
`,(0,C.jsxs)(t.ul,{children:[`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.a,{href:`/docs/components-containers-tabs--docs`,children:`Tabs`}),` – for switching between secondary content without navigating away.`]}),`
`]}),`
`,(0,C.jsx)(t.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,C.jsx)(d,{tokens:y})]})}function S(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,C.jsx)(t,{...e,children:(0,C.jsx)(x,{...e})}):x(e)}var C;e((()=>{C=t(),f(),s(),u(),b(),g()}))();export{S as default};