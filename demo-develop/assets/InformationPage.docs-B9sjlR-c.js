import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{h as t,u as n}from"./blocks-CqryReaq.js";import{t as r}from"./jsx-runtime-Bq1bXGty.js";import{i}from"./react-BnCtKaSV.js";import{t as a}from"./mdx-react-shim-9RzcSRdq.js";import{n as o,t as s}from"./InformationPage.stories-SWIx8gsS.js";function c(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,ul:`ul`,...i(),...e.components};return(0,u.jsxs)(u.Fragment,{children:[`
`,`
`,`
`,(0,u.jsx)(n,{of:s}),`
`,(0,u.jsx)(t.h1,{id:`information-page`,children:`Information page`}),`
`,(0,u.jsxs)(t.p,{children:[`Explains a subject that is neither a product nor a news article: background, rules, and what they mean for the reader.
Use it when the reader wants to understand something, rather than arrange something.
For a task that ends in a form or an application, use the `,(0,u.jsx)(t.a,{href:`/docs/pages-public-product-page--docs`,children:`Product page`}),` instead.`]}),`
`,(0,u.jsx)(t.h2,{id:`structure`,children:`Structure`}),`
`,(0,u.jsxs)(t.ul,{children:[`
`,(0,u.jsxs)(t.li,{children:[`The `,(0,u.jsx)(t.a,{href:`/docs/components-navigation-breadcrumb--docs`,children:`Breadcrumb`}),` has its own `,(0,u.jsx)(t.a,{href:`/docs/components-layout-grid--docs`,children:`Grid`}),` to separate its `,(0,u.jsx)(t.code,{children:`nav`}),` element from the `,(0,u.jsx)(t.code,{children:`main`}),` wrapping the page content.`]}),`
`,(0,u.jsxs)(t.li,{children:[`The page header contains the title and the metadata that classifies the page: taxonomy tags, optionally preceded by a date.
The tags are a plain `,(0,u.jsx)(t.a,{href:`/docs/components-text-paragraph--docs`,children:`Paragraph`}),` of comma-separated terms, not links.`]}),`
`,(0,u.jsx)(t.li,{children:`The body holds several sections, each opening with a level 2 Heading.`}),`
`,(0,u.jsx)(t.li,{children:`The header Grid holds the title and the metadata in one Cell.
Where an introductory Image sits beside the lead paragraph, each of the two takes its own Cell in that same Grid; without one, the lead stays in the header Cell.`}),`
`,(0,u.jsx)(t.li,{children:`Each section below the header sits in its own Grid, so the padding between those Grids sets them apart rather than a row gap.`}),`
`]}),`
`,(0,u.jsx)(t.h2,{id:`headings`,children:`Headings`}),`
`,(0,u.jsxs)(t.ul,{children:[`
`,(0,u.jsx)(t.li,{children:`Use a level 1 Heading for the title of the page.`}),`
`,(0,u.jsx)(t.li,{children:`Use level 2 Headings for the section titles, and level 3 for subsections.`}),`
`,(0,u.jsxs)(t.li,{children:[`Set the Accordion’s `,(0,u.jsx)(t.code,{children:`headingLevel`}),` one level below the section heading it follows.
In the first example that is level 3.`]}),`
`]}),`
`,(0,u.jsx)(t.h2,{id:`layout-and-spacing`,children:`Layout and spacing`}),`
`,(0,u.jsxs)(t.ul,{children:[`
`,(0,u.jsxs)(t.li,{children:[`The Grids use the `,(0,u.jsx)(t.a,{href:`/docs/pages-public-introduction--docs#how-to-size-the-grid-cells`,children:`recommended Cell sizes`}),`.
The Cells for the lead paragraph and the Image take the sizes for side-by-side blocks, which reach one column further than the header Cell above them.`]}),`
`,(0,u.jsx)(t.li,{children:`All body sections share a single Grid Cell, indented one column on wider screens for a comfortable reading measure.`}),`
`,(0,u.jsxs)(t.li,{children:[`Where the lead paragraph takes a Cell of its own, the Grid’s row gap sets the space between it and the title above.
That gap stays at the default of `,(0,u.jsx)(t.code,{children:`x-large`}),`: `,(0,u.jsx)(t.a,{href:`/docs/docs-designer-guide-vertical-space--docs`,children:`vertical space`}),` asks for medium here, which `,(0,u.jsx)(t.code,{children:`gapVertical`}),` does not offer.`]}),`
`,(0,u.jsxs)(t.li,{children:[`An `,(0,u.jsx)(t.a,{href:`/docs/components-media-image--docs`,children:`Image`}),` always reserves its box, so the layout does not shift while it loads.
Use `,(0,u.jsx)(t.code,{children:`aspectRatio`}),` to change the ratio it crops to; leaving it off keeps the default of 16:9.
Do not lazy-load an image in the first screenful, where it would only delay the largest image in the viewport.`]}),`
`,(0,u.jsxs)(t.li,{children:[`For the spacing between components, refer to `,(0,u.jsx)(t.a,{href:`/docs/docs-designer-guide-vertical-space--docs`,children:`vertical space`}),`.
An Accordion starts with a Heading, so it takes the spacing that its heading level calls for.`]}),`
`]}),`
`,(0,u.jsx)(t.h2,{id:`default`,children:`Default`}),`
`,(0,u.jsx)(t.p,{children:`The lead paragraph and an introductory Image sit side by side below the header, and stack on the narrow grid.`}),`
`,(0,u.jsxs)(t.p,{children:[`An `,(0,u.jsx)(t.a,{href:`/docs/components-containers-accordion--docs`,children:`Accordion`}),` groups detail questions that not every reader needs.
Keep the answers short enough to read without scrolling back to the question.`]}),`
`,(0,u.jsx)(t.p,{children:`Images within the body are as wide as the text column.`}),`
`,(0,u.jsx)(t.h2,{id:`with-table`,children:`With Table`}),`
`,(0,u.jsx)(t.p,{children:`Without an image beside it, the lead paragraph stays in the header cell with the title and metadata.`}),`
`,(0,u.jsxs)(t.p,{children:[`A `,(0,u.jsx)(t.a,{href:`/docs/components-containers-table--docs`,children:`Table`}),` presents reference data that would be unreadable as prose.
It sizes to its content and scrolls horizontally once it outgrows its Grid Cell, so give it a cell wider than the reading column.
Put the title of the table in its Caption rather than in a separate Heading above it, and mark the first cell of each row as a header cell with `,(0,u.jsx)(t.code,{children:`scope="row"`}),` so that screen readers announce it with every cell that follows.`]}),`
`,(0,u.jsxs)(t.p,{children:[`A `,(0,u.jsx)(t.a,{href:`/docs/components-media-figure--docs`,children:`Figure`}),` groups the table with the sources the data comes from.
Keep the table’s own Caption as its name, and use the Figure’s Caption for the sources: the two describe different things, and a table that loses its Caption loses its accessible name.
The Figure supplies the space between them, so the table needs no margin of its own.`]}),`
`,(0,u.jsxs)(t.p,{children:[`A Figure Caption takes any content, not only a sentence.
Here it holds a level 3 Heading and a `,(0,u.jsx)(t.a,{href:`/docs/components-navigation-link-list--docs`,children:`Link List`}),`, which keeps the sources scannable and lets each one be its own link.
Note that the whole caption becomes the accessible name of the Figure, so keep it short.`]})]})}function l(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,u.jsx)(t,{...e,children:(0,u.jsx)(c,{...e})}):c(e)}var u;e((()=>{u=r(),a(),t(),o()}))();export{l as default};