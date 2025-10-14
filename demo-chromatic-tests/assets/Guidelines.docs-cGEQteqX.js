import{j as e}from"./iframe-DcGXUi--.js";import{useMDXComponents as s}from"./index-BJHh_Iar.js";import{M as d}from"./blocks-BEIsG8Dy.js";import"./preload-helper-PPVm8Dsz.js";import"./index-wdjfEn-r.js";/*@license CC0-1.0*/function r(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(d,{title:"Pages/Guidelines"}),`
`,e.jsx(n.h1,{id:"guidelines",children:"Guidelines"}),`
`,e.jsx(n.p,{children:"This page highlights notable patterns and best practices for creating pages with the Design System."}),`
`,e.jsx(n.p,{children:`It’s a living document that we’ll update as we go.
Please share your experiences, and we’ll add them here to help others.`}),`
`,e.jsx(n.h2,{id:"page-structure",children:"Page structure"}),`
`,e.jsx(n.p,{children:"The most general structure for a page is:"}),`
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
  <PageFooter />
</Page>
`})}),`
`,e.jsx(n.h2,{id:"common-grid-configurations",children:"Common Grid configurations"}),`
`,e.jsxs(n.p,{children:[`Everything on the page is wrapped in a Grid Cell.
Its `,e.jsx(n.code,{children:"span"})," and ",e.jsx(n.code,{children:"start"})," props let you define where all sections go on the page; in all three variants of the Grid (4, 8, and 12 columns)."]}),`
`,e.jsx(n.p,{children:"Some typical page sections always use the same values:"}),`
`,e.jsx(n.h3,{id:"content-page-header",children:"Content page header"}),`
`,e.jsx(n.p,{children:`The header of a content page contains the Heading, date, and lead paragraph.
It has 8 columns in the wide Grid.`}),`
`,e.jsx(n.p,{children:"Breadcrumbs have their own Grid above this section, with the same Cell configuration."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"span={{ narrow: 4, medium: 6, wide: 8 }}"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"start={{ narrow: 1, medium: 1, wide: 2 }}"})}),`
`]}),`
`,e.jsx(n.h3,{id:"content-page-body",children:"Content page body"}),`
`,e.jsx(n.p,{children:`The body of a content page contains the main text.
It has 7 columns in the wide Grid to limit the length of running text.`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"span={{ narrow: 4, medium: 5, wide: 7 }}"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"start={{ narrow: 1, medium: 2, wide: 3 }}"})}),`
`]}),`
`,e.jsx(n.h3,{id:"two-column-layout",children:"Two-column layout"}),`
`,e.jsx(n.p,{children:"Two sections, each with a Header, a Paragraph, and a Standalone Link, can be placed side by side, e.g. in a Spotlight."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"span={{ narrow: 4, medium: 4, wide: 6 }}"})}),`
`]}),`
`,e.jsxs(n.p,{children:[`On a navigation page, these sections contain Link Lists and are a bit narrower.
In a loop, this requires some extra calculations to get the `,e.jsx(n.code,{children:"start"})," value right."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"span={{ narrow: 4, medium: 4, wide: 5 }}"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"start={{ narrow: 1, medium: index % 2 === 0 ? 1 : 5, wide: index % 2 === 0 ? 2 : 7 }}"})}),`
`]}),`
`,e.jsx(n.h3,{id:"card-grids",children:"Card grids"}),`
`,e.jsxs(n.p,{children:[`A set of cards can be displayed in a grid, in either three or four columns.
As the `,e.jsx(n.code,{children:"spans"})," fit all variants of the Grid, a ",e.jsx(n.code,{children:"start"})," value can be omitted."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"span={4}"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"span={{ narrow: 4, medium: 4, wide: 3 }}"})}),`
`]}),`
`,e.jsx(n.h2,{id:"related-components",children:"Related components"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"/docs/components-containers-page--docs",children:"Page"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"/docs/components-containers-page-header--docs",children:"Page Header"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"/docs/components-containers-page-footer--docs",children:"Page Footer"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"/docs/components-navigation-skip-link--docs",children:"Skip Link"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"/docs/components-navigation-breadcrumb--docs",children:"Breadcrumb"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"/docs/components-layout-grid--docs",children:"Grid"})}),`
`]})]})}function h(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(r,{...i})}):r(i)}export{h as default};
