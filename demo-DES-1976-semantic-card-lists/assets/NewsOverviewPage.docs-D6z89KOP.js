import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,h as n,p as r,u as i}from"./blocks-zzQRermb.js";import{t as a}from"./jsx-runtime-ATHzeHXA.js";import{i as o,r as s}from"./react-Dyi61YEg.js";import{n as c,t as l}from"./anatomyLabels-dZxdU6T7.js";import{n as u,t as d}from"./NewsOverviewPage.stories-o1Zm2XL6.js";import{n as f,t as p}from"./PageAnatomy-BHCYuUxW.js";function m(e){let n={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...o(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[`
`,`
`,`
`,`
`,(0,g.jsx)(i,{of:d}),`
`,(0,g.jsx)(r,{}),`
`,(0,g.jsx)(t,{of:d}),`
`,(0,g.jsx)(n.p,{children:`The page is a filter column beside a list of results, and the same layout serves all of those content types.`}),`
`,(0,g.jsx)(n.h2,{id:`anatomy`,children:`Anatomy`}),`
`,(0,g.jsx)(n.p,{children:`This schematic shows the default sections for this page type and how the grids and vertical space work.`}),`
`,(0,g.jsx)(p,{labels:l,of:d}),`
`,(0,g.jsx)(n.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,g.jsx)(n.h3,{id:`when-to-use`,children:`When to use`}),`
`,(0,g.jsx)(n.p,{children:`Use this page for an index of one content type that a visitor narrows down with filters.`}),`
`,(0,g.jsx)(n.h3,{id:`when-not-to-use`,children:`When not to use`}),`
`,(0,g.jsxs)(n.p,{children:[`Use a `,(0,g.jsx)(n.a,{href:`/docs/pages-public-home-page--docs`,children:`Home Page`}),` section instead when a handful of items is enough and nobody needs to filter them.
Use a `,(0,g.jsx)(n.a,{href:`/docs/pages-public-search-results-page--docs`,children:`Search Results Page`}),` where a result can be any kind of content.`]}),`
`,(0,g.jsx)(n.h2,{id:`structure`,children:`Structure`}),`
`,(0,g.jsxs)(n.p,{children:[`The breadcrumb sits in its own Grid above `,(0,g.jsx)(n.code,{children:`main`}),`, as on every public page.
The Grid below it carries the Content Header, whose Cell holds the search field in the place of a lead paragraph, and the Grid below that carries the filter column and the results.`]}),`
`,(0,g.jsxs)(n.p,{children:[`Write the filter column first.
It then precedes the results in the reading and the tab order, which is the order someone filtering wants, and no `,(0,g.jsx)(n.code,{children:`start`}),` value has to move it back.
Give it `,(0,g.jsx)(n.code,{children:`as="aside"`}),` and name it with a Heading that `,(0,g.jsx)(n.code,{children:`aria-labelledby`}),` points at, so it is reachable as a landmark.`]}),`
`,(0,g.jsxs)(n.p,{children:[`Put the results in a `,(0,g.jsx)(n.a,{href:`/docs/components-layout-grid--docs`,children:`Grid Subgrid`}),` rather than a Cell.
A Subgrid hands the columns it spans to its own children, so the Cells inside it sit on the columns of the page.
Without it the results have no columns of their own, and nothing in them can line up with the rest of the page.`]}),`
`,(0,g.jsxs)(n.p,{children:[`The articles are a list, so give them a Subgrid of their own inside that one: a `,(0,g.jsx)(n.code,{children:`ul`}),` with every Cell in it an `,(0,g.jsx)(n.code,{children:`li`}),`.
The sentence announcing the total and the Pagination are not part of that list, so they stay outside it.`]}),`
`,(0,g.jsxs)(n.p,{children:[`Announce the number of results in a `,(0,g.jsx)(n.code,{children:`role="status"`}),` paragraph, and name the filters that produced it.
A visitor using a screen reader otherwise has no way to tell that ticking a checkbox changed anything.`]}),`
`,(0,g.jsxs)(n.p,{children:[`Compose that sentence with `,(0,g.jsx)(n.code,{children:`Intl.ListFormat`}),` rather than joining the values with a hard-coded `,(0,g.jsx)(n.code,{children:`en`}),`.
It applies the punctuation and the conjunction of the language itself, so the sentence survives translation: Dutch writes ‘a, b en c’ where English writes ‘a, b, and c’.`]}),`
`,(0,g.jsxs)(n.p,{children:[`Close the list with `,(0,g.jsx)(n.a,{href:`/docs/components-navigation-pagination--docs`,children:`Pagination`}),` in a Cell spanning all the columns of the Subgrid.
Leave it out when everything fits on one page.`]}),`
`,(0,g.jsx)(n.p,{children:`The page title is the only Heading 1.
The filter column and the list of results each take a Heading 2, and the title of every result is a Heading 3.
Neither Heading 2 has a place in the design, so both are visually hidden.`}),`
`,(0,g.jsx)(n.h2,{id:`layout-and-spacing`,children:`Layout and spacing`}),`
`,(0,g.jsx)(n.p,{children:`The filter column takes 3 of the 12 columns on the wide grid and 3 of the 8 on the medium grid.
The results take the remaining 9 and 5.
On the narrow grid neither fits beside the other, so both span the full 4 columns and the filter column lands above the results.`}),`
`,(0,g.jsx)(n.p,{children:`The sentence that announces the total is running text, so give its Cell 7 of the 12 columns rather than the 9 the results span.
That is the line length the body of a content page takes, and a sentence naming several filters is long enough to reach it.
A Card spans all 9: its image takes 4 of them, so the text beside it stays well inside that maximum.`}),`
`,(0,g.jsxs)(n.p,{children:[`A `,(0,g.jsx)(n.a,{href:`/docs/components-navigation-card--docs`,children:`Card`}),` that pairs an image with a Card Content lays out horizontally once its container is wide enough, which it is at every width where the filter column sits beside the results.
Its image measures 4 of the 9 columns the Card spans on the wide grid.
Give a vertical Card beside it a span of 4 and its image is exactly that width too, so the two line up rather than disagreeing about where the images start and end.`]}),`
`,(0,g.jsx)(n.p,{children:`The medium grid leaves the results 5 columns, which is not enough for a row.
Give each Card 4 of those 5 there and leave the last column empty: that is below the width at which a Card with an image goes horizontal, so the Cards turn into a single column of vertical ones and the image spans the full width of each.`}),`
`,(0,g.jsxs)(n.p,{children:[`Two adjacent Grids add their touching paddings together, so the Grid holding the filter column and the results leaves its `,(0,g.jsx)(n.code,{children:`paddingTop`}),` off.`]}),`
`,(0,g.jsx)(n.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,g.jsxs)(n.p,{children:[`The two hidden Heading 2s are worth having: they name the two halves of the page in the heading outline, which is how a screen reader user skips the filters and reaches the results.
The heading of the filter column is hidden visually but not from assistive technology, so it still names the landmark that `,(0,g.jsx)(n.code,{children:`aria-labelledby`}),` points at.`]}),`
`,(0,g.jsxs)(n.p,{children:[`The number of results is announced in a `,(0,g.jsx)(n.code,{children:`role="status"`}),` paragraph that names the filters which produced it.
A visitor using a screen reader otherwise has no way to tell that ticking a checkbox changed anything.`]}),`
`,(0,g.jsx)(n.p,{children:`The articles are a list in the markup as well as on screen.
A screen reader then announces how many there are and which one it is on, and can skip past them all at once.`}),`
`,(0,g.jsx)(n.h2,{id:`see-also`,children:`See also`}),`
`,(0,g.jsxs)(n.ul,{children:[`
`,(0,g.jsxs)(n.li,{children:[(0,g.jsx)(n.a,{href:`/docs/pages-public-search-results-page--docs`,children:`Search Results Page`}),` – the same layout for results of any type.`]}),`
`,(0,g.jsxs)(n.li,{children:[(0,g.jsx)(n.a,{href:`/docs/pages-public-loading-page--docs`,children:`Loading Page`}),` – this layout while its results are on their way.`]}),`
`,(0,g.jsxs)(n.li,{children:[(0,g.jsx)(n.a,{href:`/docs/components-navigation-card--docs`,children:`Card`}),` – the result, and when it turns horizontal.`]}),`
`,(0,g.jsxs)(n.li,{children:[(0,g.jsx)(n.a,{href:`/docs/components-navigation-pagination--docs`,children:`Pagination`}),` – closes the list.`]}),`
`]})]})}function h(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,g.jsx)(t,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;function _(){return(_=e((()=>{g=a(),s(),n(),f(),c(),u()})))()}_();export{h as default};