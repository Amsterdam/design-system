import{j as n}from"./jsx-runtime-j_jdvEMj.js";import{useMDXComponents as o}from"./index-BSj771as.js";import{ae as t}from"./index-BB7pjWyt.js";import{H as a}from"./HomePage.stories-5UYlrMUi.js";import"./index-B-o1Wr-g.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-2HWgpGC3.js";import"../sb-preview/runtime.js";import"./index-DolzVqEf.js";import"./index-D-8MO0q_.js";import"./index-CJyPbrN5.js";import"./index-DrFu-skq.js";import"./index.esm-fCr_kcCR.js";import"./clsx-B-dksMZM.js";import"./index.esm-DE9QoVc-.js";import"./Overlap.stories-CSFQyEIH.js";import"./config-CwxN0I7o.js";import"./PageMenu.stories-DryfQZuq.js";import"./Icon-D1obyjGa.js";import"./Footer.stories-CqpzBcNm.js";import"./Spotlight-DZdLn00J.js";/*@license CC0-1.0*/function r(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...o(),...i.components};return n.jsxs(n.Fragment,{children:[`
`,`
`,n.jsx(t,{of:a}),`
`,n.jsx(e.h1,{id:"home-page",children:"Home page"}),`
`,n.jsx(e.p,{children:"The starting page of an application generally provides a broad overview of subjects, common tasks, and recent articles."}),`
`,n.jsx(e.h2,{id:"layout",children:"Layout"}),`
`,n.jsx(e.p,{children:"A typical layout for a homepage:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<Screen>
  <SkipLink href="#main">Direct naar inhoud</SkipLink>
  <Grid>
    <Header />
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
  <Footer>
    <Grid />
  </Footer>
</Screen>
`})}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"The Skip Link prevents users from having to pass all preceding navigation links."}),`
`,n.jsx(e.li,{children:"The Screen component sets a maximum width for the entire page."}),`
`,n.jsx(e.li,{children:"The Grid divides the available width into 4, 8, or 12 columns."}),`
`,n.jsx(e.li,{children:"The Header shows the logo and menus for the application."}),`
`,n.jsx(e.li,{children:`The main element wraps everything between Header and Footer.
It carries an id for the skip link to target.`}),`
`,n.jsx(e.li,{children:`An Overlap stacks a Search Field on a background Image.
It is as wide as the Grid, hence it is a sibling of it.`}),`
`,n.jsx(e.li,{children:"Other components in the main area are laid out on a Grid again."}),`
`,n.jsx(e.li,{children:`The Footer contains its own Grid.
This allows its background colour to stretch to the Screen’s width.`}),`
`]})]})}function F(i={}){const{wrapper:e}={...o(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(r,{...i})}):r(i)}export{F as default};
