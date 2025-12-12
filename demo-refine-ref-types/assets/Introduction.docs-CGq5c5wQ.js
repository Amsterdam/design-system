import{j as e}from"./iframe-BFUn_NSv.js";import{useMDXComponents as r}from"./index-BEoQcyt1.js";import{M as a}from"./blocks-BeHJiWyZ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BtkdUvHa.js";function i(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(a,{title:"Pages/Public/Introduction"}),`
`,e.jsx(n.h1,{id:"public-websites",children:"Public websites"}),`
`,e.jsx(n.p,{children:`The City maintains numerous websites for various target audiences: citizens, entrepreneurs and visitors.
This section presents a number of page types for websites of which Amsterdam is the primary sender, and the intended audience is the general public or a specific part of it.`}),`
`,e.jsx(n.h2,{id:"spacious-mode",children:"Spacious Mode"}),`
`,e.jsxs(n.p,{children:[`Public websites must use the default Spacious Mode, which applies generous
`,e.jsx(n.a,{href:"/docs/brand-design-tokens-typography--docs",children:"typography"})," and ",e.jsx(n.a,{href:"/docs/brand-design-tokens-space--docs",children:"spacing"}),`.
This appearance keeps the focus on the content.
It makes information easy to read and helps users find what they need without distractions.`]}),`
`,e.jsx(n.h2,{id:"page-structure",children:"Page structure"}),`
`,e.jsx(n.p,{children:"The general structure for a page is:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Page>
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
`,e.jsx(n.h3,{id:"no-menu",children:"No Menu"}),`
`,e.jsxs(n.p,{children:["Public websites cannot use the ",e.jsx(n.a,{href:"/docs/components-navigation-menu--docs",children:"Menu"}),` component.
They should offer navigation using the Page Header only.`]}),`
`,e.jsx(n.h2,{id:"how-to-size-the-grid-cells",children:"How to size the Grid Cells"}),`
`,e.jsxs(n.p,{children:["Everything on the page is wrapped in a ",e.jsx(n.a,{href:"/docs/components-layout-grid--docs",children:"Grid Cell"}),`.
Its `,e.jsx(n.code,{children:"span"})," and ",e.jsx(n.code,{children:"start"}),` props let you define where all sections go on the page.
Do so for all variants of the Grid (narrow, medium, and wide: 4, 8, and 12 columns).`]}),`
`,e.jsx(n.p,{children:"Some typical page sections always use the same values:"}),`
`,e.jsx(n.h3,{id:"content-page-header",children:"Content page header"}),`
`,e.jsxs(n.p,{children:[`The header section contains the page title, publication date, optional metadata, and the lead paragraph.
It is a bit `,e.jsx(n.strong,{children:"wider"})," than the body section and is positioned slightly further ",e.jsx(n.strong,{children:"to the left"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Grid.Cell span={{ narrow: 4, medium: 7, wide: 9 }} start={{ narrow: 1, medium: 1, wide: 2 }} />
`})}),`
`,e.jsx(n.p,{children:"Breadcrumbs use their own Grid placed directly above the header, using the same cell configuration."}),`
`,e.jsx(n.h3,{id:"content-page-body",children:"Content page body"}),`
`,e.jsxs(n.p,{children:[`The body section contains the main textual content of the page.
It spans `,e.jsx(n.strong,{children:"7 columns"})," on the wide grid and ",e.jsx(n.strong,{children:"6 columns"}),` on the medium-wide grid to maintain an optimal line length for readability.
This also applies to forms.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 3 }} />
`})}),`
`,e.jsx(n.h3,{id:"side-by-side-blocks",children:"Side-by-side blocks"}),`
`,e.jsxs(n.p,{children:["Link Blocks (a section with a header, paragraph, and standalone link) can be displayed ",e.jsx(n.strong,{children:"side by side"}),`, for example within a Spotlight.
To achieve this, use the following configuration.
The `,e.jsx(n.code,{children:"start"})," prop is not needed here."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Grid.Cell span={{ narrow: 4, medium: 4, wide: 6 }} />
`})}),`
`,e.jsxs(n.p,{children:["On navigation pages, similar sections use Link Lists and are 1 column ",e.jsx(n.strong,{children:"narrower"}),` on wide screens.
When rendering them in a loop, the `,e.jsx(n.code,{children:"start"})," position is only necessary for the odd cells:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }} start={index % 2 ? undefined : { narrow: 1, medium: 1, wide: 2 }} />
`})}),`
`,e.jsx(n.h3,{id:"top-tasks",children:"Top tasks"}),`
`,e.jsxs(n.p,{children:[`Top-task overviews use Cards that contain only a heading and a paragraph, without an image.
On the wide grid, each Card spans 3 columns, fitting `,e.jsx(n.strong,{children:"4 per row"}),`.
On the narrow and medium-wide grids, each Card spans 4 columns.
The `,e.jsx(n.code,{children:"start"})," prop is not needed here."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Grid.Cell span={{ narrow: 4, medium: 4, wide: 3 }} />
`})}),`
`,e.jsx(n.h3,{id:"preview-cards",children:"Preview cards"}),`
`,e.jsxs(n.p,{children:[`Index pages such as news overviews or search results use Cards as well for navigation.
They usually do include the image of the target content.
These layouts require `,e.jsx(n.strong,{children:"4 columns"})," for each Card, which can be achieved with a single spanning value:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Grid.Cell span={4} />
`})}),`
`,e.jsx(n.h2,{id:"related-components",children:"Related components"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"/docs/components-navigation-breadcrumb--docs",children:"Breadcrumb"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"/docs/components-layout-grid--docs",children:"Grid"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"/docs/components-containers-page-footer--docs",children:"Page Footer"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"/docs/components-containers-page-header--docs",children:"Page Header"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"/docs/components-containers-page--docs",children:"Page"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"/docs/components-navigation-skip-link--docs",children:"Skip Link"})}),`
`]})]})}function l(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{l as default};
