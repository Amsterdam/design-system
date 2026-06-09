import{n as e}from"./chunk-DnJy8xQt.js";import{Ht as t}from"./iframe-MvWACXnh.js";import{r as n}from"./react-dM2SqqwE.js";import{c as r,f as i,i as a,l as o,n as s,s as c}from"./blocks-siYKy4if.js";import{n as l,t as u}from"./DesignTokensTable-FTIsRTMS.js";import{t as d}from"./mdx-react-shim-Dr9qpYdm.js";import{ExpandedByDefault as f,ReduceLandmarks as p,n as m,t as h}from"./Accordion.stories-v1ARJ5eZ.js";var g,_=e((()=>{g=`<!-- @license CC0-1.0 -->

# Accordion

The accordion component is a list of headings that each show or hide associated content.
Use it to present non-essential content on demand, keeping important content immediately visible.

## Guidelines

Before reaching for an accordion, consider whether splitting the content across multiple pages would serve users better — it often improves both usability and findability through search engines.
If an accordion is the right fit, follow these rules:

- Don't hide essential information in an accordion.
- Use between 3 and 10 sections.
- Set the heading level to match the accordion's position in the page hierarchy; all sections share the same level.
- Write clear headings — users cannot scan hidden content.
- Note that browser "find in page" (Ctrl+F) does not search hidden content.
  If you know the user's search term, expand sections that contain it automatically.
- Sections may contain formatted content such as headings, lists, links, and buttons.
`})),v,y,b=e((()=>{v={accordion:{gap:{$value:`{ams.space.s}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},button:{color:{$value:`{ams.color.interactive.default}`,$extensions:{"nl.amsterdam.type":`color`}},cursor:{$value:`{ams.cursor.interactive}`,$extensions:{"nl.amsterdam.type":`cursor`}},gap:{$value:`{ams.space.s}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"outline-offset":{$value:`{ams.focus.outline-offset}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-block":{$value:`{ams.space.s}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-inline":{$value:`0`,$type:`dimension`,$extensions:{"nl.amsterdam.subtype":`space`}},hover:{color:{$value:`{ams.color.interactive.hover}`,$extensions:{"nl.amsterdam.type":`color`}}}}}},y={ams:v}}));function x(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,C.jsxs)(C.Fragment,{children:[`
`,`
`,`
`,`
`,(0,C.jsx)(r,{of:h}),`
`,(0,C.jsx)(c,{children:g}),`
`,(0,C.jsx)(o,{}),`
`,(0,C.jsx)(a,{}),`
`,(0,C.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,C.jsx)(t.h3,{id:`expanded-by-default`,children:`Expanded by default`}),`
`,(0,C.jsxs)(t.p,{children:[`If you want the contents of an Accordion Section to appear initially, pass the `,(0,C.jsx)(t.code,{children:`defaultExpanded`}),` property to the `,(0,C.jsx)(t.code,{children:`Accordion.Section`}),` component.`]}),`
`,(0,C.jsx)(s,{of:f}),`
`,(0,C.jsx)(t.h3,{id:`limit-the-amount-of-accessibility-landmarks`,children:`Limit the amount of accessibility landmarks`}),`
`,(0,C.jsxs)(t.p,{children:[`An Accordion Section renders a `,(0,C.jsx)(t.code,{children:`section`}),` element in HTML by default.
Each of them introduces a landmark region, but having many of them on a page can confuse screen reader users.
Let Accordions with 6 Sections or more render generic `,(0,C.jsx)(t.code,{children:`div`}),` elements through `,(0,C.jsx)(t.code,{children:`sectionAs="div"`}),`.`]}),`
`,(0,C.jsx)(s,{of:p}),`
`,(0,C.jsx)(t.h2,{id:`keyboard-navigation`,children:`Keyboard navigation`}),`
`,(0,C.jsxs)(t.table,{children:[(0,C.jsx)(t.thead,{children:(0,C.jsxs)(t.tr,{children:[(0,C.jsx)(t.th,{style:{textAlign:`left`},children:`Key`}),(0,C.jsx)(t.th,{style:{textAlign:`left`},children:`Behaviour`})]})}),(0,C.jsxs)(t.tbody,{children:[(0,C.jsxs)(t.tr,{children:[(0,C.jsx)(t.td,{style:{textAlign:`left`},children:`Enter or Space`}),(0,C.jsx)(t.td,{style:{textAlign:`left`},children:`Open or close the focused section`})]}),(0,C.jsxs)(t.tr,{children:[(0,C.jsx)(t.td,{style:{textAlign:`left`},children:`Tab / Shift+Tab`}),(0,C.jsx)(t.td,{style:{textAlign:`left`},children:`Move to the next or previous focusable element`})]}),(0,C.jsxs)(t.tr,{children:[(0,C.jsx)(t.td,{style:{textAlign:`left`},children:`Down / Up arrow`}),(0,C.jsx)(t.td,{style:{textAlign:`left`},children:`Move focus to the next or previous section (wraps around)`})]}),(0,C.jsxs)(t.tr,{children:[(0,C.jsx)(t.td,{style:{textAlign:`left`},children:`Home / End`}),(0,C.jsx)(t.td,{style:{textAlign:`left`},children:`Move focus to the first or last section`})]})]})]}),`
`,(0,C.jsx)(t.h2,{id:`see-also`,children:`See also`}),`
`,(0,C.jsxs)(t.ul,{children:[`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.a,{href:`/docs/utilities-css-prose--docs`,children:`Prose`}),` – applies the recommended vertical spacing for editorial content.`]}),`
`]}),`
`,(0,C.jsx)(t.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,C.jsx)(u,{tokens:y})]})}function S(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,C.jsx)(t,{...e,children:(0,C.jsx)(x,{...e})}):x(e)}var C;e((()=>{C=t(),d(),i(),m(),_(),b(),l()}))();export{S as default};