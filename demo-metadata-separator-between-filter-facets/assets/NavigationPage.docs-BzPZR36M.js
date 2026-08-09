import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,h as n,p as r,u as i}from"./blocks-CNG2gRRe.js";import{t as a}from"./jsx-runtime-ATHzeHXA.js";import{i as o,r as s}from"./react-Dyi61YEg.js";import{n as c,t as l}from"./PageAnatomy-D3XYpc6Y.js";import{n as u,t as d}from"./NavigationPage.stories-D-eUIn_y.js";var f;function p(){return(p=e((()=>{f=[[{height:`line`,label:`Breadcrumb`}],[{height:`title`,label:`Page title`}],[...Array.from({length:10},()=>({height:`card`,label:`Link section`}))]]})))()}function m(e){let n={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...o(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[`
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
`,(0,g.jsx)(n.p,{children:`Use this page as the entry point of one topic, where the page itself carries little content and mostly points onward.`}),`
`,(0,g.jsx)(n.h3,{id:`when-not-to-use`,children:`When not to use`}),`
`,(0,g.jsxs)(n.p,{children:[`Use a `,(0,g.jsx)(n.a,{href:`/docs/pages-public-home-page--docs`,children:`Home Page`}),` for the entry point of the whole site.`]}),`
`,(0,g.jsx)(n.h2,{id:`variants`,children:`Variants`}),`
`,(0,g.jsx)(n.h3,{id:`default`,children:`Default`}),`
`,(0,g.jsxs)(n.p,{children:[`The plain form: a Content Header, then Link Sections that each pair a heading with a Link List.
Every section heading is a level 2 Heading at `,(0,g.jsx)(n.code,{children:`size="level-3"`}),`, because a group of links is a block rather than a body of content.`]}),`
`,(0,g.jsx)(n.h3,{id:`with-top-tasks`,children:`With top tasks`}),`
`,(0,g.jsxs)(n.p,{children:[`Adds a row of `,(0,g.jsx)(n.a,{href:`/docs/components-navigation-card--docs`,children:`Cards`}),` above the Link Sections for the handful of things most visitors come to do.
The Cards carry a heading and a link and no image, so they take 3 columns each on the wide grid and fit four to a row.`]}),`
`,(0,g.jsx)(n.h3,{id:`with-an-interactive-element`,children:`With an interactive element`}),`
`,(0,g.jsxs)(n.p,{children:[`Adds a `,(0,g.jsx)(n.a,{href:`/docs/components-containers-spotlight--docs`,children:`Spotlight`}),` holding a `,(0,g.jsx)(n.a,{href:`/docs/components-forms-search-field--docs`,children:`Search Field`}),` and the links around it, for a topic where a visitor looks something up rather than browses to it.
A full-width `,(0,g.jsx)(n.a,{href:`/docs/components-media-image--docs`,children:`Image`}),` closes the page.`]}),`
`,(0,g.jsx)(n.h3,{id:`with-an-image-gallery`,children:`With an image gallery`}),`
`,(0,g.jsx)(n.p,{children:`Opens with a full-width Image at a 16:5 ratio and introduces the people behind the topic as Cards that each carry a portrait.
Those Card Headings are level 3, because the heading above the set is the level 2.
A gallery of images closes the page, below the contact details.`}),`
`,(0,g.jsx)(n.h3,{id:`with-side-navigation`,children:`With side navigation`}),`
`,(0,g.jsxs)(n.p,{children:[`Use a side navigation when the page presents one entry from a long list, and visitors move between those entries without leaving the page.
A `,(0,g.jsx)(n.a,{href:`/docs/components-navigation-table-of-contents--docs`,children:`Table of Contents`}),` is the navigation for this.
Mark the entry on screen with `,(0,g.jsx)(n.code,{children:`aria-current="page"`}),`, and set `,(0,g.jsx)(n.code,{children:`defaultExpanded`}),` on the outer list so its groups start open.`]}),`
`,(0,g.jsxs)(n.p,{children:[`Put the entry in a `,(0,g.jsx)(n.a,{href:`/docs/components-layout-grid--docs`,children:`Grid Subgrid`}),` rather than a Cell.
A Subgrid hands the columns it spans to its own children, so the Cells inside it sit on the columns of the page.
It is a single item in the row of the Grid however many rows of its own it holds, so the navigation sits beside all of it and the entry can be any length.`]}),`
`,(0,g.jsx)(n.p,{children:`Give the navigation the first place in the source order, so it precedes the entry for a screen reader and for the Tab key.
It only sits beside the entry on the wide grid; on narrower screens it spans the full width above it.`}),`
`,(0,g.jsxs)(n.p,{children:[`Set `,(0,g.jsx)(n.code,{children:`main`}),` on the Subgrid rather than on the Grid around it.
The navigation switches between entries and is a repeated block, so it does not belong to the main content area.
This puts the page title outside the landmark, which is the trade-off for keeping the navigation out of it.`]}),`
`,(0,g.jsx)(n.p,{children:`Because the entry’s parts each sit in their own Cell of the Subgrid, the space between them is the row gap.
Leave the row gap of the Subgrid at the vertical gap of the Grid.
That gap has no medium size, so the space below the entry’s heading is larger than the vertical space guide advises for a heading.
Keep elements in one cell where you need the exact space between them.`}),`
`,(0,g.jsxs)(n.p,{children:[`A map belongs on this page as an interactive component, not as an `,(0,g.jsx)(n.a,{href:`/docs/components-media-image--docs`,children:`Image`}),`.`]}),`
`,(0,g.jsx)(n.h3,{id:`subnavigation-page`,children:`Subnavigation page`}),`
`,(0,g.jsx)(n.p,{children:`The page one level further down, so its breadcrumb carries two links rather than one.
It mixes running text with the Link Sections, so its headings take the levels of a content page: a level 2 opens a section and a level 3 a block within it.`}),`
`,(0,g.jsx)(n.h2,{id:`structure`,children:`Structure`}),`
`,(0,g.jsxs)(n.ul,{children:[`
`,(0,g.jsx)(n.li,{children:`Set a size of ‘level-3’ on the headings in Link Sections (blocks consisting of a Heading, Paragraph, Standalone Link and/or a Link List).
Card Headings already set this by default.`}),`
`,(0,g.jsx)(n.li,{children:`If multiple Cards and Link Sections are grouped, update their Heading levels accordingly.`}),`
`]}),`
`,(0,g.jsx)(n.h2,{id:`layout-and-spacing`,children:`Layout and spacing`}),`
`,(0,g.jsxs)(n.ul,{children:[`
`,(0,g.jsx)(n.li,{children:`Grids on this page type use the default x-large vertical gap.`}),`
`]}),`
`,(0,g.jsx)(n.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,g.jsxs)(n.p,{children:[`A page with a side navigation has two places worth reaching, so it declares two `,(0,g.jsx)(n.a,{href:`/docs/components-navigation-skip-link--docs`,children:`Skip Links`}),` rather than one: one to the navigation and one to the entry, each named after what it reaches rather than numbered.`]}),`
`,(0,g.jsxs)(n.p,{children:[`A map needs a text alternative whether it is an image or an interactive component.
Here the list of addresses carries everything the map shows, which is why the placeholder takes an empty `,(0,g.jsx)(n.code,{children:`alt`}),`.`]}),`
`,(0,g.jsxs)(n.p,{children:[`A repeated action such as ‘Toon op de kaart’ carries a `,(0,g.jsx)(n.a,{href:`/docs/utilities-css-visually-hidden--docs`,children:`visually hidden`}),` suffix naming what it acts on, because without one every `,(0,g.jsx)(n.a,{href:`/docs/components-buttons-button--docs`,children:`Button`}),` reads the same in a list of buttons.
The suffix follows the visible label, so that label stays a contiguous part of the accessible name and speech input still reaches the button.`]}),`
`,(0,g.jsx)(n.h2,{id:`see-also`,children:`See also`}),`
`,(0,g.jsxs)(n.ul,{children:[`
`,(0,g.jsxs)(n.li,{children:[(0,g.jsx)(n.a,{href:`/docs/pages-public-home-page--docs`,children:`Home Page`}),` – the same job for the whole site.`]}),`
`,(0,g.jsxs)(n.li,{children:[(0,g.jsx)(n.a,{href:`/docs/components-navigation-table-of-contents--docs`,children:`Table of Contents`}),` – the side navigation.`]}),`
`,(0,g.jsxs)(n.li,{children:[(0,g.jsx)(n.a,{href:`/docs/components-layout-grid--docs`,children:`Grid`}),` – the Subgrid the entry sits in.`]}),`
`]})]})}function h(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,g.jsx)(t,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;function _(){return(_=e((()=>{g=a(),s(),n(),c(),p(),u()})))()}_();export{h as default};