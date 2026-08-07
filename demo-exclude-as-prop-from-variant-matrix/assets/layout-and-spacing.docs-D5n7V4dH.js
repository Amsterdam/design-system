import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{h as t,u as n}from"./blocks-zzQRermb.js";import{t as r}from"./jsx-runtime-ATHzeHXA.js";import{i,r as a}from"./react-Dyi61YEg.js";function o(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...i(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[`
`,`
`,(0,c.jsx)(n,{title:`Pages/Guidelines/Layout and spacing`}),`
`,(0,c.jsx)(t.h1,{id:`layout-and-spacing`,children:`Layout and spacing`}),`
`,(0,c.jsx)(t.p,{children:`Laying out a page is a lookup rather than a judgement call.
This page gives the values; a template’s own documentation page only records where it departs from them.`}),`
`,(0,c.jsx)(t.h2,{id:`vertical-space-between-sections`,children:`Vertical space between sections`}),`
`,(0,c.jsx)(t.p,{children:`Between the Page Header and the Page Footer, the Page holds a sequence of sections.
Most sections are a Grid, but a section can also be a Spotlight, an Image, or an Overlap.
A Spotlight contains a Grid, which in that position also spaces the content against the edges of the coloured band.`}),`
`,(0,c.jsx)(t.p,{children:`Sections create this space with the padding props of the Grid.
A section that is not a Grid has no padding props and takes its space from the Grids around it.
The Page Header and the Page Footer add no vertical space of their own, so the first and the last Grid provide it.`}),`
`,(0,c.jsxs)(t.p,{children:[`Internal pages give every Grid the same `,(0,c.jsx)(t.code,{children:`paddingVertical`}),` of `,(0,c.jsx)(t.code,{children:`x-large`}),`.
The sequence below applies to public pages, which vary the padding along the page.`]}),`
`,(0,c.jsx)(t.h3,{id:`the-first-grid`,children:`The first Grid`}),`
`,(0,c.jsxs)(t.p,{children:[`The first Grid has a `,(0,c.jsx)(t.code,{children:`paddingTop`}),` of `,(0,c.jsx)(t.code,{children:`large`}),` and no `,(0,c.jsx)(t.code,{children:`paddingBottom`}),`.
On most pages it contains only the Breadcrumb, and on the question pages of a Form Flow only the back link.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Not every page type has a breadcrumb.
A page deep in a handbook relies on its table of contents instead, for one.
Where the first Grid holds content instead of a breadcrumb, it still takes the `,(0,c.jsx)(t.code,{children:`large`}),` top padding.`]}),`
`,(0,c.jsxs)(t.p,{children:[`A page may also open with a section that is not a Grid.
The Home Page starts with an Overlap, which sits flush against the Page Header.
The Grid that follows such a section is a regular one, with a `,(0,c.jsx)(t.code,{children:`paddingVertical`}),` of `,(0,c.jsx)(t.code,{children:`x-large`}),`.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Only the Breadcrumb closes the gap below itself.
The back link keeps the regular `,(0,c.jsx)(t.code,{children:`x-large`}),` between itself and the section that follows.`]}),`
`,(0,c.jsx)(t.h3,{id:`the-content-header-grid`,children:`The Content Header Grid`}),`
`,(0,c.jsxs)(t.p,{children:[`The Grid that follows the Breadcrumb holds the Content Header: the page title, an optional Metadata Paragraph, and the lead paragraph.
It has no `,(0,c.jsx)(t.code,{children:`paddingTop`}),`, so that the breadcrumb and the page title read as a single block.
Its Cell carries the `,(0,c.jsx)(t.a,{href:`/docs/utilities-css-prose--docs`,children:`Prose`}),` utility class, which spaces those three as `,(0,c.jsx)(t.a,{href:`/docs/docs-designer-guide-vertical-space--docs`,children:`vertical space`}),` recommends.
The body Cells of these templates use it too, so a page template sets no bottom margins of its own within a Cell.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Its `,(0,c.jsx)(t.code,{children:`paddingBottom`}),` depends on what meets the boundary on either side of it.
Where both this Grid and the one below it have the default background colour, it takes `,(0,c.jsx)(t.code,{children:`2x-large`}),`, which sets the Content Header apart from the body that follows.
Where either of them meets that boundary with a full-width band — a Spotlight, or an Image or Image Slider spanning the whole Grid — `,(0,c.jsx)(t.code,{children:`x-large`}),` is enough, because the edge of that band marks the boundary already.
It makes no difference which of the two the band belongs to: a Grid that ends in one takes `,(0,c.jsx)(t.code,{children:`x-large`}),` below it as much as one that is followed by a coloured section does.`]}),`
`,(0,c.jsxs)(t.p,{children:[`An image that shares its row with text, as the lead image does on the Information Page, is not such a band: the default background still runs along the boundary beside it, so the Grid keeps its `,(0,c.jsx)(t.code,{children:`2x-large`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:`A page that opens with a search rather than with prose puts its Search Field in that same Cell, in the place of the lead.
Prose then spaces it a medium below the title, as it does the lead.
Where the field wants to be narrower than the documented Cell, so the input does not stretch to an unusable length, the whole Content Header Cell narrows with it.`}),`
`,(0,c.jsxs)(t.p,{children:[`Anything larger — an Image Slider, for one — takes a Grid Cell of its own instead, and the row gap of `,(0,c.jsx)(t.code,{children:`x-large`}),` sets it apart from the title above it.`]}),`
`,(0,c.jsx)(t.h3,{id:`the-grids-in-between`,children:`The Grids in between`}),`
`,(0,c.jsxs)(t.p,{children:[`Every remaining Grid uses a `,(0,c.jsx)(t.code,{children:`paddingVertical`}),` of `,(0,c.jsx)(t.code,{children:`x-large`}),`, including the Grid inside a Spotlight.`]}),`
`,(0,c.jsx)(t.p,{children:`Two adjacent Grids therefore add up to twice that amount.
Across a Spotlight this is intentional, because the coloured band separates the two paddings.
Between two plain Grids, leave the padding off one of the touching sides, unless the extra whitespace is deliberate.`}),`
`,(0,c.jsx)(t.h3,{id:`the-last-grid`,children:`The last Grid`}),`
`,(0,c.jsxs)(t.p,{children:[`The last Grid before the Page Footer has a `,(0,c.jsx)(t.code,{children:`paddingBottom`}),` of `,(0,c.jsx)(t.code,{children:`2x-large`}),`.`]}),`
`,(0,c.jsxs)(t.p,{children:[`A last section that is not a Grid has no Grid after it to take its space from.
Give it the `,(0,c.jsx)(t.code,{children:`ams-mb-2xl`}),` `,(0,c.jsx)(t.a,{href:`/docs/utilities-css-margin--docs`,children:`Margin`}),` utility class instead, for the same amount of space.`]}),`
`,(0,c.jsxs)(t.p,{children:[`A page that needs only one Grid combines both rules: a `,(0,c.jsx)(t.code,{children:`paddingTop`}),` of `,(0,c.jsx)(t.code,{children:`large`}),` and a `,(0,c.jsx)(t.code,{children:`paddingBottom`}),` of `,(0,c.jsx)(t.code,{children:`2x-large`}),`.`]}),`
`,(0,c.jsx)(t.h3,{id:`vertical-gaps`,children:`Vertical gaps`}),`
`,(0,c.jsxs)(t.p,{children:[`Usually, leave `,(0,c.jsx)(t.code,{children:`gapVertical`}),` at its default of `,(0,c.jsx)(t.code,{children:`x-large`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`space-inside-a-grid-cell`,children:`Space inside a Grid Cell`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.a,{href:`/docs/utilities-css-prose--docs`,children:`Prose`}),` utility class sets the space between most types of elements of a Cell, following the `,(0,c.jsx)(t.a,{href:`/docs/docs-designer-guide-vertical-space--docs`,children:`vertical space`}),` recommendations.
A Cell that carries it needs little bottom margins of its own.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Where Prose has no rule for an element, every element but the last sets its own bottom margin with an `,(0,c.jsx)(t.a,{href:`/docs/utilities-css-margin--docs`,children:(0,c.jsx)(t.code,{children:`ams-mb-*`})}),` utility class, in the amount the vertical space guide gives.`]}),`
`,(0,c.jsx)(t.h3,{id:`spacing-a-section-heading`,children:`Spacing a section heading`}),`
`,(0,c.jsxs)(t.p,{children:[`A heading in a Cell of its own is spaced by the row gap of the Grid, which is an `,(0,c.jsx)(t.code,{children:`x-large`}),` where the guidance asks for a `,(0,c.jsx)(t.code,{children:`small`}),` or less.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Give that Grid a `,(0,c.jsx)(t.code,{children:`gapVertical`}),` of `,(0,c.jsx)(t.code,{children:`none`}),`, let the heading Cell set the right amount with an `,(0,c.jsx)(t.code,{children:`ams-mb-*`}),` utility, and put the Cells below it in a `,(0,c.jsx)(t.a,{href:`/docs/components-layout-grid--docs#subgrid`,children:`Grid Subgrid`}),` with a `,(0,c.jsx)(t.code,{children:`gapVertical`}),` of `,(0,c.jsx)(t.code,{children:`x-large`}),`, which is the gap the Grid used to give them.
A section that shares its Grid with the Content Header needs a Grid of its own first, since the header depends on that row gap.`]}),`
`,(0,c.jsx)(t.h2,{id:`how-to-size-the-grid-cells`,children:`How to size the Grid Cells`}),`
`,(0,c.jsxs)(t.p,{children:[`Almost everything on the page is wrapped in a `,(0,c.jsx)(t.a,{href:`/docs/components-layout-grid--docs`,children:`Grid Cell`}),`.
Its `,(0,c.jsx)(t.code,{children:`span`}),` and `,(0,c.jsx)(t.code,{children:`start`}),` props let you define where all sections go on the page.
Do so for all variants of the Grid (narrow, medium, and wide: 4, 8, and 12 columns).`]}),`
`,(0,c.jsx)(t.p,{children:`Some typical page sections always use the same values:`}),`
`,(0,c.jsx)(t.h3,{id:`content-header`,children:`Content Header`}),`
`,(0,c.jsxs)(t.p,{children:[`The Content Header contains the page title, an optional Metadata Paragraph with the publication date or the taxonomy tags, and the lead paragraph.
It is a bit `,(0,c.jsx)(t.strong,{children:`wider`}),` than the body section and is positioned slightly further `,(0,c.jsx)(t.strong,{children:`to the left`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-tsx`,children:`<Grid.Cell span={{ narrow: 4, medium: 7, wide: 9 }} start={{ narrow: 1, medium: 1, wide: 2 }} />
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Breadcrumbs use their own Grid placed directly above the Content Header, using the same cell configuration.
See `,(0,c.jsx)(t.a,{href:`#the-content-header-grid`,children:`the Content Header Grid`}),` for the space around and inside this section.`]}),`
`,(0,c.jsx)(t.h3,{id:`content-body`,children:`Content Body`}),`
`,(0,c.jsxs)(t.p,{children:[`The body section contains the main textual content of the page.
It spans `,(0,c.jsx)(t.strong,{children:`7 columns`}),` on the wide grid and `,(0,c.jsx)(t.strong,{children:`6 columns`}),` on the medium-wide grid to maintain an optimal line length for readability.
This also applies to forms.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-tsx`,children:`<Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 3 }} />
`})}),`
`,(0,c.jsx)(t.h3,{id:`side-by-side-blocks`,children:`Side-by-side blocks`}),`
`,(0,c.jsxs)(t.p,{children:[`Link Sections (a block with a heading, paragraph, and standalone link) can be displayed `,(0,c.jsx)(t.strong,{children:`side by side`}),`, for example within a Spotlight.
Two of them take half the wide grid each, and the `,(0,c.jsx)(t.code,{children:`start`}),` prop is not needed.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-tsx`,children:`<Grid.Cell span={{ narrow: 4, medium: 4, wide: 6 }} />
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Where a set of blocks sits under a heading of its own, put them in a `,(0,c.jsx)(t.a,{href:`/docs/components-layout-grid--docs#subgrid`,children:`Grid Subgrid`}),` spanning the whole Grid.
The Subgrid hands its columns to its own Cells, so each block is placed against the columns of the page without repeating a `,(0,c.jsx)(t.code,{children:`start`}),`, and the heading above keeps a Cell in the Grid itself.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-tsx`,children:`<Grid>
  <Grid.Cell span="all">{/* the heading */}</Grid.Cell>
  <Grid.Subgrid gapVertical="x-large" span="all">
    <Grid.Cell span={{ narrow: 4, medium: 4, wide: 3 }} />
  </Grid.Subgrid>
</Grid>
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Where those blocks hold the same kind of thing – Cards, news items, search results – the set is a list.
Give the Subgrid `,(0,c.jsx)(t.code,{children:`as="ul"`}),` and each Cell inside it `,(0,c.jsx)(t.code,{children:`as="li"`}),`.
Keep whatever is not one of the items outside it, such as the heading or a Pagination.
`,(0,c.jsx)(t.a,{href:`/docs/components-layout-grid--docs#semantic-list-of-cards`,children:`Semantic list of cards`}),` shows how.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Where two columns run beside one another and one is much taller, give `,(0,c.jsx)(t.strong,{children:`each column`}),` its own Subgrid instead.
A Subgrid is a single item in the row of the Grid however many rows it holds, so the columns stack independently rather than a tall block pushing its neighbour down.
On the narrow grid the second column then lands below the whole of the first rather than interleaving with it.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-tsx`,children:`<Grid>
  <Grid.Subgrid span={{ narrow: 4, medium: 4, wide: 5 }} start={{ narrow: 1, medium: 1, wide: 2 }} />
  <Grid.Subgrid span={{ narrow: 4, medium: 4, wide: 5 }} />
</Grid>
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Blocks placed straight into a Grid rather than a Subgrid still need a `,(0,c.jsx)(t.code,{children:`start`}),` on every other Cell to hold the left-hand column, which is worth avoiding where a Subgrid will do.`]}),`
`,(0,c.jsx)(t.h3,{id:`top-tasks`,children:`Top tasks`}),`
`,(0,c.jsxs)(t.p,{children:[`Top-task overviews use Cards that contain only a heading and a paragraph, without an image.
On the wide grid, each Card spans 3 columns, fitting `,(0,c.jsx)(t.strong,{children:`4 per row`}),`.
On the narrow and medium-wide grids, each Card spans 4 columns.
The `,(0,c.jsx)(t.code,{children:`start`}),` prop is not needed here.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-tsx`,children:`<Grid.Cell span={{ narrow: 4, medium: 4, wide: 3 }} />
`})}),`
`,(0,c.jsx)(t.h3,{id:`preview-cards`,children:`Preview cards`}),`
`,(0,c.jsxs)(t.p,{children:[`Index pages such as news overviews or search results use Cards as well for navigation.
They usually do include the image of the target content.
These layouts require `,(0,c.jsx)(t.strong,{children:`4 columns`}),` for each Card, which can be achieved with a single spanning value:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-tsx`,children:`<Grid.Cell span={4} />
`})}),`
`,(0,c.jsx)(t.h2,{id:`see-also`,children:`See also`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:`/docs/docs-designer-guide-vertical-space--docs`,children:`Vertical space`}),` – the space between any two components.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:`/docs/components-layout-grid--docs`,children:`Grid`}),` – the component that carries all of this.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:`/docs/utilities-css-prose--docs`,children:`Prose`}),` – the utility that spaces the contents of a Cell.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:`/docs/utilities-css-margin--docs`,children:`Margin`}),` – the utility classes for everything Prose does not cover.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),a(),t()})))()}l();export{s as default};