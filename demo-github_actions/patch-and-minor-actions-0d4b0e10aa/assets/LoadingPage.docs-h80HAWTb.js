import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,h as n,p as r,u as i}from"./blocks-msKSRvUz.js";import{t as a}from"./jsx-runtime-ATHzeHXA.js";import{i as o,r as s}from"./react-Dyi61YEg.js";import{n as c,t as l}from"./PageAnatomy-BvokJJQH.js";import{n as u,t as d}from"./LoadingPage.stories-Du-1UuVH.js";var f;function p(){return(p=e((()=>{f=[[{height:`card`,label:`Page title and search`}],[{height:`body`,label:`Search results`}]]})))()}function m(e){let n={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...o(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[`
`,`
`,`
`,`
`,(0,g.jsx)(i,{of:d}),`
`,(0,g.jsx)(r,{}),`
`,(0,g.jsx)(t,{of:d}),`
`,(0,g.jsxs)(n.p,{children:[`It stands in `,(0,g.jsx)(n.a,{href:`/docs/components-feedback-skeleton--docs`,children:`Skeletons`}),` for the results while they load, and tells screen reader users what is happening.`]}),`
`,(0,g.jsx)(n.h2,{id:`anatomy`,children:`Anatomy`}),`
`,(0,g.jsx)(n.p,{children:`This schematic shows the default sections for this page type and how the grids and vertical space work.`}),`
`,(0,g.jsx)(l,{labels:f,of:d}),`
`,(0,g.jsx)(n.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,g.jsx)(n.h3,{id:`when-to-use`,children:`When to use`}),`
`,(0,g.jsx)(n.p,{children:`Use this page where the content arrives after the first render, so the reader sees the shell before the results.`}),`
`,(0,g.jsx)(n.h3,{id:`when-not-to-use`,children:`When not to use`}),`
`,(0,g.jsxs)(n.p,{children:[`Where the results are in the response that renders the page, there is nothing to wait for, so show them straight away, as the `,(0,g.jsx)(n.a,{href:`/docs/pages-public-search-results-page--docs`,children:`Search Results Page`}),` does.
Which of the two a search needs follows from where its results come from, not from the kind of page it is.`]}),`
`,(0,g.jsx)(n.h2,{id:`variants`,children:`Variants`}),`
`,(0,g.jsx)(n.h3,{id:`default`,children:`Default`}),`
`,(0,g.jsx)(n.p,{children:`The page before a search has run, with an empty field and no results region.`}),`
`,(0,g.jsx)(n.h3,{id:`loading`,children:`Loading`}),`
`,(0,g.jsx)(n.p,{children:`The page while the results are on their way.`}),`
`,(0,g.jsx)(n.p,{children:`Compose each Skeleton from the same parts, in the same Grid Cell, as the Card that will replace it: an image of the same aspect ratio, a heading, and two paragraph lines for the description.
Mirroring the shape keeps the layout shift small, but does not remove it.`}),`
`,(0,g.jsx)(n.h3,{id:`loaded`,children:`Loaded`}),`
`,(0,g.jsx)(n.p,{children:`The results in place, under a heading that counts them.`}),`
`,(0,g.jsx)(n.h2,{id:`structure`,children:`Structure`}),`
`,(0,g.jsxs)(n.ul,{children:[`
`,(0,g.jsxs)(n.li,{children:[`The Content Header and the results are each their own section, so a plain `,(0,g.jsx)(n.code,{children:`main`}),` wraps them both.`]}),`
`,(0,g.jsxs)(n.li,{children:[`This page opens with its title rather than a Breadcrumb, so the first Grid still takes the `,(0,g.jsx)(n.code,{children:`large`}),` top padding.
The `,(0,g.jsx)(n.a,{href:`/docs/components-forms-search-field--docs`,children:`Search Field`}),` takes the place of the lead paragraph in the Content Header Cell, so `,(0,g.jsx)(n.a,{href:`/docs/utilities-css-prose--docs`,children:`Prose`}),` spaces it a medium below the title.`]}),`
`,(0,g.jsxs)(n.li,{children:[`That Cell spans half the grid on wide screens, so the search input does not stretch to an unusable length.
It takes three quarters of the grid at medium and the full width at narrow.
The title follows that width rather than the `,(0,g.jsx)(n.a,{href:`/docs/pages-guidelines-layout-and-spacing--docs#content-header`,children:`Content Header Cell`}),` other page types use, because search is not a content page.`]}),`
`,(0,g.jsxs)(n.li,{children:[`The results are `,(0,g.jsx)(n.a,{href:`/docs/components-navigation-card--docs`,children:`Cards`}),` of 4 columns, in a second Grid.`]}),`
`]}),`
`,(0,g.jsx)(n.h2,{id:`layout-and-spacing`,children:`Layout and spacing`}),`
`,(0,g.jsxs)(n.ul,{children:[`
`,(0,g.jsxs)(n.li,{children:[`The first Grid takes a `,(0,g.jsx)(n.code,{children:`paddingTop`}),` of `,(0,g.jsx)(n.code,{children:`large`}),`, as the first Grid of every page does.`]}),`
`,(0,g.jsxs)(n.li,{children:[`Both Grids have the default background colour, so the second one takes a `,(0,g.jsx)(n.code,{children:`paddingTop`}),` of `,(0,g.jsx)(n.code,{children:`2x-large`}),`.`]}),`
`,(0,g.jsxs)(n.li,{children:[`The last Grid before the Page Footer takes a `,(0,g.jsx)(n.code,{children:`paddingBottom`}),` of `,(0,g.jsx)(n.code,{children:`2x-large`}),`.`]}),`
`]}),`
`,(0,g.jsx)(n.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,g.jsx)(n.p,{children:`The whole results region is marked busy while it loads, and announces once.
Marking each Skeleton would repeat the message for every card, and the Skeletons are hidden from assistive technologies in any case, so the status message is all a screen reader hears.`}),`
`,(0,g.jsxs)(n.p,{children:[(0,g.jsx)(n.code,{children:`aria-busy="true"`}),` also permits assistive technology to hold updates back from the status message and deliver them together once it turns false.
The ARIA specification allows this rather than requiring it, so not every screen reader does it.`]}),`
`,(0,g.jsx)(n.p,{children:`One status message stays in the DOM throughout and only its text changes, from a loading message to the result count.
A live region inserted together with its text is announced inconsistently across screen readers and browsers, so an always-present region is the more robust pattern.`}),`
`,(0,g.jsx)(n.p,{children:`No component wraps this pattern yet, so the Grid carries the busy state and the message is a visually hidden paragraph.`}),`
`,(0,g.jsx)(n.h2,{id:`see-also`,children:`See also`}),`
`,(0,g.jsxs)(n.ul,{children:[`
`,(0,g.jsxs)(n.li,{children:[(0,g.jsx)(n.a,{href:`/docs/components-feedback-skeleton--docs`,children:`Skeleton`}),` – what stands in for a result while it loads.`]}),`
`,(0,g.jsxs)(n.li,{children:[(0,g.jsx)(n.a,{href:`/docs/pages-public-search-results-page--docs`,children:`Search Results Page`}),` – search results beside a column of filters.`]}),`
`,(0,g.jsxs)(n.li,{children:[(0,g.jsx)(n.a,{href:`/docs/pages-public-news-overview-page--docs`,children:`News Overview Page`}),` – the filter-and-results layout these share.`]}),`
`]})]})}function h(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,g.jsx)(t,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;function _(){return(_=e((()=>{g=a(),s(),n(),c(),p(),u()})))()}_();export{h as default};