import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./jsx-runtime-BCDDjCIb.js";import{b as n,d as r,f as i,g as a,i as o,m as s,o as c,s as l}from"./iframe-DIwEAIal.js";import{n as u,t as d}from"./DesignTokensTable-BbloMQfy.js";import{t as f}from"./mdx-react-shim-D0PZvCMy.js";import{Collapsible as p,MultipleLevels as m,n as h,t as g}from"./TableOfContents.stories-CrNnn9W3.js";import{Link as _,t as v}from"./TableOfContentsLink.stories-YnzVgOcN.js";var y,b,x=e((()=>{y={"table-of-contents":{"font-family":{$value:`{ams.typography.font-family}`,$extensions:{"nl.amsterdam.type":`fontFamily`}},"font-size":{$value:`{ams.typography.body-text.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"font-weight":{$value:`{ams.typography.body-text.font-weight}`,$extensions:{"nl.amsterdam.type":`fontWeight`}},gap:{$value:`{ams.space.s}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"line-height":{$value:`{ams.typography.body-text.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}},list:{gap:{$value:`{ams.space.s}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},list:{"padding-block-start":{$value:`{ams.space.xs}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-inline-start":{$value:`{ams.space.m}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}}},item:{gap:{$value:`{ams.space.xs}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}},link:{color:{$value:`{ams.links.color}`,$extensions:{"nl.amsterdam.type":`color`}},"outline-offset":{$value:`{ams.focus.outline-offset}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"text-decoration-line":{$value:`{ams.links.subtle.text-decoration-line}`,$extensions:{"nl.amsterdam.type":`textDecorationLine`}},"text-decoration-thickness":{$value:`{ams.links.text-decoration-thickness}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"text-underline-offset":{$value:`{ams.links.text-underline-offset}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},current:{color:{$value:`{ams.links.color}`,$extensions:{"nl.amsterdam.type":`color`}},"font-weight":{$value:`{ams.typography.heading.font-weight}`,$extensions:{"nl.amsterdam.type":`fontWeight`}}},hover:{color:{$value:`{ams.links.hover.color}`,$extensions:{"nl.amsterdam.type":`color`}},"text-decoration-line":{$value:`{ams.links.subtle.hover.text-decoration-line}`,$extensions:{"nl.amsterdam.type":`textDecorationLine`}}}},button:{color:{$value:`{ams.color.interactive.default}`,$extensions:{"nl.amsterdam.type":`color`}},hover:{color:{$value:`{ams.color.interactive.hover}`,$extensions:{"nl.amsterdam.type":`color`}}},icon:{"transition-duration":{$value:`0.3s`,$type:`duration`},"transition-timing-function":{$value:`ease`,$extensions:{"nl.amsterdam.type":`transitionTimingFunction`}}}}}},b={ams:y}}));function S(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...n(),...e.components};return(0,w.jsxs)(w.Fragment,{children:[`
`,`
`,`
`,`
`,(0,w.jsx)(r,{of:g}),`
`,(0,w.jsx)(s,{}),`
`,(0,w.jsx)(l,{of:g}),`
`,(0,w.jsx)(i,{}),`
`,(0,w.jsx)(c,{}),`
`,(0,w.jsx)(t.h2,{id:`subcomponents`,children:`Subcomponents`}),`
`,(0,w.jsx)(t.p,{children:`Lists nest Links to form the hierarchy of the Table of Contents.
The List has no props of its own; the ‘Multiple levels’ example shows how to nest one.`}),`
`,(0,w.jsx)(t.h3,{id:`link`,children:`Link`}),`
`,(0,w.jsxs)(t.p,{children:[`Points to a section or page; provide its text through the `,(0,w.jsx)(t.code,{children:`label`}),` prop.
Use `,(0,w.jsx)(t.code,{children:`defaultExpanded`}),` to initially show its nested list when the Table of Contents is collapsible.`]}),`
`,(0,w.jsx)(o,{of:_}),`
`,(0,w.jsx)(c,{of:_}),`
`,(0,w.jsx)(t.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,w.jsx)(t.h3,{id:`when-to-use`,children:`When to use`}),`
`,(0,w.jsxs)(t.p,{children:[`Use a Table of Contents for any list of navigation links that correspond to named sections of content: anchor links to sections on the current page, links to a set of related pages, or a deep multi-level tree for a handbook or documentation site.
For the last case, use `,(0,w.jsx)(t.code,{children:`collapsible`}),` mode so branches can be expanded and collapsed.`]}),`
`,(0,w.jsx)(t.h3,{id:`when-not-to-use`,children:`When not to use`}),`
`,(0,w.jsxs)(t.p,{children:[`Use a `,(0,w.jsx)(t.a,{href:`/docs/components-navigation-tab-navigation--docs`,children:`Tab Navigation`}),` when the user switches between views rather than navigating to distinct sections or pages.`]}),`
`,(0,w.jsx)(t.h3,{id:`how-to-use`,children:`How to use`}),`
`,(0,w.jsxs)(t.p,{children:[`Give it a `,(0,w.jsx)(t.code,{children:`heading`}),` (such as 'Op deze pagina') and a `,(0,w.jsx)(t.code,{children:`headingLevel`}),` that fits the document outline.
Set `,(0,w.jsx)(t.code,{children:`aria-current="page"`}),` on the link for the active section or page to highlight it and announce it to screen readers.`]}),`
`,(0,w.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,w.jsx)(t.h3,{id:`multiple-levels`,children:`Multiple levels`}),`
`,(0,w.jsx)(o,{of:m}),`
`,(0,w.jsx)(t.h3,{id:`collapsible`,children:`Collapsible`}),`
`,(0,w.jsxs)(t.p,{children:[`Set `,(0,w.jsx)(t.code,{children:`collapsible`}),` on the root to add a separate toggle button to each item that has nested links.
The toggle expands and collapses the nested list without following the link.
Use `,(0,w.jsx)(t.code,{children:`defaultExpanded`}),` on a Link to pre-open its nested list when the component mounts, for example to show the ancestors of the current page.`]}),`
`,(0,w.jsx)(o,{of:p}),`
`,(0,w.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,w.jsxs)(t.p,{children:[`The component renders as a `,(0,w.jsx)(t.code,{children:`nav`}),` landmark.
Set `,(0,w.jsx)(t.code,{children:`aria-current="page"`}),` on the link that represents the active section or page to help screen reader users identify their position.
In collapsible mode, arrow keys navigate between the visible toggle buttons.`]}),`
`,(0,w.jsx)(t.h2,{id:`see-also`,children:`See also`}),`
`,(0,w.jsxs)(t.ul,{children:[`
`,(0,w.jsxs)(t.li,{children:[(0,w.jsx)(t.a,{href:`/docs/components-navigation-tab-navigation--docs`,children:`Tab Navigation`}),` – switches between views on the same page.`]}),`
`]}),`
`,(0,w.jsx)(t.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,w.jsx)(d,{tokens:b})]})}function C(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,w.jsx)(t,{...e,children:(0,w.jsx)(S,{...e})}):S(e)}var w;e((()=>{w=t(),f(),a(),u(),x(),h(),v()}))();export{C as default};