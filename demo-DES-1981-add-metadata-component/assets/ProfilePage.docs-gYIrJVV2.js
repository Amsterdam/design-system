import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,h as n,p as r,u as i}from"./blocks-zzQRermb.js";import{t as a}from"./jsx-runtime-ATHzeHXA.js";import{i as o,r as s}from"./react-Dyi61YEg.js";import{n as c,t as l}from"./PageAnatomy-CArn_Al0.js";import{n as u,t as d}from"./ProfilePage.stories-aPAjU5b9.js";var f;function p(){return(p=e((()=>{f=[[{height:`line`,label:`Breadcrumb`}],[{height:`title`,label:`Page title`},{height:{narrow:`body`,medium:`panel`,wide:`panel`},label:`Lead and duties`},{height:`body`,label:`Portrait`}],[{height:`card`,label:`Link section`},{height:`card`,label:`Link section`}],[{height:`card`,label:`Contact`},{height:`card`,label:`Social media`},{height:`card`,label:`Link section`},{height:`card`,label:`Residence`},{height:`panel`,label:`Image slider`}]]})))()}function m(e){let n={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...o(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[`
`,`
`,`
`,`
`,(0,g.jsx)(i,{of:d}),`
`,(0,g.jsx)(r,{}),`
`,(0,g.jsx)(t,{of:d}),`
`,(0,g.jsx)(n.p,{children:`All five variants share the same skeleton.
The page opens with a breadcrumb, a title and a lead paragraph, followed by the sections that describe the subject.
A Spotlight then groups the calls to action, and a set of side-by-side blocks carries the practical details.`}),`
`,(0,g.jsx)(n.h2,{id:`anatomy`,children:`Anatomy`}),`
`,(0,g.jsx)(n.p,{children:`This schematic shows the sections of a person profile and how the grids and vertical space work.`}),`
`,(0,g.jsx)(l,{labels:f,of:d,story:`Person`}),`
`,(0,g.jsx)(n.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,g.jsx)(n.h3,{id:`when-to-use`,children:`When to use`}),`
`,(0,g.jsx)(n.p,{children:`Use this page for a single subject people want to reach or visit: a person with a public role, a body that acts as one, or a place.`}),`
`,(0,g.jsx)(n.h3,{id:`when-not-to-use`,children:`When not to use`}),`
`,(0,g.jsxs)(n.p,{children:[`Use a `,(0,g.jsx)(n.a,{href:`/docs/pages-public-product-page--docs`,children:`Product Page`}),` where the subject is something to arrange rather than someone to reach.`]}),`
`,(0,g.jsx)(n.h2,{id:`variants`,children:`Variants`}),`
`,(0,g.jsx)(n.h3,{id:`person`,children:`Person`}),`
`,(0,g.jsx)(n.p,{children:`Profiles an individual with a public role, such as the mayor.
A portrait sits beside the lead, and a Link List at the end points to the curriculum vitae and the additional positions, which carry too much text to sit on this page.`}),`
`,(0,g.jsx)(n.h3,{id:`group`,children:`Group`}),`
`,(0,g.jsx)(n.p,{children:`Profiles a body of people that acts as one, such as a party group in the city council.
It adds an address and contact block built from Description Lists, and closes with a grid of Cards, one per member.`}),`
`,(0,g.jsx)(n.h3,{id:`location`,children:`Location`}),`
`,(0,g.jsx)(n.p,{children:`Profiles a single place people can visit.
A full-width image establishes the place, and the practical blocks answer what can be hired, how to get there and where to park.`}),`
`,(0,g.jsx)(n.h3,{id:`location-large`,children:`Location large`}),`
`,(0,g.jsx)(n.p,{children:`The same page for a venue with several halls and much more practical information.
It adds an Alert for temporary disruptions, Cards for the individual spaces, and a longer run of detail blocks.`}),`
`,(0,g.jsx)(n.h3,{id:`sublocation`,children:`Sublocation`}),`
`,(0,g.jsx)(n.p,{children:`Profiles a place that belongs to a larger one, so its breadcrumb is one level deeper.
It drops the full-width image and instead pairs the facilities list with an Image Slider.`}),`
`,(0,g.jsx)(n.h2,{id:`structure`,children:`Structure`}),`
`,(0,g.jsxs)(n.p,{children:[`The Layout does not render `,(0,g.jsx)(n.code,{children:`<main>`}),`, so each page provides its own `,(0,g.jsx)(n.code,{children:`<main id="inhoud">`}),`, which is the Skip Link target.
The Breadcrumb sits in its own Grid above it.`]}),`
`,(0,g.jsxs)(n.p,{children:[`A `,(0,g.jsx)(n.a,{href:`/docs/components-containers-spotlight--docs`,children:`Spotlight`}),` has to be a sibling of the Grids rather than a child of a Grid Cell, because it needs the full page width.
It carries its own Grid.`]}),`
`,(0,g.jsxs)(n.p,{children:[`Use the `,(0,g.jsx)(n.a,{href:`/docs/pages-guidelines-layout-and-spacing--docs#how-to-size-the-grid-cells`,children:`recommended Cell sizes`}),` for each kind of section.
Note that the title and lead sit one column further right than the sections below them, which is deliberate.`]}),`
`,(0,g.jsxs)(n.p,{children:[`Group a set of photos in an `,(0,g.jsx)(n.a,{href:`/docs/components-media-image-slider--docs`,children:`Image Slider`}),` rather than a `,(0,g.jsx)(n.a,{href:`/docs/components-layout-row--docs`,children:`Row`}),`.`]}),`
`,(0,g.jsxs)(n.p,{children:[`Where a column of blocks sits beside a much taller one, give each column a `,(0,g.jsx)(n.a,{href:`/docs/components-layout-grid--docs#subgrid`,children:`Grid Subgrid`}),` rather than placing every block in a Cell of the Grid itself, so a tall block does not push the block beside it down.`]}),`
`,(0,g.jsx)(n.h2,{id:`layout-and-spacing`,children:`Layout and spacing`}),`
`,(0,g.jsxs)(n.p,{children:[`Sections take their vertical space from the padding props of the `,(0,g.jsx)(n.a,{href:`/docs/components-layout-grid--docs`,children:`Grid`}),`, not from margins on the content they hold.
The first Grid takes a `,(0,g.jsx)(n.code,{children:`paddingTop`}),` of `,(0,g.jsx)(n.code,{children:`large`}),`, and the Grid that follows the breadcrumb sets no `,(0,g.jsx)(n.code,{children:`paddingTop`}),` of its own, so the two read as one block.
That Grid still carries a `,(0,g.jsx)(n.code,{children:`paddingBottom`}),`, which spaces it against the section below.
Every Grid in between takes a `,(0,g.jsx)(n.code,{children:`paddingVertical`}),` of `,(0,g.jsx)(n.code,{children:`x-large`}),`, and the last one before the Page Footer a `,(0,g.jsx)(n.code,{children:`paddingBottom`}),` of `,(0,g.jsx)(n.code,{children:`2x-large`}),`.
Two Grids that touch add their paddings together, so leave the padding off one of the two sides.
Across a Spotlight or a full-width image that doubling is what sets the band apart, so keep it there.`]}),`
`,(0,g.jsxs)(n.p,{children:[`Within a Grid Cell, the `,(0,g.jsx)(n.a,{href:`/docs/utilities-css-prose--docs`,children:`Prose`}),` utility class sets the space between the elements, following the `,(0,g.jsx)(n.a,{href:`/docs/docs-designer-guide-vertical-space--docs`,children:`vertical space`}),` recommendations.
It spaces a heading by its visual size rather than its level, so a level 2 Heading at `,(0,g.jsx)(n.code,{children:`size="level-3"`}),` opens a subsection rather than a section.
The Cells that hold an Image Slider are the exception: Prose has no rules for one, so every element but the last there sets its own bottom margin with an `,(0,g.jsx)(n.code,{children:`ams-mb-*`}),` utility.`]}),`
`,(0,g.jsxs)(n.p,{children:[`Cells of the same Grid are spaced by its row gap instead, which stays at the default of `,(0,g.jsx)(n.code,{children:`x-large`}),`.
That gap has no medium step, so a title and a lead in separate cells sit further apart than the guide advises for that pair.
This is a property of the Grid rather than a mistake.
Put the two in one Cell when the exact value matters, and accept the row gap when the cells have to differ in width, as they do here to leave room for the photo.`]}),`
`,(0,g.jsx)(n.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,g.jsxs)(n.p,{children:[`Spotlights and full-bleed images sit between the Grids rather than inside one, so a plain `,(0,g.jsx)(n.code,{children:`main`}),` wraps them all.
A page that is a single section sets `,(0,g.jsx)(n.code,{children:`as="main"`}),` on that Grid instead.`]}),`
`,(0,g.jsxs)(n.p,{children:[`The Spotlight on these pages renders as a `,(0,g.jsx)(n.code,{children:`section`}),` with no accessible name.
A `,(0,g.jsx)(n.code,{children:`section`}),` is exposed as a region only when it has one, and as `,(0,g.jsx)(n.code,{children:`generic`}),` otherwise, so this band is a visual grouping rather than a landmark.
The Article Page names its equivalent band after its heading, which is what turns one into a landmark a reader can reach.`]}),`
`,(0,g.jsx)(n.h2,{id:`see-also`,children:`See also`}),`
`,(0,g.jsxs)(n.ul,{children:[`
`,(0,g.jsxs)(n.li,{children:[(0,g.jsx)(n.a,{href:`/docs/components-text-description-list--docs`,children:`Description List`}),` – the address and contact blocks.`]}),`
`,(0,g.jsxs)(n.li,{children:[(0,g.jsx)(n.a,{href:`/docs/components-layout-grid--docs`,children:`Grid`}),` – the Subgrid that keeps uneven columns apart.`]}),`
`,(0,g.jsxs)(n.li,{children:[(0,g.jsx)(n.a,{href:`/docs/components-media-image-slider--docs`,children:`Image Slider`}),` – for a set of photos.`]}),`
`,(0,g.jsxs)(n.li,{children:[(0,g.jsx)(n.a,{href:`/docs/pages-guidelines-layout-and-spacing--docs`,children:`Layout and spacing`}),` – how to space a section heading above the blocks it introduces.`]}),`
`,(0,g.jsxs)(n.li,{children:[(0,g.jsx)(n.a,{href:`/docs/components-containers-spotlight--docs`,children:`Spotlight`}),` – the call-to-action band, and what its contents need.`]}),`
`]})]})}function h(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,g.jsx)(t,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;function _(){return(_=e((()=>{g=a(),s(),n(),c(),p(),u()})))()}_();export{h as default};