import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{h as t,u as n}from"./blocks-zzQRermb.js";import{t as r}from"./jsx-runtime-ATHzeHXA.js";import{i,r as a}from"./react-Dyi61YEg.js";import{n as o,t as s}from"./PageAnatomy-B7cYumXv.js";import{n as c,t as l}from"./ProfilePage.stories-ClcNKrov.js";var u;function d(){return(d=e((()=>{u=[[{height:`line`,label:`Breadcrumb`}],[{height:`title`,label:`Page title`},{height:{narrow:`body`,medium:`panel`,wide:`panel`},label:`Lead and duties`},{height:`body`,label:`Portrait`}],[{height:`card`,label:`Link section`},{height:`card`,label:`Link section`}],[{height:`card`,label:`Contact`},{height:`card`,label:`Social media`},{height:`card`,label:`Link section`},{height:`card`,label:`Residence`},{height:`panel`,label:`Image slider`}]]})))()}function f(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...i(),...e.components};return(0,m.jsxs)(m.Fragment,{children:[`
`,`
`,`
`,`
`,(0,m.jsx)(n,{of:l}),`
`,(0,m.jsx)(t.h1,{id:`profile-page`,children:`Profile page`}),`
`,(0,m.jsx)(t.p,{children:`A profile page presents a single subject: a person, a group of people, or a place.
It answers who or what the subject is, what it offers, and how to reach or visit it.`}),`
`,(0,m.jsx)(t.p,{children:`All five variants share the same skeleton.
The page opens with a breadcrumb, a title and a lead paragraph, followed by the sections that describe the subject.
A Spotlight then groups the calls to action, and a set of side-by-side blocks carries the practical details.`}),`
`,(0,m.jsx)(t.h2,{id:`anatomy`,children:`Anatomy`}),`
`,(0,m.jsx)(t.p,{children:`This schematic shows the sections of a person profile and how the grids and vertical space work.`}),`
`,(0,m.jsx)(s,{labels:u,of:l,story:`Person`}),`
`,(0,m.jsx)(t.h2,{id:`variants`,children:`Variants`}),`
`,(0,m.jsxs)(t.p,{children:[(0,m.jsx)(t.strong,{children:`Person`}),` profiles an individual with a public role, such as the mayor.
A portrait sits beside the lead, and a Link List at the end points to the curriculum vitae and the additional positions, which carry too much text to sit on this page.`]}),`
`,(0,m.jsxs)(t.p,{children:[(0,m.jsx)(t.strong,{children:`Group`}),` profiles a body of people that acts as one, such as a party group in the city council.
It adds an address and contact block built from Description Lists, and closes with a grid of Cards, one per member.`]}),`
`,(0,m.jsxs)(t.p,{children:[(0,m.jsx)(t.strong,{children:`Location`}),` profiles a single place people can visit.
A full-width image establishes the place, and the practical blocks answer what can be hired, how to get there and where to park.`]}),`
`,(0,m.jsxs)(t.p,{children:[(0,m.jsx)(t.strong,{children:`Location large`}),` is the same page for a venue with several halls and much more practical information.
It adds an Alert for temporary disruptions, Cards for the individual spaces, and a longer run of detail blocks.`]}),`
`,(0,m.jsxs)(t.p,{children:[(0,m.jsx)(t.strong,{children:`Sublocation`}),` profiles a place that belongs to a larger one, so its breadcrumb is one level deeper.
It drops the full-width image and instead pairs the facilities list with an Image Slider.`]}),`
`,(0,m.jsx)(t.h2,{id:`how-to-build-these-pages`,children:`How to build these pages`}),`
`,(0,m.jsxs)(t.p,{children:[`The Layout does not render `,(0,m.jsx)(t.code,{children:`<main>`}),`, so each page provides its own `,(0,m.jsx)(t.code,{children:`<main id="inhoud">`}),`, which is the Skip Link target.
The Breadcrumb sits in its own Grid above it.`]}),`
`,(0,m.jsxs)(t.p,{children:[`A Spotlight has to be a sibling of the Grids rather than a child of a Grid Cell, because it needs the full page width.
It carries its own Grid, and every Heading, Paragraph and link inside it needs `,(0,m.jsx)(t.code,{children:`color="inverse"`}),`, because these pages use the default purple background.`]}),`
`,(0,m.jsxs)(t.p,{children:[`Use the `,(0,m.jsx)(t.a,{href:`/docs/pages-public-introduction--docs`,children:`recommended Cell sizes`}),` for each kind of section.
Note that the title and lead sit one column further right than the sections below them, which is deliberate.`]}),`
`,(0,m.jsx)(t.p,{children:`Group a set of photos in an Image Slider rather than a Row.
Images in a Row keep their intrinsic width instead of shrinking, so they overflow the Cell and cover the next column.`}),`
`,(0,m.jsxs)(t.p,{children:[`Where a column of blocks sits beside a much taller one, give each column a `,(0,m.jsx)(t.a,{href:`/docs/components-layout-grid--docs`,children:`Grid Subgrid`}),` rather than placing every block in a Cell of the Grid itself.
A Subgrid hands the columns it spans to its own Cells, so each column stacks on its own and a tall block does not push the block beside it down.
Two Subgrids that each span the whole narrow grid also lay the right column out below the left one there, rather than interleaving the two.`]}),`
`,(0,m.jsxs)(t.p,{children:[`A Subgrid is also what lets a section heading sit the space the guidance asks for above the sections it introduces.
A heading in a Cell of its own is spaced by the row gap of the Grid, which is an x-large where a level 2 heading asks for a small.
Give that Grid a `,(0,m.jsx)(t.code,{children:`gapVertical`}),` of `,(0,m.jsx)(t.code,{children:`none`}),`, let the heading Cell set the small with an `,(0,m.jsx)(t.code,{children:`ams-mb-s`}),`, and put the Cells below it in a Subgrid with a `,(0,m.jsx)(t.code,{children:`gapVertical`}),` of `,(0,m.jsx)(t.code,{children:`x-large`}),`, which is the gap the Grid used to give them.
A section that shares its Grid with the Content Header needs a Grid of its own first, since the header depends on that row gap.`]}),`
`,(0,m.jsx)(t.h2,{id:`layout-and-spacing`,children:`Layout and spacing`}),`
`,(0,m.jsxs)(t.p,{children:[`Sections take their vertical space from the padding props of the `,(0,m.jsx)(t.a,{href:`/docs/components-layout-grid--docs`,children:`Grid`}),`, not from margins on the content they hold.
The first Grid takes a `,(0,m.jsx)(t.code,{children:`paddingTop`}),` of `,(0,m.jsx)(t.code,{children:`large`}),`, and the Grid that follows the breadcrumb sets no `,(0,m.jsx)(t.code,{children:`paddingTop`}),` of its own, so the two read as one block.
That Grid still carries a `,(0,m.jsx)(t.code,{children:`paddingBottom`}),`, which spaces it against the section below.
Every Grid in between takes a `,(0,m.jsx)(t.code,{children:`paddingVertical`}),` of `,(0,m.jsx)(t.code,{children:`x-large`}),`, and the last one before the Page Footer a `,(0,m.jsx)(t.code,{children:`paddingBottom`}),` of `,(0,m.jsx)(t.code,{children:`2x-large`}),`.
Two Grids that touch add their paddings together, so leave the padding off one of the two sides.
Across a Spotlight or a full-width image that doubling is what sets the band apart, so keep it there.`]}),`
`,(0,m.jsxs)(t.p,{children:[`Within a Grid Cell, the `,(0,m.jsx)(t.a,{href:`/docs/utilities-css-prose--docs`,children:`Prose`}),` utility class sets the space between the elements, following the `,(0,m.jsx)(t.a,{href:`/docs/docs-designer-guide-vertical-space--docs`,children:`vertical space`}),` recommendations.
It spaces a heading by its visual size rather than its level, so a level 2 Heading at `,(0,m.jsx)(t.code,{children:`size="level-3"`}),` opens a subsection rather than a section.
The Cells that hold an Image Slider are the exception: Prose has no rules for one, so every element but the last there sets its own bottom margin with an `,(0,m.jsx)(t.code,{children:`ams-mb-*`}),` utility.`]}),`
`,(0,m.jsxs)(t.p,{children:[`Cells of the same Grid are spaced by its row gap instead, which stays at the default of `,(0,m.jsx)(t.code,{children:`x-large`}),`.
That gap has no medium step, so a title and a lead in separate cells sit further apart than the guide advises for that pair.
This is a property of the Grid rather than a mistake.
Put the two in one Cell when the exact value matters, and accept the row gap when the cells have to differ in width, as they do here to leave room for the photo.`]}),`
`,(0,m.jsx)(t.h2,{id:`see-also`,children:`See also`}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsx)(t.li,{children:(0,m.jsx)(t.a,{href:`/docs/components-navigation-card--docs`,children:`Card`})}),`
`,(0,m.jsx)(t.li,{children:(0,m.jsx)(t.a,{href:`/docs/components-text-description-list--docs`,children:`Description List`})}),`
`,(0,m.jsx)(t.li,{children:(0,m.jsx)(t.a,{href:`/docs/components-layout-grid--docs`,children:`Grid`})}),`
`,(0,m.jsx)(t.li,{children:(0,m.jsx)(t.a,{href:`/docs/components-media-image-slider--docs`,children:`Image Slider`})}),`
`,(0,m.jsx)(t.li,{children:(0,m.jsx)(t.a,{href:`/docs/components-navigation-link-list--docs`,children:`Link List`})}),`
`,(0,m.jsx)(t.li,{children:(0,m.jsx)(t.a,{href:`/docs/components-containers-spotlight--docs`,children:`Spotlight`})}),`
`]})]})}function p(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,m.jsx)(t,{...e,children:(0,m.jsx)(f,{...e})}):f(e)}var m;function h(){return(h=e((()=>{m=r(),a(),t(),o(),d(),c()})))()}h();export{p as default};