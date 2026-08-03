import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{h as t,u as n}from"./blocks-zzQRermb.js";import{t as r}from"./jsx-runtime-ATHzeHXA.js";import{i,r as a}from"./react-Dyi61YEg.js";import{n as o,t as s}from"./anatomyLabels-dZxdU6T7.js";import{n as c,t as l}from"./NewsOverviewPage.stories-Bn5BgQyl.js";import{n as u,t as d}from"./PageAnatomy-Ck-8Q1MY.js";function f(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,...i(),...e.components};return(0,m.jsxs)(m.Fragment,{children:[`
`,`
`,`
`,`
`,(0,m.jsx)(n,{of:l}),`
`,(0,m.jsx)(t.h1,{id:`news-overview-page`,children:`News overview page`}),`
`,(0,m.jsxs)(t.p,{children:[`An index of content items that a visitor narrows down: news, blogs, vacancies, activities, or search results.
The page is a filter column beside a list of results, and the same layout serves all of those content types.
Use a `,(0,m.jsx)(t.a,{href:`/docs/pages-public-home-page--docs`,children:`Home Page`}),` section instead when a handful of items is enough and nobody needs to filter them.`]}),`
`,(0,m.jsx)(t.h2,{id:`anatomy`,children:`Anatomy`}),`
`,(0,m.jsx)(t.p,{children:`This schematic shows the default sections for this page type and how the grids and vertical space work.`}),`
`,(0,m.jsx)(d,{labels:s,of:l}),`
`,(0,m.jsx)(t.h2,{id:`structure`,children:`Structure`}),`
`,(0,m.jsxs)(t.p,{children:[`The breadcrumb sits in its own Grid above `,(0,m.jsx)(t.code,{children:`main`}),`, as on every public page.
The Grid below it carries the Content Header, whose Cell holds the search field in the place of a lead paragraph, and the Grid below that carries the filter column and the results.`]}),`
`,(0,m.jsxs)(t.p,{children:[`Write the filter column first.
It then precedes the results in the reading and the tab order, which is the order someone filtering wants, and no `,(0,m.jsx)(t.code,{children:`start`}),` value has to move it back.
Give it `,(0,m.jsx)(t.code,{children:`as="aside"`}),` and name it with a Heading that `,(0,m.jsx)(t.code,{children:`aria-labelledby`}),` points at, so it is reachable as a landmark.`]}),`
`,(0,m.jsxs)(t.p,{children:[`Put the results in a `,(0,m.jsx)(t.a,{href:`/docs/components-layout-grid--docs`,children:`Grid Subgrid`}),` rather than a Cell.
A Subgrid hands the columns it spans to its own children, so the Cells inside it sit on the columns of the page.
Without it the results have no columns of their own, and nothing in them can line up with the rest of the page.`]}),`
`,(0,m.jsxs)(t.p,{children:[`Announce the number of results in a `,(0,m.jsx)(t.code,{children:`role="status"`}),` paragraph, and name the filters that produced it.
A visitor using a screen reader otherwise has no way to tell that ticking a checkbox changed anything.`]}),`
`,(0,m.jsxs)(t.p,{children:[`Compose that sentence with `,(0,m.jsx)(t.code,{children:`Intl.ListFormat`}),` rather than joining the values with a hard-coded `,(0,m.jsx)(t.code,{children:`en`}),`.
It applies the punctuation and the conjunction of the language itself, so the sentence survives translation: Dutch writes ‘a, b en c’ where English writes ‘a, b, and c’.`]}),`
`,(0,m.jsxs)(t.p,{children:[`Close the list with `,(0,m.jsx)(t.a,{href:`/docs/components-navigation-pagination--docs`,children:`Pagination`}),` in a Cell spanning all the columns of the Subgrid.
Leave it out when everything fits on one page.`]}),`
`,(0,m.jsx)(t.h2,{id:`headings`,children:`Headings`}),`
`,(0,m.jsx)(t.p,{children:`The page title is the only Heading 1.
The filter column and the list of results each take a Heading 2, and the title of every result is a Heading 3.`}),`
`,(0,m.jsxs)(t.p,{children:[`Neither Heading 2 has a place in the design, so both are visually hidden.
They are still worth having: they name the two halves of the page in the heading outline, which is how a screen reader user skips the filters and reaches the results.
The heading of the filter column is hidden visually but not from assistive technology, so it still names the landmark that `,(0,m.jsx)(t.code,{children:`aria-labelledby`}),` points at.`]}),`
`,(0,m.jsx)(t.h2,{id:`layout-and-spacing`,children:`Layout and spacing`}),`
`,(0,m.jsx)(t.p,{children:`The filter column takes 3 of the 12 columns on the wide grid and 3 of the 8 on the medium grid.
The results take the remaining 9 and 5.
On the narrow grid neither fits beside the other, so both span the full 4 columns and the filter column lands above the results.`}),`
`,(0,m.jsx)(t.p,{children:`The sentence that announces the total is running text, so give its Cell 7 of the 12 columns rather than the 9 the results span.
That is the line length the body of a content page takes, and a sentence naming several filters is long enough to reach it.
A Card spans all 9: its image takes 4 of them, so the text beside it stays well inside that maximum.`}),`
`,(0,m.jsxs)(t.p,{children:[`A `,(0,m.jsx)(t.a,{href:`/docs/components-navigation-card--docs`,children:`Card`}),` that pairs an image with a Card Content lays out horizontally once its container is wide enough, which it is at every width where the filter column sits beside the results.
Its image measures 4 of the 9 columns the Card spans on the wide grid.
Give a vertical Card beside it a span of 4 and its image is exactly that width too, so the two line up rather than disagreeing about where the images start and end.`]}),`
`,(0,m.jsx)(t.p,{children:`The medium grid leaves the results 5 columns, which is not enough for a row.
Give each Card 4 of those 5 there and leave the last column empty: that is below the width at which a Card with an image goes horizontal, so the Cards turn into a single column of vertical ones and the image spans the full width of each.`}),`
`,(0,m.jsxs)(t.p,{children:[`Two adjacent Grids add their touching paddings together, so the Grid holding the filter column and the results leaves its `,(0,m.jsx)(t.code,{children:`paddingTop`}),` off.`]})]})}function p(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,m.jsx)(t,{...e,children:(0,m.jsx)(f,{...e})}):f(e)}var m;function h(){return(h=e((()=>{m=r(),a(),t(),u(),o(),c()})))()}h();export{p as default};