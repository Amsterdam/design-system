import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,h as n,p as r,u as i}from"./blocks-CXJ28Utr.js";import{t as a}from"./jsx-runtime-ATHzeHXA.js";import{i as o,r as s}from"./react-Dyi61YEg.js";import{n as c,t as l}from"./PageAnatomy-BJZaoZd5.js";import{n as u,t as d}from"./StatusBadge-Dj7W3Sm2.js";import{n as f,t as p}from"./TopNavigationPage.stories-CJ2YKZjD.js";var m;function h(){return(h=e((()=>{m=[[{height:`heading`,label:`Top navigation bar`}],[{height:{narrow:`heading`,medium:`panel`,wide:`panel`},label:`Section navigation`},{height:`title`,label:`Breadcrumb and title`},{height:`card`,label:`Content block`},{height:`card`,label:`Content block`},{height:`card`,label:`Content block`},{height:`tile`,label:`Content block`}]]})))()}function g(e){let n={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...o(),...e.components};return(0,v.jsxs)(v.Fragment,{children:[`
`,`
`,`
`,`
`,(0,v.jsx)(i,{of:p}),`
`,(0,v.jsx)(d,{description:`In the With section tabs variant, a narrow window can stack two horizontal tab rows above the content. The mobile design is still being explored.`,status:`experimental`}),`
`,(0,v.jsx)(r,{}),`
`,(0,v.jsx)(t,{of:p}),`
`,(0,v.jsx)(n.h2,{id:`anatomy`,children:`Anatomy`}),`
`,(0,v.jsx)(n.p,{children:`This schematic shows the default sections for this page type and how the grids and vertical space work.`}),`
`,(0,v.jsx)(l,{labels:m,mode:`compact`,of:p}),`
`,(0,v.jsx)(n.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,v.jsx)(n.h3,{id:`when-to-use`,children:`When to use`}),`
`,(0,v.jsx)(n.p,{children:`Use this template where first-level sections fit in a bar below the Page Header, and where each section has one to three levels below it.
This model works best with 3 to 7 links in the top bar.
Choose it for applications that people use on a desktop or a laptop all or most of the time.`}),`
`,(0,v.jsx)(n.h3,{id:`when-not-to-use`,children:`When not to use`}),`
`,(0,v.jsxs)(n.p,{children:[`Use a page with a `,(0,v.jsx)(n.a,{href:`/docs/components-navigation-menu--docs`,children:`Menu`}),` beside it when the first-level sections do not fit in the bar, or when there are more than three levels below it.`]}),`
`,(0,v.jsx)(n.p,{children:`Avoid this model when many users work on a phone or a tablet.
In a narrow window, both navigations come before the content and take up much of the screen.`}),`
`,(0,v.jsx)(n.h2,{id:`variants`,children:`Variants`}),`
`,(0,v.jsx)(n.h3,{id:`default`,children:`Default`}),`
`,(0,v.jsxs)(n.p,{children:[`A top bar with the first level of navigation.
A collapsible `,(0,v.jsx)(n.a,{href:`/docs/components-navigation-table-of-contents--docs`,children:`Table of Contents`}),` beside the content for levels below it.`]}),`
`,(0,v.jsx)(n.p,{children:`In a narrow window, the Table of Contents sits above the content, with the current section open.`}),`
`,(0,v.jsx)(n.h3,{id:`with-section-tabs`,children:`With section tabs`}),`
`,(0,v.jsxs)(n.p,{children:[`A top bar with the first level of navigation.
A vertical `,(0,v.jsx)(n.a,{href:`/docs/components-navigation-tab-navigation--docs`,children:`Tab Navigation`}),` beside the content when the section has one level below it.`]}),`
`,(0,v.jsx)(n.p,{children:`In a narrow window, the vertical Tab Navigation turns horizontal too, so two rows of tabs scroll sideways above the content.
Use this variant only where users rarely work in a narrow window.`}),`
`,(0,v.jsx)(n.h2,{id:`structure`,children:`Structure`}),`
`,(0,v.jsxs)(n.p,{children:[`Use a `,(0,v.jsx)(n.a,{href:`/docs/components-navigation-tab-navigation--docs`,children:`Tab Navigation`}),` in a Grid between the Page Header and the content area for first-level navigation.
Mark the link to the current section with `,(0,v.jsx)(n.code,{children:`aria-current="true"`}),`.`]}),`
`,(0,v.jsxs)(n.p,{children:[`Render deeper levels in a sidebar beside the content.
For deep trees, use a collapsible `,(0,v.jsx)(n.a,{href:`/docs/components-navigation-table-of-contents--docs`,children:`Table of Contents`}),` and keep the current section expanded.
For one level below the top bar, use a vertical `,(0,v.jsx)(n.a,{href:`/docs/components-navigation-tab-navigation--docs`,children:`Tab Navigation`}),`.`]}),`
`,(0,v.jsxs)(n.p,{children:[`Keep the sidebar navigation outside `,(0,v.jsx)(n.code,{children:`main`}),`.
Use `,(0,v.jsx)(n.code,{children:`<Grid.Subgrid as="main">`}),` for the content area so the content stays aligned to the same columns as the rest of the page.`]}),`
`,(0,v.jsxs)(n.p,{children:[`Keep each navigation landmark named and distinct.
On this page, the top bar is `,(0,v.jsx)(n.code,{children:`Hoofdmenu`}),`, and the sidebar navigation is named by its own heading or `,(0,v.jsx)(n.code,{children:`accessibleName`}),`.`]}),`
`,(0,v.jsx)(n.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,v.jsxs)(n.p,{children:[`The link to the current page carries `,(0,v.jsx)(n.code,{children:`aria-current="page"`}),` in the sidebar navigation.
The link to its top-level section in the bar carries `,(0,v.jsx)(n.code,{children:`aria-current="true"`}),`.`]}),`
`,(0,v.jsxs)(n.p,{children:[`The `,(0,v.jsx)(n.a,{href:`/docs/components-navigation-breadcrumb--docs`,children:`Breadcrumb`}),` sits in the first cell inside `,(0,v.jsx)(n.code,{children:`main`}),`.
The `,(0,v.jsx)(n.a,{href:`/docs/components-navigation-skip-link--docs`,children:`Skip Link`}),` targets the content `,(0,v.jsx)(n.code,{children:`main`}),` directly.`]}),`
`,(0,v.jsx)(n.h2,{id:`see-also`,children:`See also`}),`
`,(0,v.jsxs)(n.ul,{children:[`
`,(0,v.jsxs)(n.li,{children:[(0,v.jsx)(n.a,{href:`/docs/components-navigation-tab-navigation--docs`,children:`Tab Navigation`}),` – the top bar and the one-level section variant.`]}),`
`,(0,v.jsxs)(n.li,{children:[(0,v.jsx)(n.a,{href:`/docs/components-navigation-table-of-contents--docs`,children:`Table of Contents`}),` – nested section and page navigation.`]}),`
`,(0,v.jsxs)(n.li,{children:[(0,v.jsx)(n.a,{href:`/docs/pages-internal-navigation-page--docs`,children:`Navigation Page`}),` – another internal model and its narrow-window trade-off.`]}),`
`]})]})}function _(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,v.jsx)(t,{...e,children:(0,v.jsx)(g,{...e})}):g(e)}var v;function y(){return(y=e((()=>{v=a(),s(),n(),c(),u(),h(),f()})))()}y();export{_ as default};