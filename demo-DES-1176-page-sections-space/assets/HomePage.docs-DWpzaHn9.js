import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as r}from"./index-1Ha5aU2j.js";import{M as t}from"./index-X0B1sl5c.js";import{H as a}from"./HomePage.stories-DmD-kE7e.js";import"./index-yBjzXJbu.js";import"./index-C0MU9AHG.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BnWTW_4p.js";import"./index-fNjTmf9T.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index.esm-B-KcSkYB.js";import"./clsx-B-dksMZM.js";import"./index.esm-DvoLfDtE.js";import"./Overlap.stories-aJnFUVYv.js";import"./config-UYxlsZ7m.js";import"./Footer.stories-Ce4917RY.js";/*@license CC0-1.0*/function o(i){const n={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...r(),...i.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(t,{of:a}),`
`,e.jsx(n.h1,{id:"home-page",children:"Home page"}),`
`,e.jsx(n.p,{children:"The starting page of an application generally provides a broad overview of subjects, common tasks, and recent articles."}),`
`,e.jsx(n.h2,{id:"layout",children:"Layout"}),`
`,e.jsx(n.p,{children:"A typical layout for a homepage:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Page>
  <SkipLink href="#main">Direct naar inhoud</SkipLink>
  <PageGrid>
    <PageHeader />
  </PageGrid>
  <PageBody as="main" id="main">
    <Overlap>
      <Search />
    </Overlap>
    <PageGrid>
      <AppComponent1 />
      <AppComponent2 />
      <AppComponent3 />
    </PageGrid>
  </PageBody>
  <PageFooter>
    <PageGrid />
  </PageFooter>
</Page>
`})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"The Skip Link prevents users from having to pass all preceding navigation links."}),`
`,e.jsx(n.li,{children:"The Screen component sets a maximum width for the entire page."}),`
`,e.jsx(n.li,{children:"The Grid divides the available width into 4, 8, or 12 columns."}),`
`,e.jsx(n.li,{children:"The Header shows the logo and menus for the application."}),`
`,e.jsx(n.li,{children:`The main element wraps everything between Header and Footer.
It carries an id for the skip link to target.`}),`
`,e.jsx(n.li,{children:`An Overlap stacks a Search Field on a background Image.
It is as wide as the Grid, hence it is a sibling of it.`}),`
`,e.jsx(n.li,{children:"Other components in the main area are laid out on a Grid again."}),`
`,e.jsx(n.li,{children:`The Footer contains its own Grid.
This allows its background colour to stretch to the Screen’s width.`}),`
`]})]})}function G(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(o,{...i})}):o(i)}export{G as default};
