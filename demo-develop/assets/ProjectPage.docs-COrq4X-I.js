import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,h as n,p as r,u as i}from"./blocks-zzQRermb.js";import{t as a}from"./jsx-runtime-ATHzeHXA.js";import{i as o,r as s}from"./react-Dyi61YEg.js";import{n as c,t as l}from"./PageAnatomy-Dc1EGlnz.js";import{n as u,t as d}from"./ProjectPage.stories-Bm3pVD9l.js";var f;function p(){return(p=e((()=>{f=[[{height:`line`,label:`Breadcrumb`}],[{height:`title`,label:`Page title`},{height:`panel`,label:`Image slider`}],[{height:`body`,label:`Project body`},{height:`panel`,label:`Timeline`},{height:`card`,label:`News`},{height:`card`,label:`Works and detours`}],[{height:`heading`,label:`Section heading`},...Array.from({length:4},()=>({height:`card`,label:`Link section`}))],[{height:`panel`,label:`Related projects`},{height:`panel`,label:`Documents`},{height:`card`,label:`Contact`},{height:`card`,label:`Subscribe`}],[{height:`heading`,label:`Section heading`},...Array.from({length:2},()=>({height:`card`,label:`Link section`}))],[{height:`panel`,label:`Map`}]]})))()}function m(e){let n={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...o(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[`
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
`,(0,g.jsx)(n.p,{children:`Use this page for a construction or traffic project that runs over time and affects a neighbourhood.`}),`
`,(0,g.jsx)(n.h3,{id:`when-not-to-use`,children:`When not to use`}),`
`,(0,g.jsxs)(n.p,{children:[`Use an `,(0,g.jsx)(n.a,{href:`/docs/pages-public-article-page--docs`,children:`Article Page`}),` for a single announcement about that project.`]}),`
`,(0,g.jsx)(n.h2,{id:`variants`,children:`Variants`}),`
`,(0,g.jsx)(n.h3,{id:`default`,children:`Default`}),`
`,(0,g.jsx)(n.p,{children:`Give the page a single body column and pair the Link Sections two per row.
This suits a project with a handful of related sections, where a reader can take in the whole page by scrolling.`}),`
`,(0,g.jsx)(n.h3,{id:`with-breakout`,children:`With Breakout`}),`
`,(0,g.jsxs)(n.p,{children:[`Longer projects need more sections, and a reader who wants one of them should not have to scroll past the others to find it.
Open such a page with a lead paragraph, list its sections in a `,(0,g.jsx)(n.a,{href:`/docs/components-navigation-table-of-contents--docs`,children:`Table of Contents`}),` beside the body, and give every section heading the `,(0,g.jsx)(n.code,{children:`id`}),` its entry points at.`]}),`
`,(0,g.jsxs)(n.p,{children:[`Give that Table of Contents a `,(0,g.jsx)(n.code,{children:`rowStart`}),` of 1 in its `,(0,g.jsx)(n.a,{href:`/docs/components-layout-grid--docs`,children:`Grid`}),` Cell.
That is what lets it come first in the reading order and still sit to the right of the body on a wide screen.
Automatic placement never moves back a column without moving down a row, so without a row of its own it would push the body down one.
No other cell in that Grid needs a row.`]}),`
`,(0,g.jsxs)(n.p,{children:[`Further down, a `,(0,g.jsx)(n.a,{href:`/docs/components-layout-breakout--docs`,children:`Breakout`}),` lets an image overlap the `,(0,g.jsx)(n.a,{href:`/docs/components-containers-spotlight--docs`,children:`Spotlight`}),` below it, which sets a band apart from the sections around it.
The Cell holding the Spotlight needs `,(0,g.jsx)(n.code,{children:`has="spotlight"`}),`, and the Cell holding the image `,(0,g.jsx)(n.code,{children:`has="figure"`}),`.
Give every Cell inside that band an explicit row: a Cell without one avoids the rows the Spotlight occupies and lands underneath the band instead of in it.
Let the image take a single row on the narrow grid, so it sits above the band rather than over it.`]}),`
`,(0,g.jsxs)(n.p,{children:[`Choose the text colour for a Spotlight from the highlight colour behind it, not from the other bands on the page.
Yellow is a light background, so headings and paragraphs keep their default colour and only links take `,(0,g.jsx)(n.code,{children:`color="contrast"`}),`.
Purple is a dark one, where everything takes `,(0,g.jsx)(n.code,{children:`color="inverse"`}),`.`]}),`
`,(0,g.jsxs)(n.p,{children:[`Give every Link Section a Grid Cell of its own, as the other page templates do.
Each one is a block, and the row gap of the Grid is what sets one block apart from the next.
`,(0,g.jsx)(n.a,{href:`/docs/utilities-css-prose--docs`,children:`Prose`}),` is then left with the elements within a section: its heading, its list, and the link to the wider set below them.`]}),`
`,(0,g.jsxs)(n.p,{children:[`Contact details are a `,(0,g.jsx)(n.a,{href:`/docs/components-navigation-link-list--docs`,children:`Link List`}),` whose links carry an icon instead of the chevron the list draws by default.
Keep the name and the role above it in a Paragraph: they are not links, and a list of two items reads as a set of ways to get in touch.`]}),`
`,(0,g.jsx)(n.h2,{id:`structure`,children:`Structure`}),`
`,(0,g.jsx)(n.p,{children:`The page has a set structure.
It includes sections that describe what the project is, its location, the reasons for it, and the timeline for planning or execution.
This standard format helps users compare projects and find information more easily.`}),`
`,(0,g.jsxs)(n.p,{children:[`The ‘when’ section usually features a timeline of important milestones, shown in a `,(0,g.jsx)(n.a,{href:`/docs/components-containers-progress-list--docs`,children:`Progress List`}),`.
This gives a brief overview of the project’s current status and future phases.`]}),`
`,(0,g.jsx)(n.p,{children:`Visual elements enhance the text.
Large images provide context or show the impact.
A map indicates the project location and the areas affected.
A video may be included to clarify complex issues or planned changes.`}),`
`,(0,g.jsx)(n.p,{children:`Related information is organized in Link Sections.
These links lead to news updates, related projects, and supporting documents, allowing users to delve deeper without overwhelming the main content.`}),`
`,(0,g.jsx)(n.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,g.jsxs)(n.p,{children:[`The sections of this page are several Grids rather than one, so a plain `,(0,g.jsx)(n.code,{children:`main`}),` wraps them all.`]}),`
`,(0,g.jsxs)(n.p,{children:[`A `,(0,g.jsx)(n.a,{href:`/docs/components-containers-progress-list--docs`,children:`Progress List`}),` renders a heading per step, which lands in the heading outline of the page.
Its `,(0,g.jsx)(n.code,{children:`headingLevel`}),` of 3 under the level 2 heading of the timeline section keeps that outline continuous.
Where the list is collapsible, completed steps start collapsed and the rest expanded, so a screen reader meets the phases still to come in full and the finished ones as headings.`]}),`
`,(0,g.jsxs)(n.p,{children:[`Images that illustrate what the text already describes take an empty `,(0,g.jsx)(n.code,{children:`alt`}),`.`]}),`
`,(0,g.jsx)(n.h2,{id:`see-also`,children:`See also`}),`
`,(0,g.jsxs)(n.ul,{children:[`
`,(0,g.jsxs)(n.li,{children:[(0,g.jsx)(n.a,{href:`/docs/components-containers-progress-list--docs`,children:`Progress List`}),` – the timeline of milestones.`]}),`
`,(0,g.jsxs)(n.li,{children:[(0,g.jsx)(n.a,{href:`/docs/pages-public-article-page--docs`,children:`Article Page`}),` – for a single update about the project.`]}),`
`,(0,g.jsxs)(n.li,{children:[(0,g.jsx)(n.a,{href:`/docs/pages-guidelines-layout-and-spacing--docs`,children:`Layout and spacing`}),` – the Cell sizes each section takes.`]}),`
`]})]})}function h(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,g.jsx)(t,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;function _(){return(_=e((()=>{g=a(),s(),n(),c(),p(),u()})))()}_();export{h as default};