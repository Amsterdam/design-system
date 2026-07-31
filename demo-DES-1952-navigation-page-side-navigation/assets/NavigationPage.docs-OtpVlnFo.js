import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{h as t,u as n}from"./blocks-DDIQjgnz.js";import{t as r}from"./jsx-runtime-Bq1bXGty.js";import{i}from"./react-BnCtKaSV.js";import{t as a}from"./mdx-react-shim-9RzcSRdq.js";import{n as o,t as s}from"./NavigationPage.stories-Dv2kUig8.js";function c(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,ul:`ul`,...i(),...e.components};return(0,u.jsxs)(u.Fragment,{children:[`
`,`
`,`
`,(0,u.jsx)(n,{of:s}),`
`,(0,u.jsx)(t.h1,{id:`navigation-page`,children:`Navigation page`}),`
`,(0,u.jsx)(t.p,{children:`A navigation page does not have much content of its own.
Instead, it presents groups of links to various pages related to a specific subject.`}),`
`,(0,u.jsx)(t.h2,{id:`headings`,children:`Headings`}),`
`,(0,u.jsxs)(t.ul,{children:[`
`,(0,u.jsx)(t.li,{children:`Use a level 1 Heading for the page title.`}),`
`,(0,u.jsx)(t.li,{children:`Set a size of ‘level-3’ to the headings in Link Sections (blocks consisting of a Heading, Paragraph, Standalone Link and/or a Link List).
Card Headings already set this by default.`}),`
`,(0,u.jsx)(t.li,{children:`If multiple Cards and Link Sections are grouped, update their Heading levels accordingly.`}),`
`]}),`
`,(0,u.jsx)(t.h2,{id:`spacing`,children:`Spacing`}),`
`,(0,u.jsxs)(t.ul,{children:[`
`,(0,u.jsx)(t.li,{children:`Grids on this page type use the default x-large vertical gap.`}),`
`]}),`
`,(0,u.jsx)(t.h2,{id:`with-side-navigation`,children:`With side navigation`}),`
`,(0,u.jsxs)(t.p,{children:[`Use a side navigation when the page presents one entry from a long list, and visitors move between those entries without leaving the page.
A `,(0,u.jsx)(t.a,{href:`/docs/components-navigation-table-of-contents--docs`,children:`Table of Contents`}),` is the navigation for this.
Mark the entry on screen with `,(0,u.jsx)(t.code,{children:`aria-current="page"`}),`, and set `,(0,u.jsx)(t.code,{children:`defaultExpanded`}),` on the outer list so its groups start open.`]}),`
`,(0,u.jsxs)(t.p,{children:[`The navigation is usually longer than the entry beside it.
Give its Grid Cell a `,(0,u.jsx)(t.code,{children:`rowSpan`}),` for the number of rows that entry occupies, or it takes a row of its own and pushes everything below it.
`,(0,u.jsx)(t.code,{children:`rowSpan`}),` accepts at most 4, so plan the entry for at most that many rows on the wide grid, or place the navigation above the content instead.
Set `,(0,u.jsx)(t.code,{children:`rowSpan`}),` per grid variant: on narrower grids the navigation stacks above the content and spans a single row.`]}),`
`,(0,u.jsx)(t.p,{children:`Because the entry’s parts each sit in their own Grid Cell, the space between them is the Grid’s row gap.
That gap has no medium size, so the space below the entry’s heading is larger than the vertical space guide advises for a heading.
Keep elements in one cell where you need the exact space between them.`}),`
`,(0,u.jsxs)(t.p,{children:[`A map belongs on this page as an interactive component, not as an `,(0,u.jsx)(t.a,{href:`/docs/components-media-image--docs`,children:`Image`}),`.
Whichever you use, it needs a text alternative: here the list of addresses carries everything the map shows, which is why the placeholder takes an empty `,(0,u.jsx)(t.code,{children:`alt`}),`.`]}),`
`,(0,u.jsxs)(t.p,{children:[`Give a repeated action such as ‘Toon op de kaart’ a `,(0,u.jsx)(t.a,{href:`/docs/utilities-css-visually-hidden--docs`,children:`visually hidden`}),` suffix naming what it acts on.
Without it, every `,(0,u.jsx)(t.a,{href:`/docs/components-buttons-button--docs`,children:`Button`}),` reads the same in a list of buttons.
Put the suffix after the visible label, so that label stays a contiguous part of the accessible name and speech input still reaches the button.`]})]})}function l(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,u.jsx)(t,{...e,children:(0,u.jsx)(c,{...e})}):c(e)}var u;e((()=>{u=r(),a(),t(),o()}))();export{l as default};