import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{h as t,u as n}from"./blocks-zzQRermb.js";import{t as r}from"./jsx-runtime-ATHzeHXA.js";import{i,r as a}from"./react-Dyi61YEg.js";import{n as o,t as s}from"./PageAnatomy-B2WJ6emf.js";import{n as c,t as l}from"./NavigationPage.stories-Cn572A6X.js";var u;function d(){return(d=e((()=>{u=[[{height:`line`,label:`Breadcrumb`}],[{height:`title`,label:`Page title`}],[...Array.from({length:10},()=>({height:`card`,label:`Link section`}))]]})))()}function f(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,ul:`ul`,...i(),...e.components};return(0,m.jsxs)(m.Fragment,{children:[`
`,`
`,`
`,`
`,(0,m.jsx)(n,{of:l}),`
`,(0,m.jsx)(t.h1,{id:`navigation-page`,children:`Navigation page`}),`
`,(0,m.jsx)(t.p,{children:`A navigation page does not have much content of its own.
Instead, it presents groups of links to various pages related to a specific subject.`}),`
`,(0,m.jsx)(t.h2,{id:`anatomy`,children:`Anatomy`}),`
`,(0,m.jsx)(t.p,{children:`This schematic shows the default sections for this page type and how the grids and vertical space work.`}),`
`,(0,m.jsx)(s,{labels:u,of:l}),`
`,(0,m.jsx)(t.h2,{id:`headings`,children:`Headings`}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsx)(t.li,{children:`Use a level 1 Heading for the page title.`}),`
`,(0,m.jsx)(t.li,{children:`Set a size of ‘level-3’ to the headings in Link Sections (blocks consisting of a Heading, Paragraph, Standalone Link and/or a Link List).
Card Headings already set this by default.`}),`
`,(0,m.jsx)(t.li,{children:`If multiple Cards and Link Sections are grouped, update their Heading levels accordingly.`}),`
`]}),`
`,(0,m.jsx)(t.h2,{id:`spacing`,children:`Spacing`}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsx)(t.li,{children:`Grids on this page type use the default x-large vertical gap.`}),`
`]}),`
`,(0,m.jsx)(t.h2,{id:`with-side-navigation`,children:`With side navigation`}),`
`,(0,m.jsxs)(t.p,{children:[`Use a side navigation when the page presents one entry from a long list, and visitors move between those entries without leaving the page.
A `,(0,m.jsx)(t.a,{href:`/docs/components-navigation-table-of-contents--docs`,children:`Table of Contents`}),` is the navigation for this.
Mark the entry on screen with `,(0,m.jsx)(t.code,{children:`aria-current="page"`}),`, and set `,(0,m.jsx)(t.code,{children:`defaultExpanded`}),` on the outer list so its groups start open.`]}),`
`,(0,m.jsxs)(t.p,{children:[`Put the entry in a `,(0,m.jsx)(t.a,{href:`/docs/components-layout-grid--docs`,children:`Grid Subgrid`}),` rather than a Cell.
A Subgrid hands the columns it spans to its own children, so the Cells inside it sit on the columns of the page.
It is a single item in the row of the Grid however many rows of its own it holds, so the navigation sits beside all of it and the entry can be any length.`]}),`
`,(0,m.jsx)(t.p,{children:`Give the navigation the first place in the source order, so it precedes the entry for a screen reader and for the Tab key.
It only sits beside the entry on the wide grid; on narrower screens it spans the full width above it.`}),`
`,(0,m.jsxs)(t.p,{children:[`Set `,(0,m.jsx)(t.code,{children:`main`}),` on the Subgrid rather than on the Grid around it.
The navigation switches between entries and is a repeated block, so it does not belong to the main content area.
This puts the page title outside the landmark, which is the trade-off for keeping the navigation out of it.`]}),`
`,(0,m.jsxs)(t.p,{children:[`Such a page has two places worth reaching, so give it a second `,(0,m.jsx)(t.a,{href:`/docs/components-navigation-skip-link--docs`,children:`Skip Link`}),`: one to the navigation and one to the entry.
Name each after the thing it reaches rather than numbering them.`]}),`
`,(0,m.jsx)(t.p,{children:`Because the entry’s parts each sit in their own Cell of the Subgrid, the space between them is the row gap.
Leave the row gap of the Subgrid at the vertical gap of the Grid.
That gap has no medium size, so the space below the entry’s heading is larger than the vertical space guide advises for a heading.
Keep elements in one cell where you need the exact space between them.`}),`
`,(0,m.jsxs)(t.p,{children:[`A map belongs on this page as an interactive component, not as an `,(0,m.jsx)(t.a,{href:`/docs/components-media-image--docs`,children:`Image`}),`.
Whichever you use, it needs a text alternative: here the list of addresses carries everything the map shows, which is why the placeholder takes an empty `,(0,m.jsx)(t.code,{children:`alt`}),`.`]}),`
`,(0,m.jsxs)(t.p,{children:[`Give a repeated action such as ‘Toon op de kaart’ a `,(0,m.jsx)(t.a,{href:`/docs/utilities-css-visually-hidden--docs`,children:`visually hidden`}),` suffix naming what it acts on.
Without it, every `,(0,m.jsx)(t.a,{href:`/docs/components-buttons-button--docs`,children:`Button`}),` reads the same in a list of buttons.
Put the suffix after the visible label, so that label stays a contiguous part of the accessible name and speech input still reaches the button.`]})]})}function p(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,m.jsx)(t,{...e,children:(0,m.jsx)(f,{...e})}):f(e)}var m;function h(){return(h=e((()=>{m=r(),a(),t(),o(),d(),c()})))()}h();export{p as default};