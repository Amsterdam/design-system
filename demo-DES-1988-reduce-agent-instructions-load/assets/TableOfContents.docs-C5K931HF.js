import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,d as n,h as r,i,n as a,p as o,u as s}from"./blocks-msKSRvUz.js";import{t as c}from"./jsx-runtime-ATHzeHXA.js";import{i as l,r as u}from"./react-Dyi61YEg.js";import{n as d,t as f}from"./DesignTokensTable-DClETs4x.js";import{a as p,i as m,n as h,o as g,r as _,t as v}from"./TableOfContents.stories-DmpD9Hcf.js";import{r as y,t as b}from"./TableOfContentsLink.stories-6UiIOwm9.js";var x,S;function C(){return(C=e((()=>{x={"table-of-contents":{"font-family":{$value:`{ams.typography.font-family}`,$extensions:{"nl.amsterdam.type":`fontFamily`}},"font-size":{$value:`{ams.typography.body-text.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"font-weight":{$value:`{ams.typography.body-text.font-weight}`,$extensions:{"nl.amsterdam.type":`fontWeight`}},gap:{$value:`{ams.space.s}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"line-height":{$value:`{ams.typography.body-text.line-height}`,$extensions:{"nl.amsterdam.hint":`Must be a single value: it is used in a calculation, which two values would invalidate.`,"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}},"text-wrap":{$value:`balance`,$extensions:{"nl.amsterdam.type":`textWrap`}},list:{gap:{$value:`{ams.space.s}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},list:{"padding-block-start":{$value:`{ams.space.xs}`,$extensions:{"nl.amsterdam.hint":`Must be a single value: it sets a longhand property, which takes only one.`,"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-inline-start":{$value:`{ams.space.m}`,$extensions:{"nl.amsterdam.hint":`Must be a single value: it sets a longhand property, which takes only one.`,"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}}},item:{gap:{$value:`{ams.space.xs}`,$extensions:{"nl.amsterdam.hint":`Must be a single value: it sets a longhand property, which takes only one.`,"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}},link:{color:{$value:`{ams.links.color}`,$extensions:{"nl.amsterdam.type":`color`}},"outline-offset":{$value:`{ams.focus.outline-offset}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"text-decoration-line":{$value:`{ams.links.subtle.text-decoration-line}`,$extensions:{"nl.amsterdam.type":`textDecorationLine`}},"text-decoration-thickness":{$value:`{ams.links.text-decoration-thickness}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"text-underline-offset":{$value:`{ams.links.text-underline-offset}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},current:{color:{$value:`{ams.links.color}`,$extensions:{"nl.amsterdam.type":`color`}},"font-weight":{$value:`{ams.typography.heading.font-weight}`,$extensions:{"nl.amsterdam.type":`fontWeight`}}},hover:{color:{$value:`{ams.links.hover.color}`,$extensions:{"nl.amsterdam.type":`color`}},"text-decoration-line":{$value:`{ams.links.subtle.hover.text-decoration-line}`,$extensions:{"nl.amsterdam.type":`textDecorationLine`}}}},button:{color:{$value:`{ams.color.interactive.default}`,$extensions:{"nl.amsterdam.type":`color`}},hover:{color:{$value:`{ams.color.interactive.hover}`,$extensions:{"nl.amsterdam.type":`color`}}},icon:{"transition-duration":{$value:`0.3s`,$type:`duration`},"transition-timing-function":{$value:`ease`,$extensions:{"nl.amsterdam.type":`transitionTimingFunction`}}}}}},S={ams:x}})))()}function w(e){let r={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...l(),...e.components};return(0,E.jsxs)(E.Fragment,{children:[`
`,`
`,`
`,`
`,(0,E.jsx)(s,{of:p}),`
`,(0,E.jsx)(o,{}),`
`,(0,E.jsx)(t,{of:p}),`
`,(0,E.jsx)(n,{}),`
`,(0,E.jsx)(i,{}),`
`,(0,E.jsx)(r.h2,{id:`subcomponents`,children:`Subcomponents`}),`
`,(0,E.jsxs)(r.p,{children:[`Lists nest Links to form the hierarchy of the Table of Contents.
Set `,(0,E.jsx)(r.code,{children:`defaultExpanded`}),` on a List to open its collapsible branches by default; the ‘Multiple levels’ example shows how to nest one.`]}),`
`,(0,E.jsx)(r.h3,{id:`link`,children:`Link`}),`
`,(0,E.jsxs)(r.p,{children:[`Points to a section or page; provide its text through the `,(0,E.jsx)(r.code,{children:`label`}),` prop.
Use `,(0,E.jsx)(r.code,{children:`defaultExpanded`}),` to initially show its nested list when the Table of Contents is collapsible.
To drive the expanded state from your own code, pass `,(0,E.jsx)(r.code,{children:`expanded`}),` together with `,(0,E.jsx)(r.code,{children:`onToggle`}),` instead.`]}),`
`,(0,E.jsx)(a,{of:b}),`
`,(0,E.jsx)(i,{of:b}),`
`,(0,E.jsx)(r.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,E.jsx)(r.h3,{id:`when-to-use`,children:`When to use`}),`
`,(0,E.jsxs)(r.p,{children:[`Use a Table of Contents for any list of navigation links that correspond to named sections of content: anchor links to sections on the current page, links to a set of related pages, or a deep multi-level tree for a handbook or documentation site.
For the last case, use `,(0,E.jsx)(r.code,{children:`collapsible`}),` mode so branches can be expanded and collapsed.`]}),`
`,(0,E.jsx)(r.h3,{id:`when-not-to-use`,children:`When not to use`}),`
`,(0,E.jsxs)(r.p,{children:[`Use a `,(0,E.jsx)(r.a,{href:`/docs/components-navigation-tab-navigation--docs`,children:`Tab Navigation`}),` when the user switches between views rather than navigating to distinct sections or pages.
Use a `,(0,E.jsx)(r.a,{href:`/docs/components-navigation-link-list--docs`,children:`Link List`}),` for a flat group of related links that doesn’t map to the sections of the current page or a set of related pages.`]}),`
`,(0,E.jsx)(r.h3,{id:`how-to-use`,children:`How to use`}),`
`,(0,E.jsxs)(r.p,{children:[`Give it a `,(0,E.jsx)(r.code,{children:`heading`}),` (such as 'Op deze pagina') and a `,(0,E.jsx)(r.code,{children:`headingLevel`}),` that fits the document outline.
Set `,(0,E.jsx)(r.code,{children:`aria-current="page"`}),` on the link for the active section or page to highlight it and announce it to screen readers.
Pass `,(0,E.jsx)(r.code,{children:`undefined`}),` on every other link so the attribute is dropped; `,(0,E.jsx)(r.code,{children:`"false"`}),` is valid ARIA but leaves an explicit negative on each of them.`]}),`
`,(0,E.jsx)(r.h2,{id:`examples`,children:`Examples`}),`
`,(0,E.jsx)(r.h3,{id:`multiple-levels`,children:`Multiple levels`}),`
`,(0,E.jsx)(a,{of:m}),`
`,(0,E.jsx)(r.h3,{id:`collapsible`,children:`Collapsible`}),`
`,(0,E.jsxs)(r.p,{children:[`Set `,(0,E.jsx)(r.code,{children:`collapsible`}),` on the root to add a separate toggle button to each item that has nested links.
The toggle expands and collapses the nested list without following the link.
Set `,(0,E.jsx)(r.code,{children:`defaultExpanded`}),` on `,(0,E.jsx)(r.code,{children:`TableOfContents.List`}),` to open nested items by default.
This setting is inherited by nested lists unless they set their own `,(0,E.jsx)(r.code,{children:`defaultExpanded`}),` value.
Use `,(0,E.jsx)(r.code,{children:`defaultExpanded`}),` on a Link to override the list default for that specific item, for example to show the ancestors of the current page.`]}),`
`,(0,E.jsx)(a,{of:v}),`
`,(0,E.jsx)(r.h3,{id:`initially-expanded`,children:`Initially expanded`}),`
`,(0,E.jsxs)(r.p,{children:[(0,E.jsx)(r.code,{children:`defaultExpanded`}),` on the root List expands every collapsible branch on load, while a nested List overrides it with `,(0,E.jsx)(r.code,{children:`defaultExpanded={false}`}),` to stay closed.
Starting expanded suits a deep handbook or documentation tree, where showing the full structure helps readers place the current page.`]}),`
`,(0,E.jsx)(a,{of:_}),`
`,(0,E.jsx)(r.h3,{id:`controlled`,children:`Controlled`}),`
`,(0,E.jsxs)(r.p,{children:[`Each Link manages its own expanded state by default.
To drive that state yourself, pass `,(0,E.jsx)(r.code,{children:`expanded`}),` to a Link and update it from its `,(0,E.jsx)(r.code,{children:`onToggle`}),` callback.
This example keeps a single branch open at a time by expanding the clicked branch and collapsing the others.`]}),`
`,(0,E.jsx)(a,{of:h}),`
`,(0,E.jsx)(r.h2,{id:`design`,children:`Design`}),`
`,(0,E.jsx)(r.p,{children:`Nested lists are indented from their parent, so the depth of an entry is legible from its position alone.`}),`
`,(0,E.jsx)(r.p,{children:`In collapsible mode that indent comes from somewhere else: every item gains a leading column exactly one line high, whether or not it has a toggle button to put there.
Labels then line up down the whole tree, and a branch that gains or loses children does not shift the entries around it.`}),`
`,(0,E.jsx)(r.p,{children:`The toggle sits beside the link rather than inside it, so expanding a branch and following it are separate targets.`}),`
`,(0,E.jsx)(r.p,{children:`A chevron turns half a circle when a branch opens, animated only for users who have not asked for reduced motion.`}),`
`,(0,E.jsx)(r.p,{children:`A link that runs onto more than one line has its line lengths balanced, so a narrow column does not strand a single short word on the last line.`}),`
`,(0,E.jsx)(r.p,{children:`The link for the current page is set in bold and in a colour of its own.`}),`
`,(0,E.jsx)(r.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,E.jsxs)(r.ul,{children:[`
`,(0,E.jsxs)(r.li,{children:[`The component renders as a `,(0,E.jsx)(r.code,{children:`nav`}),` landmark, and a `,(0,E.jsx)(r.code,{children:`heading`}),` becomes its accessible name.`]}),`
`,(0,E.jsxs)(r.li,{children:[`In collapsible mode, each toggle button reports its state through `,(0,E.jsx)(r.code,{children:`aria-expanded`}),`, references the list it reveals through `,(0,E.jsx)(r.code,{children:`aria-controls`}),`, and gets an accessible name that says which section it expands or collapses.`]}),`
`,(0,E.jsx)(r.li,{children:`Arrow keys move focus between the visible toggle buttons; toggles inside a collapsed section are skipped so focus never lands on hidden content, while that section’s own toggle stays reachable to reopen it.`}),`
`,(0,E.jsx)(r.li,{children:`Collapsing a section while focus is inside it returns focus to that section’s toggle button, so focus is never stranded on content that was just hidden.`}),`
`,(0,E.jsx)(r.li,{children:`When printing, collapsed sections expand so the full outline is available.`}),`
`]}),`
`,(0,E.jsx)(r.h2,{id:`see-also`,children:`See also`}),`
`,(0,E.jsxs)(r.ul,{children:[`
`,(0,E.jsxs)(r.li,{children:[(0,E.jsx)(r.a,{href:`/docs/components-navigation-link-list--docs`,children:`Link List`}),` – groups related links that don’t form an outline of content.`]}),`
`,(0,E.jsxs)(r.li,{children:[(0,E.jsx)(r.a,{href:`/docs/components-navigation-tab-navigation--docs`,children:`Tab Navigation`}),` – switches between views on the same page.`]}),`
`]}),`
`,(0,E.jsx)(r.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,E.jsx)(f,{tokens:S})]})}function T(e={}){let{wrapper:t}={...l(),...e.components};return t?(0,E.jsx)(t,{...e,children:(0,E.jsx)(w,{...e})}):w(e)}var E;function D(){return(D=e((()=>{E=c(),u(),r(),d(),C(),g(),y()})))()}D();export{T as default};