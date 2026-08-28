import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,h as n,p as r,u as i}from"./blocks-msKSRvUz.js";import{t as a}from"./jsx-runtime-ATHzeHXA.js";import{i as o,r as s}from"./react-Dyi61YEg.js";import{n as c,t as l}from"./PageAnatomy-CNl_JtUe.js";import{n as u,t as d}from"./EventsOverviewPage.stories-PLfzTTWv.js";var f;function p(){return(p=e((()=>{f=[[{height:`line`,label:`Breadcrumb`}],[{height:`card`,label:`Page title and search`}],[{height:`panel`,label:`Calendar`},{height:`heading`,label:`District filter`},{height:`panel`,label:`Category filter`},{height:`line`,label:`Result count`},...Array.from({length:6},()=>({height:`card`,label:`Activity card`})),{height:`heading`,label:`Pagination`}]]})))()}function m(e){let n={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...o(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[`
`,`
`,`
`,`
`,(0,g.jsx)(i,{of:d}),`
`,(0,g.jsx)(r,{}),`
`,(0,g.jsx)(t,{of:d}),`
`,(0,g.jsx)(n.p,{children:`What sets this page apart is that people arrive with a date in mind, so it gives them a calendar and date facets as well as the usual subject filters.`}),`
`,(0,g.jsx)(n.h2,{id:`anatomy`,children:`Anatomy`}),`
`,(0,g.jsx)(n.p,{children:`This schematic shows the default sections for this page type and how the grids and vertical space work.`}),`
`,(0,g.jsx)(l,{labels:f,of:d}),`
`,(0,g.jsx)(n.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,g.jsx)(n.h3,{id:`when-to-use`,children:`When to use`}),`
`,(0,g.jsx)(n.p,{children:`Use this page for an index of dated activities that a visitor plans around: a city events calendar, a course programme, a schedule of public meetings.`}),`
`,(0,g.jsx)(n.h3,{id:`when-not-to-use`,children:`When not to use`}),`
`,(0,g.jsxs)(n.p,{children:[`Use a `,(0,g.jsx)(n.a,{href:`/docs/pages-public-news-overview-page--docs`,children:`News Overview Page`}),` instead when the items are not dated, or when the date is a publication date rather than something to plan around.
Use a `,(0,g.jsx)(n.a,{href:`/docs/pages-public-search-results-page--docs`,children:`Search Results Page`}),` where a result can be any kind of content.`]}),`
`,(0,g.jsx)(n.h2,{id:`variants`,children:`Variants`}),`
`,(0,g.jsx)(n.h3,{id:`default`,children:`Default`}),`
`,(0,g.jsx)(n.p,{children:`A single, scannable column of full-width rows, which suits comparing dates and locations across a set of activities.`}),`
`,(0,g.jsxs)(n.p,{children:[`A `,(0,g.jsx)(n.a,{href:`/docs/components-navigation-card--docs`,children:`Card`}),` that pairs an image with a Card Content lays out horizontally once its container is wide enough, which it is at every width where the filter column sits beside the results.
Its image measures 4 of the 9 columns the Card spans on the wide grid.`]}),`
`,(0,g.jsx)(n.p,{children:`The medium grid leaves the results 5 columns, which is not enough for a row.
Give each Card 4 of those 5 there and leave the last column empty: that is below the width at which a Card with an image goes horizontal, so the Cards turn into a single column of vertical ones and the image spans the full width of each.`}),`
`,(0,g.jsx)(n.h3,{id:`card-grid`,children:`Card grid`}),`
`,(0,g.jsx)(n.p,{children:`The same activities tiled three to a row, which suits browsing by image rather than comparing by date.`}),`
`,(0,g.jsx)(n.p,{children:`Give each Card 3 of the 9 columns the results span, so three tile to a row on the wide grid.
That is below the horizontal breakpoint, so every Card stays vertical, and because the Cells sit in the Subgrid the cards line up with the page columns even though the taller filter column shares the row.`}),`
`,(0,g.jsxs)(n.p,{children:[`Both layouts hold the same markup.
Only the `,(0,g.jsx)(n.code,{children:`span`}),` of the Cell around each Card differs, so nothing about the page changes for someone reading it in source order.`]}),`
`,(0,g.jsx)(n.h2,{id:`structure`,children:`Structure`}),`
`,(0,g.jsxs)(n.p,{children:[`The breadcrumb sits in its own Grid above `,(0,g.jsx)(n.code,{children:`main`}),`, as on every public page.
The Grid below it carries the Content Header, and the Grid below that carries the filter column and the results.`]}),`
`,(0,g.jsxs)(n.p,{children:[`Put the keyword search in the Content Header Cell, below the lead, as the other index pages do.
A `,(0,g.jsx)(n.a,{href:`/docs/components-forms-search-field--docs`,children:`Search Field`}),` renders its own form with `,(0,g.jsx)(n.code,{children:`role="search"`}),`, so it needs no form around it, and Prose spaces it without a margin of its own.`]}),`
`,(0,g.jsxs)(n.p,{children:[`Write the filter column first.
It then precedes the results in the reading and the tab order, which is the order someone filtering wants, and no `,(0,g.jsx)(n.code,{children:`start`}),` value has to move it back.
Give it `,(0,g.jsx)(n.code,{children:`as="aside"`}),` and name it with a Heading that `,(0,g.jsx)(n.code,{children:`aria-labelledby`}),` points at, so it is reachable as a landmark.`]}),`
`,(0,g.jsx)(n.p,{children:`Make that column a Subgrid too, with every control in a Cell of its own.
The row gap then sets the space between the controls, and each one lines up with the page columns rather than with the edge of a Cell that holds them all.`}),`
`,(0,g.jsxs)(n.p,{children:[`A form element cannot span the Cells of a Subgrid, so each control that submits takes a form of its own.
Where two facets have to submit together, either give them one Cell or point every control at one form with the `,(0,g.jsx)(n.code,{children:`form`}),` attribute.`]}),`
`,(0,g.jsx)(n.p,{children:`Order the column from broad to narrow: the calendar, then the facets.`}),`
`,(0,g.jsx)(n.p,{children:`Offer no sort control.
Activities have one order people want, which is the one they happen in, and a control offering the reverse of it only invites a listing nobody asked for.
This is where an events overview parts company with the other index pages, which sort by relevance or by publication date and need to say so.`}),`
`,(0,g.jsxs)(n.p,{children:[`Offer a `,(0,g.jsx)(n.a,{href:`/docs/components-navigation-calendar--docs`,children:`Calendar`}),` where the dates matter more than the subject.
It is date navigation rather than a date input: each day links to the activities on it, which suits someone asking what is on next Saturday.
Pass it a `,(0,g.jsx)(n.code,{children:`defaultMonth`}),`, or it opens on the current month and drifts away from the listing it belongs to.`]}),`
`,(0,g.jsxs)(n.p,{children:[`Put the results in a `,(0,g.jsx)(n.a,{href:`/docs/components-layout-grid--docs`,children:`Grid Subgrid`}),` rather than a Cell.
A Subgrid hands the columns it spans to its own children, so the Cells inside it sit on the columns of the page.
Without it the results have no columns of their own, and nothing in them can line up with the rest of the page.`]}),`
`,(0,g.jsxs)(n.p,{children:[`The activities are a list, so give them a Subgrid of their own inside that one: a `,(0,g.jsx)(n.code,{children:`ul`}),` with every Cell in it an `,(0,g.jsx)(n.code,{children:`li`}),`.
The sentence announcing the total and the Pagination are not part of that list, so they stay outside it.`]}),`
`,(0,g.jsxs)(n.p,{children:[`Announce the number of results in a `,(0,g.jsx)(n.code,{children:`role="status"`}),` paragraph.`]}),`
`,(0,g.jsxs)(n.p,{children:[`Close the list with `,(0,g.jsx)(n.a,{href:`/docs/components-navigation-pagination--docs`,children:`Pagination`}),` in a Cell as wide as the results above it, rather than as wide as the region.
The medium grid is where the two part company: the results leave a column spare there, and Pagination spanning the whole region would reach past the Cards it belongs to.`]}),`
`,(0,g.jsxs)(n.p,{children:[`Give each activity the facets it was filtered by at the top of the Card.
A `,(0,g.jsx)(n.a,{href:`/docs/components-text-metadata--docs`,children:`Metadata`}),` in the Card Heading Group carries those values: here the category and the district, which are the two facets the filter column offers.`]}),`
`,(0,g.jsx)(n.p,{children:`Set the two apart with a Metadata Separator rather than with punctuation of your own.
They come from different filter fields, so they are two kinds of metadata rather than two values of one kind, and that is what a comma between them would say instead.
Keep the comma for the values within one kind, as in ‘Kunst en cultuur, Sport en spel’.`}),`
`,(0,g.jsx)(n.p,{children:`Close the Card with when and where it happens, below the description, as a second Metadata: the day, the time, and the venue.
Those three answer a different question from the facets above — not what kind of activity this is, but whether the visitor can be there — so they read better as a footnote to the description than beside the heading.`}),`
`,(0,g.jsx)(n.p,{children:`Those are three kinds again, so two Separators divide them.
Leave the Separator out where an activity has no time, so two never meet.`}),`
`,(0,g.jsx)(n.p,{children:`List the categories alphabetically.
A visitor scanning ten checkboxes for one word finds it faster than in any order the publishing system happens to hold them in.
A catch-all such as ‘Overig’ is the exception: it goes last whatever its initial, because it is the option someone reaches for after the named ones have failed them.`}),`
`,(0,g.jsx)(n.p,{children:`The page title is the only Heading 1.
The filter column and the list of results each take a Heading 2, and the title of every activity is a Heading 3.
Neither Heading 2 has a place in the design, so both are visually hidden.`}),`
`,(0,g.jsx)(n.h2,{id:`layout-and-spacing`,children:`Layout and spacing`}),`
`,(0,g.jsx)(n.p,{children:`The filter column takes 3 of the 12 columns on the wide grid and 3 of the 8 on the medium grid.
The results take the remaining 9 and 5.
On the narrow grid neither fits beside the other, so both span the full 4 columns and the filter column lands above the results.`}),`
`,(0,g.jsx)(n.p,{children:`Give the Cell that announces the total the width of the results below it, capped at 7 of the 12 columns.
The cap is the line length the body of a content page takes, and a sentence naming several filters is long enough to reach it.
On the medium grid the results stop short of the region themselves, at 4 of the 5 columns, so the sentence stops there too.`}),`
`,(0,g.jsxs)(n.p,{children:[`Two adjacent Grids add their touching paddings together, so the Grid holding the filter column and the results leaves its `,(0,g.jsx)(n.code,{children:`paddingTop`}),` off.`]}),`
`,(0,g.jsx)(n.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,g.jsxs)(n.p,{children:[`The two hidden Heading 2s are worth having: they name the two halves of the page in the heading outline, which is how a screen reader user skips the filters and reaches the results.
The heading of the filter column is hidden visually but not from assistive technology, so it still names the landmark that `,(0,g.jsx)(n.code,{children:`aria-labelledby`}),` points at.`]}),`
`,(0,g.jsxs)(n.p,{children:[`The number of results is announced in a `,(0,g.jsx)(n.code,{children:`role="status"`}),` paragraph.
A visitor using a screen reader otherwise has no way to tell that ticking a checkbox changed anything.`]}),`
`,(0,g.jsx)(n.p,{children:`The activities are a list in the markup as well as on screen.
A screen reader then announces how many there are and which one it is on, and can skip past them all at once.`}),`
`,(0,g.jsx)(n.p,{children:`The Calendar is a set of links rather than a date input, so it is reached and operated as navigation.
Give it an accessible name that says where its days lead: the month alone does not.`}),`
`,(0,g.jsxs)(n.p,{children:[`The date of an activity carries a `,(0,g.jsx)(n.code,{children:`time`}),` element, whose `,(0,g.jsx)(n.code,{children:`dateTime`}),` repeats the visible date in the format software parses.
That is what lets a browser or an extension offer to put the activity in a calendar.`]}),`
`,(0,g.jsx)(n.h2,{id:`see-also`,children:`See also`}),`
`,(0,g.jsxs)(n.ul,{children:[`
`,(0,g.jsxs)(n.li,{children:[(0,g.jsx)(n.a,{href:`/docs/pages-public-news-overview-page--docs`,children:`News Overview Page`}),` – the same layout for items that are not dated.`]}),`
`,(0,g.jsxs)(n.li,{children:[(0,g.jsx)(n.a,{href:`/docs/pages-public-search-results-page--docs`,children:`Search Results Page`}),` – the same layout for results of any type.`]}),`
`,(0,g.jsxs)(n.li,{children:[(0,g.jsx)(n.a,{href:`/docs/components-navigation-calendar--docs`,children:`Calendar`}),` – the date navigation this page opens its filters with.`]}),`
`,(0,g.jsxs)(n.li,{children:[(0,g.jsx)(n.a,{href:`/docs/components-navigation-card--docs`,children:`Card`}),` – the activity, and when it turns horizontal.`]}),`
`,(0,g.jsxs)(n.li,{children:[(0,g.jsx)(n.a,{href:`/docs/components-navigation-pagination--docs`,children:`Pagination`}),` – closes the list.`]}),`
`]})]})}function h(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,g.jsx)(t,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;function _(){return(_=e((()=>{g=a(),s(),n(),c(),p(),u()})))()}_();export{h as default};