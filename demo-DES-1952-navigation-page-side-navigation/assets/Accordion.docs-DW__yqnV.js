import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{a as t,d as n,h as r,i,n as a,p as o,u as s}from"./blocks-CqryReaq.js";import{t as c}from"./jsx-runtime-Bq1bXGty.js";import{i as l}from"./react-BnCtKaSV.js";import{n as u,t as d}from"./DesignTokensTable-rW_R2GSU.js";import{t as f}from"./mdx-react-shim-9RzcSRdq.js";import{ExpandedByDefault as p,ReduceLandmarks as m,n as h,t as g}from"./Accordion.stories-CWcEvaxh.js";import{Section as _,t as v}from"./AccordionSection.stories-87R34BwP.js";var y,b,x=e((()=>{y={accordion:{gap:{$value:`{ams.space.s}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},button:{color:{$value:`{ams.color.interactive.default}`,$extensions:{"nl.amsterdam.type":`color`}},cursor:{$value:`{ams.cursor.interactive}`,$extensions:{"nl.amsterdam.type":`cursor`}},gap:{$value:`{ams.space.s}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"outline-offset":{$value:`{ams.focus.outline-offset}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-block":{$value:`{ams.space.s}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-inline":{$value:`0`,$type:`dimension`,$extensions:{"nl.amsterdam.subtype":`space`}},hover:{color:{$value:`{ams.color.interactive.hover}`,$extensions:{"nl.amsterdam.type":`color`}}}}}},b={ams:y}}));function S(e){let r={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...l(),...e.components};return(0,w.jsxs)(w.Fragment,{children:[`
`,`
`,`
`,`
`,(0,w.jsx)(s,{of:g}),`
`,(0,w.jsx)(o,{}),`
`,(0,w.jsx)(t,{of:g}),`
`,(0,w.jsx)(n,{}),`
`,(0,w.jsx)(i,{}),`
`,(0,w.jsx)(r.h2,{id:`subcomponents`,children:`Subcomponents`}),`
`,(0,w.jsx)(r.h3,{id:`section`,children:`Section`}),`
`,(0,w.jsxs)(r.p,{children:[`Pairs a heading with collapsible content.
Use `,(0,w.jsx)(r.code,{children:`defaultExpanded`}),` to show the content initially.
Pass `,(0,w.jsx)(r.code,{children:`onToggle`}),` to be notified when the section opens or closes.`]}),`
`,(0,w.jsx)(a,{of:_}),`
`,(0,w.jsx)(i,{of:_}),`
`,(0,w.jsx)(r.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,w.jsx)(r.h3,{id:`when-to-use`,children:`When to use`}),`
`,(0,w.jsx)(r.p,{children:`Use an Accordion to keep secondary content collapsed by default, so the primary content of a page stays prominent.
A typical example is a list of frequently asked questions.`}),`
`,(0,w.jsx)(r.h3,{id:`when-not-to-use`,children:`When not to use`}),`
`,(0,w.jsx)(r.p,{children:`Don’t hide essential information in an Accordion.
Users may not realise it is there.`}),`
`,(0,w.jsx)(r.p,{children:`For long content that deserves its own page, split it across multiple pages instead.
That often improves both usability and findability through search engines.`}),`
`,(0,w.jsx)(r.h3,{id:`how-to-use`,children:`How to use`}),`
`,(0,w.jsx)(r.p,{children:`Use between 3 and 10 sections.
Fewer is rarely worth the extra interaction; more makes the list hard to scan.`}),`
`,(0,w.jsx)(r.p,{children:`Provide each section with a clear, descriptive label.
Users cannot scan the content inside a collapsed section.`}),`
`,(0,w.jsxs)(r.p,{children:[`Set `,(0,w.jsx)(r.code,{children:`headingLevel`}),` on the Accordion to match its position in the page hierarchy.
All sections share that level.`]}),`
`,(0,w.jsx)(r.h3,{id:`how-to-write`,children:`How to write`}),`
`,(0,w.jsx)(r.p,{children:`Write labels that describe what the user will find inside the section.
Use sentence case.`}),`
`,(0,w.jsx)(r.h2,{id:`examples`,children:`Examples`}),`
`,(0,w.jsx)(r.h3,{id:`expanded-by-default`,children:`Expanded by default`}),`
`,(0,w.jsxs)(r.p,{children:[`Pass `,(0,w.jsx)(r.code,{children:`defaultExpanded`}),` to a section to make it visible from the start.
Use this sparingly – it works against the goal of keeping content collapsed.`]}),`
`,(0,w.jsx)(a,{of:p}),`
`,(0,w.jsx)(r.h3,{id:`reduce-landmarks`,children:`Reduce landmarks`}),`
`,(0,w.jsxs)(r.p,{children:[`An Accordion Section renders a `,(0,w.jsx)(r.code,{children:`<section>`}),` element by default, which creates a landmark region.
Many landmarks on one page can be noisy for screen reader users.
For Accordions with six or more sections, render generic `,(0,w.jsx)(r.code,{children:`<div>`}),` elements through `,(0,w.jsx)(r.code,{children:`sectionAs="div"`}),`.`]}),`
`,(0,w.jsx)(a,{of:m}),`
`,(0,w.jsx)(r.h2,{id:`features`,children:`Features`}),`
`,(0,w.jsx)(r.p,{children:`The Accordion provides the heading and the show-or-hide behaviour.
Section content can include formatted text, links, and other components.`}),`
`,(0,w.jsx)(r.h3,{id:`keyboard-navigation`,children:`Keyboard navigation`}),`
`,(0,w.jsxs)(r.table,{children:[(0,w.jsx)(r.thead,{children:(0,w.jsxs)(r.tr,{children:[(0,w.jsx)(r.th,{style:{textAlign:`left`},children:`Key`}),(0,w.jsx)(r.th,{style:{textAlign:`left`},children:`Behaviour`})]})}),(0,w.jsxs)(r.tbody,{children:[(0,w.jsxs)(r.tr,{children:[(0,w.jsx)(r.td,{style:{textAlign:`left`},children:`Enter or Space`}),(0,w.jsx)(r.td,{style:{textAlign:`left`},children:`Open or close the focused section`})]}),(0,w.jsxs)(r.tr,{children:[(0,w.jsx)(r.td,{style:{textAlign:`left`},children:`Tab / Shift+Tab`}),(0,w.jsx)(r.td,{style:{textAlign:`left`},children:`Move to the next or previous focusable element`})]}),(0,w.jsxs)(r.tr,{children:[(0,w.jsx)(r.td,{style:{textAlign:`left`},children:`Down / Up arrow`}),(0,w.jsx)(r.td,{style:{textAlign:`left`},children:`Move focus to the next or previous section (wraps around)`})]}),(0,w.jsxs)(r.tr,{children:[(0,w.jsx)(r.td,{style:{textAlign:`left`},children:`Home / End`}),(0,w.jsx)(r.td,{style:{textAlign:`left`},children:`Move focus to the first or last section`})]})]})]}),`
`,(0,w.jsx)(r.h3,{id:`find-in-page`,children:`Find in page`}),`
`,(0,w.jsx)(r.p,{children:`Browser ‘Find in page’ (Ctrl+F or ⌘+F) does not search inside collapsed sections.
If you can anticipate the search term, expand the relevant section automatically.`}),`
`,(0,w.jsx)(r.h2,{id:`design`,children:`Design`}),`
`,(0,w.jsx)(r.p,{children:`Section headings stay visible while their content collapses.
This lets users scan every section label without expanding anything.`}),`
`,(0,w.jsx)(r.p,{children:`Opening one section does not close the others.
A user looking for a specific answer can leave related context open as they explore.`}),`
`,(0,w.jsx)(r.h2,{id:`see-also`,children:`See also`}),`
`,(0,w.jsxs)(r.ul,{children:[`
`,(0,w.jsxs)(r.li,{children:[(0,w.jsx)(r.a,{href:`/docs/utilities-css-prose--docs`,children:`Prose`}),` – applies the recommended vertical spacing for editorial content.`]}),`
`]}),`
`,(0,w.jsx)(r.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,w.jsx)(d,{tokens:b})]})}function C(e={}){let{wrapper:t}={...l(),...e.components};return t?(0,w.jsx)(t,{...e,children:(0,w.jsx)(S,{...e})}):S(e)}var w;e((()=>{w=c(),f(),r(),u(),x(),h(),v()}))();export{C as default};