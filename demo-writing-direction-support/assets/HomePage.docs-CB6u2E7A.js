import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,h as n,p as r,u as i}from"./blocks-zzQRermb.js";import{t as a}from"./jsx-runtime-ATHzeHXA.js";import{i as o,r as s}from"./react-Dyi61YEg.js";import{n as c,t as l}from"./anatomyLabels-BTleY0Xv.js";import{n as u,t as d}from"./HomePage.stories-Bl9lp24J.js";import{n as f,t as p}from"./PageAnatomy-DdVFLw1V.js";function m(e){let n={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...o(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[`
`,`
`,`
`,`
`,(0,g.jsx)(i,{of:d}),`
`,(0,g.jsx)(r,{}),`
`,(0,g.jsx)(t,{of:d}),`
`,(0,g.jsx)(n.h2,{id:`anatomy`,children:`Anatomy`}),`
`,(0,g.jsx)(n.p,{children:`This schematic shows the default sections for this page type and how the grids and vertical space work.`}),`
`,(0,g.jsx)(p,{labels:l,of:d}),`
`,(0,g.jsx)(n.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,g.jsx)(n.h3,{id:`when-to-use`,children:`When to use`}),`
`,(0,g.jsx)(n.p,{children:`Use this page as the entry point of a website, where a visitor arrives without a subject in mind.`}),`
`,(0,g.jsx)(n.h3,{id:`when-not-to-use`,children:`When not to use`}),`
`,(0,g.jsxs)(n.p,{children:[`Use a `,(0,g.jsx)(n.a,{href:`/docs/pages-public-navigation-page--docs`,children:`Navigation Page`}),` for the entry point of one subject within the site.`]}),`
`,(0,g.jsx)(n.h2,{id:`structure`,children:`Structure`}),`
`,(0,g.jsxs)(n.p,{children:[`The page opens with an `,(0,g.jsx)(n.a,{href:`/docs/components-layout-overlap--docs`,children:`Overlap`}),` rather than a breadcrumb, stacking a `,(0,g.jsx)(n.a,{href:`/docs/components-forms-search-field--docs`,children:`Search Field`}),` on a background `,(0,g.jsx)(n.a,{href:`/docs/components-media-image--docs`,children:`Image`}),`.
An Overlap runs to the full width of the page, so it is a sibling of the Grids rather than a child of a Cell.
Everything below it sits on a Grid again.
See `,(0,g.jsx)(n.a,{href:`/docs/pages-guidelines-page-structure--docs`,children:`Page structure`}),` for the shell around it.`]}),`
`,(0,g.jsxs)(n.p,{children:[`A home page has no single most prominent subject, so it usually has no visible level 1 `,(0,g.jsx)(n.a,{href:`/docs/components-text-heading--docs`,children:`Heading`}),`.`]}),`
`,(0,g.jsxs)(n.ul,{children:[`
`,(0,g.jsx)(n.li,{children:`Add a visually hidden level 1 heading with a text like ‘Homepage van (name of the organisation)’.
Assign level 2 and a size of ‘level-1’ to the visible headings.`}),`
`,(0,g.jsx)(n.li,{children:`Use the default size of ‘level-3’ headings in Cards and set their appropriate levels.`}),`
`,(0,g.jsx)(n.li,{children:`Do the same for blocks consisting of Heading, Paragraph, Standalone Link and Link List.`}),`
`]}),`
`,(0,g.jsx)(n.h2,{id:`layout-and-spacing`,children:`Layout and spacing`}),`
`,(0,g.jsxs)(n.ul,{children:[`
`,(0,g.jsx)(n.li,{children:`In Grids of Cards, use a large vertical gap.`}),`
`]}),`
`,(0,g.jsx)(n.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,g.jsxs)(n.p,{children:[`The level 1 heading is hidden with the `,(0,g.jsx)(n.code,{children:`ams-visually-hidden`}),` class rather than left out, so the heading outline still opens at level 1 for a screen reader while the design keeps no single dominant title.`]}),`
`,(0,g.jsxs)(n.p,{children:[`The highlights band belongs to the page's own content, so its Spotlight stays a plain band inside `,(0,g.jsx)(n.code,{children:`main`}),`.
On the Article Page the comparable band sits outside `,(0,g.jsx)(n.code,{children:`main`}),` as a named aside, because there it accompanies the article rather than being part of it.`]}),`
`,(0,g.jsxs)(n.p,{children:[`Card images take an empty `,(0,g.jsx)(n.code,{children:`alt`}),`: the heading and link beside them already name what they point at.`]}),`
`,(0,g.jsx)(n.h2,{id:`see-also`,children:`See also`}),`
`,(0,g.jsxs)(n.ul,{children:[`
`,(0,g.jsxs)(n.li,{children:[(0,g.jsx)(n.a,{href:`/docs/pages-public-navigation-page--docs`,children:`Navigation Page`}),` – the same job for a single subject.`]}),`
`,(0,g.jsxs)(n.li,{children:[(0,g.jsx)(n.a,{href:`/docs/components-layout-overlap--docs`,children:`Overlap`}),` – the full-width opening section.`]}),`
`,(0,g.jsxs)(n.li,{children:[(0,g.jsx)(n.a,{href:`/docs/pages-guidelines-page-structure--docs`,children:`Page structure`}),` – the shell every page shares.`]}),`
`]})]})}function h(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,g.jsx)(t,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;function _(){return(_=e((()=>{g=a(),s(),n(),f(),c(),u()})))()}_();export{h as default};