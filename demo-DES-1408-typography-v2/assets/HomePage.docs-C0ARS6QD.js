import{j as e}from"./iframe-BNwChWOI.js";import{useMDXComponents as r}from"./index-CdlyAR8l.js";import{M as o}from"./blocks-C1DKW969.js";import{H as t}from"./HomePage.stories-mPzSokwl.js";import"./index-87krapLu.js";import"./HomeNews-D2epmc6u.js";import"./Overlap.stories-DD8IAT0t.js";import"./config-D-Q6SWh4.js";import"./PageFooter.stories-BSEJsAqV.js";/*@license CC0-1.0*/function a(i){const n={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...r(),...i.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(o,{of:t}),`
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
`,e.jsx(n.li,{children:"If there is no single largest heading, use level 2 Headings with a size of ‘level 1’."}),`
`,e.jsx(n.li,{children:"Use the default size 3 headings in Cards and set the appropriate level."}),`
`,e.jsx(n.li,{children:"Do the same for compositions of Heading, Paragraph, Standalone Link and Link List."}),`
`]}),`
`,e.jsx(n.h2,{id:"spacing",children:"Spacing"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"In Grids of Cards, use a large vertical gap."}),`
`]})]})}function u(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(a,{...i})}):a(i)}export{u as default};
