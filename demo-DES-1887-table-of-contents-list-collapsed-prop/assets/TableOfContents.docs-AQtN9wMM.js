import{n as e}from"./chunk-DnJy8xQt.js";import{Gt as t}from"./iframe-BUyCNYZb.js";import{r as n}from"./react-Bzcw10Fo.js";import{a as r,f as i,i as a,l as o,m as s,n as c,u as l}from"./blocks-BBvpF1wH.js";import{n as u,t as d}from"./DesignTokensTable-BCrw1A6-.js";import{t as f}from"./mdx-react-shim-W-DFM8wX.js";import{Collapsible as p,CollapsibleExpandedByDefault as m,MultipleLevels as h,n as g,t as _}from"./TableOfContents.stories-BQ1t8fC2.js";var v,y,b=e((()=>{v={"table-of-contents":{"font-family":{$value:`{ams.typography.font-family}`,$extensions:{"nl.amsterdam.type":`fontFamily`}},"font-size":{$value:`{ams.typography.body-text.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"font-weight":{$value:`{ams.typography.body-text.font-weight}`,$extensions:{"nl.amsterdam.type":`fontWeight`}},"line-height":{$value:`{ams.typography.body-text.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}},heading:{"margin-block-end":{$value:`{ams.space.s}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}},list:{list:{"padding-block-start":{$value:`{ams.space.xs}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-inline-start":{$value:`{ams.space.m}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}}},item:{gap:{$value:`{ams.space.xs}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"margin-block-end":{$value:`{ams.space.s}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}},link:{color:{$value:`{ams.links.color}`,$extensions:{"nl.amsterdam.type":`color`}},"outline-offset":{$value:`{ams.focus.outline-offset}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"text-decoration-line":{$value:`{ams.links.subtle.text-decoration-line}`,$extensions:{"nl.amsterdam.type":`textDecorationLine`}},"text-decoration-thickness":{$value:`{ams.links.text-decoration-thickness}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"text-underline-offset":{$value:`{ams.links.text-underline-offset}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},current:{color:{$value:`{ams.links.color}`,$extensions:{"nl.amsterdam.type":`color`}},"font-weight":{$value:`{ams.typography.heading.font-weight}`,$extensions:{"nl.amsterdam.type":`fontWeight`}}},hover:{color:{$value:`{ams.links.hover.color}`,$extensions:{"nl.amsterdam.type":`color`}},"text-decoration-line":{$value:`{ams.links.subtle.hover.text-decoration-line}`,$extensions:{"nl.amsterdam.type":`textDecorationLine`}}}},toggle:{color:{$value:`{ams.color.interactive.default}`,$extensions:{"nl.amsterdam.type":`color`}},hover:{color:{$value:`{ams.color.interactive.hover}`,$extensions:{"nl.amsterdam.type":`color`}}},icon:{"transition-duration":{$value:`0.3s`,$type:`duration`},"transition-timing-function":{$value:`ease`,$extensions:{"nl.amsterdam.type":`transitionTimingFunction`}}}}}},y={ams:v}}));function x(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...n(),...e.components};return(0,C.jsxs)(C.Fragment,{children:[`
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
`,(0,C.jsxs)(t.p,{children:[`Use a Table of Contents for any list of navigation links that correspond to named sections of content: anchor links to sections on the current page, links to a set of related pages, or a deep multi-level tree for a handbook or documentation site.
For the last case, use `,(0,C.jsx)(t.code,{children:`collapsible`}),` mode so branches can be expanded and collapsed — see the `,(0,C.jsx)(t.a,{href:`/docs/pages-public-handbook-page--docs`,children:`Handbook Page`}),` template.`]}),`
`,(0,C.jsx)(t.h3,{id:`when-not-to-use`,children:`When not to use`}),`
`,(0,C.jsxs)(t.p,{children:[`Use a `,(0,C.jsx)(t.a,{href:`/docs/components-navigation-tab-navigation--docs`,children:`Tab Navigation`}),` when the user switches between views rather than navigating to distinct sections or pages.`]}),`
`,(0,C.jsx)(t.h3,{id:`how-to-use`,children:`How to use`}),`
`,(0,C.jsxs)(t.p,{children:[`Give it a `,(0,C.jsx)(t.code,{children:`heading`}),` (such as 'Op deze pagina') and a `,(0,C.jsx)(t.code,{children:`headingLevel`}),` that fits the document outline.
Set `,(0,C.jsx)(t.code,{children:`aria-current="page"`}),` on the link for the active section or page to highlight it and announce it to screen readers.`]}),`
`,(0,C.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,C.jsx)(t.h3,{id:`multiple-levels`,children:`Multiple levels`}),`
`,(0,C.jsx)(c,{of:h}),`
`,(0,C.jsx)(t.h3,{id:`collapsible`,children:`Collapsible`}),`
`,(0,C.jsxs)(t.p,{children:[`Set `,(0,C.jsx)(t.code,{children:`collapsible`}),` on the root to add a separate toggle button to each item that has nested links.
The toggle expands and collapses the nested list without following the link.
Set `,(0,C.jsx)(t.code,{children:`collapsed={false}`}),` on `,(0,C.jsx)(t.code,{children:`TableOfContents.List`}),` to open nested items by default.
This setting is inherited by nested lists unless they set their own `,(0,C.jsx)(t.code,{children:`collapsed`}),` value.
Use `,(0,C.jsx)(t.code,{children:`defaultExpanded`}),` on a Link to override the list default for that specific item, for example to show the ancestors of the current page.`]}),`
`,(0,C.jsx)(c,{of:p}),`
`,(0,C.jsx)(t.h3,{id:`collapsible-with-nested-items-opened-by-default`,children:`Collapsible with nested items opened by default`}),`
`,(0,C.jsx)(c,{of:m}),`
`,(0,C.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,C.jsxs)(t.p,{children:[`The component renders as a `,(0,C.jsx)(t.code,{children:`nav`}),` landmark.
Set `,(0,C.jsx)(t.code,{children:`aria-current="page"`}),` on the link that represents the active section or page to help screen reader users identify their position.
In collapsible mode, arrow keys navigate between the visible toggle buttons.`]}),`
`,(0,C.jsx)(t.h2,{id:`see-also`,children:`See also`}),`
`,(0,C.jsxs)(t.ul,{children:[`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.a,{href:`/docs/pages-public-handbook-page--docs`,children:`Handbook Page`}),` – a two-column layout with a collapsible Table of Contents sidebar.`]}),`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.a,{href:`/docs/components-navigation-tab-navigation--docs`,children:`Tab Navigation`}),` – switches between views on the same page.`]}),`
`]}),`
`,(0,C.jsx)(t.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,C.jsx)(d,{tokens:y})]})}function S(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,C.jsx)(t,{...e,children:(0,C.jsx)(x,{...e})}):x(e)}var C;e((()=>{C=t(),f(),s(),g(),b(),u()}))();export{S as default};