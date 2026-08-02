import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{h as t,u as n}from"./blocks-zzQRermb.js";import{t as r}from"./jsx-runtime-ATHzeHXA.js";import{i,r as a}from"./react-Dyi61YEg.js";function o(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...i(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[`
`,`
`,(0,c.jsx)(n,{title:`Pages/Public/Introduction`}),`
`,(0,c.jsx)(t.h1,{id:`public-websites`,children:`Public websites`}),`
`,(0,c.jsx)(t.p,{children:`The City maintains numerous websites for various target audiences: citizens, entrepreneurs and visitors.
This section presents a number of page types for websites of which Amsterdam is the primary sender, and the intended audience is the general public or a specific part of it.`}),`
`,(0,c.jsx)(t.h2,{id:`spacious-mode`,children:`Spacious Mode`}),`
`,(0,c.jsxs)(t.p,{children:[`Public websites must use the default Spacious Mode, which applies generous
`,(0,c.jsx)(t.a,{href:`/docs/brand-design-tokens-typography--docs`,children:`typography`}),` and `,(0,c.jsx)(t.a,{href:`/docs/brand-design-tokens-space--docs`,children:`spacing`}),`.
This appearance keeps the focus on the content.
It makes information easy to read and helps users find what they need without distractions.`]}),`
`,(0,c.jsx)(t.h2,{id:`anatomy`,children:`Anatomy`}),`
`,(0,c.jsx)(t.p,{children:`The ‘Docs’ page of each page type opens with a schematic of its Default example, drawn once per Grid variant: the narrow, medium, and wide grids of 4, 8, and 12 columns.
It reads the sections and the cells on them from the example itself, so it shows the same page.`}),`
`,(0,c.jsxs)(t.p,{children:[`Side by side, the three drawings share one scale.
The vertical space between the sections is the amount the tokens give it, and each square of the paper is one `,(0,c.jsx)(t.a,{href:`/docs/brand-design-tokens-space--docs`,children:(0,c.jsx)(t.code,{children:`ams.space.m`})}),`: 16 pixels on a phone and 24 on a desktop.
The height of a cell is an impression: nothing in the example says how tall its content is.
It comes from a scale of seven steps, from a single line of text to a body of one, so the same kind of content is the same size on every page type and nothing is drawn taller than a body of text.
Where there is no room for three drawings beside one another, the buttons above them choose which of the three to show.`]}),`
`,(0,c.jsx)(t.p,{children:`A page often repeats one cell down a whole screen, such as the eight top tasks of a home page.
The drawing shows the first row of such a run and the last, with a dashed marker in between for the ones it leaves out.
That marker counts cells where they lie one under the other, and rows where they lie beside one another: ‘8 more’, but ‘3 × 2 more’ for three rows of two.
It all happens per Grid variant, because a run that fills a phone from top to bottom may take two rows on a desktop.`}),`
`,(0,c.jsx)(t.h2,{id:`page-structure`,children:`Page structure`}),`
`,(0,c.jsx)(t.p,{children:`The general structure for a page is:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-tsx`,children:`<Page>
  <SkipLink href="#inhoud">Direct naar inhoud</SkipLink>
  <PageHeader>
    <Grid />
  </PageHeader>
  <Grid>
    <Breadcrumb />
  </Grid>
  <Grid as="main" id="inhoud">
    …
  </Grid>
  <PageFooter>
    <PageFooter.Spotlight>
      <Grid />
    </PageFooter.Spotlight>
    <PageFooter.Menu />
  </PageFooter>
</Page>
`})}),`
`,(0,c.jsx)(t.h3,{id:`no-menu`,children:`No Menu`}),`
`,(0,c.jsxs)(t.p,{children:[`Public websites cannot use the `,(0,c.jsx)(t.a,{href:`/docs/components-navigation-menu--docs`,children:`Menu`}),` component.
They should offer navigation using the Page Header only.`]}),`
`,(0,c.jsx)(t.h2,{id:`vertical-space-between-sections`,children:`Vertical space between sections`}),`
`,(0,c.jsx)(t.p,{children:`Between the Page Header and the Page Footer, the Page holds a sequence of sections.
Most sections are a Grid, but a section can also be a Spotlight, an Image, or an Overlap.
A Spotlight contains a Grid, which in that position also spaces the content against the edges of the coloured band.`}),`
`,(0,c.jsxs)(t.p,{children:[`A landmark is not always a section itself.
A page either sets `,(0,c.jsx)(t.code,{children:`as="main"`}),` on the Grid that holds its content, wraps several sections in a `,(0,c.jsx)(t.code,{children:`main`}),` element, or places `,(0,c.jsx)(t.code,{children:`main`}),` in a Grid Cell beside a sidebar.
Such a wrapper takes no padding of its own, and the Grids inside and around it keep theirs.`]}),`
`,(0,c.jsx)(t.p,{children:`Sections create this space with the padding props of the Grid.
A section that is not a Grid has no padding props and takes its space from the Grids around it.
The Page Header and the Page Footer add no vertical space of their own, so the first and the last Grid provide it.`}),`
`,(0,c.jsx)(t.h3,{id:`the-first-grid`,children:`The first Grid`}),`
`,(0,c.jsxs)(t.p,{children:[`The first Grid has a `,(0,c.jsx)(t.code,{children:`paddingTop`}),` of `,(0,c.jsx)(t.code,{children:`large`}),` and no `,(0,c.jsx)(t.code,{children:`paddingBottom`}),`.
On most pages it contains only the Breadcrumb, and on the question pages of a Form Flow only the back link.
The Grid that follows the Breadcrumb has no `,(0,c.jsx)(t.code,{children:`paddingTop`}),`, so that the breadcrumb and the page title read as a single block.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Not every page type has a breadcrumb.
The Loading Page opens with its search field, and the Handbook Page relies on its table of contents.
Where the first Grid holds content instead of a breadcrumb, it still takes the `,(0,c.jsx)(t.code,{children:`large`}),` top padding.`]}),`
`,(0,c.jsxs)(t.p,{children:[`A page may also open with a section that is not a Grid.
The Home Page starts with an Overlap, which sits flush against the Page Header.
The Grid that follows such a section is a regular one, with a `,(0,c.jsx)(t.code,{children:`paddingVertical`}),` of `,(0,c.jsx)(t.code,{children:`x-large`}),`.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Only the Breadcrumb closes the gap below itself.
The back link keeps the regular `,(0,c.jsx)(t.code,{children:`x-large`}),` between itself and the section that follows.`]}),`
`,(0,c.jsx)(t.h3,{id:`the-grids-in-between`,children:`The Grids in between`}),`
`,(0,c.jsxs)(t.p,{children:[`Every other Grid uses a `,(0,c.jsx)(t.code,{children:`paddingVertical`}),` of `,(0,c.jsx)(t.code,{children:`x-large`}),`, including the Grid inside a Spotlight.`]}),`
`,(0,c.jsx)(t.p,{children:`Two adjacent Grids therefore add up to twice that amount.
Across a Spotlight this is intentional, because the coloured band separates the two paddings.
Between two plain Grids, leave the padding off one of the touching sides, unless the extra whitespace is deliberate.`}),`
`,(0,c.jsx)(t.h3,{id:`the-last-grid`,children:`The last Grid`}),`
`,(0,c.jsxs)(t.p,{children:[`The last Grid before the Page Footer has a `,(0,c.jsx)(t.code,{children:`paddingBottom`}),` of `,(0,c.jsx)(t.code,{children:`2x-large`}),`.`]}),`
`,(0,c.jsxs)(t.p,{children:[`A last section that is not a Grid has no Grid after it to take its space from.
Give it the `,(0,c.jsx)(t.code,{children:`ams-mb-2xl`}),` `,(0,c.jsx)(t.a,{href:`/docs/utilities-css-margin--docs`,children:`Margin`}),` utility class instead, for the same amount of space.`]}),`
`,(0,c.jsxs)(t.p,{children:[`A page that needs only one Grid combines both rules: a `,(0,c.jsx)(t.code,{children:`paddingTop`}),` of `,(0,c.jsx)(t.code,{children:`large`}),` and a `,(0,c.jsx)(t.code,{children:`paddingBottom`}),` of `,(0,c.jsx)(t.code,{children:`2x-large`}),`.`]}),`
`,(0,c.jsx)(t.h3,{id:`vertical-gaps`,children:`Vertical gaps`}),`
`,(0,c.jsxs)(t.p,{children:[`Leave `,(0,c.jsx)(t.code,{children:`gapVertical`}),` at its default of `,(0,c.jsx)(t.code,{children:`x-large`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`how-to-size-the-grid-cells`,children:`How to size the Grid Cells`}),`
`,(0,c.jsxs)(t.p,{children:[`Everything on the page is wrapped in a `,(0,c.jsx)(t.a,{href:`/docs/components-layout-grid--docs`,children:`Grid Cell`}),`.
Its `,(0,c.jsx)(t.code,{children:`span`}),` and `,(0,c.jsx)(t.code,{children:`start`}),` props let you define where all sections go on the page.
Do so for all variants of the Grid (narrow, medium, and wide: 4, 8, and 12 columns).`]}),`
`,(0,c.jsx)(t.p,{children:`Some typical page sections always use the same values:`}),`
`,(0,c.jsx)(t.h3,{id:`content-page-header`,children:`Content page header`}),`
`,(0,c.jsxs)(t.p,{children:[`The header section contains the page title, publication date, optional metadata, and the lead paragraph.
It is a bit `,(0,c.jsx)(t.strong,{children:`wider`}),` than the body section and is positioned slightly further `,(0,c.jsx)(t.strong,{children:`to the left`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-tsx`,children:`<Grid.Cell span={{ narrow: 4, medium: 7, wide: 9 }} start={{ narrow: 1, medium: 1, wide: 2 }} />
`})}),`
`,(0,c.jsx)(t.p,{children:`Breadcrumbs use their own Grid placed directly above the header, using the same cell configuration.`}),`
`,(0,c.jsx)(t.h3,{id:`content-page-body`,children:`Content page body`}),`
`,(0,c.jsxs)(t.p,{children:[`The body section contains the main textual content of the page.
It spans `,(0,c.jsx)(t.strong,{children:`7 columns`}),` on the wide grid and `,(0,c.jsx)(t.strong,{children:`6 columns`}),` on the medium-wide grid to maintain an optimal line length for readability.
This also applies to forms.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-tsx`,children:`<Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 3 }} />
`})}),`
`,(0,c.jsx)(t.h3,{id:`side-by-side-blocks`,children:`Side-by-side blocks`}),`
`,(0,c.jsxs)(t.p,{children:[`Link Sections (a block with a header, paragraph, and standalone link) can be displayed `,(0,c.jsx)(t.strong,{children:`side by side`}),`, for example within a Spotlight.
To achieve this, use the following configuration.
The `,(0,c.jsx)(t.code,{children:`start`}),` prop is not needed here.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-tsx`,children:`<Grid.Cell span={{ narrow: 4, medium: 4, wide: 6 }} />
`})}),`
`,(0,c.jsxs)(t.p,{children:[`On navigation pages, similar sections use Link Lists and are 1 column `,(0,c.jsx)(t.strong,{children:`narrower`}),` on wide screens.
When rendering them in a loop, the `,(0,c.jsx)(t.code,{children:`start`}),` position is only necessary for the odd cells:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-tsx`,children:`<Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }} start={index % 2 ? undefined : { narrow: 1, medium: 1, wide: 2 }} />
`})}),`
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
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.a,{href:`/docs/components-navigation-breadcrumb--docs`,children:`Breadcrumb`})}),`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.a,{href:`/docs/components-layout-grid--docs`,children:`Grid`})}),`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.a,{href:`/docs/components-containers-page-footer--docs`,children:`Page Footer`})}),`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.a,{href:`/docs/components-containers-page-header--docs`,children:`Page Header`})}),`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.a,{href:`/docs/components-containers-page--docs`,children:`Page`})}),`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.a,{href:`/docs/components-navigation-skip-link--docs`,children:`Skip Link`})}),`
`]})]})}function s(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),a(),t()})))()}l();export{s as default};