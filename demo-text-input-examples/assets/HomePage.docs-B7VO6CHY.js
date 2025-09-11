import{j as e}from"./iframe-MLxmE8sg.js";import{useMDXComponents as a}from"./index-BTfC5AhC.js";import{M as r}from"./blocks-BMOM-CBI.js";import{H as t}from"./HomePage.stories-CGchYOU8.js";import"./index-Cd5cKeO_.js";import"./HomeNews-DXnbDfAi.js";import"./Overlap.stories-nyeZ9eYM.js";import"./config-CpkgOyXJ.js";import"./PageFooter.stories-DQFsjbY2.js";/*@license CC0-1.0*/function o(i){const n={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...a(),...i.components};return e.jsxs(e.Fragment,{children:[`
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
`]})]})}function u(i={}){const{wrapper:n}={...a(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(o,{...i})}):o(i)}export{u as default};
