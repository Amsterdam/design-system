import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,h as n,p as r,u as i}from"./blocks-BQKRe05W.js";import{t as a}from"./jsx-runtime-ATHzeHXA.js";import{i as o,r as s}from"./react-Dyi61YEg.js";import{n as c,t as l}from"./anatomyLabels-Cup413Z3.js";import{n as u,t as d}from"./NavigationPage.stories-WAUBqIRB.js";import{n as f,t as p}from"./PageAnatomy-UiTLHbG7.js";import{n as m,t as h}from"./StatusBadge-D3-KYwoy.js";function g(e){let n={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...o(),...e.components};return(0,v.jsxs)(v.Fragment,{children:[`
`,`
`,`
`,`
`,(0,v.jsx)(i,{of:d}),`
`,(0,v.jsx)(h,{description:`Stacking two Tab Navigations on small screens is not ideal. The mobile design is being explored.`,status:`experimental`}),`
`,(0,v.jsx)(r,{}),`
`,(0,v.jsx)(t,{of:d}),`
`,(0,v.jsx)(n.h2,{id:`anatomy`,children:`Anatomy`}),`
`,(0,v.jsx)(n.p,{children:`This schematic shows the default sections for this page type and how the grids and vertical space work.`}),`
`,(0,v.jsx)(p,{labels:l,menu:!0,mode:`compact`,of:d}),`
`,(0,v.jsx)(n.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,v.jsx)(n.h3,{id:`when-to-use`,children:`When to use`}),`
`,(0,v.jsx)(n.p,{children:`This template works best with 3–7 main sections.
Too few make the vertical Tab Navigation redundant; too many make it hard to scan.`}),`
`,(0,v.jsx)(n.h3,{id:`when-not-to-use`,children:`When not to use`}),`
`,(0,v.jsxs)(n.p,{children:[`Use an `,(0,v.jsx)(n.a,{href:`/docs/pages-internal-home-page--docs`,children:`Internal Home Page`}),` where the Menu alone carries the navigation.`]}),`
`,(0,v.jsx)(n.h2,{id:`structure`,children:`Structure`}),`
`,(0,v.jsxs)(n.p,{children:[`The main navigation is provided by the `,(0,v.jsx)(n.a,{href:`/docs/components-navigation-menu--docs`,children:`Menu`}),` component.
Within the body of the page, a vertical `,(0,v.jsx)(n.a,{href:`/docs/components-navigation-tab-navigation--docs`,children:`Tab Navigation`}),` shows its main sections, each with an icon.
A second, horizontal Tab Navigation across the top shows the sub-items for the active section.`]}),`
`,(0,v.jsxs)(n.p,{children:[`Clicking a main section selects it, updates the sub-navigation, and resets its scroll position to the start.
Each link has an `,(0,v.jsx)(n.code,{children:`href`}),` with a slug-based path, making the pattern suitable for both server-rendered pages and single-page applications.`]}),`
`,(0,v.jsx)(n.h2,{id:`layout-and-spacing`,children:`Layout and spacing`}),`
`,(0,v.jsx)(n.p,{children:`On narrow screens both Tab Navigations stack vertically.
This is a known limitation, and the mobile design is being further explored.`}),`
`,(0,v.jsx)(n.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,v.jsxs)(n.p,{children:[`Each Tab Navigation renders a `,(0,v.jsx)(n.code,{children:`nav`}),` element and takes an `,(0,v.jsx)(n.code,{children:`accessibleName`}),` of its own, so a screen reader offers two named navigation landmarks rather than two it cannot tell apart.
The link for the section on screen carries `,(0,v.jsx)(n.code,{children:`aria-current="page"`}),` in both.`]}),`
`,(0,v.jsx)(n.p,{children:`Where the two stack on a narrow window, every main section and every sub-item precedes the content in the reading order.
That is the cost of the layout recorded above, and the part of this template still being explored.`}),`
`,(0,v.jsx)(n.h2,{id:`see-also`,children:`See also`}),`
`,(0,v.jsxs)(n.ul,{children:[`
`,(0,v.jsxs)(n.li,{children:[(0,v.jsx)(n.a,{href:`/docs/components-navigation-tab-navigation--docs`,children:`Tab Navigation`}),` – both navigations on this page.`]}),`
`,(0,v.jsxs)(n.li,{children:[(0,v.jsx)(n.a,{href:`/docs/components-navigation-menu--docs`,children:`Menu`}),` – the navigation across modules.`]}),`
`]})]})}function _(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,v.jsx)(t,{...e,children:(0,v.jsx)(g,{...e})}):g(e)}var v;function y(){return(y=e((()=>{v=a(),s(),n(),f(),m(),c(),u()})))()}y();export{_ as default};