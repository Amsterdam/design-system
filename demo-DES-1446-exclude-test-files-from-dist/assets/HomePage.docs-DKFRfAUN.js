import{j as e}from"./iframe-Cr4_djmq.js";import{useMDXComponents as o}from"./index-EpDp1Hna.js";import{M as r}from"./blocks-BTu5yVBU.js";import{H as t}from"./HomePage.stories-Dpo3yfbh.js";import"./index-CPZnO7L9.js";import"./config-BX5J1jL2.js";import"./PageFooter.stories-aJPNCadp.js";import"./Overlap.stories-DdDwaUh7.js";import"./HomeNews-DOwgnEsQ.js";/*@license CC0-1.0*/function a(i){const n={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...o(),...i.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(r,{of:t}),`
`,e.jsx(n.h1,{id:"home-page",children:"Home page"}),`
`,e.jsx(n.p,{children:"The starting page of an application generally provides a broad overview of subjects, common tasks, and recent articles."}),`
`,e.jsx(n.h2,{id:"layout",children:"Layout"}),`
`,e.jsx(n.p,{children:"A typical layout for a homepage:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Page>
  <SkipLink href="#inhoud">Direct naar inhoud</SkipLink>
  <PageHeader />
  <main id="inhoud">
    <Overlap>
      <Search />
    </Overlap>
    <Grid>
      <AppComponent1 />
      <AppComponent2 />
      <AppComponent3 />
    </Grid>
  </main>
  <PageFooter>
    <Grid />
  </PageFooter>
</Page>
`})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"The Skip Link prevents users from having to pass all preceding navigation links."}),`
`,e.jsx(n.li,{children:"The Page container sets a maximum width for the entire page."}),`
`,e.jsx(n.li,{children:"The Grid divides the available width into 4, 8, or 12 columns."}),`
`,e.jsx(n.li,{children:"The Page Header shows the logo and menus for the application."}),`
`,e.jsx(n.li,{children:`The main element wraps everything between Page Header and Page Footer.
It carries an id for the skip link to target.`}),`
`,e.jsx(n.li,{children:`An Overlap stacks a Search Field on a background Image.
It is as wide as the Grid, hence it is a sibling of it.`}),`
`,e.jsx(n.li,{children:"Other components in the main area are laid out on a Grid again."}),`
`,e.jsx(n.li,{children:`The Page Footer contains its own Grid.
This allows its background colour to stretch to the Page’s width.`}),`
`]}),`
`,e.jsx(n.h2,{id:"headings",children:"Headings"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:`If there is no single, most prominent heading for the home page, add a visually hidden level 1 heading with a text like ‘Homepage van (name of the organisation)’.
Assign level 2 and a size of ‘level-1’ to the visible headings.`}),`
`,e.jsx(n.li,{children:"Use the default size of ‘level-3’ headings in Cards and set their appropriate levels."}),`
`,e.jsx(n.li,{children:"Do the same for blocks consisting of Heading, Paragraph, Standalone Link and Link List."}),`
`]}),`
`,e.jsx(n.h2,{id:"spacing",children:"Spacing"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"In Grids of Cards, use a large vertical gap."}),`
`]})]})}function u(i={}){const{wrapper:n}={...o(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(a,{...i})}):a(i)}export{u as default};
