import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,h as n,p as r,u as i}from"./blocks-zzQRermb.js";import{t as a}from"./jsx-runtime-ATHzeHXA.js";import{i as o,r as s}from"./react-Dyi61YEg.js";import{n as c,t as l}from"./PageAnatomy-D7oLJ1nV.js";import{n as u,t as d}from"./InformationPage.stories-BfyhgN_F.js";var f;function p(){return(p=e((()=>{f=[[{height:`line`,label:`Breadcrumb`}],[{height:`title`,label:`Page title`},{height:`panel`,label:`Lead paragraph`},`Lead image`],[{height:`body`,label:`Information body`}]]})))()}function m(e){let n={a:`a`,code:`code`,h2:`h2`,li:`li`,p:`p`,ul:`ul`,...o(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[`
`,`
`,`
`,`
`,(0,g.jsx)(i,{of:d}),`
`,(0,g.jsx)(r,{}),`
`,(0,g.jsx)(t,{of:d}),`
`,(0,g.jsxs)(n.p,{children:[`For a task that ends in a form or an application, use the `,(0,g.jsx)(n.a,{href:`/docs/pages-public-product-page--docs`,children:`Product page`}),` instead.`]}),`
`,(0,g.jsx)(n.h2,{id:`anatomy`,children:`Anatomy`}),`
`,(0,g.jsx)(n.p,{children:`This schematic shows the default sections for this page type and how the grids and vertical space work.`}),`
`,(0,g.jsx)(l,{labels:f,of:d}),`
`,(0,g.jsx)(n.h2,{id:`structure`,children:`Structure`}),`
`,(0,g.jsxs)(n.ul,{children:[`
`,(0,g.jsxs)(n.li,{children:[`The `,(0,g.jsx)(n.a,{href:`/docs/components-navigation-breadcrumb--docs`,children:`Breadcrumb`}),` has its own `,(0,g.jsx)(n.a,{href:`/docs/components-layout-grid--docs`,children:`Grid`}),` to separate its `,(0,g.jsx)(n.code,{children:`nav`}),` element from the `,(0,g.jsx)(n.code,{children:`main`}),` wrapping the page content.`]}),`
`,(0,g.jsxs)(n.li,{children:[`The Content Header contains the title and a Metadata Paragraph that classifies the page: taxonomy tags, optionally preceded by a date.
The tags are a plain `,(0,g.jsx)(n.a,{href:`/docs/components-text-paragraph--docs`,children:`Paragraph`}),` of comma-separated terms, not links.`]}),`
`,(0,g.jsx)(n.li,{children:`The body holds several sections, each opening with a level 2 Heading.`}),`
`,(0,g.jsx)(n.li,{children:`The Content Header Grid holds the title and the metadata in one Cell.
Where a lead Image sits beside the lead paragraph, each of the two takes its own Cell in that same Grid; without one, the lead stays in the Content Header Cell.`}),`
`,(0,g.jsx)(n.li,{children:`Each section below the Content Header sits in its own Grid, so the padding between those Grids sets them apart rather than a row gap.`}),`
`]}),`
`,(0,g.jsx)(n.h2,{id:`headings`,children:`Headings`}),`
`,(0,g.jsxs)(n.ul,{children:[`
`,(0,g.jsx)(n.li,{children:`Use a level 1 Heading for the title of the page.`}),`
`,(0,g.jsx)(n.li,{children:`Use level 2 Headings for the section titles, and level 3 for subsections.`}),`
`,(0,g.jsxs)(n.li,{children:[`Set the Accordion’s `,(0,g.jsx)(n.code,{children:`headingLevel`}),` one level below the section heading it follows.
In the first example that is level 3.`]}),`
`]}),`
`,(0,g.jsx)(n.h2,{id:`layout-and-spacing`,children:`Layout and spacing`}),`
`,(0,g.jsxs)(n.ul,{children:[`
`,(0,g.jsxs)(n.li,{children:[`The Grids use the `,(0,g.jsx)(n.a,{href:`/docs/pages-public-introduction--docs#how-to-size-the-grid-cells`,children:`recommended Cell sizes`}),`.
The Cells for the lead paragraph and the Image take the sizes for side-by-side blocks, which reach one column further than the Content Header Cell above them.`]}),`
`,(0,g.jsx)(n.li,{children:`All body sections share a single Grid Cell, indented one column on wider screens for a comfortable reading measure.`}),`
`,(0,g.jsxs)(n.li,{children:[`Where the lead paragraph takes a Cell of its own, the Grid’s row gap sets the space between it and the metadata above.
That gap stays at `,(0,g.jsx)(n.code,{children:`x-large`}),` rather than the medium that `,(0,g.jsx)(n.a,{href:`/docs/docs-designer-guide-vertical-space--docs`,children:`vertical space`}),` asks for within a Cell: the default background colour of the page runs along it — at the left-hand side, and across the full width on the narrow grid — so the wider gap still reads as one Content Header.`]}),`
`,(0,g.jsxs)(n.li,{children:[`An `,(0,g.jsx)(n.a,{href:`/docs/components-media-image--docs`,children:`Image`}),` always reserves its box, so the layout does not shift while it loads.
Use `,(0,g.jsx)(n.code,{children:`aspectRatio`}),` to change the ratio it crops to; leaving it off keeps the default of 16:9.
Do not lazy-load an image in the first screenful, where it would only delay the largest image in the viewport.`]}),`
`,(0,g.jsxs)(n.li,{children:[`The `,(0,g.jsx)(n.a,{href:`/docs/utilities-css-prose--docs`,children:`Prose`}),` utility class sets the vertical space within the Content Header and within the body Cell, following the `,(0,g.jsx)(n.a,{href:`/docs/docs-designer-guide-vertical-space--docs`,children:`vertical space`}),` recommendations.
An Accordion starts with a Heading, which is why Prose gives it the space that heading level calls for.`]}),`
`]}),`
`,(0,g.jsx)(n.h2,{id:`default`,children:`Default`}),`
`,(0,g.jsx)(n.p,{children:`The lead paragraph and a lead Image sit side by side below the title, and stack on the narrow grid.`}),`
`,(0,g.jsxs)(n.p,{children:[`An `,(0,g.jsx)(n.a,{href:`/docs/components-containers-accordion--docs`,children:`Accordion`}),` groups detail questions that not every reader needs.
Keep the answers short enough to read without scrolling back to the question.`]}),`
`,(0,g.jsx)(n.p,{children:`Images within the body are as wide as the text column.`}),`
`,(0,g.jsx)(n.h2,{id:`with-table`,children:`With Table`}),`
`,(0,g.jsx)(n.p,{children:`Without an image beside it, the lead paragraph stays in the Content Header Cell with the title and the metadata.`}),`
`,(0,g.jsxs)(n.p,{children:[`A `,(0,g.jsx)(n.a,{href:`/docs/components-containers-table--docs`,children:`Table`}),` presents reference data that would be unreadable as prose.
It sizes to its content and scrolls horizontally once it outgrows its Grid Cell, so give it a cell wider than the reading column.
Put the title of the table in its Caption rather than in a separate Heading above it, and mark the first cell of each row as a header cell with `,(0,g.jsx)(n.code,{children:`scope="row"`}),` so that screen readers announce it with every cell that follows.`]}),`
`,(0,g.jsxs)(n.p,{children:[`A `,(0,g.jsx)(n.a,{href:`/docs/components-media-figure--docs`,children:`Figure`}),` groups the table with the sources the data comes from.
Keep the table’s own Caption as its name, and use the Figure’s Caption for the sources: the two describe different things, and a table that loses its Caption loses its accessible name.
The Figure supplies the space between them, so the table needs no margin of its own.`]}),`
`,(0,g.jsxs)(n.p,{children:[`Write any sources as one sentence, with a `,(0,g.jsx)(n.a,{href:`/docs/components-navigation-link--docs`,children:`Link`}),` for each of them.
The Figure Caption then presents them in the small caption text it is meant for.
Note that the whole caption becomes the accessible name of the Figure, so keep it short.`]})]})}function h(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,g.jsx)(t,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;function _(){return(_=e((()=>{g=a(),s(),n(),c(),p(),u()})))()}_();export{h as default};