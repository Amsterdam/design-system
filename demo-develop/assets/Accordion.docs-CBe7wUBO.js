import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-BqsN2jGA.js";import{E as n,a as r,f as i,i as a,l as o,m as s,n as c,u as l}from"./blocks-Dp0ks0nM.js";import{n as u,t as d}from"./DesignTokensTable-CKQpq1BX.js";import{t as f}from"./mdx-react-shim-7NFb93mG.js";import{ExpandedByDefault as p,ReduceLandmarks as m,n as h,t as g}from"./Accordion.stories-B9j3TUhJ.js";var _,v,y=e((()=>{_={accordion:{gap:{$value:`{ams.space.s}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},button:{color:{$value:`{ams.color.interactive.default}`,$extensions:{"nl.amsterdam.type":`color`}},cursor:{$value:`{ams.cursor.interactive}`,$extensions:{"nl.amsterdam.type":`cursor`}},gap:{$value:`{ams.space.s}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"outline-offset":{$value:`{ams.focus.outline-offset}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-block":{$value:`{ams.space.s}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-inline":{$value:`0`,$type:`dimension`,$extensions:{"nl.amsterdam.subtype":`space`}},hover:{color:{$value:`{ams.color.interactive.hover}`,$extensions:{"nl.amsterdam.type":`color`}}}}}},v={ams:_}}));function b(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,S.jsxs)(S.Fragment,{children:[`
`,`
`,`
`,`
`,(0,S.jsx)(o,{of:g}),`
`,(0,S.jsx)(i,{}),`
`,(0,S.jsx)(r,{of:g}),`
`,(0,S.jsx)(l,{}),`
`,(0,S.jsx)(a,{}),`
`,(0,S.jsx)(t.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,S.jsx)(t.h3,{id:`when-to-use`,children:`When to use`}),`
`,(0,S.jsx)(t.p,{children:`Use an Accordion to keep secondary content collapsed by default, so the primary content of a page stays prominent.
A typical example is a list of frequently asked questions.`}),`
`,(0,S.jsx)(t.h3,{id:`when-not-to-use`,children:`When not to use`}),`
`,(0,S.jsx)(t.p,{children:`Don’t hide essential information in an Accordion.
Users may not realise it is there.`}),`
`,(0,S.jsx)(t.p,{children:`For long content that deserves its own page, split it across multiple pages instead.
That often improves both usability and findability through search engines.`}),`
`,(0,S.jsx)(t.h3,{id:`how-to-use`,children:`How to use`}),`
`,(0,S.jsx)(t.p,{children:`Use between 3 and 10 sections.
Fewer is rarely worth the extra interaction; more makes the list hard to scan.`}),`
`,(0,S.jsx)(t.p,{children:`Provide each section with a clear, descriptive label.
Users cannot scan the content inside a collapsed section.`}),`
`,(0,S.jsxs)(t.p,{children:[`Set `,(0,S.jsx)(t.code,{children:`headingLevel`}),` on the Accordion to match its position in the page hierarchy.
All sections share that level.`]}),`
`,(0,S.jsx)(t.h3,{id:`how-to-write`,children:`How to write`}),`
`,(0,S.jsx)(t.p,{children:`Write labels that describe what the user will find inside the section.
Use sentence case.`}),`
`,(0,S.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,S.jsx)(t.h3,{id:`expanded-by-default`,children:`Expanded by default`}),`
`,(0,S.jsxs)(t.p,{children:[`Pass `,(0,S.jsx)(t.code,{children:`defaultExpanded`}),` to a section to make it visible from the start.
Use this sparingly – it works against the goal of keeping content collapsed.`]}),`
`,(0,S.jsx)(c,{of:p}),`
`,(0,S.jsx)(t.h3,{id:`reduce-landmarks`,children:`Reduce landmarks`}),`
`,(0,S.jsxs)(t.p,{children:[`An Accordion Section renders a `,(0,S.jsx)(t.code,{children:`<section>`}),` element by default, which creates a landmark region.
Many landmarks on one page can be noisy for screen reader users.
For Accordions with six or more sections, render generic `,(0,S.jsx)(t.code,{children:`<div>`}),` elements through `,(0,S.jsx)(t.code,{children:`sectionAs="div"`}),`.`]}),`
`,(0,S.jsx)(c,{of:m}),`
`,(0,S.jsx)(t.h2,{id:`features`,children:`Features`}),`
`,(0,S.jsx)(t.p,{children:`The Accordion provides the heading and the show-or-hide behaviour.
Section content can include formatted text, links, and other components.`}),`
`,(0,S.jsx)(t.h3,{id:`keyboard-navigation`,children:`Keyboard navigation`}),`
`,(0,S.jsxs)(t.table,{children:[(0,S.jsx)(t.thead,{children:(0,S.jsxs)(t.tr,{children:[(0,S.jsx)(t.th,{style:{textAlign:`left`},children:`Key`}),(0,S.jsx)(t.th,{style:{textAlign:`left`},children:`Behaviour`})]})}),(0,S.jsxs)(t.tbody,{children:[(0,S.jsxs)(t.tr,{children:[(0,S.jsx)(t.td,{style:{textAlign:`left`},children:`Enter or Space`}),(0,S.jsx)(t.td,{style:{textAlign:`left`},children:`Open or close the focused section`})]}),(0,S.jsxs)(t.tr,{children:[(0,S.jsx)(t.td,{style:{textAlign:`left`},children:`Tab / Shift+Tab`}),(0,S.jsx)(t.td,{style:{textAlign:`left`},children:`Move to the next or previous focusable element`})]}),(0,S.jsxs)(t.tr,{children:[(0,S.jsx)(t.td,{style:{textAlign:`left`},children:`Down / Up arrow`}),(0,S.jsx)(t.td,{style:{textAlign:`left`},children:`Move focus to the next or previous section (wraps around)`})]}),(0,S.jsxs)(t.tr,{children:[(0,S.jsx)(t.td,{style:{textAlign:`left`},children:`Home / End`}),(0,S.jsx)(t.td,{style:{textAlign:`left`},children:`Move focus to the first or last section`})]})]})]}),`
`,(0,S.jsx)(t.h3,{id:`find-in-page`,children:`Find in page`}),`
`,(0,S.jsx)(t.p,{children:`Browser ‘Find in page’ (Ctrl+F or ⌘+F) does not search inside collapsed sections.
If you can anticipate the search term, expand the relevant section automatically.`}),`
`,(0,S.jsx)(t.h2,{id:`design`,children:`Design`}),`
`,(0,S.jsx)(t.p,{children:`Section headings stay visible while their content collapses.
This lets users scan every section label without expanding anything.`}),`
`,(0,S.jsx)(t.p,{children:`Opening one section does not close the others.
A user looking for a specific answer can leave related context open as they explore.`}),`
`,(0,S.jsx)(t.h2,{id:`see-also`,children:`See also`}),`
`,(0,S.jsxs)(t.ul,{children:[`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.a,{href:`/docs/utilities-css-prose--docs`,children:`Prose`}),` – applies the recommended vertical spacing for editorial content.`]}),`
`]}),`
`,(0,S.jsx)(t.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,S.jsx)(d,{tokens:v})]})}function x(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,S.jsx)(t,{...e,children:(0,S.jsx)(b,{...e})}):b(e)}var S;e((()=>{S=t(),f(),s(),u(),y(),h()}))();export{x as default};