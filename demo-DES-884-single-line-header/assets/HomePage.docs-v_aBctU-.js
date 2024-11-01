import{j as n}from"./jsx-runtime-BlAj40OV.js";import{useMDXComponents as r}from"./index-BI1Biiay.js";import{ae as t}from"./index-BWeAxM9m.js";import{H as a}from"./HomePage.stories-Cna7veXn.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-Dj8r9eGQ.js";import"../sb-preview/runtime.js";import"./index-Cf-03bMR.js";import"./index-D-8MO0q_.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";import"./index.esm-BagDMI_g.js";import"./clsx-B-dksMZM.js";import"./index.esm-Dp89hN-D.js";import"./Overlap.stories-Bf_s8oe8.js";import"./config-BgcbBjmr.js";import"./MegaMenu.stories-D2yNr-vl.js";import"./MegaMenuListCategory-EjYItpUq.js";import"./Footer.stories-UXuDW7i5.js";import"./PageMenu.stories-0Zef4vM_.js";import"./Icon-msbkstIT.js";import"./Spotlight-IssvtslZ.js";/*@license CC0-1.0*/function o(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...r(),...i.components};return n.jsxs(n.Fragment,{children:[`
`,`
`,n.jsx(t,{of:a}),`
`,n.jsx(e.h1,{id:"home-page",children:"Home page"}),`
`,n.jsx(e.p,{children:"The starting page of an application generally provides a broad overview of subjects, common tasks, and recent articles."}),`
`,n.jsx(e.h2,{id:"layout",children:"Layout"}),`
`,n.jsx(e.p,{children:"A typical layout for a homepage:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<SkipLink href="#main">Direct naar inhoud</SkipLink>
<Screen maxWidth="wide">
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
`,n.jsx(e.li,{children:`The top part of the Footer contains its own Grid.
This allows its background colour to stretch to the Screen’s width.
The bottom part contains another Grid to wrap a Page Menu.`}),`
`]})]})}function M(i={}){const{wrapper:e}={...r(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(o,{...i})}):o(i)}export{M as default};