import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,h as n,p as r,u as i}from"./blocks-msKSRvUz.js";import{t as a}from"./jsx-runtime-ATHzeHXA.js";import{i as o,r as s}from"./react-Dyi61YEg.js";import{n as c,t as l}from"./PageAnatomy-wCsmcfg5.js";import{n as u,t as d}from"./HandbookPage.stories-DZh2Macs.js";var f;function p(){return(p=e((()=>{f=[[{height:`panel`,label:`Table of contents`},{height:`body`,label:`Chapter`}]]})))()}function m(e){let n={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...o(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[`
`,`
`,`
`,`
`,(0,g.jsx)(i,{of:d}),`
`,(0,g.jsx)(r,{}),`
`,(0,g.jsx)(t,{of:d}),`
`,(0,g.jsx)(n.h2,{id:`anatomy`,children:`Anatomy`}),`
`,(0,g.jsx)(n.p,{children:`This schematic shows the default sections for this page type and how the grids and vertical space work.`}),`
`,(0,g.jsx)(l,{labels:f,of:d}),`
`,(0,g.jsx)(n.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,g.jsx)(n.h3,{id:`when-to-use`,children:`When to use`}),`
`,(0,g.jsx)(n.p,{children:`Use this page for reference material long enough to need splitting: a personnel handbook, a policy document, a set of regulations.`}),`
`,(0,g.jsx)(n.h3,{id:`when-not-to-use`,children:`When not to use`}),`
`,(0,g.jsxs)(n.p,{children:[`Use an `,(0,g.jsx)(n.a,{href:`/docs/pages-public-information-page--docs`,children:`Information Page`}),` where a single page carries the whole topic.`]}),`
`,(0,g.jsx)(n.h2,{id:`structure`,children:`Structure`}),`
`,(0,g.jsxs)(n.ul,{children:[`
`,(0,g.jsxs)(n.li,{children:[`Two `,(0,g.jsx)(n.a,{href:`/docs/components-navigation-skip-link--docs`,children:`Skip Links`}),` at the top of the page let keyboard users jump straight to the table of contents or to the content.`]}),`
`,(0,g.jsxs)(n.li,{children:[`The page uses a two-column `,(0,g.jsx)(n.a,{href:`/docs/components-layout-grid--docs`,children:`Grid`}),` layout.`]}),`
`,(0,g.jsxs)(n.li,{children:[`The left column holds a collapsible `,(0,g.jsx)(n.a,{href:`/docs/components-navigation-table-of-contents--docs`,children:`Table of Contents`}),` showing the full document tree.`,`
`,(0,g.jsxs)(n.ul,{children:[`
`,(0,g.jsxs)(n.li,{children:[`Set `,(0,g.jsx)(n.code,{children:`aria-current="page"`}),` on the active link.`]}),`
`,(0,g.jsxs)(n.li,{children:[`Drive each branch with the controlled `,(0,g.jsx)(n.code,{children:`expanded`}),` prop and an `,(0,g.jsx)(n.code,{children:`onToggle`}),` handler, so the current position stays open as the reader moves through the document.
Keeping the Table of Contents mounted means the link a keyboard user just activated never loses focus.`]}),`
`]}),`
`]}),`
`,(0,g.jsxs)(n.li,{children:[`The right column contains a `,(0,g.jsx)(n.code,{children:`main`}),` element using the `,(0,g.jsx)(n.a,{href:`/docs/utilities-css-prose--docs`,children:`Prose`}),` utility class.`,`
`,(0,g.jsxs)(n.ul,{children:[`
`,(0,g.jsxs)(n.li,{children:[`Each page opens with a Content Header: a level 1 `,(0,g.jsx)(n.a,{href:`/docs/components-text-heading--docs`,children:`Heading`}),` followed by a large lead `,(0,g.jsx)(n.a,{href:`/docs/components-text-paragraph--docs`,children:`Paragraph`}),`, then body text.`]}),`
`]}),`
`]}),`
`]}),`
`,(0,g.jsx)(n.h2,{id:`layout-and-spacing`,children:`Layout and spacing`}),`
`,(0,g.jsxs)(n.ul,{children:[`
`,(0,g.jsxs)(n.li,{children:[`The Grid uses the `,(0,g.jsx)(n.a,{href:`/docs/pages-guidelines-layout-and-spacing--docs#how-to-size-the-grid-cells`,children:`recommended Cell sizes`}),`.`]}),`
`,(0,g.jsx)(n.li,{children:`The Prose utility class handles vertical spacing within the content area automatically.`}),`
`]}),`
`,(0,g.jsx)(n.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,g.jsxs)(n.p,{children:[`This page has two places worth reaching, so it declares two Skip Links rather than the single one every other template carries: one targets the Table of Contents, the other the `,(0,g.jsx)(n.code,{children:`id`}),` on `,(0,g.jsx)(n.code,{children:`main`}),`.`]}),`
`,(0,g.jsxs)(n.p,{children:[`The entry for the page on screen carries `,(0,g.jsx)(n.code,{children:`aria-current="page"`}),`, which a screen reader announces along with the link.`]}),`
`,(0,g.jsx)(n.p,{children:`The Table of Contents stays mounted as the reader moves from page to page.
The link they just activated therefore keeps focus, where a navigation rebuilt per page would drop it back to the top of the document.`}),`
`,(0,g.jsx)(n.h2,{id:`see-also`,children:`See also`}),`
`,(0,g.jsxs)(n.ul,{children:[`
`,(0,g.jsxs)(n.li,{children:[(0,g.jsx)(n.a,{href:`/docs/components-navigation-table-of-contents--docs`,children:`Table of Contents`}),` – the navigation column, and how to control it.`]}),`
`,(0,g.jsxs)(n.li,{children:[(0,g.jsx)(n.a,{href:`/docs/components-navigation-skip-link--docs`,children:`Skip Link`}),` – why this page needs two.`]}),`
`,(0,g.jsxs)(n.li,{children:[(0,g.jsx)(n.a,{href:`/docs/pages-public-information-page--docs`,children:`Information Page`}),` – for a topic that fits on one page.`]}),`
`]})]})}function h(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,g.jsx)(t,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;function _(){return(_=e((()=>{g=a(),s(),n(),c(),p(),u()})))()}_();export{h as default};