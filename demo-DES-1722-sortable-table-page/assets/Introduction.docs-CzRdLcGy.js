import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-BrayXyei.js";import{r as n}from"./react-oCAR5XSR.js";import{c as r,f as i}from"./blocks-BMeG5knU.js";import{t as a}from"./mdx-react-shim-9Tyt82po.js";function o(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[`
`,`
`,(0,c.jsx)(r,{title:`Pages/Public/Introduction`}),`
`,(0,c.jsx)(t.h1,{id:`public-websites`,children:`Public websites`}),`
`,(0,c.jsx)(t.p,{children:`The City maintains numerous websites for various target audiences: citizens, entrepreneurs and visitors.
This section presents a number of page types for websites of which Amsterdam is the primary sender, and the intended audience is the general public or a specific part of it.`}),`
`,(0,c.jsx)(t.h2,{id:`spacious-mode`,children:`Spacious Mode`}),`
`,(0,c.jsxs)(t.p,{children:[`Public websites must use the default Spacious Mode, which applies generous
`,(0,c.jsx)(t.a,{href:`/docs/brand-design-tokens-typography--docs`,children:`typography`}),` and `,(0,c.jsx)(t.a,{href:`/docs/brand-design-tokens-space--docs`,children:`spacing`}),`.
This appearance keeps the focus on the content.
It makes information easy to read and helps users find what they need without distractions.`]}),`
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
`,(0,c.jsxs)(t.p,{children:[`Link Blocks (a section with a header, paragraph, and standalone link) can be displayed `,(0,c.jsx)(t.strong,{children:`side by side`}),`, for example within a Spotlight.
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
`,(0,c.jsx)(t.h2,{id:`related-components`,children:`Related components`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.a,{href:`/docs/components-navigation-breadcrumb--docs`,children:`Breadcrumb`})}),`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.a,{href:`/docs/components-layout-grid--docs`,children:`Grid`})}),`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.a,{href:`/docs/components-containers-page-footer--docs`,children:`Page Footer`})}),`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.a,{href:`/docs/components-containers-page-header--docs`,children:`Page Header`})}),`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.a,{href:`/docs/components-containers-page--docs`,children:`Page`})}),`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.a,{href:`/docs/components-navigation-skip-link--docs`,children:`Skip Link`})}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=t(),a(),i()}))();export{s as default};