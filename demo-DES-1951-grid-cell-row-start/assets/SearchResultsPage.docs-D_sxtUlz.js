import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{h as t,u as n}from"./blocks-zzQRermb.js";import{t as r}from"./jsx-runtime-ATHzeHXA.js";import{i,r as a}from"./react-Dyi61YEg.js";import{n as o,t as s}from"./PageAnatomy-BSjJcxiK.js";import{n as c,t as l}from"./SearchResultsPage.stories-BgK7AgPt.js";var u;function d(){return(d=e((()=>{u=[[{height:`line`,label:`Breadcrumb`}],[{height:`card`,label:`Page title and search`}],[{height:`panel`,label:`Filters`},{height:`line`,label:`Result count`},...Array.from({length:6},()=>({height:`card`,label:`Search result`})),{height:`heading`,label:`Pagination`}]]})))()}function f(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,...i(),...e.components};return(0,m.jsxs)(m.Fragment,{children:[`
`,`
`,`
`,`
`,(0,m.jsx)(n,{of:l}),`
`,(0,m.jsx)(t.h1,{id:`search-results-page`,children:`Search results page`}),`
`,(0,m.jsxs)(t.p,{children:[`What a visitor lands on after searching the site.
It shares its layout with the `,(0,m.jsx)(t.a,{href:`/docs/pages-public-news-overview-page--docs`,children:`News Overview Page`}),`: a filter column beside a list of results.
The difference is the content, which comes from anywhere on the site and therefore has no image and no single content type.`]}),`
`,(0,m.jsx)(t.h2,{id:`anatomy`,children:`Anatomy`}),`
`,(0,m.jsx)(t.p,{children:`This schematic shows the default sections for this page type and how the grids and vertical space work.`}),`
`,(0,m.jsx)(s,{labels:u,of:l}),`
`,(0,m.jsx)(t.h2,{id:`structure`,children:`Structure`}),`
`,(0,m.jsxs)(t.p,{children:[`The breadcrumb sits in its own Grid above `,(0,m.jsx)(t.code,{children:`main`}),`, and the Grid below it carries the Content Header, whose Cell holds the search field in the place of a lead paragraph.`]}),`
`,(0,m.jsx)(t.p,{children:`Repeat the search field on the results page and fill it with the term that was searched for.
Refining a search is the most common thing to do next, and a visitor who has to go back to find the field will type the whole query again.`}),`
`,(0,m.jsxs)(t.p,{children:[(0,m.jsx)(t.a,{href:`/docs/components-forms-search-field--docs`,children:`Search Field`}),` renders its own `,(0,m.jsx)(t.code,{children:`form`}),` with `,(0,m.jsx)(t.code,{children:`role="search"`}),`, so it needs no form around it.
Keep it out of the filter form as well: nesting one `,(0,m.jsx)(t.code,{children:`form`}),` inside another is invalid HTML, and the two submit different things.`]}),`
`,(0,m.jsxs)(t.p,{children:[`Put the results in a `,(0,m.jsx)(t.a,{href:`/docs/components-layout-grid--docs`,children:`Grid Subgrid`}),` and announce the total in a `,(0,m.jsx)(t.code,{children:`role="status"`}),` paragraph, as on any index page.
Name the term that was searched for in that sentence, so it is clear what produced the list.`]}),`
`,(0,m.jsx)(t.h2,{id:`headings`,children:`Headings`}),`
`,(0,m.jsxs)(t.p,{children:[`The page title is the only Heading 1, and it names the activity rather than the query.
The filter column and the list of results each take a Heading 2, and the title of every result is a Heading 3.
Neither Heading 2 has a place in the design, so both are visually hidden, as on the News Overview Page.
The heading of the filter column is hidden visually but not from assistive technology, so it still names the landmark that `,(0,m.jsx)(t.code,{children:`aria-labelledby`}),` points at.`]}),`
`,(0,m.jsx)(t.p,{children:`A result title is the title of the page it links to.
Do not shorten it to fit, and do not mark the matched words inside it: a highlight inside a link makes the link harder to read out.`}),`
`,(0,m.jsx)(t.h2,{id:`layout-and-spacing`,children:`Layout and spacing`}),`
`,(0,m.jsx)(t.p,{children:`The filter column takes 3 of the 12 columns on the wide grid and 3 of the 8 on the medium grid, and the results take the remaining 9 and 5.
On the narrow grid both span the full 4 columns and the filter column lands above the results.`}),`
`,(0,m.jsxs)(t.p,{children:[`A search result has no image, so its `,(0,m.jsx)(t.a,{href:`/docs/components-navigation-card--docs`,children:`Card`}),` needs no Card Content and stays vertical at every width.
Give its Cell 7 of the 12 columns on the wide grid: that is the line length the body of a content page takes, and running text is no easier to read here than there.
The medium grid leaves the results 5 columns, which is under that maximum already, so a result takes the full width of the region there.
The News Overview Page gives a Card 4 of those 5 to keep it below the width at which its image turns it horizontal, and a Card without an image needs no such room.`]}),`
`,(0,m.jsx)(t.p,{children:`Give the Pagination the width of the results above it rather than that of the region, so the column has one edge.
Leave the row gap of the Subgrid at the vertical gap of the Grid.`}),`
`,(0,m.jsx)(t.h2,{id:`default`,children:`Default`}),`
`,(0,m.jsx)(t.p,{children:`A page of results with the term still in the search field.`})]})}function p(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,m.jsx)(t,{...e,children:(0,m.jsx)(f,{...e})}):f(e)}var m;function h(){return(h=e((()=>{m=r(),a(),t(),o(),d(),c()})))()}h();export{p as default};