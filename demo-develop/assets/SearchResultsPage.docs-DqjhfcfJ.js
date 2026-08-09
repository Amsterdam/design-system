import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,h as n,p as r,u as i}from"./blocks-CNG2gRRe.js";import{t as a}from"./jsx-runtime-ATHzeHXA.js";import{i as o,r as s}from"./react-Dyi61YEg.js";import{n as c,t as l}from"./PageAnatomy-DNEUCzkp.js";import{n as u,t as d}from"./SearchResultsPage.stories-C9GlFSn1.js";var f;function p(){return(p=e((()=>{f=[[{height:`line`,label:`Breadcrumb`}],[{height:`card`,label:`Page title and search`}],[{height:`panel`,label:`Filters`},{height:`line`,label:`Result count`},...Array.from({length:6},()=>({height:`card`,label:`Search result`})),{height:`heading`,label:`Pagination`}]]})))()}function m(e){let n={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...o(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[`
`,`
`,`
`,`
`,(0,g.jsx)(i,{of:d}),`
`,(0,g.jsx)(r,{}),`
`,(0,g.jsx)(t,{of:d}),`
`,(0,g.jsx)(n.p,{children:`A result can come from anywhere on the site, so it has no image and belongs to no single content type.`}),`
`,(0,g.jsx)(n.h2,{id:`anatomy`,children:`Anatomy`}),`
`,(0,g.jsx)(n.p,{children:`This schematic shows the default sections for this page type and how the grids and vertical space work.`}),`
`,(0,g.jsx)(l,{labels:f,of:d}),`
`,(0,g.jsx)(n.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,g.jsx)(n.h3,{id:`when-to-use`,children:`When to use`}),`
`,(0,g.jsx)(n.p,{children:`Use this page for the results of a site-wide search, where a result can be any kind of content.`}),`
`,(0,g.jsxs)(n.p,{children:[`The results may come with the page or be fetched after it has rendered.
Where they arrive later, show `,(0,g.jsx)(n.a,{href:`/docs/components-feedback-skeleton--docs`,children:`Skeletons`}),` in their place while they load, as the `,(0,g.jsx)(n.a,{href:`/docs/pages-public-loading-page--docs`,children:`Loading Page`}),` does.`]}),`
`,(0,g.jsx)(n.h3,{id:`when-not-to-use`,children:`When not to use`}),`
`,(0,g.jsxs)(n.p,{children:[`Use a `,(0,g.jsx)(n.a,{href:`/docs/pages-public-news-overview-page--docs`,children:`News Overview Page`}),` for an index of one content type, where every item has an image.`]}),`
`,(0,g.jsx)(n.h2,{id:`structure`,children:`Structure`}),`
`,(0,g.jsxs)(n.p,{children:[`The breadcrumb sits in its own Grid above `,(0,g.jsx)(n.code,{children:`main`}),`, and the Grid below it carries the Content Header, whose Cell holds the search field in the place of a lead paragraph.`]}),`
`,(0,g.jsx)(n.p,{children:`Repeat the search field on the results page and fill it with the term that was searched for.
Refining a search is the most common thing to do next, and a visitor who has to go back to find the field will type the whole query again.`}),`
`,(0,g.jsxs)(n.p,{children:[(0,g.jsx)(n.a,{href:`/docs/components-forms-search-field--docs`,children:`Search Field`}),` renders its own `,(0,g.jsx)(n.code,{children:`form`}),` with `,(0,g.jsx)(n.code,{children:`role="search"`}),`, so it needs no form around it.
Keep it out of the filter form as well: nesting one `,(0,g.jsx)(n.code,{children:`form`}),` inside another is invalid HTML, and the two submit different things.`]}),`
`,(0,g.jsxs)(n.p,{children:[`Put the results in a `,(0,g.jsx)(n.a,{href:`/docs/components-layout-grid--docs`,children:`Grid Subgrid`}),` and announce the total in a `,(0,g.jsx)(n.code,{children:`role="status"`}),` paragraph, as on any index page.
Name the term that was searched for in that sentence, so it is clear what produced the list.
The Cards take a `,(0,g.jsx)(n.code,{children:`ul`}),` Subgrid of their own inside that one, as on the `,(0,g.jsx)(n.a,{href:`/docs/pages-public-news-overview-page--docs`,children:`News Overview Page`}),`.`]}),`
`,(0,g.jsxs)(n.p,{children:[`Highlight the term with `,(0,g.jsx)(n.a,{href:`/docs/components-text-mark--docs`,children:`Mark`}),`, in the title of a result as well as in its teaser, so a visitor sees at a glance why a result is in the list.
Match it whatever its casing, and keep the casing of the text.
A result can match on text that neither the title nor the teaser shows, so not every result has something to highlight.`]}),`
`,(0,g.jsx)(n.p,{children:`The page title is the only Heading 1, and it names the activity rather than the query.
The filter column and the list of results each take a Heading 2, and the title of every result is a Heading 3.
Neither Heading 2 has a place in the design, so both are visually hidden, as on the News Overview Page.`}),`
`,(0,g.jsx)(n.h2,{id:`layout-and-spacing`,children:`Layout and spacing`}),`
`,(0,g.jsx)(n.p,{children:`The filter column takes 3 of the 12 columns on the wide grid and 3 of the 8 on the medium grid, and the results take the remaining 9 and 5.
On the narrow grid both span the full 4 columns and the filter column lands above the results.`}),`
`,(0,g.jsxs)(n.p,{children:[`A search result has no image, so its `,(0,g.jsx)(n.a,{href:`/docs/components-navigation-card--docs`,children:`Card`}),` needs no Card Content and stays vertical at every width.
Give its Cell 7 of the 12 columns on the wide grid: that is the line length the body of a content page takes, and running text is no easier to read here than there.
The medium grid leaves the results 5 columns, which is under that maximum already, so a result takes the full width of the region there.
The News Overview Page gives a Card 4 of those 5 to keep it below the width at which its image turns it horizontal, and a Card without an image needs no such room.`]}),`
`,(0,g.jsx)(n.p,{children:`Give the Pagination the width of the results above it rather than that of the region, so the column has one edge.
Leave the row gap of the Subgrid at the vertical gap of the Grid.`}),`
`,(0,g.jsx)(n.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,g.jsxs)(n.p,{children:[`The heading of the filter column is hidden visually but not from assistive technology, so it still names the landmark that `,(0,g.jsx)(n.code,{children:`aria-labelledby`}),` points at.`]}),`
`,(0,g.jsxs)(n.p,{children:[`The total is announced in a `,(0,g.jsx)(n.code,{children:`role="status"`}),` paragraph that names the term searched for, so it is clear what produced the list.
Leave the term unhighlighted there: a highlight adds nothing to a sentence that is read out in full anyway.`]}),`
`,(0,g.jsx)(n.p,{children:`A result title is the title of the page it links to, not shortened to fit.
Highlighting the term inside it leaves the name the link is announced with unchanged.`}),`
`,(0,g.jsx)(n.h2,{id:`see-also`,children:`See also`}),`
`,(0,g.jsxs)(n.ul,{children:[`
`,(0,g.jsxs)(n.li,{children:[(0,g.jsx)(n.a,{href:`/docs/pages-public-news-overview-page--docs`,children:`News Overview Page`}),` – the same layout for one content type.`]}),`
`,(0,g.jsxs)(n.li,{children:[(0,g.jsx)(n.a,{href:`/docs/pages-public-loading-page--docs`,children:`Loading Page`}),` – the loading state to show while results are on their way.`]}),`
`,(0,g.jsxs)(n.li,{children:[(0,g.jsx)(n.a,{href:`/docs/components-forms-search-field--docs`,children:`Search Field`}),` – the field this page repeats.`]}),`
`,(0,g.jsxs)(n.li,{children:[(0,g.jsx)(n.a,{href:`/docs/components-text-mark--docs`,children:`Mark`}),` – the highlight on a matched word, and the rules it follows.`]}),`
`,(0,g.jsxs)(n.li,{children:[(0,g.jsx)(n.a,{href:`/docs/components-layout-grid--docs#semantic-list-of-cards`,children:`Semantic list of cards`}),` – the `,(0,g.jsx)(n.code,{children:`ul`}),` Subgrid the results sit in.`]}),`
`]})]})}function h(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,g.jsx)(t,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;function _(){return(_=e((()=>{g=a(),s(),n(),c(),p(),u()})))()}_();export{h as default};