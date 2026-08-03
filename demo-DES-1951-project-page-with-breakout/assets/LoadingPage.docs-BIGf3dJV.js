import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{h as t,u as n}from"./blocks-zzQRermb.js";import{t as r}from"./jsx-runtime-ATHzeHXA.js";import{i,r as a}from"./react-Dyi61YEg.js";import{n as o,t as s}from"./PageAnatomy-DLx7O1ou.js";import{n as c,t as l}from"./LoadingPage.stories-D1ZA3wYg.js";var u;function d(){return(d=e((()=>{u=[[{height:`card`,label:`Page title and search`}],[{height:`body`,label:`Search results`}]]})))()}function f(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,ul:`ul`,...i(),...e.components};return(0,m.jsxs)(m.Fragment,{children:[`
`,`
`,`
`,`
`,(0,m.jsx)(n,{of:l}),`
`,(0,m.jsx)(t.h1,{id:`loading-page`,children:`Loading page`}),`
`,(0,m.jsxs)(t.p,{children:[`Use this template for a page that fetches its content after the first render, such as a page of search results.
It stands in `,(0,m.jsx)(t.a,{href:`/docs/components-feedback-skeleton--docs`,children:`Skeletons`}),` for the results while they load, and tells screen reader users what is happening.`]}),`
`,(0,m.jsx)(t.h2,{id:`anatomy`,children:`Anatomy`}),`
`,(0,m.jsx)(t.p,{children:`This schematic shows the default sections for this page type and how the grids and vertical space work.`}),`
`,(0,m.jsx)(s,{labels:u,of:l}),`
`,(0,m.jsx)(t.h2,{id:`structure`,children:`Structure`}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsxs)(t.li,{children:[`The Content Header and the results are each their own section, so a plain `,(0,m.jsx)(t.code,{children:`main`}),` wraps them both.`]}),`
`,(0,m.jsxs)(t.li,{children:[`This page opens with its title rather than a Breadcrumb, so the first Grid still takes the `,(0,m.jsx)(t.code,{children:`large`}),` top padding.
The `,(0,m.jsx)(t.a,{href:`/docs/components-forms-search-field--docs`,children:`Search Field`}),` takes the place of the lead paragraph in the Content Header Cell, so `,(0,m.jsx)(t.a,{href:`/docs/utilities-css-prose--docs`,children:`Prose`}),` spaces it a medium below the title.`]}),`
`,(0,m.jsxs)(t.li,{children:[`That Cell spans half the grid on wide screens, so the search input does not stretch to an unusable length.
It takes three quarters of the grid at medium and the full width at narrow.
The title follows that width rather than the `,(0,m.jsx)(t.a,{href:`/docs/pages-public-introduction--docs#content-header`,children:`Content Header Cell`}),` other page types use, because search is not a content page.`]}),`
`,(0,m.jsxs)(t.li,{children:[`The results are `,(0,m.jsx)(t.a,{href:`/docs/components-navigation-card--docs`,children:`Cards`}),` of 4 columns, in a second Grid.`]}),`
`]}),`
`,(0,m.jsx)(t.h2,{id:`loading`,children:`Loading`}),`
`,(0,m.jsx)(t.p,{children:`The ‘Loading’ example shows the page while the results are on their way.`}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsx)(t.li,{children:`Compose each Skeleton from the same parts, in the same Grid Cell, as the Card that will replace it: an image of the same aspect ratio, a heading, and two paragraph lines for the description.
Mirroring the shape keeps the layout shift small, but does not remove it.`}),`
`,(0,m.jsx)(t.li,{children:`Mark the whole results region busy while it loads, and let it announce once.
Marking each Skeleton would repeat the message for every card.
The Skeletons are hidden from assistive technologies, so the status message is all a screen reader hears.`}),`
`,(0,m.jsxs)(t.li,{children:[`Be aware that `,(0,m.jsx)(t.code,{children:`aria-busy="true"`}),` also permits assistive technology to hold back updates from the status message and deliver them as one update once it turns false.
The ARIA specification allows this rather than requiring it, so not every screen reader does it.`]}),`
`]}),`
`,(0,m.jsx)(t.h2,{id:`loaded`,children:`Loaded`}),`
`,(0,m.jsx)(t.p,{children:`The ‘Loaded’ example shows the results in place, under a heading that counts them.`}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsx)(t.li,{children:`Keep one status message in the DOM at all times and only change its text, from a loading message to the result count.
A live region inserted together with its text is announced inconsistently across screen readers and browsers, so an always-present region is the more robust pattern.`}),`
`,(0,m.jsx)(t.li,{children:`No component wraps this pattern yet, so the Grid carries the busy state and the message is a visually hidden paragraph.`}),`
`]}),`
`,(0,m.jsx)(t.h2,{id:`layout-and-spacing`,children:`Layout and spacing`}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsxs)(t.li,{children:[`The first Grid takes a `,(0,m.jsx)(t.code,{children:`paddingTop`}),` of `,(0,m.jsx)(t.code,{children:`large`}),`, as the first Grid of every page does.`]}),`
`,(0,m.jsxs)(t.li,{children:[`Both Grids have the default background colour, so the second one takes a `,(0,m.jsx)(t.code,{children:`paddingTop`}),` of `,(0,m.jsx)(t.code,{children:`2x-large`}),`.`]}),`
`,(0,m.jsxs)(t.li,{children:[`The last Grid before the Page Footer takes a `,(0,m.jsx)(t.code,{children:`paddingBottom`}),` of `,(0,m.jsx)(t.code,{children:`2x-large`}),`.`]}),`
`]})]})}function p(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,m.jsx)(t,{...e,children:(0,m.jsx)(f,{...e})}):f(e)}var m;function h(){return(h=e((()=>{m=r(),a(),t(),o(),d(),c()})))()}h();export{p as default};