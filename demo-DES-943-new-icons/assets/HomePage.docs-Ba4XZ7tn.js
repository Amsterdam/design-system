import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as o}from"./index-CxbY7dAs.js";import{M as t}from"./index-CMhTqWrX.js";import{H as a}from"./HomePage.stories-BSdc08Oq.js";import"./index-yBjzXJbu.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-sefJnpUQ.js";import"./index-fNjTmf9T.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index.esm-CKUoi3R8.js";import"./clsx-B-dksMZM.js";import"./index.esm-BRYoeV1b.js";import"./Overlap.stories-C6zGumaA.js";import"./config-Dngb-OHG.js";import"./PageFooter.stories-DisWodSK.js";/*@license CC0-1.0*/function r(i){const n={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...o(),...i.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(t,{of:a}),`
`,e.jsx(n.h1,{id:"home-page",children:"Home page"}),`
`,e.jsx(n.p,{children:"The starting page of an application generally provides a broad overview of subjects, common tasks, and recent articles."}),`
`,e.jsx(n.h2,{id:"layout",children:"Layout"}),`
`,e.jsx(n.p,{children:"A typical layout for a homepage:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Screen>
  <SkipLink href="#main">Direct naar inhoud</SkipLink>
  <Grid>
    <PageHeader />
  </Grid>
  <main id="main">
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
</Screen>
`})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"The Skip Link prevents users from having to pass all preceding navigation links."}),`
`,e.jsx(n.li,{children:"The Screen component sets a maximum width for the entire page."}),`
`,e.jsx(n.li,{children:"The Grid divides the available width into 4, 8, or 12 columns."}),`
`,e.jsx(n.li,{children:"The Page Header shows the logo and menus for the application."}),`
`,e.jsx(n.li,{children:`The main element wraps everything between Page Header and Page Footer.
It carries an id for the skip link to target.`}),`
`,e.jsx(n.li,{children:`An Overlap stacks a Search Field on a background Image.
It is as wide as the Grid, hence it is a sibling of it.`}),`
`,e.jsx(n.li,{children:"Other components in the main area are laid out on a Grid again."}),`
`,e.jsx(n.li,{children:`The Page Footer contains its own Grid.
This allows its background colour to stretch to the Screen’s width.`}),`
`]})]})}function T(i={}){const{wrapper:n}={...o(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(r,{...i})}):r(i)}export{T as default};
